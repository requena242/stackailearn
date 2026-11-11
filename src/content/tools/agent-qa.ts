import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

export const agentQa: Tool = {
  "id": "agent-qa",
  "slug": "agent-qa",
  "name": "agent-qa",
  "vendor": "vostride",
  "officialUrl": "https://vostride.com",
  "category": "code",
  "pricing": "free",
  "featured": false,
  "accent": "#2563EB",
  "initials": "aq",
  "lastUpdated": "2026-11-11",
  "difficulty": "advanced",
  "platforms": [
    "cli"
  ],
  "useTypes": [
    "automate",
    "code"
  ],
  "tags": [
    "qa",
    "testing",
    "memidex",
    "memory",
    "self-improvement"
  ],
  "alternatives": [],
  "relatedTools": [
    "cursor",
    "hermes-agent"
  ],
  "relatedTutorials": [],
  "screenshots": [toolImage("agent-qa", "hero", "hero", {
  "es": {
    "alt": "Evidencias y conocimiento de una ejecución de agent-qa",
    "caption": "Captura pendiente: revisar evidencias y conocimiento junto al resultado.",
    "hint": "Captura propia de una aplicación de demostración, sin datos personales, que muestre el resultado de QA y sus evidencias."
  },
  "en": {
    "alt": "Evidence and knowledge from an agent-qa run",
    "caption": "Screenshot pending: inspect evidence and knowledge alongside the result.",
    "hint": "Capture a demonstration application without personal data, showing the QA result and its step evidence."
  }
})],
  "copy": {
    "es": {
      "shortDescription": "QA para web, Android e iOS con memoria memidex, mejora validada y evidencias por paso.",
      "fullDescription": "agent-qa, de vostride, prueba recorridos de usuario descritos en lenguaje natural y registra pasos y capturas. Su memoria persistente memidex conserva conocimiento revisable de la aplicación, mientras la mejora validada permite reutilizar lo aprendido en siguientes ejecuciones.\n\nIncluye CLI, panel local y MCP para agentes de programación. Requiere Node.js 24+, un modelo configurado y el entorno de navegador o dispositivo. Ficha basada en documentación oficial; no se ha realizado una prueba independiente del producto.",
      "subcategory": "QA con memoria persistente",
      "pricingDetails": "Precio del software: $0 para uso local permitido por FSL-1.1-ALv2, sin plan de pago ni cuota por usuario o prueba. La licencia restringe usos comerciales competidores. Los modelos, el cómputo y los entornos de navegador/dispositivo se pagan aparte.",
      "bestFor": [
        "Equipos que quieren expresar recorridos de usuario como pruebas",
        "QA recurrente que necesita conservar evidencias y conocimiento de la aplicación"
      ],
      "notFor": [
        "Quien necesita un servicio alojado sin configurar modelos o entornos",
        "Crear un servicio comercial competidor sin revisar FSL-1.1-ALv2"
      ],
      "pros": [
        "Memoria memidex persistente y revisable",
        "Mejora validada para reutilizar conocimiento de la aplicación",
        "Pasos y capturas para revisar resultados de web, Android e iOS"
      ],
      "cons": [
        "Requiere Node.js 24+ y configurar un modelo",
        "El navegador o dispositivo de prueba necesita preparación",
        "Costes externos y restricciones de licencia que revisar"
      ],
      "keyFeatures": [
        "Pruebas descritas en lenguaje natural",
        "Evidencias de cada paso para revisar fallos",
        "Memoria persistente de hechos y procedimientos",
        "Mejora validada y correcciones mediante feedback",
        "CLI, panel local e integración MCP por stdio"
      ],
      "faq": [
        {
          "q": "¿Qué es agent-qa?",
          "a": "Una herramienta de vostride para probar recorridos de usuario en web, Android e iOS mediante instrucciones en lenguaje natural."
        },
        {
          "q": "¿Qué aporta memidex?",
          "a": "Conserva conocimiento revisable de la aplicación para reutilizarlo en ejecuciones posteriores. Los candidatos deben superar las condiciones documentadas antes de activarse."
        },
        {
          "q": "¿Cómo se integra con un agente de programación?",
          "a": "Ofrece MCP por stdio y una CLI. La guía oficial documenta la configuración para Claude Code y Codex."
        },
        {
          "q": "¿Qué cuesta usar agent-qa?",
          "a": "El software cuesta $0 para usos locales permitidos por FSL-1.1-ALv2. El modelo y el entorno de navegador o dispositivo pueden tener costes separados."
        }
      ],
      "quickTutorial": {
        "title": "Primer recorrido de QA",
        "steps": [
          "En tu proyecto, con Node.js 24+, instala con npm install -D agent-qa y ejecuta npx agent-qa init.",
          "Sigue la guía oficial para configurar el proveedor del modelo y el entorno de prueba.",
          "Ejecuta el ejemplo de la guía o un recorrido acotado en tu aplicación de pruebas.",
          "Revisa el veredicto, las evidencias por paso y los cambios de conocimiento antes de reutilizarlos."
        ]
      }
    },
    "en": {
      "shortDescription": "Web, Android and iOS QA with memidex memory, validated self-improvement and step evidence.",
      "fullDescription": "agent-qa by vostride tests user journeys written in natural language and records steps and screenshots. Its persistent memidex memory retains reviewable application knowledge, while validated self-improvement helps later runs reuse what has been learned.\n\nIt provides a CLI, local dashboard and MCP for coding agents. Requires Node.js 24+, a configured model and a browser/device environment. This entry is based on official documentation; the product has not been independently runtime-tested.",
      "subcategory": "QA with persistent memory",
      "pricingDetails": "Software price: $0 for local uses permitted by FSL-1.1-ALv2, with no paid tier, seat fee or per-test platform fee. The license restricts competing commercial uses. Models, compute and browser/device environments cost separately.",
      "bestFor": [
        "Teams describing user journeys as tests",
        "Repeated QA runs that need evidence and retained application knowledge"
      ],
      "notFor": [
        "Anyone needing a hosted service without model or environment setup",
        "Building a competing commercial service without reviewing FSL-1.1-ALv2"
      ],
      "pros": [
        "Persistent and reviewable memidex memory",
        "Validated self-improvement to reuse application knowledge",
        "Steps and screenshots for reviewing web, Android and iOS results"
      ],
      "cons": [
        "Requires Node.js 24+ and a configured model",
        "The test browser/device environment needs preparation",
        "External costs and license restrictions need review"
      ],
      "keyFeatures": [
        "Tests expressed in natural language",
        "Step evidence for investigating failures",
        "Persistent facts and procedures",
        "Validated self-improvement and feedback-based corrections",
        "CLI, local dashboard and stdio MCP integration"
      ],
      "faq": [
        {
          "q": "What is agent-qa?",
          "a": "A vostride tool for testing user journeys on web, Android and iOS using natural-language instructions."
        },
        {
          "q": "What does memidex add?",
          "a": "It retains reviewable application knowledge for later runs. Candidates must satisfy the documented checks before activation."
        },
        {
          "q": "How does it integrate with a coding agent?",
          "a": "It provides stdio MCP and a CLI. The official guide documents setup for Claude Code and Codex."
        },
        {
          "q": "What does agent-qa cost to use?",
          "a": "The software is $0 for local uses permitted by FSL-1.1-ALv2. Your model and browser/device environment can have separate costs."
        }
      ],
      "quickTutorial": {
        "title": "Your first QA journey",
        "steps": [
          "In your project with Node.js 24+, run npm install -D agent-qa followed by npx agent-qa init.",
          "Follow the official quickstart to configure a model provider and test environment.",
          "Run the documented demo or a bounded journey in your test application.",
          "Review the verdict, step evidence and knowledge changes before reusing them."
        ]
      }
    }
  }
};
