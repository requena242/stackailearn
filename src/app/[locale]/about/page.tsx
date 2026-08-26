import type { Metadata } from "next";
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
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/90">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>

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
