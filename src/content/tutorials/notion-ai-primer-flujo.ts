import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "notion-ai-primer-flujo";

export const notionAiPrimerFlujo: Tutorial = {
  id: slug,
  slug,
  category: "productivity",
  level: "beginner",
  estimatedTime: 12,
  publishedAt: "2026-08-28",
  lastUpdated: "2026-08-28",
  toolsUsed: ["notion-ai", "chatgpt", "claude"],
  relatedTutorials: ["chatgpt-primeros-pasos", "claude-escritura-larga"],
  tags: ["notion", "notion-ai", "acta", "reunion", "wiki", "productividad"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Página de reunión en Notion con el panel de IA pidiendo decisiones y dueños",
      caption: "La IA sobre la página de la reunión, no un chat vacío.",
      hint: "Hero 1600×900: página de Notion con doc de reunión y panel de AI pidiendo «decisiones + dueños + fechas + preguntas abiertas».",
    },
    en: {
      alt: "Notion meeting page with the AI panel asking for decisions and owners",
      caption: "AI on the meeting page, not an empty chat.",
      hint: "Hero 1600×900: Notion meeting doc with the AI panel asking for «decisions + owners + dates + open questions».",
    },
  }),
  copy: {
    es: {
      title: "Notion AI: un acta de reunión que se puede usar (2026)",
      metaTitle: "Notion AI: primer flujo útil en 2026",
      metaDescription:
        "Abre la página de la reunión, pide decisiones con dueños y fechas, borra lo que no se dijo y asigna tareas en la misma página. No es otro ChatGPT.",
      excerpt:
        "Usa Notion AI sobre la página de la reunión: decisiones, dueños, fechas y preguntas abiertas. Borra lo inventado y asigna en el mismo doc.",
      intro:
        "Notion AI escribe y resume encima de las páginas que ya tienes. El valor no es «un ChatGPT más»: es no copiar el contexto a otro sitio. Este flujo dura 12 minutos y produce un acta con dueños y fechas, no un resumen bonito.",
      problem:
        "La gente abre el chat de IA vacío o pide «hazme un resumen de la reunión» sin la página. Obtienen prosa genérica, dueños inventados y un texto que nadie revisa. El trabajo útil empieza en la página de la reunión.",
      whatYouWillLearn: [
        "Abrir la página de la reunión, no un chat vacío",
        "Pedir decisiones, dueños, fechas y preguntas abiertas",
        "Borrar lo que no se dijo en la reunión",
        "Asignar dueños en la misma página",
        "Sacar copy externo a ChatGPT o Claude si hace falta",
      ],
      prerequisites: [
        "Un workspace de Notion con IA activa (el plan Free sirve para probar)",
        "Una página de reunión con notas tuyas o de un compañero, aunque sean desordenadas",
        "12 minutos. Si no tienes páginas con dueño, arregla la estructura antes",
      ],
      steps: [
        {
          title: "Abre la página de la reunión, no un chat vacío",
          content:
            "Ve a la página donde ya tomaste notas de la reunión — o crea una con el título, la fecha y quién estuvo. Desde ahí invoca Notion AI (barra lateral o /AI). No abras un chat suelto ni una página en blanco: la IA necesita el contexto que ya está en el doc.",
          whatYouShouldSee:
            "La página de la reunión con tus notas visibles y el panel de Notion AI abierto sobre ese contenido.",
          warning:
            "Un chat vacío no sabe qué se dijo. Produce un acta genérica con dueños inventados.",
          imageDescription:
            "Página de Notion con título de reunión, fecha y notas en bruto; panel de IA abierto encima.",
        },
        {
          title: "Pide decisiones, dueños, fechas y preguntas abiertas",
          content:
            "Escribe algo como: «Lista solo decisiones tomadas, con dueño y fecha límite. Añade preguntas abiertas sin resolver. No hagas un resumen bonito. Si algo no está en mis notas, márcalo [NO DICHO].» Una instrucción clara. Sin «analiza la reunión».",
          whatYouShouldSee:
            "Un bloque con viñetas etiquetadas: decisiones con dueño y fecha, y una sección de preguntas abiertas. Al menos un [NO DICHO] si tus notas eran incompletas.",
          tip: "Si todo llega como un párrafo fluido, repite la instrucción: viñetas, dueños, fechas. Nada de prosa.",
          imageDescription:
            "Respuesta de Notion AI con viñetas de decisiones (dueño + fecha) y sección de preguntas abiertas.",
        },
        {
          title: "Borra lo que no se dijo",
          content:
            "Recorre cada viñeta. Si una decisión no aparece en tus notas originales, bórrala o márcala como [REVISAR]. Si la IA inventó un dueño, quítalo. Si hubo un doc de referencia en la reunión, añade el enlace ahora. El acta tiene que reflejar lo que pasó, no lo que suena bien.",
          whatYouShouldSee:
            "Un acta más corta que el primer borrador. Sin dueños fantasma. Enlaces a fuentes si existían.",
          warning:
            "Notion AI resume basura con buena cara si el workspace es caótico. Tú eres el filtro.",
          imageDescription:
            "Misma página con viñetas tachadas o borradas y un enlace añadido a un doc fuente.",
        },
        {
          title: "Asigna dueños en la misma página",
          content:
            "Convierte cada decisión con dueño en una tarea (@persona + fecha) o en una fila de una base de datos si el equipo usa una. Hazlo en la misma página del acta, no en un hilo de Slack aparte. El equipo tiene que ver el mismo doc.",
          whatYouShouldSee:
            "Menciones @ o filas de tareas con dueño y fecha en la página del acta. Todo en un solo sitio.",
          tip: "Si el dueño no estaba en la reunión, déjalo sin asignar y ponlo en preguntas abiertas.",
          imageDescription:
            "Página de acta con @menciones o filas de base de datos con dueños y fechas asignados.",
        },
        {
          title: "Marca las preguntas abiertas y cierra el acta",
          content:
            "Las preguntas sin resolver van en una sección visible — no enterradas al final. Añade quién las resuelve y para cuándo, o déjalas como [PENDIENTE]. Cuando el acta refleja lo que pasó, deja de editar. No pidas a la IA que «mejore la redacción»: eso invita a inventar.",
          whatYouShouldSee:
            "Sección «Preguntas abiertas» con 1–3 ítems claros. El acta completo cabe en una pantalla.",
          proTip:
            "Un acta de una pantalla se lee. Tres páginas de resumen bonito, no.",
          imageDescription:
            "Sección de preguntas abiertas con etiquetas [PENDIENTE] y el acta completo visible sin scroll excesivo.",
        },
        {
          title: "Si hay copy externo, llévalo a ChatGPT o Claude",
          content:
            "Notion AI sirve para el acta interno. Si necesitas un anuncio para clientes, un email o un post, copia solo las tres decisiones clave — no el acta entero — a ChatGPT o Claude y redacta ahí. La prosa externa se controla mejor fuera del wiki.",
          whatYouShouldSee:
            "Un borrador en otro sitio (ChatGPT, Claude o un doc nuevo) con las decisiones en viñetas, no un copy-paste del acta.",
          warning:
            "Publicar el párrafo de Notion AI como comunicado externo es el mismo error que copiar un resumen de ChatGPT sin revisar.",
          imageDescription:
            "Dos ventanas: acta en Notion con tres decisiones resaltadas y composer de ChatGPT o Claude al lado.",
        },
      ],
      realUseCases: [
        {
          title: "Standup semanal de producto",
          body: "Notas en bruto en la página. IA saca decisiones y bloqueos. Borras lo inventado. El equipo ve el acta en el mismo doc.",
        },
        {
          title: "Reunión con un cliente",
          body: "Acta interna en Notion con dueños. El email al cliente se escribe en Claude con solo los acuerdos confirmados.",
        },
        {
          title: "Retro de sprint",
          body: "Pides preguntas abiertas y acciones con fecha. Las tareas quedan en la misma página vinculada al sprint.",
        },
      ],
      commonMistakes: [
        {
          title: "Empezar en un chat vacío",
          body: "Sin contexto, la IA inventa decisiones. Abre la página de la reunión primero.",
        },
        {
          title: "Pedir un resumen bonito",
          body: "«Resume la reunión» produce prosa. «Decisiones + dueños + fechas» produce un acta.",
        },
        {
          title: "No borrar lo inventado",
          body: "Si un dueño no estaba en tus notas, no estaba en la reunión. Quítalo.",
        },
        {
          title: "Usar Notion AI para el post público",
          body: "La prosa externa se redacta en ChatGPT o Claude. El acta se queda en el wiki.",
        },
      ],
      conclusion:
        "Notion AI gana cuando ya tienes páginas y una fuente de verdad. En 12 minutos sales con un acta que tiene dueños, fechas y preguntas abiertas — no con un resumen que nadie lee. Si el workspace es un cajón de sastre, arregla la estructura antes de acelerar el desorden.",
      nextSteps: [
        "Si el siguiente paso es redactar un email o un brief, usa el método de ChatGPT.",
        "Si el texto se alarga, edítalo con Claude por secciones.",
        "Crea una plantilla de acta en Notion y repite el flujo la próxima semana.",
      ],
      takeaway:
        "Página de reunión + decisiones con dueños + borrar lo inventado. El acta vive en Notion; el copy externo, en otro sitio.",
    },
    en: {
      title: "Notion AI: meeting notes you can actually use (2026)",
      metaTitle: "Notion AI: first useful flow in 2026",
      metaDescription:
        "Open the meeting page, ask for decisions with owners and dates, delete what was not said and assign tasks on the same page. It is not another ChatGPT.",
      excerpt:
        "Use Notion AI on the meeting page: decisions, owners, dates and open questions. Delete the invented parts and assign on the same doc.",
      intro:
        "Notion AI writes and summarizes on top of the pages you already have. The value is not «another ChatGPT». It is not copying context somewhere else. This flow takes 12 minutes and produces notes with owners and dates, not a pretty summary.",
      problem:
        "People open an empty AI chat or ask for «summarize the meeting» without the page. They get generic prose, invented owners and text nobody reviews. Useful work starts on the meeting page.",
      whatYouWillLearn: [
        "Open the meeting page, not an empty chat",
        "Ask for decisions, owners, dates and open questions",
        "Delete what was not said in the meeting",
        "Assign owners on the same page",
        "Move external copy to ChatGPT or Claude if needed",
      ],
      prerequisites: [
        "A Notion workspace with AI enabled (the Free plan is enough to try)",
        "A meeting page with your notes or a teammate’s, even if messy",
        "12 minutes. If you have no pages with an owner, fix structure first",
      ],
      steps: [
        {
          title: "Open the meeting page, not an empty chat",
          content:
            "Go to the page where you already took meeting notes — or create one with the title, date and who attended. From there invoke Notion AI (sidebar or /AI). Do not open a loose chat or a blank page: the AI needs the context already on the doc.",
          whatYouShouldSee:
            "The meeting page with your notes visible and the Notion AI panel open on that content.",
          warning:
            "An empty chat does not know what was said. It produces a generic act with invented owners.",
          imageDescription:
            "Notion page with meeting title, date and raw notes; AI panel open on top.",
        },
        {
          title: "Ask for decisions, owners, dates and open questions",
          content:
            "Write something like: «List only decisions made, with owner and due date. Add unresolved open questions. Do not write a nice summary. If something is not in my notes, mark it [NOT SAID].» One clear instruction. No «analyze the meeting».",
          whatYouShouldSee:
            "A block with labeled bullets: decisions with owner and date, and an open-questions section. At least one [NOT SAID] if your notes were incomplete.",
          tip: "If everything arrives as a smooth paragraph, repeat the instruction: bullets, owners, dates. No prose.",
          imageDescription:
            "Notion AI answer with decision bullets (owner + date) and an open-questions section.",
        },
        {
          title: "Delete what was not said",
          content:
            "Go through each bullet. If a decision does not appear in your original notes, delete it or mark it [REVIEW]. If the AI invented an owner, remove it. If a reference doc came up in the meeting, add the link now. The notes must reflect what happened, not what sounds good.",
          whatYouShouldSee:
            "Notes shorter than the first draft. No phantom owners. Links to sources if they existed.",
          warning:
            "Notion AI summarizes junk politely if the workspace is chaotic. You are the filter.",
          imageDescription:
            "Same page with struck-through or deleted bullets and a link added to a source doc.",
        },
        {
          title: "Assign owners on the same page",
          content:
            "Turn each decision with an owner into a task (@person + date) or a row in a database if the team uses one. Do it on the same notes page, not in a separate Slack thread. The team must see the same doc.",
          whatYouShouldSee:
            "@ mentions or task rows with owner and date on the notes page. Everything in one place.",
          tip: "If the owner was not in the meeting, leave it unassigned and put it in open questions.",
          imageDescription:
            "Notes page with @ mentions or database rows with assigned owners and dates.",
        },
        {
          title: "Mark open questions and close the notes",
          content:
            "Unresolved questions go in a visible section — not buried at the bottom. Add who resolves them and by when, or leave them as [PENDING]. When the notes reflect what happened, stop editing. Do not ask the AI to «improve the wording»: that invites invention.",
          whatYouShouldSee:
            "An «Open questions» section with 1–3 clear items. The full notes fit on one screen.",
          proTip:
            "One-screen notes get read. Three pages of pretty summary do not.",
          imageDescription:
            "Open-questions section with [PENDING] labels and the full notes visible without excessive scroll.",
        },
        {
          title: "If there is external copy, take it to ChatGPT or Claude",
          content:
            "Notion AI is for internal notes. If you need an announcement for clients, an email or a post, copy only the three key decisions — not the whole notes — into ChatGPT or Claude and draft there. External prose is easier to control outside the wiki.",
          whatYouShouldSee:
            "A draft somewhere else (ChatGPT, Claude or a new doc) with the decisions in bullets, not a paste of the notes.",
          warning:
            "Publishing Notion AI’s paragraph as an external announcement is the same failure as copying a ChatGPT summary without review.",
          imageDescription:
            "Two windows: notes in Notion with three decisions highlighted and a ChatGPT or Claude composer beside it.",
        },
      ],
      realUseCases: [
        {
          title: "Weekly product standup",
          body: "Raw notes on the page. AI pulls decisions and blockers. You delete the invented parts. The team sees the notes on the same doc.",
        },
        {
          title: "Client meeting",
          body: "Internal notes in Notion with owners. The client email is written in Claude with only the confirmed agreements.",
        },
        {
          title: "Sprint retro",
          body: "You ask for open questions and actions with dates. Tasks stay on the same page linked to the sprint.",
        },
      ],
      commonMistakes: [
        {
          title: "Starting in an empty chat",
          body: "Without context, the AI invents decisions. Open the meeting page first.",
        },
        {
          title: "Asking for a pretty summary",
          body: "«Summarize the meeting» produces prose. «Decisions + owners + dates» produces notes.",
        },
        {
          title: "Not deleting the invented parts",
          body: "If an owner was not in your notes, they were not in the meeting. Remove them.",
        },
        {
          title: "Using Notion AI for the public post",
          body: "External prose gets drafted in ChatGPT or Claude. The notes stay in the wiki.",
        },
      ],
      conclusion:
        "Notion AI wins when you already have pages and a source of truth. In 12 minutes you leave with notes that have owners, dates and open questions — not a summary nobody reads. If the workspace is a junk drawer, fix structure before you speed up the mess.",
      nextSteps: [
        "If the next step is an email or a brief, use the ChatGPT method.",
        "If the piece gets long, edit it with Claude by section.",
        "Create a notes template in Notion and run the flow again next week.",
      ],
      takeaway:
        "Meeting page + decisions with owners + delete the invented parts. Notes live in Notion; external copy lives elsewhere.",
    },
  },
};
