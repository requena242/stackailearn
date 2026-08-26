import { getTranslations } from "next-intl/server";
import { getTool } from "@/data/tools";
import { pick } from "@/lib/content";
import { ToolMark } from "@/components/tools/ToolMark";
import { Link } from "@/i18n/navigation";
import type { Comparison } from "@/types/content";

export async function CompareTable({
  comparison,
  locale,
}: {
  comparison: Comparison;
  locale: string;
}) {
  const t = await getTranslations("compare");
  const copy = pick(comparison.copy, locale);
  const comparedTools = comparison.toolSlugs.map((slug) => getTool(slug));

  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="border-b border-line px-6 py-6 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">{copy.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{copy.excerpt}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-elevated/50">
              <th className="px-6 py-4 font-medium text-muted sm:px-8" />
              {comparedTools.map((tool) =>
                tool ? (
                  <th key={tool.slug} className="px-4 py-4 font-semibold text-ink">
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="inline-flex items-center gap-2 hover:text-accent"
                    >
                      <ToolMark
                        initials={tool.initials}
                        accent={tool.accent}
                        name={tool.name}
                        size="sm"
                      />
                      {tool.name}
                    </Link>
                  </th>
                ) : null,
              )}
            </tr>
          </thead>
          <tbody>
            {copy.rows.map((row) => (
              <tr key={row.label} className="border-b border-line last:border-0">
                <th className="px-6 py-4 align-top text-xs font-semibold uppercase tracking-[0.12em] text-muted sm:px-8">
                  {row.label}
                </th>
                {row.values.map((value, index) => (
                  <td key={`${row.label}-${index}`} className="px-4 py-4 text-ink/90">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-line bg-elevated/30 px-6 py-6 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {t("verdict")}
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/90">{copy.verdict}</p>
      </div>
    </article>
  );
}
