import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { comparisons } from "@/data/comparisons";
import { getTool } from "@/data/tools";
import { pick } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function CompareTeaser({ locale }: { locale: string }) {
  const t = await getTranslations("home");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-line bg-linear-to-br from-elevated to-surface p-8 sm:p-12">
          <SectionHeading
            title={t("compareTitle")}
            subtitle={t("compareSubtitle")}
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {comparisons.map((comparison) => {
              const copy = pick(comparison.copy, locale);
              const names = comparison.toolSlugs
                .map((slug) => getTool(slug)?.name ?? slug)
                .join(" · ");

              return (
                <Link
                  key={comparison.slug}
                  href={`/compare/${comparison.slug}`}
                  className="rounded-2xl border border-line bg-canvas/40 p-5 transition hover:border-accent/30"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">
                    {names}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{copy.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {copy.excerpt}
                  </p>
                </Link>
              );
            })}
          </div>

          <Link
            href="/compare"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dim"
          >
            {t("viewCompare")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
