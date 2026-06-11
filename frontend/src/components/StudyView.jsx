// ── Study view ────────────────────────────────────────────────────────────────
// Shows one due card at a time: flip types (1, 2) flip then self-grade;
// interactive types (4, 5, 6) answer first. Grading runs SM-2 via onGrade and
// the queue reshuffles. When the last due card is graded, a celebration pops.

import { Fragment, useState, useEffect, useMemo, useCallback } from "react";
import { fetchExplanation } from "../api.js";
import { DEFAULT_NEW_LIMIT, isFreshCard, newIntroducedToday, sm2 } from "../srs.js";
import { playCard, cancelSpeech } from "../speech.js";
import {
  CardType1Front, CardType1Back, CardType2Front, CardType2Back,
  CardType4Front, CardType5Front, CardType6Front,
} from "./CardFaces.jsx";
import { AnswerZoneType4, AnswerZoneType5, AnswerZoneType6, GradeButtons, ExplainSection } from "./AnswerZones.jsx";

const FLIP_TYPES        = ["type1", "type2"];
const INTERACTIVE_TYPES = ["type4", "type5", "type6"];
const FLIP_ANIMATION_MS = 560; // matches .card-inner transition (0.55s)

const CONFETTI_COLORS = ["#D97757", "#C15F3C", "#5A7A4E", "#D9A05B", "#8A6FA6"];

function Celebration({ count, streak, onClose }) {
  const pieces = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 1.6 + Math.random() * 1.3,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      size: 6 + Math.random() * 6,
    })), []);

  return (
    <div className="celebrate-overlay" onClick={onClose}>
      <div className="confetti">
        {pieces.map((p, i) => (
          <span key={i} className="confetti-piece" style={{
            left: `${p.left}%`,
            background: p.color,
            width: p.size, height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }} />
        ))}
      </div>
      <div className="celebrate-card" onClick={e => e.stopPropagation()}>
        <div className="celebrate-emoji">🎉</div>
        <h2 className="celebrate-title">¡Felicitaciones!</h2>
        <p className="celebrate-text">Terminaste tus repasos del día.</p>
        <p className="celebrate-count">
          Repasaste <strong>{count}</strong> {count === 1 ? "tarjeta" : "tarjetas"} hoy.
        </p>
        {streak > 0 && (
          <p className="celebrate-streak">
            🔥 Racha: <strong>{streak}</strong> {streak === 1 ? "día" : "días"} seguidos
          </p>
        )}
        <button className="celebrate-btn" onClick={onClose}>Continuar</button>
      </div>
    </div>
  );
}

