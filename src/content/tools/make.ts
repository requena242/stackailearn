import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "make";

export const make: Tool = {
  id: slug,
  slug,
  name: "Make",
  vendor: "Make (Celonis)",
  officialUrl: "https://www.make.com",
  category: "productivity",
  pricing: "freemium",
  featured: false,
  accent: "#6D00CC",
  initials: "MK",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.5,
  ratingCount: 490,
  lastUpdated: "2026-10-13",
  difficulty: "intermediate",
  platforms: ["web", "ios", "android"],
  useTypes: ["automate", "learn"],
  tags: [
    "escenarios",
    "integromat",
    "integraciones",
    "no-code",
    "router",
    "ai-agents",
  ],
  alternatives: ["zapier", "notion-ai"],
  relatedTools: ["zapier", "notion-ai", "chatgpt"],
  relatedTutorials: [
    "notion-ai-primer-flujo",
    "hermes-agent-primer-flujo",
    "elegir-modelo-texto",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Canvas de Make con módulos conectados, router y vista de ejecución",
        caption:
          "Los escenarios se diseñan en un lienzo; cada módulo es un paso y el consumo suele medirse en operaciones.",
        hint:
          "Hero 1600×900: make.com con un escenario abierto (trigger + router + 3 ramas), burbujas de datos entre módulos y panel de historial de ejecución.",
      },
      en: {
        alt: "Make canvas with linked modules, router and run view",
        caption:
          "Scenarios are designed on a canvas; each module is a step and usage is often measured in operations.",
        hint:
          "Hero 1600×900: make.com with an open scenario (trigger + router + 3 branches), data bubbles between modules and execution history panel.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Automatización visual (antes Integromat). Escenarios con routers, parsers y miles de módulos; IA en pasos y AI Agents según el producto actual.",
      fullDescription:
        "Make (make.com, marca que absorbió Integromat) es un constructor de escenarios en un canvas: módulos, routers, iteradores, agregadores y transformaciones JSON sin salir del editor. Es la opción habitual cuando un flujo «no es una línea recta» y necesitas ver ramas y datos en cada nodo.\n\nEl vendor publica módulos de IA (OpenAI, clasificación, extracción) y capacidades de AI Agents en documentación que evoluciona; conviene leer make.com antes de diseñar un proceso crítico. La facturación suele girar en torno a operaciones y créditos según plan, distinto del contador de tareas de Zapier.\n\nÚtil para equipos de ops, integradores freelance y startups que quieren lógica condicional rica sin montar un backend. Para «conecta Gmail con Slack en diez minutos» sin tocar un diagrama, Zapier sigue siendo el camino más corto — comparativa zapier-ai-vs-make. No hay programa de afiliado en StackAI Learn.",
      subcategory: "Automatización visual (escenarios)",
      pricingDetails:
        "Plan gratuito con cupo de operaciones mensuales según make.com/pricing; planes de pago amplían operaciones, frecuencia y funciones de equipo. Los nombres (Core, Pro, Teams, etc.) y los créditos de IA cambian: confirma en la web oficial. No hay programa de afiliado en StackAI Learn.",
      bestFor: [
        "Escenarios con routers, filtros múltiples y ramas en paralelo",
        "Transformar JSON, listas y arrays entre APIs dispares",
        "Quien piensa en diagramas y quiere inspeccionar el payload en cada módulo",
        "Integradores que repiten patrones con plantillas de escenario",
      ],
      notFor: [
        "El primer Zap de marketing «solo quiero avisar en Slack» sin aprender el canvas",
        "Equipos que exigen el conector más nicho solo en Zapier",
        "Sustituir observabilidad de un pipeline de datos enterprise",
        "Quien no puede dedicar tiempo a depurar escenarios rotos tras un cambio de API",
      ],
      pros: [
        "Editor visual potente para lógica condicional y bucles",
        "Operaciones por módulo visibles al diseñar (menos sorpresa que un Zap opaco)",
        "Buen ecosistema de módulos HTTP y herramientas para APIs custom",
        "Módulos de IA y agents documentados para encadenar con el resto del escenario",
        "Precio de entrada competitivo para flujos medianos si optimizas operaciones",
      ],
      cons: [
        "Curva de aprendizaje más alta que un Zap lineal",
        "Escenarios grandes son difíciles de mantener sin convenciones de equipo",
        "Algunas integraciones llegan después que en Zapier",
        "La IA no diseña solo un escenario production-ready",
        "Necesitas disciplina de versionado y documentación interna",
      ],
      keyFeatures: [
        "Escenarios con trigger instantáneo o programado",
        "Routers, iterators, aggregators y filtros",
        "JSON y funciones de texto/número entre módulos",
        "Módulos de IA y AI Agents (según catálogo actual)",
        "Historial de ejecución con inspección de bundles",
        "Equipos, carpetas y roles en planes superiores",
      ],
      faq: [
        {
          q: "¿Make sigue siendo Integromat?",
          a: "La marca comercial es Make (make.com). La comunidad aún dice Integromat; la documentación oficial usa Make.",
        },
        {
          q: "¿Operación vs tarea de Zapier?",
          a: "En Make cada ejecución de módulo suele contar como operación (detalle en precios del vendor). Un escenario con router puede multiplicar operaciones en un solo disparo.",
        },
        {
          q: "¿Puedo llamar a ChatGPT desde Make?",
          a: "Sí vía módulos de IA del catálogo o HTTP a la API del modelo. Revisa límites de tokens y coste del proveedor aparte del plan Make.",
        },
        {
          q: "¿Zapier o Make con IA?",
          a: "Zapier empuja asistentes en el flujo Zap; Make encaja IA como módulos en un canvas complejo. Lee zapier-ai-vs-make con tu caso concreto.",
        },
        {
          q: "¿Cómo evito que un escenario se rompa en silencio?",
          a: "Activa notificaciones de error, usa rutas de fallback y revisa el historial semanal; un módulo rojo sin dueño es deuda operativa.",
        },
      ],
      quickTutorial: {
        title: "Un escenario con router y dos ramas",
        steps: [
          "Crea un escenario nuevo en make.com y añade el módulo disparador (webhook o app).",
          "Ejecuta «Run once» y captura el bundle de datos en el primer módulo.",
          "Inserta un Router: define una ruta si un campo existe y otra para el resto.",
          "En cada rama añade la acción (Slack, email, hoja) mapeando desde el bundle, no a mano.",
          "Guarda, programa o activa el escenario y revisa la siguiente ejecución real en Historial.",
        ],
      },
    },
    en: {
      shortDescription:
        "Visual automation (formerly Integromat). Scenarios with routers, parsers and thousands of modules; AI in steps and AI Agents per current product.",
      fullDescription:
        "Make (make.com, the brand that absorbed Integromat) is a scenario builder on a canvas: modules, routers, iterators, aggregators and JSON transforms without leaving the editor. It is the usual pick when a flow «is not a straight line» and you need to see branches and data at each node.\n\nThe vendor ships AI modules (OpenAI, classification, extraction) and AI Agents capabilities in docs that keep evolving; read make.com before you design a critical process. Billing usually revolves around operations and credits per plan, different from Zapier’s task counter.\n\nUseful for ops teams, integration freelancers and startups that want rich conditional logic without a custom backend. For «connect Gmail to Slack in ten minutes» without touching a diagram, Zapier remains the shorter path — zapier-ai-vs-make comparison. There is no affiliate program on StackAI Learn.",
      subcategory: "Visual automation (scenarios)",
      pricingDetails:
        "Free plan with a monthly operations allowance per make.com/pricing; paid plans expand operations, frequency and team features. Names (Core, Pro, Teams, etc.) and AI credits change — confirm on the official site. There is no affiliate program on StackAI Learn.",
      bestFor: [
        "Scenarios with routers, multiple filters and parallel branches",
        "Transforming JSON, lists and arrays between mismatched APIs",
        "People who think in diagrams and want to inspect payload at each module",
        "Integrators who repeat patterns with scenario templates",
      ],
      notFor: [
        "A first marketing Zap «I only want Slack ping» without learning the canvas",
        "Teams that require the most niche connector only on Zapier",
        "Replacing observability for an enterprise data pipeline",
        "Anyone who cannot spend time debugging scenarios after an API change",
      ],
      pros: [
        "Strong visual editor for conditional logic and loops",
        "Per-module operations visible while designing (less opaque than a linear Zap)",
        "Solid HTTP modules and tooling for custom APIs",
        "Documented AI modules and agents to chain with the rest of the scenario",
        "Competitive entry pricing for medium flows if you optimize operations",
      ],
      cons: [
        "Steeper learning curve than a linear Zap",
        "Large scenarios are hard to maintain without team conventions",
        "Some integrations land later than on Zapier",
        "AI does not design a production-ready scenario alone",
        "You need version discipline and internal documentation",
      ],
      keyFeatures: [
        "Scenarios with instant or scheduled triggers",
        "Routers, iterators, aggregators and filters",
        "JSON and text/number functions between modules",
        "AI modules and AI Agents (per current catalog)",
        "Run history with bundle inspection",
        "Teams, folders and roles on higher plans",
      ],
      faq: [
        {
          q: "Is Make still Integromat?",
          a: "The commercial brand is Make (make.com). The community still says Integromat; official docs use Make.",
        },
        {
          q: "Operation vs Zapier task?",
          a: "On Make each module run usually counts as an operation (detail on vendor pricing). A scenario with a router can multiply operations on one trigger.",
        },
        {
          q: "Can I call ChatGPT from Make?",
          a: "Yes via catalog AI modules or HTTP to the model API. Check token limits and provider cost separate from the Make plan.",
        },
        {
          q: "Zapier or Make with AI?",
          a: "Zapier pushes assistants into the Zap flow; Make fits AI as modules in a complex canvas. Read zapier-ai-vs-make for your case.",
        },
        {
          q: "How do I avoid a scenario breaking silently?",
          a: "Turn on error notifications, use fallback routes and review history weekly; a red module with no owner is ops debt.",
        },
      ],
      quickTutorial: {
        title: "A scenario with router and two branches",
        steps: [
          "Create a new scenario on make.com and add the trigger module (webhook or app).",
          "Run «Run once» and capture the data bundle on the first module.",
          "Insert a Router: one route if a field exists, another for everything else.",
          "On each branch add the action (Slack, email, sheet) mapping from the bundle, not by hand.",
          "Save, schedule or activate the scenario and review the next real run in History.",
        ],
      },
    },
  },
};
