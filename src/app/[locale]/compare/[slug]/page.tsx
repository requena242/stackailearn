import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { comparisons, getComparison } from "@/data/comparisons";
import { pick } from "@/lib/content";
import { comparisonJsonLd, faqJsonLd } from "@/lib/schema";
import { buildMetadata, localizedPath } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CompareTable } from "@/components/compare/CompareTable";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};
  const copy = pick(comparison.copy, locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("comparisonTitle", { title: copy.title }),
    description: t("comparisonDescription", { excerpt: copy.excerpt }),
    path: `/compare/${comparison.slug}`,
  });
}

export default async function ComparisonPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const comparison = getComparison(slug);
  if (!comparison) notFound();

  const t = await getTranslations("compare");
  const copy = pick(comparison.copy, locale);
  const url = localizedPath(locale, `/compare/${comparison.slug}`);

  return (
    <Container className="py-10 sm:py-16">
      <JsonLd data={comparisonJsonLd(comparison, locale, url)} />
      <JsonLd data={faqJsonLd(copy.faq ?? [])} />
      <Breadcrumbs
        items={[
          { href: "/", label: "StackAI" },
          { href: "/compare", label: t("title") },
          { label: copy.title },
        ]}
      />
      <CompareTable comparison={comparison} locale={locale} />
      <p className="mt-10">
        <Link href="/compare" className="text-sm text-accent hover:text-accent-dim">
          ← {t("title")}
        </Link>
      </p>
    </Container>
  );
}
