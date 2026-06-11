// ── List view ─────────────────────────────────────────────────────────────────
// Searchable/filterable table of the whole deck, with per-card preview, edit
// and delete, plus JSON backup export and "delete all".

import { useState, useEffect, useRef } from "react";
import { mediaUrl } from "../api.js";
import { daysUntil } from "../srs.js";
import { cardHasImageSlot } from "../cardTypes.js";
import { EditModal, ImagePreviewModal, CardPreviewModal } from "./modals.jsx";

function Toast({ msg }) {
  return msg ? <div className="toast">{msg}</div> : null;
}

function ListItemThumb({ card, onClick }) {
  const [broken, setBroken] = useState(false);
  // Reset broken state whenever the URL changes
  useEffect(() => { setBroken(false); }, [card.imageUrl]);
  if (!card.imageUrl || broken) {
    return (
      <button className="preview-btn" onClick={onClick} title="Sin imagen — click para agregar">
        <div className="preview-thumb-empty">+</div>
      </button>
    );
  }
  return (
    <button className="preview-btn" onClick={onClick} title="Vista previa de imagen">
      <img
        className="preview-thumb"
        src={mediaUrl(card.imageUrl)}
        alt=""
        onError={() => setBroken(true)}
      />
    </button>
  );
}

export default function ListView({ cards, onDelete, onDeleteAll, onEdit, language }) {
  const [confirming, setConfirming] = useState(false);
  const [query, setQuery] = useState("");
  const [editingCard, setEditingCard] = useState(null);
  const [previewCard, setPreviewCard] = useState(null);
  const [cardPreview, setCardPreview] = useState(null);
  const [toast, setToast] = useState(null);
  const toastRef = useRef(null);
  const [imgFilter, setImgFilter] = useState("all"); // "all" | "broken" | "ok"

  const handleExport = () => {
    const data = JSON.stringify(cards, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `deutschkarten-backup-${date}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const showToast = (msg) => {
    if (toastRef.current) clearTimeout(toastRef.current);
    setToast(msg);
    toastRef.current = setTimeout(() => setToast(null), 2200);
  };

  const filtered = [...cards]
    .sort((a, b) => a.nextReview - b.nextReview)
    .filter(c => {
      if (query.trim()) {
        const q = query.toLowerCase();
        if (!c.german.toLowerCase().includes(q) && !c.translation.toLowerCase().includes(q) && !(c.note||"").toLowerCase().includes(q)) return false;
      }
      if (imgFilter === "broken") return cardHasImageSlot(c) && !c.imageUrl;
      if (imgFilter === "ok")     return cardHasImageSlot(c) && !!c.imageUrl;
      return true;
    });

  const brokenCount = cards.filter(c => cardHasImageSlot(c) && !c.imageUrl).length;

  return (
    <div>
      <div className="list-header">
        <div className="list-title">Todas las tarjetas</div>
        <div className="list-header-right">
          <div className="list-count">{cards.length} total</div>
          {cards.length > 0 && (
            <>
              <button className="export-btn" onClick={handleExport} title="Exportar backup JSON">↓ Backup</button>
              <button className="delete-all-btn" onClick={() => setConfirming(true)}>Borrar todo</button>
            </>
          )}
        </div>
      </div>

      <div className="list-search-wrap">
        <input
          className="list-search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Buscar por palabra, traducción o nota…"
        />
        {query && <button className="list-search-clear" onClick={() => setQuery("")}>×</button>}
      </div>

      <div className="list-filter-row">
        <button className={`list-filter-btn ${imgFilter==="all"?"active":""}`} onClick={() => setImgFilter("all")}>Todas</button>
        <button className={`list-filter-btn ${imgFilter==="broken"?"active":""}`} onClick={() => setImgFilter("broken")}>
          Sin imagen {brokenCount > 0 && `(${brokenCount})`}
        </button>
        <button className={`list-filter-btn ${imgFilter==="ok"?"active":""}`} onClick={() => setImgFilter("ok")}>Con imagen</button>
      </div>

      {confirming && (
        <div className="confirm-overlay" onClick={() => setConfirming(false)}>
          <div className="confirm-dialog" onClick={e => e.stopPropagation()}>
            <div className="confirm-title">¿Borrar todo el mazo?</div>
            <div className="confirm-body">
              Se eliminarán <strong>{cards.length} tarjeta{cards.length !== 1 ? "s" : ""}</strong> y todo su progreso. Esta acción no se puede deshacer.
            </div>
            <div className="confirm-actions">
              <button className="confirm-cancel" onClick={() => setConfirming(false)}>Cancelar</button>
              <button className="confirm-ok" onClick={() => { onDeleteAll(); setConfirming(false); }}>Sí, borrar todo</button>
            </div>
          </div>
        </div>
      )}

      {editingCard && (
        <EditModal card={editingCard} language={language} onSave={c => { onEdit(c); setEditingCard(null); showToast(`✓ "${c.german}" actualizado`); }} onClose={() => setEditingCard(null)} />
      )}

      {previewCard && (
        <ImagePreviewModal
          card={previewCard}
          onSave={updated => { onEdit(updated); setPreviewCard(updated); showToast(`✓ Imagen actualizada`); }}
          onClose={() => setPreviewCard(null)}
        />
      )}

      {cardPreview && (
        <CardPreviewModal card={cardPreview} language={language} onClose={() => setCardPreview(null)} />
      )}

      <Toast msg={toast} />

      <div className="card-list">
        {filtered.length === 0 && (
          <div className="list-empty">{query ? `Sin resultados para "${query}"` : "Sin tarjetas en este filtro"}</div>
        )}
        {filtered.map(c => {
          const isDue = c.nextReview <= Date.now();
          return (
            <div key={c.id} className="list-item">
              {cardHasImageSlot(c)
                ? <ListItemThumb card={c} onClick={() => setPreviewCard(c)} />
                : <div style={{width:"28px"}} />
              }
              <div className="li-main">
                <div className="li-german">{c.german}</div>
                <div className="li-trans">{c.translation}</div>
                {c.note && <div className="li-note">{c.note}</div>}
              </div>
              <div className={`li-next ${isDue ? "due" : ""}`}>{daysUntil(c.nextReview)}</div>
              <div className="li-actions">
                <button className="preview-card-btn" onClick={() => setCardPreview(c)} title="Vista previa">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:"block"}}>
                    <path d="M6.5 1C3.5 1 1 4 1 5C1 6 3.5 9 6.5 9C9.5 9 12 6 12 5C12 4 9.5 1 6.5 1Z" stroke="currentColor" strokeWidth="1.1" fill="none"/>
                    <circle cx="6.5" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.1" fill="none"/>
                  </svg>
                </button>
                <button className="edit-btn" onClick={() => setEditingCard(c)}>✎</button>
                <button className="delete-btn" onClick={() => onDelete(c.id)}>×</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
