import type { Locale } from "@/i18n/config";
import { defaultLocale, isLocale } from "@/i18n/config";
import type { Localized } from "@/types/content";

/** Devuelve el contenido del locale o cae a inglés si falta una clave. */
export function pick<T>(localized: Localized<T>, locale: string): T {
  if (isLocale(locale)) {
    return localized[locale] ?? localized[defaultLocale];
  }
  return localized[defaultLocale];
}

export function asLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}
