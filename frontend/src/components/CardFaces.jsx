// ── Card faces ────────────────────────────────────────────────────────────────
// One Front (and Back, for flip types) component per card type. These are
// purely presentational; grading and answer-checking live in StudyView and
// AnswerZones.

import { Fragment } from "react";
import { mediaUrl } from "../api.js";
import { CARD_TYPE_NAMES, LANG_LABELS, parseArticle } from "../cardTypes.js";

// Wrap every occurrence of the card's word (without its article) in <em> so it
// stands out inside the example sentence.
function highlightWord(text, word, language) {
  if (!text || !word) return text;
  const bare = parseArticle(word, language).bare || word;
  const escaped = bare.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Splitting on a capture group keeps the matches in the result, at the odd
  // indices: ["Der ", "Hund", " läuft."]
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return parts.map((p, i) => (i % 2 === 1 ? <em key={i}>{p}</em> : p));
}

export function CardType1Front({ card }) {
  return (
    <div className="t1-front">
      <div className="card-type-badge">{CARD_TYPE_NAMES.type1}</div>
      {card.imageUrl
        ? <img className="t1-front-img" src={mediaUrl(card.imageUrl)} alt="" />
        : <div style={{fontSize:"0.75rem",color:"var(--text-faint)",border:"1px dashed var(--border-input)",padding:"1.5rem 2rem",borderRadius:"10px"}}>sin imagen</div>
      }
      <div className="t1-front-hint">toca para voltear</div>
    </div>
  );
}

export function CardType1Back({ card, onSpeak }) {
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

export function CardType2Front({ card, language }) {
  return (
    <>
      <div className="card-type-badge">{CARD_TYPE_NAMES.type2}</div>
      <div className="card-hint">toca para voltear</div>
      <div className="t2-front">
        <div className="t2-word">{card.german}</div>
        {card.example && (
          <>
            <div className="t2-divider" />
            <div className="t2-example">{highlightWord(card.example, card.german, language)}</div>
          </>
        )}
      </div>
    </>
  );
}

export function CardType2Back({ card, onSpeak }) {
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
          onClick={e => { e.stopPropagation(); onSpeak(); }}
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

export function CardType4Front({ card, language }) {
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

export function CardType5Front({ card }) {
  const sentence = card.example || "";
  const parts = sentence.split("___");
  return (
    <div className="t5-front">
      <div className="card-type-badge">{CARD_TYPE_NAMES.type5}</div>
      {card.imageUrl && <img className="t1-front-img" src={mediaUrl(card.imageUrl)} alt="" style={{position:"relative",inset:"auto",width:"auto",height:"45%",maxWidth:"80%",marginBottom:"0.25rem"}} />}
      <div className="t5-sentence">
        {parts.map((part, i) => (
          <Fragment key={i}>
            {part}
            {i < parts.length - 1 && <span className="t5-blank">_____</span>}
          </Fragment>
        ))}
      </div>
      {card.note && <div className="t4-note" style={{fontSize:"0.62rem"}}>{card.note}</div>}
    </div>
  );
}

export function CardType6Front({ card, language }) {
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
