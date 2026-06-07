import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";

function mediaUrl(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${API_BASE}${url}`;
}

// ── Web Speech ───────────────────────────────────────────────────────────────
// BCP-47 tags for speech synthesis, keyed by the app's language code.
const SPEECH_LANG = { de: "de-DE", fr: "fr-FR" };

// Definite articles shown on Type 6 (article) cards, by language. French keeps
// the elided "l'" so vowel-initial nouns still get a valid choice.
const ARTICLES = { de: ["der", "die", "das"], fr: ["le", "la", "l'"] };

// Language-specific labels and example placeholders for the Add form, so the UI
// matches the user's target language instead of always saying "alemán/DE".
const LANG_LABELS = {
  de: {
    name: "Alemán", code: "DE",
    wordPh: "z.B. der Schlüssel",
    blankWordPh: "z.B. Hund (solo la palabra)",
    exLabel: "Ejemplo en alemán",
    exPh: "Der Hund läuft schnell.",
    blankPh: "Der ___ läuft schnell.",
    bulkPh: `[\n  { "german": "der Hund", "translation": "el perro", "note": "masc." },\n  { "german": "die Katze", "translation": "la gata" }\n]`,
  },
  fr: {
    name: "Francés", code: "FR",
    wordPh: "p.ej. le chien",
    blankWordPh: "p.ej. chien (solo la palabra)",
    exLabel: "Ejemplo en francés",
    exPh: "Le chien court vite.",
    blankPh: "Le ___ court vite.",
    bulkPh: `[\n  { "german": "le chien", "translation": "el perro", "note": "masc." },\n  { "german": "la maison", "translation": "la casa" }\n]`,
  },
};

// Current language for pronunciation. Set from <App> so speak() stays callable
// from leaf components without threading the prop through every call site.
let speechLang = "de";
function setSpeechLang(code) { if (SPEECH_LANG[code]) speechLang = code; }

// Short descriptive name per card type, shown on form buttons and study badges.
const CARD_TYPE_NAMES = {
  type1: "Imagen",
  type2: "Ejemplo",
  type4: "Traducir",
  type5: "Completar",
  type6: "Artículo",
};

// Card-type options for the add/edit forms: short descriptive name + a tooltip
// explaining how each works. Tips adapt to the user's target language.
function getCardTypeOptions(language) {
  const L = LANG_LABELS[language] || LANG_LABELS.de;
  const articleHint = (ARTICLES[language] || ARTICLES.de).join(" / ");
  const tips = {
    type1: "Muestra una imagen; la tocas para voltear y ver la palabra. Requiere una URL de imagen.",
    type2: "Muestra la palabra con una frase de ejemplo; volteas para ver la traducción.",
    type4: `Te muestra el español y escribes la palabra en ${L.name.toLowerCase()}; corrige tu respuesta.`,
    type5: "Una frase con un hueco (___); escribes la palabra que falta.",
    type6: `Eliges el artículo/género correcto (${articleHint}).`,
  };
  return Object.keys(CARD_TYPE_NAMES).map(id => ({ id, name: CARD_TYPE_NAMES[id], tip: tips[id] }));
}

// Split a word like "der Hund" / "le chien" / "l'eau" into its leading article
// and the bare noun, picking the article set for the given language.
function parseArticle(word, language = "de") {
  const articles = ARTICLES[language] || ARTICLES.de;
  const raw = (word || "").trim();
  const lower = raw.toLowerCase();
  const correct = articles.find(a =>
    a.endsWith("'") ? lower.startsWith(a) : lower.startsWith(a + " ")
  ) || "";
  const bare = correct ? raw.slice(correct.length).trimStart() : raw;
  return { articles, correct, bare };
}

function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  const code = SPEECH_LANG[speechLang] || "de-DE";
  utt.lang = code;
  utt.rate = 0.9;
  // Prefer a voice matching the active language if available
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang.startsWith(code.slice(0, 2)));
  if (voice) utt.voice = voice;
  window.speechSynthesis.speak(utt);
}

// Pronounce a card: play its attached audio file if it has one, otherwise fall
// back to synthesized speech of the word.
function playCard(card) {
  if (!card) return;
  if (card.audioUrl) {
    window.speechSynthesis?.cancel();
    const audio = new Audio(mediaUrl(card.audioUrl));
    audio.play().catch(() => speak(card.german));
    return;
  }
  speak(card.german);
}

// ── SM-2 Algorithm ──────────────────────────────────────────────────────────
function sm2(card, grade) {
  let { repetitions, easiness, interval } = card;
  if (grade >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easiness);
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }
  easiness = Math.max(1.3, easiness + 0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  const nextReview = Date.now() + interval * 86400000;
  return { repetitions, easiness, interval, nextReview, lastGrade: grade };
}

function daysUntil(ts) {
  const d = Math.ceil((ts - Date.now()) / 86400000);
  return d <= 0 ? "Hoy" : d === 1 ? "Mañana" : `${d} días`;
}

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// ── Auth token (Bearer, stored in localStorage) ──────────────────────────────
const TOKEN_KEY = "dk_token";
const getToken   = () => localStorage.getItem(TOKEN_KEY);
const setToken   = (t) => localStorage.setItem(TOKEN_KEY, t);
const clearToken = () => localStorage.removeItem(TOKEN_KEY);

function authHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function apiFetch(path, opts = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...authHeaders(), ...(opts.headers || {}) },
    ...opts,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw Object.assign(new Error(err.error || res.statusText), { status: res.status });
  }
  return res.json();
}

async function loadCards() {
  return apiFetch("/cards");
}

async function saveCards(cards) {
  // An empty deck is destructive server-side, so it must opt in explicitly.
  // We only reach here with [] after the deck was genuinely loaded then emptied
  // by the user — the `loaded` guard blocks the startup race.
  const qs = cards.length === 0 ? "?allowEmpty=true" : "";
  return apiFetch(`/cards${qs}`, { method: "PUT", body: JSON.stringify(cards) });
}

// ── AI Explanation ──────────────────────────────────────────────
async function fetchExplanation(card) {
  return apiFetch("/explain", {
    method: "POST",
    body: JSON.stringify({ german: card.german, translation: card.translation, note: card.note || "" }),
  }).then(d => d.text);
}

// ── Media Upload ──────────────────────────────────────────────────────────────
async function uploadMedia(file) {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch(`${API_BASE}/upload`, { method: "POST", body: fd, headers: authHeaders() });
  if (!res.ok) throw new Error("Error al subir archivo.");
  return res.json();
}

async function deleteMedia(url) {
  const filename = url.split("/media/")[1];
  if (!filename) return;
  await fetch(`${API_BASE}/media/${filename}`, { method: "DELETE", headers: authHeaders() });
}

// ── Styles ──────────────────────────────────────────────────────────────────
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400;500&display=swap');`;

const css = `

  :root {
    --bg: #F0EAE0;
    --surface: #FDFBF7;
    --surface-alt: #F4E7D9;
    --border: #E2D6C5;
    --border-input: #D8C9B5;
    --text: #1F1B16;
    --text-2: #6B5D4A;
    --text-dim: #8A7A66;
    --text-faint: #A79683;
    --accent: #C8825B;
    --accent-soft: #F4E7D9;
    --danger: #B23B2E;
    --danger-hover: #8F2E23;
    --danger-soft: #F8EAE5;
    --ok: #5A7A4E;
    --ok-text: #4A6840;
    --ok-soft: #EBF0E5;
    --shadow-card: 0 12px 32px -10px rgba(60,40,20,.14), 0 3px 8px -3px rgba(60,40,20,.07);
    --shadow-soft: 0 3px 10px -3px rgba(60,40,20,.10), 0 1px 3px rgba(60,40,20,.05);
    --shadow-pop: 0 4px 12px -2px rgba(180,120,80,.45);
    --focus-ring: 0 0 0 3px rgba(200,130,91,0.18);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Mono', monospace;
    min-height: 100vh;
  }

  .app {
    max-width: 780px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    min-height: 100vh;
  }

  .header {
    position: relative;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid var(--border);
    padding-bottom: 1rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
  }

  .logo-flag {
    width: 28px;
    height: 19px;
    border-radius: 2px;
    overflow: hidden;
    flex-shrink: 0;
    box-shadow: 0 0 0 1px rgba(60,40,20,0.12);
  }

  .logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-style: italic;
    color: var(--accent);
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .logo-text span { color: var(--text); font-style: normal; }

  .nav {
    display: flex;
    gap: 0.25rem;
  }

  .nav-btn {
    background: none;
    border: none;
    color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0.4rem 0.75rem;
    border-radius: 2px;
    transition: color 0.2s, background 0.2s;
  }

  .nav-btn.active, .nav-btn:hover {
    color: var(--accent);
    background: var(--surface-alt);
  }

  .hamburger-btn { display: none; }

  /* ── Study View ── */
  .deck-empty {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--text-faint);
  }

  .deck-empty p { font-size: 0.8rem; line-height: 2; }
  .deck-empty strong { color: var(--accent); font-weight: 400; }

  .session-info {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.7rem;
    color: var(--text-faint);
    letter-spacing: 0.08em;
  }

  .session-info span { color: var(--text-2); }
  .session-info strong { color: var(--accent); }

  /* Flashcard */
  .card-scene {
    perspective: 1200px;
    height: 260px;
    margin-bottom: 1.5rem;
    cursor: pointer;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-inner.flipped { transform: rotateY(180deg); }

  .card-static {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: var(--shadow-card);
    background: var(--surface);
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
  }

  .card-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    box-shadow: var(--shadow-card);
    background: var(--surface);
    overflow: hidden;
  }

  .card-face.back {
    transform: rotateY(180deg);
    background: var(--surface-alt);
    box-shadow: var(--shadow-card);
  }

  .card-hint {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 0.6rem;
    color: var(--text-faint);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .card-word {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    color: var(--text);
    text-align: center;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .card-sub {
    font-size: 0.72rem;
    color: var(--text-faint);
    letter-spacing: 0.08em;
    text-align: center;
  }

  .card-translation {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.8rem;
    color: var(--accent);
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .card-note {
    font-size: 0.7rem;
    color: var(--text-dim);
    text-align: center;
    max-width: 80%;
    line-height: 1.6;
    margin-top: 0.75rem;
  }

  /* Grades */
  .grades {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.6rem;
    margin-bottom: 1rem;
  }

  .grade-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    padding: 0.7rem 0.4rem;
    box-shadow: var(--shadow-soft);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.16s ease, box-shadow 0.16s ease, background 0.2s;
    font-family: 'DM Mono', monospace;
  }

  .grade-btn:hover { background: var(--surface-alt); box-shadow: var(--shadow-card); transform: translateY(-2px); }

  .grade-num {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .grade-btn.g0 .grade-num { color: #B23B2E; }
  .grade-btn.g1 .grade-num { color: #C26A3A; }
  .grade-btn.g2 .grade-num { color: #B89020; }
  .grade-btn.g3 .grade-num { color: #8A9A3A; }
  .grade-btn.g4 .grade-num { color: #6A8A45; }
  .grade-btn.g5 .grade-num { color: #5A7A4E; }

  .grade-label {
    font-size: 0.55rem;
    color: var(--text-dim);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: center;
  }

  /* AI Explain */
  .explain-btn {
    width: 100%;
    padding: 0.65rem;
    background: none;
    border: 1px dashed var(--border-input);
    border-radius: 3px;
    color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    margin-bottom: 0.75rem;
  }

  .explain-btn:hover { color: var(--accent); border-color: var(--danger); }
  .explain-btn:disabled { opacity: 0.3; cursor: not-allowed; }

  .explanation {
    background: var(--surface-alt);
    border: 1px solid var(--border);
    border-radius: 3px;
    padding: 1.25rem 1.5rem;
    font-size: 0.78rem;
    line-height: 1.8;
    color: var(--text-2);
    white-space: pre-wrap;
    overflow-wrap: break-word;
    margin-bottom: 1rem;
  }

  /* ── Add Card View ── */
  .add-form {
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border-radius: 10px;
    padding: 2rem;
  }

  .form-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: var(--accent);
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  .field {
    margin-bottom: 1.25rem;
  }

  .field label {
    display: block;
    font-size: 0.65rem;
    color: var(--text-dim);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .field input, .field textarea {
    width: 100%;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.7rem 0.9rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.85rem;
    outline: none;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }

  .field input:focus, .field textarea:focus {
    border-color: var(--accent);
    box-shadow: var(--focus-ring);
  }

  .field textarea { resize: vertical; min-height: 80px; }

  .submit-btn {
    background: var(--danger);
    box-shadow: var(--shadow-pop);
    border-radius: 8px;
    color: #FFFFFF;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.75rem 2rem;
    cursor: pointer;
    transition: background 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease;
  }

  .submit-btn:hover { background: var(--danger-hover); transform: translateY(-2px); box-shadow: 0 8px 20px -4px rgba(178,59,46,0.35); }

  .success-msg {
    margin-top: 1rem;
    font-size: 0.7rem;
    color: var(--ok-text);
    letter-spacing: 0.08em;
  }

  /* ── List View ── */
  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1rem;
  }

  .list-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: var(--accent);
    font-style: italic;
  }

  .list-count {
    font-size: 0.65rem;
    color: var(--text-faint);
    letter-spacing: 0.1em;
  }

  .card-list { display: flex; flex-direction: column; gap: 0.4rem; }

  .list-item {
    display: grid;
    grid-template-columns: 30px 1fr auto auto;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 0.75rem;
    background: var(--surface);
    box-shadow: var(--shadow-soft);
    border-radius: 10px;
    transition: box-shadow 0.16s ease;
  }

  .list-item:hover { box-shadow: 0 6px 16px -4px rgba(60,40,20,.16); }

  .li-actions { display: flex; align-items: center; gap: 0.4rem; }

  .li-german {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    color: var(--text);
  }

  .li-trans {
    font-size: 0.75rem;
    color: var(--text-2);
    font-style: italic;
  }

  .li-next {
    font-size: 0.65rem;
    color: var(--text-dim);
    letter-spacing: 0.06em;
    text-align: right;
    white-space: nowrap;
  }

  .li-next.due { color: var(--danger); }

  .delete-btn {
    background: none;
    border: none;
    color: var(--text-faint);
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
    border-radius: 6px;
    transition: color 0.2s;
    font-family: 'DM Mono', monospace;
  }

  .delete-btn:hover { color: var(--danger); }

  .noise {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.015;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
    z-index: 9999;
  }


  /* ── Add Tabs ── */
  .add-tabs {
    display: flex;
    gap: 0;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--border);
  }

  .add-tab {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    padding: 0.5rem 1rem;
    color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }

  .add-tab.active {
    color: var(--accent);
    border-bottom-color: var(--accent);
  }

  .bulk-textarea {
    width: 100%;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.7rem 0.9rem;
    color: var(--text-2);
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    outline: none;
    resize: vertical;
    min-height: 160px;
    line-height: 1.7;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }

  .bulk-textarea:focus { border-color: var(--accent); box-shadow: var(--focus-ring); }

  .bulk-replace-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.68rem;
    color: var(--text-dim);
    letter-spacing: 0.04em;
    cursor: pointer;
    margin-bottom: 0.25rem;
  }
  .bulk-replace-row input { accent-color: var(--danger); cursor: pointer; }
  .bulk-replace-row:hover span { color: var(--text-2); }

  .preview-card-btn {
    background: none;
    border: none;
    color: var(--text-faint);
    cursor: pointer;
    padding: 0.2rem 0.4rem;
    border-radius: 6px;
    transition: color 0.2s;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  .preview-card-btn:hover { color: var(--accent); }

  .bulk-schema {
    font-size: 0.65rem;
    color: var(--text-dim);
    margin-bottom: 1rem;
    letter-spacing: 0.04em;
    line-height: 1.6;
  }

  .bulk-schema code {
    color: var(--accent);
    background: var(--surface-alt);
    padding: 0.1em 0.3em;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .error-msg {
    margin-top: 1rem;
    font-size: 0.7rem;
    color: var(--danger);
    letter-spacing: 0.08em;
  }




  /* ── Media on card ── */
  .card-media {
    max-width: 90%;
    max-height: 110px;
    width: auto;
    border-radius: 3px;
    object-fit: contain;
    margin-bottom: 0.6rem;
    border: 1px solid var(--border);
    flex-shrink: 0;
  }

  .card-audio {
    width: 90%;
    max-width: 260px;
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
    accent-color: var(--danger);
    height: 32px;
    flex-shrink: 0;
  }


  .mode-toggle {
    background: none;
    border: none;
    color: var(--text-faint);
    font-family: 'DM Mono', monospace;
    font-size: 0.58rem;
    letter-spacing: 0.06em;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.2s;
  }
  .mode-toggle:hover { color: var(--accent); }

  .url-input-row {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .url-input {
    flex: 1;
    background: var(--bg);
    border: 1px solid var(--border-input);
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    outline: none;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }
  .url-input:focus { border-color: var(--accent); box-shadow: var(--focus-ring); }

  .url-set-btn {
    background: var(--surface-alt);
    border: 1px solid var(--border-input);
    border-radius: 8px;
    color: var(--accent);
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    padding: 0.5rem 0.85rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .url-set-btn:hover { background: var(--accent-soft); color: var(--danger); }

  .media-preview-label {
    font-size: 0.62rem;
    color: var(--text-dim);
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .media-upload-row {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }

  .media-upload-btn {
    background: var(--bg);
    border: 1px dashed var(--border-input);
    border-radius: 8px;
    color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.4rem 0.75rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }

  .media-upload-btn:hover { color: var(--accent); border-color: var(--text-faint); }

  .media-preview {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.65rem;
    color: var(--text-dim);
  }

  .media-preview img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 2px;
    border: 1px solid var(--border);
  }

  .media-remove {
    background: none;
    border: none;
    color: var(--text-faint);
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0 0.2rem;
    font-family: 'DM Mono', monospace;
    transition: color 0.2s;
  }

  .media-remove:hover { color: var(--danger); }

  .media-uploading {
    font-size: 0.62rem;
    color: var(--text-faint);
    letter-spacing: 0.06em;
    font-style: italic;
  }

  /* ── Delete All / Confirm ── */
  .list-header-right {
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }

  .delete-all-btn {
    background: none;
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--text-faint);
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }

  .delete-all-btn:hover {
    color: var(--danger);
    border-color: var(--danger);
  }

  .export-btn {
    background: none;
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--text-faint);
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }
  .export-btn:hover { color: var(--accent); border-color: var(--accent); }

  .confirm-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1.5rem;
  }

  .confirm-dialog {
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border-radius: 10px;
    padding: 2rem;
    max-width: 360px;
    width: 100%;
  }

  .confirm-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: var(--text);
    margin-bottom: 0.75rem;
  }

  .confirm-body {
    font-size: 0.75rem;
    color: var(--text-dim);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .confirm-body strong { color: var(--text); font-weight: 400; }

  .confirm-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
  }

  .confirm-cancel {
    background: none;
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.6rem 1.25rem;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }

  .confirm-cancel:hover { border-color: var(--text-faint); color: var(--text); }

  .confirm-ok {
    background: var(--danger);
    border: 1px solid var(--danger);
    border-radius: 2px;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.6rem 1.25rem;
    cursor: pointer;
    transition: background 0.2s;
  }

  .confirm-ok:hover { background: var(--danger-hover); border-color: var(--danger-hover); }


  /* ── List search ── */
  .list-search-wrap {
    position: relative;
    margin-bottom: 1rem;
  }

  .list-search {
    width: 100%;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.6rem 2rem 0.6rem 0.9rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    outline: none;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }
  .list-search:focus { border-color: var(--accent); box-shadow: var(--focus-ring); }
  .list-search::placeholder { color: var(--text-faint); }

  .list-search-clear {
    position: absolute;
    right: 0.6rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-faint);
    font-size: 1rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    transition: color 0.2s;
  }
  .list-search-clear:hover { color: var(--danger); }

  .list-empty {
    font-size: 0.75rem;
    color: var(--text-faint);
    padding: 2rem;
    text-align: center;
  }
  .list-empty em { color: var(--text-dim); font-style: normal; }

  /* ── List item updated ── */
  .li-main { flex: 1; min-width: 0; }
  .li-note {
    font-size: 0.6rem;
    color: var(--text-faint);
    letter-spacing: 0.04em;
    margin-top: 0.15rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .edit-btn {
    background: none;
    border: none;
    color: var(--text-faint);
    cursor: pointer;
    font-size: 0.85rem;
    padding: 0.2rem 0.4rem;
    border-radius: 6px;
    transition: color 0.2s;
    font-family: 'DM Mono', monospace;
    flex-shrink: 0;
  }
  .edit-btn:hover { color: var(--accent); }

  /* ── Edit modal ── */
  .edit-dialog {
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border-radius: 10px;
    padding: 1.75rem;
    max-width: 420px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
  }

  .edit-fields { margin: 1.25rem 0; display: flex; flex-direction: column; gap: 0.9rem; }


  /* ── Image preview modal ── */
  .preview-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.15rem 0.3rem;
    border-radius: 6px;
    flex-shrink: 0;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
  }
  .preview-btn:hover { opacity: 0.7; }

  .preview-thumb {
    width: 28px;
    height: 28px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid var(--border);
    display: block;
  }

  .preview-thumb-empty {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    border: 1px dashed var(--border-input);
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    color: var(--text-faint);
  }

  .card-preview-dialog {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 1.5rem;
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 90vh;
    overflow-y: auto;
  }

  .card-preview-side {
    border: 1px solid var(--border);
    border-radius: 3px;
    overflow: hidden;
  }

  .card-preview-label {
    background: var(--bg);
    font-size: 0.58rem;
    color: var(--text-faint);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.3rem 0.75rem;
    border-bottom: 1px solid var(--border);
  }

  .card-preview-body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    min-height: 80px;
    justify-content: center;
  }

  .card-preview-big {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: var(--text);
    text-align: center;
    line-height: 1.2;
  }

  .card-preview-trans {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.3rem;
    color: var(--accent);
    text-align: center;
  }

  .card-preview-example {
    font-size: 0.78rem;
    color: var(--text-dim);
    text-align: center;
    font-style: italic;
    line-height: 1.6;
  }

  .card-preview-note {
    font-size: 0.65rem;
    color: var(--text-faint);
    text-align: center;
    letter-spacing: 0.04em;
  }

  .card-preview-img {
    max-width: 100%;
    max-height: 140px;
    object-fit: contain;
    border-radius: 3px;
  }

  .img-preview-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1.5rem;
  }

  .img-preview-dialog {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 1.5rem;
    max-width: 420px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .img-preview-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .img-preview-word {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: var(--text);
  }

  .img-preview-close {
    background: none;
    border: none;
    color: var(--text-faint);
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    transition: color 0.2s;
  }
  .img-preview-close:hover { color: var(--text); }

  .img-preview-frame {
    width: 100%;
    aspect-ratio: 4/3;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .img-preview-frame img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .img-preview-broken {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-faint);
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .img-preview-broken-icon {
    font-size: 2rem;
    opacity: 0.3;
  }

  .img-preview-url-row {
    display: flex;
    gap: 0.5rem;
  }

  .img-preview-url-input {
    flex: 1;
    background: var(--bg);
    border: 1px solid var(--border-input);
    border-radius: 2px;
    padding: 0.5rem 0.75rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .img-preview-url-input:focus { border-color: var(--danger); }
  .img-preview-url-input::placeholder { color: var(--text-faint); }

  .img-preview-save-btn {
    background: var(--danger);
    border: none;
    border-radius: 2px;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0 0.9rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .img-preview-save-btn:hover { background: var(--danger-hover); }

  .img-preview-status {
    font-size: 0.65rem;
    text-align: center;
    letter-spacing: 0.06em;
  }
  .img-preview-status.ok { color: var(--ok); }
  .img-preview-status.err { color: var(--danger); }

  /* filter button */
  .list-filter-row {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }

  .list-filter-btn {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-faint);
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  .list-filter-btn.active { border-color: var(--danger); color: var(--text); background: var(--danger-soft); }
  .list-filter-btn:hover:not(.active) { border-color: var(--text-faint); color: var(--text-2); }

  /* ── Toast ── */
  .toast {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border-left: 3px solid var(--ok);
    border-radius: 3px;
    padding: 0.65rem 1.25rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    color: var(--ok-text);
    z-index: 2000;
    white-space: nowrap;
    animation: toast-in 0.2s ease, toast-out 0.3s ease 1.8s forwards;
    pointer-events: none;
  }

  @keyframes toast-in {
    from { opacity: 0; transform: translateX(-50%) translateY(8px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
  @keyframes toast-out {
    from { opacity: 1; transform: translateX(-50%) translateY(0); }
    to   { opacity: 0; transform: translateX(-50%) translateY(8px); }
  }

  /* ── Stats View ── */
  .stats-view {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .stats-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .stats-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: var(--accent);
    font-style: italic;
  }

  .stats-total {
    font-size: 0.65rem;
    color: var(--text-faint);
    letter-spacing: 0.1em;
  }

  .stats-chart {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .stats-row {
    display: grid;
    grid-template-columns: 90px 1fr 70px;
    align-items: center;
    gap: 0.75rem;
  }

  .stats-row-label {
    font-size: 0.68rem;
    color: var(--text-2);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .stats-bar-wrap {
    height: 10px;
    background: var(--surface-alt);
    border-radius: 2px;
    overflow: hidden;
  }

  .stats-bar {
    height: 100%;
    border-radius: 2px;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    min-width: 2px;
  }

  .stats-row-count {
    display: flex;
    align-items: baseline;
    gap: 0.4rem;
    justify-content: flex-end;
  }

  .stats-n {
    font-size: 0.9rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: var(--text);
  }

  .stats-pct {
    font-size: 0.58rem;
    color: var(--text-faint);
  }

  .stats-footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .stats-kpi {
    background: var(--surface);
    box-shadow: var(--shadow-soft);
    border-radius: 10px;
    padding: 1rem 0.75rem;
    text-align: center;
    transition: transform 0.16s ease, box-shadow 0.16s ease;
  }
  .stats-kpi:hover { box-shadow: var(--shadow-card); transform: translateY(-2px); }

  .kpi-val {
    font-family: 'DM Mono', monospace;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--text);
    line-height: 1;
    margin-bottom: 0.4rem;
  }

  .kpi-label {
    font-size: 0.58rem;
    color: var(--text-faint);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1.4;
  }

  @media (max-width: 430px) {
    .stats-row {
      grid-template-columns: 70px 1fr 60px;
      gap: 0.5rem;
    }
    .stats-row-label { font-size: 0.6rem; }
    .kpi-val { font-size: 1.4rem; }
    .kpi-label { font-size: 0.55rem; }
  }


  /* ── Card type badges ── */
  .card-type-badge {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    font-size: 0.58rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-2);
    background: var(--surface-alt);
    border: 1px solid var(--border);
    border-radius: 2px;
    padding: 0.2rem 0.5rem;
  }

  /* ── Type 1: image card ── */
  .t1-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    height: 100%;
  }

  .t1-front-img {
    width: auto;
    height: 55%;
    max-width: 80%;
    object-fit: contain;
    border-radius: 4px;
    border: 1px solid var(--border);
    background: var(--bg);
    flex-shrink: 0;
  }

  .t1-front-hint {
    font-size: 0.58rem;
    color: var(--text-faint);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .t1-back-word {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem;
    color: var(--text);
    text-align: center;
    line-height: 1.1;
    margin-bottom: 0.35rem;
  }

  .t1-back-note {
    font-size: 0.65rem;
    color: var(--text-faint);
    letter-spacing: 0.06em;
    margin-bottom: 1rem;
  }

  .audio-replay-btn {
    background: var(--bg);
    border: 1px solid var(--text-faint);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1rem;
    color: var(--text-dim);
    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.1s;
    flex-shrink: 0;
    margin-top: 0.5rem;
  }
  .audio-replay-btn:hover { background: var(--accent-soft); border-color: var(--accent); color: var(--accent); transform: scale(1.08); }
  .audio-replay-btn.playing { border-color: var(--accent); color: var(--accent); }

  /* ── Type 2: example card ── */
  .t2-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0 0.5rem;
  }

  .t2-word {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--text);
    text-align: center;
    line-height: 1.2;
  }

  .t2-divider {
    width: 2rem;
    height: 1px;
    background: var(--danger);
    flex-shrink: 0;
  }

  .t2-example {
    font-size: 0.78rem;
    color: var(--text-2);
    text-align: center;
    line-height: 1.7;
    font-style: italic;
  }

  .t2-example em {
    color: var(--accent);
    font-style: normal;
    font-weight: 400;
  }

  .t2-back {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
    padding: 0 0.5rem;
  }

  .t2-translation {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.6rem;
    color: var(--accent);
    text-align: center;
  }

  .t2-example-trans {
    font-size: 0.7rem;
    color: var(--text-faint);
    text-align: center;
    line-height: 1.6;
    font-style: italic;
  }

  /* ── Type selector in form ── */
  .type-selector {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }

  .type-btn {
    position: relative;
    flex: 1;
    padding: 0.5rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--text-faint);
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;
    line-height: 1.4;
  }
  .type-btn.active {
    border-color: var(--danger);
    color: var(--text);
    background: var(--danger-soft);
  }
  .type-btn:hover:not(.active) { border-color: var(--text-faint); color: var(--text-2); }

  /* Tooltip explaining how each card type works */
  .type-tip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 190px;
    max-width: 70vw;
    padding: 0.55rem 0.7rem;
    background: var(--text);
    color: var(--bg);
    border-radius: 6px;
    box-shadow: var(--shadow-card);
    font-size: 0.66rem;
    letter-spacing: 0;
    text-transform: none;
    text-align: left;
    line-height: 1.45;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.15s ease;
    z-index: 20;
  }
  .type-tip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: var(--text);
  }
  .type-btn:hover .type-tip,
  .type-btn:focus-visible .type-tip { opacity: 1; visibility: visible; }

  /* Always-visible description of the currently selected card type (mobile-friendly) */
  .type-tip-static {
    margin: -0.75rem 0 1.25rem;
    color: var(--text-dim);
    font-size: 0.72rem;
    line-height: 1.45;
  }


  /* ── Type 4: español → escribir alemán ── */
  .t4-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    height: 100%;
  }
  .t4-label {
    font-size: 0.58rem;
    color: var(--text-faint);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .t4-word {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 2.2rem;
    color: var(--accent);
    text-align: center;
  }
  .t4-note {
    font-size: 0.65rem;
    color: var(--text-faint);
    text-align: center;
  }

  /* ── Type 5: fill in the blank ── */
  .t5-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
  }
  .t5-sentence {
    font-size: 1rem;
    color: var(--text);
    text-align: center;
    line-height: 1.7;
  }
  .t5-blank {
    display: inline-block;
    min-width: 5rem;
    border-bottom: 2px solid var(--danger);
    color: transparent;
    user-select: none;
  }

  /* ── Type 6: article selector ── */
  .t6-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    height: 100%;
  }
  .t6-label {
    font-size: 0.58rem;
    color: var(--text-faint);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .t6-word {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    color: var(--text);
    text-align: center;
    line-height: 1.1;
  }
  .t6-hint {
    font-size: 0.6rem;
    color: var(--text-faint);
    letter-spacing: 0.08em;
  }

  /* ── Interactive answer zone (below card for types 4,5,6) ── */
  .answer-zone {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .answer-input-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .answer-input {
    flex: 1;
    min-width: 0;
    background: var(--bg);
    border: 1px solid var(--border-input);
    border-radius: 8px;
    padding: 0.7rem 0.9rem;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }
  .answer-input:focus { border-color: var(--accent); box-shadow: var(--focus-ring); }
  .answer-input.correct { border-color: var(--ok); background: var(--ok-soft); }
  .answer-input.wrong   { border-color: var(--danger); background: var(--danger-soft); }
  .answer-input.correct:focus { border-color: var(--ok); box-shadow: 0 0 0 3px rgba(90,122,78,0.18); }
  .answer-input.wrong:focus { border-color: var(--danger); box-shadow: 0 0 0 3px rgba(178,59,46,0.18); }

  .answer-check-btn {
    background: var(--danger);
    border: none;
    border-radius: 8px;
    color: #FFFFFF;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0 1.25rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .answer-check-btn:hover { background: var(--danger-hover); }
  .answer-check-btn:disabled { background: var(--border-input); color: var(--text-faint); cursor: default; }

  .reveal-btn {
    background: none;
    border: 1px dashed var(--text-faint);
    border-radius: 8px;
    color: var(--text-faint);
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.5rem 0.9rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    white-space: nowrap;
  }
  .reveal-btn:hover { color: var(--accent); border-color: var(--accent); }

  .continuar-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--accent-soft);
    border: 1px solid var(--accent);
    border-radius: 8px;
    color: var(--accent);
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.65rem 1.5rem;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    margin-top: 0.25rem;
  }
  .continuar-btn:hover { background: var(--accent); color: #FFFFFF; }
  .continuar-btn::after { content: " →"; font-size: 0.85rem; }

  .answer-feedback {
    font-size: 0.75rem;
    padding: 0.6rem 0.9rem;
    border-radius: 8px;
    line-height: 1.5;
    overflow-wrap: break-word;
  }
  .answer-feedback.correct {
    background: var(--ok-soft);
    border: 1px solid var(--ok);
    color: var(--ok-text);
  }
  .answer-feedback.wrong {
    background: var(--danger-soft);
    border: 1px solid var(--danger);
    color: var(--danger);
  }
  .answer-feedback strong { font-weight: 500; }

  /* ── Article buttons (type6) ── */
  .article-btns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
  }

  .article-btn {
    padding: 1rem;
    border-radius: 8px;
    box-shadow: var(--shadow-soft);
    background: var(--surface);
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    color: var(--text);
    cursor: pointer;
    transition: all 0.15s;
    text-align: center;
  }
  .article-btn:hover:not(:disabled) { color: var(--accent); background: var(--accent-soft); }
  .article-btn.correct { border-color: var(--ok); color: var(--ok-text); background: var(--ok-soft); }
  .article-btn.wrong   { border-color: var(--danger); color: var(--danger); background: var(--danger-soft); }
  .article-btn.reveal  { border-color: var(--ok); color: var(--ok-text); background: var(--ok-soft); }
  .article-btn:disabled { cursor: default; opacity: 0.6; }

  /* ── Mobile (iPhone 15: 390px logical) ── */
  @media (max-width: 430px) {
    .app {
      padding: 1rem 1rem env(safe-area-inset-bottom, 1rem);
    }

    .header {
      margin-bottom: 1.5rem;
      align-items: center;
    }

    .logo-text { font-size: 1.15rem; }

    .nav { display: none; }

    .hamburger-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 44px;
      min-height: 44px;
      font-size: 1.25rem;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--text);
    }

    .menu-backdrop {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      height: 100vh;
      background: rgba(0, 0, 0, 0.3);
      z-index: 90;
    }

    .menu-panel {
      position: absolute;
      top: 100%;
      right: 0.5rem;
      display: flex;
      flex-direction: column;
      min-width: 160px;
      background: var(--surface);
      border-radius: 8px;
      box-shadow: var(--shadow-card);
      padding: 0.4rem;
      z-index: 100;
    }

    .menu-item {
      padding: 0.75rem 1rem;
      min-height: 44px;
      text-align: left;
      background: none;
      border: none;
      border-radius: 6px;
      font-size: 0.9rem;
      cursor: pointer;
      white-space: nowrap;
      color: var(--text-dim);
    }

    .menu-item.active { font-weight: 600; color: var(--accent); }

    .menu-logout { opacity: 0.7; }

    .card-scene { height: 210px; }

    .card-word { font-size: 1.9rem; }
    .card-translation { font-size: 1.45rem; }

    /* 6 grade buttons -> 3+3 on mobile */
    .grades {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }

    .grade-btn {
      padding: 0.85rem 0.3rem;
      min-height: 56px;
    }

    .grade-num { font-size: 1.2rem; }
    .grade-label { font-size: 0.6rem; }

    .explain-btn {
      min-height: 44px;
      font-size: 0.72rem;
    }

    /* Prevent iOS zoom on input focus (needs ≥16px) */
    .field input, .field textarea {
      font-size: 16px;
    }

    .add-form { padding: 1.25rem; }

    .submit-btn {
      width: 100%;
      min-height: 48px;
      font-size: 0.72rem;
    }

    /* List: stack german+trans vertically, keep days right */
    .list-item {
      grid-template-columns: 30px 1fr auto auto;
      grid-template-rows: auto;
    }

    .explanation {
      font-size: 0.75rem;
      padding: 1rem;
    }
  }
`;

// ── Grade Config ─────────────────────────────────────────────────────────────
const GRADES = [
  { n: 0, label: "Nada" },
  { n: 1, label: "Mal" },
  { n: 2, label: "Difícil" },
  { n: 3, label: "Ok" },
  { n: 4, label: "Bien" },
  { n: 5, label: "Fácil" },
];

// ── Card Face Components ─────────────────────────────────────────────────────
function CardType1Front({ card }) {
  return (
    <div className="t1-front">
      <div className="card-type-badge">{CARD_TYPE_NAMES.type1}</div>
      {card.imageUrl
        ? <img className="t1-front-img" src={mediaUrl(card.imageUrl)} alt="" />
        : <div style={{fontSize:"0.75rem",color:"#444",border:"1px dashed #333",padding:"1.5rem 2rem",borderRadius:"4px"}}>sin imagen</div>
      }
      <div className="t1-front-hint">toca para voltear</div>
    </div>
  );
}

function CardType1Back({ card, onSpeak }) {
  return (
    <>
      <div className="card-type-badge">{CARD_TYPE_NAMES.type1}</div>
      <div className="card-hint">califica abajo</div>
      <div className="t1-back-word">{card.german}</div>
      {card.note && <div className="t1-back-note">{card.note}</div>}
      <button
        className="audio-replay-btn"
        onClick={e => { e.stopPropagation(); onSpeak(); }}
        title="Pronunciar"
      >▶</button>
    </>
  );
}

function CardType2Front({ card }) {
  // Highlight the main word in the example if it appears
  const highlight = (text, word) => {
    if (!text || !word) return text;
    const bare = word.replace(/^(der|die|das|ein|eine)\s+/i, "").toLowerCase();
    const regex = new RegExp(`(${bare})`, "gi");
    const parts = text.split(regex);
    return parts.map((p, i) =>
      regex.test(p) ? <em key={i}>{p}</em> : p
    );
  };
  return (
    <>
      <div className="card-type-badge">{CARD_TYPE_NAMES.type2}</div>
      <div className="card-hint">toca para voltear</div>
      <div className="t2-front">
        <div className="t2-word">{card.german}</div>
        {card.example && (
          <>
            <div className="t2-divider" />
            <div className="t2-example">{highlight(card.example, card.german)}</div>
          </>
        )}
      </div>
    </>
  );
}

function CardType2Back({ card }) {
  return (
    <>
      <div className="card-type-badge">{CARD_TYPE_NAMES.type2}</div>
      <div className="card-hint">califica abajo</div>
      <div className="t2-back">
        <div className="t2-translation">{card.translation}</div>
        {card.note && <div className="card-note">{card.note}</div>}
        <button
          className="audio-replay-btn"
          style={{marginTop:"0.5rem"}}
          onClick={e => { e.stopPropagation(); playCard(card); }}
          title="Pronunciar"
        >▶</button>
        {card.exampleTranslation && (
          <>
            <div className="t2-divider" style={{marginTop:"0.5rem"}} />
            <div className="t2-example-trans">"{card.exampleTranslation}"</div>
          </>
        )}
      </div>
    </>
  );
}


function CardType4Front({ card, language }) {
  const L = LANG_LABELS[language] || LANG_LABELS.de;
  return (
    <div className="t4-front">
      <div className="card-type-badge">{CARD_TYPE_NAMES.type4}</div>
      <div className="t4-label">¿Cómo se dice en {L.name.toLowerCase()}?</div>
      <div className="t4-word">{card.translation}</div>
      {card.note && <div className="t4-note">{card.note}</div>}
    </div>
  );
}

function CardType5Front({ card }) {
  const sentence = card.example || "";
  const parts = sentence.split("___");
  return (
    <div className="t5-front">
      <div className="card-type-badge">{CARD_TYPE_NAMES.type5}</div>
      {card.imageUrl && <img className="t1-front-img" src={mediaUrl(card.imageUrl)} alt="" style={{position:"relative",inset:"auto",width:"auto",height:"45%",maxWidth:"80%",marginBottom:"0.25rem"}} />}
      <div className="t5-sentence">
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && <span className="t5-blank">_____</span>}
          </React.Fragment>
        ))}
      </div>
      {card.note && <div className="t4-note" style={{fontSize:"0.62rem"}}>{card.note}</div>}
    </div>
  );
}

