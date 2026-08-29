import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "runway-primer-clip";

export const runwayPrimerClip: Tutorial = {
  id: slug,
  slug,
  category: "video",
  level: "beginner",
  estimatedTime: 15,
  publishedAt: "2026-08-29",
  lastUpdated: "2026-08-29",
  toolsUsed: ["runway", "midjourney", "chatgpt"],
  relatedTutorials: ["midjourney-prompts-que-funcionan", "chatgpt-primeros-pasos"],
  tags: ["runway", "gen-4", "clip", "motion", "image-to-video"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Runway con un still de Midjourney subido como primer frame y un clip de 5 s generado",
      caption: "El still ya está dirigido. El prompt solo pide motion.",
      hint: "Hero 1600×900: Runway con still a la izquierda, selector Gen-4 Turbo visible, clip de 5 s a la derecha.",
    },
    en: {
      alt: "Runway with a Midjourney still uploaded as the first frame and a 5 s clip generated",
      caption: "The still is already directed. The prompt asks for motion only.",
      hint: "Hero 1600×900: Runway with still on the left, Gen-4 Turbo selector visible, 5 s clip on the right.",
    },
  }),
  copy: {
    es: {
      title: "Runway: tu primer clip de 5 segundos (2026)",
      metaTitle: "Runway: primer clip desde un still en 2026",
      metaDescription:
        "Sube un still que ya funciona, elige Gen-4 Turbo, escribe motion (una acción + una cámara), 5 s. Dos o tres tomas. Exporta el keeper, no una película.",
      excerpt:
        "Imagen-a-vídeo con un still dirigido. Prompt de motion, Gen-4 Turbo para probar, 5 segundos. Quédate con el gesto, no con el ruido.",
      intro:
        "Runway no arregla un plano flojo: lo anima. Este flujo dura 15 minutos y produce un clip de 5 s que se puede enseñar en un pitch, no un anuncio de campaña. Partes de un still que ya te convence — Midjourney o una foto real — y describes solo el movimiento.",
      problem:
        "La gente abre texto-a-vídeo, apila adjetivos del still en el prompt y quema créditos en tomas de 10 s con Gen-4.5 a la primera. Obtienen manos raras, física imposible y un clip «wow» que no es entregable. El primer clip sale de imagen-a-vídeo: el encuadre ya está en el JPG.",
      whatYouWillLearn: [
        "Partir de un still que ya funciona, no de texto-a-vídeo",
        "Subir el frame en Generate Video y elegir Gen-4 Turbo para las pruebas",
        "Escribir un prompt de motion: una acción + una cámara, 5 s",
        "Generar 2–3 tomas y quedarte con el gesto que se lee",
        "Exportar el keeper sin montar un vídeo de 60 s",
      ],
      prerequisites: [
        "Cuenta en runwayml.com con créditos (el plan Free sirve para 2–3 tomas en Turbo)",
        "Un still que ya funciona: export de Midjourney o una foto tuya con encuadre claro",
        "15 minutos. Si aún no tienes still, haz primero el tutorial de Midjourney",
      ],
      steps: [
        {
          title: "Parte de un still que ya funciona",
          content:
            "Abre el JPG que ya te convence: un producto en tres cuartos, un espacio con luz decidida, un personaje de espaldas. Si viene de Midjourney, que sea el keeper del grid, no el «casi». No abras Runway todavía para texto-a-vídeo: sin frame de entrada, el modelo inventa composición y quema créditos en planos que no pediste.",
          whatYouShouldSee:
            "Un archivo de imagen en tu disco con encuadre, luz y sujeto claros. Sin abrir la pestaña de Generate Video aún.",
          warning:
            "Texto-a-vídeo como primer paso es el camino más caro. Imagen-a-vídeo: el plano ya está en el still.",
          tip: "Si el still tiene texto inventado o manos raras, Runway lo multiplicará. Arregla el JPG antes de animar.",
          imageDescription:
            "Still de Midjourney o foto real en el explorador de archivos, encuadre limpio, sin panel de Runway abierto.",
        },
        {
          title: "Abre Runway → Generate Video → Gen-4 Turbo",
          content:
            "Entra en runwayml.com e inicia sesión. Desde la home, elige Generate Video (o Video en el menú). En el selector de modelo, abre el grupo Runway y elige Gen-4 Turbo: cuesta menos por segundo (~5 créditos/s) que Gen-4 (~12/s) o Gen-4.5. Sube tu still como primer frame — arrastra el JPG o usa Upload. Gen-4 exige imagen de entrada; Turbo es el sitio correcto para las 2–3 tomas de prueba.",
          whatYouShouldSee:
            "El panel de Generate Video con tu still como frame inicial, Gen-4 Turbo seleccionado y el campo de prompt vacío.",
          tip: "Gen-4.5 es para un keeper cuando el gesto ya funciona en Turbo. No lo elijas en el intento 1.",
          imageDescription:
            "Dashboard de Runway: still subido a la izquierda, selector con Gen-4 Turbo marcado, prompt vacío.",
        },
        {
          title: "Escribe motion, no vuelvas a describir el still",
          content:
            "El prompt solo pide movimiento. Una acción del sujeto y un movimiento de cámara. Formato: «The camera [move] as the subject [one action].» Ejemplo: «The camera slowly pushes in as steam rises from the coffee tin.» No repitas luz, estilo ni composición: ya viven en la imagen. Fija la duración en 5 segundos, no 10 en la primera prueba.",
          whatYouShouldSee:
            "Un prompt de 1–2 frases sobre motion, sin adjetivos del still. Duración en 5 s visible en los controles.",
          warning:
            "Si apilas «cinematic, golden hour, shallow depth of field» encima del still, el modelo pelea contigo y las manos empeoran.",
          proTip:
            "Una acción + una cámara. «Steam rises» y «slow push-in» valen. «Steam rises while the tin rotates and the camera orbits» no.",
          imageDescription:
            "Campo de prompt con una frase de motion, control de duración en 5 s, still visible como referencia.",
        },
        {
          title: "Genera 2–3 tomas y elige el gesto",
          content:
            "Pulsa Generate. Espera la cola. Repite con la misma acción o un matiz mínimo (más lento, push un poco más corto). No cambies modelo ni duración entre tomas de prueba. Reproduce las tres. Quédate con la toma donde el gesto se lee — vapor que sube, giro que se entiende — no con la que más brilla o tiene más ruido visual.",
          whatYouShouldSee:
            "Dos o tres clips de ~5 s en el historial. Una toma marcada mentalmente como keeper por legibilidad del gesto.",
          tip: "Si las tres fallan igual, el problema suele ser la acción, no el modelo. Cambia el verbo antes de subir a Gen-4.5.",
          imageDescription:
            "Historial de Runway con 2–3 miniaturas de clip; una resaltada como keeper.",
        },
        {
          title: "Si fallan física o manos, cambia la acción",
          content:
            "Manos, texto en pantalla y física fina siguen fallando en 2026. Si el vapor atraviesa la lata o los dedos se derriten, no apiles adjetivos: cambia la acción («gentle steam wisps» en vez de «thick steam cloud») o quita manos del encuadre en el still. Como mucho, una toma más en Gen-4 o Gen-4.5 solo si el gesto ya funcionaba en Turbo y quieres más nitidez.",
          whatYouShouldSee:
            "O bien un prompt revisado con acción más simple, o bien una cuarta toma en un modelo superior con el mismo motion que ya leía en Turbo.",
          warning:
            "Subir a Gen-4.5 con un gesto que no funciona en Turbo solo quema más créditos en el mismo fallo.",
          imageDescription:
            "Prompt editado con acción simplificada, o selector cambiado a Gen-4 con el mismo texto de motion.",
        },
        {
          title: "Exporta el keeper y para ahí",
          content:
            "Descarga el clip que elegiste (Export o Download según el plan). Nómbralo por shot y acción (`lata-vapor-push5s.mp4`). No montes un vídeo de 60 s en Runway: es prototipo. Si necesitas copy en pantalla o un titular, eso va en ChatGPT + un editor (CapCut, Premiere, lo que uses), no en este paso.",
          whatYouShouldSee:
            "Un MP4 de ~5 s en tu carpeta de descargas, listo para pegar en un deck o un mock de stories.",
          proTip:
            "Un clip «wow» en un pitch convence. Un clip «wow» sin revisar no es entregable de campaña.",
          imageDescription:
            "Clip descargado en el explorador junto al still original; sin timeline de montaje abierto.",
        },
      ],
      realUseCases: [
        {
          title: "Prototipo para un pitch",
          body: "Still de producto en Midjourney. En Runway: push-in lento + vapor. 5 s en el deck. El cliente discute gesto, no resolución 4K.",
        },
        {
          title: "Giro de producto para anuncio interno",
          body: "Foto real del SKU sobre mesa. Prompt: «The camera arcs 15 degrees as light catches the edge.» Tres tomas en Turbo, una en Gen-4 si el arco ya lee.",
        },
        {
          title: "De still de Midjourney a motion de 5 s",
          body: "El keeper del tutorial de Midjourney. Una acción (hojas que se mueven, puerta que se abre). Export al moodboard con el JPG y el MP4 juntos.",
        },
      ],
      commonMistakes: [
        {
          title: "Empezar en texto-a-vídeo",
          body: "Sin still, el modelo inventa el plano y quema créditos. Imagen-a-vídeo primero.",
        },
        {
          title: "Re-describir el still en el prompt",
          body: "Luz, estilo y composición ya están en el JPG. El prompt es motion: acción + cámara.",
        },
        {
          title: "10 s y Gen-4.5 en el intento 1",
          body: "Más duración y modelo caro no arreglan un gesto mal planteado. 5 s en Turbo para aprender.",
        },
        {
          title: "Tratar el clip como película de campaña",
          body: "Runway prototipa motion. El entregable final pasa por edición, copy y color fuera de aquí.",
        },
      ],
      conclusion:
        "Tu primer clip útil en Runway sale de un still dirigido y un prompt corto de motion. Gen-4 Turbo en 5 s te enseña qué gestos leen antes de gastar en modelos caros. Si el encuadre base es flojo, vuelve a Midjourney — Runway no lo salva.",
      nextSteps: [
        "Si el still aún no existe, sigue el tutorial de Midjourney y vuelve con un keeper.",
        "Si necesitas el titular del anuncio, abre ChatGPT con el still como contexto visual.",
        "Para comparar cuándo Runway y cuándo Midjourney, mira la comparativa del catálogo.",
      ],
      takeaway:
        "Still que funciona → Gen-4 Turbo → motion (acción + cámara) → 5 s → keeper. Prototipo, no película.",
    },
    en: {
      title: "Runway: your first 5-second clip (2026)",
      metaTitle: "Runway: first clip from a still in 2026",
      metaDescription:
        "Upload a still that already works, pick Gen-4 Turbo, write motion (one action + one camera), 5 s. Two or three takes. Export the keeper, not a film.",
      excerpt:
        "Image-to-video with a directed still. Motion prompt, Gen-4 Turbo for tests, 5 seconds. Keep the gesture, not the noise.",
      intro:
        "Runway does not fix a weak frame — it animates it. This flow takes 15 minutes and produces a 5 s clip you can show in a pitch, not a campaign deliverable. You start from a still you already like — Midjourney or a real photo — and describe motion only.",
      problem:
        "People open text-to-video, stack the still’s adjectives into the prompt and burn credits on 10 s Gen-4.5 attempts. They get weird hands, impossible physics and a «wow» clip that is not deliverable. The first clip comes from image-to-video: the frame is already in the JPG.",
      whatYouWillLearn: [
        "Start from a still that already works, not text-to-video",
        "Upload the frame in Generate Video and pick Gen-4 Turbo for tests",
        "Write a motion prompt: one action + one camera, 5 s",
        "Generate 2–3 takes and keep the gesture that reads",
        "Export the keeper without cutting a 60 s film",
      ],
      prerequisites: [
        "An account at runwayml.com with credits (the Free plan is enough for 2–3 Turbo takes)",
        "A still that already works: a Midjourney export or your own photo with a clear frame",
        "15 minutes. If you have no still yet, do the Midjourney tutorial first",
      ],
      steps: [
        {
          title: "Start from a still that already works",
          content:
            "Open the JPG you already like: a product in three-quarter view, a space with decided light, a figure from behind. If it comes from Midjourney, use the grid keeper, not the «almost». Do not open Runway for text-to-video yet: without an input frame, the model invents composition and burns credits on shots you did not ask for.",
          whatYouShouldSee:
            "An image file on disk with clear frame, light and subject. Generate Video tab not open yet.",
          warning:
            "Text-to-video as step one is the most expensive path. Image-to-video: the shot is already in the still.",
          tip: "If the still has invented type or bad hands, Runway will multiply it. Fix the JPG before you animate.",
          imageDescription:
            "Midjourney still or real photo in the file browser, clean frame, Runway panel not open.",
        },
        {
          title: "Open Runway → Generate Video → Gen-4 Turbo",
          content:
            "Go to runwayml.com and sign in. From the homepage, choose Generate Video (or Video in the menu). In the model selector, open the Runway group and pick Gen-4 Turbo: it costs less per second (~5 credits/s) than Gen-4 (~12/s) or Gen-4.5. Upload your still as the first frame — drag the JPG or use Upload. Gen-4 requires an input image; Turbo is the right place for your 2–3 test takes.",
          whatYouShouldSee:
            "The Generate Video panel with your still as the initial frame, Gen-4 Turbo selected and an empty prompt field.",
          tip: "Gen-4.5 is for a keeper once the gesture already works in Turbo. Do not pick it on attempt 1.",
          imageDescription:
            "Runway dashboard: still uploaded on the left, selector with Gen-4 Turbo checked, empty prompt.",
        },
        {
          title: "Write motion, do not re-describe the still",
          content:
            "The prompt asks for movement only. One subject action and one camera move. Shape: «The camera [move] as the subject [one action].» Example: «The camera slowly pushes in as steam rises from the coffee tin.» Do not repeat light, style or composition — they already live in the image. Set duration to 5 seconds, not 10 on the first try.",
          whatYouShouldSee:
            "A 1–2 sentence motion prompt, no still adjectives. Duration at 5 s visible in the controls.",
          warning:
            "If you stack «cinematic, golden hour, shallow depth of field» on top of the still, the model fights you and hands get worse.",
          proTip:
            "One action + one camera. «Steam rises» and «slow push-in» are enough. «Steam rises while the tin rotates and the camera orbits» is not.",
          imageDescription:
            "Prompt field with one motion sentence, duration control at 5 s, still visible as reference.",
        },
        {
          title: "Generate 2–3 takes and pick the gesture",
          content:
            "Hit Generate. Wait in the queue. Repeat with the same action or a tiny tweak (slower, slightly shorter push). Do not change model or duration between test takes. Play all three. Keep the take where the gesture reads — rising steam, a turn you understand — not the shiniest or noisiest one.",
          whatYouShouldSee:
            "Two or three ~5 s clips in history. One take mentally marked as keeper for gesture legibility.",
          tip: "If all three fail the same way, the problem is usually the action, not the model. Change the verb before stepping up to Gen-4.5.",
          imageDescription:
            "Runway history with 2–3 clip thumbnails; one highlighted as keeper.",
        },
        {
          title: "If physics or hands fail, change the action",
          content:
            "Hands, on-screen type and fine physics still fail in 2026. If steam goes through the tin or fingers melt, do not stack adjectives: change the action («gentle steam wisps» instead of «thick steam cloud») or remove hands from the still. At most, one more take on Gen-4 or Gen-4.5 only if the gesture already worked in Turbo and you want more sharpness.",
          whatYouShouldSee:
            "Either a revised prompt with a simpler action, or a fourth take on a higher model with the same motion that already read in Turbo.",
          warning:
            "Stepping up to Gen-4.5 with a gesture that did not work in Turbo only burns more credits on the same failure.",
          imageDescription:
            "Edited prompt with simplified action, or selector changed to Gen-4 with the same motion text.",
        },
        {
          title: "Export the keeper and stop there",
          content:
            "Download the clip you picked (Export or Download depending on plan). Name it by shot and action (`tin-steam-push5s.mp4`). Do not cut a 60 s film in Runway — this is a prototype. If you need on-screen copy or a headline, that is ChatGPT + an editor (CapCut, Premiere, whatever you use), not this step.",
          whatYouShouldSee:
            "An ~5 s MP4 in your downloads folder, ready to drop into a deck or a stories mock.",
          proTip:
            "A «wow» clip in a pitch convinces. A «wow» clip without review is not a campaign deliverable.",
          imageDescription:
            "Downloaded clip in the file browser next to the original still; no edit timeline open.",
        },
      ],
      realUseCases: [
        {
          title: "Pitch prototype",
          body: "Product still from Midjourney. In Runway: slow push-in + steam. 5 s in the deck. The client argues gesture, not 4K resolution.",
        },
        {
          title: "Product turn for an internal ad",
          body: "Real photo of the SKU on a table. Prompt: «The camera arcs 15 degrees as light catches the edge.» Three takes in Turbo, one in Gen-4 if the arc already reads.",
        },
        {
          title: "Midjourney still to 5 s motion",
          body: "The keeper from the Midjourney tutorial. One action (leaves moving, a door opening). Export to the moodboard with JPG and MP4 together.",
        },
      ],
      commonMistakes: [
        {
          title: "Starting with text-to-video",
          body: "Without a still, the model invents the frame and burns credits. Image-to-video first.",
        },
        {
          title: "Re-describing the still in the prompt",
          body: "Light, style and composition are already in the JPG. The prompt is motion: action + camera.",
        },
        {
          title: "10 s and Gen-4.5 on attempt 1",
          body: "More duration and a pricey model do not fix a bad gesture. 5 s in Turbo to learn.",
        },
        {
          title: "Treating the clip as a campaign film",
          body: "Runway prototypes motion. The final deliverable goes through edit, copy and color elsewhere.",
        },
      ],
      conclusion:
        "Your first useful Runway clip comes from a directed still and a short motion prompt. Gen-4 Turbo at 5 s teaches which gestures read before you spend on expensive models. If the base frame is weak, go back to Midjourney — Runway will not save it.",
      nextSteps: [
        "If the still does not exist yet, follow the Midjourney tutorial and come back with a keeper.",
        "If you need the ad headline, open ChatGPT with the still as visual context.",
        "To compare when Runway vs Midjourney, see the catalog comparison.",
      ],
      takeaway:
        "Working still → Gen-4 Turbo → motion (action + camera) → 5 s → keeper. Prototype, not film.",
    },
  },
};
