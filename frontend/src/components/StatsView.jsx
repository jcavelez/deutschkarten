// ── Stats view ────────────────────────────────────────────────────────────────
// Streak banner, deck-distribution chart, KPI cards and the leech list.

import { useState } from "react";
import { fetchExplanation } from "../api.js";
import { DEFAULT_NEW_LIMIT, dayDiff, isFreshCard, isLeech, localDateStr, newIntroducedToday } from "../srs.js";
import { EditModal } from "./modals.jsx";

// A single leech in the stats list, with its own AI-hint workflow. Saving the
// hint resets `lapses` to 0 so the card gets a fresh start out of leech status.
function LeechItem({ card, onEdit, onConvert }) {
  const [loading, setLoading] = useState(false);
  const [hint, setHint] = useState(null);
  const [error, setError] = useState(null);

  async function generate() {
    setLoading(true);
    setError(null);
    try {
      setHint(await fetchExplanation(card, "mnemonic"));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function save() {
    onEdit({ ...card, note: hint, lapses: 0 });
  }

  return (
    <div className="list-item leech-item">
      <div style={{ width: "28px" }} />
      <div className="li-main">
        <div className="li-german">{card.german}</div>
        <div className="li-trans">{card.translation}</div>
        {hint && <div className="leech-hint">{hint}</div>}
        {error && <div className="leech-error">{error}</div>}
        <div className="leech-actions">
          <button className="leech-btn" onClick={generate} disabled={loading}>
            {loading ? "Consultando IA…" : hint ? "Otra pista" : "✦ Generar pista"}
          </button>
          {hint && (
            <button className="leech-btn primary" onClick={save}>
              Guardar como nota
            </button>
          )}
          <button className="leech-btn" onClick={() => onConvert(card)}>
            🖼 Convertir a imagen
          </button>
        </div>
      </div>
      <div className="leech-badge" title="Veces olvidada">{card.lapses}×</div>
    </div>
  );
}

export default function StatsView({ cards, stats, onEdit, language }) {
  const now = Date.now();
  const DAY = 86400000;
  const [converting, setConverting] = useState(null);

  // Streak/daily figures (a streak is "alive" only if last active day is today
  // or yesterday; today's count only applies if `day` is actually today).
  const todayStr = localDateStr();
  const todayCount = stats && stats.day === todayStr ? stats.todayCount : 0;
  const streakAlive = stats && stats.day && dayDiff(stats.day, todayStr) <= 1;
  const currentStreak = streakAlive ? stats.currentStreak : 0;
  const longestStreak = stats?.longestStreak ?? 0;

  const buckets = [
    { label: "Nuevas",   color: "#BE5B38", count: 0 },
    { label: "Hoy",      color: "#D97757", count: 0 },
    { label: "Mañana",   color: "#E29874", count: 0 },
    { label: "3–7 días", color: "#EBB694", count: 0 },
    { label: "8–30 días",color: "#F1CFB4", count: 0 },
    { label: "+30 días", color: "#F5E3D0", count: 0 },
  ];

  // "Nuevas" = never graded. Relapsed cards (repetitions back at 0 but already
  // graded before) fall through to the time buckets like any other review.
  for (const c of cards) {
    const days = (c.nextReview - now) / DAY;
    if (isFreshCard(c))            buckets[0].count++;
    else if (days <= 0)            buckets[1].count++;
    else if (days <= 1)            buckets[2].count++;
    else if (days <= 7)            buckets[3].count++;
    else if (days <= 30)           buckets[4].count++;
    else                           buckets[5].count++;
  }

  const max = Math.max(...buckets.map(b => b.count), 1);
  const total = cards.length;
  const leeches = cards.filter(isLeech).sort((a, b) => (b.lapses ?? 0) - (a.lapses ?? 0));

  // "To study today" honours the daily new-card limit: all due reviews plus only
  // the new cards that still fit in today's budget.
  const newLimit = stats?.dailyNewLimit ?? DEFAULT_NEW_LIMIT;
  const newDoneToday = newIntroducedToday(stats);
  const freshDue = cards.filter(c => c.nextReview <= now && isFreshCard(c)).length;
  const reviewsDue = cards.filter(c => c.nextReview <= now && !isFreshCard(c)).length;
  const toStudyToday = reviewsDue + Math.min(freshDue, Math.max(0, newLimit - newDoneToday));

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

      <div className="streak-banner">
        <div className="streak-main">
          <span className="streak-flame">🔥</span>
          <span className="streak-num">{currentStreak}</span>
          <span className="streak-unit">{currentStreak === 1 ? "día" : "días"} de racha</span>
        </div>
        <div className="streak-sub">
          <span>Hoy: <strong>{todayCount}</strong></span>
          <span>Récord: <strong>{longestStreak}</strong></span>
        </div>
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
          <div className="kpi-val" style={{ color: "var(--accent-strong)" }}>
            {toStudyToday}
          </div>
          <div className="kpi-label">para estudiar hoy</div>
        </div>
        <div className="stats-kpi">
          <div className="kpi-val" style={{ color: "var(--ok)" }}>
            {(cards.filter(c => c.repetitions > 0 && c.interval >= 21).length)}
          </div>
          <div className="kpi-label">maduras (≥21 días)</div>
        </div>
        <div className="stats-kpi">
          <div className="kpi-val" style={{ color: "var(--text-dim)" }}>
            {total > 0 ? (cards.reduce((s,c) => s + c.easiness, 0) / total).toFixed(2) : "—"}
          </div>
          <div className="kpi-label">easiness promedio</div>
        </div>
        <div className="stats-kpi">
          <div className="kpi-val" style={{ color: "var(--danger)" }}>
            {leeches.length}
          </div>
          <div className="kpi-label">difíciles</div>
        </div>
      </div>

      {leeches.length > 0 && (
        <div className="leech-section">
          <div className="leech-title">Cartas difíciles</div>
          <div className="card-list">
            {leeches.map(c => (
              <LeechItem key={c.id} card={c} onEdit={onEdit} onConvert={setConverting} />
            ))}
          </div>
        </div>
      )}

      {converting && (
        <EditModal
          card={{ ...converting, cardType: "type1" }}
          language={language}
          onSave={updated => { onEdit({ ...updated, lapses: 0 }); setConverting(null); }}
          onClose={() => setConverting(null)}
        />
      )}
    </div>
  );
}
