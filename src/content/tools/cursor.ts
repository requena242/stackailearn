import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "cursor";

export const cursor: Tool = {
  id: slug,
  slug,
  name: "Cursor",
  vendor: "Anysphere",
  officialUrl: "https://cursor.com",
  category: "code",
  pricing: "freemium",
  featured: true,
  accent: "#A3A3A3",
  initials: "CU",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.8,
  ratingCount: 1120,
  lastUpdated: "2026-09-19",
  difficulty: "intermediate",
  platforms: ["windows", "macos", "linux"],
  useTypes: ["code", "automate"],
  tags: ["ide", "diffs", "agentes", "repo", "pair-programming"],
  alternatives: ["chatgpt", "hermes-agent", "claude"],
  relatedTools: ["hermes-agent", "grok-bot", "chatgpt"],
  relatedTutorials: [
    "cursor-cloud-agent-primer-pr",
    "cursor-repo-existente",
    "cursor-como-ide-con-ia",
    "hermes-agent-primer-flujo",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Cursor con un diff abierto y el chat del agente al lado",
        caption: "El valor está en el diff, no en el párrafo del chat.",
        hint: "Hero 1600×900: editor de Cursor con un diff de 20–40 líneas y el panel de Agent visible.",
      },
      en: {
        alt: "Cursor with a diff open and the agent chat beside it",
        caption: "The value is in the diff, not in the chat paragraph.",
        hint: "Hero 1600×900: Cursor editor with a 20–40 line diff and the Agent panel visible.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Un IDE con agentes que tocan el repo. El trabajo de verdad es revisar el diff.",
      fullDescription:
        "Cursor es un editor basado en VS Code con modelos que leen el proyecto y proponen cambios. Sirve para implementar una tarea acotada, explicar un módulo o escribir tests. No es un becario al que le dejas «arregla la app».\n\nEl flujo que no rompe cosas: un objetivo, un alcance (qué archivos puede tocar), un plan corto, y tú apruebas el diff como si fuera un PR. Si no hay test o no puedes revertir, no delegues el cambio.",
      subcategory: "IDE con agentes",
      pricingDetails:
        "Hay un plan Hobby limitado. Pro, Pro+ y planes de equipo desbloquean más uso de agentes y modelos. Ultra y Teams entran si el volumen es alto. El editor en sí se descarga en cursor.com; el coste está en el uso de modelos.",
      bestFor: [
        "Un bug reproducible o un test rojo en un repo que ya conoces",
        "Un refactor local de 1–3 archivos con tests que puedes ejecutar",
        "Entrar a un repo ajeno: preguntas Ask ancladas a archivos antes de tocar código",
        "Equipos con revisión de PR: el diff es el entregable, no el párrafo del chat",
      ],
      notFor: [
        "Quien no puede leer un diff ni decir «esto está mal» al verlo",
        "«Arregla la app» sin rama, sin test y sin forma de revertir",
        "Trabajo que termina en Gmail, un CRM o un PDF: ahí va Grok Bot o Hermes, no el IDE",
        "Reescrituras de arquitectura completas en un solo prompt",
      ],
      pros: [
        "El contexto es el repo, no un chat vacío",
        "El diff es visible y se puede rechazar",
        "Muy bueno en refactors locales y tests",
        "Reglas del proyecto (qué no tocar) se pueden escribir",
      ],
      cons: [
        "Un prompt vago genera un PR enorme e inrevisable",
        "Los planes de pago importan si usas el agente todos los días",
        "Puede «arreglar» tests debilitándolos si no miras",
        "No es el sitio para un teammate que vive en Gmail o en un PDF",
      ],
      keyFeatures: [
        "Chat y Agent con contexto del repositorio",
        "Aplicación de cambios como diffs revisables",
        "Reglas / memories del proyecto",
        "Modelos intercambiables según el plan",
        "Escritorio en Windows, macOS y Linux",
      ],
      faq: [
        {
          q: "¿Qué es Cursor?",
          a: "Un IDE basado en VS Code (cursor.com) con chat y Agent que leen tu repositorio y proponen cambios como diffs revisables. No es un chat genérico: el valor está en el diff que apruebas o rechazas, no en el párrafo del panel lateral.",
        },
        {
          q: "¿Sustituye a saber programar?",
          a: "No. Acelera a quien ya puede decir «esto está mal» al ver el diff. Si no puedes revisar, estás copiando código a ciegas.",
        },
        {
          q: "¿Cursor o Grok Bot?",
          a: "Cursor es el editor para código en tu máquina. Grok Bot es un teammate con Agent Computer para trabajo que termina en apps web (CRM, panel, PDF). Si el entregable es un diff en el repo, quédate en Cursor.",
        },
        {
          q: "¿Cursor o Hermes Agent?",
          a: "Cursor es el IDE del día a día. Hermes es un agente CLI que vive en tu máquina y en un gateway. Empieza por Cursor; Hermes cuando quieras el mismo oficio fuera del editor.",
        },
        {
          q: "¿Cuándo parar y no aprobar el diff?",
          a: "Para si toca más de ~40 líneas sin pedirlo, si cambia archivos fuera del alcance, si el test pasa pero debilitó aserciones, o si no entiendes una línea. Revert y reduce el alcance.",
        },
      ],
      quickTutorial: {
        title: "Un cambio acotado en 4 pasos",
        steps: [
          "Rama nueva + bug o test rojo reproducible. Sin eso, no abras Agent.",
          "Agent: resultado en una frase, archivos permitidos (máx. 3), y «no toques X». Pide plan de 5 líneas antes de editar.",
          "Revisa el diff como un PR: nombres, imports, tests, efectos laterales. Rechaza si supera el alcance.",
          "Ejecuta tests. Si pasan de forma sospechosa (aserciones vacías, mocks excesivos), revert y acota.",
        ],
      },
    },
    en: {
      shortDescription:
        "An IDE with agents that touch the repo. The real work is reviewing the diff.",
      fullDescription:
        "Cursor is a VS Code–based editor with models that read the project and propose edits. It is good at a scoped task, explaining a module or writing tests. It is not an intern you can tell to «fix the app».\n\nThe flow that does not break things: one outcome, a scope (which files it may touch), a short plan, and you approve the diff as if it were a PR. If there is no test and you cannot revert, do not delegate the change.",
      subcategory: "IDE with agents",
      pricingDetails:
        "A limited Hobby plan exists. Pro, Pro+ and team plans unlock more agent usage and models. Ultra and Teams matter at high volume. The editor itself is a download from cursor.com; you pay for model use.",
      bestFor: [
        "A reproducible bug or a failing test in a repo you already know",
        "A local refactor across 1–3 files with tests you can run",
        "Landing in someone else’s repo: Ask questions pinned to files before you edit",
        "Teams with PR review: the diff is the deliverable, not the chat paragraph",
      ],
      notFor: [
        "Anyone who cannot read a diff or say «this is wrong» when they see it",
        "«Fix the app» with no branch, no test and no way to revert",
        "Work that ends in Gmail, a CRM or a PDF — that is Grok Bot or Hermes, not the IDE",
        "Full architecture rewrites in a single prompt",
      ],
      pros: [
        "Context is the repo, not an empty chat",
        "The diff is visible and rejectable",
        "Strong at local refactors and tests",
        "Project rules (what not to touch) can be written down",
      ],
      cons: [
        "A vague prompt yields a huge, unreviewable PR",
        "Paid plans matter if you use the agent every day",
        "It can «fix» tests by weakening them if you do not look",
        "It is not a teammate that lives in Gmail or a PDF",
      ],
      keyFeatures: [
        "Chat and Agent with repository context",
        "Edits applied as reviewable diffs",
        "Project rules / memories",
        "Swappable models depending on plan",
        "Desktop on Windows, macOS and Linux",
      ],
      faq: [
        {
          q: "What is Cursor?",
          a: "A VS Code–based IDE (cursor.com) with chat and Agent that read your repository and propose edits as reviewable diffs. It is not a generic chat: the value is the diff you approve or reject, not the sidebar paragraph.",
        },
        {
          q: "Does it replace knowing how to code?",
          a: "No. It speeds up people who can already say «this is wrong» when they see a diff. If you cannot review, you are pasting code blind.",
        },
        {
          q: "Cursor or Grok Bot?",
          a: "Cursor is the editor for code on your machine. Grok Bot is a teammate with Agent Computer for work that finishes in web apps (CRM, admin, PDF). If the deliverable is a diff in the repo, stay in Cursor.",
        },
        {
          q: "Cursor or Hermes Agent?",
          a: "Cursor is the daily IDE. Hermes is a CLI agent on your machine and, later, a gateway. Start with Cursor; add Hermes when you want the same job outside the editor.",
        },
        {
          q: "When should I stop and not approve the diff?",
          a: "Stop if it touches more than ~40 lines unasked, edits files outside scope, passes tests by weakening assertions, or you do not understand a line. Revert and shrink scope.",
        },
      ],
      quickTutorial: {
        title: "A scoped change in 4 steps",
        steps: [
          "New branch + reproducible bug or failing test. Without that, do not open Agent.",
          "Agent: one-sentence outcome, allowed files (max 3), and «do not touch X». Ask for a 5-line plan before edits.",
          "Review the diff like a PR: names, imports, tests, side effects. Reject if it exceeds scope.",
          "Run tests. If they pass suspiciously (empty assertions, heavy mocks), revert and narrow scope.",
        ],
      },
    },
  },
};
