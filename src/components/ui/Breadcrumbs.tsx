import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export type Crumb = { href?: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-xs text-muted">
      {items.map((item, index) => {
        const last = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
            {index > 0 ? <ChevronRight className="h-3 w-3" /> : null}
            {item.href && !last ? (
              <Link href={item.href as "/"} className="hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span className={last ? "text-ink/80" : undefined}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
