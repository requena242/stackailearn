import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "notebooklm-primer-briefing";

export const notebooklmPrimerBriefing: Tutorial = {
  id: slug,
  slug,
  category: "research",
  level: "beginner",
  estimatedTime: 18,
  publishedAt: "2026-10-02",
  lastUpdated: "2026-10-02",
  toolsUsed: ["notebooklm"],
  relatedTutorials: [
    "perplexity-investigacion-con-fuentes",
    "chatgpt-primeros-pasos",
    "notion-ai-primer-flujo",
    "elegir-modelo-texto",
  ],
  tags: ["notebooklm", "briefing", "fuentes", "google", "tutorial"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Cuaderno de NotebookLM con fuentes, chat con citas y briefing en Studio",
      caption: "El entregable útil es el briefing revisado, no el primer párrafo del chat.",
      hint:
        "Hero 1600×900: panel de fuentes con 4 ítems, chat con pregunta de briefing y Studio con documento tipo Briefing abierto.",
    },
    en: {
      alt: "NotebookLM notebook with sources, cited chat and a briefing in Studio",
      caption: "The useful deliverable is the reviewed briefing, not the chat’s first paragraph.",
      hint:
        "Hero 1600×900: sources panel with 4 items, chat with a briefing question and Studio with a Briefing-style document open.",
    },
  }),
  copy: {
    es: {
      title: "NotebookLM: tu primer briefing útil con tus fuentes (2026)",
      metaTitle: "NotebookLM: primer briefing con fuentes y citas",
      metaDescription:
        "Crea un cuaderno, sube 3–5 fuentes, pregunta con audiencia y fecha, valida citas y genera un briefing en Studio. Exporta y escribe el entregable fuera.",
      excerpt:
        "Cuaderno, fuentes reales, preguntas con citas y un documento de briefing en Studio — sin tratar el chat como informe final.",
      intro:
        "NotebookLM no busca en toda la web: trabaja solo con lo que añades. En unos 18 minutos montas un cuaderno de un proyecto, haces preguntas con citas, generas un briefing en Studio y sacas los takeaways a un doc donde redactas de verdad. Si necesitas mapa de internet abierto, el tutorial de Perplexity va primero; aquí el material ya es tuyo.",
      problem:
        "Subir diez PDFs al azar y copiar el primer resumen del chat produce un informe que nadie puede auditar. Sin citas abiertas, audiencia clara y un briefing regenerado con criterio, el cuaderno parece magia y falla en la reunión.",
      whatYouWillLearn: [
        "Crear un cuaderno con nombre de proyecto y fuentes acotadas",
        "Esperar la indexación y hacer preguntas de briefing con restricciones",
        "Validar afirmaciones abriendo citas en el pasaje fuente",
        "Generar un documento de briefing en Studio y mejorarlo si está fino",
        "Elegir un extra útil (Audio Overview o FAQ) sin probar todos los formatos",
        "Exportar takeaways y congelar qué falta antes de compartir",
      ],
      prerequisites: [
        "Cuenta de Google y acceso a notebooklm.google.com",
        "3–5 fuentes reales del mismo tema (PDF, Doc, URL o YouTube)",
        "Una audiencia y una fecha límite mental para el briefing",
        "Unos 18 minutos y un doc vacío fuera de NotebookLM para el borrador final",
      ],
      steps: [
        {
          title: "Abre NotebookLM y crea un cuaderno con nombre de proyecto",
          content:
            "Ve a notebooklm.google.com, inicia sesión con Google y pulsa New notebook (o equivalente). Pon un nombre que reconozcas en una semana — «Brief Q4 producto» o «Due diligence proveedor X». Un cuaderno por entregable evita mezclar fuentes de temas distintos.",
          whatYouShouldSee:
            "Cuaderno vacío con panel de fuentes a un lado y área de chat o resumen listo para el primer upload.",
          tip: "Si el proyecto dura semanas, no borres fuentes viejas sin anotar qué versión del briefing usaste.",
          imageDescription:
            "Pantalla inicial de NotebookLM con cuaderno nuevo y campo de nombre de proyecto visible.",
        },
        {
          title: "Añade 3–5 fuentes y espera a que indexen",
          content:
            "Sube PDFs, enlaza Google Docs/Drive, pega URLs o añade YouTube que realmente uses en el briefing. Calidad sobre cantidad: un informe oficial, dos docs internos y un vídeo de contexto suelen bastar. Espera hasta que cada fuente muestre estado listo (sin spinner eterno). Si una URL falla, sustitúyela por PDF o texto pegado.",
          whatYouShouldSee:
            "Lista de 3–5 fuentes con icono de tipo (PDF, web, vídeo) y sin errores de carga persistentes.",
          warning:
            "Diez fuentes duplicadas o irrelevantes diluyen las citas. Mejor cinco buenas que quince ruidosas.",
          imageDescription:
            "Panel de fuentes con cuatro entradas indexadas y una en proceso de carga.",
        },
        {
          title: "Lee el resumen automático y lanza una pregunta de briefing acotada",
          content:
            "Revisa el resumen que NotebookLM suele mostrar al indexar. Luego en el chat pregunta con restricciones: «Briefing para [audiencia] con fecha [hoy]. 5 viñetas: hechos citados, riesgos, decisiones pendientes y huecos. Solo usa las fuentes del cuaderno.» Ajusta tono (ejecutivo, técnico) en la misma pregunta.",
          whatYouShouldSee:
            "Respuesta con viñetas o párrafos cortos y números de cita junto a afirmaciones concretas.",
          tip: "Si la respuesta es genérica, reduce audiencia o pide «qué NO está en las fuentes».",
          imageDescription:
            "Chat de NotebookLM con pregunta larga de briefing y respuesta con citas numeradas.",
        },
        {
          title: "Abre citas y descarta lo que no aguanta en el pasaje",
          content:
            "Haz clic en dos o tres citas que sostengan las viñetas más importantes. Lee el párrafo o el tramo de vídeo. Si el modelo extrapoló, borra mentalmente esa viñeta o pide reformulación citando solo ese documento. Anota en un doc externo: título de fuente, fecha y cita válida.",
          whatYouShouldSee:
            "Panel o modal con el pasaje resaltado en el PDF, Doc o transcripción de vídeo.",
          warning:
            "Una cita que solo repite el título del PDF no prueba el dato. Abre el cuerpo del texto.",
          imageDescription:
            "Vista de cita abierta con texto fuente resaltado al lado del chat.",
        },
        {
          title: "Studio → documento de briefing (o informe Briefing)",
          content:
            "En Studio (o Reports, según la UI), elige el tipo Briefing / Briefing document. Genera una vez. Si el resultado es fino o repite frases vacías, regenera con instrucción extra en el chat («más riesgos y menos marketing») y vuelve a Studio, o edita el outline antes de exportar. Un briefing bueno tiene secciones reconocibles: contexto, hallazgos, huecos, próximos pasos.",
          whatYouShouldSee:
            "Documento largo en Studio con secciones y referencias a fuentes, no solo un párrafo suelto.",
          proTip:
            "Guarda captura o export del briefing con fecha en el nombre del archivo externo.",
          imageDescription:
            "Panel Studio con tipo Briefing seleccionado y vista previa del documento generado.",
        },
        {
          title: "Opcional: Audio Overview o FAQ — uno, no todos los formatos",
          content:
            "Si repasarás en el transporte, genera Audio Overview una vez y escucha si menciona tus fuentes con sentido. Si el equipo hará preguntas frecuentes, genera FAQ en Studio. No generes mapa mental, guía de estudio y notas el mismo día: elige el formato que destraba tu siguiente paso.",
          whatYouShouldSee:
            "Reproductor de audio o lista de preguntas-respuestas ancladas al cuaderno.",
          tip: "El audio ayuda a detectar huecos; no sustituye verificar cifras en el PDF.",
          imageDescription:
            "Tarjeta de Audio Overview en Studio con botón de reproducción visible.",
        },
        {
          title: "Exporta a Docs o copia takeaways y escribe fuera",
          content:
            "Usa exportar a Google Docs, copiar secciones o pegar viñetas validadas en tu plantilla de informe. Redacta el tono final, nombres propios y recomendaciones en ese doc — ChatGPT o Claude pueden ayudar con formato si ya pegas hechos citados, no el chat crudo de NotebookLM.",
          whatYouShouldSee:
            "Google Doc o nota con secciones tuyas y enlaces o notas de fuente, no un volcado sin revisar.",
          warning:
            "No envíes el Studio export como «informe final» sin pasar por tu lista de huecos.",
          imageDescription:
            "Google Doc con encabezados de briefing y viñetas copiadas desde NotebookLM.",
        },
        {
          title: "Congela fuentes y anota qué falta antes de compartir",
          content:
            "Lista qué fuentes entraron (versión y fecha). Escribe explícitamente qué no cubren — otro mercado, datos posteriores, opinión sin respaldo. Si alguien pide «actualizar el briefing», sabrás si hace falta una fuente nueva o solo reescribir. Archiva el cuaderno o deja de añadir PDFs hasta el siguiente ciclo.",
          whatYouShouldSee:
            "Nota final con tabla Fuente / Fecha / Qué aporta y sección Huecos sin rellenar con invento.",
          proTip:
            "Si compartes el cuaderno, revisa permisos de Drive: una fuente privada puede romper el acceso del equipo.",
          imageDescription:
            "Checklist en doc externo con fuentes congeladas y huecos marcados en rojo o etiqueta [FALTA].",
        },
      ],
      realUseCases: [
        {
          title: "Brief de reunión con docs internos",
          body: "Tres PDFs de producto y un Doc de acta. Citas abiertas y briefing de una página para dirección.",
        },
        {
          title: "Onboarding en un tema técnico",
          body: "Dos papers y un vídeo. FAQ en Studio para preguntas repetidas del equipo nuevo.",
        },
        {
          title: "Repaso antes de una demo",
          body: "Audio Overview en el trayecto; cifras delicadas comprobadas en el PDF al llegar.",
        },
      ],
      commonMistakes: [
        {
          title: "Usar NotebookLM como buscador web",
          body: "Sin fuentes subidas no hay terreno. Para internet abierto, Perplexity primero.",
        },
        {
          title: "Copiar el chat sin abrir citas",
          body: "El briefing auditable son los pasajes que leíste, no el primer resumen.",
        },
        {
          title: "Mezclar proyectos en un cuaderno",
          body: "Las citas se contaminan. Un cuaderno por entregable o por cliente.",
        },
      ],
      conclusion:
        "NotebookLM brilla cuando el corpus es tuyo: fuentes acotadas, preguntas con audiencia, citas comprobadas y un briefing en Studio que exportas y terminas fuera. Congela qué falta antes de presentar.",
      nextSteps: [
        "Combina con Perplexity cuando necesites fuentes externas que aún no tienes en PDF.",
        "Pasa el borrador final por el flujo de ChatGPT con lista OK/INVENTADO.",
        "Si el equipo vive en Notion, enlaza el doc final en el tutorial de Notion AI.",
      ],
      takeaway:
        "Cuaderno acotado, citas abiertas, briefing en Studio, entregable escrito fuera — y huecos por escrito.",
    },
    en: {
      title: "NotebookLM: your first useful briefing from your sources (2026)",
      metaTitle: "NotebookLM: first briefing with sources and citations",
      metaDescription:
        "Create a notebook, add 3–5 sources, ask with audience and date, validate citations and generate a briefing in Studio. Export and write the deliverable elsewhere.",
      excerpt:
        "Notebook, real sources, cited questions and a briefing document in Studio — without treating chat as the final report.",
      intro:
        "NotebookLM does not search the whole web: it only works on what you add. In about 18 minutes you set up a project notebook, ask cited questions, generate a briefing in Studio and move takeaways to a doc where you actually write. If you need an open-internet map first, use the Perplexity tutorial; here the material is already yours.",
      problem:
        "Uploading ten random PDFs and copying the chat’s first summary gives a report nobody can audit. Without opened citations, a clear audience and a briefing regenerated with judgment, the notebook feels like magic and fails in the meeting.",
      whatYouWillLearn: [
        "Create a notebook named for the project with bounded sources",
        "Wait for indexing and ask briefing questions with constraints",
        "Validate claims by opening citations in the source passage",
        "Generate a briefing document in Studio and improve it if it is thin",
        "Pick one useful extra (Audio Overview or FAQ) without trying every format",
        "Export takeaways and freeze what is missing before sharing",
      ],
      prerequisites: [
        "A Google account and access to notebooklm.google.com",
        "3–5 real sources on the same topic (PDF, Doc, URL or YouTube)",
        "An audience and a mental deadline for the briefing",
        "About 18 minutes and an empty doc outside NotebookLM for the final draft",
      ],
      steps: [
        {
          title: "Open NotebookLM and create a notebook named for the project",
          content:
            "Go to notebooklm.google.com, sign in with Google and click New notebook (or equivalent). Name it so you will recognize it in a week — «Q4 product brief» or «Vendor X diligence». One notebook per deliverable stops you mixing unrelated sources.",
          whatYouShouldSee:
            "An empty notebook with a sources panel and chat or summary area ready for the first upload.",
          tip: "If the project runs for weeks, do not delete old sources without noting which briefing version you used.",
          imageDescription:
            "NotebookLM home with a new notebook and the project name field visible.",
        },
        {
          title: "Add 3–5 sources and wait until they index",
          content:
            "Upload PDFs, link Google Docs/Drive, paste URLs or add YouTube you will actually use in the briefing. Quality over quantity: one official report, two internal docs and a context video are often enough. Wait until each source shows ready (no endless spinner). If a URL fails, swap it for a PDF or pasted text.",
          whatYouShouldSee:
            "A list of 3–5 sources with type icons (PDF, web, video) and no persistent load errors.",
          warning:
            "Ten duplicate or irrelevant sources dilute citations. Five good beats fifteen noisy.",
          imageDescription:
            "Sources panel with four indexed entries and one still processing.",
        },
        {
          title: "Skim the auto summary and ask a bounded briefing question",
          content:
            "Read the summary NotebookLM often shows after indexing. Then in chat ask with constraints: «Briefing for [audience] dated [today]. 5 bullets: cited facts, risks, open decisions and gaps. Use only notebook sources.» Set tone (executive, technical) in the same question.",
          whatYouShouldSee:
            "An answer with short bullets or paragraphs and citation numbers on concrete claims.",
          tip: "If the answer feels generic, narrow the audience or ask «what is NOT in the sources».",
          imageDescription:
            "NotebookLM chat with a long briefing question and a cited answer.",
        },
        {
          title: "Open citations and drop what does not hold in the passage",
          content:
            "Click two or three citations that support the most important bullets. Read the paragraph or video segment. If the model extrapolated, mentally drop that bullet or ask for a rewrite citing only that document. Note in an external doc: source title, date and valid quote.",
          whatYouShouldSee:
            "A panel or modal with the passage highlighted in the PDF, Doc or video transcript.",
          warning:
            "A citation that only repeats the PDF title does not prove the figure. Open the body text.",
          imageDescription:
            "Opened citation view with source text highlighted next to chat.",
        },
        {
          title: "Studio → briefing document (or Briefing report type)",
          content:
            "In Studio (or Reports, depending on UI), pick Briefing / Briefing document. Generate once. If the result is thin or full of empty phrases, regenerate after a chat instruction («more risks, less marketing») and return to Studio, or edit the outline before export. A solid briefing has recognizable sections: context, findings, gaps, next steps.",
          whatYouShouldSee:
            "A longer Studio document with sections and source references, not a single loose paragraph.",
          proTip:
            "Save a screenshot or export of the briefing with today’s date in the external filename.",
          imageDescription:
            "Studio panel with Briefing type selected and generated document preview.",
        },
        {
          title: "Optional: Audio Overview or FAQ — one, not every format",
          content:
            "If you will review on a commute, generate Audio Overview once and listen for sensible mentions of your sources. If the team will ask repeat questions, generate FAQ in Studio. Do not spawn mind map, study guide and notes the same day: pick the format that unlocks your next step.",
          whatYouShouldSee:
            "An audio player or Q&A list anchored to the notebook.",
          tip: "Audio helps spot gaps; it does not replace checking figures in the PDF.",
          imageDescription:
            "Audio Overview card in Studio with play button visible.",
        },
        {
          title: "Export to Docs or copy takeaways and write outside",
          content:
            "Use export to Google Docs, copy sections or paste validated bullets into your report template. Write final tone, names and recommendations in that doc — ChatGPT or Claude can help with format if you paste cited facts, not raw NotebookLM chat.",
          whatYouShouldSee:
            "A Google Doc or note with your sections and source links or notes, not an unreviewed dump.",
          warning:
            "Do not send the Studio export as the «final report» without running your gaps list.",
          imageDescription:
            "Google Doc with briefing headings and bullets copied from NotebookLM.",
        },
        {
          title: "Freeze sources and note what is missing before sharing",
          content:
            "List which sources entered (version and date). State explicitly what they do not cover — another market, newer data, unsupported opinion. If someone asks to «refresh the briefing», you will know whether you need a new source or just a rewrite. Archive the notebook or stop adding PDFs until the next cycle.",
          whatYouShouldSee:
            "A final note with Source / Date / What it adds and a Gaps section not filled with invention.",
          proTip:
            "If you share the notebook, check Drive permissions: a private source can break team access.",
          imageDescription:
            "External checklist with frozen sources and gaps marked [MISSING].",
        },
      ],
      realUseCases: [
        {
          title: "Meeting brief from internal docs",
          body: "Three product PDFs and a meeting Doc. Opened citations and a one-page brief for leadership.",
        },
        {
          title: "Onboarding on a technical topic",
          body: "Two papers and a video. Studio FAQ for repeat questions from new teammates.",
        },
        {
          title: "Pre-demo review",
          body: "Audio Overview on the commute; sensitive figures checked in the PDF when you arrive.",
        },
      ],
      commonMistakes: [
        {
          title: "Using NotebookLM as a web search engine",
          body: "With no uploaded sources there is no ground. For open internet, Perplexity first.",
        },
        {
          title: "Copying chat without opening citations",
          body: "The auditable briefing is the passages you read, not the first summary.",
        },
        {
          title: "Mixing projects in one notebook",
          body: "Citations get contaminated. One notebook per deliverable or client.",
        },
      ],
      conclusion:
        "NotebookLM shines when the corpus is yours: bounded sources, audience-aware questions, checked citations and a Studio briefing you export and finish outside. Freeze what is missing before you present.",
      nextSteps: [
        "Pair with Perplexity when you need external sources you do not yet have as PDFs.",
        "Run the final draft through ChatGPT with an OK/MADE-UP list.",
        "If the team lives in Notion, link the final doc using the Notion AI tutorial.",
      ],
      takeaway:
        "Bounded notebook, opened citations, Studio briefing, deliverable written outside — and gaps in writing.",
    },
  },
};
