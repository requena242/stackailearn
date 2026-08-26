import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { StartHere } from "@/components/home/StartHere";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("pathsTitle"),
    description: t("pathsDescription"),
    path: "/paths",
  });
}

export default async function PathsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <StartHere locale={locale} />;
}
