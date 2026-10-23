import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "cursor-depurar-errores";

export const cursorDepurarErrores: Tutorial = {
  id: slug,
  slug,
  category: "code",
  level: "intermediate",
  estimatedTime: 25,
  publishedAt: "2026-10-23",
  lastUpdated: "2026-10-23",
  toolsUsed: ["cursor"],
  relatedTutorials: [
    "cursor-reglas-proyecto",
    "cursor-repo-existente",
    "cursor-como-ide-con-ia",
  ],
  tags: [
    "cursor",
    "debug",
    "agent",
    "stack-trace",
    "tests",
    "diff",
    "2026",
  ],
  hero: tutorialHero(slug, {
    es: {
      alt: "Cursor Agent con un stack trace pegado en el chat y un diff pequeño en revisión",
      caption: "El log real va al agente; las hipótesis antes del parche.",
      hint: "Hero 1600×900: panel Agent con error de terminal en el mensaje, rama fix/ visible y diff de un solo archivo con pocos hunks.",
    },
    en: {
      alt: "Cursor Agent with a stack trace pasted in chat and a small diff under review",
      caption: "Paste the real log into the agent; hypotheses before the patch.",
      hint: "Hero 1600×900: Agent panel with terminal error in the message, fix/ branch visible and a single-file diff with few hunks.",
    },
  }),
  copy: {
    es: {
      title: "Cursor: depurar errores con el agente (2026)",
      metaTitle:
        "Depurar con Cursor Agent: reproducir, stack trace, hipótesis y diff pequeño",
      metaDescription:
        "Reproduce el fallo, pega el log real al Agent, pide hipótesis antes de editar, cambia poco en una rama, escribe un test rojo-verde y revisa el diff como un PR.",
      excerpt:
        "No pidas «arregla el error». Reproduce, pega el stack trace, ordena hipótesis sin tocar código y solo entonces un parche acotado en rama con test que falle y pase.",
      intro:
        "Cuando algo rompe en local o en CI, el impulso es abrir Agent y decir «arréglalo». Eso suele producir parches que silencian el síntoma o tocan diez archivos. Este flujo trata el agente como un compañero de depuración: primero evidencia (reproducción y log completo), luego teorías ordenadas, después un cambio mínimo que puedes revisar línea a línea. Asume que ya abres el repo con calma (cursor-repo-existente) y, si tienes normas de equipo, que viven en `.cursor/rules` (cursor-reglas-proyecto). Unos 25 minutos en una rama `fix/`, no en main.",
      problem:
        "Sin reproducción, el modelo adivina. Sin el stack trace completo, inventa rutas. Si dejas que edite antes de listar causas, mezcla fix con refactor y el diff ya no se puede auditar. El otro fallo: aceptar «listo» sin correr tu test en la terminal — el chat no es la fuente de verdad.",
      whatYouWillLearn: [
        "Reproducir el error y anotar el comando exacto que lo dispara",
        "Pegar stack trace o log real al Agent con archivos @ anclados",
        "Pedir hipótesis ordenadas antes de cualquier edición",
        "Acotar un fix en una rama con lista de archivos permitidos",
        "Añadir o ajustar un test que falle antes y pase después del fix",
        "Revisar el diff hunk a hunk antes de commitear",
      ],
      prerequisites: [
        "Cursor instalado y el repo abierto como carpeta de trabajo (cursor-repo-existente si es nuevo para ti)",
        "Un error reproducible: test rojo, excepción en terminal o fallo en navegador con mensaje en consola",
        "Git: crear rama y leer un diff en el editor",
        "El comando de tests o lint que el README o `package.json` ya documentan",
        "25 minutos en una rama que no sea main",
      ],
      steps: [
        {
          title: "Reproduce el error y congela el escenario",
          content:
            "Antes de abrir Agent, ejecuta en la **terminal integrada** el mismo comando que falló (test, script de dev, build). Copia la salida completa: no solo la última línea. Anota en tres campos: **comando**, **rama actual** (`git branch --show-current`) y **criterio de hecho** («`npm test -- auth` en verde» o «POST /login devuelve 400 con body X»). Si el fallo es en UI, reproduce una vez y copia el error de la consola del navegador o del servidor que aparece en la terminal de Cursor.\n\nCrea ya la rama: `git checkout -b fix/describe-el-sintoma`. No edites código todavía.",
          whatYouShouldSee:
            "Terminal con el error repetido, un bloque de log copiado al portapapeles y la barra de estado mostrando `fix/…`.",
          tip: "Si no puedes reproducirlo dos veces seguidas, el agente tampoco podrá validar el fix. Ese es el ticket, no un parche al azar.",
          warning:
            "No abras Agent en main con el repo sucio de intentos anteriores. Rama limpia desde un punto que conoces.",
          imageDescription:
            "Terminal con test o servidor en rojo, bloc con comando / rama / criterio y git checkout -b fix/ visible.",
        },
        {
          title: "Pega el log real y ancla el contexto con @",
          content:
            "Abre **Chat** en modo **Agent** (o el panel Agent según tu versión de Cursor). En el primer mensaje pega el **stack trace o log íntegro** — sin recortar el «ruido» del medio si ahí están rutas de archivo. Añade el criterio de hecho del paso anterior.\n\nAncla archivos que el log mencione con `@`: por ejemplo `@src/auth/login.ts` y `@src/auth/login.test.ts`. Si no sabes qué archivo es, usa **Ask** primero: «según este stack, ¿qué archivo abro primero? Solo rutas, no edites» y luego vuelve a Agent.\n\nCierra el mensaje con una restricción explícita: **«No modifiques archivos en este mensaje. Solo analiza el log.»**",
          whatYouShouldSee:
            "Un mensaje largo con el error pegado, 1–3 archivos @ en la barra del chat y una respuesta que cita líneas o funciones del repo real.",
          tip: "Pegar solo «TypeError: undefined» sin contexto obliga al modelo a fantasear. El log completo es el ancla.",
          imageDescription:
            "Agent input con stack trace multilínea y chips @ de archivos del repo debajo del mensaje.",
        },
        {
          title: "Pide hipótesis ordenadas antes de tocar código",
          content:
            "En el mismo hilo (o mensaje siguiente), pide:\n\n«Lista 3–5 hipótesis de causa raíz, de más a menos probable. Para cada una: archivo y función, qué evidencia del log la apoya, y qué comprobaría en 2 minutos sin refactor. No escribas código ni propongas diff todavía.»\n\nLee la lista como un humano: ¿nombra rutas que existen en tu árbol? ¿La hipótesis #1 es comprobable con un `console.log` o un breakpoint mental? Si algo suena genérico («problema de async»), pide acotar: «¿qué línea concreta del stack apunta ahí?»\n\nOpcional: si tienes reglas Always Apply con el comando de test, el agente debería mencionarlas sin que repitas el README (cursor-reglas-proyecto).",
          whatYouShouldSee:
            "Respuesta numerada con hipótesis, rutas del repo y pasos de verificación — sin panel de «Apply» ni archivos modificados.",
          warning:
            "Si el agente ya propone un parche enorme, rechaza y repite: hipótesis solo, sin ediciones.",
          proTip:
            "Una hipótesis buena dice «línea 42 devuelve undefined porque Z»; una mala dice «revisar la lógica».",
          imageDescription:
            "Chat Agent con lista numerada de hipótesis y citas a archivos @, sin diff aplicado.",
        },
        {
          title: "Elige una hipótesis y acota el encargo de fix",
          content:
            "Responde con una sola línea de decisión: «Probamos la hipótesis 2 primero.» Luego pega un bloque de alcance (mismo estilo que cursor-como-ide-con-ia):\n\n- **Resultado:** [tu criterio de hecho del paso 1]\n- **Archivos permitidos:** máximo 2–3 rutas\n- **No toques:** CI, `.env`, dependencias, refactors, otros módulos\n- **Cambio mínimo:** solo lo necesario para la hipótesis elegida\n- Si necesitas más archivos, **para y pregunta**\n\nPide un **plan de 3–5 líneas** antes de aplicar cambios: «Escribe el plan primero; espera mi OK.»",
          whatYouShouldSee:
            "Plan corto en el chat (qué archivo, qué cambio, qué test correr) y tu OK explícito antes de que aparezca el primer diff.",
          tip: "Si el plan menciona «reescribir el módulo», vuelve a acotar. Depurar no es rediseñar.",
          imageDescription:
            "Agent con bloque de alcance en el usuario y plan de cinco viñetas en la respuesta, sin Apply aún.",
        },
        {
          title: "Test rojo primero (si aún no existe)",
          content:
            "Si el bug no tenía test, pide **solo** un test que falle por el síntoma actual:\n\n«Añade un test en `@…` que falle con el comportamiento roto. No arregles la producción todavía.»\n\nEjecuta tú el comando de test en la terminal. Debe fallar por la razón correcta, no por un import mal escrito. Si el test pasa sin fix, el test no captura el bug — pide corregir el test antes de seguir.\n\nSi ya había un test rojo al empezar, confirma que sigue fallando tras cualquier cambio de solo-test. El ciclo rojo → verde es tu red de seguridad.",
          whatYouShouldSee:
            "Terminal con el test en rojo y un mensaje de aserción que describe el bug, no un error de sintaxis del test nuevo.",
          warning:
            "No aceptes un test que mockea todo hasta que «pase» sin probar el camino real que fallaba.",
          imageDescription:
            "Terminal con npm test mostrando un fallo esperado y el archivo de test abierto en el editor.",
        },
        {
          title: "Aplica un fix pequeño y revisa el diff",
          content:
            "Con el test rojo confirmado, autoriza el fix mínimo para la hipótesis elegida. Cuando el agente proponga cambios, abre la **vista de diff** del editor (igual que revisarías un PR): cada hunk, archivos extra en la lista de modificados, imports nuevos sin uso.\n\nRechaza hunks que no entiendas o que toquen archivos fuera del alcance. Si el diff supera ~40 líneas para un bug localizado, pide dividir: fix primero, limpieza nunca en la misma rama de depuración.\n\nAcepta solo lo que puedes explicar en una frase a un compañero.",
          whatYouShouldSee:
            "Diff de uno o dos archivos de producción más el test; sin carpetas sorpresa en Source Control.",
          tip: "Si el agente «arregla» el test vaciando aserciones, revierte ese hunk al instante.",
          imageDescription:
            "Vista diff de Cursor con pocos hunks en verde/rojo y la lista de archivos modificados acotada.",
        },
        {
          title: "Verifica en tu terminal y cierra o itera",
          content:
            "Corre de nuevo el **mismo comando** del paso 1. Debe pasar (o cumplir el criterio manual). Si falla, pega la **nueva** salida completa en Agent — no digas «sigue fallando» sin log — y vuelve al paso de hipótesis con «la hipótesis 2 no era; log actualizado abajo».\n\nSi pasa: `git diff` una última vez, commit en la rama con mensaje que mencione el síntoma (`fix: login 500 when email empty`). Opcional: abre un PR pequeño; el diff es el entregable, no el chat.\n\nSi ninguna hipótesis cuadra tras dos iteraciones, para el agente y escala a un humano o a Ask profundo en el módulo — no dejes que refactorice a ciegas.",
          whatYouShouldSee:
            "Terminal en verde con el comando original, `git status` limpio tras commit o working tree solo con lo que entiendes.",
          proTip:
            "Guarda el par comando + log de éxito en la descripción del PR. La próxima vez el agente parte de evidencia similar.",
          imageDescription:
            "Terminal verde, git commit en rama fix/ y opcional vista de PR con diff reducido.",
        },
      ],
      realUseCases: [
        {
          title: "Test de CI rojo en un PR tuyo",
          body: "Reproduces `npm test` local, pegas el fallo, hipótesis sobre un mock desactualizado, fix de 8 líneas, test que ya existía pasa, diff revisado.",
        },
        {
          title: "500 en API tras un merge",
          body: "Log del servidor en terminal, @ al handler y al middleware, hipótesis sobre orden de middlewares, un archivo tocado, curl manual verde.",
        },
        {
          title: "Regresión en componente React",
          body: "Error en consola del navegador copiado al chat, test de componente rojo nuevo, fix mínimo en props, diff sin tocar estilos globales.",
        },
      ],
      commonMistakes: [
        {
          title: "«Arregla el error» sin log",
          body: "El modelo rellena huecos. Pega el stack trace completo siempre.",
        },
        {
          title: "Dejar que edite antes de hipótesis",
          body: "Mezcla diagnóstico y parche. Separa mensajes: analizar, luego plan, luego diff.",
        },
        {
          title: "Confiar en «ya pasó» del chat",
          body: "Tu terminal con el script del repo manda. El agente no sustituye CI local.",
        },
        {
          title: "Fix y refactor en el mismo diff",
          body: "Imposible de revisar bajo presión. Una rama, un síntoma, un propósito.",
        },
        {
          title: "Depurar en main",
          body: "Mismo error que en cursor-repo-existente: rama `fix/` siempre.",
        },
      ],
      conclusion:
        "Depurar con Cursor Agent es un ritual: reproducir, log real, hipótesis sin tocar código, alcance estrecho, test rojo-verde y diff revisado como PR. Las reglas de proyecto y el mapa del repo acortan el tiempo; el chat solo acelera si la evidencia va primero. El entregable es un commit pequeño que entiendes, no un hilo largo que «suena bien».",
      nextSteps: [
        "Versiona en `.cursor/rules` el comando de test obligatorio antes de cerrar un fix (cursor-reglas-proyecto).",
        "Para delegar features con plan y no solo bugs, sigue cursor-como-ide-con-ia.",
        "Si acabas de clonar el repo, repasa cursor-repo-existente antes del siguiente bug urgente.",
      ],
      takeaway:
        "Reproduce → log + @ → hipótesis sin editar → plan acotado → test rojo → diff pequeño → tu terminal en verde.",
    },
    en: {
      title: "Cursor: debug errors with the agent (2026)",
      metaTitle:
        "Debug with Cursor Agent: reproduce, stack trace, hypotheses and a small diff",
      metaDescription:
        "Reproduce the failure, paste the real log into Agent, ask for hypotheses before edits, change little on a branch, write a red-green test and review the diff like a PR.",
      excerpt:
        "Do not ask «fix the error». Reproduce, paste the stack trace, rank hypotheses without touching code, then a scoped patch on a branch with a test that fails then passes.",
      intro:
        "When something breaks locally or in CI, the impulse is to open Agent and say «fix it». That often yields patches that hide the symptom or touch ten files. This flow treats the agent as a debugging partner: evidence first (reproduction and full log), then ordered theories, then a minimal change you can review line by line. It assumes you already open the repo calmly (cursor-repo-existente) and, if your team has norms, they live in `.cursor/rules` (cursor-reglas-proyecto). About 25 minutes on a `fix/` branch, not on main.",
      problem:
        "Without reproduction, the model guesses. Without the full stack trace, it invents paths. If you let it edit before listing causes, it mixes fix with refactor and the diff is no longer auditable. The other failure: accepting «done» without running your test in the terminal — chat is not the source of truth.",
      whatYouWillLearn: [
        "Reproduce the error and note the exact command that triggers it",
        "Paste the real stack trace or log into Agent with @-pinned files",
        "Ask for ordered hypotheses before any edit",
        "Scope a fix on a branch with an allowed-files list",
        "Add or adjust a test that fails first and passes after the fix",
        "Review the diff hunk by hunk before you commit",
      ],
      prerequisites: [
        "Cursor installed and the repo open as the workspace folder (cursor-repo-existente if this is new to you)",
        "A reproducible error: red test, terminal exception or browser failure with a console message",
        "Git: create a branch and read a diff in the editor",
        "The test or lint command the README or `package.json` already documents",
        "25 minutes on a branch that is not main",
      ],
      steps: [
        {
          title: "Reproduce the error and freeze the scenario",
          content:
            "Before opening Agent, run in the **integrated terminal** the same command that failed (test, dev script, build). Copy the full output — not only the last line. Note three fields: **command**, **current branch** (`git branch --show-current`) and **done-when** («`npm test -- auth` green» or «POST /login returns 400 with body X»). For UI bugs, reproduce once and copy the error from the browser console or the server line in Cursor’s terminal.\n\nCreate the branch now: `git checkout -b fix/describe-the-symptom`. Do not edit code yet.",
          whatYouShouldSee:
            "Terminal showing the error again, a log block on the clipboard and the status bar on `fix/…`.",
          tip: "If you cannot reproduce it twice in a row, the agent cannot validate the fix either. That is the ticket, not a random patch.",
          warning:
            "Do not open Agent on main with a messy tree from earlier attempts. Branch from a point you trust.",
          imageDescription:
            "Terminal with red test or server output, notepad with command / branch / done-when and git checkout -b fix/ visible.",
        },
        {
          title: "Paste the real log and pin context with @",
          content:
            "Open **Chat** in **Agent** mode (or the Agent panel in your Cursor version). In the first message paste the **full stack trace or log** — do not trim the «noise» in the middle if file paths live there. Add the done-when criterion from step 1.\n\nPin files the log mentions with `@`, e.g. `@src/auth/login.ts` and `@src/auth/login.test.ts`. If you are unsure which file, use **Ask** first: «from this stack, which file should I open first? Paths only, do not edit» then return to Agent.\n\nEnd the message with an explicit constraint: **«Do not modify files in this message. Only analyze the log.»**",
          whatYouShouldSee:
            "A long message with the pasted error, 1–3 @ files in the chat bar and a reply citing real lines or functions from the repo.",
          tip: "Pasting only «TypeError: undefined» without context forces the model to fantasize. The full log is the anchor.",
          imageDescription:
            "Agent input with multi-line stack trace and @ file chips under the message.",
        },
        {
          title: "Ask for ordered hypotheses before touching code",
          content:
            "In the same thread (or next message), ask:\n\n«List 3–5 root-cause hypotheses, most to least likely. For each: file and function, what log evidence supports it, and what you would check in 2 minutes without refactoring. Do not write code or propose a diff yet.»\n\nRead the list like a human: does it name paths that exist in your tree? Is hypothesis #1 checkable with a `console.log` or a mental breakpoint? If something sounds generic («async issue»), ask to narrow: «which exact stack line points there?»\n\nOptional: if you have Always Apply rules with the test command, the agent should mention them without you repeating the README (cursor-reglas-proyecto).",
          whatYouShouldSee:
            "A numbered reply with hypotheses, repo paths and verification steps — no «Apply» panel and no modified files.",
          warning:
            "If the agent already proposes a huge patch, reject and repeat: hypotheses only, no edits.",
          proTip:
            "A good hypothesis says «line 42 returns undefined because Z»; a bad one says «review the logic».",
          imageDescription:
            "Agent chat with numbered hypotheses and @ file quotes, no applied diff.",
        },
        {
          title: "Pick one hypothesis and scope the fix job",
          content:
            "Reply with one decision line: «We try hypothesis 2 first.» Then paste a scope block (same style as cursor-como-ide-con-ia):\n\n- **Outcome:** [your done-when from step 1]\n- **Allowed files:** at most 2–3 paths\n- **Do not touch:** CI, `.env`, dependencies, refactors, other modules\n- **Minimal change:** only what the chosen hypothesis needs\n- If you need more files, **stop and ask**\n\nAsk for a **3–5 line plan** before applying changes: «Write the plan first; wait for my OK.»",
          whatYouShouldSee:
            "A short plan in chat (which file, what change, which test to run) and your explicit OK before the first diff appears.",
          tip: "If the plan says «rewrite the module», narrow again. Debugging is not redesign.",
          imageDescription:
            "Agent with user scope block and a five-bullet plan in the reply, no Apply yet.",
        },
        {
          title: "Red test first (if none exists yet)",
          content:
            "If the bug had no test, ask for **only** a test that fails on the current symptom:\n\n«Add a test in `@…` that fails with the broken behavior. Do not fix production yet.»\n\nRun the test command yourself in the terminal. It should fail for the right reason, not a bad import in the new test. If the test passes without a fix, it does not capture the bug — fix the test before continuing.\n\nIf a red test already existed at the start, confirm it still fails after any test-only change. The red → green cycle is your safety net.",
          whatYouShouldSee:
            "Terminal with the test red and an assertion message describing the bug, not a syntax error in the new test.",
          warning:
            "Do not accept a test that mocks everything until it «passes» without exercising the path that broke.",
          imageDescription:
            "Terminal with npm test showing an expected failure and the test file open in the editor.",
        },
        {
          title: "Apply a small fix and review the diff",
          content:
            "With the red test confirmed, authorize the minimal fix for the chosen hypothesis. When the agent proposes changes, open the editor **diff view** (same as reviewing a PR): each hunk, extra files in the modified list, new unused imports.\n\nReject hunks you do not understand or that touch files outside scope. If the diff crosses ~40 lines for a localized bug, ask to split: fix first, cleanup never on the same debug branch.\n\nAccept only what you can explain in one sentence to a teammate.",
          whatYouShouldSee:
            "Diff of one or two production files plus the test; no surprise folders in Source Control.",
          tip: "If the agent «fixes» the test by emptying assertions, revert that hunk immediately.",
          imageDescription:
            "Cursor diff view with few green/red hunks and a short modified-files list.",
        },
        {
          title: "Verify in your terminal and close or iterate",
          content:
            "Run the **same command** from step 1 again. It should pass (or meet the manual criterion). If it fails, paste the **new** full output into Agent — do not say «still broken» without a log — and return to hypotheses with «hypothesis 2 was wrong; updated log below».\n\nIf it passes: `git diff` once more, commit on the branch with a message that names the symptom (`fix: login 500 when email empty`). Optional: open a small PR; the diff is the deliverable, not the chat.\n\nIf no hypothesis fits after two iterations, stop the agent and escalate to a human or deep Ask in the module — do not let it refactor blind.",
          whatYouShouldSee:
            "Green terminal with the original command, clean `git status` after commit or a working tree you fully understand.",
          proTip:
            "Save command + success log in the PR description. Next time the agent starts from similar evidence.",
          imageDescription:
            "Green terminal, git commit on fix/ branch and optional PR view with a small diff.",
        },
      ],
      realUseCases: [
        {
          title: "Red CI test on your PR",
          body: "You reproduce `npm test` locally, paste the failure, hypotheses about a stale mock, 8-line fix, existing test passes, diff reviewed.",
        },
        {
          title: "API 500 after a merge",
          body: "Server log in terminal, @ handler and middleware, hypothesis about middleware order, one file touched, manual curl green.",
        },
        {
          title: "React component regression",
          body: "Browser console error copied to chat, new red component test, minimal props fix, diff without touching global styles.",
        },
      ],
      commonMistakes: [
        {
          title: "«Fix the error» with no log",
          body: "The model fills gaps. Always paste the full stack trace.",
        },
        {
          title: "Letting it edit before hypotheses",
          body: "It mixes diagnosis and patch. Separate messages: analyze, then plan, then diff.",
        },
        {
          title: "Trusting chat «it passes now»",
          body: "Your terminal with the project script wins. The agent does not replace local CI.",
        },
        {
          title: "Fix and refactor in one diff",
          body: "Hard to review under pressure. One branch, one symptom, one purpose.",
        },
        {
          title: "Debugging on main",
          body: "Same as cursor-repo-existente: always a `fix/` branch.",
        },
      ],
      conclusion:
        "Debugging with Cursor Agent is a ritual: reproduce, real log, hypotheses without code changes, tight scope, red-green test and diff reviewed like a PR. Project rules and a repo map save time; chat only helps when evidence comes first. The deliverable is a small commit you understand, not a long thread that «sounds right».",
      nextSteps: [
        "Version the mandatory test command before closing a fix in `.cursor/rules` (cursor-reglas-proyecto).",
        "To delegate features with a plan, not only bugs, continue with cursor-como-ide-con-ia.",
        "If you just cloned the repo, skim cursor-repo-existente before the next urgent bug.",
      ],
      takeaway:
        "Reproduce → log + @ → hypotheses without edits → scoped plan → red test → small diff → your terminal green.",
    },
  },
};
