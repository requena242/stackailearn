# Contrato de contenido

Una página por día. Un tipo por PR. ES y EN en el mismo commit.

## Tipos

| Tipo | Carpeta / archivo | Registrar en |
| --- | --- | --- |
| Ficha | `src/content/tools/{slug}.ts` | `src/content/tools/index.ts` |
| Tutorial | `src/content/tutorials/{slug}.ts` | `src/content/tutorials/index.ts` |
| Comparativa | bloque en `src/data/comparisons.ts` | el propio array |

Slug: minúsculas, ASCII, guiones. Ejemplo: `chatgpt-vs-perplexity`.

## Obligatorio en los tres tipos

- `copy.es` y `copy.en` completos. No dejes un idioma vacío ni un `TODO`.
- Fechas ISO (`YYYY-MM-DD`).
- Enlaces oficiales reales. Si no hay programa de afiliado en `src/data/affiliates.ts`, no inventes URL de comisión.
- Disclosure: no lo toques. Ya vive en layout, fichas y `/disclosure`.
- Ratings: no inventes `ratingCount`. Si no hay cifra editorial previa, copia el estilo de fichas vecinas o deja el campo alineado con herramientas similares (4.2–4.8) y anótalo en el PR.
- Imágenes: usa `toolImage` / `tutorialHero`. Si no hay JPG en `public/media/`, el slot muestra el brief. No subas fotos con copyright.

## Ficha (`Tool`)

Copia `src/content/tools/perplexity.ts` (o la más cercana) y cambia slug, vendor, `officialUrl`, categoría, tags, alternativas y `copy`.

- `bestFor` / `notFor` / `pros` / `cons`: concreto, no «potente y fácil».
- `quickTutorial.steps`: 3–5 acciones, no un tour de menús.
- `faq`: 3–5 preguntas que alguien buscaría.
- `relatedTutorials` / `relatedTools`: slugs que existan.

## Tutorial (`Tutorial`)

Copia `src/content/tutorials/perplexity-investigacion-con-fuentes.ts`.

- Un flujo repetible. 5–8 pasos.
- Cada paso: `content`, `whatYouShouldSee`, `imageDescription`.
- `toolsUsed[0]` = herramienta principal.
- Título con año solo si aporta (`2026`).
- No anuncies idiomas. El locale lo decide el sitio.

## Comparativa (`Comparison`)

Añade un objeto al array de `src/data/comparisons.ts`.

- `toolSlugs`: 2 o 3 slugs que existan en el catálogo.
- `rows`: 5–8 filas. Misma longitud de `values` que de herramientas.
- `verdict`: una recomendación por caso de uso, no un empate eterno.
- `faq` opcional (recomendado para schema).

## Definition of done

1. TypeScript compila. `npm run build` no debe romper por el archivo nuevo.
2. URLs:
   - ficha → `/es/tools/{slug}/` y `/en/tools/{slug}/`
   - tutorial → `/es/tutorials/{slug}/`
   - comparativa → `/es/compare/{slug}/`
3. En `ops/keyword-queue.md` pasa la fila a `in-pr` (al abrir el PR) y a `published` (tras el merge).
4. Añade una línea en `ops/publish-log.md`.
5. Abre **PR**. No hagas push a `main`. No ejecutes `wrangler pages deploy`.

## Prohibido

- Merge a `main`.
- Inventar programas de afiliado.
- Publicar sin `copy.en`.
- Cambiar `src/data/affiliates.ts` salvo que Javier pegue una URL real.
- Encender ads (`src/data/ads.ts`) o newsletter sin token.
- Política, clickbait de ingresos, o «sitio bilingüe» en el copy.
