import { tutorialHero } from "@/content/media";
import type { Tutorial, TutorialCopy, TutorialStep } from "@/types/content";

function steps(
  items: Array<{
    title: [string, string];
    content: [string, string];
    see: [string, string];
    tip?: [string, string];
    warning?: [string, string];
    pro?: [string, string];
    image: [string, string];
  }>,
): { es: TutorialStep[]; en: TutorialStep[] } {
  return {
    es: items.map((item) => ({
      title: item.title[0],
      content: item.content[0],
      whatYouShouldSee: item.see[0],
      tip: item.tip?.[0],
      warning: item.warning?.[0],
      proTip: item.pro?.[0],
      imageDescription: item.image[0],
    })),
    en: items.map((item) => ({
      title: item.title[1],
      content: item.content[1],
      whatYouShouldSee: item.see[1],
      tip: item.tip?.[1],
      warning: item.warning?.[1],
      proTip: item.pro?.[1],
      imageDescription: item.image[1],
    })),
  };
}

function pair(es: TutorialCopy, en: TutorialCopy) {
  return { es, en };
}

export const grokBotPrimer: Tutorial = {
  id: "grok-bot-primer-teammate",
  slug: "grok-bot-primer-teammate",
  category: "productivity",
  level: "advanced",
  estimatedTime: 16,
  publishedAt: "2026-08-25",
  lastUpdated: "2026-08-26",
  toolsUsed: ["grok-bot", "hermes-agent", "cursor"],
  relatedTutorials: ["hermes-agent-primer-flujo", "cursor-como-ide-con-ia"],
  tags: ["grok-bot", "teammate", "xai"],
  hero: tutorialHero("grok-bot-primer-teammate", {
    es: {
      alt: "Grok Bot con un teammate y Agent Computer",
      caption: "Un oficio. Un punto de revisión. Tú firmas los logins.",
      hint: "Hero: app de escritorio, chat del Bot y ventana Agent Computer.",
    },
    en: {
      alt: "Grok Bot with a teammate and Agent Computer",
      caption: "One job. One review point. You own the logins.",
      hint: "Hero: desktop app, Bot chat and Agent Computer window.",
    },
  }),
  copy: pair(
    {
      title: "Cómo crear tu primer teammate en Grok Bot (2026)",
      metaTitle: "Grok Bot: primer teammate en 2026",
      metaDescription:
        "Plan elegible, un oficio, un handoff con punto de revisión y logins en Agent Computer. No es grok.com.",
      excerpt:
        "Instala la app, crea un Bot con un solo trabajo y haz un handoff que termina en las apps reales.",
      intro:
        "Grok Bot no es el chat de grok.com. Es un compañero con nombre, memoria y un ordenador en la nube. Este flujo es el de la documentación actual: plan, escritorio, primer encargo con un OK humano.",
      problem:
        "Delegar a un chat no cierra el trabajo en el CRM, el panel o el PDF. Grok Bot existe para terminar en las apps, con tu revisión. Sin oficio ni punto de parada, el Bot improvisará en la máquina compartida.",
      whatYouWillLearn: [
        "Comprobar el plan e instalar la app correcta",
        "Crear un Bot con un solo oficio y reglas de no-producción",
        "Escribir un handoff de cinco piezas",
        "Tomar el login tú en Agent Computer",
        "Convertir el formato estable en skill o routine",
      ],
      prerequisites: [
        "SuperGrok Plus/Heavy o Cursor Pro+, Ultra o Teams",
        "macOS, Windows o iOS (no hay escritorio Linux todavía)",
        "Una tarea real con un entregable que se pueda mirar",
      ],
      steps: steps([
        {
          title: ["Comprueba el plan y baja la app", "Check the plan and install the app"],
          content: [
            "Necesitas SuperGrok Plus/Heavy o Cursor Pro+/Ultra/Teams. Abre cursor.com/bot/onboarding, instala Grok Bot en macOS o Windows y entra con la cuenta de Cursor. iOS existe; Linux de escritorio, no.",
            "You need SuperGrok Plus/Heavy or Cursor Pro+/Ultra/Teams. Open cursor.com/bot/onboarding, install Grok Bot on macOS or Windows, and sign in with Cursor. iOS exists; a Linux desktop app does not.",
          ],
          see: [
            "La app de escritorio abierta, no grok.com. Tu cuenta de Cursor dentro.",
            "The desktop app open, not grok.com. Your Cursor account signed in.",
          ],
          warning: [
            "Si no tienes el plan, no sigas: no es un trial escondido en grok.com.",
            "If you do not have the plan, stop. This is not a hidden trial on grok.com.",
          ],
          image: [
            "Pantalla de onboarding en cursor.com/bot/onboarding o el welcome de la app.",
            "Onboarding at cursor.com/bot/onboarding or the desktop welcome screen.",
          ],
        },
        {
          title: ["Crea un Bot con un solo trabajo", "Create a Bot with one job"],
          content: [
            "En Meet a future teammate elige plantilla o Create your own. Nombre, un oficio, cómo debe operar. Ejemplo: «Nunca cambies producción; separa evidencia de hipótesis; el impacto primero». Un Bot catch-all aprende peor.",
            "In Meet a future teammate pick a template or Create your own. Name, one job, how it should work. Example: «Never change production; separate evidence from hypotheses; lead with impact.» A catch-all Bot learns worse.",
          ],
          see: [
            "Ficha del Bot con un oficio de una frase, no una lista de diez roles.",
            "Bot profile with a one-sentence job, not a ten-role list.",
          ],
          pro: [
            "La frase «nunca cambies producción» evita más desastres que cualquier integración.",
            "«Never change production» prevents more disasters than any integration.",
          ],
          image: [
            "Formulario Create your own con nombre, oficio y la regla de no-producción.",
            "Create your own form with name, job and the no-production rule.",
          ],
        },
        {
          title: ["Redacta el handoff en cinco piezas", "Write the handoff in five parts"],
          content: [
            "Resultado, fuentes, límites, entregable y cuándo parar a pedirte OK. Test de 5 minutos sin logins: adjunta un PDF y pide cinco viñetas + fechas, decisiones y preguntas abiertas, citando la sección. Que no toque el original.",
            "Outcome, sources, limits, deliverable and when to stop for you. Five-minute test with no logins: attach a PDF and ask for five bullets plus dates, decisions and open questions, citing the section. Do not change the source file.",
          ],
          see: [
            "Un mensaje tuyo con las cinco piezas y un PDF adjunto. El Bot aún no ha pedido un login.",
            "Your message with the five parts and a PDF attached. The Bot has not asked for a login yet.",
          ],
          tip: [
            "Si no puedes nombrar el entregable, el encargo es un chat. Redúcelo.",
            "If you cannot name the deliverable, the job is just a chat. Shrink it.",
          ],
          image: [
            "Handoff escrito en el chat del Bot con las 5 etiquetas visibles.",
            "Handoff in the Bot chat with the five labels visible.",
          ],
        },
        {
          title: ["Si pide login, toma el ordenador tú", "If it needs a login, take over the computer"],
          content: [
            "Abre Agent Computer, entra (password, 2FA, CAPTCHA) y devuelve el control. La sesión queda en la máquina de la cuenta: otros bots pueden reutilizarla. No pegues secretos en el chat.",
            "Open Agent Computer, sign in (password, 2FA, CAPTCHA) and return control. The session stays on the account machine so other bots can reuse it. Do not paste secrets in chat.",
          ],
          see: [
            "Tú en el teclado de Agent Computer, el Bot en pausa, sin contraseñas en el hilo.",
            "You at the Agent Computer keyboard, Bot paused, no passwords in the thread.",
          ],
          warning: [
            "La máquina es compartida. Cierra sesiones que no quieras heredar.",
            "The machine is shared. Close sessions you do not want other bots to inherit.",
          ],
          image: [
            "Ventana Agent Computer en una pantalla de login, chat del Bot al lado sin secretos.",
            "Agent Computer on a login screen, Bot chat beside it with no secrets.",
          ],
        },
        {
          title: ["Convierte el formato estable en routine", "Turn a stable format into a routine"],
          content: [
            "Di la preferencia: «Cinco viñetas, enlaces inline, sección Decisions needed». Cuando el proceso se repita dos veces igual, pide skill o routine. Ahí deja de ser un chat.",
            "State the preference: «Five bullets, inline links, a Decisions needed section.» When the path repeats twice the same way, ask for a skill or routine. That is when it stops being a chat.",
          ],
          see: [
            "Una skill/routine guardada con el mismo formato que acabas de aprobar.",
            "A saved skill/routine with the same format you just approved.",
          ],
          image: [
            "Pantalla de skill o routine con el formato de cinco viñetas.",
            "Skill or routine screen with the five-bullet format.",
          ],
        },
      ]).es,
      realUseCases: [
        { title: "Brief de pipeline", body: "El Bot entra al CRM, salta lo que ya está en secuencia y te deja borradores para aprobar." },
        { title: "Incidente", body: "Observabilidad + capturas + «no toques producción». Impacto primero." },
        { title: "PDF interno", body: "Sin logins. Cinco viñetas, fechas, decisiones. No reescribe el original." },
      ],
      commonMistakes: [
        { title: "Un Bot que hace de todo", body: "El contexto se diluye. Un oficio por Bot." },
        { title: "Contraseñas en el chat", body: "El login se hace en Agent Computer, contigo al teclado." },
        { title: "Sin punto de revisión", body: "Si no dices cuándo parar, el Bot sigue." },
      ],
      conclusion:
        "Cuando el handoff se convierte en routine, dejas de hablar con una IA y pasas a tener un teammate con memoria. Grok el chat sigue en grok.com; no los mezcles.",
      nextSteps: [
        "Repite el mismo encargo dos veces y guarda la routine.",
        "Un segundo Bot solo si el oficio es otro.",
        "Si quieres el agente en tu máquina, sigue con Hermes.",
      ],
      takeaway: "Un oficio, un handoff con OK, tú firmas los logins. Luego skill o routine.",
    },
    {
      title: "How to create your first Grok Bot teammate (2026)",
      metaTitle: "Grok Bot: first teammate in 2026",
      metaDescription:
        "Eligible plan, one job, a handoff with a review point, logins in Agent Computer. Not grok.com.",
      excerpt:
        "Install the app, create a Bot with one job, and hand off work that finishes in real apps.",
      intro:
        "Grok Bot is not the grok.com chat. It is a named teammate with memory and a cloud computer. This flow matches current docs: plan, desktop, first job with a human OK.",
      problem:
        "Delegating to a chat does not finish the work in the CRM, the admin or the PDF. Grok Bot exists to finish in real apps, with your review. Without a job and a stop point, the Bot will improvise on the shared machine.",
      whatYouWillLearn: [
        "Check the plan and install the right app",
        "Create a Bot with one job and a no-production rule",
        "Write a five-part handoff",
        "Take over the login in Agent Computer",
        "Turn a stable format into a skill or routine",
      ],
      prerequisites: [
        "SuperGrok Plus/Heavy or Cursor Pro+, Ultra or Teams",
        "macOS, Windows or iOS (no Linux desktop yet)",
        "A real task with a deliverable you can look at",
      ],
      steps: steps([
        {
          title: ["Comprueba el plan y baja la app", "Check the plan and install the app"],
          content: [
            "Necesitas SuperGrok Plus/Heavy o Cursor Pro+/Ultra/Teams. Abre cursor.com/bot/onboarding.",
            "You need SuperGrok Plus/Heavy or Cursor Pro+/Ultra/Teams. Open cursor.com/bot/onboarding, install Grok Bot on macOS or Windows, and sign in with Cursor. iOS exists; a Linux desktop app does not.",
          ],
          see: [
            "La app de escritorio abierta, no grok.com.",
            "The desktop app open, not grok.com. Your Cursor account signed in.",
          ],
          warning: [
            "Si no tienes el plan, no sigas.",
            "If you do not have the plan, stop. This is not a hidden trial on grok.com.",
          ],
          image: [
            "Onboarding de Grok Bot.",
            "Onboarding at cursor.com/bot/onboarding or the desktop welcome screen.",
          ],
        },
        {
          title: ["Crea un Bot con un solo trabajo", "Create a Bot with one job"],
          content: [
            "Nombre, un oficio, cómo debe operar.",
            "In Meet a future teammate pick a template or Create your own. Name, one job, how it should work. Example: «Never change production; separate evidence from hypotheses; lead with impact.» A catch-all Bot learns worse.",
          ],
          see: [
            "Ficha del Bot con un oficio.",
            "Bot profile with a one-sentence job, not a ten-role list.",
          ],
          pro: [
            "Nunca cambies producción.",
            "«Never change production» prevents more disasters than any integration.",
          ],
          image: [
            "Formulario Create your own.",
            "Create your own form with name, job and the no-production rule.",
          ],
        },
        {
          title: ["Redacta el handoff en cinco piezas", "Write the handoff in five parts"],
          content: [
            "Resultado, fuentes, límites, entregable, cuándo parar.",
            "Outcome, sources, limits, deliverable and when to stop for you. Five-minute test with no logins: attach a PDF and ask for five bullets plus dates, decisions and open questions, citing the section. Do not change the source file.",
          ],
          see: [
            "Handoff con cinco piezas.",
            "Your message with the five parts and a PDF attached. The Bot has not asked for a login yet.",
          ],
          tip: [
            "Nombra el entregable.",
            "If you cannot name the deliverable, the job is just a chat. Shrink it.",
          ],
          image: [
            "Handoff en el chat.",
            "Handoff in the Bot chat with the five labels visible.",
          ],
        },
        {
          title: ["Si pide login, toma el ordenador tú", "If it needs a login, take over the computer"],
          content: [
            "Agent Computer, tú al teclado.",
            "Open Agent Computer, sign in (password, 2FA, CAPTCHA) and return control. The session stays on the account machine so other bots can reuse it. Do not paste secrets in chat.",
          ],
          see: [
            "Tú en Agent Computer.",
            "You at the Agent Computer keyboard, Bot paused, no passwords in the thread.",
          ],
          warning: [
            "Máquina compartida.",
            "The machine is shared. Close sessions you do not want other bots to inherit.",
          ],
          image: [
            "Agent Computer en login.",
            "Agent Computer on a login screen, Bot chat beside it with no secrets.",
          ],
        },
        {
          title: ["Convierte el formato estable en routine", "Turn a stable format into a routine"],
          content: [
            "Skill o routine cuando se repita.",
            "State the preference: «Five bullets, inline links, a Decisions needed section.» When the path repeats twice the same way, ask for a skill or routine. That is when it stops being a chat.",
          ],
          see: [
            "Routine guardada.",
            "A saved skill/routine with the same format you just approved.",
          ],
          image: [
            "Pantalla de routine.",
            "Skill or routine screen with the five-bullet format.",
          ],
        },
      ]).en,
      realUseCases: [
        { title: "Pipeline brief", body: "The Bot enters the CRM, skips what is already in sequence and leaves drafts for you to approve." },
        { title: "Incident", body: "Observability + screenshots + «do not touch production». Impact first." },
        { title: "Internal PDF", body: "No logins. Five bullets, dates, decisions. It does not rewrite the original." },
      ],
      commonMistakes: [
        { title: "A Bot that does everything", body: "Context thins out. One job per Bot." },
        { title: "Passwords in chat", body: "Login happens in Agent Computer, with you at the keyboard." },
        { title: "No review point", body: "If you do not say when to stop, the Bot keeps going." },
      ],
      conclusion:
        "When the handoff becomes a routine, you stop chatting with an AI and start having a teammate with memory. Grok the chat stays on grok.com. Do not mix them.",
      nextSteps: [
        "Run the same job twice and save the routine.",
        "A second Bot only if the job is different.",
        "If you want the agent on your machine, continue with Hermes.",
      ],
      takeaway: "One job, a handoff with an OK, you own the logins. Then a skill or routine.",
    },
  ),
};
