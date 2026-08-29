import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CompareTeaser } from "@/components/home/CompareTeaser";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { Hero } from "@/components/home/Hero";
import { LatestTutorials } from "@/components/home/LatestTutorials";
import { PackCta } from "@/components/pack/PackCta";
import { AdSlot } from "@/components/ads/AdSlot";
import { RecommendedTools } from "@/components/affiliate/RecommendedTools";
import { PopularTools } from "@/components/home/PopularTools";
import { StartHere } from "@/components/home/StartHere";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    ...buildMetadata({
      locale,
      title: t("homeTitle"),
      description: t("homeDescription"),
    }),
    title: { absolute: t("homeTitle") },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: `${SITE.url}/${locale}`,
    description: t("homeDescription"),
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AdSlot id="homeHero" contained />
      <StartHere locale={locale} />
      <RecommendedTools locale={locale} />
      <CategoryGrid locale={locale} />
      <PopularTools locale={locale} />
      <LatestTutorials locale={locale} />
      <PackCta compact />
      <CompareTeaser locale={locale} />
    </>
  );
}
