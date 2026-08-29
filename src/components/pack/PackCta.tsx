import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type Props = {
  /** Home y comparativas: menos aire. Tutorial: bloque completo. */
  compact?: boolean;
  contained?: boolean;
  className?: string;
};

export async function PackCta({
  compact = false,
  contained = true,
  className,
}: Props) {
  const t = await getTranslations("pack");

  const inner = (
    <aside
      className={cn(
        "rounded-2xl border border-line bg-surface",
        compact ? "px-5 py-5 sm:px-6" : "px-6 py-7 sm:px-8 sm:py-8",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {t("ctaEyebrow")}
      </p>
      <h2
        className={cn(
          "mt-2 font-semibold tracking-tight text-ink",
          compact ? "text-lg" : "text-xl sm:text-2xl",
        )}
      >
        {t("ctaTitle")}
      </h2>
      <p
        className={cn(
          "mt-2 max-w-2xl leading-relaxed text-muted",
          compact ? "text-sm" : "text-sm sm:text-base",
        )}
      >
        {t(compact ? "ctaTextCompact" : "ctaText")}
      </p>
      <Link
        href="/pack"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dim"
      >
        {t("ctaButton")}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </aside>
  );

  if (!contained) return inner;

  return (
    <section className={compact ? "py-6" : "py-10 sm:py-12"}>
      <Container>{inner}</Container>
    </section>
  );
}
