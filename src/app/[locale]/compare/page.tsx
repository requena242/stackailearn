import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { comparisons } from "@/data/comparisons";
import { getTool } from "@/data/tools";
import { pick } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PackCta } from "@/components/pack/PackCta";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("compareTitle"),
    description: t("compareDescription"),
    path: "/compare",
  });
}

export default async function ComparePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("compare");

  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {comparisons.map((comparison) => {
          const copy = pick(comparison.copy, locale);
          const names = comparison.toolSlugs
            .map((slug) => getTool(slug)?.name ?? slug)
            .join(` ${t("versus")} `);

          return (
            <Link
              key={comparison.slug}
              href={`/compare/${comparison.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition hover:border-line-strong hover:bg-elevated"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-muted">{names}</p>
              <h2 className="mt-3 text-xl font-semibold text-ink group-hover:text-accent">
                {copy.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {copy.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                {t("open")}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-12">
        <PackCta compact contained={false} />
      </div>
    </Container>
  );
}
