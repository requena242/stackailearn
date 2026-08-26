"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getCategory } from "@/data/categories";
import { pick } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { ToolMark } from "./ToolMark";
import type { Tool } from "@/types/content";

export function ToolCardClient({ tool, locale }: { tool: Tool; locale: string }) {
  const t = useTranslations("pricing");
  const copy = pick(tool.copy, locale);
  const category = getCategory(tool.category);

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-line-strong hover:bg-elevated"
    >
      <div className="flex items-start justify-between gap-3">
        <ToolMark initials={tool.initials} accent={tool.accent} name={tool.name} />
        <Badge>{t(tool.pricing)}</Badge>
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink group-hover:text-accent">
        {tool.name}
      </h3>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
        {category ? pick(category.copy, locale).name : tool.category}
      </p>
      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
        {copy.shortDescription}
      </p>
      <div className="mt-4">
        <StarRating value={tool.rating} />
      </div>
    </Link>
  );
}
