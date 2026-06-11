// ── Settings view ─────────────────────────────────────────────────────────────
// Single setting for now: the daily new-card limit (stepper + presets).

import { DEFAULT_NEW_LIMIT, newIntroducedToday } from "../srs.js";

export default function SettingsView({ stats, onChangeLimit }) {
  const limit = stats?.dailyNewLimit ?? DEFAULT_NEW_LIMIT;
  const newDoneToday = newIntroducedToday(stats);
  const presets = [5, 10, 15, 20, 30, 50];
  const setLimit = n => onChangeLimit(Math.max(0, Math.min(200, n)));

  return (
    <div className="settings-view">
      <div className="settings-section">
        <div className="settings-label">Tarjetas nuevas por día</div>
        <p className="settings-help">
          Cuántas tarjetas que nunca has visto entran al repaso cada día. Los repasos de
          tarjetas que ya aprendiste no tienen límite — siempre aparecen cuando toca.
        </p>

        <div className="settings-stepper">
          <button className="step-btn" onClick={() => setLimit(limit - 5)} disabled={limit <= 0}>−</button>
          <div className="step-val">{limit}</div>
          <button className="step-btn" onClick={() => setLimit(limit + 5)} disabled={limit >= 200}>+</button>
        </div>

        <div className="settings-presets">
          {presets.map(p => (
            <button
              key={p}
              className={`preset-chip ${limit === p ? "active" : ""}`}
              onClick={() => setLimit(p)}
            >{p}</button>
          ))}
        </div>

        <p className="settings-note">
          Recomendado: <strong>20</strong> al día — un ritmo sostenible para aprender un
          idioma sin saturarte de repasos. Pon <strong>0</strong> para pausar las nuevas y
          repasar solo lo que ya tienes.
        </p>

        <div className="settings-today">
          Hoy: <strong>{newDoneToday}/{limit}</strong> nuevas introducidas
        </div>
      </div>
    </div>
  );
}
