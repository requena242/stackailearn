import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "grok-primer-flujo";

export const grokPrimerFlujo: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "beginner",
  estimatedTime: 14,
  publishedAt: "2026-08-27",
  lastUpdated: "2026-08-27",
  toolsUsed: ["grok", "chatgpt", "perplexity"],
  relatedTutorials: [
    "chatgpt-primeros-pasos",
    "perplexity-investigacion-con-fuentes",
    "grok-bot-primer-teammate",
  ],
  tags: ["grok", "grok.com", "actualidad", "contraste", "principiante"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Chat en grok.com con una pregunta datada",
      caption: "Una pregunta con fecha. Hecho y opinión separados. El chat, no el Bot.",
      hint: "Hero 1600×900: grok.com, URL visible, pregunta con año y la respuesta en tono directo.",
    },
    en: {
      alt: "grok.com chat with a dated question",
      caption: "One dated question. Fact split from opinion. The chat, not the Bot.",
      hint: "Hero 1600×900: grok.com, URL visible, a year in the question and a direct-tone answer.",
    },
  }),
  copy: {
    es: {
      title: "Cómo usar Grok en grok.com sin confundirlo con Grok Bot (2026)",
      metaTitle: "Grok (grok.com): primer flujo útil en 2026",
      metaDescription:
        "Una pregunta datada, hecho frente a opinión, contraste con ChatGPT o Perplexity. Grok es el chat. Grok Bot es otra herramienta.",
      excerpt:
        "Abre grok.com, haz una pregunta con fecha, pide el corte hecho/opinión y quédate con el ángulo. Redacta en otro sitio.",
      intro:
        "Grok es el chat de xAI en grok.com. No es Grok Bot: no hay teammate, ni Agent Computer, ni un encargo que se ejecuta en una VM. Este flujo dura 14 minutos y sirve para una primera lectura directa de algo reciente, no para publicar un texto.",
      problem:
        "La gente busca «Grok», aterriza en el chat y espera un compañero con ordenador —o al revés: instala Grok Bot para «preguntar una cosa». Mezclar las dos fichas gasta el plan y el criterio. Aquí solo usamos el chat.",
      whatYouWillLearn: [
        "Comprobar que estás en grok.com y no en Grok Bot",
        "Formular una pregunta con fecha y exclusión",
        "Pedir la separación hecho / estimación / opinión",
        "Contrastar el ángulo con ChatGPT o Perplexity",
        "No publicar cifras que Grok no haya justificado",
      ],
      prerequisites: [
        "Navegador en grok.com (el plan gratis basta para una ronda)",
        "Una pregunta real de hoy, no «explícame la IA»",
        "14 minutos. Si necesitas un teammate con máquina, cierra esto y abre el tutorial de Grok Bot",
      ],
      steps: [
        {
          title: "Confirma la URL: grok.com, no la app de Grok Bot",
          content:
            "Mira la barra de direcciones. Tiene que ser grok.com (o la app móvil de Grok el chat). Si ves «Agent Computer», un teammate con nombre o el onboarding de Cursor/Bot, estás en la otra herramienta. Ciérrala. Este flujo no usa logins delegados ni una VM.",
          whatYouShouldSee:
            "Una ventana de chat en grok.com. Sin panel de máquina remota. Sin lista de teammates.",
          warning:
            "Grok Bot no se «activa» por chatear aquí. Son productos distintos y planes distintos.",
          imageDescription:
            "Barra de direcciones con grok.com y el composer del chat, sin UI de Agent Computer.",
        },
        {
          title: "Escribe una pregunta con fecha, no un tema",
          content:
            "En vez de «qué pasa con X», pregunta «qué se ha publicado en 2025–2026 sobre X en medios con fecha, y qué es rumor». Añade una exclusión («sin hilos anónimos», «sin recuentos de engagement»). Una pregunta. Un chat nuevo.",
          whatYouShouldSee:
            "2–4 líneas en el composer, con año y una exclusión, antes de enviar.",
          tip: "Si no puedes ponerle año, aún no es una pregunta de actualidad: es charla. Para charla, ChatGPT o Claude suelen ir mejor.",
          imageDescription:
            "Composer de grok.com con la pregunta datada y la exclusión visibles.",
        },
        {
          title: "Pide el corte hecho / estimación / opinión",
          content:
            "Envía y, en la misma frase, pide tres bloques etiquetados: HECHO (con fecha si la tiene), ESTIMACIÓN, OPINIÓN. Pide que deje [FALTA] donde no tenga fuente. No pidas «un análisis brillante»: eso invita a prosa sin ancla.",
          whatYouShouldSee:
            "Una respuesta con tres etiquetas claras. Al menos un [FALTA] o una fecha si el tema es reciente.",
          tip: "Si todo llega como un solo párrafo seguro, el modelo no cortó. Repite la instrucción de etiquetas en el siguiente mensaje.",
          warning:
            "Un tono directo no convierte una opinión en hecho. El corte lo pides tú.",
          imageDescription:
            "Respuesta de Grok con bloques HECHO / ESTIMACIÓN / OPINIÓN visibles.",
        },
        {
          title: "Abre al menos una fuente o contrasta en otra herramienta",
          content:
            "Si Grok cita un enlace, ábrelo y mira fecha y autor. Si no cita, copia la pregunta a Perplexity (citas) o haz la misma pregunta en ChatGPT con búsqueda. Quédate con el ángulo que sobreviva al contraste, no con las frases de Grok.",
          whatYouShouldSee:
            "Una pestaña de fuente abierta, o la misma pregunta en Perplexity/ChatGPT al lado. Notas de 3 líneas: qué se sostiene y qué no.",
          tip: "Grok gana en tono seco. Perplexity gana cuando tienes que abrir dos URLs. No los uses para el mismo entregable.",
          proTip:
            "Si el tema es un titular de hoy, prioriza la fuente primaria (comunicado, paper, filing) sobre el recuento de posts.",
          imageDescription:
            "Dos ventanas: grok.com y una fuente abierta o Perplexity con citas.",
        },
        {
          title: "Redacta el entregable fuera de Grok",
          content:
            "El chat no es el documento. Pasa el ángulo (no el párrafo) a ChatGPT o Claude con tus hechos, o escríbelo tú. Pide a Grok solo si te falta un segundo contraste de tono. No reenvíes la respuesta cruda a un cliente.",
          whatYouShouldSee:
            "Un borrador en otro sitio (nota, ChatGPT, Claude) que no sea copy-paste del hilo de Grok.",
          warning:
            "Publicar el párrafo de Grok como si fuera investigación es el mismo error que copiar Perplexity sin abrir fuentes.",
          imageDescription:
            "Nota o composer de un segundo chat con el ángulo en viñetas, no el texto entero de Grok.",
        },
        {
          title: "Cierra el hilo. No lo uses para otro tema",
          content:
            "Un chat, una pregunta. Si mañana quieres otra cosa, abre uno nuevo. Si lo que necesitas es un compañero que entre en un panel o un repo, eso es Grok Bot o Cursor: otra ficha, otro tutorial.",
          whatYouShouldSee:
            "El hilo de hoy dado por cerrado. Ningún segundo tema pegado debajo.",
          tip: "Si te ves pidiendo «y ahora redáctame el post», cambia de herramienta. Grok ya hizo su parte.",
          imageDescription:
            "Chat de grok.com cerrado o abandonado; el siguiente trabajo está en otra pestaña.",
        },
      ],
      realUseCases: [
        {
          title: "Titular de esta mañana",
          body: "Pregunta datada, corte hecho/opinión, una fuente abierta. El post o el email se escribe después, con hechos tuyos.",
        },
        {
          title: "Segunda opinión a un brief de ChatGPT",
          body: "Misma pregunta en Grok. Te quedas con el ángulo que no coincida. No mezclas las dos prosas.",
        },
        {
          title: "Antes de un tutorial largo",
          body: "Usas Grok para ver qué ha cambiado de interfaz o de plan este año. Luego abres la herramienta real y sigues un tutorial de esta web.",
        },
      ],
      commonMistakes: [
        {
          title: "Tratar Grok como Grok Bot",
          body: "No hay Agent Computer aquí. Si el trabajo termina en un CRM o un repo, cambia de ficha.",
        },
        {
          title: "Pregunta sin fecha",
          body: "«Qué opinas de X» produce un editorial. «Qué se ha publicado en 2026 sobre X» produce algo contrastable.",
        },
        {
          title: "Publicar el párrafo",
          body: "El valor es el corte y el ángulo. Las frases se reescriben donde controles el tono.",
        },
        {
          title: "Un hilo para diez temas",
          body: "El tono y los hechos se contaminan. Un chat, una pregunta.",
        },
      ],
      conclusion:
        "Grok en grok.com es un chat directo para acotar algo reciente. No es un redactor senior ni un teammate con máquina. Si en 14 minutos sales con un corte hecho/opinión y un ángulo contrastado, ya lo usaste bien. El entregable se escribe en otro sitio.",
      nextSteps: [
        "Si te faltan citas que abrir, sigue el tutorial de Perplexity.",
        "Si el siguiente paso es redactar un email o un brief, usa el método de ChatGPT.",
        "Si lo que quieres es un compañero en una VM, abre Grok Bot: primer teammate.",
      ],
      takeaway:
        "grok.com = pregunta datada + hecho/opinión + contraste. Grok Bot = otra herramienta. No publiques el párrafo.",
    },
    en: {
      title: "How to use Grok on grok.com without mixing it up with Grok Bot (2026)",
      metaTitle: "Grok (grok.com): first useful flow in 2026",
      metaDescription:
        "A dated question, fact versus opinion, contrast with ChatGPT or Perplexity. Grok is the chat. Grok Bot is a different tool.",
      excerpt:
        "Open grok.com, ask a dated question, demand a fact/opinion split and keep the angle. Write the deliverable elsewhere.",
      intro:
        "Grok is xAI’s chat at grok.com. It is not Grok Bot: no teammate, no Agent Computer, no job running on a VM. This flow takes 14 minutes and is for a direct first read of something recent, not for publishing a piece.",
      problem:
        "People search «Grok», land in the chat and expect a teammate with a computer — or the reverse: they install Grok Bot to «ask one thing». Mixing the two profiles wastes the plan and the judgment. This tutorial is the chat only.",
      whatYouWillLearn: [
        "Confirm you are on grok.com and not in Grok Bot",
        "Write a question with a date and an exclusion",
        "Ask for a fact / estimate / opinion split",
        "Contrast the angle with ChatGPT or Perplexity",
        "Refuse to publish figures Grok did not back",
      ],
      prerequisites: [
        "A browser on grok.com (the free plan is enough for one round)",
        "A real question today, not «explain AI»",
        "14 minutes. If you need a teammate with a machine, close this and open the Grok Bot tutorial",
      ],
      steps: [
        {
          title: "Confirm the URL: grok.com, not the Grok Bot app",
          content:
            "Look at the address bar. It must be grok.com (or the Grok chat mobile app). If you see «Agent Computer», a named teammate or Cursor/Bot onboarding, you are in the other tool. Close it. This flow does not use delegated logins or a VM.",
          whatYouShouldSee:
            "A chat window on grok.com. No remote-machine panel. No teammate list.",
          warning:
            "Grok Bot does not «turn on» because you chatted here. Different products, different plans.",
          imageDescription:
            "Address bar showing grok.com and the chat composer, no Agent Computer UI.",
        },
        {
          title: "Write a dated question, not a topic",
          content:
            "Instead of «what’s up with X», ask «what was published in 2025–2026 about X in dated outlets, and what is rumor». Add an exclusion («no anonymous threads», «no engagement counts»). One question. A new chat.",
          whatYouShouldSee:
            "2–4 lines in the composer, with a year and an exclusion, before you send.",
          tip: "If you cannot put a year on it, it is not a current-events question: it is chat. For chat, ChatGPT or Claude are usually better.",
          imageDescription:
            "grok.com composer with the dated question and the exclusion visible.",
        },
        {
          title: "Ask for a fact / estimate / opinion split",
          content:
            "Send and, in the same sentence, ask for three labeled blocks: FACT (with a date if it has one), ESTIMATE, OPINION. Ask it to leave [MISSING] where it has no source. Do not ask for «a brilliant analysis»: that invites unanchored prose.",
          whatYouShouldSee:
            "An answer with three clear labels. At least one [MISSING] or a date if the topic is recent.",
          tip: "If everything arrives as one confident paragraph, it did not split. Repeat the label instruction in the next message.",
          warning:
            "A direct tone does not turn an opinion into a fact. You ask for the split.",
          imageDescription:
            "Grok answer with FACT / ESTIMATE / OPINION blocks visible.",
        },
        {
          title: "Open at least one source or contrast in another tool",
          content:
            "If Grok cites a link, open it and check date and author. If it does not cite, copy the question into Perplexity (citations) or ask the same question in ChatGPT with search. Keep the angle that survives the contrast, not Grok’s sentences.",
          whatYouShouldSee:
            "A source tab open, or the same question in Perplexity/ChatGPT beside it. A 3-line note: what holds and what does not.",
          tip: "Grok wins on dry tone. Perplexity wins when you must open two URLs. Do not use them for the same deliverable.",
          proTip:
            "If the topic is today’s headline, prefer the primary source (release, paper, filing) over a count of posts.",
          imageDescription:
            "Two windows: grok.com and an opened source or Perplexity with citations.",
        },
        {
          title: "Write the deliverable outside Grok",
          content:
            "The chat is not the document. Move the angle (not the paragraph) into ChatGPT or Claude with your facts, or write it yourself. Ask Grok again only if you need a second tone check. Do not forward the raw answer to a client.",
          whatYouShouldSee:
            "A draft somewhere else (notes, ChatGPT, Claude) that is not a paste of the Grok thread.",
          warning:
            "Publishing Grok’s paragraph as research is the same failure as pasting Perplexity without opening sources.",
          imageDescription:
            "A note or a second-chat composer with the angle in bullets, not Grok’s full text.",
        },
        {
          title: "Close the thread. Do not reuse it for another topic",
          content:
            "One chat, one question. If you want something else tomorrow, open a new one. If you need a teammate inside a panel or a repo, that is Grok Bot or Cursor: a different profile, a different tutorial.",
          whatYouShouldSee:
            "Today’s thread closed. No second topic pasted underneath.",
          tip: "If you catch yourself asking «now write the post», switch tools. Grok already did its part.",
          imageDescription:
            "grok.com chat closed or abandoned; the next job is in another tab.",
        },
      ],
      realUseCases: [
        {
          title: "This morning’s headline",
          body: "Dated question, fact/opinion split, one opened source. The post or email is written later, with your facts.",
        },
        {
          title: "A second opinion on a ChatGPT brief",
          body: "Same question in Grok. Keep the angle that does not match. Do not blend the two proses.",
        },
        {
          title: "Before a long tutorial",
          body: "Use Grok to see what changed in UI or pricing this year. Then open the real tool and follow a tutorial on this site.",
        },
      ],
      commonMistakes: [
        {
          title: "Treating Grok as Grok Bot",
          body: "There is no Agent Computer here. If the work ends in a CRM or a repo, switch profiles.",
        },
        {
          title: "A question with no date",
          body: "«What do you think of X» produces an editorial. «What was published in 2026 about X» produces something you can check.",
        },
        {
          title: "Publishing the paragraph",
          body: "The value is the split and the angle. Sentences get rewritten where you control tone.",
        },
        {
          title: "One thread for ten topics",
          body: "Tone and facts bleed. One chat, one question.",
        },
      ],
      conclusion:
        "Grok on grok.com is a direct chat for bounding something recent. It is not a senior writer and not a teammate with a machine. If in 14 minutes you leave with a fact/opinion split and a contrasted angle, you used it well. The deliverable is written elsewhere.",
      nextSteps: [
        "If you need citations to open, follow the Perplexity tutorial.",
        "If the next step is an email or a brief, use the ChatGPT method.",
        "If you want a teammate on a VM, open Grok Bot: first teammate.",
      ],
      takeaway:
        "grok.com = dated question + fact/opinion + contrast. Grok Bot = a different tool. Do not publish the paragraph.",
    },
  },
};
