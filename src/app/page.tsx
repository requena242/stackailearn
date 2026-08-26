import { LocaleRedirect } from "@/components/locale/LocaleRedirect";

/**
 * Entrada sin locale. En Cloudflare redirige la Function (Accept-Language).
 * En local, este cliente hace la misma detección con navigator.languages.
 */
export default function RootPage() {
  return <LocaleRedirect />;
}
