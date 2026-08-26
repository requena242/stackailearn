import { getTranslations } from "next-intl/server";
import { ads, type AdFormat, type AdSlotId } from "@/data/ads";
import { isAdsLive, isSlotOn } from "@/lib/ads";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { AdSenseUnit } from "./AdSenseUnit";

const formatBox: Record<AdFormat, string> = {
  horizontal: "min-h-[90px] w-full",
  rectangle: "mx-auto min-h-[250px] w-full max-w-[336px]",
  sidebar: "min-h-[250px] w-full max-w-[300px]",
};

type Props = {
  id: AdSlotId;
  className?: string;
  contained?: boolean;
};

export async function AdSlot({ id, className, contained = false }: Props) {
  if (!isSlotOn(id)) return null;

  const t = await getTranslations("ads");
  const slot = ads.slots[id];
  const live = isAdsLive();
  const showUnit =
    live &&
    ads.provider === "adsense" &&
    Boolean(slot.slotId);
  const ezoic =
    live && ads.provider === "ezoic" ? slot.ezoicId : undefined;

  const frame = (
    <aside
      aria-label={t("label")}
      className={cn("my-8", className)}
    >
      <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
        {t("label")}
      </p>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border border-dashed border-line bg-elevated/25",
          formatBox[slot.format],
          slot.format === "sidebar" && "mx-auto lg:mx-0",
        )}
      >
        {showUnit ? (
          <AdSenseUnit slot={slot} />
        ) : ezoic ? (
          <div id={ezoic} className="h-full min-h-[inherit] w-full" />
        ) : (
          <div className="flex h-full items-center justify-center px-4 py-8 text-center">
            <p className="max-w-xs text-xs leading-relaxed text-muted">
              {t("reserved")}
            </p>
          </div>
        )}
      </div>
    </aside>
  );

  if (contained) {
    return <Container>{frame}</Container>;
  }

  return frame;
}
