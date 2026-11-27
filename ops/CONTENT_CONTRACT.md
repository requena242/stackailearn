# Contrato de contenido

Una página por día. Un tipo por PR. ES y EN en el mismo commit.

## Tipos

| Tipo | Carpeta / archivo | Registrar en |
| --- | --- | --- |
| Ficha | `src/content/tools/{slug}.ts` | `src/content/tools/index.ts` |
| Tutorial | `src/content/tutorials/{slug}.ts` | `src/content/tutorials/index.ts` |
| Comparativa | bloque en `src/data/comparisons.ts` | el propio array |
| Prompt | `src/content/prompts/{slug}.ts` | `src/content/prompts/index.ts` |

Slug: minúsculas, ASCII, guiones. Ejemplo: `chatgpt-vs-perplexity`.

## Obligatorio en los cuatro tipos

- `copy.es` y `copy.en` completos. No dejes un idioma vacío ni un `TODO`.
- Fechas ISO (`YYYY-MM-DD`).
- Enlaces oficiales reales. Si no hay programa de afiliado en `src/data/affiliates.ts`, no inventes URL de comisión.
- Disclosure: no lo toques. Ya vive en layout, fichas y `/disclosure`.
- Ratings: PROHIBIDO inventar valoraciones. Las fichas no llevan `rating`/`ratingCount` ni schema `AggregateRating`. Solo se podrían reintroducir con una fuente verificable y citada (aprobada por Javier).
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

## Prompt (`Prompt`)

Copia `src/content/prompts/claude-auditar-contrato.ts` (o el más cercano).

- `toolSlug`: un slug que exista en el catálogo. Es la herramienta donde se pega el prompt.
- `use`: un `UseType` que ya exista (`write`, `create`, `code`, `research`, `automate`, `learn`).
- `copy.prompt`: el texto listo para copiar, con huecos entre corchetes. No es un tutorial de menús.
- `copy.example.input` y `copy.example.output`: un caso concreto. La entrada es lo que se pega o se adjunta. La salida es la forma de la respuesta.
- `copy.tweaks`: 2 o 3 ajustes para llevar el mismo prompt a otro caso.
- `relatedTutorials` y `relatedComparisons`: slugs que existan. Pueden quedar en lista vacía si no hay pieza cercana; no inventes slugs.
- El ejemplo no dice «lo probé yo» ni trae cifras, porcentajes o puntuaciones que no estén en el material de la entrada.
- No anuncies idiomas. El locale lo decide el sitio.

## Posts de X a partir de un prompt

Cuando el banco salga de un prompt publicado, el post (o el hilo) lleva el prompt listo para copiar y un resultado, no solo el titular.

- La primera línea es un gancho, y el tipo de gancho cambia de un post a otro.
- Frases cortas, tuteo, cero hashtags, cero emojis.
- Cada post cabe en 280 caracteres con el peso de X: una URL cuenta 23.
- En un suelto, el prompt y el resultado van en el mismo post.
- En un hilo de 2 o 3 partes, el prompt completo va en un post, listo para copiar, y el enlace a `/es/prompts/{slug}/` va solo en el último.
- Sin «lo probé yo», sin cifras o valoraciones inventadas, y sin el dominio pelado `grok.com`. Grok Bot no es el chat de Grok.

## Definition of done

1. TypeScript compila. `npm run build` no debe romper por el archivo nuevo.
2. URLs:
   - ficha → `/es/tools/{slug}/` y `/en/tools/{slug}/`
   - tutorial → `/es/tutorials/{slug}/`
   - comparativa → `/es/compare/{slug}/`
   - prompt → `/es/prompts/{slug}/` y `/en/prompts/{slug}/`
3. En `ops/keyword-queue.md` pasa la fila a `in-pr` (al abrir el PR) y a `published` (tras el merge).
4. Añade una línea en `ops/publish-log.md`.
5. Abre **PR**, espera a que `npm run build` pase, mergea. El deploy lo hace GitHub Actions al entrar en `main`.

## Prohibido

- Force-push a `main`.
- Inventar programas de afiliado.
- Publicar sin `copy.en`.
- Cambiar `src/data/affiliates.ts` salvo que Javier pegue una URL real.
- Encender ads (`src/data/ads.ts`) o newsletter sin token.
- Política, clickbait de ingresos, o «sitio bilingüe» en el copy.
