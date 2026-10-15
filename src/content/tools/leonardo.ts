import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "leonardo";

export const leonardo: Tool = {
  id: slug,
  slug,
  name: "Leonardo AI",
  vendor: "Leonardo.Ai",
  officialUrl: "https://leonardo.ai",
  category: "image",
  pricing: "freemium",
  featured: false,
  accent: "#8B5CF6",
  initials: "LE",
  image: `/media/tools/${slug}/hero.jpg`,
  lastUpdated: "2026-10-11",
  difficulty: "beginner",
  platforms: ["web", "ios", "android"],
  useTypes: ["create"],
  tags: [
    "imagen",
    "prompts",
    "upscale",
    "modelos",
    "producto",
    "concept-art",
  ],
  alternatives: ["midjourney", "ideogram"],
  relatedTools: ["midjourney", "ideogram", "runway"],
  relatedTutorials: [
    "leonardo-primer-flujo",
    "alternativas-midjourney",
    "midjourney-prompts-que-funcionan",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Leonardo AI con un grid de imágenes generadas y el selector de relación de aspecto visible",
        caption:
          "Varios modelos en un solo canvas: elige formato antes de gastar tokens en un encuadre equivocado.",
        hint:
          "Hero 1600×900: feed de Leonardo con grid 2×2 de producto en 4:5, barra de prompt y panel de aspect ratio 4:5 / 16:9.",
      },
      en: {
        alt: "Leonardo AI with a generated image grid and the aspect ratio selector visible",
        caption:
          "Several models on one canvas: pick format before you spend tokens on the wrong frame.",
        hint:
          "Hero 1600×900: Leonardo feed with 2×2 product grid in 4:5, prompt bar and 4:5 / 16:9 aspect ratio panel.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Generación de imagen en web con varios modelos, presets y upscale integrado. Buen primer motor si quieres UI todo-en-uno.",
      fullDescription:
        "Leonardo.Ai genera stills desde la barra de prompt del sitio y de apps móviles. El vendor ofrece una suite de modelos intercambiables (propios como Lucid Origin o Lucid Realism y terceros que rotan en la UI) más herramientas de edición, vídeo y upscale en la misma cuenta — ver leonardo.ai y el centro de ayuda en intercom.help/leonardo-ai.\n\nEncaja cuando quieres un flujo repetible sin Discord: fijar relación de aspecto, generar un lote, iterar con variaciones y subir resolución con Upscale Image o Pro Upscaler antes de exportar a Library. Para tipografía crítica en el frame, Ideogram sigue siendo la referencia en StackAI Learn; para moodboards con --sref muy dirigidos, Midjourney. Leonardo suele entrar como alternativa todo-en-uno o como puente hacia clip (Runway, Kling) cuando el still ya está en Library.",
      subcategory: "Generación de imagen",
      pricingDetails:
        "Hay tier gratuito con tokens diarios según la política actual en leonardo.ai; los planes de pago amplían cola, modelos y límites de upscale. Nombres de plan, tokens y precios rotan — revisa la página de precios antes de prometer volumen a cliente. No hay programa de afiliado en StackAI Learn.",
      bestFor: [
        "Stills de producto, concept art y redes con formato fijo (4:5, 9:16, 16:9)",
        "Quien quiere generar, iterar y upscale en la misma sesión web",
        "Probar varios modelos sin cambiar de herramienta",
      ],
      notFor: [
        "Logos vectoriales o manual de marca con tipografía corporativa exacta",
        "Quien ya vive en Discord y --sref de Midjourney sin querer otra UI",
        "Entregable final sin leer términos de uso y derechos del plan vigente",
      ],
      pros: [
        "Varios modelos de imagen en un solo generador (documentación y blog del vendor)",
        "Relación de aspecto y cantidad antes de generar",
        "Upscale desde el feed y Pro Upscaler para salidas de mayor resolución",
        "Library central para descargar y reutilizar assets",
      ],
      cons: [
        "Tokens y nombres de modelo cambian con frecuencia en la UI",
        "Texto en imagen y manos siguen necesitando revisión humana",
        "No sustituye un flujo --sref tan maduro como Midjourney para un look único",
        "Derechos comerciales dependen del plan y de lo que subas como referencia",
      ],
      keyFeatures: [
        "Generación de imagen desde prompt en web y apps",
        "Selector de modelo y presets según la oferta del vendor",
        "Relación de aspecto y número de imágenes por generación",
        "Upscale Image en el feed; Pro Upscaler con modos Precise / Creative (ayuda oficial)",
        "Library con descarga y reutilización de generaciones",
      ],
      faq: [
        {
          q: "¿Leonardo o Midjourney para empezar?",
          a: "Midjourney si tu equipo ya domina grid, variaciones y --sref. Leonardo si prefieres web sin Discord y upscale en el mismo sitio. Para decidir con criterios, alternativas-midjourney y mejor-ia-imagenes.",
        },
        {
          q: "¿Cómo subo la resolución?",
          a: "Pasa el ratón sobre una imagen en el feed y usa Upscale Image, o abre Upscaler desde la barra o el menú lateral (guías en leonardo.ai/news y el Help Center). Ajusta modo y multiplicador antes de confirmar.",
        },
        {
          q: "¿Puedo usar las imágenes en un cliente?",
          a: "Lee los términos de tu plan en leonardo.ai y qué marcas o personas aparecen en el prompt o en referencias subidas. Un still bonito no sustituye revisión legal.",
        },
        {
          q: "¿Y si el texto del cartel debe leerse?",
          a: "Prueba Leonardo con prompt explícito; si falla letras, pasa a Ideogram (ficha ideogram) o monta el tipo en Figma sobre un still sin copy crítico.",
        },
      ],
      quickTutorial: {
        title: "Un still listo para exportar",
        steps: [
          "Define formato real (4:5 feed, 9:16 stories, 16:9 deck) antes de abrir el generador.",
          "Elige un modelo acorde al brief (fotorrealismo vs ilustración según presets del vendor).",
          "Prompt: sujeto + luz + fondo + lo que no quieres. Sin adjetivos vacíos.",
          "Genera un lote; elige dirección, no solo la miniatura más llamativa.",
          "Upscale el keeper y descárgalo desde Library; anota plan y fecha para derechos de uso.",
        ],
      },
    },
    en: {
      shortDescription:
        "Web image generation with multiple models, presets and built-in upscale. A solid first engine if you want an all-in-one UI.",
      fullDescription:
        "Leonardo.Ai generates stills from the site’s prompt bar and mobile apps. The vendor offers a switchable model suite (in-house names such as Lucid Origin or Lucid Realism and third-party models that rotate in the UI) plus editing, video and upscale tools in the same account — see leonardo.ai and the help center at intercom.help/leonardo-ai.\n\nUse it when you want a repeatable flow without Discord: lock aspect ratio, generate a batch, iterate with variations and raise resolution with Upscale Image or Pro Upscaler before exporting from Library. For critical in-frame typography, Ideogram remains the reference on StackAI Learn; for highly directed moodboards with --sref, Midjourney. Leonardo often fits as an all-in-one alternative or as a bridge to motion (Runway, Kling) once the still lives in Library.",
      subcategory: "Image generation",
      pricingDetails:
        "A free tier exists with daily tokens under the current policy on leonardo.ai; paid plans expand queue, models and upscale limits. Plan names, tokens and pricing change — check pricing before you promise volume to a client. There is no affiliate program on StackAI Learn.",
      bestFor: [
        "Product stills, concept art and social assets with a fixed format (4:5, 9:16, 16:9)",
        "People who want generate, iterate and upscale in one web session",
        "Trying several models without switching tools",
      ],
      notFor: [
        "Vector logos or brand manuals with exact corporate type",
        "Anyone already living in Discord and Midjourney --sref who does not want another UI",
        "Final client delivery without reading the terms and rights of your current plan",
      ],
      pros: [
        "Several image models in one generator (vendor docs and blog)",
        "Aspect ratio and batch size before you generate",
        "Upscale from the feed and Pro Upscaler for higher-resolution output",
        "Central Library to download and reuse assets",
      ],
      cons: [
        "Tokens and model names rotate often in the UI",
        "In-image type and hands still need human review",
        "Does not replace Midjourney’s mature --sref flow for a unique look",
        "Commercial rights depend on your plan and on references you upload",
      ],
      keyFeatures: [
        "Image generation from prompt on web and apps",
        "Model picker and presets per the vendor’s current offer",
        "Aspect ratio and number of images per generation",
        "Upscale Image on the feed; Pro Upscaler with Precise / Creative modes (official help)",
        "Library with download and reuse of generations",
      ],
      faq: [
        {
          q: "Leonardo or Midjourney to start?",
          a: "Midjourney if your team already runs grids, variations and --sref. Leonardo if you prefer web without Discord and upscale on the same site. To decide with criteria, alternativas-midjourney and mejor-ia-imagenes.",
        },
        {
          q: "How do I raise resolution?",
          a: "Hover an image in the feed and use Upscale Image, or open Upscaler from the bar or side menu (guides on leonardo.ai/news and the Help Center). Set mode and multiplier before you confirm.",
        },
        {
          q: "Can I use the images for a client?",
          a: "Read your plan’s terms on leonardo.ai and what brands or people appear in the prompt or uploaded references. A pretty still does not replace legal review.",
        },
        {
          q: "What if poster copy must read?",
          a: "Try Leonardo with explicit copy in the prompt; if letters fail, move to Ideogram (ideogram tool page) or set type in Figma on a still without critical copy.",
        },
      ],
      quickTutorial: {
        title: "A still ready to export",
        steps: [
          "Define the real format (4:5 feed, 9:16 stories, 16:9 deck) before you open the generator.",
          "Pick a model that matches the brief (photoreal vs illustration per vendor presets).",
          "Prompt: subject + light + background + what you do not want. No empty adjectives.",
          "Generate a batch; pick a direction, not just the flashiest thumbnail.",
          "Upscale the keeper and download from Library; note plan and date for usage rights.",
        ],
      },
    },
  },
};
