import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

export function StarRating({
  value,
  count,
}: {
  value: number;
  count?: number;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm">
      <span className="inline-flex" aria-label={`${value} / 5`}>
        {Array.from({ length: 5 }, (_, index) => {
          const filled = index + 1 <= Math.round(value);
          return (
            <Star
              key={index}
              className={cn(
                "h-3.5 w-3.5",
                filled ? "fill-gold text-gold" : "text-line-strong",
              )}
            />
          );
        })}
      </span>
      <span className="font-medium text-ink">{value.toFixed(1)}</span>
      {typeof count === "number" ? (
        <span className="text-xs text-muted">({count})</span>
      ) : null}
    </span>
  );
}
