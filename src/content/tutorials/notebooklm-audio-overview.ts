import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "notebooklm-audio-overview";

export const notebooklmAudioOverview: Tutorial = {
  id: slug,
  slug,
  category: "research",
  level: "beginner",
  estimatedTime: 18,
  publishedAt: "2026-10-15",
  lastUpdated: "2026-10-15",
  toolsUsed: ["notebooklm"],
  relatedTutorials: [
    "notebooklm-primer-briefing",
    "descript-editar-podcast",
    "perplexity-investigacion-con-fuentes",
    "chatgpt-primeros-pasos",
  ],
  tags: ["notebooklm", "audio-overview", "resumen", "fuentes", "google"],
  hero: tutorialHero(slug, {
    es: {
      alt: "NotebookLM Studio con Audio Overview en reproducción y panel de fuentes",
      caption: "El audio resume tus fuentes; no sustituye abrir citas ni auditar cifras.",
      hint:
        "Hero 1600×900: Studio con tarjeta Audio Overview activa, reproductor y cuaderno con 3–4 fuentes indexadas.",
    },
    en: {
      alt: "NotebookLM Studio with Audio Overview playing and sources panel",
      caption: "The audio summarizes your sources; it does not replace opening citations or auditing figures.",
      hint:
        "Hero 1600×900: Studio with Audio Overview card active, player and notebook with 3–4 indexed sources.",
    },
  }),
  copy: {
    es: {
      title: "NotebookLM: Audio Overview — resumen en audio de tus fuentes (2026)",
      metaTitle: "NotebookLM Audio Overview: resumen en audio con fuentes",
      metaDescription:
        "Genera un Audio Overview en Studio, elige formato Brief o Deep Dive, personaliza idioma y foco, escucha con criterio y comparte o descarga con cuidado.",
      excerpt:
        "Convierte las fuentes de un cuaderno en una conversación o monólogo en audio: formato según el uso, prompt de foco, escucha crítica y salida sin tratarla como informe auditado.",
      intro:
        "Audio Overview es un resumen en audio generado a partir de las fuentes que ya subiste al cuaderno: una discusión o monólogo que refleja ese material, no opiniones sueltas del modelo. En unos 18 minutos partes de un cuaderno con fuentes listas (si aún no lo tienes, sigue primero el tutorial NotebookLM: tu primer briefing), eliges el formato que encaja con el trayecto o la reunión, añades un prompt de foco, generas en Studio y escuchas anotando huecos antes de compartir o descargar.",
      problem:
        "Poner play en el primer audio y reenviarlo al equipo como «el informe» esconde errores, omisiones y glitches. Sin cuaderno acotado, formato acertado y una pasada crítica con citas abiertas, el resumen suena convincente y falla cuando alguien pide el dato en el PDF.",
      whatYouWillLearn: [
        "Partir de un cuaderno con fuentes indexadas y permiso de edición",
        "Elegir formato: Brief, Deep Dive, Critique o Debate según el trabajo",
        "Personalizar idioma, duración y prompt de foco antes de generar",
        "Generar en Studio en segundo plano y recuperar audios previos con Load",
        "Escuchar mientras exploras citas y anotas huecos o imprecisiones",
        "Descargar o compartir solo con permisos correctos y expectativas claras",
      ],
      prerequisites: [
        "Cuenta de Google y acceso a notebooklm.google.com",
        "Un cuaderno con 3–5 fuentes ya indexadas (ver tutorial notebooklm-primer-briefing)",
        "Permiso de edición en ese cuaderno para generar o borrar Audio Overview",
        "Unos 18 minutos y auriculares o altavoz; la generación suele tardar un par de minutos",
      ],
      steps: [
        {
          title: "Abre un cuaderno que ya tenga fuentes listas",
          content:
            "Entra en notebooklm.google.com y abre el cuaderno del proyecto — no empieces un Audio Overview en un cuaderno vacío. Comprueba que las fuentes muestran estado listo y que el tema es coherente (un entregable, un cliente, un estudio). Si mezclaste PDFs de otro proyecto, crea un cuaderno nuevo y sube solo lo que quieres oír resumido.",
          whatYouShouldSee:
            "Panel de fuentes con varios ítems indexados y sin errores persistentes de carga.",
          tip: "Si vienes de cero, el flujo de fuentes y citas está en el tutorial «NotebookLM: tu primer briefing».",
          imageDescription:
            "Cuaderno de NotebookLM con cuatro fuentes indexadas y chat o resumen visible.",
        },
        {
          title: "Studio → Audio Overview y elige el formato",
          content:
            "En el panel Studio, selecciona Audio Overview. Antes de generar, elige el formato que encaja: Brief — un solo locutor, ideas clave en menos de dos minutos, ideal para un trayecto corto; Deep Dive (por defecto) — dos presentadores en conversación más profunda; Critique — dos voces con evaluación constructiva (útil para un ensayo o design doc en las fuentes); Debate — intercambio formal a favor y en contra del tema. No generes los cuatro el mismo día: uno por objetivo.",
          whatYouShouldSee:
            "Tarjeta Audio Overview en Studio con selector de formato (Brief, Deep Dive, Critique, Debate).",
          warning:
            "Necesitas permiso de edición en el cuaderno para generar o eliminar un Audio Overview.",
          imageDescription:
            "Studio con Audio Overview abierto y menú de formatos visible.",
        },
        {
          title: "Ajusta idioma, duración y prompt de foco",
          content:
            "Elige el idioma de salida (hay soporte para más de 80 idiomas; el predeterminado suele seguir el idioma preferido de tu cuenta Google). Ajusta la longitud: Shorter, Default o Longer — ten en cuenta que Longer solo está disponible en inglés. Opcionalmente escribe un prompt corto: «céntrate en riesgos regulatorios», «nivel ejecutivo sin jerga» o «compara las dos propuestas del doc 3». Eso orienta el guion sin sustituir las fuentes.",
          whatYouShouldSee:
            "Controles de idioma, duración y un campo de instrucciones opcional antes del botón de generar.",
          tip: "Para un repaso rápido antes de reunión, Brief + Shorter suele bastar; para estudiar un informe largo, Deep Dive + Default.",
          imageDescription:
            "Panel de personalización de Audio Overview con idioma, longitud y prompt de foco.",
        },
        {
          title: "Genera y deja que termine en segundo plano",
          content:
            "Pulsa generar. NotebookLM crea el audio en segundo plano: puedes seguir en el cuaderno, chatear o lanzar otro artefacto en Studio mientras tanto. La generación suele llevar un par de minutos. El resultado puede incluir imprecisiones o fallos de audio puntuales — no lo trates como transcripción certificada. Si ya generaste uno antes, en Studio → Load puedes recuperar un Audio Overview anterior sin repetir el proceso.",
          whatYouShouldSee:
            "Indicador de generación en curso y después un reproductor con el audio listo para play.",
          warning:
            "En la app móvil algunas opciones de esta función pueden estar limitadas; en duda, usa la web.",
          imageDescription:
            "Estado «generando» en la tarjeta Audio Overview y luego controles de reproducción.",
        },
        {
          title: "Escucha con criterio y abre citas mientras suena",
          content:
            "Reproduce el audio y escucha si los temas coinciden con tus fuentes, no con lo que «suena bien». Puedes seguir trabajando en NotebookLM: cuando mencionen un dato delicado, pausa y abre la cita en el PDF o la transcripción. Anota en un doc externo: OK / DUDOSO / NO ESTÁ EN FUENTES. El audio ayuda a detectar huecos; no reemplaza leer el pasaje.",
          whatYouShouldSee:
            "Reproductor activo y panel de cita con texto fuente resaltado al pausar.",
          proTip:
            "Si una cifra en el audio no cuadra, confía en el pasaje citado, no en la voz.",
          imageDescription:
            "Reproductor de Audio Overview con una cita abierta al lado del chat o fuentes.",
        },
        {
          title: "Descarga o comparte con permisos y contexto",
          content:
            "Si el audio sirve para alguien más, usa las opciones de compartir enlace (el cuaderno debe estar compartido con los permisos adecuados), compartir el cuaderno completo o Download para guardar el archivo de audio. Añade siempre contexto escrito: qué fuentes entraron, fecha de generación y qué no cubren. No envíes el MP3 como informe auditado ni como sustituto del briefing escrito.",
          whatYouShouldSee:
            "Menú de compartir o descargar junto al reproductor y nota tuya con fecha y lista de fuentes.",
          warning:
            "Un enlace a un cuaderno con fuentes privadas en Drive puede dejar al oyente sin acceso al material de fondo.",
          imageDescription:
            "Menú de descarga y compartir del Audio Overview con checklist de permisos en un doc externo.",
        },
        {
          title: "Opcional: modo interactivo (solo inglés, audios nuevos)",
          content:
            "En audios recién generados, NotebookLM puede ofrecer un modo interactivo en inglés: te unes con voz, haces preguntas ancladas a las fuentes y los presentadores responden antes de retomar el hilo. Úsalo para aclarar un punto concreto, no para delegar la due diligence. Puede haber cortes o glitches; si no está disponible en tu audio o idioma, vuelve al chat con citas del cuaderno.",
          whatYouShouldSee:
            "Opción de unirse a la conversación con micrófono o botón de modo interactivo en el reproductor (cuando aplica).",
          tip: "Tras una respuesta en interactivo, verifica la afirmación en la fuente como harías con el audio lineal.",
          imageDescription:
            "UI de modo interactivo con indicador de micrófono y conversación con dos presentadores.",
        },
      ],
      realUseCases: [
        {
          title: "Trayecto corto antes de comité",
          body: "Brief en español con prompt «solo decisiones pendientes y riesgos». Al llegar, abres el PDF de la cifra que sonó rara.",
        },
        {
          title: "Repaso profundo de un informe",
          body: "Deep Dive en Default mientras paseas citas del mismo cuaderno en el portátil.",
        },
        {
          title: "Feedback sobre un borrador en fuentes",
          body: "Critique con un design doc subido; anotas puntos válidos y los que no aparecen en el texto.",
        },
      ],
      commonMistakes: [
        {
          title: "Tratar el audio como informe final",
          body: "Es un resumen generado: puede equivocarse. Las fuentes y las citas abiertas son la auditoría.",
        },
        {
          title: "Cuaderno hinchado o mezclado",
          body: "Fuentes irrelevantes distorsionan el guion. Un cuaderno por entregable.",
        },
        {
          title: "Compartir sin decir qué falta",
          body: "El equipo escucha certeza donde hay huecos. Escribe gaps y versión de fuentes junto al enlace.",
        },
      ],
      conclusion:
        "Audio Overview convierte tu corpus en algo que puedes escuchar: elige formato y foco, genera con paciencia, escucha con citas abiertas y comparte solo con contexto. El entregable serio sigue siendo el briefing o el doc que tú validas — no el MP3.",
      nextSteps: [
        "Si aún no dominas fuentes y briefing en Studio, completa notebooklm-primer-briefing.",
        "Para editar podcasts grabados por ti, mira descript-editar-podcast; aquí el audio nace de tus PDFs.",
        "Cuando necesites fuentes de internet abierta antes de subirlas, usa perplexity-investigacion-con-fuentes.",
      ],
      takeaway:
        "Cuaderno acotado, formato acertado, audio escuchado con citas — y nunca un MP3 como informe auditado.",
    },
    en: {
      title: "NotebookLM: Audio Overview — audio summary from your sources (2026)",
      metaTitle: "NotebookLM Audio Overview: sourced audio summary",
      metaDescription:
        "Generate an Audio Overview in Studio, pick Brief or Deep Dive, set language and focus, listen critically and download or share with care.",
      excerpt:
        "Turn notebook sources into a hosted conversation or monologue: match format to the job, add a focus prompt, listen critically and treat output as something to verify, not an audited report.",
      intro:
        "Audio Overview is an AI-generated audio summary built from sources you already uploaded to the notebook — a discussion or monologue that reflects that material, not free-floating model opinions. In about 18 minutes you start from a notebook with ready sources (if you do not have one yet, follow NotebookLM: your first useful briefing first), pick the format that fits your commute or meeting, add a focus prompt, generate in Studio and listen while noting gaps before you share or download.",
      problem:
        "Hitting play on the first overview and forwarding it as «the report» hides mistakes, omissions and glitches. Without a tight notebook, the right format and a critical pass with citations open, the summary sounds convincing and fails when someone asks for the number in the PDF.",
      whatYouWillLearn: [
        "Start from a notebook with indexed sources and edit access",
        "Choose Brief, Deep Dive, Critique or Debate to match the job",
        "Set language, length and an optional focus prompt before generating",
        "Generate in Studio in the background and reload past overviews with Load",
        "Listen while exploring quotes and noting gaps or inaccuracies",
        "Download or share only with correct permissions and clear expectations",
      ],
      prerequisites: [
        "A Google account and access to notebooklm.google.com",
        "A notebook with 3–5 indexed sources (see tutorial notebooklm-primer-briefing)",
        "Edit access on that notebook to generate or delete an Audio Overview",
        "About 18 minutes and headphones or speakers; generation usually takes a couple of minutes",
      ],
      steps: [
        {
          title: "Open a notebook that already has sources ready",
          content:
            "Go to notebooklm.google.com and open your project notebook — do not start an Audio Overview on an empty notebook. Check that sources show ready state and the topic is coherent (one deliverable, one client, one study). If you mixed PDFs from another project, create a fresh notebook and upload only what you want summarized in audio.",
          whatYouShouldSee:
            "A sources panel with several indexed items and no persistent load errors.",
          tip: "If you are starting from zero, sources and citations live in the «NotebookLM: your first useful briefing» tutorial.",
          imageDescription:
            "NotebookLM notebook with four indexed sources and chat or summary visible.",
        },
        {
          title: "Studio → Audio Overview and pick a format",
          content:
            "In the Studio panel, select Audio Overview. Before generating, choose the format that fits: Brief — single speaker, key takeaways in under two minutes, great for a short commute; Deep Dive (default) — two hosts in a longer, lively conversation; Critique — two voices with constructive evaluation (useful for an essay or design doc in your sources); Debate — formal back-and-forth on the topic. Do not generate all four the same day — one per goal.",
          whatYouShouldSee:
            "Audio Overview card in Studio with a format picker (Brief, Deep Dive, Critique, Debate).",
          warning:
            "You need edit access on the notebook to generate or delete an Audio Overview.",
          imageDescription:
            "Studio with Audio Overview open and the format menu visible.",
        },
        {
          title: "Set language, length and a focus prompt",
          content:
            "Pick output language (80+ languages supported; default often follows your Google Account preferred language). Set length: Shorter, Default or Longer — note that Longer is English only. Optionally add a short prompt: «focus on regulatory risk», «executive level, no jargon» or «compare the two proposals in doc 3». That steers the script without replacing your sources.",
          whatYouShouldSee:
            "Language and length controls plus an optional instructions field before Generate.",
          tip: "For a quick pre-meeting refresh, Brief + Shorter is often enough; for a long report, Deep Dive + Default.",
          imageDescription:
            "Audio Overview customization panel with language, length and focus prompt.",
        },
        {
          title: "Generate and let it finish in the background",
          content:
            "Click generate. NotebookLM builds the audio in the background: you can stay in the notebook, chat or start another Studio artifact meanwhile. Generation usually takes a couple of minutes. Output may include inaccuracies or minor audio glitches — do not treat it as a certified transcript. If you created one before, Studio → Load brings back a previous Audio Overview without redoing the job.",
          whatYouShouldSee:
            "A generating indicator, then a player with audio ready to play.",
          warning:
            "The mobile app may limit some options for this feature; when in doubt, use the web app.",
          imageDescription:
            "«Generating» state on the Audio Overview card, then playback controls.",
        },
        {
          title: "Listen critically and open citations while it plays",
          content:
            "Play the overview and check whether topics match your sources, not what merely sounds good. You can keep working in NotebookLM: when a sensitive figure comes up, pause and open the citation in the PDF or transcript. Note in an external doc: OK / UNSURE / NOT IN SOURCES. Audio helps you spot gaps; it does not replace reading the passage.",
          whatYouShouldSee:
            "Active player and a citation panel with highlighted source text after you pause.",
          proTip:
            "If a number in the audio feels wrong, trust the cited passage, not the voice.",
          imageDescription:
            "Audio Overview player with an opened citation beside chat or sources.",
        },
        {
          title: "Download or share with permissions and context",
          content:
            "If someone else needs the audio, use share link (the notebook must be shared appropriately), share the whole notebook or Download to save the audio file. Always add written context: which sources were included, generation date and what they do not cover. Do not ship the MP3 as an audited report or a substitute for a written briefing.",
          whatYouShouldSee:
            "Share or download menu by the player and your note with date and source list.",
          warning:
            "A link to a notebook whose Drive sources are private can leave listeners without background material.",
          imageDescription:
            "Download and share menu for Audio Overview with a permissions checklist in an external doc.",
        },
        {
          title: "Optional: interactive mode (English only, new overviews)",
          content:
            "On newly generated overviews, NotebookLM may offer interactive mode in English: join with your voice, ask questions grounded in sources and hosts answer before resuming the thread. Use it to clarify one point, not to outsource diligence. Glitches happen; if interactive mode is unavailable for your audio or language, return to cited chat in the notebook.",
          whatYouShouldSee:
            "Join conversation with microphone or an interactive mode control on the player when available.",
          tip: "After an interactive answer, verify the claim in the source like you would with linear audio.",
          imageDescription:
            "Interactive mode UI with microphone indicator and two-host conversation.",
        },
      ],
      realUseCases: [
        {
          title: "Short commute before a committee",
          body: "Brief in your language with prompt «only open decisions and risks». When you arrive, open the PDF for the figure that sounded off.",
        },
        {
          title: "Deep pass on a long report",
          body: "Deep Dive on Default while clicking through citations from the same notebook on your laptop.",
        },
        {
          title: "Feedback on a draft in sources",
          body: "Critique with an uploaded design doc; note valid points and ones not in the text.",
        },
      ],
      commonMistakes: [
        {
          title: "Treating audio as the final report",
          body: "It is a generated summary and can be wrong. Sources and opened citations are the audit.",
        },
        {
          title: "Bloated or mixed notebooks",
          body: "Irrelevant sources skew the script. One notebook per deliverable.",
        },
        {
          title: "Sharing without stating gaps",
          body: "The team hears certainty where holes exist. Write gaps and source versions beside the link.",
        },
      ],
      conclusion:
        "Audio Overview turns your corpus into something you can hear: pick format and focus, generate patiently, listen with citations open and share only with context. The serious deliverable remains the briefing or doc you validate — not the MP3.",
      nextSteps: [
        "If sources and Studio briefing are not solid yet, finish notebooklm-primer-briefing.",
        "To edit podcasts you recorded yourself, see descript-editar-podcast; here audio is born from your PDFs.",
        "When you need open-web sources before uploading, use perplexity-investigacion-con-fuentes.",
      ],
      takeaway:
        "Tight notebook, right format, audio heard with citations — and never an MP3 as an audited report.",
    },
  },
};
