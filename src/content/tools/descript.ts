import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "descript";

export const descript: Tool = {
  id: slug,
  slug,
  name: "Descript",
  vendor: "Descript",
  officialUrl: "https://www.descript.com",
  category: "audio",
  pricing: "freemium",
  featured: false,
  accent: "#7C3AED",
  initials: "DS",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.6,
  ratingCount: 480,
  lastUpdated: "2026-10-08",
  difficulty: "beginner",
  platforms: ["web", "macos", "windows"],
  useTypes: ["create"],
  tags: [
    "podcast",
    "edición",
    "transcripción",
    "audio",
    "vídeo",
    "studio-sound",
    "overdub",
  ],
  alternatives: ["elevenlabs", "runway"],
  relatedTools: ["elevenlabs", "runway", "chatgpt"],
  relatedTutorials: [
    "descript-editar-podcast",
    "elevenlabs-primer-voiceover",
    "runway-primer-clip",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Descript con transcripción alineada al audio, un bloque seleccionado y Studio Sound en el panel",
        caption:
          "Editas el podcast como un documento: borrar texto recorta el audio. Studio Sound limpia la habitación.",
        hint:
          "Hero 1600×900: editor de Descript con waveform arriba, transcripción con un párrafo resaltado y panel lateral mostrando Studio Sound o Remove filler words.",
      },
      en: {
        alt: "Descript with transcript aligned to audio, a selected block and Studio Sound in the side panel",
        caption:
          "Edit the podcast like a document: delete text to cut audio. Studio Sound cleans the room tone.",
        hint:
          "Hero 1600×900: Descript editor with waveform on top, transcript with one paragraph highlighted and side panel showing Studio Sound or Remove filler words.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Editor de audio y vídeo guiado por transcripción. Cortas, limpias y exportas un episodio sin timeline tradicional.",
      fullDescription:
        "Descript transcribe lo que subes o grabas y muestra el audio como texto editable. Borrar o mover frases en la transcripción recorta la pista; no tienes que buscar silencios a mano en una línea de tiempo clásica. Incluye herramientas de IA para quitar muletillas («um», «eh»), mejorar el audio con Studio Sound, corregir una línea con grabación o voces de IA (Overdub, según plan y consentimiento) y un asistente integrado (Underlord) que ayuda con tareas de edición y guion en la app.\n\nEncaja cuando ya tienes una grabación de podcast, entrevista o monólogo y quieres publicar más rápido: episodio corto, clip para redes o versión limpia antes de subir a tu host. No sustituye un DAW completo para mezcla musical ni un rodaje de vídeo — Runway y ElevenLabs cubren generación; Descript ordena lo que ya grabaste.\n\nLos nombres de planes, minutos de transcripción y funciones de IA cambian en descript.com; revisa precios antes de prometer un volumen semanal a cliente.",
      subcategory: "Edición por transcripción (audio y vídeo)",
      pricingDetails:
        "Hay tier gratuito con límites de transcripción y exportación según la política actual en descript.com. Los planes de pago amplían horas transcritas, resolución de export, Overdub y funciones de equipo. Studio Sound y eliminación de muletillas suelen estar en la oferta principal, pero los detalles rotan — confirma en la página de precios. No hay programa de afiliado en StackAI Learn.",
      bestFor: [
        "Podcasts y entrevistas donde el corte es borrar tangentes y muletillas",
        "Episodios con una o pocas pistas de voz y poco diseño sonoro",
        "Equipos que quieren revisar el guion leyendo la transcripción",
        "Exportar audio limpio (MP3/WAV) o vídeo con captions desde el mismo proyecto",
      ],
      notFor: [
        "Mezcla musical multitrack con sidechain y MIDI",
        "Quien aún no tiene grabación — empieza con micrófono o guion en ChatGPT",
        "Clonar la voz de otra persona sin consentimiento (Overdub tiene reglas propias)",
        "Efectos de vídeo generativos — eso es Runway u otro generador",
      ],
      pros: [
        "Edición por texto: cortar y reordenar sin razor en timeline",
        "Transcripción automática alineada al audio",
        "Remove filler words y Studio Sound en un clic (según UI)",
        "Overdub y corrección por texto en líneas sueltas",
        "Underlord como asistente de IA dentro del editor",
        "Export de audio y vídeo para podcast hosts y redes",
      ],
      cons: [
        "Minutos de transcripción y export dependen del plan",
        "Proyectos largos o muchas pistas pueden volverse pesados",
        "Overdub y voces IA exigen configuración y revisión de calidad",
        "No es Pro Tools ni Logic para producción musical avanzada",
        "La UI y nombres de funciones cambian entre versiones",
      ],
      keyFeatures: [
        "Transcripción automática y edición texto-a-timeline",
        "Remove filler words (muletillas)",
        "Studio Sound (mejora de voz y reducción de ruido de habitación)",
        "Overdub / voces de IA para corregir frases (según plan)",
        "Underlord: asistente de IA para edición y guion",
        "Grabación multitrack en la app y export MP3/WAV/vídeo",
      ],
      faq: [
        {
          q: "¿Descript o un editor de vídeo clásico?",
          a: "Si el trabajo es hablar a cámara o micrófono y cortar por contenido, Descript suele ser más rápido. Si el entregable es montaje visual complejo con B-roll y color, un NLE tradicional sigue mandando.",
        },
        {
          q: "¿Puedo editar solo borrando texto?",
          a: "Sí, ese es el flujo central: seleccionar o borrar palabras y frases en la transcripción recorta el audio subyacente. Revisa siempre el preview porque a veces el ASR se equivoca en una palabra.",
        },
        {
          q: "¿Qué es Studio Sound?",
          a: "Un efecto de mejora de voz que reduce ruido de habitación y ecualiza para sonar más cercano a estudio. No arregla un micrófono roto; mejora grabaciones razonables.",
        },
        {
          q: "¿Descript o ElevenLabs?",
          a: "ElevenLabs genera voz desde guion (TTS). Descript edita grabaciones existentes y puede corregir líneas con Overdub. Para un voiceover desde cero, mira elevenlabs-primer-voiceover; para limpiar un episodio grabado, Descript.",
        },
      ],
      quickTutorial: {
        title: "Un episodio corto listo para exportar",
        steps: [
          "Crea un proyecto y sube el audio del episodio o graba en la app.",
          "Espera la transcripción y corrige nombres mal escritos.",
          "Borra tangentes en el texto; escucha el corte.",
          "Aplica Remove filler words y Studio Sound con moderación.",
          "Exporta MP3 o WAV para tu host de podcast.",
        ],
      },
    },
    en: {
      shortDescription:
        "Transcript-driven audio and video editor. Cut, clean and export an episode without a classic timeline-first workflow.",
      fullDescription:
        "Descript transcribes what you upload or record and shows audio as editable text. Deleting or moving sentences in the transcript cuts the track — you are not hunting silences on a traditional timeline. It includes AI tools to remove filler words («um», «uh»), polish audio with Studio Sound, fix a line with re-recording or AI voices (Overdub, per plan and consent) and a built-in assistant (Underlord) for editing and script tasks inside the app.\n\nUse it when you already have a podcast, interview or monologue recording and want to ship faster: a short episode, a social clip or a clean version before uploading to your host. It does not replace a full DAW for music mixing or a video shoot — Runway and ElevenLabs cover generation; Descript tidies what you already recorded.\n\nPlan names, transcription minutes and AI features change on descript.com; check pricing before promising a weekly volume to a client.",
      subcategory: "Transcript-based editing (audio and video)",
      pricingDetails:
        "A free tier exists with transcription and export limits under the current policy on descript.com. Paid plans expand transcribed hours, export resolution, Overdub and team features. Studio Sound and filler removal are usually in the main offering, but details rotate — confirm on the pricing page. There is no affiliate program on StackAI Learn.",
      bestFor: [
        "Podcasts and interviews where editing means cutting tangents and fillers",
        "Episodes with one or few voice tracks and light sound design",
        "Teams that want to review content by reading the transcript",
        "Exporting clean audio (MP3/WAV) or video with captions from one project",
      ],
      notFor: [
        "Multitrack music mixing with sidechain and MIDI",
        "Anyone without a recording yet — start with a mic or a script in ChatGPT",
        "Cloning someone else’s voice without consent (Overdub has its own rules)",
        "Generative video effects — that is Runway or another generator",
      ],
      pros: [
        "Text-based editing: cut and reorder without razor on a timeline",
        "Automatic transcription aligned to audio",
        "Remove filler words and Studio Sound in a click (per UI)",
        "Overdub and text-driven fixes on single lines",
        "Underlord as an in-editor AI assistant",
        "Audio and video export for podcast hosts and social",
      ],
      cons: [
        "Transcription minutes and export depend on the plan",
        "Long projects or many tracks can get heavy",
        "Overdub and AI voices need setup and quality review",
        "Not Pro Tools or Logic for advanced music production",
        "UI and feature names change between releases",
      ],
      keyFeatures: [
        "Automatic transcription and text-to-timeline editing",
        "Remove filler words",
        "Studio Sound (voice polish and room noise reduction)",
        "Overdub / AI voices to fix phrases (per plan)",
        "Underlord: AI assistant for editing and script work",
        "Multitrack recording in-app and MP3/WAV/video export",
      ],
      faq: [
        {
          q: "Descript or a classic video editor?",
          a: "If the job is talking to camera or mic and cutting by content, Descript is usually faster. If the deliverable is complex visual editing with B-roll and color, a traditional NLE still leads.",
        },
        {
          q: "Can I edit just by deleting text?",
          a: "Yes — that is the core flow: select or delete words and sentences in the transcript to cut the underlying audio. Always preview because ASR sometimes mishears a word.",
        },
        {
          q: "What is Studio Sound?",
          a: "A voice enhancement effect that reduces room noise and EQs toward a closer-to-studio sound. It does not fix a broken mic; it improves reasonable recordings.",
        },
        {
          q: "Descript or ElevenLabs?",
          a: "ElevenLabs generates speech from a script (TTS). Descript edits existing recordings and can fix lines with Overdub. For voiceover from scratch, see elevenlabs-primer-voiceover; to clean a recorded episode, Descript.",
        },
      ],
      quickTutorial: {
        title: "A short episode ready to export",
        steps: [
          "Create a project and upload episode audio or record in the app.",
          "Wait for transcription and fix misspelled names.",
          "Delete tangents in the text; listen to the cut.",
          "Apply Remove filler words and Studio Sound in moderation.",
          "Export MP3 or WAV for your podcast host.",
        ],
      },
    },
  },
};
