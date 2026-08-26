"use client";

import { useEffect } from "react";
import { ads } from "@/data/ads";
import type { AdSlotConfig } from "@/data/ads";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

/** Empuja una unidad AdSense. El hueco ya tiene altura reservada alrededor. */
export function AdSenseUnit({ slot }: { slot: AdSlotConfig }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Adblock o script aún no listo: el hueco se queda, no rompe la página.
    }
  }, []);

  if (!slot.slotId) return null;

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={ads.adsense.publisherId}
      data-ad-slot={slot.slotId}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
