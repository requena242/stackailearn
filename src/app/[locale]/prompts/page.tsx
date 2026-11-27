import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PromptBrowser } from "@/components/prompts/PromptBrowser";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllPrompts, toPromptListItem } from "@/data/prompts";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("promptsTitle"),
    description: t("promptsDescription"),
    path: "/prompts/",
  });
}

export default async function PromptsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("prompts");
  const items = getAllPrompts().map((prompt) => toPromptListItem(prompt, locale));

  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-10">
        <PromptBrowser items={items} />
      </div>
    </Container>
  );
}