function CardType6Front({ card, language }) {
  const { bare } = parseArticle(card.german, language);
  return (
    <div className="t6-front">
      <div className="card-type-badge">{CARD_TYPE_NAMES.type6}</div>
      {card.imageUrl && <img className="t1-front-img" src={mediaUrl(card.imageUrl)} alt="" style={{position:"relative",inset:"auto",width:"auto",height:"50%",maxWidth:"80%",marginBottom:"0.5rem"}} />}
      <div className="t6-label">¿Cuál es el artículo?</div>
      <div className="t6-word">___ {bare}</div>
    </div>
  );
}

// ── Interactive answer zones ──────────────────────────────────────────────────
function AnswerZoneType4({ card, language, onGrade, onExplain, explaining, explanation }) {
  const L = LANG_LABELS[language] || LANG_LABELS.de;
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const inputRef = React.useRef(null);

  React.useEffect(() => { inputRef.current?.focus(); }, []);

  const check = () => {
    if (!value.trim()) return;
    const isCorrect = value.trim().toLowerCase() === card.german.trim().toLowerCase();
    setResult(isCorrect ? "correct" : "wrong");
  };

  const reveal = () => {
    setResult("revealed");
    playCard(card);
  };

  return (
    <div className="answer-zone">
      <div className="answer-input-row">
        <input
          ref={inputRef}
          className={`answer-input ${result === "wrong" ? "wrong" : result === "correct" ? "correct" : ""}`}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !result) check(); }}
          placeholder={`Escribe en ${L.name.toLowerCase()}…`}
          disabled={!!result}
        />
        <button className="answer-check-btn" onClick={check} disabled={!!result || !value.trim()}>OK</button>
        <button className="reveal-btn" onClick={reveal} disabled={!!result}>Revelar</button>
      </div>
      {result === "correct" && (
        <div className="answer-feedback correct" style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
          <span>✓ ¡Correcto!</span>
          <button className="audio-replay-btn" style={{width:"28px",height:"28px",fontSize:"0.8rem"}} onClick={() => playCard(card)}>▶</button>
        </div>
      )}
      {result === "wrong" && (
        <div className="answer-feedback wrong" style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
          <span>✗ La respuesta es: <strong>{card.german}</strong></span>
          <button className="audio-replay-btn" style={{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0}} onClick={() => playCard(card)}>▶</button>
        </div>
      )}
      {result === "revealed" && (
        <div className="answer-feedback wrong" style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
            <span>👁 La respuesta es: <strong>{card.german}</strong></span>
            <button className="audio-replay-btn" style={{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0}} onClick={() => playCard(card)}>▶</button>
          </div>
          <button className="continuar-btn" onClick={() => onGrade(0)}>Continuar</button>
        </div>
      )}
      {(result === "correct" || result === "wrong") && (
        <div className="grades">
          {GRADES.map(({ n, label }) => (
            <button key={n} className={`grade-btn g${n}`} onClick={() => onGrade(n)}>
              <span className="grade-num">{n}</span>
              <span className="grade-label">{label}</span>
            </button>
          ))}
        </div>
      )}
      {!!result && (
        <>
          <button className="explain-btn" onClick={onExplain} disabled={explaining}>
            {explaining ? "Consultando IA…" : "✦ Explicar con IA"}
          </button>
          {explanation && <div className="explanation">{explanation}</div>}
        </>
      )}
    </div>
  );
}

