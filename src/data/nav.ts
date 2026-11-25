export const headerNavItems = [
  { href: "/tools/", key: "tools" },
  { href: "/recommended/", key: "recommended" },
  { href: "/tutorials/", key: "tutorials" },
  { href: "/paths/", key: "paths" },
  { href: "/compare/", key: "compare" },
  { href: "/about/", key: "about" },
  { href: "/pack/", key: "pack" },
] as const;

/** Móvil: mismo menú + Buscar, Pack al final. */
export const mobileNavItems = [
  { href: "/tools/", key: "tools" },
  { href: "/recommended/", key: "recommended" },
  { href: "/tutorials/", key: "tutorials" },
  { href: "/paths/", key: "paths" },
  { href: "/search/", key: "search" },
  { href: "/compare/", key: "compare" },
  { href: "/about/", key: "about" },
  { href: "/pack/", key: "pack" },
] as const;

/** Activo con o sin barra: `/tools` y `/tools/` apuntan a la misma sección. */
export function isActivePath(pathname: string, href: string) {
  const strip = (value: string) =>
    value !== "/" && value.endsWith("/") ? value.slice(0, -1) : value || "/";
  const current = strip(pathname);
  const target = strip(href);
  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
}
