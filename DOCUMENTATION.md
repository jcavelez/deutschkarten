# Documentation — SprachenKarten (deutschkarten)

**Functional** and **technical** documentation of the application.
🇪🇸 Versión en español: [DOCUMENTACION.md](DOCUMENTACION.md).

---

## 1. What is it?

SprachenKarten is a personal **spaced-repetition flashcard** app for learning
**German** or **French** from Spanish. Each user has their own deck and study
language. The **SM-2** algorithm decides when each card is due again.

Public sign-up is closed: users are created manually.

---

## 2. Functional documentation

### 2.1 Card types

| Name      | `cardType` | How it works |
|-----------|------------|--------------|
| Image     | `type1`    | Shows an image; flip to reveal the word. Needs an image. |
| Example   | `type2`    | Word + example sentence; flip to see the translation. |
| Translate | `type4`    | Shows Spanish; the user **types** the word and it is checked. |
| Fill-in   | `type5`    | Sentence with a `___` blank; the user **types** the missing word. |
| Article   | `type6`    | The user **picks** the article/gender (`le/la/l'` or `der/die/das`). |

> There is no `type3` (historical gap).

### 2.2 Studying (Review)

- Only **due** cards (next-review date reached) appear, in random order.
- Types 1 & 2: flip-card animation; then you grade 0–5.
- Types 4 & 5: you type the answer (**case-insensitive**, trimmed validation),
  or use "Reveal"; then you grade.
- Type 6: you pick the article; auto-graded (correct = 5, wrong = 1).
- ▶ button to pronounce (see 2.6) and "✦ Explain with AI" (see 2.7).
- **Grading → SM-2:** the grade adjusts the interval to the next review.

### 2.3 End-of-day celebration

