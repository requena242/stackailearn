import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "notebooklm";

export const notebooklm: Tool = {
  id: slug,
  slug,
  name: "NotebookLM",
  vendor: "Google",
  officialUrl: "https://notebooklm.google.com",
  category: "research",
  pricing: "freemium",
  featured: false,
  accent: "#4285F4",
  initials: "NL",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.4,
  ratingCount: 480,
  lastUpdated: "2026-10-02",
  difficulty: "beginner",
  platforms: ["web", "ios", "android"],
  useTypes: ["research", "learn", "write"],
  tags: [
    "notebooklm",
    "briefing",
    "fuentes",
    "google",
    "reseña",
    "audio-overview",
  ],
  alternatives: ["perplexity", "chatgpt", "claude"],
  relatedTools: ["perplexity", "chatgpt", "notion-ai"],
  relatedTutorials: [
    "notebooklm-primer-briefing",
    "perplexity-investigacion-con-fuentes",
    "chatgpt-primeros-pasos",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "NotebookLM con fuentes cargadas y un documento de briefing en Studio",
        caption:
          "Solo responde con lo que subiste: las citas son el producto, no el párrafo suelto.",
        hint:
          "Hero 1600×900: cuaderno de NotebookLM con 3–5 fuentes en el panel izquierdo, chat con citas y Studio mostrando un briefing generado.",
      },
      en: {
        alt: "NotebookLM with loaded sources and a briefing document in Studio",
        caption:
          "It only answers from what you uploaded: citations are the product, not a loose paragraph.",
        hint:
          "Hero 1600×900: NotebookLM notebook with 3–5 sources in the left panel, chat with citations and Studio showing a generated briefing.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Cuaderno de Google anclado solo a tus fuentes. Briefing con citas, no búsqueda abierta en la web.",
      fullDescription:
        "NotebookLM es un cuaderno donde añades PDFs, Google Docs, URLs, YouTube, texto pegado y audio en formatos compatibles. El chat y Studio generan respuestas, documentos de briefing, guías de estudio, FAQ, mapas mentales o Audio Overview — siempre citando pasajes de esas fuentes, no la web entera.\n\nEs el atajo correcto cuando ya tienes material (informes, actas, papers, vídeos) y necesitas un primer briefing para ti o para un equipo. No sustituye a Perplexity para «qué se ha publicado en internet»: aquí el límite es lo que subiste. El entregable final suele escribirse fuera, con las citas ya comprobadas.",
      subcategory: "Investigación anclada a tus fuentes",
      pricingDetails:
        "Acceso con cuenta de Google; el producto es gratuito con límites que pueden cambiar. Revisa notebooklm.google.com y, si usas almacenamiento o funciones de Google One, las condiciones de tu plan. No hay programa de afiliado en StackAI Learn para este producto.",
      bestFor: [
        "Un primer briefing a partir de tus PDFs, Docs o vídeos de un solo proyecto",
        "Preguntas concretas con audiencia y fecha, con citas al pasaje fuente",
        "Repasar en commute con Audio Overview cuando las fuentes ya están en el cuaderno",
      ],
      notFor: [
        "Sustituir una búsqueda web amplia (usa Perplexity o búsqueda manual)",
        "Temas donde no tienes fuentes propias o de confianza que subir",
        "El texto publicable final sin pasar por revisión humana y fuentes abiertas",
      ],
      pros: [
        "Respuestas limitadas a las fuentes que tú eliges",
        "Citas clicables al fragmento en el documento o vídeo",
        "Studio acelera briefing, FAQ o guía sin salir del cuaderno",
        "Integración natural con Google Drive y Docs del equipo",
      ],
      cons: [
        "Sin fuentes buenas, el briefing es vacío o inventa dentro del corpus",
        "No indexa la web por ti: hay que añadir y esperar",
        "Los nombres de informes en Studio cambian con el tiempo (Briefing, Reports, etc.)",
        "Audio Overview es repaso, no sustituto de leer las fuentes críticas",
      ],
      keyFeatures: [
        "Cuadernos con múltiples fuentes (PDF, Drive, URL, YouTube, texto, audio)",
        "Chat con citas al pasaje fuente",
        "Studio: documento de briefing, FAQ, guía de estudio, notas, mapas (según UI)",
        "Audio Overview para escuchar un resumen dialogado de las fuentes",
        "Exportar o copiar a Google Docs según la función disponible",
      ],
      faq: [
        {
          q: "¿Puedo usar NotebookLM sin subir archivos?",
          a: "Puedes pegar texto o enlazar URLs, pero el valor está en un conjunto acotado de fuentes. Sin material, no hay briefing fiable.",
        },
        {
          q: "¿Sustituye a Perplexity o a ChatGPT?",
          a: "Perplexity busca en la web con citas. ChatGPT redacta con contexto que tú pegas. NotebookLM mantiene un cuaderno persistente solo sobre lo que añadiste.",
        },
        {
          q: "¿Las citas bastan para publicar?",
          a: "Son el camino al pasaje. Abre la cita, comprueba el contexto y escribe el entregable en otro sitio. No cites «según NotebookLM» como fuente primaria.",
        },
        {
          q: "¿Qué es Audio Overview?",
          a: "Un audio generado a partir de tus fuentes, útil para repasar. No reemplaza verificar afirmaciones delicadas en el PDF o el vídeo.",
        },
      ],
      quickTutorial: {
        title: "Tu primer briefing en un cuaderno",
        steps: [
          "Crea un cuaderno con nombre de proyecto y añade 3–5 fuentes reales.",
          "Espera a que indexen; haz una pregunta con audiencia, fecha y huecos.",
          "Abre dos citas y descarta afirmaciones sin pasaje claro.",
          "En Studio, genera un documento de briefing y regenera si está fino.",
          "Exporta o copia los takeaways y redacta el entregable fuera del cuaderno.",
        ],
      },
    },
    en: {
      shortDescription:
        "Google notebook grounded only on your sources. Briefings with citations, not open-web search.",
      fullDescription:
        "NotebookLM is a notebook where you add PDFs, Google Docs, URLs, YouTube, pasted text and supported audio. Chat and Studio produce answers, briefing documents, study guides, FAQs, mind maps or Audio Overview — always citing passages from those sources, not the whole web.\n\nIt is the right shortcut when you already have material (reports, meeting notes, papers, videos) and need a first briefing for yourself or a team. It does not replace Perplexity for «what was published on the internet»: the ceiling is what you uploaded. The final deliverable usually gets written elsewhere, with citations already checked.",
      subcategory: "Research anchored to your sources",
      pricingDetails:
        "Access with a Google account; the product is free with limits that may change. Check notebooklm.google.com and, if you use Google One storage or features, your plan’s terms. There is no affiliate program on StackAI Learn for this product.",
      bestFor: [
        "A first briefing from your PDFs, Docs or videos for one project",
        "Concrete questions with audience and date, with citations to the source passage",
        "Commute review with Audio Overview when sources are already in the notebook",
      ],
      notFor: [
        "Replacing a wide web search (use Perplexity or manual search)",
        "Topics where you have no trusted sources to upload",
        "A publishable final text without human review and opened sources",
      ],
      pros: [
        "Answers limited to the sources you choose",
        "Clickable citations to the fragment in the doc or video",
        "Studio speeds up briefing, FAQ or guide without leaving the notebook",
        "Natural fit with team Google Drive and Docs",
      ],
      cons: [
        "Without good sources, the briefing is thin or drifts within the corpus",
        "It does not index the web for you: you add and wait",
        "Studio report labels change over time (Briefing, Reports, etc.)",
        "Audio Overview is review, not a substitute for reading critical sources",
      ],
      keyFeatures: [
        "Notebooks with multiple sources (PDF, Drive, URL, YouTube, text, audio)",
        "Chat with citations to the source passage",
        "Studio: briefing document, FAQ, study guide, notes, maps (per UI)",
        "Audio Overview to listen to a dialog-style summary of sources",
        "Export or copy to Google Docs depending on available actions",
      ],
      faq: [
        {
          q: "Can I use NotebookLM without uploading files?",
          a: "You can paste text or link URLs, but the value is a bounded set of sources. Without material, there is no reliable briefing.",
        },
        {
          q: "Does it replace Perplexity or ChatGPT?",
          a: "Perplexity searches the web with citations. ChatGPT drafts with context you paste. NotebookLM keeps a persistent notebook only on what you added.",
        },
        {
          q: "Are citations enough to publish?",
          a: "They are the path to the passage. Open the citation, check context and write the deliverable elsewhere. Do not cite «according to NotebookLM» as a primary source.",
        },
        {
          q: "What is Audio Overview?",
          a: "Audio generated from your sources, useful for review. It does not replace verifying sensitive claims in the PDF or video.",
        },
      ],
      quickTutorial: {
        title: "Your first briefing in a notebook",
        steps: [
          "Create a notebook named for the project and add 3–5 real sources.",
          "Wait until they index; ask a question with audience, date and gaps.",
          "Open two citations and drop claims with no clear passage.",
          "In Studio, generate a briefing document and regenerate if it is thin.",
          "Export or copy takeaways and draft the deliverable outside the notebook.",
        ],
      },
    },
  },
};
