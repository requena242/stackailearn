import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "zapier";

export const zapier: Tool = {
  id: slug,
  slug,
  name: "Zapier",
  vendor: "Zapier",
  officialUrl: "https://zapier.com",
  category: "productivity",
  pricing: "freemium",
  featured: false,
  accent: "#FF4A00",
  initials: "ZP",
  image: `/media/tools/${slug}/hero.jpg`,
  lastUpdated: "2026-10-13",
  difficulty: "beginner",
  platforms: ["web", "ios", "android"],
  useTypes: ["automate", "learn"],
  tags: [
    "zaps",
    "integraciones",
    "no-code",
    "workflows",
    "copilot",
    "agents",
  ],
  alternatives: ["make", "notion-ai"],
  relatedTools: ["make", "notion-ai", "chatgpt"],
  relatedTutorials: [
    "notion-ai-primer-flujo",
    "grok-bot-primera-rutina",
    "chatgpt-primeros-pasos",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Editor de Zapier con un Zap de varios pasos y panel de prueba",
        caption:
          "Un Zap encadena disparadores y acciones entre apps; la IA ayuda a describir y depurar, no sustituye el mapa del flujo.",
        hint:
          "Hero 1600×900: zapier.com con un Zap abierto (trigger + 2–3 acciones), historial de ejecución y sugerencia de Copilot o paso de IA visible.",
      },
      en: {
        alt: "Zapier editor with a multi-step Zap and test panel",
        caption:
          "A Zap chains triggers and actions across apps; AI helps you describe and debug, it does not replace mapping the flow.",
        hint:
          "Hero 1600×900: zapier.com with an open Zap (trigger + 2–3 actions), run history and Copilot or AI step suggestion visible.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Automatización no-code entre miles de apps. Zaps con disparador y acciones; IA para describir flujos y asistentes tipo Agents según el plan.",
      fullDescription:
        "Zapier conecta servicios SaaS sin escribir un servidor propio. El modelo mental es el Zap: un disparador (email nuevo, fila en hoja, formulario) y una secuencia de acciones en otras herramientas. Lleva años en el mercado y su catálogo de integraciones es uno de los más amplios del sector.\n\nEn 2025–2026 el producto añadió capas de IA: asistentes para redactar Zaps desde lenguaje natural, pasos que llaman a modelos (resumir, clasificar, extraer campos) y ofertas tipo Zapier Agents o Copilot según la documentación y el plan vigente en zapier.com. La IA acelera el primer borrador; el trabajo serio sigue siendo definir datos, manejo de errores y quién es dueño del flujo en el equipo.\n\nEncaja en pymes y equipos de operaciones que quieren «cuando pase X en la app A, haz Y en la B» sin montar Make con escenarios complejos. Para ramas profundas, transformaciones pesadas de JSON o presupuesto muy ajustado por operación, Make compite en otra curva — ver la comparativa zapier-ai-vs-make. No hay programa de afiliado en StackAI Learn.",
      subcategory: "Automatización no-code (Zaps)",
      pricingDetails:
        "Hay plan gratuito con límites de tareas y Zaps según la política actual en zapier.com/pricing; los planes de pago escalan por volumen de tareas, usuarios y funciones (tablas, IA, etc.). El consumo se mide en tareas ejecutadas, no en «operaciones» como en Make. Revisa la página oficial antes de prometer coste a cliente. No hay programa de afiliado en StackAI Learn.",
      bestFor: [
        "Conectar dos o tres apps populares (CRM, email, hojas, Slack) en minutos",
        "Equipos sin dev que necesitan plantillas y marketplace de Zaps probados",
        "Disparadores simples y acciones lineales con filtros básicos",
        "Quien ya paga varias SaaS y quiere un único panel de automatización",
      ],
      notFor: [
        "Flujos con decenas de ramas, bucles y parsers JSON a mano — Make suele ser más cómodo",
        "Automatización 100 % on-premise o solo con APIs propias sin conector",
        "Sustituir un ETL de datos masivos o un data warehouse",
        "Presupuesto cero con alto volumen diario de ejecuciones",
      ],
      pros: [
        "Catálogo muy grande de integraciones oficiales",
        "Curva suave: disparador → acción sin dibujar un canvas al inicio",
        "Historial, alertas y reintentos integrados en la UI",
        "IA para acelerar descripción y depuración de Zaps (según plan)",
        "Ecosistema de plantillas y partners conocido en marketing/ops",
      ],
      cons: [
        "El coste sube con las tareas; flujos chatty pueden sorprender en factura",
        "Lógica compleja y transformación de datos fina pueden sentirse rígidas",
        "Dependencia del conector: si la API cambia, esperas a Zapier",
        "Funciones de IA avanzadas no están en todos los planes",
        "Menos «laboratorio visual» que un escenario en Make para casos raros",
      ],
      keyFeatures: [
        "Zaps: trigger + acciones multi-app",
        "Filtros, paths y formateadores de campo",
        "Zapier Tables y interfaces según plan",
        "Pasos de IA y asistentes (Copilot / Agents según producto actual)",
        "Apps móviles y notificaciones de fallo",
        "Webhooks y API de Zapier para casos híbridos",
      ],
      faq: [
        {
          q: "¿Zapier o Make para mi primer flujo?",
          a: "Si son dos apps conocidas y quieres salir hoy, Zapier. Si ya ves ramas, routers y muchas operaciones por ejecución, abre zapier-ai-vs-make y prueba Make en su tier gratis.",
        },
        {
          q: "¿Qué es una «tarea» en Zapier?",
          a: "Cada acción exitosa en un Zap suele contar como tarea (la definición exacta está en la documentación de precios del vendor). Un Zap con cinco pasos puede consumir varias tareas por disparo.",
        },
        {
          q: "¿La IA crea el Zap perfecto sola?",
          a: "Te da un borrador. Revisa mapeo de campos, permisos OAuth y qué pasa si el disparo llega vacío.",
        },
        {
          q: "¿Puedo migrar desde Make?",
          a: "No hay botón mágico. Exporta la lógica en un documento, rehaz disparadores equivalentes y prueba con datos de staging.",
        },
        {
          q: "¿Sustituye a Notion AI o a un agente en terminal?",
          a: "No. Zapier mueve datos entre apps. Notion AI escribe en páginas; Hermes o Grok Bot automatizan en tu máquina o cloud de otro tipo.",
        },
      ],
      quickTutorial: {
        title: "Tu primer Zap entre formulario y hoja",
        steps: [
          "En zapier.com crea un Zap nuevo y elige el disparador (p. ej. «nueva fila en Google Forms» o Typeform).",
          "Conecta la cuenta OAuth y dispara una prueba; confirma que Zapier ve un registro real.",
          "Añade una acción (p. ej. «añadir fila en Google Sheets») y mapea cada columna al campo del formulario.",
          "Activa un filtro si solo quieres filas con email relleno; evita basura en la hoja.",
          "Enciende el Zap, envía un formulario de prueba y revisa el historial de tareas en Zapier.",
        ],
      },
    },
    en: {
      shortDescription:
        "No-code automation across thousands of apps. Zaps with triggers and actions; AI to describe flows and agent-style assistants per plan.",
      fullDescription:
        "Zapier connects SaaS tools without running your own server. The mental model is the Zap: a trigger (new email, spreadsheet row, form submission) and a sequence of actions in other tools. It has been on the market for years and its integration catalog is among the largest in the space.\n\nIn 2025–2026 the product added AI layers: assistants to draft Zaps from natural language, steps that call models (summarize, classify, extract fields) and offerings such as Zapier Agents or Copilot depending on current docs and plan on zapier.com. AI speeds up the first draft; serious work is still defining data, error handling and who owns the flow on the team.\n\nIt fits SMBs and ops teams that want «when X happens in app A, do Y in B» without standing up Make-style complex scenarios. For deep branching, heavy JSON transforms or very tight per-operation budget, Make competes on a different curve — see the zapier-ai-vs-make comparison. There is no affiliate program on StackAI Learn.",
      subcategory: "No-code automation (Zaps)",
      pricingDetails:
        "A free plan exists with limits on tasks and Zaps under the current policy at zapier.com/pricing; paid plans scale by task volume, seats and features (tables, AI, etc.). Usage is measured in tasks executed, not Make-style operations. Check the vendor pricing page before promising cost to a client. There is no affiliate program on StackAI Learn.",
      bestFor: [
        "Connecting two or three popular apps (CRM, email, sheets, Slack) in minutes",
        "Teams without developers who want templates and a proven Zap marketplace",
        "Simple triggers and linear actions with basic filters",
        "Anyone already paying for several SaaS tools who wants one automation hub",
      ],
      notFor: [
        "Flows with dozens of branches, loops and hand-rolled JSON parsers — Make is often more comfortable",
        "Fully on-prem automation or only custom APIs with no connector",
        "Replacing bulk ETL or a data warehouse",
        "Zero budget with high daily run volume",
      ],
      pros: [
        "Very large catalog of official integrations",
        "Gentle curve: trigger → action without a canvas on day one",
        "History, alerts and retries built into the UI",
        "AI to speed up describing and debugging Zaps (per plan)",
        "Template and partner ecosystem familiar in marketing/ops",
      ],
      cons: [
        "Cost rises with tasks; chatty flows can surprise on the invoice",
        "Complex logic and fine data transforms can feel rigid",
        "Connector dependency: when an API changes, you wait on Zapier",
        "Advanced AI features are not on every plan",
        "Less «visual lab» than a Make scenario for edge cases",
      ],
      keyFeatures: [
        "Zaps: trigger + multi-app actions",
        "Filters, paths and field formatters",
        "Zapier Tables and interfaces per plan",
        "AI steps and assistants (Copilot / Agents per current product)",
        "Mobile apps and failure notifications",
        "Webhooks and Zapier API for hybrid cases",
      ],
      faq: [
        {
          q: "Zapier or Make for my first flow?",
          a: "If it is two known apps and you want out today, Zapier. If you already see branches, routers and many operations per run, open zapier-ai-vs-make and try Make on its free tier.",
        },
        {
          q: "What is a «task» in Zapier?",
          a: "Each successful action in a Zap usually counts as a task (exact definition is on the vendor pricing docs). A five-step Zap may consume several tasks per trigger.",
        },
        {
          q: "Does AI build the perfect Zap alone?",
          a: "It gives you a draft. Review field mapping, OAuth scopes and what happens when the trigger payload is empty.",
        },
        {
          q: "Can I migrate from Make?",
          a: "There is no magic button. Export the logic in a doc, rebuild equivalent triggers and test with staging data.",
        },
        {
          q: "Does it replace Notion AI or a terminal agent?",
          a: "No. Zapier moves data between apps. Notion AI writes on pages; Hermes or Grok Bot automate on your machine or another cloud layer.",
        },
      ],
      quickTutorial: {
        title: "Your first Zap from form to sheet",
        steps: [
          "On zapier.com create a new Zap and pick the trigger (e.g. «new row in Google Forms» or Typeform).",
          "Connect the OAuth account and send a test; confirm Zapier sees a real record.",
          "Add an action (e.g. «add row in Google Sheets») and map each column to a form field.",
          "Turn on a filter if you only want rows with email filled; avoid junk in the sheet.",
          "Switch the Zap on, submit a test form and review task history in Zapier.",
        ],
      },
    },
  },
};
