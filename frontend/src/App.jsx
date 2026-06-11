// ── App shell ─────────────────────────────────────────────────────────────────
// Owns the session (auth + language), the deck and the study stats, persists
// them to the backend (debounced + flush on unload), and routes between views.

import { useState, useEffect, useCallback, useRef } from "react";
import { API_BASE, apiFetch, authHeaders, clearToken, getToken, loadCards, loadStats, saveCards, saveStats } from "./api.js";
import { bumpStats, localDateStr } from "./srs.js";
import { setSpeechLang } from "./speech.js";
import { FONTS, css } from "./styles.js";
import StudyView from "./components/StudyView.jsx";
import AddView from "./components/AddView.jsx";
import ListView from "./components/ListView.jsx";
import StatsView from "./components/StatsView.jsx";
import SettingsView from "./components/SettingsView.jsx";
import HelpView from "./components/HelpView.jsx";
import AuthView from "./components/AuthView.jsx";

const VIEWS = [
  { id: "study", label: "Repasar" },
  { id: "add", label: "+ Agregar" },
  { id: "list", label: "Lista" },
  { id: "stats", label: "Estado" },
  { id: "settings", label: "Ajustes" },
  { id: "help", label: "Ayuda" },
];

// SRS fields for a card the user has never reviewed.
function freshCardFields(now = Date.now()) {
  return {
    repetitions: 0,
    easiness: 2.5,
    interval: 0,
    nextReview: now,
    lastGrade: null,
    lapses: 0,
  };
}

