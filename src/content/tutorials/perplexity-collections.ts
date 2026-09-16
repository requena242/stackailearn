import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "perplexity-collections";

export const perplexityCollections: Tutorial = {
  id: slug,
  slug,
  category: "research",
  level: "intermediate",
  estimatedTime: 18,
  publishedAt: "2026-09-16",
  lastUpdated: "2026-09-16",
  toolsUsed: ["perplexity"],
  relatedTutorials: [
    "perplexity-investigacion-con-fuentes",
    "chatgpt-primeros-pasos",
    "claude-escritura-larga",
  ],
  tags: ["perplexity", "collections", "research", "organization"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Perplexity con un Project abierto y varios hilos de investigacion agrupados",
      caption: "El Project guarda el mapa. Las fuentes siguen abriendose fuera.",
      hint: "Hero: barra lateral de Perplexity con Projects activo, un Project con lista de hilos y un hilo con el panel de fuentes visible.",
    },
    en: {
      alt: "Perplexity with an open Project and several grouped research threads",
      caption: "The Project holds the map. Sources still open elsewhere.",
      hint: "Hero: Perplexity sidebar with Projects active, a Project thread list and one thread with the sources panel visible.",
    },
  }),
  copy: {
    es: {
      title: "Perplexity Collections (ahora Projects): investigacion reutilizable (2026)",
      metaTitle: "Perplexity Collections y Projects: organizar investigacion en 2026",
      metaDescription:
        "Si buscas Collections, el producto actual son Projects (antes Spaces). Crea un Project, agrupa hilos, fija instrucciones y vuelve a las fuentes. El brief se escribe fuera.",
      excerpt:
        "Dia dos tras investigar con fuentes: un Project por tema, hilos con criterio y un brief que no trata el chat como verdad.",
      intro:
        "Mucha gente sigue buscando «Perplexity Collections», pero el producto actual se llama Projects (antes Spaces). La guia oficial esta en https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces. Si ya hiciste el flujo de investigar con fuentes, un Project es el siguiente paso: un espacio persistente donde agrupas hilos de un mismo tema, opcionalmente con instrucciones y archivos, para volver manana sin rebuscar en History. No sustituye abrir las fuentes. Guarda el mapa.",
      problem:
        "Sin Projects, cada busqueda buena se pierde en History. Copias respuestas a un doc y pierdes el hilo con sus citas. O peor: vuelves a preguntar lo mismo y mezclas contextos. Un Project mal usado es un vertedero de chats; bien usado, es el indice de un tema que dura dias.",
      whatYouWillLearn: [
        "Decidir cuando un tema merece Project y no un hilo suelto",
        "Crear un Project desde la barra lateral con nombre e instrucciones",
        "Lanzar busquedas como hilos dentro del Project",
        "Mover hilos existentes desde History al Project",
        "Organizar varias consultas y, si aplica, anadir archivos",
        "Volver a las fuentes y redactar un brief fuera de Perplexity",
      ],
      prerequisites: [
        "Cuenta en https://www.perplexity.ai",
        "Haber hecho al menos una ronda del tutorial perplexity-investigacion-con-fuentes",
        "Un tema real que vayas a retomar en varios dias — no «mejores herramientas de IA»",
        "18 minutos y un doc aparte para el brief final",
      ],
      steps: [
        {
          title: "Decide si el tema merece un Project",
          content:
            "Antes de crear nada, responde: ¿vas a hacer mas de dos consultas sobre el mismo asunto en la proxima semana? Si es una pregunta puntual, quedate en un hilo suelto y abre las fuentes como en el tutorial anterior. Si es un brief de producto, un mercado nuevo o un informe que crece en varias sesiones, merece Project. Escribe en una linea el alcance: tema, geografia si importa, y fecha limite del trabajo.",
          whatYouShouldSee:
            "Una frase de alcance en un bloc. Decision clara: Project si o hilo suelto.",
          tip: "Un Project por tema. «IA generativa» y «pricing Q4» no comparten contenedor.",
          imageDescription:
            "Bloc con una linea de alcance y una bifurcacion: hilo suelto vs Project.",
        },
        {
          title: "Abre Projects y crea uno nuevo",
          content:
            "En Perplexity, abre Projects en la barra lateral izquierda. Pulsa + New project (tambien puedes usar el + al pasar el raton sobre el encabezado Projects). Pon un titulo concreto: «Criterios LLM producto 2025-2026», no «Investigacion». Si hay campo de descripcion, anota que decision tomaras con este material. En Settings del Project, si aparece Instructions, pega reglas de analista: «Separa hecho, estimacion y opinion. Pide fecha en cada fuente. No escribas el ensayo final.» Perplexity tambien puede sugerir titulo e instrucciones si creas el Project desde una sesion existente.",
          whatYouShouldSee:
            "Un Project vacio con titulo especifico. Pestaña Settings con Instructions si tu cuenta las muestra.",
          warning:
            "Instrucciones vagas («se profesional») no cambian nada. Copia el tono del tutorial de fuentes: fechas, exclusiones, tipos de afirmacion.",
          imageDescription:
            "Barra lateral con Projects, dialogo + New project y caja de Instructions rellenada.",
        },
        {
          title: "Lanza el primer hilo dentro del Project",
          content:
            "Con el Project abierto, escribe la primera pregunta desde ahi — no desde la caja global de inicio si puedes evitarlo. Usa la formula de analista: pregunta acotada, ano, exclusiones. Ejemplo: «Que criterios publicaron equipos de producto en 2025-2026 para elegir un LLM en Europa, y que trade-offs nombran? Excluye listas de afiliados.» Pide 5-7 fuentes con fecha antes de pedir conclusiones. Cada busqueda dentro del Project queda como un hilo (session) en la lista del Project.",
          whatYouShouldSee:
            "Un hilo nuevo listado dentro del Project, con citas numeradas en la respuesta.",
          tip: "Renombra el hilo con un titulo que entiendas en una semana: «Criterios LLM — ronda 1».",
          imageDescription:
            "Hilo abierto dentro del Project con pregunta datada y citas en la respuesta.",
        },
        {
          title: "Anade un hilo que ya tenias en History",
          content:
            "Si empezaste fuera del Project, no lo tires. Abre el hilo desde History en la barra lateral, pulsa el menu de tres puntos y elige Add it to a project (asi lo documenta el centro de ayuda de Perplexity). Selecciona el Project que creaste. El hilo conserva mensajes y citas; solo cambia de carpeta logica dentro de Perplexity.",
          whatYouShouldSee:
            "Confirmacion breve y el hilo visible en la lista del Project.",
          warning:
            "No guardes todo «por si acaso». Un hilo irrelevante ensucia el mapa igual que en History.",
          imageDescription:
            "Menu de tres puntos en un hilo de History con Add it to a project y dialogo de destino.",
        },
        {
          title: "Organiza una segunda consulta sin mezclar el tema",
          content:
            "Dentro del mismo Project, abre un hilo nuevo (no alargues el primero si la pregunta es distinta). Segunda ronda ejemplo: «De esas fuentes, cuales mencionan coste por token o latencia como criterio decisivo?» o «Que no pudiste verificar en la ronda anterior?» Cada hilo tiene un rol. Puedes fijar Projects importantes con Pin para acceso rapido. Evita un solo chat con diez follow-ups que mezclan subpreguntas.",
          whatYouShouldSee:
            "Dos o tres hilos en el Project, cada uno con titulo que describe su rol.",
          proTip:
            "Tres hilos cortos y nombrados superan un monstruo de cincuenta mensajes cuando vuelves una semana despues.",
          imageDescription:
            "Lista del Project con varios hilos titulados (ronda 1, huecos, coste) y uno fijado.",
        },
        {
          title: "Opcional: archivos e instrucciones del Project",
          content:
            "Si el tema lo pide, sube archivos de referencia en la pestaña Files del Project (PDF, CSV, etc.). Las instrucciones del Project aplican a las busquedas nuevas dentro de el. Segun la documentacion de Perplexity, el plan Pro Individual permite hasta 50 archivos persistentes por Project; en Free los limites de subida son menores y comparten cupo semanal — consulta el centro de ayuda antes de un deadline. Los archivos dan contexto; no sustituyen abrir fuentes web citadas en el hilo.",
          whatYouShouldSee:
            "Pestaña Files con uno o dos documentos y Settings con Instructions visibles.",
          tip: "No subas todo el corpus. Un informe clave y una hoja de criterios bastan para orientar las busquedas.",
          imageDescription:
            "Project con pestana Files mostrando un PDF subido y Settings con Instructions.",
        },
        {
          title: "Vuelve a las fuentes y redacta el brief fuera",
          content:
            "Abre el hilo que mas peso tenga. Igual que en perplexity-investigacion-con-fuentes: elige dos fuentes primarias, anota titulo, autor e fecha en tu doc externo. El Project te trae de vuelta al hilo con sus citas; no sustituye leer el PDF o el informe. En tu doc, escribe: tesis en una frase, 4-6 vinetas con cita a las fuentes que abriste, seccion Huecos, fecha del brief. El Project queda como indice de hilos para la proxima sesion.",
          whatYouShouldSee:
            "Dos pestanas de fuentes abiertas, notas fechadas en otro sitio y el Project con hilos legibles como mapa.",
          warning:
            "Exportar o copiar el parrafo de Perplexity al brief final sigue estando prohibido. El Project organiza; tu verificas.",
          imageDescription:
            "Hilo dentro del Project con panel de fuentes, doc externo con brief y lista de hilos como indice.",
        },
      ],
      realUseCases: [
        {
          title: "Investigacion de mercado en tres sesiones",
          body: "Ronda 1: mapa de criterios. Ronda 2: huecos. Ronda 3: un competidor nuevo. El Project evita reexplicar el contexto cada vez.",
        },
        {
          title: "Brief semanal que se actualiza",
          body: "Un Project por tema de reunion. Cada lunes un hilo nuevo con fecha en el titulo; el brief sale de fuentes abiertas, no del chat.",
        },
        {
          title: "Onboarding a un tema tecnico",
          body: "Varios hilos con instrucciones fijas («explica como a un PM, cita papers con ano»). El Project es el curso; las fuentes son las lecturas obligatorias.",
        },
      ],
      commonMistakes: [
        {
          title: "Usar el Project como vertedero",
          body: "Guardar cada busqueda sin titulo ni criterio. En un mes no sabras cual hilo importa.",
        },
        {
          title: "No abrir las fuentes porque «ya esta guardado»",
          body: "Guardar el hilo no verifica nada. El entregable sigue necesitando titulo, autor y fecha de las fuentes primarias.",
        },
        {
          title: "Mezclar temas en un solo Project",
          body: "Pricing y regulacion en el mismo sitio confunden las instrucciones y los hilos. Parte en dos Projects.",
        },
        {
          title: "Buscar «Collections» y no encontrar el boton",
          body: "El producto actual es Projects en la barra lateral. Las guias antiguas que hablan de Collections o Spaces apuntan al mismo flujo con otro nombre.",
        },
      ],
      conclusion:
        "Si buscabas Collections, hoy el camino es Projects: hilos de un mismo tema, instrucciones opcionales y un indice al que vuelves sin perder el mapa. Las fuentes siguen abriendose fuera; el brief se escribe en otro sitio. Es el dia dos del flujo con fuentes: mismo rigor, menos friccion entre sesiones.",
      nextSteps: [
        "Repite perplexity-investigacion-con-fuentes con una pregunta mas estrecha dentro de tu Project.",
        "Si el texto final es largo, editalo por secciones con claude-escritura-larga.",
        "Para el formato del entregable, usa chatgpt-primeros-pasos con tu brief ya fechado.",
      ],
      takeaway:
        "Collections era el nombre antiguo; Projects es el producto actual. Un Project por tema, hilos nombrados, fuentes abiertas fuera, brief fechado en otro sitio.",
    },
    en: {
      title: "Perplexity Collections (now Projects): reusable research workspace (2026)",
      metaTitle: "Perplexity Collections and Projects: organize research in 2026",
      metaDescription:
        "If you searched for Collections, the current product is Projects (formerly Spaces). Create a Project, group threads, set instructions, and return to sources. The brief is written elsewhere.",
      excerpt:
        "Day two after researching with sources: one Project per topic, threads saved with intent, and a brief that does not treat the chat as truth.",
      intro:
        "Many people still search for «Perplexity Collections», but the current product is called Projects (formerly Spaces). The official guide is at https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces. If you already ran the research-with-sources flow, a Project is the next step: a persistent workspace where you group threads on the same topic, optionally with instructions and files, so you can return tomorrow without digging through History. It does not replace opening sources. It holds the map.",
      problem:
        "Without Projects, every good search sinks into History. You paste answers into a doc and lose the thread with its citations. Or worse: you ask again and mix contexts. A Project used badly is a chat dump; used well, it is the index of a topic that lasts days.",
      whatYouWillLearn: [
        "Decide when a topic deserves a Project and not a loose thread",
        "Create a Project from the sidebar with a name and instructions",
        "Run searches as threads inside the Project",
        "Move existing threads from History into the Project",
        "Organize several queries and, if needed, add files",
        "Return to sources and draft a brief outside Perplexity",
      ],
      prerequisites: [
        "An account at https://www.perplexity.ai",
        "At least one round of the perplexity-investigacion-con-fuentes tutorial",
        "A real topic you will revisit over several days — not «best AI tools»",
        "18 minutes and a separate doc for the final brief",
      ],
      steps: [
        {
          title: "Decide whether the topic deserves a Project",
          content:
            "Before you create anything, ask: will you run more than two queries on the same subject in the next week? For a one-off question, stay on a loose thread and open sources as in the previous tutorial. For a product brief, a new market, or a report that grows over several sessions, use a Project. Write the scope in one line: topic, geography if it matters, and the work's deadline.",
          whatYouShouldSee:
            "A one-line scope in a notes app. A clear decision: Project yes or loose thread.",
          tip: "One Project per topic. «Generative AI» and «Q4 pricing» do not share a container.",
          imageDescription:
            "Notes app with a one-line scope and a fork: loose thread vs Project.",
        },
        {
          title: "Open Projects and create a new one",
          content:
            "In Perplexity, open Projects in the left sidebar. Click + New project (you can also use the + hover option on the Projects header). Use a concrete title: «Product LLM criteria 2025-2026», not «Research». If there is a description field, note what decision this material will support. In the Project's Settings tab, if Instructions appears, paste analyst rules: «Split fact, estimate and opinion. Ask for a date on each source. Do not write the final essay.» Perplexity can also suggest a title and instructions if you create a Project from an existing session.",
          whatYouShouldSee:
            "An empty Project with a specific title. A Settings tab with Instructions if your account shows them.",
          warning:
            "Vague instructions («be professional») change nothing. Copy the tone from the sources tutorial: dates, exclusions, claim types.",
          imageDescription:
            "Sidebar with Projects, + New project dialog and the Instructions box filled in.",
        },
        {
          title: "Start the first thread inside the Project",
          content:
            "With the Project open, write the first question from there — not from the global home box if you can avoid it. Use the analyst formula: a narrow question, a year, exclusions. Example: «What criteria did product teams publish in 2025-2026 for choosing an LLM in Europe, and which trade-offs do they name? Exclude affiliate lists.» Ask for 5-7 dated sources before you ask for conclusions. Each search inside the Project is saved as a thread (session) in the Project list.",
          whatYouShouldSee:
            "A new thread listed inside the Project, with numbered citations in the answer.",
          tip: "Rename the thread with a title you will understand in a week: «LLM criteria — round 1».",
          imageDescription:
            "Thread open inside the Project with a dated question and citations in the answer.",
        },
        {
          title: "Add a thread you already had in History",
          content:
            "If you started outside the Project, do not throw it away. Open the thread from History in the sidebar, click the three-dot menu, and choose Add it to a project (Perplexity's help center documents this wording). Select the Project you created. The thread keeps its messages and citations; only its logical folder inside Perplexity changes.",
          whatYouShouldSee:
            "A brief confirmation and the thread visible in the Project list.",
          warning:
            "Do not save everything «just in case». An irrelevant thread clutters the map just like History.",
          imageDescription:
            "Three-dot menu on a History thread with Add it to a project and the destination dialog.",
        },
        {
          title: "Organize a second query without mixing the topic",
          content:
            "Inside the same Project, open a new thread (do not stretch the first one if the question is different). Second-round example: «Of those sources, which mention cost per token or latency as a decisive criterion?» or «What could you not verify in the previous round?» Each thread has a role. You can Pin important Projects for quick access. Avoid one chat with ten follow-ups that mix sub-questions.",
          whatYouShouldSee:
            "Two or three threads in the Project, each with a title that describes its role.",
          proTip:
            "Three short, named threads beat a fifty-message monster when you return a week later.",
          imageDescription:
            "Project list with several titled threads (round 1, gaps, cost) and one pinned.",
        },
        {
          title: "Optional: Project files and instructions",
          content:
            "If the topic needs it, upload reference files in the Project's Files tab (PDF, CSV, etc.). Project instructions apply to new searches inside it. Perplexity's plan documentation states that the Individual Pro plan allows up to 50 persistent file uploads per Project; on Free, upload limits are lower and share a rolling weekly allowance — check the help center before a deadline. Files add context; they do not replace opening web sources cited in a thread.",
          whatYouShouldSee:
            "Files tab with one or two documents and Settings with Instructions visible.",
          tip: "Do not upload the whole corpus. One key report and a criteria sheet are enough to steer searches.",
          imageDescription:
            "Project with Files tab showing an uploaded PDF and Settings with Instructions.",
        },
        {
          title: "Return to sources and draft the brief elsewhere",
          content:
            "Open the thread that matters most. Same as perplexity-investigacion-con-fuentes: pick two primary sources, note title, author and date in your external doc. The Project brings you back to the thread with its citations; it does not replace reading the PDF or report. In your doc, write: thesis in one sentence, 4-6 bullets citing the sources you opened, a Gaps section, brief date. The Project stays as your thread index for the next session.",
          whatYouShouldSee:
            "Two source tabs open, dated notes elsewhere, and the Project with readable threads as the map.",
          warning:
            "Exporting or pasting Perplexity's paragraph into the final brief is still off limits. The Project organizes; you verify.",
          imageDescription:
            "Thread inside the Project with sources panel, external doc with brief and thread list as index.",
        },
      ],
      realUseCases: [
        {
          title: "Market research across three sessions",
          body: "Round 1: criteria map. Round 2: gaps. Round 3: a new competitor. The Project avoids re-explaining context each time.",
        },
        {
          title: "A weekly brief that gets updated",
          body: "One Project per meeting topic. Each Monday a new thread with the date in the title; the brief comes from opened sources, not the chat.",
        },
        {
          title: "Onboarding to a technical topic",
          body: "Several threads with fixed instructions («explain like to a PM, cite papers with year»). The Project is the course; the sources are the required reading.",
        },
      ],
      commonMistakes: [
        {
          title: "Using the Project as a dump",
          body: "Saving every search with no title or criterion. In a month you will not know which thread mattered.",
        },
        {
          title: "Skipping sources because «it is already saved»",
          body: "Saving the thread verifies nothing. The deliverable still needs title, author and date from primary sources.",
        },
        {
          title: "Mixing topics in one Project",
          body: "Pricing and regulation in the same place confuse instructions and threads. Split into two Projects.",
        },
        {
          title: "Searching for «Collections» and not finding the button",
          body: "The current product is Projects in the sidebar. Older guides that say Collections or Spaces describe the same workflow under an older name.",
        },
      ],
      conclusion:
        "If you looked for Collections, the path today is Projects: threads on the same topic, optional instructions, and an index you can return to without losing the map. Sources still open elsewhere; the brief is written somewhere else. It is day two of the sources flow: same rigor, less friction between sessions.",
      nextSteps: [
        "Run perplexity-investigacion-con-fuentes again with a narrower question inside your Project.",
        "If the final piece is long, edit it by section with claude-escritura-larga.",
        "For deliverable formatting, use chatgpt-primeros-pasos with your brief already dated.",
      ],
      takeaway:
        "Collections was the old search term; Projects is the current product. One Project per topic, named threads, sources opened elsewhere, a dated brief in another place.",
    },
  },
};
