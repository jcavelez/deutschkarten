// ── Add view ──────────────────────────────────────────────────────────────────
// Two tabs: create a single card with per-type fields, or bulk-import a JSON
// array. The form stays open after adding so several cards can go in a row.

import { useState } from "react";
import { mediaUrl, uploadMedia, deleteMedia } from "../api.js";
import { LANG_LABELS, IMAGE_CARD_TYPES, getCardTypeOptions, validateCard } from "../cardTypes.js";

export default function AddView({ onAdd, onBulkAdd, language }) {
  const L = LANG_LABELS[language] || LANG_LABELS.de;
  const cardTypeOptions = getCardTypeOptions(language);
  const [tab, setTab] = useState("single");

  const [cardType, setCardType] = useState("type1");
  const [german, setGerman] = useState("");
  const [translation, setTranslation] = useState("");
  const [note, setNote] = useState("");
  const [example, setExample] = useState("");
  const [exampleTranslation, setExampleTranslation] = useState("");
  const [saved, setSaved] = useState(false);
  const [formError, setFormError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [uploading, setUploading] = useState(null);
  const [imageMode, setImageMode] = useState("file");
  const [audioMode, setAudioMode] = useState("file");
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [audioUrlInput, setAudioUrlInput] = useState("");

  const [json, setJson] = useState("");
  const [bulkStatus, setBulkStatus] = useState(null);
  const [replaceMode, setReplaceMode] = useState(true);

  const handleSubmit = () => {
    const error = validateCard({ cardType, german, translation, example }, language);
    if (error) { setFormError(error); return; }
    setFormError(null);
    onAdd({ cardType, german: german.trim(), translation: translation.trim(), note: note.trim(), example: example.trim(), exampleTranslation: exampleTranslation.trim(), imageUrl, audioUrl });
    setGerman(""); setTranslation(""); setNote("");
    setImageUrl(null); setAudioUrl(null); setExample(""); setExampleTranslation("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleMediaUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(type);
    try {
      const { url } = await uploadMedia(file);
      if (type === "image") setImageUrl(url);
      else setAudioUrl(url);
    } catch { alert("Error al subir archivo."); }
    setUploading(null);
    e.target.value = "";
  };

  const handleUrlSet = (type, val) => {
    const trimmed = val.trim();
    if (!trimmed) return;
    if (type === "image") { setImageUrl(trimmed); setImageUrlInput(""); }
    else { setAudioUrl(trimmed); setAudioUrlInput(""); }
  };

  const handleRemoveMedia = (type) => {
    // uploaded files are deleted from the server; external URLs just get unset
    const url = type === "image" ? imageUrl : audioUrl;
    const isExternal = url && (url.startsWith("http://") || url.startsWith("https://"));
    if (!isExternal && url) deleteMedia(url);
    if (type === "image") { setImageUrl(null); setImageUrlInput(""); }
    else { setAudioUrl(null); setAudioUrlInput(""); }
  };

  const handleBulk = () => {
    setBulkStatus(null);
    let parsed;
    try { parsed = JSON.parse(json.trim()); }
    catch { setBulkStatus({ ok: false, msg: "JSON inválido. Revisa la sintaxis." }); return; }
    if (!Array.isArray(parsed)) {
      setBulkStatus({ ok: false, msg: "Debe ser un array [ ... ]." }); return;
    }
    const valid = parsed.filter(x => x.german?.trim() && x.translation?.trim());
    if (!valid.length) {
      setBulkStatus({ ok: false, msg: 'Ningún objeto tiene "german" y "translation".' }); return;
    }
    // On success the parent switches to the list view, so no message is needed.
    onBulkAdd(valid, replaceMode);
    setJson("");
  };

  return (
    <div className="add-form">
      <div className="add-tabs">
        <button className={`add-tab ${tab === "single" ? "active" : ""}`} onClick={() => setTab("single")}>Una tarjeta</button>
        <button className={`add-tab ${tab === "bulk" ? "active" : ""}`} onClick={() => setTab("bulk")}>Importar JSON</button>
      </div>

      {tab === "single" && (
        <>
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
            <input value={german} onChange={e => setGerman(e.target.value)} placeholder={cardType === "type5" ? L.blankWordPh : L.wordPh} />
          </div>
          <div className="field">
            <label>Traducción</label>
            <input value={translation} onChange={e => setTranslation(e.target.value)} placeholder="la llave" />
          </div>
          <div className="field">
            <label>Nota (opcional)</label>
            <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="artículo, ejemplo, truco…" />
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
                  <input value={exampleTranslation} onChange={e => setExampleTranslation(e.target.value)} placeholder="El perro corre rápido." />
                </div>
              )}
            </>
          )}
          {IMAGE_CARD_TYPES.includes(cardType) && (
          <div className="field">
            <label>
              Imagen (opcional) —{" "}
              <button className="mode-toggle" onClick={() => { setImageMode(m => m === "file" ? "url" : "file"); setImageUrl(null); setImageUrlInput(""); }}>
                {imageMode === "file" ? "usar URL" : "subir archivo"}
              </button>
            </label>
            {!imageUrl ? (
              imageMode === "file" ? (
                <div className="media-upload-row">
                  <label className="media-upload-btn">
                    {uploading === "image" ? <span className="media-uploading">Subiendo…</span> : "＋ Subir imagen"}
                    <input type="file" accept="image/*" style={{display:"none"}} onChange={e => handleMediaUpload(e, "image")} disabled={!!uploading} />
                  </label>
                </div>
              ) : (
                <div className="url-input-row">
                  <input
                    className="url-input"
                    value={imageUrlInput}
                    onChange={e => setImageUrlInput(e.target.value)}
                    placeholder="https://upload.wikimedia.org/…"
                    onKeyDown={e => e.key === "Enter" && handleUrlSet("image", imageUrlInput)}
                  />
                  <button className="url-set-btn" onClick={() => handleUrlSet("image", imageUrlInput)}>OK</button>
                </div>
              )
            ) : (
              <div className="media-preview">
                <img src={mediaUrl(imageUrl)} alt="" />
                <span className="media-preview-label">{imageUrl.startsWith("http") ? "URL externa" : imageUrl.split("/").pop()}</span>
                <button className="media-remove" onClick={() => handleRemoveMedia("image")}>×</button>
              </div>
            )}
          </div>
          )}

          <div className="field">
            <label>
              Audio (opcional) —{" "}
              <button className="mode-toggle" onClick={() => { setAudioMode(m => m === "file" ? "url" : "file"); setAudioUrl(null); setAudioUrlInput(""); }}>
                {audioMode === "file" ? "usar URL" : "subir archivo"}
              </button>
            </label>
            {!audioUrl ? (
              audioMode === "file" ? (
                <div className="media-upload-row">
                  <label className="media-upload-btn">
                    {uploading === "audio" ? <span className="media-uploading">Subiendo…</span> : "＋ Subir audio"}
                    <input type="file" accept="audio/*" style={{display:"none"}} onChange={e => handleMediaUpload(e, "audio")} disabled={!!uploading} />
                  </label>
                </div>
              ) : (
                <div className="url-input-row">
                  <input
                    className="url-input"
                    value={audioUrlInput}
                    onChange={e => setAudioUrlInput(e.target.value)}
                    placeholder="https://forvo.com/… o link directo a .mp3"
                    onKeyDown={e => e.key === "Enter" && handleUrlSet("audio", audioUrlInput)}
                  />
                  <button className="url-set-btn" onClick={() => handleUrlSet("audio", audioUrlInput)}>OK</button>
                </div>
              )
            ) : (
              <div className="media-preview">
                <span className="media-preview-label">{audioUrl.startsWith("http") ? "URL externa" : audioUrl.split("/").pop()}</span>
                <audio src={mediaUrl(audioUrl)} controls style={{height:"24px", accentColor:"#D97757"}} />
                <button className="media-remove" onClick={() => handleRemoveMedia("audio")}>×</button>
              </div>
            )}
          </div>

          <button className="submit-btn" onClick={handleSubmit}>Agregar tarjeta</button>
          {formError && <div className="error-msg">{formError}</div>}
          {saved && <div className="success-msg">✓ Guardada</div>}
        </>
      )}

      {tab === "bulk" && (
        <>
          <div className="field">
            <label>Array JSON</label>
            <textarea
              className="bulk-textarea"
              value={json}
              onChange={e => setJson(e.target.value)}
              placeholder={L.bulkPh}
            />
          </div>
          <div className="bulk-schema">
            Campos: <code>german</code> ✦ <code>translation</code> ✦ <code>note</code> (opcional)
          </div>
          <label className="bulk-replace-row">
            <input type="checkbox" checked={replaceMode} onChange={e => setReplaceMode(e.target.checked)} />
            <span>Reemplazar todo el mazo (desactiva para agregar encima)</span>
          </label>
          <button className="submit-btn" onClick={handleBulk}>Importar</button>
          {bulkStatus && (
            <div className={bulkStatus.ok ? "success-msg" : "error-msg"}>{bulkStatus.msg}</div>
          )}
        </>
      )}
    </div>
  );
}
