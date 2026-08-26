import { affiliates, type AffiliateCta } from "@/data/affiliates";
import type { Tool } from "@/types/content";

const AFFILIATE_REL = "nofollow sponsored noopener noreferrer";
const OFFICIAL_REL = "noopener noreferrer";

export type OutboundLink = {
  href: string;
  isAffiliate: boolean;
  rel: typeof AFFILIATE_REL | typeof OFFICIAL_REL;
  cta: AffiliateCta;
};

export function getConfiguredAffiliate(slug: string) {
  return affiliates[slug];
}

export function resolveOutbound(tool: Tool): OutboundLink {
  const configured = getConfiguredAffiliate(tool.slug);
  const href = configured?.url || tool.officialUrl;
  const isAffiliate = Boolean(configured?.url);
  const cta = configured?.cta ?? defaultCta(tool);

  return {
    href,
    isAffiliate,
    rel: isAffiliate ? AFFILIATE_REL : OFFICIAL_REL,
    cta,
  };
}

function defaultCta(tool: Tool): AffiliateCta {
  return tool.pricing === "free" || tool.pricing === "freemium" ? "try" : "visit";
}
