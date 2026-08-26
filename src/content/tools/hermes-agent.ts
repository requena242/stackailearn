import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "hermes-agent";

export const hermesAgent: Tool = {
  id: slug,
  slug,
  name: "Hermes Agent",
  vendor: "Nous Research",
  officialUrl: "https://hermes-agent.nousresearch.com",
  category: "code",
  pricing: "free",
  featured: true,
  accent: "#E879F9",
  initials: "HA",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.3,
  ratingCount: 160,
  lastUpdated: "2026-08-26",
  difficulty: "advanced",
  platforms: ["macos", "linux", "windows", "cli"],
  useTypes: ["code", "automate"],
  tags: ["cli", "agente-local", "nous", "gateway", "terminal"],
  alternatives: ["cursor", "grok-bot", "chatgpt"],
  relatedTools: ["cursor", "grok-bot", "claude"],
  relatedTutorials: ["hermes-agent-primer-flujo", "cursor-como-ide-con-ia"],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Terminal con hermes setup y un chat que responde",
        caption: "Primero un chat que contesta. El gateway va después.",
        hint: "Hero 1600×900: terminal con `hermes setup` completado y un hilo `hermes` respondiendo en local.",
      },
      en: {
        alt: "Terminal with hermes setup and a chat that replies",
        caption: "First a chat that answers. The gateway comes later.",
        hint: "Hero 1600×900: terminal with finished `hermes setup` and a local `hermes` thread that replies.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Agente CLI de Nous Research en tu máquina. Gratis el software; el modelo lo pagas tú.",
      fullDescription:
        "Hermes Agent es un agente de código abierto que corre en tu terminal. Habla con un proveedor (o un modelo local), usa herramientas y, cuando ya funciona, puede exponerse por un gateway (Telegram, Slack). No es un IDE y no es Grok Bot.\n\nEl orden que no rompe el setup: instalar, `hermes setup` (o `--portal`), elegir modelo con contexto ≥64K, verificar un chat real, `hermes doctor`. Solo entonces `hermes gateway setup`. Si montas el gateway antes, el síntoma habitual es un bot mudo.",
      subcategory: "Agente CLI local",
      pricingDetails:
        "El agente es gratis (instalador o `curl … | bash` desde hermes-agent.nousresearch.com). Pagas el proveedor del modelo (OpenAI, Anthropic, Groq, local, etc.) o el hardware si vas en local. No hay plan «Hermes Pro».",
      bestFor: [
        "Quien vive en la terminal y quiere un agente en su máquina",
        "Flujos que luego saldrán a Telegram/Slack, no al revés",
        "Gente que ya sabe elegir un modelo y una API key",
      ],
      notFor: [
        "Quien quiere un IDE con diffs (Cursor)",
        "Quien quiere un teammate con navegador en la nube (Grok Bot)",
        "Setup «haz clic y funciona» sin tocar el shell",
      ],
      pros: [
        "Software libre; tú eliges el modelo",
        "Vive en tu máquina: archivos y terminal reales",
        "Gateway cuando el chat local ya es estable",
        "Buenos comandos de diagnóstico (`doctor`, `--continue`)",
      ],
      cons: [
        "Tienes que autenticar un proveedor (o montar local)",
        "El modelo necesita ≥64K de contexto para el tool loop",
        "Montar gateway y cron antes de que el chat funcione es la forma clásica de romperlo",
        "Menos guiado que Cursor; el error queda en el log",
      ],
      keyFeatures: [
        "CLI: setup, chat, continue, doctor",
        "Elección de proveedor y modelo",
        "Herramientas locales (archivos, shell) según config",
        "Gateway opcional a mensajería",
        "Instalador de escritorio o script",
      ],
      faq: [
        {
          q: "¿Es gratis de verdad?",
          a: "El agente sí. El modelo no, salvo que uses uno local. Cuenta tokens como en cualquier API.",
        },
        {
          q: "¿Por qué no me contesta en Telegram?",
          a: "Casi siempre: el chat CLI aún no funciona, el modelo es corto de contexto, o el gateway se montó primero. Vuelve a `hermes` en local y a `hermes doctor`.",
        },
      ],
      quickTutorial: {
        title: "De cero a un chat que responde",
        steps: [
          "Instala con el Desktop installer o: curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash",
          "Recarga el shell y ejecuta hermes setup (o hermes setup --portal).",
          "Elige proveedor con hermes model y verifica un chat real.",
          "Prueba hermes --continue y hermes doctor antes de añadir extras.",
          "Solo entonces: hermes gateway setup si lo quieres en Telegram/Slack.",
        ],
      },
    },
    en: {
      shortDescription:
        "Nous Research’s CLI agent on your machine. The software is free; you pay for the model.",
      fullDescription:
        "Hermes Agent is an open-source agent that runs in your terminal. It talks to a provider (or a local model), uses tools and, once it works, can sit behind a gateway (Telegram, Slack). It is not an IDE and it is not Grok Bot.\n\nThe order that does not break setup: install, `hermes setup` (or `--portal`), pick a model with ≥64K context, verify a real chat, `hermes doctor`. Only then `hermes gateway setup`. If you mount the gateway first, the usual symptom is a mute bot.",
      subcategory: "Local CLI agent",
      pricingDetails:
        "The agent is free (desktop installer or `curl … | bash` from hermes-agent.nousresearch.com). You pay the model provider (OpenAI, Anthropic, Groq, local, etc.) or the hardware if you run local. There is no «Hermes Pro» plan.",
      bestFor: [
        "People who live in the terminal and want an agent on their machine",
        "Flows that will later go to Telegram/Slack — not the other way around",
        "Anyone who can already pick a model and an API key",
      ],
      notFor: [
        "Anyone who wants an IDE with diffs (Cursor)",
        "Anyone who wants a teammate with a cloud browser (Grok Bot)",
        "A click-and-done setup with no shell",
      ],
      pros: [
        "Free software; you choose the model",
        "Lives on your machine: real files and a real terminal",
        "Gateway only after local chat is stable",
        "Solid diagnostics (`doctor`, `--continue`)",
      ],
      cons: [
        "You must auth a provider (or go local)",
        "The model needs ≥64K context for the tool loop",
        "Adding gateway and cron before chat works is how it breaks",
        "Less guided than Cursor; failures live in the log",
      ],
      keyFeatures: [
        "CLI: setup, chat, continue, doctor",
        "Provider and model picker",
        "Local tools (files, shell) depending on config",
        "Optional messaging gateway",
        "Desktop installer or script",
      ],
      faq: [
        {
          q: "Is it actually free?",
          a: "The agent is. The model is not, unless you run one locally. Count tokens like any other API.",
        },
        {
          q: "Why is Telegram silent?",
          a: "Almost always: CLI chat does not work yet, the model context is too short, or the gateway was set up first. Go back to local `hermes` and `hermes doctor`.",
        },
      ],
      quickTutorial: {
        title: "From zero to a chat that replies",
        steps: [
          "Install with the Desktop installer or: curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash",
          "Reload the shell and run hermes setup (or hermes setup --portal).",
          "Pick a provider with hermes model and verify a real chat.",
          "Try hermes --continue and hermes doctor before adding extras.",
          "Only then: hermes gateway setup if you want it on Telegram/Slack.",
        ],
      },
    },
  },
};
