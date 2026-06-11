// ── Pronunciation (Web Speech API + attached audio) ──────────────────────────

import { mediaUrl } from "./api.js";

// BCP-47 tags for speech synthesis, keyed by the app's language code.
const SPEECH_LANG = { de: "de-DE", fr: "fr-FR" };

// Voices load asynchronously; the first getVoices() call is often empty, which
// would leave us with the browser's default voice (wrong accent). Cache them and
// refresh when the browser fires voiceschanged.
let cachedVoices = [];
function refreshVoices() {
  if (window.speechSynthesis) cachedVoices = window.speechSynthesis.getVoices() || [];
}
if (typeof window !== "undefined" && window.speechSynthesis) {
  refreshVoices();
  window.speechSynthesis.addEventListener?.("voiceschanged", refreshVoices);
}

// Pick the best installed voice for a BCP-47 code: exact match first, then any
// voice in the same language (e.g. fr-CA for fr-FR).
function pickVoice(code) {
  const voices = cachedVoices.length ? cachedVoices : (window.speechSynthesis?.getVoices() || []);
  const want = code.toLowerCase();
  const prefix = want.slice(0, 2);
  const norm = v => v.lang.replace("_", "-").toLowerCase();
  return voices.find(v => norm(v) === want)
      || voices.find(v => norm(v).startsWith(prefix))
      || null;
}

// Current language for pronunciation. Set from <App> so speak() stays callable
// from leaf components without threading the prop through every call site.
let speechLang = "de";
export function setSpeechLang(code) { if (SPEECH_LANG[code]) speechLang = code; }

export function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  const code = SPEECH_LANG[speechLang] || "de-DE";
  utt.lang = code;
  utt.rate = 0.9;
  // Prefer a voice matching the active language if available
  const voice = pickVoice(code);
  if (voice) utt.voice = voice;
  window.speechSynthesis.speak(utt);
}

// Pronounce a card: play its attached audio file if it has one, otherwise fall
// back to synthesized speech of the word.
export function playCard(card) {
  if (!card) return;
  if (card.audioUrl) {
    window.speechSynthesis?.cancel();
    const audio = new Audio(mediaUrl(card.audioUrl));
    audio.play().catch(() => speak(card.german));
    return;
  }
  speak(card.german);
}

export function cancelSpeech() {
  window.speechSynthesis?.cancel();
}
