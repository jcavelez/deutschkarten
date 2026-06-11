// ── Card types, per-language labels and card validation ──────────────────────

// Definite articles shown on Type 6 (article) cards, by language. French keeps
// the elided "l'" so vowel-initial nouns still get a valid choice.
export const ARTICLES = { de: ["der", "die", "das"], fr: ["le", "la", "l'"] };

// Language-specific labels and example placeholders for the Add form, so the UI
// matches the user's target language instead of always saying "alemán/DE".
export const LANG_LABELS = {
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

// Short descriptive name per card type, shown on form buttons and study badges.
// (There is no type3 — historical gap.)
export const CARD_TYPE_NAMES = {
  type1: "Imagen",
  type2: "Ejemplo",
  type4: "Traducir",
  type5: "Completar",
  type6: "Artículo",
};

// Card types whose front can carry an image.
export const IMAGE_CARD_TYPES = ["type1", "type5", "type6"];
export function cardHasImageSlot(card) {
  return IMAGE_CARD_TYPES.includes(card.cardType);
}

// Card-type options for the add/edit forms: short descriptive name + a tooltip
// explaining how each works. Tips adapt to the user's target language.
export function getCardTypeOptions(language) {
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
export function parseArticle(word, language = "de") {
  const articles = ARTICLES[language] || ARTICLES.de;
  const raw = (word || "").trim();
  const lower = raw.toLowerCase();
  const correct = articles.find(a =>
    a.endsWith("'") ? lower.startsWith(a) : lower.startsWith(a + " ")
  ) || "";
  const bare = correct ? raw.slice(correct.length).trimStart() : raw;
  return { articles, correct, bare };
}

// Validate the user-editable fields of a card before saving.
// Returns an error message for the user, or null if the card is valid.
export function validateCard({ cardType, german, translation, example }, language) {
  if (!german?.trim() || !translation?.trim())
    return "Completa la palabra y la traducción.";
  if (cardType === "type5" && !(example || "").includes("___"))
    return "Las tarjetas de Completar necesitan una oración con ___ donde va la palabra.";
  if (cardType === "type6" && !parseArticle(german, language).correct) {
    const options = (ARTICLES[language] || ARTICLES.de).join(", ");
    return `Las tarjetas de Artículo deben empezar con el artículo: ${options}.`;
  }
  return null;
}

// ── Review grades (SM-2 scale 0-5) ────────────────────────────────────────────
export const GRADES = [
  { n: 0, label: "Nada" },
  { n: 1, label: "Mal" },
  { n: 2, label: "Difícil" },
  { n: 3, label: "Ok" },
  { n: 4, label: "Bien" },
  { n: 5, label: "Fácil" },
];
