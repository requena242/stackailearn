import type { Locale } from "@/i18n/config";

/** Texto (u objeto) con una entrada por idioma. Añadir un locale = añadir una clave. */
export type Localized<T> = Record<Locale, T>;

export type CategoryId =
  | "text"
  | "image"
  | "video"
  | "code"
  | "productivity"
  | "audio"
  | "research";

export type Pricing = "free" | "freemium" | "paid" | "enterprise";
export type Difficulty = "beginner" | "intermediate" | "advanced";
export type Platform =
  | "web"
  | "windows"
  | "macos"
  | "linux"
  | "ios"
  | "android"
  | "api"
  | "cli"
  | "discord";

export type UseType =
  | "write"
  | "create"
  | "code"
  | "research"
  | "automate"
  | "learn";

export type CalloutKind = "tip" | "warning" | "pro" | "code";

export type ImagePlacement = "hero" | "gallery" | "compare" | "step";

/** Brief de imagen: src opcional + qué foto hace falta, por idioma. */
export type MediaHint = {
  src?: string;
  alt: string;
  caption: string;
  hint: string;
};

export type ContentImage = {
  id: string;
  placement: ImagePlacement;
  src?: string;
  copy: Localized<Pick<MediaHint, "alt" | "caption" | "hint">>;
};

export type Callout = {
  kind: CalloutKind;
  title?: string;
  body: string;
};

export type TutorialStep = {
  title: string;
  /** Explicación accionable del paso. */
  content: string;
  /** Qué debe ver el usuario en pantalla si el paso salió bien. */
  whatYouShouldSee?: string;
  tip?: string;
  warning?: string;
  proTip?: string;
  /** Qué captura hay que hacer para este paso. */
  imageDescription: string;
  screenshot?: MediaHint;
  code?: { language: string; content: string };
};

export type ToolCopy = {
  shortDescription: string;
  fullDescription: string;
  subcategory: string;
  pricingDetails: string;
  bestFor: string[];
  notFor: string[];
  pros: string[];
  cons: string[];
  keyFeatures: string[];
  faq: Array<{ q: string; a: string }>;
  quickTutorial: {
    title: string;
    steps: string[];
  };
};

export type Tool = {
  id: string;
  slug: string;
  name: string;
  vendor: string;
  officialUrl: string;
  affiliateUrl?: string;
  category: CategoryId;
  pricing: Pricing;
  featured: boolean;
  accent: string;
  initials: string;
  logo?: string;
  image?: string;
  rating: number;
  ratingCount: number;
  lastUpdated: string;
  difficulty: Difficulty;
  platforms: Platform[];
  useTypes: UseType[];
  tags: string[];
  alternatives: string[];
  relatedTools: string[];
  relatedTutorials: string[];
  screenshots: ContentImage[];
  copy: Localized<ToolCopy>;
};

export type TutorialCopy = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  intro: string;
  problem: string;
  whatYouWillLearn: string[];
  prerequisites: string[];
  steps: TutorialStep[];
  realUseCases: Array<{ title: string; body: string }>;
  commonMistakes: Array<{ title: string; body: string }>;
  conclusion: string;
  nextSteps: string[];
  takeaway: string;
};

export type Tutorial = {
  id: string;
  slug: string;
  category: CategoryId;
  level: Difficulty;
  estimatedTime: number;
  publishedAt: string;
  lastUpdated: string;
  /** Primera entrada = herramienta principal de la guía. */
  toolsUsed: string[];
  relatedTutorials: string[];
  tags: string[];
  hero: ContentImage;
  copy: Localized<TutorialCopy>;
};

export type Comparison = {
  slug: string;
  toolSlugs: string[];
  updatedAt: string;
  copy: Localized<{
    title: string;
    excerpt: string;
    verdict: string;
    rows: Array<{ label: string; values: string[] }>;
    faq?: Array<{ q: string; a: string }>;
  }>;
};

export type LearningPath = {
  slug: string;
  level: Difficulty;
  tutorialSlugs: string[];
  copy: Localized<{
    title: string;
    excerpt: string;
    audience: string;
  }>;
};

/** Atajo: herramienta principal de un tutorial. */
export function primaryToolSlug(tutorial: Tutorial): string {
  return tutorial.toolsUsed[0];
}
