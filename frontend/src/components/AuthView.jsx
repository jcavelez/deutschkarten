// ── Auth view ─────────────────────────────────────────────────────────────────
// Login screen. On success it stores the JWT and reports the username and
// study language up to <App>. (Registration is closed; users are created with
// backend/scripts/create-user.js.)

import { useState } from "react";
import { apiFetch, setToken } from "../api.js";
import { FONTS, css } from "../styles.js";

export default function AuthView({ onAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const data = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      if (data.token) setToken(data.token);
      onAuth(data.username, data.language || "de");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-screen">
      <style>{FONTS}{css}</style>
      <div className="noise" />
      <div className="auth-card">
        <div className="auth-logo">
          <span className="logo-text">Sprachen<span>Karten</span></span>
        </div>
        <p className="auth-tagline">Tarjetas de idiomas</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="text" placeholder="Usuario" value={username} autoComplete="username"
            onChange={e => setUsername(e.target.value)} required
          />
          <input
            className="auth-input"
            type="password" placeholder="Contraseña" value={password} autoComplete="current-password"
            onChange={e => setPassword(e.target.value)} required
          />

          {error && <p className="auth-error">{error}</p>}
          <button className="auth-btn" type="submit" disabled={loading}>
            {loading ? "…" : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
