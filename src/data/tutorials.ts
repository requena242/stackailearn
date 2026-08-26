import { catalogTutorials } from "@/content/tutorials";
import { getTool } from "@/data/tools";
import type { Tutorial } from "@/types/content";
import { primaryToolSlug } from "@/types/content";

export const tutorials: Tutorial[] = catalogTutorials;

export function getAllTutorials(): Tutorial[] {
  return catalogTutorials;
}

export function getTutorial(slug: string) {
  return catalogTutorials.find((tutorial) => tutorial.slug === slug);
}

export function getLatestTutorials(limit = 3) {
  return [...catalogTutorials]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}

export function getTutorialsByTool(toolSlug: string) {
  const explicit = getToolRelated(toolSlug);
  const byUse = catalogTutorials.filter((tutorial) =>
    tutorial.toolsUsed.includes(toolSlug),
  );
  const seen = new Set<string>();
  return [...explicit, ...byUse].filter((tutorial) => {
    if (seen.has(tutorial.slug)) return false;
    seen.add(tutorial.slug);
    return true;
  });
}

function getToolRelated(toolSlug: string): Tutorial[] {
  const tool = getTool(toolSlug);
  if (!tool) return [];
  return tool.relatedTutorials
    .map((slug) => getTutorial(slug))
    .filter((item): item is Tutorial => !!item);
}

export { primaryToolSlug };
