# Documentación — SprachenKarten (deutschkarten)

Documentación **funcional** y **técnica** de la aplicación.
🇬🇧 English version: [DOCUMENTATION.md](DOCUMENTATION.md).

---

## 1. ¿Qué es?

SprachenKarten es una app personal de **tarjetas de memoria (flashcards) con
repetición espaciada** para aprender **alemán** o **francés** desde el español.
Cada usuario tiene su propio mazo y su idioma de estudio. El algoritmo
**SM-2** decide cuándo vuelve a aparecer cada tarjeta.

El registro público está cerrado: los usuarios se crean manualmente.

---

## 2. Documentación funcional

### 2.1 Tipos de tarjeta

| Nombre    | `cardType` | Cómo funciona |
|-----------|------------|---------------|
| Imagen    | `type1`    | Muestra una imagen; se voltea para ver la palabra. Requiere imagen. |
| Ejemplo   | `type2`    | Palabra + frase de ejemplo; se voltea para ver la traducción. |
| Traducir  | `type4`    | Muestra el español; el usuario **escribe** la palabra y se corrige. |
| Completar | `type5`    | Frase con un hueco `___`; el usuario **escribe** la palabra que falta. |
| Artículo  | `type6`    | El usuario **elige** el artículo/género (`le/la/l'` o `der/die/das`). |

> No existe `type3` (hueco histórico).

### 2.2 Estudiar (Repasar)

- Solo aparecen las tarjetas **pendientes** (cuya fecha de repaso ya llegó),
  en orden aleatorio.
- Tipos 1 y 2: tarjeta con animación de volteo; luego calificas de 0 a 5.
- Tipos 4 y 5: escribes la respuesta (validación **insensible a mayúsculas** y
  espacios), o usas "Revelar"; luego calificas.
- Tipo 6: eliges el artículo; se califica automático (acierto = 5, fallo = 1).
- Botón ▶ para pronunciar (ver 2.6) y "✦ Explicar con IA" (ver 2.7).
- **Calificación → SM-2:** la nota ajusta el intervalo hasta el próximo repaso.

### 2.3 Celebración de fin del día

Al calificar la **última** tarjeta pendiente del día aparece un overlay de
felicitación (confeti, 🎉, conteo de repasos de hoy y racha). Solo se dispara
en el momento de completar, no al abrir el mazo ya vacío.

### 2.4 Racha y conteo diario

- **Repasos de hoy:** se cuentan y persisten; sobreviven entre sesiones del
  mismo día.
- **Racha (🔥):** días **consecutivos** con al menos un repaso. Si saltas un
  día, vuelve a 1. Se guarda también el **récord**. La frontera del día sigue
  la **zona horaria local** del usuario.
- Se muestran en la celebración y en la vista **Estado**.

### 2.5 Crear y editar tarjetas

- **Una por una:** formulario en **Agregar**. Cada tipo muestra solo los
  campos que necesita (p. ej. Imagen solo en t1/t5/t6; Ejemplo/Traducción del
  ejemplo según el tipo).
- **Importación masiva (JSON):** pega un array de tarjetas. Guía detallada del
  formato en [CREAR-DECK.md](CREAR-DECK.md).
- **Editar:** desde la lista, modal con los mismos campos por tipo.
- **Media:** imagen y audio por **subida de archivo** o por **URL**.

### 2.6 Pronunciación (TTS)

- Usa la **Web Speech API** del navegador (voces del sistema operativo), en el
  idioma del usuario (`fr-FR` / `de-DE`).
- Si la tarjeta tiene `audioUrl`, reproduce **ese audio**; si no, sintetiza la
  palabra.
- La calidad depende de las voces instaladas en el dispositivo.

### 2.7 Explicación con IA

Botón que pide a la API de Anthropic (modelo Claude Haiku) una explicación
breve de la tarjeta (etimología, uso, mnemónicos, ejemplos) en español.

### 2.8 Vista Estado

Banner de racha (actual, hoy, récord) y un histograma del mazo por cercanía
del próximo repaso (Nuevas, Hoy, Mañana, 3–7, 8–30, +30 días), más KPIs
(para hoy, maduras ≥21 días, easiness promedio).

---

## 3. Documentación técnica

### 3.1 Arquitectura

```
┌──────────────┐      HTTPS/JSON      ┌──────────────┐      SQL      ┌────────────┐
│  Frontend    │ ───────────────────▶ │  Backend     │ ────────────▶ │ PostgreSQL │
│ React + Vite │   Bearer JWT         │ Express/Node │               │  (Neon)    │
│ (nginx)      │ ◀─────────────────── │              │ ◀──────────── │            │
└──────────────┘                      └──────┬───────┘               └────────────┘
                                             │ archivos
                                             ▼
                                      /data/media (volumen)
                                             │
                                      Anthropic API (explicaciones)
```

- **Frontend:** React 18 + Vite, dividido en módulos bajo `frontend/src/`
  (los estilos son un string CSS inyectado desde `styles.js`). Se sirve
  estático con **nginx**.
- **Backend:** Node + Express (`backend/server.js`). PostgreSQL vía `pg`.
- **Base de datos:** PostgreSQL (en producción, Neon).
- **Contenedores:** `docker-compose.yml` con dos servicios (`api`, `frontend`).

### 3.2 Estructura del repositorio

