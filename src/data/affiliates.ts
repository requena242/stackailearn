/**
 * Única fuente para monetización.
 *
 * Cómo actualizar un enlace:
 *   1. Añade o edita la entrada en `affiliates` con el slug de la herramienta.
 *   2. Pega la URL del programa (Impact, PartnerStack, etc.).
 *   3. Si no hay programa, no pongas la clave: se usará el enlace oficial.
 *
 * Cómo destacar las que más comisión dan:
 *   Reordena `recommendedSlugs`. Solo esos slugs aparecen en
 *   /recommended y en «Herramientas destacadas» de la home.
 */
import type { Localized } from "@/types/content";

export type AffiliateCta = "visit" | "try";

export type AffiliateEntry = {
  url: string;
  /** visit = «Visitar herramienta». try = «Probar gratis». Si omites, se decide por el plan. */
  cta?: AffiliateCta;
};

export const affiliates: Record<string, AffiliateEntry> = {
  // Alta Javier (no inventar URLs). Ver ops/affiliates.md.
  // cursor: { url: "https://…", cta: "try" },
  // chatgpt: { url: "https://…" },
  // claude: { url: "https://…" },
  // perplexity: { url: "https://…" },
  // midjourney: { url: "https://…" },
};

/** Orden manual. El primero es el más visible. */
export const recommendedSlugs: string[] = [
  "cursor",
  "chatgpt",
  "claude",
  "perplexity",
  "midjourney",
];

/** Frase editorial opcional en la ficha de recomendados. */
export const recommendedNotes: Record<string, Localized<string>> = {
  cursor: {
    es: "Si ya tocas un repo, es el atajo que más tiempo ahorra. El diff se revisa; el chat no sustituye eso.",
    en: "If you already ship code, this is the shortcut that saves real time. You still review the diff.",
  },
  chatgpt: {
    es: "El primer sitio al que mandar a alguien que aún no tiene método. El plan gratis basta para aprender.",
    en: "The first place to send someone who still has no method. The free plan is enough to learn.",
  },
  claude: {
    es: "Cuando el texto es largo y la voz importa. Mejor editor que generador suelto.",
    en: "When the piece is long and voice matters. Better as an editor than a blank-page generator.",
  },
  perplexity: {
    es: "Para briefar con citas, no para publicar el párrafo. Dos fuentes abiertas o no cuenta.",
    en: "For a cited brief, not for publishing the paragraph. Two opened sources or it does not count.",
  },
  midjourney: {
    es: "El motor de stills si sabes describir un plano. De pago; no lo abras para «algo bonito».",
    en: "The still engine if you can describe a shot. Paid — do not open it for «something pretty».",
  },
};
