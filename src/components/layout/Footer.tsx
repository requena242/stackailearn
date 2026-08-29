import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { AffiliateDisclosure } from "@/components/affiliate/AffiliateDisclosure";
import { Logo } from "@/components/brand/Logo";
import { EmailCapture } from "@/components/newsletter/EmailCapture";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-surface/60">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {t("tagline")}
          </p>
          <p className="mt-3 text-sm text-muted">{SITE.domain}</p>
          <div className="mt-8">
            <EmailCapture variant="footer" />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            {t("directory")}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/tools" className="text-ink/80 hover:text-accent">
                {nav("tools")}
              </Link>
            </li>
            <li>
              <Link href="/recommended" className="text-ink/80 hover:text-accent">
                {nav("recommended")}
              </Link>
            </li>
            <li>
              <Link href="/compare" className="text-ink/80 hover:text-accent">
                {nav("compare")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            {t("learn")}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/tutorials" className="text-ink/80 hover:text-accent">
                {nav("tutorials")}
              </Link>
            </li>
            <li>
              <Link href="/paths" className="text-ink/80 hover:text-accent">
                {nav("paths")}
              </Link>
            </li>
            <li>
              <Link href="/pack" className="text-ink/80 hover:text-accent">
                {nav("pack")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-ink/80 hover:text-accent">
                {nav("about")}
              </Link>
            </li>
            <li>
              <Link href="/disclosure" className="text-ink/80 hover:text-accent">
                {t("disclosure")}
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-ink/80 hover:text-accent">
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-ink/80 hover:text-accent">
                {t("terms")}
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-6 text-xs text-muted sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p>{t("rights", { year })}</p>
            <AffiliateDisclosure variant="footer" />
          </div>
          <p>{SITE.email}</p>
        </Container>
      </div>
    </footer>
  );
}
