import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "elevenlabs";

export const elevenlabs: Tool = {
  id: slug,
  slug,
  name: "ElevenLabs",
  vendor: "ElevenLabs",
  officialUrl: "https://elevenlabs.io",
  category: "audio",
  pricing: "freemium",
  featured: false,
  accent: "#2DD4BF",
  initials: "EL",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.5,
  ratingCount: 540,
  lastUpdated: "2026-08-30",
  difficulty: "intermediate",
  platforms: ["web", "api"],
  useTypes: ["create"],
  tags: ["voz", "tts", "voiceover", "clonación", "doblaje", "locución"],
  alternatives: ["chatgpt", "runway"],
  relatedTools: ["runway", "midjourney", "chatgpt"],
  relatedTutorials: ["elevenlabs-primer-voiceover", "runway-primer-clip", "chatgpt-primeros-pasos"],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Editor de ElevenLabs con texto, voz seleccionada y forma de onda",
        caption: "El guion corto y la voz correcta importan más que apilar adjetivos.",
        hint: "Hero 1600×900: ElevenLabs Speech Synthesis con un párrafo de 2–3 frases, selector de voz visible y preview de audio reproducible.",
      },
      en: {
        alt: "ElevenLabs editor with text, selected voice and waveform",
        caption: "A short script and the right voice matter more than stacking adjectives.",
        hint: "Hero 1600×900: ElevenLabs Speech Synthesis with a 2–3 sentence paragraph, voice picker visible and playable audio preview.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Voz sintética y locución para clips, demos y prototipos. El guion va antes que la voz.",
      fullDescription:
        "ElevenLabs convierte texto en voz con control de tono, ritmo y acento. Tiene sentido cuando ya tienes un guion corto y necesitas una locución creíble para un vídeo, un demo o un prototipo de producto — no cuando aún estás escribiendo el mensaje.\n\nEl flujo que no quema créditos: guion de 30–60 segundos → elegir voz de la biblioteca (no clonar al principio) → generar 2–3 tomas → escuchar en contexto (con el clip de Runway o el slide real). Si la entonación falla, reescribe la frase antes de cambiar de modelo.\n\nLa API encaja en flujos automatizados; la web basta para la primera prueba. Clonar una voz propia exige consentimiento y revisión legal — no es el primer paso.",
      subcategory: "Texto a voz y locución",
      pricingDetails:
        "Hay un plan gratuito con créditos mensuales limitados. Starter, Creator, Pro y planes superiores aumentan caracteres, clonación de voz y acceso a modelos más expresivos. Los créditos se consumen por carácter generado; un guion de un minuto repetido diez veces cuesta diez veces. Revisa el contador antes de iterar a ciegas.",
      bestFor: [
        "Voiceover de 30–90 segundos para un clip de Runway o un pitch",
        "Prototipar la voz de un producto antes de contratar un locutor",
        "Doblaje o localización rápida de un demo interno",
        "Integrar TTS en un flujo vía API cuando el guion ya está cerrado",
      ],
      notFor: [
        "Un podcast semanal de una hora sin revisar cada bloque",
        "Clonar la voz de alguien sin su consentimiento explícito",
        "Sustituir un locutor profesional en un spot final para TV",
        "Quien aún no tiene guion — empieza en ChatGPT o Claude",
      ],
      pros: [
        "Voces naturales en decenas de idiomas",
        "Biblioteca amplia sin clonar desde el día uno",
        "Control de estabilidad, claridad y estilo en la web",
        "API documentada para flujos automatizados",
        "Encaja después del guion y antes del montaje final",
      ],
      cons: [
        "Los créditos se agotan rápido con iteraciones largas",
        "La entonación emocional a veces suena plana en frases complejas",
        "Clonar voz tiene implicaciones legales y de consentimiento",
        "No arregla un guion flojo — solo lo lee en voz alta",
        "Algunos acentos regionales siguen sonando genéricos",
      ],
      keyFeatures: [
        "Text-to-speech con modelos Multilingual, Turbo y v3",
        "Biblioteca de voces predefinidas y diseño por prompt",
        "Clonación de voz (Instant y Professional)",
        "Speech-to-text (Scribe) y doblaje",
        "API REST para integración en apps y pipelines",
      ],
      faq: [
        {
          q: "¿Empiezo clonando mi voz o con una de la biblioteca?",
          a: "Con la biblioteca. Elige una voz que encaje con el tono del guion, genera dos tomas y escúchalas con el vídeo. Clona solo si ninguna voz predefinida funciona y tienes consentimiento.",
        },
        {
          q: "¿Puedo usar la voz generada en un anuncio comercial?",
          a: "Depende del plan y de la voz. Las voces de la biblioteca suelen permitir uso comercial en planes de pago; la clonación tiene reglas propias. Lee los términos de tu plan antes de publicar.",
        },
        {
          q: "¿Sustituye a un locutor humano?",
          a: "Para prototipos y demos internos, sí. Para un spot final, un documental o un audiobook largo, un locutor humano sigue dando matices que el modelo no captura en frases largas.",
        },
        {
          q: "¿Cómo encaja con Runway o Midjourney?",
          a: "Midjourney o una foto dan el still, Runway añade motion, ElevenLabs pone la voz. Cada herramienta hace una cosa; el montaje final (sincronizar audio y vídeo) lo haces en un editor.",
        },
      ],
      quickTutorial: {
        title: "Un voiceover de un minuto",
        steps: [
          "Escribe un guion de 4–6 frases cortas. Una idea por frase.",
          "Elige una voz de la biblioteca que encaje con el tono (formal, conversacional, narrador).",
          "Genera el audio. Si una frase suena rara, reescríbela — no repitas el mismo texto.",
          "Descarga el MP3 y reprodúcelo sobre tu clip de Runway o tu slide.",
          "Si el ritmo no cuadra, ajusta puntuación y pausas en el guion antes de regenerar.",
        ],
      },
    },
    en: {
      shortDescription:
        "Synthetic voice and voiceover for clips, demos and prototypes. Script first, voice second.",
      fullDescription:
        "ElevenLabs turns text into speech with control over tone, pace and accent. It makes sense when you already have a short script and need a believable voiceover for a video, demo or product prototype — not while you are still writing the message.\n\nThe flow that does not burn credits: a 30–60 second script → pick a library voice (do not clone on day one) → generate 2–3 takes → listen in context (with the Runway clip or the real slide). If intonation fails, rewrite the sentence before switching models.\n\nThe API fits automated pipelines; the web app is enough for a first test. Cloning your own voice requires consent and legal review — it is not step one.",
      subcategory: "Text-to-speech and voiceover",
      pricingDetails:
        "A free plan exists with limited monthly credits. Starter, Creator, Pro and higher plans raise character limits, voice cloning and access to more expressive models. Credits are consumed per character generated; a one-minute script repeated ten times costs ten times. Check the counter before iterating blind.",
      bestFor: [
        "30–90 second voiceover for a Runway clip or a pitch",
        "Prototyping product voice before hiring a voice actor",
        "Quick dubbing or localization of an internal demo",
        "Integrating TTS via API when the script is already locked",
      ],
      notFor: [
        "A weekly one-hour podcast without reviewing each block",
        "Cloning someone's voice without their explicit consent",
        "Replacing a professional voice actor on a final TV spot",
        "Anyone who does not have a script yet — start in ChatGPT or Claude",
      ],
      pros: [
        "Natural voices across dozens of languages",
        "Large library without cloning on day one",
        "Stability, clarity and style controls in the web app",
        "Documented API for automated workflows",
        "Fits after the script and before final edit",
      ],
      cons: [
        "Credits run out fast on long iterations",
        "Emotional intonation sometimes sounds flat on complex sentences",
        "Voice cloning has legal and consent implications",
        "Does not fix a weak script — it only reads it aloud",
        "Some regional accents still sound generic",
      ],
      keyFeatures: [
        "Text-to-speech with Multilingual, Turbo and v3 models",
        "Preset voice library and prompt-based voice design",
        "Voice cloning (Instant and Professional)",
        "Speech-to-text (Scribe) and dubbing",
        "REST API for app and pipeline integration",
      ],
      faq: [
        {
          q: "Do I start by cloning my voice or using the library?",
          a: "The library. Pick a voice that matches the script tone, generate two takes and listen with the video. Clone only if no preset works and you have consent.",
        },
        {
          q: "Can I use generated voice in a commercial ad?",
          a: "Depends on plan and voice. Library voices usually allow commercial use on paid plans; cloning has its own rules. Read your plan terms before publishing.",
        },
        {
          q: "Does it replace a human voice actor?",
          a: "For prototypes and internal demos, yes. For a final spot, documentary or long audiobook, a human actor still delivers nuance the model misses on long passages.",
        },
        {
          q: "How does it fit with Runway or Midjourney?",
          a: "Midjourney or a photo gives the still, Runway adds motion, ElevenLabs adds voice. Each tool does one job; syncing audio and video happens in an editor.",
        },
      ],
      quickTutorial: {
        title: "A one-minute voiceover",
        steps: [
          "Write a script of 4–6 short sentences. One idea per sentence.",
          "Pick a library voice that matches the tone (formal, conversational, narrator).",
          "Generate the audio. If a sentence sounds off, rewrite it — do not repeat the same text.",
          "Download the MP3 and play it over your Runway clip or slide.",
          "If the pace does not fit, adjust punctuation and pauses in the script before regenerating.",
        ],
      },
    },
  },
};
