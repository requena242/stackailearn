import {
  defaultLocale,
  isLocale,
  localeCookieName,
  type Locale,
} from "./config";

/**
 * Detecta el idioma preferido a partir de tags tipo Accept-Language
 * (es-ES,en;q=0.8) o navigator.languages.
 *
 * Orden: cookie persistida → primer tag soportado → idioma por defecto (en).
 */
export function detectLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined,
  cookieValue?: string | null,
): Locale {
  if (isLocale(cookieValue)) {
    return cookieValue;
  }

  const tags = (acceptLanguage ?? "")
    .split(",")
    .map((part) => {
      const [rawTag, rawQ] = part.trim().split(";q=");
      return {
        tag: (rawTag ?? "").toLowerCase(),
        q: rawQ ? Number.parseFloat(rawQ) : 1,
      };
    })
    .filter((item) => item.tag)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of tags) {
    const exact = tag.split("-")[0];
    if (isLocale(exact)) {
      return exact;
    }
  }

  return defaultLocale;
}

export function readLocaleCookie(cookieHeader: string | null | undefined) {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(
    new RegExp(`(?:^|;\\s*)${localeCookieName}=([^;]+)`),
  );
  return match?.[1] ?? null;
}

export function persistLocaleCookie(locale: Locale) {
  document.cookie = `${localeCookieName}=${locale}; path=/; max-age=31536000; samesite=lax`;
}
