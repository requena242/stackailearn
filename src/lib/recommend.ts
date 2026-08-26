import { getAllTools, getTool } from "@/data/tools";
import { getAllTutorials, getTutorial } from "@/data/tutorials";
import type { Tool, Tutorial } from "@/types/content";
import { primaryToolSlug } from "@/types/content";

export function relatedToolsFor(tool: Tool, limit = 3): Tool[] {
  const byAlt = [...tool.relatedTools, ...tool.alternatives]
    .map((slug) => getTool(slug))
    .filter((item): item is Tool => !!item);

  const byCategory = getAllTools().filter(
    (item) => item.slug !== tool.slug && item.category === tool.category,
  );

  return uniqueTools([...byAlt, ...byCategory]).slice(0, limit);
}

export function relatedTutorialsFor(tutorial: Tutorial, limit = 3): Tutorial[] {
  const explicit = tutorial.relatedTutorials
    .map((slug) => getTutorial(slug))
    .filter((item): item is Tutorial => !!item);

  const sameTool = getAllTutorials().filter(
    (item) =>
      item.slug !== tutorial.slug &&
      item.toolsUsed.some((slug) => tutorial.toolsUsed.includes(slug)),
  );

  const sameLevel = getAllTutorials().filter(
    (item) => item.slug !== tutorial.slug && item.level === tutorial.level,
  );

  return uniqueTutorials([...explicit, ...sameTool, ...sameLevel]).slice(
    0,
    limit,
  );
}

export function alsoSeeForTool(tool: Tool, limit = 3): Tutorial[] {
  const explicit = tool.relatedTutorials
    .map((slug) => getTutorial(slug))
    .filter((item): item is Tutorial => !!item);
  const extra = getAllTutorials().filter(
    (item) =>
      !explicit.some((known) => known.slug === item.slug) &&
      (item.toolsUsed.includes(tool.slug) || item.category === tool.category),
  );
  return uniqueTutorials([...explicit, ...extra]).slice(0, limit);
}

export function alsoSeeForTutorial(tutorial: Tutorial, limit = 3): Tutorial[] {
  const already = new Set([tutorial.slug, ...tutorial.relatedTutorials]);
  return getAllTutorials()
    .filter((item) => !already.has(item.slug))
    .filter(
      (item) =>
        item.category === tutorial.category ||
        item.toolsUsed.includes(primaryToolSlug(tutorial)),
    )
    .slice(0, limit);
}

export function searchIndex(locale: "es" | "en") {
  const tools = getAllTools().map((tool) => ({
    kind: "tool" as const,
    slug: tool.slug,
    href: `/tools/${tool.slug}`,
    title: tool.name,
    excerpt: tool.copy[locale].shortDescription,
    haystack: [
      tool.name,
      tool.vendor,
      tool.category,
      tool.tags.join(" "),
      tool.copy[locale].shortDescription,
      tool.copy[locale].fullDescription,
      tool.copy[locale].subcategory,
      tool.copy[locale].keyFeatures.join(" "),
    ]
      .join(" ")
      .toLowerCase(),
  }));

  const tutorials = getAllTutorials().map((tutorial) => ({
    kind: "tutorial" as const,
    slug: tutorial.slug,
    href: `/tutorials/${tutorial.slug}`,
    title: tutorial.copy[locale].title,
    excerpt: tutorial.copy[locale].excerpt,
    haystack: [
      tutorial.copy[locale].title,
      tutorial.copy[locale].excerpt,
      tutorial.copy[locale].problem,
      tutorial.copy[locale].metaDescription,
      tutorial.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase(),
  }));

  return [...tools, ...tutorials];
}

export function runSearch(locale: "es" | "en", query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex(locale).filter((item) => item.haystack.includes(q));
}

function uniqueTools(list: Tool[]) {
  const seen = new Set<string>();
  return list.filter((item) => {
    if (seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  });
}

function uniqueTutorials(list: Tutorial[]) {
  const seen = new Set<string>();
  return list.filter((item) => {
    if (seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  });
}
