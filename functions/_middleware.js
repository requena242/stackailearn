/**
 * Detección de idioma en Cloudflare Pages.
 *
 * Orden: cookie NEXT_LOCALE → Accept-Language → inglés.
 * Interviene en "/" y en secciones sin locale (/tools, /pack, …) con 302.
 * `/es` y `/en` sin barra final responden 301 a la forma con barra.
 * El resto (páginas con barra, ficheros estáticos) se sirve del export.
 *
 * En local (`next dev`) esta Function no corre: usa LocaleRedirect
 * en las páginas unprefixed de src/app/{section}/page.tsx.
 */

const LOCALES = ["es", "en"];
const DEFAULT_LOCALE = "en";
const COOKIE = "NEXT_LOCALE";

const UNPREFIXED_PREFIXES = [
  "/tools",
  "/tutorials",
  "/compare",
  "/recommended",
  "/paths",
  "/about",
  "/pack",
  "/disclosure",
  "/privacy",
  "/terms",
  "/search",
  "/categories",
];

function readCookie(header, name) {
  if (!header) return null;
  const match = header.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function detectLocale(request) {
  const cookieLocale = readCookie(request.headers.get("Cookie"), COOKIE);
  if (cookieLocale && LOCALES.includes(cookieLocale)) {
    return cookieLocale;
  }

  const accept = request.headers.get("Accept-Language") || "";
  const tags = accept
    .split(",")
    .map((part) => {
      const [rawTag, rawQ] = part.trim().split(";q=");
      return {
        tag: (rawTag || "").toLowerCase(),
        q: rawQ ? parseFloat(rawQ) : 1,
      };
    })
    .filter((item) => item.tag)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of tags) {
    const base = tag.split("-")[0];
    if (LOCALES.includes(base)) return base;
  }

  return DEFAULT_LOCALE;
}

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

function isStaticAsset(pathname) {
  return /\.[a-zA-Z0-9]+$/.test(pathname);
}

/**
 * Páginas de locale sin barra final (`/en/tutorials/slug`).
 * No toca ficheros (`/og.png`, `/sitemap.xml`, `index.html`), `/api` ni `/_next`:
 * un placeholder en `_redirects` no puede excluir extensiones y atraparía
 * `/en/tutorials/index.html`, que Pages ya redirige a la carpeta con barra.
 */
function needsCanonicalSlash(pathname) {
  if (!pathname || pathname.endsWith("/")) return false;
  if (isStaticAsset(pathname)) return false;
  if (pathname.startsWith("/api/") || pathname.startsWith("/_next/")) return false;
  return /^\/(es|en)(\/|$)/.test(pathname);
}

function isUnprefixedSection(pathname) {
  const path = normalizePath(pathname);
  if (path === "/") return true;

  const first = path.split("/")[1];
  if (LOCALES.includes(first)) return false;

  return UNPREFIXED_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Los .md del pack no son públicos. Cubre leftovers de deploys viejos y CDN.
  if (/\.md$/i.test(pathname) && /\/pack\//i.test(pathname)) {
    return new Response("Not found", {
      status: 404,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store",
        "x-robots-tag": "noindex, nofollow",
      },
    });
  }

  // Pages (pretty URLs / html handling) ya responde 308 de `/pagina` a `/pagina/`
  // cuando existe `pagina/index.html`, y 200 en la forma con barra. Un `_redirects`
  // que quite la barra haría bucle con ese 308. Además, el middleware de la raíz
  // hace que Pages no aplique `_redirects` en estas peticiones, así que el 301
  // vive aquí y sustituye al 308: una sola redirección, sin segundo salto.
  if (needsCanonicalSlash(pathname)) {
    const dest = new URL(url);
    dest.pathname = `${pathname}/`;
    return Response.redirect(dest, 301);
  }

  if (isStaticAsset(pathname) || !isUnprefixedSection(pathname)) {
    return context.next();
  }

  const locale = detectLocale(context.request);
  const rest = normalizePath(pathname);
  const destPath = rest === "/" ? `/${locale}/` : `/${locale}${rest}/`;
  const dest = new URL(destPath, url);
  dest.search = url.search;

  return Response.redirect(dest, 302);
}
