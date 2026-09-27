import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "midjourney-sref-estilo";

export const midjourneySrefEstilo: Tutorial = {
  id: slug,
  slug,
  category: "image",
  level: "intermediate",
  estimatedTime: 18,
  publishedAt: "2026-09-27",
  lastUpdated: "2026-09-27",
  toolsUsed: ["midjourney"],
  relatedTutorials: [
    "midjourney-variaciones-upscale",
    "midjourney-prompts-que-funcionan",
    "alternativas-midjourney",
    "runway-primer-clip",
  ],
  tags: ["midjourney", "sref", "style-reference", "dirección-de-arte", "referencias"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Barra Imagine de Midjourney con una imagen en Style Reference y un prompt de plano con --ar",
      caption: "El --sref trae la estética. El texto trae el plano.",
      hint: "Hero 1600×900: web Create, imagen en slot Style Reference, prompt con sujeto y luz, --ar visible, grid 2×2 generándose.",
    },
    en: {
      alt: "Midjourney Imagine bar with an image in Style Reference and a shot prompt with --ar",
      caption: "--sref brings the look. Text brings the shot.",
      hint: "Hero 1600×900: web Create, image in Style Reference slot, subject and light prompt, --ar visible, 2×2 grid generating.",
    },
  }),
  copy: {
    es: {
      title: "Midjourney: estilo con --sref (Style Reference)",
      metaTitle: "Midjourney --sref: guía de Style Reference 2026",
      metaDescription:
        "Qué hace --sref frente a image prompt y Character Reference. Subir referencia en web o Discord, elegir imagen de estilo, combinar con un plano y cerrar composición.",
      excerpt:
        "Style Reference copia la estética (color, textura, luz), no el sujeto. Un flujo repetible: buena ref → plano concreto → grid listo para variar o upscale.",
      intro:
        "Cuando el brief pide «como esta ilustración» o «misma paleta que este póster», apilar adjetivos en el prompt suele devolver un look genérico. Midjourney Style Reference (`--sref`) aplica la estética de una imagen —paleta, grano, pincelada, contraste— sin obligarte a copiar sus objetos ni sus personas. Es distinto de un Image Prompt (influencia composición y contenido) y de Character Reference / Omni Reference (mantener un personaje u objeto). La documentación oficial está en https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference y en Creating on Web: https://docs.midjourney.com/hc/en-us/articles/33390732264589-Creating-on-Web. En unos 18 minutos montas un flujo repetible: elegir ref, adjuntarla, escribir un plano claro y cerrar un grid antes de variar o upscale (midjourney-variaciones-upscale).",
      problem:
        "Mucha gente arrastra cualquier moodboard de Pinterest a Style Reference y luego se queja de «fugas» de sujeto, o mezcla --sref con una foto de producto como image prompt y obtiene un híbrido ilegible. Otra trampa: describir el estilo en diez adjetivos cuando una sola referencia limpia haría el trabajo —o al revés, usar --sref para algo que podrías decir en una línea («flat vector, two colors») y pagar GPU por poco control. Sin separar estética de plano, cada grid es un experimento aleatorio.",
      whatYouWillLearn: [
        "Diferenciar Style Reference (--sref) de Image Prompt y de referencias de personaje (Character / Omni)",
        "Elegir una imagen de estilo clara (no un collage caótico)",
        "Adjuntar Style Reference en la web y con --sref en Discord",
        "Combinar --sref con un prompt de plano (--ar, sujeto, luz)",
        "Ajustar --sw cuando hace falta y saber cuándo omitir --sref",
        "Cerrar una composición en grid para pasar a variaciones o upscale",
      ],
      prerequisites: [
        "Cuenta de Midjourney de pago con acceso a https://www.midjourney.com o Discord",
        "Un encargo con sujeto definido — idealmente tras midjourney-prompts-que-funcionan",
        "Una imagen de estilo que puedas usar (tuya, licenciada o dominio público); no marcas ajenas sin permiso",
        "18 minutos y un bloc para copiar el prompt final con parámetros",
      ],
      steps: [
        {
          title: "Separa tres jobs: estética (--sref), contenido (image prompt), identidad (Character / Omni)",
          content:
            "Style Reference responde a «¿cómo se ve?»: color, textura, tipo de luz, medio (acuarela, 3D suave, flash editorial). No promete el mismo personaje ni la misma composición. Image Prompt (URL al inicio del prompt en Discord, slot Image Prompt en web — ver https://docs.midjourney.com/hc/en-us/articles/32040250122381-Image-Prompts) empuja composición y contenido hacia la foto de referencia. Character Reference (`--cref` en Discord en flujos clásicos) y Omni Reference (`--oref`, slot Omni en web — https://docs.midjourney.com/hc/en-us/articles/36285124473997-Omni-Reference) sirven para meter la misma persona u objeto en escenas nuevas; en V8 muchos flujos pasan por Edit Model en la web, pero la regla mental sigue: identidad ≠ estilo. Si solo quieres paleta y grano, usa Style Reference, no arrastres la foto del modelo a Image Prompt «por si acaso».",
          whatYouShouldSee:
            "Una nota con tres columnas: «estilo → Style Reference / --sref», «plano/contenido → texto + a veces Image Prompt», «misma cara/objeto → Omni/Character/Edit Model». Nada generado aún.",
          warning:
            "Style Reference necesita texto en el prompt; no basta con subir la imagen sin describir el plano (documentación de Style Reference).",
          imageDescription:
            "Esquema de tres slots en la barra Imagine: Style Reference, Image Prompt, Edit Model/Omni, cada uno etiquetado con su job.",
        },
        {
          title: "Elige una referencia de estilo que se pueda leer en dos segundos",
          content:
            "Buena ref: una ilustración, póster o still con estilo homogéneo — paleta limitada, misma textura en todo el encuadre, sin mezcla de tres estilos distintos. Mala ref: collage de cuatro fotos, captura con UI y texto pequeño, o foto donde el «estilo» es solo el sujeto (una persona concreta). Recorta o usa un crop que muestre solo la estética (fondo, pincelada, grano). Formatos válidos: .png, .webp, .jpg según docs. Si la ref es demasiado literal (producto hero muy reconocible), Midjourney puede filtrar parte del objeto aunque --sref esté pensado para estética; en V7+ el sistema filtra mejor el subject leakage (anuncio en https://updates.midjourney.com/style-references-for-v7/), pero una ref limpia sigue siendo más barata que re-generar diez grids.",
          whatYouShouldSee:
            "Un archivo único (o un código --sref numérico del Style Creator) anotado como «ref de estilo». Sin mezclar cinco URLs distintas en la primera prueba.",
          tip: "Empieza con una sola --sref. Mezclar varias refs tiene sentido cuando ya dominas --sw; al principio confunde el diagnóstico.",
          imageDescription:
            "Dos miniaturas: izquierda ref mala (collage), derecha ref buena (una acuarela homogénea) con check verde.",
        },
        {
          title: "Adjunta Style Reference en la web (Create)",
          content:
            "Abre Create en https://www.midjourney.com. Pulsa el icono de imagen junto a la barra Imagine, sube tu archivo o elige uno de Uploads (máx. 10 MB según Creating on Web). Arrastra la imagen al slot Style Reference — no a Image Prompt ni a Edit Model. Escribe ya un prompt mínimo de plano en la barra: «empty ceramic vase on shelf, eye-level, soft daylight from left, plain wall --ar 4:5». Genera un grid 2×2. La ref no sustituye sujeto ni cámara: deberías reconocer tu plano con la «piel» visual de la referencia. Si quieres un código interno en lugar de imagen, Style Creator en la web genera códigos `--sref` numéricos (https://docs.midjourney.com/hc/en-us/articles/41308374558221-Style-Creator); el flujo es el mismo: código o imagen en estilo, texto para el plano.",
          whatYouShouldSee:
            "Miniatura de la ref en el slot Style Reference bajo la barra Imagine. Grid 2×2 con el mismo encargo pero look cercano a la ref.",
          tip: "Guarda el job en Organize cuando una celda se acerque; reutilizarás el mismo prompt + ref en el paso de cierre.",
          imageDescription:
            "Captura web: slot Style Reference ocupado, prompt de jarrón, grid 2×2 con paleta similar a la miniatura.",
        },
        {
          title: "Mismo flujo en Discord con --sref URL",
          content:
            "En Discord, `/imagine` con la imagen accesible por URL pública (puedes subirla a Discord y copiar enlace si hace falta). Estructura: [prompt de plano] --sref https://… --ar 4:5. Varias refs: separa URLs con espacio; pesos por URL con sintaxis `URL1::2 URL2::1` (documentación de Style Reference). No pegues la URL solo al inicio — eso es Image Prompt, no Style Reference. Compara un grid web y uno Discord con el mismo prompt y ref para verificar que tu equipo puede repetir el flujo en cualquier superficie.",
          whatYouShouldSee:
            "Mensaje de bot con prompt visible, --sref y --ar en la cola. Grid coherente con la prueba web.",
          warning:
            "URLs rotas o CDN privado = ref ignorada o job fallido. Comprueba que el enlace abre la imagen en incógnito.",
          imageDescription:
            "Discord: prompt completo con --sref URL y --ar 4:5, grid resultante debajo.",
        },
        {
          title: "Combina --sref con un plano cerrado (sujeto, luz, --ar)",
          content:
            "Reescribe el prompt como en midjourney-prompts-que-funcionan: sujeto concreto, ángulo, luz, exclusiones, luego parámetros. Ejemplo con ref de acuarela: «single pear on white plate, slight cast shadow, eye-level, one window soft light, no hands, no text --ar 4:5 --stylize 80 --sref [tu URL o slot web]». El --stylize bajo mantiene obediencia al plano; el --sref aporta la estética. No repitas en texto «watercolor dreamy artistic» si la ref ya es acuarela — compites contigo mismo. Si el estilo choca con el plano (ref de flash duro + prompt de niebla suave), gana el conflicto: afina luz en texto o cambia ref, no encadenes diez generaciones.",
          whatYouShouldSee:
            "Cuatro celdas que comparten look de la ref pero respetan sujeto y encuadre del prompt. Al menos una celda usable sin reescribir todo.",
          tip: "Fija --ar antes de generar. Style Reference no arregla un formato equivocado.",
          proTip:
            "Itera un solo eje: misma ref y prompt, cambia solo luz o altura de cámara en una segunda generación.",
          imageDescription:
            "Grid donde la pera y el plato son claros y la textura de pintura viene de la ref; prompt con --stylize visible.",
        },
        {
          title: "Ajusta --sw solo cuando la ref domina de más o de menos",
          content:
            "Style weight `--sw` va de 0 a 1000; por defecto 100 (Parameter List y Style Reference en docs.midjourney.com). Subir --sw (p. ej. 200–350) acerca el look a la ref cuando el plano «se come» la estética. Bajar --sw (p. ej. 40–80) cuando la ref aplasta el sujeto o satura colores. En Discord: `--sref URL --sw 250`. En web, añade `--sw` al final del prompt si no hay control deslizante visible. No toques --sv (versión del algoritmo sref) salvo que reutilices códigos antiguos y la doc pida `--sv 4`. Si con --sw 100 ya está equilibrado, no optimices: pasa al cierre.",
          whatYouShouldSee:
            "Dos grids comparables: uno con --sw bajo (más obediencia al plano) y uno con --sw alto (más parecido a la ref). Nota tuya de cuál usas en producción.",
          warning:
            "--sw extremo (800+) con ref muy contrastada puede destrozar pieles o producto; prueba saltos de 50–100, no de 500.",
          imageDescription:
            "Par de grids lado a lado, etiquetas --sw 80 vs --sw 280, misma ref y prompt.",
        },
        {
          title: "Cuándo NO usar --sref (y cuándo basta con texto)",
          content:
            "Omite Style Reference si: (1) puedes nombrar el estilo en una frase precisa y no necesitas marca visual externa («isometric line icon, two flat colors, no gradient»); (2) la ref es una foto aleatoria donde no separas estilo de sujeto; (3) mezclas dos refs de estéticas opuestas «para ver qué pasa»; (4) el cliente prohibió referencias externas. Usa texto + --stylize bajo en su lugar. Si el problema es carácter recurrente, no subas --sw en --sref: cambia a Omni/Character/Edit Model según tu versión. Si el problema es copiar un layout de anuncio, un Image Prompt legalmente limpio + plano escrito suele ser más honesto que una ref de estilo sacada de campaña ajena.",
          whatYouShouldSee:
            "Checklist marcada: «¿puedo decir el estilo en una línea?» «¿ref homogénea?» «¿es identidad o estética?». Decisión escrita: sref sí/no.",
          tip: "alternativas-midjourney ayuda si Midjourney no es la herramienta para tu tipo de estilo fijo (p. ej. UI vectorial estricta).",
          imageDescription:
            "Bloc con checklist y una generación solo-texto exitosa marcada «sin --sref».",
        },
        {
          title: "Cierra composición y enlaza con variaciones / upscale",
          content:
            "Elige la celda ganadora y escribe en una frase por qué gana («celda 3: misma paleta que la ref, pera centrada, sombra legible»). Copia el prompt completo con --sref (o ref web) y --sw si lo usaste. Ahí paras de tocar estilo salvo brief nuevo. Siguiente paso: midjourney-variaciones-upscale — Vary Subtle para afinar detalle, Upscale Subtle una vez con composición cerrada. Para motion, runway-primer-clip con el JPG HD; el --sref ya cumplió su papel en el still. No re-subas la misma ref «por si acaso» en Runway: anima el frame aprobado.",
          whatYouShouldSee:
            "Prompt guardado, ref anotada, celda marcada en el grid sin upscale todavía (o con un upscale si ya cerraste). Sesión lista para variar.",
          proTip:
            "Nombre de archivo: `pera-acuarela-sref-sw100-v3.jpg` — incluye ref/sw en el nombre si repites encargos similares.",
          imageDescription:
            "Grid con celda 3 resaltada, prompt copiado en bloc, flecha hacia tutorial de variaciones/upscale.",
        },
      ],
      realUseCases: [
        {
          title: "Campaña con paleta de marca fija",
          body: "Un still de referencia interno (no logo) en Style Reference + producto descrito en texto. --sw 120 si la marca es muy saturada. Cierras grid antes de upscale.",
        },
        {
          title: "Ilustración editorial",
          body: "Ref de pincelada homogénea, prompt con sujeto periodístico concreto. Sin Image Prompt del artículo ajeno. Vary Subtle solo en la celda ganadora.",
        },
        {
          title: "Equipo en Discord",
          body: "Director pega URL de ref aprobada y plantilla de prompt con --ar. Mismo --sref en hilo que en web Create del diseñador.",
        },
      ],
      commonMistakes: [
        {
          title: "Usar moodboard collage como única --sref",
          body: "Cuatro estilos compiten. Midjourney promedia ruido. Una ref, un look.",
        },
        {
          title: "Confundir Style Reference con Image Prompt",
          body: "URL al inicio en Discord copia composición, no solo estética. --sref va al final con el plano escrito.",
        },
        {
          title: "Pedir estilo en adjetivos y en --sref a la vez",
          body: "Redundancia empuja el default «bonito». Deja que la ref hable o quita adjetivos.",
        },
        {
          title: "Subir --sw para arreglar un prompt vago",
          body: "Si el sujeto no aparece, no es falta de --sw: es un plano flojo. Vuelve a midjourney-prompts-que-funcionan.",
        },
        {
          title: "Upscale antes de cerrar el look",
          body: "Gastas GPU en un estilo que aún no calza. Cierra celda en grid SD, luego variaciones/upscale.",
        },
      ],
      conclusion:
        "Style Reference (`--sref`) transfiere la estética de una imagen o código, no sustituye un plano escrito ni sirve para clonar personajes (eso es Omni/Character/Edit Model). El flujo que funciona: ref homogénea → slot Style Reference o --sref URL → prompt de sujeto, luz y --ar → ajuste fino de --sw si hace falta → cerrar celda → variar o upscale una vez. Si puedes describir el estilo en una línea clara, a veces es mejor texto bajo y cero ref.",
      nextSteps: [
        "Afina el plano base en midjourney-prompts-que-funcionan si el sujeto sigue sin leerse.",
        "Explora Vary y Upscale en midjourney-variaciones-upscale con la celda que cerraste aquí.",
        "Anima el still HD en runway-primer-clip cuando la composición esté fija.",
      ],
      takeaway:
        "Estética en --sref. Plano en texto. --sw solo si hace falta. Cierra grid antes de upscale.",
    },
    en: {
      title: "Midjourney: style with --sref (Style Reference)",
      metaTitle: "Midjourney --sref: Style Reference guide 2026",
      metaDescription:
        "What --sref does vs image prompts and Character Reference. Attach style on web or Discord, pick a clean reference, combine with a shot prompt, lock composition.",
      excerpt:
        "Style Reference copies the look (color, texture, light), not the subject. Repeatable flow: good ref → concrete shot → grid ready to vary or upscale.",
      intro:
        "When the brief says «like this illustration» or «same palette as this poster», stacking adjectives often returns a generic catalog look. Midjourney Style Reference (`--sref`) applies an image’s aesthetic — palette, grain, brushwork, contrast — without forcing you to copy its objects or people. That is different from an Image Prompt (composition and content) and from Character / Omni Reference (same person or object across shots). Official docs: https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference and Creating on Web: https://docs.midjourney.com/hc/en-us/articles/33390732264589-Creating-on-Web. In about 18 minutes you build a repeatable flow: pick a ref, attach it, write a clear shot, lock a grid before vary or upscale (midjourney-variaciones-upscale).",
      problem:
        "People drag random Pinterest boards into Style Reference and complain about subject leakage, or mix --sref with a product photo as an image prompt and get an unreadable hybrid. Another trap: describing style in ten adjectives when one clean reference would do — or using --sref for something you could state in one line («flat vector, two colors») and paying GPU for little control. Without separating look from shot, every grid is a random experiment.",
      whatYouWillLearn: [
        "Tell Style Reference (--sref) from Image Prompts and character refs (Character / Omni)",
        "Pick a clear style image (not a chaotic collage)",
        "Attach Style Reference on the web and with --sref on Discord",
        "Combine --sref with a shot prompt (--ar, subject, light)",
        "Tune --sw when needed and know when to skip --sref",
        "Lock a grid composition before variations or upscale",
      ],
      prerequisites: [
        "Paid Midjourney account with access to https://www.midjourney.com or Discord",
        "A job with a defined subject — ideally after midjourney-prompts-que-funcionan",
        "A style image you may use (yours, licensed or public domain); no third-party brands without permission",
        "18 minutes and a pad to copy the final prompt with parameters",
      ],
      steps: [
        {
          title: "Split three jobs: look (--sref), content (image prompt), identity (Character / Omni)",
          content:
            "Style Reference answers «what does it look like?»: color, texture, light quality, medium (watercolor, soft 3D, hard flash). It does not promise the same character or composition. Image Prompts (URL at the start on Discord, Image Prompt slot on web — https://docs.midjourney.com/hc/en-us/articles/32040250122381-Image-Prompts) push composition and content toward the reference photo. Character Reference (`--cref` on Discord in classic flows) and Omni Reference (`--oref`, Omni slot on web — https://docs.midjourney.com/hc/en-us/articles/36285124473997-Omni-Reference) put the same person or object into new scenes; on V8 many flows use Edit Model on the web, but the rule stays: identity ≠ style. If you only want palette and grain, use Style Reference — do not drop the model photo into Image Prompt «just in case».",
          whatYouShouldSee:
            "A note with three columns: «look → Style Reference / --sref», «shot/content → text + sometimes Image Prompt», «same face/object → Omni/Character/Edit Model». Nothing generated yet.",
          warning:
            "Style Reference requires text in the prompt; uploading alone without describing the shot does not work (Style Reference docs).",
          imageDescription:
            "Diagram of three Imagine slots: Style Reference, Image Prompt, Edit Model/Omni, each labeled with its job.",
        },
        {
          title: "Pick a style reference you can read in two seconds",
          content:
            "Good ref: one illustration, poster or still with a homogeneous look — limited palette, same texture across the frame, not three styles in one file. Bad ref: four-photo collage, screenshot with UI, or a photo where «style» is really the subject (a specific person). Crop to show aesthetic only (background, brushwork, grain). Valid formats: .png, .webp, .jpg per docs. If the ref is too literal (very recognizable hero product), Midjourney may still pull object cues even though --sref targets look; V7+ reduces subject leakage (https://updates.midjourney.com/style-references-for-v7/), but a clean ref is still cheaper than ten failed grids.",
          whatYouShouldSee:
            "One file (or one numeric Style Creator `--sref` code) noted as «style ref». No five URLs on the first test.",
          tip: "Start with a single --sref. Multiple refs make sense once you know --sw; early on they muddy diagnosis.",
          imageDescription:
            "Two thumbnails: bad ref (collage) vs good ref (single homogeneous watercolor) with a green check.",
        },
        {
          title: "Attach Style Reference on the web (Create)",
          content:
            "Open Create at https://www.midjourney.com. Click the image icon beside the Imagine bar, upload or pick from Uploads (10 MB max per Creating on Web). Drag the image into the Style Reference slot — not Image Prompt or Edit Model. Type a minimal shot prompt: «empty ceramic vase on shelf, eye-level, soft daylight from left, plain wall --ar 4:5». Generate a 2×2 grid. The ref does not replace subject or camera: you should recognize your shot wearing the reference’s visual skin. For an internal code instead of an image, Style Creator on the web builds numeric `--sref` codes (https://docs.midjourney.com/hc/en-us/articles/41308374558221-Style-Creator); same flow: code or image for look, text for the shot.",
          whatYouShouldSee:
            "Ref thumbnail in the Style Reference slot under the Imagine bar. A 2×2 grid with your job and a look close to the ref.",
          tip: "Save the job in Organize when a cell is close; you will reuse the same prompt + ref in the lock step.",
          imageDescription:
            "Web capture: Style Reference slot filled, vase prompt, 2×2 grid with palette similar to the thumbnail.",
        },
        {
          title: "Same flow on Discord with --sref URL",
          content:
            "On Discord, `/imagine` with a publicly reachable image URL (upload to Discord and copy link if needed). Shape: [shot prompt] --sref https://… --ar 4:5. Multiple refs: separate URLs with spaces; per-URL weights with `URL1::2 URL2::1` (Style Reference docs). Do not paste the URL only at the start — that is an Image Prompt, not Style Reference. Compare one web grid and one Discord grid with the same prompt and ref so your team can repeat the flow on either surface.",
          whatYouShouldSee:
            "Bot message with visible prompt, --sref and --ar in the queue. Grid consistent with the web test.",
          warning:
            "Broken or private CDN URLs mean a ignored ref or a failed job. Open the link in a private window to verify.",
          imageDescription:
            "Discord: full prompt with --sref URL and --ar 4:5, resulting grid below.",
        },
        {
          title: "Combine --sref with a locked shot (subject, light, --ar)",
          content:
            "Rewrite the prompt like midjourney-prompts-que-funcionan: concrete subject, angle, light, exclusions, then parameters. Example with a watercolor ref: «single pear on white plate, slight cast shadow, eye-level, one window soft light, no hands, no text --ar 4:5 --stylize 80 --sref [your URL or web slot]». Low --stylize keeps obedience to the shot; --sref supplies the aesthetic. Do not repeat «watercolor dreamy artistic» in text if the ref is already watercolor — you compete with yourself. If style fights the shot (hard-flash ref + soft fog prompt), fix light in text or change ref; do not chain ten generations.",
          whatYouShouldSee:
            "Four cells sharing the ref look but respecting subject and framing. At least one usable cell without rewriting everything.",
          tip: "Set --ar before you generate. Style Reference will not fix the wrong format.",
          proTip:
            "Change one axis only: same ref and prompt, adjust only light or camera height on a second generation.",
          imageDescription:
            "Grid with clear pear and plate, paint texture from ref; prompt showing --stylize.",
        },
        {
          title: "Tune --sw only when the ref is too weak or too strong",
          content:
            "Style weight `--sw` runs 0–1000; default 100 (Parameter List and Style Reference on docs.midjourney.com). Raise --sw (e.g. 200–350) when the shot «eats» the look. Lower --sw (e.g. 40–80) when the ref crushes the subject or oversaturates. On Discord: `--sref URL --sw 250`. On the web, append `--sw` to the prompt if no slider is visible. Do not touch --sv (sref algorithm version) unless you reuse old codes and docs ask for `--sv 4`. If --sw 100 is balanced, stop tuning and lock composition.",
          whatYouShouldSee:
            "Two comparable grids: lower --sw (more shot obedience) vs higher --sw (closer to ref). Your note on which you ship.",
          warning:
            "Extreme --sw (800+) with a high-contrast ref can wreck skin or product; step by 50–100, not 500.",
          imageDescription:
            "Pair of grids side by side, labels --sw 80 vs --sw 280, same ref and prompt.",
        },
        {
          title: "When NOT to use --sref (and when text is enough)",
          content:
            "Skip Style Reference if: (1) you can name the look precisely and do not need an external visual («isometric line icon, two flat colors, no gradient»); (2) the ref is a random photo where you cannot separate look from subject; (3) you blend two opposite style refs «to see what happens»; (4) the client banned external references. Use text + low --stylize instead. If the job is recurring character, do not crank --sw on --sref — switch to Omni/Character/Edit Model for your version. If the job is copying an ad layout, a legal image prompt + written shot is more honest than a style ref scraped from someone else’s campaign.",
          whatYouShouldSee:
            "Checked list: «can I state the look in one line?» «homogeneous ref?» «identity vs look?». Written decision: sref yes/no.",
          tip: "alternativas-midjourney helps when Midjourney is not the right tool for a fixed style (e.g. strict UI vector).",
          imageDescription:
            "Pad with checklist and a successful text-only generation marked «no --sref».",
        },
        {
          title: "Lock composition and hand off to variations / upscale",
          content:
            "Pick the winning cell and write one sentence why it wins («cell 3: ref palette match, pear centered, readable shadow»). Copy the full prompt with --sref (or web ref) and --sw if used. Stop changing style unless the brief changes. Next: midjourney-variaciones-upscale — Vary Subtle for detail, Upscale Subtle once when composition is locked. For motion, runway-primer-clip with the HD JPG; --sref already did its job on the still. Do not re-upload the same ref «just in case» in Runway — animate the approved frame.",
          whatYouShouldSee:
            "Saved prompt, noted ref, marked cell on the grid without upscale yet (or one upscale if you already locked). Session ready to vary.",
          proTip:
            "Filename: `pear-watercolor-sref-sw100-v3.jpg` — include ref/sw in the name if you repeat similar jobs.",
          imageDescription:
            "Grid with cell 3 highlighted, prompt copied to pad, arrow toward variations/upscale tutorial.",
        },
      ],
      realUseCases: [
        {
          title: "Campaign with a fixed brand palette",
          body: "One internal still (not the logo) in Style Reference + product in text. --sw 120 if the brand is very saturated. Lock the grid before upscale.",
        },
        {
          title: "Editorial illustration",
          body: "Homogeneous brush ref, prompt with a concrete news subject. No Image Prompt of someone else’s art. Vary Subtle only on the winning cell.",
        },
        {
          title: "Team on Discord",
          body: "Director posts approved ref URL and a prompt template with --ar. Same --sref in thread as on the designer’s web Create.",
        },
      ],
      commonMistakes: [
        {
          title: "Using a collage moodboard as the only --sref",
          body: "Four styles fight. Midjourney averages noise. One ref, one look.",
        },
        {
          title: "Confusing Style Reference with Image Prompt",
          body: "URL at the start on Discord copies composition, not just look. --sref goes at the end with a written shot.",
        },
        {
          title: "Asking for style in adjectives and --sref at once",
          body: "Redundancy pushes the default «pretty». Let the ref speak or drop adjectives.",
        },
        {
          title: "Raising --sw to fix a vague prompt",
          body: "If the subject never appears, it is not missing --sw: it is a weak shot. Return to midjourney-prompts-que-funcionan.",
        },
        {
          title: "Upscale before the look is locked",
          body: "You spend GPU on a look that still wobbles. Lock a cell on the SD grid, then vary/upscale.",
        },
      ],
      conclusion:
        "Style Reference (`--sref`) transfers an image or code’s aesthetic; it does not replace a written shot or clone characters (that is Omni/Character/Edit Model). The flow that works: homogeneous ref → Style Reference slot or --sref URL → subject, light and --ar in text → fine --sw if needed → lock a cell → vary or upscale once. When you can describe the look in one clear line, sometimes low stylize text alone beats a ref.",
      nextSteps: [
        "Tighten the base shot in midjourney-prompts-que-funcionan if the subject still does not read.",
        "Run Vary and Upscale in midjourney-variaciones-upscale on the cell you locked here.",
        "Animate the HD still in runway-primer-clip when composition is fixed.",
      ],
      takeaway:
        "Look in --sref. Shot in text. --sw only if needed. Lock the grid before upscale.",
    },
  },
};
