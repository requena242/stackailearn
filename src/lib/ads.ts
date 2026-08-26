import { ads, type AdSlotId } from "@/data/ads";

const PLACEHOLDER_PUB = "ca-pub-XXXXXXXXXXXXXXXX";

export function adsAreEnabled() {
  return ads.enabled;
}

export function adsPreview() {
  return ads.previewSlots && !isAdsLive();
}

export function isAdsLive() {
  if (!ads.enabled) return false;
  if (ads.provider === "ezoic") return Boolean(ads.ezoic.scriptSrc);
  return Boolean(
    ads.adsense.publisherId && ads.adsense.publisherId !== PLACEHOLDER_PUB,
  );
}

export function isSlotOn(id: AdSlotId) {
  return ads.slots[id].enabled && (isAdsLive() || ads.previewSlots);
}

export function shouldInsertBetweenSteps(stepIndex: number, totalSteps: number) {
  if (!isSlotOn("tutorialBetweenSteps")) return false;
  if (totalSteps < 2) return false;
  return stepIndex === ads.betweenStepsAfter - 1;
}
