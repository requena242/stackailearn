import { Suspense } from "react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllTools } from "@/data/tools";
import { ToolFilters } from "@/components/tools/ToolFilters";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("toolsTitle"),
    description: t("toolsDescription"),
    path: "/tools",
  });
}

export default async function ToolsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("tools");

  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <div className="mt-10">
        <Suspense fallback={<p className="text-sm text-muted">…</p>}>
          <ToolFilters locale={locale} tools={getAllTools()} />
        </Suspense>
      </div>
    </Container>
  );
}
