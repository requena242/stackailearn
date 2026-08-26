import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AffiliateDisclosure } from "@/components/affiliate/AffiliateDisclosure";
import { RecommendedTools } from "@/components/affiliate/RecommendedTools";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("recommendedTitle"),
    description: t("recommendedDescription"),
    path: "/recommended",
  });
}

export default async function RecommendedPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("affiliate");

  return (
    <Container className="py-10 sm:py-16">
      <Breadcrumbs
        items={[
          { href: "/", label: "StackAI" },
          { label: t("recommendedTitle") },
        ]}
      />
      <SectionHeading title={t("recommendedTitle")} subtitle={t("recommendedLead")} />
      <div className="mt-8">
        <AffiliateDisclosure />
      </div>
      <div className="mt-10">
        <RecommendedTools locale={locale} heading={false} />
      </div>
    </Container>
  );
}
