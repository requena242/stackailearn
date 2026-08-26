import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "grok-bot";

export const grokBot: Tool = {
  id: slug,
  slug,
  name: "Grok Bot",
  vendor: "xAI",
  officialUrl: "https://cursor.com/bot/onboarding",
  category: "productivity",
  pricing: "paid",
  featured: true,
  accent: "#F59E0B",
  initials: "GB",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.4,
  ratingCount: 210,
  lastUpdated: "2026-08-26",
  difficulty: "advanced",
  platforms: ["macos", "windows", "ios"],
  useTypes: ["automate", "research", "write"],
  tags: ["teammate", "ordenador-nube", "rutinas", "xai", "cursor"],
  alternatives: ["hermes-agent", "cursor", "chatgpt"],
  relatedTools: ["hermes-agent", "cursor", "grok"],
  relatedTutorials: ["grok-bot-primer-teammate", "hermes-agent-primer-flujo"],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "App de Grok Bot con un teammate y el Agent Computer",
        caption: "No es grok.com. Es un compañero con memoria y una máquina compartida.",
        hint: "Hero 1600×900: escritorio de Grok Bot con el perfil del Bot y la ventana Agent Computer al fondo.",
      },
      en: {
        alt: "Grok Bot app with a teammate and Agent Computer",
        caption: "This is not grok.com. It is a teammate with memory and a shared machine.",
        hint: "Hero 1600×900: Grok Bot desktop with the Bot profile and the Agent Computer window behind it.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Un teammate con nombre, memoria y un ordenador en la nube. No es el chat de Grok.",
      fullDescription:
        "Grok Bot (xAI, onboarding en cursor.com/bot/onboarding) es un compañero que opera un ordenador remoto: navegador, archivos, terminal. Varios bots de la misma cuenta comparten esa máquina. No es grok.com ni el Grok que vive en X.\n\nHace falta un plan elegible (SuperGrok Plus/Heavy o Cursor Pro+, Ultra o Teams), la app de escritorio (macOS/Windows; iOS existe; Linux de escritorio aún no) y un oficio único por bot. Los logins (2FA, CAPTCHA) los haces tú en Agent Computer. No le pases secretos por el chat.",
      subcategory: "Teammate en la nube",
      pricingDetails:
        "No hay plan gratuito. Entra con SuperGrok Plus o Heavy, o con Cursor Pro+, Ultra o Teams. El onboarding oficial está en cursor.com/bot/onboarding. El coste es el del plan de Cursor/xAI, no un SKU aparte de «minutos de bot».",
      bestFor: [
        "Quien ya delega trabajo y quiere un oficio concreto (research, ops, inbox)",
        "Tareas que terminan en apps reales (docs, mail, un panel web)",
        "Equipos Cursor que quieren un teammate además del IDE",
      ],
      notFor: [
        "Un chat rápido de texto: usa grok.com o ChatGPT",
        "Código en tu repo local: usa Cursor o Hermes",
        "Quien no puede sentarse a hacer el login cuando el bot se atasca",
      ],
      pros: [
        "Termina trabajo en herramientas reales, no solo en un markdown",
        "Memoria y oficio por bot; varios bots, una máquina",
        "Rutinas / skills cuando el flujo ya es estable",
        "Tú controlas los logins y el punto de revisión",
      ],
      cons: [
        "De pago y con onboarding específico; no es «abrir una web»",
        "La máquina es compartida: un descuido de sesión afecta a otros bots",
        "Sin un oficio claro, el bot improvisa y ensucia el contexto",
        "Linux de escritorio aún no; iOS no sustituye al de escritorio para el primer setup",
      ],
      keyFeatures: [
        "Bots con nombre, instrucciones y memoria",
        "Agent Computer (navegador, archivos, terminal) en la nube",
        "Handoffs con punto de revisión",
        "Skills / routines cuando el proceso se repite",
        "App de escritorio e iOS; onboarding vía Cursor",
      ],
      faq: [
        {
          q: "¿Es lo mismo que Grok en grok.com?",
          a: "No. grok.com es un chat. Grok Bot es un teammate con un ordenador. Si solo quieres preguntar algo, no instales esto.",
        },
        {
          q: "¿Le doy mis contraseñas?",
          a: "No por el chat. Cuando pida un login, abre Agent Computer, entra tú (2FA, CAPTCHA) y devuelve el control. La sesión queda en la máquina de la cuenta.",
        },
      ],
      quickTutorial: {
        title: "Un bot, un oficio, un handoff",
        steps: [
          "Comprueba el plan y entra en cursor.com/bot/onboarding.",
          "Crea un bot con un solo trabajo y reglas de no tocar producción.",
          "Redacta el handoff: resultado, fuentes, límites, entregable, cuándo parar.",
          "Si pide login, tómalo tú en Agent Computer.",
          "Cuando el formato sea estable, conviértelo en skill o routine.",
        ],
      },
    },
    en: {
      shortDescription:
        "A named teammate with memory and a cloud computer. It is not the Grok chat.",
      fullDescription:
        "Grok Bot (xAI, onboarding at cursor.com/bot/onboarding) is a teammate that operates a remote computer: browser, files, terminal. Several bots on the same account share that machine. It is not grok.com and not the Grok that lives on X.\n\nYou need an eligible plan (SuperGrok Plus/Heavy or Cursor Pro+, Ultra or Teams), the desktop app (macOS/Windows; iOS exists; no Linux desktop yet) and one job per bot. You handle logins (2FA, CAPTCHA) in Agent Computer. Do not paste secrets in chat.",
      subcategory: "Cloud teammate",
      pricingDetails:
        "No free plan. You get in with SuperGrok Plus or Heavy, or with Cursor Pro+, Ultra or Teams. Official onboarding is cursor.com/bot/onboarding. You pay for the Cursor/xAI plan, not a separate «bot minutes» SKU.",
      bestFor: [
        "People who already delegate and want one concrete job (research, ops, inbox)",
        "Work that finishes in real apps (docs, mail, a web admin)",
        "Cursor teams that want a teammate besides the IDE",
      ],
      notFor: [
        "A quick text chat — use grok.com or ChatGPT",
        "Code in your local repo — use Cursor or Hermes",
        "Anyone who cannot sit down and take over a login when the bot gets stuck",
      ],
      pros: [
        "Finishes work in real tools, not only in a markdown file",
        "Per-bot memory and job; several bots, one machine",
        "Routines / skills once the flow is stable",
        "You own logins and the review point",
      ],
      cons: [
        "Paid, with a specific onboarding — not «open a website»",
        "The machine is shared: a sloppy session hits other bots",
        "Without a clear job, the bot improvises and dirties context",
        "No Linux desktop yet; iOS does not replace desktop for first setup",
      ],
      keyFeatures: [
        "Named bots with instructions and memory",
        "Agent Computer (browser, files, terminal) in the cloud",
        "Handoffs with a review point",
        "Skills / routines when the process repeats",
        "Desktop and iOS apps; onboarding via Cursor",
      ],
      faq: [
        {
          q: "Is this the same as Grok on grok.com?",
          a: "No. grok.com is a chat. Grok Bot is a teammate with a computer. If you only want to ask a question, do not install this.",
        },
        {
          q: "Do I give it my passwords?",
          a: "Not in chat. When it needs a login, open Agent Computer, sign in yourself (2FA, CAPTCHA) and return control. The session stays on the account machine.",
        },
      ],
      quickTutorial: {
        title: "One bot, one job, one handoff",
        steps: [
          "Check the plan and open cursor.com/bot/onboarding.",
          "Create a bot with one job and a no-production-changes rule.",
          "Write the handoff: outcome, sources, limits, deliverable, when to stop.",
          "If it needs a login, take over in Agent Computer.",
          "When the format is stable, turn it into a skill or routine.",
        ],
      },
    },
  },
};
