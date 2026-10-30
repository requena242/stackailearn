import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "claude-analizar-pdf";

export const claudeAnalizarPdf: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "beginner",
  estimatedTime: 20,
  publishedAt: "2026-10-30",
  lastUpdated: "2026-10-30",
  toolsUsed: ["claude", "perplexity"],
  relatedTutorials: [
    "claude-briefing-documento",
    "claude-projects-primer-flujo",
    "claude-escritura-larga",
    "perplexity-investigacion-con-fuentes",
  ],
  tags: ["claude", "pdf", "documento-largo", "resumen", "citas"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Claude con un PDF largo adjunto y un mapa del documento con páginas citadas",
      caption: "Primero el mapa del PDF. Después las preguntas, cada una con su página.",
      hint: "Hero: Claude con un PDF adjunto a la izquierda y a la derecha una respuesta en tabla: sección, páginas, idea clave.",
    },
    en: {
      alt: "Claude with a long PDF attached and a document map with cited pages",
      caption: "Map the PDF first. Then ask questions, each one tied to a page.",
      hint: "Hero: Claude with a PDF attached on the left and a table reply on the right: section, pages, key idea.",
    },
  }),
  copy: {
    es: {
      title: "Cómo analizar un PDF largo con Claude (2026)",
      metaTitle: "Analizar un PDF largo con Claude paso a paso en 2026",
      metaDescription:
        "Sube un PDF largo a Claude, pide un mapa por secciones, haz preguntas con página citada, extrae tablas y verifica cada cifra contra el original.",
      excerpt:
        "No pidas «resúmeme este PDF». Pide un mapa con páginas, pregunta por partes y comprueba cada cifra en el documento.",
      intro:
        "Un informe anual, un contrato o un estudio de 80 páginas no se lee en una pausa de café. Claude puede leerlo contigo, pero un «resúmeme esto» devuelve un texto fluido que mezcla lo importante con lo accesorio y no te dice de dónde sale cada idea. Este flujo de 20 minutos convierte el PDF en un mapa con páginas, respuestas citadas y una lista de cifras que puedes comprobar.",
      problem:
        "Con un PDF largo, el resumen genérico pierde matices, omite excepciones y a veces atribuye al documento cosas que no dice. Si no sabes en qué página está cada afirmación, no puedes usar el análisis en un correo, una reunión o una decisión.",
      whatYouWillLearn: [
        "Preparar el PDF y la pregunta antes de subirlo",
        "Pedir un mapa del documento por secciones y páginas",
        "Hacer preguntas concretas con cita de página obligatoria",
        "Extraer tablas y cifras a un formato reutilizable",
        "Detectar lo que el PDF no dice y marcarlo",
        "Verificar contra el original antes de usar nada",
      ],
      prerequisites: [
        "Cuenta en claude.ai",
        "Un PDF real con texto seleccionable (informe, contrato, estudio o manual)",
        "Una pregunta de trabajo: qué necesitas decidir o explicar con ese documento",
        "20 minutos",
      ],
      steps: [
        {
          title: "Prepara el PDF y tu pregunta de trabajo",
          content:
            "Abre el PDF y comprueba que puedes seleccionar texto: si es un escaneo de imágenes, la lectura será peor y conviene pasarlo antes por OCR. Mira si el archivo cabe en los límites que muestra claude.ai al adjuntar; si es enorme, divídelo por capítulos. Después escribe en una línea para qué lo lees: «Necesito saber qué obligaciones tiene el proveedor y en qué plazos» es una pregunta; «entender el contrato» no lo es.",
          whatYouShouldSee:
            "Un PDF con texto seleccionable (o dividido en partes) y una pregunta de trabajo escrita en una frase.",
          tip: "Si el PDF tiene anexos que no te importan, quítalos antes: menos ruido, respuestas más precisas.",
          imageDescription:
            "PDF abierto con una línea de texto seleccionada y, al lado, una nota con la pregunta de trabajo.",
        },
        {
          title: "Sube el PDF y pide un mapa, no un resumen",
          content:
            "Entra en https://claude.ai, abre un chat nuevo y adjunta el PDF. Primer mensaje: «Antes de resumir nada, dame un mapa de este documento en tabla: sección, páginas, idea principal en una frase. No interpretes todavía.» Si el documento va a usarse varios días, créalo dentro de un proyecto de Claude Projects para no volver a subirlo.",
          whatYouShouldSee:
            "Una tabla con las secciones del PDF, su rango de páginas y una frase por sección.",
          warning:
            "«Resúmeme este PDF» en el primer mensaje te da una versión plana donde no sabes qué se ha quedado fuera.",
          imageDescription:
            "Chat de Claude con un PDF adjunto y una respuesta en tabla: Sección, Páginas, Idea principal.",
        },
        {
          title: "Comprueba el mapa contra el índice real",
          content:
            "Abre el índice del PDF y compáralo con la tabla. ¿Están todas las secciones? ¿Coinciden las páginas? Si falta algo, dilo: «Te has saltado el anexo B (págs. 61–70). Añádelo.» Este control rápido te dice si Claude ha leído el documento completo antes de que le hagas preguntas importantes.",
          whatYouShouldSee:
            "Un mapa corregido que coincide con el índice del PDF, sin secciones perdidas.",
          tip: "Si el PDF no tiene índice, comprueba tres páginas al azar: que el contenido citado esté de verdad ahí.",
          imageDescription:
            "Índice del PDF junto a la tabla de Claude, con una sección marcada como añadida tras la corrección.",
        },
        {
          title: "Pregunta por partes con cita de página obligatoria",
          content:
            "Fija la regla en el hilo: «En cada respuesta, cita la página entre paréntesis (p. 12). Si algo no aparece en el PDF, escribe [NO ESTÁ EN EL DOCUMENTO].» Luego haz tu pregunta de trabajo en piezas: una sección o un tema por mensaje. «Según las secciones 3 y 4, ¿qué obligaciones tiene el proveedor y con qué plazos?» funciona mejor que una pregunta sobre todo el documento.",
          whatYouShouldSee:
            "Respuestas cortas con referencias de página en cada afirmación y marcas [NO ESTÁ EN EL DOCUMENTO] donde corresponde.",
          warning:
            "Una respuesta sin páginas no es un análisis del PDF: es la opinión del modelo con buen tono.",
          imageDescription:
            "Respuesta de Claude con viñetas, cada una terminada en una referencia de página entre paréntesis.",
        },
        {
          title: "Extrae tablas y cifras a un formato reutilizable",
          content:
            "Pide los datos sueltos en una tabla: «Extrae todas las cifras de la sección 5 en tabla: dato, valor, unidad, página.» Si necesitas llevarlo a una hoja de cálculo, pide el mismo contenido en CSV. No le pidas que calcule totales o porcentajes nuevos en este paso: primero extrae, después calcula tú o pídelo aparte mostrando la operación.",
          whatYouShouldSee:
            "Una tabla (o bloque CSV) con cada cifra, su unidad y la página de donde sale.",
          tip: "Las tablas del PDF que son imágenes se leen peor. Si una fila parece rara, ve a la página y compárala.",
          imageDescription:
            "Tabla de cifras extraídas con columnas Dato, Valor, Unidad, Página y un bloque CSV debajo.",
        },
        {
          title: "Pide lo que falta y lo que contradice",
          content:
            "Antes de cerrar, pregunta lo incómodo: «¿Qué no responde este documento sobre mi pregunta de trabajo? ¿Hay afirmaciones que se contradigan entre secciones?» Así ves los huecos que tendrás que cubrir con otra fuente. Si necesitas contexto externo (una norma, un dato de mercado), búscalo con Perplexity y abre el enlace; no dejes que Claude lo complete de memoria.",
          whatYouShouldSee:
            "Una lista de huecos y posibles contradicciones, cada una con las páginas implicadas.",
          imageDescription:
            "Lista de Claude con dos apartados: Lo que el documento no responde y Posibles contradicciones, con páginas.",
        },
        {
          title: "Verifica en el original antes de usarlo",
          content:
            "Elige las cifras y frases que vas a usar en un correo o una decisión y abre cada página citada en el PDF. Comprueba que el dato dice lo mismo y en el mismo contexto. Lo que no puedas localizar, bórralo. Termina pidiendo un resumen final de media página solo con lo verificado y sus páginas.",
          whatYouShouldSee:
            "Un resumen final corto en el que cada afirmación tiene página y la has comprobado tú en el PDF.",
          proTip:
            "Guarda el mapa y el resumen verificado en un proyecto de Claude: la próxima pregunta sobre ese PDF empieza con contexto.",
          imageDescription:
            "PDF abierto en la página citada con la frase resaltada, junto al resumen final de Claude.",
        },
      ],
      realUseCases: [
        {
          title: "Contrato con un proveedor",
          body: "Mapa por cláusulas, obligaciones y plazos con página, y una lista de lo que el contrato no aclara para llevarlo a la negociación.",
        },
        {
          title: "Informe anual o de mercado",
          body: "Tabla de cifras con página para una presentación interna, sin porcentajes recalculados de memoria.",
        },
        {
          title: "Manual técnico o normativa interna",
          body: "Preguntas por sección («¿qué hay que hacer si...?») con cita de página para responder a un compañero.",
        },
      ],
      commonMistakes: [
        {
          title: "Pedir un resumen del documento entero",
          body: "Pierdes excepciones y no sabes qué se ha omitido. Empieza por el mapa.",
        },
        {
          title: "Aceptar respuestas sin página",
          body: "Sin cita no puedes comprobar nada. Exige la página en cada afirmación.",
        },
        {
          title: "Subir un escaneo sin texto",
          body: "La lectura de imágenes es menos fiable. Pasa OCR o comprueba cada cifra.",
        },
        {
          title: "Dejar que complete lo que falta",
          body: "Lo que no está en el PDF va marcado como [NO ESTÁ EN EL DOCUMENTO] y se busca en otra fuente abierta.",
        },
      ],
      conclusion:
        "Analizar un PDF largo con Claude funciona cuando lo tratas como una lectura guiada y no como un resumen mágico. Mapa con páginas, preguntas por partes con cita obligatoria, cifras extraídas en tabla y verificación en el original. Así el análisis sirve para decidir, no solo para hacerse una idea.",
      nextSteps: [
        "Si vas a escribir un documento a partir del PDF, sigue con el tutorial de briefar a Claude para un documento largo.",
        "Si trabajas con el mismo PDF varios días, guárdalo en un proyecto de Claude Projects.",
        "Para contexto externo con fuentes, usa el flujo de investigación con Perplexity.",
      ],
      takeaway:
        "Pregunta de trabajo → mapa con páginas → preguntas con cita → cifras en tabla → huecos → verificación en el PDF.",
    },
    en: {
      title: "How to analyze a long PDF with Claude (2026)",
      metaTitle: "Analyze a long PDF with Claude step by step in 2026",
      metaDescription:
        "Upload a long PDF to Claude, ask for a section map, ask questions with cited pages, extract tables and check every figure against the original.",
      excerpt:
        "Do not ask «summarize this PDF». Ask for a map with pages, question it in parts and check every figure in the document.",
      intro:
        "An annual report, a contract or an 80-page study does not get read in a coffee break. Claude can read it with you, but «summarize this» returns fluent text that mixes the important with the incidental and does not tell you where each idea comes from. This 20-minute flow turns the PDF into a map with pages, cited answers and a list of figures you can check.",
      problem:
        "With a long PDF, a generic summary loses nuance, skips exceptions and sometimes attributes things to the document that it does not say. If you do not know which page backs each claim, you cannot use the analysis in an email, a meeting or a decision.",
      whatYouWillLearn: [
        "Prepare the PDF and your question before uploading",
        "Ask for a document map by section and page",
        "Ask specific questions with a mandatory page citation",
        "Extract tables and figures into a reusable format",
        "Spot what the PDF does not say and flag it",
        "Check against the original before using anything",
      ],
      prerequisites: [
        "A claude.ai account",
        "A real PDF with selectable text (report, contract, study or manual)",
        "A working question: what you need to decide or explain with that document",
        "20 minutes",
      ],
      steps: [
        {
          title: "Prepare the PDF and your working question",
          content:
            "Open the PDF and check that you can select text: if it is a scan of images, reading will be weaker and it is worth running OCR first. Check whether the file fits the limits claude.ai shows when you attach it; if it is huge, split it by chapter. Then write in one line why you are reading it: «I need to know the supplier's obligations and deadlines» is a question; «understand the contract» is not.",
          whatYouShouldSee:
            "A PDF with selectable text (or split into parts) and a working question written in one sentence.",
          tip: "If the PDF has appendices you do not care about, remove them first: less noise, sharper answers.",
          imageDescription:
            "Open PDF with a line of text selected and, beside it, a note with the working question.",
        },
        {
          title: "Upload the PDF and ask for a map, not a summary",
          content:
            "Go to https://claude.ai, open a new chat and attach the PDF. First message: «Before summarizing anything, give me a map of this document as a table: section, pages, main idea in one sentence. Do not interpret yet.» If you will use the document over several days, create it inside a Claude Projects project so you do not upload it again.",
          whatYouShouldSee:
            "A table with the PDF sections, their page range and one sentence per section.",
          warning:
            "«Summarize this PDF» as the first message gives you a flat version where you cannot tell what was left out.",
          imageDescription:
            "Claude chat with a PDF attached and a table reply: Section, Pages, Main idea.",
        },
        {
          title: "Check the map against the real table of contents",
          content:
            "Open the PDF's table of contents and compare it with the table. Are all sections there? Do the pages match? If something is missing, say so: «You skipped appendix B (pp. 61–70). Add it.» This quick check tells you whether Claude read the whole document before you ask important questions.",
          whatYouShouldSee:
            "A corrected map that matches the PDF's table of contents, with no missing sections.",
          tip: "If the PDF has no table of contents, check three random pages: the cited content should really be there.",
          imageDescription:
            "PDF table of contents next to Claude's table, with one section marked as added after the correction.",
        },
        {
          title: "Ask in parts with a mandatory page citation",
          content:
            "Set the rule in the thread: «In every answer, cite the page in parentheses (p. 12). If something is not in the PDF, write [NOT IN THE DOCUMENT].» Then ask your working question in pieces: one section or topic per message. «According to sections 3 and 4, what are the supplier's obligations and deadlines?» works better than a question about the whole document.",
          whatYouShouldSee:
            "Short answers with page references on every claim and [NOT IN THE DOCUMENT] flags where they apply.",
          warning:
            "An answer without pages is not an analysis of the PDF: it is the model's opinion in a good tone.",
          imageDescription:
            "Claude reply with bullets, each ending in a page reference in parentheses.",
        },
        {
          title: "Extract tables and figures into a reusable format",
          content:
            "Ask for loose data as a table: «Extract every figure in section 5 as a table: item, value, unit, page.» If you need it in a spreadsheet, ask for the same content as CSV. Do not ask it to compute new totals or percentages in this step: extract first, then calculate yourself or ask separately with the working shown.",
          whatYouShouldSee:
            "A table (or CSV block) with each figure, its unit and the page it comes from.",
          tip: "PDF tables that are images read worse. If a row looks odd, go to the page and compare.",
          imageDescription:
            "Table of extracted figures with columns Item, Value, Unit, Page and a CSV block below.",
        },
        {
          title: "Ask what is missing and what contradicts",
          content:
            "Before closing, ask the awkward question: «What does this document not answer about my working question? Are there claims that contradict each other across sections?» This shows the gaps you will need to fill from another source. If you need outside context (a regulation, a market figure), find it with Perplexity and open the link; do not let Claude fill it in from memory.",
          whatYouShouldSee:
            "A list of gaps and possible contradictions, each with the pages involved.",
          imageDescription:
            "Claude list with two parts: What the document does not answer and Possible contradictions, with pages.",
        },
        {
          title: "Check the original before using it",
          content:
            "Pick the figures and sentences you will use in an email or decision and open each cited page in the PDF. Check the data says the same thing in the same context. Anything you cannot locate, delete. Finish by asking for a half-page final summary with only the verified points and their pages.",
          whatYouShouldSee:
            "A short final summary where every claim has a page and you have checked it yourself in the PDF.",
          proTip:
            "Save the map and the verified summary in a Claude project: the next question about that PDF starts with context.",
          imageDescription:
            "PDF open on the cited page with the sentence highlighted, next to Claude's final summary.",
        },
      ],
      realUseCases: [
        {
          title: "Supplier contract",
          body: "Map by clause, obligations and deadlines with pages, plus a list of what the contract leaves unclear to take into negotiation.",
        },
        {
          title: "Annual or market report",
          body: "Table of figures with pages for an internal presentation, with no percentages recalculated from memory.",
        },
        {
          title: "Technical manual or internal policy",
          body: "Section-by-section questions («what do we do if...?») with page citations to answer a colleague.",
        },
      ],
      commonMistakes: [
        {
          title: "Asking for a summary of the whole document",
          body: "You lose exceptions and do not know what was skipped. Start with the map.",
        },
        {
          title: "Accepting answers without pages",
          body: "Without a citation you cannot check anything. Require the page on every claim.",
        },
        {
          title: "Uploading a scan with no text",
          body: "Reading images is less reliable. Run OCR or check every figure.",
        },
        {
          title: "Letting it fill in what is missing",
          body: "What is not in the PDF gets flagged [NOT IN THE DOCUMENT] and is looked up in another source you open.",
        },
      ],
      conclusion:
        "Analyzing a long PDF with Claude works when you treat it as a guided read, not a magic summary. Map with pages, questions in parts with mandatory citations, figures extracted into a table and a check against the original. That way the analysis is good enough to decide on, not just to get a rough idea.",
      nextSteps: [
        "If you will write a document from the PDF, continue with the tutorial on briefing Claude for a long document.",
        "If you work with the same PDF over several days, keep it in a Claude Projects project.",
        "For outside context with sources, use the Perplexity research flow.",
      ],
      takeaway:
        "Working question → map with pages → cited questions → figures in a table → gaps → check in the PDF.",
    },
  },
};
