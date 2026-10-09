import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "lovable";

export const lovable: Tool = {
  id: slug,
  slug,
  name: "Lovable",
  vendor: "Lovable",
  officialUrl: "https://lovable.dev",
  category: "code",
  pricing: "freemium",
  featured: false,
  accent: "#FF6B6B",
  initials: "LV",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.5,
  ratingCount: 580,
  lastUpdated: "2026-10-09",
  difficulty: "beginner",
  platforms: ["web"],
  useTypes: ["code", "create"],
  tags: [
    "full-stack",
    "react",
    "supabase",
    "tailwind",
    "github",
    "deploy",
    "app-builder",
    "auth",
  ],
  alternatives: ["v0", "cursor", "chatgpt"],
  relatedTools: ["cursor", "v0", "claude"],
  relatedTutorials: [
    "cursor-cloud-agent-primer-pr",
    "cursor-repo-existente",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Lovable con chat de construcción, preview de app y panel de Supabase o GitHub",
        caption:
          "Desde el chat montas una app React con backend; publicas y sincronizas con Git cuando el flujo lo permite.",
        hint:
          "Hero 1600×900: lovable.dev con conversación de build a la izquierda, preview de app con login o dashboard a la derecha e indicio de sync Git o Supabase en barra lateral.",
      },
      en: {
        alt: "Lovable with build chat, app preview and Supabase or GitHub panel",
        caption:
          "From chat you assemble a React app with backend; publish and sync to Git when the flow allows.",
        hint:
          "Hero 1600×900: lovable.dev with build conversation on the left, app preview with login or dashboard on the right and Git sync or Supabase hint in a side bar.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Constructor full-stack con IA: React, Supabase y Tailwind desde el chat. Publica, itera y sincroniza con GitHub.",
      fullDescription:
        "Lovable (lovable.dev) es un generador de aplicaciones web asistido por IA que apunta a ir del prompt a algo desplegable: interfaz en React con Tailwind, backend y datos vía Supabase (auth, tablas, APIs según lo que configure el flujo), más opciones de publicación y sincronización con repositorios Git.\n\nEncaja cuando quieres un MVP o herramienta interna con login, CRUD o dashboard sin montar tú mismo el esqueleto Next + Supabase desde cero. El chat guía cambios de UI y lógica; puedes exportar o sincronizar código para seguir en local o en Cursor cuando el proyecto crece.\n\nNo es el mejor sitio para pulir un componente aislado que solo vivirá en un monorepo Vercel enorme — ahí v0 o Cursor suelen ser más precisos. Tampoco sustituye revisión de seguridad, políticas RLS en Supabase ni tests automatizados: el output es punto de partida, no auditoría pasada.\n\nPlanes, créditos y límites de mensajes rotan en lovable.dev; confirma precios antes de comprometer entregables. No hay programa de afiliado en StackAI Learn.",
      subcategory: "App builder full-stack (React + Supabase)",
      pricingDetails:
        "Hay entrada gratuita con límites de mensajes o proyectos según la política actual en lovable.dev; los planes de pago amplían uso, colaboración y funciones de deploy. Supabase puede tener tier gratuito aparte con sus propios límites. Revisa ambas páginas de precios. No hay programa de afiliado en StackAI Learn.",
      bestFor: [
        "MVPs con auth, formularios y datos en Supabase desde el primer día",
        "Fundadores no dev que necesitan algo publicable para validar idea",
        "Prototipos internos (panel, CRM ligero, portal de cliente)",
        "Equipos que quieren sync con GitHub y seguir en IDE después",
      ],
      notFor: [
        "Solo un componente shadcn para pegar en un repo Next ya existente — prueba v0",
        "Arquitectura enterprise con microservicios y compliance estricto sin revisión humana",
        "Apps móviles nativas o juegos",
        "Quien no puede revisar políticas de base de datos y secretos en Supabase",
      ],
      pros: [
        "Stack coherente React + Tailwind + Supabase en un solo flujo",
        "Publicación y preview sin montar infra manual al inicio",
        "Sincronización con Git para handoff a desarrolladores",
        "Iteración por chat sobre UI y funcionalidad",
        "Rápido para demos con login y datos reales (con cautela)",
      ],
      cons: [
        "Menos control fino que escribir el repo en Cursor desde el día uno",
        "RLS, migraciones y edge cases de Supabase requieren revisión",
        "Dependencia del constructor mientras el proyecto vive solo en la plataforma",
        "El código generado puede necesitar refactor al escalar",
        "Límites de mensajes y proyectos según plan",
      ],
      keyFeatures: [
        "Construcción de apps desde prompts en chat",
        "React + Tailwind en frontend",
        "Integración Supabase (auth, base de datos, según UI actual)",
        "Publicación / hosting del proyecto generado",
        "Sync con GitHub para continuar en local o CI",
        "Iteración visual y funcional en la misma sesión",
      ],
      faq: [
        {
          q: "¿Lovable o v0?",
          a: "Lovable si buscas app con backend y auth empaquetados. v0 si tu prioridad es UI React/Next para un repo Vercel — mira v0-vs-lovable-ui.",
        },
        {
          q: "¿Puedo llevar el código a Cursor?",
          a: "Sí, cuando sincronizas con GitHub o exportas. A partir de ahí aplicas el flujo de cursor-repo-existente: rama, tests y PR.",
        },
        {
          q: "¿Supabase es obligatorio?",
          a: "Es el stack que el producto promueve para datos y auth. Si tu org usa otro backend, valora si el export te deja migrar o si conviene otro enfoque.",
        },
        {
          q: "¿Es seguro para datos de cliente?",
          a: "Solo tras revisar auth, RLS, secretos y cumplimiento. Trata el MVP como entorno controlado hasta que un dev audite Supabase y el código.",
        },
        {
          q: "¿Sustituye a un desarrollador?",
          a: "Acelera el primer 60–80 % visual y de wiring. Producción seria sigue necesitando revisión, tests y operación — ver mejores-herramientas-ia-codigo.",
        },
      ],
      quickTutorial: {
        title: "Un MVP con login y una tabla",
        steps: [
          "Crea cuenta en lovable.dev y abre un proyecto nuevo.",
          "Describe la app: quién inicia sesión, qué pantallas hay y qué datos guardas (ej. tareas, leads).",
          "Revisa la preview; pide ajustes de layout y un flujo de registro/login si falta.",
          "Conecta Supabase si el asistente lo solicita y confirma tablas básicas en el panel.",
          "Publica la demo o sincroniza con GitHub y clona en local para la siguiente iteración.",
        ],
      },
    },
    en: {
      shortDescription:
        "Full-stack AI app builder: React, Supabase and Tailwind from chat. Publish, iterate and sync with GitHub.",
      fullDescription:
        "Lovable (lovable.dev) is an AI-assisted web app generator aimed at going from prompt to something deployable: React UI with Tailwind, backend and data through Supabase (auth, tables, APIs depending on what the flow configures), plus publish options and Git repository sync.\n\nUse it when you want an MVP or internal tool with login, CRUD or a dashboard without hand-rolling the Next + Supabase skeleton. Chat drives UI and logic changes; you can export or sync code to continue locally or in Cursor as the project grows.\n\nIt is not the best place to polish one isolated component that will only live in a huge Vercel monorepo — v0 or Cursor are usually more precise. It also does not replace security review, Supabase RLS policies or automated tests: output is a starting point, not a passed audit.\n\nPlans, credits and message limits rotate on lovable.dev; confirm pricing before committing deliverables. There is no affiliate program on StackAI Learn.",
      subcategory: "Full-stack app builder (React + Supabase)",
      pricingDetails:
        "A free entry exists with message or project limits under the current policy on lovable.dev; paid plans expand usage, collaboration and deploy features. Supabase may have a separate free tier with its own limits. Check both pricing pages. There is no affiliate program on StackAI Learn.",
      bestFor: [
        "MVPs with auth, forms and Supabase data from day one",
        "Non-dev founders who need something shippable to validate an idea",
        "Internal prototypes (panel, light CRM, client portal)",
        "Teams that want GitHub sync and IDE follow-up",
      ],
      notFor: [
        "Only a shadcn component to paste into an existing Next repo — try v0",
        "Enterprise architecture with microservices and strict compliance without human review",
        "Native mobile apps or games",
        "Anyone who cannot review database policies and Supabase secrets",
      ],
      pros: [
        "Coherent React + Tailwind + Supabase stack in one flow",
        "Publish and preview without manual infra setup at first",
        "Git sync for handoff to developers",
        "Chat iteration on UI and functionality",
        "Fast demos with login and real data (with caution)",
      ],
      cons: [
        "Less fine control than writing the repo in Cursor from day one",
        "RLS, migrations and Supabase edge cases need review",
        "Builder dependency while the project lives only on the platform",
        "Generated code may need refactor as you scale",
        "Message and project limits per plan",
      ],
      keyFeatures: [
        "App building from chat prompts",
        "React + Tailwind on the frontend",
        "Supabase integration (auth, database, per current UI)",
        "Publish / hosting for the generated project",
        "GitHub sync to continue locally or in CI",
        "Visual and functional iteration in one session",
      ],
      faq: [
        {
          q: "Lovable or v0?",
          a: "Lovable if you want an app with bundled backend and auth. v0 if your priority is React/Next UI for a Vercel repo — see v0-vs-lovable-ui.",
        },
        {
          q: "Can I move code to Cursor?",
          a: "Yes when you sync to GitHub or export. From there use the cursor-repo-existente flow: branch, tests and PR.",
        },
        {
          q: "Is Supabase mandatory?",
          a: "It is the stack the product promotes for data and auth. If your org uses another backend, assess whether export lets you migrate or another approach fits.",
        },
        {
          q: "Is it safe for client data?",
          a: "Only after reviewing auth, RLS, secrets and compliance. Treat the MVP as a controlled environment until a developer audits Supabase and code.",
        },
        {
          q: "Does it replace a developer?",
          a: "It speeds up the first 60–80 % of UI and wiring. Serious production still needs review, tests and ops — see mejores-herramientas-ia-codigo.",
        },
      ],
      quickTutorial: {
        title: "An MVP with login and a table",
        steps: [
          "Create an account on lovable.dev and open a new project.",
          "Describe the app: who signs in, which screens exist and what data you store (e.g. tasks, leads).",
          "Review the preview; ask for layout tweaks and a sign-up/login flow if missing.",
          "Connect Supabase if the assistant asks and confirm basic tables in the panel.",
          "Publish the demo or sync to GitHub and clone locally for the next iteration.",
        ],
      },
    },
  },
};
