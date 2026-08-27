import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CheckCircle2, Clock, Eye } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { resolveImage, stepShot } from "@/content/media";
import { publicAssetExists } from "@/lib/public-file";
import { getCategory } from "@/data/categories";
import { getPathsForTutorial } from "@/data/paths";
import { getTool } from "@/data/tools";
import { getAllTutorials, getTutorial } from "@/data/tutorials";
import { pick } from "@/lib/content";
import { alsoSeeForTutorial, relatedTutorialsFor } from "@/lib/recommend";
import { articleJsonLd, howToJsonLd } from "@/lib/schema";
import { buildMetadata, localizedPath } from "@/lib/seo";
import { AdSlot } from "@/components/ads/AdSlot";
import { AffiliateCTA } from "@/components/affiliate/AffiliateCTA";
import { AffiliateDisclosure } from "@/components/affiliate/AffiliateDisclosure";
import { EmailCapture } from "@/components/newsletter/EmailCapture";
import { shouldInsertBetweenSteps } from "@/lib/ads";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Callout } from "@/components/ui/Callout";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { ScreenshotSlot } from "@/components/ui/ScreenshotSlot";
import { ToolCard } from "@/components/tools/ToolCard";
import { TutorialCard } from "@/components/tutorials/TutorialCard";
import { primaryToolSlug } from "@/types/content";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getAllTutorials().map((tutorial) => ({ slug: tutorial.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tutorial = getTutorial(slug);
  if (!tutorial) return {};
  const copy = pick(tutorial.copy, locale);
  return buildMetadata({
    locale,
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: `/tutorials/${tutorial.slug}`,
  });
}

export default async function TutorialPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const tutorial = getTutorial(slug);
  if (!tutorial) notFound();

  const t = await getTranslations("tutorials");
  const calloutT = await getTranslations("callout");
  const copy = pick(tutorial.copy, locale);
  const tool = getTool(primaryToolSlug(tutorial));
  const category = getCategory(tutorial.category);
  const next = relatedTutorialsFor(tutorial, 3);
  const relatedTools = tutorial.toolsUsed
    .map((item) => getTool(item))
    .filter((item): item is NonNullable<typeof item> => !!item);
  const also = alsoSeeForTutorial(tutorial, 3).filter(
    (item) => !next.some((known) => known.slug === item.slug),
  );
  const paths = getPathsForTutorial(tutorial.slug);
  const url = localizedPath(locale, `/tutorials/${tutorial.slug}`);

  return (
    <Container className="py-10 sm:py-16">
      <JsonLd data={articleJsonLd(tutorial, locale, url)} />
      <JsonLd data={howToJsonLd(tutorial, locale, url)} />

      <Breadcrumbs
        items={[
          { href: "/", label: "StackAI" },
          { href: "/tutorials", label: t("title") },
          { label: copy.title },
        ]}
      />

      <div className="mx-auto mt-6 max-w-3xl">
        <AffiliateDisclosure />
      </div>

      <article className="mx-auto max-w-3xl">
        {publicAssetExists(tutorial.hero.src) ? (
          <ScreenshotSlot media={resolveImage(tutorial.hero, locale)} priority />
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Badge>{t(tutorial.level)}</Badge>
          <span className="inline-flex items-center gap-1 text-xs text-muted">
            <Clock className="h-3.5 w-3.5" />
            {t("minutes", { count: tutorial.estimatedTime })}
          </span>
          {tool ? (
            <Link
              href={`/tools/${tool.slug}`}
              className="text-xs font-medium uppercase tracking-[0.14em] text-accent"
            >
              {tool.name}
            </Link>
          ) : null}
          {category ? (
            <Link
              href={`/categories/${category.id}`}
              className="text-xs text-muted hover:text-ink"
            >
              {pick(category.copy, locale).name}
            </Link>
          ) : null}
          <span className="text-xs text-muted">
            {t("updated")} {tutorial.lastUpdated}
          </span>
        </div>

        <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{copy.intro}</p>

        <AdSlot id="tutorialAfterIntro" />

        <section className="mt-10 rounded-2xl border border-line bg-surface p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {t("problem")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/90">{copy.problem}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-ink">{t("whatYouWillLearn")}</h2>
          <ul className="mt-4 space-y-2">
            {copy.whatYouWillLearn.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-ink">{t("prerequisites")}</h2>
          <ul className="mt-4 space-y-2">
            {copy.prerequisites.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <ol className="mt-12 space-y-8">
          {copy.steps.map((step, index) => {
            const stepMedia =
              step.screenshot ??
              stepShot(
                tutorial.slug,
                index + 1,
                locale,
                step.title,
                step.imageDescription,
                step.whatYouShouldSee,
              );
            return (
            <li
              key={step.title}
              id={`paso-${index + 1}`}
              className="space-y-8"
            >
            <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {t("steps")} {index + 1}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">{step.title}</h2>
              {step.content.split("\n\n").map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-muted sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
              {step.whatYouShouldSee ? (
                <p className="mt-4 flex gap-2 rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink/90">
                  <Eye className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    <span className="font-semibold">{t("whatYouShouldSee")}: </span>
                    {step.whatYouShouldSee}
                  </span>
                </p>
              ) : null}
              {publicAssetExists(stepMedia.src) ? (
                <ScreenshotSlot media={stepMedia} hideIfMissing />
              ) : null}
              {step.code ? (
                <pre className="mt-4 overflow-x-auto rounded-xl border border-line bg-canvas p-4 text-xs leading-relaxed text-accent">
                  <code>{step.code.content}</code>
                </pre>
              ) : null}
              {step.tip ? (
                <Callout callout={{ kind: "tip", title: calloutT("tip"), body: step.tip }} />
              ) : null}
              {step.warning ? (
                <Callout
                  callout={{ kind: "warning", title: calloutT("warning"), body: step.warning }}
                />
              ) : null}
              {step.proTip ? (
                <Callout callout={{ kind: "pro", title: calloutT("pro"), body: step.proTip }} />
              ) : null}
              </div>
              {shouldInsertBetweenSteps(index, copy.steps.length) ? (
                <AdSlot id="tutorialBetweenSteps" className="mb-0 mt-8" />
              ) : null}
            </li>
          );
          })}
        </ol>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-ink">{t("useCases")}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {copy.realUseCases.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-elevated/40 p-5">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-ink">{t("mistakes")}</h2>
          <ul className="mt-5 space-y-3">
            {copy.commonMistakes.map((item) => (
              <li key={item.title} className="rounded-2xl border border-gold/20 bg-gold/5 p-5">
                <h3 className="font-semibold text-gold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/90">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-line bg-surface p-6">
          <h2 className="text-xl font-semibold text-ink">{t("conclusion")}</h2>
          <p className="mt-3 text-base leading-relaxed text-ink/90">{copy.conclusion}</p>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {t("nextSteps")}
          </h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
            {copy.nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <aside className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {t("takeaway")}
          </p>
          <p className="mt-2 text-base leading-relaxed text-ink">{copy.takeaway}</p>
        </aside>

        <AdSlot id="tutorialEnd" />

        <div className="mt-10">
          <EmailCapture variant="tutorial" />
        </div>

        {paths.length > 0 ? (
          <p className="mt-8 text-sm text-muted">
            {t("inPath")}{" "}
            {paths.map((path, index) => (
              <span key={path.slug}>
                {index > 0 ? " · " : null}
                <Link
                  href={`/paths/${path.slug}`}
                  className="font-medium text-accent hover:text-accent-dim"
                >
                  {pick(path.copy, locale).title}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
      </article>

      {relatedTools.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-ink">{t("usedTools")}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedTools.map((item) => (
              <div key={item.slug} className="flex flex-col gap-3">
                <ToolCard tool={item} locale={locale} />
                <AffiliateCTA tool={item} locale={locale} variant="inline" />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {next.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-ink">{t("recommendedNext")}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {next.map((item) => (
              <TutorialCard key={item.slug} tutorial={item} locale={locale} />
            ))}
          </div>
        </section>
      ) : null}

      {also.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-ink">{t("alsoSee")}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {also.map((item) => (
              <TutorialCard key={item.slug} tutorial={item} locale={locale} />
            ))}
          </div>
        </section>
      ) : null}
    </Container>
  );
}
