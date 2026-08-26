"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { newsletter } from "@/data/newsletter";
import { newsletterEnabled } from "@/lib/newsletter";
import { EmailCapture } from "./EmailCapture";

const DISMISS_KEY = "stackai-nl-dismissed";
const SUBSCRIBED_KEY = "stackai-nl-ok";

/** Banner inferior. No bloquea la página. Aparece tarde y se recuerda el cierre. */
export function NewsletterPrompt() {
  const t = useTranslations("newsletter");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!newsletterEnabled()) return;
    if (window.localStorage.getItem(DISMISS_KEY)) return;
    if (window.localStorage.getItem(SUBSCRIBED_KEY)) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
      window.removeEventListener("scroll", onScroll);
    };

    const timer = window.setTimeout(show, newsletter.promptAfterSeconds * 1000);
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop / (doc.scrollHeight - doc.clientHeight);
      if (scrolled >= newsletter.promptAfterScroll) show();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!open) return null;

  function dismiss() {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
  }

  return (
    <div
      role="dialog"
      aria-label={t("bannerTitle")}
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-3xl gap-4 rounded-3xl border border-line bg-surface/95 p-5 shadow-[0_-12px_40px_rgb(0_0_0/0.35)] backdrop-blur-xl sm:p-6">
        <EmailCapture variant="banner" className="flex-1" onSuccess={dismiss} />
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted hover:text-ink"
          aria-label={t("dismiss")}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
