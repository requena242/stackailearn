import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "kling-primer-clip";

export const klingPrimerClip: Tutorial = {
  id: slug,
  slug,
  category: "video",
  level: "beginner",
  estimatedTime: 15,
  publishedAt: "2026-10-05",
  lastUpdated: "2026-10-05",
  toolsUsed: ["kling", "midjourney", "runway"],
  relatedTutorials: [
    "runway-primer-clip",
    "midjourney-prompts-que-funcionan",
    "alternativas-midjourney",
  ],
  tags: ["kling", "imagen-a-vídeo", "clip", "motion", "prototipo"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Kling AI con un still subido y un clip corto generado en imagen-a-vídeo",
      caption: "El JPG ya dirige el plano. El prompt solo pide movimiento.",
      hint:
        "Hero 1600×900: Kling imagen-a-vídeo con still a la izquierda, prompt «sujeto + movimiento» y preview de clip de ~5 s.",
    },
    en: {
      alt: "Kling AI with an uploaded still and a short clip generated in image-to-video",
      caption: "The JPG already directs the frame. The prompt asks for motion only.",
      hint:
        "Hero 1600×900: Kling image-to-video with still on the left, «subject + movement» prompt and ~5 s clip preview.",
    },
  }),
  copy: {
    es: {
      title: "Kling: tu primer clip desde un still (2026)",
      metaTitle: "Kling AI: primer clip imagen-a-vídeo en 2026",
      metaDescription:
        "Sube un still que ya funciona, abre imagen-a-vídeo en Kling, escribe sujeto + movimiento, 5 s. Dos o tres tomas. Descarga el keeper, no un anuncio entero.",
      excerpt:
        "Imagen-a-vídeo con un still dirigido. Prompt de movimiento, duración corta, modo rápido para probar. Quédate con el gesto legible.",
      intro:
        "Kling anima lo que subes; no inventa un plano desde cero tan barato como imagen-a-vídeo. Este flujo dura unos 15 minutos y produce un clip corto que puedes enseñar en un pitch o un mock de stories. Partes de un JPG que ya te convence — Midjourney, ilustración o foto real — y describes solo el movimiento del sujeto y, si hace falta, una cámara.",
      problem:
        "Mucha gente abre texto-a-vídeo, repite en el prompt la luz y el estilo del still y pide 10 s con el modo de mayor calidad a la primera. Obtienen morphing, manos raras y un clip «wow» que no es entregable. El primer clip útil sale de imagen-a-vídeo: el encuadre ya está en la imagen.",
      whatYouWillLearn: [
        "Elegir un still simple antes de abrir Kling",
        "Subir el frame en imagen-a-vídeo (AI Video / Image to Video)",
        "Escribir un prompt sujeto + movimiento, sin re-describir el JPG",
        "Fijar ~5 s y generar 2–3 tomas en el modo más rápido disponible",
        "Descargar el keeper y parar antes de montar un vídeo largo",
      ],
      prerequisites: [
        "Cuenta en klingai.com con créditos o generaciones disponibles (revisa el plan actual en el sitio)",
        "Un still usable: export de Midjourney o foto tuya con un sujeto claro",
        "15 minutos. Sin still, haz primero midjourney-prompts-que-funcionan",
      ],
      steps: [
        {
          title: "Parte de un still que ya funciona",
          content:
            "Abre el JPG que ya te convence: producto en tres cuartos, retrato de medio cuerpo, paisaje con un elemento que quieras mover. Si viene de Midjourney, usa el keeper del grid. Evita manos en primer plano, texto inventado en el frame o acciones imposibles congeladas. No entres aún en texto-a-vídeo: sin imagen de entrada, el modelo decide composición y tú pagas sorpresas.",
          whatYouShouldSee:
            "Un archivo JPG o PNG en tu disco, encuadre y sujeto claros. El generador de Kling aún no abierto.",
          warning:
            "Texto-a-vídeo como primer paso suele ser el camino más caro en sorpresas. Imagen-a-vídeo: el plano ya está en el archivo.",
          tip: "Si el still tiene defectos obvios, Kling los animará. Arregla o regenera el JPG antes.",
          imageDescription:
            "Still en el explorador de archivos, encuadre limpio; sin panel de Kling abierto.",
        },
        {
          title: "Entra en Kling → generador de vídeo → imagen-a-vídeo",
          content:
            "Ve a klingai.com, inicia sesión y abre el generador de vídeo (Image to Video o equivalente en el menú). Arrastra tu still o usa Subir. Comprueba la relación de aspecto: 16:9 para deck, 9:16 para stories, 1:1 si el JPG ya es cuadrado. En la primera sesión elige el modo Standard o el que la UI marque como más rápido para pruebas, no el de máxima calidad todavía.",
          whatYouShouldSee:
            "Tu imagen como frame de entrada, controles de duración y formato visibles, campo de prompt vacío.",
          tip: "Los nombres exactos de modelo y modo cambian; busca la sección de imagen-a-vídeo, no solo texto-a-vídeo.",
          imageDescription:
            "Panel de Kling con still cargado, selector de imagen-a-vídeo activo y prompt vacío.",
        },
        {
          title: "Fija ~5 segundos y un solo gesto",
          content:
            "En duración, elige unos 5 segundos si la UI lo permite (10 s en el primer intento alarga fallos de física). Un gesto: vapor que sube, cabeza que gira lentamente, hojas que se mueven. No pidas tres acciones encadenadas. Si hay control de intensidad de motion, déjalo en medio o bajo en la prueba 1.",
          whatYouShouldSee:
            "Duración corta seleccionada y una idea escrita en una nota aparte: «una acción + opcional una cámara».",
          warning:
            "Multi-shot, audio nativo y referencias de elemento son útiles después; no los mezcles en el intento 1.",
          imageDescription:
            "Control de duración en ~5 s y nota con una sola acción de sujeto.",
        },
        {
          title: "Escribe sujeto + movimiento, no el still otra vez",
          content:
            "Kling documenta la fórmula sujeto + movimiento para imagen-a-vídeo. Ejemplo en inglés (suele leer bien): «The woman slowly turns her head toward the camera.» Ejemplo producto: «Steam rises gently from the mug.» No repitas «cinematic, golden hour, 4K»: eso ya está en el JPG. Si necesitas cámara, una sola: «Slow push-in» o «camera holds still».",
          whatYouShouldSee:
            "Un prompt de 1–2 frases sobre movimiento, sin párrafo de estilo. El still visible como referencia al lado.",
          proTip:
            "Si el prompt contradice mucho la imagen, el modelo puede forzar un travelling raro. Mantén el movimiento plausible para lo que se ve.",
          imageDescription:
            "Campo de prompt con una frase de motion; still del lado izquierdo sin cambios.",
        },
        {
          title: "Genera 2–3 tomas y elige el keeper",
          content:
            "Pulsa Generar y espera la cola. Repite con el mismo still y el mismo gesto, o un matiz mínimo («more slowly», «gentler steam»). No cambies duración ni modo entre las tres primeras tomas. Reproduce cada clip. Quédate con la toma donde el gesto se lee en pantalla pequeña, no con la que más parpadea o deforma el sujeto.",
          whatYouShouldSee:
            "Dos o tres clips cortos en el historial. Una miniatura marcada como keeper.",
          tip: "Si las tres fallan igual, cambia el verbo antes de subir de modo o de duración.",
          imageDescription:
            "Historial de Kling con 2–3 miniaturas de clip; una resaltada.",
        },
        {
          title: "Si morphing o manos fallan, simplifica",
          content:
            "Morphing de cara, dedos extra o física imposible siguen siendo habituales. No apiles adjetivos: quita manos del encuadre en el still, reduce la acción («slight smile» en vez de «talks and gestures wildly») o prueba cámara fija. Las guías de Kling avisan de que descripciones muy lejos de la imagen empeoran el resultado. Solo entonces prueba un modo de mayor calidad con el mismo prompt que ya leía en Standard.",
          whatYouShouldSee:
            "O un still recortado sin manos, o un prompt más simple, o una cuarta toma en modo superior con el mismo motion.",
          warning:
            "Subir calidad con un gesto que no funciona en la prueba rápida solo gasta más créditos en el mismo fallo.",
          imageDescription:
            "Prompt editado con acción más simple o still recortado; misma duración corta.",
        },
        {
          title: "Descarga el keeper y para ahí",
          content:
            "Descarga el clip elegido (el botón puede llamarse Download o Export según plan). Nómbralo por shot y acción (`taza-vapor-5s.mp4`). Revisa si tu plan añade marca de agua antes de enseñarlo fuera de prueba interna. No montes un vídeo de 60 s en Kling: es prototipo. Titulares, locución y música van en ChatGPT, ElevenLabs o tu editor — no en este paso.",
          whatYouShouldSee:
            "Un MP4 corto en descargas, listo para un deck o comparar con runway-primer-clip en el mismo still.",
          proTip:
            "Mismo JPG en Runway y en Kling te enseña qué gesto cada modelo respeta mejor; no es carrera de resolución.",
          imageDescription:
            "Clip descargado junto al still original; sin timeline de montaje abierto.",
        },
      ],
      realUseCases: [
        {
          title: "Mock de stories desde un still de producto",
          body: "Foto o render en 9:16. Prompt: vapor suave o luz que cambia. 5 s para validar si el motion vende antes del rodaje.",
        },
        {
          title: "Pitch con el mismo keeper de Midjourney",
          body: "El JPG del tutorial de Midjourney. Un solo movimiento de cámara o del sujeto. MP4 en el deck junto al PNG.",
        },
        {
          title: "Comparar gesto con Runway",
          body: "Mismo still, mismo prompt de motion en Kling y en Runway. El cliente elige legibilidad, no etiqueta de modelo.",
        },
      ],
      commonMistakes: [
        {
          title: "Empezar en texto-a-vídeo",
          body: "Sin still, el encuadre es lotería. Imagen-a-vídeo primero.",
        },
        {
          title: "Repetir estilo y luz en el prompt",
          body: "Ya están en el JPG. El prompt es movimiento del sujeto y, si acaso, una cámara.",
        },
        {
          title: "Duración larga y modo máximo en el intento 1",
          body: "Aprende el gesto en 5 s y modo rápido. Luego sube calidad si hace falta.",
        },
        {
          title: "Tratar el clip como spot final",
          body: "Kling prototipa motion. Color, audio final y legal van fuera.",
        },
      ],
      conclusion:
        "Tu primer clip útil en Kling sale de un still dirigido y un prompt corto de sujeto + movimiento. Unos 5 segundos y dos o tres tomas en el modo rápido enseñan qué gestos leen antes de gastar créditos en calidad máxima. Si el frame base es flojo, vuelve a Midjourney — Kling no lo rescata.",
      nextSteps: [
        "Si no tienes still, sigue midjourney-prompts-que-funcionan.",
        "Para el mismo flujo en otra herramienta, abre runway-primer-clip.",
        "Para reparto still / motion / voz en un pipeline, lee mejores-herramientas-ia-video.",
        "Ficha de la herramienta: /es/tools/kling/.",
      ],
      takeaway:
        "Still que funciona → imagen-a-vídeo → sujeto + movimiento → ~5 s → keeper. Prototipo, no spot.",
    },
    en: {
      title: "Kling: your first clip from a still (2026)",
      metaTitle: "Kling AI: first image-to-video clip in 2026",
      metaDescription:
        "Upload a still that already works, open image-to-video in Kling, write subject + movement, 5 s. Two or three takes. Download the keeper, not a full ad.",
      excerpt:
        "Image-to-video with a directed still. Motion prompt, short duration, fast mode for tests. Keep the gesture that reads.",
      intro:
        "Kling animates what you upload; it does not invent a frame from scratch as cheaply as image-to-video. This flow takes about 15 minutes and produces a short clip you can show in a pitch or a stories mock. You start from a JPG you already like — Midjourney, illustration or a real photo — and describe subject motion and, if needed, one camera move.",
      problem:
        "Many people open text-to-video, repeat the still’s light and style in the prompt and ask for 10 s on the highest-quality mode first. They get morphing, bad hands and a «wow» clip that is not deliverable. The first useful clip comes from image-to-video: the frame is already in the image.",
      whatYouWillLearn: [
        "Pick a simple still before opening Kling",
        "Upload the frame in image-to-video (AI Video / Image to Video)",
        "Write a subject + movement prompt without re-describing the JPG",
        "Set ~5 s and generate 2–3 takes in the fastest mode available",
        "Download the keeper and stop before cutting a long video",
      ],
      prerequisites: [
        "An account at klingai.com with credits or generations available (check the current plan on the site)",
        "A usable still: Midjourney export or your own photo with a clear subject",
        "15 minutes. No still yet — do midjourney-prompts-que-funcionan first",
      ],
      steps: [
        {
          title: "Start from a still that already works",
          content:
            "Open the JPG you already like: product in three-quarter view, half-body portrait, landscape with one element you want to move. If it comes from Midjourney, use the grid keeper. Avoid hands in the foreground, invented type in the frame or frozen impossible actions. Do not open text-to-video yet: without an input image, the model picks composition and you pay in surprises.",
          whatYouShouldSee:
            "A JPG or PNG on disk with clear frame and subject. Kling’s generator not open yet.",
          warning:
            "Text-to-video as step one is usually the most expensive path in surprises. Image-to-video: the shot is already in the file.",
          tip: "If the still has obvious defects, Kling will animate them. Fix or regenerate the JPG first.",
          imageDescription:
            "Still in the file browser, clean frame; Kling panel not open.",
        },
        {
          title: "Open Kling → video generator → image-to-video",
          content:
            "Go to klingai.com, sign in and open the video generator (Image to Video or the equivalent menu item). Drag your still or use Upload. Check aspect ratio: 16:9 for decks, 9:16 for stories, 1:1 if the JPG is already square. On the first session pick Standard or whatever the UI labels as faster for tests, not max quality yet.",
          whatYouShouldSee:
            "Your image as the input frame, duration and format controls visible, empty prompt field.",
          tip: "Exact model and mode names change; find the image-to-video section, not text-to-video only.",
          imageDescription:
            "Kling panel with still loaded, image-to-video selected and empty prompt.",
        },
        {
          title: "Set ~5 seconds and one gesture",
          content:
            "For duration, choose about 5 seconds if the UI allows (10 s on attempt 1 lengthens physics failures). One gesture: rising steam, head turning slowly, leaves moving. Do not ask for three chained actions. If there is a motion intensity control, leave it medium or low on test 1.",
          whatYouShouldSee:
            "Short duration selected and a note elsewhere: «one action + optional one camera».",
          warning:
            "Multi-shot, native audio and element references help later; do not mix them on attempt 1.",
          imageDescription:
            "Duration control at ~5 s and a note with a single subject action.",
        },
        {
          title: "Write subject + movement, not the still again",
          content:
            "Kling’s docs use subject + movement for image-to-video. Example: «The woman slowly turns her head toward the camera.» Product: «Steam rises gently from the mug.» Do not repeat «cinematic, golden hour, 4K» — that lives in the JPG. If you need camera, only one: «Slow push-in» or «camera holds still».",
          whatYouShouldSee:
            "A 1–2 sentence motion prompt, no style paragraph. Still visible as reference beside it.",
          proTip:
            "If the prompt fights the image, the model may force a weird camera move. Keep motion plausible for what you see.",
          imageDescription:
            "Prompt field with one motion sentence; still on the left unchanged.",
        },
        {
          title: "Generate 2–3 takes and pick the keeper",
          content:
            "Hit Generate and wait in the queue. Repeat with the same still and gesture, or a tiny tweak («more slowly», «gentler steam»). Do not change duration or mode between the first three takes. Play each clip. Keep the take where the gesture reads on a small screen, not the shiniest or most morphing one.",
          whatYouShouldSee:
            "Two or three short clips in history. One thumbnail marked as keeper.",
          tip: "If all three fail the same way, change the verb before stepping up mode or duration.",
          imageDescription:
            "Kling history with 2–3 clip thumbnails; one highlighted.",
        },
        {
          title: "If morphing or hands fail, simplify",
          content:
            "Face morphing, extra fingers or impossible physics are still common. Do not stack adjectives: remove hands from the still, shrink the action («slight smile» instead of «talks and gestures wildly») or try a locked camera. Kling’s guides note that descriptions far from the image hurt results. Only then try a higher-quality mode with the same prompt that already read in Standard.",
          whatYouShouldSee:
            "Either a cropped still without hands, a simpler prompt, or a fourth take on a higher mode with the same motion.",
          warning:
            "Stepping up quality with a gesture that failed in the fast test only burns more credits on the same failure.",
          imageDescription:
            "Edited prompt with simpler action or cropped still; same short duration.",
        },
        {
          title: "Download the keeper and stop",
          content:
            "Download the clip you picked (the button may say Download or Export per plan). Name it by shot and action (`mug-steam-5s.mp4`). Check whether your plan adds a watermark before showing it outside an internal test. Do not cut a 60 s video in Kling — this is a prototype. Headlines, voiceover and music live in ChatGPT, ElevenLabs or your editor, not this step.",
          whatYouShouldSee:
            "A short MP4 in downloads, ready for a deck or to compare with runway-primer-clip on the same still.",
          proTip:
            "Same JPG in Runway and Kling teaches which gesture each model respects; it is not a resolution race.",
          imageDescription:
            "Downloaded clip next to the original still; no edit timeline open.",
        },
      ],
      realUseCases: [
        {
          title: "Stories mock from a product still",
          body: "Photo or render in 9:16. Prompt: gentle steam or shifting light. 5 s to see if motion sells before a shoot.",
        },
        {
          title: "Pitch with the same Midjourney keeper",
          body: "JPG from the Midjourney tutorial. One camera or subject move. MP4 in the deck next to the PNG.",
        },
        {
          title: "Compare gesture with Runway",
          body: "Same still, same motion prompt in Kling and Runway. The client picks legibility, not model badge.",
        },
      ],
      commonMistakes: [
        {
          title: "Starting with text-to-video",
          body: "Without a still, framing is a lottery. Image-to-video first.",
        },
        {
          title: "Repeating style and light in the prompt",
          body: "They are already in the JPG. The prompt is subject motion and maybe one camera.",
        },
        {
          title: "Long duration and max mode on attempt 1",
          body: "Learn the gesture at 5 s in fast mode. Then step up quality if needed.",
        },
        {
          title: "Treating the clip as a final spot",
          body: "Kling prototypes motion. Final color, audio and legal live elsewhere.",
        },
      ],
      conclusion:
        "Your first useful Kling clip comes from a directed still and a short subject + movement prompt. About 5 seconds and two or three takes in fast mode teach which gestures read before you spend credits on max quality. If the base frame is weak, go back to Midjourney — Kling will not rescue it.",
      nextSteps: [
        "If you have no still, follow midjourney-prompts-que-funcionan.",
        "For the same flow in another tool, open runway-primer-clip.",
        "For still / motion / voice roles in a pipeline, read mejores-herramientas-ia-video.",
        "Tool page: /en/tools/kling/.",
      ],
      takeaway:
        "Working still → image-to-video → subject + movement → ~5 s → keeper. Prototype, not a spot.",
    },
  },
};
