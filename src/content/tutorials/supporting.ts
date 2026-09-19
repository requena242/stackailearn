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

const grokBotPrimerSteps = steps([
  {
    title: ["Comprueba el plan y baja la app", "Check the plan and install the app"],
    content: [
      "Necesitas SuperGrok Plus/Heavy o Cursor Pro+/Ultra/Teams. Abre cursor.com/bot/onboarding, instala Grok Bot en macOS o Windows y entra con la cuenta de Cursor. iOS existe; Linux de escritorio, no. Si abriste grok.com por error, cierra: es el chat de xAI, no el Bot.",
      "You need SuperGrok Plus/Heavy or Cursor Pro+/Ultra/Teams. Open cursor.com/bot/onboarding, install Grok Bot on macOS or Windows, and sign in with Cursor. iOS exists; a Linux desktop app does not. If you opened grok.com by mistake, close it: that is xAI's chat, not the Bot.",
    ],
    see: [
      "La app de escritorio de Grok Bot abierta, no grok.com. Tu cuenta de Cursor dentro y la pantalla de Meet a future teammate o el chat del Bot.",
      "The Grok Bot desktop app open, not grok.com. Your Cursor account signed in and the Meet a future teammate screen or Bot chat.",
    ],
    warning: [
      "Si no tienes el plan, para aquí: no es un trial escondido en grok.com. Regla: sin plan elegible, no hay Agent Computer.",
      "If you do not have the plan, stop here: this is not a hidden trial on grok.com. Rule: no eligible plan, no Agent Computer.",
    ],
    image: [
      "Pantalla de onboarding en cursor.com/bot/onboarding o el welcome de la app de escritorio.",
      "Onboarding at cursor.com/bot/onboarding or the desktop welcome screen.",
    ],
  },
  {
    title: ["Crea un Bot con un solo trabajo", "Create a Bot with one job"],
    content: [
      "En Meet a future teammate elige plantilla o Create your own. Nombre, un oficio de una frase, cómo debe operar. Ejemplo: «Nunca cambies producción; separa evidencia de hipótesis; el impacto primero». Un Bot catch-all aprende peor y mezcla contexto de CRM con incidentes.",
      "In Meet a future teammate pick a template or Create your own. Name, a one-sentence job, how it should work. Example: «Never change production; separate evidence from hypotheses; lead with impact.» A catch-all Bot learns worse and blends CRM context with incidents.",
    ],
    see: [
      "Ficha del Bot con un oficio de una frase, no una lista de diez roles. La regla de no-producción visible.",
      "Bot profile with a one-sentence job, not a ten-role list. The no-production rule visible.",
    ],
    pro: [
      "La frase «nunca cambies producción» evita más desastres que cualquier integración.",
      "«Never change production» prevents more disasters than any integration.",
    ],
    warning: [
      "Si el oficio tiene más de una frase o mezcla «CRM + código + redacción», para y divide en dos Bots.",
      "If the job is more than one sentence or mixes «CRM + code + writing», stop and split into two Bots.",
    ],
    image: [
      "Formulario Create your own con nombre, oficio y la regla de no-producción.",
      "Create your own form with name, job and the no-production rule.",
    ],
  },
  {
    title: ["Redacta el handoff en cinco piezas", "Write the handoff in five parts"],
    content: [
      "Escribe: (1) Resultado, (2) Fuentes, (3) Límites, (4) Entregable, (5) Cuándo parar a pedirte OK. Test de 5 minutos sin logins: adjunta un PDF interno y pide cinco viñetas + fechas, decisiones y preguntas abiertas, citando la sección. Que no toque el original.",
      "Write: (1) Outcome, (2) Sources, (3) Limits, (4) Deliverable, (5) When to stop for your OK. Five-minute test with no logins: attach an internal PDF and ask for five bullets plus dates, decisions and open questions, citing the section. Do not change the source file.",
    ],
    see: [
      "Un mensaje tuyo con las cinco etiquetas visibles y un PDF adjunto. El Bot aún no ha pedido un login.",
      "Your message with the five labels visible and a PDF attached. The Bot has not asked for a login yet.",
    ],
    tip: [
      "Si no puedes nombrar el entregable en una línea, el encargo es un chat. Redúcelo hasta que quepa.",
      "If you cannot name the deliverable in one line, the job is just a chat. Shrink it until it fits.",
    ],
    warning: [
      "Si el Bot empieza a editar el PDF sin que lo pidas, para y repite el límite «no modifiques el original».",
      "If the Bot starts editing the PDF without being asked, stop and repeat the limit «do not modify the original».",
    ],
    image: [
      "Handoff escrito en el chat del Bot con las 5 etiquetas visibles.",
      "Handoff in the Bot chat with the five labels visible.",
    ],
  },
  {
    title: ["Si pide login, toma el ordenador tú", "If it needs a login, take over the computer"],
    content: [
      "Abre Agent Computer, entra tú (password, 2FA, CAPTCHA) y devuelve el control al Bot. La sesión queda en la máquina de la cuenta: otros bots pueden reutilizarla. No pegues secretos en el chat —ni contraseñas, ni códigos 2FA, ni tokens.",
      "Open Agent Computer, sign in yourself (password, 2FA, CAPTCHA) and return control to the Bot. The session stays on the account machine so other bots can reuse it. Do not paste secrets in chat — no passwords, 2FA codes or tokens.",
    ],
    see: [
      "Tú en el teclado de Agent Computer, el Bot en pausa, sin contraseñas en el hilo del chat.",
      "You at the Agent Computer keyboard, Bot paused, no passwords in the chat thread.",
    ],
    warning: [
      "La máquina es compartida. Cierra sesiones que no quieras heredar. Regla: si no reconoces la app abierta, ciérrala antes de devolver el control.",
      "The machine is shared. Close sessions you do not want other bots to inherit. Rule: if you do not recognize the open app, close it before returning control.",
    ],
    image: [
      "Ventana Agent Computer en una pantalla de login, chat del Bot al lado sin secretos.",
      "Agent Computer on a login screen, Bot chat beside it with no secrets.",
    ],
  },
  {
    title: ["Revisa el entregable antes de aprobar", "Review the deliverable before you approve"],
    content: [
      "Cuando el Bot termine, mira el entregable como si fuera de un becario: fechas, enlaces, decisiones abiertas, y si tocó algo fuera del alcance. Si falta una pieza del handoff, pide corrección antes de decir OK. No apruebes a ciegas.",
      "When the Bot finishes, read the deliverable like it came from an intern: dates, links, open decisions, and whether it touched anything outside scope. If a handoff piece is missing, ask for a fix before you say OK. Do not approve blind.",
    ],
    see: [
      "El entregable con las cinco viñetas (o el formato pedido), sección Decisions needed si la pediste, y ningún cambio en el PDF original.",
      "The deliverable with five bullets (or the format you asked for), a Decisions needed section if you asked for one, and no changes to the original PDF.",
    ],
    tip: [
      "Si el Bot sigue trabajando después de tu OK, no diste un punto de parada claro. La próxima vez escribe «para aquí y espera mi OK».",
      "If the Bot keeps working after your OK, you did not give a clear stop point. Next time write «stop here and wait for my OK».",
    ],
    warning: [
      "Regla de decisión: si el entregable tiene acciones irreversibles (enviar email, borrar datos, publicar), para y hazlas tú.",
      "Decision rule: if the deliverable includes irreversible actions (send email, delete data, publish), stop and do them yourself.",
    ],
    image: [
      "Entregable del Bot en el chat con viñetas y sección Decisions needed, PDF original intacto.",
      "Bot deliverable in chat with bullets and Decisions needed section, original PDF untouched.",
    ],
  },
  {
    title: ["Convierte el formato estable en routine", "Turn a stable format into a routine"],
    content: [
      "Di la preferencia: «Cinco viñetas, enlaces inline, sección Decisions needed». Cuando el proceso se repita dos veces igual con el mismo OK, pide skill o routine. Ahí deja de ser un chat y se convierte en un teammate con memoria.",
      "State the preference: «Five bullets, inline links, a Decisions needed section.» When the path repeats twice the same way with the same OK, ask for a skill or routine. That is when it stops being a chat and becomes a teammate with memory.",
    ],
    see: [
      "Una skill/routine guardada con el mismo formato que acabas de aprobar dos veces.",
      "A saved skill/routine with the same format you just approved twice.",
    ],
    tip: [
      "No guardes routine hasta que el formato haya sobrevivido dos ejecuciones sin cambios grandes.",
      "Do not save a routine until the format survived two runs without major changes.",
    ],
    image: [
      "Pantalla de skill o routine con el formato de cinco viñetas.",
      "Skill or routine screen with the five-bullet format.",
    ],
  },
]);