```
backend/
  server.js              API Express (auth, cards, stats, media, explain)
  scripts/create-user.js Crear usuarios manualmente
  Dockerfile
frontend/
  src/App.jsx            Shell: sesión, estado global, persistencia y navegación
  src/api.js             Cliente HTTP del backend (token, cards, stats, media, IA)
  src/srs.js             Algoritmo SM-2, racha y contadores diarios (funciones puras)
  src/speech.js          Pronunciación (Web Speech API + audio adjunto)
  src/cardTypes.js       Tipos de tarjeta, etiquetas por idioma, validación
  src/styles.js          Todo el CSS de la app (string inyectado)
  src/components/        Un archivo por vista + caras de tarjeta, zonas de
                         respuesta y modales
  src/main.jsx
  index.html
  public/favicon.svg
  dist/                  Build de producción (versionado)
  Dockerfile             Build con Vite + nginx
docker-compose.yml
CREAR-DECK.md            Guía para crear mazos
```

### 3.3 Autenticación

- Login con usuario/contraseña → **JWT** firmado (válido 30 días), guardado en
  `localStorage` y enviado como `Authorization: Bearer <token>`.
- Contraseñas con **bcrypt** (10 salt rounds).
- El usuario se compara **sin distinguir mayúsculas** (`LOWER(username)`).
- Registro público deshabilitado; usuarios vía:
  `node backend/scripts/create-user.js <usuario> <contraseña> <de|fr>`
  (requiere `DATABASE_URL`).

### 3.4 Modelo de datos

**users**: `id`, `username` (único), `password_hash`, `language` (`de|fr`),
`created_at`.

**cards** (PK `(id, user_id)`): `german`, `translation`, `note`, `card_type`,
`image_url`, `audio_url`, `example`, `example_translation`, y los campos SM-2
`repetitions`, `easiness`, `interval`, `next_review` (epoch ms), `last_grade`.

**study_stats** (PK `user_id`): `day` (`YYYY-MM-DD` local), `today_count`,
`current_streak`, `longest_streak`.

Todas las tablas se crean al arrancar con `CREATE TABLE IF NOT EXISTS`.

### 3.5 Patrón cliente-autoritativo

El **cliente** calcula la lógica (SM-2 y la racha/conteo, que dependen de la
hora local) y el backend solo **persiste**. Las tarjetas se guardan con un PUT
del array completo (debounce ~800 ms + flush en `beforeunload`/logout); las
stats igual. Una salvaguarda en el backend rechaza un PUT de mazo vacío salvo
`?allowEmpty=true` para no borrar el mazo por accidente.

### 3.6 API

Todas requieren `Authorization: Bearer <token>` salvo login y health.

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/auth/login` | Login → `{ token, username, language }` |
| POST | `/auth/register` | Cerrado (403) |
| GET  | `/auth/me` | Usuario actual e idioma |
| GET  | `/cards` | Mazo del usuario |
| PUT  | `/cards` | Reemplaza el mazo (`?allowEmpty=true` para vaciar) |
| GET  | `/stats` | Racha y conteo del día |
| PUT  | `/stats` | Upsert de stats |
| POST | `/upload` | Sube imagen/audio (multipart) → `{ url, type }` |
| DELETE | `/media/:filename` | Borra un archivo de media |
| GET  | `/media/:filename` | Sirve archivos (estático) |
| POST | `/explain` | Explicación con IA → `{ text }` |
| GET  | `/health` | `{ ok: true }` |

### 3.7 Media

- Subida con **multer**, máx. **20 MB**.
- Imágenes: `jpeg, png, webp, gif`. Audio: `mpeg/mp3, ogg, wav, webm, m4a`.
- Se guardan en `/data/media` (volumen Docker `media_data`).
- `imageUrl`/`audioUrl` pueden ser una ruta local (`/media/...`) o una URL
  externa (`http(s)://...`).

### 3.8 Pronunciación y celebración (frontend)

- TTS: las voces del navegador cargan async; se **cachean** y se refrescan con
  `voiceschanged`, eligiendo la mejor voz del idioma (match exacto → mismo
  idioma).
- Celebración y confeti: CSS puro (sin librerías).

### 3.9 Variables de entorno

| Variable | Servicio | Para qué |
|----------|----------|----------|
| `DATABASE_URL` | api | Conexión PostgreSQL (Neon incluye `sslmode=require`) |
| `JWT_SECRET` | api | Firma de tokens (¡cámbiala en producción!) |
| `ANTHROPIC_API_KEY` | api | Explicaciones con IA |
| `CORS_ORIGIN` | api | Origen permitido (def. `http://localhost:8080`) |
| `VITE_API_URL` | frontend (build) | URL base de la API (def. `http://localhost:3001`) |

La API escucha en el puerto **3001**.

### 3.10 Desarrollo local

```bash
# Backend
cd backend && npm install
DATABASE_URL=... JWT_SECRET=... ANTHROPIC_API_KEY=... node server.js

# Frontend
cd frontend && npm install && npm run dev    # http://localhost:5173
```

### 3.11 Despliegue (Docker)

```bash
docker-compose up -d --build
```

- `frontend` se **reconstruye desde el código** con Vite (`RUN npm run build`)
  y se sirve con nginx en el puerto **8080**.
- `api` escucha en **3001**; el volumen `media_data` persiste los archivos.
- Las tablas se crean/actualizan solas al arrancar la API.

> **Importante:** usa siempre `--build` al desplegar; sin él, Docker reusa la
> imagen anterior y sirve código viejo. El `frontend/dist` versionado se
> mantiene sincronizado en cada commit como respaldo.

---

## 4. Referencias

- [CREAR-DECK.md](CREAR-DECK.md) — crear mazos e importar JSON.
- [DOCUMENTATION.md](DOCUMENTATION.md) — English version.
