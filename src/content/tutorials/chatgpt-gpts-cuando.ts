import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "chatgpt-gpts-cuando";

export const chatgptGptsCuando: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "intermediate",
  estimatedTime: 18,
  publishedAt: "2026-09-17",
  lastUpdated: "2026-09-17",
  toolsUsed: ["chatgpt"],
  relatedTutorials: [
    "chatgpt-primeros-pasos",
    "chatgpt-alternativas",
    "claude-projects-primer-flujo",
    "elegir-modelo-texto",
  ],
  tags: ["chatgpt", "gpts", "custom-gpts", "workflows"],
  hero: tutorialHero(slug, {
    es: {
      alt: "ChatGPT con el constructor de GPTs abierto y un rol repetible definido",
      caption: "Un GPT fija el rol. El chat suelto no.",
      hint: "Hero 1600x900: chatgpt.com con Explore GPTs, Create a GPT y el panel de Instructions con conversation starters visibles.",
    },
    en: {
      alt: "ChatGPT with the GPT builder open and a repeatable role defined",
      caption: "A GPT fixes the role. A loose chat does not.",
      hint: "Hero 1600x900: chatgpt.com with Explore GPTs, Create a GPT and the Instructions panel with conversation starters visible.",
    },
  }),
  copy: {
    es: {
      title: "ChatGPT GPTs: cuando merecen la pena (2026)",
      metaTitle: "ChatGPT GPTs: cuando merecen la pena en 2026",
      metaDescription:
        "Decide si tu caso necesita un Custom GPT, un chat suelto, un Project o un prompt guardado. Crea uno, prueba con tres prompts reales y compara.",
      excerpt:
        "Los GPTs brillan en trabajo repetido con rol fijo. Para una pregunta puntual, sobran. Este flujo te ayuda a decidir y a construir solo cuando compensa.",
      intro:
        "Un Custom GPT en ChatGPT es un asistente con nombre, instrucciones, archivos de conocimiento y capacidades preconfiguradas al que vuelves sin reescribir el briefing cada vez. No sustituye a todo: para una respuesta unica, un chat suelto o un prompt guardado suele bastar. Para un rol que repites con las mismas reglas — revision de briefs, onboarding interno, un tipo de informe — un GPT ahorra friccion. La guia oficial del constructor esta en https://help.openai.com/en/articles/8554397-creating-a-gpt. Este tutorial no te empuja a publicar nada en la tienda; primero decides si el trabajo lo merece.",
      problem:
        "Mucha gente crea un GPT porque suena a «automatizar», sube veinte PDFs sin criterio y luego no lo usa. O al reves: repite el mismo bloque de instrucciones en cada chat nuevo el lunes. Sin criterio claro, pierdes tiempo configurando cuando un Project, un prompt en la biblioteca o un chat con un buen briefing habrian sido mas rapidos.",
      whatYouWillLearn: [
        "Decidir si tu caso es GPT, chat suelto, Project o prompt guardado",
        "Abrir el constructor y definir nombre, instrucciones y conversation starters",
        "Subir solo los archivos de conocimiento que el rol necesita",
        "Activar capacidades (web, codigo, etc.) con intencion, no todo encendido",
        "Probar con tres prompts reales y ajustar instrucciones",
        "Elegir alcance de comparticion y cuando no publicar",
        "Comparar el GPT contra un chat en blanco con el mismo brief",
      ],
      prerequisites: [
        "Cuenta en https://chatgpt.com con acceso a Create a GPT (plan Plus, Team o Enterprise segun OpenAI)",
        "Un trabajo repetible real — no «un GPT de marketing generico»",
        "Haber hecho al menos una ronda de chatgpt-primeros-pasos para escribir briefs claros",
        "18 minutos y tres tareas reales que haras esta semana con el mismo rol",
      ],
      steps: [
        {
          title: "Define el trabajo antes de abrir el constructor",
          content:
            "Escribe en una linea que hace este asistente y cuantas veces lo usaras en dos semanas. Preguntas de decision: ¿las instrucciones son las mismas en cada sesion? ¿Necesitas archivos fijos (plantilla, glosario, politica interna)? ¿Varias personas deben usar el mismo rol? Si la respuesta es «una sola vez» o «cada vez el contexto cambia mucho», quedate en chat suelto con un buen briefing. Si repites el mismo rol con reglas estables, sigue. Si el contexto es un hilo largo con muchos archivos que crece por semanas, valora un ChatGPT Project antes que un GPT publico.",
          whatYouShouldSee:
            "Una frase de proposito en un bloc. Decision escrita: GPT, chat suelto, Project o prompt guardado.",
          tip: "Un GPT por rol. «Editor de informes» y «Traductor legal» no comparten el mismo contenedor.",
          imageDescription:
            "Bloc con una linea de proposito y una bifurcacion: chat suelto vs GPT vs Project.",
        },
        {
          title: "Abre Explore GPTs y Create a GPT",
          content:
            "En https://chatgpt.com, abre el menu lateral y entra en Explore GPTs (o GPTs). Pulsa Create a GPT / Crear un GPT. El constructor tiene dos pestanas: Create (asistente conversacional) y Configure (campos editables a mano). Empieza por Create si quieres que ChatGPT te proponga nombre e instrucciones a partir de una descripcion corta; pasa a Configure para afinar. No publiques todavia — trabaja en borrador hasta pasar las pruebas del paso 5.",
          whatYouShouldSee:
            "El constructor abierto con pestanas Create y Configure. Un borrador sin compartir.",
          warning:
            "No confundas Custom GPTs con otros productos llamados «GPT» en el ecosistema. Aqui hablamos del constructor dentro de ChatGPT.",
          imageDescription:
            "Pantalla Explore GPTs con el boton Create a GPT y las pestanas Create / Configure visibles.",
        },
        {
          title: "Configura nombre, instrucciones y conversation starters",
          content:
            "En Configure, pon un nombre que reconozcas en un mes: «Revisor brief producto», no «Mi GPT». En Instructions, escribe rol, tono, formato de salida y prohibiciones — el mismo rigor que en chatgpt-primeros-pasos: «Eres revisor de briefs internos. Salida: lista de huecos con severidad alta/media/baja. Prohibido inventar metricas; si falta un dato, escribe [FALTA].» Anade 3-4 conversation starters que reflejen tareas reales: «Revisa este brief contra la plantilla», «Lista huecos antes del viernes». Los starters no sustituyen buenas instrucciones; solo aceleran el primer clic.",
          whatYouShouldSee:
            "Nombre concreto, bloque de instrucciones de 8-15 lineas y starters alineados con tareas reales.",
          tip: "Si las instrucciones son vagas («se util»), el GPT no mejora un chat suelto con el mismo parrafo pegado una vez.",
          imageDescription:
            "Panel Configure con nombre especifico, Instructions rellenadas y conversation starters listados.",
        },
        {
          title: "Sube conocimiento y activa capacidades con criterio",
          content:
            "En Knowledge, sube solo lo que el rol necesita leer cada vez: plantilla PDF, glosario, checklist de calidad. Dos o cinco archivos claros superan un volcado de carpetas. En Capabilities, activa solo lo necesario: Web browsing si debe contrastar datos actuales; Code interpreter / Data analysis si trabajas con tablas; DALL-E solo si el rol incluye imagenes. Cada capacidad extra amplia lo que el modelo puede hacer y tambien lo que puede equivocarse. La documentacion de OpenAI describe estas opciones en el flujo de creacion de GPTs.",
          whatYouShouldSee:
            "Pocos archivos nombrados en Knowledge y capacidades encendidas de forma selectiva, no todas.",
          warning:
            "Un knowledge dump enorme diluye lo importante y ralentiza el contexto. Quita archivos obsoletos cuando cambien las reglas.",
          imageDescription:
            "Seccion Knowledge con 3 archivos y Capabilities con solo web y analisis de datos activados.",
        },
        {
          title: "Prueba con tres prompts reales e itera",
          content:
            "Antes de usarlo en produccion, lanza tres tareas que haras de verdad esta semana. Ejemplo para un revisor de briefs: (1) un brief incompleto, (2) un brief demasiado largo, (3) un brief con cifras sin fuente. Anota donde falla: tono, formato, alucinacion, ignora un archivo. Corrige Instructions — no anadas parches eternos en el chat. Si falla en los tres casos, el rol no esta definido o el GPT no es la herramienta correcta; vuelve al paso 1.",
          whatYouShouldSee:
            "Tres intercambios de prueba con fallos documentados y al menos un ajuste en Instructions tras la primera ronda.",
          proTip:
            "Guarda los tres prompts de prueba como conversation starters si funcionan — asi la siguiente sesion empieza en un clic.",
          imageDescription:
            "Vista de prueba del GPT con tres hilos de prueba y el panel Instructions abierto para editar.",
        },
        {
          title: "Elige alcance de comparticion (y cuando no publicar)",
          content:
            "En la esquina superior del constructor, abre Save y elige quien puede usarlo: Only me (privado), Anyone with a link o Public (GPT store). Para trabajo interno repetido, Only me o link al equipo suele bastar. Publica en la tienda solo si el GPT esta pulido, no filtra datos sensibles y aporta algo que otros buscarian sin tu contexto interno. Nunca subas a Knowledge archivos con datos personales, contratos o secretos comerciales si vas a compartir fuera de tu cuenta.",
          whatYouShouldSee:
            "Dialogo de guardado con alcance elegido de forma consciente. GPT privado listo para uso diario.",
          warning:
            "Un GPT publico con instrucciones vagas y PDFs internos es un riesgo. Privado primero; publico solo con revision.",
          imageDescription:
            "Menu Save con opciones Only me, link y Public, y un GPT marcado como privado.",
        },
        {
          title: "Usalo en el trabajo real y compara con un chat en blanco",
          content:
            "Abre el GPT desde la barra lateral o Explore GPTs y ejecuta una tarea real de hoy. En paralelo, abre un chat nuevo sin GPT y pega el mismo brief que usarias normalmente (el metodo de cuatro lineas de chatgpt-primeros-pasos). Compara: ¿ahorras tiempo? ¿La salida es mas consistente? ¿Sigues pegando el mismo contexto? Si el chat en blanco con un buen prompt va igual de bien, no necesitas el GPT — guarda el prompt en tu biblioteca. Si el GPT gana en consistencia y menos copy-paste, integralo en tu flujo semanal.",
          whatYouShouldSee:
            "Dos hilos comparables: uno con el GPT y otro en chat suelto. Notas breves sobre tiempo y calidad.",
          tip: "Revisa el GPT cada dos o tres meses: instrucciones y archivos envejecen cuando cambian procesos.",
          imageDescription:
            "Dos ventanas de ChatGPT lado a lado: Custom GPT activo vs chat en blanco con el mismo brief pegado.",
        },
        {
          title: "Cuando preferir Project, Claude Projects o un prompt guardado",
          content:
            "Custom GPT: rol repetido, mismas reglas, mismos archivos base, varias sesiones cortas. ChatGPT Project: un hilo de trabajo largo que crece con muchos archivos y contexto acumulado en una sola linea de investigacion o redaccion. Claude Projects (ver claude-projects-primer-flujo): mismo patron de contenedor persistente en claude.ai si tu equipo vive alli. Prompt guardado o snippet: una tarea puntual o un rol que cambia cada vez. No necesitas tres capas a la vez — elige la que minimiza repetir contexto sin sobre-ingenieria.",
          whatYouShouldSee:
            "Tabla mental o nota con tu decision final y que herramienta usas para que tipo de tarea.",
          proTip:
            "Si dudas entre GPT y Project, empieza por el chat suelto con briefing fuerte. Solo sube de nivel cuando repitas el dolor tres veces.",
          imageDescription:
            "Esquema simple: GPT para rol repetido, Project para hilo largo, prompt guardado para one-off.",
        },
      ],
      realUseCases: [
        {
          title: "Revisor de briefs internos",
          body: "Instrucciones fijas, plantilla en Knowledge, tres starters. Cada viernes el equipo pega el brief y recibe huecos con el mismo formato.",
        },
        {
          title: "Onboarding de un producto",
          body: "Glosario y FAQ en archivos. El GPT responde con el tono de la empresa sin reexplicar el producto en cada chat nuevo.",
        },
        {
          title: "Traduccion con glosario fijo",
          body: "Un CSV de terminos prohibidos y preferidos. Web apagada si no hace falta. Mismo rol para diez piezas cortas al mes.",
        },
      ],
      commonMistakes: [
        {
          title: "Crear un GPT para una sola pregunta",
          body: "Un chat con buen briefing termina en cinco minutos. El GPT compensa cuando repites el rol.",
        },
        {
          title: "Instrucciones vagas y knowledge dump",
          body: "«Se profesional» mas veinte PDFs mezclados producen respuestas genericas. Menos archivos, reglas explicitas.",
        },
        {
          title: "Activar todas las capacidades",
          body: "Web, codigo e imagenes encendidos sin motivo aumentan respuestas fuera de alcance. Solo lo que el rol necesita.",
        },
        {
          title: "Publicar antes de probar con trabajo real",
          body: "Tres prompts de prueba en privado evitan verguenza publica y fugas de contexto interno en la tienda.",
        },
      ],
      conclusion:
        "Un Custom GPT merece la pena cuando tienes un rol repetido con instrucciones y archivos estables — no cuando buscas una respuesta unica o un hilo largo que cambia cada dia. Configura con criterio, prueba en privado, compara contra un chat en blanco y quedate solo con la herramienta que te quita friccion de verdad.",
      nextSteps: [
        "Si el briefing aun flojea, refuerza con chatgpt-primeros-pasos antes de otro GPT.",
        "Para contexto persistente en Claude, aplica claude-projects-primer-flujo y compara sensaciones.",
        "Si dudas del modelo base, revisa elegir-modelo-texto antes de invertir mas en configuracion.",
      ],
      takeaway:
        "GPT si repites rol y reglas; chat suelto si es one-off; Project si el hilo es largo. Prueba en privado, compara, no publiques por defecto.",
    },
    en: {
      title: "ChatGPT GPTs: when they are worth building (2026)",
      metaTitle: "ChatGPT GPTs: when they are worth it in 2026",
      metaDescription:
        "Decide whether your case needs a Custom GPT, a plain chat, a Project or a saved prompt. Build one, test with three real prompts and compare.",
      excerpt:
        "GPTs shine on repeated work with a fixed role. For a one-off question, they are overkill. This flow helps you decide and build only when it pays off.",
      intro:
        "A Custom GPT in ChatGPT is an assistant with a name, instructions, knowledge files and pre-set capabilities you return to without rewriting the briefing every time. It does not replace everything: for a single answer, a plain chat or a saved prompt is often enough. For a role you repeat with the same rules — brief reviews, internal onboarding, a report type — a GPT saves friction. The official builder guide is at https://help.openai.com/en/articles/8554397-creating-a-gpt. This tutorial does not push you to publish to the store; you decide whether the job deserves it first.",
      problem:
        "Many people create a GPT because it sounds like «automation», upload twenty PDFs with no criteria and then never use it. Or the opposite: they paste the same instruction block into every new chat on Monday. Without a clear decision, you waste time configuring when a Project, a library prompt or a chat with a solid brief would have been faster.",
      whatYouWillLearn: [
        "Decide whether your case is a GPT, plain chat, Project or saved prompt",
        "Open the builder and set name, instructions and conversation starters",
        "Upload only the knowledge files the role needs",
        "Turn on capabilities (web, code, etc.) on purpose, not everything at once",
        "Test with three real prompts and iterate instructions",
        "Choose sharing scope and when not to publish",
        "Compare the GPT against a blank chat with the same brief",
      ],
      prerequisites: [
        "An account at https://chatgpt.com with access to Create a GPT (Plus, Team or Enterprise per OpenAI)",
        "A real repeatable job — not «a generic marketing GPT»",
        "At least one round of chatgpt-primeros-pasos for writing clear briefs",
        "18 minutes and three real tasks you will run this week with the same role",
      ],
      steps: [
        {
          title: "Define the job before opening the builder",
          content:
            "Write in one line what this assistant does and how often you will use it in two weeks. Decision questions: are the instructions the same every session? Do you need fixed files (template, glossary, internal policy)? Should several people share the same role? If the answer is «once only» or «the context changes a lot each time», stay on a plain chat with a good brief. If you repeat the same role with stable rules, continue. If the context is a long thread with many files that grows over weeks, consider a ChatGPT Project before a public GPT.",
          whatYouShouldSee:
            "A one-line purpose in a notes app. A written decision: GPT, plain chat, Project or saved prompt.",
          tip: "One GPT per role. «Report editor» and «Legal translator» do not share one container.",
          imageDescription:
            "Notes app with a one-line purpose and a fork: plain chat vs GPT vs Project.",
        },
        {
          title: "Open Explore GPTs and Create a GPT",
          content:
            "On https://chatgpt.com, open the sidebar and go to Explore GPTs (or GPTs). Click Create a GPT. The builder has two tabs: Create (conversational assistant) and Configure (editable fields). Start on Create if you want ChatGPT to propose a name and instructions from a short description; switch to Configure to refine. Do not publish yet — work in draft until you pass the tests in step 5.",
          whatYouShouldSee:
            "The builder open with Create and Configure tabs. An unpublished draft.",
          warning:
            "Do not confuse Custom GPTs with other products called «GPT» in the ecosystem. Here we mean the builder inside ChatGPT.",
          imageDescription:
            "Explore GPTs screen with the Create a GPT button and Create / Configure tabs visible.",
        },
        {
          title: "Set name, instructions and conversation starters",
          content:
            "In Configure, use a name you will recognize in a month: «Product brief reviewer», not «My GPT». In Instructions, write role, tone, output format and bans — same rigor as chatgpt-primeros-pasos: «You are an internal brief reviewer. Output: gap list with high/medium/low severity. Do not invent metrics; if data is missing, write [MISSING].» Add 3-4 conversation starters that mirror real tasks: «Review this brief against the template», «List gaps before Friday». Starters do not replace good instructions; they only speed up the first click.",
          whatYouShouldSee:
            "A concrete name, an 8-15 line instruction block and starters aligned with real tasks.",
          tip: "If instructions are vague («be helpful»), the GPT does not beat a plain chat with the same paragraph pasted once.",
          imageDescription:
            "Configure panel with a specific name, filled Instructions and listed conversation starters.",
        },
        {
          title: "Upload knowledge and enable capabilities on purpose",
          content:
            "Under Knowledge, upload only what the role must read every time: template PDF, glossary, quality checklist. Two to five clear files beat a folder dump. Under Capabilities, enable only what you need: Web browsing if it must check current data; Code interpreter / Data analysis for tables; DALL-E only if the role includes images. Each extra capability widens what the model can do and what it can get wrong. OpenAI documents these options in the GPT creation flow.",
          whatYouShouldSee:
            "A few named files in Knowledge and capabilities turned on selectively, not all of them.",
          warning:
            "A huge knowledge dump dilutes what matters and bloats context. Remove stale files when rules change.",
          imageDescription:
            "Knowledge section with 3 files and Capabilities with only web and data analysis enabled.",
        },
        {
          title: "Test with three real prompts and iterate",
          content:
            "Before production use, run three tasks you will actually do this week. Example for a brief reviewer: (1) an incomplete brief, (2) an overlong brief, (3) a brief with unsourced figures. Note where it fails: tone, format, hallucination, ignoring a file. Fix Instructions — do not add endless chat patches. If it fails all three, the role is not defined or a GPT is not the right tool; return to step 1.",
          whatYouShouldSee:
            "Three test exchanges with documented failures and at least one Instructions edit after the first round.",
          proTip:
            "Save the three test prompts as conversation starters if they work — the next session starts in one click.",
          imageDescription:
            "GPT preview with three test threads and the Instructions panel open for editing.",
        },
        {
          title: "Choose sharing scope (and when not to publish)",
          content:
            "In the top corner of the builder, open Save and choose who can use it: Only me (private), Anyone with a link or Public (GPT store). For repeated internal work, Only me or a team link is usually enough. Publish to the store only if the GPT is polished, leaks no sensitive data and offers something others would search for without your internal context. Never upload personal data, contracts or trade secrets to Knowledge if you will share outside your account.",
          whatYouShouldSee:
            "Save dialog with a deliberate scope choice. A private GPT ready for daily use.",
          warning:
            "A public GPT with vague instructions and internal PDFs is a risk. Private first; public only after review.",
          imageDescription:
            "Save menu with Only me, link and Public options, and a GPT marked private.",
        },
        {
          title: "Use it on real work and compare with a blank chat",
          content:
            "Open the GPT from the sidebar or Explore GPTs and run a real task today. In parallel, open a new chat without the GPT and paste the same brief you would normally use (the four-line method from chatgpt-primeros-pasos). Compare: do you save time? Is the output more consistent? Do you still paste the same context? If a blank chat with a good prompt works as well, you do not need the GPT — save the prompt to your library. If the GPT wins on consistency and less copy-paste, fold it into your weekly flow.",
          whatYouShouldSee:
            "Two comparable threads: one with the GPT and one in a plain chat. Short notes on time and quality.",
          tip: "Review the GPT every two or three months: instructions and files age when processes change.",
          imageDescription:
            "Two ChatGPT windows side by side: Custom GPT active vs blank chat with the same brief pasted.",
        },
        {
          title: "When to prefer a Project, Claude Projects or a saved prompt",
          content:
            "Custom GPT: repeated role, same rules, same base files, several short sessions. ChatGPT Project: one long work thread that grows with many files and accumulated context on a single research or writing line. Claude Projects (see claude-projects-primer-flujo): the same persistent-container pattern on claude.ai if your team lives there. Saved prompt or snippet: a one-off task or a role that changes every time. You do not need three layers at once — pick what minimizes repeating context without over-engineering.",
          whatYouShouldSee:
            "A mental table or note with your final decision and which tool you use for which task type.",
          proTip:
            "If you hesitate between GPT and Project, start with a plain chat and a strong brief. Only level up when you feel the pain three times.",
          imageDescription:
            "Simple diagram: GPT for repeated role, Project for long thread, saved prompt for one-off.",
        },
      ],
      realUseCases: [
        {
          title: "Internal brief reviewer",
          body: "Fixed instructions, template in Knowledge, three starters. Every Friday the team pastes the brief and gets gaps in the same format.",
        },
        {
          title: "Product onboarding",
          body: "Glossary and FAQ in files. The GPT answers in company tone without re-explaining the product in every new chat.",
        },
        {
          title: "Translation with a fixed glossary",
          body: "A CSV of banned and preferred terms. Web off if not needed. Same role for ten short pieces per month.",
        },
      ],
      commonMistakes: [
        {
          title: "Creating a GPT for a single question",
          body: "A chat with a good brief finishes in five minutes. A GPT pays off when you repeat the role.",
        },
        {
          title: "Vague instructions and knowledge dump",
          body: "«Be professional» plus twenty mixed PDFs produce generic answers. Fewer files, explicit rules.",
        },
        {
          title: "Enabling every capability",
          body: "Web, code and images on without reason increase off-scope answers. Only what the role needs.",
        },
        {
          title: "Publishing before testing on real work",
          body: "Three private test prompts avoid public embarrassment and internal context leaks in the store.",
        },
      ],
      conclusion:
        "A Custom GPT is worth it when you have a repeated role with stable instructions and files — not when you want one answer or a long thread that changes every day. Configure with intent, test in private, compare against a blank chat and keep only the tool that actually removes friction.",
      nextSteps: [
        "If the brief still wobbles, strengthen it with chatgpt-primeros-pasos before building another GPT.",
        "For persistent context in Claude, run claude-projects-primer-flujo and compare how it feels.",
        "If you doubt the base model, review elegir-modelo-texto before investing more in configuration.",
      ],
      takeaway:
        "GPT when you repeat role and rules; plain chat for one-offs; Project for a long thread. Test in private, compare, do not publish by default.",
    },
  },
};
