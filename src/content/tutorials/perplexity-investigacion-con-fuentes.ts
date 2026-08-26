import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "perplexity-investigacion-con-fuentes";

export const perplexityInvestigacion: Tutorial = {
  id: slug,
  slug,
  category: "research",
  level: "beginner",
  estimatedTime: 14,
  publishedAt: "2026-07-20",
  lastUpdated: "2026-08-26",
  toolsUsed: ["perplexity", "chatgpt", "claude"],
  relatedTutorials: ["chatgpt-primeros-pasos", "claude-escritura-larga"],
  tags: ["perplexity", "fuentes", "brief", "investigacion"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Perplexity con citas abiertas en el panel de fuentes",
      caption: "El entregable son dos fuentes abiertas, no el párrafo.",
      hint: "Hero: respuesta de Perplexity con el panel de fuentes y dos pestañas abiertas.",
    },
    en: {
      alt: "Perplexity with citations open in the sources panel",
      caption: "The deliverable is two opened sources, not the paragraph.",
      hint: "Hero: Perplexity answer with the sources panel and two tabs open.",
    },
  }),
  copy: {
    es: {
      title: "Cómo investigar con Perplexity sin copiar el resumen (2026)",
      metaTitle: "Investigar con Perplexity y fuentes en 2026",
      metaDescription:
        "Pregunta acotada, citas, dos fuentes abiertas y un brief de huecos. El párrafo de Perplexity no se publica.",
      excerpt:
        "Acota la pregunta, abre dos fuentes primarias y anota lo que el modelo no pudo verificar.",
      intro:
        "Perplexity es rápido. Eso es ventaja y riesgo. Este flujo te obliga a ver las fuentes antes de usar el texto. En 14 minutos sales con un brief, no con un copy-paste.",
      problem:
        "Copiar el resumen a un informe es citar a un intermediario que a veces apunta a otro recorte. El trabajo de verdad es abrir la fuente, fecharla y saber qué no está respaldado.",
      whatYouWillLearn: [
        "Formular una pregunta de analista (fecha, geografía, exclusiones)",
        "Pedir la separación hecho / estimación / opinión",
        "Abrir dos fuentes y anotar autor y fecha",
        "Escribir los huecos en vez de rellenarlos con el modelo",
        "Redactar el entregable en otro sitio",
      ],
      prerequisites: [
        "Cuenta en perplexity.ai (el plan gratis basta para una ronda)",
        "Una pregunta real de trabajo, no «mejores herramientas de IA»",
        "14 minutos y dos pestañas para abrir fuentes",
      ],
      steps: [
        {
          title: "Escribe una pregunta de analista, no un tema",
          content:
            "En vez de «mejor herramienta de IA», pregunta «qué criterios publicaron equipos de producto en 2025–2026 para elegir un LLM y qué trade-offs nombran». Añade geografía si importa y lo que no quieres (listas de afiliados, posts sin fecha).",
          whatYouShouldSee: "Una pregunta de 2–4 líneas en la caja de Perplexity, con año y exclusión.",
          tip: "Si no puedes ponerle año, aún no es investigación: es charla.",
          imageDescription: "Caja de Perplexity con la pregunta datada, antes de enviar.",
        },
        {
          title: "Pide fuentes y la separación de tipos de afirmación",
          content:
            "«Dame 5–7 fuentes. Separa hecho, estimación y opinión. Incluye fecha de cada enlace.» No pidas todavía el ensayo. Quieres el mapa.",
          whatYouShouldSee: "Una respuesta con citas numeradas y, si lo pediste, etiquetas de tipo.",
          warning: "Una cita que apunta a un recorte no es el estudio. Ábrela.",
          imageDescription: "Respuesta de Perplexity con 5+ citas y el panel de fuentes abierto.",
        },
        {
          title: "Abre las dos fuentes que más pesan",
          content:
            "Elige dos (informe, paper, doc oficial). Anota título, autor o institución y fecha. Si no puedes fecharlas, no entran al brief. Lee lo bastante para saber si Perplexity las resumió bien.",
          whatYouShouldSee: "Dos pestañas abiertas y tres campos escritos: título, autor, fecha.",
          tip: "Si ambas fuentes son blogs que se citan entre sí, busca una tercera primaria o para.",
          imageDescription: "Dos pestañas de fuentes junto a una nota con título / autor / fecha.",
        },
        {
          title: "Pregunta qué no pudo verificar y escribe el brief",
          content:
            "«Qué no has podido respaldar con estas fuentes.» Eso va a una sección Huecos. El brief final: tesis en una frase, 4–6 viñetas con cita, huecos, fecha del brief. No copies el párrafo de Perplexity al entregable que se publica.",
          whatYouShouldSee: "Una nota tuya de una página, no un export de Perplexity.",
          proTip: "La fecha del brief evita que dentro de un mes trates este mapa como eterno.",
          imageDescription: "Brief en un doc con tesis, viñetas citadas y sección Huecos.",
        },
        {
          title: "Redacta fuera, con tus notas",
          content:
            "Pasa el brief a ChatGPT o Claude solo para el formato del entregable (email, one-pager). Los hechos ya están fechados. Si el modelo inventa un séptimo punto, muere en la lista OK/INVENTADO del tutorial de ChatGPT.",
          whatYouShouldSee: "El texto final cita las dos fuentes que abriste, no «según Perplexity».",
          imageDescription: "Doc final con dos hipervínculos a las fuentes primarias.",
        },
      ],
      realUseCases: [
        { title: "Brief de 20 minutos para una reunión", body: "Una pregunta, dos fuentes, tres huecos. Nadie copia el chat." },
        { title: "Contrastar una cifra de un deck", body: "Buscas origen y fecha. Si no aparece, la cifra sale del deck o se marca como estimación." },
        { title: "Mapa de un tema nuevo", body: "No es el ensayo. Es el índice de lo que hay que leer de verdad." },
      ],
      commonMistakes: [
        { title: "Citar a Perplexity", body: "Cita el artículo o el informe. Perplexity es el camino." },
        { title: "Una sola fuente «porque encaja»", body: "El sesgo se cuela. Dos, o el brief dice que solo hay una." },
        { title: "Pregunta sin fecha", body: "Mezcla 2022 con 2026 y parece un estado de la cuestión." },
      ],
      conclusion:
        "Perplexity acelera el mapa. Tú abres las fuentes, fechas el brief y escribes los huecos. El párrafo del modelo no es el entregable.",
      nextSteps: [
        "Usa el brief mañana en un texto con el método de ChatGPT.",
        "Si el texto se alarga, edítalo con Claude por secciones.",
        "Repite el flujo con una pregunta más estrecha, no más amplia.",
      ],
      takeaway: "Pregunta datada, dos fuentes abiertas, huecos por escrito. El resumen no se publica.",
    },
    en: {
      title: "How to research with Perplexity without pasting the summary (2026)",
      metaTitle: "Research with Perplexity and sources in 2026",
      metaDescription:
        "A narrow question, citations, two opened sources and a gaps brief. Perplexity’s paragraph does not get published.",
      excerpt:
        "Narrow the question, open two primary sources and write down what the model could not verify.",
      intro:
        "Perplexity is fast. That is an advantage and a risk. This flow forces you to see the sources before you use the text. In 14 minutes you leave with a brief, not a copy-paste.",
      problem:
        "Pasting the summary into a report is citing a middleman that sometimes points at another recap. The real work is opening the source, dating it and knowing what is not backed.",
      whatYouWillLearn: [
        "Write an analyst question (date, geography, exclusions)",
        "Ask for a split between fact, estimate and opinion",
        "Open two sources and note author and date",
        "Write the gaps instead of filling them with the model",
        "Draft the deliverable somewhere else",
      ],
      prerequisites: [
        "A perplexity.ai account (the free plan is enough for one round)",
        "A real work question, not «best AI tools»",
        "14 minutes and two tabs to open sources",
      ],
      steps: [
        {
          title: "Write an analyst question, not a topic",
          content:
            "Instead of «best AI tool», ask «what criteria did product teams publish in 2025–2026 for choosing an LLM, and which trade-offs do they name». Add geography if it matters and what you do not want (affiliate lists, undated posts).",
          whatYouShouldSee: "A 2–4 line question in Perplexity’s box, with a year and an exclusion.",
          tip: "If you cannot put a year on it, it is not research yet. It is chat.",
          imageDescription: "Perplexity box with the dated question, before send.",
        },
        {
          title: "Ask for sources and a split of claim types",
          content:
            "«Give me 5–7 sources. Split fact, estimate and opinion. Include a date for each link.» Do not ask for the essay yet. You want the map.",
          whatYouShouldSee: "An answer with numbered citations and, if you asked, type labels.",
          warning: "A citation that points at a recap is not the study. Open it.",
          imageDescription: "Perplexity answer with 5+ citations and the sources panel open.",
        },
        {
          title: "Open the two sources that matter most",
          content:
            "Pick two (report, paper, official doc). Note title, author or institution and date. If you cannot date them, they do not enter the brief. Read enough to know whether Perplexity summarized them fairly.",
          whatYouShouldSee: "Two tabs open and three fields written down: title, author, date.",
          tip: "If both sources are blogs citing each other, find a third primary or stop.",
          imageDescription: "Two source tabs next to a note with title / author / date.",
        },
        {
          title: "Ask what it could not verify and write the brief",
          content:
            "«What could you not back with these sources.» That goes into a Gaps section. Final brief: thesis in one sentence, 4–6 cited bullets, gaps, brief date. Do not paste Perplexity’s paragraph into the published deliverable.",
          whatYouShouldSee: "A one-page note of yours, not a Perplexity export.",
          proTip: "Dating the brief stops you treating this map as eternal a month from now.",
          imageDescription: "A doc brief with thesis, cited bullets and a Gaps section.",
        },
        {
          title: "Write elsewhere, from your notes",
          content:
            "Take the brief to ChatGPT or Claude only for the deliverable’s format (email, one-pager). The facts are already dated. If the model invents a seventh point, it dies on the OK/MADE-UP list from the ChatGPT tutorial.",
          whatYouShouldSee: "The final text cites the two sources you opened, not «according to Perplexity».",
          imageDescription: "Final doc with two hyperlinks to the primary sources.",
        },
      ],
      realUseCases: [
        { title: "A 20-minute meeting brief", body: "One question, two sources, three gaps. Nobody pastes the chat." },
        { title: "Checking a figure on a deck", body: "You find origin and date. If it does not appear, the figure leaves the deck or is marked as an estimate." },
        { title: "A map of a new topic", body: "It is not the essay. It is the index of what you actually have to read." },
      ],
      commonMistakes: [
        { title: "Citing Perplexity", body: "Cite the article or the report. Perplexity is the path." },
        { title: "One source «because it fits»", body: "Bias sneaks in. Two, or the brief says there is only one." },
        { title: "A question with no date", body: "It mixes 2022 with 2026 and looks like a state of the art." },
      ],
      conclusion:
        "Perplexity speeds up the map. You open the sources, date the brief and write the gaps. The model’s paragraph is not the deliverable.",
      nextSteps: [
        "Use the brief tomorrow in a piece with the ChatGPT method.",
        "If the piece gets long, edit it with Claude by section.",
        "Run the flow again with a narrower question, not a wider one.",
      ],
      takeaway: "A dated question, two opened sources, gaps in writing. The summary does not get published.",
    },
  },
};
