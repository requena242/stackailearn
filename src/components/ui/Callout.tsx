import { AlertTriangle, Lightbulb, Sparkles, Terminal } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Callout as CalloutData } from "@/types/content";

const styles = {
  tip: {
    wrap: "border-sky-400/25 bg-sky-400/8",
    icon: "text-sky-300",
    Icon: Lightbulb,
  },
  warning: {
    wrap: "border-gold/30 bg-gold/8",
    icon: "text-gold",
    Icon: AlertTriangle,
  },
  pro: {
    wrap: "border-accent/25 bg-accent/8",
    icon: "text-accent",
    Icon: Sparkles,
  },
  code: {
    wrap: "border-line bg-canvas",
    icon: "text-muted",
    Icon: Terminal,
  },
};

export function Callout({ callout }: { callout: CalloutData }) {
  const style = styles[callout.kind];
  const Icon = style.Icon;

  return (
    <aside className={cn("mt-4 rounded-2xl border px-4 py-3", style.wrap)}>
      <p className={cn("flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]", style.icon)}>
        <Icon className="h-3.5 w-3.5" />
        {callout.title ?? callout.kind}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink/90">{callout.body}</p>
    </aside>
  );
}
