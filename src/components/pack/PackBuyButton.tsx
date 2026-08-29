import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { packCheckoutReady, PACK_CHECKOUT_URL } from "@/data/checkout";
import { cn } from "@/lib/cn";

type Props = {
  label: string;
  className?: string;
};

const buttonClass =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-canvas transition hover:bg-accent-dim";

/** Payment Link / Lemon si hay URL. Si no, preview a /pack/thanks. */
export function PackBuyButton({ label, className }: Props) {
  if (packCheckoutReady) {
    return (
      <a
        href={PACK_CHECKOUT_URL}
        className={cn(buttonClass, className)}
        rel="noopener noreferrer"
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link href="/pack/thanks" className={cn(buttonClass, className)}>
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
