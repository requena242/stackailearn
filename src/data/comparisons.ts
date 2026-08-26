import type { Comparison } from "@/types/content";

export const comparisons: Comparison[] = [
  {
    slug: "chatgpt-vs-claude-vs-grok",
    toolSlugs: ["chatgpt", "claude", "grok"],
    updatedAt: "2026-08-22",
    copy: {
      es: {
        title: "ChatGPT vs Claude vs Grok",
        excerpt:
          "Tres asistentes de texto, tres temperamentos. Cuál elegir según la tarea.",
        verdict:
          "Si quieres el comodín con más integraciones, ChatGPT. Si el texto largo y el tono importan, Claude. Si necesitas pulso de actualidad y un estilo más directo, Grok. Muchos equipos usan dos: uno para redactar y otro para contrastar.",
        rows: [
          {
            label: "Mejor para",
            values: [
              "Tareas generales y ecosistema",
              "Escritura larga y documentos",
              "Actualidad y tono directo",
            ],
          },
          {
            label: "Calidad de prosa",
            values: ["Muy alta", "Excelente", "Alta, más informal"],
          },
          {
            label: "Fuentes / actualidad",
            values: ["Buena con búsqueda", "Buena bajo petición", "Muy buena"],
          },
          {
            label: "Código",
            values: ["Muy bueno", "Muy bueno", "Bueno"],
          },
          {
            label: "Plan de entrada",
            values: ["Gratis + Plus", "Gratis + Pro", "Gratis + planes xAI"],
          },
          {
            label: "Curva de aprendizaje",
            values: ["Baja", "Baja", "Baja"],
          },
        ],
      },
      en: {
        title: "ChatGPT vs Claude vs Grok",
        excerpt:
          "Three text assistants, three temperaments. Which one to pick by task.",
        verdict:
          "If you want the most connected generalist, ChatGPT. If long writing and tone matter, Claude. If you need a live news pulse and a more direct style, Grok. Many teams keep two: one to draft, one to challenge.",
        rows: [
          {
            label: "Best for",
            values: [
              "General work and ecosystem",
              "Long-form writing and documents",
              "Current events and direct tone",
            ],
          },
          {
            label: "Prose quality",
            values: ["Very high", "Excellent", "High, more informal"],
          },
          {
            label: "Sources / freshness",
            values: ["Good with search", "Good on request", "Very good"],
          },
          {
            label: "Coding",
            values: ["Very good", "Very good", "Good"],
          },
          {
            label: "Entry plan",
            values: ["Free + Plus", "Free + Pro", "Free + xAI plans"],
          },
          {
            label: "Learning curve",
            values: ["Low", "Low", "Low"],
          },
        ],
      },
    },
  },
  {
    slug: "cursor-vs-chatgpt-codigo",
    toolSlugs: ["cursor", "chatgpt"],
    updatedAt: "2026-08-21",
    copy: {
      es: {
        title: "Cursor vs ChatGPT para programar",
        excerpt:
          "Chat en el navegador o un agente dentro del repositorio. No resuelven el mismo problema.",
        verdict:
          "ChatGPT es excelente para diseñar, explicar y pegar snippets. Cursor gana cuando el cambio tiene que aterrizar en archivos reales del repo. La combinación habitual: pensar el enfoque en ChatGPT o Claude, aplicar y revisar en Cursor.",
        rows: [
          {
            label: "Contexto",
            values: ["El repo indexado", "Lo que pegas en el chat"],
          },
          {
            label: "Aplicar cambios",
            values: ["Diffs en el editor", "Copiar y pegar a mano"],
          },
          {
            label: "Mejor momento",
            values: ["Implementar y refactorizar", "Diseñar y desatascar"],
          },
          {
            label: "Riesgo",
            values: ["Agentes demasiado ambiciosos", "Código desconectado del repo"],
          },
          {
            label: "Precio típico",
            values: ["Suscripción de IDE", "Plus / Team"],
          },
        ],
      },
      en: {
        title: "Cursor vs ChatGPT for coding",
        excerpt:
          "A browser chat or an agent inside the repo. They do not solve the same problem.",
        verdict:
          "ChatGPT is excellent for designing, explaining and pasting snippets. Cursor wins when the change has to land in real repo files. The usual combo: think the approach in ChatGPT or Claude, apply and review in Cursor.",
        rows: [
          {
            label: "Context",
            values: ["The indexed repo", "Whatever you paste into the chat"],
          },
          {
            label: "Applying changes",
            values: ["Diffs in the editor", "Copy and paste by hand"],
          },
          {
            label: "Best moment",
            values: ["Implement and refactor", "Design and unblock"],
          },
          {
            label: "Risk",
            values: ["Over-ambitious agents", "Code disconnected from the repo"],
          },
          {
            label: "Typical price",
            values: ["IDE subscription", "Plus / Team"],
          },
        ],
      },
    },
  },
];

export function getComparison(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}
