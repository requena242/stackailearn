"use client";

import { forwardRef } from "react";
import NextLink from "next/link";
import { useLocale } from "next-intl";
import { createNavigation } from "next-intl/navigation";
import { localizedHref } from "@/lib/seo";
import { isLocale } from "./config";
import { routing } from "./routing";

const navigation = createNavigation(routing);

type NextHref = React.ComponentProps<typeof NextLink>["href"];

/**
 * next-intl prefija el locale y, sin `pathnames`, deja el href sin barra
 * (`/en/tutorials/slug`). Ese string viaja en el payload de RSC y Google lo
 * descubre. Aquí el href que llega a `next/link` ya lleva barra.
 */
export const Link = forwardRef<
  HTMLAnchorElement,
  Omit<React.ComponentProps<typeof NextLink>, "href"> & {
    href: string;
    locale?: string;
  }
>(function Link({ href, locale, ...rest }, ref) {
  const current = useLocale();
  const target = locale && isLocale(locale) ? locale : current;
  return (
    <NextLink ref={ref} {...rest} href={localizedHref(target, href) as NextHref} />
  );
});

export const { redirect, usePathname, useRouter, getPathname } = navigation;
