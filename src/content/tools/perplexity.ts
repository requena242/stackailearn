import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "perplexity";

export const perplexity: Tool = {
  id: slug,
  slug,
  name: "Perplexity",
  vendor: "Perplexity",
  officialUrl: "https://www.perplexity.ai",
  category: "research",
  pricing: "freemium",
  featured: true,
  accent: "#22C55E",
  initials: "PX",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.5,
  ratingCount: 720,
  lastUpdated: "2026-08-26",
  difficulty: "beginner",
  platforms: ["web", "ios", "android"],
  useTypes: ["research", "learn"],
  tags: ["fuentes", "citas", "búsqueda", "brief", "investigación"],
  alternatives: ["chatgpt", "claude", "grok"],
  relatedTools: ["chatgpt", "claude", "notion-ai"],
  relatedTutorials: [
    "perplexity-investigacion-con-fuentes",
    "chatgpt-primeros-pasos",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Respuesta de Perplexity con citas numeradas",
        caption: "El entregable no es el párrafo: son las dos fuentes que abres.",
        hint: "Hero 1600×900: respuesta de Perplexity con 4–6 citas visibles y el panel de fuentes abierto.",
      },
      en: {
        alt: "Perplexity answer with numbered citations",
        caption: "The deliverable is not the paragraph — it is the two sources you open.",
        hint: "Hero 1600×900: Perplexity answer with 4–6 citations visible and the sources panel open.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Búsqueda con respuesta escrita y citas. Sirve para briefar, no para citar a ciegas.",
      fullDescription:
        "Perplexity combina un buscador y un modelo que resume con enlaces. Es el atajo correcto cuando el trabajo es «qué se ha publicado, quién lo dice y de qué fecha es». No es el sitio para el texto final que vas a publicar: eso se escribe después, con las fuentes ya abiertas.\n\nEl error habitual es copiar el resumen y pegarlo en un informe. El método útil es acotar la pregunta, exigir fecha y geografía, abrir al menos dos fuentes primarias y anotar lo que el modelo no pudo respaldar.",
      subcategory: "Búsqueda con citas",
      pricingDetails:
        "Hay un plan gratuito con un número limitado de búsquedas «Pro». Pro (individual) y planes de equipo aumentan el cupo, eligiendo modelo y funciones de espacios. No hay que confundirlo con un recorte de prensa profesional.",
      bestFor: [
        "Preparar un brief de 20 minutos con fuentes clicables",
        "Contrastar una cifra o una afirmación antes de escribir",
        "Quien llega a un tema nuevo y necesita el mapa, no el ensayo",
      ],
      notFor: [
        "El artículo o el email final (pasa a ChatGPT o Claude con tus notas)",
        "Investigación académica o legal que exige la fuente primaria en la mano",
        "Temas donde las fuentes son paywall o informes internos que Perplexity no ve",
      ],
      pros: [
        "Citas visibles junto a cada afirmación",
        "Rápido para un mapa del tema con fecha",
        "Buena costumbre de preguntar «según qué fuente»",
        "Interfaz más honesta que un chat que finge que lo sabe todo",
      ],
      cons: [
        "Las citas a veces apuntan a recortes, no al estudio original",
        "El resumen alisa matices y desacuerdos",
        "El plan gratis se agota si investigas todos los días",
        "No ve tus docs internos salvo que se los pegues",
      ],
      keyFeatures: [
        "Respuesta con referencias numeradas",
        "Filtros de enfoque (académico, web, etc. según el plan)",
        "Hilos / colecciones para un tema que dura días",
        "Apps web y móvil",
        "Modo Pro con más búsquedas y modelos",
      ],
      faq: [
        {
          q: "¿Puedo citar a Perplexity en un texto?",
          a: "No como fuente. Cita el artículo, el informe o la base de datos que abriste. Perplexity es el camino, no la referencia.",
        },
        {
          q: "¿Sustituye a Google Scholar o a un analista?",
          a: "No. Acelera el primer mapa. Scholar, el PDF y tu criterio siguen siendo el trabajo de verdad.",
        },
      ],
      quickTutorial: {
        title: "Un brief con fuentes en diez minutos",
        steps: [
          "Escribe la pregunta con fecha, geografía y lo que no quieres (opinión, marketing).",
          "Pide 5–7 fuentes y que separe hecho, estimación y opinión.",
          "Abre las dos fuentes que más pesan. Anota título, autor y fecha.",
          "Pregunta qué no pudo verificar. Eso entra en «huecos» del brief.",
          "Redacta el entregable en otro sitio, con tus notas, no con el párrafo de Perplexity.",
        ],
      },
    },
    en: {
      shortDescription:
        "Search with a written answer and citations. Use it to brief, not to cite blindly.",
      fullDescription:
        "Perplexity mixes a search engine and a model that summarizes with links. It is the right shortcut when the job is «what was published, who said it, and of what date». It is not where you write the final piece you will publish. That happens later, with sources already open.\n\nThe usual failure is copying the summary into a report. The useful method is to narrow the question, demand date and geography, open at least two primary sources, and write down what the model could not back.",
      subcategory: "Cited search",
      pricingDetails:
        "A free plan exists with a limited number of Pro searches. Pro (individual) and team plans raise the cap, model choice and space features. Do not treat it as a professional press clip service.",
      bestFor: [
        "A 20-minute brief with clickable sources",
        "Checking a figure or a claim before you write",
        "People new to a topic who need the map, not the essay",
      ],
      notFor: [
        "The final article or email (move to ChatGPT or Claude with your notes)",
        "Academic or legal work that needs the primary source in your hand",
        "Topics locked behind paywalls or internal reports Perplexity cannot see",
      ],
      pros: [
        "Citations sit next to each claim",
        "Fast map of a topic with dates",
        "A healthy habit of asking «according to which source»",
        "More honest than a chat that pretends it already knows",
      ],
      cons: [
        "Citations sometimes point to a recap, not the original study",
        "The summary flattens nuance and disagreement",
        "The free plan runs out if you research every day",
        "It cannot see internal docs unless you paste them",
      ],
      keyFeatures: [
        "Answers with numbered references",
        "Focus filters (academic, web, and others depending on plan)",
        "Threads / collections for a topic that lasts days",
        "Web and mobile apps",
        "Pro mode with more searches and models",
      ],
      faq: [
        {
          q: "Can I cite Perplexity in a piece?",
          a: "Not as a source. Cite the article, report or database you opened. Perplexity is the path, not the reference.",
        },
        {
          q: "Does it replace Google Scholar or an analyst?",
          a: "No. It speeds up the first map. Scholar, the PDF and your judgment are still the real work.",
        },
      ],
      quickTutorial: {
        title: "A sourced brief in ten minutes",
        steps: [
          "Write the question with a date, a geography and what you do not want (opinion, marketing).",
          "Ask for 5–7 sources and a split between fact, estimate and opinion.",
          "Open the two sources that matter most. Note title, author and date.",
          "Ask what it could not verify. That goes into the brief’s gaps.",
          "Write the deliverable elsewhere, from your notes — not from Perplexity’s paragraph.",
        ],
      },
    },
  },
};
