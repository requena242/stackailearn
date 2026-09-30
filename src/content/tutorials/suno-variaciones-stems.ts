import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "suno-variaciones-stems";

export const sunoVariacionesStems: Tutorial = {
  id: slug,
  slug,
  category: "audio",
  level: "intermediate",
  estimatedTime: 22,
  publishedAt: "2026-09-30",
  lastUpdated: "2026-09-30",
  toolsUsed: ["suno", "runway", "elevenlabs"],
  relatedTutorials: [
    "suno-primer-tema",
    "elevenlabs-primer-voiceover",
    "runway-primer-clip",
    "chatgpt-primeros-pasos",
  ],
  tags: ["suno", "stems", "remix", "variaciones", "audio", "mezcla", "extend"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Biblioteca de Suno con una canción keeper abierta, menú Remix/Extend y opción Get Stems visible",
      caption: "Itera desde una canción que ya funciona. Los stems son un paso aparte del Create inicial.",
      hint: "Hero 1600×900: Library de Suno, detalle de una canción con acciones Remix y Extend, menú Edit con Get Stems (etiqueta de plan de pago si aplica).",
    },
    en: {
      alt: "Suno library with a keeper song open, Remix/Extend menu and Get Stems option visible",
      caption: "Iterate from a song that already works. Stems are a separate step from initial Create.",
      hint: "Hero 1600×900: Suno Library, song detail with Remix and Extend actions, Edit menu showing Get Stems (paid-plan badge if shown).",
    },
  }),
  copy: {
    es: {
      title: "Suno: variaciones y stems (2026)",
      metaTitle: "Suno variaciones y stems: guía práctica 2026",
      metaDescription:
        "Parte de una keeper en Library. Remix, Extend y editor de secciones en planes de pago. Get Stems (Pro/Premier), descarga MP3 o WAV. Cuándo parar de regenerar y reescribir el prompt.",
      excerpt:
        "Ya tienes un primer tema. Aprende a variarlo sin quemar créditos en Create vacío, cuándo usar Extend o Remix, y cómo sacar stems si tu plan lo permite.",
      intro:
        "Este flujo asume que ya generaste al menos una canción útil con el tutorial suno-primer-tema. Hoy no empiezas en Create con el campo vacío: abres esa keeper en Library y decides si necesitas otra versión (Remix), más duración (Extend) o pistas separadas (Get Stems). Tarda unos 22 minutos. Suno no sustituye un DAW en el plan Free; los stems y el editor de secciones viven en Pro o Premier, con matices que verás en los pasos.",
      problem:
        "Tras el primer MP3, mucha gente vuelve a Create, pega el mismo prompt y regenera hasta agotar créditos. O confunde «dos versiones por generación» con stems reales para mezclar. O espera silenciar la batería en Free como en Logic. El resultado: variaciones casi idénticas, archivos que no encajan en el montaje y frustración porque el producto no promete control de estudio en la capa gratuita.",
      whatYouWillLearn: [
        "Abrir una keeper desde Library como punto de partida",
        "Usar Remix y Extend (y cuándo no repetir Create a ciegas)",
        "Saber en qué planes aparece Get Stems y qué opciones ofrece Suno",
        "Escuchar, elegir y descargar MP3 o stems alineados en el tiempo",
        "Detectar cuándo reescribir el prompt en lugar de seguir variando",
      ],
      prerequisites: [
        "Cuenta en suno.com y al menos una canción guardada (ideal: suno-primer-tema)",
        "Auriculares y un clip o slide de prueba si vas a mezclar con Runway",
        "Para stems y editor de secciones: plan Pro o Premier activo (revisa suno.com/pricing antes de publicar comercialmente)",
      ],
      steps: [
        {
          title: "Abre Library y localiza tu keeper",
          content:
            "Entra en suno.com e inicia sesión. En la barra lateral elige Library (o My Songs). Busca la canción que elegiste como keeper: la que encajaba con tu clip o jingle. Ábrela en el reproductor de detalle — no pulses Create todavía. Anota en una línea qué te gustaba (tempo, voz, estribillo) y qué quieres cambiar (más largo, otro arranque, instrumental más limpio). Si no tienes keeper, vuelve a suno-primer-tema antes de seguir.",
          whatYouShouldSee:
            "Lista de canciones con carátulas o títulos. Una pista abierta con play, duración y menú de tres puntos o acciones laterales.",
          tip: "Renombra la keeper en Library (`clip-cafe-keeper`) para no mezclarla con borradores.",
          imageDescription:
            "Vista Library de Suno con una canción seleccionada y reproductor de detalle visible.",
        },
        {
          title: "Elige el tipo de iteración antes de gastar créditos",
          content:
            "Tres caminos distintos: (1) Remix — nueva toma inspirada en la misma canción, útil para estilo o energía distinta sin reescribir todo el prompt. (2) Extend — continúa la pista hacia adelante cuando te quedaste corto de duración. (3) Create de nuevo — solo si cambias género, tempo o tema de letra de forma clara; no es «variación barata», es otra generación completa (~5 créditos, dos versiones). En plan Free puedes remixar y extender dentro de tu cupo diario, pero no obtienes stems ni derechos comerciales. No confundas Remix con pulsar Create otra vez con el mismo texto.",
          whatYouShouldSee:
            "Botones o entradas de menú tipo Remix, Extend y Create claramente separados en la ficha de la canción o en el editor.",
          warning:
            "Remix y Extend también consumen créditos. Lee el coste en pantalla antes de confirmar.",
          imageDescription:
            "Menú de acciones sobre una canción: Remix, Extend y enlace a Create resaltados con notas explicativas.",
        },
        {
          title: "Genera una variación con Remix",
          content:
            "En la keeper, elige Remix (a veces bajo el menú ··· o Edit). Suno te pide un prompt corto de dirección: qué cambiar («más uptempo», «instrumental», «voz más suave») sin repetir el párrafo entero del primer tema. Confirma y espera la cola. Obtienes una pista nueva vinculada al concepto original — compárala con la keeper en el reproductor, no solo los primeros 10 segundos. Si Remix no aparece en tu cuenta, actualiza la app web; si sigue sin estar, usa Create con un prompt que cite el estilo de la keeper («misma vibe lo-fi midtempo pero con piano») como plan B.",
          whatYouShouldSee:
            "Indicador de generación y después una nueva entrada en Library o una pestaña de resultado junto a la original.",
          tip: "Un cambio por Remix. «Más rápido y sin coros» funciona mejor que cinco adjetivos a la vez.",
          proTip:
            "Guarda la keeper original sin borrarla hasta tener una variación que gane en A/B.",
          imageDescription:
            "Diálogo Remix con prompt de una línea y dos reproductores: original vs variación.",
        },
        {
          title: "Extiende la pista si el montaje pide más segundos",
          content:
            "Si el clip de Runway dura 15 s y tu tema 40 s, puede bastar. Si necesitas 90 s continuos, usa Extend desde la misma ficha (Editor de canciones en planes de pago; en Free la extensión puede estar limitada — si el botón pide upgrade, no inventes otra ruta). Indica desde qué momento continuar o deja que Suno proponga el final. Escucha el empalme: a veces el tempo o la voz cambian ligeramente. Recorta el final en CapCut o Premiere si hay cola redundante. Extend no arregla una letra mala; solo alarga lo que ya tenías.",
          whatYouShouldSee:
            "Forma de onda más larga o duración aumentada tras Extend. Posible marcador de unión entre tramo viejo y nuevo.",
          warning:
            "Varios Extend encadenados pueden sonar incoherentes. Mejor una extensión + recorte manual que cuatro extends seguidos.",
          imageDescription:
            "Editor o vista Extend con forma de onda alargada y controles de confirmación.",
        },
        {
          title: "Cuándo y dónde están los stems (Get Stems)",
          content:
            "Los stems son pistas separadas (voz, batería, bajo, otros instrumentos) exportables para un DAW. No salen del flujo Simple Create con dos versiones A/B — salen de Get Stems en el menú Edit de una canción concreta (documentación pública de Suno: Auto Split en ~12 categorías, Split from Mix para aislar un instrumento o voz, y Advanced Split con lista ampliada de instrumentos solo en Premier). Necesitas Pro o Premier activo; el plan Free no incluye exportación de stems ni derechos comerciales. Extraer stems consume créditos adicionales además de la generación. Suno Studio (Premier) permite exportar multitracks con más control; este tutorial se centra en Get Stems desde la canción en Library/Editor, no en sustituir un estudio Pro completo.",
          whatYouShouldSee:
            "Entrada Edit → Get Stems en una canción de pago, o mensaje de upgrade si estás en Free.",
          warning:
            "Tener stems no te da licencia comercial: eso depende del plan y los términos en suno.com. No asumas YouTube monetizado con cuenta gratuita.",
          imageDescription:
            "Menú Edit abierto con Get Stems y subopciones Auto Split / Split from Mix visibles.",
        },
        {
          title: "Extrae stems y revisa cada pista",
          content:
            "Con plan de pago, abre Get Stems y empieza por Auto Split si quieres un reparto rápido en categorías clásicas. Usa Split from Mix cuando necesites «solo voz» o «todo menos la voz» para un fondo instrumental. En Premier, Advanced Split permite elegir instrumentos concretos de una lista larga — útil si Auto Split mezcla percusión con otros elementos. La separación tarda un poco; no cierres la pestaña. Cuando termine, reproduce cada stem en Suno antes de descargar: artefactos y bleed son normales en cualquier separador IA. Si una stem suena peor que otra, una segunda extracción a veces mejora un instrumento concreto; no hagas diez pulls seguidos sin escuchar.",
          whatYouShouldSee:
            "Lista de stems reproducibles (Vocals, Drums, Bass, etc.) y botón de descarga por pista o paquete.",
          tip: "Para un clip con diálogo, baja Vocals en el DAW o usa el stem «everything else» según lo que hayas pedido en Split from Mix.",
          imageDescription:
            "Panel de stems con botones play por pista y opción Download WAV o ZIP.",
        },
        {
          title: "Descarga MP3 o stems y pruébalos en contexto",
          content:
            "Para compartir rápido o fondo de vídeo sin mezcla fina: menú ··· → Download → MP3 (marca de agua posible en Free). Para mezclar en Logic, Ableton o Reaper: descarga los WAV o el ZIP de stems que Suno ofrezca tras Get Stems — suelen venir alineados en el tiempo. Importa en el DAW, ajusta niveles y EQ mínimo. Superpón el MP3 completo o el instrumental bajo tu clip de Runway y comprueba que el tempo sigue al montaje. Suno no sincroniza automáticamente con tu timeline de vídeo.",
          whatYouShouldSee:
            "Archivos en Descargas: MP3 y/o carpeta de WAV. En el editor de vídeo, pista de audio bajo el clip sin desfase grave.",
          proTip:
            "Entrega al colaborador dos cosas: mezcla completa (referencia) y stems (trabajo) — patrón habitual en postproducción.",
          imageDescription:
            "Explorador de archivos con ZIP de stems y timeline de vídeo con pistas separadas importadas.",
        },
        {
          title: "Para de regenerar y reescribe el prompt",
          content:
            "Criterio práctico: si tres Remix o dos rondas de Create con el mismo texto no acercan el resultado, el cuello de botella es el brief, no la suerte. Para el estilo: cambia tempo, instrumentos o «instrumental / sin voz». Para la letra: pasa a Custom con texto tuyo o reescribe el tema en una frase nueva. Para el montaje: a veces basta recortar la keeper en el editor de vídeo en lugar de otra generación. Reserva stems para cuando ya tengas la versión final — separar diez borradores quema créditos sin valor. Anota qué prompt produjo la keeper ganadora para no perderlo en Library.",
          whatYouShouldSee:
            "Una nota con el prompt ganador y una decisión escrita: «reescribir» vs «keeper + Extend» vs «stems listos».",
          warning:
            "Confundir stems con «la versión B del Create» lleva a exportar la mezcla estéreo y llamarla «voz stem» en el DAW.",
          imageDescription:
            "Bloc de notas con prompt revisado y flecha de flujo: explorar → keeper → stems una vez.",
        },
      ],
      realUseCases: [
        {
          title: "Instrumental bajo un clip con voz en cámara",
          body: "Keeper con coros que tapan el diálogo. Split from Mix → descargas stem sin voz (o mezcla instrumental), -6 dB bajo el MP4 de Runway.",
        },
        {
          title: "Jingle más largo para un pitch",
          body: "30 s útiles pero presentación de 60 s. Un Extend desde el final, escuchas el empalme, recortas 5 s redundantes en Premiere.",
        },
        {
          title: "Maqueta a productor externo",
          body: "Remix uptempo para la versión B del cliente. Keeper final → Get Stems Auto Split → ZIP a quien mezcla en Ableton, con enlace Suno como referencia.",
        },
      ],
      commonMistakes: [
        {
          title: "Esperar control de DAW en plan Free",
          body: "Sin Pro/Premier no hay Get Stems ni derechos comerciales. Ajusta expectativas o el presupuesto antes de prometer pistas separadas.",
        },
        {
          title: "Quemar créditos en Create duplicado",
          body: "Mismo prompt en Create no es lo mismo que Remix desde la keeper. Itera desde Library cuando el estilo base ya funciona.",
        },
        {
          title: "Confundir stems con Simple Create",
          body: "Las dos versiones A/B son mezclas completas, no pistas. Los stems salen de Get Stems (pago), no del botón Create Song.",
        },
        {
          title: "Separar antes de elegir keeper",
          body: "Get Stems cuesta créditos. Cierra la versión final con escucha A/B antes de exportar WAV.",
        },
        {
          title: "Cadena infinita de Extend",
          body: "Cada extend puede drift de tempo o voz. Mejor reescribir prompt o una sola extensión + edición manual.",
        },
      ],
      conclusion:
        "Las variaciones útiles en Suno empiezan en Library, no en un prompt vacío: Remix para otra toma, Extend para duración, Create solo cuando cambias el brief. Los stems son un paso de postproducción en planes de pago (Get Stems), no un bonus del Free. Escucha, elige keeper, exporta una vez y mezcla en contexto real. Si lo que necesitas es locución, ElevenLabs; si es vídeo, Runway; Suno sigue siendo la canción.",
      nextSteps: [
        "Repasa suno-primer-tema si aún no tienes una keeper clara.",
        "Monta audio y vídeo con el tutorial de Runway y el MP3 o instrumental elegido.",
        "Consulta la ficha Suno en el catálogo para modelos, Suno Studio y precios actualizados.",
      ],
      takeaway:
        "Library → keeper → Remix o Extend (o Create si cambias el brief) → escuchar → Get Stems solo en Pro/Premier cuando la versión final está cerrada → MP3 o WAV en contexto.",
    },
    en: {
      title: "Suno: variations and stems (2026)",
      metaTitle: "Suno variations and stems: practical guide 2026",
      metaDescription:
        "Start from a keeper in Library. Remix, Extend and section editor on paid plans. Get Stems (Pro/Premier), download MP3 or WAV. When to stop regenerating and rewrite the prompt.",
      excerpt:
        "You already have a first track. Learn to vary it without burning credits on empty Create, when to use Extend or Remix, and how to export stems if your plan allows.",
      intro:
        "This flow assumes you already generated a useful song with the suno-primer-tema tutorial. Today you do not start on Create with an empty field: you open that keeper in Library and decide whether you need another take (Remix), more length (Extend) or separated tracks (Get Stems). It takes about 22 minutes. Suno is not a DAW on the Free plan; stems and the section editor sit on Pro or Premier, with nuances covered in the steps.",
      problem:
        "After the first MP3, many people return to Create, paste the same prompt and regenerate until credits are gone. Or they confuse «two versions per generation» with real mix stems. Or they expect to mute drums on Free like in Logic. The result: nearly identical variations, files that do not fit the edit and frustration because the product does not promise studio control on the free tier.",
      whatYouWillLearn: [
        "Open a keeper from Library as the starting point",
        "Use Remix and Extend (and when not to repeat blind Create)",
        "Know which plans expose Get Stems and what options Suno offers",
        "Listen, pick and download MP3 or time-aligned stems",
        "Spot when to rewrite the prompt instead of keep varying",
      ],
      prerequisites: [
        "An account at suno.com and at least one saved song (ideally after suno-primer-tema)",
        "Headphones and a test clip or slide if you will mix with Runway",
        "For stems and the section editor: active Pro or Premier (check suno.com/pricing before commercial publish)",
      ],
      steps: [
        {
          title: "Open Library and find your keeper",
          content:
            "Go to suno.com and sign in. In the sidebar choose Library (or My Songs). Find the song you picked as keeper — the one that fit your clip or jingle. Open it in the detail player — do not hit Create yet. Note in one line what worked (tempo, vocal, chorus) and what you want to change (longer, new intro, cleaner instrumental). If you have no keeper, finish suno-primer-tema first.",
          whatYouShouldSee:
            "Song list with cover art or titles. One track open with play, duration and a three-dot or side action menu.",
          tip: "Rename the keeper in Library (`clip-coffee-keeper`) so it is not lost among drafts.",
          imageDescription:
            "Suno Library view with one song selected and detail player visible.",
        },
        {
          title: "Pick the iteration type before spending credits",
          content:
            "Three different paths: (1) Remix — a new take inspired by the same song, useful for style or energy without rewriting the whole prompt. (2) Extend — continue the track when you ran short on duration. (3) Create again — only when you clearly change genre, tempo or lyric theme; it is not a «cheap variation», it is a full generation (~5 credits, two versions). On Free you can remix and extend within your daily quota but you do not get stems or commercial rights. Do not treat Remix as hitting Create again with the same text.",
          whatYouShouldSee:
            "Menu entries such as Remix, Extend and Create clearly separated on the song page or editor.",
          warning:
            "Remix and Extend also cost credits. Read the on-screen cost before confirming.",
          imageDescription:
            "Action menu on a song: Remix, Extend and link to Create highlighted with short labels.",
        },
        {
          title: "Generate a variation with Remix",
          content:
            "On the keeper, choose Remix (sometimes under ··· or Edit). Suno asks for a short direction prompt: what to change («more uptempo», «instrumental», «softer vocal») without repeating the entire first prompt. Confirm and wait in the queue. You get a new track tied to the original idea — compare it to the keeper in the player, not just the first 10 seconds. If Remix does not appear, refresh the web app; if it is still missing, use Create with a prompt that references the keeper style («same lo-fi midtempo vibe but with piano») as plan B.",
          whatYouShouldSee:
            "Generation indicator then a new Library entry or result tab next to the original.",
          tip: "One change per Remix. «Faster and no chorus» beats five adjectives at once.",
          proTip:
            "Keep the original keeper until a variation wins in A/B.",
          imageDescription:
            "Remix dialog with one-line prompt and two players: original vs variation.",
        },
        {
          title: "Extend the track when the edit needs more seconds",
          content:
            "If your Runway clip is 15 s and the song 40 s, you may be fine. If you need 90 s continuous, use Extend from the same page (song editor on paid plans; on Free extension may be limited — if the button asks for upgrade, do not invent another path). Indicate where to continue or let Suno propose an ending. Listen to the splice: tempo or vocal timbre can shift slightly. Trim the tail in CapCut or Premiere if it feels redundant. Extend does not fix bad lyrics; it only lengthens what you had.",
          whatYouShouldSee:
            "Longer waveform or increased duration after Extend. Possible join marker between old and new segments.",
          warning:
            "Chained Extends can sound inconsistent. One extend plus manual trim beats four extends in a row.",
          imageDescription:
            "Editor or Extend view with lengthened waveform and confirm controls.",
        },
        {
          title: "When and where stems exist (Get Stems)",
          content:
            "Stems are separated tracks (vocals, drums, bass, other instruments) you can export to a DAW. They do not come from Simple Create with A/B versions — they come from Get Stems under Edit on a specific song (Suno’s public docs: Auto Split into ~12 categories, Split from Mix to isolate one instrument or vocal, and Advanced Split with a long instrument list for Premier only). You need active Pro or Premier; the Free plan does not include stem export or commercial rights. Stem extraction costs extra credits beyond generation. Suno Studio (Premier) adds multitrack export with more control; this tutorial focuses on Get Stems from Library/Editor, not replacing a full pro studio.",
          whatYouShouldSee:
            "Edit → Get Stems on a paid song, or an upgrade message on Free.",
          warning:
            "Having stems does not grant commercial license — that depends on plan and terms at suno.com. Do not assume monetized YouTube on a free account.",
          imageDescription:
            "Edit menu open with Get Stems and Auto Split / Split from Mix options visible.",
        },
        {
          title: "Extract stems and check each track",
          content:
            "On a paid plan, open Get Stems and start with Auto Split for a quick classic split. Use Split from Mix when you need «vocals only» or «everything without vocals» for an instrumental bed. On Premier, Advanced Split lets you pick specific instruments from a long list — useful when Auto Split lumps percussion with other elements. Separation takes a moment; do not close the tab. When done, play each stem in Suno before download: artifacts and bleed are normal in any AI splitter. If one stem sounds worse, a second pull sometimes improves one instrument; do not run ten pulls in a row without listening.",
          whatYouShouldSee:
            "List of playable stems (Vocals, Drums, Bass, etc.) and download per track or bundle.",
          tip: "For a clip with dialogue, lower Vocals in the DAW or use the «everything else» stem depending on what you requested in Split from Mix.",
          imageDescription:
            "Stem panel with per-track play buttons and Download WAV or ZIP.",
        },
        {
          title: "Download MP3 or stems and test in context",
          content:
            "For quick share or video bed without fine mix: ··· → Download → MP3 (possible watermark on Free). To mix in Logic, Ableton or Reaper: download the WAV or stem ZIP Suno offers after Get Stems — they are usually time-aligned. Import in the DAW, set levels and minimal EQ. Lay the full MP3 or instrumental under your Runway clip and check tempo still fits the edit. Suno does not auto-sync to your video timeline.",
          whatYouShouldSee:
            "Files in Downloads: MP3 and/or WAV folder. In the video editor, audio under the clip without major drift.",
          proTip:
            "Hand collaborators two assets: full mix (reference) and stems (work) — standard in post.",
          imageDescription:
            "File explorer with stem ZIP and video timeline with imported separate tracks.",
        },
        {
          title: "Stop regenerating and rewrite the prompt",
          content:
            "Practical rule: if three Remixes or two Create rounds with the same text do not move the needle, the bottleneck is the brief, not luck. For style: change tempo, instruments or «instrumental / no vocals». For lyrics: switch to Custom with your text or rewrite the theme in a new sentence. For the edit: sometimes trimming the keeper in the video editor beats another generation. Save stems for when the final version is locked — separating ten drafts burns credits for nothing. Log the prompt that produced the winning keeper so Library does not erase the lesson.",
          whatYouShouldSee:
            "A note with the winning prompt and a written decision: «rewrite» vs «keeper + Extend» vs «stems done».",
          warning:
            "Calling the stereo mix «vocal stem» after export confuses everyone in the DAW.",
          imageDescription:
            "Notes with revised prompt and flow arrow: explore → keeper → stems once.",
        },
      ],
      realUseCases: [
        {
          title: "Instrumental under a talking-head clip",
          body: "Keeper with chorus fighting dialogue. Split from Mix → download no-vocal stem (or instrumental bed), -6 dB under the Runway MP4.",
        },
        {
          title: "Longer jingle for a pitch deck",
          body: "30 s useful but the deck runs 60 s. One Extend from the end, listen to the splice, trim 5 s of fluff in Premiere.",
        },
        {
          title: "Mockup for an external mixer",
          body: "Uptempo Remix for client version B. Final keeper → Get Stems Auto Split → ZIP to whoever mixes in Ableton, plus Suno link as reference.",
        },
      ],
      commonMistakes: [
        {
          title: "Expecting DAW control on Free",
          body: "Without Pro/Premier there is no Get Stems or commercial rights. Adjust expectations or budget before promising separated tracks.",
        },
        {
          title: "Burning credits on duplicate Create",
          body: "Same prompt in Create is not the same as Remix from the keeper. Iterate from Library when the base style already works.",
        },
        {
          title: "Confusing stems with Simple Create",
          body: "A/B versions are full mixes, not tracks. Stems come from Get Stems (paid), not the Create Song button.",
        },
        {
          title: "Separating before picking a keeper",
          body: "Get Stems costs credits. Lock the final version with A/B listening before exporting WAV.",
        },
        {
          title: "Endless Extend chains",
          body: "Each extend can drift tempo or vocal. Better rewrite the prompt or one extend plus manual edit.",
        },
      ],
      conclusion:
        "Useful Suno variations start in Library, not an empty prompt: Remix for another take, Extend for length, Create only when the brief changes. Stems are a paid-plan post step (Get Stems), not a Free bonus. Listen, pick a keeper, export once and mix in real context. For spoken voice use ElevenLabs; for video use Runway; Suno still makes the song.",
      nextSteps: [
        "Review suno-primer-tema if you do not have a clear keeper yet.",
        "Cut audio and video with the Runway tutorial and your chosen MP3 or instrumental.",
        "See the Suno tool page in the catalog for models, Suno Studio and current pricing.",
      ],
      takeaway:
        "Library → keeper → Remix or Extend (or Create if the brief changes) → listen → Get Stems on Pro/Premier only when the final is locked → MP3 or WAV in context.",
    },
  },
};
