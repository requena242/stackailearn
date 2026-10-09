import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "v0";

export const v0: Tool = {
  id: slug,
  slug,
  name: "v0",
  vendor: "Vercel",
  officialUrl: "https://v0.app",
  category: "code",
  pricing: "freemium",
  featured: false,
  accent: "#000000",
  initials: "V0",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.6,
  ratingCount: 620,
  lastUpdated: "2026-10-09",
  difficulty: "beginner",
  platforms: ["web"],
  useTypes: ["code", "create"],
  tags: [
    "ui",
    "react",
    "nextjs",
    "tailwind",
    "shadcn",
    "vercel",
    "generación",
    "componentes",
  ],
  alternatives: ["lovable", "cursor", "chatgpt"],
  relatedTools: ["cursor", "chatgpt", "claude"],
  relatedTutorials: [
    "cursor-cloud-agent-primer-pr",
    "cursor-repo-existente",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "v0 con un prompt de dashboard y vista previa de componentes React con Tailwind",
        caption:
          "Generas UI en React/Next desde el chat; el siguiente paso suele ser llevar el código a tu repo o desplegar en Vercel.",
        hint:
          "Hero 1600×900: interfaz de v0.app con prompt a la izquierda, preview de una landing o dashboard con shadcn/Tailwind a la derecha y botón de deploy o copiar código visible.",
      },
      en: {
        alt: "v0 with a dashboard prompt and React component preview using Tailwind",
        caption:
          "You generate React/Next UI from chat; the usual next step is moving code into your repo or deploying on Vercel.",
        hint:
          "Hero 1600×900: v0.app UI with prompt on the left, preview of a landing or dashboard with shadcn/Tailwind on the right and deploy or copy-code action visible.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Generador de UI y apps web con IA de Vercel. React, Next.js, Tailwind y shadcn desde el prompt; despliegue natural en Vercel.",
      fullDescription:
        "v0 (v0 by Vercel, en v0.app) es un constructor asistido por IA orientado a interfaces y aplicaciones web modernas. A partir de descripciones en lenguaje natural genera componentes y pantallas en React, con estilos Tailwind y patrones alineados con shadcn/ui. El producto evolucionó desde v0.dev hacia flujos más completos de app y despliegue en el ecosistema Vercel.\n\nEncaja cuando quieres prototipar o entregar UI que ya encaja en un stack Next/React: landing, panel de admin, formularios, tablas y bloques reutilizables sin dibujar cada pixel en Figma. Puedes iterar en el chat, copiar código al repo o conectar con un proyecto en Vercel según el flujo que ofrezca la UI actual.\n\nNo sustituye un IDE con agente sobre un monorepo grande ni un backend Supabase empaquetado de fábrica — para una app full-stack con auth y base de datos desde el primer mensaje, Lovable compite en otra capa. La combinación habitual en equipos Vercel: bocetar pantallas en v0, endurecer lógica y tests en Cursor (cursor-repo-existente, mejores-herramientas-ia-codigo).\n\nCréditos, límites y nombres de plan cambian en v0.app; revisa precios antes de prometer volumen a cliente. No hay programa de afiliado en StackAI Learn.",
      subcategory: "Generador de UI React / Next (Vercel)",
      pricingDetails:
        "Hay tier gratuito con créditos o generaciones limitadas según la política actual en v0.app; los planes de pago amplían uso, proyectos y funciones de equipo. El despliegue en Vercel puede tener coste aparte según tu cuenta. Confirma en la página de precios del vendor. No hay programa de afiliado en StackAI Learn.",
      bestFor: [
        "Landings, dashboards y formularios en React + Tailwind listos para pegar en Next",
        "Equipos que ya despliegan en Vercel y quieren UI coherente con shadcn",
        "Iterar varias versiones de un componente desde lenguaje natural",
        "Prototipos de producto donde el entregable es código front, no solo mock estático",
      ],
      notFor: [
        "Quien necesita auth, base de datos y hosting full-stack sin tocar Supabase o backend",
        "Apps móviles nativas o stacks fuera de React (Flutter, SwiftUI, etc.)",
        "Refactors profundos en un repo legacy de 200 archivos — ahí va Cursor",
        "Diseño de marca cerrado sin revisar accesibilidad y tokens a mano",
      ],
      pros: [
        "Salida alineada con React, Tailwind y convenciones shadcn",
        "Camino corto hacia deploy en Vercel",
        "Iteración visual rápida desde el chat",
        "Útil para componentes aislados y páginas completas",
        "Menos fricción si tu equipo ya vive en Next.js",
      ],
      cons: [
        "El código generado requiere revisión (a11y, estado, datos reales)",
        "Menos «app entera con backend» que constructores full-stack tipo Lovable",
        "Créditos y límites dependen del plan",
        "Atado al ecosistema web React; no es un IDE de repo completo",
        "La UI y capacidades del producto cambian con frecuencia",
      ],
      keyFeatures: [
        "Generación de UI desde prompts en lenguaje natural",
        "React + Tailwind + componentes estilo shadcn",
        "Vista previa interactiva en el navegador",
        "Export / copia de código y conexión con proyectos Vercel",
        "Iteración por chat sobre el mismo diseño",
        "Soporte para flujos de app web más allá de un solo componente (según versión)",
      ],
      faq: [
        {
          q: "¿v0 o Lovable para mi primera app?",
          a: "Si el objetivo es una app con login, datos y publicación desde el chat con Supabase, mira Lovable y la comparativa v0-vs-lovable-ui. Si ya tienes repo Next en Vercel y solo necesitas pantallas, v0 suele encajar mejor.",
        },
        {
          q: "¿Sustituye a Cursor?",
          a: "No. v0 genera UI; Cursor edita el repo con diffs y agentes. Muchos equipos generan en v0 y pulen en Cursor — ver cursor-cloud-agent-primer-pr.",
        },
        {
          q: "¿Puedo usar el código en producción?",
          a: "Sí, pero trátalo como primer borrador: revisa accesibilidad, manejo de errores, secretos y tests antes de mergear a main.",
        },
        {
          q: "¿Necesito saber React?",
          a: "Ayuda para integrar el output en tu proyecto y corregir estado o fetch. No hace falta ser experto para un prototipo; sí para mantenerlo en un equipo serio.",
        },
        {
          q: "¿v0.dev sigue existiendo?",
          a: "El producto se comercializa como v0 en v0.app (antes v0.dev). Usa siempre la URL oficial del vendor.",
        },
      ],
      quickTutorial: {
        title: "Una landing en React lista para copiar",
        steps: [
          "Abre v0.app e inicia sesión con tu cuenta Vercel si lo pide el flujo.",
          "Describe la página: secciones, tono visual y si quieres modo claro/oscuro.",
          "Revisa la preview; pide cambios concretos («hero más compacto», «tabla con tres columnas»).",
          "Copia el código o enlaza el proyecto a Vercel según la opción que muestre la UI.",
          "Pega en tu repo Next, ejecuta el dev server y ajusta datos reales antes de publicar.",
        ],
      },
    },
    en: {
      shortDescription:
        "Vercel’s AI UI and web app generator. React, Next.js, Tailwind and shadcn from a prompt; natural deploy path on Vercel.",
      fullDescription:
        "v0 (v0 by Vercel, at v0.app) is an AI-assisted builder focused on modern web interfaces and applications. From natural-language descriptions it generates components and screens in React, with Tailwind styling and patterns aligned with shadcn/ui. The product grew from v0.dev toward fuller app flows and deployment in the Vercel ecosystem.\n\nUse it when you want to prototype or ship UI that already fits a Next/React stack: landings, admin panels, forms, tables and reusable blocks without painting every pixel in Figma. You iterate in chat, copy code into the repo or connect a Vercel project depending on the current UI flow.\n\nIt does not replace an IDE agent on a large monorepo or a bundled Supabase full-stack backend — for an app with auth and database from the first message, Lovable competes on a different layer. A common combo on Vercel teams: sketch screens in v0, harden logic and tests in Cursor (cursor-repo-existente, mejores-herramientas-ia-codigo).\n\nCredits, limits and plan names change on v0.app; check pricing before promising volume to a client. There is no affiliate program on StackAI Learn.",
      subcategory: "React / Next UI generator (Vercel)",
      pricingDetails:
        "A free tier exists with credits or limited generations under the current policy on v0.app; paid plans expand usage, projects and team features. Vercel deploy may incur separate cost on your account. Confirm on the vendor pricing page. There is no affiliate program on StackAI Learn.",
      bestFor: [
        "Landings, dashboards and forms in React + Tailwind ready to paste into Next",
        "Teams already deploying on Vercel who want shadcn-aligned UI",
        "Iterating several versions of a component from natural language",
        "Product prototypes where the deliverable is front-end code, not only a static mock",
      ],
      notFor: [
        "Anyone who needs auth, database and full-stack hosting without touching Supabase or a backend",
        "Native mobile apps or non-React stacks (Flutter, SwiftUI, etc.)",
        "Deep refactors on a 200-file legacy repo — that is Cursor",
        "Locked brand design without manual accessibility and token review",
      ],
      pros: [
        "Output aligned with React, Tailwind and shadcn conventions",
        "Short path to deploy on Vercel",
        "Fast visual iteration from chat",
        "Useful for isolated components and full pages",
        "Less friction if your team already lives in Next.js",
      ],
      cons: [
        "Generated code needs review (a11y, state, real data)",
        "Less «whole app with backend» than full-stack builders like Lovable",
        "Credits and limits depend on plan",
        "Tied to the React web ecosystem; not a full-repo IDE",
        "Product UI and capabilities change often",
      ],
      keyFeatures: [
        "UI generation from natural-language prompts",
        "React + Tailwind + shadcn-style components",
        "Interactive in-browser preview",
        "Code export / copy and Vercel project connection",
        "Chat iteration on the same design",
        "Support for web app flows beyond a single component (per version)",
      ],
      faq: [
        {
          q: "v0 or Lovable for my first app?",
          a: "If the goal is an app with login, data and publish-from-chat on Supabase, see Lovable and the v0-vs-lovable-ui comparison. If you already have a Next repo on Vercel and only need screens, v0 usually fits better.",
        },
        {
          q: "Does it replace Cursor?",
          a: "No. v0 generates UI; Cursor edits the repo with diffs and agents. Many teams generate in v0 and polish in Cursor — see cursor-cloud-agent-primer-pr.",
        },
        {
          q: "Can I use the code in production?",
          a: "Yes, but treat it as a first draft: review accessibility, error handling, secrets and tests before merging to main.",
        },
        {
          q: "Do I need to know React?",
          a: "It helps to integrate output into your project and fix state or fetch. You do not need to be an expert for a prototype; you do for serious team maintenance.",
        },
        {
          q: "Does v0.dev still exist?",
          a: "The product is marketed as v0 at v0.app (formerly v0.dev). Always use the vendor’s official URL.",
        },
      ],
      quickTutorial: {
        title: "A React landing ready to copy",
        steps: [
          "Open v0.app and sign in with your Vercel account if the flow requires it.",
          "Describe the page: sections, visual tone and light/dark preference.",
          "Review the preview; ask concrete changes («tighter hero», «table with three columns»).",
          "Copy code or link the project to Vercel per the option shown in the UI.",
          "Paste into your Next repo, run the dev server and wire real data before shipping.",
        ],
      },
    },
  },
};
