import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "hermes-agent-primer-flujo";

export const hermesAgentPrimer: Tutorial = {
  id: slug,
  slug,
  category: "code",
  level: "advanced",
  estimatedTime: 18,
  publishedAt: "2026-08-25",
  lastUpdated: "2026-08-26",
  toolsUsed: ["hermes-agent", "cursor"],
  relatedTutorials: ["cursor-como-ide-con-ia", "grok-bot-primer-teammate"],
  tags: ["hermes", "cli", "nous", "agente-local"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Terminal con hermes setup y un chat que responde",
      caption: "Primero un chat que contesta. El gateway va el segundo día.",
      hint: "Hero: terminal con hermes setup OK y un hilo que resume el directorio.",
    },
    en: {
      alt: "Terminal with hermes setup and a chat that replies",
      caption: "First a chat that answers. The gateway is day two.",
      hint: "Hero: terminal with hermes setup OK and a thread that summarizes the directory.",
    },
  }),
  copy: {
    es: {
      title: "Cómo dejar Hermes Agent respondiendo de verdad (2026)",
      metaTitle: "Hermes Agent: de install a un chat que trabaja (2026)",
      metaDescription:
        "Install, modelo ≥64K, un chat con tools y hermes doctor. El gateway a Telegram va después, no antes.",
      excerpt:
        "Instala Hermes, elige modelo y verifica un chat con tools antes de montar Telegram o cron.",
      intro:
        "Hermes Agent (Nous Research) corre en tu máquina. El error típico es encender el gateway antes de que un chat simple responda. Este flujo sigue el quickstart actual: install → model → chat → doctor → extra.",
      problem:
        "Un bot mudo en Telegram casi nunca es «Telegram». Es un modelo corto de contexto, un setup a medias o el gateway montado encima de un CLI roto.",
      whatYouWillLearn: [
        "Instalar Hermes y comprobar que el binario existe",
        "Elegir un proveedor y un modelo con ≥64K de contexto",
        "Verificar un chat que usa tools más de un turno",
        "Diagnosticar con doctor antes de añadir capas",
        "Aplazar gateway y cron al segundo día",
      ],
      prerequisites: [
        "macOS, Linux o Windows con terminal",
        "Una API key de un proveedor o ganas de usar el portal de Nous",
        "18 minutos sin instalar Telegram a la vez",
      ],
      steps: [
        {
          title: "Instala y recarga el shell",
          content:
            "En macOS/Windows, el instalador Hermes Desktop es el camino corto. Por CLI: `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash` y luego `source ~/.zshrc` (o bashrc). Comprueba que `hermes` existe (`which hermes`).",
          whatYouShouldSee: "El comando `hermes` responde con ayuda o versión. No un «command not found».",
          warning: "Si no recargas el shell, el resto del tutorial parece «roto» y no lo está.",
          imageDescription: "Terminal con which hermes y la salida del instalador.",
        },
        {
          title: "Elige proveedor antes de pedirle magia",
          content:
            "Lanza `hermes setup` o, si quieres cero API keys, `hermes setup --portal`. Si ya tienes clave: `hermes model`. El modelo necesita al menos 64K de contexto; si no, el loop de tools se cae a mitad de frase.",
          whatYouShouldSee: "Un modelo seleccionado y una nota tuya de que el context window es ≥64K.",
          tip: "Un modelo barato y largo de contexto gana a un modelo «listo» y corto para este agente.",
          imageDescription: "Salida de hermes model o del wizard de setup con el modelo visible.",
        },
        {
          title: "Verifica un chat real, no el banner",
          content:
            "Abre `hermes` o `hermes --tui`. Pide algo comprobable: «Resume este directorio en 5 viñetas y dime el entrypoint». Éxito = responde, usa una tool si hace falta y aguanta más de un turno. Si sale vacío, no sigas: `hermes model` otra vez.",
          whatYouShouldSee: "Un resumen del directorio actual, no un saludo vacío.",
          warning: "Si esto falla, montar Telegram solo te da un bot mudo en otro sitio.",
          imageDescription: "TUI o chat de hermes respondiendo con viñetas del directorio.",
        },
        {
          title: "Confirma sesiones y diagnostica",
          content:
            "`hermes --continue` debe recuperar el hilo. Si no, `hermes sessions list`. Cuando algo raro: `hermes doctor` → `hermes model` → `hermes setup`. Ese orden. No apiles gateway encima.",
          whatYouShouldSee: "doctor en verde o con un fallo concreto que puedas leer. El hilo anterior reabre con --continue.",
          imageDescription: "Salida de hermes doctor y hermes --continue recuperando el chat.",
        },
        {
          title: "Capa extra solo si el CLI ya funciona",
          content:
            "Entonces sí: `hermes gateway setup` para Telegram/Slack, `hermes skills browse`, `hermes tools` para recortar permisos. Para no ejecutar comandos en crudo en tu Mac: `hermes config set terminal.backend docker`.",
          whatYouShouldSee: "El chat local sigue funcionando después de añadir el extra. Si el local se rompe, deshaz el extra.",
          proTip: "Cron y gateway son el segundo día. El primero es un chat que usa tools.",
          imageDescription: "Comando de gateway o skills, con el chat local aún respondiendo en otra ventana.",
        },
      ],
      realUseCases: [
        { title: "Resumen de un repo local", body: "El agente lista el árbol, nombra el entrypoint y no sale de ese directorio." },
        { title: "Un script de mantenimiento", body: "Un oficio, un directorio, permisos recortados. Luego, si hace falta, el gateway." },
        { title: "El mismo oficio que en Cursor, fuera del IDE", body: "Cuando el cambio ya no es un diff sino un agente que vive en el shell." },
      ],
      commonMistakes: [
        { title: "Gateway el primer día", body: "Si el CLI no habla, Telegram tampoco. Doctor primero." },
        { title: "Modelo de 8K o 32K", body: "El tool loop se cae. Sube el contexto antes de culpar a Hermes." },
        { title: "Permisos abiertos «para que funcione»", body: "Recorta tools cuando el chat ya responde, no al revés." },
      ],
      conclusion:
        "Hermes es un agente en tu máquina, no un IDE y no un teammate en la nube. Un proveedor, un chat que usa tools, doctor en verde. El resto espera.",
      nextSteps: [
        "Repite un segundo encargo local mañana.",
        "Si el trabajo es un diff en el repo, vuelve a Cursor.",
        "Si el trabajo es un navegador en la nube, eso es Grok Bot.",
      ],
      takeaway: "Install, modelo largo, chat que usa tools, doctor. Gateway el segundo día.",
    },
    en: {
      title: "How to get Hermes Agent actually answering (2026)",
      metaTitle: "Hermes Agent: from install to a chat that works (2026)",
      metaDescription:
        "Install, a ≥64K model, a tool-using chat and hermes doctor. The Telegram gateway comes after, not before.",
      excerpt:
        "Install Hermes, pick a model and verify a tool-using chat before you add Telegram or cron.",
      intro:
        "Hermes Agent (Nous Research) runs on your machine. The usual failure is turning on the gateway before a plain chat replies. This flow follows the current quickstart: install → model → chat → doctor → extras.",
      problem:
        "A mute Telegram bot is almost never «Telegram». It is a short-context model, a half setup, or a gateway stacked on a broken CLI.",
      whatYouWillLearn: [
        "Install Hermes and confirm the binary exists",
        "Pick a provider and a model with ≥64K context",
        "Verify a chat that uses tools for more than one turn",
        "Diagnose with doctor before adding layers",
        "Leave gateway and cron for day two",
      ],
      prerequisites: [
        "macOS, Linux or Windows with a terminal",
        "A provider API key or willingness to use the Nous portal",
        "18 minutes without installing Telegram at the same time",
      ],
      steps: [
        {
          title: "Install and reload the shell",
          content:
            "On macOS/Windows, the Hermes Desktop installer is the short path. Via CLI: `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash` then `source ~/.zshrc` (or bashrc). Confirm `hermes` exists (`which hermes`).",
          whatYouShouldSee: "The `hermes` command prints help or a version. Not «command not found».",
          warning: "If you skip the reload, the rest of the tutorial looks «broken» and is not.",
          imageDescription: "Terminal with which hermes and the installer output.",
        },
        {
          title: "Pick a provider before you ask for magic",
          content:
            "Run `hermes setup` or, for zero API keys, `hermes setup --portal`. If you already have a key: `hermes model`. The model needs at least 64K context; otherwise the tool loop dies mid-sentence.",
          whatYouShouldSee: "A model selected and a note from you that the context window is ≥64K.",
          tip: "A cheap long-context model beats a «smart» short one for this agent.",
          imageDescription: "hermes model or the setup wizard with the model visible.",
        },
        {
          title: "Verify a real chat, not the banner",
          content:
            "Open `hermes` or `hermes --tui`. Ask something checkable: «Summarize this directory in 5 bullets and name the entrypoint.» Success = it replies, uses a tool if needed and lasts more than one turn. If you get empty output, stop: run `hermes model` again.",
          whatYouShouldSee: "A summary of the current directory, not an empty greeting.",
          warning: "If this fails, adding Telegram only gives you a mute bot somewhere else.",
          imageDescription: "Hermes TUI or chat answering with directory bullets.",
        },
        {
          title: "Confirm sessions and diagnose",
          content:
            "`hermes --continue` should resume the thread. If not, `hermes sessions list`. When it feels off: `hermes doctor` → `hermes model` → `hermes setup`. That order. Do not stack a gateway on top.",
          whatYouShouldSee: "doctor green or with a concrete failure you can read. The previous thread reopens with --continue.",
          imageDescription: "hermes doctor output and hermes --continue restoring the chat.",
        },
        {
          title: "Add the next layer only if the CLI already works",
          content:
            "Then: `hermes gateway setup` for Telegram/Slack, `hermes skills browse`, `hermes tools` to tighten permissions. To keep raw commands off your Mac: `hermes config set terminal.backend docker`.",
          whatYouShouldSee: "Local chat still works after the extra. If local breaks, undo the extra.",
          proTip: "Cron and gateway are day two. Day one is a chat that uses tools.",
          imageDescription: "Gateway or skills command, local chat still answering in another window.",
        },
      ],
      realUseCases: [
        { title: "Summarize a local repo", body: "The agent lists the tree, names the entrypoint and stays in that directory." },
        { title: "A maintenance script", body: "One job, one directory, tight permissions. Gateway later if needed." },
        { title: "The same job as Cursor, outside the IDE", body: "When the change is no longer a diff but an agent that lives in the shell." },
      ],
      commonMistakes: [
        { title: "Gateway on day one", body: "If the CLI does not talk, Telegram will not either. Doctor first." },
        { title: "An 8K or 32K model", body: "The tool loop falls over. Raise context before you blame Hermes." },
        { title: "Open permissions «so it works»", body: "Tighten tools after the chat already answers, not the other way around." },
      ],
      conclusion:
        "Hermes is an agent on your machine, not an IDE and not a cloud teammate. One provider, one tool-using chat, doctor green. Everything else can wait.",
      nextSteps: [
        "Run a second local job tomorrow.",
        "If the work is a repo diff, go back to Cursor.",
        "If the work is a cloud browser, that is Grok Bot.",
      ],
      takeaway: "Install, long-context model, tool-using chat, doctor. Gateway on day two.",
    },
  },
};
