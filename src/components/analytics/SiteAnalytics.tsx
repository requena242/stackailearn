import { SITE } from "@/lib/site";

/** Cloudflare Web Analytics. GSC va en metadata del root layout. */
export function SiteAnalytics() {
  const beacon = SITE.cloudflareBeaconToken.trim();
  if (!beacon) return null;

  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token: beacon })}
    />
  );
}
