// ── Backend API client ────────────────────────────────────────────────────────
// All HTTP traffic with the Express backend lives here: auth token storage,
// the generic fetch wrapper, and one function per endpoint.

export const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// ── Auth token (Bearer, stored in localStorage) ──────────────────────────────
const TOKEN_KEY = "dk_token";
export const getToken   = () => localStorage.getItem(TOKEN_KEY);
export const setToken   = (t) => localStorage.setItem(TOKEN_KEY, t);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

export function authHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiFetch(path, opts = {}) {
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

// Resolve a card's media URL: external URLs pass through, uploaded files
// (stored as "/media/<file>") are served by the backend.
export function mediaUrl(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${API_BASE}${url}`;
}

// ── Cards & stats ─────────────────────────────────────────────────────────────
export async function loadCards() {
  return apiFetch("/cards");
}

export async function saveCards(cards) {
  // An empty deck is destructive server-side, so it must opt in explicitly.
  // We only reach here with [] after the deck was genuinely loaded then emptied
  // by the user — the `loaded` guard in <App> blocks the startup race.
  const qs = cards.length === 0 ? "?allowEmpty=true" : "";
  return apiFetch(`/cards${qs}`, { method: "PUT", body: JSON.stringify(cards) });
}

export async function loadStats() {
  return apiFetch("/stats");
}

export async function saveStats(stats) {
  return apiFetch("/stats", { method: "PUT", body: JSON.stringify(stats) });
}

// ── AI explanation ────────────────────────────────────────────────────────────
// mode: undefined = full explanation, "mnemonic" = single short memory hint.
export async function fetchExplanation(card, mode) {
  return apiFetch("/explain", {
    method: "POST",
    body: JSON.stringify({ german: card.german, translation: card.translation, note: card.note || "", mode }),
  }).then(d => d.text);
}

// ── Media upload ──────────────────────────────────────────────────────────────
export async function uploadMedia(file) {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch(`${API_BASE}/upload`, { method: "POST", body: fd, headers: authHeaders() });
  if (!res.ok) throw new Error("Error al subir archivo.");
  return res.json();
}

export async function deleteMedia(url) {
  const filename = url.split("/media/")[1];
  if (!filename) return;
  await fetch(`${API_BASE}/media/${filename}`, { method: "DELETE", headers: authHeaders() });
}
