import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllTutorials } from "@/data/tutorials";
import { TutorialCard } from "@/components/tutorials/TutorialCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("tutorialsTitle"),
    description: t("tutorialsDescription"),
    path: "/tutorials",
  });
}

export default async function TutorialsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("tutorials");
  const sorted = getAllTutorials().sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );

  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {sorted.map((tutorial) => (
          <TutorialCard key={tutorial.slug} tutorial={tutorial} locale={locale} />
        ))}
      </div>
    </Container>
  );
}
