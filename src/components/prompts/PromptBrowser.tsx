"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { PromptCard } from "@/components/prompts/PromptCard";
import { cn } from "@/lib/cn";
import type { PromptListItem } from "@/data/prompts";

type Props = {
  items: PromptListItem[];
};

export function PromptBrowser({ items }: Props) {
  const t = useTranslations("prompts");
  const usage = useTranslations("useType");
  const [toolSlug, setToolSlug] = useState<string>("all");

  const tools = useMemo(() => {
    const seen = new Map<string, string>();
    for (const item of items) {
      if (!seen.has(item.toolSlug)) seen.set(item.toolSlug, item.toolName);
    }
    return [...seen.entries()]
      .map(([slug, name]) => ({ slug, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);

  const visible = items.filter((item) => toolSlug === "all" || item.toolSlug === toolSlug);

  return (
    <div>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {t("filterTool")}
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip active={toolSlug === "all"} label={t("all")} onClick={() => setToolSlug("all")} />
          {tools.map((tool) => (
            <Chip
              key={tool.slug}
              active={toolSlug === tool.slug}
              label={tool.name}
              onClick={() => setToolSlug(tool.slug)}
            />
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-dashed border-line px-6 py-12 text-center text-sm text-muted">
          {t("empty")}
        </p>
      ) : (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {visible.map((item) => (
            <PromptCard key={item.slug} item={item} useLabel={usage(item.use)} />
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-sm font-medium transition",
        active
          ? "border-ink bg-ink text-canvas"
          : "border-line bg-elevated text-muted hover:text-ink",
      )}
    >
      {label}
    </button>
  );
}
