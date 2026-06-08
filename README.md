# SprachenKarten (deutschkarten)

App personal de **tarjetas de memoria con repetición espaciada (SM-2)** para
aprender **alemán** o **francés** desde el español.

*Personal **spaced-repetition flashcard** app (SM-2) for learning **German** or
**French** from Spanish.*

## Documentación / Documentation

- 📖 [DOCUMENTACION.md](DOCUMENTACION.md) — documentación funcional y técnica (español).
- 📖 [DOCUMENTATION.md](DOCUMENTATION.md) — functional and technical documentation (English).
- 🃏 [CREAR-DECK.md](CREAR-DECK.md) — cómo crear un mazo e importar tarjetas (JSON).

## Inicio rápido / Quick start

```bash
# Desplegar con Docker / Deploy with Docker
docker-compose up -d --build

# Crear un usuario / Create a user (requiere DATABASE_URL)
node backend/scripts/create-user.js <usuario> <contraseña> <de|fr>
```

- Frontend: http://localhost:8080 · API: http://localhost:3001
- Variables de entorno y detalles de despliegue en la documentación.

## Stack

React + Vite (nginx) · Node + Express · PostgreSQL (Neon) · Docker · Anthropic API.
