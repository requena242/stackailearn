import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "capcut";

export const capcut: Tool = {
  id: slug,
  slug,
  name: "CapCut",
  vendor: "CapCut",
  officialUrl: "https://www.capcut.com",
  category: "video",
  pricing: "freemium",
  featured: false,
  accent: "#00C1CD",
  initials: "CC",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.5,
  ratingCount: 460,
  lastUpdated: "2026-10-12",
  difficulty: "beginner",
  platforms: ["web", "macos", "windows", "ios", "android"],
  useTypes: ["create"],
  tags: [
    "vídeo",
    "subtítulos",
    "auto-captions",
    "b-roll",
    "stock",
    "reels",
    "shorts",
    "edición",
  ],
  alternatives: ["descript", "runway"],
  relatedTools: ["descript", "runway", "kling", "elevenlabs"],
  relatedTutorials: [
    "capcut-subtitulos-broll",
    "descript-editar-podcast",
    "runway-primer-clip",
    "kling-primer-clip",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "CapCut con vídeo vertical en timeline, pista de subtítulos generados y clip de stock en una capa superior",
        caption:
          "Auto captions en la línea de tiempo y B-roll de stock o IA en cortes cortos. El entregable es el MP4 exportado.",
        hint:
          "Hero 1600×900: editor CapCut 9:16, bloques de Auto captions en timeline, panel de estilo de texto y miniatura de Stock materials.",
      },
      en: {
        alt: "CapCut with vertical video on timeline, generated subtitle track and stock clip on an upper layer",
        caption:
          "Auto captions on the timeline and stock or AI B-roll in short cutaways. The deliverable is the exported MP4.",
        hint:
          "Hero 1600×900: CapCut 9:16 editor, Auto captions blocks on timeline, text style panel and Stock materials thumbnail.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Editor de vídeo con auto captions, biblioteca de stock y clips de IA. Ideal para shorts verticales con subtítulos y cortes visuales.",
      fullDescription:
        "CapCut (capcut.com) edita vídeo en web, escritorio y móvil. Para creadores de formato corto, las piezas que más pesan son **Auto captions** (reconocimiento de voz que genera subtítulos sincronizados), estilos de texto animados y una biblioteca de **Stock materials** para B-roll sin salir del editor. En planes y regiones concretas también aparecen rutas de **AI media** (texto-a-vídeo o imagen-a-vídeo) para insertar un plano de apoyo de pocos segundos — los modelos y créditos rotan en la UI oficial.\n\nEncaja cuando ya tienes un talking head o voz en cámara (9:16 o 16:9) y necesitas publicar con subtítulos legibles y dos o tres cortes de apoyo, no un largometraje. Descript sigue siendo la referencia en StackAI Learn para podcast editado por transcripción; Runway y Kling para generar motion desde un still. CapCut une captación social: captions, stock y export a redes.\n\nRevisa en capcut.com el acuerdo de materiales y qué clips marcan uso comercial antes de entregar a cliente. No hay programa de afiliado en StackAI Learn.",
      subcategory: "Edición de vídeo corto y subtítulos",
      pricingDetails:
        "Hay tier gratuito con funciones básicas de edición y captions según la política actual en capcut.com. CapCut Pro y planes superiores amplían export sin marca, efectos y generación con IA. Los límites de Auto captions, stock y créditos de vídeo IA cambian — confirma en precios antes de prometer volumen semanal. No hay programa de afiliado en StackAI Learn.",
      bestFor: [
        "Reels, TikTok y Shorts con talking head y subtítulos automáticos",
        "Añadir B-roll de stock o un clip IA corto sin otro NLE",
        "Iterar estilo de captions (fuente, animación, palabras clave) en el mismo proyecto",
        "Exportar MP4 con subtítulos quemados para redes",
      ],
      notFor: [
        "Color grading y master de larga duración tipo DaVinci",
        "Podcast solo audio — Descript o el flujo de elevenlabs-primer-voiceover",
        "Generar el plano principal desde cero — Runway o kling-primer-clip primero",
        "Entregables sin leer licencia del stock o del clip IA usado",
      ],
      pros: [
        "Auto captions documentados en web, escritorio y móvil",
        "Edición de bloques de subtítulo y estilos en timeline",
        "Stock materials integrado para B-roll con búsqueda",
        "Rutas AI media para clips cortos de apoyo (según región y plan)",
        "Apps y editor web sin instalar suite profesional",
      ],
      cons: [
        "Precisión de captions depende de audio limpio y del idioma elegido",
        "Funciones IA y modelos no están en todas las regiones",
        "Stock y música tienen reglas de licencia propias",
        "Proyectos largos o muchas capas pueden ir lentos en web",
        "La UI y nombres de menú cambian entre versiones",
      ],
      keyFeatures: [
        "Auto captions / reconocimiento de subtítulos desde el audio",
        "Estilos, animaciones y edición manual de captions",
        "Biblioteca Stock materials para B-roll",
        "AI media: texto-a-vídeo e imagen-a-vídeo en el editor (según plan)",
        "Export de vídeo con subtítulos incrustados; SRT en algunos flujos web/escritorio",
      ],
      faq: [
        {
          q: "¿CapCut o Descript para mi vídeo?",
          a: "Si el entregable es audio de podcast o cortas solo por transcripción de voz, Descript. Si es vídeo vertical con captions visibles y B-roll en timeline, CapCut. Puedes combinar: locución en ElevenLabs, talking head en CapCut.",
        },
        {
          q: "¿Los auto captions son exactos?",
          a: "Usan reconocimiento de voz en la nube. Audio con ruido, música alta o términos raros obligan a revisar bloque a bloque. La ayuda oficial recomienda elegir el idioma hablado correcto y regenerar si hay muchos errores.",
        },
        {
          q: "¿De dónde saco B-roll?",
          a: "Stock materials dentro del editor, o un clip corto generado en AI media si tu cuenta lo muestra. Para motion cinematográfico desde un still, Runway o Kling y luego importas el MP4 a CapCut.",
        },
        {
          q: "¿Puedo usar el vídeo con un cliente?",
          a: "Depende del plan, del stock usado y de si el clip IA tiene marca de uso comercial en la UI. Lee el Materials License Agreement en capcut.com antes de facturar.",
        },
      ],
      quickTutorial: {
        title: "Short con captions y un corte de B-roll",
        steps: [
          "Crea proyecto 9:16 e importa tu talking head.",
          "Genera Auto captions con el idioma hablado correcto.",
          "Corrige nombres y frases en los bloques de subtítulo.",
          "Aplica un estilo de caption legible en móvil.",
          "Inserta un clip de Stock materials o un MP4 de IA en un hueco de 2–4 s.",
          "Exporta MP4 y reproduce con sonido para validar sync.",
        ],
      },
    },
    en: {
      shortDescription:
        "Video editor with auto captions, stock library and AI clips. Built for vertical shorts with subtitles and visual cutaways.",
      fullDescription:
        "CapCut (capcut.com) edits video on web, desktop and mobile. For short-form creators, the heavy lifts are **Auto captions** (speech recognition that builds synced subtitles), animated text styles and a **Stock materials** library for B-roll without leaving the editor. On certain plans and regions you also get **AI media** routes (text-to-video or image-to-video) to drop a few seconds of supporting footage — models and credits rotate in the official UI.\n\nUse it when you already have a talking head or on-camera voice (9:16 or 16:9) and need readable subtitles plus two or three visual cutaways, not a feature film. Descript remains the StackAI Learn reference for transcript-driven podcast editing; Runway and Kling for motion from a still. CapCut ties the social publish path: captions, stock and export to feeds.\n\nRead the materials agreement on capcut.com and which clips are marked for commercial use before client delivery. There is no affiliate program on StackAI Learn.",
      subcategory: "Short-form video editing and subtitles",
      pricingDetails:
        "A free tier exists with basic editing and captions under the current policy on capcut.com. CapCut Pro and higher plans expand watermark-free export, effects and AI generation. Auto captions, stock and AI video credit limits change — confirm pricing before you promise weekly volume. There is no affiliate program on StackAI Learn.",
      bestFor: [
        "Reels, TikTok and Shorts with talking head and automatic subtitles",
        "Adding stock B-roll or a short AI clip without another NLE",
        "Iterating caption style (font, animation, keywords) in one project",
        "Exporting MP4 with burned-in subtitles for social",
      ],
      notFor: [
        "Long-form color grading and mastering like DaVinci",
        "Audio-only podcast — Descript or elevenlabs-primer-voiceover",
        "Generating the main shot from scratch — Runway or kling-primer-clip first",
        "Deliverables without reading the license on stock or AI clips used",
      ],
      pros: [
        "Auto captions documented on web, desktop and mobile",
        "Subtitle block editing and styles on the timeline",
        "Integrated Stock materials for searchable B-roll",
        "AI media routes for short supporting clips (per region and plan)",
        "Apps and web editor without installing a pro suite",
      ],
      cons: [
        "Caption accuracy depends on clean audio and the language you pick",
        "AI features and models are not available in every region",
        "Stock and music carry their own license rules",
        "Long projects or many layers can feel slow on web",
        "UI and menu names change between releases",
      ],
      keyFeatures: [
        "Auto captions / subtitle recognition from audio",
        "Caption styles, animations and manual edits",
        "Stock materials library for B-roll",
        "AI media: text-to-video and image-to-video in the editor (per plan)",
        "Video export with burned-in subtitles; SRT on some web/desktop flows",
      ],
      faq: [
        {
          q: "CapCut or Descript for my video?",
          a: "If the deliverable is podcast audio or you only cut by voice transcript, Descript. If it is vertical video with visible captions and B-roll on a timeline, CapCut. You can combine: voiceover in ElevenLabs, talking head in CapCut.",
        },
        {
          q: "Are auto captions exact?",
          a: "They use cloud speech recognition. Noisy audio, loud music or rare terms mean block-by-block review. Official help recommends picking the correct spoken language and regenerating when errors pile up.",
        },
        {
          q: "Where do I get B-roll?",
          a: "Stock materials inside the editor, or a short clip from AI media if your account shows it. For cinematic motion from a still, use Runway or Kling, then import the MP4 into CapCut.",
        },
        {
          q: "Can I use the video for a client?",
          a: "Depends on plan, stock used and whether the AI clip is marked commercial in the UI. Read the Materials License Agreement on capcut.com before you invoice.",
        },
      ],
      quickTutorial: {
        title: "A short with captions and one B-roll cut",
        steps: [
          "Create a 9:16 project and import your talking head.",
          "Generate Auto captions with the correct spoken language.",
          "Fix names and phrases in subtitle blocks.",
          "Apply a caption style that reads on mobile.",
          "Drop a Stock materials clip or an AI MP4 into a 2–4 s gap.",
          "Export MP4 and play with sound to validate sync.",
        ],
      },
    },
  },
};
