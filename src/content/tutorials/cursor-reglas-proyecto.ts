import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "cursor-reglas-proyecto";

export const cursorReglasProyecto: Tutorial = {
  id: slug,
  slug,
  category: "code",
  level: "intermediate",
  estimatedTime: 20,
  publishedAt: "2026-10-07",
  lastUpdated: "2026-10-07",
  toolsUsed: ["cursor"],
  relatedTutorials: [
    "cursor-repo-existente",
    "cursor-como-ide-con-ia",
    "cursor-cloud-agent-primer-pr",
  ],
  tags: [
    "cursor",
    "rules",
    "cursor-rules",
    "mdc",
    "agents-md",
    "equipo",
    "2026",
  ],
  hero: tutorialHero(slug, {
    es: {
      alt: "Explorador de Cursor con la carpeta .cursor/rules y un archivo .mdc abierto con frontmatter",
      caption: "Las reglas viven en el repo. El agente las lee en cada sesión según el tipo que elijas.",
      hint: "Hero 1600×900: VS Code/Cursor con .cursor/rules/ visible, un .mdc con alwaysApply o globs en el editor y el panel Customize → Rules en segundo plano.",
    },
    en: {
      alt: "Cursor explorer showing .cursor/rules and an open .mdc file with frontmatter",
      caption: "Rules live in the repo. The agent loads them each session based on the type you pick.",
      hint: "Hero 1600×900: Cursor with .cursor/rules/ visible, an .mdc with alwaysApply or globs in the editor and Customize → Rules in the background.",
    },
  }),
  copy: {
    es: {
      title: "Cursor: reglas del proyecto (.cursor/rules) (2026)",
      metaTitle:
        "Reglas de proyecto en Cursor: .cursor/rules, tipos .mdc y AGENTS.md",
      metaDescription:
        "Crea reglas versionadas en .cursor/rules como archivos .mdc (alwaysApply, globs, descripción), referéncialas con @, migra .cursorrules y valida que Agent las respeta antes de commitear.",
      excerpt:
        "Deja de repetir «usa pnpm» en cada chat. Una regla Always, otra con globs para tu carpeta de componentes y una manual para releases — en git, no en la cabeza del equipo.",
      intro:
        "Las reglas de proyecto son instrucciones persistentes que Cursor inyecta al contexto del Agent según cómo las configures. Viven en `.cursor/rules/` como archivos `.mdc` con frontmatter (`description`, `globs`, `alwaysApply`), se versionan con el código y el equipo las comparte sin copiar prompts. Si solo necesitas un markdown simple, `AGENTS.md` en la raíz (o en subcarpetas) es la alternativa oficial sin metadatos. El archivo `.cursorrules` en la raíz sigue funcionando en muchos repos pero Cursor lo trata como legado: conviene migrar el contenido a una regla «Always Apply». Documentación: https://cursor.com/docs/rules y migración desde `.cursorrules`: https://cursor.com/help/customization/rules. Este flujo dura unos 20 minutos y termina con dos reglas reales en tu repo y una comprobación en Agent.",
      problem:
        "Sin reglas, cada persona reescribe las mismas normas en el chat («no toques CI», «tests antes de commit») y el modelo las olvida en la siguiente sesión. El otro extremo también falla: un `.mdc` de 400 líneas con `alwaysApply: true` que quema contexto y contradice al linter. O reglas con `globs` mal escritos que nunca se adjuntan porque el patrón no coincide con los archivos que mencionas en el chat. El síntoma es «Cursor no hace caso» cuando en realidad la regla no estaba en contexto.",
      whatYouWillLearn: [
        "Elegir entre `.cursor/rules`, `AGENTS.md` y migrar `.cursorrules`",
        "Crear la carpeta y un primer archivo `.mdc` con frontmatter válido",
        "Configurar una regla Always Apply para estándares globales del repo",
        "Añadir una regla Auto Attached con `globs` para un directorio concreto",
        "Usar descripción (Apply Intelligently) y @ para reglas manuales",
        "Referenciar archivos del repo con @ dentro de una regla",
        "Verificar en Agent y commitear las reglas con el equipo",
      ],
      prerequisites: [
        "Cursor instalado y un repo abierto como carpeta de trabajo (tutorial cursor-repo-existente si es la primera vez)",
        "Permiso para crear `.cursor/rules/` y commitear en el repo",
        "20 minutos y un estándar real que ya repites en chat (comando de test, estilo de ramas, carpeta prohibida)",
      ],
      steps: [
        {
          title: "Elige el formato: reglas .mdc, AGENTS.md o legado",
          content:
            "Antes de escribir archivos, decide el nivel de estructura.\n\n- **`.cursor/rules/*.mdc`**: varias reglas con tipos (Always, globs, descripción, manual con @). Es lo que Cursor documenta para equipos que quieren reglas acotadas y composables.\n- **`AGENTS.md`**: un solo markdown en la raíz (o anidado en subcarpetas) sin frontmatter. Cursor lo aplica cuando trabajas en esa ruta. Ideal si aún no necesitas globs.\n- **`.cursorrules`**: archivo único en la raíz, legado. Si ya lo tienes, planifica migrarlo a un `.mdc` con `alwaysApply: true` y borrar `.cursorrules` (ver https://cursor.com/help/customization/rules).\n\nPara este tutorial asumimos **`.cursor/rules`**. Abre la doc de referencia en una pestaña: https://cursor.com/docs/rules",
          whatYouShouldSee:
            "Una nota de una línea: «mdc para estándares por carpeta» o «AGENTS.md basta por ahora».",
          tip:
            "No mezcles los tres con el mismo texto duplicado. El modelo recibe reglas repetidas y prioriza mal.",
          imageDescription:
            "Tabla mental o nota comparando .cursor/rules, AGENTS.md y .cursorrules tachado como legado.",
        },
        {
          title: "Crea `.cursor/rules` y tu primera regla",
          content:
            "En la raíz del repo crea la carpeta `.cursor/rules/` si no existe. Puedes añadir reglas de dos formas oficiales:\n\n1. **Customize → Rules → Add Rule** en la barra lateral de Cursor (también descrito en la documentación).\n2. **Archivo nuevo** `team-basics.mdc` con frontmatter y cuerpo en markdown.\n\nUn esqueleto mínimo:\n\n```md\n---\ndescription: Estándares globales del repo\nalwaysApply: true\n---\n\n- Ejecuta `npm test` (o el script del README) antes de dar por cerrado un cambio.\n- No modifiques `.github/workflows/` sin pedirlo explícitamente.\n```\n\nEl nombre del archivo es libre; la extensión **debe** ser `.mdc`. Un `.md` suelto dentro de `.cursor/rules` no entra en el sistema de reglas según la documentación oficial.",
          whatYouShouldSee:
            "Árbol de archivos con `.cursor/rules/team-basics.mdc` guardado y visible en el editor.",
          warning:
            "Plain `.md` en `.cursor/rules` no sustituye a `.mdc`. Si quieres solo markdown, usa `AGENTS.md`.",
          imageDescription:
            "Explorador con .cursor/rules/ y el editor mostrando frontmatter --- con alwaysApply: true.",
        },
        {
          title: "Regla Always Apply: lo que vale en todo chat",
          content:
            "En el desplegable de tipo de regla (o editando frontmatter), elige **Always Apply** → `alwaysApply: true`. Con `true`, Cursor incluye la regla en cada sesión de Agent; `globs` y `description` se ignoran según la tabla oficial.\n\nEscribe solo normas que realmente quieras **siempre**: copyright, comando de verificación, carpetas prohibidas, convención de ramas. Mantén el cuerpo corto (la doc recomienda reglas enfocadas, idealmente bajo ~500 líneas). Evita pegar guías enteras de estilo: apunta al linter o a un archivo ejemplo con `@`.\n\nEjemplo de línea útil: «Los cambios de API deben actualizar `src/types/api.ts` o explicar por qué no.»",
          whatYouShouldSee:
            "En Customize → Rules, la regla aparece como Always / siempre activa, o el frontmatter muestra `alwaysApply: true`.",
          tip:
            "Si solo tienes tres reglas globales, una Always Apply suele bastar. El resto, globs o manual.",
          imageDescription:
            "Panel Customize Rules con una regla marcada Always Apply y el .mdc correspondiente.",
        },
        {
          title: "Regla por archivos: `globs` (Auto Attached)",
          content:
            "Crea un segundo archivo, por ejemplo `frontend-react.mdc`, para normas que solo aplican al front:\n\n```md\n---\nglobs: src/components/**/*.tsx\nalwaysApply: false\n---\n\n- Usa exports nombrados en componentes nuevos.\n- Estilos en el módulo CSS junto al componente.\n```\n\nCon `alwaysApply: false` y `globs` definidos, la regla se **adjunta cuando un archivo que coincide está en contexto** (archivos que mencionas con `@` o que el agente abre, según la documentación). Separa varios patrones con **comas**, por ejemplo `docs/**/*.md, docs/**/*.mdx`.\n\nComprueba que el patrón refleja rutas reales de tu repo (`src/**` vs `frontend/**`). Un glob que no coincide es la causa más común de «esta regla no corre».",
          whatYouShouldSee:
            "Segundo `.mdc` con `globs:` acorde a tu carpeta de componentes y `alwaysApply: false`.",
          warning:
            "No pongas `alwaysApply: true` en reglas de carpeta: quemarías contexto en chats que no tocan ese código.",
          imageDescription:
            "Archivo frontend-react.mdc con globs src/components/**/*.tsx y lista corta de convenciones.",
        },
        {
          title: "Apply Intelligently y Manual: descripción y @",
          content:
            "Tercer archivo: reglas que no quieres siempre ni atadas a un glob.\n\n**Apply Intelligently (Agent Requested):** `alwaysApply: false`, `description` rellena, sin `globs`. El agente lee la descripción y puede incluir la regla cuando el tema encaja (p. ej. `description: Migraciones SQL y rollback; usar cuando toques db/migrations`).\n\n**Manual:** `alwaysApply: false` sin `description` ni `globs`. Solo entra si la mencionas en el chat, p. ej. `@release-checklist.mdc` o eligiendo la regla en el menú @.\n\nPuedes enlazar plantillas dentro del cuerpo con `@migration-template.sql` para que el agente cargue un archivo de referencia sin copiarlo entero en la regla (documentado en https://cursor.com/docs/rules).",
          whatYouShouldSee:
            "Al menos un `.mdc` con solo `description` y otro pensado para invocar con @ en tareas puntuales.",
          proTip:
            "Los nombres de archivo (`release-checklist.mdc`) son los que el usuario @-menciona; elígelos legibles.",
          imageDescription:
            "Chat de Agent con @release-checklist.mdc en el input y la regla apareciendo como contexto adjunto.",
        },
        {
          title: "Prueba en Agent que la regla está en juego",
          content:
            "Abre **Agent** (no solo Tab inline: las User Rules no aplican a Cmd/Ctrl+K según la FAQ oficial). Haz tres comprobaciones rápidas:\n\n1. **Always:** pregunta «¿qué comando de test debo correr antes de cerrar?» — debe citar tu regla global sin que repitas el texto.\n2. **Globs:** menciona con `@` un archivo `.tsx` bajo el patrón y pide un componente nuevo — debe respetar exports nombrados si los definiste.\n3. **Manual:** escribe `@team-basics.mdc` o tu checklist y pide un cambio acotado.\n\nSi la respuesta ignora la regla, abre Customize → Rules y confirma tipo y frontmatter. Repite tras guardar el archivo; a veces hace falta un mensaje nuevo en el chat.",
          whatYouShouldSee:
            "Respuestas del agente alineadas con viñetas de tus `.mdc`, no consejos genéricos que contradicen la regla.",
          tip:
            "Si acabas de llegar al repo, deja que termine la indexación (cursor-repo-existente) antes de juzgar reglas con globs.",
          imageDescription:
            "Agent chat con un archivo @ anclado y la respuesta mencionando una viñeta de la regla frontend.",
        },
        {
          title: "Commitea, revisa en PR y evita duplicar legado",
          content:
            "Añade `.cursor/rules/` a git (`git add .cursor/rules`). En el commit, explica qué tipo usa cada archivo (Always vs globs vs manual). Si migraste desde `.cursorrules`, **elimina** el legado en el mismo PR para no duplicar instrucciones.\n\nEn la descripción del PR, enlaza https://cursor.com/docs/rules para onboarding. Pide a un compañero que abra el repo en Cursor y confirme que ve las reglas en Customize sin copiar archivos a mano.\n\nOpcional: para equipos que prefieren un solo doc, un `AGENTS.md` corto en la raíz puede convivir, pero no repitas el mismo párrafo en cinco sitios. Cuando delegues trabajo al Cloud Agent, las reglas versionadas en el repo son las que clonará la VM — coherente con cursor-cloud-agent-primer-pr.",
          whatYouShouldSee:
            "`git status` con `.cursor/rules/*.mdc` staged, sin `.cursorrules` si migraste, y Customize mostrando las mismas reglas en otra máquina tras pull.",
          warning:
            "Reglas enormes con `alwaysApply: true` ralentizan y confunden. Parte en varios `.mdc` composables.",
          imageDescription:
            "Terminal con git commit de .cursor/rules y vista de GitHub PR con la carpeta nueva en el diff.",
        },
      ],
      realUseCases: [
        {
          title: "Onboarding de un dev nuevo",
          body: "Always Apply con `pnpm test` y ramas `feature/`. El primer Agent ya sabe el script sin leer Slack.",
        },
        {
          title: "Monorepo front + API",
          body: "Un `.mdc` con globs `apps/web/**/*.tsx` y otro `apps/api/**/*.go`. Mismo repo, contexto distinto.",
        },
        {
          title: "Checklist de release manual",
          body: "Regla sin globs que solo entras con @release-checklist cuando etiquetas v1.0.",
        },
      ],
      commonMistakes: [
        {
          title: "Un solo .mdc gigante siempre activo",
          body: "Quema tokens y mezcla temas. Parte por carpeta o por flujo.",
        },
        {
          title: "Globs que no coinciden con rutas reales",
          body: "Copiar `src/**` de un tutorial sin mirar tu árbol. La regla nunca se adjunta.",
        },
        {
          title: "Duplicar .cursorrules y .mdc",
          body: "Instrucciones contradictorias. Migra y borra el legado.",
        },
        {
          title: "Esperar reglas en Tab o Inline Edit",
          body: "Las project rules están pensadas para Agent (Chat). Tab no las usa según la FAQ oficial.",
        },
      ],
      conclusion:
        "Las reglas de proyecto convierten acuerdos de equipo en contexto persistente: `.mdc` con frontmatter, tipos claros (Always, globs, descripción, @ manual), `AGENTS.md` si quieres simplicidad, y migración desde `.cursorrules` cuando toque. Versionadas en git, se alinean con Agent local y con runs en la nube. El entregable no es el chat: es el diff en `.cursor/rules` que cualquiera puede revisar.",
      nextSteps: [
        "Añade una regla Agent Requested para el flujo que más falla (migraciones, i18n, seguridad).",
        "Cuando delegues un fix acotado, usa cursor-cloud-agent-primer-pr — el repo llevará las mismas reglas.",
        "Para el primer día en un repo ajeno, combina esto con cursor-repo-existente antes de Agent grande.",
      ],
      takeaway:
        "Always para lo global, globs para carpetas, @ para lo raro. `.mdc` en git, legado fuera, Agent para probar.",
    },
    en: {
      title: "Cursor: project rules (.cursor/rules) (2026)",
      metaTitle:
        "Cursor project rules: .cursor/rules, .mdc types and AGENTS.md",
      metaDescription:
        "Create versioned rules in .cursor/rules as .mdc files (alwaysApply, globs, description), reference them with @, migrate .cursorrules and verify Agent honors them before you commit.",
      excerpt:
        "Stop repeating «use pnpm» every chat. One Always rule, one globs rule for your components folder and a manual release checklist — in git, not in someone’s head.",
      intro:
        "Project rules are persistent instructions Cursor injects into Agent context depending on how you configure them. They live in `.cursor/rules/` as `.mdc` files with frontmatter (`description`, `globs`, `alwaysApply`), ship with your code and spread across the team without copy-pasted prompts. If you only need simple markdown, `AGENTS.md` at the repo root (or in subfolders) is the official alternative without metadata. A `.cursorrules` file at the root still works in many repos but Cursor treats it as legacy: plan to move its content into an «Always Apply» rule. Docs: https://cursor.com/docs/rules and migration from `.cursorrules`: https://cursor.com/help/customization/rules. This flow takes about 20 minutes and ends with two real rules in your repo plus an Agent check.",
      problem:
        "Without rules, everyone retypes the same norms in chat («do not touch CI», «run tests before commit») and the model forgets them next session. The other failure mode is a 400-line `.mdc` with `alwaysApply: true` that burns context and fights the linter. Or `globs` that never match the files you @-mention in chat. The symptom is «Cursor ignores me» when the rule was never in context.",
      whatYouWillLearn: [
        "Choose between `.cursor/rules`, `AGENTS.md` and migrating `.cursorrules`",
        "Create the folder and a first `.mdc` file with valid frontmatter",
        "Configure an Always Apply rule for repo-wide standards",
        "Add an Auto Attached rule with `globs` for a specific directory",
        "Use description (Apply Intelligently) and @ for manual rules",
        "Reference repo files with @ inside a rule",
        "Verify in Agent and commit rules with the team",
      ],
      prerequisites: [
        "Cursor installed and a repo open as the workspace folder (cursor-repo-existente if this is your first time)",
        "Permission to create `.cursor/rules/` and commit to the repo",
        "20 minutes and a real standard you already repeat in chat (test command, branch naming, forbidden folder)",
      ],
      steps: [
        {
          title: "Pick the format: .mdc rules, AGENTS.md or legacy",
          content:
            "Before writing files, pick how much structure you need.\n\n- **`.cursor/rules/*.mdc`**: multiple rules with types (Always, globs, description, manual via @). This is what Cursor documents for teams that want scoped, composable rules.\n- **`AGENTS.md`**: plain markdown at the root (or nested in subfolders) without frontmatter. Cursor applies it when you work in that path. Fine when you do not need globs yet.\n- **`.cursorrules`**: single root file, legacy. If you already have one, plan to move its content into a `.mdc` with `alwaysApply: true` and delete `.cursorrules` (see https://cursor.com/help/customization/rules).\n\nThis tutorial uses **`.cursor/rules`**. Keep the reference doc open: https://cursor.com/docs/rules",
          whatYouShouldSee:
            "A one-line note: «mdc for per-folder standards» or «AGENTS.md is enough for now».",
          tip:
            "Do not duplicate the same text across all three. Repeated rules confuse priority.",
          imageDescription:
            "Note or sketch comparing .cursor/rules, AGENTS.md and struck-through .cursorrules as legacy.",
        },
        {
          title: "Create `.cursor/rules` and your first rule",
          content:
            "At the repo root, create `.cursor/rules/` if it is missing. Two official ways to add rules:\n\n1. **Customize → Rules → Add Rule** in Cursor’s sidebar (also described in the docs).\n2. **New file** `team-basics.mdc` with frontmatter and a markdown body.\n\nMinimal skeleton:\n\n```md\n---\ndescription: Repo-wide standards\nalwaysApply: true\n---\n\n- Run `npm test` (or the README script) before calling a change done.\n- Do not edit `.github/workflows/` unless explicitly asked.\n```\n\nThe filename is free; the extension **must** be `.mdc`. A plain `.md` file inside `.cursor/rules` is not picked up by the rules system per official docs.",
          whatYouShouldSee:
            "File tree with `.cursor/rules/team-basics.mdc` saved and open in the editor.",
          warning:
            "Plain `.md` under `.cursor/rules` is not a substitute for `.mdc`. For markdown-only, use `AGENTS.md`.",
          imageDescription:
            "Explorer with .cursor/rules/ and the editor showing --- frontmatter with alwaysApply: true.",
        },
        {
          title: "Always Apply rule: what applies to every chat",
          content:
            "In the rule type dropdown (or by editing frontmatter), choose **Always Apply** → `alwaysApply: true`. With `true`, Cursor includes the rule in every Agent session; `globs` and `description` are ignored per the official table.\n\nPut only norms you truly want **always**: copyright, verification command, forbidden folders, branch conventions. Keep the body short (docs recommend focused rules, ideally under ~500 lines). Avoid pasting entire style guides — point at the linter or an example file with `@`.\n\nUseful line: «API changes must update `src/types/api.ts` or explain why not.»",
          whatYouShouldSee:
            "In Customize → Rules, the rule shows as Always, or frontmatter has `alwaysApply: true`.",
          tip:
            "If you only have three global norms, one Always Apply rule is often enough. Use globs or manual for the rest.",
          imageDescription:
            "Customize Rules panel with one rule set to Always Apply and the matching .mdc file.",
        },
        {
          title: "File-scoped rule: `globs` (Auto Attached)",
          content:
            "Create a second file, e.g. `frontend-react.mdc`, for front-end-only norms:\n\n```md\n---\nglobs: src/components/**/*.tsx\nalwaysApply: false\n---\n\n- Use named exports in new components.\n- Co-locate styles in the module CSS next to the component.\n```\n\nWith `alwaysApply: false` and `globs` set, the rule **attaches when a matching file is in context** (files you @-mention or the agent opens, per documentation). Separate multiple patterns with **commas**, e.g. `docs/**/*.md, docs/**/*.mdx`.\n\nMake sure patterns match real paths (`src/**` vs `frontend/**`). A non-matching glob is the top reason «this rule never runs».",
          whatYouShouldSee:
            "Second `.mdc` with `globs:` matching your components folder and `alwaysApply: false`.",
          warning:
            "Do not set `alwaysApply: true` on folder rules — you would burn context in unrelated chats.",
          imageDescription:
            "frontend-react.mdc with globs src/components/**/*.tsx and a short convention list.",
        },
        {
          title: "Apply Intelligently and Manual: description and @",
          content:
            "Third file: rules you do not want always or tied to a glob.\n\n**Apply Intelligently (Agent Requested):** `alwaysApply: false`, filled `description`, no `globs`. The agent reads the description and may include the rule when the topic fits (e.g. `description: SQL migrations and rollback; use when editing db/migrations`).\n\n**Manual:** `alwaysApply: false` with no `description` and no `globs`. It applies only when you mention it in chat, e.g. `@release-checklist.mdc` or picking the rule from the @ menu.\n\nYou can link templates in the body with `@migration-template.sql` so the agent loads a reference file without copying it into the rule (documented at https://cursor.com/docs/rules).",
          whatYouShouldSee:
            "At least one `.mdc` with only `description` and another meant to invoke with @ for occasional tasks.",
          proTip:
            "Filenames (`release-checklist.mdc`) are what users @-mention — keep them readable.",
          imageDescription:
            "Agent chat with @release-checklist.mdc in the input and the rule showing as attached context.",
        },
        {
          title: "Test in Agent that the rule is active",
          content:
            "Open **Agent** (not just Tab inline — User Rules do not apply to Cmd/Ctrl+K per the official FAQ). Run three quick checks:\n\n1. **Always:** ask «which test command should I run before finishing?» — it should cite your global rule without you retyping it.\n2. **Globs:** @-mention a `.tsx` file under your pattern and ask for a new component — it should respect named exports if you defined them.\n3. **Manual:** type `@team-basics.mdc` or your checklist and request a scoped change.\n\nIf the answer ignores the rule, open Customize → Rules and confirm type and frontmatter. Retry in a fresh message after saving.",
          whatYouShouldSee:
            "Agent replies aligned with your `.mdc` bullets, not generic advice that contradicts the rule.",
          tip:
            "If you just opened the repo, let indexing finish (cursor-repo-existente) before judging glob rules.",
          imageDescription:
            "Agent chat with an @-pinned file and a reply citing a bullet from the frontend rule.",
        },
        {
          title: "Commit, review in a PR and drop duplicate legacy",
          content:
            "Add `.cursor/rules/` to git (`git add .cursor/rules`). In the commit message, note which type each file uses (Always vs globs vs manual). If you migrated from `.cursorrules`, **delete** the legacy file in the same PR so instructions are not duplicated.\n\nIn the PR description, link https://cursor.com/docs/rules for onboarding. Ask a teammate to open the repo in Cursor and confirm rules appear in Customize after pull.\n\nOptional: a short root `AGENTS.md` can coexist for teams that prefer one doc, but do not repeat the same paragraph in five places. When you delegate work to Cloud Agent, versioned rules in the repo are what the VM clones — consistent with cursor-cloud-agent-primer-pr.",
          whatYouShouldSee:
            "`git status` with `.cursor/rules/*.mdc` staged, no `.cursorrules` if you migrated, and Customize showing the same rules on another machine after pull.",
          warning:
            "Huge rules with `alwaysApply: true` slow chats and add noise. Split into composable `.mdc` files.",
          imageDescription:
            "Terminal with git commit for .cursor/rules and a GitHub PR diff showing the new folder.",
        },
      ],
      realUseCases: [
        {
          title: "New developer onboarding",
          body: "Always Apply with `pnpm test` and `feature/` branches. The first Agent already knows the script without Slack.",
        },
        {
          title: "Front + API monorepo",
          body: "One `.mdc` with globs `apps/web/**/*.tsx` and another `apps/api/**/*.go`. Same repo, different context.",
        },
        {
          title: "Manual release checklist",
          body: "A rule with no globs you only invoke with @release-checklist when tagging v1.0.",
        },
      ],
      commonMistakes: [
        {
          title: "One giant always-on .mdc",
          body: "Burns tokens and mixes topics. Split by folder or workflow.",
        },
        {
          title: "Globs that do not match real paths",
          body: "Copying `src/**` from a tutorial without checking your tree. The rule never attaches.",
        },
        {
          title: "Duplicating .cursorrules and .mdc",
          body: "Contradictory instructions. Migrate and remove legacy.",
        },
        {
          title: "Expecting rules in Tab or Inline Edit",
          body: "Project rules target Agent (Chat). Tab does not use them per the official FAQ.",
        },
      ],
      conclusion:
        "Project rules turn team agreements into persistent context: `.mdc` with frontmatter, clear types (Always, globs, description, manual @), `AGENTS.md` when you want simplicity, and migration from `.cursorrules` when needed. Versioned in git, they align local Agent with cloud runs. The deliverable is not the chat — it is the diff in `.cursor/rules` anyone can review.",
      nextSteps: [
        "Add an Agent Requested rule for the workflow that fails most (migrations, i18n, security).",
        "When delegating a scoped fix, use cursor-cloud-agent-primer-pr — the repo carries the same rules.",
        "For day one on someone else’s repo, pair this with cursor-repo-existente before a large Agent job.",
      ],
      takeaway:
        "Always for global, globs for folders, @ for rare cases. `.mdc` in git, legacy out, Agent to verify.",
    },
  },
};
