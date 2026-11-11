import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "perplexity-preparar-reunion";

export const perplexityPrepararReunion: Tutorial = {
  id: slug,
  slug,
  category: "research",
  level: "beginner",
  estimatedTime: 20,
  publishedAt: "2026-11-11",
  lastUpdated: "2026-11-11",
  toolsUsed: ["perplexity"],
  relatedTutorials: [
    "perplexity-collections",
    "perplexity-investigacion-con-fuentes",
    "chatgpt-primeros-pasos",
  ],
  tags: ["perplexity", "reunion", "fuentes", "brief", "research"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Perplexity con citas numeradas y una hoja de reunión escrita en otro documento",
      caption: "La hoja de la reunión se escribe fuera. Las citas solo marcan qué abrir.",
      hint: "Hero 1600×900: respuesta de Perplexity con citas numeradas y, al lado, un doc con decisión, dos fuentes fechadas y una lista de huecos.",
    },
    en: {
      alt: "Perplexity with numbered citations and a meeting sheet written in another document",
      caption: "The meeting sheet is written elsewhere. Citations only mark what to open.",
      hint: "Hero 1600×900: Perplexity answer with numbered citations and, beside it, a doc with the decision, two dated sources and a gaps list.",
    },
  }),
  copy: {
    es: {
      title: "Perplexity: preparar una reunión con fuentes (2026)",
      metaTitle: "Preparar una reunión con Perplexity y fuentes en 2026",
      metaDescription:
        "Pregunta con fecha, citas numeradas, dos fuentes abiertas y una hoja de reunión escrita fuera. Perplexity guarda el mapa; tú decides qué se dice en la sala.",
      excerpt:
        "Una decisión, una sesión con citas y dos fuentes que sí abres. La hoja de la reunión no es el párrafo copiado.",
      intro:
        "Perplexity responde con citas numeradas que enlazan a las fuentes, y los follow-ups se quedan en la misma sesión, con el contexto y las fuentes de ese hilo (https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work y https://www.perplexity.ai/help-center/en/articles/10354769-what-is-a-thread). Este flujo de 20 minutos usa eso para una reunión concreta: una pregunta acotada, dos fuentes abiertas y una hoja que escribes en otro sitio. Si el tema va a volver en más de una sesión, el mapa se guarda en un Project; ese paso está en perplexity-collections.",
      problem:
        "Copiar la respuesta al orden del día deja la reunión sin origen. Cuando alguien pregunta de qué fecha es una cifra, el párrafo no lo sostiene. El trabajo útil es saber qué se decide, qué fuentes abriste y qué no vas a afirmar.",
      whatYouWillLearn: [
        "Dejar por escrito la decisión, la audiencia y lo que la reunión no cierra",
        "Abrir una sesión con una pregunta datada y, si aparece, un foco de fuentes",
        "Leer las citas numeradas y las etiquetas de dominio sin tratarlas como prueba de la frase",
        "Pedir en la misma sesión desacuerdos, huecos y preguntas para la sala",
        "Pasar el hilo a un Project solo si el tema de la reunión vuelve",
        "Redactar la hoja fuera y contrastar una afirmación con la fuente abierta",
      ],
      prerequisites: [
        "Cuenta en https://www.perplexity.ai",
        "Una reunión real con una decisión, no un «ponte al día de la IA»",
        "20 minutos, dos pestañas para abrir fuentes y un doc fuera de Perplexity",
        "Si nunca has abierto una cita, haz antes una ronda de perplexity-investigacion-con-fuentes",
      ],
      steps: [
        {
          title: "Escribe la reunión antes de abrir Perplexity",
          content:
            "En el doc, una línea: «El [fecha] decidimos [decisión] con [audiencia]. Hoy no cerramos [fuera de alcance].» Sin esa frase, la búsqueda se convierte en un tema. Añade el año o el periodo que importa y qué no quieres ver (listas de afiliados, posts sin fecha). Perplexity no sabe qué reunión es hasta que tú lo escribes.",
          whatYouShouldSee:
            "Cuatro datos en el doc: fecha de la reunión, decisión, audiencia y lo que queda fuera.",
          tip: "Si no puedes nombrar la decisión, todavía no toca buscar. Toca acotar la reunión.",
          imageDescription:
            "Doc con una línea de decisión, audiencia, fecha y una exclusión, antes de abrir Perplexity.",
        },
        {
          title: "Abre una sesión con una pregunta de analista",
          content:
            "Entra en https://www.perplexity.ai y escribe en la caja de búsqueda de la página de inicio. Cada pregunta abre una sesión; los follow-ups siguen en esa sesión (https://www.perplexity.ai/help-center/en/articles/10354975-getting-started-with-perplexity). Ejemplo: «Para una reunión del [fecha]: qué publicaron fuentes con fecha en 2025-2026 sobre [tema], qué cifras traen y en qué no coinciden? Excluye listados de afiliados y posts sin fecha. Dame las fuentes con su fecha. Separa hecho, estimación y opinión. No redactes el guion de la reunión.» Si tu cuenta muestra el control de Sources, elige un foco que encaje, por ejemplo Web o Academic: la guía de sesiones lo documenta así. Si tu plan incluye Pro Search, el centro de ayuda dice que se aplica solo al usar Search y que no es un interruptor aparte (https://www.perplexity.ai/help-center/en/articles/10352903-what-is-pro-search). Deep Research, si tu plan de pago lo muestra, déjalo para un informe largo: para esta reunión basta Search. Si ves el control de adjuntar, puedes añadir un archivo que tengas permiso de compartir. La misma guía dice que se pueden adjuntar archivos al empezar; los consejos de investigación mencionan PDF, documentos o datos (https://www.perplexity.ai/help-center/en/articles/13645819-tips-for-getting-better-answers-from-perplexity). Lo que no esté en ese archivo ni en una fuente que abras se marca [NO CONSTA].",
          whatYouShouldSee:
            "Una sesión nueva con la pregunta datada y una respuesta con citas numeradas.",
          warning:
            "«Prepárame la reunión» devuelve un discurso. La primera respuesta tiene que ser el mapa, no el texto que vas a leer en voz alta.",
          imageDescription:
            "Caja de búsqueda de Perplexity con la pregunta de la reunión, el foco de Sources si está visible y citas numeradas en la respuesta.",
        },
        {
          title: "Lee las citas y abre dos fuentes",
          content:
            "Cada respuesta lleva citas numeradas hacia las fuentes (https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work). En el menú de tres puntos de esa parte de la sesión puedes abrir Sources; el botón Source indica qué modelo, modo de búsqueda y foco de fuentes se usaron (https://www.perplexity.ai/help-center/en/articles/10354769-what-is-a-thread). Algunas citas muestran un escudo con la etiqueta Government, Academic o Trusted. Esa etiqueta describe el dominio, no la frase: no tener etiqueta no es un juicio de baja calidad, y ninguna etiqueta sustituye leer la página (https://www.perplexity.ai/help-center/en/articles/20260806-understanding-source-labels). Elige dos fuentes que vayas a usar en la sala (informe, documento oficial o artículo con fecha). Anota en tu doc título, autor o institución y fecha. Si no puedes fecharlas, no entran en la hoja.",
          whatYouShouldSee:
            "Dos pestañas abiertas y, en el doc, título, autor o institución y fecha de cada una.",
          warning:
            "Una cita que apunta a un recorte no es el informe. Ábrela. El escudo del dominio no demuestra que la cifra de esa página sea la que vas a decir.",
          imageDescription:
            "Panel de fuentes de la sesión, una cita con etiqueta de dominio y dos pestañas abiertas junto al doc.",
        },
        {
          title: "Sigue en la misma sesión: desacuerdos y huecos",
          content:
            "No abras otro chat. La sesión guarda los follow-ups, las respuestas y las fuentes de ese hilo. Segundo mensaje: «De las fuentes de esta sesión, en qué no coinciden? Qué no has podido respaldar? Dame tres preguntas que la reunión debería dejar abiertas, cada una con la cita que la motiva. No rellenes los huecos.» Copia esas tres preguntas a tu doc, al lado de la fuente que las sostiene. Si una pregunta no tiene cita, no entra.",
          whatYouShouldSee:
            "El mismo hilo, más largo, y en el doc tres preguntas con la cita al lado. Nada de un segundo chat suelto.",
          tip: "Tres preguntas con origen superan un resumen más largo. La sala discute huecos, no el párrafo.",
          imageDescription:
            "Follow-up en la misma sesión y el doc con tres preguntas, cada una junto a su cita.",
        },
        {
          title: "Pasa el hilo a un Project solo si el tema vuelve",
          content:
            "Si esta reunión es un único encuentro, deja la sesión donde está. Si el mismo tema vuelve (un cliente, un mercado, un comité), el contenedor actual es un Project: antes Spaces, y mucha gente lo sigue buscando como Collections. La guía oficial está en https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces. No repitas aquí la creación del Project, las instrucciones ni los archivos: ese flujo es el tutorial perplexity-collections. Un Project por tema de reunión. No metas el orden del día de otra reunión en el mismo sitio.",
          whatYouShouldSee:
            "O una sesión suelta, si la reunión no se repite, o el hilo dentro del Project del tema, con un título que entiendas la semana que viene.",
          tip: "Ponle al hilo un título con la fecha de la reunión: «Comité 2026-11-13 — ronda de fuentes».",
          imageDescription:
            "Lista de un Project con un hilo titulado con la fecha de la reunión, o la sesión dejada en el historial si no se repite.",
        },
        {
          title: "Escribe la hoja de la reunión fuera",
          content:
            "En tu doc, no en el chat: la decisión de la primera línea, 4–6 afirmaciones y cada una con la fuente que abriste (título y fecha), la sección Huecos, las tres preguntas y una línea «No diremos» para lo que quedó en [NO CONSTA]. Fecha la hoja. El botón Copy copia la respuesta al portapapeles; ese texto no es la hoja. El centro de ayuda también describe pedir un documento o una presentación y exportar DOCX, PDF, PPTX o XLSX. Si tu cuenta lo ofrece, ese archivo sigue siendo un borrador: no entra en la sala hasta que las afirmaciones coincidan con las fuentes que abriste.",
          whatYouShouldSee:
            "Una hoja tuya de una página, fechada, con afirmaciones ligadas a las dos fuentes abiertas. El chat queda como mapa.",
          warning:
            "Pegar el párrafo, o el deck generado, en el orden del día cita a Perplexity. En la sala se cita el informe o el artículo que abriste.",
          imageDescription:
            "Doc de la reunión con decisión, afirmaciones fechadas, huecos y la línea «No diremos», separado de la sesión de Perplexity.",
        },
        {
          title: "Contrasta una afirmación con la fuente abierta",
          content:
            "Antes de entrar, elige la frase que más peso tenga en la sala. Léela contra la pestaña de la fuente, no contra el resumen. Si la frase no está en esa página, no se dice: pasa a Huecos o se reescribe con lo que sí está. Repite el contraste con la segunda fuente si vas a usar una cifra. La sesión te devuelve a las citas; no sustituye esta lectura.",
          whatYouShouldSee:
            "Una frase tachada o reescrita en la hoja, y la pestaña de la fuente todavía abierta.",
          proTip:
            "Si solo puedes comprobar una frase, que sea la cifra. Una cifra sin origen sale de la hoja.",
          imageDescription:
            "Fuente abierta al lado de la hoja, con una frase corregida tras compararla con el pasaje.",
        },
      ],
      realUseCases: [
        {
          title: "Comité con una sola decisión",
          body: "Una pregunta datada, dos fuentes abiertas y tres huecos. Nadie lee el chat en la sala.",
        },
        {
          title: "Una cifra que iba a quedar en el orden del día",
          body: "Buscas origen y fecha. Si la página no la trae, la cifra sale de la hoja o se marca como hueco.",
        },
        {
          title: "El mismo tema, otra semana",
          body: "La sesión de hoy entra en el Project de perplexity-collections. La hoja nueva se vuelve a escribir fuera, con la fecha de esta reunión.",
        },
      ],
      commonMistakes: [
        {
          title: "Citar a Perplexity en la sala",
          body: "Perplexity es el camino. La referencia es el artículo o el informe que abriste, con título y fecha.",
        },
        {
          title: "Llevar el texto copiado o un archivo generado",
          body: "Copy copia la respuesta. El centro de ayuda describe además documentos y presentaciones exportables. Ninguno de los dos es la hoja hasta que contrastas las afirmaciones con las fuentes abiertas.",
        },
        {
          title: "Leer la etiqueta del dominio como prueba de la frase",
          body: "Government, Academic o Trusted describen el sitio, no el pasaje. Sin etiqueta no significa que la fuente sea mala. La frase se comprueba en la página.",
        },
        {
          title: "Dos reuniones en la misma sesión",
          body: "Los follow-ups se quedan en la sesión y arrastran el contexto anterior. Un tema distinto empieza en otra sesión, o en otro Project si ya lo tienes.",
        },
      ],
      conclusion:
        "Para una reunión, Perplexity sirve como mapa: una sesión, citas numeradas y follow-ups que no pierden el hilo. La hoja se escribe fuera, con dos fuentes abiertas, huecos y una frase que has contrastado. Si el tema vuelve, el índice vive en un Project; el tutorial perplexity-collections es ese paso, no un segundo resumen.",
      nextSteps: [
        "Si el tema dura más de una reunión, sigue con perplexity-collections: un Project por tema, no un vertedero de chats.",
        "Si la pregunta sigue siendo ancha, repite perplexity-investigacion-con-fuentes con un recorte más estrecho.",
        "Para el tono de la hoja ya fechada, usa chatgpt-primeros-pasos. Los hechos siguen siendo los de las fuentes que abriste.",
      ],
      takeaway:
        "Decisión por escrito, sesión con citas, dos fuentes abiertas, hoja fuera. El párrafo copiado no entra en la sala.",
    },
    en: {
      title: "Perplexity: prepare a meeting with sources (2026)",
      metaTitle: "Prepare a meeting with Perplexity and sources in 2026",
      metaDescription:
        "A dated question, numbered citations, two opened sources and a meeting sheet written elsewhere. Perplexity holds the map; you decide what gets said in the room.",
      excerpt:
        "One decision, one cited session and two sources you actually open. The meeting sheet is not the pasted paragraph.",
      intro:
        "Perplexity answers with numbered citations that link to the sources, and follow-ups stay in the same session, with that thread’s context and sources (https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work and https://www.perplexity.ai/help-center/en/articles/10354769-what-is-a-thread). This 20-minute flow uses that for one concrete meeting: a narrow question, two opened sources and a sheet you write somewhere else. If the topic will come back in more than one session, the map lives in a Project; that step is perplexity-collections.",
      problem:
        "Pasting the answer into the agenda leaves the meeting with no origin. When someone asks what date a figure comes from, the paragraph does not hold it. The useful work is knowing what gets decided, which sources you opened and what you will not claim.",
      whatYouWillLearn: [
        "Write down the decision, the audience and what the meeting will not close",
        "Start a session with a dated question and, if it appears, a source focus",
        "Read numbered citations and domain labels without treating them as proof of the sentence",
        "Ask, in the same session, for disagreements, gaps and questions for the room",
        "Move the thread into a Project only if the meeting topic returns",
        "Draft the sheet elsewhere and check one claim against the opened source",
      ],
      prerequisites: [
        "An account at https://www.perplexity.ai",
        "A real meeting with a decision, not a «catch me up on AI»",
        "20 minutes, two tabs to open sources and a doc outside Perplexity",
        "If you have never opened a citation, run one round of perplexity-investigacion-con-fuentes first",
      ],
      steps: [
        {
          title: "Write the meeting down before you open Perplexity",
          content:
            "In the doc, one line: «On [date] we decide [decision] with [audience]. Today we do not close [out of scope].» Without that sentence, the search becomes a topic. Add the year or period that matters and what you do not want (affiliate lists, undated posts). Perplexity does not know which meeting this is until you write it.",
          whatYouShouldSee:
            "Four fields in the doc: meeting date, decision, audience and what is out of scope.",
          tip: "If you cannot name the decision, it is not time to search. It is time to narrow the meeting.",
          imageDescription:
            "A doc with one line for decision, audience, date and an exclusion, before Perplexity is open.",
        },
        {
          title: "Start a session with an analyst question",
          content:
            "Go to https://www.perplexity.ai and type in the search box on the home page. Each question starts a session; follow-ups stay in that session (https://www.perplexity.ai/help-center/en/articles/10354975-getting-started-with-perplexity). Example: «For a meeting on [date]: what did dated sources publish in 2025-2026 about [topic], which figures do they include and where do they disagree? Exclude affiliate roundups and undated posts. Give the sources with their dates. Split fact, estimate and opinion. Do not draft the meeting script.» If your account shows the Sources control, pick a focus that fits, for example Web or Academic: the session guide documents it that way. If your plan includes Pro Search, the help center says it applies automatically when you use Search and that it is not a separate switch (https://www.perplexity.ai/help-center/en/articles/10352903-what-is-pro-search). Leave Deep Research, if your paid plan shows it, for a long report: Search is enough for this meeting. If you see an attach control, you can add a file you are allowed to share. The same guide says you can attach files when you start; the research tips mention PDFs, documents or data (https://www.perplexity.ai/help-center/en/articles/13645819-tips-for-getting-better-answers-from-perplexity). Anything that is not in that file and not in a source you open is marked [NOT IN SOURCE].",
          whatYouShouldSee:
            "A new session with the dated question and an answer that has numbered citations.",
          warning:
            "«Prep the meeting for me» returns a speech. The first answer has to be the map, not the text you will read aloud.",
          imageDescription:
            "Perplexity search box with the meeting question, the Sources focus if it is visible, and numbered citations in the answer.",
        },
        {
          title: "Read the citations and open two sources",
          content:
            "Each answer includes numbered citations to the sources (https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work). The three-dot menu on that part of the session can open Sources; the Source button shows which model, search mode and source focus were used (https://www.perplexity.ai/help-center/en/articles/10354769-what-is-a-thread). Some citations show a shield labeled Government, Academic or Trusted. That label describes the domain, not the sentence: no label is not a low-quality judgment, and no label replaces reading the page (https://www.perplexity.ai/help-center/en/articles/20260806-understanding-source-labels). Pick two sources you will actually use in the room (a report, an official document or a dated article). In your doc, note title, author or institution and date. If you cannot date them, they do not enter the sheet.",
          whatYouShouldSee:
            "Two tabs open and, in the doc, title, author or institution and date for each.",
          warning:
            "A citation that points at a recap is not the report. Open it. The domain shield does not prove that the figure on that page is the one you are about to say.",
          imageDescription:
            "The session sources view, one citation with a domain label, and two open tabs next to the doc.",
        },
        {
          title: "Stay in the same session: disagreements and gaps",
          content:
            "Do not open another chat. The session keeps the follow-ups, the answers and the sources of that thread. Second message: «Of the sources in this session, where do they disagree? What could you not back? Give me three questions the meeting should leave open, each with the citation that prompts it. Do not fill the gaps.» Copy those three questions into your doc, next to the source that supports them. If a question has no citation, it stays out.",
          whatYouShouldSee:
            "The same thread, longer, and three questions in the doc with the citation beside each. No second loose chat.",
          tip: "Three questions with an origin beat a longer summary. The room discusses gaps, not the paragraph.",
          imageDescription:
            "A follow-up in the same session and the doc with three questions, each next to its citation.",
        },
        {
          title: "Move the thread into a Project only if the topic returns",
          content:
            "If this meeting happens once, leave the session where it is. If the same topic returns (a client, a market, a committee), the current container is a Project: formerly Spaces, and many people still search for it as Collections. The official guide is at https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces. Do not repeat Project creation, instructions or files here: that flow is the perplexity-collections tutorial. One Project per meeting topic. Do not put another meeting’s agenda in the same place.",
          whatYouShouldSee:
            "Either a loose session, if the meeting does not repeat, or the thread inside the topic’s Project, with a title you will understand next week.",
          tip: "Title the thread with the meeting date: «Committee 2026-11-13 — sources round».",
          imageDescription:
            "A Project list with a thread titled with the meeting date, or the session left in history if it does not repeat.",
        },
        {
          title: "Write the meeting sheet elsewhere",
          content:
            "In your doc, not in the chat: the decision from the first line, 4–6 claims and each one with the source you opened (title and date), a Gaps section, the three questions and a «We will not say» line for whatever stayed [NOT IN SOURCE]. Date the sheet. The Copy button copies the answer to the clipboard; that text is not the sheet. The help center also describes asking for a document or a slide deck and exporting DOCX, PDF, PPTX or XLSX. If your account offers it, that file is still a draft: it does not enter the room until the claims match the sources you opened.",
          whatYouShouldSee:
            "A one-page sheet of yours, dated, with claims tied to the two opened sources. The chat stays the map.",
          warning:
            "Pasting the paragraph, or the generated deck, into the agenda cites Perplexity. In the room you cite the report or article you opened.",
          imageDescription:
            "A meeting doc with the decision, dated claims, gaps and a «We will not say» line, separate from the Perplexity session.",
        },
        {
          title: "Check one claim against the opened source",
          content:
            "Before you walk in, pick the sentence that will carry the most weight in the room. Read it against the source tab, not against the summary. If the sentence is not on that page, it does not get said: it moves to Gaps or it is rewritten to what is actually there. Repeat the check on the second source if you are going to use a figure. The session brings you back to the citations; it does not replace this reading.",
          whatYouShouldSee:
            "A sentence struck or rewritten on the sheet, and the source tab still open.",
          proTip:
            "If you can check only one sentence, make it the figure. A figure with no origin leaves the sheet.",
          imageDescription:
            "The opened source beside the sheet, with one sentence corrected after comparing it to the passage.",
        },
      ],
      realUseCases: [
        {
          title: "A committee with one decision",
          body: "One dated question, two opened sources and three gaps. Nobody reads the chat in the room.",
        },
        {
          title: "A figure that was about to stay on the agenda",
          body: "You look for origin and date. If the page does not carry it, the figure leaves the sheet or is marked as a gap.",
        },
        {
          title: "The same topic, another week",
          body: "Today’s session goes into the Project from perplexity-collections. The new sheet is written again elsewhere, with this meeting’s date.",
        },
      ],
      commonMistakes: [
        {
          title: "Citing Perplexity in the room",
          body: "Perplexity is the path. The reference is the article or report you opened, with title and date.",
        },
        {
          title: "Bringing the copied text or a generated file",
          body: "Copy copies the answer. The help center also describes exportable documents and slide decks. Neither is the sheet until you check the claims against the opened sources.",
        },
        {
          title: "Reading the domain label as proof of the sentence",
          body: "Government, Academic or Trusted describe the site, not the passage. No label does not mean the source is bad. The sentence is checked on the page.",
        },
        {
          title: "Two meetings in the same session",
          body: "Follow-ups stay in the session and carry the earlier context. A different topic starts in another session, or in another Project if you already have one.",
        },
      ],
      conclusion:
        "For a meeting, Perplexity works as the map: one session, numbered citations and follow-ups that keep the thread. The sheet is written elsewhere, with two opened sources, gaps and one sentence you have checked. If the topic returns, the index lives in a Project; the perplexity-collections tutorial is that step, not a second summary.",
      nextSteps: [
        "If the topic lasts more than one meeting, continue with perplexity-collections: one Project per topic, not a dump of chats.",
        "If the question is still wide, run perplexity-investigacion-con-fuentes again with a narrower cut.",
        "For the tone of the sheet you already dated, use chatgpt-primeros-pasos. The facts stay the ones from the sources you opened.",
      ],
      takeaway:
        "Decision written down, a cited session, two opened sources, the sheet elsewhere. The pasted paragraph does not enter the room.",
    },
  },
};
