// ── Card modals ───────────────────────────────────────────────────────────────
// ImagePreviewModal: view/replace a card's image URL (opened from the list).
// CardPreviewModal: read-only front/back preview of how a card looks.
// EditModal: edit every user-facing field of a card.

import { useState } from "react";
import { mediaUrl } from "../api.js";
import { LANG_LABELS, IMAGE_CARD_TYPES, getCardTypeOptions, parseArticle, validateCard } from "../cardTypes.js";

export function ImagePreviewModal({ card, onSave, onClose }) {
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

export function CardPreviewModal({ card, language, onClose }) {
  const type = card.cardType || "type1";
  const { bare } = parseArticle(card.german, language);
  const fullSentence = (card.example || "").replace("___", card.german);

  return (
    <div className="img-preview-overlay" onClick={onClose}>
      <div className="card-preview-dialog" onClick={e => e.stopPropagation()}>
        <div className="img-preview-header">
          <div className="img-preview-word">
            <span style={{fontSize:"0.6rem",color:"var(--text-dim)",letterSpacing:"0.1em",textTransform:"uppercase",marginRight:"0.5rem"}}>
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
              <div className="card-preview-big" style={{color:"var(--text-faint)"}}>___ {bare}</div>
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
                {card.exampleTranslation && <div className="card-preview-example" style={{color:"var(--text-dim)"}}>"{card.exampleTranslation}"</div>}
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

export function EditModal({ card, onSave, onClose, language }) {
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
  const [formError, setFormError] = useState(null);

  const handleSave = () => {
    const error = validateCard({ cardType, german, translation, example }, language);
    if (error) { setFormError(error); return; }
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
          {IMAGE_CARD_TYPES.includes(cardType) && (
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
        {formError && <div className="error-msg" style={{marginBottom:"1rem"}}>{formError}</div>}
        <div className="confirm-actions">
          <button className="confirm-cancel" onClick={onClose}>Cancelar</button>
          <button className="confirm-ok" onClick={handleSave}>Guardar</button>
        </div>
      </div>
    </div>
  );
}
