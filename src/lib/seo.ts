import type { Metadata } from "next";
import { SITE } from "./site";

type BuildMetadataInput = {
  locale: string;
  title: string;
  description: string;
  path?: string;
};

/**
 * Forma canónica de una página: barra final, igual que el export
 * (`trailingSlash: true` → `.../slug/index.html`).
 */
function withTrailingSlash(path: string): string {
  if (!path || path === "/") return "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

/** URL absoluta de una página, siempre con barra final. */
export function localizedPath(locale: string, path = "/") {
  return `${SITE.url}/${locale}${withTrailingSlash(path)}`;
}

/** Metadata dinámica por idioma, con canonical + hreflang ES/EN. */
export function buildMetadata({
  locale,
  title,
  description,
  path = "/",
}: BuildMetadataInput): Metadata {
  const url = localizedPath(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: localizedPath("es", path),
        en: localizedPath("en", path),
        "x-default": localizedPath("en", path),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_ES"],
      type: "website",
      images: [
        {
          url: `${SITE.url}/og.png`,
          width: 1200,
          height: 630,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@stackailearn",
      title,
      description,
      images: [`${SITE.url}/og.png`],
    },
  };
}
