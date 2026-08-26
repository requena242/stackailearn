import type { LearningPath } from "@/types/content";

export const learningPaths: LearningPath[] = [
  {
    slug: "empezar-con-ia-desde-cero",
    level: "beginner",
    tutorialSlugs: [
      "chatgpt-primeros-pasos",
      "perplexity-investigacion-con-fuentes",
    ],
    copy: {
      es: {
        title: "Empezar con IA desde cero",
        excerpt:
          "Un briefing que se puede repetir y, después, fuentes que sí abres. Ese es el suelo.",
        audience: "Quien aún pide «un texto sobre X» y no tiene un método.",
      },
      en: {
        title: "Start with AI from scratch",
        excerpt:
          "A brief you can run again, then sources you actually open. That is the floor.",
        audience: "People who still ask for «a text about X» and have no method.",
      },
    },
  },
  {
    slug: "productividad-con-ia",
    level: "intermediate",
    tutorialSlugs: [
      "chatgpt-primeros-pasos",
      "perplexity-investigacion-con-fuentes",
      "claude-escritura-larga",
    ],
    copy: {
      es: {
        title: "Productividad con IA",
        excerpt:
          "Redactar con briefing, briefar con fuentes y editar un texto largo sin aplanar la voz.",
        audience: "Quien ya escribe o investiga cada semana y quiere un loop, no más herramientas.",
      },
      en: {
        title: "Productivity with AI",
        excerpt:
          "Draft with a brief, brief with sources, edit a long piece without flattening the voice.",
        audience: "People who already write or research every week and want a loop, not more tools.",
      },
    },
  },
  {
    slug: "crear-imagenes-con-ia",
    level: "intermediate",
    tutorialSlugs: ["midjourney-prompts-que-funcionan"],
    copy: {
      es: {
        title: "Crear imágenes con IA",
        excerpt:
          "Dirigir un plano en Midjourney. Runway entra cuando el still ya funciona.",
        audience: "Diseño, marketing y dirección de arte que están cansados de adjetivos mágicos.",
      },
      en: {
        title: "Create images with AI",
        excerpt:
          "Direct a shot in Midjourney. Runway comes in when the still already works.",
        audience: "Design, marketing and art direction tired of magic adjectives.",
      },
    },
  },
  {
    slug: "construir-con-agentes",
    level: "advanced",
    tutorialSlugs: [
      "cursor-como-ide-con-ia",
      "hermes-agent-primer-flujo",
      "grok-bot-primer-teammate",
    ],
    copy: {
      es: {
        title: "Construir con agentes",
        excerpt:
          "Un diff en el repo, un agente en tu máquina, un teammate en la nube. En ese orden.",
        audience: "Quien ya programa o opera y quiere delegar sin perder el control.",
      },
      en: {
        title: "Build with agents",
        excerpt:
          "A repo diff, an agent on your machine, a teammate in the cloud. In that order.",
        audience: "People who already ship or operate and want to delegate without losing control.",
      },
    },
  },
];

export function getPath(slug: string) {
  return learningPaths.find((path) => path.slug === slug);
}

export function getPathsByLevel(level: LearningPath["level"]) {
  return learningPaths.filter((path) => path.level === level);
}

export function getPathsForTutorial(tutorialSlug: string) {
  return learningPaths.filter((path) =>
    path.tutorialSlugs.includes(tutorialSlug),
  );
}
