import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "chatgpt";

export const chatgpt: Tool = {
  id: slug,
  slug,
  name: "ChatGPT",
  vendor: "OpenAI",
  officialUrl: "https://chatgpt.com",
  category: "text",
  pricing: "freemium",
  featured: true,
  accent: "#10A37F",
  initials: "CG",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.7,
  ratingCount: 1840,
  lastUpdated: "2026-08-26",
  difficulty: "beginner",
  platforms: ["web", "ios", "android", "api", "windows", "macos"],
  useTypes: ["write", "learn", "code"],
  tags: ["chat", "redacción", "gpts", "briefing", "openai"],
  alternatives: ["claude", "grok", "perplexity"],
  relatedTools: ["claude", "perplexity", "notion-ai"],
  relatedTutorials: ["chatgpt-primeros-pasos", "claude-escritura-larga"],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Composer de ChatGPT con un briefing de cuatro líneas",
        caption: "Un chat útil empieza por el entregable, no por el tema.",
        hint: "Hero 1600×900: composer de ChatGPT con objetivo, audiencia, formato y restricciones visibles.",
      },
      en: {
        alt: "ChatGPT composer with a four-line brief",
        caption: "A useful chat starts with the deliverable, not the topic.",
        hint: "Hero 1600×900: ChatGPT composer showing goal, audience, format and constraints.",
      },
    }),
    toolImage(slug, "variants", "gallery", {
      es: {
        alt: "Tres variantes de un mismo email en ChatGPT",
        caption: "Pedir opciones es más rápido que pelear un único borrador.",
        hint: "Captura de un hilo con tres bloques etiquetados (directo / cálido / breve).",
      },
      en: {
        alt: "Three variants of the same email in ChatGPT",
        caption: "Asking for options is faster than wrestling one draft.",
        hint: "Thread screenshot with three labeled blocks (direct / warm / short).",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "El asistente de IA más usado para redactar, pensar y montar un primer flujo de trabajo.",
      fullDescription:
        "ChatGPT es el punto de entrada de millones de personas a la IA generativa. Sirve para redactar, resumir, brainstorming, análisis ligero y, con GPTs y proyectos, para tareas que se repiten cada semana. No es un buscador ni un editor humano: es un junior muy rápido al que hay que briefar.\n\nEl plan gratuito basta para aprender el método. Plus y Team desbloquean modelos más capaces, búsqueda, voz y proyectos. El error habitual es pedirle «un texto sobre X» y aceptar el primer relleno. El valor está en el briefing, en pedir variantes y en guardar el prompt que funcionó.",
      subcategory: "Asistente generalista",
      pricingDetails:
        "Hay un plan gratuito con límites diarios. Plus (individual) y Team (equipos) abren modelos más recientes, proyectos y herramientas. Enterprise existe para empresas que necesitan SSO, retención de datos y contratos; no hace falta para aprender.",
      bestFor: [
        "Quien escribe, resume o idea casi todos los días",
        "Equipos que quieren un comodín con GPTs reutilizables",
        "Primer contacto serio con IA generativa",
      ],
      notFor: [
        "Investigación que exige cita primaria sin que tú abras las fuentes",
        "Textos largos donde el tono tiene que ser impecable de principio a fin (ahí suele ir mejor Claude)",
        "Automatizar un repo o un ordenador: eso es Cursor, Hermes o Grok Bot",
      ],
      pros: [
        "Interfaz clara y el ecosistema de GPTs más amplio",
        "Muy bueno en redacción corta, ideación y tareas generales",
        "Búsqueda, imágenes y voz viven en el mismo chat",
        "Fácil de enseñar a otra persona en diez minutos",
      ],
      cons: [
        "Inventa datos con naturalidad si no le pides que marque lo incierto",
        "Los mejores modelos y herramientas van ligados a un plan de pago",
        "En piezas largas el tono se aplana más que en Claude",
        "Un hilo sucio (diez tareas) contamina el contexto",
      ],
      keyFeatures: [
        "Chat con modelos de propósito general y, en planes de pago, herramientas",
        "GPTs y proyectos para repetir un briefing",
        "Búsqueda web opcional; no sustituye abrir la fuente",
        "Apps de escritorio y móvil además de chatgpt.com",
        "API aparte si quieres incrustarlo en tu producto",
      ],
      faq: [
        {
          q: "¿Basta el plan gratuito?",
          a: "Para aprender el método de briefing, sí. Los modelos más capaces, los proyectos y la búsqueda estable viven en Plus o Team.",
        },
        {
          q: "¿Sustituye a un editor o a un analista?",
          a: "No. Acelera el borrador. Tú firmas el criterio, las cifras y el tono. Si un número no lo pusiste tú, trátalo como hipótesis.",
        },
        {
          q: "¿Cuándo usar Claude o Perplexity en su lugar?",
          a: "Claude si el texto es largo y el tono importa. Perplexity si el trabajo es reunir fuentes y fecharlas, no redactar el entregable final.",
        },
      ],
      quickTutorial: {
        title: "Un primer flujo útil en cinco minutos",
        steps: [
          "Abre chatgpt.com y elige el modelo más reciente que tengas.",
          "Escribe objetivo, audiencia, formato y lo que no quieres.",
          "Pide 2–3 variantes y marca la que conserva.",
          "Corrige un párrafo con feedback concreto, no con «hazlo mejor».",
          "Pide que convierta el hilo en una instrucción reutilizable.",
        ],
      },
    },
    en: {
      shortDescription:
        "The most widely used AI assistant for drafting, thinking and building a first workflow.",
      fullDescription:
        "ChatGPT is how millions of people first meet generative AI. It is strong at drafting, summarizing, brainstorming, light analysis and — with GPTs and projects — work that repeats every week. It is not a search engine or a human editor. Treat it as a very fast junior that needs a brief.\n\nThe free plan is enough to learn the method. Plus and Team unlock stronger models, search, voice and projects. The usual failure is asking for «a text about X» and keeping the first filler. The value is in the brief, in asking for variants, and in saving the prompt that worked.",
      subcategory: "General-purpose assistant",
      pricingDetails:
        "A free plan exists with daily caps. Plus (individual) and Team unlock newer models, projects and tools. Enterprise is for companies that need SSO, data retention and a contract — you do not need it to learn.",
      bestFor: [
        "People who write, summarize or ideate most days",
        "Teams that want a generalist with reusable GPTs",
        "A serious first contact with generative AI",
      ],
      notFor: [
        "Research that needs a primary citation without you opening the source",
        "Long pieces where tone must stay tight from start to finish (Claude usually holds voice better)",
        "Automating a repo or a computer — that is Cursor, Hermes or Grok Bot",
      ],
      pros: [
        "Clear interface and the largest GPT ecosystem",
        "Excellent for short writing, ideation and general tasks",
        "Search, images and voice live in one chat",
        "Easy to teach someone else in ten minutes",
      ],
      cons: [
        "Invents facts fluently if you do not ask it to flag uncertainty",
        "The best models and tools sit behind a paid plan",
        "Long-form tone flattens more than Claude",
        "A dirty thread (ten tasks) pollutes the context",
      ],
      keyFeatures: [
        "Chat with general-purpose models and, on paid plans, tools",
        "GPTs and projects to reuse a brief",
        "Optional web search — it does not replace opening the source",
        "Desktop and mobile apps plus chatgpt.com",
        "A separate API if you want it inside your product",
      ],
      faq: [
        {
          q: "Is the free plan enough?",
          a: "Yes, to learn the briefing method. Stronger models, projects and reliable search live on Plus or Team.",
        },
        {
          q: "Does it replace an editor or an analyst?",
          a: "No. It speeds up the draft. You own judgment, numbers and tone. If you did not supply a figure, treat it as a hypothesis.",
        },
        {
          q: "When should I use Claude or Perplexity instead?",
          a: "Claude when the piece is long and tone matters. Perplexity when the job is gathering and dating sources, not writing the final deliverable.",
        },
      ],
      quickTutorial: {
        title: "A useful first flow in five minutes",
        steps: [
          "Open chatgpt.com and pick the newest model you have.",
          "Write the goal, audience, format and what you do not want.",
          "Ask for 2–3 variants and keep one direction.",
          "Fix one paragraph with concrete feedback, not «make it better».",
          "Ask it to turn the thread into a reusable instruction.",
        ],
      },
    },
  },
};
