import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "chatgpt-projects-organizar-trabajo";

export const chatgptProjectsOrganizarTrabajo: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "intermediate",
  estimatedTime: 25,
  publishedAt: "2026-10-19",
  lastUpdated: "2026-10-19",
  toolsUsed: ["chatgpt"],
  relatedTutorials: [
    "chatgpt-projects-primer-flujo",
    "chatgpt-memoria-personalizacion",
    "chatgpt-gpts-cuando",
    "notebooklm-primer-briefing",
    "claude-projects-primer-flujo",
  ],
  tags: ["chatgpt", "projects", "organizacion", "decisiones", "archivos"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Proyecto de ChatGPT con varios chats nombrados, fuentes curadas y un documento de decisiones",
      caption: "Un proyecto de varias semanas necesita reglas de archivo, no solo el primer chat.",
      hint: "Hero 1600×900: chatgpt.com con un Project abierto, lista de chats con nombres de subtarea, 4–5 fuentes en el panel y Project settings visible.",
    },
    en: {
      alt: "ChatGPT project with several named chats, curated sources and a decisions document",
      caption: "A multi-week project needs filing rules, not just the first chat.",
      hint: "Hero 1600×900: chatgpt.com with a Project open, chat list with sub-task names, 4–5 sources in the panel and Project settings visible.",
    },
  }),
  copy: {
    es: {
      title: "ChatGPT Projects: organizar un proyecto de trabajo (2026)",
      metaTitle: "Organizar un proyecto de trabajo en ChatGPT Projects",
      metaDescription:
        "Instrucciones en capas, archivos canónicos, un chat por subtarea, registro de decisiones y limpieza. Complemento al primer flujo con Projects.",
      excerpt:
        "Convierte un Project en contenedor de varias semanas: qué va en instrucciones, qué archivos mantener, cómo nombrar chats y cuándo archivar.",
      intro:
        "Si ya creaste tu primer Project siguiendo chatgpt-projects-primer-flujo, el siguiente problema es otro: el trabajo dura semanas, aparecen subtareas, archivos viejos y hilos que nadie retoma. ChatGPT Projects agrupa chats, archivos e instrucciones para un mismo esfuerzo (guía oficial: https://help.openai.com/en/articles/10169521-projects-in-chatgpt). Este flujo no repite «New project» ni el primer chat: asume un proyecto vivo y te deja reglas para organizarlo sin mezclar contextos ni perder decisiones. Son unos 25 minutos de configuración y una rutina semanal corta.",
      problem:
        "Sin estructura, el Project se convierte en un cajón: diez chats sin nombre, tres versiones del mismo PDF, decisiones enterradas en un hilo de marzo y ChatGPT que mezcla lo que dijiste en otro cliente. Pegar contexto cada lunes anula la ventaja del contenedor.",
      whatYouWillLearn: [
        "Separar instrucciones estables de reglas operativas del proyecto",
        "Clasificar archivos canónicos frente a borradores desechables",
        "Abrir un chat por subtarea y ramificar sin romper el hilo original",
        "Mantener un registro vivo de decisiones como fuente del proyecto",
        "Elegir memoria del proyecto (default o solo proyecto) según el caso",
        "Limpiar fuentes, archivar chats y cerrar el proyecto cuando termine",
      ],
      prerequisites: [
        "Un Project ya creado en https://chatgpt.com (si no, empieza por chatgpt-projects-primer-flujo)",
        "Un caso real de varias semanas: lanzamiento, auditoría, informe trimestral o investigación con entregables",
        "25 minutos para escribir reglas y renombrar chats; 10 minutos por semana para actualizar el registro",
      ],
      steps: [
        {
          title: "Dibuja fases y subtareas antes de abrir más chats",
          content:
            "En un bloc (fuera de ChatGPT), lista fases del trabajo — por ejemplo «Descubrimiento», «Borrador», «Revisión legal», «Cierre» — y debajo 2–4 subtareas concretas por fase. Esa lista es el mapa de nombres de chat: un hilo por subtarea activa, no un megahilo de todo el trimestre. Si una subtarea ya tiene chat suelto en el historial general, muévelo al proyecto cuando la opción Move to project esté disponible (arrastrar al proyecto o menú del chat); si el chat no es elegible, abre uno nuevo dentro del proyecto y pega solo el resumen que importe. Anota en una línea el entregable del proyecto y la fecha objetivo.",
          whatYouShouldSee:
            "Un esquema de fases con subtareas y una regla escrita: «Un chat = una subtarea activa».",
          tip: "Si no puedes nombrar la subtarea en cinco palabras, aún es demasiado amplia.",
          imageDescription:
            "Bloc con fases del proyecto y flechas hacia nombres de chat planificados en la barra lateral del Project.",
        },
        {
          title: "Estructura las instrucciones del proyecto en dos capas",
          content:
            "Abre Project settings (menú ••• del proyecto). En instrucciones del proyecto, separa mentalmente dos bloques en el mismo campo: (1) Estable — rol, tono, formato de entregables y prohibiciones («No inventes cifras; marca [FALTA]»), lo que no cambia cada semana; (2) Operativo — cómo trabajar aquí durante semanas: «Nombra cada chat con Fase — subtarea», «Al cerrar una reunión, pide un resumen de decisiones en viñetas con fecha», «Cita archivos por nombre al pedir borradores». Las instrucciones del proyecto solo aplican dentro de este proyecto y sustituyen tus custom instructions globales mientras trabajas aquí. No copies el tutorial entero de chatgpt-projects-primer-flujo: solo añade la capa operativa que falta en un proyecto largo.",
          whatYouShouldSee:
            "Project settings con 10–20 líneas: bloque estable arriba y reglas de archivo y nombres abajo.",
          warning:
            "Si mezclas dos clientes o dos tonos en las mismas instrucciones, crea otro proyecto — no lo arregles con más texto.",
          imageDescription:
            "Panel Project settings con instrucciones divididas visualmente en «Estable» y «Operativo».",
        },
        {
          title: "Curar archivos: canónicos, borrador y fuera del proyecto",
          content:
            "Revisa la lista de fuentes del proyecto. Marca como canónicos solo lo que ChatGPT debe consultar siempre: glosario, plantilla aprobada, brief firmado, dataset de referencia. Los borradores de una semana concretos viven mejor en un chat o en un doc que actualizas; si un borrador se convierte en versión final, sustituye el archivo viejo o bórralo desde la vista previa de fuentes (eliminarlo lo quita del proyecto para todos en un proyecto compartido). No subas duplicados con el mismo nombre sin querer: al subir, ChatGPT te ofrece Upload anyway o Skip si ya existe. Mantén nombres de archivo explícitos (cliente-plantilla-v3.pdf). Si el material crece mucho, valora si parte del estudio encaja mejor en notebooklm-primer-briefing y deja en el Project solo lo que necesitas al redactar o decidir.",
          whatYouShouldSee:
            "4–8 fuentes con nombres claros; sin copias obsoletas; una nota tuya de qué es canónico.",
          tip: "Menos archivos bien nombrados ganan a un volcado «por si acaso».",
          imageDescription:
            "Lista de fuentes del proyecto con iconos o etiquetas manuales «canónico» frente a «archivar».",
        },
        {
          title: "Un chat por subtarea; ramifica para explorar",
          content:
            "Crea o renombra chats dentro del proyecto con el patrón que fijaste — por ejemplo «Revisión — contrato proveedor». Trabaja la subtarea solo en ese hilo hasta cerrarla o pausarla. Si necesitas probar un enfoque distinto sin perder el hilo original, usa Branch chat en un chat existente: el ramificado aparece en el proyecto junto al original y conservas la cadena previa. Para preguntas puntuales sin archivos compartidos, vuelve al chat suelto; para roles reutilizables en sesiones cortas, revisa chatgpt-gpts-cuando antes de duplicar lógica en otro contenedor.",
          whatYouShouldSee:
            "Varios chats con nombres legibles; a lo sumo uno o dos ramificados activos por subtarea exploratoria.",
          proTip:
            "Al abrir un chat nuevo en la misma subtarea tras una pausa, pega tres viñetas de estado desde tu registro de decisiones.",
          imageDescription:
            "Barra lateral del proyecto con chats renombrados y un chat ramificado junto al original.",
        },
        {
          title: "Mantén un registro vivo de decisiones y resúmenes",
          content:
            "Designa un documento maestro — por ejemplo decisiones-proyecto.md en tus notas — con secciones: Decisiones (fecha, quién, qué se eligió), Pendientes y Enlaces a chats clave. Cada semana, en el chat de la subtarea activa, pide: «Resume solo decisiones nuevas desde [fecha] en viñetas con fecha; no reescribas el historial entero.» Revisa el texto, corrige si inventa o suaviza, y actualiza tu maestro. Cuando una respuesta quede buena como referencia fija, usa el menú del mensaje y Save to project / Add to project sources (la etiqueta puede variar) para guardarla como fuente reutilizable en chats futuros del mismo proyecto. Así no dependes de buscar en un hilo de 200 mensajes.",
          whatYouShouldSee:
            "Un archivo de decisiones actualizado y, opcionalmente, una o dos respuestas guardadas en fuentes del proyecto.",
          warning:
            "Lo guardado en el proyecto no sustituye tu copia externa si el entregable es legal o contractual — mantén el original donde vuestro equipo ya archiva.",
          imageDescription:
            "Mensaje de ChatGPT con menú abierto en «Guardar en el proyecto» junto a un doc de decisiones con fechas.",
        },
        {
          title: "Ajusta la memoria del proyecto a los límites que necesitas",
          content:
            "En Project settings, bajo Memory, elige Default memory o Project-only memory y guarda. Con project-only memory, los chats del proyecto pueden referenciar otras conversaciones dentro del mismo proyecto, pero no conversaciones fuera ni memorias guardadas globales; la información del proyecto tampoco se mezcla con chats fuera del contenedor. Con default memory, el comportamiento depende de tu plan y ajustes personales (los workspaces Enterprise/Edu mantienen los chats del proyecto más acotados — detalle en la misma guía oficial). Los proyectos compartidos usan siempre memoria solo de proyecto. Si trabajas datos sensibles de un cliente, project-only memory suele ser la opción más clara; si quieres que el proyecto aproveche memorias personales de tono, valora default y revisa chatgpt-memoria-personalizacion. Los cambios pueden tardar unas horas en aplicarse.",
          whatYouShouldSee:
            "Project settings con Memory en Project-only o Default y la decisión anotada en tu registro.",
          tip: "No cambies la memoria cada día; elige una política y revísala al cambiar de fase o al incorporar colaboradores.",
          imageDescription:
            "Sección Memory en Project settings con Project-only memory seleccionado.",
        },
        {
          title: "Limpia, archiva o cierra cuando cambie la fase",
          content:
            "Cada dos o tres semanas (o al cerrar una fase), haz inventario: borra fuentes obsoletas, guarda en tu registro lo que aún importe y archiva o elimina chats que ya no aportan contexto — en proyectos compartidos, los miembros pueden archivar o eliminar chats que les pertenezcan según las reglas de la guía. Renombra chats pausados con prefijo «[Hecho]» para no reabrirlos por error. Si el esfuerzo terminó y no volverás al caso, Delete project en el menú •••: elimina de forma permanente chats e instrucciones del proyecto y los archivos almacenados solo ahí (los guardados por separado en Library no se borran). No hay vuelta atrás. Si solo pausas meses, deja instrucciones operativas con «estado al [fecha]» y el registro de decisiones al día en lugar de borrar el contenedor.",
          whatYouShouldSee:
            "Lista de chats más corta, fuentes sin duplicados viejos y una decisión escrita: mantener, pausar o eliminar proyecto.",
          proTip:
            "Antes de Delete project en trabajo compartido, avisa al equipo y exporta lo que necesitéis fuera de ChatGPT.",
          imageDescription:
            "Menú del proyecto con Delete project visible y chats marcados como hechos en la barra lateral.",
        },
      ],
      realUseCases: [
        {
          title: "Lanzamiento de producto de ocho semanas",
          body: "Chats por workstream (legal, marketing, soporte), plantilla canónica en fuentes y registro de decisiones de comité cada viernes.",
        },
        {
          title: "Due diligence con muchos PDF",
          body: "Fuentes solo para datos firmados; un chat por tema; ramas para hipótesis descartadas sin contaminar el hilo principal.",
        },
        {
          title: "Informe trimestral recurrente",
          body: "Mismo proyecto trimestre a trimestre: archivas el chat del Q anterior, actualizas dataset canónico y conservas decisiones de formato en fuentes guardadas.",
        },
      ],
      commonMistakes: [
        {
          title: "Un solo chat para todo el proyecto",
          body: "El contexto se vuelve ruido. Subtareas en hilos separados y registro de decisiones fuera del megahilo.",
        },
        {
          title: "Tres versiones del mismo archivo",
          body: "El modelo no sabe cuál manda. Una fuente canónica con versión en el nombre.",
        },
        {
          title: "Decisiones solo en el chat",
          body: "Nadie las encuentra en semana 6. Resumen semanal + guardar en proyecto las respuestas estables.",
        },
        {
          title: "Borrar el proyecto con trabajo compartido sin avisar",
          body: "Delete project quita acceso a colaboradores. Exporta y coordina antes.",
        },
      ],
      conclusion:
        "Un Project de varias semanas se sostiene con instrucciones en capas, archivos curados, chats acotados por subtarea y un registro de decisiones que actualizas y, cuando toca, guardas como fuente. La memoria del proyecto fija si ese contenedor está aislado o conectado al resto de tu cuenta. Limpia con cadencia para que el contexto siga siendo útil — o elimina el proyecto cuando el caso cerró.",
      nextSteps: [
        "Si aún no tienes el contenedor base, completa chatgpt-projects-primer-flujo una vez.",
        "Revisa capas de memoria global frente al proyecto con chatgpt-memoria-personalizacion.",
        "Para estudio pesado de muchos PDF antes de redactar aquí, prueba notebooklm-primer-briefing y vuelve al Project con el brief ya acotado.",
        "Si tu equipo paralelo usa Claude, alinea criterios con claude-projects-primer-flujo y un proyecto por herramienta y caso.",
      ],
      takeaway:
        "Mapa de subtareas → instrucciones estables + operativas → fuentes canónicas → un chat por subtarea → registro de decisiones actualizado → limpieza o cierre consciente.",
    },
    en: {
      title: "ChatGPT Projects: organize an ongoing work project (2026)",
      metaTitle: "Organize a multi-week work project in ChatGPT Projects",
      metaDescription:
        "Layered instructions, canonical files, one chat per sub-task, a running decisions log and cleanup. Complements the first Projects workflow.",
      excerpt:
        "Turn a Project into a multi-week container: what goes in instructions, which files to keep, how to name chats and when to archive.",
      intro:
        "If you already built your first Project with chatgpt-projects-primer-flujo, the next problem is different: work runs for weeks, sub-tasks multiply, stale files pile up and threads nobody reopens. ChatGPT Projects groups chats, files and instructions for one body of work (official guide: https://help.openai.com/en/articles/10169521-projects-in-chatgpt). This flow does not repeat New project or the first chat — it assumes a live project and gives you rules to organize it without mixing contexts or losing decisions. About 25 minutes of setup plus a short weekly habit.",
      problem:
        "Without structure, the Project becomes a junk drawer: ten unnamed chats, three versions of the same PDF, decisions buried in a March thread and ChatGPT blending what you said for another client. Pasting context every Monday defeats the container.",
      whatYouWillLearn: [
        "Split stable project instructions from week-to-week operating rules",
        "Tell canonical project files apart from disposable drafts",
        "Run one chat per sub-task and branch to explore without losing the original thread",
        "Keep a living decisions log as a project source",
        "Pick project memory (default vs project-only) for your boundaries",
        "Clean sources, archive chats and close the project when the work ends",
      ],
      prerequisites: [
        "A Project already on https://chatgpt.com (if not, start with chatgpt-projects-primer-flujo)",
        "A real multi-week case: launch, audit, quarterly report or research with deliverables",
        "25 minutes to write rules and rename chats; 10 minutes per week to update the log",
      ],
      steps: [
        {
          title: "Sketch phases and sub-tasks before opening more chats",
          content:
            "In a notes app (outside ChatGPT), list project phases — for example Discovery, Draft, Legal review, Close-out — and under each phase write 2–4 concrete sub-tasks. That list is your chat naming map: one thread per active sub-task, not one mega-thread for the whole quarter. If a sub-task already has a loose chat in general history, move it into the project when Move to project is available (drag onto the project or use the chat menu); if the chat is not eligible, start a new one inside the project and paste only the summary that matters. Write the project deliverable and target date in one line.",
          whatYouShouldSee:
            "A phase diagram with sub-tasks and a written rule: «One chat = one active sub-task.»",
          tip: "If you cannot name the sub-task in five words, it is still too broad.",
          imageDescription:
            "Notes app with project phases and arrows toward planned chat names in the Project sidebar.",
        },
        {
          title: "Structure project instructions in two layers",
          content:
            "Open Project settings (project ••• menu). In the project instructions field, keep two mental blocks in one place: (1) Stable — role, tone, deliverable format and bans («Do not invent figures; mark [MISSING]»), what does not change every week; (2) Operating — how to work here over weeks: «Name each chat Phase — sub-task», «After a meeting, output decisions as dated bullets», «Cite filenames when requesting drafts». Project instructions apply only inside this project and override your global custom instructions while you work here. Do not replay the whole chatgpt-projects-primer-flujo setup — only add the operating layer a long project needs.",
          whatYouShouldSee:
            "Project settings with 10–20 lines: stable block on top and filing/naming rules below.",
          warning:
            "If you mix two clients or two tones in the same instructions, create another project — do not fix it with more text.",
          imageDescription:
            "Project settings panel with instructions visually split into Stable and Operating.",
        },
        {
          title: "Curate files: canonical, draft and out of project",
          content:
            "Review the project sources list. Mark as canonical only what ChatGPT should always consult: glossary, approved template, signed brief, reference dataset. Week-specific drafts can live in a chat or in a doc you update; when a draft becomes final, replace the old file or delete it from the source preview (deleting removes it from the project for everyone on a shared project). Avoid accidental duplicates: on upload, ChatGPT offers Upload anyway or Skip when a filename already exists. Use explicit filenames (client-template-v3.pdf). If material grows large, consider whether heavy document study fits notebooklm-primer-briefing first and keep in the Project only what you need to draft or decide.",
          whatYouShouldSee:
            "4–8 sources with clear names; no stale copies; your own note of what is canonical.",
          tip: "Fewer well-named files beat a «just in case» dump.",
          imageDescription:
            "Project sources list with manual labels for canonical vs archive.",
        },
        {
          title: "One chat per sub-task; branch to explore",
          content:
            "Create or rename chats inside the project using your pattern — for example «Review — vendor contract». Work the sub-task only in that thread until you close or pause it. To try a different approach without losing the original chain, use Branch chat on an existing thread: the branch appears in the project next to the original. For one-off questions without shared files, use a plain chat; for reusable roles in short sessions, read chatgpt-gpts-cuando before duplicating logic in another container.",
          whatYouShouldSee:
            "Several chats with readable names; at most one or two active branches per exploratory sub-task.",
          proTip:
            "When reopening a sub-task after a break, paste three status bullets from your decisions log into the new message.",
          imageDescription:
            "Project sidebar with renamed chats and a branched thread beside the original.",
        },
        {
          title: "Keep a living decisions and summary log",
          content:
            "Maintain a master doc — for example project-decisions.md — with sections: Decisions (date, who, what was chosen), Open items and Pointers to key chats. Each week, in the active sub-task chat, ask: «Summarize only new decisions since [date] as dated bullets; do not rewrite the full history.» Edit the output if it invents or softens choices, then update your master. When a reply is good enough to reuse as fixed reference, open the message menu and choose Save to project / Add to project sources (label may vary) so future project chats can draw on it. That beats scrolling a 200-message thread.",
          whatYouShouldSee:
            "An updated decisions file and optionally one or two responses saved as project sources.",
          warning:
            "Saved project content does not replace your external record when the deliverable is legal or contractual — keep originals where your team already archives.",
          imageDescription:
            "ChatGPT message menu showing Save to project beside a decisions doc with dates.",
        },
        {
          title: "Set project memory to the boundaries you need",
          content:
            "In Project settings, under Memory, choose Default memory or Project-only memory and save. With project-only memory, project chats can reference other conversations within the same project, but not conversations outside it or globally saved memories; project information also stays out of chats outside the container. With default memory, behavior depends on your plan and personal settings (Enterprise/Edu workspaces keep project chats more contained — see the same official guide). Shared projects always use project-only memory. For sensitive client work, project-only memory is often the clearer default; if you want the project to use personal tone memories, consider default and review chatgpt-memoria-personalizacion. Changes may take a few hours to apply.",
          whatYouShouldSee:
            "Project settings with Memory set to Project-only or Default and the choice noted in your log.",
          tip: "Do not flip memory daily; pick a policy and revisit it when the phase changes or collaborators join.",
          imageDescription:
            "Memory section in Project settings with Project-only memory selected.",
        },
        {
          title: "Clean up, archive or close when the phase shifts",
          content:
            "Every two or three weeks (or at phase close), inventory: delete stale sources, capture what still matters in your log and archive or delete chats that no longer add context — on shared projects, members can archive or delete chats they own per the official guide. Rename paused chats with a «[Done]» prefix so you do not reopen them by mistake. When the effort is finished and you will not return, choose Delete project from •••: that permanently removes the project’s chats and instructions and files stored only in the project (files saved separately in Library are not deleted). This cannot be undone. If you only pause for months, refresh operating instructions with «status as of [date]» and keep the decisions log current instead of deleting the container.",
          whatYouShouldSee:
            "A shorter chat list, sources without old duplicates and a written choice: keep, pause or delete project.",
          proTip:
            "Before Delete project on shared work, notify the team and export what you need outside ChatGPT.",
          imageDescription:
            "Project menu showing Delete project and chats marked done in the sidebar.",
        },
      ],
      realUseCases: [
        {
          title: "Eight-week product launch",
          body: "Chats per workstream (legal, marketing, support), canonical template in sources and a Friday committee decisions log.",
        },
        {
          title: "Due diligence with many PDFs",
          body: "Sources only for signed data; one chat per topic; branches for discarded hypotheses without polluting the main thread.",
        },
        {
          title: "Recurring quarterly report",
          body: "Same project each quarter: archive last quarter’s chat, refresh the canonical dataset and keep format decisions in saved sources.",
        },
      ],
      commonMistakes: [
        {
          title: "One chat for the entire project",
          body: "Context turns into noise. Sub-tasks in separate threads plus a decisions log outside the mega-thread.",
        },
        {
          title: "Three versions of the same file",
          body: "The model cannot tell which wins. One canonical source with the version in the filename.",
        },
        {
          title: "Decisions only in chat",
          body: "Nobody finds them in week six. Weekly summary plus saving stable replies to the project.",
        },
        {
          title: "Deleting a shared project without warning",
          body: "Delete project removes access for collaborators. Export and coordinate first.",
        },
      ],
      conclusion:
        "A multi-week Project runs on layered instructions, curated files, chats scoped to sub-tasks and a decisions log you update and sometimes save as a source. Project memory sets whether that container is isolated or tied to the rest of your account. Clean on a cadence so context stays useful — or delete the project when the case is closed.",
      nextSteps: [
        "If you still need the base container, complete chatgpt-projects-primer-flujo once.",
        "Review global memory layers vs the project with chatgpt-memoria-personalizacion.",
        "For heavy PDF study before drafting here, try notebooklm-primer-briefing and return to the Project with a tight brief.",
        "If a parallel team uses Claude, align rules with claude-projects-primer-flujo and one project per tool and case.",
      ],
      takeaway:
        "Sub-task map → stable + operating instructions → canonical sources → one chat per sub-task → updated decisions log → deliberate cleanup or closure.",
    },
  },
};
