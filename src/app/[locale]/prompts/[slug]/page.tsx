import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { AffiliateDisclosure } from "@/components/affiliate/AffiliateDisclosure";
import { CopyPromptButton } from "@/components/prompts/CopyPromptButton";
import { PromptCard } from "@/components/prompts/PromptCard";
import { PackCta } from "@/components/pack/PackCta";
import { ToolCard } from "@/components/tools/ToolCard";
import { TutorialCard } from "@/components/tutorials/TutorialCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { getComparison } from "@/data/comparisons";
import { getAllPrompts, getPrompt, getPromptsByTool, toPromptListItem } from "@/data/prompts";
import { getTool } from "@/data/tools";
import { getTutorial } from "@/data/tutorials";
import { pick } from "@/lib/content";
import { promptJsonLd } from "@/lib/schema";
import { buildMetadata, localizedPath } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getAllPrompts().map((prompt) => ({ slug: prompt.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const prompt = getPrompt(slug);
  if (!prompt) return {};
  const copy = pick(prompt.copy, locale);
  return buildMetadata({
    locale,
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: `/prompts/${prompt.slug}/`,
  });
}

export default async function PromptPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const prompt = getPrompt(slug);
  if (!prompt) notFound();

  const t = await getTranslations("prompts");
  const usage = await getTranslations("useType");
  const copy = pick(prompt.copy, locale);
  const tool = getTool(prompt.toolSlug);
  const tutorials = prompt.relatedTutorials
    .map((item) => getTutorial(item))
    .filter((item): item is NonNullable<typeof item> => !!item);
  const comparisons = prompt.relatedComparisons
    .map((item) => getComparison(item))
    .filter((item): item is NonNullable<typeof item> => !!item);
  const more = getPromptsByTool(prompt.toolSlug)
    .filter((item) => item.slug !== prompt.slug)
    .map((item) => toPromptListItem(item, locale));
  const url = localizedPath(locale, `/prompts/${prompt.slug}/`);

  return (
    <Container className="py-10 sm:py-16">
      <JsonLd data={promptJsonLd(prompt, locale, url)} />

      <Breadcrumbs
        items={[
          { href: "/", label: "StackAI" },
          { href: "/prompts/", label: t("title") },
          { label: copy.title },
        ]}
      />

      <div className="mx-auto mt-6 max-w-3xl">
        <AffiliateDisclosure />
      </div>

      <article className="mx-auto max-w-3xl">
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {tool ? (
            <Link
              href={`/tools/${tool.slug}/`}
              className="text-xs font-medium uppercase tracking-[0.14em] text-accent"
            >
              {tool.name}
            </Link>
          ) : null}
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            {usage(prompt.use)}
          </span>
          <span className="text-xs text-muted">
            {t("updated")} {prompt.lastUpdated}
          </span>
        </div>

        <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          {copy.title}
        </h1>

        <section className="mt-8 rounded-2xl border border-line bg-surface p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {t("purpose")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/90">{copy.purpose}</p>
        </section>

        <section className="mt-4 rounded-2xl border border-line bg-elevated/40 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {t("bestWith")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/90">{copy.bestWith}</p>
        </section>

        <section className="mt-10 rounded-3xl border border-accent/30 bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              {t("prompt")}
            </h2>
            <CopyPromptButton
              text={copy.prompt}
              label={t("copy")}
              copiedLabel={t("copied")}
            />
          </div>
          <pre className="mt-5 overflow-x-auto whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink sm:text-base">
            {copy.prompt}
          </pre>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-ink">{t("example")}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t("exampleNote")}</p>
          <div className="mt-5 grid gap-4">
            <div className="rounded-2xl border border-line bg-canvas p-5 sm:p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {t("exampleInput")}
              </h3>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/90">
                {copy.example.input}
              </pre>
            </div>
            <div className="rounded-2xl border border-line bg-elevated/40 p-5 sm:p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {t("exampleOutput")}
              </h3>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/90">
                {copy.example.output}
              </pre>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-ink">{t("tweaks")}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {copy.tweaks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-surface p-5">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {tool ? (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-ink">{t("tool")}</h2>
            <div className="mt-5 max-w-md">
              <ToolCard tool={tool} locale={locale} />
            </div>
          </section>
        ) : null}

        {tutorials.length > 0 ? (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-ink">{t("relatedTutorials")}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {tutorials.map((tutorial) => (
                <TutorialCard key={tutorial.slug} tutorial={tutorial} locale={locale} />
              ))}
            </div>
          </section>
        ) : null}

        {comparisons.length > 0 ? (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-ink">{t("relatedComparisons")}</h2>
            <div className="mt-5 grid gap-4">
              {comparisons.map((comparison) => {
                const comparisonCopy = pick(comparison.copy, locale);
                return (
                  <Link
                    key={comparison.slug}
                    href={`/compare/${comparison.slug}/`}
                    className="rounded-2xl border border-line bg-surface p-5 transition hover:border-line-strong hover:bg-elevated"
                  >
                    <h3 className="font-semibold text-ink">{comparisonCopy.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {comparisonCopy.excerpt}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}

        {more.length > 0 ? (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-ink">{t("more")}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {more.map((item) => (
                <PromptCard key={item.slug} item={item} useLabel={usage(item.use)} />
              ))}
            </div>
          </section>
        ) : null}
      </article>

      <div className="mx-auto mt-14 max-w-3xl">
        <PackCta compact contained={false} />
      </div>
    </Container>
  );
}
