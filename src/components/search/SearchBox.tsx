"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { isLocale } from "@/i18n/config";
import { runSearch } from "@/lib/recommend";

export function SearchBox({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("search");
  const locale = useLocale();
  const [query, setQuery] = useState("");
  const results = useMemo(
    () => (isLocale(locale) ? runSearch(locale, query).slice(0, 8) : []),
    [locale, query],
  );

  return (
    <div className={compact ? "relative w-full max-w-xs" : "relative w-full"}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={t("placeholder")}
        className="h-10 w-full rounded-full border border-line bg-elevated pl-9 pr-3 text-sm text-ink outline-none placeholder:text-muted focus:border-accent/50"
      />
      {query.trim() && results.length > 0 ? (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
          {results.map((item) => (
            <Link
              key={`${item.kind}-${item.slug}`}
              href={item.href as "/tools"}
              onClick={() => setQuery("")}
              className="block border-b border-line px-4 py-3 last:border-0 hover:bg-elevated"
            >
              <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                {item.kind === "tool" ? t("tool") : t("tutorial")}
              </p>
              <p className="mt-0.5 text-sm font-medium text-ink">{item.title}</p>
              <p className="line-clamp-1 text-xs text-muted">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
