import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "chatgpt-projects-primer-flujo";

export const chatgptProjectsPrimerFlujo: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "beginner",
  estimatedTime: 20,
  publishedAt: "2026-09-23",
  lastUpdated: "2026-09-23",
  toolsUsed: ["chatgpt", "claude", "notion-ai"],
  relatedTutorials: [
    "chatgpt-gpts-cuando",
    "chatgpt-primeros-pasos",
    "claude-projects-primer-flujo",
    "elegir-modelo-texto",
  ],
  tags: ["chatgpt", "projects", "contexto", "instrucciones", "escritura"],
  hero: tutorialHero(slug, {
    es: {
      alt: "ChatGPT Projects con instrucciones del proyecto y archivos de referencia",
      caption: "Un proyecto guarda el contexto. El chat suelto no.",
      hint: "Hero 1600×900: chatgpt.com con Projects en la barra lateral, Project settings con instrucciones, Add files y un chat activo dentro del proyecto.",
    },
    en: {
      alt: "ChatGPT Projects with project instructions and reference files",
      caption: "A project keeps the context. A loose chat does not.",
      hint: "Hero 1600×900: chatgpt.com with Projects in the sidebar, Project settings with instructions, Add files and an active chat inside the project.",
    },
  }),
  copy: {
    es: {
      title: "ChatGPT Projects: tu primer flujo con contexto (2026)",
      metaTitle: "ChatGPT Projects: primer flujo útil en 2026",
      metaDescription:
        "Crea un proyecto en chatgpt.com, escribe instrucciones, sube archivos y chatea con ese contexto fijo. Cuándo usar Projects frente a un chat suelto o un Custom GPT.",
      excerpt:
        "Define el propósito, crea el proyecto, fija instrucciones, sube referencias y trabaja dentro del proyecto — no en un chat que olvida el brief cada lunes.",
      intro:
        "ChatGPT Projects es el espacio en https://chatgpt.com donde chats, archivos e instrucciones viven juntos para un mismo esfuerzo. No es otro hilo suelto: es un contenedor con reglas y fuentes que el modelo puede usar en cada mensaje dentro del proyecto. La guía oficial está en https://help.openai.com/en/articles/10169521-projects-in-chatgpt. Este flujo dura unos 20 minutos y te deja un proyecto reutilizable para trabajo repetido — un cliente, un tipo de informe, una línea de investigación que crece por semanas.",
      problem:
        "Mucha gente pega el mismo PDF cada lunes o reescribe las mismas instrucciones en cada chat nuevo. El chat suelto no mantiene archivos ni reglas del proyecto. Sin un Project, repites contexto, mezclas temas incompatibles y ChatGPT inventa con más libertad. O crean un Custom GPT cuando lo que necesitan es un hilo largo con muchos archivos en un solo sitio.",
      whatYouWillLearn: [
        "Decidir si el trabajo merece un Project, un chat suelto o un GPT",
        "Crear un proyecto en la barra lateral de chatgpt.com",
        "Escribir instrucciones del proyecto en Project settings",
        "Añadir archivos o fuentes sin llenar el límite del plan",
        "Chatear dentro del proyecto y comprobar que usa el contexto",
        "Saber cuándo volver al chat normal",
      ],
      prerequisites: [
        "Cuenta en https://chatgpt.com (Projects está disponible en planes Free y de pago, con límites de archivos según el plan)",
        "Un caso real que repetirás: cliente, informe mensual o brief semanal",
        "Al menos un archivo de referencia (PDF, doc o notas) o un párrafo de instrucciones claras",
        "20 minutos",
      ],
      steps: [
        {
          title: "Decide si necesitas un Project o un chat suelto",
          content:
            "Antes de pulsar New project, responde: ¿vas a repetir este trabajo varias veces con las mismas reglas y documentos? ¿O el hilo crecerá durante semanas con muchos archivos en la misma línea de trabajo? Si es un email puntual o una pregunta rápida, quédate en el chat normal (o un prompt guardado). Si es un brief semanal, informes para un cliente o investigación que acumula fuentes, merece un Project. Si el caso es un rol fijo que abres en sesiones cortas sin un hilo enorme, revisa chatgpt-gpts-cuando antes de elegir. Anota en una línea el propósito: «Informes mensuales Cliente X con glosario y tono directo.»",
          whatYouShouldSee:
            "Una frase de propósito en un bloc. Decisión escrita: Project, chat suelto o GPT.",
          tip: "Si solo tienes una pregunta, no abras un proyecto. El overhead no compensa.",
          imageDescription:
            "Bloc con una línea de propósito y bifurcación: chat suelto vs Project vs GPT.",
        },
        {
          title: "Crea el proyecto en chatgpt.com",
          content:
            "Entra en https://chatgpt.com. En la barra lateral, pulsa New project (o abre Projects en el menú izquierdo y crea uno nuevo). Pon un nombre concreto — no «Escritura» sino «Informes Cliente X» o «Brief producto Q4». Opcionalmente elige icono y color para encontrarlo rápido. El nombre te dice si volverás aquí la próxima semana.",
          whatYouShouldSee:
            "Un proyecto vacío listo para instrucciones y archivos. El nombre refleja el caso de uso.",
          warning:
            "Un proyecto genérico se convierte en cajón de sastre. Un nombre vago invita a mezclar contextos incompatibles.",
          imageDescription:
            "Barra lateral de ChatGPT con New project y un nombre específico en el diálogo de creación.",
        },
        {
          title: "Añade instrucciones del proyecto",
          content:
            "Abre el menú de tres puntos en la esquina superior del proyecto y elige Project settings. En las instrucciones del proyecto, escribe lo que ChatGPT debe recordar siempre aquí: rol («Eres editor de informes internos»), tono («Directo, sin adjetivos vacíos»), formato («Viñetas con dueño y fecha») y prohibiciones («No inventes cifras; si falta un dato, marca [FALTA]»). Las instrucciones del proyecto solo aplican dentro de este proyecto y pueden sustituir tus custom instructions globales mientras trabajas aquí. Copia un párrafo de muestra si tienes voz de marca.",
          whatYouShouldSee:
            "Project settings abierto con un bloque de 5–15 líneas: rol, tono, formato y al menos una prohibición explícita.",
          tip: "Si las instrucciones son vagas («sé profesional»), el proyecto no aporta nada que un chat suelto no dé.",
          imageDescription:
            "Panel Project settings con instrucciones del proyecto: rol, tono, formato y lista corta de prohibiciones.",
        },
        {
          title: "Sube archivos o fuentes de referencia",
          content:
            "Usa Add files o la sección de fuentes del proyecto para subir PDFs, hojas de cálculo, docs o imágenes, o pegar texto que deba consultarse en los chats. No subas todo el disco: 2–5 archivos claros suelen bastar al empezar (el límite total depende del plan — Free permite menos archivos por proyecto que Plus o planes de equipo). Si un archivo queda obsoleto, quítalo. En planes que lo permitan, también puedes enlazar fuentes externas que el equipo actualiza; si no tienes esa opción, mantén una copia exportada al día.",
          whatYouShouldSee:
            "Lista de archivos con nombres reconocibles. Sin duplicados ni docs viejos mezclados.",
          warning:
            "Un volcado enorme diluye lo importante y choca con los límites del plan. Menos archivos, más claros.",
          imageDescription:
            "Zona Add files con 3–4 documentos nombrados (glosario, plantilla, guía de tono).",
        },
        {
          title: "Abre el primer chat dentro del proyecto",
          content:
            "Desde el proyecto, inicia un chat nuevo — no desde la pantalla principal de ChatGPT. Escribe una tarea concreta que use el contexto, con el mismo rigor de briefing que en chatgpt-primeros-pasos: «Con la plantilla del proyecto, redacta el borrador del informe de marzo. Usa solo datos que estén en los archivos del proyecto.» El chat hereda instrucciones y fuentes sin que las pegues otra vez. Puedes mover chats antiguos al proyecto si ya tenías un hilo relacionado.",
          whatYouShouldSee:
            "Un hilo dentro del proyecto con tu prompt. La respuesta sigue el tono o la plantilla definida en las instrucciones o archivos.",
          tip: "Si ignora un archivo, cita el nombre en el mensaje: «Según plantilla-informe.pdf, sección 2…»",
          imageDescription:
            "Chat activo dentro del proyecto con un prompt concreto y respuesta que referencia la plantilla o el tono.",
        },
        {
          title: "Comprueba que usa el contexto (y corrige si no)",
          content:
            "Revisa la respuesta: ¿respeta el formato de las instrucciones? ¿Usa términos del glosario? ¿Marca [FALTA] en lugar de inventar? Si algo falla, edita las instrucciones del proyecto en Project settings — no repitas el mismo prompt a ciegas. Un «Prohibido: párrafos de más de 3 frases» en instrucciones vale más que tres mensajes de corrección en el chat. Si el problema es un archivo desactualizado, sustitúyelo antes de seguir.",
          whatYouShouldSee:
            "Respuesta alineada con instrucciones y archivos, o instrucciones del proyecto ajustadas tras detectar un fallo.",
          warning:
            "Si cada chat requiere pegar de nuevo el contexto, el proyecto no está bien configurado. Arregla instrucciones o archivos primero.",
          imageDescription:
            "Respuesta con viñetas en el formato pedido; panel Project settings visible con instrucciones.",
        },
        {
          title: "Cuándo seguir en el Project y cuándo volver al chat suelto",
          content:
            "Quédate en el Project para trabajo repetido o un hilo largo del mismo caso: mismo cliente, mismo tipo de documento, mismas reglas y fuentes que crecen con el tiempo. Vuelve al chat suelto para preguntas puntuales, pruebas de tono o temas sin archivos compartidos. Si un segundo cliente necesita otro glosario y otro tono, crea otro proyecto — no mezcles contextos. Si tu equipo vive en claude.ai, el patrón equivalente está en claude-projects-primer-flujo; Notion AI puede guardar notas del proyecto, pero el chat con instrucciones y archivos fijos ocurre aquí en ChatGPT.",
          whatYouShouldSee:
            "Decisión documentada: este proyecto = Cliente X; otras tareas = chat normal, otro proyecto o GPT según chatgpt-gpts-cuando.",
          proTip:
            "Un proyecto bien acotado se reutiliza meses. Un proyecto «de todo» se abandona en dos semanas.",
          imageDescription:
            "Dos proyectos separados en la barra lateral y un chat suelto para una pregunta rápida.",
        },
      ],
      realUseCases: [
        {
          title: "Informe mensual para un cliente",
          body: "Instrucciones con tono y formato. Glosario y plantilla en archivos. Cada mes abres un chat nuevo dentro del mismo proyecto.",
        },
        {
          title: "Línea de investigación de varias semanas",
          body: "Fuentes que vas añadiendo, instrucciones que piden citar solo lo subido. Varios chats en el mismo proyecto sin reexplicar el brief.",
        },
        {
          title: "Brief semanal de producto",
          body: "Reglas de estructura en instrucciones. Acta de la semana pasada como archivo. Un chat por sprint dentro del contenedor.",
        },
      ],
      commonMistakes: [
        {
          title: "Crear un proyecto para una sola pregunta",
          body: "El chat suelto basta. Projects compensa cuando repites contexto o acumulas fuentes.",
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
          title: "Confundir Project con Custom GPT",
          body: "Un GPT fija un rol reutilizable en sesiones cortas. Un Project organiza hilos y archivos de un mismo esfuerzo. Si dudas, lee chatgpt-gpts-cuando.",
        },
      ],
      conclusion:
        "ChatGPT Projects gana cuando tienes trabajo repetido o un hilo largo con reglas y documentos fijos en chatgpt.com. En unos 20 minutos sales con instrucciones escritas, archivos en su sitio y un primer chat que no empieza de cero. Si el caso es puntual, el chat suelto sigue siendo la opción correcta.",
      nextSteps: [
        "Si aún no dominas el briefing, refuerza con chatgpt-primeros-pasos antes de otro contenedor.",
        "Para decidir entre Project y Custom GPT, aplica el criterio de chatgpt-gpts-cuando con tres tareas reales.",
        "Si tu equipo usa Claude para el mismo patrón, compara con claude-projects-primer-flujo y quédate con una herramienta por caso.",
      ],
      takeaway:
        "Propósito claro → Project settings con instrucciones → archivos → chat dentro del proyecto. Repite el contenedor, no el copy-paste.",
    },
    en: {
      title: "ChatGPT Projects: your first context workflow (2026)",
      metaTitle: "ChatGPT Projects: first useful flow in 2026",
      metaDescription:
        "Create a project on chatgpt.com, write instructions, upload files and chat with fixed context. When to use Projects vs a plain chat or Custom GPT.",
      excerpt:
        "Define the purpose, create the project, set instructions, upload references and work inside the project — not in a chat that forgets the brief every Monday.",
      intro:
        "ChatGPT Projects is the space on https://chatgpt.com where chats, files and instructions live together for one body of work. It is not another loose thread: it is a container with rules and sources the model can use on every message inside the project. The official guide is at https://help.openai.com/en/articles/10169521-projects-in-chatgpt. This flow takes about 20 minutes and leaves you a reusable project for repeated work — a client, a report type, a research line that grows over weeks.",
      problem:
        "Many people paste the same PDF every Monday or rewrite the same instructions in every new chat. A plain chat does not keep project files and rules. Without a Project, you repeat context, mix incompatible topics and ChatGPT invents more freely. Or they build a Custom GPT when what they need is a long thread with many files in one place.",
      whatYouWillLearn: [
        "Decide whether the job deserves a Project, a plain chat or a GPT",
        "Create a project from the chatgpt.com sidebar",
        "Write project instructions in Project settings",
        "Add files or sources without hitting your plan limits",
        "Chat inside the project and verify it uses the context",
        "Know when to go back to a normal chat",
      ],
      prerequisites: [
        "An account on https://chatgpt.com (Projects is available on Free and paid plans, with per-plan file limits)",
        "A real case you will repeat: client, monthly report or weekly brief",
        "At least one reference file (PDF, doc or notes) or a clear instruction paragraph",
        "20 minutes",
      ],
      steps: [
        {
          title: "Decide if you need a Project or a plain chat",
          content:
            "Before clicking New project, answer: will you repeat this work several times with the same rules and documents? Or will the thread grow over weeks with many files on the same line of work? For a one-off email or quick question, stay on the normal chat (or a saved prompt). For a weekly brief, client reports or research that accumulates sources, a Project is worth it. If the case is a fixed role you open in short sessions without a huge thread, read chatgpt-gpts-cuando first. Write the purpose in one line: «Monthly reports for Client X with glossary and direct tone.»",
          whatYouShouldSee:
            "A one-line purpose in a notes app. A written decision: Project, plain chat or GPT.",
          tip: "If you only have one question, do not open a project. The overhead is not worth it.",
          imageDescription:
            "Notes app with a one-line purpose and a fork: plain chat vs Project vs GPT.",
        },
        {
          title: "Create the project on chatgpt.com",
          content:
            "Go to https://chatgpt.com. In the sidebar, click New project (or open Projects in the left menu and create one). Give it a concrete name — not «Writing» but «Client X Reports» or «Product brief Q4». Optionally pick an icon and color to spot it quickly. The name tells you whether you will come back next week.",
          whatYouShouldSee:
            "An empty project ready for instructions and files. The name reflects the use case.",
          warning:
            "A generic project becomes a junk drawer. A vague name invites mixing incompatible contexts.",
          imageDescription:
            "ChatGPT sidebar with New project and a specific name in the creation dialog.",
        },
        {
          title: "Add project instructions",
          content:
            "Open the three-dot menu in the top corner of the project and choose Project settings. In the project instructions field, write what ChatGPT must always remember here: role («You are an internal report editor»), tone («Direct, no empty adjectives»), output format («Bullets with owner and date») and bans («Do not invent figures; if data is missing, mark [MISSING]»). Project instructions apply only inside this project and can override your global custom instructions while you work here. Paste a sample paragraph if you have brand voice.",
          whatYouShouldSee:
            "Project settings open with a 5–15 line block: role, tone, format and at least one explicit ban.",
          tip: "If instructions are vague («be professional»), the project adds nothing a plain chat would not.",
          imageDescription:
            "Project settings panel with project instructions: role, tone, format and a short ban list.",
        },
        {
          title: "Upload files or reference sources",
          content:
            "Use Add files or the project sources area to upload PDFs, spreadsheets, docs or images, or paste text the chats should consult. Do not upload the whole drive: 2–5 clear files are enough to start (total limits depend on your plan — Free allows fewer files per project than Plus or team plans). If a file goes stale, remove it. On plans that support it, you can link external sources your team updates; otherwise keep an exported copy current.",
          whatYouShouldSee:
            "A file list with recognizable names. No duplicates or mixed stale docs.",
          warning:
            "A huge dump dilutes what matters and hits plan limits. Fewer, clearer files.",
          imageDescription:
            "Add files area with 3–4 named documents (glossary, template, tone guide).",
        },
        {
          title: "Open the first chat inside the project",
          content:
            "From the project, start a new chat — not from ChatGPT’s main screen. Write a concrete task that uses the context, with the same briefing rigor as chatgpt-primeros-pasos: «Using the project template, draft the March report. Use only data in the project files.» The chat inherits instructions and sources without you pasting them again. You can move older chats into the project if you already had a related thread.",
          whatYouShouldSee:
            "A thread inside the project with your prompt. The reply follows the tone or template from instructions or files.",
          tip: "If it ignores a file, cite the filename in the message: «Per report-template.pdf, section 2…»",
          imageDescription:
            "Active chat inside the project with a concrete prompt and a reply referencing the template or tone.",
        },
        {
          title: "Verify it uses the context (and fix if not)",
          content:
            "Review the reply: does it follow the format in the instructions? Does it use glossary terms? Does it mark [MISSING] instead of inventing? If something fails, edit project instructions in Project settings — do not repeat the same blind prompt. A «Banned: paragraphs longer than 3 sentences» in instructions beats three correction messages in the chat. If the problem is a stale file, replace it before continuing.",
          whatYouShouldSee:
            "A reply aligned with instructions and files, or adjusted project instructions after spotting a failure.",
          warning:
            "If every chat needs the context pasted again, the project is not set up right. Fix instructions or files first.",
          imageDescription:
            "Reply with bullets in the requested format; Project settings panel showing instructions.",
        },
        {
          title: "When to stay in the Project and when to return to a plain chat",
          content:
            "Stay in the Project for repeated work or a long thread on the same case: same client, same document type, same rules and sources that grow over time. Return to a plain chat for one-off questions, tone experiments or topics without shared files. If a second client needs another glossary and tone, create another project — do not mix contexts. If your team lives on claude.ai, the equivalent pattern is in claude-projects-primer-flujo; Notion AI can hold project notes, but chat with fixed instructions and files happens here in ChatGPT.",
          whatYouShouldSee:
            "A documented decision: this project = Client X; other tasks = normal chat, another project or a GPT per chatgpt-gpts-cuando.",
          proTip:
            "A well-scoped project gets reused for months. An «everything» project gets abandoned in two weeks.",
          imageDescription:
            "Two separate projects in the sidebar and a plain chat for a quick question.",
        },
      ],
      realUseCases: [
        {
          title: "Monthly client report",
          body: "Instructions with tone and format. Glossary and template in files. Each month you open a new chat inside the same project.",
        },
        {
          title: "Multi-week research line",
          body: "Sources you keep adding, instructions that ask to cite only what is uploaded. Several chats in one project without re-explaining the brief.",
        },
        {
          title: "Weekly product brief",
          body: "Structure rules in instructions. Last week’s notes as a file. One chat per sprint inside the container.",
        },
      ],
      commonMistakes: [
        {
          title: "Creating a project for a single question",
          body: "A plain chat is enough. Projects pay off when you repeat context or accumulate sources.",
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
          title: "Confusing Project with Custom GPT",
          body: "A GPT fixes a reusable role in short sessions. A Project organizes threads and files for one effort. If unsure, read chatgpt-gpts-cuando.",
        },
      ],
      conclusion:
        "ChatGPT Projects wins when you have repeated work or a long thread with fixed rules and documents on chatgpt.com. In about 20 minutes you leave with written instructions, files in place and a first chat that does not start from zero. If the case is one-off, the plain chat is still the right choice.",
      nextSteps: [
        "If briefing still wobbles, strengthen it with chatgpt-primeros-pasos before another container.",
        "To choose between Project and Custom GPT, apply the criteria in chatgpt-gpts-cuando with three real tasks.",
        "If your team uses Claude for the same pattern, compare with claude-projects-primer-flujo and pick one tool per case.",
      ],
      takeaway:
        "Clear purpose → Project settings with instructions → files → chat inside the project. Reuse the container, not the copy-paste.",
    },
  },
};
