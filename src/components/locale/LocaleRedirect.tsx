"use client";

import { useEffect } from "react";
import {
  detectLocaleFromAcceptLanguage,
  persistLocaleCookie,
  readLocaleCookie,
} from "@/i18n/locale";
import { SITE } from "@/lib/site";

/**
 * Redirige en silencio según cookie o idioma del navegador.
 * Sin selector ni copy de idiomas en pantalla.
 */
export function LocaleRedirect() {
  useEffect(() => {
    const cookie = readLocaleCookie(document.cookie);
    const detected = detectLocaleFromAcceptLanguage(
      navigator.languages?.join(",") || navigator.language,
      cookie,
    );

    persistLocaleCookie(detected);
    window.location.replace(`/${detected}/`);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-canvas px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">{SITE.name}</p>
    </main>
  );
}
