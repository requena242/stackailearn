import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";
import type { PromptListItem } from "@/data/prompts";

type Props = {
  item: PromptListItem;
  useLabel: string;
};

export function PromptCard({ item, useLabel }: Props) {
  return (
    <Link
      href={`/prompts/${item.slug}/`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-line-strong hover:bg-elevated"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{item.toolName}</Badge>
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          {useLabel}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink group-hover:text-accent">
        {item.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
        {item.excerpt}
      </p>
    </Link>
  );
}
