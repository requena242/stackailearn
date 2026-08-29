"use client";

import { useEffect } from "react";
import {
  detectLocaleFromAcceptLanguage,
  persistLocaleCookie,
  readLocaleCookie,
} from "@/i18n/locale";
import { SITE } from "@/lib/site";

function withTrailingSlash(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

/**
 * Redirige en silencio según cookie o idioma del navegador.
 * Sin selector ni copy de idiomas en pantalla.
 */
export function LocaleRedirect({ path = "/" }: { path?: string }) {
  useEffect(() => {
    const cookie = readLocaleCookie(document.cookie);
    const detected = detectLocaleFromAcceptLanguage(
      navigator.languages?.join(",") || navigator.language,
      cookie,
    );

    persistLocaleCookie(detected);
    const suffix = withTrailingSlash(path);
    window.location.replace(`/${detected}${suffix === "/" ? "/" : suffix}`);
  }, [path]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-canvas px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">{SITE.name}</p>
    </main>
  );
}
