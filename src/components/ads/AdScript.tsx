import Script from "next/script";
import { ads } from "@/data/ads";
import { isAdsLive } from "@/lib/ads";

/** Carga el script del proveedor solo si los anuncios están en vivo. */
export function AdScript() {
  if (!isAdsLive()) return null;

  if (ads.provider === "ezoic") {
    return (
      <Script
        src={ads.ezoic.scriptSrc}
        strategy="lazyOnload"
        id="ezoic-sa"
      />
    );
  }

  return (
    <Script
      id="adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ads.adsense.publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
