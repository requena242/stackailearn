import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("disclosureTitle"),
    description: t("disclosureDescription"),
    path: "/disclosure",
  });
}

export default async function DisclosurePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("affiliate");

  return (
    <Container className="py-10 sm:py-16">
      <Breadcrumbs
        items={[
          { href: "/", label: "StackAI" },
          { label: t("disclosureTitle") },
        ]}
      />
      <article className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">
          {t("disclosureTitle")}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">{t("disclosureLead")}</p>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/90">
          <p>{t("disclosureP1")}</p>
          <p>{t("disclosureP2")}</p>
          <p>{t("disclosureP3")}</p>
          <p>{t("disclosureP4")}</p>
        </div>
      </article>
    </Container>
  );
}
