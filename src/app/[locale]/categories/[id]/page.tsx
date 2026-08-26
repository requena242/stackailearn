import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { categories, getCategory } from "@/data/categories";
import { getAllTools } from "@/data/tools";
import { getAllTutorials } from "@/data/tutorials";
import { pick } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ToolCard } from "@/components/tools/ToolCard";
import { TutorialCard } from "@/components/tutorials/TutorialCard";
import type { CategoryId } from "@/types/content";

type Props = { params: Promise<{ locale: string; id: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ id: category.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const category = getCategory(id as CategoryId);
  if (!category) return {};
  const copy = pick(category.copy, locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("categoryTitle", { name: copy.name }),
    description: copy.intro,
    path: `/categories/${category.id}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const category = getCategory(id as CategoryId);
  if (!category) notFound();

  const t = await getTranslations("categories");
  const copy = pick(category.copy, locale);
  const tools = getAllTools().filter((tool) => tool.category === category.id);
  const tutorials = getAllTutorials().filter(
    (tutorial) => tutorial.category === category.id,
  );

  return (
    <Container className="py-10 sm:py-16">
      <Breadcrumbs
        items={[
          { href: "/", label: "StackAI" },
          { href: "/tools", label: t("directory") },
          { label: copy.name },
        ]}
      />
      <SectionHeading title={copy.name} subtitle={copy.intro} />

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink">{t("tools")}</h2>
        {tools.length === 0 ? (
          <p className="mt-4 text-sm text-muted">{t("emptyTools")}</p>
        ) : (
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} locale={locale} />
            ))}
          </div>
        )}
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-ink">{t("tutorials")}</h2>
        {tutorials.length === 0 ? (
          <p className="mt-4 text-sm text-muted">{t("emptyTutorials")}</p>
        ) : (
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {tutorials.map((tutorial) => (
              <TutorialCard key={tutorial.slug} tutorial={tutorial} locale={locale} />
            ))}
          </div>
        )}
      </section>
    </Container>
  );
}
