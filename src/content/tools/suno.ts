import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "suno";

export const suno: Tool = {
  id: slug,
  slug,
  name: "Suno",
  vendor: "Suno Inc.",
  officialUrl: "https://suno.com",
  category: "audio",
  pricing: "freemium",
  featured: false,
  accent: "#A855F7",
  initials: "SU",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.6,
  ratingCount: 520,
  lastUpdated: "2026-08-31",
  difficulty: "intermediate",
  platforms: ["web", "ios", "android"],
  useTypes: ["create"],
  tags: ["música", "canciones", "letras", "voces", "producción", "generación"],
  alternatives: ["elevenlabs", "chatgpt", "runway"],
  relatedTools: ["elevenlabs", "runway", "chatgpt"],
  relatedTutorials: ["runway-primer-clip", "chatgpt-primeros-pasos", "grok-primer-flujo"],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Interfaz de Suno con prompt de canción, controles de estilo y reproductor de audio",
        caption: "Un prompt concreto (género, tempo, tema) vale más que una lista de adjetivos.",
        hint: "Hero 1600×900: Suno Create con un prompt de 1–2 líneas, selector de modo Simple/Custom visible y dos versiones de la canción generada en el reproductor.",
      },
      en: {
        alt: "Suno interface with song prompt, style controls and audio player",
        caption: "A concrete prompt (genre, tempo, theme) beats a list of adjectives.",
        hint: "Hero 1600×900: Suno Create with a 1–2 line prompt, Simple/Custom mode selector visible and two generated song versions in the player.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Genera canciones completas (letra, voz e instrumentación) a partir de un prompt. No es TTS ni vídeo.",
      fullDescription:
        "Suno convierte una descripción en una canción con letra, voces y producción. Tiene sentido cuando necesitas un tema de fondo, un jingle de prueba o una maqueta musical para un clip — no cuando solo quieres leer un guion en voz alta (eso es ElevenLabs) ni generar vídeo (eso es Runway).\n\nEl flujo que no quema créditos: prompt de una línea con género + tempo + tema → generar dos versiones → escuchar la que encaje → extender o editar secciones si hace falta. Si la letra no cuadra, reescribe el prompt antes de regenerar diez veces.\n\nEl plan gratuito da unas 10 canciones al día para probar; los planes de pago desbloquean derechos comerciales, modelos avanzados (v5.5), separación de stems y el editor de canciones. Suno Studio (plan Premier) añade un DAW en el navegador para quien ya trabaja con pistas.",
      subcategory: "Generación de canciones con IA",
      pricingDetails:
        "Gratis: unas 50 créditos diarios (~10 canciones), sin derechos comerciales y con marca de agua. Pro (~10 $/mes, ~8 $/mes anual): ~2.500 créditos/mes (~500 canciones), modelos v4–v5.5, derechos comerciales, editor de canciones, stems y cola prioritaria. Premier (~30 $/mes, ~24 $/mes anual): ~10.000 créditos/mes (~2.000 canciones) más Suno Studio. Los créditos no se acumulan entre días o meses; stems y ediciones también consumen créditos. Revisa la página de precios antes de publicar con fines comerciales.",
      bestFor: [
        "Tema de fondo o jingle de 30–90 segundos para un clip de Runway",
        "Maquetar una canción con letra y voz antes de ir a un estudio",
        "Probar estilos musicales con prompts cortos sin saber producir",
        "Exportar stems para mezclar en un DAW (planes de pago)",
      ],
      notFor: [
        "Locución o voiceover de un guion — usa ElevenLabs",
        "Un álbum entero sin revisar letra, estructura y derechos",
        "Publicar comercialmente con el plan gratuito",
        "Sustituir un compositor o productor en una producción final profesional",
      ],
      pros: [
        "Canciones completas (voz + letra + instrumentos) en menos de un minuto",
        "Dos versiones por generación para elegir la que encaje",
        "Editor de secciones, extensión y stems en planes de pago",
        "Apps web, iOS y Android",
        "Derechos comerciales incluidos en Pro y Premier",
      ],
      cons: [
        "El plan gratuito no permite uso comercial ni modelos avanzados",
        "La letra generada a veces suena genérica o incoherente",
        "Stems y ediciones avanzadas consumen créditos extra",
        "No controlas cada nota como en un DAW tradicional",
        "La calidad vocal varía según género y prompt",
      ],
      keyFeatures: [
        "Generación de canciones desde prompt de texto",
        "Modelos v4.5-all (gratis) y v4–v5.5 (de pago)",
        "Editor de canciones: recortar, extender, reemplazar secciones",
        "Separación de stems (voz, batería, bajo, etc.)",
        "Suno Studio (Premier): DAW generativo en el navegador",
      ],
      faq: [
        {
          q: "¿Suno sustituye a ElevenLabs?",
          a: "No. Suno crea canciones con música, letra y voz cantada. ElevenLabs convierte texto en voz hablada (TTS). Si necesitas un voiceover para un vídeo, usa ElevenLabs; si necesitas un tema musical, usa Suno.",
        },
        {
          q: "¿Puedo usar las canciones en YouTube o anuncios?",
          a: "Solo con un plan de pago activo (Pro o Premier). El plan gratuito es para uso personal y experimental. Lee los términos de servicio antes de monetizar.",
        },
        {
          q: "¿Cómo escribo un buen prompt?",
          a: "Incluye género, tempo, instrumentación y tema en una o dos frases. Ejemplo: «indie pop midtempo, guitarra acústica, letra sobre un viaje en tren». Evita adjetivos vagos como «épico» sin contexto.",
        },
        {
          q: "¿Encaja con Runway?",
          a: "Sí. Genera el clip en Runway, crea el tema en Suno y sincroniza ambos en un editor de vídeo. Cada herramienta hace una cosa.",
        },
        {
          q: "¿Qué es Suno Studio?",
          a: "Un DAW en el navegador incluido en el plan Premier. Permite editar pistas, exportar MIDI y trabajar con stems de forma más granular que el editor básico.",
        },
      ],
      quickTutorial: {
        title: "Un tema de un minuto para un clip",
        steps: [
          "Escribe un prompt: género + tempo + tema. Una o dos frases, no un párrafo.",
          "Pulsa Create y escucha las dos versiones que devuelve Suno.",
          "Elige la que encaje. Si la letra falla, ajusta el prompt y regenera.",
          "Extiende la canción si necesitas más de 30 segundos.",
          "Descarga el MP3 y reprodúcelo sobre tu clip de Runway para comprobar el ritmo.",
        ],
      },
    },
    en: {
      shortDescription:
        "Generate complete songs (lyrics, vocals and instrumentation) from a prompt. Not TTS or video.",
      fullDescription:
        "Suno turns a description into a song with lyrics, vocals and production. It makes sense when you need a background track, a test jingle or a musical mockup for a clip — not when you only want to read a script aloud (that is ElevenLabs) or generate video (that is Runway).\n\nThe flow that does not burn credits: a one-line prompt with genre + tempo + theme → generate two versions → listen to the one that fits → extend or edit sections if needed. If the lyrics miss, rewrite the prompt before regenerating ten times.\n\nThe free plan gives roughly 10 songs a day to experiment; paid plans unlock commercial rights, advanced models (v5.5), stem separation and the song editor. Suno Studio (Premier plan) adds a browser-based DAW for anyone already working with tracks.",
      subcategory: "AI song generation",
      pricingDetails:
        "Free: about 50 daily credits (~10 songs), no commercial rights and watermarked output. Pro (~$10/mo, ~$8/mo annual): ~2,500 credits/mo (~500 songs), v4–v5.5 models, commercial rights, song editor, stems and priority queue. Premier (~$30/mo, ~$24/mo annual): ~10,000 credits/mo (~2,000 songs) plus Suno Studio. Credits do not roll over between days or months; stems and edits also consume credits. Check the pricing page before publishing commercially.",
      bestFor: [
        "30–90 second background track or jingle for a Runway clip",
        "Mocking up a song with lyrics and vocals before going to a studio",
        "Testing musical styles with short prompts without production skills",
        "Exporting stems to mix in a DAW (paid plans)",
      ],
      notFor: [
        "Voiceover or narration of a script — use ElevenLabs",
        "A full album without reviewing lyrics, structure and rights",
        "Commercial publishing on the free plan",
        "Replacing a composer or producer on a final professional production",
      ],
      pros: [
        "Complete songs (vocals + lyrics + instruments) in under a minute",
        "Two versions per generation to pick the one that fits",
        "Section editor, extension and stems on paid plans",
        "Web, iOS and Android apps",
        "Commercial rights included on Pro and Premier",
      ],
      cons: [
        "Free plan does not allow commercial use or advanced models",
        "Generated lyrics sometimes sound generic or incoherent",
        "Stems and advanced edits consume extra credits",
        "You do not control every note like in a traditional DAW",
        "Vocal quality varies by genre and prompt",
      ],
      keyFeatures: [
        "Song generation from text prompt",
        "v4.5-all (free) and v4–v5.5 (paid) models",
        "Song editor: crop, extend, replace sections",
        "Stem separation (vocals, drums, bass, etc.)",
        "Suno Studio (Premier): generative DAW in the browser",
      ],
      faq: [
        {
          q: "Does Suno replace ElevenLabs?",
          a: "No. Suno creates songs with music, lyrics and sung vocals. ElevenLabs turns text into spoken voice (TTS). If you need a voiceover for a video, use ElevenLabs; if you need a music track, use Suno.",
        },
        {
          q: "Can I use songs on YouTube or in ads?",
          a: "Only with an active paid plan (Pro or Premier). The free plan is for personal and experimental use. Read the terms of service before monetizing.",
        },
        {
          q: "How do I write a good prompt?",
          a: "Include genre, tempo, instrumentation and theme in one or two sentences. Example: «midtempo indie pop, acoustic guitar, lyrics about a train journey». Avoid vague adjectives like «epic» without context.",
        },
        {
          q: "How does it fit with Runway?",
          a: "Generate the clip in Runway, create the track in Suno and sync both in a video editor. Each tool does one job.",
        },
        {
          q: "What is Suno Studio?",
          a: "A browser-based DAW included in the Premier plan. It lets you edit tracks, export MIDI and work with stems more granularly than the basic editor.",
        },
      ],
      quickTutorial: {
        title: "A one-minute track for a clip",
        steps: [
          "Write a prompt: genre + tempo + theme. One or two sentences, not a paragraph.",
          "Hit Create and listen to the two versions Suno returns.",
          "Pick the one that fits. If the lyrics fail, adjust the prompt and regenerate.",
          "Extend the song if you need more than 30 seconds.",
          "Download the MP3 and play it over your Runway clip to check the pace.",
        ],
      },
    },
  },
};
