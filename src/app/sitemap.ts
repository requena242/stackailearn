import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import { learningPaths } from "@/data/paths";
import { tools } from "@/data/tools";
import { tutorials } from "@/data/tutorials";
import { locales } from "@/i18n/config";
import { localizedPath } from "@/lib/seo";

const staticPaths = [
  "/",
  "/tools",
  "/recommended",
  "/tutorials",
  "/compare",
  "/about",
  "/paths",
  "/search",
  "/disclosure",
  "/privacy",
  "/terms",
  "/pack",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: localizedPath(locale, path),
        lastModified: new Date(),
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1 : 0.7,
      });
    }

    for (const tool of tools) {
      entries.push({
        url: localizedPath(locale, `/tools/${tool.slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const tutorial of tutorials) {
      entries.push({
        url: localizedPath(locale, `/tutorials/${tutorial.slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const category of categories) {
      entries.push({
        url: localizedPath(locale, `/categories/${category.id}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.65,
      });
    }

    for (const path of learningPaths) {
      entries.push({
        url: localizedPath(locale, `/paths/${path.slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.65,
      });
    }

    for (const comparison of comparisons) {
      entries.push({
        url: localizedPath(locale, `/compare/${comparison.slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.55,
      });
    }
  }

  return entries;
}
