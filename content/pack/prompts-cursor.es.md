# Prompts de Cursor — Stack AI en 14 días

Úsalos en Composer o Chat. Cambia lo que está entre `[corchetes]`.
No pidas “hazme el sitio”. Pide un archivo, un cambio, una revisión.

## Antes de cualquier prompt

- Di el locale de la página (`es` o `en`).
- Di la ruta (`src/app/[locale]/…`, `src/content/…`).
- Di qué NO tocar (afiliados, ads, selector de idioma).

---

## 1. Nueva ficha de herramienta

```
Añade una ficha para [nombre] en src/content/tools/.
Slug: [slug].
Copia ES y EN reales, no traducción literal.
Pros y contras honestos. No inventes URL de afiliado.
No toques src/data/affiliates.ts.
Sigue el tipo Tool que ya existe. No rediseñes la ficha.
```

## 2. Tutorial paso a paso

```
Escribe un tutorial en src/content/tutorials/ para [herramienta / flujo].
Slug: [slug].
Nivel: [beginner|intermediate|advanced].
Pasos concretos (qué clic, qué debes ver). Sin relleno.
ES y EN. Tono del sitio: directo, sin “hazte rico”.
Enlaza la herramienta por slug. No inventes capturas: deja el slot vacío si no hay JPG.
```

## 3. Comparativa

```
Añade una comparativa [A] vs [B] en src/data/comparisons.ts.
Misma pregunta a las dos. Un veredicto usable, no un empate eterno.
ES y EN. FAQ corto. No inventes precios que no hayas comprobado.
```

## 4. Revisión de calidad (antes de merge)

```
Revisa el diff de [ruta o PR].
Lista solo: 404s, links sin locale, copy solo en un idioma,
afiliados inventados, ads tocados, selector de idioma añadido.
No reformatees archivos que no tocan el cambio.
```

## 5. SEO de una URL

```
Revisa on-page de [ruta localizada, p. ej. /es/tutorials/slug].
Título, description, H1, un internal link a ficha y otro a comparativa o ruta.
No reescribas el artículo entero. Propón 3 cambios concretos.
```

## 6. No perder el control

```
Haz SOLO esto: [un cambio].
No instales dependencias.
No toques .env ni secrets.
No actives ads.
Si algo no está claro, pregunta; no inventes datos.
```

## Anti-prompts (no uses estos)

- “Crea 20 herramientas más.”
- “Añade un selector ES/EN.”
- “Pon AdSense en todas las páginas.”
- “Publica esto en producción sin que yo lo lea.”
