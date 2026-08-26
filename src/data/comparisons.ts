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
  {
    slug: "chatgpt-vs-perplexity",
    toolSlugs: ["chatgpt", "perplexity"],
    updatedAt: "2026-08-26",
    copy: {
      es: {
        title: "ChatGPT vs Perplexity",
        excerpt:
          "Redactar y pensar en un chat, o briefar con citas. No sustituyen el mismo paso del trabajo.",
        verdict:
          "Usa Perplexity para acotar hechos y abrir fuentes. Pasa a ChatGPT (o Claude) cuando toque redactar, variar tono o guardar el flujo. Si pegas el párrafo de Perplexity en un informe, estás publicando a un intermediario.",
        rows: [
          {
            label: "Mejor para",
            values: [
              "Redactar, idear y un flujo que se repite",
              "Pregunta acotada con citas que puedes abrir",
            ],
          },
          {
            label: "Fuentes",
            values: [
              "Búsqueda opcional; hay que pedir que marque lo incierto",
              "Citas en la respuesta; el trabajo es abrir dos",
            ],
          },
          {
            label: "Prosa",
            values: ["Muy alta si el briefing es bueno", "Correcta; no es un editor"],
          },
          {
            label: "Riesgo",
            values: [
              "Texto fluido que inventa con naturalidad",
              "Resumen que parece fuente primaria y no lo es",
            ],
          },
          {
            label: "Cuándo cambiar",
            values: [
              "Cuando ya tienes hechos y falta el entregable",
              "Cuando aún no sabes qué está respaldado",
            ],
          },
          {
            label: "Plan de entrada",
            values: ["Gratis + Plus / Team", "Gratis + Pro"],
          },
        ],
        faq: [
          {
            q: "¿Puedo usar solo uno de los dos?",
            a: "Sí. Si solo escribes, ChatGPT basta. Si solo investigas una cifra o una fecha, Perplexity basta. El error es usar el mismo chat para las dos cosas y no abrir fuentes.",
          },
          {
            q: "¿Cuál posiciona mejor como «buscador con IA»?",
            a: "Perplexity se presenta como respuesta con citas. ChatGPT con búsqueda también cita, pero el hábito por defecto es redactar. Elige por el entregable, no por el marketing.",
          },
          {
            q: "¿Y Claude?",
            a: "Cuando el texto es largo y el tono importa, Claude suele ganar a los dos como editor. No sustituye a Perplexity para abrir fuentes.",
          },
        ],
      },
      en: {
        title: "ChatGPT vs Perplexity",
        excerpt:
          "Write and think in a chat, or brief with citations. They do not replace the same step.",
        verdict:
          "Use Perplexity to bound facts and open sources. Move to ChatGPT (or Claude) when you need to draft, vary tone or keep a repeatable flow. If you paste Perplexity's paragraph into a report, you are publishing an intermediary.",
        rows: [
          {
            label: "Best for",
            values: [
              "Drafting, ideation and a flow you repeat",
              "A bounded question with citations you can open",
            ],
          },
          {
            label: "Sources",
            values: [
              "Optional search; you must ask it to flag uncertainty",
              "Citations in the answer; the work is opening two of them",
            ],
          },
          {
            label: "Prose",
            values: ["Very high if the brief is good", "Fine; it is not an editor"],
          },
          {
            label: "Risk",
            values: [
              "Fluent text that invents smoothly",
              "A summary that looks like a primary source and is not",
            ],
          },
          {
            label: "When to switch",
            values: [
              "When you already have facts and need the deliverable",
              "When you still do not know what is backed",
            ],
          },
          {
            label: "Entry plan",
            values: ["Free + Plus / Team", "Free + Pro"],
          },
        ],
        faq: [
          {
            q: "Can I use only one of them?",
            a: "Yes. If you only write, ChatGPT is enough. If you only need a figure or a date, Perplexity is enough. The failure is using one chat for both and never opening sources.",
          },
          {
            q: "Which one is the better «AI search»?",
            a: "Perplexity presents itself as an answer with citations. ChatGPT with search also cites, but the default habit is drafting. Pick by the deliverable, not the marketing.",
          },
          {
            q: "What about Claude?",
            a: "When the piece is long and voice matters, Claude usually beats both as an editor. It does not replace Perplexity for opening sources.",
          },
        ],
      },
    },
  },
];

export function getComparison(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}
