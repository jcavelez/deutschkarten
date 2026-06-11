// ── Help / info view ──────────────────────────────────────────────────────────
// Static explanation of spaced repetition, the daily cycle and the card types.

import { LANG_LABELS, getCardTypeOptions } from "../cardTypes.js";

export default function HelpView({ language }) {
  const langName = (LANG_LABELS[language] || LANG_LABELS.de).name.toLowerCase();
  const cardTypes = getCardTypeOptions(language);

  return (
    <div className="help-view">
      <p className="help-intro">
        Una app de tarjetas con <strong>repetición espaciada</strong> para aprender {langName} desde
        el español. En vez de repasar todo cada día, te muestra cada palabra justo cuando estás a
        punto de olvidarla.
      </p>

      <div className="help-section">
        <div className="help-section-title">Cómo te ayuda a aprender</div>
        <p>
          <strong>Repetición espaciada.</strong> Cada palabra reaparece en intervalos crecientes
          (1 día → 6 días → semanas → meses). Repasar justo antes de olvidar fija la memoria a largo
          plazo con el mínimo esfuerzo.
        </p>
        <p>
          <strong>Recuerdo activo.</strong> Te esfuerzas en recordar antes de ver la respuesta. Ese
          esfuerzo es lo que construye memoria — releer no.
        </p>
        <p>
          <strong>Calificación honesta.</strong> Al responder dices qué tan bien la recordaste y eso
          ajusta cuándo vuelve: si fallas regresa pronto; si la dominas, se espacia.
        </p>
      </div>

      <div className="help-section">
        <div className="help-section-title">El ciclo diario</div>
        <p>
          En <strong>Estado</strong> ves cuántas tarjetas tocan hoy y cómo se reparten en el tiempo
          (Nuevas, Hoy, Mañana, 3–7 días…). Repasa lo que toca cada día: la racha 🔥 premia la
          constancia, y poco y a diario rinde más que sesiones largas y salteadas.
        </p>
      </div>

      <div className="help-section">
        <div className="help-section-title">Tipos de tarjeta</div>
        <p>Cada tipo ataca la palabra desde un ángulo distinto. Variar refuerza el recuerdo:</p>
        <ul className="help-types">
          {cardTypes.map(t => (
            <li key={t.id}>
              <span className="help-type-name">{t.name}</span>
              <span className="help-type-tip">{t.tip}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="help-section">
        <div className="help-section-title">Sácale provecho</div>
        <ul className="help-tips">
          <li>Estudia un poco <strong>cada día</strong>: 10 minutos diarios cunden más que dos horas el domingo.</li>
          <li>Califica con honestidad — engañarte solo retrasa lo que de verdad no sabes.</li>
          <li>Añade <strong>ejemplos e imágenes</strong>: el contexto y lo visual anclan mejor que una palabra suelta.</li>
          <li>Usa el audio 🔊 para fijar la pronunciación desde el principio.</li>
          <li>¿Muchas palabras de golpe? En <strong>+ Agregar</strong> puedes pegar una lista en lote.</li>
          <li>
            En <strong>Estado</strong>, revisa <strong>Cartas difíciles</strong>: las que olvidas una
            y otra vez. Genera una pista mnemónica con IA o conviértelas en tarjeta con imagen para
            romper el bloqueo.
          </li>
        </ul>
      </div>
    </div>
  );
}
