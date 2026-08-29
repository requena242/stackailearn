import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { packCheckoutReady } from "@/data/checkout";
import { packFileHref, packFiles } from "@/data/pack";
import { pick } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("packThanksTitle"),
    description: t("packThanksDescription"),
    path: "/pack/thanks",
  });
}

export default async function PackThanksPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pack");

  return (
    <Container className="py-14 sm:py-20">
      <article className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {t("thanksEyebrow")}
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink">
          {t("thanksTitle")}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{t("thanksLead")}</p>
        {!packCheckoutReady ? (
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {t("thanksPreview")}
          </p>
        ) : null}

        <ul className="mt-10 space-y-3">
          {packFiles.map((file) => (
            <li key={file.id}>
              <a
                href={packFileHref(locale, file)}
                className="flex items-center justify-between rounded-2xl border border-line bg-surface px-5 py-4 text-sm font-medium text-ink transition hover:border-line-strong hover:bg-elevated"
              >
                {pick(file.title, locale)}
                <ArrowRight className="h-4 w-4 text-accent" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <Link href="/pack" className="text-sm text-accent hover:text-accent-dim">
            ← {t("backToPack")}
          </Link>
        </p>
      </article>
    </Container>
  );
}
