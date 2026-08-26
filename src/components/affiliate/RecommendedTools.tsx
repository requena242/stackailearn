import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getRecommendedTools } from "@/data/tools";
import { pick } from "@/lib/content";
import { AffiliateCTA } from "@/components/affiliate/AffiliateCTA";
import { AffiliateDisclosure } from "@/components/affiliate/AffiliateDisclosure";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ToolMark } from "@/components/tools/ToolMark";
import { Badge } from "@/components/ui/Badge";

export async function RecommendedTools({
  locale,
  heading = true,
}: {
  locale: string;
  heading?: boolean;
}) {
  const t = await getTranslations("affiliate");
  const pricing = await getTranslations("pricing");
  const picks = getRecommendedTools();

  if (picks.length === 0) return null;

  const grid = (
    <div className={heading ? "mt-10 grid gap-4 lg:grid-cols-2" : "grid gap-4 lg:grid-cols-2"}>
      {picks.map(({ tool, note }, index) => (
        <article
          key={tool.slug}
          className="flex flex-col gap-5 rounded-3xl border border-line bg-surface p-5 sm:flex-row sm:items-start sm:p-6"
        >
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <ToolMark
                initials={tool.initials}
                accent={tool.accent}
                name={tool.name}
              />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted">
                  {t("pick", { n: index + 1 })}
                </p>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="mt-1 block text-lg font-semibold text-ink hover:text-accent"
                >
                  {tool.name}
                </Link>
                <div className="mt-2">
                  <Badge>{pricing(tool.pricing)}</Badge>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {note ? pick(note, locale) : pick(tool.copy, locale).shortDescription}
            </p>
            <Link
              href={`/tools/${tool.slug}`}
              className="mt-3 inline-block text-sm font-medium text-accent hover:text-accent-dim"
            >
              {t("readReview")}
            </Link>
          </div>
          <div className="sm:w-48">
            <AffiliateCTA tool={tool} locale={locale} variant="hero" />
          </div>
        </article>
      ))}
    </div>
  );

  if (!heading) return grid;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title={t("recommendedTitle")} subtitle={t("recommendedSubtitle")} />
          <Link
            href="/recommended"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dim"
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {grid}
        <div className="mt-8">
          <AffiliateDisclosure />
        </div>
      </Container>
    </section>
  );
}
