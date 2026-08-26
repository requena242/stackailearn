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
  lastUpdated: "2026-08-26",
  difficulty: "intermediate",
  platforms: ["windows", "macos", "linux"],
  useTypes: ["code", "automate"],
  tags: ["ide", "diffs", "agentes", "repo", "pair-programming"],
  alternatives: ["chatgpt", "hermes-agent", "claude"],
  relatedTools: ["hermes-agent", "grok-bot", "chatgpt"],
  relatedTutorials: ["cursor-como-ide-con-ia", "hermes-agent-primer-flujo"],
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
        "Quien ya programa y quiere acelerar cambios acotados",
        "Equipos que revisan PRs y pueden exigir tests",
        "Explorar un repo ajeno con preguntas ancladas a archivos",
      ],
      notFor: [
        "Quien no sabe leer un diff (el agente no sustituye eso)",
        "Cambios de producción sin sucursal, test ni rollback",
        "Tareas que viven en el navegador o en un CRM: eso es otro tipo de agente",
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
          q: "¿Sustituye a saber programar?",
          a: "No. Acelera a quien ya puede decir «esto está mal» al ver el diff. Si no puedes revisar, estás copiando código a ciegas.",
        },
        {
          q: "¿Cursor o Hermes Agent?",
          a: "Cursor es el IDE del día a día. Hermes es un agente CLI que vive en tu máquina y en un gateway. Empieza por Cursor; Hermes cuando quieras el mismo oficio fuera del editor.",
        },
      ],
      quickTutorial: {
        title: "Un cambio acotado, no un rewrite",
        steps: [
          "Abre el repo en una rama nueva. Reproduce el bug o el test que falla.",
          "En Agent, escribe el resultado, los archivos permitidos y lo que no debe tocar.",
          "Pide un plan de 5 líneas antes de que edite.",
          "Revisa el diff como un PR: nombres, tests, efectos laterales.",
          "Si el test pasa de forma sospechosa, mira si lo debilitó. Si no te convence, revert.",
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
        "People who already ship code and want faster scoped changes",
        "Teams that review PRs and can require tests",
        "Exploring someone else’s repo with questions pinned to files",
      ],
      notFor: [
        "Anyone who cannot read a diff (the agent does not replace that)",
        "Production changes with no branch, test or rollback",
        "Work that lives in a browser or a CRM — that is a different kind of agent",
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
          q: "Does it replace knowing how to code?",
          a: "No. It speeds up people who can already say «this is wrong» when they see a diff. If you cannot review, you are pasting code blind.",
        },
        {
          q: "Cursor or Hermes Agent?",
          a: "Cursor is the daily IDE. Hermes is a CLI agent on your machine and, later, a gateway. Start with Cursor; add Hermes when you want the same job outside the editor.",
        },
      ],
      quickTutorial: {
        title: "A scoped change, not a rewrite",
        steps: [
          "Open the repo on a new branch. Reproduce the bug or the failing test.",
          "In Agent, write the outcome, allowed files and what it must not touch.",
          "Ask for a 5-line plan before it edits.",
          "Review the diff like a PR: names, tests, side effects.",
          "If the test passes in a suspicious way, check whether it weakened it. If you are not convinced, revert.",
        ],
      },
    },
  },
};
