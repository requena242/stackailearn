import type { Locale } from "@/i18n/config";
import type { Localized } from "@/types/content";

export const PACK_PRICE_EUR = 29;
export const PACK_PRICE_USD_APPROX = 32;

export type PackFileId =
  | "prompts"
  | "charter"
  | "tutorial"
  | "compare"
  | "tool"
  | "checklist"
  | "week";

export type PackFile = {
  id: PackFileId;
  filename: Localized<string>;
  title: Localized<string>;
};

export const packFiles: PackFile[] = [
  {
    id: "prompts",
    filename: {
      es: "prompts-cursor.es.md",
      en: "prompts-cursor.en.md",
    },
    title: {
      es: "Prompts de Cursor",
      en: "Cursor prompts",
    },
  },
  {
    id: "charter",
    filename: {
      es: "charter-grok-bot.es.md",
      en: "charter-grok-bot.en.md",
    },
    title: {
      es: "Charter de Grok Bot",
      en: "Grok Bot charter",
    },
  },
  {
    id: "tutorial",
    filename: {
      es: "plantilla-tutorial.es.md",
      en: "plantilla-tutorial.en.md",
    },
    title: {
      es: "Plantilla de tutorial",
      en: "Tutorial template",
    },
  },
  {
    id: "compare",
    filename: {
      es: "plantilla-comparativa.es.md",
      en: "plantilla-comparativa.en.md",
    },
    title: {
      es: "Plantilla de comparativa",
      en: "Comparison template",
    },
  },
  {
    id: "tool",
    filename: {
      es: "plantilla-ficha-tool.es.md",
      en: "plantilla-ficha-tool.en.md",
    },
    title: {
      es: "Plantilla de ficha",
      en: "Tool profile template",
    },
  },
  {
    id: "checklist",
    filename: {
      es: "checklist-14-dias.es.md",
      en: "checklist-14-dias.en.md",
    },
    title: {
      es: "Checklist de 14 días",
      en: "14-day checklist",
    },
  },
  {
    id: "week",
    filename: {
      es: "ejemplo-semana.es.md",
      en: "ejemplo-semana.en.md",
    },
    title: {
      es: "Semana tipo (rellena)",
      en: "Worked sample week",
    },
  },
];

export function packFileHref(locale: string, file: PackFile) {
  const name = file.filename[locale as Locale] ?? file.filename.en;
  return `/pack/${name}`;
}

export const packDays: Localized<{ day: number; title: string; body: string }[]> =
  {
    es: [
      {
        day: 1,
        title: "Cuenta y workspace",
        body: "Cursor + Grok Bot listos. Un workspace, no diez pestañas.",
      },
      {
        day: 2,
        title: "Qué publicar primero",
        body: "Estructura del sitio y la primera URL que vale la pena.",
      },
      {
        day: 3,
        title: "Ficha de herramienta",
        body: "Plantilla: qué hace, para quién, y dónde falla.",
      },
      {
        day: 4,
        title: "Tutorial paso a paso",
        body: "Plantilla para un flujo que alguien pueda repetir mañana.",
      },
      {
        day: 5,
        title: "Comparativa que convierte",
        body: "Misma pregunta a dos herramientas. Un veredicto usable.",
      },
      {
        day: 6,
        title: "Prompts de Cursor",
        body: "Para no perder el control del repo ni del tono.",
      },
      {
        day: 7,
        title: "Charter de Grok Bot",
        body: "Draft only: el bot no publica solo. Tú revisas.",
      },
      {
        day: 8,
        title: "Afiliados que sí pagan",
        body: "Cuáles merecen el enlace y cuáles solo ensucian la ficha.",
      },
      {
        day: 9,
        title: "Newsletter y lead magnet",
        body: "Una lista corta. Un motivo para dejar el correo.",
      },
      {
        day: 10,
        title: "SEO de una URL",
        body: "On-page de verdad: título, H1, internal links. Una página.",
      },
      {
        day: 11,
        title: "Distribución sin spam",
        body: "X y Pinterest cuando hay algo que enseñar. No cada hora.",
      },
      {
        day: 12,
        title: "Revisar calidad",
        body: "Checklist antes de dar por cerrada una URL.",
      },
      {
        day: 13,
        title: "Página de venta / pack",
        body: "Cómo está hecha esta misma página, sin teatro.",
      },
      {
        day: 14,
        title: "Rutina de 30 minutos",
        body: "Para no abandonar la semana 3. Un bloque, no un sprint.",
      },
    ],
    en: [
      {
        day: 1,
        title: "Account and workspace",
        body: "Cursor + Grok Bot ready. One workspace, not ten tabs.",
      },
      {
        day: 2,
        title: "What to publish first",
        body: "Site structure and the first URL that is worth shipping.",
      },
      {
        day: 3,
        title: "Tool profile",
        body: "Template: what it does, who it is for, and where it fails.",
      },
      {
        day: 4,
        title: "Step-by-step tutorial",
        body: "A template for a flow someone can repeat tomorrow.",
      },
      {
        day: 5,
        title: "A comparison that converts",
        body: "The same question to two tools. A usable verdict.",
      },
      {
        day: 6,
        title: "Cursor prompts",
        body: "So you do not lose control of the repo or the voice.",
      },
      {
        day: 7,
        title: "Grok Bot charter",
        body: "Draft only: the bot does not publish alone. You review.",
      },
      {
        day: 8,
        title: "Affiliates that actually pay",
        body: "Which links earn their place and which just clutter a profile.",
      },
      {
        day: 9,
        title: "Newsletter and lead magnet",
        body: "A short list. One reason to leave an email.",
      },
      {
        day: 10,
        title: "On-page SEO for one URL",
        body: "Title, H1, internal links. One page done properly.",
      },
      {
        day: 11,
        title: "Distribution without spam",
        body: "X and Pinterest when there is something to show. Not every hour.",
      },
      {
        day: 12,
        title: "Quality review",
        body: "A checklist before you call a URL done.",
      },
      {
        day: 13,
        title: "Sales page / pack",
        body: "How this page itself is built, without the theatre.",
      },
      {
        day: 14,
        title: "A 30-minute routine",
        body: "So week 3 does not die. One block, not a sprint.",
      },
    ],
  };
