import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "claude";

export const claude: Tool = {
  id: slug,
  slug,
  name: "Claude",
  vendor: "Anthropic",
  officialUrl: "https://claude.ai",
  category: "text",
  pricing: "freemium",
  featured: true,
  accent: "#D4A27F",
  initials: "CL",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.6,
  ratingCount: 980,
  lastUpdated: "2026-08-26",
  difficulty: "intermediate",
  platforms: ["web", "ios", "android", "api", "windows", "macos"],
  useTypes: ["write", "code", "learn"],
  tags: ["escritura-larga", "tono", "documentos", "anthropic", "proyectos"],
  alternatives: ["chatgpt", "grok"],
  relatedTools: ["chatgpt", "cursor", "perplexity"],
  relatedTutorials: ["claude-escritura-larga", "chatgpt-primeros-pasos"],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Claude con un documento largo y una instrucción de voz",
        caption: "Claude rinde cuando el texto entra entero y la voz está escrita.",
        hint: "Hero 1600×900: panel de Claude con un PDF/doc a la izquierda y una instrucción de tono a la derecha.",
      },
      en: {
        alt: "Claude with a long document and a voice instruction",
        caption: "Claude works when the whole text is in and the voice is written down.",
        hint: "Hero 1600×900: Claude with a PDF/doc on the left and a tone instruction on the right.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "El asistente que mejor aguanta textos largos sin aplanar del todo la voz.",
      fullDescription:
        "Claude, de Anthropic, destaca cuando el trabajo es un documento entero: reescritura, edición por capas, tono y estructura. Si ChatGPT es el comodín del día a día, Claude es el que menos «suena a IA» cuando le das contexto de verdad y le prohíbes el adjetivo fácil.\n\nNo es mágico: si le pides «reescribe esto» sin decir para quién ni qué debe quedarse, también te devolverá prosa genérica. El método que funciona es por capas —estructura, luego párrafos, luego frases— y un ejemplo de voz pegado arriba del todo.",
      subcategory: "Escritura larga y documentos",
      pricingDetails:
        "Hay un plan gratuito con techos de uso. Pro y Team abren más contexto, proyectos y los modelos más capaces. API aparte para producto. Enterprise existe; no lo necesitas para editar un documento.",
      bestFor: [
        "Quien reescribe artículos, informes o newsletters enteros",
        "Equipos con una voz de marca que hay que proteger",
        "Edición de un PDF o un doc que ya existe, no de una idea suelta",
      ],
      notFor: [
        "Quien solo necesita un email de 80 palabras (ChatGPT basta y sobra)",
        "Búsqueda con citas clicables como primer entregable (Perplexity)",
        "Tocar un repositorio con diffs: usa Cursor",
      ],
      pros: [
        "Aguanta mejor el tono en piezas largas",
        "Muy bueno siguiendo un ejemplo de voz",
        "Útil para editar, no solo para generar desde cero",
        "Menos tentado a rellenar con slogans",
      ],
      cons: [
        "El plan gratis se queda corto si trabajas documentos todos los días",
        "La búsqueda y el ecosistema de «miniapps» son más pequeños que en ChatGPT",
        "Si no le das el texto completo, inventa el hueco con la misma confianza",
        "No sustituye una pasada humana en cifras y nombres propios",
      ],
      keyFeatures: [
        "Ventana de contexto amplia para documentos enteros",
        "Proyectos para guardar voz, ejemplos y restricciones",
        "Buen seguimiento de instrucciones de tono y formato",
        "Apps web, escritorio y móvil; API para producto",
        "Análisis de archivos (PDF, docs) en los planes que lo incluyen",
      ],
      faq: [
        {
          q: "¿Es mejor que ChatGPT para escribir?",
          a: "Para un email corto, da igual. Para un texto de 1.500 palabras con voz, Claude suele mantener mejor el criterio si le das un ejemplo y editas por capas.",
        },
        {
          q: "¿Puedo pegarle un PDF y fiarme?",
          a: "Puedes pegarlo o subirlo. No te fíes de citas o cifras que no puedas señalar en el original. Pídele que marque lo que no está en el documento.",
        },
      ],
      quickTutorial: {
        title: "Editar un texto largo sin perder la voz",
        steps: [
          "Pega el documento entero y un párrafo que suene como tú.",
          "Primero pide solo estructura (H2 y qué va en cada bloque).",
          "Luego reescribe un bloque, no el texto completo.",
          "Prohíbe adjetivos vacíos y slogans. Exige un ejemplo concreto por sección.",
          "Haz una pasada final solo de cifras, nombres y enlaces.",
        ],
      },
    },
    en: {
      shortDescription:
        "The assistant that holds long pieces together without fully flattening the voice.",
      fullDescription:
        "Anthropic’s Claude is at its best on a whole document: rewrite, layered edit, tone and structure. If ChatGPT is the daily generalist, Claude is the one that sounds less like default AI — when you give it real context and ban the easy adjective.\n\nIt is not magic. «Rewrite this» with no audience and no keep-list still yields generic prose. The method that works is layered — structure, then paragraphs, then sentences — plus a voice sample pinned at the top.",
      subcategory: "Long-form writing and documents",
      pricingDetails:
        "A free plan exists with usage caps. Pro and Team unlock more context, projects and stronger models. Separate API for products. Enterprise exists; you do not need it to edit a document.",
      bestFor: [
        "People who rewrite full articles, reports or newsletters",
        "Teams that have a brand voice to protect",
        "Editing an existing PDF or doc, not a loose idea",
      ],
      notFor: [
        "An 80-word email (ChatGPT is enough)",
        "Search whose first deliverable is clickable citations (Perplexity)",
        "Touching a repo with diffs — use Cursor",
      ],
      pros: [
        "Holds tone better on long pieces",
        "Follows a voice sample well",
        "Strong at editing, not only generating from scratch",
        "Less tempted to pad with slogans",
      ],
      cons: [
        "The free plan is tight if you edit documents every day",
        "Search and mini-app ecosystem are smaller than ChatGPT’s",
        "If you do not give it the full text, it fills the gap with the same confidence",
        "It does not replace a human pass on figures and proper names",
      ],
      keyFeatures: [
        "Wide context window for whole documents",
        "Projects to store voice, samples and constraints",
        "Strong at following tone and format instructions",
        "Web, desktop and mobile apps; API for products",
        "File analysis (PDF, docs) on plans that include it",
      ],
      faq: [
        {
          q: "Is it better than ChatGPT for writing?",
          a: "For a short email, it barely matters. For a 1,500-word piece with a voice, Claude usually keeps judgment better if you give a sample and edit in layers.",
        },
        {
          q: "Can I paste a PDF and trust it?",
          a: "You can paste or upload it. Do not trust quotes or figures you cannot point to in the original. Ask it to flag anything that is not in the document.",
        },
      ],
      quickTutorial: {
        title: "Edit a long piece without losing the voice",
        steps: [
          "Paste the full document and one paragraph that sounds like you.",
          "First ask only for structure (H2s and what belongs in each block).",
          "Then rewrite one block, not the whole text.",
          "Ban empty adjectives and slogans. Demand one concrete example per section.",
          "Do a final pass on figures, names and links only.",
        ],
      },
    },
  },
};
