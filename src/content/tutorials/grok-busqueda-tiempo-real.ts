import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "grok-busqueda-tiempo-real";

export const grokBusquedaTiempoReal: Tutorial = {
  id: slug,
  slug,
  category: "research",
  level: "beginner",
  estimatedTime: 16,
  publishedAt: "2026-10-26",
  lastUpdated: "2026-10-26",
  toolsUsed: ["grok", "perplexity", "chatgpt"],
  relatedTutorials: [
    "grok-primer-flujo",
    "perplexity-investigacion-con-fuentes",
    "chatgpt-primeros-pasos",
  ],
  tags: ["grok", "grok.com", "busqueda", "fuentes", "x"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Chat de grok.com con una pregunta fechada y enlaces citados",
      caption: "La fecha va en la pregunta. Las citas se abren.",
      hint: "Hero 1600×900: grok.com con la URL visible, una pregunta con fecha de octubre de 2026 y enlaces en la respuesta.",
    },
    en: {
      alt: "grok.com chat with a dated question and cited links",
      caption: "The date goes in the question. The citations get opened.",
      hint: "Hero 1600×900: grok.com with the URL visible, an October 2026 date in the question and links in the answer.",
    },
  }),
  copy: {
    es: {
      title: "Cómo buscar en tiempo real con Grok y revisar las fuentes (2026)",
      metaTitle: "Grok: buscar en tiempo real con fuentes (2026)",
      metaDescription:
        "Pregunta con fecha en grok.com, citas de la web y de X, corte hecho/opinión y contraste en otra herramienta. El párrafo no se publica.",
      excerpt:
        "Pon la fecha en la pregunta, pide citas de la web y de X, abre dos fuentes y contrasta lo que usarías.",
      intro:
        "Grok es el chat de xAI. La ficha en x.ai/grok describe búsqueda en vivo en la web y en X, con citas, en grok.com y en las apps de iOS y Android. Eso acelera un mapa de algo reciente. No lo verifica por ti. Este flujo mete la fecha en la pregunta, separa hecho de opinión, abre dos fuentes y contrasta lo que usarías. En 16 minutos sales con una nota, no con un párrafo para publicar.",
      problem:
        "Una respuesta segura con un enlace al final parece investigación. A veces el enlace es un post que repite el titular, a veces no hay fecha, a veces el texto mezcla opinión. Copiar eso a un informe es citar al chat. El trabajo es acotar el tiempo, abrir la fuente y marcar lo que no se sostiene.",
      whatYouWillLearn: [
        "Abrir el chat de Grok en grok.com o en la app",
        "Escribir la fecha dentro de la pregunta",
        "Pedir búsqueda en la web y en X con citas",
        "Separar hecho, estimación y opinión",
        "Abrir dos fuentes y contrastar las afirmaciones que usarías",
      ],
      prerequisites: [
        "grok.com o la app de Grok (se puede probar; SuperGrok sube límites, este flujo no depende de un tope)",
        "Una pregunta real con fecha, no «qué opina la gente»",
        "16 minutos y dos pestañas para abrir enlaces",
        "Perplexity o ChatGPT para el contraste (una de las dos basta)",
      ],
      steps: [
        {
          title: "Abre el chat de Grok",
          content:
            "En el navegador la dirección es grok.com. En el móvil, la app de Grok. x.ai/grok indica esas dos entradas y el acceso con cuenta de X o con correo. La pantalla tiene que ser un chat. Si ves un ordenador remoto o un compañero con nombre, cierra esa ventana: este flujo es el chat.",
          whatYouShouldSee:
            "Una ventana de chat en grok.com o en la app de Grok. Sin panel de máquina remota.",
          warning:
            "Si la dirección no es grok.com y tampoco estás en la app de Grok, para. Este tutorial no aplica.",
          imageDescription:
            "Barra de direcciones con grok.com y la caja del chat vacía.",
        },
        {
          title: "Escribe la fecha dentro de la pregunta",
          content:
            "No preguntes «qué pasa con X». Escribe el intervalo en la frase: «Qué se ha publicado entre el 20 y el 26 de octubre de 2026 sobre X». Si el tema es de hoy, pon la fecha de hoy en el texto. Añade una exclusión: sin hilos anónimos, sin recuentos de engagement, sin listas de afiliados. Un chat nuevo. Una pregunta.",
          whatYouShouldSee:
            "2–4 líneas en la caja del chat, con una fecha o un intervalo y una exclusión, antes de enviar.",
          tip: "Si no puedes escribir la fecha, aún no es una búsqueda acotada: es charla.",
          warning:
            "Que Grok busque en vivo no sustituye la fecha en tu pregunta. Sin ella mezclas meses.",
          imageDescription:
            "Caja de grok.com con la fecha y la exclusión visibles, antes de enviar.",
        },
        {
          title: "Pide la web, X y las citas",
          content:
            "x.ai/grok describe búsqueda en la web y en X en vivo, con citas, y modos para buscar, razonar, voz o imagen. Si ves un control de búsqueda y la etiqueta es clara, actívalo. Si la etiqueta no es clara, no adivines el menú: escríbelo. «Busca en la web y en posts públicos de X. Cita cada afirmación con el enlace. Si no hay enlace, márcalo [SIN FUENTE].» No pidas el ensayo.",
          whatYouShouldSee:
            "Una respuesta con enlaces (una página, un post de X, o ambos) o con [SIN FUENTE] donde no citó.",
          tip: "Un seguimiento puede pedir más detalle de un enlace. Sigue siendo la misma pregunta.",
          warning:
            "Una cita no prueba que la página diga lo que el resumen afirma. Si tras un segundo mensaje no hay ningún enlace, no tienes una búsqueda con fuentes: reformula o pasa al contraste.",
          imageDescription:
            "Respuesta de Grok con un enlace a una página y otro a un post de X, o con [SIN FUENTE] visible.",
        },
        {
          title: "Separa hecho, estimación y opinión",
          content:
            "En el mensaje siguiente: «Reparte lo anterior en tres bloques: HECHO (con la fecha de la fuente), ESTIMACIÓN y OPINIÓN. Un post de X documenta que alguien lo dijo. No convierte la frase en un hecho sobre el mundo.» No pidas un análisis brillante. Eso invita a prosa sin ancla.",
          whatYouShouldSee:
            "Tres etiquetas claras. En HECHO, una fecha de fuente o un [SIN FUENTE] si no la hay.",
          tip: "Si todo llega en un solo párrafo seguro, no cortó. Repite las tres etiquetas.",
          warning:
            "El tono directo no convierte una opinión en hecho. El corte lo pides tú.",
          imageDescription:
            "Respuesta con bloques HECHO, ESTIMACIÓN y OPINIÓN, y una fecha junto a cada hecho citado.",
        },
        {
          title: "Abre dos citas y anota título, autor y fecha",
          content:
            "Elige dos enlaces que sostengan lo que usarías. Si afirmas un hecho, una de las dos tiene que ser una página (comunicado, documento oficial, artículo con fecha). Un post de X vale para documentar qué se está diciendo. Anota título, autor o cuenta, y fecha. Lee lo bastante para ver si el resumen coincide con el texto. Si no puedes fechar la fuente, no entra en la nota.",
          whatYouShouldSee:
            "Dos pestañas abiertas y tres campos escritos por fuente: título, autor o cuenta, fecha.",
          tip: "Si las dos fuentes se citan entre sí y ninguna es el origen, busca una tercera o deja el hueco escrito.",
          proTip:
            "En un post de X, la fecha del post no es la fecha del hecho. Si el post apunta a un enlace, abre ese enlace.",
          imageDescription:
            "Dos pestañas, una web y un post de X, junto a una nota con título, autor y fecha.",
        },
        {
          title: "Contrasta lo que sí usarías",
          content:
            "Copia las dos afirmaciones importantes, no el párrafo entero. Haz la misma pregunta, con la misma fecha, en Perplexity o en ChatGPT. Quédate con lo que una fuente que abriste sostiene. Si las respuestas discrepan, la nota dice «discrepa». No elijas la frase que más te gusta.",
          whatYouShouldSee:
            "La misma pregunta fechada en una segunda herramienta, y una lista corta: se sostiene, no se sostiene, discrepa.",
          warning:
            "Si ningún hecho sobrevive al contraste, no publiques. Grok te dio un mapa reciente, no un veredicto.",
          imageDescription:
            "grok.com al lado de Perplexity o ChatGPT, con la misma fecha en las dos preguntas.",
        },
        {
          title: "Escribe la nota fuera y cierra el hilo",
          content:
            "El chat no es el documento. Nota de una página: fecha de la búsqueda, la pregunta, dos fuentes con enlace, qué se sostiene, huecos. No pegues el párrafo de Grok. Un chat, una pregunta. Mañana, otro hilo. Si el siguiente trabajo es elegir entre Grok y ChatGPT como chat de base, la comparativa del catálogo es grok-vs-chatgpt. Si aún no hiciste el primer contacto con el chat, el flujo anterior es grok-primer-flujo.",
          whatYouShouldSee:
            "Una nota tuya con fecha, dos enlaces y huecos. El hilo de Grok, cerrado.",
          imageDescription:
            "Nota con la fecha de la búsqueda, dos hipervínculos y una línea de huecos. El chat de grok.com ya no está en primer plano.",
        },
      ],
      realUseCases: [
        {
          title: "Titular de esta mañana",
          body: "Fecha de hoy en la pregunta, corte hecho/opinión, dos enlaces abiertos. El email se escribe después, con lo que se sostuvo.",
        },
        {
          title: "Un post de X frente a la página",
          body: "El post documenta el comentario. La página con fecha documenta el hecho. La nota separa las dos cosas.",
        },
        {
          title: "Una cifra reciente en un deck",
          body: "Buscas origen y fecha. Si no aparecen en una fuente abierta, la cifra sale del deck o se marca como estimación.",
        },
      ],
      commonMistakes: [
        {
          title: "Pregunta sin fecha",
          body: "«Qué pasa con X» mezcla meses. «Qué se publicó el 26 de octubre de 2026 sobre X» se puede contrastar.",
        },
        {
          title: "Un post de X como prueba del hecho",
          body: "El post prueba que alguien lo dijo. El hecho vive en la página, el comunicado o el documento que abras.",
        },
        {
          title: "Citar a Grok",
          body: "Cita el enlace que abriste. Grok es el camino hasta la fuente.",
        },
        {
          title: "Publicar sin abrir las citas",
          body: "Un enlace en el chat no es una fuente leída. Si no abriste dos, no tienes nota.",
        },
        {
          title: "Un hilo para varios temas",
          body: "Las fechas y los enlaces se mezclan. Un chat, una pregunta fechada.",
        },
      ],
      conclusion:
        "Grok en grok.com y en sus apps sirve para un mapa reciente de la web y de X. La fecha va en la pregunta, las citas se abren y el corte hecho/opinión lo pides tú. Lo que no sobrevive al contraste no se publica. El primer contacto con el chat está en grok-primer-flujo. La elección entre Grok y ChatGPT como base está en la comparativa grok-vs-chatgpt.",
      nextSteps: [
        "Si todavía no hiciste una primera pregunta en grok.com, sigue el tutorial grok-primer-flujo.",
        "Si el mapa necesita más fuentes abiertas, sigue perplexity-investigacion-con-fuentes.",
        "Si estás eligiendo entre Grok y ChatGPT como chat de base, lee la comparativa grok-vs-chatgpt.",
        "Redacta el entregable en otro sitio, solo con lo que sostienen las fuentes que abriste.",
      ],
      takeaway:
        "Fecha en la pregunta, dos citas abiertas, hecho separado de opinión, contraste en otra herramienta. El párrafo de Grok no se publica.",
    },
    en: {
      title: "How to search in real time with Grok and check the sources (2026)",
      metaTitle: "Grok: real-time search with sources (2026)",
      metaDescription:
        "A dated question on grok.com, citations from the web and X, a fact versus opinion split, then a check in another tool. Do not publish the paragraph.",
      excerpt:
        "Put the date in the question, ask for web and X citations, open two sources and check what you would actually use.",
      intro:
        "Grok is xAI’s chat. The product page at x.ai/grok describes live search of the web and of X, with citations, on grok.com and the iOS and Android apps. That speeds up a map of something recent. It does not verify the map for you. This flow puts the date in the question, splits fact from opinion, opens two sources and checks what you would use. In 16 minutes you leave with a note, not a paragraph to publish.",
      problem:
        "A confident answer with a link at the end looks like research. Sometimes the link is a post repeating the headline, sometimes there is no date, sometimes the text mixes in opinion. Pasting that into a report is citing the chat. The work is bounding the time, opening the source and marking what does not hold.",
      whatYouWillLearn: [
        "Open Grok’s chat on grok.com or in the app",
        "Write the date inside the question",
        "Ask for a web and X search with citations",
        "Split fact, estimate and opinion",
        "Open two sources and check the claims you would use",
      ],
      prerequisites: [
        "grok.com or the Grok app (you can try it; SuperGrok raises limits, this flow does not depend on a cap)",
        "A real question with a date, not «what do people think»",
        "16 minutes and two tabs to open links",
        "Perplexity or ChatGPT for the check (one of the two is enough)",
      ],
      steps: [
        {
          title: "Open Grok’s chat",
          content:
            "In the browser the address is grok.com. On a phone, the Grok app. x.ai/grok points to those two entries and to signing in with an X account or email. The screen has to be a chat. If you see a remote computer or a named teammate, close that window: this flow is the chat.",
          whatYouShouldSee:
            "A chat window on grok.com or in the Grok app. No remote-machine panel.",
          warning:
            "If the address is not grok.com and you are not in the Grok app, stop. This tutorial does not apply.",
          imageDescription:
            "Address bar showing grok.com and an empty chat box.",
        },
        {
          title: "Write the date inside the question",
          content:
            "Do not ask «what’s going on with X». Put the range in the sentence: «What was published between 20 and 26 October 2026 about X». If the topic is today, put today’s date in the text. Add an exclusion: no anonymous threads, no engagement counts, no affiliate lists. A new chat. One question.",
          whatYouShouldSee:
            "2–4 lines in the chat box, with a date or a range and an exclusion, before you send.",
          tip: "If you cannot write the date, it is not a bounded search yet. It is chat.",
          warning:
            "Live search does not replace the date in your question. Without it you mix months.",
          imageDescription:
            "grok.com box with the date and the exclusion visible, before send.",
        },
        {
          title: "Ask for the web, X and the citations",
          content:
            "x.ai/grok describes live search of the web and of X, with citations, and modes for search, reasoning, voice or imagery. If you see a search control and the label is clear, turn it on. If the label is not clear, do not guess the menu: write it. «Search the web and public posts on X. Cite each claim with the link. If there is no link, mark it [NO SOURCE].» Do not ask for the essay.",
          whatYouShouldSee:
            "An answer with links (a page, an X post, or both) or with [NO SOURCE] where it did not cite.",
          tip: "A follow-up can ask for more detail on one link. It is still the same question.",
          warning:
            "A citation does not prove the page says what the summary claims. If a second message still has no link, you do not have a sourced search: reformulate or move on to the check.",
          imageDescription:
            "Grok answer with a link to a page and a link to an X post, or with [NO SOURCE] visible.",
        },
        {
          title: "Split fact, estimate and opinion",
          content:
            "In the next message: «Split the above into three blocks: FACT (with the source date), ESTIMATE and OPINION. An X post documents that someone said it. It does not turn the sentence into a fact about the world.» Do not ask for a brilliant analysis. That invites unanchored prose.",
          whatYouShouldSee:
            "Three clear labels. Under FACT, a source date or a [NO SOURCE] if there is none.",
          tip: "If everything arrives as one confident paragraph, it did not split. Repeat the three labels.",
          warning:
            "A direct tone does not turn an opinion into a fact. You ask for the split.",
          imageDescription:
            "Answer with FACT, ESTIMATE and OPINION blocks, and a date next to each cited fact.",
        },
        {
          title: "Open two citations and note title, author and date",
          content:
            "Pick two links that support what you would use. If you are stating a fact, one of the two has to be a page (release, official document, dated article). An X post is for documenting what is being said. Note title, author or account, and date. Read enough to see whether the summary matches the text. If you cannot date the source, it does not enter the note.",
          whatYouShouldSee:
            "Two tabs open and three fields written per source: title, author or account, date.",
          tip: "If the two sources cite each other and neither is the origin, find a third or write the gap down.",
          proTip:
            "On an X post, the post date is not the date of the fact. If the post points at a link, open that link.",
          imageDescription:
            "Two tabs, one web page and one X post, next to a note with title, author and date.",
        },
        {
          title: "Check what you would actually use",
          content:
            "Copy the two important claims, not the whole paragraph. Ask the same question, with the same date, in Perplexity or in ChatGPT. Keep what a source you opened supports. If the answers disagree, the note says «disagrees». Do not pick the sentence you like best.",
          whatYouShouldSee:
            "The same dated question in a second tool, and a short list: holds, does not hold, disagrees.",
          warning:
            "If no fact survives the check, do not publish. Grok gave you a recent map, not a verdict.",
          imageDescription:
            "grok.com beside Perplexity or ChatGPT, with the same date in both questions.",
        },
        {
          title: "Write the note elsewhere and close the thread",
          content:
            "The chat is not the document. A one-page note: search date, the question, two sources with links, what holds, gaps. Do not paste Grok’s paragraph. One chat, one question. Tomorrow, a new thread. If the next job is choosing between Grok and ChatGPT as your base chat, the catalog comparison is grok-vs-chatgpt. If you have not done a first pass on the chat yet, the earlier flow is grok-primer-flujo.",
          whatYouShouldSee:
            "A note of yours with a date, two links and gaps. The Grok thread, closed.",
          imageDescription:
            "A note with the search date, two hyperlinks and a gaps line. The grok.com chat is no longer in front.",
        },
      ],
      realUseCases: [
        {
          title: "This morning’s headline",
          body: "Today’s date in the question, a fact/opinion split, two opened links. The email is written later, from what held.",
        },
        {
          title: "An X post versus the page",
          body: "The post documents the comment. The dated page documents the fact. The note keeps those apart.",
        },
        {
          title: "A recent figure on a deck",
          body: "You look for origin and date. If they do not appear in a source you opened, the figure leaves the deck or is marked as an estimate.",
        },
      ],
      commonMistakes: [
        {
          title: "A question with no date",
          body: "«What’s going on with X» mixes months. «What was published on 26 October 2026 about X» can be checked.",
        },
        {
          title: "An X post as proof of the fact",
          body: "The post proves someone said it. The fact lives on the page, release or document you open.",
        },
        {
          title: "Citing Grok",
          body: "Cite the link you opened. Grok is the path to the source.",
        },
        {
          title: "Publishing without opening the citations",
          body: "A link in the chat is not a source you read. If you did not open two, you do not have a note.",
        },
        {
          title: "One thread for several topics",
          body: "Dates and links bleed together. One chat, one dated question.",
        },
      ],
      conclusion:
        "Grok on grok.com and in its apps is for a recent map of the web and of X. The date goes in the question, the citations get opened and you ask for the fact/opinion split. What does not survive the check does not get published. The first pass on the chat is grok-primer-flujo. The choice between Grok and ChatGPT as a base is the grok-vs-chatgpt comparison.",
      nextSteps: [
        "If you have not asked a first question on grok.com yet, follow the grok-primer-flujo tutorial.",
        "If the map needs more opened sources, follow perplexity-investigacion-con-fuentes.",
        "If you are choosing between Grok and ChatGPT as your base chat, read the grok-vs-chatgpt comparison.",
        "Draft the deliverable somewhere else, only from what the sources you opened support.",
      ],
      takeaway:
        "Date in the question, two opened citations, fact split from opinion, a check in another tool. Grok’s paragraph does not get published.",
    },
  },
};
