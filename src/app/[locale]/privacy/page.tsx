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
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    path: "/privacy",
  });
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");

  return (
    <Container className="py-10 sm:py-16">
      <Breadcrumbs
        items={[
          { href: "/", label: SITE.shortName },
          { label: t("privacyTitle") },
        ]}
      />
      <article className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">
          {t("privacyTitle")}
        </h1>
        <p className="mt-3 text-sm text-muted">{t("updated")}</p>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/90">
          <p>{t("privacyP1", { email: SITE.email })}</p>
          <p>{t("privacyP2")}</p>
          <p>{t("privacyP3")}</p>
          <p>{t("privacyP4")}</p>
          <p>{t("privacyP5", { email: SITE.email })}</p>
          <p>{t("contact", { email: SITE.email })}</p>
        </div>
      </article>
    </Container>
  );
}
