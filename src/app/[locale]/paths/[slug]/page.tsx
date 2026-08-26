import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPath, learningPaths } from "@/data/paths";
import { getTutorial } from "@/data/tutorials";
import { pick } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { TutorialCard } from "@/components/tutorials/TutorialCard";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return learningPaths.map((path) => ({ slug: path.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const path = getPath(slug);
  if (!path) return {};
  const copy = pick(path.copy, locale);
  return buildMetadata({
    locale,
    title: copy.title,
    description: copy.excerpt,
    path: `/paths/${path.slug}`,
  });
}

export default async function PathPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const path = getPath(slug);
  if (!path) notFound();

  const t = await getTranslations("start");
  const copy = pick(path.copy, locale);
  const items = path.tutorialSlugs
    .map((item) => getTutorial(item))
    .filter((item): item is NonNullable<typeof item> => !!item);

  return (
    <Container className="py-10 sm:py-16">
      <Breadcrumbs
        items={[
          { href: "/", label: "StackAI" },
          { href: "/paths", label: t("title") },
          { label: copy.title },
        ]}
      />
      <p className="text-xs uppercase tracking-[0.16em] text-accent">{t(path.level)}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">{copy.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{copy.excerpt}</p>
      <p className="mt-2 text-sm text-muted">{copy.audience}</p>

      <ol className="mt-12 space-y-6">
        {items.map((tutorial, index) => (
          <li key={tutorial.slug}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {t("step")} {index + 1}
            </p>
            <TutorialCard tutorial={tutorial} locale={locale} />
          </li>
        ))}
      </ol>
    </Container>
  );
}