function AnswerZoneType5({ card, onGrade, onExplain, explaining, explanation }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const inputRef = React.useRef(null);

  React.useEffect(() => { inputRef.current?.focus(); }, []);

  const fullSentence = (card.example || "").replace("___", card.german);

  const check = () => {
    if (!value.trim()) return;
    const isCorrect = value.trim().toLowerCase() === card.german.trim().toLowerCase();
    setResult(isCorrect ? "correct" : "wrong");
  };

  const reveal = () => {
    setResult("revealed");
    playCard(card);
  };

  return (
    <div className="answer-zone">
      <div className="answer-input-row">
        <input
          ref={inputRef}
          className={`answer-input ${result === "wrong" ? "wrong" : result === "correct" ? "correct" : ""}`}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !result) check(); }}
          placeholder="Completa el espacio…"
          disabled={!!result}
        />
        <button className="answer-check-btn" onClick={check} disabled={!!result || !value.trim()}>OK</button>
        <button className="reveal-btn" onClick={reveal} disabled={!!result}>Revelar</button>
      </div>
      {result === "correct" && (
        <div className="answer-feedback correct" style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
          <span style={{minWidth:0}}>✓ ¡Correcto! — {fullSentence}</span>
          <button className="audio-replay-btn" style={{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0}} onClick={() => playCard(card)}>▶</button>
        </div>
      )}
      {result === "wrong" && (
        <div className="answer-feedback wrong" style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
          <span style={{minWidth:0}}>✗ Era: <strong>{card.german}</strong> — {fullSentence}</span>
          <button className="audio-replay-btn" style={{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0}} onClick={() => playCard(card)}>▶</button>
        </div>
      )}
      {result === "revealed" && (
        <div className="answer-feedback wrong" style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
            <span style={{minWidth:0}}>👁 <strong>{card.german}</strong> — {fullSentence}</span>
            <button className="audio-replay-btn" style={{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0}} onClick={() => playCard(card)}>▶</button>
          </div>
          <button className="continuar-btn" onClick={() => onGrade(0)}>Continuar</button>
        </div>
      )}
      {(result === "correct" || result === "wrong") && (
        <div className="grades">
          {GRADES.map(({ n, label }) => (
            <button key={n} className={`grade-btn g${n}`} onClick={() => onGrade(n)}>
              <span className="grade-num">{n}</span>
              <span className="grade-label">{label}</span>
            </button>
          ))}
        </div>
      )}
      {!!result && (
        <>
          <button className="explain-btn" onClick={onExplain} disabled={explaining}>
            {explaining ? "Consultando IA…" : "✦ Explicar con IA"}
          </button>
          {explanation && <div className="explanation">{explanation}</div>}
        </>
      )}
    </div>
  );
}

