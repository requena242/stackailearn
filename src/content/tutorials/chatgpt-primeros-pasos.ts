import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "chatgpt-primeros-pasos";

export const chatgptPrimerosPasos: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "beginner",
  estimatedTime: 18,
  publishedAt: "2026-08-12",
  lastUpdated: "2026-08-26",
  toolsUsed: ["chatgpt", "perplexity", "claude"],
  relatedTutorials: [
    "perplexity-investigacion-con-fuentes",
    "claude-escritura-larga",
  ],
  tags: ["chatgpt", "briefing", "principiante", "escritura", "2026"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Briefing de cuatro líneas en el composer de ChatGPT",
      caption: "El entregable va primero. El tema, después.",
      hint: "Hero 1600×900: chatgpt.com con un prompt visible de objetivo, audiencia, formato y restricciones.",
    },
    en: {
      alt: "Four-line brief in the ChatGPT composer",
      caption: "The deliverable comes first. The topic comes second.",
      hint: "Hero 1600×900: chatgpt.com with a visible prompt for goal, audience, format and constraints.",
    },
  }),
  copy: {
    es: {
      title: "Cómo escribir un primer texto útil con ChatGPT en 2026",
      metaTitle: "Cómo escribir un texto útil con ChatGPT (método 2026)",
      metaDescription:
        "Deja de pedir «un texto sobre X». Un briefing de cuatro líneas, tres variantes y una pasada de editor. Método repetible en 18 minutos.",
      excerpt:
        "Un método corto: entregable, audiencia, formato y restricciones. Tres variantes. Tú eliges. Luego guardas el prompt.",
      intro:
        "Si abres ChatGPT y escribes «hazme un texto sobre la reunión de mañana», vas a recibir un email que no puedes enviar. El modelo no es el problema: el briefing está vacío. En 18 minutos sales de aquí con un entregable concreto y un prompt que puedes repetir el martes que viene.",
      problem:
        "La gente trata ChatGPT como un buscador mágico o como un redactor senior. Es un junior rápido. Sin objetivo, formato y lo que no quieres, improvisa tono, longitud y hechos. El resultado parece «IA»: adjetivos, promesas y ni una cifra tuya.",
      whatYouWillLearn: [
        "Redactar un briefing de cuatro líneas que el modelo pueda ejecutar",
        "Pedir variantes en lugar de pelear un único borrador",
        "Dar feedback de editor (párrafo, tono, dato) y no «hazlo mejor»",
        "Marcar lo inventado y no publicar cifras que no pusiste tú",
        "Convertir el hilo ganador en una instrucción reutilizable",
      ],
      prerequisites: [
        "Cuenta en chatgpt.com. El plan gratis basta para este flujo",
        "Una tarea real de hoy: email, acta corta, brief interno o esquema de un post",
        "Los hechos que sí sabes (fecha, nombres, lo que se decidió). Si no los tienes, este no es el tutorial: ve a Perplexity primero",
        "18 minutos sin cambiar de pestaña a «probar otro modelo»",
      ],
      steps: [
        {
          title: "Elige un entregable de verdad, no un tema",
          content:
            "Antes de tocar ChatGPT, escribe en un bloc: qué tiene que existir al final (un email de 120 palabras, un acta de una página, 8 viñetas para un post) y para cuándo. Si solo tienes un tema («la reunión», «la IA», «el lanzamiento»), aún no hay trabajo que delegar. Abre un chat nuevo —no un hilo de ayer— y elige el modelo más reciente que tu plan permita. No hace falta el más caro para este ejercicio.",
          whatYouShouldSee:
            "Un chat vacío, modelo seleccionado, y en tu bloc una frase del tipo: «Email de 120 palabras a Marta, tono directo, para hoy a las 17:00».",
          tip: "Si no puedes nombrar el formato en una línea, reduce el encargo. «Texto sobre el proyecto» no es un entregable.",
          warning:
            "No pegues datos personales de terceros ni secretos de empresa en un chat que tu organización no haya aprobado.",
          imageDescription:
            "Captura del composer vacío de ChatGPT junto a una nota con el entregable escrito a mano o en un sticky: formato, destinatario y hora.",
        },
        {
          title: "Escribe el briefing en cuatro líneas (y pégalo tal cual)",
          content:
            "Pega esto y rellénalo. No lo conviertas en una novela:\n\n1) Objetivo: qué tiene que conseguir el texto.\n2) Audiencia: quién lo lee y qué sabe ya.\n3) Formato: longitud, estructura, idioma.\n4) Restricciones: lo que no quieres (jerga, emojis, «estamos encantados», cifras que no te he dado).\n\nAñade debajo los hechos en viñetas. Si un hecho no está ahí, el modelo no tiene derecho a inventarlo. Cierra el prompt con: «Si te falta un dato, pregunta o escribe [FALTA]». Eso cambia el comportamiento más que cualquier adjetivo de «sé profesional».",
          whatYouShouldSee:
            "Un prompt de 8–15 líneas en el composer, con las cuatro etiquetas visibles y 3–6 hechos debajo. Aún no has pulsado enviar.",
          tip: "Las restricciones concretas («nada de emojis», «no vendas», «tú de 120 palabras») evitan más relleno que pedir «calidad alta».",
          warning:
            "Si dejas el bloque de hechos vacío, ChatGPT rellenará huecos con naturalidad. Eso no es «creatividad»: son datos inventados.",
          proTip:
            "Una línea de voz ayuda: «Suena como un compañero de equipo, no como un comunicado de RR. HH.». Un adjetivo («cercano») no basta.",
          imageDescription:
            "Composer de ChatGPT con el briefing de 4 etiquetas + hechos + la instrucción «pregunta o [FALTA]». Sin respuesta todavía.",
        },
        {
          title: "Pide tres variantes con un ángulo distinto",
          content:
            "Envía el briefing y, en la misma frase, pide tres versiones: (A) la más directa, (B) la más cálida, (C) la más corta. Pide que etiquete cada bloque. No pidas «la mejor»: eso le obliga a adivinar tu criterio. Cuando lleguen, lee en diagonal. Quédate con un ángulo, no con frases sueltas de las tres. Copia el bloque ganador y di: «Seguimos solo con la B. Descarta A y C».",
          whatYouShouldSee:
            "Tres bloques etiquetados A/B/C. Tú has respondido eligiendo una letra, no «mézclalo todo».",
          tip: "Si las tres suenan iguales, tus restricciones eran flojas. Añade un ejemplo de frase que sí enviarías y otra que no.",
          warning:
            "No publiques todavía. En este paso solo eliges dirección. Las cifras y los nombres se revisan después.",
          imageDescription:
            "Hilo de ChatGPT con tres bloques A/B/C y tu respuesta «Seguimos solo con la B» visible debajo.",
        },
        {
          title: "Edita como un editor, no como un usuario decepcionado",
          content:
            "Señala un sitio: «El segundo párrafo promete algo que no decidimos. Quítalo.» «Sustituye “impulsar la sinergia” por lo que de verdad vamos a hacer el jueves.» «Añade la fecha del 3 de septiembre que te di; no inventes otra.» Evita «hazlo mejor», «más profesional» o «ponle punch». Esas frases no se pueden ejecutar. Si el texto es un email, léelo en voz alta. Si no lo enviarías, di por qué en una línea.",
          whatYouShouldSee:
            "Una nueva versión donde el párrafo que señalaste ha cambiado y el resto se parece a lo que habías elegido.",
          tip: "Un cambio por mensaje es más rápido que una lista de doce quejas. El modelo atiende mejor un objetivo.",
          warning:
            "Si aparece un número, un cargo o una cita que no estaba en tus hechos, márcalo. Pídele una lista «cosas que me he inventado».",
          imageDescription:
            "Mensaje tuyo citando un párrafo concreto y la respuesta reescrita solo en esa zona. Idealmente, una lista corta de invenciones debajo.",
        },
        {
          title: "Haz la pasada de hechos (o no lo envíes)",
          content:
            "Pide: «Enumera cada cifra, nombre propio, fecha y promesa. Marca con OK las que yo te di y con INVENTADO el resto.» Revisa esa lista con tus notas. Borra o sustituye lo inventado. Si te faltan datos, o los buscas (Perplexity + fuente abierta) o dejas el [FALTA] y no envías. Este paso es el que separa un tutorial de un accidente.",
          whatYouShouldSee:
            "Una lista de 4–10 ítems OK / INVENTADO. El texto final ya no contiene los INVENTADO, o están sustituidos por datos tuyos.",
          tip: "Si el entregable es interno y el riesgo es bajo, igual quieres una cifra aproximada: entonces escríbela tú («unos 20») para que no la «precise» el modelo.",
          warning:
            "Copiar el párrafo de ChatGPT a un cliente sin esta lista es el error más caro de este tutorial.",
          imageDescription:
            "Lista OK/INVENTADO bajo el borrador, con dos ítems tachados o corregidos en el texto.",
        },
        {
          title: "Guarda el prompt ganador y ciérralo en un chat sucio",
          content:
            "Cuando el texto te valga, pide: «Convierte este hilo en una instrucción reutilizable de 10 líneas: objetivo típico, formato, restricciones y la regla de [FALTA]. No incluyas los hechos de hoy.» Copia esa instrucción a Notas, a un GPT, a un proyecto o a Instrucciones personalizadas si de verdad aplica a todo lo que escribes. Luego no sigas el hilo para otra tarea: abre uno nuevo. Un chat para un entregable.",
          whatYouShouldSee:
            "Un bloque de instrucciones genéricas (sin Marta, sin el 3 de septiembre) guardado fuera de ChatGPT, y el hilo actual dado por cerrado.",
          tip: "Si usas Plus/Team, un Proyecto con esa instrucción y un ejemplo bueno/malo ahorra el briefing largo la próxima vez.",
          proTip:
            "La semana que viene no «pruebes ChatGPT». Repite este prompt con otros hechos. Si el borrador es usable en dos iteraciones, ya tienes un sistema.",
          imageDescription:
            "Instrucción reutilizable de ~10 líneas en el chat y, al lado, la misma pegada en una nota o en la pantalla de Custom Instructions.",
        },
      ],
      realUseCases: [
        {
          title: "Email que sí se envía",
          body: "Objetivo, destinatario, tono y «no vendas». Tres variantes. Eliges una, quitas el párrafo de relleno, pasas la lista OK/INVENTADO. Diez minutos, no una hora de reescritura.",
        },
        {
          title: "De notas sucias a un brief de una página",
          body: "Pegas viñetas de la reunión. Pides tesis, decisiones, dueños y huecos. No pides «un resumen bonito». Tú rellenas los huecos; ChatGPT solo ordena.",
        },
        {
          title: "Esquema de un post, no el post",
          body: "Formato (8 viñetas, H2, CTA). Dos ángulos. Te quedas con la estructura. Las frases finales las escribes tú o las pasas a Claude si el texto se alarga.",
        },
      ],
      commonMistakes: [
        {
          title: "Pedir «hazlo mejor»",
          body: "Eso no es feedback. Señala el párrafo, el tono o el dato. Si no puedes señalarlo, aún no sabes qué te molesta.",
        },
        {
          title: "Aceptar cifras sin fuente",
          body: "Si no las pusiste tú, no existen. La lista OK/INVENTADO no es opcional cuando el texto sale de tu cabeza.",
        },
        {
          title: "Un hilo para diez tareas",
          body: "El contexto se contamina: el email a Marta acaba con el tono del post de LinkedIn. Un entregable, un chat.",
        },
        {
          title: "Empezar por el modelo en vez de por el brief",
          body: "Cambiar a un modelo más caro no arregla «escríbeme algo». El briefing barato con un modelo normal gana al briefing vacío con el modelo top.",
        },
      ],
      conclusion:
        "Un texto útil con ChatGPT no es un truco de prompt. Es un entregable nombrado, hechos que tú aportas, variantes para elegir dirección y una pasada de hechos antes de enviar. Si la semana que viene puedes repetir el mismo bloque de instrucciones con otros datos y obtener un borrador revisable, ya no estás «probando la IA»: tienes un método.",
      nextSteps: [
        "Repite el flujo mañana con otra tarea real (no un ejemplo inventado).",
        "Si te faltan fuentes, haz el brief de hechos en Perplexity y vuelve aquí a redactar.",
        "Si el siguiente texto pasa de 800 palabras y el tono se aplana, abre la guía de Claude.",
      ],
      takeaway:
        "Trata a ChatGPT como un junior brillante: briefing de cuatro líneas, tres variantes, lista de lo inventado, prompt guardado. Tú firmas el envío.",
    },
    en: {
      title: "How to write a first useful draft with ChatGPT in 2026",
      metaTitle: "How to write a useful draft with ChatGPT (2026 method)",
      metaDescription:
        "Stop asking for «a text about X». A four-line brief, three variants and an editor pass. A repeatable method in 18 minutes.",
      excerpt:
        "A short method: deliverable, audience, format and constraints. Three variants. You pick. Then you save the prompt.",
      intro:
        "If you open ChatGPT and type «write me something about tomorrow’s meeting», you will get an email you cannot send. The model is not the problem: the brief is empty. In 18 minutes you leave with a concrete deliverable and a prompt you can run again next Tuesday.",
      problem:
        "People treat ChatGPT as a magic search box or as a senior writer. It is a fast junior. Without a goal, a format and a do-not list, it invents tone, length and facts. The result sounds like «AI»: adjectives, promises and none of your numbers.",
      whatYouWillLearn: [
        "Write a four-line brief the model can actually execute",
        "Ask for variants instead of wrestling one draft",
        "Give editor feedback (paragraph, tone, fact) instead of «make it better»",
        "Flag inventions and refuse to publish numbers you did not supply",
        "Turn the winning thread into a reusable instruction",
      ],
      prerequisites: [
        "A chatgpt.com account. The free plan is enough for this flow",
        "A real task today: email, short notes, internal brief or a post outline",
        "The facts you do know (date, names, what was decided). If you do not have them, this is the wrong tutorial — start in Perplexity",
        "18 minutes without tabbing away to «try another model»",
      ],
      steps: [
        {
          title: "Pick a real deliverable, not a topic",
          content:
            "Before you touch ChatGPT, write on a pad: what must exist at the end (a 120-word email, a one-page note, 8 bullets for a post) and by when. If you only have a topic («the meeting», «AI», «the launch»), there is nothing to delegate yet. Open a new chat — not yesterday’s thread — and pick the newest model your plan allows. You do not need the most expensive one for this exercise.",
          whatYouShouldSee:
            "An empty chat, a model selected, and a line on your pad like: «120-word email to Marta, direct tone, due 17:00 today».",
          tip: "If you cannot name the format in one line, shrink the job. «Text about the project» is not a deliverable.",
          warning:
            "Do not paste other people’s personal data or company secrets into a chat your org has not approved.",
          imageDescription:
            "Empty ChatGPT composer next to a note with the deliverable: format, recipient and time.",
        },
        {
          title: "Write the brief in four lines (and paste it as-is)",
          content:
            "Paste this and fill it. Do not turn it into a novel:\n\n1) Goal: what the text must achieve.\n2) Audience: who reads it and what they already know.\n3) Format: length, structure, language.\n4) Constraints: what you do not want (jargon, emoji, «we are thrilled», figures you did not give me).\n\nUnder that, add facts as bullets. If a fact is not there, the model has no right to invent it. Close with: «If you are missing a fact, ask or write [MISSING].» That changes behavior more than any «be professional» adjective.",
          whatYouShouldSee:
            "An 8–15 line prompt in the composer, four labels visible, 3–6 facts under them. You have not hit send yet.",
          tip: "Concrete constraints («no emoji», «do not sell», «120 words max») kill more filler than asking for «high quality».",
          warning:
            "If the facts block is empty, ChatGPT will fill gaps fluently. That is not creativity. It is made-up data.",
          proTip:
            "A voice line helps: «Sound like a teammate, not an HR memo.» A single adjective («friendly») is not enough.",
          imageDescription:
            "ChatGPT composer with the 4-label brief + facts + «ask or [MISSING]». No answer yet.",
        },
        {
          title: "Ask for three variants with a different angle",
          content:
            "Send the brief and, in the same breath, ask for three versions: (A) most direct, (B) warmest, (C) shortest. Ask it to label each block. Do not ask for «the best» — that makes it guess your taste. Skim them. Keep one angle, not stray sentences from all three. Paste the winner and say: «We continue with B only. Drop A and C.»",
          whatYouShouldSee:
            "Three blocks labeled A/B/C. You replied with a letter, not «mix them all».",
          tip: "If all three sound the same, your constraints were weak. Add one sentence you would send and one you would not.",
          warning:
            "Do not send it yet. This step only picks a direction. Figures and names get a pass later.",
          imageDescription:
            "ChatGPT thread with three A/B/C blocks and your reply «We continue with B only» underneath.",
        },
        {
          title: "Edit like an editor, not like a disappointed user",
          content:
            "Point at a place: «The second paragraph promises something we did not decide. Remove it.» «Replace “drive synergy” with what we are actually doing on Thursday.» «Add the 3 September date I gave you; do not invent another.» Avoid «make it better», «more professional» or «add punch». Those cannot be executed. If it is an email, read it out loud. If you would not send it, say why in one line.",
          whatYouShouldSee:
            "A new version where the paragraph you named changed and the rest still matches the angle you picked.",
          tip: "One change per message is faster than a list of twelve complaints. The model tracks one goal better.",
          warning:
            "If a number, a title or a quote appears that was not in your facts, flag it. Ask for a list of «things I made up».",
          imageDescription:
            "Your message quoting a specific paragraph and a rewrite of that zone only. Ideally a short inventions list below.",
        },
        {
          title: "Do the facts pass (or do not send it)",
          content:
            "Ask: «List every figure, proper name, date and promise. Mark OK if I gave it to you and MADE-UP otherwise.» Check that list against your notes. Delete or replace the made-up items. If you still lack a fact, either go get it (Perplexity + an opened source) or leave [MISSING] and do not send. This step is what separates a tutorial from an incident.",
          whatYouShouldSee:
            "A list of 4–10 OK / MADE-UP items. The final text no longer contains the MADE-UP ones, or they are replaced with your data.",
          tip: "If the piece is internal and low risk, you may want a rough figure: then write it yourself («about 20») so the model does not «precision» it.",
          warning:
            "Pasting ChatGPT’s paragraph to a client without this list is the most expensive mistake in this tutorial.",
          imageDescription:
            "OK/MADE-UP list under the draft, with two items struck or corrected in the text.",
        },
        {
          title: "Save the winning prompt and kill the dirty thread",
          content:
            "When the text is good enough, ask: «Turn this thread into a 10-line reusable instruction: typical goal, format, constraints and the [MISSING] rule. Do not include today’s facts.» Copy that instruction into Notes, a GPT, a project, or Custom Instructions if it truly applies to everything you write. Then do not reuse the thread for another job: open a new one. One deliverable, one chat.",
          whatYouShouldSee:
            "A generic instruction block (no Marta, no 3 September) saved outside ChatGPT, and the current thread treated as closed.",
          tip: "On Plus/Team, a Project with that instruction plus a good/bad example saves you the long brief next time.",
          proTip:
            "Next week, do not «try ChatGPT». Re-run this prompt with new facts. If the draft is usable in two iterations, you have a system.",
          imageDescription:
            "A ~10-line reusable instruction in the chat and the same text pasted into a note or the Custom Instructions screen.",
        },
      ],
      realUseCases: [
        {
          title: "An email you can actually send",
          body: "Goal, recipient, tone and «do not sell». Three variants. You pick one, cut the filler paragraph, run OK/MADE-UP. Ten minutes, not an hour of rewriting.",
        },
        {
          title: "Messy notes to a one-page brief",
          body: "Paste meeting bullets. Ask for thesis, decisions, owners and gaps. Do not ask for a «nice summary». You fill the gaps; ChatGPT only sorts.",
        },
        {
          title: "A post outline, not the post",
          body: "Format (8 bullets, H2s, CTA). Two angles. Keep the structure. You write the final lines — or move to Claude if the piece gets long.",
        },
      ],
      commonMistakes: [
        {
          title: "Asking it to «make it better»",
          body: "That is not feedback. Point at the paragraph, the tone or the fact. If you cannot point, you do not know what bothers you yet.",
        },
        {
          title: "Keeping figures with no source",
          body: "If you did not supply them, they do not exist. The OK/MADE-UP list is not optional when the text leaves your head.",
        },
        {
          title: "One thread for ten jobs",
          body: "Context rots: the email to Marta inherits the LinkedIn-post tone. One deliverable, one chat.",
        },
        {
          title: "Starting with the model instead of the brief",
          body: "Switching to a pricier model does not fix «write me something». A cheap brief on a normal model beats an empty brief on the top model.",
        },
      ],
      conclusion:
        "A useful ChatGPT draft is not a prompt trick. It is a named deliverable, facts you supply, variants so you can pick a direction, and a facts pass before you send. If next week you can reuse the same instruction block with new data and get a reviewable draft, you are no longer «trying AI». You have a method.",
      nextSteps: [
        "Run the flow tomorrow on another real task (not a made-up example).",
        "If you lack sources, build the facts brief in Perplexity and come back here to write.",
        "If the next piece goes past 800 words and the tone flattens, open the Claude guide.",
      ],
      takeaway:
        "Treat ChatGPT like a bright junior: four-line brief, three variants, a list of inventions, a saved prompt. You sign the send.",
    },
  },
};
