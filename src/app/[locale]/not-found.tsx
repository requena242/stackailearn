import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-ink">{t("title")}</h1>
      <p className="mt-3 max-w-md text-sm text-muted">{t("body")}</p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-semibold text-canvas"
      >
        {t("cta")}
      </Link>
    </Container>
  );
}
