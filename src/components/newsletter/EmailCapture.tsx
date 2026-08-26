"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { getSubscribeTarget, newsletterEnabled } from "@/lib/newsletter";
import { cn } from "@/lib/cn";

type Variant = "footer" | "tutorial" | "banner";

const SUBSCRIBED_KEY = "stackai-nl-ok";

export function EmailCapture({
  variant = "footer",
  className,
  onSuccess,
}: {
  variant?: Variant;
  className?: string;
  onSuccess?: () => void;
}) {
  const t = useTranslations("newsletter");
  const target = getSubscribeTarget();
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error" | "setup">(
    "idle",
  );

  if (!newsletterEnabled()) return null;

  const title =
    variant === "footer" ? t("footerTitle") : variant === "banner" ? t("bannerTitle") : t("tutorialTitle");
  const subtitle =
    variant === "footer"
      ? t("footerSubtitle")
      : variant === "banner"
        ? t("bannerSubtitle")
        : t("tutorialSubtitle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!target) {
      setStatus("setup");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get(target.emailField) ?? "").trim();
    if (!email) return;

    setStatus("sending");

    try {
      const body = new URLSearchParams();
      body.set(target.emailField, email);
      for (const [key, value] of Object.entries(target.hidden)) {
        body.set(key, value);
      }

      await fetch(target.action, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      window.localStorage.setItem(SUBSCRIBED_KEY, "1");
      setStatus("ok");
      form.reset();
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className={cn(shell(variant), className)}>
        {variant !== "footer" ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {t("magnetLabel")}
          </p>
        ) : null}
        <p className="text-sm leading-relaxed text-ink">{t("success")}</p>
      </div>
    );
  }

  return (
    <div className={cn(shell(variant), className)}>
      {variant !== "footer" ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {t("magnetLabel")}
        </p>
      ) : (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          {t("footerEyebrow")}
        </p>
      )}
      <h2
        className={cn(
          "mt-2 font-semibold tracking-tight text-ink",
          variant === "banner" ? "text-lg" : "text-base",
        )}
      >
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{subtitle}</p>

      <form
        className={cn(
          "mt-4 flex flex-col gap-2",
          variant === "footer" ? "sm:flex-row" : "sm:flex-row",
        )}
        onSubmit={handleSubmit}
        noValidate
      >
        <label className="sr-only" htmlFor={`nl-${variant}`}>
          {t("email")}
        </label>
        <input
          id={`nl-${variant}`}
          type="email"
          name={target?.emailField ?? "email"}
          required
          autoComplete="email"
          placeholder={t("placeholder")}
          className="h-11 w-full rounded-full border border-line bg-canvas px-4 text-sm text-ink outline-none placeholder:text-muted focus:border-accent/50"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-canvas hover:bg-accent-dim disabled:opacity-60"
        >
          {status === "sending" ? t("sending") : t("cta")}
        </button>
      </form>

      <p className="mt-3 text-[11px] leading-relaxed text-muted">{t("privacy")}</p>
      {status === "error" ? (
        <p className="mt-2 text-xs text-gold">{t("error")}</p>
      ) : null}
      {status === "setup" ? (
        <p className="mt-2 text-xs text-gold">{t("setup")}</p>
      ) : null}
    </div>
  );
}

function shell(variant: Variant) {
  if (variant === "banner") return "max-w-lg";
  if (variant === "tutorial") {
    return "rounded-3xl border border-line bg-surface p-6 sm:p-8";
  }
  return "max-w-md";
}
