import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { learningPaths } from "@/data/paths";
import { pick } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function StartHere({ locale }: { locale: string }) {
  const t = await getTranslations("start");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {learningPaths.map((path) => {
            const copy = pick(path.copy, locale);
            return (
              <Link
                key={path.slug}
                href={`/paths/${path.slug}`}
                className="group rounded-2xl border border-line bg-surface p-6 transition hover:border-line-strong hover:bg-elevated"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-accent">
                  {t(path.level)}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-ink group-hover:text-accent">
                  {copy.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{copy.excerpt}</p>
                <p className="mt-4 text-xs text-muted">{copy.audience}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {t("open")}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
