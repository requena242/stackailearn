import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "suno-primer-tema";

export const sunoPrimerTema: Tutorial = {
  id: slug,
  slug,
  category: "audio",
  level: "beginner",
  estimatedTime: 18,
  publishedAt: "2026-09-02",
  lastUpdated: "2026-09-02",
  toolsUsed: ["suno", "runway", "elevenlabs"],
  relatedTutorials: ["elevenlabs-primer-voiceover", "runway-primer-clip", "chatgpt-primeros-pasos"],
  tags: ["suno", "música", "canciones", "audio", "prompt", "jingle"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Suno Create con prompt de género y tempo, dos versiones generadas en el reproductor",
      caption: "Género, tempo y tema en una línea. Suno hace el resto.",
      hint: "Hero 1600×900: Suno Create con prompt de 1–2 líneas, selector Simple/Custom visible y dos versiones de la canción en el reproductor.",
    },
    en: {
      alt: "Suno Create with genre and tempo prompt, two generated versions in the player",
      caption: "Genre, tempo and theme in one line. Suno does the rest.",
      hint: "Hero 1600×900: Suno Create with a 1–2 line prompt, Simple/Custom selector visible and two song versions in the player.",
    },
  }),
  copy: {
    es: {
      title: "Suno: tu primer tema de 30–90 segundos (2026)",
      metaTitle: "Suno: primer tema en 2026",
      metaDescription:
        "Prompt con género + tempo + tema. Modo Simple o Custom, dos versiones por generación. Escucha, elige la keeper y descarga MP3. Sin quemar créditos en adjetivos vacíos.",
      excerpt:
        "Generación de canciones con un prompt concreto. Simple o Custom, dos versiones, elige la que encaje. Descarga MP3 y pruébala sobre un clip.",
      intro:
        "Suno no lee un guion en voz alta — crea una canción con letra, voz e instrumentos. Este flujo dura unos 18 minutos y produce un tema de 30–90 segundos que puedes usar como fondo de un clip de Runway, jingle de prueba o maqueta musical. Partes de un prompt de una línea con género, tempo y tema; no de una lista de adjetivos.",
      problem:
        "La gente abre Suno, escribe «canción épica increíble» y regenera diez veces sin cambiar el prompt. Queman créditos diarios, la letra suena genérica y el MP3 no encaja con el vídeo. El primer tema sale de un prompt concreto: género + tempo + tema en una o dos frases.",
      whatYouWillLearn: [
        "Escribir un prompt de una línea: género, tempo, instrumentación y tema",
        "Abrir Suno Create y elegir modo Simple o Custom",
        "Generar dos versiones y escucharlas de principio a fin",
        "Elegir la keeper y ajustar el prompt si la letra no encaja",
        "Descargar MP3 y reproducirlo sobre un clip o slide real",
      ],
      prerequisites: [
        "Cuenta en suno.com (el plan Free da unas 10 canciones al día)",
        "Una idea de tema: viaje, producto, ambiente de oficina, etc.",
        "Opcional: un clip de Runway o un vídeo corto para probar el audio en contexto",
      ],
      steps: [
        {
          title: "Escribe un prompt: género + tempo + tema",
          content:
            "Abre un editor de texto o ChatGPT y escribe una o dos frases. Incluye género musical, tempo aproximado, instrumentación y tema de la letra. Ejemplo: «indie pop midtempo, guitarra acústica y batería suave, letra sobre un viaje en tren de noche». No apiles adjetivos («épico, increíble, único») sin contexto. Si quieres voz en español, dilo en el prompt («letra en español»). Si prefieres instrumental, añade «sin voz» o «instrumental».",
          whatYouShouldSee:
            "Una o dos frases en un editor, listas para copiar. Sin abrir Suno todavía.",
          tip: "Un prompt bueno cabe en una línea. Si necesitas un párrafo, probablemente estás mezclando demasiadas ideas.",
          warning:
            "Suno no es ElevenLabs: no pegues un guion de locución. Aquí pides una canción, no una voz hablada.",
          imageDescription:
            "Editor de texto o ChatGPT con prompt de una línea: género, tempo, instrumentos y tema visibles.",
        },
        {
          title: "Abre Suno → Create",
          content:
            "Entra en suno.com e inicia sesión (Google, Discord o email). En la barra lateral o la home, elige Create (o el botón + para nueva canción). Verás un campo de prompt central y opciones de modo abajo. No abras Suno Studio ni el editor avanzado todavía — este tutorial se queda en la generación básica.",
          whatYouShouldSee:
            "La pantalla Create con el campo de prompt vacío, selector de modo Simple/Custom visible y créditos diarios en la esquina.",
          imageDescription:
            "Dashboard de Suno: sidebar con Create marcado, campo de prompt vacío en el centro, créditos visibles arriba.",
        },
        {
          title: "Elige Simple o Custom",
          content:
            "Debajo del campo de prompt, elige el modo. Simple: pegas tu descripción y Suno decide estructura y estilo. Es el mejor punto de partida para el primer tema. Custom: escribes la letra tú y Suno la canta con el estilo que indiques en otro campo. Úsalo solo si ya tienes la letra escrita. Para este tutorial, quédate en Simple y pega el prompt que preparaste.",
          whatYouShouldSee:
            "Modo Simple seleccionado. Tu prompt pegado en el campo central. Botón Create Song listo.",
          tip: "Custom tiene sentido cuando la letra ya está escrita y pulida. Para explorar estilos, Simple es más rápido.",
          warning:
            "En Custom, una letra larga y vaga produce peor resultado que un prompt corto en Simple.",
          imageDescription:
            "Selector Simple/Custom con Simple activo; prompt pegado en el campo de texto.",
        },
        {
          title: "Pulsa Create y espera las dos versiones",
          content:
            "Pulsa Create Song (o el botón equivalente con el icono de nota musical). Suno genera dos versiones de la misma idea — no una sola toma. La generación tarda entre 30 segundos y dos minutos según la cola. No cierres la pestaña ni regeneres mientras carga: gastarías créditos extra. En el plan Free usas el modelo v4.5-all; los modelos v5.x requieren plan de pago.",
          whatYouShouldSee:
            "Indicador de carga o barra de progreso. Después, dos entradas en el reproductor o en tu biblioteca con versiones A y B.",
          warning:
            "Cada generación consume créditos (~5 por canción, dos versiones incluidas). El plan Free da unas 50 créditos diarios (~10 canciones).",
          imageDescription:
            "Pantalla de generación con spinner; después, dos tarjetas de canción lado a lado con botones de play.",
        },
        {
          title: "Escucha las dos versiones de principio a fin",
          content:
            "Reproduce la versión A completa. Luego la B. Presta atención a: ritmo y tempo, claridad de la voz, coherencia de la letra y si el género coincide con lo que pediste. No juzgues en los primeros 5 segundos — el estribillo o el puente pueden cambiar el tono. Anota cuál versión encaja mejor con tu uso (fondo de clip, jingle, maqueta).",
          whatYouShouldSee:
            "Reproductor con forma de onda o carátula. Dos canciones reproducibles de inicio a fin. Duración típica: 30–120 segundos.",
          tip: "Usa auriculares. En altavoz de portátil pierdes graves y la voz se mezcla con el ruido ambiente.",
          proTip:
            "Si ninguna versión convence, no regeneres todavía — ajusta el prompt (siguiente paso) antes de gastar más créditos.",
          imageDescription:
            "Reproductor de Suno con versión A en play; versión B visible debajo con botón de reproducción.",
        },
        {
          title: "Elige la keeper o ajusta el prompt",
          content:
            "Si una versión funciona, márcala como favorita o anota su ID. Si la letra suena genérica o el género no encaja, edita el prompt antes de regenerar: cambia el tempo («uptempo» en vez de «midtempo»), especifica instrumentos («solo piano y voz») o acota el tema («letra sobre café de especialidad, no viajes»). Una palabra cambiada puede alterar toda la canción. Regenera solo cuando el prompt esté mejor, no cuando la misma descripción falló dos veces.",
          whatYouShouldSee:
            "Una canción seleccionada como keeper, o un prompt editado en el campo de texto listo para un nuevo Create.",
          warning:
            "Regenerar el mismo prompt tres veces rara vez mejora el resultado. Reescribe primero.",
          imageDescription:
            "Campo de prompt con una palabra editada resaltada; o canción marcada con icono de favorito.",
        },
        {
          title: "Descarga MP3 y pruébalo en contexto",
          content:
            "En la canción keeper, abre el menú (tres puntos o icono de descarga) y elige Download → MP3. En el plan Free el archivo puede llevar marca de agua audible; para uso comercial necesitas Pro o Premier. Nombra el archivo por proyecto (`clip-cafe-v1.mp3`). Reprodúcelo sobre tu clip de Runway, un vídeo de prueba o un slide en CapCut, Premiere o el reproductor que uses. Comprueba que el tempo encaja con el montaje — Suno no sincroniza con tu vídeo.",
          whatYouShouldSee:
            "Un MP3 en tu carpeta de descargas. Audio superpuesto a un vídeo o slide en un editor o reproductor.",
          proTip:
            "Un tema que suena bien solo puede competir con el diálogo del clip. Baja volumen o elige instrumental si hay voz en el vídeo.",
          tip: "Para compartir sin descargar, Suno ofrece enlace público a la canción en tu biblioteca. Útil para feedback rápido.",
          imageDescription:
            "Menú de descarga con MP3 seleccionado; debajo, timeline de vídeo con la pista de audio añadida.",
        },
      ],
      realUseCases: [
        {
          title: "Tema de fondo para un clip de Runway",
          body: "Tienes un clip de 5 s del tutorial de Runway. Prompt: «lo-fi chill midtempo, instrumental, ambiente de café». Dos versiones, eliges la B, MP3 en CapCut bajo el clip.",
        },
        {
          title: "Jingle de prueba para un pitch",
          body: "Prompt: «pop alegre uptempo, ukelele, letra corta sobre app de productividad». Versión A con estribillo pegadizo. Descargas y ensayas con las slides.",
        },
        {
          title: "Maqueta para feedback interno",
          body: "Prompt en español: «rock alternativo midtempo, guitarra eléctrica, letra sobre teletrabajo». Compartes el enlace de Suno con el equipo antes de ir a un compositor.",
        },
      ],
      commonMistakes: [
        {
          title: "Usar Suno para locución",
          body: "Suno canta; ElevenLabs lee. Si necesitas voiceover de un guion, usa el tutorial de ElevenLabs.",
        },
        {
          title: "Prompts vagos con adjetivos vacíos",
          body: "«Canción épica increíble» no dice género ni tempo. Sé concreto: género + tempo + tema.",
        },
        {
          title: "Regenerar sin cambiar el prompt",
          body: "Dos versiones por generación ya te dan variación. Si ninguna encaja, reescribe el prompt.",
        },
        {
          title: "Publicar comercialmente con plan Free",
          body: "El plan gratuito no incluye derechos comerciales. Revisa precios antes de YouTube monetizado o anuncios.",
        },
        {
          title: "Esperar control de nota a nota",
          body: "Suno no es un DAW. Para editar cada pista, necesitas stems (plan de pago) o Suno Studio (Premier).",
        },
      ],
      conclusion:
        "Tu primer tema útil en Suno sale de un prompt concreto: género, tempo y tema en una línea. Modo Simple, dos versiones, escuchar de principio a fin, elegir o reescribir antes de regenerar. Si necesitas voz hablada, ve a ElevenLabs; si necesitas vídeo, a Runway. Suno hace la canción.",
      nextSteps: [
        "Si aún no tienes clip, sigue el tutorial de Runway y vuelve con un MP4 de 5 s.",
        "Si necesitas locución en vez de canción, prueba el tutorial de ElevenLabs.",
        "Para la ficha completa de Suno (modelos, stems, Suno Studio), mira la herramienta en el catálogo.",
      ],
      takeaway:
        "Prompt concreto → Simple → Create → dos versiones → escuchar → keeper o reescribir → MP3 en contexto. Canción, no locución.",
    },
    en: {
      title: "Suno: your first 30–90 second track (2026)",
      metaTitle: "Suno: first track in 2026",
      metaDescription:
        "Prompt with genre + tempo + theme. Simple or Custom mode, two versions per generation. Listen, pick the keeper and download MP3. Do not burn credits on empty adjectives.",
      excerpt:
        "Song generation with a concrete prompt. Simple or Custom, two versions, pick the one that fits. Download MP3 and test it over a clip.",
      intro:
        "Suno does not read a script aloud — it creates a song with lyrics, vocals and instruments. This flow takes about 18 minutes and produces a 30–90 second track you can use as background for a Runway clip, a test jingle or a musical mockup. You start from a one-line prompt with genre, tempo and theme; not a list of adjectives.",
      problem:
        "People open Suno, type «epic amazing song» and regenerate ten times without changing the prompt. They burn daily credits, lyrics sound generic and the MP3 does not fit the video. The first track comes from a concrete prompt: genre + tempo + theme in one or two sentences.",
      whatYouWillLearn: [
        "Write a one-line prompt: genre, tempo, instrumentation and theme",
        "Open Suno Create and choose Simple or Custom mode",
        "Generate two versions and listen start to finish",
        "Pick the keeper and adjust the prompt if lyrics miss",
        "Download MP3 and play it over a real clip or slide",
      ],
      prerequisites: [
        "An account at suno.com (the Free plan gives roughly 10 songs a day)",
        "A theme idea: journey, product, office ambience, etc.",
        "Optional: a Runway clip or short video to test audio in context",
      ],
      steps: [
        {
          title: "Write a prompt: genre + tempo + theme",
          content:
            "Open a text editor or ChatGPT and write one or two sentences. Include musical genre, approximate tempo, instrumentation and lyric theme. Example: «midtempo indie pop, acoustic guitar and soft drums, lyrics about a night train journey». Do not stack adjectives («epic, amazing, unique») without context. For Spanish vocals, say so in the prompt («lyrics in Spanish»). For instrumental, add «no vocals» or «instrumental».",
          whatYouShouldSee:
            "One or two sentences in an editor, ready to copy. Suno not open yet.",
          tip: "A good prompt fits on one line. If you need a paragraph, you are probably mixing too many ideas.",
          warning:
            "Suno is not ElevenLabs: do not paste a voiceover script. Here you ask for a song, not spoken voice.",
          imageDescription:
            "Text editor or ChatGPT with one-line prompt: genre, tempo, instruments and theme visible.",
        },
        {
          title: "Open Suno → Create",
          content:
            "Go to suno.com and sign in (Google, Discord or email). In the sidebar or home, choose Create (or the + button for a new song). You will see a central prompt field and mode options below. Do not open Suno Studio or the advanced editor yet — this tutorial stays on basic generation.",
          whatYouShouldSee:
            "The Create screen with an empty prompt field, Simple/Custom mode selector visible and daily credits in the corner.",
          imageDescription:
            "Suno dashboard: sidebar with Create selected, empty prompt field in the center, credits visible at top.",
        },
        {
          title: "Choose Simple or Custom",
          content:
            "Below the prompt field, pick a mode. Simple: paste your description and Suno decides structure and style. Best starting point for a first track. Custom: you write the lyrics and Suno sings them with the style you specify in another field. Use it only when you already have written lyrics. For this tutorial, stay on Simple and paste the prompt you prepared.",
          whatYouShouldSee:
            "Simple mode selected. Your prompt pasted in the central field. Create Song button ready.",
          tip: "Custom makes sense when lyrics are already written and polished. For exploring styles, Simple is faster.",
          warning:
            "In Custom, long vague lyrics produce worse results than a short Simple prompt.",
          imageDescription:
            "Simple/Custom selector with Simple active; prompt pasted in the text field.",
        },
        {
          title: "Hit Create and wait for two versions",
          content:
            "Hit Create Song (or the equivalent button with the music note icon). Suno generates two versions of the same idea — not a single take. Generation takes 30 seconds to two minutes depending on queue. Do not close the tab or regenerate while loading: you would spend extra credits. On the Free plan you use the v4.5-all model; v5.x models require a paid plan.",
          whatYouShouldSee:
            "Loading indicator or progress bar. Then two entries in the player or library with versions A and B.",
          warning:
            "Each generation costs credits (~5 per song, two versions included). The Free plan gives roughly 50 daily credits (~10 songs).",
          imageDescription:
            "Generation screen with spinner; then two song cards side by side with play buttons.",
        },
        {
          title: "Listen to both versions start to finish",
          content:
            "Play version A in full. Then B. Pay attention to: rhythm and tempo, vocal clarity, lyric coherence and whether the genre matches what you asked for. Do not judge in the first 5 seconds — chorus or bridge can change the tone. Note which version fits your use (clip background, jingle, mockup).",
          whatYouShouldSee:
            "Player with waveform or cover art. Two songs playable start to finish. Typical length: 30–120 seconds.",
          tip: "Use headphones. On laptop speakers you lose bass and vocals blend with room noise.",
          proTip:
            "If neither version convinces, do not regenerate yet — adjust the prompt (next step) before spending more credits.",
          imageDescription:
            "Suno player with version A playing; version B visible below with play button.",
        },
        {
          title: "Pick the keeper or adjust the prompt",
          content:
            "If one version works, mark it as favorite or note its ID. If lyrics sound generic or genre misses, edit the prompt before regenerating: change tempo («uptempo» instead of «midtempo»), specify instruments («piano and vocals only») or narrow the theme («lyrics about specialty coffee, not travel»). One changed word can alter the whole song. Regenerate only when the prompt is better, not when the same description failed twice.",
          whatYouShouldSee:
            "One song selected as keeper, or an edited prompt in the text field ready for a new Create.",
          warning:
            "Regenerating the same prompt three times rarely improves results. Rewrite first.",
          imageDescription:
            "Prompt field with one edited word highlighted; or song marked with favorite icon.",
        },
        {
          title: "Download MP3 and test in context",
          content:
            "On the keeper song, open the menu (three dots or download icon) and choose Download → MP3. On the Free plan the file may have an audible watermark; commercial use needs Pro or Premier. Name the file by project (`clip-coffee-v1.mp3`). Play it over your Runway clip, a test video or slide in CapCut, Premiere or whatever player you use. Check that tempo fits the edit — Suno does not sync to your video.",
          whatYouShouldSee:
            "An MP3 in your downloads folder. Audio overlaid on a video or slide in an editor or player.",
          proTip:
            "A track that sounds fine alone can fight clip dialogue. Lower volume or pick instrumental if the video has voice.",
          tip: "To share without downloading, Suno offers a public link to the song in your library. Handy for quick feedback.",
          imageDescription:
            "Download menu with MP3 selected; below, video timeline with audio track added.",
        },
      ],
      realUseCases: [
        {
          title: "Background track for a Runway clip",
          body: "You have a 5 s clip from the Runway tutorial. Prompt: «midtempo lo-fi chill, instrumental, coffee shop ambience». Two versions, you pick B, MP3 in CapCut under the clip.",
        },
        {
          title: "Test jingle for a pitch",
          body: "Prompt: «upbeat pop, ukulele, short lyrics about a productivity app». Version A with a catchy chorus. Download and rehearse with slides.",
        },
        {
          title: "Mockup for internal feedback",
          body: "Spanish prompt: «midtempo alt rock, electric guitar, lyrics about remote work». Share the Suno link with the team before hiring a composer.",
        },
      ],
      commonMistakes: [
        {
          title: "Using Suno for voiceover",
          body: "Suno sings; ElevenLabs reads. If you need voiceover for a script, use the ElevenLabs tutorial.",
        },
        {
          title: "Vague prompts with empty adjectives",
          body: "«Epic amazing song» does not state genre or tempo. Be concrete: genre + tempo + theme.",
        },
        {
          title: "Regenerating without changing the prompt",
          body: "Two versions per generation already give variation. If neither fits, rewrite the prompt.",
        },
        {
          title: "Publishing commercially on the Free plan",
          body: "The free plan does not include commercial rights. Check pricing before monetized YouTube or ads.",
        },
        {
          title: "Expecting note-by-note control",
          body: "Suno is not a DAW. To edit every track you need stems (paid plan) or Suno Studio (Premier).",
        },
      ],
      conclusion:
        "Your first useful Suno track comes from a concrete prompt: genre, tempo and theme in one line. Simple mode, two versions, listen start to finish, pick or rewrite before you regenerate. If you need spoken voice, go to ElevenLabs; if you need video, Runway. Suno makes the song.",
      nextSteps: [
        "If you have no clip yet, follow the Runway tutorial and come back with a 5 s MP4.",
        "If you need voiceover instead of a song, try the ElevenLabs tutorial.",
        "For the full Suno tool page (models, stems, Suno Studio), see the catalog entry.",
      ],
      takeaway:
        "Concrete prompt → Simple → Create → two versions → listen → keeper or rewrite → MP3 in context. Song, not voiceover.",
    },
  },
};
