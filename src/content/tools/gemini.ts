import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "gemini";

export const gemini: Tool = {
  id: slug,
  slug,
  name: "Gemini",
  vendor: "Google",
  officialUrl: "https://gemini.google.com",
  category: "text",
  pricing: "freemium",
  featured: false,
  accent: "#4285F4",
  initials: "GM",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.5,
  ratingCount: 720,
  lastUpdated: "2026-10-03",
  difficulty: "beginner",
  platforms: ["web", "ios", "android", "api"],
  useTypes: ["write", "learn", "research"],
  tags: ["chat", "google", "workspace", "multimodal", "gemini"],
  alternatives: ["chatgpt", "claude", "notebooklm"],
  relatedTools: ["chatgpt", "notebooklm", "notion-ai"],
  relatedTutorials: [
    "chatgpt-primeros-pasos",
    "notebooklm-primer-briefing",
    "chatgpt-projects-primer-flujo",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Gemini con un adjunto de imagen y un borrador de email",
        caption:
          "Multimodal y Workspace encajan cuando el contexto ya vive en Google.",
        hint:
          "Hero 1600×900: gemini.google.com con un screenshot o PDF adjunto y un borrador de respuesta estructurado.",
      },
      en: {
        alt: "Gemini with an image attachment and an email draft",
        caption:
          "Multimodal and Workspace fit when context already lives in Google.",
        hint:
          "Hero 1600×900: gemini.google.com with a screenshot or PDF attached and a structured reply draft.",
      },
    }),
    toolImage(slug, "variants", "gallery", {
      es: {
        alt: "Gemini proponiendo tres versiones de un plan semanal",
        caption: "Para el día a día, pide formato (tabla, checklist) desde el primer mensaje.",
        hint: "Captura con tres bloques: prioridades / bloques de tiempo / riesgos.",
      },
      en: {
        alt: "Gemini proposing three versions of a weekly plan",
        caption: "For daily work, ask for format (table, checklist) in the first message.",
        hint: "Screenshot with three blocks: priorities / time blocks / risks.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "El asistente de Google para redactar, resumir y trabajar con archivos dentro del ecosistema Gemini y Workspace.",
      fullDescription:
        "Gemini es el chat de IA de Google en gemini.google.com (y en apps móviles). Sirve para el trabajo repetido del escritorio: emails, borradores de docs, resúmenes de reuniones, planes de la semana y preguntas rápidas con una captura o un PDF adjunto. Si tu día pasa por Gmail, Drive y Docs, Gemini suele encajar mejor que abrir otro chat y copiar contexto a mano.\n\nNo sustituye a NotebookLM cuando necesitas citas ancladas solo a fuentes que subiste, ni a Perplexity cuando el entregable es una lista de enlaces fechados. Es un generalista con ventaja multimodal y en planes de pago extensiones hacia Workspace. El método es el mismo que en cualquier chat: objetivo, audiencia, formato y una pasada humana en nombres, fechas y cifras.",
      subcategory: "Asistente generalista (Google)",
      pricingDetails:
        "Hay acceso gratuito con límites de uso y modelos. Google AI Pro / Ultra y planes de Workspace con Gemini abren modelos más capaces, más contexto y funciones en Gmail, Docs y Meet según el plan. La API de Gemini es aparte si desarrollas producto.",
      bestFor: [
        "Quien vive en Gmail, Drive, Docs o Calendar y quiere menos copiar-pegar",
        "Resumir capturas, PDFs o fotos de pizarra en el mismo hilo",
        "Borradores diarios: emails, actas cortas, checklists y planes",
      ],
      notFor: [
        "Investigación con citas obligatorias solo de un corpus cerrado (NotebookLM)",
        "Ecosistema de GPTs personalizados de la comunidad (ChatGPT)",
        "Edición larga con voz muy marcada sin ejemplo escrito (a menudo Claude)",
      ],
      pros: [
        "Multimodal nativo: imagen, PDF y texto en un solo chat",
        "Integración con Google Workspace en planes que la incluyen",
        "Buen ritmo en tareas cortas: email, resumen, tabla, plan",
        "Misma cuenta Google que muchos equipos ya usan",
      ],
      cons: [
        "Menos marketplace de mini-apps que ChatGPT",
        "Fuera de Workspace, el contexto hay que adjuntarlo tú",
        "Inventa detalles si no le pides marcar lo incierto",
        "Los mejores modelos y cuotas altas van en planes de pago",
      ],
      keyFeatures: [
        "Chat en web y móvil con modelos Gemini",
        "Adjuntos multimodales (imagen, PDF, etc.) según plan",
        "Extensiones y asistentes en Gmail, Docs y más en Workspace",
        "Gems (instrucciones reutilizables) para repetir un estilo de briefing",
        "API Gemini para productos propios",
      ],
      faq: [
        {
          q: "¿Gemini sustituye a ChatGPT en el día a día?",
          a: "Si tu trabajo gira en Google y adjuntas mucho contexto visual o de Drive, Gemini suele ser más cómodo. Si dependes de GPTs, Projects o un ecosistema fuera de Google, ChatGPT sigue siendo el comodín. Mucha gente usa uno como principal y el otro para contrastar.",
        },
        {
          q: "¿En qué se diferencia de NotebookLM?",
          a: "NotebookLM responde anclado a las fuentes que cargaste en un cuaderno. Gemini es chat generalista: mejor para borradores y tareas sueltas; peor si necesitas que cada afirmación cite solo tu corpus.",
        },
        {
          q: "¿Basta el plan gratuito?",
          a: "Para aprender el método y tareas ligeras, sí. Cuando el volumen diario crece o quieres el modelo más capaz y Workspace integrado, entran los planes de pago de Google.",
        },
      ],
      quickTutorial: {
        title: "Un bloque de trabajo diario en cinco minutos",
        steps: [
          "Abre gemini.google.com y elige el modelo más reciente disponible.",
          "Escribe objetivo, tono, longitud y si es email, doc o lista.",
          "Adjunta captura o PDF si el contexto no cabe en texto.",
          "Pide formato explícito: viñetas, tabla o asunto + cuerpo.",
          "Revisa nombres, fechas y cifras antes de enviar o pegar en Docs.",
        ],
      },
    },
    en: {
      shortDescription:
        "Google’s assistant for drafting, summarizing and working with files across Gemini and Workspace.",
      fullDescription:
        "Gemini is Google’s AI chat at gemini.google.com (and mobile apps). It fits the repeating desk work: email, doc drafts, meeting summaries, weekly plans and quick questions with a screenshot or PDF attached. If your day runs through Gmail, Drive and Docs, Gemini is often less friction than opening another chat and copying context by hand.\n\nIt does not replace NotebookLM when you need citations tied only to sources you uploaded, or Perplexity when the deliverable is a dated link list. It is a generalist with a multimodal edge and, on paid plans, extensions into Workspace. The method matches any chat: goal, audience, format and a human pass on names, dates and figures.",
      subcategory: "General-purpose assistant (Google)",
      pricingDetails:
        "Free access exists with usage limits and model caps. Google AI Pro / Ultra and Workspace plans with Gemini unlock stronger models, more context and features in Gmail, Docs and Meet depending on tier. The Gemini API is separate if you build product.",
      bestFor: [
        "People who live in Gmail, Drive, Docs or Calendar and want less copy-paste",
        "Summarizing screenshots, PDFs or whiteboard photos in one thread",
        "Daily drafts: email, short notes, checklists and plans",
      ],
      notFor: [
        "Research that must cite only a closed corpus (NotebookLM)",
        "A community custom-GPT marketplace (ChatGPT)",
        "Long editing with a strong voice and no written sample (often Claude)",
      ],
      pros: [
        "Native multimodal: image, PDF and text in one chat",
        "Google Workspace integration on plans that include it",
        "Good pace on short tasks: email, summary, table, plan",
        "Same Google account many teams already use",
      ],
      cons: [
        "Smaller mini-app marketplace than ChatGPT",
        "Outside Workspace, you attach context yourself",
        "Invents details if you do not ask it to flag uncertainty",
        "Best models and high quotas sit on paid plans",
      ],
      keyFeatures: [
        "Web and mobile chat with Gemini models",
        "Multimodal attachments (image, PDF, etc.) per plan",
        "Extensions and assistants in Gmail, Docs and more on Workspace",
        "Gems (reusable instructions) to repeat a briefing style",
        "Gemini API for your own products",
      ],
      faq: [
        {
          q: "Can Gemini replace ChatGPT for daily work?",
          a: "If your work revolves around Google and you attach lots of visual or Drive context, Gemini is often more convenient. If you rely on GPTs, Projects or an ecosystem outside Google, ChatGPT remains the generalist. Many people pick one primary tool and open the other to contrast.",
        },
        {
          q: "How is it different from NotebookLM?",
          a: "NotebookLM answers anchored to sources you loaded in a notebook. Gemini is a general chat: better for drafts and loose tasks; weaker when every claim must cite only your corpus.",
        },
        {
          q: "Is the free plan enough?",
          a: "Yes to learn the method and light tasks. When daily volume grows or you want the strongest model and integrated Workspace, paid Google plans matter.",
        },
      ],
      quickTutorial: {
        title: "A daily work block in five minutes",
        steps: [
          "Open gemini.google.com and pick the newest model available.",
          "State goal, tone, length and whether it is email, doc or list.",
          "Attach a screenshot or PDF if context does not fit in text.",
          "Ask for an explicit format: bullets, table or subject + body.",
          "Check names, dates and figures before send or paste into Docs.",
        ],
      },
    },
  },
};
