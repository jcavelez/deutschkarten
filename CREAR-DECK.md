# Cómo crear un deck de tarjetas

Guía para armar un mazo de tarjetas en **deutschkarten**, ya sea a mano o
generándolo con un chat de IA (Claude, ChatGPT, etc.) e importándolo.

La app soporta dos idiomas de estudio: **alemán** (`de`) y **francés** (`fr`).
El idioma se define por usuario; las tarjetas se adaptan automáticamente.

---

## 1. Tipos de tarjeta

| Nombre    | `cardType` | Cómo funciona |
|-----------|------------|---------------|
| Imagen    | `type1`    | Muestra una imagen; la tocas para voltear y ver la palabra. **Requiere imagen.** |
| Ejemplo   | `type2`    | Muestra la palabra con una frase de ejemplo; volteas para ver la traducción. |
| Traducir  | `type4`    | Te muestra el español y **escribes** la palabra en el idioma; corrige tu respuesta. |
| Completar | `type5`    | Una frase con un hueco (`___`); **escribes** la palabra que falta. |
| Artículo  | `type6`    | **Eliges** el artículo/género correcto (`le/la/l'` o `der/die/das`). |

> El tipo 3 no existe (es un hueco histórico). Usa `type1`, `type2`, `type4`, `type5`, `type6`.

---

## 2. Formas de crear tarjetas

### a) Una por una (formulario)
En la app: **Agregar → pestaña "Una tarjeta"**. Eliges el tipo y rellenas los
campos. Cada tipo muestra solo los campos que necesita.

### b) Importación masiva (JSON) — recomendada para decks grandes
En la app: **Agregar → pestaña "Importar JSON"**. Pegas un array de objetos y
pulsas **Importar**. Puedes marcar "Reemplazar todo el mazo" o dejarlo
desmarcado para agregar encima de lo existente.

---

## 3. Formato JSON

Un deck es un **array** de objetos. Solo `german` y `translation` son
obligatorios; el resto es opcional.

```json
[
  { "cardType": "type4", "german": "le chien", "translation": "el perro", "note": "masc." },
  { "cardType": "type2", "german": "la maison", "translation": "la casa",
    "example": "La maison est grande.", "exampleTranslation": "La casa es grande." }
]
```

### Campos

| Campo                | Obligatorio | Descripción |
|----------------------|-------------|-------------|
| `german`             | ✅          | La palabra/frase **en el idioma de estudio** (alemán o francés). El nombre del campo es "german" por herencia, pero guarda el idioma extranjero. |
| `translation`        | ✅          | Traducción al español. |
| `cardType`           | ⬜ (def. `type1`) | Uno de: `type1`, `type2`, `type4`, `type5`, `type6`. |
| `note`               | ⬜          | Nota/truco (género, conjugación, mnemónico…). |
| `example`            | ⬜          | Frase de ejemplo. En **`type5`** debe contener `___` donde va la palabra. |
| `exampleTranslation` | ⬜          | Traducción de la frase (solo se usa en `type2`). |
| `imageUrl`           | ⬜          | URL de imagen (necesaria en `type1`; opcional en `type5`/`type6`). |
| `audioUrl`           | ⬜          | URL de audio. Si existe, el botón ▶ reproduce ese audio; si no, usa voz sintetizada. |

### Qué campos usa cada tipo

| Campo               | Imagen | Ejemplo | Traducir | Completar | Artículo |
|---------------------|:------:|:-------:|:--------:|:---------:|:--------:|
| `german`            | ✓      | ✓       | ✓        | ✓         | ✓        |
| `translation`       | ✓      | ✓       | ✓        | ✓         | ✓        |
| `note`              | ✓      | ✓       | ✓        | ✓         | ✓        |
| `example`           | –      | ✓       | –        | ✓ (`___`) | –        |
| `exampleTranslation`| –      | ✓       | –        | –         | –        |
| `imageUrl`          | ✓ obl. | –       | –        | opc.      | opc.     |
| `audioUrl`          | opc.   | opc.    | opc.     | opc.      | opc.     |

---

## 4. Ejemplos por tipo

```json
[
  { "cardType": "type1", "german": "la pomme", "translation": "la manzana",
    "imageUrl": "https://upload.wikimedia.org/.../apple.jpg" },

  { "cardType": "type2", "german": "le livre", "translation": "el libro",
    "example": "Je lis un livre.", "exampleTranslation": "Leo un libro." },

  { "cardType": "type4", "german": "merci", "translation": "gracias" },

  { "cardType": "type5", "german": "chat", "translation": "el gato",
    "example": "Le ___ dort sur le canapé.",
    "exampleTranslation": "El gato duerme en el sofá." },

  { "cardType": "type6", "german": "la maison", "translation": "la casa",
    "note": "femenino; termina en -on" }
]
```

---

## 5. Notas importantes

- **`german` lleva el idioma extranjero**, no el alemán literalmente. Para un deck
  de francés, `german` = la palabra en francés.
- **Tipo Artículo (`type6`):** `german` debe empezar con el artículo
  (`le chien`, `la maison`, `l'eau` / `der Hund`). La app deduce el artículo
  correcto del propio campo. En francés, `l'` (antes de vocal) no revela el
  género, así que esas palabras son poco útiles para este tipo.
- **Tipo Completar (`type5`):** el `example` **debe** contener `___` (tres guiones
  bajos) y `german` es exactamente la palabra que va en el hueco.
- **Tipo Imagen (`type1`):** necesita `imageUrl`. Un chat de IA no puede inventar
  URLs de imágenes válidas, así que no es práctico para generar decks grandes
  automáticamente.
- **Validación de respuestas** (tipos Traducir y Completar): ignora mayúsculas y
  espacios alrededor.

---

## 6. Prompt para generar un deck con IA

Pega esto en un chat de Claude (ajusta idioma, tamaño y nivel):

> Genera un array JSON de **500** flashcards para aprender **francés** desde el
> **español**. Usa exactamente este formato por objeto:
> ```json
> { "cardType": "type4", "german": "<palabra/frase en francés>", "translation": "<traducción al español>", "note": "<género/nota breve, opcional>" }
> ```
> Reglas:
> - El campo `german` contiene el **francés** (nombre heredado, no lo cambies).
> - Usa `cardType: "type4"` para vocabulario suelto.
> - Para algunas tarjetas usa `cardType: "type2"` agregando `"example"` (frase en
>   francés) y `"exampleTranslation"` (su traducción al español).
> - Para sustantivos puedes usar `cardType: "type6"` poniendo el artículo en
>   `german` (`le chien`, `la maison`) y el género en `note`.
> - Vocabulario nivel A1–B1, temas variados (casa, comida, viajes, trabajo,
>   verbos comunes…), sin repetir.
> - Devuelve **solo** el array JSON válido, sin texto adicional ni markdown.

Luego copia la respuesta y pégala en **Agregar → Importar JSON**.

---

## 7. Verificación al importar

- El JSON debe ser un **array** (`[ ... ]`).
- Cada objeto necesita al menos `german` y `translation` no vacíos; los que no
  los tengan se ignoran.
- Tras importar, la app te dice cuántas tarjetas se agregaron.
