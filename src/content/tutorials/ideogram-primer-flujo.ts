import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "ideogram-primer-flujo";

export const ideogramPrimerFlujo: Tutorial = {
  id: slug,
  slug,
  category: "image",
  level: "beginner",
  estimatedTime: 18,
  publishedAt: "2026-11-23",
  lastUpdated: "2026-11-23",
  toolsUsed: ["ideogram", "midjourney"],
  relatedTutorials: [
    "alternativas-midjourney",
    "midjourney-sref-estilo",
    "midjourney-prompts-que-funcionan",
    "leonardo-primer-flujo",
  ],
  tags: ["ideogram", "imagen", "texto-en-imagen", "poster", "magic-prompt", "layerize"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Ideogram Image con un póster, el titular entre comillas en el prompt y Magic Prompt apagado",
      caption: "El titular va entre comillas. Magic Prompt se apaga antes de Generate.",
      hint:
        "Hero 1600×900: ideogram.ai en Image, modelo Ideogram 4.5, prompt con «OPEN DAILY» entre comillas, Magic Prompt off y cuatro resultados en Assets.",
    },
    en: {
      alt: "Ideogram Image with a poster, the headline in quotes in the prompt and Magic Prompt off",
      caption: "The headline sits in quotes. Magic Prompt is off before Generate.",
      hint:
        "Hero 1600×900: ideogram.ai in Image, Ideogram 4.5 selected, prompt with «OPEN DAILY» in quotes, Magic Prompt off and four results in Assets.",
    },
  }),
  copy: {
    es: {
      title: "Ideogram: primer flujo de imagen con texto",
      metaTitle: "Ideogram: primer flujo de imagen con texto (2026)",
      metaDescription:
        "Modelo Ideogram 4.5 o 4.0, ratio en el panel, Magic Prompt apagado y el titular entre comillas. Lee cada letra y exporta el keeper.",
      excerpt:
        "Un póster con titular corto: modelo Ideogram, forma en el panel, texto entre comillas, revisión letra a letra y Export.",
      intro:
        "Ideogram genera imágenes con texto legible para pósters, packaging, señalética y logos. Este flujo dura unos 18 minutos y termina en un archivo del póster cuyo titular coincide con la nota, no en un grid sin leer. Entras por Image en https://ideogram.ai, eliges Ideogram 4.5 o 4.0, fijas la forma en el panel, apagas Magic Prompt y escribes las palabras exactas entre comillas. La guía de texto está en https://docs.ideogram.ai/prompting/text-in-images. Si el entregable es un still sin copy en la imagen, el mapa es la comparativa ideogram-vs-midjourney-tipografia (/compare/ideogram-vs-midjourney-tipografia).",
      problem:
        "El cuadro de Home, bajo What will you design?, arranca la generación en Auto al pulsar Enter y no deja apagar Magic Prompt antes. Auto no tiene ese interruptor. Magic Prompt empieza encendido, reescribe el prompt y puede traducirlo al inglés. El ratio escrito dentro del prompt no sustituye al control de aspecto. El plan gratuito publica lo que generas. El primer flujo útil fija modelo, forma y palabras, y lee el titular letra a letra antes de Export.",
      whatYouWillLearn: [
        "Anotar las palabras exactas, el sitio del texto y la forma antes de generar",
        "Abrir Image y elegir Ideogram 4.5 o 4.0 en lugar de Auto",
        "Fijar la relación de aspecto y apagar Magic Prompt",
        "Escribir el titular entre comillas, cerca del inicio del prompt",
        "Generar y comparar cada letra con la nota",
        "Pasar una letra fallida a una capa con Layerize text en Studio",
        "Exportar la versión elegida y anotar visibilidad y uso",
      ],
      prerequisites: [
        "Cuenta en https://ideogram.ai. En el plan gratuito, entrar con Google, Apple o Microsoft da créditos semanales; la cantidad puede variar. Una cuenta solo con email y contraseña no recibe esos créditos",
        "Un titular corto, de una o dos líneas, con las mayúsculas ya decididas",
        "18 minutos. Si el brief no lleva texto dentro de la imagen, abre antes ideogram-vs-midjourney-tipografia (/compare/ideogram-vs-midjourney-tipografia)",
      ],
      steps: [
        {
          title: "Anota el titular, el sitio y la forma",
          content:
            "Antes de Generate, escribe tres líneas: las palabras exactas (mayúsculas incluidas), dónde se sientan en la imagen y la forma del archivo. La guía de texto dice que Ideogram puede poner un titular en un póster, un nombre en un envase, un lema en señalética o el título de una portada, y que las palabras exactas van entre comillas junto con el lugar: https://docs.ideogram.ai/prompting/text-in-images.\n\nFormas que la guía de ajustes nombra: 1:1 para un logo o un sticker, 4:5 para un post de feed, 9:16 para una story, 16:9 para una miniatura o una diapositiva, 2:3 para un póster o una portada, 3:1 para un banner. Página: https://docs.ideogram.ai/create/image-settings.\n\nQuédate con una frase corta y una escena simple. La misma guía dice que cada palabra de más sube la probabilidad de una errata, y que una escena cargada deja menos sitio para la letra. El texto sale con más precisión en inglés. Las escrituras no latinas y las letras con acento pueden salir mal o no salir: anótalo si el titular las lleva, para leerlo después letra a letra.",
          whatYouShouldSee:
            "Una nota con las palabras exactas, el lugar del texto y una forma (4:5 o 2:3, por ejemplo). Ideogram aún sin Generate.",
          imageDescription:
            "Nota «OPEN DAILY / arriba / 4:5 / sans-serif en verde bosque sobre crema» junto a ideogram.ai sin generar.",
        },
        {
          title: "Abre Image y elige Ideogram 4.5 o 4.0",
          content:
            "Entra en https://ideogram.ai e inicia sesión. En la barra lateral pulsa Image. La app abre en Auto. El selector de modelo está arriba del panel. La guía de creación está en https://docs.ideogram.ai/create/create.\n\nPara que el titular coincida con la nota, elige Ideogram 4.5 o Ideogram 4.0. La página de modelos dice que, para trabajo nuevo, uses esos dos. Auto no tiene Magic Prompt, así que desde Auto no puedes impedir la reescritura del prompt. En 4.5 y en 4.0 el interruptor sí está. Cualquier plan, incluido el gratuito, puede usar Auto y todos los modelos de Ideogram: https://docs.ideogram.ai/create/models.\n\nLa home presenta también Ideogram 4.6. Si aparece en tu selector, el panel muestra solo los ajustes de ese modelo. Este flujo se queda en 4.5 o 4.0, que son los que la guía de modelos describe con Magic Prompt y resolución.\n\nDeja fuera el cuadro What will you design? de Home: al pulsar Enter arranca la tanda en Auto. Image deja el prompt y los ajustes a la vista antes de Generate.",
          whatYouShouldSee:
            "La app Image con Ideogram 4.5 o Ideogram 4.0 en el selector y el cuadro de prompt vacío.",
          warning:
            "Los modelos de otros proveedores del mismo selector no tienen el interruptor Magic Prompt. Quédate en un modelo Ideogram.",
          imageDescription:
            "Selector de modelo con Ideogram 4.5 o 4.0 marcado y el prompt vacío en el panel de Image.",
        },
        {
          title: "Fija la forma y apaga Magic Prompt",
          content:
            "Debajo del prompt, elige la relación de aspecto de tu nota. Escribir 4:5 o 16:9 dentro del texto no sustituye a ese control: https://docs.ideogram.ai/prompting/prompting.\n\nEn Ideogram 4.5 y 4.0, al salir de Auto en el ratio aparece Resolution, con 1K o 2K. En la primera ronda elige 1K si el menú está; 2K es la otra opción del mismo control. Mientras el ratio sigue en Auto, ese menú no se muestra. Si tu forma no está en la lista del modelo, elige la más cercana que sí aparezca: al cambiar de modelo, el ratio solo se conserva si el destino lo admite.\n\nNumber of images admite Auto o de 1 a 8. En los modelos Ideogram, Auto produce 4. Déjalo en Auto o pon 4. El botón Generate muestra el coste en créditos, y más imágenes cuestan más. Quality puede quedarse en el valor con el que abre el modelo; 4.5 lista Low, Medium y High, y 4.0 lista Turbo, Default y Quality.\n\nMagic Prompt empieza encendido. El ajuste dice que mejora la variedad y la riqueza del prompt y que puede traducirlo al inglés. Apágalo para que el modelo siga tus palabras. Página: https://docs.ideogram.ai/create/image-settings.\n\nEn esta primera pasada no adjuntes imágenes de referencia. En Ideogram 4.5, Magic Prompt se oculta cuando hay referencias y el prompt pasa a ser una instrucción de edición.",
          whatYouShouldSee:
            "Ratio fijo, Resolution en 1K si el menú está, número de imágenes en Auto o en 4, y Magic Prompt apagado.",
          tip: "El coste de la tanda está en el botón Generate. Léelo antes de pulsar.",
          imageDescription:
            "Controles de Image con ratio 4:5 o 2:3, Resolution 1K y Magic Prompt en off.",
        },
        {
          title: "Escribe el titular entre comillas, al principio",
          content:
            "En el cuadro What do you want to see? describe el soporte, el lugar del texto y el estilo de la letra. Las palabras que deben verse van entre comillas. La guía de creación usa este patrón: a poster that says \"Summer Sale\". https://docs.ideogram.ai/create/create.\n\nUn prompt de esta primera tanda, armado con ese patrón y con el ejemplo de letra de la guía (sans-serif en negrita, verde bosque sobre crema):\n\nA poster. At the top, the words \"OPEN DAILY\" in bold sans-serif capitals, deep forest green on a warm cream background.\n\nLa guía de texto pide esto: https://docs.ideogram.ai/prompting/text-in-images.\n\n- Lo que va entre comillas es el texto a renderizar. Conserva ortografía y mayúsculas.\n- Nombra el texto pronto. Cerca del inicio sale con más fiabilidad que al final.\n- Di dónde aparece.\n- Describe peso, forma y tono de la letra. Un nombre de archivo de fuente no reproduce esa fuente. La fuente de la biblioteca se elige después, en una capa de Studio.\n- Frase corta y escena simple. Si omites el estilo, el modelo elige uno acorde a la escena.\n\nIdeogram 4.5 y 4.0 no tienen un campo Negative prompt en Image. Una frase con «sin» o «no» se engancha a la palabra que sigue. Describe lo que sí se ve, como en https://docs.ideogram.ai/prompting/fix-common-problems.",
          whatYouShouldSee:
            "Un prompt de pocas líneas, con el titular entre comillas cerca del inicio y el lugar del texto escrito.",
          proTip:
            "Un solo bloque corto en esta ronda. Varios bloques se describen en orden de lectura, de arriba abajo. El JSON con text, desc, color_palette y bbox, en 4.5 y 4.0, está en la misma guía de texto y queda fuera de esta primera tanda.",
          imageDescription:
            "Campo de prompt con \"OPEN DAILY\" entre comillas, sans-serif en negrita y fondo crema, y Magic Prompt apagado.",
        },
        {
          title: "Genera y lee cada letra",
          content:
            "Pulsa Generate. Con un modelo ya elegido, el botón muestra el coste en créditos. Mientras envía la petición dice Starting…. Los resultados aparecen en Assets: un aviso Generation started, con Jump to new generation, y baldosas en blanco hasta que cada imagen termina. Si una falla, verás Could not generate that image. Please try again. Guía: https://docs.ideogram.ai/create/create.\n\nAbre cada imagen y compara el titular con la nota, letra a letra, mayúsculas incluidas. Quédate con la que escribe bien el texto, aunque la escena sea la más simple. La guía de texto dice que suele ser más fácil conservar la imagen cuyo texto está bien y corregir la escena alrededor, que al revés.\n\nSi las cuatro fallan por el mismo motivo, el orden de esa guía es: generar otra vez, cambiar una palabra larga o rara por otra más corta, y solo entonces corregir el texto en Studio. https://docs.ideogram.ai/prompting/text-in-images.",
          whatYouShouldSee:
            "Hasta cuatro imágenes en Assets. Una de ellas con el titular idéntico a la nota.",
          warning:
            "Export espera a que el titular coincida. Una letra de más invalida el póster.",
          imageDescription:
            "Assets con cuatro pósteres; uno con OPEN DAILY correcto y el resto marcados en la nota como errata.",
        },
        {
          title: "Si una letra falla, usa Layerize text",
          content:
            "Si el titular ya coincide, pasa a Export. Si la escena te vale y solo falla una palabra, abre Studio: en More de la barra lateral, Studio. En Start with an image, Browse Library y elige esa imagen. Browse Library abre el archivo que ya está en Ideogram. https://docs.ideogram.ai/edit/studio.\n\nHaz clic en un hueco vacío para que no haya nada seleccionado. En la barra lateral, Layerize text. Obtienes una versión nueva en la tira inferior, con el texto en capas editables. Hay que haber iniciado sesión. La herramienta está en beta. Si no lee texto, verás No text layers were created: ocurre cuando no hay texto, o cuando la letra es estilizada, decorativa o parte de un gráfico. La página de la función pide letra clara y mayormente recta, y revisar las palabras y el fondo reconstruido, porque pueden diferir del original: https://docs.ideogram.ai/edit/text-and-layers y https://ideogram.ai/features/text-layers/.\n\nSelecciona la capa, entra en ella y sustituye la palabra. En Type cambias fuente y tamaño; el tamaño va de 8 a 200. Color, Align y Style (bold, italic, underline, strikethrough) están en la barra derecha. Las fuentes salen de la biblioteca de Ideogram. Compara con la miniatura original de la tira.\n\nSi no se crea ninguna capa, añadir otra capa vacía que dice Text no convierte las letras de la imagen. En un plan de pago, Select area pinta la palabra y describe lo que debe leer; el resto de la capa se queda. El pincel va de 10 a 80. https://docs.ideogram.ai/edit/studio.",
          whatYouShouldSee:
            "Una versión nueva en la tira, con el titular en una capa editable, o el aviso No text layers were created.",
          tip: "Duplica la versión con + en la tira antes de un retoque que quieras comparar. Studio guarda solo: no hay botón Save.",
          imageDescription:
            "Studio con Layerize text, la tira de versiones y el titular OPEN DAILY en una capa de texto.",
        },
        {
          title: "Exporta y anota visibilidad y uso",
          content:
            "En la tira de versiones deja activa la que vas a entregar. Arriba a la derecha, Export. Elige File type y Size. Download guarda el tamaño original o uno menor. Si eliges un tamaño mayor que el original, el botón pasa a Upscale & download y gasta créditos. Export abre el mismo menú que Download en la página de la imagen: https://docs.ideogram.ai/edit/studio y https://docs.ideogram.ai/organize-and-share/download.\n\nSin plan de pago, el menú abre en JPEG a tamaño original. PNG y WEBP piden un plan de pago, salvo un PNG transparente a 1K. Las opciones bloqueadas muestran un icono de corona. Con plan de pago, el menú abre en PNG a tamaño original.\n\nVisibilidad, según la FAQ de https://ideogram.ai: en el plan gratuito, y en el Basic heredado, lo que generas es público. En Pay as you go, Plus, Pro, Team y Enterprise las imágenes nuevas siguen sin publicar hasta que tú las publiques.\n\nUso, en la misma FAQ: Ideogram no reclama la propiedad de tus entradas ni de tus salidas, y te asigna los derechos que adquiera sobre el resultado. Puedes usar las salidas para tus fines, incluidos los comerciales. Sigues siendo responsable de que el contenido no vulnere leyes, derechos de terceros o los Terms of Service. Un nombre o un logo de otra marca sigue en esa responsabilidad. El enlace a los términos está en esa FAQ.",
          whatYouShouldSee:
            "Un archivo en descargas y la nota del brief con el plan, la fecha 2026-11-23 y si el uso es un mock interno o una entrega.",
          warning:
            "La FAQ de https://ideogram.ai manda sobre este paso. Léela antes de enseñar el archivo fuera.",
          imageDescription:
            "Menú Export con tipo de archivo y tamaño, y la nota «plan / 2026-11-23 / mock interno».",
        },
      ],
      realUseCases: [
        {
          title: "Post de feed con un titular corto",
          body: "Forma 4:5, una frase entre comillas, Magic Prompt apagado. Te quedas con la variante cuyo titular coincide y exportas esa versión.",
        },
        {
          title: "Mock de packaging o de señal",
          body: "La home de Ideogram nombra packaging, señalética y pósters con texto legible. El claim cabe en una línea; el párrafo largo se compone después en la herramienta de diseño.",
        },
        {
          title: "Nombre en un logo de exploración",
          body: "Ideogram 3.0 es el modelo con presets de estilo, referencias de estilo y paleta, y la guía lo señala para logos y gráfica de marca. La home describe además Ideogram Vector para un SVG editable. Este flujo cubre la imagen con el nombre legible; la entrega de marca sigue en revisión humana.",
        },
      ],
      commonMistakes: [
        {
          title: "Generar desde Home en Auto",
          body: "Enter en What will you design? lanza la tanda en Auto. Auto no tiene Magic Prompt. Entra por Image y elige 4.5 o 4.0.",
        },
        {
          title: "Dejar Magic Prompt encendido",
          body: "El interruptor empieza encendido y puede traducir el prompt al inglés. Apágalo cuando el titular tiene que coincidir con la nota.",
        },
        {
          title: "Escribir el ratio dentro del prompt",
          body: "4:5 y el número de imágenes se eligen en los controles. El prompt lleva el sujeto, el lugar del texto y el estilo de la letra.",
        },
        {
          title: "Dar por privado el plan gratuito",
          body: "En el plan gratuito lo generado es público. Pay as you go, Plus, Pro, Team y Enterprise dejan las imágenes nuevas sin publicar hasta que tú las publiques.",
        },
      ],
      conclusion:
        "El primer flujo en Ideogram anota el titular, entra por Image en Ideogram 4.5 o 4.0, fija la forma, apaga Magic Prompt, pone las palabras entre comillas y lee cada letra antes de Export. Una errata suelta pasa por Layerize text en Studio. Si el archivo no lleva texto dentro de la imagen, sigue ideogram-vs-midjourney-tipografia (/compare/ideogram-vs-midjourney-tipografia), alternativas-midjourney (/tutorials/alternativas-midjourney) y midjourney-sref-estilo (/tutorials/midjourney-sref-estilo).",
      nextSteps: [
        "Para decidir Ideogram o Midjourney según si el copy vive en el JPG, abre ideogram-vs-midjourney-tipografia (/compare/ideogram-vs-midjourney-tipografia).",
        "Si el still no lleva texto, sigue alternativas-midjourney (/tutorials/alternativas-midjourney) y midjourney-prompts-que-funcionan (/tutorials/midjourney-prompts-que-funcionan).",
        "Para un look dirigido con referencias de estilo en Midjourney, midjourney-sref-estilo (/tutorials/midjourney-sref-estilo).",
        "Otro primer flujo de imagen, con upscale en Leonardo, está en leonardo-primer-flujo (/tutorials/leonardo-primer-flujo).",
        "Ficha de la herramienta: /tools/ideogram/.",
      ],
      takeaway:
        "Nota del titular → Image en 4.5 o 4.0 → forma en el panel → Magic Prompt off → comillas → leer cada letra → Layerize text si hace falta → Export y visibilidad anotada.",
    },
    en: {
      title: "Ideogram: first image-with-text workflow",
      metaTitle: "Ideogram: first image-with-text workflow (2026)",
      metaDescription:
        "Ideogram 4.5 or 4.0, aspect ratio in the panel, Magic Prompt off and the headline in quotes. Read every letter, then export the keeper.",
      excerpt:
        "A poster with a short headline: an Ideogram model, shape in the panel, text in quotes, a letter-by-letter check and Export.",
      intro:
        "Ideogram generates images with readable text for posters, packaging, signage and logos. This flow takes about 18 minutes and ends with a poster file whose headline matches your note, not an unread grid. You enter through Image on https://ideogram.ai, pick Ideogram 4.5 or 4.0, set the shape in the panel, turn Magic Prompt off and put the exact words in quotes. The text guide is at https://docs.ideogram.ai/prompting/text-in-images. If the deliverable is a still with no in-image copy, the map is the ideogram-vs-midjourney-tipografia comparison (/compare/ideogram-vs-midjourney-tipografia).",
      problem:
        "The Home box under What will you design? starts a run on Auto when you press Enter, before you can turn Magic Prompt off. Auto has no such switch. Magic Prompt starts on, rewrites the prompt and can translate it into English. An aspect ratio typed inside the prompt does not replace the control. The free plan makes what you generate public. The first useful flow locks the model, the shape and the words, and reads the headline letter by letter before Export.",
      whatYouWillLearn: [
        "Write down the exact words, where the text sits and the shape before you generate",
        "Open Image and pick Ideogram 4.5 or 4.0 instead of Auto",
        "Set the aspect ratio and turn Magic Prompt off",
        "Put the headline in quotes, near the start of the prompt",
        "Generate and compare every letter with the note",
        "Move a missed word onto a layer with Layerize text in Studio",
        "Export the chosen version and note visibility and use",
      ],
      prerequisites: [
        "An account at https://ideogram.ai. On the free plan, signing in with Google, Apple or Microsoft grants weekly credits; the amount may vary. An email-and-password account receives none of those credits",
        "A short headline, one or two lines, with capitals already decided",
        "18 minutes. If the brief has no text inside the image, open ideogram-vs-midjourney-tipografia (/compare/ideogram-vs-midjourney-tipografia) first",
      ],
      steps: [
        {
          title: "Write down the headline, the place and the shape",
          content:
            "Before Generate, write three lines: the exact words (capitals included), where they sit in the image and the file shape. The text guide says Ideogram can place a headline on a poster, a name on packaging, a slogan on signage or a title on a cover, and that the exact words go in quotes together with the place: https://docs.ideogram.ai/prompting/text-in-images.\n\nShapes the settings guide names: 1:1 for a logo or a sticker, 4:5 for a feed post, 9:16 for a story, 16:9 for a thumbnail or a slide, 2:3 for a poster or a book cover, 3:1 for a banner. Page: https://docs.ideogram.ai/create/image-settings.\n\nKeep one short phrase and a simple scene. The same guide says each extra word raises the odds of a typo, and a busy scene leaves less room for clean lettering. Text comes out most accurately in English. Non-Latin scripts and accented letters can come out wrong or not at all: note that if the headline uses them, so you can read it letter by letter afterward.",
          whatYouShouldSee:
            "A note with the exact words, where the text sits and a shape (4:5 or 2:3, for example). Ideogram with no Generate yet.",
          imageDescription:
            "Note «OPEN DAILY / top / 4:5 / forest-green sans-serif on cream» next to ideogram.ai before generate.",
        },
        {
          title: "Open Image and pick Ideogram 4.5 or 4.0",
          content:
            "Go to https://ideogram.ai and sign in. In the sidebar, select Image. The app opens on Auto. The Model picker sits at the top of the panel. The create guide is at https://docs.ideogram.ai/create/create.\n\nFor a headline that must match the note, choose Ideogram 4.5 or Ideogram 4.0. The models page says that for new work you use those two. Auto has no Magic Prompt, so from Auto you cannot stop the prompt rewrite. On 4.5 and on 4.0 the switch is there. Every plan, free included, can use Auto and all Ideogram models: https://docs.ideogram.ai/create/models.\n\nThe homepage also introduces Ideogram 4.6. If it appears in your picker, the panel shows only that model's settings. This flow stays on 4.5 or 4.0, which the models guide describes with Magic Prompt and resolution.\n\nSkip the What will you design? box on Home: Enter starts the run on Auto. Image leaves the prompt and the settings visible before Generate.",
          whatYouShouldSee:
            "The Image app with Ideogram 4.5 or Ideogram 4.0 in the picker and an empty prompt box.",
          warning:
            "Partner models in the same picker have no Magic Prompt switch. Stay on an Ideogram model.",
          imageDescription:
            "Model picker with Ideogram 4.5 or 4.0 selected and an empty prompt in the Image panel.",
        },
        {
          title: "Lock the shape and turn Magic Prompt off",
          content:
            "Under the prompt, pick the aspect ratio from your note. Typing 4:5 or 16:9 inside the text does not replace that control: https://docs.ideogram.ai/prompting/prompting.\n\nOn Ideogram 4.5 and 4.0, leaving Auto on the ratio reveals Resolution, with 1K or 2K. On the first round pick 1K if the menu is there; 2K is the other option on the same control. While the ratio stays on Auto, that menu stays hidden. If your shape is missing from the model's list, pick the closest one that does appear: when you switch models, a ratio carries over only when the destination supports it.\n\nNumber of images accepts Auto or 1 to 8. On Ideogram models, Auto produces 4. Leave it on Auto or set 4. The Generate button shows the cost in credits, and more images cost more. Quality can stay on the value the model opens with; 4.5 lists Low, Medium and High, and 4.0 lists Turbo, Default and Quality.\n\nMagic Prompt starts on. The setting says it enhances variety and richness and that it can translate your prompt into English. Turn it off so the model follows your words. Page: https://docs.ideogram.ai/create/image-settings.\n\nOn this first pass, attach no reference images. On Ideogram 4.5, Magic Prompt hides when references are attached and the prompt becomes an edit instruction.",
          whatYouShouldSee:
            "A fixed ratio, Resolution at 1K if the menu is there, image count on Auto or 4, and Magic Prompt off.",
          tip: "The run's cost is on the Generate button. Read it before you press it.",
          imageDescription:
            "Image controls with ratio 4:5 or 2:3, Resolution 1K and Magic Prompt off.",
        },
        {
          title: "Put the headline in quotes, near the start",
          content:
            "In the What do you want to see? box, describe the format, where the text sits and the lettering. Words that must appear go in quotes. The create guide uses this pattern: a poster that says \"Summer Sale\". https://docs.ideogram.ai/create/create.\n\nA prompt for this first run, built from that pattern and from the lettering example in the text guide (bold sans-serif, forest green on cream):\n\nA poster. At the top, the words \"OPEN DAILY\" in bold sans-serif capitals, deep forest green on a warm cream background.\n\nThe text guide asks for this: https://docs.ideogram.ai/prompting/text-in-images.\n\n- Anything inside quotes is text to render. Keep spelling and capitals.\n- Name the text early. Text near the start comes out more reliably than text added at the end.\n- Say where it appears.\n- Describe weight, shape and mood. A font-file name does not reproduce that font. A library font is chosen later, on a Studio text layer.\n- Keep the phrase short and the scene simple. If you leave the style out, the model picks one that suits the scene.\n\nIdeogram 4.5 and 4.0 have no Negative prompt field in Image. A line with \"without\" or \"no\" latches onto the word that follows. Describe what you would see, as in https://docs.ideogram.ai/prompting/fix-common-problems.",
          whatYouShouldSee:
            "A short prompt, with the headline in quotes near the start and the place of the text written out.",
          proTip:
            "One short block on this round. Several blocks are described in reading order, from the top of the image down. JSON with text, desc, color_palette and bbox, on 4.5 and 4.0, is in the same text guide and sits outside this first run.",
          imageDescription:
            "Prompt field with \"OPEN DAILY\" in quotes, bold sans-serif and a cream background, Magic Prompt off.",
        },
        {
          title: "Generate and read every letter",
          content:
            "Select Generate. With a model already chosen, the button shows the cost in credits. While it sends the request it reads Starting…. Results appear in Assets: a Generation started notice, with Jump to new generation, and blank tiles until each image finishes. If one fails, you see Could not generate that image. Please try again. Guide: https://docs.ideogram.ai/create/create.\n\nOpen each image and compare the headline with the note, letter by letter, capitals included. Keep the one that spells the text correctly, even when the scene is the simplest. The text guide says it is often easier to keep an image whose text is right and fix the scene around it than the other way around.\n\nIf all four miss for the same reason, that guide's order is: generate again, swap a long or unusual word for a shorter one, and only then fix the text in Studio. https://docs.ideogram.ai/prompting/text-in-images.",
          whatYouShouldSee:
            "Up to four images in Assets. One of them with a headline identical to the note.",
          warning:
            "Export waits until the headline matches. One extra letter invalidates the poster.",
          imageDescription:
            "Assets with four posters; one with OPEN DAILY correct and the rest marked as typos on the note.",
        },
        {
          title: "If a letter fails, use Layerize text",
          content:
            "If the headline already matches, go to Export. If the scene is the one you want and only a word is wrong, open Studio: in More on the sidebar, Studio. Under Start with an image, Browse Library and choose that image. Browse Library opens the file already in Ideogram. https://docs.ideogram.ai/edit/studio.\n\nClick an empty spot so nothing is selected. In the sidebar, select Layerize text. You get a new version on the strip at the bottom, with the text as editable layers. You need to be signed in. The tool is in beta. If it cannot read any text, you see No text layers were created: that happens when the image has no text, or the lettering is stylized, decorative or part of a graphic. The feature page asks for clear, mostly straight lettering, and for a check of the words and the reconstructed background, because they may differ from the original: https://docs.ideogram.ai/edit/text-and-layers and https://ideogram.ai/features/text-layers/.\n\nSelect the layer, click into it and replace the word. Under Type you change font and size; size runs from 8 to 200. Color, Align and Style (bold, italic, underline, strikethrough) sit in the right sidebar. Fonts come from Ideogram's library. Compare with the original thumbnail on the version strip.\n\nIf no text layers are created, adding another empty layer that reads Text does not convert the image's lettering. On a paid plan, Select area paints over the word and you describe what it should read; the rest of the layer stays. Brush size runs from 10 to 80. https://docs.ideogram.ai/edit/studio.",
          whatYouShouldSee:
            "A new version on the strip, with the headline on an editable layer, or the notice No text layers were created.",
          tip: "Duplicate the version with + on the strip before an edit you want to compare. Studio saves on its own: there is no Save button.",
          imageDescription:
            "Studio with Layerize text, the version strip and the OPEN DAILY headline on a text layer.",
        },
        {
          title: "Export and note visibility and use",
          content:
            "On the version strip, leave the version you will deliver selected. At the top right, Export. Pick a File type and a Size. Download saves the original size or a smaller one. If you pick a size larger than the original, the button reads Upscale & download and spends credits. Export opens the same menu as Download on the image page: https://docs.ideogram.ai/edit/studio and https://docs.ideogram.ai/organize-and-share/download.\n\nWithout a paid plan, the menu opens on JPEG at the original size. PNG and WEBP need a paid plan, except a transparent PNG at 1K. Blocked options show a crown icon. With a paid plan, the menu opens on PNG at the original size.\n\nVisibility, from the FAQ on https://ideogram.ai: on the free plan, and on legacy Basic, what you generate is public. On Pay as you go, Plus, Pro, Team and Enterprise, new images stay unpublished until you publish them.\n\nUse, on the same FAQ: Ideogram does not claim ownership of your inputs or outputs, and it assigns to you any rights it acquires in your output. You can use outputs for your own purposes, including commercial purposes. You remain responsible for making sure your content does not violate any laws, third-party rights or the Terms of Service. Someone else's name or logo stays inside that responsibility. The terms link is on that FAQ.",
          whatYouShouldSee:
            "A file in downloads and the brief note with the plan, the date 2026-11-23 and whether use is an internal mock or a delivery.",
          warning:
            "The FAQ on https://ideogram.ai governs this step. Read it before you show the file outside.",
          imageDescription:
            "Export menu with file type and size, and the note «plan / 2026-11-23 / internal mock».",
        },
      ],
      realUseCases: [
        {
          title: "A feed post with a short headline",
          body: "Shape 4:5, one phrase in quotes, Magic Prompt off. You keep the variant whose headline matches and export that version.",
        },
        {
          title: "A packaging or signage mock",
          body: "Ideogram's homepage names packaging, signage and posters with readable text. The claim fits on one line; a long paragraph is set later in a design tool.",
        },
        {
          title: "A name on an exploratory logo",
          body: "Ideogram 3.0 is the model with style presets, style references and a color palette, and the guide points it at logos and brand graphics. The homepage also describes Ideogram Vector for editable SVG. This flow covers the image with a readable name; brand delivery still needs human review.",
        },
      ],
      commonMistakes: [
        {
          title: "Generating from Home on Auto",
          body: "Enter in What will you design? starts the run on Auto. Auto has no Magic Prompt. Enter through Image and pick 4.5 or 4.0.",
        },
        {
          title: "Leaving Magic Prompt on",
          body: "The switch starts on and can translate the prompt into English. Turn it off when the headline must match the note.",
        },
        {
          title: "Typing the ratio inside the prompt",
          body: "4:5 and the image count are set in the controls. The prompt carries the subject, where the text sits and the lettering.",
        },
        {
          title: "Treating the free plan as private",
          body: "On the free plan, generations are public. Pay as you go, Plus, Pro, Team and Enterprise leave new images unpublished until you publish them.",
        },
      ],
      conclusion:
        "The first Ideogram flow writes the headline down, enters Image on Ideogram 4.5 or 4.0, locks the shape, turns Magic Prompt off, puts the words in quotes and reads every letter before Export. A single typo goes through Layerize text in Studio. If the file has no text inside the image, continue with ideogram-vs-midjourney-tipografia (/compare/ideogram-vs-midjourney-tipografia), alternativas-midjourney (/tutorials/alternativas-midjourney) and midjourney-sref-estilo (/tutorials/midjourney-sref-estilo).",
      nextSteps: [
        "To choose Ideogram or Midjourney by whether the copy lives in the JPG, open ideogram-vs-midjourney-tipografia (/compare/ideogram-vs-midjourney-tipografia).",
        "If the still has no text, follow alternativas-midjourney (/tutorials/alternativas-midjourney) and midjourney-prompts-que-funcionan (/tutorials/midjourney-prompts-que-funcionan).",
        "For a directed look with style references in Midjourney, midjourney-sref-estilo (/tutorials/midjourney-sref-estilo).",
        "Another first image flow, with upscale in Leonardo, is leonardo-primer-flujo (/tutorials/leonardo-primer-flujo).",
        "Tool page: /tools/ideogram/.",
      ],
      takeaway:
        "Headline note → Image on 4.5 or 4.0 → shape in the panel → Magic Prompt off → quotes → read every letter → Layerize text if needed → Export and visibility noted.",
    },
  },
};
