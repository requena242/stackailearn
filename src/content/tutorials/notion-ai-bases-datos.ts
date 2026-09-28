import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "notion-ai-bases-datos";

export const notionAiBasesDatos: Tutorial = {
  id: slug,
  slug,
  category: "productivity",
  level: "intermediate",
  estimatedTime: 15,
  publishedAt: "2026-09-28",
  lastUpdated: "2026-09-28",
  toolsUsed: ["notion-ai"],
  relatedTutorials: [
    "notion-ai-primer-flujo",
    "chatgpt-primeros-pasos",
    "claude-projects-primer-flujo",
    "perplexity-collections",
  ],
  tags: ["notion", "notion-ai", "base-de-datos", "autofill", "productividad"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Base de datos en Notion con columnas de IA rellenando resúmenes y etiquetas",
      caption: "La IA lee las filas que ya tienes; tú revisas antes de confiar.",
      hint: "Hero 1600×900: vista tabla de Notion con columnas de texto y una columna AI autofill generando un resumen corto en una fila.",
    },
    en: {
      alt: "Notion database with AI columns filling summaries and labels",
      caption: "AI reads the rows you already have; you review before you trust it.",
      hint: "Hero 1600×900: Notion table view with text columns and an AI autofill column generating a short summary on one row.",
    },
  }),
  copy: {
    es: {
      title: "Notion AI en bases de datos: autofill y resúmenes por fila (2026)",
      metaTitle: "Notion AI en bases de datos: propiedades IA y autofill",
      metaDescription:
        "Añade propiedades IA a una base que ya usas, define de qué columnas lee, rellena filas vacías y resume filas largas. Revisa antes de escalar el autofill.",
      excerpt:
        "Propiedades IA, autofill por fila y prompts en vistas filtradas. Para quien ya tiene una base de Notion y quiere que la IA complete o resuma sin salir del tablero.",
      intro:
        "Si ya tienes una base de datos en Notion — CRM, backlog, candidatos, contenidos — Notion AI puede trabajar fila a fila: propiedades con autofill, resúmenes cortos y prompts que respetan las columnas que eliges. No es el flujo de actas en una página suelta; es hacer que cada registro traiga contexto listo sin copiar filas a otro chat. Este recorrido dura unos 15 minutos sobre una base real con al menos cinco filas.",
      problem:
        "Muchos equipos pegan descripciones largas en una celda y nadie las lee, o rellenan campos a mano una fila cada vez. Abrir ChatGPT con un CSV es otro contexto que se desactualiza. Sin reglas, el autofill inventa etiquetas o resume cosas que no están en las columnas fuente.",
      whatYouWillLearn: [
        "Elegir una base existente y columnas fuente claras",
        "Crear una propiedad IA con instrucciones acotadas",
        "Limitar qué columnas puede leer el autofill",
        "Probar una fila y corregir antes de llenar en lote",
        "Añadir un resumen por fila para vistas densas",
        "Usar una vista filtrada como contexto de trabajo",
        "Escalar el relleno con reglas de revisión",
      ],
      prerequisites: [
        "Un workspace de Notion con IA activa",
        "Una base de datos con varias filas reales (no solo la plantilla vacía)",
        "Columnas de texto o select con datos mínimos en cada fila",
        "Unos 15 minutos y permiso para editar el esquema de la base",
      ],
      steps: [
        {
          title: "Abre la base que ya usas, no una copia de demo",
          content:
            "Entra en la base donde el equipo trabaja cada semana — tabla o board. Identifica dos o tres columnas que ya tienen verdad operativa (descripción, estado, notas, enlace). Este flujo asume que la fila es la unidad de trabajo; la IA no arregla un esquema caótico.",
          whatYouShouldSee:
            "Vista tabla o board con filas reales y columnas con contenido mezclado pero legible.",
          warning:
            "Autofill sobre columnas vacías o nombres ambiguos produce etiquetas inventadas. Arregla nombres de propiedad antes de añadir IA.",
          imageDescription:
            "Base de Notion en vista tabla con varias filas y columnas de texto y select visibles.",
        },
        {
          title: "Añade una propiedad IA (autofill) con una instrucción corta",
          content:
            "En el encabezado de columna, añade una propiedad de tipo IA / Autofill. Escribe una instrucción concreta, por ejemplo: «En una frase, qué pide el cliente y cuál es el siguiente paso. Solo usa las columnas vinculadas. Si falta dato, escribe [FALTA].» Evita «analiza esta fila» sin criterio de salida.",
          whatYouShouldSee:
            "Nueva columna IA con el prompt guardado y celdas vacías o con icono de generar en la primera fila.",
          tip: "Una sola tarea por columna IA: resumen, etiqueta o extracción. Dos tareas en un prompt se mezclan.",
          imageDescription:
            "Diálogo de configuración de propiedad IA en Notion con prompt corto y formato de salida definido.",
        },
        {
          title: "Elige qué columnas puede leer la IA",
          content:
            "En la configuración de la propiedad IA, selecciona solo las columnas fuente necesarias — descripción, notas internas, URL, estado. No marques todo el esquema: cada columna extra es ruido o PII que no quieres en el resumen. Si hay adjuntos críticos, menciónalos en una columna de texto primero.",
          whatYouShouldSee:
            "Lista de propiedades fuente marcadas (tres a cinco columnas típicamente), no la base entera.",
          warning:
            "Si incluyes columnas con datos personales que no deben resumirse, el autofill los arrastrará al texto generado.",
          imageDescription:
            "Panel de propiedad IA con checkboxes de columnas fuente seleccionadas.",
        },
        {
          title: "Genera una fila piloto y compárala con las fuentes",
          content:
            "En una fila representativa, ejecuta autofill en la celda IA. Lee el resultado junto a las columnas fuente. Si inventa un siguiente paso o una etiqueta que no está en los datos, borra la celda, afina el prompt o añade [FALTA] como regla. No pases a lote hasta que una fila piloto sea honesta.",
          whatYouShouldSee:
            "Una celda IA con texto corto alineado con las fuentes, o [FALTA] donde realmente no hay dato.",
          tip: "Si el tono es marketing y tus notas son técnicas, añade al prompt: «tono interno, sin hype».",
          imageDescription:
            "Fila de tabla con columnas fuente a la izquierda y celda IA generada a la derecha, resaltada para comparar.",
        },
        {
          title: "Crea una segunda columna IA para resumen de fila",
          content:
            "Añade otra propiedad IA, por ejemplo «Resumen (1 línea)», que lea las mismas fuentes o la columna larga principal. Prompt tipo: «Máximo 20 palabras. Hecho + bloqueo. Sin adjetivos vacíos.» Sirve para boards y vistas donde nadie abre la descripción completa.",
          whatYouShouldSee:
            "Dos columnas IA complementarias: una operativa (siguiente paso) y otra de escaneo rápido (una línea).",
          proTip:
            "En vistas de equipo, oculta la descripción larga y deja solo el resumen IA tras revisar.",
          imageDescription:
            "Vista tabla con columna de descripción larga oculta y columna de resumen IA visible en cada fila.",
        },
        {
          title: "Trabaja desde una vista filtrada con el mismo prompt",
          content:
            "Duplica la vista o crea una filtrada — por ejemplo «Estado = En revisión» o «Sin resumen». Desde esa vista, rellena filas IA una a una o con autofill en selección. El filtro no cambia el prompt, pero concentra el trabajo: solo las filas que hoy importan. Anota en la descripción de la vista qué columna IA debe revisarse cada semana.",
          whatYouShouldSee:
            "Vista con filtro activo, subconjunto de filas y columnas IA listas para generar sin scroll infinito.",
          warning:
            "Autofill en cien filas sin revisar es cómo los CRM se llenan de resúmenes incorrectos. Usa la vista para lotes pequeños.",
          imageDescription:
            "Barra de vista de Notion con filtro aplicado y varias filas seleccionadas para autofill.",
        },
        {
          title: "Rellena el lote vacío y marca lo revisado",
          content:
            "Filtra filas donde la columna IA esté vacía y el estado no sea «Archivado». Ejecuta autofill en el lote pequeño (5–15 filas). Recorre cada resultado: borra, edita manualmente o deja. Añade un checkbox «IA revisada» o mueve estado a «Listo» solo tras tu pasada. La IA propone; tú certificas.",
          whatYouShouldSee:
            "Mayoría de celdas IA con texto; checkbox o estado actualizado en las filas validadas.",
          tip: "Si una fila falla dos veces, déjala sin IA y arregla las columnas fuente primero.",
          imageDescription:
            "Varias filas con autofill completado y columna checkbox «IA revisada» marcada en algunas.",
        },
        {
          title: "Congela el esquema y documenta el prompt en la base",
          content:
            "Cuando el prompt funciona, pega la instrucción final en la descripción de la base o en una página vinculada «Cómo leer las columnas IA». Bloquea edición del esquema si tu plan lo permite, o acuerda en el equipo no cambiar prompts sin aviso. Las nuevas filas deben seguir el mismo ritual: fuentes primero, autofill después, revisión humana.",
          whatYouShouldSee:
            "Descripción de la base o página wiki con el texto del prompt y qué columnas son fuente de verdad.",
          warning:
            "Cambiar nombres de columnas fuente rompe el autofill silenciosamente. Renombra con cuidado y prueba una fila.",
          imageDescription:
            "Página de documentación en Notion enlazada desde la base con el prompt IA copiado y lista de columnas fuente.",
        },
      ],
      realUseCases: [
        {
          title: "Pipeline de ventas",
          body: "Columnas de notas de llamada y etapa. IA saca siguiente paso y resumen de una línea. Revisión semanal en vista «Sin IA revisada».",
        },
        {
          title: "Backlog de contenido",
          body: "Brief largo en una celda. IA genera titular interno y riesgo legal [FALTA] si no hay fuente. Board muestra solo el resumen.",
        },
        {
          title: "Hiring",
          body: "Notas de entrevista en texto. IA extrae fortalezas y dudas sin puntuar al candidato. Checkbox de revisión antes de compartir con el panel.",
        },
      ],
      commonMistakes: [
        {
          title: "Demasiadas columnas fuente",
          body: "La IA mezcla contextos y resume columnas que no deberían verse juntas. Reduce fuentes al mínimo.",
        },
        {
          title: "Autofill masivo sin fila piloto",
          body: "Cien filas incorrectas tardan más que rellenar diez a mano. Siempre una fila de prueba.",
        },
        {
          title: "Dos tareas en un solo prompt",
          body: "Resumen + clasificación + sentimiento en una celda sale inconsistente. Divide en propiedades IA.",
        },
        {
          title: "Tratar la celda IA como verdad",
          body: "Es borrador hasta que alguien marca revisado. Las columnas humanas siguen mandando.",
        },
      ],
      conclusion:
        "Notion AI en bases de datos vale cuando el esquema ya tiene sentido y las filas traen datos mínimos. Propiedades IA acotadas, fuentes explícitas y revisión por lotes pequeños convierten tablas ilegibles en vistas escaneables — sin exportar a otro chat. Si la base es un vertedero, ordena columnas y estados antes de acelerar con autofill.",
      nextSteps: [
        "Para actas y páginas sueltas, sigue el flujo de Notion AI sobre la página de reunión.",
        "Si el texto generado sale a clientes, pásalo por el método de briefing en Claude Projects.",
        "Para investigación con fuentes externas, usa Perplexity y vuelca solo hechos confirmados a las columnas fuente.",
      ],
      takeaway:
        "Fuentes claras + propiedad IA con una tarea + fila piloto + vista filtrada + revisión humana. La base sigue siendo la fuente de verdad.",
    },
    en: {
      title: "Notion AI in databases: autofill and per-row summaries (2026)",
      metaTitle: "Notion AI in databases: AI properties and autofill",
      metaDescription:
        "Add AI properties to a base you already use, choose which columns it reads, fill empty rows and summarize long ones. Review before you scale autofill.",
      excerpt:
        "AI properties, per-row autofill and prompts in filtered views. For anyone who already has a Notion database and wants AI to fill or summarize without leaving the board.",
      intro:
        "If you already run a Notion database — CRM, backlog, candidates, content — Notion AI can work row by row: autofill properties, short summaries and prompts that respect the columns you pick. This is not the meeting-notes flow on a standalone page; it is making each record carry ready context without copying rows into another chat. This walkthrough takes about 15 minutes on a real base with at least five rows.",
      problem:
        "Teams paste long descriptions into one cell and nobody reads them, or they fill fields manually one row at a time. Opening ChatGPT with a CSV is another context that goes stale. Without rules, autofill invents labels or summarizes facts that are not in the source columns.",
      whatYouWillLearn: [
        "Pick an existing base and clear source columns",
        "Create an AI property with a tight instruction",
        "Limit which columns autofill can read",
        "Test one row and fix before batch fill",
        "Add a per-row summary for dense views",
        "Use a filtered view as your working context",
        "Scale fill with a review ritual",
      ],
      prerequisites: [
        "A Notion workspace with AI enabled",
        "A database with several real rows (not an empty template)",
        "Text or select columns with minimal data in each row",
        "About 15 minutes and permission to edit the base schema",
      ],
      steps: [
        {
          title: "Open the base you already use, not a demo copy",
          content:
            "Go to the base the team uses every week — table or board. Spot two or three columns that already hold operational truth (description, status, notes, link). This flow assumes the row is the unit of work; AI does not fix a chaotic schema.",
          whatYouShouldSee:
            "Table or board view with real rows and columns with mixed but readable content.",
          warning:
            "Autofill on empty or ambiguous columns produces invented labels. Fix property names before you add AI.",
          imageDescription:
            "Notion base in table view with several rows and visible text and select columns.",
        },
        {
          title: "Add an AI (autofill) property with a short instruction",
          content:
            "From the column header, add an AI / Autofill property. Write a concrete instruction, for example: «In one sentence, what the client wants and the next step. Only use linked columns. If data is missing, write [MISSING].» Avoid «analyze this row» with no output shape.",
          whatYouShouldSee:
            "A new AI column with the prompt saved and empty cells or a generate control on the first row.",
          tip: "One job per AI column: summary, label or extraction. Two jobs in one prompt get muddled.",
          imageDescription:
            "Notion AI property setup dialog with a short prompt and defined output format.",
        },
        {
          title: "Choose which columns the AI may read",
          content:
            "In the AI property settings, select only the source columns you need — description, internal notes, URL, status. Do not tick the whole schema: every extra column is noise or PII you do not want in the summary. If attachments matter, reference them in a text column first.",
          whatYouShouldSee:
            "A list of checked source properties (typically three to five), not the entire base.",
          warning:
            "If you include columns with personal data that should not be summarized, autofill will pull them into generated text.",
          imageDescription:
            "AI property panel with source column checkboxes selected.",
        },
        {
          title: "Generate a pilot row and compare it to sources",
          content:
            "On one representative row, run autofill in the AI cell. Read the output next to the source columns. If it invents a next step or a label that is not in the data, clear the cell, tighten the prompt or enforce [MISSING]. Do not batch until one pilot row is honest.",
          whatYouShouldSee:
            "One AI cell with short text aligned with sources, or [MISSING] where data truly is absent.",
          tip: "If the tone turns marketing and your notes are technical, add to the prompt: «internal tone, no hype».",
          imageDescription:
            "Table row with source columns on the left and generated AI cell on the right, highlighted for comparison.",
        },
        {
          title: "Add a second AI column for row summary",
          content:
            "Add another AI property, e.g. «Summary (1 line)», reading the same sources or the main long column. Prompt example: «Max 20 words. Fact + blocker. No empty adjectives.» Useful for boards and views where nobody opens the full description.",
          whatYouShouldSee:
            "Two complementary AI columns: one operational (next step) and one for quick scanning (one line).",
          proTip:
            "In team views, hide the long description and show only the reviewed AI summary.",
          imageDescription:
            "Table view with long description column hidden and AI summary column visible on each row.",
        },
        {
          title: "Work from a filtered view with the same prompt",
          content:
            "Duplicate the view or create a filtered one — e.g. «Status = In review» or «Summary empty». From that view, fill AI cells one by one or on a selection. The filter does not change the prompt, but it focuses work: only the rows that matter today. Note in the view description which AI column gets reviewed each week.",
          whatYouShouldSee:
            "A view with an active filter, a subset of rows and AI columns ready to generate without endless scroll.",
          warning:
            "Autofill on a hundred rows without review is how CRMs fill with wrong summaries. Use the view for small batches.",
          imageDescription:
            "Notion view bar with filter applied and several rows selected for autofill.",
        },
        {
          title: "Fill the empty batch and mark what you reviewed",
          content:
            "Filter rows where the AI column is empty and status is not «Archived». Run autofill on a small batch (5–15 rows). Walk each result: clear, edit manually or keep. Add an «AI reviewed» checkbox or move status to «Ready» only after your pass. AI proposes; you certify.",
          whatYouShouldSee:
            "Most AI cells filled; checkbox or status updated on validated rows.",
          tip: "If a row fails twice, leave it without AI and fix the source columns first.",
          imageDescription:
            "Several rows with autofill complete and «AI reviewed» checkbox checked on some.",
        },
        {
          title: "Freeze the schema and document the prompt on the base",
          content:
            "When the prompt works, paste the final instruction in the base description or a linked «How to read AI columns» page. Lock schema editing if your plan allows, or agree not to change prompts without notice. New rows should follow the same ritual: sources first, autofill second, human review.",
          whatYouShouldSee:
            "Base description or wiki page with the prompt text and which columns are source of truth.",
          warning:
            "Renaming source columns breaks autofill quietly. Rename carefully and test one row.",
          imageDescription:
            "Notion documentation page linked from the base with the AI prompt copied and a list of source columns.",
        },
      ],
      realUseCases: [
        {
          title: "Sales pipeline",
          body: "Call notes and stage columns. AI outputs next step and one-line summary. Weekly review in a «AI not reviewed» view.",
        },
        {
          title: "Content backlog",
          body: "Long brief in one cell. AI drafts internal headline and flags [MISSING] when there is no source. Board shows only the summary.",
        },
        {
          title: "Hiring",
          body: "Interview notes in text. AI extracts strengths and open questions without scoring the candidate. Review checkbox before sharing with the panel.",
        },
      ],
      commonMistakes: [
        {
          title: "Too many source columns",
          body: "AI blends contexts and summarizes columns that should not be read together. Minimize sources.",
        },
        {
          title: "Mass autofill without a pilot row",
          body: "A hundred wrong rows take longer than filling ten by hand. Always test one row.",
        },
        {
          title: "Two jobs in one prompt",
          body: "Summary + classification + sentiment in one cell comes out inconsistent. Split into AI properties.",
        },
        {
          title: "Treating the AI cell as truth",
          body: "It is draft until someone marks it reviewed. Human columns still win.",
        },
      ],
      conclusion:
        "Notion AI in databases pays off when the schema already makes sense and rows carry minimal data. Tight AI properties, explicit sources and small-batch review turn unreadable tables into scannable views — without exporting to another chat. If the base is a junk drawer, tidy columns and statuses before you speed up with autofill.",
      nextSteps: [
        "For meeting notes on standalone pages, follow the Notion AI meeting-page flow.",
        "If generated text goes to clients, run it through the Claude Projects briefing method.",
        "For external source research, use Perplexity and paste only confirmed facts into source columns.",
      ],
      takeaway:
        "Clear sources + one-job AI property + pilot row + filtered view + human review. The database stays the source of truth.",
    },
  },
};
