import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "claude-escritura-larga";

export const claudeEscrituraLarga: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "intermediate",
  estimatedTime: 20,
  publishedAt: "2026-08-08",
  lastUpdated: "2026-08-26",
  toolsUsed: ["claude", "chatgpt", "perplexity"],
  relatedTutorials: ["chatgpt-primeros-pasos", "perplexity-investigacion-con-fuentes"],
  tags: ["claude", "escritura-larga", "voz", "edicion"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Claude con un documento largo y un mapa de secciones",
      caption: "Primero el mapa. La reescritura va por bloques.",
      hint: "Hero: Claude con un doc a la izquierda y un outline de tesis + secciones.",
    },
    en: {
      alt: "Claude with a long document and a section map",
      caption: "Map first. The rewrite happens in blocks.",
      hint: "Hero: Claude with a doc on the left and a thesis + section outline.",
    },
  }),
  copy: {
    es: {
      title: "Cómo editar un texto largo con Claude sin perder la voz (2026)",
      metaTitle: "Editar textos largos con Claude en 2026",
      metaDescription:
        "Mapa, voz, una sección por mensaje y un control de lo que no estaba en el original. Un método para no aplanar el documento.",
      excerpt:
        "No pidas «reescribe esto». Diagnostica, declara la voz, edita por secciones y marca lo inventado.",
      intro:
        "Claude aguanta documentos enteros mejor que un chat generalista. El error es «reescribe esto» y aceptar un tono de comunicado. Aquí se trabaja por capas: mapa, voz, bloque, control de honestidad.",
      problem:
        "Un rewrite global alisa repeticiones útiles, cambia cifras y deja el texto en un registro único. Parece «más profesional» y ha perdido la voz y, a veces, los hechos.",
      whatYouWillLearn: [
        "Pedir un mapa antes de tocar una frase",
        "Fijar la voz con un ejemplo, no con cinco adjetivos sueltos",
        "Reescribir una sección por mensaje",
        "Usar un Artifact (o un bloque estable) como mesa de edición",
        "Listar afirmaciones que no estaban en el original",
      ],
      prerequisites: [
        "El documento original (no un resumen). Claude.ai, plan gratis vale para un texto mediano",
        "Un párrafo que suene como tú o como la marca",
        "Los hechos que no se pueden «mejorar» (cifras, nombres, citas)",
      ],
      steps: [
        {
          title: "Sube el original y pide un mapa, no un rewrite",
          content:
            "Pega o adjunta el documento completo. Primera orden: «Tesis en una frase, lista de secciones, repeticiones y frases flojas. No reescribas todavía.» Si el mapa está mal, el rewrite estará mal. Corrige el mapa contigo.",
          whatYouShouldSee: "Un outline con tesis y secciones. El texto original aún intacto.",
          warning: "Si solo pegas un trozo, Claude rellenará el resto con la misma confianza.",
          imageDescription: "Chat de Claude con el doc adjunto y un mapa de secciones, sin prosa nueva.",
        },
        {
          title: "Fija la voz con un ejemplo, no con adjetivos",
          content:
            "Pega un párrafo que sí enviarías. Luego: «Mantén este registro. Prohibido: slogans, adjetivos vacíos, «en un mundo donde». Directo, concreto, verbos fuertes.» Cinco adjetivos sin ejemplo no bastan; Claude los traduce a tono de brochure.",
          whatYouShouldSee: "El párrafo-ejemplo visible arriba del hilo y las prohibiciones en la misma instrucción.",
          tip: "Si es voz de marca, un «sí» y un «no» reales ganan a cualquier moodboard de adjetivos.",
          imageDescription: "Mensaje con un párrafo de muestra y una lista corta de prohibiciones.",
        },
        {
          title: "Reescribe una sección por mensaje",
          content:
            "«Reescribe solo la sección 2. No toques el resto.» Acepta o rechaza ese bloque. Así evitas que alise todo el texto al mismo registro. Si una sección está bien, dilo y pasa a la siguiente.",
          whatYouShouldSee: "Un bloque nuevo etiquetado como sección N. El resto del doc no se ha regenerado.",
          warning: "«Ahora hazlo todo con este tono» es el atajo que aplana el artículo.",
          imageDescription: "Respuesta de Claude con una sola sección reescrita y el resto referenciado, no pegado de nuevo.",
        },
        {
          title: "Edita en un Artifact (o un único documento vivo)",
          content:
            "Pide el borrador en un Artifact y comenta cambios locales («quita la tercera frase», «recupera la cifra del original»). Es más preciso que regenerar el documento entero cada vez.",
          whatYouShouldSee: "Un Artifact o bloque único que se va parcheando, no cinco versiones enteras en el chat.",
          imageDescription: "Artifact de Claude con un comentario local en un párrafo.",
        },
        {
          title: "Pasa el control de honestidad",
          content:
            "«Marca afirmaciones, cifras y nombres que no estaban en el original.» Borra o sustituye. Si necesitabas un dato nuevo, tráelo de Perplexity + fuente abierta, no de la memoria del modelo.",
          whatYouShouldSee: "Una lista de añadidos. El texto final ya no los incluye, o los has firmado tú.",
          proTip: "Una pasada solo de nombres propios y fechas al final ahorra vergüenzas en público.",
          imageDescription: "Lista de afirmaciones no presentes en el original junto al Artifact.",
        },
      ],
      realUseCases: [
        { title: "Newsletter semanal", body: "El original son notas. El mapa decide qué se cae. La voz se fija con el envío de la semana pasada." },
        { title: "Informe interno", body: "Secciones por dueño. Claude no «mejora» las cifras. Tú las pegas." },
        { title: "Reescritura de un post largo", body: "Una H2 por mensaje. El CTA se escribe a mano." },
      ],
      commonMistakes: [
        { title: "Rewrite global", body: "Pierdes estructura y hechos. El mapa existe para evitarlo." },
        { title: "Voz = «sé profesional»", body: "Eso es brochure. Un párrafo de muestra es la voz." },
        { title: "Citar a Claude", body: "Las fuentes son el original y lo que abriste. Claude es el editor, no la referencia." },
      ],
      conclusion:
        "Claude es un editor de piezas largas si le das el texto entero, un ejemplo de voz y permiso para tocar solo un bloque. El control de honestidad no es un extra: es el cierre.",
      nextSteps: [
        "Repite el loop en un segundo documento más corto.",
        "Si aún no tienes método de briefing, vuelve a ChatGPT primeros pasos.",
        "Si te faltan fuentes, Perplexity primero, Claude después.",
      ],
      takeaway: "Mapa → voz con ejemplo → una sección → Artifact → lista de lo inventado.",
    },
    en: {
      title: "How to edit a long piece with Claude without losing the voice (2026)",
      metaTitle: "Edit long-form with Claude in 2026",
      metaDescription:
        "Map, voice, one section per message and a check for claims that were not in the original. A method that does not flatten the document.",
      excerpt:
        "Do not ask it to «rewrite this». Diagnose, declare the voice, edit by section and flag inventions.",
      intro:
        "Claude holds whole documents better than a generalist chat. The failure is «rewrite this» and a press-release tone. Work in layers: map, voice, block, honesty check.",
      problem:
        "A global rewrite smooths useful repetition, changes figures and leaves one register. It looks «more professional» and has lost the voice — and sometimes the facts.",
      whatYouWillLearn: [
        "Ask for a map before you touch a sentence",
        "Lock voice with a sample, not five loose adjectives",
        "Rewrite one section per message",
        "Use an Artifact (or one living block) as the editing table",
        "List claims that were not in the original",
      ],
      prerequisites: [
        "The full original (not a summary). Claude.ai; the free plan is enough for a medium piece",
        "A paragraph that sounds like you or the brand",
        "Facts that must not be «improved» (figures, names, quotes)",
      ],
      steps: [
        {
          title: "Upload the original and ask for a map, not a rewrite",
          content:
            "Paste or attach the full document. First order: «Thesis in one sentence, list of sections, repetition and weak lines. Do not rewrite yet.» If the map is wrong, the rewrite will be wrong. Fix the map with it.",
          whatYouShouldSee: "An outline with a thesis and sections. The original still intact.",
          warning: "If you only paste a slice, Claude will fill the rest with the same confidence.",
          imageDescription: "Claude chat with the doc attached and a section map, no new prose yet.",
        },
        {
          title: "Lock voice with a sample, not adjectives",
          content:
            "Paste a paragraph you would actually send. Then: «Keep this register. Banned: slogans, empty adjectives, «in a world where». Direct, concrete, strong verbs.» Five adjectives with no sample get translated into brochure tone.",
          whatYouShouldSee: "The sample paragraph visible at the top of the thread and the bans in the same instruction.",
          tip: "For brand voice, one real yes and one real no beat any adjective moodboard.",
          imageDescription: "A message with a sample paragraph and a short ban list.",
        },
        {
          title: "Rewrite one section per message",
          content:
            "«Rewrite section 2 only. Do not touch the rest.» Accept or reject that block. That stops it flattening the whole piece into one register. If a section is already fine, say so and move on.",
          whatYouShouldSee: "A new block labeled as section N. The rest of the doc has not been regenerated.",
          warning: "«Now do the whole thing in this tone» is the shortcut that flattens the article.",
          imageDescription: "Claude reply with a single rewritten section and the rest referenced, not pasted again.",
        },
        {
          title: "Edit in an Artifact (or one living document)",
          content:
            "Ask for the draft in an Artifact and comment locally («cut the third sentence», «put the original figure back»). More precise than regenerating the whole document each time.",
          whatYouShouldSee: "One Artifact or block being patched, not five full versions in the chat.",
          imageDescription: "A Claude Artifact with a local comment on one paragraph.",
        },
        {
          title: "Run the honesty check",
          content:
            "«Flag claims, figures and names that were not in the original.» Delete or replace. If you needed a new fact, bring it from Perplexity + an opened source, not from the model’s memory.",
          whatYouShouldSee: "A list of additions. The final text no longer includes them, or you signed them.",
          proTip: "A last pass on proper names and dates only saves public embarrassment.",
          imageDescription: "A list of claims not in the original next to the Artifact.",
        },
      ],
      realUseCases: [
        { title: "Weekly newsletter", body: "The original is notes. The map decides what drops. Voice is last week’s send." },
        { title: "Internal report", body: "Sections by owner. Claude does not «improve» the figures. You paste them." },
        { title: "Rewrite of a long post", body: "One H2 per message. The CTA is written by hand." },
      ],
      commonMistakes: [
        { title: "Global rewrite", body: "You lose structure and facts. The map exists to stop that." },
        { title: "Voice = «be professional»", body: "That is brochure. A sample paragraph is the voice." },
        { title: "Citing Claude", body: "Sources are the original and what you opened. Claude is the editor, not the reference." },
      ],
      conclusion:
        "Claude is a long-form editor if you give it the whole text, a voice sample and permission to touch one block. The honesty check is not extra. It is the close.",
      nextSteps: [
        "Run the loop on a second, shorter document.",
        "If you still lack a briefing method, go back to ChatGPT first steps.",
        "If you lack sources, Perplexity first, Claude second.",
      ],
      takeaway: "Map → voice sample → one section → Artifact → list of inventions.",
    },
  },
};
