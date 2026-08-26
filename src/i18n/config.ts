/**
 * Fuente de verdad de idiomas.
 * Para añadir un idioma: 1) súbelo aquí 2) crea messages/{code}.json
 * 3) añade las traducciones en src/data/*
 */
export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Cookie que recuerda el idioma elegido por el usuario. */
export const localeCookieName = "NEXT_LOCALE";

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && locales.includes(value as Locale);
}
