import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "leonardo-primer-flujo";

export const leonardoPrimerFlujo: Tutorial = {
  id: slug,
  slug,
  category: "image",
  level: "beginner",
  estimatedTime: 16,
  publishedAt: "2026-10-11",
  lastUpdated: "2026-10-11",
  toolsUsed: ["leonardo", "midjourney", "ideogram"],
  relatedTutorials: [
    "alternativas-midjourney",
    "midjourney-prompts-que-funcionan",
    "midjourney-variaciones-upscale",
  ],
  tags: ["leonardo", "imagen", "prompt", "aspect-ratio", "upscale", "export"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Leonardo AI con prompt de producto, grid de cuatro variantes y botón de upscale en una miniatura",
      caption: "Formato primero, lote después. El keeper se upscalea, no el grid entero.",
      hint:
        "Hero 1600×900: Leonardo con prompt de botella en 4:5, cuatro miniaturas y menú Upscale Image visible al hover.",
    },
    en: {
      alt: "Leonardo AI with a product prompt, four-variant grid and upscale button on a thumbnail",
      caption: "Format first, batch second. Upscale the keeper, not the whole grid.",
      hint:
        "Hero 1600×900: Leonardo with bottle prompt in 4:5, four thumbnails and Upscale Image menu on hover.",
    },
  }),
  copy: {
    es: {
      title: "Leonardo AI: tu primer flujo de imágenes (2026)",
      metaTitle: "Leonardo AI: primer flujo de imágenes en 2026",
      metaDescription:
        "Modelo, relación de aspecto, prompt de plano, lote, iteración y upscale. Descarga desde Library y revisa derechos antes de cliente.",
      excerpt:
        "Un still exportable en una sesión: formato fijo, prompt con sujeto y luz, elige dirección, upscale el keeper.",
      intro:
        "Leonardo.Ai concentra generación, iteración y upscale en la web. Este flujo dura unos 16 minutos y termina con un PNG o JPG que puedes enseñar en un mock de producto o en redes — no con un grid de pruebas sin elegir. Partes de un formato real (4:5, 9:16 o 16:9), eliges un modelo acorde al brief y describes un plano, no un mood vago.",
      problem:
        "Mucha gente escribe «cinematic masterpiece 8K», deja el aspect ratio por defecto y upscalea las cuatro miniaturas. Gastan tokens, descargan imágenes borrosas en el formato equivocado y asumen que «IA» cubre uso comercial. El primer flujo útil fija entregable, genera un lote pequeño, itera un solo eje y solo entonces sube resolución del keeper.",
      whatYouWillLearn: [
        "Acotar entregable y relación de aspecto antes del primer token",
        "Elegir un modelo o preset acorde al brief (foto vs ilustración)",
        "Escribir prompt de sujeto, luz y exclusiones",
        "Generar un lote y marcar una dirección, no la miniatura más ruidosa",
        "Iterar con un cambio mínimo (luz o fondo)",
        "Upscalear desde el feed y descargar desde Library",
        "Revisar términos de uso del plan antes de uso con cliente",
      ],
      prerequisites: [
        "Cuenta en leonardo.ai con tokens disponibles (revisa el plan actual en el sitio)",
        "Un brief concreto: producto, retrato o concept art — no «algo bonito»",
        "16 minutos. Si dudas entre motores de imagen, lee alternativas-midjourney primero",
      ],
      steps: [
        {
          title: "Define entregable y relación de aspecto en una nota",
          content:
            "Antes de abrir el generador, escribe en una línea: dónde va la imagen (feed 4:5, stories 9:16, slide 16:9) y qué debe verse (sujeto, fondo, lo prohibido: texto inventado, manos en primer plano). Esa nota guía el aspect ratio en Leonardo; cambiar formato después suele obligar a regenerar.",
          whatYouShouldSee:
            "Una nota de cuatro líneas con formato, sujeto y exclusiones. Leonardo aún sin prompt enviado.",
          tip: "Si el brief lleva titular legible en el frame, anótalo; si Leonardo falla letras, tu plan B es Ideogram (ficha en el catálogo).",
          imageDescription:
            "Nota con «4:5 / botella / fondo oscuro / sin texto en etiqueta» junto a ventana de leonardo.ai sin generar.",
        },
        {
          title: "Entra en Image Generation y elige modelo",
          content:
            "Inicia sesión en leonardo.ai y abre la generación de imagen (prompt principal o sección Image según la UI actual). En el selector de modelo, elige uno acorde al brief: el vendor documenta familias como Lucid Origin o Lucid Realism y otros modelos que rotan en el feed de noticias. Para producto con luz de estudio, prioriza fotorrealismo; para ilustración editorial, un preset más pictórico. No cambies de modelo en cada regeneración hasta tener una dirección.",
          whatYouShouldSee:
            "Barra de prompt visible, panel de modelo abierto con un modelo seleccionado y coherente con tu nota.",
          warning:
            "Los nombres exactos cambian; busca el selector de modelo, no solo el primer preset por defecto.",
          imageDescription:
            "Panel de Leonardo con dropdown de modelo y prompt vacío; nota de brief al lado.",
        },
        {
          title: "Fija relación de aspecto y cantidad",
          content:
            "En los controles de generación, elige la relación de aspecto de tu nota (presets habituales 1:1, 2:3, 3:2, 16:9, 9:16 según documentación del vendor). Si generas varias imágenes por petición, empieza con 4 para un grid manejable en la primera ronda. Activa privacidad o visibilidad según tu plan si la UI lo ofrece antes de generar contenido sensible.",
          whatYouShouldSee:
            "Aspect ratio 4:5, 9:16 o 16:9 seleccionado y cantidad en 4 (o el mínimo que permita tu tier).",
          tip: "Formato incorrecto es el error más caro: corrígelo antes de pulsar Generate.",
          imageDescription:
            "Controles de aspect ratio resaltados en 4:5 y cantidad 4; prompt aún sin enviar.",
        },
        {
          title: "Escribe un prompt de plano, no de adjetivos",
          content:
            "En el prompt describe sujeto, encuadre, luz y fondo en frases cortas. Ejemplo producto: «Glass skincare bottle on mossy rock, soft studio key light from left, dark gradient background, no label text, product photography.» Evita cadenas de «ultra detailed cinematic 8K». Si la UI ofrece mejora automática del prompt (prompt enhance), desactívala en la primera ronda para saber qué escribiste tú; actívala solo si el vendor lo recomienda y quieres comparar.",
          whatYouShouldSee:
            "Un prompt de 2–4 líneas en inglés o español claro, alineado con la nota de entregable.",
          proTip:
            "Una exclusión explícita («no text on bottle») reduce sorpresas de tipografía inventada.",
          imageDescription:
            "Campo de prompt con descripción de producto y luz; enhance desactivado si la opción existe.",
        },
        {
          title: "Genera y elige dirección, no solo brillo",
          content:
            "Pulsa Generate y espera la cola. Revisa el lote: busca coherencia de sujeto y luz, no el filtro más saturado. Marca mentalmente una miniatura como dirección A. Si las cuatro fallan por el mismo motivo (fondo caótico, botella deforme), edita una sola variable en el prompt — fondo o ángulo — antes de subir cantidad o cambiar modelo.",
          whatYouShouldSee:
            "Grid de hasta cuatro imágenes en el feed. Una miniatura identificada como keeper candidato.",
          warning:
            "No upscalees todavía: primero confirma que el encuadre y el formato valen en tamaño base.",
          imageDescription:
            "Feed de Leonardo con grid 2×2; una imagen con borde o marca visual de «elegida».",
        },
        {
          title: "Itera un solo eje",
          content:
            "Con la dirección A clara, regenera o usa las herramientas de variación que muestre la UI (remix, variación o nuevo prompt con el mismo aspect ratio). Cambia solo luz o solo fondo: «same bottle, warmer key light, softer shadow». Máximo dos rondas extra en esta sesión. Si el texto o las manos siguen mal, no apiles adjetivos: recorta el encuadre en el prompt o cambia a un still sin copy crítico.",
          whatYouShouldSee:
            "Segundo lote parecido al primero con un cambio visible y controlado, o variación sobre la miniatura elegida.",
          tip: "Tres prompts distintos a la vez es ruido. Un eje por ronda.",
          imageDescription:
            "Dos filas en el feed: primera generación y segunda con luz más cálida; misma relación de aspecto.",
        },
        {
          title: "Upscale el keeper y descarga desde Library",
          content:
            "Pasa el ratón sobre la imagen final y pulsa Upscale Image (o abre Upscaler desde la barra o menú lateral, según las guías en leonardo.ai/news). Revisa modo y multiplicador antes de confirmar; Pro Upscaler ofrece tipos Precise y Creative en la documentación del Help Center. Cuando termine, abre Library si hace falta y usa el botón de descarga. Nombra el archivo con formato y fecha (`botella-4x5-2026-10-11.png`).",
          whatYouShouldSee:
            "Panel de upscale con ajustes visibles, luego archivo en descargas del sistema.",
          proTip:
            "Upscale solo el keeper. Cuatro upscales del mismo error multiplican tokens sin entregable.",
          imageDescription:
            "Menú Upscale Image sobre la miniatura elegida; slider antes/después o preview de mayor resolución.",
        },
        {
          title: "Anota derechos de uso antes de enseñarlo fuera",
          content:
            "Abre los términos de tu plan en leonardo.ai (uso comercial, atribución, contenido con marcas o personas reconocibles). Anota en la misma nota del brief: plan, fecha de generación y si el uso es interno, mock o entrega a cliente. Si el entregable lleva logo de terceros o retrato real sin permiso, no exportes a campaña aunque el upscale sea nítido.",
          whatYouShouldSee:
            "Nota actualizada con plan, fecha y tipo de uso permitido según lo que leíste en el sitio.",
          warning:
            "StackAI Learn no sustituye asesoría legal. Los términos del vendor mandan sobre este tutorial.",
          imageDescription:
            "Nota con «Plan X / 2026-10-11 / mock interno» y pestaña de términos del sitio en segundo plano.",
        },
      ],
      realUseCases: [
        {
          title: "Mock de producto para landing",
          body: "4:5, botella o packaging sin texto inventado. Keeper upscaleado para hero; copy real va en HTML, no en la etiqueta generada.",
        },
        {
          title: "Concept art antes de Midjourney",
          body: "Exploras composición en Leonardo con varios modelos; si el look final exige --sref, pasas el keeper como referencia en midjourney-sref-estilo.",
        },
        {
          title: "Still base para vídeo",
          body: "9:16 limpio, upscale Precise, descarga a disco. Siguiente paso: kling-primer-clip o runway-primer-clip con el mismo encuadre.",
        },
      ],
      commonMistakes: [
        {
          title: "Aspect ratio por defecto",
          body: "Generas 1:1 y luego recortas en Figma. Pierdes composición y tokens.",
        },
        {
          title: "Upscalear todo el grid",
          body: "Cuatro imágenes medianas no son cuatro entregables. Elige una dirección primero.",
        },
        {
          title: "Prompt solo de adjetivos",
          body: "«Masterpiece cinematic» no dice dónde está la luz ni el sujeto. Describe el plano.",
        },
        {
          title: "Asumir uso comercial",
          body: "Lee el plan vigente. Un mock interno no es lo mismo que un anuncio pagado.",
        },
      ],
      conclusion:
        "Tu primer flujo útil en Leonardo fija formato, modelo y prompt de plano, genera un lote pequeño, itera un eje y upscalea solo el keeper antes de descargar desde Library. Si el brief es tipografía en imagen, compara con Ideogram; si es moodboard con referencias de estilo, Midjourney sigue en alternativas-midjourney.",
      nextSteps: [
        "Para elegir motor con criterios de catálogo, abre la comparativa mejor-ia-imagenes.",
        "Si sales de Midjourney, sigue alternativas-midjourney con el mismo brief de cuatro líneas.",
        "Para variaciones y upscale con otro vocabulario, midjourney-variaciones-upscale.",
        "Ficha de la herramienta: /es/tools/leonardo/.",
      ],
      takeaway:
        "Formato → modelo → prompt de plano → lote → un eje de iteración → upscale del keeper → derechos anotados.",
    },
    en: {
      title: "Leonardo AI: your first image workflow (2026)",
      metaTitle: "Leonardo AI: first image workflow in 2026",
      metaDescription:
        "Model, aspect ratio, shot prompt, batch, iteration and upscale. Download from Library and check rights before client use.",
      excerpt:
        "An exportable still in one session: fixed format, subject-and-light prompt, pick a direction, upscale the keeper.",
      intro:
        "Leonardo.Ai bundles generation, iteration and upscale on the web. This flow takes about 16 minutes and ends with a PNG or JPG you can show in a product mock or on social — not an abandoned test grid. You start from a real format (4:5, 9:16 or 16:9), pick a model that matches the brief and describe a shot, not a vague mood.",
      problem:
        "Many people write «cinematic masterpiece 8K», leave the default aspect ratio and upscale all four thumbnails. They burn tokens, download soft images in the wrong format and assume «AI» covers commercial use. The first useful flow locks the deliverable, runs a small batch, iterates on one axis and only then raises resolution on the keeper.",
      whatYouWillLearn: [
        "Scope the deliverable and aspect ratio before the first token",
        "Pick a model or preset that fits the brief (photo vs illustration)",
        "Write a subject, light and exclusions prompt",
        "Generate a batch and mark a direction, not the noisiest thumbnail",
        "Iterate with one minimal change (light or background)",
        "Upscale from the feed and download from Library",
        "Check your plan’s terms before client use",
      ],
      prerequisites: [
        "An account at leonardo.ai with tokens available (check the current plan on the site)",
        "A concrete brief: product, portrait or concept art — not «something pretty»",
        "16 minutes. If you are unsure between image engines, read alternativas-midjourney first",
      ],
      steps: [
        {
          title: "Define deliverable and aspect ratio in a note",
          content:
            "Before you open the generator, write one line on where the image goes (4:5 feed, 9:16 stories, 16:9 slide) and what must appear (subject, background, forbidden: invented text, hands in the foreground). That note drives aspect ratio in Leonardo; changing format later usually means regenerating.",
          whatYouShouldSee:
            "A four-line note with format, subject and exclusions. Leonardo with no prompt sent yet.",
          tip: "If the brief needs readable headline copy in frame, note it; if Leonardo misses letters, your plan B is Ideogram (catalog tool page).",
          imageDescription:
            "Note with «4:5 / bottle / dark background / no label text» next to leonardo.ai before generate.",
        },
        {
          title: "Open Image Generation and pick a model",
          content:
            "Sign in at leonardo.ai and open image generation (main prompt or Image section per the current UI). In the model picker, choose one that fits the brief: the vendor documents families such as Lucid Origin or Lucid Realism and other models that rotate in news posts. For studio-lit product, favor photoreal; for editorial illustration, a more pictorial preset. Do not switch models on every regen until you have a direction.",
          whatYouShouldSee:
            "Prompt bar visible, model panel open with one model selected and aligned with your note.",
          warning:
            "Exact names change; find the model selector, not only the first default preset.",
          imageDescription:
            "Leonardo panel with model dropdown and empty prompt; brief note beside it.",
        },
        {
          title: "Lock aspect ratio and batch size",
          content:
            "In generation controls, pick the aspect ratio from your note (common presets 1:1, 2:3, 3:2, 16:9, 9:16 per vendor documentation). If you generate multiple images per request, start with 4 for a manageable first grid. Set privacy or visibility per your plan if the UI offers it before generating sensitive content.",
          whatYouShouldSee:
            "Aspect ratio 4:5, 9:16 or 16:9 selected and quantity at 4 (or the minimum your tier allows).",
          tip: "Wrong format is the most expensive mistake: fix it before you hit Generate.",
          imageDescription:
            "Aspect ratio controls highlighted at 4:5 and quantity 4; prompt not sent yet.",
        },
        {
          title: "Write a shot prompt, not a pile of adjectives",
          content:
            "In the prompt describe subject, framing, light and background in short sentences. Product example: «Glass skincare bottle on mossy rock, soft studio key light from left, dark gradient background, no label text, product photography.» Skip chains of «ultra detailed cinematic 8K». If the UI offers automatic prompt enhancement (prompt enhance), turn it off on round one so you know what you wrote; turn it on only if the vendor recommends it and you want to compare.",
          whatYouShouldSee:
            "A 2–4 line prompt in clear English or Spanish, aligned with the deliverable note.",
          proTip:
            "An explicit exclusion («no text on bottle») cuts down invented typography.",
          imageDescription:
            "Prompt field with product and light description; enhance off if the option exists.",
        },
        {
          title: "Generate and pick a direction, not just shine",
          content:
            "Hit Generate and wait in the queue. Review the batch: look for subject and light coherence, not the most saturated filter. Mentally mark one thumbnail as direction A. If all four fail for the same reason (chaotic background, warped bottle), edit one variable in the prompt — background or angle — before you raise quantity or change model.",
          whatYouShouldSee:
            "A grid of up to four images in the feed. One thumbnail flagged as keeper candidate.",
          warning:
            "Do not upscale yet: confirm framing and format work at base size first.",
          imageDescription:
            "Leonardo feed with 2×2 grid; one image with a visual «selected» marker.",
        },
        {
          title: "Iterate on one axis",
          content:
            "With direction A clear, regenerate or use variation tools the UI shows (remix, variation or a new prompt with the same aspect ratio). Change only light or only background: «same bottle, warmer key light, softer shadow». At most two extra rounds this session. If type or hands still fail, do not stack adjectives: tighten framing in the prompt or move to a still without critical copy.",
          whatYouShouldSee:
            "A second batch similar to the first with one visible controlled change, or a variation on the chosen thumbnail.",
          tip: "Three different prompts at once is noise. One axis per round.",
          imageDescription:
            "Two rows in the feed: first generation and second with warmer light; same aspect ratio.",
        },
        {
          title: "Upscale the keeper and download from Library",
          content:
            "Hover the final image and click Upscale Image (or open Upscaler from the bar or side menu per guides on leonardo.ai/news). Review mode and multiplier before you confirm; Pro Upscaler offers Precise and Creative types in Help Center documentation. When it finishes, open Library if needed and use download. Name the file with format and date (`bottle-4x5-2026-10-11.png`).",
          whatYouShouldSee:
            "Upscale panel with settings visible, then a file in your system downloads.",
          proTip:
            "Upscale only the keeper. Four upscales of the same mistake multiply tokens without a deliverable.",
          imageDescription:
            "Upscale Image menu on the chosen thumbnail; before/after slider or higher-res preview.",
        },
        {
          title: "Note usage rights before you show it outside",
          content:
            "Open your plan’s terms on leonardo.ai (commercial use, attribution, content with third-party brands or recognizable people). Update the same brief note with plan, generation date and whether use is internal, mock or client delivery. If the deliverable includes someone else’s logo or a real likeness without permission, do not ship to a paid campaign even when upscale is sharp.",
          whatYouShouldSee:
            "Updated note with plan, date and allowed use type from what you read on the site.",
          warning:
            "StackAI Learn is not legal advice. The vendor’s terms override this tutorial.",
          imageDescription:
            "Note with «Plan X / 2026-10-11 / internal mock» and terms tab in the background.",
        },
      ],
      realUseCases: [
        {
          title: "Product mock for a landing page",
          body: "4:5, bottle or packaging without invented text. Upscaled keeper for the hero; real copy lives in HTML, not on the generated label.",
        },
        {
          title: "Concept art before Midjourney",
          body: "You explore composition in Leonardo across models; if the final look needs --sref, you pass the keeper as reference in midjourney-sref-estilo.",
        },
        {
          title: "Still base for video",
          body: "Clean 9:16, Precise upscale, download to disk. Next: kling-primer-clip or runway-primer-clip with the same framing.",
        },
      ],
      commonMistakes: [
        {
          title: "Default aspect ratio",
          body: "You generate 1:1 and crop in Figma. You lose composition and tokens.",
        },
        {
          title: "Upscaling the whole grid",
          body: "Four medium images are not four deliverables. Pick a direction first.",
        },
        {
          title: "Adjective-only prompts",
          body: "«Masterpiece cinematic» does not say where the light is or what the subject is. Describe the shot.",
        },
        {
          title: "Assuming commercial use",
          body: "Read the current plan. An internal mock is not the same as a paid ad.",
        },
      ],
      conclusion:
        "Your first useful Leonardo flow locks format, model and shot prompt, runs a small batch, iterates one axis and upscales only the keeper before downloading from Library. If the brief is in-image typography, compare with Ideogram; for moodboards with style references, Midjourney remains in alternativas-midjourney.",
      nextSteps: [
        "To pick an engine with catalog criteria, open the mejor-ia-imagenes comparison.",
        "If you are moving off Midjourney, follow alternativas-midjourney with the same four-line brief.",
        "For variations and upscale with different vocabulary, midjourney-variaciones-upscale.",
        "Tool page: /en/tools/leonardo/.",
      ],
      takeaway:
        "Format → model → shot prompt → batch → one iteration axis → keeper upscale → rights noted.",
    },
  },
};
