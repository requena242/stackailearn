import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "capcut-subtitulos-broll";

export const capcutSubtitulosBroll: Tutorial = {
  id: slug,
  slug,
  category: "video",
  level: "beginner",
  estimatedTime: 22,
  publishedAt: "2026-10-12",
  lastUpdated: "2026-10-12",
  toolsUsed: ["capcut", "runway", "kling"],
  relatedTutorials: [
    "descript-editar-podcast",
    "runway-primer-clip",
    "kling-primer-clip",
    "elevenlabs-primer-voiceover",
  ],
  tags: [
    "capcut",
    "subtítulos",
    "auto-captions",
    "b-roll",
    "stock",
    "shorts",
    "vertical",
    "2026",
  ],
  hero: tutorialHero(slug, {
    es: {
      alt: "CapCut con vídeo 9:16, subtítulos auto generados resaltados y un clip de B-roll en una segunda pista",
      caption: "El entregable es un MP4 con captions legibles y uno o dos cortes de apoyo. No un proyecto infinito.",
      hint:
        "Hero 1600×900: timeline vertical CapCut, bloques de Auto captions, estilo de texto grande y clip de stock de 3 s sobre el A-roll.",
    },
    en: {
      alt: "CapCut with 9:16 video, highlighted auto-generated subtitles and a B-roll clip on a second track",
      caption: "The deliverable is an MP4 with readable captions and one or two supporting cuts. Not an endless project.",
      hint:
        "Hero 1600×900: CapCut vertical timeline, Auto captions blocks, large text style and 3 s stock clip over A-roll.",
    },
  }),
  copy: {
    es: {
      title: "CapCut: subtítulos y B-roll con IA (2026)",
      metaTitle: "Subtítulos automáticos y B-roll en CapCut en 2026",
      metaDescription:
        "Proyecto 9:16, Auto captions, revisión de texto, estilo de subtítulos, stock o clip IA corto y export MP4. Flujo repetible en ~22 minutos.",
      excerpt:
        "Talking head vertical: generas captions, corriges el ASR, estilizas y metes B-roll de stock o un MP4 de IA donde el guion lo pide.",
      intro:
        "CapCut está pensado para vídeo corto en redes. Este flujo asume que ya tienes un clip de 30–90 segundos hablando a cámara (o voz con imagen fija) en vertical 9:16. En unos 22 minutos sales con subtítulos sincronizados, un estilo que se lea en el móvil y al menos un corte de B-roll — de la biblioteca **Stock materials** o de un clip corto que importes desde Runway/Kling si lo generaste aparte. No montamos un documental: es el patrón «caption + un plano de apoyo» que repites en cada short.",
      problem:
        "Mucha gente exporta sin revisar Auto captions y publica nombres mal escritos o frases fuera de sync. Otro fallo: B-roll aleatorio que no ilustra lo que se dice. O depender de música alta durante la generación de captions y luego culpar al ASR. CapCut automatiza la primera pasada; tú validas texto, ritmo y que el corte visual tenga sentido en el guion.",
      whatYouWillLearn: [
        "Crear proyecto vertical e importar el A-roll",
        "Generar Auto captions con el idioma hablado correcto",
        "Corregir bloques de subtítulo y timing básico",
        "Aplicar un estilo de caption legible en pantalla pequeña",
        "Buscar B-roll en Stock materials o importar un clip IA corto",
        "Colocar el B-roll en un hueco del guion sin tapar el mensaje",
        "Exportar MP4 y comprobar sync con auriculares",
      ],
      prerequisites: [
        "Cuenta en capcut.com (web o app de escritorio; el tier gratuito suele bastar para un short)",
        "Un vídeo A-roll 9:16 con voz clara, 30–90 s (MP4 o MOV)",
        "22 minutos y auriculares para revisar captions y cortes",
      ],
      steps: [
        {
          title: "Proyecto nuevo e importa el A-roll vertical",
          content:
            "Abre **capcut.com** (editor web) o la app de escritorio e inicia sesión. Crea un **proyecto nuevo** y fija la relación de aspecto **9:16** si el asistente lo pregunta (también puedes ajustarla en ajustes de proyecto). Usa **Import** y sube tu talking head. Arrastra el clip a la pista principal de vídeo. Recorta los segundos muertos del inicio y final con la herramienta de **split/trim** del timeline — deja solo el bloque que publicarías. Comprueba que la pista de **audio** no esté en mute y que el volumen de voz sea audible; sin audio claro, Auto captions no tiene de qué transcribir (documentación oficial de CapCut).",
          whatYouShouldSee:
            "Un clip en la línea de tiempo 9:16, playhead al inicio del discurso, waveform de voz visible.",
          tip:
            "Si grabaste en 16:9, puedes usar este flujo igual; para Shorts/Reels, 9:16 evita recortes improvisados después.",
          imageDescription:
            "Proyecto CapCut vacío con clip vertical importado en la pista principal y herramientas de recorte activas.",
        },
        {
          title: "Genera Auto captions",
          content:
            "En el panel lateral, abre la sección de **Captions** o **Text** (el nombre exacto varía entre web y escritorio). Elige **Auto captions** / **Recognise subtitles** (terminología oficial de la ayuda de CapCut). Selecciona el **idioma hablado** en el vídeo — debe coincidir con lo que realmente dices; un idioma incorrecto produce texto vacío o basura. Pulsa **Generate** / **Create** y espera a que termine el procesamiento en la nube (requiere conexión estable). Al finalizar, verás bloques de texto alineados al audio en el timeline o en una pista de captions dedicada.",
          whatYouShouldSee:
            "Varios segmentos de subtítulo distribuidos a lo largo del clip, sincronizados de forma aproximada con la voz.",
          warning:
            "Música de fondo muy alta o ruido de calle degradan el reconocimiento. Baja música antes de generar o aísla la voz si tu versión lo permite.",
          imageDescription:
            "Panel Auto captions con idioma seleccionado, botón Generate y bloques de subtítulo apareciendo en timeline.",
        },
        {
          title: "Revisa y corrige el texto",
          content:
            "Reproduce el vídeo completo una vez con los captions visibles. Haz clic en cada **bloque de subtítulo** que falle: nombres propios, cifras, jerga. Edita el texto en el panel lateral o con doble clic en el bloque — los cambios guardan en tiempo real según la ayuda de escritorio/web. Si un bloque empieza tarde o temprano, arrastra sus bordes en el timeline o usa los controles de **timing** del bloque. No estilices todavía: primero el contenido debe ser correcto. Si hay docenas de errores, considera bajar música, recortar solo la pista de voz y **volver a generar** Auto captions en lugar de reescribir todo a mano.",
          whatYouShouldSee:
            "Al menos tres correcciones hechas (nombres, números o una frase cortada mal); sync aceptable al oído.",
          tip:
            "Lee en voz alta el subtítulo mientras suena el audio: si no cabe en la pantalla, divide el bloque en dos líneas más cortas.",
          imageDescription:
            "Bloque de caption seleccionado con texto en edición y bordes de timing en la pista de subtítulos.",
        },
        {
          title: "Estilo de subtítulos para móvil",
          content:
            "Con los textos corregidos, abre **presets**, **templates** o el panel de **estilo** de captions (CapCut ofrece fuentes, color, contorno y animaciones según plataforma). Elige un estilo con **alto contraste** y tamaño grande: en 9:16 el vídeo se ve en pantalla pequeña. Evita fuentes finas sobre fondos claros. Si tu versión muestra **Auto highlight keywords**, actívalo solo si realmente ayuda a escanear — no decores cada palabra. Aplica el estilo a **todos** los bloques de la pista (botón «aplicar a todo» o equivalente) para no mezclar tres fuentes distintas. Reproduce un tramo con mucho texto en pantalla y confirma que no tapa tu cara en el encuadre importante.",
          whatYouShouldSee:
            "Captions uniformes, legibles en preview a tamaño móvil, sin bloques con fuente distinta al resto.",
          proTip:
            "Un solo estilo por short. La marca viene del contenido, no de diez animaciones distintas.",
          imageDescription:
            "Panel de estilo CapCut con fuente grande, contorno y preview 9:16 mostrando captions sobre el rostro.",
        },
        {
          title: "B-roll: stock o clip IA importado",
          content:
            "Identifica **un momento** del guion donde un plano de apoyo ayuda (cuando dices «por ejemplo en la calle», «el producto», «antes y después»). Dos caminos oficiales:\n\n1. **Stock materials**: en importación o biblioteca, abre **Stock materials**, busca por palabra clave acorde al guion y previsualiza clips cortos. Añade uno de 2–5 s a la biblioteca del proyecto.\n2. **Clip IA externo**: si ya generaste un MP4 de 3–5 s en Runway o Kling (ver runway-primer-clip / kling-primer-clip), **Import** ese archivo. Dentro del editor, algunas cuentas también tienen **AI media** con texto-a-vídeo o imagen-a-vídeo para un plano corto — si no ves la opción, tu región o plan puede no incluirla; usa stock o import.\n\nNo descargues B-roll de sitios sin licencia clara si el vídeo es para cliente.",
          whatYouShouldSee:
            "Un clip de stock o un MP4 IA en el panel de medios, listo para arrastrar al timeline.",
          warning:
            "Revisa en la UI si el material permite **uso comercial** antes de entregas de pago.",
          imageDescription:
            "Biblioteca Stock materials con resultados de búsqueda y miniatura de clip seleccionado; alternativa: MP4 importado de IA.",
        },
        {
          title: "Coloca el B-roll en el timeline",
          content:
            "Arrastra el clip de B-roll a una **pista de vídeo por encima** del A-roll (overlay) o sustituye visualmente un tramo si prefieres corte duro: en el punto del guion marcado, **split** el A-roll, coloca el B-roll en el hueco y mantén el **audio del A-roll** en la pista principal para no cortar la voz (técnica típica talking head + B-roll). Ajusta duración del B-roll a la frase que ilustra — 2–4 s suelen bastar. Añade una **transición** suave si el corte se siente brusco; no abuses. En este tutorial basta **un** insert de B-roll; domina uno antes de hacer montajes de ocho capas.",
          whatYouShouldSee:
            "Un segmento donde el vídeo muestra stock o clip IA mientras la voz del A-roll sigue; captions siguen visibles y legibles.",
          tip:
            "Si el B-roll tapa los subtitles, baja la opacidad del overlay o mueve la posición del texto en ese tramo.",
          imageDescription:
            "Timeline con dos pistas de vídeo: A-roll abajo, B-roll de 3 s encima; pista de captions intacta.",
        },
        {
          title: "Exporta y valida",
          content:
            "Abre **Export** (web o escritorio). Elige resolución acorde a la plataforma (1080×1920 para 9:16 es habitual). Confirma que exportas **con subtítulos quemados** en el vídeo si tu destino es TikTok/Reels/Shorts — algunos flujos también permiten exportar **SRT** aparte para YouTube; para este tutorial el MP4 con captions incrustados es el entregable. Inicia exportación, descarga el archivo y reprodúcelo en el móvil o con auriculares: voz, sync de captions y el corte de B-roll. Si algo falla, vuelve al paso de corrección de texto o al trim del B-roll, no reexportes cinco veces sin cambiar nada.",
          whatYouShouldSee:
            "Archivo MP4 final en descargas, duración similar al A-roll recortado, captions visibles durante toda la reproducción.",
          warning:
            "La marca de agua o límites de export dependen del plan gratuito — revisa capcut.com antes de prometer entrega white-label.",
          imageDescription:
            "Diálogo de exportación CapCut con 1080p 9:16 y reproductor mostrando el MP4 final con subtítulos.",
        },
      ],
      realUseCases: [
        {
          title: "Tip de producto en 45 s",
          body: "Auto captions, corriges el nombre del SKU, un stock de manos usando el producto en el segundo 20.",
        },
        {
          title: "Clip educativo vertical",
          body: "Captions con keyword highlight moderado y B-roll de stock que muestra el concepto cuando lo nombras.",
        },
        {
          title: "Hook + demostración",
          body: "Primeros 3 s talking head; B-roll de clip Kling importado cuando pasas a la demo visual.",
        },
      ],
      commonMistakes: [
        {
          title: "Idioma de captions incorrecto",
          body: "Generas con el idioma por defecto y el ASR inventa palabras. Elige el idioma hablado antes de Generate.",
        },
        {
          title: "B-roll decorativo",
          body: "Metraje bonito que no coincide con la frase. El corte debe ilustrar lo que se dice en ese segundo.",
        },
        {
          title: "Exportar sin escuchar",
          body: "Un bloque de caption desfasado 0,5 s arruina el short. Reproduce entero antes de subir.",
        },
        {
          title: "Demasiados estilos de texto",
          body: "Cada bloque con animación distinta cansa. Un preset para todo el vídeo.",
        },
      ],
      conclusion:
        "CapCut acorta el camino de short vertical: importas A-roll, Auto captions, corriges texto, unificas estilo, insertas un B-roll de stock o un MP4 de IA donde el guion lo pide y exportas MP4. La IA hace la transcripción inicial; tú garantizas nombres, sync y que el plano de apoyo cuenta la misma historia que la voz. Para podcast solo audio o edición por transcripción larga, Descript sigue siendo otro flujo.",
      nextSteps: [
        "Si el plano IA aún no existe, genera un clip en kling-primer-clip o runway-primer-clip e impórtalo.",
        "Para locución desde guion sin cámara, revisa elevenlabs-primer-voiceover y monta sobre B-roll.",
        "Ficha de la herramienta: /es/tools/capcut/.",
      ],
      takeaway:
        "9:16 → Auto captions → texto corregido → estilo único → un B-roll con sentido → export MP4 revisado con auriculares.",
    },
    en: {
      title: "CapCut: subtitles and AI B-roll (2026)",
      metaTitle: "Automatic subtitles and B-roll in CapCut in 2026",
      metaDescription:
        "9:16 project, Auto captions, text review, subtitle style, stock or short AI clip and MP4 export. Repeatable flow in ~22 minutes.",
      excerpt:
        "Vertical talking head: generate captions, fix ASR, style them and drop stock B-roll or an imported AI MP4 where the script needs it.",
      intro:
        "CapCut targets short social video. This flow assumes you already have a 30–90 second talking-head clip (or voice with a static frame) in vertical 9:16. In about 22 minutes you leave with synced subtitles, a style that reads on mobile and at least one B-roll cut — from **Stock materials** or a short clip you import from Runway/Kling if you generated it elsewhere. We are not cutting a documentary: it is the «caption + one supporting shot» pattern you repeat on every short.",
      problem:
        "Many people export without reviewing Auto captions and ship misspelled names or out-of-sync lines. Another failure mode: random B-roll that does not illustrate the line. Or loud music during caption generation and then blaming the ASR. CapCut automates the first pass; you validate text, pacing and whether the visual cut matches the script.",
      whatYouWillLearn: [
        "Create a vertical project and import A-roll",
        "Generate Auto captions with the correct spoken language",
        "Fix subtitle blocks and basic timing",
        "Apply a caption style readable on a small screen",
        "Find B-roll in Stock materials or import a short AI clip",
        "Place B-roll in a script gap without burying the message",
        "Export MP4 and check sync with headphones",
      ],
      prerequisites: [
        "An account at capcut.com (web or desktop app; the free tier is often enough for one short)",
        "A 9:16 A-roll video with clear voice, 30–90 s (MP4 or MOV)",
        "22 minutes and headphones to review captions and cuts",
      ],
      steps: [
        {
          title: "New project and import vertical A-roll",
          content:
            "Open **capcut.com** (web editor) or the desktop app and sign in. Create a **new project** and set **9:16** aspect ratio if the wizard asks (you can also change it in project settings). Use **Import** and upload your talking head. Drag the clip to the main video track. Trim dead air at start and end with **split/trim** on the timeline — keep only what you would publish. Confirm the **audio** track is not muted and voice level is audible; without clear audio, Auto captions have nothing to transcribe (CapCut official docs).",
          whatYouShouldSee:
            "One clip on a 9:16 timeline, playhead at the start of speech, voice waveform visible.",
          tip:
            "If you shot 16:9, this flow still works; for Shorts/Reels, 9:16 avoids improvised crops later.",
          imageDescription:
            "Empty CapCut project with imported vertical clip on the main track and trim tools active.",
        },
        {
          title: "Generate Auto captions",
          content:
            "In the side panel, open **Captions** or **Text** (exact label varies on web vs desktop). Choose **Auto captions** / **Recognise subtitles** (official help terminology). Pick the **spoken language** in your video — it must match what you actually say; the wrong language yields empty or garbage text. Click **Generate** / **Create** and wait for cloud processing (stable connection required). When done, you see text segments aligned to audio on the timeline or on a dedicated captions track.",
          whatYouShouldSee:
            "Multiple subtitle segments along the clip, roughly synced to voice.",
          warning:
            "Very loud background music or street noise hurts recognition. Lower music before generating or isolate voice if your build allows.",
          imageDescription:
            "Auto captions panel with language selected, Generate button and subtitle blocks appearing on timeline.",
        },
        {
          title: "Review and fix text",
          content:
            "Play the full video once with captions visible. Click each **subtitle block** that fails: proper nouns, numbers, jargon. Edit text in the side panel or by double-clicking the block — changes save in real time per web/desktop help. If a block starts late or early, drag its edges on the timeline or use **timing** controls. Do not style yet: content must be correct first. If errors pile up, lower music, keep only the voice track and **regenerate** Auto captions instead of rewriting everything manually.",
          whatYouShouldSee:
            "At least three fixes (names, numbers or one badly split phrase); sync acceptable to the ear.",
          tip:
            "Read the subtitle aloud while audio plays: if it does not fit on screen, split the block into two shorter lines.",
          imageDescription:
            "Selected caption block with text in edit mode and timing handles on the subtitle track.",
        },
        {
          title: "Subtitle style for mobile",
          content:
            "With text fixed, open caption **presets**, **templates** or the **style** panel (CapCut offers fonts, color, outline and animations per platform). Pick **high contrast** and large size: on 9:16 the video is watched on a small screen. Avoid thin fonts on bright backgrounds. If your build shows **Auto highlight keywords**, enable it only when it helps scanning — do not decorate every word. Apply the style to **all** blocks on the track («apply to all» or equivalent) so you do not mix three fonts. Play a dense section and confirm captions do not cover your face in the important framing.",
          whatYouShouldSee:
            "Uniform captions readable in mobile-sized preview, no stray blocks in a different font.",
          proTip:
            "One style per short. Brand comes from content, not ten different animations.",
          imageDescription:
            "CapCut style panel with large font, outline and 9:16 preview showing captions over the face.",
        },
        {
          title: "B-roll: stock or imported AI clip",
          content:
            "Find **one moment** in the script where a supporting shot helps (when you say «for example on the street», «the product», «before and after»). Two official paths:\n\n1. **Stock materials**: in import or the library, open **Stock materials**, search by keyword that matches the line and preview short clips. Add one 2–5 s clip to the project bin.\n2. **External AI clip**: if you already generated a 3–5 s MP4 in Runway or Kling (see runway-primer-clip / kling-primer-clip), **Import** that file. Inside the editor, some accounts also have **AI media** with text-to-video or image-to-video for a short shot — if you do not see it, your region or plan may not include it; use stock or import.\n\nDo not pull B-roll from sites without a clear license if the video is for a client.",
          whatYouShouldSee:
            "One stock clip or an AI MP4 in the media panel, ready to drag to the timeline.",
          warning:
            "Check in the UI whether the asset allows **commercial use** before paid deliverables.",
          imageDescription:
            "Stock materials library with search results and selected clip thumbnail; alternate: imported AI MP4.",
        },
        {
          title: "Place B-roll on the timeline",
          content:
            "Drag the B-roll clip to a **video track above** the A-roll (overlay) or replace picture on a segment if you prefer a hard cut: at the script point, **split** the A-roll, drop B-roll in the gap and keep **A-roll audio** on the main track so voice continues (classic talking head + B-roll). Trim B-roll length to the phrase it illustrates — 2–4 s is usually enough. Add a **soft transition** if the cut feels harsh; do not overdo it. This tutorial needs only **one** B-roll insert; master one before building eight layers.",
          whatYouShouldSee:
            "A segment where video shows stock or AI clip while A-roll voice continues; captions stay visible and readable.",
          tip:
            "If B-roll covers subtitles, lower overlay opacity or move text position for that segment.",
          imageDescription:
            "Timeline with two video tracks: A-roll below, 3 s B-roll above; captions track unchanged.",
        },
        {
          title: "Export and validate",
          content:
            "Open **Export** (web or desktop). Pick resolution for your platform (1080×1920 for 9:16 is common). Confirm you export **burned-in subtitles** in the video if the destination is TikTok/Reels/Shorts — some flows also export **SRT** for YouTube; for this tutorial the MP4 with embedded captions is the deliverable. Start export, download the file and play it on a phone or with headphones: voice, caption sync and the B-roll cut. If something fails, return to text fixes or B-roll trim — do not re-export five times unchanged.",
          whatYouShouldSee:
            "Final MP4 in downloads, duration similar to trimmed A-roll, captions visible for the full play.",
          warning:
            "Watermark or export limits depend on the free plan — check capcut.com before you promise white-label delivery.",
          imageDescription:
            "CapCut export dialog with 1080p 9:16 and player showing final MP4 with subtitles.",
        },
      ],
      realUseCases: [
        {
          title: "45-second product tip",
          body: "Auto captions, fix the SKU name, stock of hands using the product at second 20.",
        },
        {
          title: "Vertical educational clip",
          body: "Captions with moderate keyword highlight and stock B-roll that shows the concept when you name it.",
        },
        {
          title: "Hook + demo",
          body: "First 3 s talking head; imported Kling B-roll when you switch to the visual demo.",
        },
      ],
      commonMistakes: [
        {
          title: "Wrong caption language",
          body: "You generate with the default language and ASR invents words. Pick spoken language before Generate.",
        },
        {
          title: "Decorative B-roll",
          body: "Pretty footage that does not match the line. The cut must illustrate what is said in that second.",
        },
        {
          title: "Export without listening",
          body: "A caption block 0.5 s off ruins the short. Play the full file before upload.",
        },
        {
          title: "Too many text styles",
          body: "Every block with a different animation tires viewers. One preset for the whole video.",
        },
      ],
      conclusion:
        "CapCut shortens the vertical short path: import A-roll, Auto captions, fix text, unify style, insert stock B-roll or an AI MP4 where the script needs it and export MP4. AI does the first transcription pass; you guarantee names, sync and that the supporting shot tells the same story as the voice. For audio-only podcast or long transcript editing, Descript is a different flow.",
      nextSteps: [
        "If the AI shot does not exist yet, generate a clip in kling-primer-clip or runway-primer-clip and import it.",
        "For voiceover from script without camera, see elevenlabs-primer-voiceover and edit over B-roll.",
        "Tool sheet: /en/tools/capcut/.",
      ],
      takeaway:
        "9:16 → Auto captions → fixed text → one style → one meaningful B-roll → export MP4 checked with headphones.",
    },
  },
};
