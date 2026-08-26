import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "notion-ai";

export const notionAi: Tool = {
  id: slug,
  slug,
  name: "Notion AI",
  vendor: "Notion",
  officialUrl: "https://www.notion.so/product/ai",
  category: "productivity",
  pricing: "freemium",
  featured: false,
  accent: "#FFFFFF",
  initials: "NO",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.2,
  ratingCount: 540,
  lastUpdated: "2026-08-26",
  difficulty: "beginner",
  platforms: ["web", "windows", "macos", "ios", "android"],
  useTypes: ["write", "automate", "learn"],
  tags: ["wiki", "notas", "resumen", "workspace", "productividad"],
  alternatives: ["chatgpt", "claude"],
  relatedTools: ["chatgpt", "claude", "perplexity"],
  relatedTutorials: ["chatgpt-primeros-pasos", "claude-escritura-larga"],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Página de Notion con el panel de IA resumiendo una reunión",
        caption: "Gana quien ya tiene páginas y una fuente de verdad.",
        hint: "Hero 1600×900: página de Notion con un doc de reunión y el panel de AI pidiendo «decisiones + dueños + huecos».",
      },
      en: {
        alt: "Notion page with the AI panel summarizing a meeting",
        caption: "It helps people who already have pages and a source of truth.",
        hint: "Hero 1600×900: Notion meeting doc with the AI panel asking for «decisions + owners + gaps».",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "IA dentro del wiki que ya usas. Resume y redacta donde vive el trabajo, no en otro chat.",
      fullDescription:
        "Notion AI escribe y resume encima de las páginas del equipo. El valor no es «un ChatGPT más»: es no copiar el contexto a otro sitio. Si el workspace es un cajón de sastre, la IA solo acelera el desorden.\n\nÚsalo para actas, primeros borradores de una página que ya tiene título y dueño, y para preguntar sobre docs que el equipo acordó como fuente. Para un texto público largo, suele ser mejor sacar el brief a Claude o ChatGPT.",
      subcategory: "IA en el workspace",
      pricingDetails:
        "Notion tiene planes Free, Plus, Business y Enterprise. La IA va por add-on o incluida según el plan vigente: mira notion.so/pricing. El plan Free sirve para probar; un equipo de verdad acaba pagando workspace + IA.",
      bestFor: [
        "Equipos que ya viven en Notion y tienen páginas con dueño",
        "Actas, FAQs internas y primeros borradores de una wiki",
        "Quien quiere preguntar sobre docs del workspace, no sobre internet",
      ],
      notFor: [
        "Quien aún no tiene un sistema de páginas (empieza por la estructura)",
        "Investigación con fuentes externas (Perplexity)",
        "El artículo o la campaña que se publica fuera del wiki",
      ],
      pros: [
        "El contexto ya está en la página",
        "Menos copiar-pegar entre chat y wiki",
        "Útil para actas y «qué decidimos»",
        "El equipo ve el mismo doc, no un hilo privado",
      ],
      cons: [
        "La calidad de prosa está por detrás de Claude o ChatGPT",
        "Si el workspace es caótico, resume basura con buena cara",
        "El precio se suma al de Notion",
        "No es el sitio para un agente que ejecute fuera de Notion",
      ],
      keyFeatures: [
        "Redactar y resumir dentro de una página",
        "Preguntar al workspace (según plan y permisos)",
        "Autocompletar bloques y listas de tareas",
        "Apps web, escritorio y móvil del Notion de siempre",
        "Permisos heredados de la página",
      ],
      faq: [
        {
          q: "¿Sustituye a ChatGPT?",
          a: "Para un párrafo en una página que ya existe, a menudo sí. Para un texto externo o un briefing desde cero, ChatGPT o Claude suelen dar más control.",
        },
        {
          q: "¿Lee todo el workspace?",
          a: "Solo lo que tus permisos permiten. No asumas que ve finanzas o RR. HH. si esa página no está compartida contigo.",
        },
      ],
      quickTutorial: {
        title: "Un acta que se puede usar",
        steps: [
          "Abre la página de la reunión, no un chat vacío.",
          "Pide: decisiones, dueños, fechas y preguntas abiertas. Nada de «resumen bonito».",
          "Borra lo que no se dijo. Añade un enlace a la fuente si hubo un doc.",
          "Asigna dueños en la misma página.",
          "Si hay que escribir un anuncio externo, saca esas tres decisiones a ChatGPT o Claude.",
        ],
      },
    },
    en: {
      shortDescription:
        "AI inside the wiki you already use. It drafts where the work lives, not in another chat.",
      fullDescription:
        "Notion AI writes and summarizes on top of the team’s pages. The value is not «another ChatGPT». It is not copying context somewhere else. If the workspace is a junk drawer, the AI only speeds up the mess.\n\nUse it for notes, first drafts of a page that already has a title and an owner, and for questions about docs the team agreed are source of truth. For a long public piece, take the brief to Claude or ChatGPT.",
      subcategory: "Workspace AI",
      pricingDetails:
        "Notion has Free, Plus, Business and Enterprise. AI is an add-on or bundled depending on the current plan — check notion.so/pricing. Free is enough to try; a real team ends up paying for workspace + AI.",
      bestFor: [
        "Teams already living in Notion with owned pages",
        "Notes, internal FAQs and first drafts of a wiki page",
        "Questions about workspace docs, not about the open web",
      ],
      notFor: [
        "Anyone without a page system yet (fix structure first)",
        "External-source research (Perplexity)",
        "The article or campaign that ships outside the wiki",
      ],
      pros: [
        "Context already sits on the page",
        "Less copy-paste between chat and wiki",
        "Useful for notes and «what we decided»",
        "The team sees the same doc, not a private thread",
      ],
      cons: [
        "Prose quality lags Claude or ChatGPT",
        "A chaotic workspace yields a polite summary of junk",
        "You pay on top of Notion",
        "It is not an agent that acts outside Notion",
      ],
      keyFeatures: [
        "Draft and summarize inside a page",
        "Ask the workspace (depending on plan and permissions)",
        "Autocomplete for blocks and to-do lists",
        "The usual Notion web, desktop and mobile apps",
        "Permissions inherited from the page",
      ],
      faq: [
        {
          q: "Does it replace ChatGPT?",
          a: "For a paragraph on a page that already exists, often yes. For an external piece or a brief from scratch, ChatGPT or Claude usually give you more control.",
        },
        {
          q: "Does it read the whole workspace?",
          a: "Only what your permissions allow. Do not assume it can see finance or HR if that page is not shared with you.",
        },
      ],
      quickTutorial: {
        title: "Notes you can actually use",
        steps: [
          "Open the meeting page, not an empty chat.",
          "Ask for decisions, owners, dates and open questions. Not a «nice summary».",
          "Delete what was not said. Add a source link if a doc existed.",
          "Assign owners on the same page.",
          "If you need an external announcement, take those three decisions to ChatGPT or Claude.",
        ],
      },
    },
  },
};