export default function App() {
  // null = verificando, false = no autenticado, string = username
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState("de");
  const [cards, setCards] = useState([]);
  const [stats, setStats] = useState(null);    // { day, todayCount, currentStreak, longestStreak, dailyNewLimit, newToday }
  const [loaded, setLoaded] = useState(false); // true only after this user's cards are fetched
  const [view, setView] = useState("study");
  const [menuOpen, setMenuOpen] = useState(false);

  // Keep the speech-synthesis language in sync with the user's language.
  useEffect(() => { setSpeechLang(language); }, [language]);

  function dropSession() {
    clearToken();
    setLoaded(false);
    setUser(false);
    setCards([]);
    setStats(null);
  }

  // If a background save fails because the token expired (401), force a
  // re-login instead of silently losing every save from here on.
  function handleSaveError(err) {
    if (err.status === 401) dropSession();
  }

  // Restore session on mount: verify the stored token, if any.
  // Await BOTH /auth/me and the cards before any setState, so there is never a
  // committed render where `user` is truthy but `cards` is still the initial [].
  useEffect(() => {
    if (!getToken()) { setUser(false); return; }
    (async () => {
      try {
        const me = await apiFetch("/auth/me");
        const c = await loadCards();
        const s = await loadStats().catch(() => null);
        setUser(me.username);
        setLanguage(me.language || "de");
        setCards(c);
        setStats(s);
        setLoaded(true);
      } catch {
        clearToken();
        setUser(false);
      }
    })();
  }, []);

  // Persist cards to DB whenever they change (debounced).
  // Guard on `loaded`: never write until this user's deck has actually been
  // fetched, otherwise the initial empty [] could overwrite the stored deck.
  useEffect(() => {
    if (!user || !loaded) return;
    const t = setTimeout(() => { saveCards(cards).catch(handleSaveError); }, 800);
    return () => clearTimeout(t);
  }, [cards, user, loaded]);

  // Persist study stats (streak/daily count) when they change.
  useEffect(() => {
    if (!user || !loaded || !stats) return;
    const t = setTimeout(() => { saveStats(stats).catch(handleSaveError); }, 800);
    return () => clearTimeout(t);
  }, [stats, user, loaded]);

  // Refs kept current for non-React callbacks (beforeunload flush)
  const cardsRef = useRef(cards);
  useEffect(() => { cardsRef.current = cards; }, [cards]);
  const userRef = useRef(user);
  useEffect(() => { userRef.current = user; }, [user]);
  const loadedRef = useRef(loaded);
  useEffect(() => { loadedRef.current = loaded; }, [loaded]);
  const statsRef = useRef(stats);
  useEffect(() => { statsRef.current = stats; }, [stats]);

  // Flush save immediately when the browser tab/window is closing. Uses bare
  // fetch with keepalive (not apiFetch) so the request survives the unload.
  useEffect(() => {
    const flush = () => {
      if (!userRef.current || !loadedRef.current) return;
      const cards = cardsRef.current;
      const qs = cards.length === 0 ? "?allowEmpty=true" : "";
      fetch(`${API_BASE}/cards${qs}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify(cards),
        keepalive: true,
      });
      if (statsRef.current) {
        fetch(`${API_BASE}/stats`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", ...authHeaders() },
          body: JSON.stringify(statsRef.current),
          keepalive: true,
        });
      }
    };
    window.addEventListener("beforeunload", flush);
    return () => window.removeEventListener("beforeunload", flush);
  }, []);

  async function handleLogout() {
    if (loaded) {
      await saveCards(cards).catch(() => {});
      if (stats) await saveStats(stats).catch(() => {});
    }
    dropSession();
  }

  async function handleAuth(username, lang) {
    // New user session: block saving until THIS user's cards are loaded, so a
    // switch can't persist an empty/stale deck over the incoming one.
    setLoaded(false);
    setUser(username);
    setLanguage(lang || "de");
    try {
      const c = await loadCards();
      const s = await loadStats().catch(() => null);
      setCards(c);
      setStats(s);
      setLoaded(true);          // enable saving ONLY after a successful load
    } catch {
      setCards([]);             // show empty UI, but keep loaded=false so we never wipe
    }
  }

  const addCard = useCallback((data) => {
    const card = {
      id: Date.now().toString(),
      cardType: data.cardType || "type1",
      german: data.german,
      translation: data.translation,
      note: data.note || "",
      example: data.example || "",
      exampleTranslation: data.exampleTranslation || "",
      imageUrl: data.imageUrl || null,
      audioUrl: data.audioUrl || null,
      ...freshCardFields(),
    };
    setCards(prev => [...prev, card]);
  }, []);

  const bulkAddCards = useCallback((items, replace = false) => {
    const now = Date.now();
    const newCards = items.map((data, i) => ({
      id: (now + i).toString(),
      cardType: data.cardType || "type1",
      german: data.german.trim(),
      translation: data.translation.trim(),
      note: (data.note || "").trim(),
      example: data.example || "",
      exampleTranslation: data.exampleTranslation || "",
      imageUrl: data.imageUrl || null,
      audioUrl: data.audioUrl || null,
      ...freshCardFields(now),
    }));
    setCards(prev => replace ? newCards : [...prev, ...newCards]);
  }, []);

  const gradeCard = useCallback((id, updates, isNew = false) => {
    setCards(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
    setStats(prev => bumpStats(prev, isNew));
  }, []);

  const editCard = useCallback((updated) => {
    setCards(prev => prev.map(c => c.id === updated.id ? updated : c));
  }, []);

  const deleteCard = useCallback((id) => {
    setCards(prev => prev.filter(c => c.id !== id));
  }, []);

  const deleteAllCards = useCallback(() => {
    setCards([]);
  }, []);

  const setNewLimit = useCallback((n) => {
    setStats(prev => {
      const base = prev || { day: localDateStr(), todayCount: 0, currentStreak: 0, longestStreak: 0, newToday: 0 };
      return { ...base, dailyNewLimit: n };
    });
  }, []);

  // Verificando sesión
  if (user === null) {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "#F0EEE6", color: "#7A776F", fontFamily: "'Inter', sans-serif",
      }}>
        <style>{FONTS}</style>
        Cargando…
      </div>
    );
  }

  if (user === false) {
    return <AuthView onAuth={handleAuth} />;
  }

  return (
    <>
      <style>{FONTS}{css}</style>
      <div className="noise" />
      <div className="app">
        <header className="header">
          <div className="logo">
            {language === "fr" ? (
              <svg className="logo-flag" viewBox="0 0 28 19" xmlns="http://www.w3.org/2000/svg">
                <rect width="9.33" height="19" x="0" fill="#002395"/>
                <rect width="9.34" height="19" x="9.33" fill="#fff"/>
                <rect width="9.33" height="19" x="18.67" fill="#ED2939"/>
              </svg>
            ) : (
              <svg className="logo-flag" viewBox="0 0 28 19" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="6.33" y="0" fill="#000"/>
                <rect width="28" height="6.34" y="6.33" fill="#D00"/>
                <rect width="28" height="6.33" y="12.67" fill="#FFCE00"/>
              </svg>
            )}
            <div className="logo-text">
              {language === "fr" ? <>Français<span>Cartes</span></> : <>Deutsch<span>Karten</span></>}
            </div>
          </div>
          <nav className="nav">
            {VIEWS.map(v => (
              <button
                key={v.id}
                className={`nav-btn ${view === v.id ? "active" : ""}`}
                onClick={() => setView(v.id)}
              >{v.label}</button>
            ))}
            <button
              className="nav-btn"
              onClick={handleLogout}
              title={`Sesión: ${user}`}
              style={{ marginLeft: "auto", opacity: 0.6 }}
            >↩ {user}</button>
          </nav>

          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menú"
            aria-expanded={menuOpen}
          >{menuOpen ? "✕" : "☰"}</button>

          {menuOpen && (
            <>
              <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />
              <div className="menu-panel">
                {VIEWS.map(v => (
                  <button
                    key={v.id}
                    className={`menu-item ${view === v.id ? "active" : ""}`}
                    onClick={() => { setView(v.id); setMenuOpen(false); }}
                  >{v.label}</button>
                ))}
                <button
                  className="menu-item menu-logout"
                  onClick={() => { setMenuOpen(false); handleLogout(); }}
                >↩ {user}</button>
              </div>
            </>
          )}
        </header>

        {view === "study" && <StudyView cards={cards} onGrade={gradeCard} language={language} stats={stats} />}
        {view === "add" && <AddView onAdd={addCard} onBulkAdd={(items, replace) => { bulkAddCards(items, replace); setView("list"); }} language={language} />}
        {view === "list" && <ListView cards={cards} onDelete={deleteCard} onDeleteAll={deleteAllCards} onEdit={editCard} language={language} />}
        {view === "stats" && <StatsView cards={cards} stats={stats} onEdit={editCard} language={language} />}
        {view === "settings" && <SettingsView stats={stats} onChangeLimit={setNewLimit} />}
        {view === "help" && <HelpView language={language} />}
      </div>
    </>
  );
}
