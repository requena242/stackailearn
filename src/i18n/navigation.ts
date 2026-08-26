import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/** Link / router / pathname conscientes del locale (/es/tools, /en/tools). */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
