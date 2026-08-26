import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type Variant = "banner" | "footer";

export async function AffiliateDisclosure({
  variant = "banner",
}: {
  variant?: Variant;
}) {
  const t = await getTranslations("affiliate");

  if (variant === "footer") {
    return (
      <p className="max-w-xl text-xs leading-relaxed text-muted">
        {t("footer")}{" "}
        <Link href="/disclosure" className="text-ink/80 underline-offset-2 hover:text-accent hover:underline">
          {t("readMore")}
        </Link>
      </p>
    );
  }

  return (
    <p
      className={cn(
        "rounded-2xl border border-line bg-elevated/40 px-4 py-3 text-xs leading-relaxed text-muted",
      )}
    >
      {t("banner")}{" "}
      <Link href="/disclosure" className="font-medium text-ink/80 underline-offset-2 hover:text-accent hover:underline">
        {t("readMore")}
      </Link>
    </p>
  );
}