function AnswerZoneType6({ card, language, onGrade, onExplain, explaining, explanation }) {
  const [picked, setPicked] = useState(null);
  const { articles, correct } = parseArticle(card.german, language);

  const choose = (article) => {
    if (picked) return;
    setPicked(article);
  };

  const btnClass = (art) => {
    if (!picked) return "";
    if (art === correct) return "reveal";
    if (art === picked && picked !== correct) return "wrong";
    return "";
  };

  return (
    <div className="answer-zone">
      <div className="article-btns">
        {articles.map(art => (
          <button
            key={art}
            className={`article-btn ${btnClass(art)}`}
            onClick={() => choose(art)}
            disabled={!!picked}
          >
            {art}
          </button>
        ))}
      </div>
      {picked && (
        <div className={`answer-feedback ${picked === correct ? "correct" : "wrong"}`} style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
            <span style={{minWidth:0}}>{picked === correct ? `✓ Correcto — ${card.german}` : `✗ Es ${correct} — ${card.german}`}</span>
            <button className="audio-replay-btn" style={{width:"28px",height:"28px",fontSize:"0.8rem",flexShrink:0}} onClick={() => playCard(card)}>▶</button>
          </div>
          {card.note && <div className="card-note">{card.note}</div>}
          <button className="continuar-btn" onClick={() => onGrade(picked === correct ? 5 : 1)}>Continuar</button>
        </div>
      )}
      {picked && (
        <>
          <button className="explain-btn" onClick={onExplain} disabled={explaining}>
            {explaining ? "Consultando IA…" : "✦ Explicar con IA"}
          </button>
          {explanation && <div className="explanation">{explanation}</div>}
        </>
      )}
    </div>
  );
}

