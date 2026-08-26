import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "grok";

export const grok: Tool = {
  id: slug,
  slug,
  name: "Grok",
  vendor: "xAI",
  officialUrl: "https://grok.com",
  category: "text",
  pricing: "freemium",
  featured: false,
  accent: "#E8E4DC",
  initials: "GR",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.3,
  ratingCount: 640,
  lastUpdated: "2026-08-26",
  difficulty: "beginner",
  platforms: ["web", "ios", "android"],
  useTypes: ["write", "research", "learn"],
  tags: ["chat", "actualidad", "xai", "grok.com"],
  alternatives: ["chatgpt", "claude", "perplexity"],
  relatedTools: ["chatgpt", "claude", "grok-bot"],
  relatedTutorials: ["chatgpt-primeros-pasos", "grok-bot-primer-teammate"],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Chat de grok.com con una pregunta de actualidad",
        caption: "Grok el chat. Grok Bot es otra ficha.",
        hint: "Hero 1600×900: grok.com con una pregunta datada y la respuesta en tono directo.",
      },
      en: {
        alt: "grok.com chat with a current-events question",
        caption: "This is Grok the chat. Grok Bot is a different profile.",
        hint: "Hero 1600×900: grok.com with a dated question and a direct-tone answer.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "El chat de xAI en grok.com. Directo, con pulso de actualidad. No es Grok Bot.",
      fullDescription:
        "Grok es el asistente de xAI en grok.com (y en las apps). Sirve para preguntar, redactar y contrastar con un tono más seco que el de ChatGPT. Tiene sentido cuando quieres una primera lectura de algo reciente, no cuando necesitas un teammate con ordenador.\n\nSi te hablan de «Grok Bot», instalan una app de escritorio y un Agent Computer: eso es otra herramienta. Aquí hablamos solo del chat.",
      subcategory: "Asistente de chat",
      pricingDetails:
        "Hay un acceso gratuito limitado. SuperGrok y los planes xAI / X suben límites y modelos. Grok Bot exige planes distintos (SuperGrok Plus/Heavy o Cursor Pro+/Ultra/Teams) y no se activa solo por usar grok.com.",
      bestFor: [
        "Preguntas rápidas con tono directo",
        "Quien ya está en el ecosistema xAI / X",
        "Contrastar un titular reciente antes de escribir",
      ],
      notFor: [
        "Delegar trabajo en un ordenador (Grok Bot)",
        "Un texto largo con voz de marca (Claude)",
        "Un brief con citas que vas a abrir una a una (Perplexity)",
      ],
      pros: [
        "Tono menos corporativo",
        "Útil para actualidad cuando la función de búsqueda está activa",
        "Entrada rápida en la web",
        "Distinto de ChatGPT: sirve para contrastar, no para clonar",
      ],
      cons: [
        "El ecosistema de GPTs y proyectos es más pequeño",
        "Se confunde mucho con Grok Bot",
        "Las cifras recientes siguen pidiendo fuente primaria",
        "El plan gratis se queda corto en sesiones largas",
      ],
      keyFeatures: [
        "Chat en grok.com y apps móviles",
        "Modelos Grok según el plan",
        "Búsqueda / actualidad cuando está habilitada",
        "No incluye Agent Computer (eso es Grok Bot)",
      ],
      faq: [
        {
          q: "¿Grok y Grok Bot son lo mismo?",
          a: "No. Esta ficha es el chat. Grok Bot es un teammate con máquina en la nube y otro onboarding.",
        },
      ],
      quickTutorial: {
        title: "Usarlo como contraste, no como único cerebro",
        steps: [
          "Haz la misma pregunta en Grok y en ChatGPT o Perplexity.",
          "Exige fecha y que separe hecho de opinión.",
          "Quédate con el ángulo, no con las frases.",
          "Redacta el entregable en la herramienta donde mejor controles el tono.",
        ],
      },
    },
    en: {
      shortDescription:
        "xAI’s chat at grok.com. Direct, with a current-events pulse. Not Grok Bot.",
      fullDescription:
        "Grok is xAI’s assistant on grok.com (and the apps). It is good for asking, drafting and checking in a drier tone than ChatGPT. It makes sense as a first read on something recent, not as a teammate with a computer.\n\nIf someone mentions «Grok Bot», a desktop app and an Agent Computer, that is a different tool. This profile is the chat only.",
      subcategory: "Chat assistant",
      pricingDetails:
        "Limited free access exists. SuperGrok and xAI / X plans raise caps and models. Grok Bot needs different plans (SuperGrok Plus/Heavy or Cursor Pro+/Ultra/Teams) and does not turn on just because you use grok.com.",
      bestFor: [
        "Quick questions in a direct tone",
        "People already in the xAI / X ecosystem",
        "Checking a recent headline before you write",
      ],
      notFor: [
        "Delegating work on a computer (Grok Bot)",
        "A long piece with a brand voice (Claude)",
        "A brief with citations you will open one by one (Perplexity)",
      ],
      pros: [
        "Less corporate tone",
        "Useful on current events when search is on",
        "Fast to start on the web",
        "Different from ChatGPT — good as a second opinion, not a clone",
      ],
      cons: [
        "Smaller GPT / project ecosystem",
        "Easy to confuse with Grok Bot",
        "Recent figures still need a primary source",
        "The free plan is tight on long sessions",
      ],
      keyFeatures: [
        "Chat on grok.com and mobile apps",
        "Grok models depending on plan",
        "Search / current events when enabled",
        "No Agent Computer (that is Grok Bot)",
      ],
      faq: [
        {
          q: "Are Grok and Grok Bot the same?",
          a: "No. This profile is the chat. Grok Bot is a teammate with a cloud machine and a different onboarding.",
        },
      ],
      quickTutorial: {
        title: "Use it as contrast, not as the only brain",
        steps: [
          "Ask the same question in Grok and in ChatGPT or Perplexity.",
          "Demand a date and a split between fact and opinion.",
          "Keep the angle, not the sentences.",
          "Write the deliverable in the tool where you control tone best.",
        ],
      },
    },
  },
};
