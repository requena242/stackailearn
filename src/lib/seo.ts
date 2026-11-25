import type { Metadata } from "next";
import { locales } from "@/i18n/config";
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
export function withTrailingSlash(path: string): string {
  if (!path || path === "/") return "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

/** Origen como página (`https://stackailearn.com/`), no el host pelado. */
export function siteRootUrl() {
  return `${SITE.url}/`;
}

/** URL absoluta de una página, siempre con barra final. */
export function localizedPath(locale: string, path = "/") {
  return `${SITE.url}/${locale}${withTrailingSlash(path)}`;
}

/**
 * Href interno listo para `<a>`: prefijo de locale y barra final.
 * No toca anclas, externos ni ficheros (`/og.png`).
 */
export function localizedHref(locale: string, href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const hashAt = href.indexOf("#");
  const hash = hashAt >= 0 ? href.slice(hashAt) : "";
  const beforeHash = hashAt >= 0 ? href.slice(0, hashAt) : href;
  const queryAt = beforeHash.indexOf("?");
  const query = queryAt >= 0 ? beforeHash.slice(queryAt) : "";
  const path = queryAt >= 0 ? beforeHash.slice(0, queryAt) : beforeHash;

  if (/\.[a-zA-Z0-9]+$/.test(path)) return href;

  const already = locales.some(
    (item) => path === `/${item}` || path.startsWith(`/${item}/`),
  );
  const slashed = withTrailingSlash(path);
  const localized = already ? slashed : `/${locale}${slashed}`;
  return `${localized}${query}${hash}`;
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
