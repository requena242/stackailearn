import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "elevenlabs-primer-voiceover";

export const elevenlabsPrimerVoiceover: Tutorial = {
  id: slug,
  slug,
  category: "audio",
  level: "beginner",
  estimatedTime: 15,
  publishedAt: "2026-09-01",
  lastUpdated: "2026-09-01",
  toolsUsed: ["elevenlabs", "chatgpt", "runway"],
  relatedTutorials: ["runway-primer-clip", "chatgpt-primeros-pasos"],
  tags: ["elevenlabs", "tts", "voiceover", "locución", "audio"],
  hero: tutorialHero(slug, {
    es: {
      alt: "ElevenLabs Text to Speech con un guion corto, voz de biblioteca seleccionada y forma de onda generada",
      caption: "El guion corto y la voz correcta importan más que apilar adjetivos.",
      hint: "Hero 1600×900: ElevenLabs Speech Synthesis con párrafo de 4–6 frases, selector de voz abajo a la izquierda y botón Generate visible.",
    },
    en: {
      alt: "ElevenLabs Text to Speech with a short script, library voice selected and generated waveform",
      caption: "A short script and the right voice matter more than stacking adjectives.",
      hint: "Hero 1600×900: ElevenLabs Speech Synthesis with 4–6 sentence paragraph, voice picker bottom-left and Generate button visible.",
    },
  }),
  copy: {
    es: {
      title: "ElevenLabs: tu primer voiceover de 30–60 segundos (2026)",
      metaTitle: "ElevenLabs: primer voiceover en 2026",
      metaDescription:
        "Guion de 4–6 frases, voz de biblioteca, Eleven v3 o Multilingual v2. Dos o tres tomas. Reescribe la frase mala, no regeneres el mismo texto. Descarga MP3 y escúchalo sobre el clip.",
      excerpt:
        "Text-to-speech con guion corto. Voz de biblioteca, modelo expresivo o estable, 2–3 tomas. Reescribe antes de quemar créditos. MP3 sobre el clip real.",
      intro:
        "ElevenLabs no escribe tu mensaje: lo lee en voz alta. Este flujo dura 15 minutos y produce un voiceover de 30–60 segundos que puedes pegar sobre un clip de Runway o un slide de pitch. Partes de un guion corto que ya funciona — ChatGPT o a mano — y eliges una voz de la biblioteca, no una clonación.",
      problem:
        "La gente abre Text to Speech, pega un párrafo largo, clona una voz al azar y regenera el mismo texto diez veces. Queman créditos (1 por carácter), la entonación sigue plana y el MP3 no encaja con el vídeo. El primer voiceover sale de un guion corto y una voz de biblioteca que ya encaja con el tono.",
      whatYouWillLearn: [
        "Escribir un guion de 4–6 frases para 30–60 segundos de locución",
        "Abrir Text to Speech y elegir una voz de la biblioteca (no clonar)",
        "Elegir Eleven v3 o Multilingual v2 y los sliders de partida",
        "Generar 2–3 tomas y quedarte con la que lee mejor",
        "Reescribir la frase problemática en vez de regenerar texto idéntico",
        "Descargar MP3 y escucharlo sobre el clip o slide real",
      ],
      prerequisites: [
        "Cuenta en elevenlabs.io (el plan Free permite hasta 2.500 caracteres por generación)",
        "Un guion corto o 10 minutos para escribirlo en ChatGPT",
        "Opcional: un clip de Runway o un slide para probar el audio en contexto",
      ],
      steps: [
        {
          title: "Escribe un guion de 4–6 frases (30–60 s)",
          content:
            "Abre ChatGPT o un editor de texto y escribe 4–6 frases cortas. Una idea por frase. Apunta a 30–60 segundos de locución: unas 80–120 palabras en español, un poco más en inglés. Escribe números y símbolos como palabras («tres de cada cinco», no «3/5»). El idioma del audio sale del texto; el acento, de la voz que elijas después. Si el guion es para un clip de producto, describe beneficio y llamada a la acción, no adjetivos vacíos.",
          whatYouShouldSee:
            "Un bloque de texto de 4–6 frases en un editor o en ChatGPT, listo para copiar. Sin abrir ElevenLabs todavía.",
          tip: "Si aún no tienes clip, el tutorial de Runway puede ir después. Aquí solo necesitas el guion.",
          warning:
            "No pegues un artículo de blog. En el plan Free el límite es 2.500 caracteres por generación; un guion corto te deja margen para iterar.",
          imageDescription:
            "Editor de texto o ChatGPT con 4–6 frases cortas visibles; panel de ElevenLabs cerrado.",
        },
        {
          title: "Abre ElevenLabs → Text to Speech",
          content:
            "Entra en elevenlabs.io e inicia sesión. En la barra lateral de ElevenCreative, elige Text to Speech (o ve directo a elevenlabs.io/app/speech-synthesis/text-to-speech). Pega tu guion en el campo de texto central. No abras Voice Cloning, Studio ni la API: este tutorial se queda en la web de síntesis básica.",
          whatYouShouldSee:
            "El editor de Text to Speech con tu guion pegado, campo de voz vacío o con una voz por defecto, y el historial vacío a la derecha.",
          warning:
            "Clonar una voz exige consentimiento y no es el primer paso. Usa Default Voices o Voice Library.",
          imageDescription:
            "Dashboard de ElevenLabs: sidebar con Text to Speech marcado, guion pegado en el centro, panel History a la derecha.",
        },
        {
          title: "Elige una voz de biblioteca que encaje con el tono",
          content:
            "Abajo a la izquierda, abre el selector de voces (Voices). Explora Default Voices o Voice Library. Escucha los previews: busca tono conversacional, narrador o formal según tu guion. Para español, elige una voz nativa en español de la biblioteca — el acento viene de la voz, no de un selector de idioma aparte. La voz importa más que el modelo; si ninguna encaja, prueba otra antes de tocar sliders.",
          whatYouShouldSee:
            "Una voz seleccionada con nombre visible en el selector. Preview reproducible antes de generar.",
          tip: "Genera una frase de prueba con la voz antes de pegar el guion entero. Ahorra créditos si el tono no encaja.",
          proTip:
            "Voz primero, modelo después, sliders al final. Cambiar de voz con el mismo texto cuesta créditos de nuevo.",
          imageDescription:
            "Selector de voces abierto con lista de biblioteca, una voz resaltada y botón de preview.",
        },
        {
          title: "Modelo y sliders de partida",
          content:
            "En el selector de modelo, elige Eleven v3 si quieres una toma corta y expresiva (admite etiquetas como [whispers] o [sighs], hasta 5.000 caracteres en planes de pago). Para algo más estable en varias frases, Multilingual v2 también vale. No empieces con Flash v2.5: es barato y rápido, no la mejor primera elección para un voiceover. Ajusta sliders según la documentación: Stability ~50, Similarity ~75, Style 0. Genera cuando el guion, la voz y el modelo estén fijos.",
          whatYouShouldSee:
            "Eleven v3 o Multilingual v2 seleccionado. Sliders en valores de partida. Botón Generate listo.",
          warning:
            "Cada generación consume 1 crédito por carácter. No hay preview gratis de tu texto: al pulsar Generate gastas cuota.",
          imageDescription:
            "Panel de modelo con Eleven v3 o Multilingual v2 marcado y sliders Stability, Similarity y Style visibles.",
        },
        {
          title: "Genera 2–3 tomas y elige la mejor",
          content:
            "Pulsa Generate y espera el audio. Reproduce la toma completa. Si el ritmo global funciona pero una frase suena rara, no regeneres el mismo texto todavía — anota cuál frase falla. Para una segunda toma, puedes matizar el guion (una coma más, una frase acortada) o probar la misma configuración una vez más si quieres comparar variación del modelo. Quédate con la toma donde el mensaje se entiende de principio a fin.",
          whatYouShouldSee:
            "Una o dos formas de onda en el historial de la derecha. Audio reproducible de principio a fin.",
          tip: "En la web existen dos regeneraciones gratis solo si prompt, voz y modelo son idénticos, la primera gen fue hace menos de 2 h y no refrescaste la página. No cuentes con eso como estrategia principal.",
          imageDescription:
            "Historial con 2–3 entradas de audio; reproductor con la toma seleccionada.",
        },
        {
          title: "Reescribe la frase mala, no regeneres texto idéntico",
          content:
            "Si una frase suena plana o atropellada, edita el guion: añade una coma, divide en dos frases cortas, cambia un verbo o escribe números como palabras. Ejemplo: «Nuestro café llega a tu puerta en cuarenta y ocho horas» en vez de «48h delivery». Vuelve a Generate con el texto editado. Regenerar el mismo párrafo con la misma voz quema créditos sin garantía de mejora — la entonación cambia más con la redacción que con pulsar otra vez.",
          whatYouShouldSee:
            "El guion editado en el campo de texto con al menos una frase reformulada. Nueva generación en historial.",
          warning:
            "Tres regeneraciones del mismo texto = tres veces el coste en caracteres. Reescribe primero.",
          proTip:
            "En Eleven v3 puedes probar etiquetas de audio en una frase ([whispers], [laughs]) para matizar. Una etiqueta por frase, no un párrafo entero entre corchetes.",
          imageDescription:
            "Campo de texto con una frase resaltada y editada; nueva entrada en History tras Generate.",
        },
        {
          title: "Descarga MP3 y escúchalo sobre el clip real",
          content:
            "Cuando tengas la toma keeper, pulsa Download junto al reproductor o ve a History → elige la entrada → MP3 128 kbps. Si necesitas WAV, M4A o FLAC, está en Advanced del historial. Nombra el archivo por proyecto (`pitch-cafe-v2.mp3`). Reprodúcelo sobre tu clip de Runway o tu slide en el editor que uses (CapCut, Premiere, Keynote). El montaje — sincronizar audio y vídeo — no lo hace ElevenLabs; es trabajo del editor.",
          whatYouShouldSee:
            "Un MP3 en tu carpeta de descargas. Audio sincronizado a ojo sobre el vídeo o slide en un reproductor o timeline.",
          proTip:
            "Un voiceover que suena bien en el altavoz del portátil puede perderse sobre música. Escucha siempre en contexto.",
          imageDescription:
            "Botón Download o menú History con MP3; debajo, reproductor de vídeo con el audio superpuesto.",
        },
      ],
      realUseCases: [
        {
          title: "Voiceover para un clip de Runway",
          body: "Tienes un clip de 5 s del tutorial de Runway. Guion de tres frases sobre el producto. Voz conversacional en español, Eleven v3, MP3 pegado en CapCut.",
        },
        {
          title: "Narración de un pitch de 45 segundos",
          body: "Seis frases escritas en ChatGPT. Voz narradora de biblioteca, Multilingual v2 para estabilidad. Dos tomas, reescribes la frase del CTA, descargas y ensayas con las slides.",
        },
        {
          title: "Demo interna de producto",
          body: "Guion técnico corto. Voz formal de la biblioteca en inglés. Un intento, una frase acortada, keeper en MP3 para el Loom o el deck.",
        },
      ],
      commonMistakes: [
        {
          title: "Clonar voz en el primer día",
          body: "La biblioteca tiene decenas de voces. Clonar exige consentimiento y no arregla un guion flojo.",
        },
        {
          title: "Regenerar el mismo texto una y otra vez",
          body: "1 crédito por carácter cada vez. Reescribe la frase antes de pulsar Generate otra vez.",
        },
        {
          title: "Pegar un artículo largo",
          body: "Free: 2.500 caracteres por generación. Un voiceover de 30–60 s son unas 100 palabras, no un blog post.",
        },
        {
          title: "Elegir voz en inglés para guion en español",
          body: "El idioma sale del texto; el acento, de la voz. Para VO en español, voz nativa española de la biblioteca.",
        },
        {
          title: "Esperar que ElevenLabs monte el vídeo",
          body: "ElevenLabs genera audio. Runway genera motion. Sincronizarlos es trabajo del editor.",
        },
      ],
      conclusion:
        "Tu primer voiceover útil en ElevenLabs sale de un guion corto y una voz de biblioteca que ya encaja con el tono. Eleven v3 o Multilingual v2, dos o tres tomas, reescribir antes de regenerar. Si el mensaje no convence escrito, vuelve a ChatGPT — ElevenLabs solo lo lee.",
      nextSteps: [
        "Si aún no tienes clip, sigue el tutorial de Runway y vuelve con un MP4 de 5 s.",
        "Si el guion necesita más trabajo, repasa el tutorial de ChatGPT para acortar frases.",
        "Para la ficha completa de ElevenLabs (modelos, API, clonación), mira la herramienta en el catálogo.",
      ],
      takeaway:
        "Guion corto → voz de biblioteca → v3 o Multilingual v2 → 2–3 tomas → reescribe → MP3 sobre el clip. Locución, no montaje.",
    },
    en: {
      title: "ElevenLabs: your first 30–60 second voiceover (2026)",
      metaTitle: "ElevenLabs: first voiceover in 2026",
      metaDescription:
        "A 4–6 sentence script, library voice, Eleven v3 or Multilingual v2. Two or three takes. Rewrite the bad line, do not regenerate identical text. Download MP3 and listen over the clip.",
      excerpt:
        "Text-to-speech with a short script. Library voice, expressive or stable model, 2–3 takes. Rewrite before burning credits. MP3 over the real clip.",
      intro:
        "ElevenLabs does not write your message — it reads it aloud. This flow takes 15 minutes and produces a 30–60 second voiceover you can drop on a Runway clip or a pitch slide. You start from a short script that already works — ChatGPT or by hand — and pick a library voice, not a clone.",
      problem:
        "People open Text to Speech, paste a long paragraph, clone a random voice and regenerate the same text ten times. They burn credits (1 per character), intonation stays flat and the MP3 does not fit the video. The first voiceover comes from a short script and a library voice that already matches the tone.",
      whatYouWillLearn: [
        "Write a 4–6 sentence script for 30–60 seconds of voiceover",
        "Open Text to Speech and pick a library voice (do not clone)",
        "Choose Eleven v3 or Multilingual v2 and starting slider values",
        "Generate 2–3 takes and keep the one that reads best",
        "Rewrite the problem sentence instead of regenerating identical text",
        "Download MP3 and listen over the real clip or slide",
      ],
      prerequisites: [
        "An account at elevenlabs.io (the Free plan allows up to 2,500 characters per generation)",
        "A short script or 10 minutes to write one in ChatGPT",
        "Optional: a Runway clip or slide to test audio in context",
      ],
      steps: [
        {
          title: "Write a 4–6 sentence script (30–60 s)",
          content:
            "Open ChatGPT or a text editor and write 4–6 short sentences. One idea per sentence. Aim for 30–60 seconds of voiceover: roughly 80–120 words in English, a bit less in Spanish. Write numbers and symbols as words («three out of five», not «3/5»). Audio language comes from the text; accent comes from the voice you pick later. If the script is for a product clip, state benefit and call to action, not empty adjectives.",
          whatYouShouldSee:
            "A block of 4–6 sentences in an editor or ChatGPT, ready to copy. ElevenLabs not open yet.",
          tip: "If you have no clip yet, the Runway tutorial can come later. You only need the script here.",
          warning:
            "Do not paste a blog article. On the Free plan the limit is 2,500 characters per generation; a short script leaves room to iterate.",
          imageDescription:
            "Text editor or ChatGPT with 4–6 short sentences visible; ElevenLabs panel closed.",
        },
        {
          title: "Open ElevenLabs → Text to Speech",
          content:
            "Go to elevenlabs.io and sign in. In the ElevenCreative sidebar, choose Text to Speech (or go straight to elevenlabs.io/app/speech-synthesis/text-to-speech). Paste your script in the central text field. Do not open Voice Cloning, Studio or the API — this tutorial stays on basic web synthesis.",
          whatYouShouldSee:
            "The Text to Speech editor with your script pasted, voice field empty or on a default voice, and empty history on the right.",
          warning:
            "Cloning a voice requires consent and is not step one. Use Default Voices or Voice Library.",
          imageDescription:
            "ElevenLabs dashboard: sidebar with Text to Speech selected, script pasted in the center, History panel on the right.",
        },
        {
          title: "Pick a library voice that matches the tone",
          content:
            "Bottom left, open the voice selector (Voices). Browse Default Voices or Voice Library. Play previews: look for conversational, narrator or formal tone to match your script. For Spanish voiceover, pick a Spanish-native library voice — accent comes from the voice, not a separate language toggle. Voice matters more than model; if none fit, try another before touching sliders.",
          whatYouShouldSee:
            "A voice selected with its name visible in the selector. Playable preview before you generate.",
          tip: "Generate a test sentence with the voice before pasting the full script. Saves credits if the tone is wrong.",
          proTip:
            "Voice first, model second, sliders last. Changing voice with the same text costs credits again.",
          imageDescription:
            "Voice selector open with library list, one voice highlighted and preview button.",
        },
        {
          title: "Model and starting sliders",
          content:
            "In the model selector, pick Eleven v3 for a short expressive take (supports tags like [whispers] or [sighs], up to 5,000 characters on paid plans). For something steadier across sentences, Multilingual v2 also works. Do not start with Flash v2.5: it is cheap and fast, not the best first pick for a voiceover. Set sliders per docs: Stability ~50, Similarity ~75, Style 0. Generate when script, voice and model are set.",
          whatYouShouldSee:
            "Eleven v3 or Multilingual v2 selected. Sliders at starting values. Generate button ready.",
          warning:
            "Each generation costs 1 credit per character. There is no free preview of your text — hitting Generate spends quota.",
          imageDescription:
            "Model panel with Eleven v3 or Multilingual v2 checked and Stability, Similarity and Style sliders visible.",
        },
        {
          title: "Generate 2–3 takes and pick the best",
          content:
            "Hit Generate and wait for audio. Play the full take. If the overall pace works but one sentence sounds off, do not regenerate the same text yet — note which line fails. For a second take, tweak the script (an extra comma, a shorter sentence) or run the same setup once more to compare model variation. Keep the take where the message is clear start to finish.",
          whatYouShouldSee:
            "One or two waveforms in the history on the right. Audio playable from start to finish.",
          tip: "The website offers two free regenerations only if prompt, voice and model stay identical, first gen was under 2 h ago and you did not refresh the page. Do not rely on that as your main strategy.",
          imageDescription:
            "History with 2–3 audio entries; player with the selected take.",
        },
        {
          title: "Rewrite the bad line, do not regenerate identical text",
          content:
            "If a sentence sounds flat or rushed, edit the script: add a comma, split into two short sentences, change a verb or write numbers as words. Example: «Our coffee reaches your door in forty-eight hours» instead of «48h delivery». Hit Generate again with the edited text. Regenerating the same paragraph with the same voice burns credits with no guarantee of improvement — intonation changes more with rewriting than with clicking again.",
          whatYouShouldSee:
            "Edited script in the text field with at least one reformulated sentence. New generation in history.",
          warning:
            "Three regenerations of the same text = three times the character cost. Rewrite first.",
          proTip:
            "On Eleven v3 you can try audio tags on one line ([whispers], [laughs]) for nuance. One tag per sentence, not a whole paragraph in brackets.",
          imageDescription:
            "Text field with one sentence highlighted and edited; new History entry after Generate.",
        },
        {
          title: "Download MP3 and listen over the real clip",
          content:
            "When you have the keeper take, hit Download by the player or go to History → pick the entry → MP3 128 kbps. For WAV, M4A or FLAC, use Advanced in history. Name the file by project (`pitch-coffee-v2.mp3`). Play it over your Runway clip or slide in whatever editor you use (CapCut, Premiere, Keynote). Syncing audio and video is not ElevenLabs — that is the editor’s job.",
          whatYouShouldSee:
            "An MP3 in your downloads folder. Audio roughly synced over video or slide in a player or timeline.",
          proTip:
            "A voiceover that sounds fine on laptop speakers can get lost over music. Always listen in context.",
          imageDescription:
            "Download button or History menu with MP3; below, video player with audio overlaid.",
        },
      ],
      realUseCases: [
        {
          title: "Voiceover for a Runway clip",
          body: "You have a 5 s clip from the Runway tutorial. Three-sentence script about the product. Conversational Spanish voice, Eleven v3, MP3 dropped in CapCut.",
        },
        {
          title: "45-second pitch narration",
          body: "Six sentences written in ChatGPT. Narrator library voice, Multilingual v2 for stability. Two takes, rewrite the CTA line, download and rehearse with slides.",
        },
        {
          title: "Internal product demo",
          body: "Short technical script. Formal English library voice. One attempt, one shortened sentence, keeper MP3 for Loom or the deck.",
        },
      ],
      commonMistakes: [
        {
          title: "Cloning a voice on day one",
          body: "The library has dozens of voices. Cloning needs consent and does not fix a weak script.",
        },
        {
          title: "Regenerating the same text over and over",
          body: "1 credit per character each time. Rewrite the line before hitting Generate again.",
        },
        {
          title: "Pasting a long article",
          body: "Free: 2,500 characters per generation. A 30–60 s voiceover is about 100 words, not a blog post.",
        },
        {
          title: "Picking an English voice for a Spanish script",
          body: "Language comes from the text; accent from the voice. For Spanish VO, use a Spanish-native library voice.",
        },
        {
          title: "Expecting ElevenLabs to edit the video",
          body: "ElevenLabs makes audio. Runway makes motion. Syncing them is editor work.",
        },
      ],
      conclusion:
        "Your first useful ElevenLabs voiceover comes from a short script and a library voice that already matches the tone. Eleven v3 or Multilingual v2, two or three takes, rewrite before you regenerate. If the message does not convince on paper, go back to ChatGPT — ElevenLabs only reads it aloud.",
      nextSteps: [
        "If you have no clip yet, follow the Runway tutorial and come back with a 5 s MP4.",
        "If the script needs more work, revisit the ChatGPT tutorial to shorten sentences.",
        "For the full ElevenLabs tool page (models, API, cloning), see the catalog entry.",
      ],
      takeaway:
        "Short script → library voice → v3 or Multilingual v2 → 2–3 takes → rewrite → MP3 over the clip. Voiceover, not editing.",
    },
  },
};