Grading the **last** due card of the day shows a congratulations overlay
(confetti, 🎉, today's review count and streak). It only fires on completion,
never when opening an already-empty deck.

### 2.4 Streak and daily count

- **Today's reviews:** counted and persisted; they survive across sessions on
  the same day.
- **Streak (🔥):** **consecutive** days with at least one review. Skipping a day
  resets it to 1. The all-time **record** is kept too. The day boundary follows
  the user's **local timezone**.
- Shown in the celebration and in the **Estado** (status) view.

### 2.5 Creating and editing cards

- **One at a time:** form in **Agregar** (Add). Each type shows only the fields
  it needs (e.g. image only for t1/t5/t6; example/example-translation per type).
- **Bulk import (JSON):** paste an array of cards. Detailed format guide in
  [CREAR-DECK.md](CREAR-DECK.md).
- **Edit:** from the list, a modal with the same per-type fields.
- **Media:** image and audio via **file upload** or **URL**.

### 2.6 Pronunciation (TTS)

- Uses the browser **Web Speech API** (OS voices), in the user's language
  (`fr-FR` / `de-DE`).
- If a card has `audioUrl`, it plays **that audio**; otherwise it synthesizes
  the word.
- Quality depends on the voices installed on the device.

### 2.7 AI explanation

A button asks the Anthropic API (Claude Haiku model) for a short explanation of
the card (etymology, usage, mnemonics, examples) in Spanish.

### 2.8 Status view

A streak banner (current, today, record) plus a histogram of the deck by how
soon each card is due (New, Today, Tomorrow, 3–7, 8–30, 30+ days), and KPIs
(due today, mature ≥21 days, average easiness).

---

## 3. Technical documentation

### 3.1 Architecture

```
┌──────────────┐      HTTPS/JSON      ┌──────────────┐      SQL      ┌────────────┐
│  Frontend    │ ───────────────────▶ │  Backend     │ ────────────▶ │ PostgreSQL │
│ React + Vite │   Bearer JWT         │ Express/Node │               │  (Neon)    │
│ (nginx)      │ ◀─────────────────── │              │ ◀──────────── │            │
└──────────────┘                      └──────┬───────┘               └────────────┘
                                             │ files
                                             ▼
                                      /data/media (volume)
                                             │
                                      Anthropic API (explanations)
```

- **Frontend:** React 18 + Vite. The whole UI lives in `frontend/src/App.jsx`
  (styles are an injected CSS string). Served statically with **nginx**.
- **Backend:** Node + Express (`backend/server.js`). PostgreSQL via `pg`.
- **Database:** PostgreSQL (Neon in production).
- **Containers:** `docker-compose.yml` with two services (`api`, `frontend`).

### 3.2 Repository layout

```
backend/
  server.js              Express API (auth, cards, stats, media, explain)
  scripts/create-user.js Manually create users
  Dockerfile
frontend/
  src/App.jsx            The whole app (components + styles)
  src/main.jsx
  index.html
  public/favicon.svg
  dist/                  Production build (committed)
  Dockerfile             Vite build + nginx
docker-compose.yml
CREAR-DECK.md            Deck-creation guide
```

### 3.3 Authentication

- Username/password login → signed **JWT** (valid 30 days), stored in
  `localStorage` and sent as `Authorization: Bearer <token>`.
- Passwords hashed with **bcrypt** (10 salt rounds).
- Username comparison is **case-insensitive** (`LOWER(username)`).
- Public registration disabled; create users via:
  `node backend/scripts/create-user.js <username> <password> <de|fr>`
  (requires `DATABASE_URL`).

### 3.4 Data model

**users**: `id`, `username` (unique), `password_hash`, `language` (`de|fr`),
`created_at`.

**cards** (PK `(id, user_id)`): `german`, `translation`, `note`, `card_type`,
`image_url`, `audio_url`, `example`, `example_translation`, plus the SM-2 fields
`repetitions`, `easiness`, `interval`, `next_review` (epoch ms), `last_grade`.

**study_stats** (PK `user_id`): `day` (local `YYYY-MM-DD`), `today_count`,
`current_streak`, `longest_streak`.

All tables are created on startup with `CREATE TABLE IF NOT EXISTS`.

### 3.5 Client-authoritative pattern

The **client** owns the logic (SM-2 and the streak/count, which depend on local
time); the backend only **persists**. Cards are saved by PUT-ing the full array
(~800 ms debounce + flush on `beforeunload`/logout); stats the same way. A
backend safeguard rejects an empty-deck PUT unless `?allowEmpty=true`, so the
deck can't be wiped by accident.

### 3.6 API

All require `Authorization: Bearer <token>` except login and health.

| Method | Path | Description |
|--------|------|-------------|
| POST | `/auth/login` | Login → `{ token, username, language }` |
| POST | `/auth/register` | Closed (403) |
| GET  | `/auth/me` | Current user and language |
| GET  | `/cards` | The user's deck |
| PUT  | `/cards` | Replace the deck (`?allowEmpty=true` to empty) |
| GET  | `/stats` | Streak and daily count |
| PUT  | `/stats` | Upsert stats |
| POST | `/upload` | Upload image/audio (multipart) → `{ url, type }` |
| DELETE | `/media/:filename` | Delete a media file |
| GET  | `/media/:filename` | Serve files (static) |
| POST | `/explain` | AI explanation → `{ text }` |
| GET  | `/health` | `{ ok: true }` |

### 3.7 Media

- Upload via **multer**, max **20 MB**.
- Images: `jpeg, png, webp, gif`. Audio: `mpeg/mp3, ogg, wav, webm, m4a`.
- Stored in `/data/media` (Docker volume `media_data`).
- `imageUrl`/`audioUrl` may be a local path (`/media/...`) or an external URL
  (`http(s)://...`).

### 3.8 Pronunciation and celebration (frontend)

- TTS: browser voices load asynchronously; they are **cached** and refreshed on
  `voiceschanged`, picking the best voice for the language (exact match → same
  language).
- Celebration and confetti: pure CSS (no libraries).

### 3.9 Environment variables

| Variable | Service | Purpose |
|----------|---------|---------|
| `DATABASE_URL` | api | PostgreSQL connection (Neon includes `sslmode=require`) |
| `JWT_SECRET` | api | Token signing (change it in production!) |
| `ANTHROPIC_API_KEY` | api | AI explanations |
| `CORS_ORIGIN` | api | Allowed origin (default `http://localhost:8080`) |
| `VITE_API_URL` | frontend (build) | API base URL (default `http://localhost:3001`) |

The API listens on port **3001**.

### 3.10 Local development

```bash
# Backend
cd backend && npm install
DATABASE_URL=... JWT_SECRET=... ANTHROPIC_API_KEY=... node server.js

# Frontend
cd frontend && npm install && npm run dev    # http://localhost:5173
```

### 3.11 Deployment (Docker)

```bash
docker-compose up -d --build
```

- `frontend` is **rebuilt from source** with Vite (`RUN npm run build`) and
  served by nginx on port **8080**.
- `api` listens on **3001**; the `media_data` volume persists files.
- Tables are created/updated automatically when the API starts.

> **Important:** always use `--build` when deploying; without it Docker reuses
> the previous image and serves stale code. The committed `frontend/dist` is
> kept in sync on every commit as a fallback.

---

## 4. References

- [CREAR-DECK.md](CREAR-DECK.md) — creating decks and importing JSON.
- [DOCUMENTACION.md](DOCUMENTACION.md) — Spanish version.
