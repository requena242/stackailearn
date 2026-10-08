import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "descript-editar-podcast";

export const descriptEditarPodcast: Tutorial = {
  id: slug,
  slug,
  category: "audio",
  level: "beginner",
  estimatedTime: 25,
  publishedAt: "2026-10-08",
  lastUpdated: "2026-10-08",
  toolsUsed: ["descript", "elevenlabs", "chatgpt"],
  relatedTutorials: [
    "elevenlabs-primer-voiceover",
    "runway-primer-clip",
    "chatgpt-primeros-pasos",
  ],
  tags: [
    "descript",
    "podcast",
    "transcripción",
    "studio-sound",
    "edición",
    "muletillas",
    "2026",
  ],
  hero: tutorialHero(slug, {
    es: {
      alt: "Descript con transcripción del episodio, texto tachado y waveform acortado tras un corte",
      caption: "El entregable es audio exportado. La transcripción es la interfaz de edición, no el post del blog.",
      hint:
        "Hero 1600×900: proyecto de podcast en Descript, párrafo eliminado en la transcripción, waveform visiblemente más corta y botón Export en la barra.",
    },
    en: {
      alt: "Descript with episode transcript, struck-through text and shortened waveform after a cut",
      caption: "The deliverable is exported audio. The transcript is the editing UI, not the blog post.",
      hint:
        "Hero 1600×900: podcast project in Descript, deleted paragraph in transcript, visibly shorter waveform and Export in the toolbar.",
    },
  }),
  copy: {
    es: {
      title: "Descript: editar un podcast con IA (2026)",
      metaTitle: "Editar podcast en Descript con transcripción e IA en 2026",
      metaDescription:
        "Importa audio, edita cortando texto, quita muletillas, Studio Sound, corrige una línea y exporta MP3. Flujo repetible en ~25 minutos.",
      excerpt:
        "Transcripción como timeline: borras tangentes en el texto, limpias «um» y habitación, escuchas y exportas para tu host.",
      intro:
        "Descript trata un episodio como un documento. Subes la grabación, esperas la transcripción y editas borrando frases — el audio se recorta detrás. En unos 25 minutos sales con un MP3 listo para subir, no con un proyecto de montaje infinito. Este flujo asume un monólogo o entrevista ya grabada (5–20 minutos); no grabamos el episodio desde cero aquí.",
      problem:
        "Mucha gente abre un NLE, hace zoom en la waveform y pierde media hora en silencios. O exporta sin quitar muletillas y sin nivelar la habitación. El otro extremo: confiar en la transcripción sin escuchar y publicar un corte que se come la mitad de una palabra. Descript acelera el corte por contenido; tú sigues validando con el oído.",
      whatYouWillLearn: [
        "Crear un proyecto e importar el audio del episodio",
        "Revisar y corregir errores de transcripción antes de cortar",
        "Recortar tangentes borrando texto en la transcripción",
        "Aplicar Remove filler words con revisión posterior",
        "Pulir con Studio Sound sin sobreprocesar",
        "Corregir una línea con regrabación o Overdub si hace falta",
        "Pedir ayuda puntual a Underlord y exportar MP3/WAV",
      ],
      prerequisites: [
        "Cuenta en descript.com (el tier gratuito suele bastar para un episodio corto; revisa minutos de transcripción en tu plan)",
        "Un archivo de audio del episodio (WAV o MP3) de 5–20 minutos",
        "25 minutos y auriculares para escuchar cortes y muletillas",
      ],
      steps: [
        {
          title: "Nuevo proyecto e importa el audio",
          content:
            "Entra en descript.com e inicia sesión (app web o escritorio). Crea un **New project** y elige **Audio project** o **Video project** si también tienes vídeo; para podcast de voz, audio basta. Usa **Import** o arrastra tu archivo (WAV preferible si lo tienes; MP3 también vale). Pon un nombre claro (`episodio-12-borrador`). Descript empezará a transcribir en cuanto el archivo esté en el proyecto — no edites hasta que el estado de transcripción termine (barra de progreso o indicador «Transcribing»).",
          whatYouShouldSee:
            "Proyecto vacío con tu archivo en el panel de medios y transcripción en curso o ya visible debajo de la waveform.",
          tip:
            "Un solo archivo de voz en el primer intento. Varias pistas complican el flujo hasta que domines los cortes por texto.",
          imageDescription:
            "Pantalla de nuevo proyecto Descript con diálogo de importación y archivo de audio en cola.",
        },
        {
          title: "Revisa la transcripción antes de borrar",
          content:
            "Abre la vista **Script** o **Transcript** (el nombre exacto puede variar). Lee el primer minuto mientras reproduces el audio. Corrige nombres propios y términos técnicos: doble clic en una palabra mal oída y escribe la forma correcta. Si el ASR partió un párrafo raro, une frases solo cuando estés seguro — lo importante es que **cada palabra que dejes publicada suene bien al reproducir**. No borres tangentes todavía; primero arregla errores de texto que cambiarían el significado.",
          whatYouShouldSee:
            "Transcripción alineada al playhead; al menos un nombre o término corregido a mano.",
          warning:
            "Borrar texto sin revisar puede eliminar audio correcto si la transcripción estaba mal segmentada.",
          imageDescription:
            "Transcripción con una palabra en edición inline y playhead en el primer minuto del audio.",
        },
        {
          title: "Corta tangentes borrando en el texto",
          content:
            "Identifica un bloque que no irá al episodio final (intro larga, digresión, «como decía antes…» repetido). Selecciónalo en la transcripción y bórralo, o usa la herramienta de **delete / cut** asociada al texto (Descript recorta la pista). Reproduce desde unos segundos antes del corte para comprobar que no quedan medias palabras. Repite con **uno o dos** bloques en este tutorial — no intentes pulir todo el episodio. El hábito: contenido primero, micro-cortes después.",
          whatYouShouldSee:
            "Un hueco claro en la transcripción y la waveform más corta; al reproducir, el salto suena natural.",
          tip:
            "Si el corte suena brusco, añade un crossfade desde el menú de edición de clip o deja una frase puente que sí quieras.",
          imageDescription:
            "Párrafo seleccionado en la transcripción tachado o eliminado; waveform con región faltante.",
        },
        {
          title: "Remove filler words (y escucha el resultado)",
          content:
            "En el menú de audio o IA, busca **Remove filler words**, **Shorten word gaps** o el equivalente actual. Descript detecta muletillas («um», «eh», «you know») según idioma. Aplica sobre la pista de voz **una vez** y reproduce un tramo que antes tenía muchas muletillas. Si alguna eliminación suena artificial, deshaz o edita esa palabra a mano en la transcripción. No pulses la acción cinco veces: es fácil dejar el habla demasiado compacta.",
          whatYouShouldSee:
            "Menos muletillas visibles en el texto o marcadas como eliminadas; al oír, el ritmo es más limpio sin cortes obvios cada palabra.",
          warning:
            "En algunos acentos el modelo confunde una pausa natural con muletilla. El oído manda.",
          imageDescription:
            "Panel Remove filler words aplicado; transcripción con «um» tachados y preview de audio activo.",
        },
        {
          title: "Studio Sound con moderación",
          content:
            "Abre **Studio Sound** (a veces en el panel de efectos de la pista o en **AI effects**). Actívalo en la pista de voz principal. Reproduce un fragmento con ruido de habitación conocido. Si la voz suena metálica o «radio FM exagerada», baja la intensidad si el control existe o desactiva y deja solo el corte de muletillas. Studio Sound reduce ruido y mejora claridad; no sustituye grabar más cerca del micrófono la próxima vez.",
          whatYouShouldSee:
            "Indicador de Studio Sound activo en la pista; menos siseo de fondo al escuchar, voz aún reconocible.",
          proTip:
            "Compara A/B con el toggle: 10 segundos con y sin efecto bastan para decidir.",
          imageDescription:
            "Panel Studio Sound encendido en la pista de voz; waveform y medidor de reproducción.",
        },
        {
          title: "Una línea mala: regrabar o Overdub",
          content:
            "Encuentra **una** frase que quedó mal dicha (tropiezo, dato incorrecto). Opciones en Descript:\n\n1. **Record insert** / regrabar en el punto del playhead (si tu plan y micrófono lo permiten).\n2. **Overdub** o corrección por texto: seleccionas la frase en la transcripción, escribes la versión correcta y generas audio de reemplazo con tu voz de IA configurada (requiere setup previo y consentimiento; no es obligatorio en el día uno).\n\nPara este tutorial basta con **regrabar una frase corta** o dejar la nota «corregir en v2» si no tienes Overdub. Reproduce la unión entre audio viejo y nuevo — debe sonar continua.",
          whatYouShouldSee:
            "Un clip de voz sustituido o una nueva toma en el mismo párrafo; sin clic audible en el empalme.",
          tip:
            "Overdub no es para reescribir medio episodio; es parche en una línea.",
          imageDescription:
            "Frase seleccionada en la transcripción con diálogo de overdub o botón de grabar en el playhead.",
        },
        {
          title: "Underlord para un empujón y exporta",
          content:
            "Si tu versión muestra **Underlord** (asistente de IA), úsalo para una tarea acotada: «resume los tres temas de este script» o «sugiere un título de episodio» — no para borrar contenido sin revisar. Luego **File → Export** o el botón **Publish / Export**: elige **Audio** → MP3 o WAV según pida tu host de podcast (muchas plataformas aceptan MP3 a 128–192 kbps; archivo maestro en WAV si archivas). Nombra el archivo con episodio y fecha. El entregable es el audio, no la transcripción exportada como artículo.",
          whatYouShouldSee:
            "Diálogo de exportación con formato elegido y un MP3/WAV en tu carpeta de descargas listo para subir.",
          warning:
            "Exportar vídeo con captions es posible en Descript, pero este flujo se centra en audio de podcast.",
          imageDescription:
            "Modal de exportación de audio MP3 y archivo final en el explorador de archivos.",
        },
      ],
      realUseCases: [
        {
          title: "Entrevista de 15 minutos a episodio de 12",
          body: "Borrar la intro del invitado repetida y dos tangentes. Filler words + Studio Sound. MP3 al host el mismo día.",
        },
        {
          title: "Monólogo semanal sin editor humano",
          body: "Una pasada de transcripción, cortes por texto y export. Overdub solo si fallaste una cifra.",
        },
        {
          title: "Clip de audio para redes desde el mismo proyecto",
          body: "Duplica la composición, deja 60 s en el texto y exporta WAV para montar sobre vídeo en otro sitio.",
        },
      ],
      commonMistakes: [
        {
          title: "Editar sin auriculares",
          body: "Los cortes por texto ocultan clicks y medias palabras. Escucha cada borrado grande.",
        },
        {
          title: "Confiar ciegamente en Remove filler words",
          body: "A veces come pausas dramáticas. Reproduce el tramo completo.",
        },
        {
          title: "Studio Sound al máximo siempre",
          body: "Suena artificial en voces ya limpias. Menos es más.",
        },
        {
          title: "Publicar la transcripción sin revisar",
          body: "El ASR erra nombres. Corrige antes de exportar o antes de generar captions públicos.",
        },
      ],
      conclusion:
        "Descript convierte el podcast en texto editable: importas, corriges la transcripción, cortas tangentes, limpias muletillas y habitación, parcheas una línea si hace falta y exportas audio. La IA acelera; tu oído aprueba el corte. Para voz generada desde guion, ElevenLabs sigue siendo el otro extremo del pipeline.",
      nextSteps: [
        "Si necesitas locución desde cero, abre elevenlabs-primer-voiceover.",
        "Para vídeo generado, runway-primer-clip; Descript no sustituye ese paso.",
        "Ficha de la herramienta: /es/tools/descript/.",
      ],
      takeaway:
        "Audio importado → transcripción revisada → cortes por texto → filler + Studio Sound → export MP3. Escuchar cada paso.",
    },
    en: {
      title: "Descript: edit a podcast with AI (2026)",
      metaTitle: "Edit a podcast in Descript with transcript and AI in 2026",
      metaDescription:
        "Import audio, cut by editing text, remove fillers, Studio Sound, fix one line and export MP3. Repeatable flow in ~25 minutes.",
      excerpt:
        "Transcript as timeline: delete tangents in text, clean «um» and room tone, listen and export for your host.",
      intro:
        "Descript treats an episode like a document. Upload the recording, wait for transcription and edit by deleting sentences — audio cuts underneath. In about 25 minutes you leave with an MP3 ready to upload, not an endless timeline project. This flow assumes an already recorded monologue or interview (5–20 minutes); we are not recording the episode from scratch here.",
      problem:
        "Many people open an NLE, zoom into the waveform and lose half an hour on silences. Or they export without removing fillers or taming room tone. The other failure mode: trusting the transcript without listening and shipping a cut that eats half a word. Descript speeds content cuts; you still validate with your ears.",
      whatYouWillLearn: [
        "Create a project and import episode audio",
        "Review and fix transcription errors before cutting",
        "Trim tangents by deleting text in the transcript",
        "Apply Remove filler words with a listening pass after",
        "Polish with Studio Sound without overprocessing",
        "Fix one line with re-record or Overdub if needed",
        "Use Underlord for a narrow task and export MP3/WAV",
      ],
      prerequisites: [
        "An account at descript.com (the free tier is often enough for a short episode; check transcription minutes on your plan)",
        "An episode audio file (WAV or MP3), 5–20 minutes",
        "25 minutes and headphones to hear cuts and fillers",
      ],
      steps: [
        {
          title: "New project and import audio",
          content:
            "Go to descript.com and sign in (web or desktop app). Create a **New project** and pick **Audio project** or **Video project** if you have video too; for voice-only podcast, audio is enough. Use **Import** or drag your file (WAV if you have it; MP3 works). Name it clearly (`episode-12-draft`). Descript starts transcribing once the file is in the project — do not edit until transcription finishes (progress bar or «Transcribing» indicator).",
          whatYouShouldSee:
            "Empty project with your file in the media panel and transcription in progress or already visible under the waveform.",
          tip:
            "One voice file on the first try. Multiple tracks complicate the flow until text cuts feel natural.",
          imageDescription:
            "Descript new project screen with import dialog and audio file queued.",
        },
        {
          title: "Review the transcript before deleting",
          content:
            "Open the **Script** or **Transcript** view (exact label may vary). Read the first minute while playing audio. Fix proper nouns and technical terms: double-click a misheard word and type the correct form. If ASR split a paragraph oddly, merge sentences only when you are sure — what matters is that **every word you keep sounds right on playback**. Do not cut tangents yet; fix text errors that would change meaning first.",
          whatYouShouldSee:
            "Transcript aligned to the playhead; at least one name or term corrected manually.",
          warning:
            "Deleting text without review can remove good audio if transcription was segmented wrong.",
          imageDescription:
            "Transcript with one word in inline edit and playhead in the first minute of audio.",
        },
        {
          title: "Cut tangents by deleting text",
          content:
            "Find a block that will not ship (long intro, digression, repeated «as I was saying…»). Select it in the transcript and delete, or use the **delete / cut** action tied to text (Descript trims the track). Play from a few seconds before the cut to check you are not leaving half words. Repeat for **one or two** blocks in this tutorial — do not try to perfect the whole episode. Habit: content first, micro-edits later.",
          whatYouShouldSee:
            "A clear gap in the transcript and a shorter waveform; playback jumps sound natural.",
          tip:
            "If the cut feels abrupt, add a crossfade from the clip edit menu or keep a bridge sentence you do want.",
          imageDescription:
            "Selected paragraph struck or removed in transcript; waveform with missing region.",
        },
        {
          title: "Remove filler words (then listen)",
          content:
            "In the audio or AI menu, find **Remove filler words**, **Shorten word gaps** or the current equivalent. Descript detects fillers («um», «uh», «you know») per language. Apply once on the voice track and play a section that used to be filler-heavy. If a removal sounds artificial, undo or fix that word manually in the transcript. Do not run the action five times — speech can get unnaturally tight.",
          whatYouShouldSee:
            "Fewer fillers visible in text or marked removed; when listening, rhythm is cleaner without obvious word-by-word chops.",
          warning:
            "On some accents the model mistakes a natural pause for a filler. Ears win.",
          imageDescription:
            "Remove filler words panel applied; transcript with «um» struck and audio preview playing.",
        },
        {
          title: "Studio Sound in moderation",
          content:
            "Open **Studio Sound** (sometimes on the track effects panel or under **AI effects**). Enable it on the main voice track. Play a segment with known room noise. If the voice sounds metallic or «exaggerated radio», lower intensity if a control exists or disable and keep only filler removal. Studio Sound reduces noise and improves clarity; it does not replace recording closer to the mic next time.",
          whatYouShouldSee:
            "Studio Sound indicator on the track; less hiss when listening, voice still recognizable.",
          proTip:
            "A/B with the toggle: ten seconds on and off is enough to decide.",
          imageDescription:
            "Studio Sound panel enabled on voice track; waveform and playback meter.",
        },
        {
          title: "One bad line: re-record or Overdub",
          content:
            "Find **one** phrase that landed wrong (stumble, wrong fact). Options in Descript:\n\n1. **Record insert** / re-record at the playhead (if your plan and mic allow).\n2. **Overdub** or text correction: select the phrase in the transcript, type the correct version and generate replacement audio with your configured AI voice (needs prior setup and consent; not required on day one).\n\nFor this tutorial, **re-record one short phrase** or leave a «fix in v2» note if you lack Overdub. Play the join between old and new audio — it should sound continuous.",
          whatYouShouldSee:
            "One replaced voice clip or a new take in the same paragraph; no audible click at the splice.",
          tip:
            "Overdub is not for rewriting half the episode; it patches one line.",
          imageDescription:
            "Selected phrase in transcript with overdub dialog or record button at playhead.",
        },
        {
          title: "Underlord for a nudge, then export",
          content:
            "If your build shows **Underlord** (AI assistant), use it for one narrow task: «summarize the three topics in this script» or «suggest an episode title» — not to delete content without review. Then **File → Export** or **Publish / Export**: choose **Audio** → MP3 or WAV per your podcast host (many accept MP3 at 128–192 kbps; archive masters as WAV). Name the file with episode and date. The deliverable is audio, not the transcript exported as a blog post.",
          whatYouShouldSee:
            "Export dialog with format chosen and an MP3/WAV in downloads ready to upload.",
          warning:
            "Exporting video with captions is possible in Descript, but this flow focuses on podcast audio.",
          imageDescription:
            "Audio MP3 export modal and final file in the file browser.",
        },
      ],
      realUseCases: [
        {
          title: "15-minute interview to 12-minute episode",
          body: "Delete repeated guest intro and two tangents. Filler words + Studio Sound. MP3 to host same day.",
        },
        {
          title: "Weekly monologue without a human editor",
          body: "One transcript pass, text cuts and export. Overdub only if you flubbed a number.",
        },
        {
          title: "Social audio clip from the same project",
          body: "Duplicate the composition, keep 60 s in text and export WAV to lay under video elsewhere.",
        },
      ],
      commonMistakes: [
        {
          title: "Editing without headphones",
          body: "Text cuts hide clicks and half words. Hear every big delete.",
        },
        {
          title: "Blind trust in Remove filler words",
          body: "It sometimes eats dramatic pauses. Play the full section.",
        },
        {
          title: "Studio Sound always maxed",
          body: "Sounds artificial on already clean voices. Less is more.",
        },
        {
          title: "Publishing the transcript unreviewed",
          body: "ASR misses names. Fix before export or before public captions.",
        },
      ],
      conclusion:
        "Descript turns a podcast into editable text: import, fix transcription, cut tangents, clean fillers and room tone, patch one line if needed and export audio. AI speeds the work; your ears approve the cut. For voice generated from a script, ElevenLabs remains the other end of the pipeline.",
      nextSteps: [
        "If you need voiceover from scratch, open elevenlabs-primer-voiceover.",
        "For generated video, runway-primer-clip; Descript does not replace that step.",
        "Tool sheet: /en/tools/descript/.",
      ],
      takeaway:
        "Imported audio → reviewed transcript → text cuts → filler + Studio Sound → export MP3. Listen at every step.",
    },
  },
};
