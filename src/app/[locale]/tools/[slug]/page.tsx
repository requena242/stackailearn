import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { AffiliateCTA } from "@/components/affiliate/AffiliateCTA";
import { AffiliateDisclosure } from "@/components/affiliate/AffiliateDisclosure";
import { resolveImage } from "@/content/media";
import { publicAssetExists } from "@/lib/public-file";
import { getCategory } from "@/data/categories";
import { getAllTools, getTool } from "@/data/tools";
import { getTutorialsByTool } from "@/data/tutorials";
import { pick } from "@/lib/content";
import { alsoSeeForTool, relatedToolsFor } from "@/lib/recommend";
import { faqJsonLd, softwareApplicationJsonLd } from "@/lib/schema";
import { buildMetadata, localizedPath } from "@/lib/seo";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { ScreenshotSlot } from "@/components/ui/ScreenshotSlot";
import { StarRating } from "@/components/ui/StarRating";
import { ToolCard } from "@/components/tools/ToolCard";
import { ToolMark } from "@/components/tools/ToolMark";
import { TutorialCard } from "@/components/tutorials/TutorialCard";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getAllTools().map((tool) => ({ slug: tool.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  const copy = pick(tool.copy, locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("toolTitle", { name: tool.name }),
    description: t("toolDescription", { tagline: copy.shortDescription }),
    path: `/tools/${tool.slug}`,
  });
}

export default async function ToolPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const tool = getTool(slug);
  if (!tool) notFound();

  const t = await getTranslations("tools");
  const pricing = await getTranslations("pricing");
  const levels = await getTranslations("tutorials");
  const uses = await getTranslations("useType");
  const platforms = await getTranslations("platform");
  const copy = pick(tool.copy, locale);
  const category = getCategory(tool.category);
  const related = getTutorialsByTool(tool.slug);
  const alternatives = relatedToolsFor(tool, 3);
  const also = alsoSeeForTool(tool, 3).filter(
    (item) => !related.some((known) => known.slug === item.slug),
  );
  const url = localizedPath(locale, `/tools/${tool.slug}`);
  const hero = tool.screenshots.find((item) => item.placement === "hero");
  const gallery = tool.screenshots.filter((item) => item.placement !== "hero");

  return (
    <Container className="py-10 sm:py-16">
      <JsonLd data={softwareApplicationJsonLd(tool, locale, url)} />
      <JsonLd data={faqJsonLd(copy.faq)} />

      <Breadcrumbs
        items={[
          { href: "/", label: "StackAI" },
          { href: "/tools", label: t("title") },
          { label: tool.name },
        ]}
      />

      <div className="mt-6">
        <AffiliateDisclosure />
      </div>

      {hero && publicAssetExists(hero.src) ? (
        <ScreenshotSlot media={resolveImage(hero, locale)} priority />
      ) : null}

      <div className="mt-8 flex flex-col gap-6 border-b border-line pb-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex gap-4">
          <ToolMark
            initials={tool.initials}
            accent={tool.accent}
            name={tool.name}
            size="lg"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              {tool.vendor}
              {copy.subcategory ? ` · ${copy.subcategory}` : null}
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {tool.name}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted">{copy.shortDescription}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <StarRating value={tool.rating} count={tool.ratingCount} />
              <span className="text-xs text-muted">
                {t("updated")} {tool.lastUpdated}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>{pricing(tool.pricing)}</Badge>
              <Badge>{levels(tool.difficulty)}</Badge>
              {category ? (
                <Link href={`/categories/${category.id}`}>
                  <Badge>{pick(category.copy, locale).name}</Badge>
                </Link>
              ) : null}
              {tool.useTypes.map((use) => (
                <Badge key={use}>{uses(use)}</Badge>
              ))}
            </div>
          </div>
        </div>

        <AffiliateCTA tool={tool} locale={locale} />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h2 className="text-xl font-semibold text-ink">{t("overview")}</h2>
          {copy.fullDescription.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-3 text-base leading-relaxed text-ink/90">
              {paragraph}
            </p>
          ))}

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-ink">{t("keyFeatures")}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {copy.keyFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                {t("pros")}
              </h2>
              <ul className="mt-4 space-y-3">
                {copy.pros.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                {t("cons")}
              </h2>
              <ul className="mt-4 space-y-3">
                {copy.cons.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink/90">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-elevated/30 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                {t("idealFor")}
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                {copy.bestFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-elevated/30 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                {t("notFor")}
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                {copy.notFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {copy.faq.length > 0 ? (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink">{t("faq")}</h2>
              <dl className="mt-4 space-y-4">
                {copy.faq.map((item) => (
                  <div key={item.q} className="rounded-2xl border border-line bg-surface p-5">
                    <dt className="font-semibold text-ink">{item.q}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {gallery.some((image) => publicAssetExists(image.src)) ? (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink">{t("screenshots")}</h2>
              {gallery
                .filter((image) => publicAssetExists(image.src))
                .map((image) => (
                  <ScreenshotSlot key={image.id} media={resolveImage(image, locale)} />
                ))}
            </section>
          ) : null}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <AdSlot id="toolSidebar" className="my-0" />
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
              {t("pricingDetails")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/90">{copy.pricingDetails}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
              {t("platforms")}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {tool.platforms.map((item) => (
                <Badge key={item}>{platforms(item)}</Badge>
              ))}
            </div>
            {tool.tags.length > 0 ? (
              <>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
                  {t("tags")}
                </p>
                <p className="mt-2 text-xs text-muted">{tool.tags.join(" · ")}</p>
              </>
            ) : null}
          </div>

          <div className="rounded-2xl border border-line bg-elevated/50 p-6">
            <h2 className="text-lg font-semibold text-ink">{copy.quickTutorial.title}</h2>
            <ol className="mt-5 space-y-4">
              {copy.quickTutorial.steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-canvas text-xs font-semibold text-accent">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t("relatedTutorials")}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {related.map((tutorial) => (
              <TutorialCard key={tutorial.slug} tutorial={tutorial} locale={locale} />
            ))}
          </div>
        </section>
      ) : null}

      {alternatives.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t("alternatives")}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {alternatives.map((item) => (
              <ToolCard key={item.slug} tool={item} locale={locale} />
            ))}
          </div>
        </section>
      ) : null}

      {also.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">{t("alsoSee")}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {also.map((tutorial) => (
              <TutorialCard key={tutorial.slug} tutorial={tutorial} locale={locale} />
            ))}
          </div>
        </section>
      ) : null}
    </Container>
  );
}
