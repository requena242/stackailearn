import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "gemini-workspace-primer-flujo";

export const geminiWorkspacePrimerFlujo: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "beginner",
  estimatedTime: 18,
  publishedAt: "2026-11-06",
  lastUpdated: "2026-11-06",
  toolsUsed: ["gemini"],
  relatedTutorials: [
    "chatgpt-primeros-pasos",
    "notebooklm-primer-briefing",
    "claude-briefing-documento",
  ],
  tags: ["gemini", "workspace", "gmail", "docs", "drive"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Gmail con un hilo abierto y el panel Pregunta a Gemini, un archivo de Drive en fuentes y un borrador de respuesta",
      caption:
        "El entregable es la respuesta contrastada con el hilo y el archivo, no el primer resumen del panel.",
      hint: "Hero 1600×900: mail.google.com con un hilo abierto, el panel Pregunta a Gemini a la derecha, Añadir fuentes con un Doc de Drive y un borrador de 8–12 líneas.",
    },
    en: {
      alt: "Gmail with a thread open and the Ask Gemini panel, a Drive file in sources, and a reply draft",
      caption:
        "The deliverable is the reply you checked against the thread and the file, not the panel’s first summary.",
      hint: "Hero 1600×900: mail.google.com with a thread open, the Ask Gemini panel on the right, Add sources showing a Drive Doc, and an 8–12 line draft.",
    },
  }),
  copy: {
    es: {
      title: "Gemini: primer flujo en Google Workspace (2026)",
      metaTitle: "Gemini en Workspace: primer flujo en Gmail (2026)",
      metaDescription:
        "Un hilo de Gmail, un archivo de Drive y el panel Pregunta a Gemini. Resumen contrastado, respuesta en Responder y un Doc de seguimiento. 18 minutos.",
      excerpt:
        "Responde un hilo real con Gemini en Gmail, un solo archivo de Drive como fuente y un Doc de seguimiento. El primer resumen no se envía.",
      intro:
        "El primer flujo útil de Gemini en Workspace no empieza en gemini.google.com. Empieza en el hilo que ya tienes abierto. En el ordenador, Gmail muestra Pregunta a Gemini arriba a la derecha: es el panel lateral de Gemini en Gmail, el mismo tipo de panel que Docs, Drive, Sheets, Slides y Chat. En unos 18 minutos resumes ese hilo, fijas un archivo de Drive como fuente, pegas una respuesta en Responder y dejas un documento de Google con lo que sí vas a afirmar. La guía de Gmail está en https://support.google.com/mail/answer/14355636 y el mapa de superficies en https://support.google.com/a/users/answer/15146419.",
      problem:
        "Pedir «contesta este correo» en la aplicación Gemini, o en el panel antes de leer el hilo, devuelve un texto cerrado con fechas y compromisos que no están en los mensajes. Sin un archivo de Drive fijado y sin contrastar, ese borrador no se puede enviar.",
      whatYouWillLearn: [
        "Abrir Pregunta a Gemini sobre un hilo concreto, no en gemini.google.com",
        "Pedir un resumen del hilo y corregirlo contra los mensajes",
        "Añadir un solo archivo de Drive con Añadir fuentes y cerrar la búsqueda web",
        "Sacar la lista de hechos que sí puedes usar y abrir Fuentes",
        "Copiar el borrador a Responder y quitar lo que no consta",
        "Crear un documento de Google de seguimiento y leerlo antes de enviar el correo",
      ],
      prerequisites: [
        "Gmail en el ordenador (mail.google.com) con Pregunta a Gemini. La ayuda lo condiciona a un plan apto de Google Workspace o de IA de Google, y también está en Google Workspace Experiments para cuentas personales: https://support.google.com/mail/answer/14355636",
        "Si el icono no aparece en una cuenta de trabajo, un administrador puede tener Gemini apagado en Gmail. El acceso, además, pide tener activadas las funciones inteligentes y la personalización: https://knowledge.workspace.google.com/admin/gemini/manage-access-to-gemini-features-in-workspace-services",
        "Un hilo real que tengas que contestar, abierto en pantalla",
        "Un archivo que puedas ver en Drive: un Documento, una Hoja de cálculo, una Presentación o un PDF ya subido. Esos son los tipos que la ayuda admite como fuente: https://support.google.com/drive/answer/16813283",
        "18 minutos en la misma pestaña de Gmail. La aplicación de gemini.google.com y los Gems quedan fuera de este flujo",
      ],
      steps: [
        {
          title: "Elige el hilo, el archivo y la frase de resultado",
          content:
            "Abre en Gmail un solo hilo que de verdad tengas que contestar. Al lado, localiza un solo archivo de Drive que tenga los hechos: el alcance, las notas de la reunión o el PDF de la propuesta. Si el PDF sigue en el escritorio, súbelo a Drive antes de seguir; Añadir desde Drive no coge archivos locales. Escribe fuera del correo, en una línea: «La respuesta confirma ___, pregunta ___ y no promete ___.» Si no puedes rellenar los tres huecos, el trabajo todavía no está definido y el panel va a inventar el tercero.",
          whatYouShouldSee:
            "El hilo abierto, el nombre exacto del archivo anotado y una frase con los tres huecos rellenos.",
          tip: "Un hilo y un archivo. La ayuda avisa de que, con demasiadas fuentes o con textos muy largos, Gemini puede usar solo una parte.",
          imageDescription:
            "Gmail con un hilo abierto y una nota al lado: nombre del archivo de Drive y la frase «confirma / pregunta / no promete».",
        },
        {
          title: "Abre Pregunta a Gemini y pide solo el resumen",
          content:
            "Con el hilo abierto, arriba a la derecha pulsa Pregunta a Gemini. Se abre el panel de Gemini en Gmail. Abajo, en la ventana de petición, escribe: «Resume solo este hilo abierto, sin borrador y sin recomendaciones. Lista: decisiones ya tomadas, preguntas abiertas, fechas, nombres y cualquier frase que suene a compromiso. Si no lo ves en el hilo, escribe “no consta”.» Pulsa Enviar en el panel, el botón de la petición. No es el Enviar del correo.\n\nSi Pregunta a Gemini no está, paras aquí: plan, experimento o el ajuste de administrador del requisito anterior. No copies el hilo a gemini.google.com para “seguir igual”. Esa aplicación es otro chat. El hilo que tienes delante lo ve el panel de Gmail. El control de redacción dentro de la ventana de Responder (en la ayuda en inglés, Help me write) también es otro sitio: este flujo se queda en el panel para no partir el contexto.",
          whatYouShouldSee:
            "El panel a la derecha del hilo, con una lista de decisiones, preguntas, fechas y nombres, y sin un borrador de respuesta.",
          warning:
            "«Contesta este correo» como primer mensaje devuelve un relato. El resumen dice si el panel ha leído el hilo que tienes abierto.",
          imageDescription:
            "Panel Pregunta a Gemini junto al hilo, con viñetas de decisiones, fechas y nombres, y el botón Enviar de la petición.",
        },
        {
          title: "Contrasta el resumen con los mensajes",
          content:
            "Vuelve al hilo y abre los mensajes, no te quedes en el panel. Marca cada fecha, cada nombre y cada cifra de la lista. Lo que no aparezca en un mensaje se lo dices en el siguiente turno: «Corrige el resumen. La fecha en el mensaje de [nombre] es [fecha], no la que has puesto. No añadas recomendaciones. Vuelve a marcar “no consta” donde el hilo no lo diga.» Repite hasta que cada punto de la lista se pueda señalar en un mensaje concreto.\n\nLa conversación de este panel queda en Más opciones → Historial. Si empiezas una conversación nueva, el archivo que añadas en el paso siguiente no viaja solo: hay que volver a fijarlo.",
          whatYouShouldSee:
            "Una lista corregida en la que cada fecha, nombre y cifra se puede señalar en un mensaje del hilo.",
          tip: "Si un punto sigue sin mensaje de respaldo después de la corrección, bórralo de la lista a mano. No entra en la respuesta.",
          imageDescription:
            "El hilo de Gmail con dos mensajes marcados al lado de la lista corregida del panel.",
        },
        {
          title: "Fija un archivo de Drive y cierra la búsqueda web",
          content:
            "En la parte inferior del panel pulsa Añadir fuentes, luego Añadir desde Drive, elige el archivo que anotaste y pulsa Añadir. También vale escribir @ y elegir ese archivo en el menú. Sirven Documentos, Hojas de cálculo, Presentaciones y PDFs de Drive. Hace falta permiso de lectura: si no puedes ver el archivo, el panel avisa de que necesitas acceso y ese archivo no entra.\n\nDespués, Añadir fuentes → Ajustes de búsqueda de Gemini y desactiva Búsqueda web. Deja el archivo que acabas de añadir. La ayuda es explícita en un límite: Gemini busca en las fuentes que seleccionas, y además puede usar datos de aplicaciones que un administrador haya habilitado y actividad de otras apps de Workspace para priorizar información. Cerrar la búsqueda web quita la web abierta de este turno. No convierte el archivo en un corpus cerrado. Si cada frase tiene que citar solo fuentes que subiste a un cuaderno, el flujo es notebooklm-primer-briefing, no este panel.",
          whatYouShouldSee:
            "El archivo elegido dentro de las fuentes de esta conversación y Búsqueda web desactivada en Ajustes de búsqueda de Gemini.",
          warning:
            "Cinco archivos “por si acaso” empujan el límite de contexto. Uno, el que tiene los hechos de la frase del paso 1.",
          imageDescription:
            "Menú Añadir fuentes con Añadir desde Drive y, al lado, Ajustes de búsqueda de Gemini con Búsqueda web desactivada.",
        },
        {
          title: "Pide los hechos que sí puedes usar y abre Fuentes",
          content:
            "En la misma conversación: «Con este hilo y el archivo que acabo de añadir, lista solo los hechos que puedo usar en la respuesta. Si el archivo y el hilo no coinciden, di qué dice cada uno y no elijas tú. No rellenes huecos. No uses la búsqueda web.» Pulsa Enviar del panel.\n\nDebajo de la respuesta, selecciona Fuentes. Comprueba que el archivo que añadiste está en la lista. La propia ayuda dice que Gemini puede omitir una fuente que sí usó, citar un documento que no sostiene esa frase o inventarse una fuente. Si el archivo no aparece, o aparece otro que tú no añadiste, el siguiente mensaje es: «Ese hecho no está en [nombre del archivo] ni en el hilo. Quítalo.» Hasta que la lista cuadre, no hay borrador.",
          whatYouShouldSee:
            "Una lista corta de hechos, con el desacuerdo escrito cuando el hilo y el archivo digan cosas distintas, y Fuentes abierto mostrando tu archivo.",
          imageDescription:
            "Respuesta del panel con la lista de hechos y el bloque Fuentes abierto con el nombre del archivo de Drive.",
        },
        {
          title: "Redacta, copia a Responder y tacha lo que no consta",
          content:
            "Ahora sí el borrador, en el mismo panel: «Redacta la respuesta a [nombre]. Tono directo, 8–12 líneas. Confirma [lo que escribiste en el paso 1], pregunta [lo que escribiste] y no prometas [lo que escribiste]. Cada fecha y cada cifra tiene que salir de la lista de hechos. Si no está, escribe [no consta] en vez de inventarla.» Enviar del panel.\n\nEn la respuesta, pulsa Copiar. En el hilo, pulsa Responder y pega. Lee el texto dentro del correo, no en el panel. Borra cada [no consta] y cada frase que no puedas señalar en el hilo o en el archivo. El botón Enviar del correo sigue sin pulsarse. Si el borrador se fue de tono, dilo en el panel («más corto, sin saludo largo») y vuelve a copiar. No reescribas encima de una versión que ya no coincide con la lista.",
          whatYouShouldSee:
            "Un borrador pegado en Responder, sin marcadores [no consta], y el botón Enviar del correo sin pulsar.",
          warning:
            "Enviar del panel manda la petición. Enviar del correo manda el mensaje. En este paso solo se pulsa el del panel, y luego Copiar.",
          imageDescription:
            "Borrador pegado en la ventana Responder de Gmail, con el botón Enviar del correo a la vista y sin pulsar, y Copiar visible en el panel.",
        },
        {
          title: "Crea el Doc de seguimiento y envía solo lo leído",
          content:
            "Última petición, todavía en el panel de este hilo: «Crea un documento de Google titulado “Seguimiento: [asunto del hilo]” con tres apartados y nada más: hechos confirmados, el texto de la respuesta que voy a enviar, y preguntas abiertas. No añadas compromisos que no estén en esa respuesta.» Enviar del panel. Gemini en Gmail puede crear un documento de Google desde una petición de este tipo. Quédate en la pestaña hasta que la respuesta termine. Abre el documento que devuelva el panel.\n\nLéelo al lado del hilo y del archivo. Borra cualquier línea que no puedas señalar. Si el panel devuelve solo el texto y no un documento, créalo tú en docs.google.com, pega los tres apartados y no lances otra generación. Cuando el Doc y el texto de Responder digan lo mismo, envías el correo. El Doc es el registro de lo que contrastaste; el correo es la copia que ya leíste.\n\nSi el siguiente trabajo son citas ancladas a un cuaderno de fuentes, cambia de producto: notebooklm-primer-briefing. Si el seguimiento se convierte en un documento largo fuera de este hilo, el método de claude-briefing-documento encaja mejor que otro turno de este panel.",
          whatYouShouldSee:
            "Un documento de Google con tres apartados que coinciden con la lista de hechos y con el texto que hay en Responder, y el correo enviado solo después de esa lectura.",
          proTip:
            "Deja la fecha en el título del Doc (Seguimiento: asunto, 2026-11-06). Dentro de una semana sabrás qué versión de la respuesta guardaste.",
          imageDescription:
            "Documento de Google con tres apartados — hechos confirmados, texto de la respuesta, preguntas abiertas — al lado del hilo de Gmail.",
        },
      ],
      realUseCases: [
        {
          title: "Respuesta a un cliente",
          body: "El hilo pide una fecha. El Doc de alcance en Drive tiene otra. El panel escribe el desacuerdo, tú eliges la frase y el correo sale sin una tercera fecha.",
        },
        {
          title: "Seguimiento interno",
          body: "El hilo de la reunión y las notas en un Doc de Drive. La respuesta confirma lo que está en los dos sitios y el Doc de seguimiento guarda las preguntas que siguen abiertas.",
        },
        {
          title: "PDF de propuesta",
          body: "El PDF ya está en Drive. Se añade como fuente, Fuentes lo muestra, y la respuesta no cita páginas que el archivo no tiene.",
        },
      ],
      commonMistakes: [
        {
          title: "Empezar en gemini.google.com",
          body: "La aplicación Gemini es otro chat. Este hilo lo ve Pregunta a Gemini dentro de Gmail. Los Gems se crean en gemini.google.com y no hacen falta para esta respuesta.",
        },
        {
          title: "Pedir la respuesta antes del resumen",
          body: "El borrador llega con compromisos que nadie escribió. Primero la lista, después los hechos, después el texto.",
        },
        {
          title: "Fiarse de Fuentes sin abrir el archivo",
          body: "La ayuda dice que Gemini puede citar un documento que no sostiene la frase o inventarse una fuente. Fuentes se abre, y el archivo también.",
        },
        {
          title: "Pulsar Enviar del correo con [no consta] todavía dentro",
          body: "El marcador es la señal de que ese dato no estaba. Se borra o se sustituye por una frase que sí está en el hilo o en el archivo.",
        },
      ],
      conclusion:
        "Gemini en Gmail, con un archivo de Drive fijado en Añadir fuentes, acorta el salto entre el hilo, el documento y la respuesta. Tú escribes la frase de resultado, corriges el resumen contra los mensajes, miras Fuentes y pegas en Responder solo lo que puedes señalar. El documento de seguimiento se lee antes de pulsar Enviar en el correo. La aplicación de gemini.google.com sigue sirviendo para un chat suelto; este trabajo vive en el panel del hilo.",
      nextSteps: [
        "Si mañana la exigencia es citar solo un cuaderno de fuentes, sigue notebooklm-primer-briefing.",
        "Si quieres el mismo orden (objetivo, formato, revisión) en un chat que no es Workspace, el método está en chatgpt-primeros-pasos.",
        "Si el seguimiento ya no cabe en un correo y pasa a un documento largo, usa claude-briefing-documento.",
      ],
      takeaway:
        "Un hilo, un archivo de Drive, el resumen contrastado y la respuesta pegada en Responder. El primer texto del panel no se envía.",
    },
    en: {
      title: "Gemini: a first Google Workspace flow (2026)",
      metaTitle: "Gemini in Workspace: first Gmail flow (2026)",
      metaDescription:
        "One Gmail thread, one Drive file, and the Ask Gemini panel. A checked summary, a reply in Reply, and a follow-up Doc. 18 minutes.",
      excerpt:
        "Answer one real thread with Gemini in Gmail, a single Drive file as the source, and a follow-up Doc. The first summary does not get sent.",
      intro:
        "The first useful Gemini in Workspace flow does not start at gemini.google.com. It starts on the thread you already have open. On a computer, Gmail shows Ask Gemini at the top right: that is the Gemini in Gmail side panel, the same kind of panel as in Docs, Drive, Sheets, Slides, and Chat. In about 18 minutes you summarize that thread, pin one Drive file as a source, paste a reply into Reply, and leave a Google Doc of what you will actually claim. The Gmail guide is at https://support.google.com/mail/answer/14355636 and the map of surfaces is at https://support.google.com/a/users/answer/15146419.",
      problem:
        "Asking “reply to this email” in the Gemini app, or in the panel before you read the thread, returns a finished note with dates and commitments that are not in the messages. Without a pinned Drive file and a check against the thread, that draft is not ready to send.",
      whatYouWillLearn: [
        "Open Ask Gemini on one thread, not at gemini.google.com",
        "Ask for a thread summary and correct it against the messages",
        "Add one Drive file with Add sources and turn Web search off",
        "Get the list of facts you may use and open Sources",
        "Copy the draft into Reply and remove anything that is not in the sources",
        "Create a follow-up Google Doc and read it before you send",
      ],
      prerequisites: [
        "Gmail on a computer (mail.google.com) with Ask Gemini. Help Center requires an eligible Google Workspace or Google AI plan, and the feature is also in Google Workspace Experiments for personal accounts: https://support.google.com/mail/answer/14355636",
        "If the icon is missing on a work account, an admin may have turned Gemini off for Gmail. Access also requires smart features and personalization to be on: https://knowledge.workspace.google.com/admin/gemini/manage-access-to-gemini-features-in-workspace-services",
        "One real thread you actually need to answer, open on screen",
        "One file you can view in Drive: a Google Doc, Sheet, Slides deck, or a PDF already uploaded. Those are the types the help page accepts as a source: https://support.google.com/drive/answer/16813283",
        "18 minutes in the same Gmail tab. The gemini.google.com app and Gems stay out of this flow",
      ],
      steps: [
        {
          title: "Pick the thread, the file, and the outcome sentence",
          content:
            "Open one Gmail thread you actually have to answer. Next to it, find one Drive file that holds the facts: the scope, the meeting notes, or the proposal PDF. If the PDF is still on your desktop, upload it to Drive before you continue; Add from Drive does not take local files. Write one line outside the email: “The reply confirms ___, asks ___, and does not promise ___.” If you cannot fill the three blanks, the job is not defined yet and the panel will invent the third one.",
          whatYouShouldSee:
            "The thread open, the exact file name written down, and one sentence with the three blanks filled in.",
          tip: "One thread and one file. The help page warns that too many sources, or sources with too much text, can make Gemini use only part of the content.",
          imageDescription:
            "Gmail with a thread open and a note beside it: the Drive file name and the sentence “confirms / asks / does not promise”.",
        },
        {
          title: "Open Ask Gemini and ask only for the summary",
          content:
            "With the thread open, at the top right click Ask Gemini. The Gemini in Gmail panel opens. At the bottom, in the prompt box, write: “Summarize only this open thread. No draft and no recommendations. List decisions already made, open questions, dates, names, and any sentence that sounds like a commitment. If you cannot see it in the thread, write [not in the source].” Click Submit on the prompt. That is not Send on the email.\n\nIf Ask Gemini is missing, stop here: plan, experiment, or the admin setting from the prerequisite. Do not paste the thread into gemini.google.com to “keep going”. That app is a different chat. The thread on screen is visible to the Gmail panel. Help me write, inside the compose window, is a different control too (https://support.google.com/a/users/answer/15146419). This flow stays in the panel so the context is not split.",
          whatYouShouldSee:
            "The panel to the right of the thread, with a list of decisions, questions, dates, and names, and no reply draft.",
          warning:
            "“Reply to this email” as the first message returns a story. The summary tells you whether the panel read the thread you have open.",
          imageDescription:
            "Ask Gemini panel next to the thread, with bullets for decisions, dates, and names, and the prompt’s Submit button.",
        },
        {
          title: "Check the summary against the messages",
          content:
            "Go back to the thread and open the messages. Do not stay in the panel. Mark every date, name, and figure in the list. Anything that is not in a message goes into the next turn: “Correct the summary. The date in [name]’s message is [date], not the one you wrote. Do not add recommendations. Mark [not in the source] again wherever the thread does not say it.” Repeat until each point in the list can be pointed at in a specific message.\n\nThis panel’s conversation is under More options → History. If you start a new conversation, the file you add in the next step does not come along by itself: you have to pin it again.",
          whatYouShouldSee:
            "A corrected list where every date, name, and figure can be pointed at in a message in the thread.",
          tip: "If a point still has no message behind it after the correction, delete it from the list yourself. It does not go into the reply.",
          imageDescription:
            "The Gmail thread with two messages marked, next to the corrected list in the panel.",
        },
        {
          title: "Pin one Drive file and turn Web search off",
          content:
            "At the bottom of the panel click Add sources, then Add from Drive, select the file you wrote down, and click Add. Typing @ and picking that file from the menu does the same job. Google Docs, Sheets, Slides, and Drive PDFs are the types you can add. You need permission to view the file. If you cannot see it, the panel warns you — the English help quotes the alert “You need access to some files.” — and that file does not count as a source.\n\nThen open Add sources → Gemini search settings and turn Web search off. Keep the file you just added. The help page states a limit in plain words: Gemini searches the sources you selected, and it may also use app data an admin has enabled and activity across Workspace apps to prioritize information. Turning Web search off takes the open web out of this turn. It does not make the file a closed corpus. When every sentence must cite only sources you uploaded to a notebook, the flow is notebooklm-primer-briefing, not this panel.",
          whatYouShouldSee:
            "The file you chose inside this conversation’s sources, and Web search turned off in Gemini search settings.",
          warning:
            "Five files “just in case” push the context limit. One file: the one that holds the facts in the sentence from step 1.",
          imageDescription:
            "Add sources menu with Add from Drive and, beside it, Gemini search settings with Web search turned off.",
        },
        {
          title: "Ask for the facts you may use and open Sources",
          content:
            "In the same conversation: “Using this thread and the file I just added, list only the facts I may use in the reply. If the file and the thread disagree, say what each one says and do not pick a winner. Do not fill gaps. Do not use web search.” Click Submit in the panel.\n\nBelow the response, select Sources. Check that the file you added is in the list. The help page says Gemini might miss a source it used, cite a document that does not support that sentence, or make up a source. If your file is absent, or another file you did not add is present, the next message is: “That fact is not in [file name] or in the thread. Remove it.” Until the list matches, there is no draft.",
          whatYouShouldSee:
            "A short list of facts, with the disagreement written out when the thread and the file say different things, and Sources open on your file.",
          imageDescription:
            "Panel response with the fact list and the Sources block open on the Drive file name.",
        },
        {
          title: "Draft, copy into Reply, and cut what is not sourced",
          content:
            "Now the draft, still in the same panel: “Draft the reply to [name]. Direct tone, 8–12 lines. Confirm [what you wrote in step 1], ask [what you wrote], and do not promise [what you wrote]. Every date and figure has to come from the fact list. If it is not there, write [not in the source] instead of inventing it.” Click Submit in the panel.\n\nOn the response, click Copy. In the thread, click Reply and paste. Read the text inside the email, not in the panel. Delete every [not in the source] and every sentence you cannot point at in the thread or in the file. Leave Send on the email unclicked. If the tone drifted, say so in the panel (“shorter, no long greeting”) and copy again. Do not edit on top of a version that no longer matches the list.",
          whatYouShouldSee:
            "A draft pasted into Reply, with no [not in the source] markers left, and Send on the email still unclicked.",
          warning:
            "Submit in the panel sends the prompt. Send on the email sends the message. In this step you click Submit, then Copy.",
          imageDescription:
            "Draft pasted into Gmail’s Reply box, Send visible and unclicked, and Copy visible in the panel.",
        },
        {
          title: "Create the follow-up Doc and send only what you read",
          content:
            "Last prompt, still in this thread’s panel: “Create a Google Doc titled ‘Follow-up: [thread subject]’ with three sections and nothing else: confirmed facts, the reply text I am about to send, and open questions. Do not add commitments that are not in that reply.” Click Submit. Gemini in Gmail can create a Google Doc from a prompt like this. Stay on the tab until the response finishes. Open the document the panel returns.\n\nRead it next to the thread and the file. Delete any line you cannot point at. If the panel returns only the text and not a document, create the Doc yourself at docs.google.com, paste the three sections, and do not run another generation. When the Doc and the text in Reply say the same thing, send the email. The Doc is the record of what you checked; the email is the copy you already read.\n\nWhen the next job is citations locked to a notebook of sources, switch products: notebooklm-primer-briefing. When the follow-up no longer fits in an email and becomes a long document, the method in claude-briefing-documento fits better than another turn in this panel.",
          whatYouShouldSee:
            "A Google Doc with three sections that match the fact list and the text in Reply, and the email sent only after that read.",
          proTip:
            "Put the date in the Doc title (Follow-up: subject, 2026-11-06). A week later you will know which version of the reply you kept.",
          imageDescription:
            "A Google Doc with three sections — confirmed facts, reply text, open questions — next to the Gmail thread.",
        },
      ],
      realUseCases: [
        {
          title: "A reply to a client",
          body: "The thread asks for a date. The scope Doc in Drive has a different one. The panel writes the disagreement, you choose the sentence, and the email goes out without a third date.",
        },
        {
          title: "An internal follow-up",
          body: "The meeting thread and the notes in a Drive Doc. The reply confirms what is in both, and the follow-up Doc keeps the questions that are still open.",
        },
        {
          title: "A proposal PDF",
          body: "The PDF is already in Drive. You add it as a source, Sources shows it, and the reply does not cite pages the file does not have.",
        },
      ],
      commonMistakes: [
        {
          title: "Starting at gemini.google.com",
          body: "The Gemini app is a different chat. This thread is visible to Ask Gemini inside Gmail. Gems are created at gemini.google.com and are not required for this reply.",
        },
        {
          title: "Asking for the reply before the summary",
          body: "The draft arrives with commitments nobody wrote. The list first, then the facts, then the text.",
        },
        {
          title: "Trusting Sources without opening the file",
          body: "The help page says Gemini can cite a document that does not support the sentence, or make up a source. Open Sources, and open the file.",
        },
        {
          title: "Clicking Send while [not in the source] is still in the reply",
          body: "The marker means that fact was not there. Delete it or replace it with a sentence that is in the thread or in the file.",
        },
      ],
      conclusion:
        "Gemini in Gmail, with a Drive file pinned in Add sources, shortens the gap between the thread, the document, and the reply. You write the outcome sentence, correct the summary against the messages, look at Sources, and paste into Reply only what you can point at. The follow-up document is read before you click Send on the email. The gemini.google.com app is still the place for a loose chat; this job lives in the thread’s panel.",
      nextSteps: [
        "If tomorrow the requirement is to cite only a notebook of sources, continue with notebooklm-primer-briefing.",
        "If you want the same order (goal, format, review) in a chat that is not Workspace, the method is in chatgpt-primeros-pasos.",
        "If the follow-up no longer fits in an email and becomes a long document, use claude-briefing-documento.",
      ],
      takeaway:
        "One thread, one Drive file, the summary checked against the messages, and the reply pasted into Reply. The panel’s first text does not get sent.",
    },
  },
};
