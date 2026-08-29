import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AffiliateDisclosure } from "@/components/affiliate/AffiliateDisclosure";
import { PackBuyButton } from "@/components/pack/PackBuyButton";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { packCheckoutReady } from "@/data/checkout";
import { PACK_PRICE_EUR, PACK_PRICE_USD_APPROX, packDays, packFiles } from "@/data/pack";
import { pick } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    title: t("packTitle"),
    description: t("packDescription"),
    path: "/pack",
  });
}

export default async function PackPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pack");
  const days = pick(packDays, locale);
  const files = packFiles.map((file) => ({
    id: file.id,
    title: pick(file.title, locale),
  }));

  return (
    <Container className="py-14 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <p className="inline-flex items-center rounded-full border border-line bg-elevated/80 px-3 py-1 text-xs font-medium text-accent">
          {t("eyebrow")}
        </p>
        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted sm:text-xl">
          {t("promise")}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink">
            <span className="text-3xl font-semibold">{PACK_PRICE_EUR} €</span>
            <span className="ml-2 text-sm text-muted">
              {t("priceUsd", { usd: PACK_PRICE_USD_APPROX })}
            </span>
          </p>
          <PackBuyButton label={t("buy")} />
        </div>
        {!packCheckoutReady ? (
          <p className="mt-3 text-xs text-muted">{t("checkoutPreview")}</p>
        ) : null}

        <section className="mt-16 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="text-lg font-semibold text-ink">{t("forTitle")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{t("forBody")}</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="text-lg font-semibold text-ink">{t("notForTitle")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{t("notForBody")}</p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t("daysTitle")}
          </h2>
          <p className="mt-2 text-sm text-muted">{t("daysSubtitle")}</p>
          <ol className="mt-6 space-y-2">
            {days.map((item) => (
              <li
                key={item.day}
                className="flex gap-4 rounded-2xl border border-line bg-elevated/40 px-4 py-3 sm:px-5"
              >
                <Badge className="mt-0.5 shrink-0">
                  {t("day", { n: item.day })}
                </Badge>
                <div>
                  <p className="font-medium text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t("filesTitle")}
          </h2>
          <p className="mt-2 text-sm text-muted">{t("filesSubtitle")}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {files.map((file) => (
              <li
                key={file.id}
                className="rounded-2xl border border-line bg-surface px-5 py-4 text-sm font-medium text-ink"
              >
                {file.title}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t("howTitle")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">{t("howBody")}</p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t("faqTitle")}
          </h2>
          <dl className="mt-6 space-y-5">
            <div className="rounded-2xl border border-line bg-elevated/40 p-5">
              <dt className="font-semibold text-ink">{t("faq1q")}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{t("faq1a")}</dd>
            </div>
            <div className="rounded-2xl border border-line bg-elevated/40 p-5">
              <dt className="font-semibold text-ink">{t("faq2q")}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{t("faq2a")}</dd>
            </div>
            <div className="rounded-2xl border border-line bg-elevated/40 p-5">
              <dt className="font-semibold text-ink">{t("faq3q")}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{t("faq3a")}</dd>
            </div>
          </dl>
        </section>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            <span className="font-semibold text-ink">{PACK_PRICE_EUR} €</span>
            <span className="ml-2">
              {t("priceUsd", { usd: PACK_PRICE_USD_APPROX })}
            </span>
          </p>
          <PackBuyButton label={t("buy")} />
        </div>

        <div className="mt-10">
          <AffiliateDisclosure />
        </div>
      </article>
    </Container>
  );
}
