import type { Prompt } from "@/types/content";

const slug = "notebooklm-briefing-de-fuentes";

export const notebooklmBriefingDeFuentes: Prompt = {
  id: slug,
  slug,
  toolSlug: "notebooklm",
  use: "learn",
  publishedAt: "2026-11-27",
  lastUpdated: "2026-11-27",
  relatedTutorials: ["notebooklm-primer-briefing", "notebooklm-audio-overview"],
  relatedComparisons: ["notebooklm-vs-perplexity-investigacion"],
  copy: {
    es: {
      title: "Un briefing citado con NotebookLM",
      metaTitle: "Prompt para un briefing citado en NotebookLM",
      metaDescription:
        "Prompt listo para copiar en NotebookLM: un briefing a partir de las fuentes del cuaderno, con cita y con lo que no está. Incluye un ejemplo.",
      excerpt:
        "Un briefing para quien no leyó los documentos. Cada frase señala la fuente. Lo que no subiste, no entra.",
      purpose:
        "Sirve para convertir tres a cinco documentos que tú has elegido en un briefing con cita al pasaje, para una reunión o un entregable. NotebookLM no busca en la web: solo usa el cuaderno.",
      bestWith:
        "NotebookLM, un cuaderno por tema, con las fuentes ya subidas. Pregunta esto en el chat del cuaderno. Cuando el texto cuadre, el documento de briefing sale de Studio. Si aún no tienes los documentos y necesitas buscar, el mapa es de Perplexity.",
      prompt: `Responde solo con las fuentes de este cuaderno.

Audiencia: [quién va a leer el briefing].
Fecha de la reunión o del entregable: [fecha].
Pregunta: [qué decisión o qué explicación necesitas].

Devuelve:
1. Respuesta en 5 a 8 líneas. Cada afirmación indica la fuente y la sección o el pasaje.
2. Qué se contradice entre fuentes, si pasa.
3. Qué no está en las fuentes. Escríbelo como [NO ESTÁ EN LAS FUENTES]. No lo busques fuera.
4. Tres preguntas que aún quedan abiertas. Cada una con la fuente que más se acerca, o con [SIN FUENTE].

No añadas contexto general ni definiciones que no estén en los documentos.`,
      example: {
        input: `Audiencia: el equipo que atiende pedidos, que no ha leído las normas.
Fecha del entregable: jueves 4 de diciembre de 2026.
Pregunta: cuándo podemos aceptar una devolución de un taller ya pagado, y cuándo no.

Fuentes del cuaderno (extracto de lo que ya está subido):

Fuente A — Normas de reserva, sección Devoluciones.
«Si el alumno avisa con 7 días o más, devolvemos el importe íntegro. Entre 7 días y 48 horas, devolvemos el 50 %. Con menos de 48 horas no hay devolución, salvo que cancele el estudio.»

Fuente B — Correo del estudio a un alumno, 12 de octubre de 2026.
«Esta vez te devolvemos el 100 % aunque avisaste el día anterior, porque la profesora canceló.»

Fuente C — Nota interna, sin fecha.
«Las plazas de lista de espera no se cobran hasta que hay hueco. No mezclarlas con una devolución.»`,
        output: `1. Respuesta
Para un taller ya pagado, el aviso con 7 días o más devuelve el importe íntegro (Fuente A, Devoluciones). Entre 7 días y 48 horas, la misma sección deja la devolución en el 50 %. Con menos de 48 horas, Fuente A dice que no hay devolución. La excepción de esa frase es que cancele el estudio: el correo del 12 de octubre de 2026 (Fuente B) devuelve el 100 % porque canceló la profesora, aunque el alumno avisó el día anterior.

2. Contradicción
No hay contradicción. Fuente B es el caso «cancela el estudio» que Fuente A ya separa. No amplía el plazo del alumno.

3. Qué no está
[NO ESTÁ EN LAS FUENTES]: si el 50 % se calcula sobre el precio con impuestos o sin ellos.
[NO ESTÁ EN LAS FUENTES]: un plazo distinto para talleres de un solo día.

4. Preguntas abiertas
- ¿El aviso de 7 días cuenta desde la hora del taller o desde el día natural? Fuente A no lo dice. [SIN FUENTE]
- ¿Una plaza de lista de espera que aún no se ha cobrado sigue estas reglas? Fuente C dice que no se cobra hasta que hay hueco, y pide no mezclarla con una devolución.
- ¿Quién confirma que canceló el estudio? El correo (Fuente B) lo da por hecho y no dice el paso.`,
      },
      tweaks: [
        {
          title: "Una página para quien no leyó nada",
          body: "Pide este orden y nada más: decisión, cuatro hechos con fuente, huecos, tres preguntas. Así el briefing cabe en una página.",
        },
        {
          title: "Pasar a audio",
          body: "Cuando el texto ya cuadra con los pasajes, genera el Audio Overview y dile en qué centrarse y en qué idioma. El audio no sustituye a abrir la cita.",
        },
        {
          title: "El cuaderno mezcla temas",
          body: "Quita las fuentes que no sean de esta pregunta antes de lanzar el prompt. Si el tema es otro, abre otro cuaderno: mezclarlos mezcla las citas.",
        },
      ],
    },
    en: {
      title: "A cited briefing from your sources in NotebookLM",
      metaTitle: "Prompt for a cited briefing in NotebookLM",
      metaDescription:
        "A ready-to-copy NotebookLM prompt: a briefing from the notebook's sources, with citations and an explicit list of what is missing. Includes an example.",
      excerpt:
        "A briefing for someone who did not read the documents. Every line points at a source. What you did not upload stays out.",
      purpose:
        "Use it to turn three to five documents you chose into a briefing that cites the passage, for a meeting or a deliverable. NotebookLM does not search the web: it only uses the notebook.",
      bestWith:
        "NotebookLM, one notebook per topic, with the sources already uploaded. Ask this in the notebook chat. When the text matches the passages, the briefing document comes from Studio. If you do not have the documents yet and you need to search, the map belongs to Perplexity.",
      prompt: `Answer only from the sources in this notebook.

Audience: [who will read the briefing].
Date of the meeting or the deliverable: [date].
Question: [the decision or the explanation you need].

Return:
1. An answer in 5 to 8 lines. Each claim names the source and the section or passage.
2. Where the sources disagree, if they do.
3. What is not in the sources. Write it as [NOT IN THE SOURCES]. Do not look outside.
4. Three questions that are still open. Each one with the closest source, or with [NO SOURCE].

Do not add general context or definitions that are not in the documents.`,
      example: {
        input: `Audience: the team that handles orders, who have not read the rules.
Deliverable date: Thursday 4 December 2026.
Question: when we can accept a refund for a workshop that is already paid, and when we cannot.

Notebook sources (excerpt of what is already uploaded):

Source A — Booking rules, section Refunds.
"If the student gives notice 7 days or more ahead, we refund the full amount. Between 7 days and 48 hours, we refund 50%. Under 48 hours there is no refund, unless the studio cancels."

Source B — Email from the studio to a student, 12 October 2026.
"This time we are refunding 100% even though you wrote the day before, because the teacher cancelled."

Source C — Internal note, undated.
"Waitlist seats are not charged until a place opens. Do not treat them as a refund."`,
        output: `1. Answer
For a workshop that is already paid, notice of 7 days or more refunds the full amount (Source A, Refunds). Between 7 days and 48 hours, the same section sets the refund at 50%. Under 48 hours, Source A says there is no refund. The exception in that sentence is a studio cancellation: the email of 12 October 2026 (Source B) refunds 100% because the teacher cancelled, even though the student wrote the day before.

2. Disagreement
There is no disagreement. Source B is the "studio cancels" case that Source A already sets apart. It does not extend the student's own deadline.

3. What is missing
[NOT IN THE SOURCES]: whether the 50% is calculated on the price with tax or without it.
[NOT IN THE SOURCES]: a different deadline for one-day workshops.

4. Open questions
- Does the 7-day notice count from the workshop's start time or from the calendar day? Source A does not say. [NO SOURCE]
- Does a waitlist seat that has not been charged follow these rules? Source C says it is not charged until a place opens, and says not to treat it as a refund.
- Who confirms that the studio cancelled? The email (Source B) takes it as given and does not name the step.`,
      },
      tweaks: [
        {
          title: "One page for someone who read nothing",
          body: "Ask for this order and nothing else: the decision, four facts with a source, the gaps, three questions. The briefing then fits on a page.",
        },
        {
          title: "Move it to audio",
          body: "When the text already matches the passages, generate the Audio Overview and say what to focus on and which language to use. The audio does not replace opening the citation.",
        },
        {
          title: "The notebook mixes topics",
          body: "Remove sources that are not about this question before you send the prompt. If the topic is different, open another notebook: mixing them mixes the citations.",
        },
      ],
    },
  },
};
