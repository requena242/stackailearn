import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "ideogram";

export const ideogram: Tool = {
  id: slug,
  slug,
  name: "Ideogram",
  vendor: "Ideogram",
  officialUrl: "https://ideogram.ai",
  category: "image",
  pricing: "freemium",
  featured: false,
  accent: "#111827",
  initials: "ID",
  image: `/media/tools/${slug}/hero.jpg`,
  rating: 4.5,
  ratingCount: 620,
  lastUpdated: "2026-10-06",
  difficulty: "beginner",
  platforms: ["web"],
  useTypes: ["create"],
  tags: [
    "imagen",
    "tipografía",
    "texto-en-imagen",
    "posters",
    "logos",
    "marketing",
  ],
  alternatives: ["midjourney", "runway"],
  relatedTools: ["midjourney", "runway"],
  relatedTutorials: [
    "alternativas-midjourney",
    "midjourney-sref-estilo",
    "midjourney-prompts-que-funcionan",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Ideogram con un póster generado y el titular legible en el encuadre",
        caption:
          "El texto va en el prompt entre comillas; Layerize Text permite retocar el copy sin regenerar todo.",
        hint:
          "Hero 1600×900: canvas de Ideogram con un póster 4:5, titular de 3–5 palabras nítido y panel lateral mostrando Layerize Text o capas de texto.",
      },
      en: {
        alt: "Ideogram with a generated poster and a readable headline in frame",
        caption:
          "Put the copy in quotes in the prompt; Layerize Text lets you tweak wording without a full regen.",
        hint:
          "Hero 1600×900: Ideogram canvas with a 4:5 poster, sharp 3–5 word headline and side panel showing Layerize Text or text layers.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Generador de imagen orientado a tipografía en escena: carteles, packaging y logos con texto que se lee.",
      fullDescription:
        "Ideogram genera imágenes con texto integrado en el frame. El vendor lo posiciona como capacidad central — no como un efecto secundario — con guías de texto en ideogram.ai y, en modelos recientes, control de layout con JSON (elementos `text`, `bbox` y paleta) documentado en docs.ideogram.ai.\n\nEncaja cuando el entregable lleva titular, claim o nombre de producto que tiene que leerse a primera vista: póster, cartel, mock de packaging, portada o logo exploratorio. Layerize Text (text layers) extrae líneas a capas editables para cambiar copy, fuente o tamaño sin tirar el diseño entero; el vendor advierte que está en beta y funciona mejor con tipografía recta y clara.\n\nNo sustituye a un diseñador ni a Illustrator para un sistema de marca cerrado. Para moodboards cinematográficos, variaciones de estilo con --sref o dirección de arte sin copy crítico, Midjourney sigue siendo la referencia habitual en StackAI Learn.",
      subcategory: "Generación de imagen con tipografía",
      pricingDetails:
        "Hay tier gratuito con créditos o generaciones limitadas según la política actual en ideogram.ai; los planes de pago amplían cola, resolución y acceso a API. Nombres de plan, créditos y límites rotan — revisa la página de precios antes de prometer un volumen a cliente. No hay programa de afiliado en StackAI Learn.",
      bestFor: [
        "Pósters, redes y packaging con titular o claim legible",
        "Explorar logos y lockups donde el nombre importa en el frame",
        "Iterar copy corto con Layerize Text sin regenerar el fondo",
      ],
      notFor: [
        "Solo dirección de arte o moodboard sin texto en imagen",
        "Manuales de marca con tipografía corporativa exacta sin revisión humana",
        "Fotografía hiperrealista de producto sin copy (Midjourney suele ir más fino en el plano)",
      ],
      pros: [
        "Texto en imagen como foco del producto (guías y features oficiales)",
        "Layerize Text para editar líneas tras generar",
        "JSON prompting en 4.x para posición y paleta repetible (docs del vendor)",
        "Categorías de diseño (Poster, Logo, etc.) que orientan el layout",
      ],
      cons: [
        "Layerize Text en beta: curvas y tipos muy decorativos fallan más",
        "No es un editor vectorial: kerning perfecto y legal de marca siguen fuera",
        "Créditos y modelos cambian en la UI con frecuencia",
        "Estilo «cine» o pintura muy dirigida: Midjourney sigue más maduro en --sref",
      ],
      keyFeatures: [
        "Generación con texto literal en el prompt",
        "Layerize Text / capas de texto editables (web; API según documentación)",
        "JSON prompting con elementos de texto y bbox (Ideogram 4.x)",
        "Remix, inpainting y herramientas de edición en el canvas",
        "API para equipos que automatizan variantes de cartel",
      ],
      faq: [
        {
          q: "¿Cómo escribo el texto en el prompt?",
          a: "Pon las palabras exactas entre comillas y describe formato (póster, logo) y estilo tipográfico (sans, serif, hand-lettered). La guía de text rendering del vendor recomienda ser explícito con placement y categoría de diseño.",
        },
        {
          q: "¿Puedo cambiar el titular sin regenerar?",
          a: "Sí, con Layerize Text: convierte líneas en capas y edita copy o fuente. Si el tipo es muy curvo o decorativo, el vendor sugiere un diseño con tipografía más convencional.",
        },
        {
          q: "¿Ideogram o Midjourney para un cartel?",
          a: "Si el titular tiene que leerse, empieza en Ideogram. Si el cartel es sobre todo imagen y el texto va en capas aparte en Figma, Midjourney puede bastar — mira ideogram-vs-midjourney-tipografia.",
        },
        {
          q: "¿Sirve para logo final de cliente?",
          a: "Sirve para exploración y mock interno. Entrega final de marca: vector, legal y revisión humana; no publiques un logo generado sin aprobar derechos y similitudes.",
        },
      ],
      quickTutorial: {
        title: "Un póster con titular legible",
        steps: [
          "Elige categoría Poster (o equivalente) y ratio del formato real.",
          "Prompt: contexto visual + comillas con el titular exacto + estilo tipográfico.",
          "Genera 4 variantes; descarta las que fallen una letra antes de pulir estilo.",
          "Layerize Text en la mejor; ajusta una línea si hace falta.",
          "Exporta; texto legal o logo de marca sigue en tu flujo de diseño habitual.",
        ],
      },
    },
    en: {
      shortDescription:
        "Image generator focused on in-scene typography: posters, packaging and logos with type you can actually read.",
      fullDescription:
        "Ideogram generates images with text baked into the frame. The vendor treats readable type as a core capability — not a side effect — with text guides on ideogram.ai and, on recent models, layout control via JSON (`text` elements, `bbox`, palettes) documented at docs.ideogram.ai.\n\nUse it when the deliverable needs a headline, claim or product name that must read at a glance: poster, signage mock, packaging, cover or exploratory logo. Layerize Text pulls lines into editable layers so you can change copy, font or size without throwing away the whole design; the vendor notes it is in beta and works best on clear, straight type.\n\nIt does not replace a designer or Illustrator for a locked brand system. For cinematic moodboards, style exploration with --sref or art direction without critical copy, Midjourney remains the usual reference on StackAI Learn.",
      subcategory: "Image generation with typography",
      pricingDetails:
        "A free tier exists with credits or limited generations under the current policy on ideogram.ai; paid plans expand queue, resolution and API access. Plan names, credits and limits change — check pricing before you promise volume to a client. There is no affiliate program on StackAI Learn.",
      bestFor: [
        "Posters, social and packaging with a readable headline or claim",
        "Exploring logos and lockups where the name must sit in frame",
        "Iterating short copy with Layerize Text without regenning the background",
      ],
      notFor: [
        "Pure art direction or moodboards with no in-image type",
        "Brand manuals with exact corporate type without human review",
        "Hyperreal product shots with no copy (Midjourney often wins on the frame alone)",
      ],
      pros: [
        "In-image type as a product focus (official guides and features)",
        "Layerize Text to edit lines after generation",
        "JSON prompting on 4.x for repeatable position and palette (vendor docs)",
        "Design categories (Poster, Logo, etc.) that steer layout",
      ],
      cons: [
        "Layerize Text in beta: curves and heavy display type fail more often",
        "Not a vector editor: perfect kerning and brand legal still sit outside",
        "Credits and model names rotate in the UI",
        "Very directed cinematic or painterly look: Midjourney is more mature on --sref",
      ],
      keyFeatures: [
        "Generation with literal copy in the prompt",
        "Layerize Text / editable text layers (web; API per documentation)",
        "JSON prompting with text elements and bbox (Ideogram 4.x)",
        "Remix, inpainting and canvas editing tools",
        "API for teams automating poster variants",
      ],
      faq: [
        {
          q: "How do I write the text in the prompt?",
          a: "Put the exact words in quotes and describe format (poster, logo) and type style (sans, serif, hand-lettered). The vendor’s text rendering guide recommends being explicit about placement and design category.",
        },
        {
          q: "Can I change the headline without a full regen?",
          a: "Yes, with Layerize Text: convert lines to layers and edit copy or font. For very curved or decorative type, the vendor suggests a design with more conventional typography.",
        },
        {
          q: "Ideogram or Midjourney for a poster?",
          a: "If the headline must read, start in Ideogram. If the poster is mostly image and type lives in separate Figma layers, Midjourney may be enough — see ideogram-vs-midjourney-tipografia.",
        },
        {
          q: "Is it fine for a final client logo?",
          a: "Fine for exploration and internal mocks. Final brand delivery still needs vector, legal and human review; do not ship a generated logo without checking rights and similarity.",
        },
      ],
      quickTutorial: {
        title: "A poster with a readable headline",
        steps: [
          "Pick Poster category (or equivalent) and the real aspect ratio.",
          "Prompt: visual context + quotes around the exact headline + type style.",
          "Generate four variants; discard any that misspell before you polish look.",
          "Layerize Text on the best take; tweak one line if needed.",
          "Export; legal lines or brand marks still flow through your usual design stack.",
        ],
      },
    },
  },
};
