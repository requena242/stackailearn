import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { tools } from "@/data/tools";
import { tutorials } from "@/data/tutorials";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      <div className="glow-teal pointer-events-none absolute inset-0" />
      <div className="hero-grid pointer-events-none absolute inset-0 hidden sm:block" />

      <Container className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-line bg-elevated/80 px-3 py-1 text-xs font-medium text-accent">
            {t("eyebrow")}
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-6xl sm:leading-[1.05]">
            {t("title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tools"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-canvas transition hover:bg-accent-dim"
            >
              {t("primaryCta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/tutorials"
              className="inline-flex h-11 items-center rounded-full border border-line bg-elevated px-5 text-sm font-semibold text-ink transition hover:border-line-strong"
            >
              {t("secondaryCta")}
            </Link>
          </div>

          <dl className="mx-auto mt-14 grid max-w-sm grid-cols-2 gap-6 border-t border-line pt-8">
            <div>
              <dt className="text-2xl font-semibold text-ink">{tools.length}</dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                {t("statTools")}
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-ink">{tutorials.length}</dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                {t("statTutorials")}
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
