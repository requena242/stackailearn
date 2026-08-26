import type { CategoryId, Localized } from "@/types/content";

export type CategoryMeta = {
  id: CategoryId;
  /** Clases de acento para badges e iconos. */
  tint: string;
  copy: Localized<{ name: string; description: string; intro: string }>;
};

export const categories: CategoryMeta[] = [
  {
    id: "text",
    tint: "from-teal-400/20 to-teal-400/5 text-teal-300",
    copy: {
      es: {
        name: "Texto",
        description: "Chat, redacción, resumen y razonamiento.",
        intro:
          "Modelos de chat para redactar, editar y pensar. Empieza por el entregable, no por la marca.",
      },
      en: {
        name: "Text",
        description: "Chat, writing, summaries and reasoning.",
        intro:
          "Chat models for drafting, editing and thinking. Start from the deliverable, not the brand.",
      },
    },
  },
  {
    id: "image",
    tint: "from-violet-400/20 to-violet-400/5 text-violet-300",
    copy: {
      es: {
        name: "Imagen",
        description: "Generación y edición visual con prompts.",
        intro:
          "Motores de dirección de arte. El prompt estructura el plano; el modelo no adivina el brief.",
      },
      en: {
        name: "Image",
        description: "Visual generation and editing with prompts.",
        intro:
          "Art-direction engines. The prompt structures the frame; the model does not guess the brief.",
      },
    },
  },
  {
    id: "video",
    tint: "from-rose-400/20 to-rose-400/5 text-rose-300",
    copy: {
      es: {
        name: "Vídeo",
        description: "Clips, motion y postproducción asistida.",
        intro:
          "Clips cortos y prototipos. Un shot, una acción, una cámara. Los créditos se gastan rápido.",
      },
      en: {
        name: "Video",
        description: "Clips, motion and assisted post-production.",
        intro:
          "Short clips and prototypes. One shot, one action, one camera. Credits go fast.",
      },
    },
  },
  {
    id: "code",
    tint: "from-sky-400/20 to-sky-400/5 text-sky-300",
    copy: {
      es: {
        name: "Código",
        description: "IDEs, agentes y pair programming con IA.",
        intro:
          "El valor está en el diff y en el test. Un agente que toca el repo no sustituye la revisión.",
      },
      en: {
        name: "Code",
        description: "IDEs, agents and AI pair programming.",
        intro:
          "The value is in the diff and the test. An agent that touches the repo does not replace review.",
      },
    },
  },
  {
    id: "productivity",
    tint: "from-amber-400/20 to-amber-400/5 text-amber-300",
    copy: {
      es: {
        name: "Productividad",
        description: "Notas, docs, automatización y flujos de trabajo.",
        intro:
          "IA dentro del trabajo diario: wikis, teammates y rutinas. Gana quien ya tiene un sistema.",
      },
      en: {
        name: "Productivity",
        description: "Notes, docs, automation and workflows.",
        intro:
          "AI inside daily work: wikis, teammates and routines. It helps people who already have a system.",
      },
    },
  },
  {
    id: "audio",
    tint: "from-fuchsia-400/20 to-fuchsia-400/5 text-fuchsia-300",
    copy: {
      es: {
        name: "Audio",
        description: "Voz, música, transcripción y doblaje.",
        intro:
          "Voz y sonido asistidos. Aún hay pocas fichas: solo publicamos lo que podemos enseñar en cinco pasos.",
      },
      en: {
        name: "Audio",
        description: "Voice, music, transcription and dubbing.",
        intro:
          "Assisted voice and sound. Few profiles yet: we only publish what we can teach in five steps.",
      },
    },
  },
  {
    id: "research",
    tint: "from-emerald-400/20 to-emerald-400/5 text-emerald-300",
    copy: {
      es: {
        name: "Investigación",
        description: "Búsqueda con fuentes, citas y síntesis.",
        intro:
          "Resumen con citas. El trabajo de verdad es abrir dos fuentes y fechar el brief.",
      },
      en: {
        name: "Research",
        description: "Sourced search, citations and synthesis.",
        intro:
          "A summary with citations. The real work is opening two sources and dating the brief.",
      },
    },
  },
];

export function getCategory(id: CategoryId) {
  return categories.find((category) => category.id === id);
}