export default function StudyView({ cards, onGrade, language, stats }) {
  const [flipped, setFlipped] = useState(false);
  const [explaining, setExplaining] = useState(false);
  const [explanation, setExplanation] = useState(null);
  const [interactiveKey, setInteractiveKey] = useState(0); // remounts the answer zone per card
  const [transitioning, setTransitioning] = useState(false);
  const [reviewed, setReviewed] = useState(0);   // graded this session
  const [celebrate, setCelebrate] = useState(false);

  // Daily new-card budget: how many fresh cards may still enter today.
  const newLimit = stats?.dailyNewLimit ?? DEFAULT_NEW_LIMIT;
  const newDoneToday = newIntroducedToday(stats);
  const newRemaining = Math.max(0, newLimit - newDoneToday);

  // Due queue = all due reviews + up to `newRemaining` brand-new cards, shuffled.
  // The string dep means we only reshuffle when a due date changes (grading),
  // not on unrelated edits like fixing a note.
  const due = useMemo(() => {
    const dueList = cards.filter(c => c.nextReview <= Date.now());
    const reviews = dueList.filter(c => !isFreshCard(c));
    const fresh = dueList.filter(isFreshCard).slice(0, newRemaining);
    const list = [...reviews, ...fresh];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, [cards.map(c => c.id + c.nextReview).join(","), newRemaining]);

  const card = due[0];

  const playCurrent = useCallback(() => { playCard(card); }, [card]);

  // Auto-play on flip for type1 and type2
  useEffect(() => {
    if (flipped && FLIP_TYPES.includes(card?.cardType)) {
      const t = setTimeout(() => playCard(card), 350);
      return () => clearTimeout(t);
    }
  }, [flipped, card]);

  const handleGrade = (g) => {
    if (transitioning) return;
    cancelSpeech();

    const isLast = due.length === 1; // grading this empties today's queue
    const isFlipType = FLIP_TYPES.includes(card?.cardType);
    const wasNew = isFreshCard(card);

    const commit = () => {
      onGrade(card.id, sm2(card, g), wasNew);
      setExplanation(null);
      setInteractiveKey(k => k + 1);
      setReviewed(n => n + 1);
      if (isLast) setCelebrate(true);
    };

    if (isFlipType && flipped) {
      // Flip back to front, then commit grade after animation
      setTransitioning(true);
      setFlipped(false);
      setTimeout(() => {
        commit();
        setTransitioning(false);
      }, FLIP_ANIMATION_MS);
    } else {
      // Interactive types or non-flipped: advance immediately, no animation needed
      commit();
      setFlipped(false);
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

  if (!due.length) {
    // Distinguish "nothing left" from "daily new-card limit reached".
    const lockedNew = cards.some(c => c.nextReview <= Date.now() && isFreshCard(c));
    return (
      <>
        <div className="deck-empty">
          {lockedNew ? (
            <p>Alcanzaste tu límite de <strong>{newLimit}</strong> tarjetas nuevas por hoy.<br />
              Vuelve mañana, o súbelo en <strong>Ajustes</strong> si quieres seguir.</p>
          ) : (
            <p>Sin repasos pendientes.<br />Vuelve mañana — el sistema hace el resto.</p>
          )}
        </div>
        {celebrate && <Celebration count={stats?.todayCount ?? reviewed} streak={stats?.currentStreak ?? 0} onClose={() => setCelebrate(false)} />}
      </>
    );
  }

  const cardType = card.cardType || "type1";
  const isInteractive = INTERACTIVE_TYPES.includes(cardType);
  const isFlipType    = FLIP_TYPES.includes(cardType);

  return (
    <div>
      <div className="session-info">
        <span>Pendientes: <strong>{due.length}</strong></span>
        <span>Nuevas hoy: <strong>{newDoneToday}/{newLimit}</strong></span>
        <span>Total: <strong>{cards.length}</strong></span>
      </div>

      {/* ── Flip card (types 1 & 2) ── */}
      {isFlipType && (
        <div className="card-scene" onClick={() => !transitioning && setFlipped(f => !f)}>
          <div className={`card-inner ${flipped ? "flipped" : ""}`}>
            <div className="card-face front">
              {cardType === "type1" && <CardType1Front card={card} />}
              {cardType === "type2" && <CardType2Front card={card} language={language} />}
            </div>
            <div className="card-face back">
              {cardType === "type1" && <CardType1Back card={card} onSpeak={playCurrent} />}
              {cardType === "type2" && <CardType2Back card={card} onSpeak={playCurrent} />}
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
      {isInteractive && (() => {
        const zoneProps = { card, onGrade: handleGrade, onExplain: handleExplain, explaining, explanation };
        return (
          <Fragment key={interactiveKey}>
            {cardType === "type4" && <AnswerZoneType4 language={language} {...zoneProps} />}
            {cardType === "type5" && <AnswerZoneType5 {...zoneProps} />}
            {cardType === "type6" && <AnswerZoneType6 language={language} {...zoneProps} />}
          </Fragment>
        );
      })()}

      {/* ── Grade + explain for flip types ── */}
      {isFlipType && flipped && (
        <>
          <GradeButtons onGrade={handleGrade} />
          <ExplainSection onExplain={handleExplain} explaining={explaining} explanation={explanation} />
        </>
      )}
    </div>
  );
}
