"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { PackBuyButton } from "@/components/pack/PackBuyButton";
import { PackLessonList } from "@/components/pack/PackLessonList";
import type { PackLesson } from "@/data/pack-day1";
import { packFiles, type PackFileId } from "@/data/pack";

type Props = { locale: string };

type AccessResponse = {
  ok: boolean;
  preview?: boolean;
  lessons?: PackLesson[];
  error?: string;
};

function fileQuery(params: URLSearchParams, name: string) {
  const q = new URLSearchParams();
  q.set("name", name);
  const session = params.get("session_id");
  if (session) q.set("session_id", session);
  if (params.get("preview") === "1") {
    q.set("preview", "1");
    const secret = params.get("secret");
    if (secret) q.set("secret", secret);
  }
  return `/api/pack/file?${q.toString()}`;
}

export function PackAccess({ locale }: Props) {
  const t = useTranslations("pack");
  const [state, setState] = useState<"loading" | "locked" | "open">("loading");
  const [lessons, setLessons] = useState<PackLesson[]>([]);
  const [params, setParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    setParams(search);

    const q = new URLSearchParams();
    q.set("locale", locale);
    const session = search.get("session_id");
    if (session) q.set("session_id", session);
    if (search.get("preview") === "1") {
      q.set("preview", "1");
      const secret = search.get("secret");
      if (secret) q.set("secret", secret);
    }

    if (!session && search.get("preview") !== "1") {
      setState("locked");
      return;
    }

    fetch(`/api/pack/access?${q.toString()}`)
      .then(async (res) => {
        const data = (await res.json()) as AccessResponse;
        if (!res.ok || !data.ok || !data.lessons) {
          setState("locked");
          return;
        }
        setLessons(data.lessons);
        setState("open");
      })
      .catch(() => setState("locked"));
  }, [locale]);

  const labels = useMemo(
    () => ({
      day: (n: number) => t("day", { n }),
      minutes: (count: number) => t("minutes", { count }),
      stepsLabel: t("stepsLabel"),
      exampleLabel: t("exampleLabel"),
      mistakesLabel: t("mistakesLabel"),
      doneLabel: t("doneLabel"),
      openTemplate: (name: string) => t("openTemplate", { name }),
    }),
    [t],
  );

  if (state === "loading") {
    return <p className="mt-10 text-sm text-muted">{t("accessLoading")}</p>;
  }

  if (state === "locked") {
    return (
      <div className="mt-10 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-ink">{t("lockedTitle")}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{t("lockedBody")}</p>
        <div className="mt-6">
          <PackBuyButton label={t("buy")} />
        </div>
      </div>
    );
  }

  const search = params ?? new URLSearchParams();

  return (
    <>
      <p className="mt-4 rounded-2xl border border-line bg-elevated/40 px-4 py-3 text-sm leading-relaxed text-muted">
        {t("saveLink")}
      </p>
      <PackLessonList
        lessons={lessons}
        labels={labels}
        fileName={(id: PackFileId) => {
          const file = packFiles.find((item) => item.id === id);
          return file ? file.title[locale as "es" | "en"] ?? file.title.en : undefined;
        }}
        fileHref={(id: PackFileId) => {
          const file = packFiles.find((item) => item.id === id);
          if (!file) return undefined;
          const name = file.filename[locale as "es" | "en"] ?? file.filename.en;
          return fileQuery(search, name);
        }}
      />
    </>
  );
}
