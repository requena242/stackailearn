import type { Metadata } from "next";
import { SITE } from "./site";

type BuildMetadataInput = {
  locale: string;
  title: string;
  description: string;
  path?: string;
};

/** Metadata dinámica por idioma, con canonical + hreflang ES/EN. */
export function buildMetadata({
  locale,
  title,
  description,
  path = "/",
}: BuildMetadataInput): Metadata {
  const suffix = path === "/" ? "" : path;
  const url = `${SITE.url}/${locale}${suffix}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${SITE.url}/es${suffix}`,
        en: `${SITE.url}/en${suffix}`,
        "x-default": `${SITE.url}/en${suffix}`,
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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function localizedPath(locale: string, path = "/") {
  const suffix = path === "/" ? "" : path;
  return `${SITE.url}/${locale}${suffix}`;
}
