import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { packFileHref, packFiles, type PackFileId } from "@/data/pack";
import { packLessons } from "@/data/pack-lessons";
import { pick } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";

function fileById(id: PackFileId) {
  return packFiles.find((file) => file.id === id);
}

export async function PackMethod({ locale }: { locale: string }) {
  const t = await getTranslations("pack");
  const lessons = pick(packLessons, locale);

  return (
    <div className="mt-12 space-y-5">
      <ol className="flex flex-wrap gap-2">
        {lessons.map((lesson) => (
          <li key={lesson.day}>
            <a
              href={`#dia-${lesson.day}`}
              className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-line bg-elevated px-2 text-xs font-medium text-muted hover:border-line-strong hover:text-ink"
            >
              {lesson.day}
            </a>
          </li>
        ))}
      </ol>

      <ol className="space-y-6">
        {lessons.map((lesson) => {
          const file = lesson.fileId ? fileById(lesson.fileId) : undefined;

          return (
            <li
              key={lesson.day}
              id={`dia-${lesson.day}`}
              className="scroll-mt-24 rounded-2xl border border-line bg-surface p-5 sm:p-7"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{t("day", { n: lesson.day })}</Badge>
                <span className="text-xs text-muted">
                  {t("minutes", { count: lesson.minutes })}
                </span>
              </div>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                {lesson.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{lesson.goal}</p>

              <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {t("stepsLabel")}
              </h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink/90">
                {lesson.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <p className="mt-5 rounded-xl border border-line bg-elevated/50 px-4 py-3 text-sm text-ink">
                <span className="font-semibold text-accent">{t("doneLabel")} </span>
                {lesson.done}
              </p>

              {file ? (
                <a
                  href={packFileHref(locale, file)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dim"
                >
                  {t("openTemplate", { name: pick(file.title, locale) })}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
