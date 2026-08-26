import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("termsTitle"),
    description: t("termsDescription"),
    path: "/terms",
  });
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");

  return (
    <Container className="py-10 sm:py-16">
      <Breadcrumbs
        items={[
          { href: "/", label: SITE.shortName },
          { label: t("termsTitle") },
        ]}
      />
      <article className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">
          {t("termsTitle")}
        </h1>
        <p className="mt-3 text-sm text-muted">{t("updated")}</p>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/90">
          <p>{t("termsP1")}</p>
          <p>{t("termsP2", { email: SITE.email })}</p>
          <p>{t("termsP3")}</p>
          <p>{t("termsP4")}</p>
          <p>{t("contact", { email: SITE.email })}</p>
        </div>
      </article>
    </Container>
  );
}
