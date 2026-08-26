"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { categories } from "@/data/categories";
import { pick } from "@/lib/content";
import { cn } from "@/lib/cn";
import type { CategoryId, Difficulty, Pricing, Tool, UseType } from "@/types/content";
import { ToolCardClient } from "./ToolCardClient";

const prices: Pricing[] = ["free", "freemium", "paid", "enterprise"];
const levels: Difficulty[] = ["beginner", "intermediate", "advanced"];
const uses: UseType[] = ["write", "create", "code", "research", "automate", "learn"];

type Props = {
  locale: string;
  tools: Tool[];
};

export function ToolFilters({ locale, tools }: Props) {
  const t = useTranslations("tools");
  const pricingT = useTranslations("pricing");
  const levelT = useTranslations("tutorials");
  const usageT = useTranslations("useType");
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId | "all">(
    categories.some((item) => item.id === initialCategory)
      ? (initialCategory as CategoryId)
      : "all",
  );
  const [price, setPrice] = useState<Pricing | "all">("all");
  const [level, setLevel] = useState<Difficulty | "all">("all");
  const [useType, setUseType] = useState<UseType | "all">("all");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchesCategory = category === "all" || tool.category === category;
      const matchesPrice = price === "all" || tool.pricing === price;
      const matchesLevel = level === "all" || tool.difficulty === level;
      const matchesUse = useType === "all" || tool.useTypes.includes(useType);
      const matchesQuery =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.vendor.toLowerCase().includes(q) ||
        pick(tool.copy, locale).shortDescription.toLowerCase().includes(q) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(q));
      return (
        matchesCategory &&
        matchesPrice &&
        matchesLevel &&
        matchesUse &&
        matchesQuery
      );
    });
  }, [category, locale, level, price, query, tools, useType]);

  return (
    <div>
      <div className="space-y-4">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t("searchPlaceholder")}
          className="h-11 w-full rounded-full border border-line bg-elevated px-4 text-sm text-ink outline-none placeholder:text-muted focus:border-accent/50"
        />

        <FilterRow
          label={t("category")}
          value={category}
          onAll={() => setCategory("all")}
          allLabel={t("all")}
        >
          {categories.map((item) => (
            <Chip
              key={item.id}
              active={category === item.id}
              onClick={() => setCategory(item.id)}
              label={pick(item.copy, locale).name}
            />
          ))}
        </FilterRow>

        <FilterRow
          label={t("pricing")}
          value={price}
          onAll={() => setPrice("all")}
          allLabel={t("all")}
        >
          {prices.map((item) => (
            <Chip
              key={item}
              active={price === item}
              onClick={() => setPrice(item)}
              label={pricingT(item)}
            />
          ))}
        </FilterRow>

        <FilterRow
          label={levelT("level")}
          value={level}
          onAll={() => setLevel("all")}
          allLabel={t("all")}
        >
          {levels.map((item) => (
            <Chip
              key={item}
              active={level === item}
              onClick={() => setLevel(item)}
              label={levelT(item)}
            />
          ))}
        </FilterRow>

        <FilterRow
          label={t("useType")}
          value={useType}
          onAll={() => setUseType("all")}
          allLabel={t("all")}
        >
          {uses.map((item) => (
            <Chip
              key={item}
              active={useType === item}
              onClick={() => setUseType(item)}
              label={usageT(item)}
            />
          ))}
        </FilterRow>
      </div>

      <p className="mt-6 text-sm text-muted">{t("count", { count: visible.length })}</p>

      {visible.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-dashed border-line px-6 py-12 text-center text-sm text-muted">
          {t("empty")}
        </p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((tool) => (
            <ToolCardClient key={tool.slug} tool={tool} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterRow({
  label,
  children,
  onAll,
  allLabel,
  value,
}: {
  label: string;
  children: React.ReactNode;
  onAll: () => void;
  allLabel: string;
  value: string;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        <Chip active={value === "all"} onClick={onAll} label={allLabel} />
        {children}
      </div>
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
