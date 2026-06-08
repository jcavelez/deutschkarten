const express      = require("express");
const multer       = require("multer");
const cors         = require("cors");
const path         = require("path");
const fs           = require("fs");
const crypto       = require("crypto");
const { Pool }     = require("pg");
const bcrypt       = require("bcrypt");
const jwt          = require("jsonwebtoken");

const app       = express();
const MEDIA_DIR = "/data/media";
const PORT      = 3001;
const JWT_SECRET = process.env.JWT_SECRET || "change_me_in_production";
const SALT_ROUNDS = 10;

fs.mkdirSync(MEDIA_DIR, { recursive: true });

// ── DB ────────────────────────────────────────────────────────────────────────
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id            SERIAL PRIMARY KEY,
      username      TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      language      TEXT NOT NULL DEFAULT 'de',
      created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    ALTER TABLE users ADD COLUMN IF NOT EXISTS language TEXT NOT NULL DEFAULT 'de';

    CREATE TABLE IF NOT EXISTS cards (
      id                  TEXT NOT NULL,
      user_id             INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      german              TEXT NOT NULL,
      translation         TEXT NOT NULL,
      note                TEXT NOT NULL DEFAULT '',
      card_type           TEXT NOT NULL DEFAULT 'type1',
      image_url           TEXT,
      audio_url           TEXT,
      example             TEXT NOT NULL DEFAULT '',
      example_translation TEXT NOT NULL DEFAULT '',
      repetitions         INTEGER NOT NULL DEFAULT 0,
      easiness            REAL NOT NULL DEFAULT 2.5,
      interval            INTEGER NOT NULL DEFAULT 0,
      next_review         BIGINT NOT NULL DEFAULT 0,
      last_grade          INTEGER,
      created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      PRIMARY KEY (id, user_id)
    );

    CREATE TABLE IF NOT EXISTS study_stats (
      user_id        INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
      day            TEXT,                          -- last active local day 'YYYY-MM-DD'
      today_count    INTEGER NOT NULL DEFAULT 0,    -- reviews done on that day
      current_streak INTEGER NOT NULL DEFAULT 0,
      longest_streak INTEGER NOT NULL DEFAULT 0
    );
  `);
  console.log("DB schema ready");
}

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:8080" }));
app.use(express.json({ limit: "50mb" }));

function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "No autenticado." });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Sesión inválida." });
  }
}

// ── Auth ──────────────────────────────────────────────────────────────────────
// Public registration is closed — users are created manually via
// backend/scripts/create-user.js.
app.post("/auth/register", (req, res) => {
  res.status(403).json({ error: "El registro está cerrado." });
});

app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body || {};
  if (!username?.trim() || !password)
    return res.status(400).json({ error: "Usuario y contraseña requeridos." });
  try {
    const result = await pool.query(
      "SELECT id, username, password_hash, language FROM users WHERE LOWER(username) = LOWER($1)",
      [username.trim()]
    );
    const user = result.rows[0];
    if (!user || !(await bcrypt.compare(password, user.password_hash)))
      return res.status(401).json({ error: "Credenciales incorrectas." });
    const token = jwt.sign({ id: user.id, username: user.username, language: user.language }, JWT_SECRET, { expiresIn: "30d" });
    res.json({ token, username: user.username, language: user.language });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al iniciar sesión." });
  }
});

app.get("/auth/me", requireAuth, (req, res) => {
  res.json({ username: req.user.username, language: req.user.language || 'de' });
});

// ── Cards ─────────────────────────────────────────────────────────────────────
app.get("/cards", requireAuth, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, german, translation, note, card_type AS "cardType",
              image_url AS "imageUrl", audio_url AS "audioUrl",
              example, example_translation AS "exampleTranslation",
              repetitions, easiness, interval,
              next_review AS "nextReview", last_grade AS "lastGrade"
       FROM cards WHERE user_id = $1 ORDER BY created_at ASC`,
      [req.user.id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al cargar tarjetas." });
  }
});

app.put("/cards", requireAuth, async (req, res) => {
  const cards = req.body;
  if (!Array.isArray(cards)) return res.status(400).json({ error: "Se esperaba un array." });

  // Safety net: an empty payload would DELETE the user's whole deck. Refuse it
  // unless the client explicitly opts in (genuine "delete all"), so a future
  // frontend bug can't silently wipe a deck.
  if (cards.length === 0 && req.query.allowEmpty !== "true")
    return res.status(400).json({ error: "Payload vacío sin allowEmpty; mazo no modificado." });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM cards WHERE user_id = $1", [req.user.id]);
    for (const c of cards) {
      await client.query(
        `INSERT INTO cards
           (id, user_id, german, translation, note, card_type, image_url, audio_url,
            example, example_translation, repetitions, easiness, interval, next_review, last_grade)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)`,
        [
          c.id, req.user.id,
          c.german, c.translation, c.note || "",
          c.cardType || "type1",
          c.imageUrl || null, c.audioUrl || null,
          c.example || "", c.exampleTranslation || "",
          c.repetitions ?? 0, c.easiness ?? 2.5, c.interval ?? 0,
          c.nextReview ?? Date.now(), c.lastGrade ?? null,
        ]
      );
    }
    await client.query("COMMIT");
    res.json({ ok: true, count: cards.length });
  } catch (err) {
    await client.query("ROLLBACK");
    console.error(err);
    res.status(500).json({ error: "Error al guardar tarjetas." });
  } finally {
    client.release();
  }
});

