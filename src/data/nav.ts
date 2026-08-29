export const headerNavItems = [
  { href: "/tools", key: "tools" },
  { href: "/recommended", key: "recommended" },
  { href: "/tutorials", key: "tutorials" },
  { href: "/paths", key: "paths" },
  { href: "/compare", key: "compare" },
  { href: "/about", key: "about" },
  { href: "/pack", key: "pack" },
] as const;

/** Móvil: mismo menú + Buscar, Pack al final. */
export const mobileNavItems = [
  { href: "/tools", key: "tools" },
  { href: "/recommended", key: "recommended" },
  { href: "/tutorials", key: "tutorials" },
  { href: "/paths", key: "paths" },
  { href: "/search", key: "search" },
  { href: "/compare", key: "compare" },
  { href: "/about", key: "about" },
  { href: "/pack", key: "pack" },
] as const;
