import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact = false }: Props) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)}>
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-elevated ring-1 ring-line-strong">
        <span className="absolute inset-0 rounded-lg bg-accent/10 opacity-0 transition group-hover:opacity-100" />
        <svg viewBox="0 0 24 24" className="relative h-4 w-4 text-accent" aria-hidden>
          <path
            d="M5 16.5 12 5l7 11.5H5Zm3.2-2h7.6L12 8.4 8.2 14.5Z"
            fill="currentColor"
          />
          <path d="M7 19h10v1.6H7z" fill="currentColor" opacity="0.55" />
        </svg>
      </span>
      {compact ? (
        <span className="sr-only">{SITE.name}</span>
      ) : (
        <span className="text-[15px] font-semibold tracking-tight text-ink">
          StackAI <span className="font-medium text-muted">Learn</span>
        </span>
      )}
    </Link>
  );
}
