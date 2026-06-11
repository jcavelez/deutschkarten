// ── Interactive answer zones (card types 4, 5 and 6) ─────────────────────────
// Types 4 and 5 share the same flow (type the answer → check or reveal →
// self-grade); they only differ in placeholder and feedback wording, so both
// delegate to WrittenAnswerZone. Type 6 is multiple-choice and auto-grades.

import { useState, useEffect, useRef } from "react";
import { GRADES, LANG_LABELS, parseArticle } from "../cardTypes.js";
import { playCard } from "../speech.js";

// The 0-5 self-grading bar (also used by StudyView for flip cards).
export function GradeButtons({ onGrade }) {
  return (
    <div className="grades">
      {GRADES.map(({ n, label }) => (
        <button key={n} className={`grade-btn g${n}`} onClick={() => onGrade(n)}>
          <span className="grade-num">{n}</span>
          <span className="grade-label">{label}</span>
        </button>
      ))}
    </div>
  );
}

// "Explain with AI" button plus the returned explanation (also used by StudyView).
export function ExplainSection({ onExplain, explaining, explanation }) {
  return (
    <>
      <button className="explain-btn" onClick={onExplain} disabled={explaining}>
        {explaining ? "Consultando IA…" : "✦ Explicar con IA"}
      </button>
      {explanation && <div className="explanation">{explanation}</div>}
    </>
  );
}

// Small round ▶ button used inside feedback rows.
function ReplayButton({ card }) {
  return (
    <button className="audio-replay-btn small" onClick={() => playCard(card)} title="Pronunciar">▶</button>
  );
}

// Shared type-the-answer flow. `messages` holds the feedback JSX per result:
// { correct, wrong, revealed }.
function WrittenAnswerZone({ card, placeholder, messages, onGrade, onExplain, explaining, explanation }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null); // null | "correct" | "wrong" | "revealed"
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

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
          placeholder={placeholder}
          disabled={!!result}
        />
        <button className="answer-check-btn" onClick={check} disabled={!!result || !value.trim()}>OK</button>
        <button className="reveal-btn" onClick={reveal} disabled={!!result}>Revelar</button>
      </div>

      {(result === "correct" || result === "wrong") && (
        <>
          <div className={`answer-feedback ${result}`} style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
            <span style={{minWidth:0}}>{messages[result]}</span>
            <ReplayButton card={card} />
          </div>
          <GradeButtons onGrade={onGrade} />
        </>
      )}

      {result === "revealed" && (
        <div className="answer-feedback wrong" style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
            <span style={{minWidth:0}}>{messages.revealed}</span>
            <ReplayButton card={card} />
          </div>
          <button className="continuar-btn" onClick={() => onGrade(0)}>Continuar</button>
        </div>
      )}

      {!!result && <ExplainSection onExplain={onExplain} explaining={explaining} explanation={explanation} />}
    </div>
  );
}

// Type 4: shown the Spanish, type the word in the target language.
export function AnswerZoneType4({ card, language, ...rest }) {
  const L = LANG_LABELS[language] || LANG_LABELS.de;
  return (
    <WrittenAnswerZone
      card={card}
      placeholder={`Escribe en ${L.name.toLowerCase()}…`}
      messages={{
        correct: <>✓ ¡Correcto!</>,
        wrong: <>✗ La respuesta es: <strong>{card.german}</strong></>,
        revealed: <>👁 La respuesta es: <strong>{card.german}</strong></>,
      }}
      {...rest}
    />
  );
}

// Type 5: fill in the blank of the example sentence.
export function AnswerZoneType5({ card, ...rest }) {
  const fullSentence = (card.example || "").replace("___", card.german);
  return (
    <WrittenAnswerZone
      card={card}
      placeholder="Completa el espacio…"
      messages={{
        correct: <>✓ ¡Correcto! — {fullSentence}</>,
        wrong: <>✗ Era: <strong>{card.german}</strong> — {fullSentence}</>,
        revealed: <>👁 <strong>{card.german}</strong> — {fullSentence}</>,
      }}
      {...rest}
    />
  );
}

// Type 6: pick the article. Auto-grades: correct = 5, wrong = 1.
export function AnswerZoneType6({ card, language, onGrade, onExplain, explaining, explanation }) {
  const [picked, setPicked] = useState(null);
  const { articles, correct } = parseArticle(card.german, language);

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
            onClick={() => setPicked(art)}
            disabled={!!picked}
          >
            {art}
          </button>
        ))}
      </div>
      {picked && (
        <>
          <div className={`answer-feedback ${picked === correct ? "correct" : "wrong"}`} style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
            <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
              <span style={{minWidth:0}}>{picked === correct ? `✓ Correcto — ${card.german}` : `✗ Es ${correct} — ${card.german}`}</span>
              <ReplayButton card={card} />
            </div>
            {card.note && <div className="card-note">{card.note}</div>}
            <button className="continuar-btn" onClick={() => onGrade(picked === correct ? 5 : 1)}>Continuar</button>
          </div>
          <ExplainSection onExplain={onExplain} explaining={explaining} explanation={explanation} />
        </>
      )}
    </div>
  );
}
