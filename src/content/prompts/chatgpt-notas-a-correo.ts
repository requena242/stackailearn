import type { Prompt } from "@/types/content";

const slug = "chatgpt-notas-a-correo";

export const chatgptNotasACorreo: Prompt = {
  id: slug,
  slug,
  toolSlug: "chatgpt",
  use: "write",
  publishedAt: "2026-11-27",
  lastUpdated: "2026-11-27",
  relatedTutorials: ["chatgpt-primeros-pasos", "chatgpt-projects-primer-flujo"],
  relatedComparisons: ["claude-vs-chatgpt-escritura"],
  copy: {
    es: {
      title: "Pasar notas sueltas a un correo y un plan",
      metaTitle: "Prompt para convertir notas en un correo con ChatGPT",
      metaDescription:
        "Prompt listo para copiar en ChatGPT: notas de una reunión convertidas en un correo y un plan, sin inventar dueños ni fechas. Incluye un ejemplo.",
      excerpt:
        "De unas notas desordenadas a un correo que puedes revisar y a un plan que no inventa lo que no se dijo.",
      purpose:
        "Sirve cuando sales de una reunión, una llamada o una libreta con frases sueltas y necesitas un correo para enviar y una lista de acciones. Lo que no está en las notas se marca, no se rellena.",
      bestWith:
        "ChatGPT, en un chat nuevo. Para una sola reunión basta. Si el mismo cliente o el mismo tono se repiten, guarda el contexto en un Project y deja este prompt como primer mensaje de cada chat.",
      prompt: `Convierte estas notas en dos entregables. No añadas hechos que no estén en las notas.

Notas:
[pega aquí]

Contexto:
- Quién escribe: [nombre y rol]
- A quién va el correo: [persona o equipo]
- Tono: [breve y directo / formal]

Entregable A — Correo
- Asunto de una línea.
- Cuerpo de 8 a 12 líneas: qué se decidió, qué queda abierto y qué pides.
- Si falta un dato para poder enviar el correo, escribe [FALTA: …] en vez de inventarlo.

Entregable B — Plan
Tabla con columnas: acción, dueño, fecha, dependencia.
- Dueño y fecha solo si aparecen en las notas. Si no, [SIN DUEÑO] o [SIN FECHA].
- No conviertas una idea suelta en una tarea.`,
      example: {
        input: `Quién escribe: Ana Ruiz, producto.
A quién va el correo: el equipo de la web.
Tono: breve y directo.

Notas de la llamada (12 de noviembre):
- la home nueva se queda en una página, sin blog
- Marta manda el mapa de secciones el viernes
- precios: no los tenemos, esperar a finanzas
- ¿hace falta el buscador? nadie lo cerró
- Ana habla el lunes con el estudio
- "a lo mejor un filtro por ciudad" — lo dijo Luis, no se decidió`,
        output: `Entregable A — Correo
Asunto: Home nueva en una página, y lo que falta para avanzar

Equipo,

En la llamada del 12 de noviembre dejamos la home nueva en una sola página, sin blog.

Marta envía el mapa de secciones el viernes. Yo hablo con el estudio el lunes.

El buscador no quedó cerrado. Los precios tampoco: [FALTA: la cifra, cuando finanzas la tenga]. Hasta entonces no entran en el texto.

Un filtro por ciudad salió como idea y no se decidió. No lo incluyo en el encargo.

Ana

Entregable B — Plan
Acción | Dueño | Fecha | Dependencia
Mapa de secciones | Marta | viernes (semana de la llamada del 12 de noviembre) | —
Llamada con el estudio | Ana | lunes | mapa de Marta, si tiene que ir a esa llamada: [NO ESTÁ EN LAS NOTAS]
Cifra de precios | [SIN DUEÑO] | [SIN FECHA] | finanzas
Buscador | — | — | no es una tarea: quedó abierto
Filtro por ciudad | — | — | idea de Luis, no se decidió`,
      },
      tweaks: [
        {
          title: "Solo el correo",
          body: "Borra el entregable B. Úsalo cuando el plan ya vive en otra herramienta y solo te falta el mensaje.",
        },
        {
          title: "Plan interno, correo después",
          body: "Pide primero la tabla y, en un segundo mensaje, el correo a partir de las filas que tú hayas confirmado. Así no se cuela una tarea que ibas a tachar.",
        },
        {
          title: "Notas en otro idioma",
          body: "Añade: «Las notas pueden estar en otro idioma. El correo y el plan, en español.» Los nombres propios se quedan como están.",
        },
      ],
    },
    en: {
      title: "Turn loose notes into an email and a plan",
      metaTitle: "Prompt to turn notes into an email with ChatGPT",
      metaDescription:
        "A ready-to-copy ChatGPT prompt that turns meeting notes into an email and a plan, without inventing owners or dates. Includes a worked example.",
      excerpt:
        "From messy notes to an email you can review and a plan that does not invent what nobody said.",
      purpose:
        "Use it when you leave a meeting, a call or a notebook with loose lines and you need an email to send and a list of actions. What is not in the notes gets marked, not filled in.",
      bestWith:
        "ChatGPT, in a new chat. One meeting needs nothing else. If the same client or the same tone comes back, keep that context in a Project and use this prompt as the first message of each chat.",
      prompt: `Turn these notes into two deliverables. Do not add facts that are not in the notes.

Notes:
[paste here]

Context:
- Who is writing: [name and role]
- Who the email is for: [person or team]
- Tone: [short and direct / formal]

Deliverable A — Email
- A one-line subject.
- A body of 8 to 12 lines: what was decided, what is still open, and what you are asking for.
- If a fact is missing and the email cannot go out without it, write [MISSING: …] instead of inventing it.

Deliverable B — Plan
A table with columns: action, owner, date, dependency.
- Owner and date only if they appear in the notes. Otherwise [NO OWNER] or [NO DATE].
- Do not turn a stray idea into a task.`,
      example: {
        input: `Who is writing: Ana Ruiz, product.
Who the email is for: the website team.
Tone: short and direct.

Call notes (12 November):
- the new homepage stays as one page, no blog
- Marta sends the section map on Friday
- prices: we don't have them, wait for finance
- do we need search? nobody closed it
- Ana talks to the studio on Monday
- "maybe a filter by city" — Luis said it, not decided`,
        output: `Deliverable A — Email
Subject: New homepage as one page, and what is still blocking us

Team,

On the 12 November call we kept the new homepage as a single page, with no blog.

Marta sends the section map on Friday. I talk to the studio on Monday.

Search was not closed. Neither were the prices: [MISSING: the figure, once finance has it]. They stay out of the copy until then.

A filter by city came up as an idea and was not decided. I am not putting it in the brief.

Ana

Deliverable B — Plan
Action | Owner | Date | Dependency
Section map | Marta | Friday (the week of the 12 November call) | —
Call with the studio | Ana | Monday | Marta's map, if that call needs it: [NOT IN THE NOTES]
Price figure | [NO OWNER] | [NO DATE] | finance
Search | — | — | not a task: left open
Filter by city | — | — | Luis's idea, not decided`,
      },
      tweaks: [
        {
          title: "Email only",
          body: "Delete deliverable B. Use that when the plan already lives somewhere else and you only need the message.",
        },
        {
          title: "Internal plan first, email second",
          body: "Ask for the table first and, in a second message, the email from the rows you have confirmed. A task you meant to cross out never makes it into the mail.",
        },
        {
          title: "Notes in another language",
          body: "Add: \"The notes may be in another language. Write the email and the plan in English.\" Leave proper names as they are.",
        },
      ],
    },
  },
};
