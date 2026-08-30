import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PackAccess } from "@/components/pack/PackAccess";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    ...buildMetadata({
      locale,
      title: t("packThanksTitle"),
      description: t("packThanksDescription"),
      path: "/pack/thanks",
    }),
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function PackThanksPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pack");

  return (
    <Container className="py-14 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {t("thanksEyebrow")}
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {t("thanksTitle")}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{t("thanksLead")}</p>
        <PackAccess locale={locale} />
        <p className="mt-12">
          <Link href="/pack" className="text-sm text-accent hover:text-accent-dim">
            ← {t("backToPack")}
          </Link>
        </p>
      </article>
    </Container>
  );
}
