/**
 * Detección de idioma en Cloudflare Pages.
 *
 * Orden: cookie NEXT_LOCALE → Accept-Language → inglés.
 * Solo interviene en "/". El resto se sirve desde el export estático.
 *
 * En local (`next dev`) esta Function no corre: usa LocaleRedirect.
 */

const LOCALES = ["es", "en"];
const DEFAULT_LOCALE = "en";
const COOKIE = "NEXT_LOCALE";

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

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.pathname === "/" || url.pathname === "") {
    const locale = detectLocale(context.request);
    return Response.redirect(new URL(`/${locale}/`, url), 302);
  }

  return context.next();
}
