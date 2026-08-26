import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "midjourney";

export const midjourney: Tool = {
  id: slug,
  slug,
  name: "Midjourney",
  vendor: "Midjourney",
  officialUrl: "https://www.midjourney.com",
  category: "image",
  pricing: "paid",
  featured: true,
  accent: "#7C3AED",
  initials: "MJ",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.6,
  ratingCount: 890,
  lastUpdated: "2026-08-26",
  difficulty: "intermediate",
  platforms: ["web", "discord"],
  useTypes: ["create"],
  tags: ["imagen", "prompts", "dirección-de-arte", "stylize", "moodboard"],
  alternatives: ["chatgpt", "runway"],
  relatedTools: ["runway", "chatgpt"],
  relatedTutorials: ["midjourney-prompts-que-funcionan"],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Grid de Midjourney con un plano controlado",
        caption: "El prompt describe el plano, no el «mood».",
        hint: "Hero 1600×900: grid 2×2 de Midjourney de un mismo sujeto con cámara y luz distintas.",
      },
      en: {
        alt: "Midjourney grid with a controlled shot",
        caption: "The prompt describes the shot, not the mood.",
        hint: "Hero 1600×900: Midjourney 2×2 grid of the same subject with different camera and light.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Motor de imagen para dirigir un plano. No es un botón de «hazlo bonito».",
      fullDescription:
        "Midjourney genera stills a partir de un prompt. El salto de calidad no está en acumular adjetivos («cinematic, ultra realistic, masterpiece») sino en decidir sujeto, cámara, luz y lo que no quieres en el encuadre.\n\nHay web y Discord. Los parámetros que de verdad cambian el resultado son pocos: aspect ratio, stylize, y referencias (--sref / imagen) cuando ya tienes un rumbo. Runway entra después, cuando el still ya funciona y quieres movimiento.",
      subcategory: "Generación de imagen",
      pricingDetails:
        "No hay plan gratuito útil a largo plazo: se paga por GPU (Basic, Standard, Pro, Mega). El plan define minutos rápidos, relax y si puedes trabajar en privado. Revisa midjourney.com/account antes de comprometer un equipo.",
      bestFor: [
        "Dirección de arte, moodboards y conceptos de campaña",
        "Quien ya sabe describir un plano (o está dispuesto a aprender)",
        "Explorar un estilo con referencias, no una foto «perfecta» a la primera",
      ],
      notFor: [
        "Logos, texto nítido en el cartel o un layout de UI pixel-perfect",
        "Imágenes de personas reales sin consentimiento o de marcas ajenas",
        "Quien necesita un editor no destructivo tipo Photoshop como primer paso",
      ],
      pros: [
        "Calidad de still muy alta cuando el plano está pensado",
        "Buen control con aspect ratio, stylize y referencias",
        "Rápido para un moodboard de 12–20 imágenes",
        "Variación y remix para iterar sin reescribir todo",
      ],
      cons: [
        "De pago; los minutos se van en pruebas vagas",
        "Texto, manos y layouts de interfaz siguen siendo débiles",
        "El estilo por defecto empuja hacia lo «bonito genérico» si no lo frenas",
        "Derechos y uso comercial dependen del plan y de lo que subas como referencia",
      ],
      keyFeatures: [
        "Generación de stills en web y Discord",
        "Parámetros: --ar, --stylize, --sref / image prompts",
        "Variaciones, remix, inpaint / editor regional",
        "Moodboards y estilos guardados en la web",
        "Modos rápido y relax según el plan",
      ],
      faq: [
        {
          q: "¿Hace falta Discord?",
          a: "Ya no es obligatorio: la web cubre el flujo principal. Discord sigue siendo útil si tu equipo ya trabaja ahí.",
        },
        {
          q: "¿Puedo usarlo en un anuncio de cliente?",
          a: "Mira los términos de tu plan y las referencias que subiste. Un still «bonito» no te libra de derechos de marca, de personas ni de estilo ajeno.",
        },
      ],
      quickTutorial: {
        title: "Un still que se puede dirigir",
        steps: [
          "Escribe sujeto + plano + luz + lo que no quieres. Cero adjetivos vacíos.",
          "Fija --ar al formato real (9:16, 4:5, 16:9).",
          "Genera un grid. Elige una dirección, no «la más bonita».",
          "Varía o remixa un solo eje (luz o cámara), no cinco a la vez.",
          "Cuando el still aguante, entonces piensa en vídeo (Runway) o en edición.",
        ],
      },
    },
    en: {
      shortDescription:
        "An image engine for directing a shot. It is not a «make it pretty» button.",
      fullDescription:
        "Midjourney generates stills from a prompt. The quality jump is not in stacking adjectives («cinematic, ultra realistic, masterpiece»). It is in deciding subject, camera, light and what must stay out of the frame.\n\nThere is a web app and Discord. The parameters that actually change the result are few: aspect ratio, stylize, and references (--sref / image) once you have a direction. Runway comes later, when the still already works and you want motion.",
      subcategory: "Image generation",
      pricingDetails:
        "There is no useful long-term free plan: you pay for GPU time (Basic, Standard, Pro, Mega). The plan sets fast minutes, relax mode and whether you can work privately. Check midjourney.com/account before you commit a team.",
      bestFor: [
        "Art direction, moodboards and campaign concepts",
        "People who can describe a shot — or are willing to learn",
        "Exploring a style with references, not a «perfect» photo on the first try",
      ],
      notFor: [
        "Logos, sharp poster type or pixel-perfect UI layouts",
        "Images of real people without consent, or of other people’s brands",
        "Anyone who needs a non-destructive Photoshop-style editor as step one",
      ],
      pros: [
        "Very high still quality when the shot is thought through",
        "Real control via aspect ratio, stylize and references",
        "Fast for a 12–20 image moodboard",
        "Vary and remix to iterate without rewriting everything",
      ],
      cons: [
        "Paid; vague tests burn minutes",
        "Type, hands and UI layouts are still weak",
        "The default look slides toward generic pretty if you do not restrain it",
        "Commercial rights depend on your plan and on the references you upload",
      ],
      keyFeatures: [
        "Still generation on web and Discord",
        "Parameters: --ar, --stylize, --sref / image prompts",
        "Variations, remix, inpaint / regional editor",
        "Moodboards and saved styles on the web",
        "Fast and relax modes depending on plan",
      ],
      faq: [
        {
          q: "Do I still need Discord?",
          a: "No longer required: the web app covers the main flow. Discord still helps if your team already works there.",
        },
        {
          q: "Can I use it in a client ad?",
          a: "Read the terms of your plan and check the references you uploaded. A pretty still does not clear brand, likeness or someone else’s style.",
        },
      ],
      quickTutorial: {
        title: "A still you can actually steer",
        steps: [
          "Write subject + shot + light + what you do not want. No empty adjectives.",
          "Lock --ar to the real format (9:16, 4:5, 16:9).",
          "Generate a grid. Pick a direction, not «the prettiest one».",
          "Vary or remix one axis (light or camera), not five at once.",
          "When the still holds, then think about video (Runway) or retouching.",
        ],
      },
    },
  },
};
