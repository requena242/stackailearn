import { SITE } from "./site";
import type { Comparison, Tool, Tutorial } from "@/types/content";

export function softwareApplicationJsonLd(
  tool: Tool,
  locale: string,
  url: string,
) {
  const copy = tool.copy[locale as "es" | "en"] ?? tool.copy.en;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: tool.platforms.join(", "),
    url: tool.officialUrl,
    description: copy.fullDescription,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.rating,
      ratingCount: tool.ratingCount,
      bestRating: 5,
    },
    offers: {
      "@type": "Offer",
      price: tool.pricing === "free" ? "0" : "1",
      priceCurrency: "USD",
    },
    publisher: { "@type": "Organization", name: tool.vendor },
    mainEntityOfPage: url,
    dateModified: tool.lastUpdated,
  };
}

export function howToJsonLd(tutorial: Tutorial, locale: string, url: string) {
  const copy = tutorial.copy[locale as "es" | "en"] ?? tutorial.copy.en;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: copy.title,
    description: copy.excerpt,
    totalTime: `PT${tutorial.estimatedTime}M`,
    datePublished: tutorial.publishedAt,
    dateModified: tutorial.lastUpdated,
    url,
    step: copy.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.content,
    })),
  };
}

export function articleJsonLd(tutorial: Tutorial, locale: string, url: string) {
  const copy = tutorial.copy[locale as "es" | "en"] ?? tutorial.copy.en;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: copy.metaTitle,
    description: copy.metaDescription,
    datePublished: tutorial.publishedAt,
    dateModified: tutorial.lastUpdated,
    inLanguage: locale,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: url,
  };
}

export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function comparisonJsonLd(
  comparison: Comparison,
  locale: string,
  url: string,
) {
  const copy = comparison.copy[locale as "es" | "en"] ?? comparison.copy.en;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: copy.title,
    description: copy.excerpt,
    dateModified: comparison.updatedAt,
    url,
    inLanguage: locale,
  };
}
