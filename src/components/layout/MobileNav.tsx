"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { mobileNavItems } from "@/data/nav";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

export function MobileNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
        aria-expanded={open}
        aria-label={open ? t("closeMenu") : t("openMenu")}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-full border-b border-line bg-canvas/95 px-5 py-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-1">
            {mobileNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-2.5 text-sm font-medium",
                  pathname.startsWith(item.href)
                    ? "bg-elevated text-ink"
                    : "text-muted hover:text-ink",
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
