import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "cursor-cloud-agent-primer-pr";

export const cursorCloudAgentPrimerPr: Tutorial = {
  id: slug,
  slug,
  category: "code",
  level: "intermediate",
  estimatedTime: 22,
  publishedAt: "2026-09-25",
  lastUpdated: "2026-09-25",
  toolsUsed: ["cursor"],
  relatedTutorials: [
    "cursor-repo-existente",
    "cursor-como-ide-con-ia",
    "hermes-agent-primer-flujo",
    "grok-bot-primera-rutina",
  ],
  tags: [
    "cursor",
    "cloud-agent",
    "background-agent",
    "pull-request",
    "github",
    "agente",
    "2026",
  ],
  hero: tutorialHero(slug, {
    es: {
      alt: "Panel de Cursor Cloud Agent con un run completado y enlace a pull request en GitHub",
      caption: "Un objetivo claro. Una rama en la nube. Tú revisas el PR como siempre.",
      hint: "Hero 1600×900: cursor.com/agents o Cursor desktop con run terminado, rama cursor/… visible y botón o enlace «View PR» hacia GitHub.",
    },
    en: {
      alt: "Cursor Cloud Agent dashboard with a completed run and link to a GitHub pull request",
      caption: "One clear goal. A cloud branch. You review the PR as usual.",
      hint: "Hero 1600×900: cursor.com/agents or Cursor desktop with finished run, cursor/… branch visible and View PR link to GitHub.",
    },
  }),
  copy: {
    es: {
      title: "Cursor Cloud Agent: tu primer PR desde la nube (2026)",
      metaTitle:
        "Cursor Cloud Agent: abrir tu primer PR en GitHub sin estar en el IDE",
      metaDescription:
        "Cuándo usar Cloud Agent frente al Agent local, redactar un prompt de resultado, lanzar un run en un repo conectado, esperar la rama y revisar el PR en GitHub antes de mergear.",
      excerpt:
        "Delega un cambio acotado en un VM de Cursor: el agente clona tu repo, trabaja en rama y abre un PR real. Tú revisas el diff en GitHub, no el párrafo del chat.",
      intro:
        "Cursor Cloud Agent (antes Background Agent) es un agente de código que corre en una máquina aislada de Cursor, clona tu repositorio desde GitHub y entrega el trabajo como rama y pull request — no como un diff solo en tu laptop. Sirve cuando quieres cerrar una tarea mientras haces otra cosa, o cuando no tienes el repo abierto en el IDE. No es Grok Bot (teammates y Agent Computer para Gmail, PDFs y navegador), no es Hermes en terminal local, y no es el chat de Grok en grok.com. Documentación oficial: https://cursor.com/docs/cloud-agent. Puedes arrancar runs desde el escritorio (modo Cloud en el agente), desde https://cursor.com/agents o desde un comentario @cursor en GitHub si tu equipo lo tiene activo. Este tutorial asume un repo en GitHub con permisos de push y un cambio pequeño que ya sabes describir.",
      problem:
        "Sin criterios claros, un Cloud Agent hace un PR enorme o toca archivos que no tocan. Sin revisar el diff en GitHub, merges código que no entiendes. Otro fallo frecuente: confundir el PR en github.com con un borrador en otro forge, o lanzar el agente en el repo equivocado porque el prompt no nombra la URL. El síntoma es «el agente terminó» pero el PR no es mergeable o no es el que esperabas.",
      whatYouWillLearn: [
        "Elegir Cloud Agent frente al Agent local del IDE",
        "Acotar un primer encargo con síntomas y criterios de éxito, no una receta de líneas",
        "Comprobar que GitHub está conectado a tu cuenta Cursor",
        "Lanzar un run en el repo correcto y seguir el estado hasta que aparezca la rama",
        "Abrir el pull request en GitHub y revisar diff, checks y alcance",
        "Mergear, pedir cambios o cerrar el PR sin miedo",
        "Evitar errores típicos: prompt vago, repo incorrecto, saltarse la revisión",
      ],
      prerequisites: [
        "Cuenta Cursor con Cloud Agents habilitado y GitHub conectado (admin del equipo si es org)",
        "Un repositorio en GitHub donde puedas abrir PRs (tuyo o de equipo con permiso)",
        "Haber usado Cursor en un repo al menos una vez (tutorial cursor-repo-existente ayuda)",
        "Una tarea acotada: fix de test, typo en docs, pequeño bug con síntoma reproducible",
        "22 minutos: unos minutos de redacción, espera del run y revisión del PR",
      ],
      steps: [
        {
          title: "Cloud Agent o Agent local: elige una vez",
          content:
            "Usa el **Agent local** en Cursor desktop cuando estás en el repo, quieres ver cada diff al instante y ejecutar tests en tu máquina. Usa **Cloud Agent** cuando el trabajo puede tardar, no tienes el proyecto abierto, o quieres el entregable ya empaquetado como rama + PR en GitHub. Cloud Agent clona el remoto en la VM de Cursor, instala según el entorno del repo (o un snapshot de environment) y hace push a una rama — suele ser `cursor/…` — para que revises en GitHub. No lo uses para «explícame el código» sin cambios: eso es Ask en local. No lo confundas con Grok Bot: ese producto automatiza navegador y documentos en Agent Computer, no abre PRs en tu repo de la misma forma.",
          whatYouShouldSee:
            "Una decisión escrita en una línea: «Cloud: fix documentado en issue #N» o «Local: prototipo en mi laptop».",
          tip:
            "Primer PR desde la nube: elige algo que ya habrías hecho en una rama de 30–80 líneas, no un rediseño.",
          imageDescription:
            "Esquema lado a lado: IDE con Agent local vs panel web cursor.com/agents con run en la nube.",
        },
        {
          title: "Define un trabajo que cabe en un PR",
          content:
            "Abre el issue, el test rojo o el comentario de revisión que quieres resolver. Escríbelo en tres frases: **síntoma** (qué falla o qué falta), **alcance** (qué carpetas o archivos pueden tocarse y cuáles no), **prueba** (comando o check que debe pasar). Ejemplo: «El test `auth.test.ts` falla con email vacío; arregla validación solo en `src/auth/`; `npm test` en ese paquete en verde». Si no hay tests, define un criterio observable: «el README lista el comando de build correcto». Evita «mejora la app» o «refactoriza auth». Si acabas de llegar al repo, repasa cursor-repo-existente antes de delegar.",
          whatYouShouldSee:
            "Nota con síntoma, alcance explícito (incluye «no tocar») y comando de verificación.",
          warning:
            "Un encargo sin límite de carpetas invita a un PR de 40 archivos. Acota antes de lanzar.",
          imageDescription:
            "Issue de GitHub o test fallido junto a un bloc con síntoma, alcance y comando test.",
        },
        {
          title: "Redacta el prompt de resultado (meta, no parche línea a línea)",
          content:
            "En el campo del agente (Cloud), pega un brief estructurado:\n\n1. **Contexto:** enlace al repo `https://github.com/org/repo` y rama base (`main` salvo que indiques otra).\n2. **Objetivo:** qué debe ser verdad al terminar (tests verdes, string corregido, doc añadida).\n3. **Límites:** no cambiar CI, no tocar `affiliates.ts`, no inventar URLs.\n4. **Definition of done:** «abre PR contra main, título descriptivo, `npm run build` pasa».\n\nNo pegues «cambia la línea 42 por X» salvo que sea un typo obvio. Cloud Agent elige implementación si el resultado está claro. Pide explícitamente pull request si tu flujo lo requiere — la documentación describe PRs listos para revisión. Docs: https://cursor.com/docs/cloud-agent",
          whatYouShouldSee:
            "Prompt de 10–20 líneas con URL del repo, criterios de éxito y límites. Sin lista de diez edits micro.",
          proTip:
            "Incluye el síntoma del error literal (mensaje de test o log) para que no «arregle» debilitando el assert.",
          imageDescription:
            "Editor de prompt Cloud con secciones Contexto, Objetivo, Límites y Definition of done.",
        },
        {
          title: "Confirma repo conectado y arranca el run",
          content:
            "En **Cursor desktop**, abre el chat del agente y elige **Cloud** en el desplegable bajo el input (nombre exacto puede variar; busca Cloud / Cloud Agent). En **web**, entra en https://cursor.com/agents, elige el repositorio GitHub correcto y pega el mismo prompt. Si tu organización acaba de conectar GitHub, un admin debe haber autorizado el acceso al repo — sin eso el run falla al clonar. Comprueba dos veces el nombre del repo en la UI antes de enviar. Opcional: en un issue o PR de GitHub, un comentario `@cursor` con el mismo brief si tu equipo usa esa integración. Pulsa enviar y anota la hora: los runs largos son normales en monorepos.",
          whatYouShouldSee:
            "Run en estado «running» o similar, con el repo GitHub correcto visible en la cabecera del agente.",
          warning:
            "Abrir el PR en github.com, no en un panel de otro forge. El enlace del run debe apuntar a `github.com/.../pull/...`.",
          imageDescription:
            "cursor.com/agents con selector de repo GitHub y un run recién iniciado; o Cursor desktop con Cloud seleccionado.",
        },
        {
          title: "Espera rama, commits y enlace al PR",
          content:
            "Mientras corre, puedes cerrar la pestaña: el agente sigue en la VM. Vuelve al run en cursor.com/agents o en el historial del desktop. Cuando termine, deberías ver rama creada (a menudo prefijo `cursor/`), commits listados y un enlace **View PR** o equivalente hacia GitHub. Si el run falla, lee el log en la página del agente — suele ser clone denegado, build roto en el entorno, o prompt imposible. No relances con el mismo texto sin corregir el error. Si no aparece PR, revisa si pediste crearlo y si el agente tuvo permiso de push; la API documenta `autoCreatePR` para integraciones, pero en UI el comportamiento habitual es entregar rama + PR cuando el run tiene éxito.",
          whatYouShouldSee:
            "Estado «completed», rama remota en GitHub y PR abierto (draft o listo) con título coherente con tu brief.",
          tip:
            "Si el PR es draft, está bien: márcalo listo para revisión cuando hayas leído el diff.",
          imageDescription:
            "Página de run completado con lista de commits, nombre de rama cursor/… y botón View PR.",
        },
        {
          title: "Revisa el PR en GitHub como si fuera de un compañero",
          content:
            "Abre el PR en GitHub. Lee el título y la descripción del agente. En **Files changed**, comprueba alcance: ¿solo las carpetas permitidas? ¿Hay cambios en config, locks o snapshots que no pediste? Ejecuta mentalmente tu definition of done: si pediste `npm test`, mira si el agente lo menciona en el cuerpo o si CI ya corre en el repo. Rechaza patrones sospechosos: tests vaciados, `skip`, dependencias añadidas sin motivo. Usa comentarios en línea para pedir ajustes o abre un follow-up local si es trivial. Cloud Agent puede adjuntar artefactos (capturas, logs) según la documentación — úsalos para validar UI si el cambio es visual.",
          whatYouShouldSee:
            "Diff acotado, mensaje de PR que repite el objetivo, checks de CI en curso o verdes si el repo los tiene.",
          warning:
            "No merges solo porque «lo hizo la IA». El valor del flujo es que tú eres el revisor.",
          imageDescription:
            "GitHub PR con pestaña Files changed, diff pequeño resaltado y checks de Actions en la parte inferior.",
        },
        {
          title: "Merge, cambios solicitados o cierre",
          content:
            "Si el diff cumple el brief y CI pasa (o no hay CI y verificaste a mano), mergea con la estrategia que use tu equipo. Si falta algo, deja comentarios concretos («vuelve a poner el assert en línea X») y relanza un Cloud Agent con el mismo repo citando el número de PR, o arregla tú en la rama del bot. Si el enfoque es malo, cierra el PR sin merge y escribe un prompt más acotado. Anota qué funcionó en el brief para el siguiente run. Cuando el trabajo sea exploración en tu máquina con muchos intentos, vuelve al Agent local (cursor-como-ide-con-ia). Cuando sea automatizar Gmail o PDFs, eso es Grok Bot o Hermes — no este flujo.",
          whatYouShouldSee:
            "PR mergeado o comentarios de revisión enviados; en tu bloc, una versión mejorada del prompt para la próxima vez.",
          proTip:
            "Guarda el enlace del run de Cursor junto al PR — ayuda a depurar si alguien pregunta qué modelo o entorno se usó.",
          imageDescription:
            "GitHub con botón Merge verde o hilo de review comments; al lado, nota con prompt refinado.",
        },
      ],
      realUseCases: [
        {
          title: "Fix de test en un repo que no tienes abierto",
          body: "CI rojo en `main` por un assert desactualizado. Lanzas Cloud Agent con el log del fallo, limitas a `src/foo/`, y revisas el PR en el móvil antes de mergear en la pausa del café.",
        },
        {
          title: "Documentación que sigue al código",
          body: "Tras un refactor pequeño ya mergeado, pides un PR que solo actualice README y comentarios JSDoc en un módulo, con `npm run build` como criterio.",
        },
        {
          title: "Tarea de backlog mientras el IDE está en otra cosa",
          body: "Tienes un experimento local sucio en otra rama. Delegas un typo y una entrada en CHANGELOG al Cloud Agent para no mezclar contextos en tu workspace.",
        },
      ],
      commonMistakes: [
        {
          title: "Prompt vago («arregla los tests»)",
          body: "El agente toca decenas de archivos o silencia asserts. Especifica síntoma, carpeta y comando de verificación.",
        },
        {
          title: "Repo o remoto equivocado",
          body: "El run clona un fork sin permisos o un homónimo. Pega la URL completa de GitHub en el prompt y verifica el selector en cursor.com/agents.",
        },
        {
          title: "Confundir GitHub con otro forge o panel interno",
          body: "El PR válido vive en github.com/org/repo/pull/N. Un borrador en otra herramienta no sustituye la revisión en GitHub.",
        },
        {
          title: "Merge sin leer Files changed",
          body: "Cloud Agent puede introducir dependencias o saltarse límites. Trata el PR como el de cualquier contribuidor.",
        },
        {
          title: "Usar Cloud Agent para trabajo no-code",
          body: "Triaje de inbox, slides o CRM van a Grok Bot o Hermes. Cloud Agent es para código en repos conectados.",
        },
      ],
      conclusion:
        "Tu primer PR útil con Cursor Cloud Agent no depende de memorizar menús: depende de un objetivo acotado, un repo GitHub correcto, un prompt con criterios de éxito y una revisión honesta del diff. El agente trabaja en la nube; tú sigues siendo quien mergea. Cuando necesites iterar rápido en tu teclado, el Agent local sigue ahí. Cuando necesites teammates en navegador, usa Grok Bot — productos distintos, entregables distintos.",
      nextSteps: [
        "Repite con un segundo encargo igual de pequeño y compara si el brief necesita menos texto.",
        "Lee la sección de entornos en https://cursor.com/docs/cloud-agent si el run falla en install o build.",
        "Profundiza en Agent local y reglas de proyecto con cursor-como-ide-con-ia.",
      ],
      takeaway:
        "Cloud si el entregable es PR → síntoma + alcance + done → repo GitHub correcto → run → revisar en github.com → merge o feedback.",
    },
    en: {
      title: "Cursor Cloud Agent: your first PR from the cloud (2026)",
      metaTitle:
        "Cursor Cloud Agent: open your first GitHub PR without staying in the IDE",
      metaDescription:
        "When to use Cloud Agent vs local Agent, write an outcome prompt, launch a run on a connected repo, wait for the branch and review the GitHub PR before merge.",
      excerpt:
        "Delegate a scoped change on a Cursor VM: the agent clones your repo, works on a branch and opens a real PR. You review the diff on GitHub, not the chat paragraph.",
      intro:
        "Cursor Cloud Agent (formerly Background Agent) is a coding agent that runs on an isolated Cursor machine, clones your repository from GitHub and hands work back as a branch and pull request — not only as a diff on your laptop. Use it when you want to finish a task while doing something else, or when the repo is not open in the IDE. It is not Grok Bot (teammates and Agent Computer for Gmail, PDFs and browser work), not Hermes in a local terminal, and not Grok web chat at grok.com. Official docs: https://cursor.com/docs/cloud-agent. You can start runs from desktop (Cloud mode in the agent), from https://cursor.com/agents or from an @cursor comment on GitHub if your team enabled it. This tutorial assumes a GitHub repo you can push to and a small change you can already describe.",
      problem:
        "Without clear success criteria, a Cloud Agent opens a huge PR or edits files that are out of scope. Without reviewing the diff on GitHub, you merge code you do not understand. Another common failure: confusing a github.com pull request with a draft somewhere else, or launching on the wrong repo because the prompt never named the URL. The symptom is «the agent finished» but the PR is not mergeable or not the one you expected.",
      whatYouWillLearn: [
        "Choose Cloud Agent vs local IDE Agent",
        "Scope a first job with symptoms and success criteria, not a line-by-line recipe",
        "Confirm GitHub is connected to your Cursor account",
        "Launch a run on the correct repo and follow status until a branch appears",
        "Open the pull request on GitHub and review diff, checks and scope",
        "Merge, request changes or close without guesswork",
        "Avoid typical mistakes: vague prompt, wrong repo, skipping review",
      ],
      prerequisites: [
        "Cursor account with Cloud Agents enabled and GitHub connected (team admin for org repos)",
        "A GitHub repository where you can open PRs (yours or team with permission)",
        "Used Cursor on a repo at least once (cursor-repo-existente helps)",
        "A scoped task: test fix, docs typo, small bug with a reproducible symptom",
        "22 minutes: a few minutes writing, run wait time and PR review",
      ],
      steps: [
        {
          title: "Cloud Agent or local Agent: decide once",
          content:
            "Use **local Agent** in Cursor desktop when you are in the repo, want to see each diff immediately and run tests on your machine. Use **Cloud Agent** when the job may take a while, you do not have the project open, or you want the deliverable packaged as branch + PR on GitHub. Cloud Agent clones the remote on Cursor's VM, installs per repo environment (or an environment snapshot) and pushes to a branch — often `cursor/…` — for you to review on GitHub. Do not use it for «explain the codebase» with no code change: that is Ask locally. Do not confuse it with Grok Bot: that product automates browser and documents in Agent Computer; it does not open PRs on your repo the same way.",
          whatYouShouldSee:
            "A one-line decision written down: «Cloud: documented fix for issue #N» or «Local: spike on my laptop».",
          tip:
            "First cloud PR: pick something you would already do in a 30–80 line branch, not a redesign.",
          imageDescription:
            "Side-by-side sketch: IDE with local Agent vs cursor.com/agents panel with a cloud run.",
        },
        {
          title: "Define a job that fits one PR",
          content:
            "Open the issue, failing test or review comment you want to address. Write three sentences: **symptom** (what fails or is missing), **scope** (which folders or files may change and which may not), **proof** (command or check that must pass). Example: «`auth.test.ts` fails on empty email; fix validation only under `src/auth/`; `npm test` green in that package». If there are no tests, define something observable: «README lists the correct build command». Avoid «improve the app» or «refactor auth». If you are new to the repo, skim cursor-repo-existente before delegating.",
          whatYouShouldSee:
            "A note with symptom, explicit scope (including «do not touch») and a verification command.",
          warning:
            "A job with no folder limits invites a 40-file PR. Scope before you launch.",
          imageDescription:
            "GitHub issue or failing test next to notes with symptom, scope and test command.",
        },
        {
          title: "Write an outcome prompt (goal, not line-by-line patch)",
          content:
            "In the Cloud agent field, paste a structured brief:\n\n1. **Context:** link to `https://github.com/org/repo` and base branch (`main` unless you say otherwise).\n2. **Goal:** what must be true when done (green tests, fixed string, doc added).\n3. **Limits:** do not change CI, do not touch `affiliates.ts`, do not invent URLs.\n4. **Definition of done:** «open PR against main, descriptive title, `npm run build` passes».\n\nDo not paste «change line 42 to X» unless it is an obvious typo. Cloud Agent picks implementation when the outcome is clear. Ask explicitly for a pull request if your workflow needs it — docs describe merge-ready PRs. Docs: https://cursor.com/docs/cloud-agent",
          whatYouShouldSee:
            "A 10–20 line prompt with repo URL, success criteria and limits. No micro edit list of ten items.",
          proTip:
            "Include the literal error symptom (test message or log) so it does not «fix» by weakening the assert.",
          imageDescription:
            "Cloud prompt editor with Context, Goal, Limits and Definition of done sections.",
        },
        {
          title: "Confirm connected repo and start the run",
          content:
            "In **Cursor desktop**, open agent chat and pick **Cloud** in the dropdown under the input (exact label may vary; look for Cloud / Cloud Agent). On the **web**, go to https://cursor.com/agents, select the correct GitHub repository and paste the same prompt. If your org just connected GitHub, an admin must have authorized repo access — otherwise clone fails. Double-check the repo name in the UI before send. Optional: on a GitHub issue or PR, an `@cursor` comment with the same brief if your team uses that integration. Submit and note the time; long runs are normal on monorepos.",
          whatYouShouldSee:
            "Run in «running» or similar state, with the correct GitHub repo shown in the agent header.",
          warning:
            "Open the PR on github.com, not another forge's panel. The run link should land on `github.com/.../pull/...`.",
          imageDescription:
            "cursor.com/agents with GitHub repo picker and a newly started run; or Cursor desktop with Cloud selected.",
        },
        {
          title: "Wait for branch, commits and PR link",
          content:
            "While it runs, you can close the tab: the agent keeps working on the VM. Return to the run on cursor.com/agents or desktop history. When finished, you should see a created branch (often `cursor/` prefix), listed commits and a **View PR** or similar link to GitHub. If the run fails, read the log on the agent page — common causes are denied clone, broken environment build or impossible prompt. Do not relaunch with the same text without fixing the error. If no PR appears, check whether you asked for one and whether push permission succeeded; the API documents `autoCreatePR` for integrations, but in the UI the usual success path is branch + PR.",
          whatYouShouldSee:
            "«Completed» status, remote branch on GitHub and an open PR (draft or ready) with a title that matches your brief.",
          tip:
            "A draft PR is fine: mark ready for review after you read the diff.",
          imageDescription:
            "Completed run page with commits, cursor/… branch name and View PR button.",
        },
        {
          title: "Review the PR on GitHub like a teammate's",
          content:
            "Open the PR on GitHub. Read the agent's title and description. On **Files changed**, check scope: only allowed folders? Unexpected config, lockfiles or snapshot churn? Walk through your definition of done: if you asked for `npm test`, see whether the agent mentioned it or CI already runs on the repo. Reject suspicious patterns: emptied tests, broad `skip`, dependencies added for no reason. Use inline comments to request fixes or handle trivial follow-ups locally. Cloud Agent may attach artifacts (screenshots, logs) per docs — use them to validate UI for visual changes.",
          whatYouShouldSee:
            "A bounded diff, PR body that states the goal, CI checks running or green if the repo has them.",
          warning:
            "Do not merge because «the AI did it». You are still the reviewer in this flow.",
          imageDescription:
            "GitHub PR Files changed tab, small highlighted diff and Actions checks at the bottom.",
        },
        {
          title: "Merge, request changes or close",
          content:
            "If the diff meets the brief and CI passes (or there is no CI and you verified manually), merge with your team's strategy. If something is missing, leave concrete comments («restore the assert on line X») and relaunch Cloud Agent on the same repo citing the PR number, or fix on the bot branch yourself. If the approach is wrong, close without merge and write a tighter prompt. Note what worked in the brief for the next run. When you need many local iterations, switch back to local Agent (cursor-como-ide-con-ia). For inbox or PDF automation, use Grok Bot or Hermes — not this flow.",
          whatYouShouldSee:
            "Merged PR or review comments sent; in your notes, an improved prompt version for next time.",
          proTip:
            "Save the Cursor run link with the PR — it helps debug which environment or model was used.",
          imageDescription:
            "GitHub Merge button or review thread; beside it, a note with refined prompt.",
        },
      ],
      realUseCases: [
        {
          title: "Test fix on a repo you do not have open",
          body: "CI red on `main` from a stale assert. You launch Cloud Agent with the failure log, limit to `src/foo/`, and review the PR on your phone before merging on a break.",
        },
        {
          title: "Docs that track the code",
          body: "After a small merged refactor, you ask for a PR that only updates README and JSDoc in one module, with `npm run build` as the bar.",
        },
        {
          title: "Backlog item while the IDE is busy elsewhere",
          body: "You have a messy local experiment on another branch. You delegate a typo and CHANGELOG entry to Cloud Agent so contexts do not mix in your workspace.",
        },
      ],
      commonMistakes: [
        {
          title: "Vague prompt («fix the tests»)",
          body: "The agent touches dozens of files or silences asserts. Specify symptom, folder and verification command.",
        },
        {
          title: "Wrong repo or remote",
          body: "The run clones a fork without permission or a namesake. Paste the full GitHub URL in the prompt and verify the picker on cursor.com/agents.",
        },
        {
          title: "Confusing GitHub with another forge or internal panel",
          body: "The real PR lives at github.com/org/repo/pull/N. A draft elsewhere does not replace review on GitHub.",
        },
        {
          title: "Merging without reading Files changed",
          body: "Cloud Agent can add dependencies or ignore limits. Treat the PR like any contributor's.",
        },
        {
          title: "Using Cloud Agent for non-code work",
          body: "Inbox triage, slides or CRM belong to Grok Bot or Hermes. Cloud Agent is for code on connected repos.",
        },
      ],
      conclusion:
        "Your first useful PR with Cursor Cloud Agent is not about memorizing menus: it is about a scoped goal, the right GitHub repo, a prompt with success criteria and an honest diff review. The agent works in the cloud; you still decide what merges. When you need fast keyboard iteration, local Agent remains. When you need browser teammates, use Grok Bot — different products, different deliverables.",
      nextSteps: [
        "Repeat with a second equally small job and see if the brief can be shorter.",
        "Read the environments section at https://cursor.com/docs/cloud-agent if runs fail on install or build.",
        "Go deeper on local Agent and project rules with cursor-como-ide-con-ia.",
      ],
      takeaway:
        "Cloud when the deliverable is a PR → symptom + scope + done → correct GitHub repo → run → review on github.com → merge or feedback.",
    },
  },
};
