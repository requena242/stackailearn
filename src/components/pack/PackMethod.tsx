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

      <ol className="space-y-8">
        {lessons.map((lesson) => {
          const file = lesson.fileId ? fileById(lesson.fileId) : undefined;

          return (
            <li
              key={lesson.day}
              id={`dia-${lesson.day}`}
              className="scroll-mt-24 rounded-2xl border border-line bg-surface p-5 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{t("day", { n: lesson.day })}</Badge>
                <span className="text-xs text-muted">
                  {t("minutes", { count: lesson.minutes })}
                </span>
              </div>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {lesson.title}
              </h2>
              <p className="mt-2 text-sm font-medium text-ink/80">{lesson.goal}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{lesson.context}</p>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {t("stepsLabel")}
              </h3>
              <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-ink/90">
                {lesson.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <aside className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 px-4 py-4 sm:px-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {t("exampleLabel")}
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-ink/90">
                  {lesson.example}
                </p>
              </aside>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                {t("mistakesLabel")}
              </h3>
              <ul className="mt-3 space-y-2">
                {lesson.mistakes.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-gold/20 bg-gold/5 px-4 py-2.5 text-sm leading-relaxed text-ink/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 rounded-xl border border-line bg-elevated/50 px-4 py-3 text-sm text-ink">
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