export const grokBotPrimer: Tutorial = {
  id: "grok-bot-primer-teammate",
  slug: "grok-bot-primer-teammate",
  category: "productivity",
  level: "advanced",
  estimatedTime: 18,
  publishedAt: "2026-08-25",
  lastUpdated: "2026-09-19",
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
        "Comprobar el plan e instalar la app correcta (no grok.com)",
        "Crear un Bot con un solo oficio y reglas de no-producción",
        "Escribir un handoff de cinco piezas con test sin logins",
        "Tomar el login tú en Agent Computer",
        "Revisar el entregable antes de aprobar",
        "Convertir el formato estable en skill o routine",
      ],
      prerequisites: [
        "SuperGrok Plus/Heavy o Cursor Pro+, Ultra o Teams",
        "macOS, Windows o iOS (no hay escritorio Linux todavía)",
        "Una tarea real con un entregable que se pueda mirar",
      ],
      steps: grokBotPrimerSteps.es,
      realUseCases: [
        { title: "Brief de pipeline", body: "El Bot entra al CRM, salta lo que ya está en secuencia y te deja borradores para aprobar. Tú firmas antes de enviar." },
        { title: "Incidente", body: "Observabilidad + capturas + «no toques producción». Impacto primero. El Bot recopila; tú decides." },
        { title: "PDF interno", body: "Sin logins. Cinco viñetas, fechas, decisiones. No reescribe el original. Ideal como primer test." },
      ],
      commonMistakes: [
        { title: "Confundir Grok Bot con grok.com", body: "El chat de xAI no tiene Agent Computer ni teammates. Si la URL es grok.com, estás en la herramienta equivocada." },
        { title: "Un Bot que hace de todo", body: "El contexto se diluye. Un oficio por Bot." },
        { title: "Contraseñas en el chat", body: "El login se hace en Agent Computer, contigo al teclado." },
        { title: "Sin punto de revisión", body: "Si no dices cuándo parar, el Bot sigue. Escribe «para aquí y espera mi OK»." },
        { title: "Aprobar sin leer el entregable", body: "El Bot puede tocar fuera del alcance o inventar fechas. Revisa como un PR." },
      ],
      conclusion:
        "Cuando el handoff se convierte en routine, dejas de hablar con una IA y pasas a tener un teammate con memoria. Grok el chat sigue en grok.com; no los mezcles. Si no tienes plan elegible o el trabajo es solo una pregunta, para antes de instalar.",
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
        "Check the plan and install the right app (not grok.com)",
        "Create a Bot with one job and a no-production rule",
        "Write a five-part handoff with a no-login test",
        "Take over the login in Agent Computer",
        "Review the deliverable before you approve",
        "Turn a stable format into a skill or routine",
      ],
      prerequisites: [
        "SuperGrok Plus/Heavy or Cursor Pro+, Ultra or Teams",
        "macOS, Windows or iOS (no Linux desktop yet)",
        "A real task with a deliverable you can look at",
      ],
      steps: grokBotPrimerSteps.en,
      realUseCases: [
        { title: "Pipeline brief", body: "The Bot enters the CRM, skips what is already in sequence and leaves drafts for you to approve. You sign before sending." },
        { title: "Incident", body: "Observability + screenshots + «do not touch production». Impact first. The Bot collects; you decide." },
        { title: "Internal PDF", body: "No logins. Five bullets, dates, decisions. It does not rewrite the original. Ideal as a first test." },
      ],
      commonMistakes: [
        { title: "Confusing Grok Bot with grok.com", body: "xAI's chat has no Agent Computer or teammates. If the URL is grok.com, you are in the wrong tool." },
        { title: "A Bot that does everything", body: "Context thins out. One job per Bot." },
        { title: "Passwords in chat", body: "Login happens in Agent Computer, with you at the keyboard." },
        { title: "No review point", body: "If you do not say when to stop, the Bot keeps going. Write «stop here and wait for my OK»." },
        { title: "Approving without reading the deliverable", body: "The Bot may touch outside scope or invent dates. Review it like a PR." },
      ],
      conclusion:
        "When the handoff becomes a routine, you stop chatting with an AI and start having a teammate with memory. Grok the chat stays on grok.com. Do not mix them. If you do not have an eligible plan or the job is just a question, stop before you install.",
      nextSteps: [
        "Run the same job twice and save the routine.",
        "A second Bot only if the job is different.",
        "If you want the agent on your machine, continue with Hermes.",
      ],
      takeaway: "One job, a handoff with an OK, you own the logins. Then a skill or routine.",
    },
  ),
};
