import type { Prompt } from "@/types/content";

const slug = "cursor-depurar-con-contexto";

export const cursorDepurarConContexto: Prompt = {
  id: slug,
  slug,
  toolSlug: "cursor",
  use: "code",
  publishedAt: "2026-11-27",
  lastUpdated: "2026-11-27",
  relatedTutorials: ["cursor-depurar-errores", "cursor-repo-existente"],
  relatedComparisons: ["cursor-vs-claude-codigo"],
  copy: {
    es: {
      title: "Depurar un bug en Cursor con poco contexto",
      metaTitle: "Prompt para depurar un bug en Cursor",
      metaDescription:
        "Prompt listo para copiar en el agente de Cursor: hipótesis antes del diff, con el error, lo que esperabas y los archivos permitidos. Incluye un ejemplo.",
      excerpt:
        "El agente no edita hasta que hay hipótesis. Tú pegas el error, el alcance y el comando que manda.",
      purpose:
        "Sirve cuando tienes un fallo reproducible y quieres un cambio pequeño, no un repaso del repo. El primer mensaje pide causas. El diff llega solo cuando tú eliges una.",
      bestWith:
        "Cursor, en modo Agent, sobre una rama que no sea main. Dos o tres archivos permitidos. El comando de verificación lo lanzas tú en la terminal: la frase del chat no sustituye a esa salida.",
      prompt: `No edites todavía.

Error:
[pega el mensaje o el stack trace completo]

Qué esperaba:
[una frase]

Qué ocurre:
[una frase]

Dónde mirar:
- Archivos permitidos: [2 o 3 rutas]
- No toques: [tests de otros módulos, migraciones, lockfile]

Primero responde solo con:
1. De 3 a 5 hipótesis, de más probable a menos, sin código.
2. Qué archivo abre cada hipótesis.
3. Cómo lo comprobaría yo en la terminal, en un comando.

Cuando te diga «aplica la hipótesis N», cambia solo los archivos permitidos, en esta rama, y dime qué comando debo lanzar yo para verificarlo.`,
      example: {
        input: `Error:
TypeError: Cannot read properties of undefined (reading 'slug')
    at WorkshopCard (src/components/WorkshopCard.tsx:18:22)
    at WorkshopList (src/app/talleres/page.tsx:12:5)

Qué esperaba: la página /talleres/ pinta una ficha por taller.
Qué ocurre: la página rompe al renderizar y no llega al HTML.

Dónde mirar:
- Archivos permitidos: src/components/WorkshopCard.tsx, src/app/talleres/page.tsx, src/data/talleres.ts
- No toques: el resto del repo, ni el lockfile.`,
        output: `No he editado nada.

Hipótesis
1. workshops incluye un elemento sin slug y WorkshopCard lo lee igual. Archivo: src/data/talleres.ts y src/components/WorkshopCard.tsx.
2. La página pasa al componente otra prop (item, data) y el componente lee workshop. Archivo: src/app/talleres/page.tsx.
3. El array llega vacío y el componente no contempla el caso. Menos probable: el stack señala un reading de 'slug', así que hay un objeto, no un hueco de lista. Archivo: src/app/talleres/page.tsx.

Comprobación, la lanzas tú:
node -e "const d=require('./src/data/talleres.ts')" no vale si el archivo es TS.
Mejor: abre src/data/talleres.ts y busca un objeto sin slug, o lanza el test de esa página si ya existe.

Cuando me digas «aplica la hipótesis N», toco solo esas tres rutas y te dejo el comando para repetir la página.`,
      },
      tweaks: [
        {
          title: "Ya sabes el archivo",
          body: "Deja una sola hipótesis y pasa al diff en el segundo mensaje. El resto del prompt (rama, archivos prohibidos y el comando que lanzas tú) se queda.",
        },
        {
          title: "El fallo es de tipos",
          body: "Añade: «No cambies el comportamiento, solo el tipo. El diff no reescribe lógica para que compile.»",
        },
        {
          title: "Un test en rojo",
          body: "Pega el nombre del test y añade: «No borres ni debilites la aserción para que pase. Si el test está mal, dímelo y para.»",
        },
      ],
    },
    en: {
      title: "Debug a bug in Cursor with very little context",
      metaTitle: "Prompt to debug a bug in Cursor",
      metaDescription:
        "A ready-to-copy Cursor agent prompt: hypotheses before the diff, with the error, what you expected and the files it may touch. Includes an example.",
      excerpt:
        "The agent does not edit until there is a hypothesis. You paste the error, the scope and the command that decides.",
      purpose:
        "Use it when a failure is reproducible and you want a small change, not a tour of the repo. The first message asks for causes. The diff starts only after you pick one.",
      bestWith:
        "Cursor, in Agent mode, on a branch that is not main. Two or three allowed files. You run the check yourself in the terminal: the chat's summary does not replace that output.",
      prompt: `Do not edit yet.

Error:
[paste the message or the full stack trace]

What I expected:
[one sentence]

What happens:
[one sentence]

Where to look:
- Files you may touch: [2 or 3 paths]
- Do not touch: [tests in other modules, migrations, the lockfile]

First, reply with only:
1. 3 to 5 hypotheses, most likely first, with no code.
2. Which file each hypothesis opens.
3. How I would check it in the terminal, as one command.

When I say "apply hypothesis N", change only the allowed files, on this branch, and tell me which command I should run to verify it.`,
      example: {
        input: `Error:
TypeError: Cannot read properties of undefined (reading 'slug')
    at WorkshopCard (src/components/WorkshopCard.tsx:18:22)
    at WorkshopList (src/app/talleres/page.tsx:12:5)

What I expected: /talleres/ renders one card per workshop.
What happens: the page crashes while rendering and never reaches HTML.

Where to look:
- Files you may touch: src/components/WorkshopCard.tsx, src/app/talleres/page.tsx, src/data/talleres.ts
- Do not touch: the rest of the repo, or the lockfile.`,
        output: `I have not edited anything.

Hypotheses
1. workshops includes an item with no slug, and WorkshopCard reads it anyway. Files: src/data/talleres.ts and src/components/WorkshopCard.tsx.
2. The page passes a different prop (item, data) and the component reads workshop. File: src/app/talleres/page.tsx.
3. The array is empty and the component does not handle that. Less likely: the stack is a read of 'slug', so there is an object, not a hole in the list. File: src/app/talleres/page.tsx.

Check, you run it:
node -e "const d=require('./src/data/talleres.ts')" will not work if the file is TypeScript.
Better: open src/data/talleres.ts and look for an object with no slug, or run the test for that page if you already have one.

When you say "apply hypothesis N", I touch only those three paths and leave you the command to reload the page.`,
      },
      tweaks: [
        {
          title: "You already know the file",
          body: "Keep a single hypothesis and move to the diff in the second message. The rest of the prompt (branch, forbidden files, and the command you run) stays.",
        },
        {
          title: "The failure is a type error",
          body: "Add: \"Do not change behavior, only the type. The diff does not rewrite logic just so it typechecks.\"",
        },
        {
          title: "A failing test",
          body: "Paste the test name and add: \"Do not delete or weaken the assertion to make it pass. If the test is wrong, say so and stop.\"",
        },
      ],
    },
  },
};
