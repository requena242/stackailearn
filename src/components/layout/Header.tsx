"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/brand/Logo";
import { SearchBox } from "@/components/search/SearchBox";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/cn";

const items = [
  { href: "/tools" as const, key: "tools" },
  { href: "/recommended" as const, key: "recommended" },
  { href: "/tutorials" as const, key: "tutorials" },
  { href: "/paths" as const, key: "paths" },
  { href: "/compare" as const, key: "compare" },
  { href: "/about" as const, key: "about" },
];

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/75 backdrop-blur-xl">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm font-medium transition",
                  active ? "bg-elevated text-ink" : "text-muted hover:text-ink",
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SearchBox compact />
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
