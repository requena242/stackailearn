import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "kling";

export const kling: Tool = {
  id: slug,
  slug,
  name: "Kling AI",
  vendor: "Kling AI",
  officialUrl: "https://klingai.com",
  category: "video",
  pricing: "freemium",
  featured: false,
  accent: "#F59E0B",
  initials: "KL",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.3,
  ratingCount: 410,
  lastUpdated: "2026-10-05",
  difficulty: "intermediate",
  platforms: ["web", "ios", "android"],
  useTypes: ["create"],
  tags: ["vídeo", "imagen-a-vídeo", "texto-a-vídeo", "clips", "motion"],
  alternatives: ["runway", "midjourney"],
  relatedTools: ["runway", "midjourney"],
  relatedTutorials: [
    "kling-primer-clip",
    "runway-primer-clip",
    "midjourney-prompts-que-funcionan",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Kling AI con un still subido en imagen-a-vídeo y un clip corto generado",
        caption: "El plano ya está en el JPG. El prompt describe movimiento, no otro encuadre.",
        hint:
          "Hero 1600×900: panel de imagen-a-vídeo de Kling con still a la izquierda, prompt de motion de una línea y miniatura de clip de ~5 s a la derecha.",
      },
      en: {
        alt: "Kling AI with a still uploaded in image-to-video and a short generated clip",
        caption: "The frame is already in the JPG. The prompt describes motion, not a new composition.",
        hint:
          "Hero 1600×900: Kling image-to-video panel with still on the left, one-line motion prompt and ~5 s clip thumbnail on the right.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Clips desde texto o imagen en el navegador. Útil cuando el still ya está decidido y quieres probar motion.",
      fullDescription:
        "Kling AI genera vídeo corto a partir de prompts de texto o de una imagen de referencia. En imagen-a-vídeo el encuadre y la luz viven en el archivo que subes; el modelo anima sujetos y cámara según lo que describes. También ofrece controles avanzados (duración, relación de aspecto, referencias de personaje u elemento en versiones recientes) que cambian con el tiempo en klingai.com.\n\nEncaja como prototipo: un gesto, un producto que se mueve, una prueba para un pitch. No sustituye un rodaje ni un montaje final. Si el still es flojo, el clip solo amplifica el problema — el flujo habitual sigue siendo Midjourney o foto real → Kling o Runway → editor.",
      subcategory: "Vídeo generativo",
      pricingDetails:
        "Hay acceso gratuito con créditos o generaciones diarias según la política actual del sitio; las condiciones, marcas de agua y resolución máxima pueden cambiar. Los planes de pago suelen quitar marca de agua y ampliar duración o calidad. Revisa la página de precios en klingai.com antes de prometer un entregable a cliente; no hay programa de afiliado en StackAI Learn.",
      bestFor: [
        "Primer clip de 5–10 s desde un still que ya funciona",
        "Probar motion y cámara antes de gastar en un rodaje",
        "Comparar un gesto con el mismo JPG en Runway u otra herramienta",
      ],
      notFor: [
        "Un spot de 60 s listo para emitir sin postproducción",
        "Quien aún no tiene encuadre (empieza en Midjourney o con foto real)",
        "Física fina, manos complejas o texto legible en movimiento sin revisión",
      ],
      pros: [
        "Imagen-a-vídeo con prompt corto de movimiento",
        "Duraciones y formatos orientados a redes y prototipos",
        "Web y apps móviles según la oferta del vendor",
        "Complementa Runway en la comparativa de vídeo, no la sustituye al 100 %",
      ],
      cons: [
        "Créditos y cola: iterar a ciegas cuesta",
        "Nombres de modelo y modos (Standard, Professional, etc.) rotan en la UI",
        "Manos, texto y acciones imposibles siguen fallando",
        "Marca de agua o límites en el tier gratuito según plan vigente",
      ],
      keyFeatures: [
        "Texto-a-vídeo e imagen-a-vídeo en el generador de vídeo",
        "Duración y relación de aspecto configurables (según UI)",
        "Opciones de consistencia de sujeto / elemento en modelos recientes",
        "Audio nativo o diálogo en algunos modos (opcional; no obligatorio en el primer clip)",
      ],
      faq: [
        {
          q: "¿Empiezo en Kling o en Midjourney?",
          a: "En Midjourney o con una foto tuya si el plano no existe. Kling anima lo que subes; no arregla un encuadre mal planteado.",
        },
        {
          q: "¿Kling o Runway?",
          a: "Ambos prototipan motion desde un still. Prueba el gesto en el que ya tengas créditos; para reparto de roles en un pipeline, mira mejores-herramientas-ia-video y runway-primer-clip.",
        },
        {
          q: "¿Qué pongo en el prompt si ya subí la imagen?",
          a: "Sujeto + movimiento (y, si hace falta, un solo movimiento de cámara). No repitas luz, estilo ni composición del JPG.",
        },
        {
          q: "¿Puedo usar solo texto?",
          a: "Sí, hay texto-a-vídeo. Para el primer clip útil, imagen-a-vídeo suele gastar menos sorpresas de encuadre.",
        },
      ],
      quickTutorial: {
        title: "Un clip desde un still",
        steps: [
          "Elige un JPG limpio: un sujeto, poca acción imposible en el frame.",
          "En Kling, abre imagen-a-vídeo y sube el still.",
          "Escribe sujeto + movimiento; 5 s en la primera prueba.",
          "Genera 2–3 tomas en el modo más rápido disponible.",
          "Descarga el keeper; el montaje final va en tu editor.",
        ],
      },
    },
    en: {
      shortDescription:
        "Clips from text or image in the browser. Use it when the still is decided and you want to test motion.",
      fullDescription:
        "Kling AI generates short video from text prompts or a reference image. In image-to-video, frame and light live in the file you upload; the model animates subjects and camera from your description. Recent versions add advanced controls (duration, aspect ratio, character or element references) that change over time on klingai.com.\n\nIt fits prototyping: one gesture, a product that moves, a pitch test. It does not replace a shoot or a final edit. If the still is weak, the clip only amplifies the problem — the usual flow remains Midjourney or a real photo → Kling or Runway → editor.",
      subcategory: "Generative video",
      pricingDetails:
        "Free access exists with credits or daily generations under the site’s current policy; terms, watermarks and max resolution may change. Paid plans typically remove watermarks and extend duration or quality. Check pricing on klingai.com before promising a client deliverable; there is no affiliate program on StackAI Learn.",
      bestFor: [
        "A first 5–10 s clip from a still that already works",
        "Testing motion and camera before an expensive shoot",
        "Comparing a gesture with the same JPG in Runway or another tool",
      ],
      notFor: [
        "A 60 s spot ready to air with no post",
        "Anyone without a frame yet (start in Midjourney or with a real photo)",
        "Fine physics, complex hands or readable on-screen type without review",
      ],
      pros: [
        "Image-to-video with a short motion prompt",
        "Durations and formats aimed at social and prototypes",
        "Web and mobile apps per the vendor’s offering",
        "Complements Runway in the video comparison, does not replace it entirely",
      ],
      cons: [
        "Credits and queue: blind iteration costs",
        "Model and mode names (Standard, Professional, etc.) rotate in the UI",
        "Hands, type and impossible actions still fail",
        "Watermark or limits on the free tier per current plan",
      ],
      keyFeatures: [
        "Text-to-video and image-to-video in the video generator",
        "Configurable duration and aspect ratio (per UI)",
        "Subject / element consistency options on recent models",
        "Native audio or dialogue in some modes (optional; not required for a first clip)",
      ],
      faq: [
        {
          q: "Do I start in Kling or Midjourney?",
          a: "In Midjourney or with your own photo if the shot does not exist. Kling animates what you upload; it does not fix a weak frame.",
        },
        {
          q: "Kling or Runway?",
          a: "Both prototype motion from a still. Test the gesture where you already have credits; for pipeline roles, see mejores-herramientas-ia-video and runway-primer-clip.",
        },
        {
          q: "What goes in the prompt if I already uploaded the image?",
          a: "Subject + movement (and, if needed, one camera move). Do not repeat light, style or composition from the JPG.",
        },
        {
          q: "Can I use text only?",
          a: "Yes, text-to-video exists. For a first useful clip, image-to-video usually wastes fewer framing surprises.",
        },
      ],
      quickTutorial: {
        title: "A clip from a still",
        steps: [
          "Pick a clean JPG: one subject, little impossible action in the frame.",
          "In Kling, open image-to-video and upload the still.",
          "Write subject + movement; 5 s on the first try.",
          "Generate 2–3 takes in the fastest mode available.",
          "Download the keeper; final edit lives in your NLE.",
        ],
      },
    },
  },
};
