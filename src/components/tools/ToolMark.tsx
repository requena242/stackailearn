import { cn } from "@/lib/cn";

type Props = {
  initials: string;
  accent: string;
  name: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-9 w-9 text-[11px]",
  md: "h-11 w-11 text-xs",
  lg: "h-14 w-14 text-sm",
};

/** Avatar de marca sin logos oficiales: iniciales + color. */
export function ToolMark({ initials, accent, name, size = "md" }: Props) {
  return (
    <span
      aria-hidden
      title={name}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl font-semibold tracking-wide text-canvas",
        sizes[size],
      )}
      style={{ background: accent }}
    >
      {initials}
    </span>
  );
}
