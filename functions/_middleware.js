/**
 * Detección de idioma en Cloudflare Pages.
 *
 * Orden: cookie NEXT_LOCALE → Accept-Language → inglés.
 * Interviene en "/" y en secciones sin locale (/tools, /pack, …).
 * El resto (incluido /es/..., /en/... y ficheros estáticos) se sirve del export.
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
