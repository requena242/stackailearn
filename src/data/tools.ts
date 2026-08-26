import { catalogTools } from "@/content/tools";
import { affiliates, recommendedNotes, recommendedSlugs } from "@/data/affiliates";
import type { Localized, Tool } from "@/types/content";

function withAffiliate(tool: Tool): Tool {
  const configured = affiliates[tool.slug];
  return {
    ...tool,
    affiliateUrl: configured?.url,
  };
}

export const tools: Tool[] = catalogTools.map(withAffiliate);

export function getAllTools(): Tool[] {
  return tools;
}

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getFeaturedTools() {
  return tools.filter((tool) => tool.featured);
}

export function getToolsByCategory(category: Tool["category"]) {
  return tools.filter((tool) => tool.category === category);
}

export function getRecommendedTools(): Array<{
  tool: Tool;
  note?: Localized<string>;
}> {
  const picks: Array<{ tool: Tool; note?: Localized<string> }> = [];
  for (const slug of recommendedSlugs) {
    const tool = getTool(slug);
    if (!tool) continue;
    picks.push({ tool, note: recommendedNotes[slug] });
  }
  return picks;
}
