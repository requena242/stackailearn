/**
 * Rutas de sección SIN locale. Quien entre a /tools o /pack
 * debe acabar en /{es|en}/... con la misma detección que "/".
 *
 * Los slugs son los que ya usa el App Router. No hay alias
 * tipo /herramientas: ambos idiomas usan /tools, /tutorials, etc.
 */
export const UNPREFIXED_SECTION_PREFIXES = [
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
] as const;

export type UnprefixedSection = (typeof UNPREFIXED_SECTION_PREFIXES)[number];
