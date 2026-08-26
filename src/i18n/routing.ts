import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "./config";

/**
 * Enrutado con prefijo de idioma siempre visible: /es, /en.
 * Facilita SEO, hreflang y el selector de idioma.
 * No usamos middleware de next-intl porque el sitio se exporta estático.
 */
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});
