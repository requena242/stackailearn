import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "cursor-repo-existente";

export const cursorRepoExistente: Tutorial = {
  id: slug,
  slug,
  category: "code",
  level: "beginner",
  estimatedTime: 22,
  publishedAt: "2026-09-07",
  lastUpdated: "2026-09-07",
  toolsUsed: ["cursor"],
  relatedTutorials: [
    "cursor-como-ide-con-ia",
    "hermes-agent-primer-flujo",
  ],
  tags: ["cursor", "repo", "git", "onboarding", "codigo", "2026"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Cursor con un repositorio abierto, el explorador de archivos y una pregunta en Ask sobre un módulo",
      caption: "El primer día en un repo ajeno: leer antes de editar.",
      hint: "Hero 1600×900: Cursor con carpeta del proyecto abierta, sidebar de archivos visible y el panel Ask con una pregunta sobre un archivo concreto.",
    },
    en: {
      alt: "Cursor with an open repository, file explorer and an Ask question about a module",
      caption: "Day one in someone else’s repo: read before you edit.",
      hint: "Hero 1600×900: Cursor with the project folder open, file sidebar visible and the Ask panel with a question about a specific file.",
    },
  }),
  copy: {
    es: {
      title: "Cómo usar Cursor en un repo existente (2026)",
      metaTitle: "Cursor en un repo existente: abrir, entender y primer cambio seguro",
      metaDescription:
        "Abre o clona un proyecto en Cursor, confía la carpeta, deja que indexe y haz tu primera pregunta útil. Rama, diff pequeño y los scripts que ya trae el repo.",
      excerpt:
        "No empieces pidiendo «arregla la app». Abre el repo, entiende la estructura en Ask y haz un cambio pequeño en rama con los tests del proyecto.",
      intro:
        "Llegar a un repo que no es tuyo —o volver a uno que dejaste hace meses— es el caso más común en Cursor. No necesitas el flujo avanzado del agente el primer día. Necesitas abrir el proyecto sin miedo, saber qué puede leer el editor y hacer una pregunta que te oriente antes de tocar una línea. Este tutorial dura unos 22 minutos y termina con un cambio pequeño y revisable, no con un rewrite.",
      problem:
        "El error típico: abrir Cursor, lanzar Agent con «explícame el proyecto y mejóralo», y acabar con 30 archivos modificados que no entiendes. O peor: no confiar la carpeta, no dejar indexar y preguntar en un chat vacío como si el modelo tuviera ojos. Sin un mapa mínimo del repo, cualquier sugerencia suena convincente y cualquier diff es difícil de rechazar.",
      whatYouWillLearn: [
        "Abrir o clonar un repo en Cursor y confiar la carpeta de trabajo",
        "Dejar que el índice del proyecto termine antes de preguntar",
        "Hacer una primera pregunta útil en Ask (explicar un archivo, localizar un bug)",
        "Crear una rama antes del primer cambio",
        "Pedir un diff pequeño, revisarlo y correr los scripts o tests que ya trae el repo",
      ],
      prerequisites: [
        "Cursor instalado desde cursor.com (Windows, macOS o Linux)",
        "Un repo real: tuyo, de trabajo o un fork con permiso de lectura",
        "Git instalado si vas a clonar (o la carpeta ya descargada en disco)",
        "22 minutos. Si ya dominas delegar cambios al agente, el tutorial cursor-como-ide-con-ia va un paso más allá",
      ],
      steps: [
        {
          title: "Abre o clona el repo en Cursor",
          content:
            "Tienes dos caminos. **Carpeta local:** File → Open Folder y elige la raíz del proyecto (donde está el README o `package.json`). **Clonar:** Command Palette (`Ctrl/Cmd+Shift+P`) → «Git: Clone» → pega la URL del remoto y elige dónde guardarlo. Cursor abrirá la carpeta clonada. Comprueba en la barra inferior que ves el nombre del repo y la rama actual (`main`, `develop`, etc.). Si el proyecto necesita `npm install`, `pnpm install` o similar, hazlo en la terminal integrada antes de seguir — el índice funciona mejor con dependencias resueltas.",
          whatYouShouldSee:
            "Explorador de archivos con la raíz del proyecto, barra de estado con rama Git y terminal lista para instalar dependencias si hace falta.",
          tip: "Abre la raíz del repo, no una subcarpeta suelta. Si abres solo `/src`, Cursor no verá el `package.json` ni la config de tests.",
          warning:
            "No abras Agent todavía. Primero el repo tiene que existir en el editor como carpeta de trabajo.",
          imageDescription:
            "Cursor con File → Open Folder o el diálogo de Git Clone, y el árbol de archivos del proyecto ya visible.",
        },
        {
          title: "Confía la carpeta y deja que indexe",
          content:
            "La primera vez, Cursor puede pedirte **Trust** / «Confiar en los autores». Es el equivalente a VS Code: sin confianza, extensiones y terminal quedan limitadas. Acepta solo en repos que reconoces (trabajo, open source conocido, tu propio fork). Tras confiar, Cursor indexa el código en segundo plano. Mira la esquina inferior: puede aparecer «Indexing…» o un contador de archivos. Espera a que termine o baje a un ritmo estable antes de preguntas largas. Si el repo es enorme (monorepo de miles de archivos), el índice tarda más — es normal. Mientras, puedes leer el README y el `package.json` a mano.",
          whatYouShouldSee:
            "Diálogo de confianza resuelto (o ya no aparece) y el indicador de indexación completado o casi quieto en la barra de estado.",
          tip: "Si no ves indexación, abre un archivo cualquiera y guarda. A veces el proceso arranca al primer foco en el código.",
          warning:
            "No confíes carpetas descargadas de fuentes que no reconoces. El trust habilita ejecución en terminal.",
          imageDescription:
            "Banner o diálogo de Trust Folder y la barra inferior de Cursor con el progreso de indexación.",
        },
        {
          title: "Lee el mapa del proyecto (sin IA todavía)",
          content:
            "Antes del chat, orienta tus ojos. Abre en este orden: README (si existe), manifiesto del stack (`package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`), carpeta de entrada (`src/`, `app/`, `cmd/`) y cómo se ejecutan tests (`npm test`, `pytest`, script en README). Anota tres cosas en un scratch: comando para arrancar, comando para tests y una carpeta que parece el «corazón» del código. Este mapa de 60 segundos evita preguntas del tipo «¿dónde está todo?» que el modelo contesta con generalidades.",
          whatYouShouldSee:
            "README y manifiesto abiertos en pestañas, y tres líneas anotadas: run, test, carpeta principal.",
          tip: "Si hay un `CONTRIBUTING.md` o `.github/`, échales un vistazo. Suelen decir qué no tocar.",
          imageDescription:
            "Pestañas con README y package.json, y un bloc con tres líneas: run, test, core folder.",
        },
        {
          title: "Primera pregunta útil en Ask (sin escribir código)",
          content:
            "Abre **Chat** en modo **Ask** (no Agent). Selecciona un archivo concreto del «corazón» que anotaste — por ejemplo `src/auth/login.ts` — con `@` o arrastrándolo al chat. Pregunta algo acotado:\n\n- «Explica qué hace este archivo y qué otros tres archivos importa.»\n- «¿Dónde se valida el email en el flujo de login? Solo nombra rutas, no edites.»\n- «¿Qué test cubre este módulo?»\n\nAsk no debería modificar archivos. Si ves propuestas de diff, cancela y confirma que estás en Ask, no en Agent. El objetivo es un mapa mental, no un parche.",
          whatYouShouldSee:
            "Panel de chat con el archivo referenciado (`@login.ts`) y una respuesta que cita rutas reales del repo, no inventadas.",
          tip: "Si la respuesta nombra archivos que no existen, el índice puede no haber terminado. Espera y repregunta.",
          warning:
            "«Explícame todo el proyecto» produce un resumen genérico. Una pregunta por archivo o flujo.",
          proTip:
            "Puedes encadenar: primero el archivo, luego «abre @ruta-que-mencionó y dime qué hace la función X».",
          imageDescription:
            "Chat Ask de Cursor con un archivo anclado y una respuesta que lista imports o rutas del proyecto.",
        },
        {
          title: "Crea una rama antes de tocar nada",
          content:
            "Cuando ya entiendes un trozo del código y quieres probar un cambio pequeño, **para**. Crea una rama: en la terminal integrada `git checkout -b explore/cursor-primer-cambio` o desde la UI de Source Control. La rama te permite desechar todo con un reset si el siguiente paso sale mal. Elige un cambio seguro: un comentario de documentación, un `console.log` de depuración que quitarás, un test que ya falla y quieres entender, o un typo en un string de UI. No elijas refactors ni migraciones para el primer día.",
          whatYouShouldSee:
            "Barra de estado con el nombre de la rama nueva y `git status` limpio o con solo tus cambios futuros.",
          tip: "Si el repo no usa ramas (raro), al menos haz una copia de la carpeta. En equipos reales, rama es obligatorio.",
          warning:
            "Nunca el primer experimento en `main` / `master` con Agent. Es la forma más rápida de perder confianza del equipo.",
          imageDescription:
            "Terminal con git checkout -b o la UI de ramas de Cursor mostrando explore/cursor-primer-cambio.",
        },
        {
          title: "Un cambio pequeño con Agent y revisión del diff",
          content:
            "Ahora sí, abre **Agent** con un encargo mínimo:\n\n- Resultado: [una línea, p. ej. «arreglar el typo en el botón de login»]\n- Archivos permitidos: solo el archivo que ya leíste\n- No toques: tests, CI, dependencias, otros módulos\n\nPide ver el diff antes de aceptar todo. Abre cada hunk: ¿tiene sentido? ¿tocó archivos de más? Si el diff supera ~30 líneas para un typo, rechaza y acota. Acepta solo lo que entiendes. Este paso es práctica de revisión, no velocidad.",
          whatYouShouldSee:
            "Diff de uno o dos archivos, cambio acorde al encargo, sin archivos sorpresa en la lista de modificados.",
          tip: "Si solo querías entender un bug, puedes quedarte en Ask. Agent es opcional en el primer día.",
          warning:
            "Auto-aceptar todo «para probar» enseña malos hábitos. El diff es el producto, no el párrafo del chat.",
          imageDescription:
            "Panel Agent con encargo acotado y vista de diff de un solo archivo con pocos hunks.",
        },
        {
          title: "Corre los scripts del proyecto y cierra o revierte",
          content:
            "Ejecuta en **tu** terminal el comando de tests o lint que anotaste al principio (`npm test`, `make test`, lo que diga el README). Si pasa y el cambio era intencional, puedes hacer commit en la rama con un mensaje claro o simplemente dejar la rama para un PR más adelante. Si falla algo que no esperabas, pega el error en un Ask nuevo antes de pedir más ediciones. Si el experimento no valió, `git checkout -- .` o borra la rama. El éxito del primer día es **entender el repo y saber revertir**, no dejar código misterioso en disco.",
          whatYouShouldSee:
            "Terminal con el script del proyecto ejecutado (verde o error legible) y working tree bajo control: commit en rama o revert hecho.",
          tip: "Guarda en notas el comando run, el de test y la carpeta core. La próxima sesión empieza ahí.",
          proTip:
            "Cuando quieras delegar cambios con plan y criterio de hecho, sigue con el tutorial cursor-como-ide-con-ia.",
          imageDescription:
            "Terminal con npm test o equivalente, y git status mostrando commit en rama o árbol limpio tras revert.",
        },
      ],
      realUseCases: [
        {
          title: "Primer día en un repo de equipo",
          body: "Abres, indexas, Ask sobre el módulo de auth, anotas rutas. Rama explore/, un comentario JSDoc con Agent, test del proyecto en verde. Sin tocar main.",
        },
        {
          title: "Volver a tu side project tras meses",
          body: "README + package.json, Ask «qué hace src/api/client.ts», recuerdas el flujo. Rama fix/, arreglas un test que fallaba antes de pausar el proyecto.",
        },
        {
          title: "Fork open source para un PR pequeño",
          body: "Clonas, indexas, Ask localiza dónde está el bug en issues. Rama con un cambio de 10 líneas, `npm test` del upstream, diff revisado a mano.",
        },
      ],
      commonMistakes: [
        {
          title: "Agent antes de confiar o indexar",
          body: "Sin contexto del repo, el modelo inventa rutas y archivos. Trust + índice primero.",
        },
        {
          title: "Preguntas demasiado amplias en Ask",
          body: "«Explícame el proyecto» da ruido. Un archivo o un flujo por pregunta.",
        },
        {
          title: "Primer cambio en main sin rama",
          body: "Aunque sea «solo una línea», la rama cuesta 10 segundos y salva horas.",
        },
        {
          title: "No correr los scripts que ya trae el repo",
          body: "El chat puede decir «todo bien». Tu terminal con npm test es la fuente de verdad.",
        },
        {
          title: "Saltar directo al tutorial avanzado de Agent",
          body: "cursor-como-ide-con-ia asume que ya abres el repo con calma. Este flujo es el prerequisito.",
        },
      ],
      conclusion:
        "Cursor en un repo existente empieza con menos IA de la que crees: abrir bien, confiar, indexar, preguntar en Ask con archivos anclados y solo entonces una rama con un diff pequeño. Los scripts del proyecto —no el chat— dicen si el cambio es seguro. Cuando domines este mapa, el siguiente paso es delegar con alcance y plan en el tutorial flagship de Cursor.",
      nextSteps: [
        "Repite Ask en un segundo archivo del mismo módulo para cerrar el mapa mental.",
        "Para delegar cambios con plan y revisión de diff, abre cursor-como-ide-con-ia.",
        "Si el trabajo sale del IDE (CLI, gateway), mira hermes-agent-primer-flujo.",
      ],
      takeaway:
        "Abre → confía → indexa → Ask con @archivo → rama → diff pequeño → tu npm test. Leer antes de editar.",
    },
    en: {
      title: "How to use Cursor on an existing repo (2026)",
      metaTitle: "Cursor on an existing repo: open, understand and a safe first change",
      metaDescription:
        "Open or clone a project in Cursor, trust the folder, let it index and ask your first useful question. Branch, small diff and the scripts the repo already ships.",
      excerpt:
        "Do not start with «fix the app». Open the repo, map it in Ask and make a small change on a branch using the project’s own tests.",
      intro:
        "Landing in a repo that is not yours — or returning to one you paused months ago — is the most common Cursor case. You do not need the advanced agent flow on day one. You need to open the project without fear, know what the editor can read and ask a question that orients you before you touch a line. This tutorial takes about 22 minutes and ends with a small, reviewable change, not a rewrite.",
      problem:
        "The usual mistake: open Cursor, launch Agent with «explain the project and improve it» and end up with 30 modified files you do not understand. Or worse: never trust the folder, never let indexing finish and ask in an empty chat as if the model had eyes. Without a minimal map of the repo, every suggestion sounds convincing and every diff is hard to reject.",
      whatYouWillLearn: [
        "Open or clone a repo in Cursor and trust the workspace folder",
        "Let the project index finish before you ask",
        "Ask a first useful question in Ask (explain a file, locate a bug)",
        "Create a branch before the first edit",
        "Request a small diff, review it and run the scripts or tests the repo already provides",
      ],
      prerequisites: [
        "Cursor installed from cursor.com (Windows, macOS or Linux)",
        "A real repo: yours, work or a fork you may read",
        "Git installed if you will clone (or the folder already on disk)",
        "22 minutes. If you already delegate changes to the agent, the cursor-como-ide-con-ia tutorial goes one step further",
      ],
      steps: [
        {
          title: "Open or clone the repo in Cursor",
          content:
            "Two paths. **Local folder:** File → Open Folder and pick the project root (where the README or `package.json` lives). **Clone:** Command Palette (`Ctrl/Cmd+Shift+P`) → «Git: Clone» → paste the remote URL and choose where to save it. Cursor opens the cloned folder. Check the status bar for the repo name and current branch (`main`, `develop`, etc.). If the project needs `npm install`, `pnpm install` or similar, run it in the integrated terminal first — indexing works better with dependencies resolved.",
          whatYouShouldSee:
            "File explorer at the project root, status bar showing the Git branch and a terminal ready to install dependencies if needed.",
          tip: "Open the repo root, not a loose subfolder. If you open only `/src`, Cursor will not see `package.json` or test config.",
          warning:
            "Do not open Agent yet. The repo must exist in the editor as a workspace folder first.",
          imageDescription:
            "Cursor with File → Open Folder or the Git Clone dialog, and the project file tree visible.",
        },
        {
          title: "Trust the folder and let it index",
          content:
            "The first time, Cursor may ask you to **Trust** the authors. Same idea as VS Code: without trust, extensions and terminal stay limited. Accept only for repos you recognize (work, known open source, your own fork). After trusting, Cursor indexes code in the background. Watch the bottom corner: you may see «Indexing…» or a file count. Wait until it finishes or settles before long questions. Huge repos (thousand-file monorepos) take longer — normal. Meanwhile, read the README and `package.json` yourself.",
          whatYouShouldSee:
            "Trust dialog resolved (or gone) and the indexing indicator finished or nearly idle in the status bar.",
          tip: "If you see no indexing, open any file and save. Sometimes indexing starts on first focus in code.",
          warning:
            "Do not trust folders from sources you do not recognize. Trust enables terminal execution.",
          imageDescription:
            "Trust Folder banner or dialog and Cursor’s bottom bar showing indexing progress.",
        },
        {
          title: "Read the project map (no AI yet)",
          content:
            "Before chat, orient your eyes. Open in this order: README (if any), stack manifest (`package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`), entry folder (`src/`, `app/`, `cmd/`) and how tests run (`npm test`, `pytest`, script in README). Note three things in a scratch pad: command to start, command to test and one folder that looks like the code «heart». This 60-second map avoids questions like «where is everything?» that the model answers with generics.",
          whatYouShouldSee:
            "README and manifest open in tabs, and three noted lines: run, test, main folder.",
          tip: "If there is a `CONTRIBUTING.md` or `.github/`, skim them. They often say what not to touch.",
          imageDescription:
            "Tabs with README and package.json, and a notepad with three lines: run, test, core folder.",
        },
        {
          title: "First useful question in Ask (no code writes)",
          content:
            "Open **Chat** in **Ask** mode (not Agent). Pick one concrete file from the «heart» you noted — e.g. `src/auth/login.ts` — with `@` or by dragging it into chat. Ask something scoped:\n\n- «Explain what this file does and which three other files it imports.»\n- «Where is email validated in the login flow? Name paths only, do not edit.»\n- «Which test covers this module?»\n\nAsk should not modify files. If you see diff proposals, cancel and confirm you are in Ask, not Agent. The goal is a mental map, not a patch.",
          whatYouShouldSee:
            "Chat panel with the file referenced (`@login.ts`) and an answer citing real repo paths, not invented ones.",
          tip: "If the answer names files that do not exist, indexing may not be done. Wait and ask again.",
          warning:
            "«Explain the whole project» yields a generic summary. One question per file or flow.",
          proTip:
            "You can chain: the file first, then «open @path-it-mentioned and tell me what function X does».",
          imageDescription:
            "Cursor Ask chat with a pinned file and a reply listing imports or paths from the project.",
        },
        {
          title: "Create a branch before you change anything",
          content:
            "When you understand a slice of the code and want to try a small change, **stop**. Create a branch: in the integrated terminal `git checkout -b explore/cursor-first-change` or from the Source Control UI. The branch lets you discard everything with a reset if the next step goes wrong. Pick a safe change: a doc comment, a debug `console.log` you will remove, a test that already fails and you want to understand, or a UI string typo. Do not pick refactors or migrations on day one.",
          whatYouShouldSee:
            "Status bar showing the new branch name and `git status` clean or holding only your future edits.",
          tip: "If the repo does not use branches (rare), at least copy the folder. On real teams, a branch is mandatory.",
          warning:
            "Never run your first Agent experiment on `main` / `master`. It is the fastest way to lose team trust.",
          imageDescription:
            "Terminal with git checkout -b or Cursor’s branch UI showing explore/cursor-first-change.",
        },
        {
          title: "A small change with Agent and diff review",
          content:
            "Now open **Agent** with a minimal job:\n\n- Outcome: [one line, e.g. «fix the typo on the login button»]\n- Files allowed: only the file you already read\n- Do not touch: tests, CI, dependencies, other modules\n\nAsk to see the diff before accepting everything. Open each hunk: does it make sense? Extra files? If the diff crosses ~30 lines for a typo, reject and narrow. Accept only what you understand. This step is review practice, not speed.",
          whatYouShouldSee:
            "Diff of one or two files, change matching the job, no surprise files in the modified list.",
          tip: "If you only wanted to understand a bug, Ask is enough. Agent is optional on day one.",
          warning:
            "Auto-accepting everything «to try it» teaches bad habits. The diff is the product, not the chat paragraph.",
          imageDescription:
            "Agent panel with a scoped job and a single-file diff view with few hunks.",
        },
        {
          title: "Run the project scripts and close or revert",
          content:
            "In **your** terminal, run the test or lint command you noted at the start (`npm test`, `make test`, whatever the README says). If it passes and the change was intentional, commit on the branch with a clear message or leave the branch for a PR later. If something unexpected fails, paste the error into a fresh Ask before asking for more edits. If the experiment was not worth keeping, `git checkout -- .` or delete the branch. Day-one success is **understanding the repo and knowing how to revert**, not mystery code on disk.",
          whatYouShouldSee:
            "Terminal with the project script run (green or a readable error) and working tree under control: commit on branch or revert done.",
          tip: "Save run command, test command and core folder in notes. Next session starts there.",
          proTip:
            "When you want to delegate changes with a plan and done-when criteria, continue with cursor-como-ide-con-ia.",
          imageDescription:
            "Terminal with npm test or equivalent, and git status showing a branch commit or a clean tree after revert.",
        },
      ],
      realUseCases: [
        {
          title: "Day one on a team repo",
          body: "Open, index, Ask about the auth module, note paths. Branch explore/, one JSDoc comment via Agent, project tests green. main untouched.",
        },
        {
          title: "Return to a side project after months",
          body: "README + package.json, Ask «what does src/api/client.ts do», you remember the flow. Branch fix/, fix a test that failed before you paused.",
        },
        {
          title: "Open-source fork for a small PR",
          body: "Clone, index, Ask locates the bug from issues. Branch with a 10-line change, upstream `npm test`, diff reviewed by hand.",
        },
      ],
      commonMistakes: [
        {
          title: "Agent before trust or indexing",
          body: "Without repo context the model invents paths and files. Trust + index first.",
        },
        {
          title: "Questions that are too broad in Ask",
          body: "«Explain the project» is noise. One file or flow per question.",
        },
        {
          title: "First change on main without a branch",
          body: "Even «one line» — a branch costs 10 seconds and saves hours.",
        },
        {
          title: "Not running scripts the repo already ships",
          body: "Chat may say «all good». Your terminal running npm test is the source of truth.",
        },
        {
          title: "Skipping straight to the advanced Agent tutorial",
          body: "cursor-como-ide-con-ia assumes you already open the repo calmly. This flow is the prerequisite.",
        },
      ],
      conclusion:
        "Cursor on an existing repo starts with less AI than you think: open well, trust, index, ask in Ask with pinned files and only then a branch with a small diff. The project’s scripts — not chat — say whether the change is safe. When this map is familiar, the next step is delegating with scope and plan in the flagship Cursor tutorial.",
      nextSteps: [
        "Repeat Ask on a second file in the same module to close the mental map.",
        "To delegate changes with plan and diff review, open cursor-como-ide-con-ia.",
        "If the work leaves the IDE (CLI, gateway), see hermes-agent-primer-flujo.",
      ],
      takeaway:
        "Open → trust → index → Ask with @file → branch → small diff → your npm test. Read before you edit.",
    },
  },
};
