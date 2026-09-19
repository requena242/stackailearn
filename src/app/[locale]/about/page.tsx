import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    path: "/about",
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <Container className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted">{t("lead")}</p>

        <h2 className="mt-14 text-2xl font-semibold text-ink">{t("whoTitle")}</h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/90">
          <p>{t("whoP1")}</p>
          <p>{t("whoP2")}</p>
        </div>

        <h2 className="mt-14 text-2xl font-semibold text-ink">{t("publishTitle")}</h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/90">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>

        <h2 className="mt-14 text-2xl font-semibold text-ink">{t("editorialTitle")}</h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/90">
          <p>{t("editorialP1")}</p>
          <p>{t("editorialP2")}</p>
          <p>{t("editorialP3")}</p>
        </div>

        <h2 className="mt-14 text-2xl font-semibold text-ink">{t("compareTitle")}</h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/90">
          <p>{t("compareP1")}</p>
          <p>{t("compareP2")}</p>
        </div>

        <h2 className="mt-14 text-2xl font-semibold text-ink">{t("affiliateTitle")}</h2>
        <p className="mt-6 text-base leading-relaxed text-ink/90">
          {t("affiliateP1")}{" "}
          <Link href="/disclosure" className="text-accent hover:underline">
            {t("affiliateLink")}
          </Link>
          .
        </p>

        <h2 className="mt-14 text-2xl font-semibold text-ink">{t("workflowsTitle")}</h2>
        <p className="mt-6 text-base leading-relaxed text-ink/90">{t("workflowsP1")}</p>

        <h2 className="mt-14 text-2xl font-semibold text-ink">{t("contactTitle")}</h2>
        <p className="mt-6 text-base leading-relaxed text-ink/90">
          {t("contactLead")}{" "}
          <a
            href="mailto:hello@stackailearn.com"
            className="text-accent hover:underline"
          >
            hello@stackailearn.com
          </a>
        </p>

        <h2 className="mt-14 text-2xl font-semibold text-ink">{t("valuesTitle")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="font-semibold text-ink">{t("v1Title")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t("v1Body")}</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="font-semibold text-ink">{t("v2Title")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t("v2Body")}</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="font-semibold text-ink">{t("v3Title")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t("v3Body")}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
