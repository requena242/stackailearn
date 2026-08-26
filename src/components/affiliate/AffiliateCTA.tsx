import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { resolveOutbound } from "@/lib/affiliate";
import { pick } from "@/lib/content";
import { cn } from "@/lib/cn";
import type { Tool } from "@/types/content";

type Variant = "hero" | "panel" | "inline";

type Props = {
  tool: Tool;
  locale: string;
  variant?: Variant;
};

export async function AffiliateCTA({ tool, locale, variant = "hero" }: Props) {
  const t = await getTranslations("affiliate");
  const outbound = resolveOutbound(tool);
  const copy = pick(tool.copy, locale);
  const label = outbound.cta === "try" ? t("try") : t("visit");

  const button = (
    <a
      href={outbound.href}
      target="_blank"
      rel={outbound.rel}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition",
        variant === "inline"
          ? "h-9 px-3.5 text-xs bg-accent text-canvas hover:bg-accent-dim"
          : "h-11 px-5 text-sm bg-accent text-canvas hover:bg-accent-dim",
        variant === "panel" && "w-full",
      )}
    >
      {label}
      <ExternalLink className={variant === "inline" ? "h-3.5 w-3.5" : "h-4 w-4"} />
    </a>
  );

  if (variant === "inline") {
    return (
      <span className="inline-flex flex-col items-start gap-1">
        {button}
        {outbound.isAffiliate ? (
          <span className="text-[11px] text-muted">{t("linkNote")}</span>
        ) : null}
      </span>
    );
  }

  if (variant === "panel") {
    return (
      <aside className="rounded-2xl border border-line bg-surface p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {tool.vendor}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-ink">{tool.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {copy.shortDescription}
        </p>
        <div className="mt-4">{button}</div>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          {outbound.isAffiliate ? t("linkNote") : t("officialNote")}
        </p>
      </aside>
    );
  }

  return (
    <div className="flex flex-col items-start gap-2">
      {button}
      <p className="max-w-[16rem] text-xs leading-relaxed text-muted">
        {outbound.isAffiliate ? t("linkNote") : t("officialNote")}
      </p>
    </div>
  );
}
