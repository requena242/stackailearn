import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "cursor-como-ide-con-ia";

export const cursorComoIde: Tutorial = {
  id: slug,
  slug,
  category: "code",
  level: "advanced",
  estimatedTime: 28,
  publishedAt: "2026-08-10",
  lastUpdated: "2026-08-26",
  toolsUsed: ["cursor", "hermes-agent", "chatgpt"],
  relatedTutorials: [
    "hermes-agent-primer-flujo",
    "grok-bot-primer-teammate",
  ],
  tags: ["cursor", "diffs", "agentes", "codigo", "2026"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Cursor con un diff pequeño y el plan del agente en el chat",
      caption: "Si no puedes revisar el diff, no deberías haber delegado el cambio.",
      hint: "Hero 1600×900: Cursor, rama nueva, diff de 20–40 líneas y el Agent panel con un plan de 5 líneas.",
    },
    en: {
      alt: "Cursor with a small diff and the agent plan in chat",
      caption: "If you cannot review the diff, you should not have delegated the change.",
      hint: "Hero 1600×900: Cursor, new branch, 20–40 line diff and the Agent panel with a 5-line plan.",
    },
  }),
  copy: {
    es: {
      title: "Cómo delegar un cambio en Cursor sin perder el control (2026)",
      metaTitle: "Cómo usar Cursor con IA sin romper el repo (2026)",
      metaDescription:
        "Rama, alcance, plan de 5 líneas, diff como un PR y test. Un método para el agente de Cursor que no acaba en un rewrite inrevisable.",
      excerpt:
        "El agente toca el repo. Tú acotas archivos, exiges un plan y revisas el diff como si fuera el PR de un junior.",
      intro:
        "Cursor no es un chat con syntax highlighting. Es un editor donde un modelo puede aplicar un parche. La diferencia entre «me ahorró una hora» y «me estropeó main» es el alcance y la revisión. Este flujo asume que ya programas: si no lees diffs, para aquí y vuelve cuando puedas.",
      problem:
        "El prompt típico («arregla el login y mejora el código») produce un PR de 40 archivos, tests debilitados y una explicación convincente. El modelo optimiza para «parece hecho». Tú tienes que optimizar para «puedo revertir y explicar cada hunk».",
      whatYouWillLearn: [
        "Preparar rama, reproducción y un encargo con lista de archivos",
        "Pedir un plan antes de que el agente edite",
        "Revisar el diff como un PR (nombres, tests, efectos laterales)",
        "Detectar el truco de «el test ahora pasa» porque lo vaciaron",
        "Saber cuándo parar el agente y cuándo el trabajo es de Hermes o de un humano",
      ],
      prerequisites: [
        "Cursor instalado (cursor.com) y un repo que ya abre y corre en local",
        "Git: sabes crear una rama y hacer revert / checkout de un archivo",
        "Un cambio real y acotado: un bug reproducido o una feature de un archivo o dos. No «migra el auth»",
        "Una forma de saber si está bien: un test, un script o una reproducción manual de 60 segundos",
        "28 minutos en una rama que no sea main",
      ],
      steps: [
        {
          title: "Aísla el trabajo: rama, reproducción, criterio de hecho",
          content:
            "Crea una rama `fix/…` o `feat/…` desde un main limpio. Reproduce el bug o el caso feliz en local y anota el comando (`pnpm test auth`, «abrir /login y enviar vacío»). Escribe en una línea el criterio: «el test X pasa» o «el formulario muestra el error y no hace POST». Si no puedes reproducirlo, el agente tampoco podrá saber que terminó. No abras Agent todavía.",
          whatYouShouldSee:
            "Git en una rama nueva, el comando de reproducción ejecutado una vez, y una línea de criterio escrita en un scratch o en el chat que aún no envías.",
          tip: "Si el repo no arranca, eso es el primer ticket. No le pidas al agente que «arregle todo lo que falle al instalar».",
          warning:
            "Nunca lances Agent sobre main con cambios sucios. Un revert a medias duele más que no haber delegado.",
          imageDescription:
            "Terminal con la rama nueva y el test/comando de reproducción, Cursor al fondo sin el Agent aún abierto.",
        },
        {
          title: "Escribe el encargo con alcance (y una lista de no tocar)",
          content:
            "Abre Agent y pega un bloque así:\n\n- Resultado: [criterio de hecho del paso 1]\n- Archivos que puedes tocar: `src/…` (máximo 3 rutas)\n- No toques: tests de snapshot globales, config de CI, `.env`, generados\n- No refactorices ni renombres por estética\n- Si el cambio pide más archivos, PARA y pregunta\n\nAdjunta el error o el test que falla. No pegues «sé un senior». El modelo ya intenta parecerlo. Lo que no tiene es tu mapa de minas.",
          whatYouShouldSee:
            "El panel de Agent con el bloque de alcance visible, 1–3 rutas, y el stack trace o el test en el mismo mensaje. Aún sin ediciones aplicadas.",
          tip: "Si no sabes qué archivos son, pregunta primero en Chat (Ask): «dónde se valida el email en login». Luego Agent con esas rutas.",
          warning:
            "«Mejora la calidad» no es un alcance. Es una licencia para reescribir el módulo.",
          imageDescription:
            "Panel Agent de Cursor con el bloque Resultado / Archivos / No toques y un test fallando pegado debajo.",
        },
        {
          title: "Exige un plan de cinco líneas antes del primer parche",
          content:
            "Añade al final: «Antes de editar, escribe un plan de 5 líneas: causa probable, archivos, test que vas a correr, riesgo. Espera mi OK.» Lee el plan. Si propone un rewrite, un cambio de librería o «simplificar» media carpeta, di que no y recorta. Si el plan es «cambiar la guarda en X, añadir un caso en el test Y», da el OK. Este es el punto barato para parar. El diff grande ya no lo es.",
          whatYouShouldSee:
            "Un plan corto en el chat y tu mensaje «OK, sigue» o «no, solo el archivo X». Ningún archivo modificado todavía, o solo si tú lo permitiste.",
          tip: "Si el plan no nombra un test o una reproducción, no hay criterio de hecho. Devuélvelo.",
          warning:
            "Auto-aplicar todo «porque va con prisa» es cómo entran los refactors invisibles. Revisa la cola de cambios.",
          proTip:
            "Una regla de proyecto (`.cursor/rules` o la UI de Rules) con «no toques CI ni snapshots salvo que te lo pida» ahorra este párrafo la décima vez.",
          imageDescription:
            "Chat del Agent con un plan de 5 líneas y tu OK. El working tree aún limpio o con 0 hunks.",
        },
        {
          title: "Revisa el diff como si el autor no fueras tú",
          content:
            "Abre cada archivo tocado. Pregunta tres cosas: ¿este hunk tiene que ver con el criterio? ¿Ha cambiado un test para que sea más fácil de pasar (asserts borrados, `toBeTruthy()` donde había un valor)? ¿Hay efectos laterales (I/O, auth, fechas, flags)? Lee la explicación del agente después del diff, no antes: el párrafo siempre suena razonable. Si un hunk no lo entiendes, no lo aceptes. Pide que lo parta o deshaz ese archivo.",
          whatYouShouldSee:
            "Vista de diff con 1–3 archivos, hunks que puedes explicar en voz alta, tests que ganan aserciones o se quedan igual de estrictos.",
          tip: "Un diff de 20–40 líneas es el tamaño dulce. Si pasa de ~150 y no es codegen, el alcance se escapó: revert y vuelve al paso 2.",
          warning:
            "El truco clásico: el test pasa porque borraron el caso que fallaba. Abre el test en el diff sí o sí.",
          imageDescription:
            "Diff de Cursor centrado en un test y en el archivo de producción, con un hunk sospechoso señalado.",
        },
        {
          title: "Corre tú el criterio de hecho (no le creas al «all green» del chat)",
          content:
            "Ejecuta el mismo comando del paso 1 en tu terminal, no solo el que el agente dice que corrió. Si pasa, prueba el camino manual de 60 segundos. Si falla, pega la salida y acota: «no toques más archivos; arregla este error». Si pasa de forma extraña (test más corto, snapshot actualizado a un valor absurdo), trata el cambio como sospechoso: revert del test y pide que arregle el código, no el expect.",
          whatYouShouldSee:
            "Tu terminal, no la del agente, con el comando de reproducción en verde o con un error que tú acabas de pegar de vuelta.",
          tip: "Deja el agente en pausa mientras corres el test. Dos escritores a la vez en el mismo working tree es caos.",
          warning:
            "No hagas commit de `test.only`, de `.env` ni de un lockfile «porque el agente lo tocó». Eso no era el encargo.",
          imageDescription:
            "Terminal local con el test pasando o fallando, y el diff de Cursor al lado sin commit todavía.",
        },
        {
          title: "Cierra: commit pequeño, o revert; decide el siguiente oficio",
          content:
            "Si el criterio se cumple y el diff es defendible, commit en la rama con un mensaje que diga el resultado, no «wip agent». Si no te convence, `git checkout --` de los archivos o reset de la rama. No «arregles un poco más» en el mismo hilo: el contexto ya está sucio. Abre un Agent nuevo con un encargo más pequeño. Si el trabajo siguiente es un agente fuera del IDE (cron, Telegram, máquina en la nube), eso es Hermes o Grok Bot, no más vueltas a este chat.",
          whatYouShouldSee:
            "O un commit limpio en la rama de feature, o un working tree limpio tras revert. El hilo de Agent dado por cerrado.",
          tip: "Un PR de 40 líneas con test gana a un PR de 400 «con explicación». El revisor (tú mañana) lo agradecerá.",
          proTip:
            "Si el agente pide permisos de red o secretos, páralo. Esos se configuran fuera del prompt, en tu entorno, a propósito.",
          imageDescription:
            "Git log con un commit pequeño en la rama, o `git status` limpio. El panel Agent cerrado o en un hilo nuevo vacío.",
        },
      ],
      realUseCases: [
        {
          title: "Un bug con test que ya falla",
          body: "Reproducido, 2 archivos, plan de 5 líneas, diff de 30 líneas. El test gana un caso, no lo pierde. Commit en 25 minutos.",
        },
        {
          title: "Explicar un módulo ajeno",
          body: "Eso es Chat (Ask), no Agent. Preguntas ancladas a archivos. Cero writes. Luego, si hay un cambio, abres Agent con alcance.",
        },
        {
          title: "Un script de una sola vez",
          body: "Archivo nuevo en `/scripts`, no mezclado con la app. El agente no «aprovecha» para refactorizar el core.",
        },
      ],
      commonMistakes: [
        {
          title: "«Arregla la app»",
          body: "No hay criterio de hecho. El agente elegirá el rewrite más vistoso. Tú heredas el riesgo.",
        },
        {
          title: "Aceptar el test que se volvió más débil",
          body: "Si el diff del test borra aserciones, el verde es mentira. Revisa siempre el archivo de test.",
        },
        {
          title: "Seguir el mismo hilo para un segundo encargo",
          body: "El contexto arrastra el primer plan. Nuevo Agent, nuevo alcance.",
        },
        {
          title: "Delegar lo que no sabrías revisar",
          body: "Crypto, auth, migraciones, pagos. Si no puedes leer el hunk, no es un buen candidato a Agent.",
        },
      ],
      conclusion:
        "Cursor acelera a quien ya puede rechazar un diff. El método es aburrido a propósito: rama, alcance, plan, revisión, tu test, commit pequeño. El día que saltes el plan «porque es un cambio de una línea» es el día que se cuela el rewrite. Vuelve al alcance.",
      nextSteps: [
        "Repite el flujo en un segundo bug, más pequeño que el primero.",
        "Si quieres el mismo oficio fuera del editor (CLI, gateway), sigue con Hermes Agent.",
        "Si el trabajo no es el repo sino un navegador y un inbox, Grok Bot es otra ficha: no lo mezcles en este hilo.",
      ],
      takeaway:
        "Alcance escrito, plan antes del parche, diff como PR, el test lo corres tú. Si no puedes revertir, no delegues.",
    },
    en: {
      title: "How to hand a change to Cursor without losing control (2026)",
      metaTitle: "How to use Cursor’s agent without breaking the repo (2026)",
      metaDescription:
        "Branch, scope, a 5-line plan, diff as a PR, and your test. A method for Cursor’s agent that does not end in an unreviewable rewrite.",
      excerpt:
        "The agent touches the repo. You scope the files, demand a plan and review the diff as if it were a junior’s PR.",
      intro:
        "Cursor is not a chat with syntax highlighting. It is an editor where a model can apply a patch. The difference between «it saved me an hour» and «it wrecked main» is scope and review. This flow assumes you already ship code. If you cannot read diffs, stop here and come back later.",
      problem:
        "The usual prompt («fix login and improve the code») yields a 40-file PR, weaker tests and a convincing write-up. The model optimizes for «looks done». You have to optimize for «I can revert and explain every hunk».",
      whatYouWillLearn: [
        "Set up a branch, a repro and a job with a file list",
        "Demand a plan before the agent edits",
        "Review the diff like a PR (names, tests, side effects)",
        "Catch the «tests are green» trick when assertions were deleted",
        "Know when to stop the agent and when the job belongs to Hermes or a human",
      ],
      prerequisites: [
        "Cursor installed (cursor.com) and a repo that already opens and runs locally",
        "Git: you can create a branch and revert / checkout a file",
        "A real, scoped change: a reproduced bug or a one- or two-file feature. Not «migrate auth»",
        "A way to know it is done: a test, a script or a 60-second manual repro",
        "28 minutes on a branch that is not main",
      ],
      steps: [
        {
          title: "Isolate the work: branch, repro, done-when",
          content:
            "Create a `fix/…` or `feat/…` branch from a clean main. Reproduce the bug or the happy path locally and write down the command (`pnpm test auth`, «open /login and submit empty»). Write the done-when in one line: «test X passes» or «the form shows the error and does not POST». If you cannot reproduce it, the agent cannot know it is finished. Do not open Agent yet.",
          whatYouShouldSee:
            "Git on a new branch, the repro command run once, and a done-when line in a scratch pad or in a chat you have not sent.",
          tip: "If the repo does not boot, that is the first ticket. Do not ask the agent to «fix everything that fails on install».",
          warning:
            "Never launch Agent on main with a dirty tree. A half-revert hurts more than not delegating.",
          imageDescription:
            "Terminal on the new branch with the repro test/command, Cursor in the background, Agent not open yet.",
        },
        {
          title: "Write the job with a scope (and a do-not-touch list)",
          content:
            "Open Agent and paste a block like this:\n\n- Outcome: [done-when from step 1]\n- Files you may touch: `src/…` (3 paths max)\n- Do not touch: global snapshot tests, CI config, `.env`, generated files\n- No drive-by refactors or renames\n- If you need more files, STOP and ask\n\nAttach the error or the failing test. Do not paste «act like a senior». The model already tries to sound like one. What it lacks is your map of landmines.",
          whatYouShouldSee:
            "The Agent panel with the scope block visible, 1–3 paths, and the stack trace or test in the same message. No edits applied yet.",
          tip: "If you do not know the files, ask in Chat (Ask) first: «where is the email validated on login». Then Agent with those paths.",
          warning:
            "«Improve quality» is not a scope. It is a license to rewrite the module.",
          imageDescription:
            "Cursor Agent panel with Outcome / Files / Do not touch and a failing test pasted below.",
        },
        {
          title: "Demand a five-line plan before the first patch",
          content:
            "Add at the end: «Before you edit, write a 5-line plan: likely cause, files, test you will run, risk. Wait for my OK.» Read the plan. If it proposes a rewrite, a library swap or «simplifying» half a folder, say no and cut it down. If the plan is «change the guard in X, add a case in test Y», OK it. This is the cheap place to stop. A large diff is not.",
          whatYouShouldSee:
            "A short plan in the chat and your «OK, go» or «no, only file X». No files changed yet, unless you allowed it.",
          tip: "If the plan does not name a test or a repro, there is no done-when. Send it back.",
          warning:
            "Auto-applying everything «because we are in a hurry» is how invisible refactors land. Watch the change queue.",
          proTip:
            "A project rule (`.cursor/rules` or the Rules UI) with «do not touch CI or snapshots unless I ask» saves this paragraph the tenth time.",
          imageDescription:
            "Agent chat with a 5-line plan and your OK. Working tree still clean or at 0 hunks.",
        },
        {
          title: "Review the diff as if you did not write it",
          content:
            "Open every touched file. Ask three things: does this hunk serve the done-when? Did a test get easier to pass (asserts removed, `toBeTruthy()` where a value lived)? Side effects (I/O, auth, dates, flags)? Read the agent’s explanation after the diff, not before: the paragraph always sounds reasonable. If you do not understand a hunk, do not accept it. Ask it to split the change or discard that file.",
          whatYouShouldSee:
            "A diff view with 1–3 files, hunks you can explain out loud, tests that gained assertions or stayed as strict.",
          tip: "A 20–40 line diff is the sweet size. If it crosses ~150 and it is not codegen, scope leaked: revert and return to step 2.",
          warning:
            "The classic trick: the test passes because they deleted the failing case. Always open the test in the diff.",
          imageDescription:
            "Cursor diff focused on a test and the production file, with one suspicious hunk marked.",
        },
        {
          title: "Run the done-when yourself (do not trust the chat’s «all green»)",
          content:
            "Run the same command from step 1 in your terminal, not only the one the agent claims it ran. If it passes, do the 60-second manual path. If it fails, paste the output and narrow: «touch no more files; fix this error». If it passes in a weird way (shorter test, snapshot updated to a nonsense value), treat the change as suspect: revert the test and ask it to fix the code, not the expect.",
          whatYouShouldSee:
            "Your terminal, not the agent’s, with the repro command green or with an error you just pasted back.",
          tip: "Pause the agent while you run the test. Two writers on the same working tree is chaos.",
          warning:
            "Do not commit `test.only`, a `.env` or a lockfile «because the agent touched it». That was not the job.",
          imageDescription:
            "Local terminal with the test passing or failing, Cursor diff beside it, no commit yet.",
        },
        {
          title: "Close: a small commit, or revert; pick the next job",
          content:
            "If the done-when holds and the diff is defensible, commit on the branch with a message that states the outcome, not «wip agent». If you are not convinced, `git checkout --` the files or reset the branch. Do not «just fix a bit more» in the same thread: the context is already dirty. Open a new Agent with a smaller job. If the next job is an agent outside the IDE (cron, Telegram, a cloud machine), that is Hermes or Grok Bot — not another lap in this chat.",
          whatYouShouldSee:
            "Either a clean commit on the feature branch, or a clean working tree after revert. The Agent thread treated as closed.",
          tip: "A 40-line PR with a test beats a 400-line PR «with an explanation». Tomorrow’s reviewer (you) will care.",
          proTip:
            "If the agent asks for network or secrets, stop. Those are configured in your environment on purpose, not in the prompt.",
          imageDescription:
            "Git log with a small commit on the branch, or a clean `git status`. Agent panel closed or on a fresh empty thread.",
        },
      ],
      realUseCases: [
        {
          title: "A bug with a test that already fails",
          body: "Reproduced, 2 files, 5-line plan, 30-line diff. The test gains a case, it does not lose one. Commit in 25 minutes.",
        },
        {
          title: "Explaining someone else’s module",
          body: "That is Chat (Ask), not Agent. Questions pinned to files. Zero writes. Then, if there is a change, open Agent with a scope.",
        },
        {
          title: "A one-off script",
          body: "New file under `/scripts`, not mixed into the app. The agent does not «helpfully» refactor the core.",
        },
      ],
      commonMistakes: [
        {
          title: "«Fix the app»",
          body: "There is no done-when. The agent will pick the flashiest rewrite. You inherit the risk.",
        },
        {
          title: "Accepting a weaker test",
          body: "If the test diff deletes assertions, green is a lie. Always read the test file.",
        },
        {
          title: "Reusing the same thread for a second job",
          body: "Context drags the first plan along. New Agent, new scope.",
        },
        {
          title: "Delegating what you could not review",
          body: "Crypto, auth, migrations, payments. If you cannot read the hunk, it is a bad Agent candidate.",
        },
      ],
      conclusion:
        "Cursor speeds up people who can already reject a diff. The method is boring on purpose: branch, scope, plan, review, your test, small commit. The day you skip the plan «because it is a one-line change» is the day the rewrite sneaks in. Return to scope.",
      nextSteps: [
        "Run the flow on a second bug, smaller than the first.",
        "If you want the same job outside the editor (CLI, gateway), continue with Hermes Agent.",
        "If the work is not the repo but a browser and an inbox, Grok Bot is a different profile — do not mix it into this thread.",
      ],
      takeaway:
        "Written scope, plan before the patch, diff as a PR, you run the test. If you cannot revert, do not delegate.",
    },
  },
};
