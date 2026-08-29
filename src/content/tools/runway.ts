import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "runway";

export const runway: Tool = {
  id: slug,
  slug,
  name: "Runway",
  vendor: "Runway",
  officialUrl: "https://runwayml.com",
  category: "video",
  pricing: "freemium",
  featured: false,
  accent: "#FB7185",
  initials: "RW",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.1,
  ratingCount: 380,
  lastUpdated: "2026-08-29",
  difficulty: "intermediate",
  platforms: ["web"],
  useTypes: ["create"],
  tags: ["vídeo", "gen-3", "motion", "clips", "prototipo"],
  alternatives: ["midjourney", "chatgpt"],
  relatedTools: ["midjourney", "chatgpt"],
  relatedTutorials: ["runway-primer-clip", "midjourney-prompts-que-funcionan"],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Generación de un clip corto en Runway a partir de un still",
        caption: "Un shot, una acción, una cámara. Los créditos se gastan rápido.",
        hint: "Hero 1600×900: Runway con un still de Midjourney a la izquierda y un clip de 4–5 s a la derecha.",
      },
      en: {
        alt: "Short clip generation in Runway from a still",
        caption: "One shot, one action, one camera. Credits go fast.",
        hint: "Hero 1600×900: Runway with a Midjourney still on the left and a 4–5 s clip on the right.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Clips cortos y prototipos de motion. Entra cuando el still ya funciona.",
      fullDescription:
        "Runway genera y edita vídeo corto en el navegador. Tiene sentido como prototipo: un gesto, un travelling, un producto que se gira. No es un sustituto de un editor ni de un rodaje.\n\nEl flujo que no quema créditos: still dirigido (a menudo Midjourney) → una acción → una cámara → revisar. Si el encuadre base es flojo, el vídeo solo multiplica el problema.",
      subcategory: "Vídeo generativo",
      pricingDetails:
        "Hay un plan gratuito con créditos de prueba. Standard, Pro y planes superiores compran más generación y resolución. Los créditos bajan rápido en iteraciones vagas; cuenta el coste por clip aceptable, no por intento.",
      bestFor: [
        "Prototipos de 4–8 segundos para un pitch o un anuncio interno",
        "Dar motion a un still que ya está dirigido",
        "Explorar cámara y gesto antes de un rodaje caro",
      ],
      notFor: [
        "Un vídeo de 60 s nítido para un cliente final sin postproducción",
        "Quien aún no sabe describir un plano (empieza en Midjourney)",
        "Edición profesional de un master (usa un NLE)",
      ],
      pros: [
        "De un still a un clip en minutos",
        "Útil para prototipar motion",
        "Web, sin instalar un suite",
        "Encaja después de Midjourney, no en su lugar",
      ],
      cons: [
        "Créditos caros si pruebas a ciegas",
        "Física, manos y texto en vídeo siguen fallando",
        "Un clip «wow» no es un entregable de campaña",
        "Dependes de la cola y del modelo del mes",
      ],
      keyFeatures: [
        "Texto-a-vídeo e imagen-a-vídeo",
        "Clips cortos en el navegador",
        "Herramientas de edición / motion según el plan",
        "Exportación limitada por créditos y resolución",
      ],
      faq: [
        {
          q: "¿Empiezo aquí o en Midjourney?",
          a: "En Midjourney (o una foto real) si el plano aún no existe. Runway no arregla un encuadre flojo; lo anima.",
        },
      ],
      quickTutorial: {
        title: "Un clip, no una película",
        steps: [
          "Parte de un still que ya te convenza.",
          "Describe una sola acción y una sola cámara.",
          "Genera 2–3 tomas. Quédate con el gesto, no con el ruido.",
          "Si falla la física, cambia la acción, no apiles adjetivos.",
        ],
      },
    },
    en: {
      shortDescription:
        "Short clips and motion prototypes. Use it once the still already works.",
      fullDescription:
        "Runway generates and edits short video in the browser. It is a prototype tool: one gesture, one push-in, one product turn. It is not a substitute for an editor or a shoot.\n\nThe flow that does not burn credits: a directed still (often Midjourney) → one action → one camera → review. If the base frame is weak, video only multiplies the problem.",
      subcategory: "Generative video",
      pricingDetails:
        "A free plan exists with trial credits. Standard, Pro and higher plans buy more generation and resolution. Credits drop fast on vague iterations; cost a usable clip, not each attempt.",
      bestFor: [
        "4–8 second prototypes for a pitch or an internal ad",
        "Adding motion to a still that is already directed",
        "Exploring camera and gesture before an expensive shoot",
      ],
      notFor: [
        "A sharp 60-second film for a final client with no post",
        "Anyone who cannot describe a shot yet (start in Midjourney)",
        "Professional finishing of a master (use an NLE)",
      ],
      pros: [
        "Still to clip in minutes",
        "Useful for prototyping motion",
        "Web, no suite to install",
        "Fits after Midjourney, not instead of it",
      ],
      cons: [
        "Credits get expensive if you test blind",
        "Physics, hands and on-screen type still fail",
        "A «wow» clip is not a campaign deliverable",
        "You depend on the queue and this month’s model",
      ],
      keyFeatures: [
        "Text-to-video and image-to-video",
        "Short clips in the browser",
        "Edit / motion tools depending on plan",
        "Export capped by credits and resolution",
      ],
      faq: [
        {
          q: "Do I start here or in Midjourney?",
          a: "In Midjourney (or a real photo) if the shot does not exist yet. Runway does not fix a weak frame; it animates it.",
        },
      ],
      quickTutorial: {
        title: "A clip, not a film",
        steps: [
          "Start from a still you already like.",
          "Describe one action and one camera move.",
          "Generate 2–3 takes. Keep the gesture, not the noise.",
          "If physics fails, change the action — do not stack adjectives.",
        ],
      },
    },
  },
};