// ── Study stats (streak + per-day count) ──────────────────────────────────────
// Client-authoritative, like cards: the frontend computes the values (it knows
// the user's local day) and we just persist them.
app.get("/stats", requireAuth, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT day, today_count AS "todayCount",
              current_streak AS "currentStreak", longest_streak AS "longestStreak"
       FROM study_stats WHERE user_id = $1`,
      [req.user.id]
    );
    res.json(result.rows[0] || { day: null, todayCount: 0, currentStreak: 0, longestStreak: 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al cargar estadísticas." });
  }
});

app.put("/stats", requireAuth, async (req, res) => {
  const { day, todayCount, currentStreak, longestStreak } = req.body || {};
  try {
    await pool.query(
      `INSERT INTO study_stats (user_id, day, today_count, current_streak, longest_streak)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (user_id) DO UPDATE SET
         day = EXCLUDED.day,
         today_count = EXCLUDED.today_count,
         current_streak = EXCLUDED.current_streak,
         longest_streak = EXCLUDED.longest_streak`,
      [req.user.id, day || null, todayCount ?? 0, currentStreak ?? 0, longestStreak ?? 0]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al guardar estadísticas." });
  }
});

// ── Media ─────────────────────────────────────────────────────────────────────
app.use("/media", express.static(MEDIA_DIR));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, MEDIA_DIR),
  filename: (req, file, cb) => {
    const ext  = path.extname(file.originalname).toLowerCase();
    const hash = crypto.randomBytes(8).toString("hex");
    cb(null, `${hash}${ext}`);
  },
});

const ALLOWED = {
  image: ["image/jpeg", "image/png", "image/webp", "image/gif"],
  audio: ["audio/mpeg", "audio/mp3", "audio/ogg", "audio/wav", "audio/webm", "audio/m4a", "audio/x-m4a"],
};

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allAllowed = [...ALLOWED.image, ...ALLOWED.audio];
    if (allAllowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error(`Tipo no permitido: ${file.mimetype}`));
  },
});

app.post("/upload", requireAuth, upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No se recibió archivo." });
  const type = ALLOWED.image.includes(req.file.mimetype) ? "image" : "audio";
  res.json({ url: `/media/${req.file.filename}`, type });
});

app.delete("/media/:filename", requireAuth, (req, res) => {
  const filename = path.basename(req.params.filename);
  const filepath = path.join(MEDIA_DIR, filename);
  if (!fs.existsSync(filepath)) return res.status(404).json({ error: "Archivo no encontrado." });
  fs.unlinkSync(filepath);
  res.json({ ok: true });
});

// ── Explain ───────────────────────────────────────────────────────────────────
app.post("/explain", requireAuth, async (req, res) => {
  const { german, translation, note } = req.body;
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "ANTHROPIC_API_KEY no configurada." });

  const langName = { de: "alemán", fr: "francés" }[req.user.language] || "alemán";
  const prompt = `Eres un tutor de ${langName}. Explica esta tarjeta de forma concisa y útil.
Palabra/frase en ${langName}: "${german}"
Traducción: "${translation}"
${note ? `Nota del estudiante: "${note}"` : ""}

Explica: etimología o lógica de la palabra, uso en contexto, cualquier truco mnemónico útil, y 1-2 ejemplos cortos. Responde en español. Sé directo y denso en información, no verbose.`;

  try {
    const apiRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const data = await apiRes.json();
    if (!apiRes.ok) {
      // Upstream (Anthropic) failure — surface as a gateway error so it isn't
      // confused with this app's own 401/auth responses.
      console.error("Anthropic API error:", apiRes.status, data.error?.message);
      return res.status(502).json({ error: data.error?.message || "Error del servicio de IA." });
    }
    const text = data.content?.find(b => b.type === "text")?.text || "Sin respuesta.";
    res.json({ text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── Health ────────────────────────────────────────────────────────────────────
app.get("/health", (req, res) => res.json({ ok: true }));

// ── Start ─────────────────────────────────────────────────────────────────────
initDb()
  .then(() => app.listen(PORT, "0.0.0.0", () => console.log(`API lista en :${PORT}`)))
  .catch(err => { console.error("Error iniciando DB:", err); process.exit(1); });
