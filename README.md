# StackAI Learn

Directorio y tutoriales de herramientas de IA. Producción: [stackailearn.com](https://stackailearn.com) (Cloudflare Pages).

Fábrica de contenido: [`ops/CONTENT_CONTRACT.md`](ops/CONTENT_CONTRACT.md), cola en [`ops/keyword-queue.md`](ops/keyword-queue.md), deploy en [`ops/deploy.md`](ops/deploy.md).

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 4
- next-intl (rutas `/es` y `/en`)
- Export estático (`out/`) para Pages

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La home sin locale detecta el idioma del navegador y redirige a `/es` o `/en`.

```bash
npm run build    # genera out/
npm run preview  # sirve el export estático
```

## Añadir un idioma

1. Suma el código en `src/i18n/config.ts`
2. Copia `messages/en.json` → `messages/{code}.json` y traduce
3. Añade la clave en cada objeto `copy` de `src/data/*`
4. Actualiza `LOCALES` en `functions/_middleware.js`

## Añadir una herramienta

Sigue [`ops/CONTENT_CONTRACT.md`](ops/CONTENT_CONTRACT.md). Las fichas viven en `src/content/tools/`.

## Detección de idioma

1. Cookie `NEXT_LOCALE` si ya hay preferencia
2. `Accept-Language` del navegador (Function de Cloudflare en `/`)
3. En local, el mismo criterio con `navigator.languages`
4. Por defecto: inglés

## Cloudflare Pages

Proyecto nuevo (junto al resto de tus webs), con este repo:

| Ajuste | Valor |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node | 20 |

La carpeta `functions/` se lee desde la raíz del repo (no desde `out/`). Ahí vive la redirección de idioma.

Dominio: en el proyecto Pages, añade `stackailearn.com` (y `www` si quieres) como custom domain.

## Estructura

```
src/app/[locale]/     páginas por idioma
src/components/       UI reutilizable
src/content/          fichas y tutoriales
src/data/             comparativas, paths, monetización
src/i18n/             routing + detección
ops/                  contrato, cola, charters del bot
messages/             textos de interfaz
functions/            middleware de idioma (Pages)
```
