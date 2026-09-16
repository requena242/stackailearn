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
      alt: "Perplexity con una Collection abierta y varios hilos de investigacion agrupados",
      caption: "La Collection guarda el mapa. Las fuentes siguen abriendose fuera.",
      hint: "Hero: barra lateral de Perplexity con una Collection activa, lista de hilos relacionados y un hilo con el panel de fuentes visible.",
    },
    en: {
      alt: "Perplexity with an open Collection and several grouped research threads",
      caption: "The Collection holds the map. Sources still open elsewhere.",
      hint: "Hero: Perplexity sidebar with an active Collection, a list of related threads and one thread with the sources panel visible.",
    },
  }),
  copy: {
    es: {
      title: "Perplexity Collections: espacio de investigacion reutilizable (2026)",
      metaTitle: "Perplexity Collections: organizar investigacion en 2026",
      metaDescription:
        "Crea una Collection, guarda hilos relacionados, fija instrucciones y vuelve a las fuentes. El mapa vive en Perplexity; el brief y las citas, fuera.",
      excerpt:
        "Dia dos tras investigar con fuentes: una Collection por tema, hilos guardados con criterio y un brief que no trata el chat como verdad.",
      intro:
        "Si ya hiciste el flujo de investigar con fuentes en Perplexity, sabes abrir citas y escribir huecos. Las Collections (en algunas cuentas aparecen como Spaces o Projects en la barra lateral) son el siguiente paso: un contenedor donde agrupas hilos de un mismo tema para volver manana sin rebuscar en History. No sustituyen abrir las fuentes. Guardan el mapa.",
      problem:
        "Sin Collections, cada busqueda buena se pierde en History. Copias respuestas a Notion o a un doc y pierdes el hilo con sus citas. O peor: vuelves a preguntar lo mismo y mezclas contextos distintos. Una Collection mal usada es un vertedero de chats; bien usada, es el indice de un tema que dura dias.",
      whatYouWillLearn: [
        "Decidir cuando un tema merece Collection y no un hilo suelto",
        "Crear una Collection con nombre e instrucciones de analista",
        "Guardar hilos existentes y nuevos dentro del contenedor",
        "Organizar varias consultas sin mezclar temas",
        "Volver a las fuentes de un hilo guardado y redactar un brief fuera",
      ],
      prerequisites: [
        "Cuenta en https://www.perplexity.ai (el plan gratis basta para probar el flujo basico)",
        "Haber hecho al menos una ronda del tutorial perplexity-investigacion-con-fuentes",
        "Un tema real que vayas a retomar en varios dias — no «mejores herramientas de IA»",
        "18 minutos y un doc aparte para el brief final",
      ],
      steps: [
        {
          title: "Decide si el tema merece una Collection",
          content:
            "Antes de crear nada, responde: ¿vas a hacer mas de dos consultas sobre el mismo asunto en la proxima semana? Si es una pregunta puntual, quedate en un hilo suelto y abre las fuentes como en el tutorial anterior. Si es un brief de producto, un mercado nuevo o un informe que se alimenta en varias sesiones, merece Collection. Escribe en una linea el alcance: tema, geografia si importa, y fecha limite del trabajo.",
          whatYouShouldSee:
            "Una frase de alcance en un bloc. Decision clara: Collection si o hilo suelto.",
          tip: "Una Collection por tema. «IA generativa» y «pricing Q4» no comparten contenedor.",
          imageDescription:
            "Bloc con una linea de alcance y una bifurcacion: hilo suelto vs Collection.",
        },
        {
          title: "Crea la Collection en Library",
          content:
            "En Perplexity, abre Library en la barra lateral (o Projects / Spaces, segun tu cuenta). Pulsa New collection, Create a Space o + New project — el boton cambia de nombre, la funcion es la misma: un espacio persistente para hilos relacionados. Pon un titulo concreto: «Criterios LLM producto 2025-2026», no «Investigacion». Si hay campo de descripcion, anota que decision tomaras con este material. Si hay Instructions o Custom instructions, pega reglas de analista: «Separa hecho, estimacion y opinion. Pide fecha en cada fuente. No escribas el ensayo final.»",
          whatYouShouldSee:
            "Una Collection vacia con titulo especifico. Instrucciones visibles si tu plan las muestra.",
          warning:
            "Instrucciones vagas («se profesional») no cambian nada. Copia el tono del tutorial de fuentes: fechas, exclusiones, tipos de afirmacion.",
          imageDescription:
            "Dialogo de nueva Collection con titulo concreto y caja de instrucciones rellenada.",
        },
        {
          title: "Lanza el primer hilo dentro de la Collection",
          content:
            "Abre la Collection y escribe la primera pregunta desde ahi — no desde la caja global de inicio si puedes evitarlo. Usa la formula de analista: pregunta acotada, ano, exclusiones. Ejemplo: «Que criterios publicaron equipos de producto en 2025-2026 para elegir un LLM en Europa, y que trade-offs nombran? Excluye listas de afiliados.» Pide 5-7 fuentes con fecha antes de pedir conclusiones.",
          whatYouShouldSee:
            "Un hilo nuevo listado dentro de la Collection, con citas numeradas en la respuesta.",
          tip: "Renombra el hilo con un titulo que entiendas en una semana: «Criterios LLM — ronda 1».",
          imageDescription:
            "Hilo abierto dentro de la Collection con pregunta datada y citas en la respuesta.",
        },
        {
          title: "Guarda un hilo que ya tenias en History",
          content:
            "Si empezaste fuera de la Collection, no lo tires. Abre el hilo desde Library o History, pulsa el menu de tres puntos y elige Add to collection, Add to Space o Move to project (el texto varia). Selecciona la Collection que creaste o crea una nueva desde el dialogo. El hilo conserva sus mensajes y citas; solo cambia de carpeta logica.",
          whatYouShouldSee:
            "Confirmacion breve y el hilo visible en la lista de la Collection.",
          warning:
            "No guardes todo «por si acaso». Un hilo irrelevante ensucia el mapa igual que en History.",
          imageDescription:
            "Menu de tres puntos con Add to collection y dialogo de destino.",
        },
        {
          title: "Anade una segunda consulta sin mezclar el tema",
          content:
            "Dentro de la misma Collection, abre un hilo nuevo (no alargues el primero si la pregunta es distinta). Segunda ronda ejemplo: «De esas fuentes, cuales mencionan coste por token o latencia como criterio decisivo?» o «Que no pudiste verificar en la ronda anterior?» Asi cada hilo tiene un rol. Evita diez follow-ups en un solo chat que mezclan subpreguntas.",
          whatYouShouldSee:
            "Dos o tres hilos en la Collection, cada uno con titulo que describe su rol.",
          proTip:
            "Tres hilos cortos y nombrados superan un monstruo de cincuenta mensajes cuando vuelves una semana despues.",
          imageDescription:
            "Lista de la Collection con varios hilos titulados (ronda 1, huecos, coste).",
        },
        {
          title: "Vuelve a las fuentes — la Collection no las abre por ti",
          content:
            "Abre el hilo que mas peso tenga. Igual que en perplexity-investigacion-con-fuentes: elige dos fuentes primarias, anota titulo, autor e fecha en tu doc externo. La Collection te trae de vuelta al hilo con sus citas; no sustituye leer el PDF o el informe. Si una cita apunta a un recorte, abre el original o marca el hueco.",
          whatYouShouldSee:
            "Dos pestanas de fuentes abiertas junto a la Collection en Perplexity y notas fechadas en otro sitio.",
          warning:
            "Exportar o copiar el parrafo de Perplexity al brief final sigue estando prohibido. La Collection organiza; tu verificas.",
          imageDescription:
            "Hilo dentro de la Collection con panel de fuentes y un doc externo con titulo/autor/fecha.",
        },
        {
          title: "Redacta el brief fuera y deja la Collection como indice",
          content:
            "En tu doc (Notion, Google Docs, lo que uses), escribe: tesis en una frase, 4-6 vinetas con cita a las fuentes que abriste, seccion Huecos, fecha del brief. En la Collection, comprueba que los hilos tienen titulo claro — es tu indice para la proxima sesion. Si el entregable necesita formato (email, one-pager), pasa el brief a ChatGPT o Claude; los hechos ya estan fechados en tus notas.",
          whatYouShouldSee:
            "Un brief de una pagina fuera de Perplexity y una Collection con hilos legibles como mapa.",
          tip: "La fecha en el brief evita tratar este mapa como eterno dentro de un mes.",
          imageDescription:
            "Doc con brief (tesis, vinetas, huecos) y Perplexity con la Collection como indice de hilos.",
        },
      ],
      realUseCases: [
        {
          title: "Investigacion de mercado en tres sesiones",
          body: "Ronda 1: mapa de criterios. Ronda 2: huecos. Ronda 3: un competidor nuevo. La Collection evita reexplicar el contexto cada vez.",
        },
        {
          title: "Brief semanal que se actualiza",
          body: "Una Collection por tema de reunion. Cada lunes un hilo nuevo con fecha en el titulo; el brief sale de fuentes abiertas, no del chat.",
        },
        {
          title: "Onboarding a un tema tecnico",
          body: "Varios hilos con instrucciones fijas («explica como a un PM, cita papers con ano»). La Collection es el curso; las fuentes son las lecturas obligatorias.",
        },
      ],
      commonMistakes: [
        {
          title: "Usar la Collection como vertedero",
          body: "Guardar cada busqueda sin titulo ni criterio. En un mes no sabras cual hilo importa.",
        },
        {
          title: "No abrir las fuentes porque «ya esta guardado»",
          body: "Guardar el hilo no verifica nada. El entregable sigue necesitando titulo, autor y fecha de las fuentes primarias.",
        },
        {
          title: "Mezclar temas en una sola Collection",
          body: "Pricing y regulacion en el mismo sitio confunden las instrucciones y los hilos. Parte en dos Collections.",
        },
        {
          title: "Un solo hilo interminable",
          body: "Cincuenta follow-ups mezclan subpreguntas. Mejor hilos cortos con nombre que digan que preguntaste.",
        },
      ],
      conclusion:
        "Las Collections de Perplexity organizan hilos de un mismo tema para que vuelvas sin perder el mapa. Las fuentes siguen abriendose fuera; el brief se escribe en otro sitio. Es el dia dos del flujo con fuentes: mismo rigor, menos friccion entre sesiones.",
      nextSteps: [
        "Repite perplexity-investigacion-con-fuentes con una pregunta mas estrecha dentro de tu Collection.",
        "Si el texto final es largo, editalo por secciones con claude-escritura-larga.",
        "Para el formato del entregable, usa chatgpt-primeros-pasos con tu brief ya fechado.",
      ],
      takeaway:
        "Una Collection por tema, hilos nombrados, fuentes abiertas fuera, brief fechado en otro sitio. La Collection es el mapa — no el entregable.",
    },
    en: {
      title: "Perplexity Collections: a reusable research workspace (2026)",
      metaTitle: "Perplexity Collections: organize research in 2026",
      metaDescription:
        "Create a Collection, save related threads, set instructions, and return to sources. The map lives in Perplexity; the brief and citations live elsewhere.",
      excerpt:
        "Day two after researching with sources: one Collection per topic, threads saved with intent, and a brief that does not treat the chat as truth.",
      intro:
        "If you already ran the research-with-sources flow in Perplexity, you know how to open citations and write gaps. Collections (on some accounts the sidebar says Spaces or Projects) are the next step: a container where you group threads on the same topic so you can return tomorrow without digging through History. They do not replace opening sources. They hold the map.",
      problem:
        "Without Collections, every good search sinks into History. You paste answers into Notion or a doc and lose the thread with its citations. Or worse: you ask again and mix different contexts. A Collection used badly is a chat dump; used well, it is the index of a topic that lasts days.",
      whatYouWillLearn: [
        "Decide when a topic deserves a Collection and not a loose thread",
        "Create a Collection with a name and analyst instructions",
        "Save existing and new threads inside the container",
        "Organize several queries without mixing topics",
        "Return to a saved thread's sources and draft a brief elsewhere",
      ],
      prerequisites: [
        "An account at https://www.perplexity.ai (the free plan is enough to try the basic flow)",
        "At least one round of the perplexity-investigacion-con-fuentes tutorial",
        "A real topic you will revisit over several days — not «best AI tools»",
        "18 minutes and a separate doc for the final brief",
      ],
      steps: [
        {
          title: "Decide whether the topic deserves a Collection",
          content:
            "Before you create anything, ask: will you run more than two queries on the same subject in the next week? For a one-off question, stay on a loose thread and open sources as in the previous tutorial. For a product brief, a new market, or a report that grows over several sessions, use a Collection. Write the scope in one line: topic, geography if it matters, and the work's deadline.",
          whatYouShouldSee:
            "A one-line scope in a notes app. A clear decision: Collection yes or loose thread.",
          tip: "One Collection per topic. «Generative AI» and «Q4 pricing» do not share a container.",
          imageDescription:
            "Notes app with a one-line scope and a fork: loose thread vs Collection.",
        },
        {
          title: "Create the Collection in Library",
          content:
            "In Perplexity, open Library in the sidebar (or Projects / Spaces, depending on your account). Click New collection, Create a Space, or + New project — the label changes, the job is the same: a persistent space for related threads. Use a concrete title: «Product LLM criteria 2025-2026», not «Research». If there is a description field, note what decision this material will support. If there is an Instructions or Custom instructions field, paste analyst rules: «Split fact, estimate and opinion. Ask for a date on each source. Do not write the final essay.»",
          whatYouShouldSee:
            "An empty Collection with a specific title. Instructions visible if your plan shows them.",
          warning:
            "Vague instructions («be professional») change nothing. Copy the tone from the sources tutorial: dates, exclusions, claim types.",
          imageDescription:
            "New Collection dialog with a concrete title and the instructions box filled in.",
        },
        {
          title: "Start the first thread inside the Collection",
          content:
            "Open the Collection and write the first question from there — not from the global home box if you can avoid it. Use the analyst formula: a narrow question, a year, exclusions. Example: «What criteria did product teams publish in 2025-2026 for choosing an LLM in Europe, and which trade-offs do they name? Exclude affiliate lists.» Ask for 5-7 dated sources before you ask for conclusions.",
          whatYouShouldSee:
            "A new thread listed inside the Collection, with numbered citations in the answer.",
          tip: "Rename the thread with a title you will understand in a week: «LLM criteria — round 1».",
          imageDescription:
            "Thread open inside the Collection with a dated question and citations in the answer.",
        },
        {
          title: "Save a thread you already had in History",
          content:
            "If you started outside the Collection, do not throw it away. Open the thread from Library or History, click the three-dot menu, and choose Add to collection, Add to Space, or Move to project (the label varies). Pick the Collection you created or make a new one from the dialog. The thread keeps its messages and citations; only its logical folder changes.",
          whatYouShouldSee:
            "A brief confirmation and the thread visible in the Collection list.",
          warning:
            "Do not save everything «just in case». An irrelevant thread clutters the map just like History.",
          imageDescription:
            "Three-dot menu with Add to collection and the destination dialog.",
        },
        {
          title: "Add a second query without mixing the topic",
          content:
            "Inside the same Collection, open a new thread (do not stretch the first one if the question is different). Second-round example: «Of those sources, which mention cost per token or latency as a decisive criterion?» or «What could you not verify in the previous round?» Each thread has a role. Avoid ten follow-ups in one chat that mix sub-questions.",
          whatYouShouldSee:
            "Two or three threads in the Collection, each with a title that describes its role.",
          proTip:
            "Three short, named threads beat a fifty-message monster when you return a week later.",
          imageDescription:
            "Collection list with several titled threads (round 1, gaps, cost).",
        },
        {
          title: "Return to the sources — the Collection does not open them for you",
          content:
            "Open the thread that matters most. Same as perplexity-investigacion-con-fuentes: pick two primary sources, note title, author and date in your external doc. The Collection brings you back to the thread with its citations; it does not replace reading the PDF or report. If a citation points at a recap, open the original or mark the gap.",
          whatYouShouldSee:
            "Two source tabs open next to the Collection in Perplexity and dated notes elsewhere.",
          warning:
            "Exporting or pasting Perplexity's paragraph into the final brief is still off limits. The Collection organizes; you verify.",
          imageDescription:
            "Thread inside the Collection with the sources panel and an external doc with title/author/date.",
        },
        {
          title: "Draft the brief elsewhere and leave the Collection as the index",
          content:
            "In your doc (Notion, Google Docs, whatever you use), write: thesis in one sentence, 4-6 bullets citing the sources you opened, a Gaps section, brief date. In the Collection, check that threads have clear titles — that is your index for the next session. If the deliverable needs formatting (email, one-pager), take the brief to ChatGPT or Claude; the facts are already dated in your notes.",
          whatYouShouldSee:
            "A one-page brief outside Perplexity and a Collection with readable threads as the map.",
          tip: "Dating the brief stops you treating this map as eternal a month from now.",
          imageDescription:
            "Doc with a brief (thesis, bullets, gaps) and Perplexity with the Collection as a thread index.",
        },
      ],
      realUseCases: [
        {
          title: "Market research across three sessions",
          body: "Round 1: criteria map. Round 2: gaps. Round 3: a new competitor. The Collection avoids re-explaining context each time.",
        },
        {
          title: "A weekly brief that gets updated",
          body: "One Collection per meeting topic. Each Monday a new thread with the date in the title; the brief comes from opened sources, not the chat.",
        },
        {
          title: "Onboarding to a technical topic",
          body: "Several threads with fixed instructions («explain like to a PM, cite papers with year»). The Collection is the course; the sources are the required reading.",
        },
      ],
      commonMistakes: [
        {
          title: "Using the Collection as a dump",
          body: "Saving every search with no title or criterion. In a month you will not know which thread mattered.",
        },
        {
          title: "Skipping sources because «it is already saved»",
          body: "Saving the thread verifies nothing. The deliverable still needs title, author and date from primary sources.",
        },
        {
          title: "Mixing topics in one Collection",
          body: "Pricing and regulation in the same place confuse instructions and threads. Split into two Collections.",
        },
        {
          title: "One endless thread",
          body: "Fifty follow-ups mix sub-questions. Short, named threads work better.",
        },
      ],
      conclusion:
        "Perplexity Collections organize threads on the same topic so you can return without losing the map. Sources still open elsewhere; the brief is written somewhere else. It is day two of the sources flow: same rigor, less friction between sessions.",
      nextSteps: [
        "Run perplexity-investigacion-con-fuentes again with a narrower question inside your Collection.",
        "If the final piece is long, edit it by section with claude-escritura-larga.",
        "For deliverable formatting, use chatgpt-primeros-pasos with your brief already dated.",
      ],
      takeaway:
        "One Collection per topic, named threads, sources opened elsewhere, a dated brief in another place. The Collection is the map — not the deliverable.",
    },
  },
};
