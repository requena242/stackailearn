import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "alternativas-midjourney";

export const alternativasMidjourney: Tutorial = {
  id: slug,
  slug,
  category: "image",
  level: "beginner",
  estimatedTime: 20,
  publishedAt: "2026-09-20",
  lastUpdated: "2026-09-20",
  toolsUsed: ["midjourney", "runway", "chatgpt"],
  relatedTutorials: [
    "midjourney-variaciones-upscale",
    "midjourney-prompts-que-funcionan",
    "chatgpt-alternativas",
    "runway-primer-clip",
  ],
  tags: [
    "midjourney",
    "alternativas",
    "runway",
    "chatgpt",
    "imagen",
    "decisión",
    "2026",
  ],
  hero: tutorialHero(slug, {
    es: {
      alt: "Bloc con brief de imagen de cuatro líneas y tres pestañas: midjourney.com, runwayml.com y chatgpt.com",
      caption: "Mismo brief visual, herramienta distinta. La decisión va antes del primer Generate.",
      hint: "Hero 1600×900: notas con sujeto, plano, luz y restricciones; tres pestañas visibles (Midjourney, Runway, ChatGPT) sin grid generado todavía.",
    },
    en: {
      alt: "Notepad with a four-line image brief and three tabs: midjourney.com, runwayml.com and chatgpt.com",
      caption: "Same visual brief, different tool. Decide before the first Generate.",
      hint: "Hero 1600×900: notes with subject, shot, light and constraints; three tabs visible (Midjourney, Runway, ChatGPT) with no grid generated yet.",
    },
  }),
  copy: {
    es: {
      title: "Alternativas a Midjourney: cuándo probar Runway o ChatGPT (2026)",
      metaTitle: "Alternativas a Midjourney: Runway y ChatGPT en 2026",
      metaDescription:
        "No cambies de motor de imagen por moda. Un brief visual compartido, cuatro preguntas de decisión y pruebas reales en Midjourney, Runway y ChatGPT. Sin listicle ni «Midjourney ha muerto».",
      excerpt:
        "Mismo brief en tres herramientas del catálogo. Decide por tipo de entregable — no por titular — y guarda una regla personal de cuándo abrir cada una.",
      intro:
        "Midjourney sigue siendo el motor de referencia para stills dirigidos: grids, variaciones y control de estilo. Eso no significa que sea la herramienta correcta para cada imagen. Runway entra cuando el still puede convertirse en clip; ChatGPT (imágenes en chatgpt.com) cuando necesitas texto legible o un mock dentro de un flujo de chat. Este flujo dura unos 20 minutos: defines el encargo visual, aplicas cuatro preguntas de decisión, pruebas dos o tres herramientas con el mismo brief y sales con una regla repetible — no con un ranking definitivo.",
      problem:
        "La gente paga Midjourney para un logo con tipografía, o abre Runway para un moodboard de veinte stills, o instala tres apps nuevas porque vio un hilo de «alternativas gratis». Sin describir el entregable antes, cualquier herramienta parece cara, lenta o «mala». O peor: gastan créditos de vídeo en una imagen que nunca se animará.",
      whatYouWillLearn: [
        "Redactar un brief visual de cuatro líneas reutilizable en cualquier motor",
        "Aplicar cuatro preguntas: grid/estilo, motion, texto en imagen, presupuesto de borrador",
        "Generar una línea base en Midjourney cuando el encargo es un still artístico",
        "Probar Runway cuando el still puede pasar a clip en la misma sesión",
        "Probar imágenes en chatgpt.com cuando el texto o el mock de producto importan",
        "Comparar salidas con criterios y anotar cuándo usar cada herramienta",
      ],
      prerequisites: [
        "Un encargo real: product shot, key art, mock de packaging o still que podría animarse",
        "Cuenta en midjourney.com (referencia; plan de pago para grids útiles)",
        "Cuenta en runwayml.com y acceso a chatgpt.com con generación de imágenes",
        "20 minutos. Si solo quieres comparar Midjourney vs Runway en stills, hay comparativas en el catálogo — este tutorial es un flujo de decisión",
      ],
      steps: [
        {
          title: "Escribe el brief visual antes de elegir herramienta",
          content:
            "Abre un bloc de notas — no Midjourney todavía. Cuatro líneas: (1) sujeto y encuadre («lata de café 250 g, tres cuartos, mesa de acero»), (2) luz y fondo («ventana izquierda, fondo fuera de foco»), (3) formato de salida (--ar 4:5 feed, 16:9 hero, 9:16 stories), (4) restricciones («sin manos, sin logos ajenos, texto ORÍGENES en el frontal»). Este bloque lo pegarás igual en cada herramienta que pruebes. Si no puedes describir el plano, ningún motor te salvará.",
          whatYouShouldSee:
            "Cuatro líneas en un editor de texto, copiables. Ninguna pestaña de generador abierta todavía.",
          tip: "Si el brief te cuesta, repasa midjourney-prompts-que-funcionan — aquí reutilizamos el mismo método de plano.",
          imageDescription:
            "Bloc de notas con cuatro líneas etiquetadas: sujeto/encuadre, luz/fondo, formato, restricciones.",
        },
        {
          title: "Cuatro preguntas de decisión (sin ranking eterno)",
          content:
            "Con el brief escrito, responde sí o no:\n\n¿Necesitas cultura de grid, variaciones y control artístico de estilo? → Midjourney.\n¿El still puede convertirse en clip de 4–8 s en los próximos días? → Runway (stills + motion en la misma sesión).\n¿El entregable lleva texto legible, logo o mock de producto dentro de un chat? → ChatGPT imágenes en chatgpt.com.\n¿Solo necesitas borradores rápidos y baratos para decidir dirección? → ChatGPT o, si el texto importa, ideogram.ai (sitio oficial; revisa plan actual). No pruebes las cuatro por sport: marca una o dos herramientas y anota por qué.",
          whatYouShouldSee:
            "Cuatro preguntas con sí/no al lado del brief. Una o dos herramientas marcadas para probar hoy.",
          warning:
            "No existe «la mejor IA de imagen de 2026». Existe la herramienta que encaja con el entregable de hoy.",
          proTip:
            "Para comparar Midjourney vs Runway solo en stills fijos, usa las comparativas del catálogo. Este tutorial evita duplicar ese veredicto y se centra en cuándo salir de Midjourney.",
          imageDescription:
            "Checklist en notas: grid/estilo, motion, texto, borrador barato — con marcas sí/no.",
        },
        {
          title: "Línea base en Midjourney (cuando el still es el producto)",
          content:
            "Si marcaste «grid y estilo», abre midjourney.com (Create) o Discord con /imagine. Pega el brief traducido a un prompt de plano — sujeto, cámara, luz, exclusiones — y fija --ar según la línea 3. Genera un grid 2×2. No pulses upscale todavía: mira las cuatro celdas y anota cuál respeta sujeto y luz. Midjourney es tu referencia cuando el entregable es una imagen fija con iteración de look. Si el brief pide texto nítido en el packaging, anota el fallo — no fuerces variaciones para arreglar tipografía.",
          whatYouShouldSee:
            "Un grid 2×2 recién generado. Cuatro variantes del mismo plano. Ningún upscale ejecutado.",
          tip: "Para variaciones y upscale después de cerrar composición, sigue midjourney-variaciones-upscale.",
          warning:
            "Midjourney no es motor de tipografía. Si la línea 4 pide copy legible y el grid falla, no es «mala suerte»: es señal para probar ChatGPT o Ideogram.",
          imageDescription:
            "midjourney.com con prompt de plano visible y grid 2×2 sin botones U pulsados.",
        },
        {
          title: "Runway: still que puede moverse (no un catálogo de fotos)",
          content:
            "Si marcaste «motion», abre runwayml.com. No uses texto-a-imagen para explorar veinte stills — ahí quemas créditos compartidos con Gen-3/Gen-4. Dos caminos honestos: (A) genera un still en Runway solo si ya trabajas ahí y necesitas un frame de partida antes de animar; (B) mejor: exporta el keeper de Midjourney y súbelo en Generate Video → image-to-video. Escribe un prompt de motion mínimo: una acción + una cámara, 5 s. El objetivo de este paso no es la foto perfecta: es ver si el encuadre aguanta un gesto. Si no tienes clip en el brief, salta Runway hoy.",
          whatYouShouldSee:
            "Runway con un still subido o un frame generado, selector de duración ~5 s visible, prompt de motion de una línea.",
          tip: "Para el flujo completo de clip, abre runway-primer-clip después de este ejercicio.",
          warning:
            "Runway puede sacar stills, pero cada imagen compite con tu presupuesto de vídeo. No lo uses como sustituto de Midjourney para un moodboard de 20 fotos.",
          imageDescription:
            "runwayml.com con still a la izquierda, campo de motion prompt y duración 5 s visibles.",
        },
        {
          title: "ChatGPT imágenes: texto y mock en flujo de chat",
          content:
            "Si marcaste «texto en imagen» o «mock con chat», abre chatgpt.com — no confundas con otros productos del ecosistema. Chat nuevo. Pega el mismo brief de cuatro líneas y pide una imagen con el texto exacto que necesitas: «Genera una imagen: [brief]. El texto en el frontal debe decir ORÍGENES en mayúsculas, legible.» ChatGPT integra generación de imagen en el chat: útil para iterar copy y encuadre en la misma conversación. Compara con el grid de Midjourney si lo generaste: ¿cuál lee mejor el texto? ¿cuál respeta el plano? Si ChatGPT tampoco acierta la tipografía, ideogram.ai (sitio oficial) suele ser la siguiente parada — fuera del catálogo, sin afiliado inventado.",
          whatYouShouldSee:
            "chatgpt.com con el brief pegado y una imagen generada en el hilo. Texto solicitado visible o claramente fallido.",
          tip: "Para elegir entre chats de texto, no entre motores de imagen, usa el tutorial chatgpt-alternativas.",
          warning:
            "Las tres herramientas inventan detalles. Revisa logos, claims y texto antes de enviar a cliente.",
          imageDescription:
            "chatgpt.com con brief en el composer e imagen generada debajo; texto del packaging resaltado o marcado como ilegible.",
        },
        {
          title: "Compara con criterios, no con «cuál es más bonita»",
          content:
            "Para cada herramienta que probaste anota en una tabla: ¿cumplió sujeto y encuadre? ¿respetó luz y formato? ¿el texto (si lo pediste) es usable? ¿cuántas iteraciones costó? ¿el still aguanta motion si Runway entró? No elijas la imagen «más cinematográfica» si el entregable era un mock de packaging. Si ninguna sirve, el siguiente paso es afinar el brief — no abrir un cuarto motor sin criterio. Guarda capturas: en una semana no recordarás qué herramienta acertó el plano.",
          whatYouShouldSee:
            "Tabla con columnas (Midjourney, Runway, ChatGPT) y filas: encuadre, texto, iteraciones, motion-ready.",
          proTip:
            "Si las tres parecen genéricas, el brief está flojo. Ajusta sujeto y exclusiones antes de culpar al modelo.",
          imageDescription:
            "Hoja de comparación simple con checkmarks y una columna «menos iteraciones» resaltada.",
        },
        {
          title: "Borradores baratos y tu regla personal",
          content:
            "Para explorar dirección sin comprometer GPU de pago: ChatGPT y Runway ofrecen tiers gratuitos o de prueba con límites que cambian — revisa chatgpt.com y runwayml.com/account antes de contar con ellos. Ideogram.ai publica planes en su web si el texto es crítico. No inventes precios en una tabla mental: anota «revisar plan actual» y cuántas iteraciones te costó hoy. Luego escribe tres reglas en tu voz. Ejemplo: «Midjourney: stills de campaña y moodboards con variaciones. Runway: cuando el keeper ya existe y quiero probar motion. ChatGPT: mock con copy en el chat.» Revisa en 30 días — los modelos cambian, tu tipo de trabajo no.",
          whatYouShouldSee:
            "Tres líneas de regla personal en notas, más una nota «planes: ver web sept 2026». Sin ranking viral.",
          warning:
            "No sustituyas una comparativa del catálogo por intuición. Si solo dudas entre dos stills fijos, lee mejor-ia-imagenes o runway-vs-midjourney-stills.",
          imageDescription:
            "Notas con tres reglas de una línea e iconos discretos de midjourney.com, runwayml.com y chatgpt.com.",
        },
      ],
      realUseCases: [
        {
          title: "Moodboard de campaña (12 stills, sin vídeo)",
          body: "Brief: misma lata, cuatro luces distintas, --ar 4:5. Midjourney gana en grids y variaciones. Runway no entra. ChatGPT queda para un mock con copy si el cliente pide texto en el frontal.",
        },
        {
          title: "Key art que puede convertirse en spot de 6 s",
          body: "Brief: personaje de espaldas, neón, 16:9. Midjourney cierra el still; Runway prueba un travelling lento con image-to-video. ChatGPT no aporta aquí. Anotas: «hero animado → MJ keeper + Runway».",
        },
        {
          title: "Mock de packaging con nombre de marca",
          body: "Brief: caja de té, texto TE VERDE legible, fondo liso. Midjourney falla la tipografía. ChatGPT imágenes itera copy en el chat; si sigue flojo, pruebas ideogram.ai. Anotas: «copy en imagen → chat primero, MJ para still sin texto».",
        },
      ],
      commonMistakes: [
        {
          title: "Pagar Midjourney para arreglar texto con Vary",
          body: "Si el brief lleva tipografía, variar el grid no arregla letras. Cambia de herramienta o añade el copy en diseño.",
        },
        {
          title: "Usar Runway como catálogo de fotos",
          body: "Cada still en Runway compite con créditos de clip. Para veinte imágenes fijas, Midjourney (o borradores en ChatGPT) es el camino honesto.",
        },
        {
          title: "Buscar un ganador absoluto",
          body: "El objetivo es una regla por tipo de entregable, no coronar «la mejor IA de imagen del año».",
        },
        {
          title: "Probar cuatro herramientas con briefs distintos",
          body: "El mismo brief en la misma sesión. Comparar encargos diferentes no dice nada útil.",
        },
        {
          title: "Confiar en precios de un hilo de X",
          body: "Los planes y límites cambian. Anota «revisar web» en lugar de repetir cifras que no verificaste hoy.",
        },
      ],
      conclusion:
        "Las alternativas a Midjourney no son un bandazo de moda: son herramientas distintas para entregables distintos. Un brief visual compartido, cuatro preguntas de decisión y una prueba real en Runway o ChatGPT (cuando toca) te dan una regla personal repetible. Midjourney sigue en el equipo para stills dirigidos — sobre todo cuando el grid y las variaciones son el producto.",
      nextSteps: [
        "Si el plano te cuesta escribir, empieza por midjourney-prompts-que-funcionan.",
        "Para variaciones y upscale después de cerrar composición, sigue midjourney-variaciones-upscale.",
        "Para el primer clip desde un keeper, abre runway-primer-clip.",
        "Para elegir entre chats de texto, mira chatgpt-alternativas.",
        "Para still vs motion sin repetir este flujo, lee las comparativas Midjourney vs Runway en el catálogo.",
      ],
      takeaway:
        "Brief visual primero → cuatro preguntas → Midjourney si grid/estilo → Runway si motion → ChatGPT si texto/mock → comparar con el mismo brief → una regla por herramienta. No ranking, no rant.",
    },
    en: {
      title: "Midjourney alternatives: when to try Runway or ChatGPT (2026)",
      metaTitle: "Midjourney alternatives: Runway and ChatGPT in 2026",
      metaDescription:
        "Do not switch image engines for hype. One shared visual brief, four decision questions and real tests in Midjourney, Runway and ChatGPT. No listicle or «Midjourney is dead».",
      excerpt:
        "Same brief in three catalog tools. Choose by deliverable type — not headlines — and save a personal rule for when to open each one.",
      intro:
        "Midjourney is still the reference engine for directed stills: grids, variations and style control. That does not make it the right tool for every image. Runway fits when the still may become a clip; ChatGPT (images at chatgpt.com) fits when you need readable text or a mock inside a chat workflow. This flow takes about 20 minutes: you define the visual brief, apply four decision questions, test two or three tools with the same brief and leave with a repeatable rule — not a final ranking.",
      problem:
        "People pay for Midjourney to render a logo with typography, or open Runway for a twenty-image moodboard, or install three new apps because of a «free alternatives» thread. Without describing the deliverable first, every tool looks expensive, slow or «bad». Or worse: they burn video credits on an image that will never be animated.",
      whatYouWillLearn: [
        "Write a four-line visual brief you can reuse in any engine",
        "Apply four questions: grid/style, motion, text in image, draft budget",
        "Generate a baseline in Midjourney when the job is an artistic still",
        "Try Runway when the still may become a clip in the same session",
        "Try images at chatgpt.com when text or product mock matters",
        "Compare outputs on criteria and note when to use each tool",
      ],
      prerequisites: [
        "A real job: product shot, key art, packaging mock or a still that might be animated",
        "An account at midjourney.com (reference; paid plan for useful grids)",
        "Accounts at runwayml.com and chatgpt.com with image generation access",
        "20 minutes. If you only want Midjourney vs Runway on stills, catalog comparisons exist — this tutorial is a decision flow",
      ],
      steps: [
        {
          title: "Write the visual brief before you pick a tool",
          content:
            "Open a notepad — not Midjourney yet. Four lines: (1) subject and framing («250 g coffee tin, three-quarter, steel table»), (2) light and background («window left, background falloff»), (3) output format (--ar 4:5 feed, 16:9 hero, 9:16 stories), (4) constraints («no hands, no third-party logos, text ORIGINS on the front»). You will paste this block unchanged into every tool you test. If you cannot describe the shot, no engine will save you.",
          whatYouShouldSee:
            "Four lines in a text editor, ready to copy. No generator tab open yet.",
          tip: "If the brief is hard, review midjourney-prompts-que-funcionan — we reuse the same shot method here.",
          imageDescription:
            "Notepad with four labeled lines: subject/framing, light/background, format, constraints.",
        },
        {
          title: "Four decision questions (no eternal ranking)",
          content:
            "With the brief written, answer yes or no:\n\nNeed grid culture, variations and artistic style control? → Midjourney.\nMight the still become a 4–8 s clip in the next few days? → Runway (stills + motion in one session).\nDoes the deliverable need readable text, a logo or product mock inside a chat? → ChatGPT images at chatgpt.com.\nOnly need fast, cheap drafts to pick a direction? → ChatGPT or, if text matters, ideogram.ai (official site; check current plan). Do not test all four for sport: flag one or two tools and note why.",
          whatYouShouldSee:
            "Four questions with yes/no marked next to the brief. One or two tools flagged to try today.",
          warning:
            "There is no «best image AI of 2026». There is the tool that fits today’s deliverable.",
          proTip:
            "To compare Midjourney vs Runway on fixed stills only, use catalog comparisons. This tutorial avoids duplicating that verdict and focuses on when to leave Midjourney.",
          imageDescription:
            "Notes checklist: grid/style, motion, text, cheap draft — with yes/no marks.",
        },
        {
          title: "Midjourney baseline (when the still is the product)",
          content:
            "If you marked «grid and style», open midjourney.com (Create) or Discord with /imagine. Paste the brief as a shot prompt — subject, camera, light, exclusions — and set --ar from line 3. Generate a 2×2 grid. Do not upscale yet: scan the four cells and note which respects subject and light. Midjourney is your reference when the deliverable is a fixed image with look iteration. If the brief asks for sharp packaging text, note the miss — do not force variations to fix typography.",
          whatYouShouldSee:
            "A fresh 2×2 grid. Four variants of the same shot. No upscale run yet.",
          tip: "For variations and upscale after you lock composition, follow midjourney-variaciones-upscale.",
          warning:
            "Midjourney is not a typography engine. If line 4 asks for readable copy and the grid fails, that is not «bad luck»: it is a signal to try ChatGPT or Ideogram.",
          imageDescription:
            "midjourney.com with shot prompt visible and 2×2 grid, no U buttons pressed.",
        },
        {
          title: "Runway: a still that might move (not a photo catalog)",
          content:
            "If you marked «motion», open runwayml.com. Do not use text-to-image to explore twenty stills — that burns credits shared with Gen-3/Gen-4. Two honest paths: (A) generate a still in Runway only if you already work there and need a starting frame before animating; (B) better: export the Midjourney keeper and upload it in Generate Video → image-to-video. Write a minimal motion prompt: one action + one camera, 5 s. This step’s goal is not the perfect photo: it is whether the frame holds a gesture. If your brief has no clip, skip Runway today.",
          whatYouShouldSee:
            "Runway with an uploaded still or generated frame, ~5 s duration selector visible, one-line motion prompt.",
          tip: "For the full clip flow, open runway-primer-clip after this exercise.",
          warning:
            "Runway can output stills, but each image competes with your video budget. Do not use it as a Midjourney replacement for a 20-photo moodboard.",
          imageDescription:
            "runwayml.com with still on the left, motion prompt field and 5 s duration visible.",
        },
        {
          title: "ChatGPT images: text and mock in a chat workflow",
          content:
            "If you marked «text in image» or «mock with chat», open chatgpt.com — do not confuse it with other ecosystem products. New chat. Paste the same four-line brief and ask for an image with the exact text you need: «Generate an image: [brief]. Front text must say ORIGINS in caps, readable.» ChatGPT embeds image generation in chat: useful to iterate copy and framing in one thread. Compare with the Midjourney grid if you generated one: which reads text better? which respects the shot? If ChatGPT still misses typography, ideogram.ai (official site) is often the next stop — outside the catalog, no invented affiliate.",
          whatYouShouldSee:
            "chatgpt.com with the brief pasted and a generated image in the thread. Requested text visible or clearly failed.",
          tip: "To choose between text chats, not image engines, use the chatgpt-alternativas tutorial.",
          warning:
            "All three tools invent details. Check logos, claims and text before sending to a client.",
          imageDescription:
            "chatgpt.com with brief in the composer and generated image below; packaging text highlighted or marked illegible.",
        },
        {
          title: "Compare on criteria, not «which looks prettier»",
          content:
            "For each tool you tested, note in a table: Did it hit subject and framing? Respect light and format? Is text (if requested) usable? How many iterations did it cost? Does the still hold motion if Runway entered? Do not pick the «most cinematic» image if the deliverable was a packaging mock. If none work, the next step is a tighter brief — not a fourth engine without criteria. Save screenshots: in a week you will not remember which tool nailed the shot.",
          whatYouShouldSee:
            "Table with columns (Midjourney, Runway, ChatGPT) and rows: framing, text, iterations, motion-ready.",
          proTip:
            "If all three look generic, the brief is weak. Tighten subject and exclusions before blaming the model.",
          imageDescription:
            "Simple comparison sheet with checkmarks and a «fewest iterations» column highlighted.",
        },
        {
          title: "Cheap drafts and your personal rule",
          content:
            "To explore direction without committing paid GPU: ChatGPT and Runway offer free or trial tiers with limits that change — check chatgpt.com and runwayml.com/account before counting on them. Ideogram.ai publishes plans on its site if text is critical. Do not invent prices in a mental spreadsheet: note «check current plan» and how many iterations today cost you. Then write three rules in your voice. Example: «Midjourney: campaign stills and moodboards with variations. Runway: when the keeper exists and I want to test motion. ChatGPT: mock with copy in chat.» Review in 30 days — models change, your job types do not.",
          whatYouShouldSee:
            "Three personal rule lines in notes, plus a «plans: check web Sep 2026» note. No viral ranking.",
          warning:
            "Do not replace a catalog comparison with gut feel. If you only doubt two fixed stills, read mejor-ia-imagenes or runway-vs-midjourney-stills.",
          imageDescription:
            "Notes with three one-line rules and discreet midjourney.com, runwayml.com and chatgpt.com icons.",
        },
      ],
      realUseCases: [
        {
          title: "Campaign moodboard (12 stills, no video)",
          body: "Brief: same tin, four lights, --ar 4:5. Midjourney wins on grids and variations. Runway stays out. ChatGPT remains for a copy mock if the client asks for front text.",
        },
        {
          title: "Key art that may become a 6 s spot",
          body: "Brief: character from behind, neon, 16:9. Midjourney locks the still; Runway tests a slow dolly with image-to-video. ChatGPT adds nothing here. You note: «animated hero → MJ keeper + Runway».",
        },
        {
          title: "Packaging mock with a brand name",
          body: "Brief: tea box, readable GREEN TEA text, plain background. Midjourney fails typography. ChatGPT images iterate copy in chat; if still weak, try ideogram.ai. You note: «copy in image → chat first, MJ for text-free still».",
        },
      ],
      commonMistakes: [
        {
          title: "Paying Midjourney to fix text with Vary",
          body: "If the brief includes typography, varying the grid will not fix letters. Switch tools or add copy in design.",
        },
        {
          title: "Using Runway as a photo catalog",
          body: "Each still in Runway competes with clip credits. For twenty fixed images, Midjourney (or ChatGPT drafts) is the honest path.",
        },
        {
          title: "Looking for an absolute winner",
          body: "The goal is one rule per deliverable type, not crowning «the best image AI of the year».",
        },
        {
          title: "Testing four tools with different briefs",
          body: "Same brief in the same session. Comparing different assignments proves nothing useful.",
        },
        {
          title: "Trusting prices from an X thread",
          body: "Plans and limits change. Note «check website» instead of repeating figures you did not verify today.",
        },
      ],
      conclusion:
        "Midjourney alternatives are not a hype pivot: they are different tools for different deliverables. One shared visual brief, four decision questions and a real test in Runway or ChatGPT (when it fits) give you a repeatable personal rule. Midjourney stays on the team for directed stills — especially when grids and variations are the product.",
      nextSteps: [
        "If writing the shot is hard, start with midjourney-prompts-que-funcionan.",
        "For variations and upscale after locking composition, follow midjourney-variaciones-upscale.",
        "For the first clip from a keeper, open runway-primer-clip.",
        "To choose between text chats, see chatgpt-alternativas.",
        "For still vs motion without repeating this flow, read Midjourney vs Runway comparisons in the catalog.",
      ],
      takeaway:
        "Visual brief first → four questions → Midjourney if grid/style → Runway if motion → ChatGPT if text/mock → compare same brief → one rule per tool. No ranking, no rant.",
    },
  },
};
