import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SearchBox } from "@/components/search/SearchBox";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("searchTitle"),
    description: t("searchDescription"),
    path: "/search",
  });
}

export default async function SearchPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("search");

  return (
    <Container className="py-10 sm:py-16">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto mt-10 max-w-xl">
        <SearchBox />
      </div>
    </Container>
  );
}
