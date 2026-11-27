import { catalogPrompts } from "@/content/prompts";
import { getTool } from "@/data/tools";
import { pick } from "@/lib/content";
import type { Prompt } from "@/types/content";

export const prompts: Prompt[] = catalogPrompts;

export function getAllPrompts(): Prompt[] {
  return catalogPrompts;
}

export function getPrompt(slug: string) {
  return catalogPrompts.find((prompt) => prompt.slug === slug);
}

export function getLatestPrompts(limit = 3) {
  return [...catalogPrompts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}

export function getPromptsByTool(toolSlug: string) {
  return catalogPrompts.filter((prompt) => prompt.toolSlug === toolSlug);
}

export type PromptListItem = {
  slug: string;
  toolSlug: string;
  toolName: string;
  title: string;
  excerpt: string;
  use: Prompt["use"];
};

export function toPromptListItem(prompt: Prompt, locale: string): PromptListItem {
  const copy = pick(prompt.copy, locale);
  const tool = getTool(prompt.toolSlug);
  return {
    slug: prompt.slug,
    toolSlug: prompt.toolSlug,
    toolName: tool?.name ?? prompt.toolSlug,
    title: copy.title,
    excerpt: copy.excerpt,
    use: prompt.use,
  };
}