// ── Components ───────────────────────────────────────────────────────────────
function StudyView({ cards, onGrade, language }) {
  const [flipped, setFlipped] = useState(false);
  const [explaining, setExplaining] = useState(false);
  const [explanation, setExplanation] = useState(null);
  const [interactiveKey, setInteractiveKey] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Stable shuffled due list — only recomputes when card set changes
  const due = React.useMemo(() => {
    const list = cards.filter(c => c.nextReview <= Date.now());
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, [cards.map(c => c.id + c.nextReview).join(",")]);

  const card = due[0];

  const playCurrent = React.useCallback(() => { playCard(card); }, [card]);

  // Auto-play on flip for type1 and type2
  React.useEffect(() => {
    if (flipped && (card?.cardType === "type1" || card?.cardType === "type2")) {
      const t = setTimeout(() => playCard(card), 350);
      return () => clearTimeout(t);
    }
  }, [flipped]);

  const handleGrade = (g) => {
    if (transitioning) return;
    window.speechSynthesis?.cancel();

    const isFlipType = card?.cardType === "type1" || card?.cardType === "type2";

    if (isFlipType && flipped) {
      // Flip back to front, then commit grade after animation
      setTransitioning(true);
      setFlipped(false);
      setTimeout(() => {
        onGrade(card.id, sm2(card, g));
        setExplanation(null);
        setInteractiveKey(k => k + 1);
        setTransitioning(false);
      }, 560);
    } else {
      // Interactive types or non-flipped: advance immediately, no animation needed
      onGrade(card.id, sm2(card, g));
      setFlipped(false);
      setExplanation(null);
      setInteractiveKey(k => k + 1);
    }
  };

  const handleExplain = async () => {
    setExplaining(true);
    try { setExplanation(await fetchExplanation(card)); }
    catch { setExplanation("Error al contactar la API."); }
    setExplaining(false);
  };

  if (!cards.length) return (
    <div className="deck-empty">
      <p>No hay tarjetas.<br />Ve a <strong>+ Agregar</strong> para crear tu primera.</p>
    </div>
  );

  if (!due.length) return (
    <div className="deck-empty">
      <p>Sin repasos pendientes.<br />Vuelve mañana — el sistema hace el resto.</p>
    </div>
  );

  const cardType = card.cardType || "type1";
  const isInteractive = ["type4", "type5", "type6"].includes(cardType);
  const isFlipType    = ["type1", "type2"].includes(cardType);

  return (
    <div>
      <div className="session-info">
        <span>Pendientes: <strong>{due.length}</strong></span>
        <span>Total: <strong>{cards.length}</strong></span>
      </div>

      {/* ── Flip card (types 1 & 2) ── */}
      {isFlipType && (
        <div className="card-scene" onClick={() => !transitioning && setFlipped(f => !f)}>
          <div className={`card-inner ${flipped ? "flipped" : ""}`}>
            <div className="card-face front">
              {cardType === "type1" && <CardType1Front card={card} />}
              {cardType === "type2" && <CardType2Front card={card} />}
            </div>
            <div className="card-face back">
              {cardType === "type1" && <CardType1Back card={card} onSpeak={playCurrent} />}
              {cardType === "type2" && <CardType2Back card={card} />}
            </div>
          </div>
        </div>
      )}

      {/* ── Interactive card front (types 4, 5, 6) — plain, no flip ── */}
      {isInteractive && (
        <div className="card-scene">
          <div className="card-static">
            {cardType === "type4" && <CardType4Front card={card} language={language} />}
            {cardType === "type5" && <CardType5Front card={card} />}
            {cardType === "type6" && <CardType6Front card={card} language={language} />}
          </div>
        </div>
      )}

      {/* ── Answer zones for interactive types ── */}
      {isInteractive && (
        <React.Fragment key={interactiveKey}>
          {cardType === "type4" && <AnswerZoneType4 card={card} language={language} onGrade={handleGrade} onExplain={handleExplain} explaining={explaining} explanation={explanation} />}
          {cardType === "type5" && <AnswerZoneType5 card={card} onGrade={handleGrade} onExplain={handleExplain} explaining={explaining} explanation={explanation} />}
          {cardType === "type6" && <AnswerZoneType6 card={card} language={language} onGrade={handleGrade} onExplain={handleExplain} explaining={explaining} explanation={explanation} />}
        </React.Fragment>
      )}

      {/* ── Grade + explain for flip types ── */}
      {isFlipType && flipped && (
        <>
          <div className="grades">
            {GRADES.map(({ n, label }) => (
              <button key={n} className={`grade-btn g${n}`} onClick={() => handleGrade(n)}>
                <span className="grade-num">{n}</span>
                <span className="grade-label">{label}</span>
              </button>
            ))}
          </div>
          <button className="explain-btn" onClick={handleExplain} disabled={explaining}>
            {explaining ? "Consultando IA…" : "✦ Explicar con IA"}
          </button>
          {explanation && <div className="explanation">{explanation}</div>}
        </>
      )}
    </div>
  );
}

function AddView({ onAdd, onBulkAdd, language }) {
  const L = LANG_LABELS[language] || LANG_LABELS.de;
  const cardTypeOptions = getCardTypeOptions(language);
  const [tab, setTab] = useState("single");

  const [cardType, setCardType] = useState("type1");
  const [german, setGerman] = useState("");
  const [translation, setTranslation] = useState("");
  const [note, setNote] = useState("");
  const [example, setExample] = useState("");
  const [exampleTranslation, setExampleTranslation] = useState("");
  const [saved, setSaved] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [uploading, setUploading] = useState(null);
  const [imageMode, setImageMode] = useState("file");
  const [audioMode, setAudioMode] = useState("file");
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [audioUrlInput, setAudioUrlInput] = useState("");

  const [json, setJson] = useState("");
  const [bulkStatus, setBulkStatus] = useState(null);
  const [replaceMode, setReplaceMode] = useState(true);

  const handleSubmit = () => {
    if (!german.trim() || !translation.trim()) return;
    onAdd({ cardType, german: german.trim(), translation: translation.trim(), note: note.trim(), example: example.trim(), exampleTranslation: exampleTranslation.trim(), imageUrl, audioUrl });
    setGerman(""); setTranslation(""); setNote("");
    setImageUrl(null); setAudioUrl(null); setExample(""); setExampleTranslation("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleMediaUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(type);
    try {
      const { url } = await uploadMedia(file);
      if (type === "image") setImageUrl(url);
      else setAudioUrl(url);
    } catch { alert("Error al subir archivo."); }
    setUploading(null);
    e.target.value = "";
  };

  const handleRemoveMedia = async (type) => {
    const url = type === "image" ? imageUrl : audioUrl;
    if (url) await deleteMedia(url);
    if (type === "image") setImageUrl(null);
    else setAudioUrl(null);
  };

  const handleUrlSet = (type, val) => {
    const trimmed = val.trim();
    if (!trimmed) return;
    if (type === "image") { setImageUrl(trimmed); setImageUrlInput(""); }
    else { setAudioUrl(trimmed); setAudioUrlInput(""); }
  };

  const handleRemoveMediaUrl = (type) => {
    // external URLs don't need server deletion
    const url = type === "image" ? imageUrl : audioUrl;
    const isExternal = url && (url.startsWith("http://") || url.startsWith("https://"));
    if (!isExternal && url) deleteMedia(url);
    if (type === "image") { setImageUrl(null); setImageUrlInput(""); }
    else { setAudioUrl(null); setAudioUrlInput(""); }
  };

  const handleBulk = () => {
    setBulkStatus(null);
    let parsed;
    try { parsed = JSON.parse(json.trim()); }
    catch { setBulkStatus({ ok: false, msg: "JSON inválido. Revisa la sintaxis." }); return; }
    if (!Array.isArray(parsed)) {
      setBulkStatus({ ok: false, msg: "Debe ser un array [ ... ]." }); return;
    }
    const valid = parsed.filter(x => x.german?.trim() && x.translation?.trim());
    if (!valid.length) {
      setBulkStatus({ ok: false, msg: 'Ningún objeto tiene "german" y "translation".' }); return;
    }
    onBulkAdd(valid, replaceMode);
    setJson("");
    setBulkStatus({ ok: true, msg: `✓ ${valid.length} tarjeta${valid.length !== 1 ? "s" : ""} ${replaceMode ? "importada" : "agregada"}${valid.length !== 1 ? "s" : ""}.` });
  };

  return (
    <div className="add-form">
      <div className="add-tabs">
        <button className={`add-tab ${tab === "single" ? "active" : ""}`} onClick={() => setTab("single")}>Una tarjeta</button>
        <button className={`add-tab ${tab === "bulk" ? "active" : ""}`} onClick={() => setTab("bulk")}>Importar JSON</button>
      </div>

      {tab === "single" && (
        <>
          <div className="type-selector" style={{flexWrap:"wrap"}}>
            {cardTypeOptions.map(opt => (
              <button
                key={opt.id}
                className={`type-btn ${cardType === opt.id ? "active" : ""}`}
                onClick={() => setCardType(opt.id)}
              >
                {opt.name}
                <span className="type-tip" role="tooltip">{opt.tip}</span>
              </button>
            ))}
          </div>
          <div className="type-tip-static">
            {cardTypeOptions.find(o => o.id === cardType)?.tip}
          </div>
          <div className="field">
            <label>{cardType === "type5" ? "Palabra que va en el hueco" : L.name}</label>
            <input value={german} onChange={e => setGerman(e.target.value)} placeholder={cardType === "type5" ? L.blankWordPh : L.wordPh} />
          </div>
          <div className="field">
            <label>Traducción</label>
            <input value={translation} onChange={e => setTranslation(e.target.value)} placeholder="la llave" />
          </div>
          <div className="field">
            <label>Nota (opcional)</label>
            <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="artículo, ejemplo, truco…" />
          </div>
          {(cardType === "type2" || cardType === "type5") && (
            <>
              <div className="field">
                <label>{cardType === "type5" ? 'Oración con ___ (espacio en blanco)' : L.exLabel}</label>
                <input value={example} onChange={e => setExample(e.target.value)} placeholder={cardType === "type5" ? L.blankPh : L.exPh} />
              </div>
              {cardType === "type2" && (
                <div className="field">
                  <label>Traducción del ejemplo</label>
                  <input value={exampleTranslation} onChange={e => setExampleTranslation(e.target.value)} placeholder="El perro corre rápido." />
                </div>
              )}
            </>
          )}
          {["type1", "type5", "type6"].includes(cardType) && (
          <div className="field">
            <label>
              Imagen (opcional) —{" "}
              <button className="mode-toggle" onClick={() => { setImageMode(m => m === "file" ? "url" : "file"); setImageUrl(null); setImageUrlInput(""); }}>
                {imageMode === "file" ? "usar URL" : "subir archivo"}
              </button>
            </label>
            {!imageUrl ? (
              imageMode === "file" ? (
                <div className="media-upload-row">
                  <label className="media-upload-btn">
                    {uploading === "image" ? <span className="media-uploading">Subiendo…</span> : "＋ Subir imagen"}
                    <input type="file" accept="image/*" style={{display:"none"}} onChange={e => handleMediaUpload(e, "image")} disabled={!!uploading} />
                  </label>
                </div>
              ) : (
                <div className="url-input-row">
                  <input
                    className="url-input"
                    value={imageUrlInput}
                    onChange={e => setImageUrlInput(e.target.value)}
                    placeholder="https://upload.wikimedia.org/…"
                    onKeyDown={e => e.key === "Enter" && handleUrlSet("image", imageUrlInput)}
                  />
                  <button className="url-set-btn" onClick={() => handleUrlSet("image", imageUrlInput)}>OK</button>
                </div>
              )
            ) : (
              <div className="media-preview">
                <img src={mediaUrl(imageUrl)} alt="" />
                <span className="media-preview-label">{imageUrl.startsWith("http") ? "URL externa" : imageUrl.split("/").pop()}</span>
                <button className="media-remove" onClick={() => handleRemoveMediaUrl("image")}>×</button>
              </div>
            )}
          </div>
          )}

          <div className="field">
            <label>
              Audio (opcional) —{" "}
              <button className="mode-toggle" onClick={() => { setAudioMode(m => m === "file" ? "url" : "file"); setAudioUrl(null); setAudioUrlInput(""); }}>
                {audioMode === "file" ? "usar URL" : "subir archivo"}
              </button>
            </label>
            {!audioUrl ? (
              audioMode === "file" ? (
                <div className="media-upload-row">
                  <label className="media-upload-btn">
                    {uploading === "audio" ? <span className="media-uploading">Subiendo…</span> : "＋ Subir audio"}
                    <input type="file" accept="audio/*" style={{display:"none"}} onChange={e => handleMediaUpload(e, "audio")} disabled={!!uploading} />
                  </label>
                </div>
              ) : (
                <div className="url-input-row">
                  <input
                    className="url-input"
                    value={audioUrlInput}
                    onChange={e => setAudioUrlInput(e.target.value)}
                    placeholder="https://forvo.com/… o link directo a .mp3"
                    onKeyDown={e => e.key === "Enter" && handleUrlSet("audio", audioUrlInput)}
                  />
                  <button className="url-set-btn" onClick={() => handleUrlSet("audio", audioUrlInput)}>OK</button>
                </div>
              )
            ) : (
              <div className="media-preview">
                <span className="media-preview-label">{audioUrl.startsWith("http") ? "URL externa" : audioUrl.split("/").pop()}</span>
                <audio src={mediaUrl(audioUrl)} controls style={{height:"24px", accentColor:"#cc0000"}} />
                <button className="media-remove" onClick={() => handleRemoveMediaUrl("audio")}>×</button>
              </div>
            )}
          </div>

          <button className="submit-btn" onClick={handleSubmit}>Agregar tarjeta</button>
          {saved && <div className="success-msg">✓ Guardada</div>}
        </>
      )}

      {tab === "bulk" && (
        <>
          <div className="field">
            <label>Array JSON</label>
            <textarea
              className="bulk-textarea"
              value={json}
              onChange={e => setJson(e.target.value)}
              placeholder={L.bulkPh}
            />
          </div>
          <div className="bulk-schema">
            Campos: <code>german</code> ✦ <code>translation</code> ✦ <code>note</code> (opcional)
          </div>
          <label className="bulk-replace-row">
            <input type="checkbox" checked={replaceMode} onChange={e => setReplaceMode(e.target.checked)} />
            <span>Reemplazar todo el mazo (desactiva para agregar encima)</span>
          </label>
          <button className="submit-btn" onClick={handleBulk}>Importar</button>
          {bulkStatus && (
            <div className={bulkStatus.ok ? "success-msg" : "error-msg"}>{bulkStatus.msg}</div>
          )}
        </>
      )}
    </div>
  );
}


// ── Stats View ────────────────────────────────────────────────────────────────
function StatsView({ cards }) {
  const now = Date.now();
  const DAY = 86400000;

  const buckets = [
    { label: "Nuevas",   color: "#B4642F", count: 0 },
    { label: "Hoy",      color: "#C8825B", count: 0 },
    { label: "Mañana",   color: "#D29E78", count: 0 },
    { label: "3–7 días", color: "#DBB596", count: 0 },
    { label: "8–30 días",color: "#E2CBB3", count: 0 },
    { label: "+30 días", color: "#E8D9C5", count: 0 },
  ];

  for (const c of cards) {
    const diff = c.nextReview - now;
    const days = diff / DAY;
    if (c.repetitions === 0)       buckets[0].count++;
    else if (days <= 0)            buckets[1].count++;
    else if (days <= 1)            buckets[2].count++;
    else if (days <= 7)            buckets[3].count++;
    else if (days <= 30)           buckets[4].count++;
    else                           buckets[5].count++;
  }

  const max = Math.max(...buckets.map(b => b.count), 1);
  const total = cards.length;

  if (!total) return (
    <div className="deck-empty">
      <p>Sin tarjetas aún.<br />Ve a <strong>+ Agregar</strong> para empezar.</p>
    </div>
  );

  return (
    <div className="stats-view">
      <div className="stats-header">
        <div className="stats-title">Estado del mazo</div>
        <div className="stats-total">{total} tarjeta{total !== 1 ? "s" : ""} en total</div>
      </div>

      <div className="stats-chart">
        {buckets.map((b, i) => {
          const pct = max > 0 ? (b.count / max) * 100 : 0;
          const ofTotal = total > 0 ? Math.round((b.count / total) * 100) : 0;
          return (
            <div key={i} className="stats-row">
              <div className="stats-row-label">{b.label}</div>
              <div className="stats-bar-wrap">
                <div
                  className="stats-bar"
                  style={{ width: `${pct}%`, background: b.color }}
                />
              </div>
              <div className="stats-row-count">
                <span className="stats-n">{b.count}</span>
                <span className="stats-pct">{ofTotal}%</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="stats-footer">
        <div className="stats-kpi">
          <div className="kpi-val" style={{ color: "#cc0000" }}>
            {buckets[0].count + buckets[1].count}
          </div>
          <div className="kpi-label">para estudiar hoy</div>
        </div>
        <div className="stats-kpi">
          <div className="kpi-val" style={{ color: "#ffcc00" }}>
            {(cards.filter(c => c.repetitions > 0 && c.interval >= 21).length)}
          </div>
          <div className="kpi-label">maduras (≥21 días)</div>
        </div>
        <div className="stats-kpi">
          <div className="kpi-val" style={{ color: "#aaa" }}>
            {total > 0 ? (cards.reduce((s,c) => s + c.easiness, 0) / total).toFixed(2) : "—"}
          </div>
          <div className="kpi-label">easiness promedio</div>
        </div>
      </div>
    </div>
  );
}


function ImagePreviewModal({ card, onSave, onClose }) {
  const [urlInput, setUrlInput] = useState(card.imageUrl || "");
  const [status, setStatus] = useState(null); // null | "ok" | "err"
  const [broken, setBroken] = useState(false);

  const handleSave = () => {
    const trimmed = urlInput.trim();
    onSave({ ...card, imageUrl: trimmed || null });
    setStatus("ok");
    setTimeout(onClose, 800);
  };

  return (
    <div className="img-preview-overlay" onClick={onClose}>
      <div className="img-preview-dialog" onClick={e => e.stopPropagation()}>
        <div className="img-preview-header">
          <div className="img-preview-word">{card.german}</div>
          <button className="img-preview-close" onClick={onClose}>×</button>
        </div>

        <div className="img-preview-frame">
          {card.imageUrl && !broken ? (
            <img
              src={mediaUrl(card.imageUrl)}
              alt=""
              onError={() => setBroken(true)}
            />
          ) : (
            <div className="img-preview-broken">
              <div className="img-preview-broken-icon">🖼</div>
              <div>{broken ? "Imagen rota" : "Sin imagen"}</div>
            </div>
          )}
        </div>

        <div className="img-preview-url-row">
          <input
            className="img-preview-url-input"
            value={urlInput}
            onChange={e => { setUrlInput(e.target.value); setBroken(false); setStatus(null); }}
            placeholder="https://upload.wikimedia.org/…"
            onKeyDown={e => e.key === "Enter" && handleSave()}
          />
          <button className="img-preview-save-btn" onClick={handleSave}>
            Guardar
          </button>
        </div>

        {status === "ok" && <div className="img-preview-status ok">✓ Guardado</div>}
      </div>
    </div>
  );
}


function Toast({ msg }) {
  return msg ? <div className="toast">{msg}</div> : null;
}

function CardPreviewModal({ card, onClose }) {
  const type = card.cardType || "type1";
  const article = card.german.match(/^(der|die|das)/i)?.[1] || "";
  const bare = card.german.replace(/^(der|die|das)\s+/i, "");
  const fullSentence = (card.example || "").replace("___", card.german);

  return (
    <div className="img-preview-overlay" onClick={onClose}>
      <div className="card-preview-dialog" onClick={e => e.stopPropagation()}>
        <div className="img-preview-header">
          <div className="img-preview-word">
            <span style={{fontSize:"0.6rem",color:"#555",letterSpacing:"0.1em",textTransform:"uppercase",marginRight:"0.5rem"}}>
              Tipo {type.replace("type","")}
            </span>
            {card.german}
          </div>
          <button className="img-preview-close" onClick={onClose}>×</button>
        </div>

        {/* Frente */}
        <div className="card-preview-side">
          <div className="card-preview-label">Frente</div>
          {type === "type1" && (
            <div className="card-preview-body">
              {card.imageUrl
                ? <img src={mediaUrl(card.imageUrl)} alt="" className="card-preview-img" onError={e => e.target.style.display="none"} />
                : <div className="img-preview-broken"><div className="img-preview-broken-icon">🖼</div><div>Sin imagen</div></div>
              }
            </div>
          )}
          {type === "type2" && (
            <div className="card-preview-body">
              <div className="card-preview-big">{card.german}</div>
              {card.example && <div className="card-preview-example">{card.example}</div>}
            </div>
          )}
          {type === "type4" && (
            <div className="card-preview-body">
              <div className="card-preview-trans">{card.translation}</div>
              {card.note && <div className="card-preview-note">{card.note}</div>}
            </div>
          )}
          {type === "type5" && (
            <div className="card-preview-body">
              <div className="card-preview-example">{(card.example||"").replace("___","_____")}</div>
            </div>
          )}
          {type === "type6" && (
            <div className="card-preview-body">
              {card.imageUrl && (
                <img
                  src={mediaUrl(card.imageUrl)}
                  alt=""
                  className="card-preview-img"
                  onError={e => e.target.style.display="none"}
                />
              )}
              <div className="card-preview-big" style={{color:"#888"}}>___ {bare}</div>
            </div>
          )}
        </div>

        {/* Dorso */}
        <div className="card-preview-side">
          <div className="card-preview-label">Dorso</div>
          <div className="card-preview-body">
            {(type === "type1" || type === "type6") && (
              <>
                <div className="card-preview-big">{card.german}</div>
                {card.note && <div className="card-preview-note">{card.note}</div>}
              </>
            )}
            {type === "type2" && (
              <>
                <div className="card-preview-trans">{card.translation}</div>
                {card.exampleTranslation && <div className="card-preview-example" style={{color:"#666"}}>"{card.exampleTranslation}"</div>}
              </>
            )}
            {(type === "type4" || type === "type5") && (
              <>
                <div className="card-preview-big">{card.german}</div>
                {type === "type5" && fullSentence && <div className="card-preview-example">{fullSentence}</div>}
              </>
            )}
          </div>
        </div>

        <button className="continuar-btn" style={{alignSelf:"center"}} onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

function EditModal({ card, onSave, onClose, language }) {
  const L = LANG_LABELS[language] || LANG_LABELS.de;
  const cardTypeOptions = getCardTypeOptions(language);
  const [cardType, setCardType] = useState(card.cardType || "type1");
  const [german, setGerman] = useState(card.german);
  const [translation, setTranslation] = useState(card.translation);
  const [note, setNote] = useState(card.note || "");
  const [example, setExample] = useState(card.example || "");
  const [exampleTranslation, setExampleTranslation] = useState(card.exampleTranslation || "");
  const [imageUrl, setImageUrl] = useState(card.imageUrl || "");
  const [audioUrl, setAudioUrl] = useState(card.audioUrl || "");

  const handleSave = () => {
    if (!german.trim() || !translation.trim()) return;
    onSave({
      ...card,
      cardType,
      german: german.trim(),
      translation: translation.trim(),
      note: note.trim(),
      example: example.trim(),
      exampleTranslation: exampleTranslation.trim(),
      imageUrl: imageUrl.trim() || null,
      audioUrl: audioUrl.trim() || null,
    });
  };

  return (
    <div className="confirm-overlay" onClick={onClose}>
      <div className="edit-dialog" onClick={e => e.stopPropagation()}>
        <div className="confirm-title">Editar tarjeta</div>
        <div className="edit-fields">
          <div className="type-selector" style={{flexWrap:"wrap"}}>
            {cardTypeOptions.map(opt => (
              <button
                key={opt.id}
                className={`type-btn ${cardType === opt.id ? "active" : ""}`}
                onClick={() => setCardType(opt.id)}
              >
                {opt.name}
                <span className="type-tip" role="tooltip">{opt.tip}</span>
              </button>
            ))}
          </div>
          <div className="type-tip-static">
            {cardTypeOptions.find(o => o.id === cardType)?.tip}
          </div>
          <div className="field">
            <label>{cardType === "type5" ? "Palabra que va en el hueco" : L.name}</label>
            <input value={german} onChange={e => setGerman(e.target.value)} placeholder={cardType === "type5" ? L.blankWordPh : ""} />
          </div>
          <div className="field">
            <label>Traducción</label>
            <input value={translation} onChange={e => setTranslation(e.target.value)} />
          </div>
          <div className="field">
            <label>Nota</label>
            <input value={note} onChange={e => setNote(e.target.value)} placeholder="artículo, truco…" />
          </div>
          {(cardType === "type2" || cardType === "type5") && (
            <>
              <div className="field">
                <label>{cardType === "type5" ? 'Oración con ___ (espacio en blanco)' : L.exLabel}</label>
                <input value={example} onChange={e => setExample(e.target.value)} placeholder={cardType === "type5" ? L.blankPh : L.exPh} />
              </div>
              {cardType === "type2" && (
                <div className="field">
                  <label>Traducción del ejemplo</label>
                  <input value={exampleTranslation} onChange={e => setExampleTranslation(e.target.value)} />
                </div>
              )}
            </>
          )}
          {["type1", "type5", "type6"].includes(cardType) && (
            <div className="field">
              <label>URL imagen</label>
              <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="https://…" />
            </div>
          )}
          <div className="field">
            <label>URL audio</label>
            <input value={audioUrl} onChange={e => setAudioUrl(e.target.value)} placeholder="https://…" />
          </div>
        </div>
        <div className="confirm-actions">
          <button className="confirm-cancel" onClick={onClose}>Cancelar</button>
          <button className="confirm-ok" onClick={handleSave}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

function ListItemThumb({ card, onClick }) {
  const [broken, setBroken] = useState(false);
  // Reset broken state whenever the URL changes
  React.useEffect(() => { setBroken(false); }, [card.imageUrl]);
  if (!card.imageUrl || broken) {
    return (
      <button className="preview-btn" onClick={onClick} title="Sin imagen — click para agregar">
        <div className="preview-thumb-empty">+</div>
      </button>
    );
  }
  return (
    <button className="preview-btn" onClick={onClick} title="Vista previa de imagen">
      <img
        className="preview-thumb"
        src={mediaUrl(card.imageUrl)}
        alt=""
        onError={() => setBroken(true)}
      />
    </button>
  );
}

function ListView({ cards, onDelete, onDeleteAll, onEdit, language }) {
  const [confirming, setConfirming] = useState(false);

  const handleExport = () => {
    const data = JSON.stringify(cards, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `deutschkarten-backup-${date}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const [query, setQuery] = useState("");
  const [editingCard, setEditingCard] = useState(null);
  const [previewCard, setPreviewCard] = useState(null);
  const [cardPreview, setCardPreview] = useState(null);
  const [toast, setToast] = useState(null);
  const toastRef = React.useRef(null);
  const [imgFilter, setImgFilter] = useState("all"); // "all" | "broken" | "ok"

  const showToast = (msg) => {
    if (toastRef.current) clearTimeout(toastRef.current);
    setToast(msg);
    toastRef.current = setTimeout(() => setToast(null), 2200);
  };

  const withImg  = cards.filter(c => c.cardType === "type1" || c.cardType === "type5" || c.cardType === "type6");

  const filtered = [...cards]
    .sort((a, b) => a.nextReview - b.nextReview)
    .filter(c => {
      if (query.trim()) {
        const q = query.toLowerCase();
        if (!c.german.toLowerCase().includes(q) && !c.translation.toLowerCase().includes(q) && !(c.note||"").toLowerCase().includes(q)) return false;
      }
      if (imgFilter === "broken") return (c.cardType === "type1" || c.cardType === "type5" || c.cardType === "type6") && !c.imageUrl;
      if (imgFilter === "ok")     return (c.cardType === "type1" || c.cardType === "type5" || c.cardType === "type6") && !!c.imageUrl;
      return true;
    });

  const brokenCount = withImg.filter(c => !c.imageUrl).length;

  return (
    <div>
      <div className="list-header">
        <div className="list-title">Todas las tarjetas</div>
        <div className="list-header-right">
          <div className="list-count">{cards.length} total</div>
          {cards.length > 0 && (
            <>
              <button className="export-btn" onClick={handleExport} title="Exportar backup JSON">↓ Backup</button>
              <button className="delete-all-btn" onClick={() => setConfirming(true)}>Borrar todo</button>
            </>
          )}
        </div>
      </div>

      <div className="list-search-wrap">
        <input
          className="list-search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Buscar por palabra, traducción o nota…"
        />
        {query && <button className="list-search-clear" onClick={() => setQuery("")}>×</button>}
      </div>

      <div className="list-filter-row">
        <button className={`list-filter-btn ${imgFilter==="all"?"active":""}`} onClick={() => setImgFilter("all")}>Todas</button>
        <button className={`list-filter-btn ${imgFilter==="broken"?"active":""}`} onClick={() => setImgFilter("broken")}>
          Sin imagen {brokenCount > 0 && `(${brokenCount})`}
        </button>
        <button className={`list-filter-btn ${imgFilter==="ok"?"active":""}`} onClick={() => setImgFilter("ok")}>Con imagen</button>
      </div>

      {confirming && (
        <div className="confirm-overlay" onClick={() => setConfirming(false)}>
          <div className="confirm-dialog" onClick={e => e.stopPropagation()}>
            <div className="confirm-title">¿Borrar todo el mazo?</div>
            <div className="confirm-body">
              Se eliminarán <strong>{cards.length} tarjeta{cards.length !== 1 ? "s" : ""}</strong> y todo su progreso. Esta acción no se puede deshacer.
            </div>
            <div className="confirm-actions">
              <button className="confirm-cancel" onClick={() => setConfirming(false)}>Cancelar</button>
              <button className="confirm-ok" onClick={() => { onDeleteAll(); setConfirming(false); }}>Sí, borrar todo</button>
            </div>
          </div>
        </div>
      )}

      {editingCard && (
        <EditModal card={editingCard} language={language} onSave={c => { onEdit(c); setEditingCard(null); showToast(`✓ "${c.german}" actualizado`); }} onClose={() => setEditingCard(null)} />
      )}

      {previewCard && (
        <ImagePreviewModal
          card={previewCard}
          onSave={updated => { onEdit(updated); setPreviewCard(updated); showToast(`✓ Imagen actualizada`); }}
          onClose={() => setPreviewCard(null)}
        />
      )}

      {cardPreview && (
        <CardPreviewModal card={cardPreview} onClose={() => setCardPreview(null)} />
      )}

      <div className="card-list">
        {filtered.length === 0 && (
          <div className="list-empty">{query ? `Sin resultados para "${query}"` : "Sin tarjetas en este filtro"}</div>
        )}
        {filtered.map(c => {
          const isDue = c.nextReview <= Date.now();
          const hasImgSlot = c.cardType === "type1" || c.cardType === "type5" || c.cardType === "type6";
          return (
            <div key={c.id} className="list-item">
              {hasImgSlot
                ? <ListItemThumb card={c} onClick={() => setPreviewCard(c)} />
                : <div style={{width:"28px"}} />
              }
              <div className="li-main">
                <div className="li-german">{c.german}</div>
                <div className="li-trans">{c.translation}</div>
                {c.note && <div className="li-note">{c.note}</div>}
              </div>
              <div className={`li-next ${isDue ? "due" : ""}`}>{daysUntil(c.nextReview)}</div>
              <div className="li-actions">
                <button className="preview-card-btn" onClick={() => setCardPreview(c)} title="Vista previa">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:"block"}}>
                    <path d="M6.5 1C3.5 1 1 4 1 5C1 6 3.5 9 6.5 9C9.5 9 12 6 12 5C12 4 9.5 1 6.5 1Z" stroke="currentColor" strokeWidth="1.1" fill="none"/>
                    <circle cx="6.5" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.1" fill="none"/>
                  </svg>
                </button>
                <button className="edit-btn" onClick={() => setEditingCard(c)}>✎</button>
                <button className="delete-btn" onClick={() => onDelete(c.id)}>×</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Auth View ─────────────────────────────────────────────────────────────────
const LANGS = [
  {
    code: "de",
    label: "Deutsch",
    flag: (
      <svg viewBox="0 0 28 19" xmlns="http://www.w3.org/2000/svg" style={{ width: 28, flexShrink: 0 }}>
        <rect width="28" height="6.33" y="0" fill="#000"/>
        <rect width="28" height="6.34" y="6.33" fill="#D00"/>
        <rect width="28" height="6.33" y="12.67" fill="#FFCE00"/>
      </svg>
    ),
    accent: "#FFCE00",
  },
  {
    code: "fr",
    label: "Français",
    flag: (
      <svg viewBox="0 0 28 19" xmlns="http://www.w3.org/2000/svg" style={{ width: 28, flexShrink: 0 }}>
        <rect width="9.33" height="19" x="0" fill="#002395"/>
        <rect width="9.34" height="19" x="9.33" fill="#fff"/>
        <rect width="9.33" height="19" x="18.67" fill="#ED2939"/>
      </svg>
    ),
    accent: "#ED2939",
  },
];

function AuthView({ onAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const lang = LANGS.find(l => l.code === "de"); // branding only; no language picker on login

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const data = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      if (data.token) setToken(data.token);
      onAuth(data.username, data.language || "de");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "#111111",
    }}>
      <style>{FONTS}{css}</style>
      <div style={{
        width: "100%", maxWidth: 380, padding: "2.5rem 2rem",
        background: "#1a1a1a", borderRadius: 12, border: "1px solid #2a2a2a",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "2rem" }}>
          {lang.flag}
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#f0ece0" }}>
            Sprachen<span style={{ color: lang.accent }}>Karten</span>
          </span>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text" placeholder="Usuario" value={username} autoComplete="username"
            onChange={e => setUsername(e.target.value)} required
            style={{
              padding: "0.7rem 1rem", borderRadius: 6, border: "1px solid #333",
              background: "#222", color: "#f0ece0", fontFamily: "'DM Mono', monospace",
              fontSize: "0.9rem", outline: "none",
            }}
          />
          <input
            type="password" placeholder="Contraseña" value={password} autoComplete="current-password"
            onChange={e => setPassword(e.target.value)} required
            style={{
              padding: "0.7rem 1rem", borderRadius: 6, border: "1px solid #333",
              background: "#222", color: "#f0ece0", fontFamily: "'DM Mono', monospace",
              fontSize: "0.9rem", outline: "none",
            }}
          />

          {error && (
            <p style={{ color: "#e05c5c", fontSize: "0.8rem", margin: 0 }}>{error}</p>
          )}
          <button type="submit" disabled={loading} style={{
            padding: "0.75rem", borderRadius: 6, border: "none", cursor: "pointer",
            background: lang.accent, color: "#111", fontFamily: "'DM Mono', monospace",
            fontSize: "0.9rem", fontWeight: 600, opacity: loading ? 0.6 : 1,
          }}>
            {loading ? "…" : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  // null = verificando, false = no autenticado, string = username
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState("de");
  const [cards, setCards] = useState([]);
  const [loaded, setLoaded] = useState(false); // true only after this user's cards are fetched
  const [view, setView] = useState("study");
  const [menuOpen, setMenuOpen] = useState(false);

  // Keep the speech-synthesis language in sync with the user's language.
  useEffect(() => { setSpeechLang(language); }, [language]);

  // Restore session on mount: verify the stored token, if any.
  // Await BOTH /auth/me and the cards before any setState, so there is never a
  // committed render where `user` is truthy but `cards` is still the initial [].
  useEffect(() => {
    if (!getToken()) { setUser(false); return; }
    (async () => {
      try {
        const me = await apiFetch("/auth/me");
        const c = await loadCards();
        setUser(me.username);
        setLanguage(me.language || "de");
        setCards(c);
        setLoaded(true);
      } catch {
        clearToken();
        setUser(false);
      }
    })();
  }, []);

  // Persist cards to DB whenever they change (debounced).
  // Guard on `loaded`: never write until this user's deck has actually been
  // fetched, otherwise the initial empty [] could overwrite the stored deck.
  useEffect(() => {
    if (!user || !loaded) return;
    const t = setTimeout(() => { saveCards(cards).catch(() => {}); }, 800);
    return () => clearTimeout(t);
  }, [cards, user, loaded]);

  // Refs kept current for non-React callbacks (beforeunload, logout flush)
  const cardsRef = useRef(cards);
  useEffect(() => { cardsRef.current = cards; }, [cards]);
  const userRef = useRef(user);
  useEffect(() => { userRef.current = user; }, [user]);
  const loadedRef = useRef(loaded);
  useEffect(() => { loadedRef.current = loaded; }, [loaded]);

  // Flush save immediately when the browser tab/window is closing
  useEffect(() => {
    const flush = () => {
      if (!userRef.current || !loadedRef.current) return;
      const cards = cardsRef.current;
      const qs = cards.length === 0 ? "?allowEmpty=true" : "";
      fetch(`${API_BASE}/cards${qs}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify(cards),
        keepalive: true,
      });
    };
    window.addEventListener("beforeunload", flush);
    return () => window.removeEventListener("beforeunload", flush);
  }, []);

  async function handleLogout() {
    if (loaded) await saveCards(cards).catch(() => {});
    clearToken();
    setLoaded(false);
    setUser(false);
    setCards([]);
  }

  async function handleAuth(username, lang) {
    // New user session: block saving until THIS user's cards are loaded, so a
    // switch can't persist an empty/stale deck over the incoming one.
    setLoaded(false);
    setUser(username);
    setLanguage(lang || "de");
    try {
      const c = await loadCards();
      setCards(c);
      setLoaded(true);          // enable saving ONLY after a successful load
    } catch {
      setCards([]);             // show empty UI, but keep loaded=false so we never wipe
    }
  }

  const addCard = useCallback((data) => {
    const card = {
      id: Date.now().toString(),
      cardType: data.cardType || "type1",
      german: data.german,
      translation: data.translation,
      note: data.note || "",
      example: data.example || "",
      exampleTranslation: data.exampleTranslation || "",
      imageUrl: data.imageUrl || null,
      audioUrl: data.audioUrl || null,
      repetitions: 0,
      easiness: 2.5,
      interval: 0,
      nextReview: Date.now(),
      lastGrade: null,
    };
    setCards(prev => [...prev, card]);
  }, []);

  const gradeCard = useCallback((id, updates) => {
    setCards(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  }, []);

  const deleteCard = useCallback((id) => {
    setCards(prev => prev.filter(c => c.id !== id));
  }, []);

  const deleteAllCards = useCallback(() => {
    setCards([]);
  }, []);

  const editCard = useCallback((updated) => {
    setCards(prev => prev.map(c => c.id === updated.id ? updated : c));
  }, []);

  const bulkAddCards = useCallback((items, replace = false) => {
    const now = Date.now();
    const newCards = items.map((data, i) => ({
      id: (now + i).toString(),
      german: data.german.trim(),
      translation: data.translation.trim(),
      note: (data.note || "").trim(),
      cardType: data.cardType || "type1",
      imageUrl: data.imageUrl || null,
      audioUrl: data.audioUrl || null,
      example: data.example || "",
      exampleTranslation: data.exampleTranslation || "",
      repetitions: 0,
      easiness: 2.5,
      interval: 0,
      nextReview: now,
      lastGrade: null,
    }));
    setCards(prev => replace ? newCards : [...prev, ...newCards]);
  }, []);

  // Verificando sesión
  if (user === null) {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "#111111", color: "#888", fontFamily: "'DM Mono', monospace",
      }}>
        <style>{FONTS}</style>
        Cargando…
      </div>
    );
  }

  if (user === false) {
    return <AuthView onAuth={handleAuth} />;
  }

  const VIEWS = [
    { id: "study", label: "Repasar" },
    { id: "add", label: "+ Agregar" },
    { id: "list", label: "Lista" },
    { id: "stats", label: "Estado" },
  ];

  return (
    <>
      <style>{FONTS}{css}</style>
      <div className="noise" />
      <div className="app">
        <header className="header">
          <div className="logo">
            {language === "fr" ? (
              <svg className="logo-flag" viewBox="0 0 28 19" xmlns="http://www.w3.org/2000/svg">
                <rect width="9.33" height="19" x="0" fill="#002395"/>
                <rect width="9.34" height="19" x="9.33" fill="#fff"/>
                <rect width="9.33" height="19" x="18.67" fill="#ED2939"/>
              </svg>
            ) : (
              <svg className="logo-flag" viewBox="0 0 28 19" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="6.33" y="0" fill="#000"/>
                <rect width="28" height="6.34" y="6.33" fill="#D00"/>
                <rect width="28" height="6.33" y="12.67" fill="#FFCE00"/>
              </svg>
            )}
            <div className="logo-text">
              {language === "fr" ? <>Français<span>Cartes</span></> : <>Deutsch<span>Karten</span></>}
            </div>
          </div>
          <nav className="nav">
            {VIEWS.map(v => (
              <button
                key={v.id}
                className={`nav-btn ${view === v.id ? "active" : ""}`}
                onClick={() => setView(v.id)}
              >{v.label}</button>
            ))}
            <button
              className="nav-btn"
              onClick={handleLogout}
              title={`Sesión: ${user}`}
              style={{ marginLeft: "auto", opacity: 0.6 }}
            >↩ {user}</button>
          </nav>

          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menú"
            aria-expanded={menuOpen}
          >{menuOpen ? "✕" : "☰"}</button>

          {menuOpen && (
            <>
              <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />
              <div className="menu-panel">
                {VIEWS.map(v => (
                  <button
                    key={v.id}
                    className={`menu-item ${view === v.id ? "active" : ""}`}
                    onClick={() => { setView(v.id); setMenuOpen(false); }}
                  >{v.label}</button>
                ))}
                <button
                  className="menu-item menu-logout"
                  onClick={() => { setMenuOpen(false); handleLogout(); }}
                >↩ {user}</button>
              </div>
            </>
          )}
        </header>

        {view === "study" && <StudyView cards={cards} onGrade={gradeCard} onUpdateCards={setCards} language={language} />}
        {view === "add" && <AddView onAdd={card => { addCard(card); setView("study"); }} onBulkAdd={(items, replace) => { bulkAddCards(items, replace); setView("list"); }} language={language} />}
        {view === "list" && <ListView cards={cards} onDelete={deleteCard} onDeleteAll={deleteAllCards} onEdit={editCard} language={language} />}
        {view === "stats" && <StatsView cards={cards} />}
      </div>
    </>
  );
}
