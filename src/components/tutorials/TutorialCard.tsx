import { getTranslations } from "next-intl/server";
import { Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getTool } from "@/data/tools";
import { pick } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import type { Tutorial } from "@/types/content";
import { primaryToolSlug } from "@/types/content";

type Props = {
  tutorial: Tutorial;
  locale: string;
};

export async function TutorialCard({ tutorial, locale }: Props) {
  const t = await getTranslations("tutorials");
  const copy = pick(tutorial.copy, locale);
  const tool = getTool(primaryToolSlug(tutorial));

  return (
    <Link
      href={`/tutorials/${tutorial.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-line-strong hover:bg-elevated"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{t(tutorial.level)}</Badge>
        <span className="inline-flex items-center gap-1 text-xs text-muted">
          <Clock className="h-3.5 w-3.5" />
          {t("minutes", { count: tutorial.estimatedTime })}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink group-hover:text-accent">
        {copy.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
        {copy.excerpt}
      </p>
      <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted">
        {tool?.name ?? primaryToolSlug(tutorial)}
      </p>
    </Link>
  );
}
