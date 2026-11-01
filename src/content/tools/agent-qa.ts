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
  "lastUpdated": "2026-11-01",
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
      "shortDescription": "QA para web, Android e iOS con memoria memidex y aprendizaje validado; modelos y dispositivos se pagan aparte.",
      "fullDescription": "agent-qa, de vostride, convierte recorridos descritos en lenguaje natural en pruebas de web, Android e iOS con evidencias por paso. memidex conserva hechos y procedimientos como archivos revisables para que las siguientes ejecuciones aprovechen lo aprendido.\n\nLa mejora ocurre después del veredicto: los candidatos pasan controles antes de utilizarse. En local se activa el conocimiento que supera las condiciones; en CI se generan propuestas. Es un proyecto en fase temprana que requiere Node.js 24 o superior. Esta ficha se basa en la documentación oficial, sin una prueba independiente del producto.",
      "subcategory": "QA con memoria persistente",
      "pricingDetails": "Sin cuota de software para los usos permitidos por FSL-1.1-ALv2. La licencia restringe el uso comercial que compite con el producto. El proveedor del modelo y los servicios de dispositivos pueden cobrar por separado; no implica pruebas sin coste total.",
      "bestFor": [
        "Equipos que quieren expresar recorridos de usuario como pruebas",
        "QA recurrente que necesita conservar evidencias y conocimiento de la aplicación"
      ],
      "notFor": [
        "Quien busca una herramienta madura sin configuración de modelos",
        "Redistribuir un servicio comercial competidor sin revisar la licencia"
      ],
      "pros": [
        "Memoria memidex revisable entre ejecuciones",
        "Aprendizaje con comprobaciones de evidencia y propuestas en CI",
        "Un flujo de QA para web, Android e iOS"
      ],
      "cons": [
        "Fase temprana: pueden aparecer errores y cambios",
        "Requiere Node.js 24+ y configurar un modelo",
        "Costes externos y restricciones de licencia que revisar"
      ],
      "keyFeatures": [
        "Pruebas descritas en lenguaje natural",
        "Evidencias de cada paso para revisar fallos",
        "Memoria persistente de hechos y procedimientos",
        "Aprendizaje validado y correcciones mediante feedback",
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
          "q": "¿La mejora cambia el código del agente?",
          "a": "No. Mejora el conocimiento de la aplicación y el uso de evidencias; no reescribe sus propios prompts ni su código."
        },
        {
          "q": "¿Es completamente gratis?",
          "a": "El software no tiene cuota para usos permitidos por FSL-1.1-ALv2. Los modelos y servicios de dispositivos pueden tener coste, y la licencia limita usos comerciales competidores."
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
      "shortDescription": "Web, Android and iOS QA with memidex memory and validated learning; model and device costs are separate.",
      "fullDescription": "agent-qa by vostride turns user journeys written in natural language into web, Android and iOS tests with evidence for each step. memidex stores facts and procedures in reviewable files so later runs can reuse application knowledge.\n\nLearning happens after the verdict, with checks before candidate knowledge can be used. Eligible local knowledge can be activated; CI produces proposals. The project is early-stage and requires Node.js 24 or newer. This entry is based on official documentation, without an independent product runtime test.",
      "subcategory": "QA with persistent memory",
      "pricingDetails": "No software fee for uses permitted by FSL-1.1-ALv2. The license restricts competing commercial use. Model providers and device services can charge separately; this does not mean every test has zero total cost.",
      "bestFor": [
        "Teams describing user journeys as tests",
        "Repeated QA runs that need evidence and retained application knowledge"
      ],
      "notFor": [
        "Anyone seeking a mature tool with no model configuration",
        "Competing commercial redistribution without reviewing the license"
      ],
      "pros": [
        "Reviewable memidex memory across runs",
        "Evidence checks for learning and proposal-only behavior in CI",
        "One QA workflow for web, Android and iOS"
      ],
      "cons": [
        "Early-stage software can have bugs and changes",
        "Requires Node.js 24+ and a configured model",
        "External costs and license restrictions need review"
      ],
      "keyFeatures": [
        "Tests expressed in natural language",
        "Step evidence for investigating failures",
        "Persistent facts and procedures",
        "Validated learning and feedback-based corrections",
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
          "q": "Does self-improvement change the agent code?",
          "a": "No. It improves application knowledge and use of evidence, without rewriting its own prompts or code."
        },
        {
          "q": "Is it completely free?",
          "a": "There is no software fee for uses permitted by FSL-1.1-ALv2. Models and device services may cost extra, and competing commercial uses are restricted."
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
