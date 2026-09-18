import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "midjourney-variaciones-upscale";

export const midjourneyVariacionesUpscale: Tutorial = {
  id: slug,
  slug,
  category: "image",
  level: "beginner",
  estimatedTime: 18,
  publishedAt: "2026-09-18",
  lastUpdated: "2026-09-18",
  toolsUsed: ["midjourney"],
  relatedTutorials: [
    "midjourney-prompts-que-funcionan",
    "runway-primer-clip",
    "elegir-modelo-texto",
  ],
  tags: ["midjourney", "variaciones", "upscale", "grid", "dirección-de-arte"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Grid de Midjourney con botones V1–V4 y Upscale Subtle visibles bajo una imagen elegida",
      caption: "Explora con variaciones. Escala solo cuando la composición ya está cerrada.",
      hint: "Hero 1600×900: grid 2×2 de Midjourney, una celda seleccionada, Creation Actions con Vary Subtle/Strong y Upscale Subtle/Creative visibles.",
    },
    en: {
      alt: "Midjourney grid with V1–V4 and Upscale Subtle buttons visible under a chosen image",
      caption: "Explore with variations. Upscale only when the composition is locked.",
      hint: "Hero 1600×900: Midjourney 2×2 grid, one cell selected, Creation Actions showing Vary Subtle/Strong and Upscale Subtle/Creative.",
    },
  }),
  copy: {
    es: {
      title: "Midjourney: variaciones vs upscale (cuándo usar cada uno)",
      metaTitle: "Midjourney variaciones vs upscale: guía práctica 2026",
      metaDescription:
        "V1–V4 y Vary Subtle/Strong para explorar. U1–U4 y Upscale Subtle/Creative para ampliar. Flujo repetible: variar → cerrar composición → escalar una vez.",
      excerpt:
        "Las variaciones exploran; el upscale entrega resolución. No hagas upscale de un plano que aún no te convence. Este flujo te enseña la secuencia correcta.",
      intro:
        "Tras generar un grid en Midjourney tienes dos familias de botones que suenan parecido pero hacen cosas distintas: Variations (V1–V4 en Discord, Vary Subtle/Strong en la web) crean versiones nuevas del mismo concepto; Upscale (U1–U4 en Discord, Upscale Subtle/Creative en la web) separa una imagen del grid y la amplía a resolución HD (2048 px en el lado largo con V8.2). Mezclarlos mal quema minutos de GPU: upscaleas un plano que aún no te convence, o varias diez veces una imagen que ya estaba lista. La documentación oficial está en https://docs.midjourney.com/hc/en-us/articles/32692978437005-Variations y https://docs.midjourney.com/hc/en-us/articles/32804058614669-Upscalers. En 18 minutos aprendes un flujo repetible: explorar con variaciones, cerrar composición, upscale una sola vez.",
      problem:
        "Mucha gente pulsa U1 en el primer grid «porque se ve más grande» y luego intenta arreglar la luz con Vary Strong. O al revés: explora con Vary All durante media hora sin decidir cuál imagen del grid gana. El upscale cuesta GPU y fija la composición; las variaciones son baratas para explorar pero no sustituyen un prompt mal escrito. Sin criterio, gastas el cupo del mes en JPGs casi iguales.",
      whatYouWillLearn: [
        "Diferenciar Variations (V1–V4, Vary Subtle/Strong) de Upscale (U1–U4, Upscale Subtle/Creative)",
        "Elegir Vary Subtle para retocar detalles y Vary Strong para explorar alternativas",
        "Usar U1–U4 o Upscale Subtle/Creative solo cuando la composición ya está cerrada",
        "Aplicar el flujo explorar → cerrar → upscale una vez",
        "Saber cuándo volver al prompt en vez de seguir variando",
      ],
      prerequisites: [
        "Cuenta de Midjourney de pago con acceso a la web (https://www.midjourney.com) o Discord",
        "Haber generado al menos un grid — idealmente tras midjourney-prompts-que-funcionan",
        "Un encargo simple: un producto, un espacio o un personaje con --ar ya decidido",
        "18 minutos y la disciplina de no pulsar upscale hasta estar seguro del plano",
      ],
      steps: [
        {
          title: "Genera un grid de prueba con un plano claro",
          content:
            "Abre la web de Midjourney (Create) o Discord con /imagine. Escribe un prompt concreto — no un mood: «matte ceramic mug on wooden table, three-quarter shot, soft window light from left, no hands --ar 4:5». Genera un grid 2×2. Aún no pulses ningún botón U ni Vary. Mira las cuatro celdas y anota cuál respeta mejor sujeto, ángulo y luz. Si ninguna funciona, el problema es el prompt, no las variaciones: vuelve a midjourney-prompts-que-funcionan y afina el plano antes de seguir.",
          whatYouShouldSee:
            "Un grid 2×2 recién generado. Cuatro botones V (V1–V4) y cuatro U (U1–U4) visibles bajo el grid en Discord, o el panel Creation Actions en la web. Ninguna acción ejecutada todavía.",
          tip: "El --ar lo fijas antes de generar. Variar o upscalear no arregla un formato equivocado.",
          imageDescription:
            "Grid 2×2 de una taza cerámica, prompt visible, botones V y U sin pulsar.",
        },
        {
          title: "Entiende la bifurcación: explorar (V) vs entregar (U)",
          content:
            "Las Variations crean un grid nuevo a partir de una celda elegida: cambian detalles o reordenan el concepto manteniendo la idea base. El Upscale separa una celda del grid y la amplía — en V8.2 de ~1024 px a ~2048 px en el lado largo con Subtle o Creative (documentación: https://docs.midjourney.com/hc/en-us/articles/32804058614669-Upscalers). Regla de oro: si aún dudas entre las cuatro celdas, estás en fase de exploración → usa V, no U. Si ya sabes cuál gana y solo quieres más píxeles para exportar o retocar, estás en fase de entrega → usa U. Upscalear pronto y luego variar funciona, pero es más caro: cada upscale consume GPU.",
          whatYouShouldSee:
            "Una nota mental o escrita: «explorar = V / Vary» vs «entregar = U / Upscale». Grid sin upscale todavía.",
          warning:
            "U1–U4 en Discord no es lo mismo que Upscale Subtle/Creative: U separa del grid; después eliges Subtle o Creative. En la web, Creation Actions agrupa ambos pasos.",
          imageDescription:
            "Esquema simple: flecha «dudo» → Vary; flecha «cerrado» → Upscale. Grid intacto.",
        },
        {
          title: "Explora con V1–V4 o Vary Subtle",
          content:
            "Elige la celda ganadora del grid (p. ej. la 2). En Discord pulsa V2; en la web abre Creation Actions y elige Vary (Subtle). Subtle hace cambios pequeños — ideal cuando te gusta la composición pero quieres afinar un detalle (sombra, textura, posición del sujeto). La documentación de Variations lo describe en https://docs.midjourney.com/hc/en-us/articles/32692978437005-Variations. Genera un nuevo grid y compara: ¿mejoró el eje que te importaba o solo cambió ruido? Anota en una línea qué cambió («V2 Subtle: la luz en el borde derecho se lee mejor»).",
          whatYouShouldSee:
            "Un segundo grid derivado de la celda 2. Composición similar al original con un detalle distinto. Nota tuya de qué mejoró.",
          tip: "En Discord puedes fijar el modo por defecto con /settings: Subtle Variation Mode o Strong Variation Mode. V1–V4 respetan ese ajuste.",
          imageDescription:
            "Dos grids: el original y uno tras Vary Subtle de la celda 2, con nota breve al lado.",
        },
        {
          title: "Cuándo saltar a Vary Strong (o V3/V4 con modo Strong)",
          content:
            "Si Subtle no mueve lo suficiente el plano — quieres otra disposición del mismo concepto, un ángulo distinto o una lectura más audaz — usa Vary (Strong) en la web o activa Strong Variation Mode en Discord y pulsa V sobre la celda elegida. Strong mantiene la idea central pero cambia la imagen de forma más visible. Úsalo con moderación: dos o tres rondas Strong bastan para explorar una dirección. Si después de Strong sigues perdido, el brief no está cerrado: reescribe el prompt, no encadenes Strong indefinidamente.",
          whatYouShouldSee:
            "Un grid Strong claramente distinto al Subtle anterior, pero reconocible como el mismo encargo (misma taza, mismo set).",
          warning:
            "Vary Strong en las cuatro celdas a la vez (Vary All) es la forma más rápida de quemar GPU sin aprender. Una celda, una ronda.",
          proTip:
            "Alterna: una ronda Subtle para afinar, una Strong solo si Subtle se quedó corto. No al revés.",
          imageDescription:
            "Grid tras Vary Strong: misma taza, composición más audaz. Botón Vary Strong resaltado.",
        },
        {
          title: "Cierra la composición antes de tocar Upscale",
          content:
            "Para «cerrar» significa poder decir en una frase por qué gana esta imagen: «celda 2 del tercer grid: ángulo tres cuartos, luz izquierda, borde de mesa limpio». Si no puedes articularlo, sigue con Vary Subtle en esa celda o vuelve al prompt. No pulses U1–U4 ni Upscale hasta pasar este test. Este paso no genera nada nuevo: es una pausa de criterio. Guarda el prompt exacto (parámetros incluidos) en una nota — lo reutilizarás.",
          whatYouShouldSee:
            "Una frase escrita que justifica la imagen ganadora. Prompt copiado en un bloc. Grid sin upscale.",
          tip: "Si el cliente debe aprobar dirección, envía capturas del grid en resolución normal; no hace falta upscale para decidir.",
          imageDescription:
            "Bloc con frase de cierre y prompt pegado; celda ganadora marcada en el grid sin ampliar.",
        },
        {
          title: "Upscale Subtle vs Creative (U + Upscale en Discord, Creation Actions en web)",
          content:
            "Con la composición cerrada, separa la celda ganadora. En Discord: U2 (si ganó la 2). En la web: Upscale (Subtle) o Upscale (Creative) en Creation Actions. Ambos duplican dimensiones (~2× en V8.2). Subtle amplía con cambios mínimos — elige esto casi siempre para exportar a diseño o Runway. Creative añade o modifica detalles al ampliar; a veces corrige manos o caras, pero también puede inventar cosas. Puedes repetir Creative con resultados distintos; cada paso consume GPU (ver https://docs.midjourney.com/hc/en-us/articles/33329329805581-Modifying-Your-Creations). Haz un solo upscale Subtle para entrega; reserva Creative para cuando Subtle dejó un defecto local.",
          whatYouShouldSee:
            "Una imagen única ampliada (~2048 px en el lado largo), no un grid. Archivo listo para descargar o llevar a Runway.",
          warning:
            "Pan, Zoom Out o Edit/Vary Region sobre imágenes HD las devuelven a resolución SD; tendrás que upscalear de nuevo (documentación de Version V8.2).",
          imageDescription:
            "Imagen upscaleada a tamaño grande junto al grid original pequeño; botón Upscale Subtle visible.",
        },
        {
          title: "Flujo completo en una sesión y cuándo parar",
          content:
            "Recapitula el flujo que acabas de practicar: (1) generar grid con prompt de plano, (2) elegir celda, (3) Vary Subtle una o dos veces, (4) Vary Strong solo si hace falta explorar, (5) cerrar con frase escrita, (6) Upscale Subtle una vez. Si tras upscale necesitas cambiar la luz de fondo entera, no encadenes Creative cinco veces: vuelve al prompt o usa inpaint regional. Para motion, lleva el JPG upscaleado a Runway (runway-primer-clip) — no upscalees de nuevo «por si acaso». Si el siguiente paso es copy, el still ya está; el texto lo escribes en ChatGPT o Claude, no en Midjourney.",
          whatYouShouldSee:
            "Una carpeta con el JPG final upscaleado, el prompt guardado y una nota del flujo (cuántas rondas V, una U). Sesión cerrada sin grids huérfanos sin decidir.",
          tip: "Nombre de archivo: `taza-34-subtle-upscale.jpg`, no `midjourney-final-v7`.",
          proTip:
            "Cuenta GPU: 1 generación + 2 Vary Subtle + 1 Upscale Subtle suele costar menos que 4 upscales Creative en grids que no habías cerrado.",
          imageDescription:
            "Carpeta con un JPG HD, prompt en txt y checklist del flujo V→cerrar→U.",
        },
      ],
      realUseCases: [
        {
          title: "Moodboard de producto para cliente",
          body: "Tres rondas de Vary Subtle en la misma celda, una Strong si el cliente pide «más aire». Cierras en captura de grid; upscale Subtle solo del keeper aprobado.",
        },
        {
          title: "Still base para Runway",
          body: "Exploras luz con V; cuando el encuadre aguanta, un Upscale Subtle y export. Runway anima el JPG HD — no necesitas Creative salvo defecto en manos.",
        },
        {
          title: "Iteración rápida en Discord",
          body: "Equipo en un hilo: V2 Subtle en el grid del brief, comentario en el hilo, U2 Subtle cuando el director cierra. Mismo flujo que en web, botones distintos.",
        },
      ],
      commonMistakes: [
        {
          title: "Upscale en el primer grid «para verlo grande»",
          body: "Amplías una celda que aún no ganó. Gastas GPU en un plano que ibas a descartar. Elige celda primero; upscale al final.",
        },
        {
          title: "Vary Strong como muleta de prompt flojo",
          body: "Si el sujeto no aparece tras dos Strong, el prompt es un mood. Reescribe el plano, no encadenes variaciones.",
        },
        {
          title: "Creative por defecto en cada entrega",
          body: "Creative inventa detalle. Para stills de producto o entrega a diseño, Subtle casi siempre. Creative solo con motivo.",
        },
        {
          title: "Upscalear, editar HD y olvidar re-upscale",
          body: "Pan o inpaint en HD baja resolución. Si tocas la imagen ampliada con esas herramientas, vuelve a Upscale Subtle.",
        },
        {
          title: "¿Puedo variar después de upscale?",
          body: "Sí: tras separar o upscalear aparecen Vary Subtle/Strong de nuevo (documentación de Variations). Pero cada ronda cuesta GPU; mejor cerrar en grid SD y upscale una vez.",
        },
      ],
      conclusion:
        "Variaciones exploran; upscale entrega. V1–V4 y Vary Subtle/Strong sirven mientras dudas del plano. U1–U4 y Upscale Subtle/Creative entran cuando la composición está cerrada y necesitas píxeles para exportar, retocar o animar. El flujo que ahorra GPU es simple: generar → variar con criterio → cerrar en una frase → upscale Subtle una vez.",
      nextSteps: [
        "Si el prompt aún flojea, refuerza con midjourney-prompts-que-funcionan antes de gastar más en Vary.",
        "Con el JPG HD listo, abre runway-primer-clip para animar un solo gesto.",
        "Para decidir si el still va a campaña de copy o solo visual, revisa elegir-modelo-texto y redacta fuera de Midjourney.",
      ],
      takeaway:
        "Explora con V / Vary. Cierra composición. Upscale Subtle una vez. Creative solo con motivo.",
    },
    en: {
      title: "Midjourney: variations vs upscale (when to use each)",
      metaTitle: "Midjourney variations vs upscale: practical guide 2026",
      metaDescription:
        "V1–V4 and Vary Subtle/Strong to explore. U1–U4 and Upscale Subtle/Creative to enlarge. Repeatable flow: vary → lock composition → upscale once.",
      excerpt:
        "Variations explore; upscale delivers resolution. Do not upscale a shot you are not happy with yet. This flow teaches the right sequence.",
      intro:
        "After you generate a grid in Midjourney you get two button families that sound similar but do different jobs: Variations (V1–V4 on Discord, Vary Subtle/Strong on the web) create new versions of the same concept; Upscale (U1–U4 on Discord, Upscale Subtle/Creative on the web) separates one image from the grid and enlarges it to HD resolution (~2048 px on the long edge with V8.2). Mixing them wrong burns GPU minutes: you upscale a shot you still dislike, or you Vary ten times on an image that was already done. Official docs: https://docs.midjourney.com/hc/en-us/articles/32692978437005-Variations and https://docs.midjourney.com/hc/en-us/articles/32804058614669-Upscalers. In 18 minutes you learn a repeatable flow: explore with variations, lock composition, upscale once.",
      problem:
        "Many people hit U1 on the first grid «because it looks bigger» and then try to fix the light with Vary Strong. Or the opposite: they Vary All for half an hour without picking a grid winner. Upscale costs GPU and locks composition; variations are cheaper for exploration but do not fix a bad prompt. Without a rule, you spend the monthly allowance on nearly identical JPGs.",
      whatYouWillLearn: [
        "Tell Variations (V1–V4, Vary Subtle/Strong) from Upscale (U1–U4, Upscale Subtle/Creative)",
        "Pick Vary Subtle to tweak details and Vary Strong to explore alternatives",
        "Use U1–U4 or Upscale Subtle/Creative only when composition is locked",
        "Apply the explore → lock → upscale once flow",
        "Know when to return to the prompt instead of more variations",
      ],
      prerequisites: [
        "A paid Midjourney account with web access (https://www.midjourney.com) or Discord",
        "At least one grid generated — ideally after midjourney-prompts-que-funcionan",
        "A simple job: a product, a space or a character with --ar already chosen",
        "18 minutes and the discipline not to upscale until you trust the shot",
      ],
      steps: [
        {
          title: "Generate a test grid with a clear shot",
          content:
            "Open the Midjourney web app (Create) or Discord with /imagine. Write a concrete prompt — not a mood: «matte ceramic mug on wooden table, three-quarter shot, soft window light from left, no hands --ar 4:5». Generate a 2×2 grid. Do not press any U or Vary button yet. Scan the four cells and note which one best keeps subject, angle and light. If none work, the prompt is the problem, not variations: go back to midjourney-prompts-que-funcionan and tighten the shot first.",
          whatYouShouldSee:
            "A fresh 2×2 grid. Four V buttons (V1–V4) and four U buttons (U1–U4) under the grid on Discord, or the Creation Actions panel on the web. No action taken yet.",
          tip: "Set --ar before you generate. Varying or upscaling will not fix the wrong format.",
          imageDescription:
            "2×2 ceramic mug grid, prompt visible, V and U buttons untouched.",
        },
        {
          title: "Understand the fork: explore (V) vs deliver (U)",
          content:
            "Variations build a new grid from one chosen cell: they change details or rearrange the concept while keeping the base idea. Upscale separates one cell and enlarges it — on V8.2 from ~1024 px to ~2048 px on the long edge with Subtle or Creative (docs: https://docs.midjourney.com/hc/en-us/articles/32804058614669-Upscalers). Golden rule: if you still hesitate between the four cells, you are exploring → use V, not U. If you already know the winner and only need pixels to export or retouch, you are delivering → use U. Upscale early then vary still works, but costs more: each upscale uses GPU.",
          whatYouShouldSee:
            "A mental or written note: «explore = V / Vary» vs «deliver = U / Upscale». Grid not upscaled yet.",
          warning:
            "U1–U4 on Discord is not the same as Upscale Subtle/Creative: U separates from the grid; then you pick Subtle or Creative. On the web, Creation Actions groups both steps.",
          imageDescription:
            "Simple diagram: arrow «unsure» → Vary; arrow «locked» → Upscale. Grid intact.",
        },
        {
          title: "Explore with V1–V4 or Vary Subtle",
          content:
            "Pick the winning cell (e.g. #2). On Discord press V2; on the web open Creation Actions and choose Vary (Subtle). Subtle makes small changes — ideal when you like the composition but want to refine a detail (shadow, texture, subject placement). Variations docs: https://docs.midjourney.com/hc/en-us/articles/32692978437005-Variations. Generate a new grid and compare: did the axis you care about improve or did only noise change? Write one line on what moved («V2 Subtle: right-edge light reads better»).",
          whatYouShouldSee:
            "A second grid derived from cell 2. Composition similar to the original with one different detail. Your note on what improved.",
          tip: "On Discord you can set the default mode with /settings: Subtle Variation Mode or Strong Variation Mode. V1–V4 follow that setting.",
          imageDescription:
            "Two grids: original and one after Vary Subtle on cell 2, with a short note beside them.",
        },
        {
          title: "When to switch to Vary Strong (or V3/V4 with Strong mode)",
          content:
            "If Subtle does not move the shot enough — you want another layout of the same concept, a different angle or a bolder read — use Vary (Strong) on the web or enable Strong Variation Mode on Discord and press V on the chosen cell. Strong keeps the core idea but changes the image more visibly. Use it sparingly: two or three Strong rounds are enough to explore one direction. If you are still lost after Strong, the brief is not locked: rewrite the prompt, do not chain Strong forever.",
          whatYouShouldSee:
            "A Strong grid clearly different from the previous Subtle pass, but still recognizable as the same job (same mug, same set).",
          warning:
            "Vary Strong on all four cells at once (Vary All) is the fastest way to burn GPU and learn nothing. One cell, one round.",
          proTip:
            "Alternate: one Subtle round to refine, one Strong only if Subtle fell short. Not the other way around.",
          imageDescription:
            "Grid after Vary Strong: same mug, bolder composition. Vary Strong button highlighted.",
        },
        {
          title: "Lock composition before you touch Upscale",
          content:
            "To «lock» means you can say in one sentence why this image wins: «cell 2 of the third grid: three-quarter angle, left light, clean table edge». If you cannot articulate it, keep Vary Subtle on that cell or return to the prompt. Do not press U1–U4 or Upscale until you pass this test. This step generates nothing new: it is a criteria pause. Save the exact prompt (parameters included) in a note — you will reuse it.",
          whatYouShouldSee:
            "One written sentence that justifies the winning image. Prompt copied to a pad. Grid without upscale.",
          tip: "If a client must approve direction, send grid screenshots at normal resolution; upscale is not required to decide.",
          imageDescription:
            "Pad with lock sentence and pasted prompt; winning cell marked on the grid, not enlarged.",
        },
        {
          title: "Upscale Subtle vs Creative (U + Upscale on Discord, Creation Actions on web)",
          content:
            "With composition locked, separate the winning cell. On Discord: U2 (if #2 won). On the web: Upscale (Subtle) or Upscale (Creative) in Creation Actions. Both double dimensions (~2× on V8.2). Subtle enlarges with minimal changes — pick this almost always for export to design or Runway. Creative adds or changes detail while enlarging; it sometimes fixes hands or faces but can also invent things. You can repeat Creative with different results; each step uses GPU (see https://docs.midjourney.com/hc/en-us/articles/33329329805581-Modifying-Your-Creations). One Subtle upscale for delivery; reserve Creative for when Subtle left a local defect.",
          whatYouShouldSee:
            "A single enlarged image (~2048 px on the long edge), not a grid. File ready to download or take into Runway.",
          warning:
            "Pan, Zoom Out or Edit/Vary Region on HD images downscales back to SD; you will need to upscale again (V8.2 Version docs).",
          imageDescription:
            "Upscaled image at large size next to the small original grid; Upscale Subtle button visible.",
        },
        {
          title: "Full session flow and when to stop",
          content:
            "Recap the flow you just practiced: (1) generate grid with a shot prompt, (2) pick a cell, (3) Vary Subtle once or twice, (4) Vary Strong only if exploration needs it, (5) lock with a written sentence, (6) Upscale Subtle once. If after upscale you need to change the whole background light, do not chain Creative five times: return to the prompt or use regional inpaint. For motion, take the upscaled JPG into Runway (runway-primer-clip) — do not upscale again «just in case». If the next step is copy, the still is done; write text in ChatGPT or Claude, not in Midjourney.",
          whatYouShouldSee:
            "A folder with the final upscaled JPG, saved prompt and a flow note (how many V rounds, one U). Session closed with no orphan undecided grids.",
          tip: "Filename: `mug-34-subtle-upscale.jpg`, not `midjourney-final-v7`.",
          proTip:
            "GPU math: 1 generation + 2 Vary Subtle + 1 Upscale Subtle usually costs less than 4 Creative upscales on grids you had not locked.",
          imageDescription:
            "Folder with one HD JPG, prompt txt and V→lock→U flow checklist.",
        },
      ],
      realUseCases: [
        {
          title: "Product moodboard for a client",
          body: "Three Vary Subtle rounds on the same cell, one Strong if the client asks for «more air». You close on a grid capture; Subtle upscale only on the approved keeper.",
        },
        {
          title: "Base still for Runway",
          body: "You explore light with V; when framing holds, one Upscale Subtle and export. Runway animates the HD JPG — Creative is not needed unless hands are wrong.",
        },
        {
          title: "Fast iteration on Discord",
          body: "Team in a thread: V2 Subtle on the brief grid, comment in thread, U2 Subtle when the director locks. Same flow as web, different buttons.",
        },
      ],
      commonMistakes: [
        {
          title: "Upscale on the first grid «to see it big»",
          body: "You enlarge a cell that had not won yet. You spend GPU on a shot you were going to discard. Pick the cell first; upscale last.",
        },
        {
          title: "Vary Strong as a crutch for a weak prompt",
          body: "If the subject never appears after two Strong passes, the prompt is a mood. Rewrite the shot, do not chain variations.",
        },
        {
          title: "Creative by default on every delivery",
          body: "Creative invents detail. For product stills or handoff to design, Subtle almost always. Creative only with a reason.",
        },
        {
          title: "Upscale, edit HD and forget to re-upscale",
          body: "Pan or inpaint on HD drops resolution. If you touch the enlarged image with those tools, run Upscale Subtle again.",
        },
        {
          title: "Can I vary after upscale?",
          body: "Yes: after separate or upscale, Vary Subtle/Strong appear again (Variations docs). But each round costs GPU; better to lock on the SD grid and upscale once.",
        },
      ],
      conclusion:
        "Variations explore; upscale delivers. V1–V4 and Vary Subtle/Strong are for while you still doubt the shot. U1–U4 and Upscale Subtle/Creative come when composition is locked and you need pixels to export, retouch or animate. The GPU-saving flow is simple: generate → vary with intent → lock in one sentence → Upscale Subtle once.",
      nextSteps: [
        "If the prompt still wobbles, strengthen it with midjourney-prompts-que-funcionan before spending more on Vary.",
        "With the HD JPG ready, open runway-primer-clip to animate one gesture.",
        "To decide whether the still feeds a copy campaign or stays visual-only, review elegir-modelo-texto and write outside Midjourney.",
      ],
      takeaway:
        "Explore with V / Vary. Lock composition. Upscale Subtle once. Creative only with a reason.",
    },
  },
};
