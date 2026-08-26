import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "midjourney-prompts-que-funcionan";

export const midjourneyPrompts: Tutorial = {
  id: slug,
  slug,
  category: "image",
  level: "intermediate",
  estimatedTime: 22,
  publishedAt: "2026-08-05",
  lastUpdated: "2026-08-26",
  toolsUsed: ["midjourney", "runway", "chatgpt"],
  relatedTutorials: ["chatgpt-primeros-pasos", "cursor-como-ide-con-ia"],
  tags: ["midjourney", "prompts", "imagen", "dirección-de-arte", "2026"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Grid 2×2 de Midjourney del mismo sujeto con cámara distinta",
      caption: "El prompt describe el plano. El «mood» se deja para el café.",
      hint: "Hero 1600×900: grid de Midjourney, mismo producto, cuatro luces/cámaras, --ar visible en el prompt.",
    },
    en: {
      alt: "Midjourney 2×2 grid of the same subject with different cameras",
      caption: "The prompt describes the shot. Leave «mood» for coffee.",
      hint: "Hero 1600×900: Midjourney grid, same product, four lights/cameras, --ar visible in the prompt.",
    },
  }),
  copy: {
    es: {
      title: "Cómo dirigir una imagen en Midjourney en 2026 (sin prompts mágicos)",
      metaTitle: "Cómo dirigir imágenes en Midjourney en 2026",
      metaDescription:
        "Sujeto, plano, luz y lo que no quieres. Aspect ratio y un solo eje de variación. Un método para stills que se pueden usar, no para adjetivos apilados.",
      excerpt:
        "Deja los «cinematic ultra realistic masterpiece». Describe el plano, fija el --ar y cambia una sola variable por iteración.",
      intro:
        "Midjourney no adivina el brief de tu campaña. Si le pides «un anuncio de café cinematográfico, 8k, award winning», te devolverá un café genérico con humo y madera. En 22 minutos aprendes a escribir un plano, a leer un grid y a iterar sin quemar el cupo de GPU.",
      problem:
        "Los prompts «mágicos» (listas de 40 adjetivos copiados de Twitter) empujan el modelo hacia el mismo look de catálogo. El problema no es el modelo: es que no has decidido sujeto, cámara, luz ni formato. Sin eso, Midjourney rellena con su estética por defecto.",
      whatYouWillLearn: [
        "Escribir un prompt de plano (sujeto + cámara + luz + exclusiones)",
        "Elegir --ar según el sitio real de la imagen",
        "Usar stylize y referencias sin perder el sujeto",
        "Variar un solo eje (luz o cámara) en vez de reescribirlo todo",
        "Saber cuándo parar y cuándo pasar a edición o a Runway",
      ],
      prerequisites: [
        "Cuenta de Midjourney de pago (Basic vale para este ejercicio)",
        "Acceso a la web de Midjourney o a Discord; usaremos la web",
        "Un encargo real: un producto, un espacio o un personaje. No «algo bonito»",
        "El formato de salida (stories 9:16, feed 4:5, hero 16:9, print A4)",
        "22 minutos y la disciplina de no pulsar Vary All a lo loco",
      ],
      steps: [
        {
          title: "Fija el encargo en una frase que un director de foto entendería",
          content:
            "En un bloc, no en Midjourney: «Lata de café de 250 g, aluminio mate, sobre mesa de acero, plano tres cuartos a la altura de la lata, luz de ventana a la izquierda, fondo fuera de foco, sin logos ajenos ni manos.» Si no puedes decirlo en voz alta, el prompt va a ser una lista de adjetivos. El sujeto tiene que ser uno. «Lifestyle de marca premium con gente happy» no es un plano.",
          whatYouShouldSee:
            "Una frase de 20–40 palabras con sujeto, superficie, ángulo, luz y al menos una exclusión. Aún no has generado nada.",
          tip: "Si el cliente pidió «moderno y cálido», tradúcelo a luz (tungsteno, hora dorada) y a material (roble, lino). No lo dejes en el adjetivo.",
          warning:
            "No uses fotos de personas reales ni marcas ajenas como referencia si no tienes derecho. Midjourney no te limpia los problemas legales.",
          imageDescription:
            "Nota o brief de una frase junto a la home vacía de Midjourney, sin grid todavía.",
        },
        {
          title: "Monta el prompt en este orden (y para de apilar estilo)",
          content:
            "Escribe en este orden, en inglés o en español —el modelo entiende ambos; sé consistente—:\n\n[sujeto concreto] , [plano y ángulo] , [luz] , [fondo] , [material / lente si te importa] --ar 4:5\n\nEjemplo: «matte aluminum 250g coffee tin, three-quarter shot at tin height, soft window light from the left, steel table, background falloff, 50mm, no extra logos --ar 4:5»\n\nNo añadas cinematic, ultra detailed, masterpiece, 8k, Unreal Engine. Esos tokens empujan al look de concurso. Si quieres película, nombra película o fotógrafo de forma honesta y legal, o mejor describe grano, contraste y temperatura.",
          whatYouShouldSee:
            "Un prompt de 1–3 líneas + --ar. Cero listas de 15 adjetivos. Aún puedes no haber pulsado Generate.",
          tip: "El --ar se decide por el destino: 9:16 stories, 4:5 feed, 16:9 web, 1:1 icono. Generar en 1:1 y recortar después tira la composición.",
          warning:
            "Si pones texto en el prompt («packaging that says ORÍGENES»), espera que falle. Midjourney no es un motor de tipografía. El copy se añade en diseño.",
          proTip:
            "Un --stylize bajo (p. ej. 50–100) obedece más el plano. Alto (300+) «embellece» y se come el brief. Empieza bajo.",
          imageDescription:
            "Caja de prompt de Midjourney con el ejemplo de la lata, --ar 4:5 y --stylize 80 visibles. Sin grid.",
        },
        {
          title: "Genera un grid y elige una dirección, no «la más bonita»",
          content:
            "Lanza una generación. Vas a ver cuatro stills. No votes el que más brilla: vota el que respeta sujeto, ángulo y luz. Si los cuatro son un café de stock con humo, tu prompt sigue siendo un mood, no un plano: vuelve al paso 1 y concreta el ángulo («from above, tin centered, lid facing camera»). Anota qué imagen eliges y por qué en media línea («la 2: la luz de la izquierda se lee»).",
          whatYouShouldSee:
            "Un grid 2×2. Una imagen marcada (U o clic en la web) y una nota tuya de por qué, no un «me gusta».",
          tip: "Si el sujeto se deforma (lata aplastada, etiqueta ilegible a propósito), no «arregles» con más adjetivos: simplifica el sujeto o cambia el ángulo.",
          warning:
            "Vary Strong / Vary All en las cuatro a la vez es la forma más rápida de gastar GPU y no aprender nada. Una rama por vez.",
          imageDescription:
            "Grid 2×2 de la lata, una celda seleccionada, el prompt original visible encima.",
        },
        {
          title: "Itera un solo eje: luz o cámara, no los dos",
          content:
            "A partir de la imagen ganadora, lanza una variación o un remix cambiando una sola cosa. Ejemplo: «same shot, light now from behind, rim on the tin edge» o «same light, camera 20 cm higher, more table in frame». No cambies producto, luz, cámara y estilo a la vez. Si usas una imagen de referencia (--sref o image prompt), que sea para color/textura, no para copiar un anuncio ajeno entero.",
          whatYouShouldSee:
            "Un segundo grid que se parece al primero en el sujeto y cambia solo el eje que pediste. Si cambió todo, el remix estaba demasiado suelto.",
          tip: "Cuando algo funciona, guarda el prompt exacto (parámetros incluidos) en una nota. Ese es tu «sistema», no el JPG suelto.",
          warning:
            "Las referencias de estilo ajenas pueden arrastrar una marca que no es tuya. Si el still «parece esa campaña de X», no lo uses en cliente.",
          imageDescription:
            "Dos grids lado a lado: el original y el remix con solo la luz cambiada. Prompt de remix visible.",
        },
        {
          title: "Revisa fallos típicos antes de exportar",
          content:
            "Zoom al 100% en: bordes del producto, sombras imposibles, texto fantasma, manos si las hay, reflejos que copian un logo. Si el still es para un anuncio, ábrelo en un mock del formato real (un frame de stories, un hero de web). Un still que «pinta bien» en el grid a 400 px a menudo muere a tamaño real. Si el problema es local (una abolladura, un rincón), usa el editor regional / inpaint en esa zona. Si el problema es el concepto, no parches: vuelve al plano.",
          whatYouShouldSee:
            "La imagen ganadora vista grande, con 1–3 fallos anotados o un inpaint ya hecho en una zona. El formato real (9:16 etc.) respetado.",
          tip: "Exporta en el tamaño que Midjourney te dé y no reescales a lo bruto para un print. Si necesitas más resolución, el upscale nativo primero.",
          warning:
            "Un still «casi» con un logo malinventado no se arregla en Photoshop en dos minutos. Mejor un plano sin tipografía.",
          imageDescription:
            "Still a tamaño grande con un recuadro sobre un defecto (borde, texto fantasma) y, si aplica, el panel de inpaint abierto.",
        },
        {
          title: "Cierra: moodboard de 8, no 80, y decide el siguiente oficio",
          content:
            "Quédate con 6–8 stills que cuenten el mismo encargo (mismo sujeto, distinta luz o ángulo). Eso es un moodboard que se puede presentar. No un folder de 80 «por si acaso». Si el siguiente paso es motion, lleva a Runway UN still que ya funciona y una sola acción. Si el siguiente paso es copy, no le pidas a Midjourney el titular: vuelve a ChatGPT o Claude con el still como contexto visual, no como fuente de hechos.",
          whatYouShouldSee:
            "Una carpeta o tablero con 6–8 imágenes y los prompts pegados. Cero «cinematic 8k» en esos prompts.",
          tip: "Nombra los archivos por plano (`lata-34-ventana-izq`), no por `midjourney-final-FINAL2`.",
          proTip:
            "Si el equipo pide «el mismo pero más wow», traduce wow a una variable (contraste, altura de cámara, negativo). Si no pueden nombrarla, el brief aún no está listo.",
          imageDescription:
            "Tablero de 6–8 stills coherentes y un still marcado «para Runway» o «para diseño».",
        },
      ],
      realUseCases: [
        {
          title: "Moodboard de producto en una tarde",
          body: "Un SKU, tres luces, dos ángulos, --ar del feed. 12 generaciones, 8 keepers. El cliente discute luz, no «si se ve premium».",
        },
        {
          title: "Concepto de espacio (hotel, tienda, set)",
          body: "Arquitectura + hora del día + una figura humana de espaldas como escala. Sin caras reconocibles. El plano se presenta en 16:9.",
        },
        {
          title: "Base para un clip de 5 segundos",
          body: "El still ya tiene dirección de cámara. En Runway pides un único gesto (vapor, un giro de 20°). No «un anuncio completo».",
        },
      ],
      commonMistakes: [
        {
          title: "El prompt-novela de 80 palabras",
          body: "Cada adjetivo extra es un voto a favor del look por defecto. Si no cambia el plano, sobra.",
        },
        {
          title: "Generar en 1:1 «y ya recortamos»",
          body: "La composición nace en el --ar. Recortar un 1:1 a 9:16 te come el sujeto.",
        },
        {
          title: "Vary All como método",
          body: "Es un generador de ruido. Una variable por ronda es más lento el primer día y más barato el resto del mes.",
        },
        {
          title: "Pedir tipografía nítida al modelo",
          body: "El pack, el titular y el legal se hacen en diseño. Midjourney aporta el still, no el arte final.",
        },
      ],
      conclusion:
        "Dirigir en Midjourney es decidir un plano y defenderlo en el grid. Los prompts mágicos solo aceleran el camino hacia el mismo café de stock. Si puedes explicar por qué ganó la imagen 2 (luz, ángulo, exclusión), ya no estás «tirando generaciones»: estás haciendo dirección de arte.",
      nextSteps: [
        "Repite el mismo sujeto mañana con otra luz. Compara los dos prompts, no solo los JPG.",
        "Si necesitas motion, abre Runway con un solo still y una acción.",
        "Si el brief de campaña aún es «moderno y cálido», vuelve al tutorial de ChatGPT y traduce eso a plano antes de gastar GPU.",
      ],
      takeaway:
        "Sujeto, plano, luz, exclusión, --ar. Una variable por iteración. El resto es humo de stock.",
    },
    en: {
      title: "How to direct a Midjourney image in 2026 (no magic prompts)",
      metaTitle: "How to direct Midjourney images in 2026",
      metaDescription:
        "Subject, shot, light and what you do not want. Aspect ratio and one variation axis. A method for usable stills, not stacked adjectives.",
      excerpt:
        "Drop «cinematic ultra realistic masterpiece». Describe the shot, lock --ar and change one variable per iteration.",
      intro:
        "Midjourney will not guess your campaign brief. Ask for «a cinematic coffee ad, 8k, award winning» and you get generic coffee, steam and wood. In 22 minutes you learn to write a shot, read a grid and iterate without burning the GPU allowance.",
      problem:
        "«Magic» prompts (40-adjective lists from social) push the model toward the same catalog look. The model is not the problem: you have not decided subject, camera, light or format. Without that, Midjourney fills in its default aesthetic.",
      whatYouWillLearn: [
        "Write a shot prompt (subject + camera + light + exclusions)",
        "Pick --ar for the real destination of the image",
        "Use stylize and references without losing the subject",
        "Vary one axis (light or camera) instead of rewriting everything",
        "Know when to stop and when to move to retouch or Runway",
      ],
      prerequisites: [
        "A paid Midjourney account (Basic is enough for this exercise)",
        "The Midjourney web app or Discord — we will use the web app",
        "A real job: a product, a space or a character. Not «something pretty»",
        "The output format (9:16 stories, 4:5 feed, 16:9 hero, A4 print)",
        "22 minutes and the discipline not to smash Vary All",
      ],
      steps: [
        {
          title: "Lock the job in a sentence a DP would understand",
          content:
            "On a pad, not in Midjourney: «250 g coffee tin, matte aluminum, on a steel table, three-quarter shot at tin height, window light from the left, background out of focus, no extra logos, no hands.» If you cannot say it out loud, the prompt will become an adjective list. There is one subject. «Premium lifestyle with happy people» is not a shot.",
          whatYouShouldSee:
            "A 20–40 word sentence with subject, surface, angle, light and at least one exclusion. You have not generated anything yet.",
          tip: "If the client asked for «modern and warm», translate it into light (tungsten, golden hour) and material (oak, linen). Do not leave the adjective in the prompt.",
          warning:
            "Do not use photos of real people or someone else’s brand as a reference if you do not have the right. Midjourney will not clean up the legal mess.",
          imageDescription:
            "A one-sentence brief next to Midjourney’s empty home, no grid yet.",
        },
        {
          title: "Build the prompt in this order (then stop stacking style)",
          content:
            "Write in this order — English or Spanish, be consistent:\n\n[concrete subject] , [shot and angle] , [light] , [background] , [material / lens if it matters] --ar 4:5\n\nExample: «matte aluminum 250g coffee tin, three-quarter shot at tin height, soft window light from the left, steel table, background falloff, 50mm, no extra logos --ar 4:5»\n\nDo not add cinematic, ultra detailed, masterpiece, 8k, Unreal Engine. Those tokens shove the default contest look. If you want film, name grain, contrast and color temperature — or a reference you actually have rights to.",
          whatYouShouldSee:
            "A 1–3 line prompt + --ar. No 15-adjective list. You can still wait before hitting Generate.",
          tip: "Pick --ar from the destination: 9:16 stories, 4:5 feed, 16:9 web, 1:1 icon. Shooting 1:1 and cropping later kills the composition.",
          warning:
            "If you put type in the prompt («packaging that says ORIGINS»), expect failure. Midjourney is not a type engine. Copy happens in design.",
          proTip:
            "Low --stylize (e.g. 50–100) obeys the shot. High (300+) «beautifies» and eats the brief. Start low.",
          imageDescription:
            "Midjourney prompt box with the tin example, --ar 4:5 and --stylize 80 visible. No grid.",
        },
        {
          title: "Generate a grid and pick a direction, not «the prettiest»",
          content:
            "Run one generation. You get four stills. Do not pick the shiniest: pick the one that keeps subject, angle and light. If all four are stock coffee with steam, your prompt is still a mood, not a shot — go back to step 1 and lock the angle («from above, tin centered, lid facing camera»). Write half a line on why you picked it («#2: you can read the left-hand light»).",
          whatYouShouldSee:
            "A 2×2 grid. One image marked (U or a web click) and a note from you, not a «I like it».",
          tip: "If the subject warps (crushed tin, deliberately unreadable label), do not «fix» it with more adjectives: simplify the subject or change the angle.",
          warning:
            "Vary Strong / Vary All on all four is the fastest way to spend GPU and learn nothing. One branch at a time.",
          imageDescription:
            "2×2 tin grid, one cell selected, original prompt visible above.",
        },
        {
          title: "Iterate one axis: light or camera, not both",
          content:
            "From the winning image, run a variation or remix changing one thing. Example: «same shot, light now from behind, rim on the tin edge» or «same light, camera 20 cm higher, more table in frame». Do not change product, light, camera and style at once. If you use a reference (--sref or image prompt), use it for color/texture, not to clone someone else’s ad.",
          whatYouShouldSee:
            "A second grid that still has the same subject and only changes the axis you asked for. If everything changed, the remix was too loose.",
          tip: "When something works, save the exact prompt (parameters included) in a note. That is your system, not the loose JPG.",
          warning:
            "Other people’s style references can drag a brand that is not yours. If the still «looks like X’s campaign», do not use it for a client.",
          imageDescription:
            "Two grids side by side: the original and a remix with only the light changed. Remix prompt visible.",
        },
        {
          title: "Check the usual failures before you export",
          content:
            "Zoom to 100% on: product edges, impossible shadows, ghost type, hands if any, reflections that clone a logo. If the still is for an ad, drop it into a mock of the real format (a stories frame, a web hero). A still that «paints well» on a 400 px grid often dies at real size. If the problem is local (a dent, a corner), use regional edit / inpaint. If the problem is the idea, do not patch: go back to the shot.",
          whatYouShouldSee:
            "The winning image viewed large, with 1–3 faults noted or an inpaint already done on one zone. Real format (9:16 etc.) respected.",
          tip: "Export at the size Midjourney gives you. Do not brute-upscale for print. If you need more resolution, native upscale first.",
          warning:
            "An «almost» still with a hallucinated logo will not be a two-minute Photoshop fix. Prefer a shot with no type.",
          imageDescription:
            "Large still with a box on a defect (edge, ghost type) and, if relevant, the inpaint panel open.",
        },
        {
          title: "Close: an 8-image moodboard, not 80, and pick the next job",
          content:
            "Keep 6–8 stills that tell the same job (same subject, different light or angle). That is a presentable moodboard. Not an 80-file «just in case» folder. If the next step is motion, take ONE working still and ONE action into Runway. If the next step is copy, do not ask Midjourney for the headline: go back to ChatGPT or Claude with the still as visual context, not as a source of facts.",
          whatYouShouldSee:
            "A folder or board with 6–8 images and the prompts pasted. Zero «cinematic 8k» in those prompts.",
          tip: "Name files by shot (`tin-34-window-left`), not `midjourney-final-FINAL2`.",
          proTip:
            "If the team asks for «the same but more wow», translate wow into a variable (contrast, camera height, negative space). If they cannot name it, the brief is not ready.",
          imageDescription:
            "A board of 6–8 coherent stills and one still marked «for Runway» or «for design».",
        },
      ],
      realUseCases: [
        {
          title: "A product moodboard in an afternoon",
          body: "One SKU, three lights, two angles, feed --ar. 12 generations, 8 keepers. The client argues about light, not whether it «looks premium».",
        },
        {
          title: "A space concept (hotel, store, set)",
          body: "Architecture + time of day + one human figure from behind for scale. No recognizable faces. Present the shot in 16:9.",
        },
        {
          title: "A base for a 5-second clip",
          body: "The still already has camera direction. In Runway you ask for one gesture (steam, a 20° turn). Not «a full ad».",
        },
      ],
      commonMistakes: [
        {
          title: "The 80-word novel prompt",
          body: "Every extra adjective is a vote for the default look. If it does not change the shot, cut it.",
        },
        {
          title: "Shooting 1:1 «and we’ll crop»",
          body: "Composition is born in --ar. Cropping 1:1 to 9:16 eats the subject.",
        },
        {
          title: "Vary All as a method",
          body: "It is a noise generator. One variable per round is slower on day one and cheaper the rest of the month.",
        },
        {
          title: "Asking the model for sharp type",
          body: "The pack, the headline and the legal line are design. Midjourney supplies the still, not the final art.",
        },
      ],
      conclusion:
        "Directing in Midjourney is deciding a shot and defending it on the grid. Magic prompts only speed the path to the same stock coffee. If you can explain why image 2 won (light, angle, exclusion), you are no longer «rolling generations». You are doing art direction.",
      nextSteps: [
        "Repeat the same subject tomorrow with a different light. Compare the two prompts, not just the JPGs.",
        "If you need motion, open Runway with one still and one action.",
        "If the campaign brief is still «modern and warm», go back to the ChatGPT tutorial and translate that into a shot before you spend GPU.",
      ],
      takeaway:
        "Subject, shot, light, exclusion, --ar. One variable per iteration. Everything else is stock steam.",
    },
  },
};
