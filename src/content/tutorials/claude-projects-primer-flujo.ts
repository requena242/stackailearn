import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "claude-projects-primer-flujo";

export const claudeProjectsPrimerFlujo: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "beginner",
  estimatedTime: 20,
  publishedAt: "2026-09-09",
  lastUpdated: "2026-09-09",
  toolsUsed: ["claude", "chatgpt", "notion-ai"],
  relatedTutorials: ["claude-escritura-larga", "chatgpt-primeros-pasos"],
  tags: ["claude", "projects", "contexto", "instrucciones", "escritura"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Claude Projects con instrucciones del proyecto y archivos de conocimiento",
      caption: "Un proyecto guarda el contexto. El chat suelto no.",
      hint: "Hero 1600×900: panel de Claude Projects con instrucciones del proyecto a la izquierda, archivos subidos y un chat activo dentro del proyecto.",
    },
    en: {
      alt: "Claude Projects with project instructions and knowledge files",
      caption: "A project keeps the context. A loose chat does not.",
      hint: "Hero 1600×900: Claude Projects panel with project instructions on the left, uploaded files and an active chat inside the project.",
    },
  }),
  copy: {
    es: {
      title: "Claude Projects: tu primer flujo con contexto (2026)",
      metaTitle: "Claude Projects: primer flujo útil en 2026",
      metaDescription:
        "Crea un proyecto en claude.ai, escribe instrucciones, sube archivos de referencia y chatea con ese contexto fijo. Cuándo usar Projects y cuándo un chat suelto.",
      excerpt:
        "Define el propósito, crea el proyecto, fija instrucciones, sube conocimiento y trabaja dentro del proyecto — no en un chat que olvida todo.",
      intro:
        "Claude Projects es el espacio de claude.ai donde las instrucciones y los archivos viven con el hilo. No es otro chat: es un contenedor con reglas y documentos que Claude lee en cada mensaje. Este flujo dura 20 minutos y te deja un proyecto reutilizable para un trabajo repetido — un brief, un cliente, un tipo de documento.",
      problem:
        "La gente pega el mismo PDF en cada conversación nueva o reescribe las mismas instrucciones cada lunes. El chat suelto no recuerda el tono ni los archivos de la semana pasada. Sin un proyecto, repites contexto y Claude inventa con más libertad.",
      whatYouWillLearn: [
        "Decidir si el trabajo merece un Project o un chat suelto",
        "Crear un proyecto y escribir instrucciones que sobrevivan al hilo",
        "Subir archivos de conocimiento que Claude consulte en cada mensaje",
        "Chatear dentro del proyecto y comprobar que usa el contexto",
        "Saber cuándo volver al chat normal",
      ],
      prerequisites: [
        "Cuenta en claude.ai (plan Free sirve para probar Projects con límites)",
        "Un caso real: un cliente, un tipo de informe o un brief que repites",
        "Al menos un archivo de referencia (PDF, doc o notas exportadas) o un párrafo de instrucciones claras",
        "20 minutos",
      ],
      steps: [
        {
          title: "Decide si necesitas un Project o un chat suelto",
          content:
            "Antes de crear nada, responde: ¿vas a repetir este trabajo varias veces con las mismas reglas y los mismos documentos? Si es un email puntual, quédate en el chat normal. Si es un brief semanal, un cliente con guía de tono o un tipo de informe con plantilla, merece un Project. Anota en una línea el propósito: «Redactar informes mensuales para el cliente X con su glosario y tono directo.»",
          whatYouShouldSee:
            "Una frase de propósito escrita en un bloc de notas. Decisión clara: Project sí o chat suelto.",
          tip: "Si solo tienes una pregunta rápida, no abras un proyecto. El overhead no compensa.",
          imageDescription:
            "Bloc de notas con una línea de propósito del proyecto y una bifurcación visual: «chat suelto» vs «Project».",
        },
        {
          title: "Crea el proyecto en claude.ai",
          content:
            "Entra en https://claude.ai y abre Projects en la barra lateral (o el menú de proyectos). Pulsa «New project» / «Nuevo proyecto». Pon un nombre concreto — no «Escritura» sino «Informes Cliente X» o «Brief semanal producto». El nombre te dice si volverás aquí la próxima semana.",
          whatYouShouldSee:
            "Un proyecto vacío con campos para instrucciones del proyecto y zona de archivos. El nombre refleja el caso de uso.",
          warning:
            "Un proyecto genérico se convierte en cajón de sastre. Un nombre vago invita a mezclar contextos incompatibles.",
          imageDescription:
            "Pantalla de Claude Projects con el diálogo de nuevo proyecto y un nombre específico escrito.",
        },
        {
          title: "Escribe las instrucciones del proyecto",
          content:
            "En «Project instructions» / «Instrucciones del proyecto», escribe lo que Claude debe recordar siempre: rol («Eres editor de informes internos»), tono («Directo, sin adjetivos vacíos»), formato de salida («Viñetas con dueño y fecha») y prohibiciones («No inventes cifras; si falta un dato, marca [FALTA]»). Copia un párrafo de muestra si tienes voz de marca. Estas instrucciones aplican a todos los chats dentro del proyecto.",
          whatYouShouldSee:
            "Un bloque de instrucciones de 5–15 líneas con rol, tono, formato y al menos una prohibición explícita.",
          tip: "Si las instrucciones son vagas («sé profesional»), el proyecto no aporta nada que un chat suelto no dé.",
          imageDescription:
            "Campo de instrucciones del proyecto con rol, tono, formato de salida y una lista corta de prohibiciones.",
        },
        {
          title: "Sube archivos de conocimiento",
          content:
            "Añade los PDFs, docs o notas que Claude debe consultar: glosario del cliente, plantilla de informe, guía de estilo, actas anteriores. No subas todo el disco: 2–5 archivos relevantes. Si un archivo está desactualizado, quítalo. Los archivos del proyecto se leen en cada conversación nueva dentro de él.",
          whatYouShouldSee:
            "Lista de archivos en el panel del proyecto con nombres reconocibles. Sin duplicados ni docs obsoletos.",
          warning:
            "Subir 40 PDFs mezclados confunde al modelo y diluye lo importante. Menos archivos, más claros.",
          imageDescription:
            "Panel de archivos del proyecto con 3–4 documentos nombrados (glosario, plantilla, guía de tono).",
        },
        {
          title: "Abre el primer chat dentro del proyecto",
          content:
            "Desde el proyecto, inicia un chat nuevo — no desde la pantalla principal de Claude. Escribe una tarea concreta que use el contexto: «Con la plantilla del proyecto, redacta el borrador del informe de marzo. Usa solo datos que estén en los archivos adjuntos.» El chat hereda instrucciones y archivos sin que los pegues otra vez.",
          whatYouShouldSee:
            "Un hilo dentro del proyecto con tu prompt. Claude menciona o sigue la plantilla y el tono de las instrucciones.",
          tip: "Si Claude ignora un archivo, cita el nombre del archivo en el mensaje: «Según plantilla-informe.pdf, sección 2…»",
          imageDescription:
            "Chat activo dentro del proyecto con un prompt concreto y una respuesta que referencia la plantilla o el tono definido.",
        },
        {
          title: "Comprueba que usa el contexto (y corrige si no)",
          content:
            "Revisa la respuesta: ¿respeta el formato pedido en las instrucciones? ¿Usa términos del glosario? ¿Marca [FALTA] en lugar de inventar? Si algo falla, ajusta las instrucciones del proyecto — no repitas el mismo prompt a ciegas. Un «Prohibido: párrafos de más de 3 frases» en las instrucciones vale más que tres mensajes de corrección en el chat.",
          whatYouShouldSee:
            "Respuesta alineada con instrucciones y archivos, o instrucciones del proyecto editadas tras detectar un fallo.",
          warning:
            "Si cada chat requiere pegar de nuevo el contexto, el proyecto no está bien configurado. Arregla instrucciones o archivos primero.",
          imageDescription:
            "Respuesta de Claude con viñetas en el formato pedido; panel lateral con instrucciones del proyecto visibles.",
        },
        {
          title: "Cuándo seguir en el Project y cuándo volver al chat suelto",
          content:
            "Quédate en el Project para trabajo repetido del mismo caso: mismo cliente, mismo tipo de doc, mismas reglas. Vuelve al chat suelto para preguntas puntuales, pruebas de tono o temas que no comparten archivos. Si un segundo cliente necesita otro glosario y otro tono, crea otro proyecto — no mezcles contextos en uno.",
          whatYouShouldSee:
            "Decisión clara documentada: este proyecto = informes Cliente X; otras tareas = chat normal u otro proyecto.",
          proTip:
            "Un proyecto bien acotado se reutiliza meses. Un proyecto «de todo» se abandona en dos semanas.",
          imageDescription:
            "Dos proyectos separados en la barra lateral (Cliente X / Cliente Y) y un chat suelto para una pregunta rápida.",
        },
      ],
      realUseCases: [
        {
          title: "Informe mensual para un cliente",
          body: "Instrucciones con tono y formato. Glosario y plantilla en archivos. Cada mes abres un chat nuevo dentro del mismo proyecto.",
        },
        {
          title: "Brief semanal de producto",
          body: "Reglas de estructura (problema, propuesta, métricas). Acta de la semana pasada como referencia. Un chat por sprint.",
        },
        {
          title: "Edición con guía de estilo",
          body: "PDF de la guía en el proyecto. Instrucciones prohíben slogans. Cada pieza larga se edita en un hilo nuevo sin re-subir la guía.",
        },
      ],
      commonMistakes: [
        {
          title: "Crear un proyecto para una sola pregunta",
          body: "El chat suelto basta. Projects compensa cuando repites contexto.",
        },
        {
          title: "Instrucciones genéricas",
          body: "«Sé útil» no fija nada. Rol, formato y prohibiciones sí.",
        },
        {
          title: "Mezclar clientes en un proyecto",
          body: "Dos tonos y dos glosarios en el mismo sitio confunden. Un proyecto por caso.",
        },
        {
          title: "Subir archivos viejos",
          body: "Claude lee lo que subes. Si la plantilla cambió, actualiza el archivo.",
        },
      ],
      conclusion:
        "Claude Projects gana cuando tienes un trabajo repetido con reglas y documentos fijos. En 20 minutos sales con instrucciones escritas, archivos en su sitio y un primer chat que no empieza de cero. Si el caso es puntual, el chat suelto sigue siendo la opción correcta.",
      nextSteps: [
        "Para editar un texto largo dentro del proyecto, aplica el método de edición por secciones de Claude.",
        "Si aún no tienes método de briefing, empieza por ChatGPT primeros pasos y vuelve aquí con un caso repetible.",
        "Crea un segundo proyecto solo si tienes otro cliente o otro tipo de documento — no dupliques por capricho.",
      ],
      takeaway:
        "Propósito claro → instrucciones + archivos → chat dentro del proyecto. Repite el contenedor, no el copy-paste.",
    },
    en: {
      title: "Claude Projects: your first context workflow (2026)",
      metaTitle: "Claude Projects: first useful flow in 2026",
      metaDescription:
        "Create a project on claude.ai, write instructions, upload reference files and chat with fixed context. When to use Projects vs a plain chat.",
      excerpt:
        "Define the purpose, create the project, set instructions, upload knowledge and work inside the project — not in a chat that forgets everything.",
      intro:
        "Claude Projects is the space on claude.ai where instructions and files live with the thread. It is not another chat: it is a container with rules and documents Claude reads on every message. This flow takes 20 minutes and leaves you a reusable project for repeated work — a brief, a client, a document type.",
      problem:
        "People paste the same PDF into every new conversation or rewrite the same instructions every Monday. A loose chat does not remember last week’s tone or files. Without a project, you repeat context and Claude invents more freely.",
      whatYouWillLearn: [
        "Decide whether the job deserves a Project or a loose chat",
        "Create a project and write instructions that survive the thread",
        "Upload knowledge files Claude consults on every message",
        "Chat inside the project and verify it uses the context",
        "Know when to go back to a normal chat",
      ],
      prerequisites: [
        "An account on claude.ai (the Free plan is enough to try Projects with limits)",
        "A real case: a client, a report type or a brief you repeat",
        "At least one reference file (PDF, doc or exported notes) or a clear instruction paragraph",
        "20 minutes",
      ],
      steps: [
        {
          title: "Decide if you need a Project or a loose chat",
          content:
            "Before creating anything, answer: will you repeat this work several times with the same rules and documents? For a one-off email, stay in the normal chat. For a weekly brief, a client with a tone guide or a templated report, a Project is worth it. Write the purpose in one line: «Draft monthly reports for Client X with their glossary and direct tone.»",
          whatYouShouldSee:
            "A one-line purpose written in a notes app. A clear decision: Project yes or loose chat.",
          tip: "If you only have a quick question, do not open a project. The overhead is not worth it.",
          imageDescription:
            "Notes app with a one-line project purpose and a visual fork: «loose chat» vs «Project».",
        },
        {
          title: "Create the project on claude.ai",
          content:
            "Go to https://claude.ai and open Projects in the sidebar (or projects menu). Click «New project». Give it a concrete name — not «Writing» but «Client X Reports» or «Weekly product brief». The name tells you whether you will come back next week.",
          whatYouShouldSee:
            "An empty project with fields for project instructions and a file area. The name reflects the use case.",
          warning:
            "A generic project becomes a junk drawer. A vague name invites mixing incompatible contexts.",
          imageDescription:
            "Claude Projects screen with the new-project dialog and a specific name entered.",
        },
        {
          title: "Write the project instructions",
          content:
            "In «Project instructions», write what Claude must always remember: role («You are an internal report editor»), tone («Direct, no empty adjectives»), output format («Bullets with owner and date») and bans («Do not invent figures; if data is missing, mark [MISSING]»). Paste a sample paragraph if you have brand voice. These instructions apply to every chat inside the project.",
          whatYouShouldSee:
            "An instruction block of 5–15 lines with role, tone, format and at least one explicit ban.",
          tip: "If instructions are vague («be professional»), the project adds nothing a loose chat would not.",
          imageDescription:
            "Project instructions field with role, tone, output format and a short ban list.",
        },
        {
          title: "Upload knowledge files",
          content:
            "Add the PDFs, docs or notes Claude should consult: client glossary, report template, style guide, past notes. Do not upload the whole drive: 2–5 relevant files. If a file is outdated, remove it. Project files are read on every new conversation inside it.",
          whatYouShouldSee:
            "A file list in the project panel with recognizable names. No duplicates or stale docs.",
          warning:
            "Uploading 40 mixed PDFs confuses the model and dilutes what matters. Fewer, clearer files.",
          imageDescription:
            "Project file panel with 3–4 named documents (glossary, template, tone guide).",
        },
        {
          title: "Open the first chat inside the project",
          content:
            "From the project, start a new chat — not from Claude’s main screen. Write a concrete task that uses the context: «Using the project template, draft the March report. Use only data in the attached files.» The chat inherits instructions and files without you pasting them again.",
          whatYouShouldSee:
            "A thread inside the project with your prompt. Claude mentions or follows the template and tone from the instructions.",
          tip: "If Claude ignores a file, cite the filename in the message: «Per report-template.pdf, section 2…»",
          imageDescription:
            "Active chat inside the project with a concrete prompt and a reply referencing the template or defined tone.",
        },
        {
          title: "Verify it uses the context (and fix if not)",
          content:
            "Review the reply: does it follow the format in the instructions? Does it use glossary terms? Does it mark [MISSING] instead of inventing? If something fails, adjust the project instructions — do not repeat the same blind prompt. A «Banned: paragraphs longer than 3 sentences» in instructions beats three correction messages in the chat.",
          whatYouShouldSee:
            "A reply aligned with instructions and files, or edited project instructions after spotting a failure.",
          warning:
            "If every chat needs the context pasted again, the project is not set up right. Fix instructions or files first.",
          imageDescription:
            "Claude reply with bullets in the requested format; side panel showing project instructions.",
        },
        {
          title: "When to stay in the Project and when to return to a loose chat",
          content:
            "Stay in the Project for repeated work on the same case: same client, same doc type, same rules. Return to a loose chat for one-off questions, tone experiments or topics that do not share files. If a second client needs another glossary and tone, create another project — do not mix contexts in one.",
          whatYouShouldSee:
            "A clear documented decision: this project = Client X reports; other tasks = normal chat or another project.",
          proTip:
            "A well-scoped project gets reused for months. A «everything» project gets abandoned in two weeks.",
          imageDescription:
            "Two separate projects in the sidebar (Client X / Client Y) and a loose chat for a quick question.",
        },
      ],
      realUseCases: [
        {
          title: "Monthly client report",
          body: "Instructions with tone and format. Glossary and template in files. Each month you open a new chat inside the same project.",
        },
        {
          title: "Weekly product brief",
          body: "Structure rules (problem, proposal, metrics). Last week’s notes as reference. One chat per sprint.",
        },
        {
          title: "Editing with a style guide",
          body: "Guide PDF in the project. Instructions ban slogans. Each long piece is edited in a new thread without re-uploading the guide.",
        },
      ],
      commonMistakes: [
        {
          title: "Creating a project for a single question",
          body: "A loose chat is enough. Projects pay off when you repeat context.",
        },
        {
          title: "Generic instructions",
          body: "«Be helpful» fixes nothing. Role, format and bans do.",
        },
        {
          title: "Mixing clients in one project",
          body: "Two tones and two glossaries in one place confuse. One project per case.",
        },
        {
          title: "Uploading stale files",
          body: "Claude reads what you upload. If the template changed, update the file.",
        },
      ],
      conclusion:
        "Claude Projects wins when you have repeated work with fixed rules and documents. In 20 minutes you leave with written instructions, files in place and a first chat that does not start from zero. If the case is one-off, the loose chat is still the right choice.",
      nextSteps: [
        "To edit a long piece inside the project, use Claude’s section-by-section editing method.",
        "If you still lack a briefing method, start with ChatGPT first steps and come back here with a repeatable case.",
        "Create a second project only if you have another client or document type — do not duplicate for sport.",
      ],
      takeaway:
        "Clear purpose → instructions + files → chat inside the project. Reuse the container, not the copy-paste.",
    },
  },
};
