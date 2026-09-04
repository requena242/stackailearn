import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "chatgpt-alternativas";

export const chatgptAlternativas: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "beginner",
  estimatedTime: 18,
  publishedAt: "2026-09-04",
  lastUpdated: "2026-09-04",
  toolsUsed: ["chatgpt", "claude", "grok"],
  relatedTutorials: [
    "chatgpt-primeros-pasos",
    "claude-escritura-larga",
    "grok-primer-flujo",
  ],
  tags: ["chatgpt", "alternativas", "claude", "grok", "texto", "decisión", "2026"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Tres pestañas del navegador con chatgpt.com, claude.ai y grok.com y un briefing de cuatro líneas compartido",
      caption: "Mismo encargo, herramienta distinta. La decisión va antes de abrir la pestaña.",
      hint: "Hero 1600×900: tres pestañas visibles (ChatGPT, Claude, Grok) y un bloc de notas con objetivo, audiencia, formato y restricciones.",
    },
    en: {
      alt: "Three browser tabs with chatgpt.com, claude.ai and grok.com and a shared four-line brief",
      caption: "Same brief, different tool. Decide before you open the tab.",
      hint: "Hero 1600×900: three tabs visible (ChatGPT, Claude, Grok) and a notepad with goal, audience, format and constraints.",
    },
  }),
  copy: {
    es: {
      title: "ChatGPT alternativas: cuándo probar Claude o Grok (2026)",
      metaTitle: "Alternativas a ChatGPT: Claude y Grok en 2026",
      metaDescription:
        "No cambies de chat por moda. Un briefing compartido, tres preguntas de decisión y una primera sesión útil en Claude y Grok. Sin confundir grok.com con Grok Bot.",
      excerpt:
        "Mismo encargo en tres chats. Decide por tipo de trabajo — no por titular — y guarda una regla personal de cuándo abrir cada uno.",
      intro:
        "ChatGPT sigue siendo el chat generalista más usado. Eso no significa que sea la mejor herramienta para cada tarea de texto. Claude suele ir mejor en documentos largos y tono cuidadoso; Grok (el chat en grok.com) en lecturas directas de algo reciente. Este flujo dura unos 18 minutos: defines el trabajo, pruebas Claude y Grok con el mismo briefing y sales con una regla repetible — no con un ranking definitivo ni con «ChatGPT ha muerto».",
      problem:
        "La gente cambia de chat porque vio un hilo en X o porque ChatGPT «suena a IA». Abre Claude, pega lo mismo, no mejora nada y vuelve frustrada. O instala Grok Bot cuando solo quería una pregunta de actualidad en grok.com. Sin describir el trabajo antes, cualquier alternativa parece igual de mala o igual de mágica.",
      whatYouWillLearn: [
        "Redactar un briefing de cuatro líneas reutilizable en cualquier chat",
        "Aplicar tres preguntas rápidas: documento largo, actualidad, variantes rápidas",
        "Abrir una primera sesión útil en claude.ai con un encargo concreto",
        "Abrir grok.com (no Grok Bot) con una pregunta datada",
        "Comparar salidas con el mismo brief y anotar cuándo usar cada herramienta",
      ],
      prerequisites: [
        "Cuenta en chatgpt.com (referencia; no hace falta pagar)",
        "Cuenta en claude.ai y acceso a grok.com (planes gratis bastan para este flujo)",
        "Un encargo real: email, post, resumen de reunión o ángulo sobre un tema reciente",
        "15–20 minutos. Si buscas un teammate con máquina remota, ese es Grok Bot — otro tutorial",
      ],
      steps: [
        {
          title: "Escribe el encargo antes de elegir herramienta",
          content:
            "Abre un bloc de notas — no un chat todavía. Cuatro líneas: (1) entregable («email de 120 palabras», «tres titulares», «mapa de secciones»), (2) audiencia, (3) tono o restricciones («sin adjetivos vacíos», «tú, no usted»), (4) lo que no quieres («sin cifras inventadas», «sin emojis»). Este bloque lo pegarás igual en ChatGPT, Claude y Grok. Si no puedes describir el entregable, ningún chat te salvará.",
          whatYouShouldSee:
            "Cuatro líneas en un editor de texto, copiables. Ninguna pestaña de chat abierta todavía.",
          tip: "Si ya dominas el briefing de cuatro líneas, repasa el tutorial de ChatGPT primeros pasos — aquí reutilizamos el mismo método.",
          imageDescription:
            "Bloc de notas con cuatro líneas etiquetadas: entregable, audiencia, tono, restricciones.",
        },
        {
          title: "Las tres preguntas de decisión (sin ranking eterno)",
          content:
            "Con el encargo escrito, responde sí o no: ¿Es un documento largo o edición por secciones? → Claude suele ir mejor. ¿Necesitas ángulo o contexto de algo publicado en 2025–2026? → Grok en grok.com, con fecha en la pregunta. ¿Son variantes rápidas de un texto corto con briefing claro? → ChatGPT suele bastar. Pueden ser dos sí: prueba las dos herramientas que marcaste, no las tres por sport. Anota la respuesta en el bloc.",
          whatYouShouldSee:
            "Tres preguntas con sí/no anotado al lado del briefing. Una o dos herramientas marcadas para probar.",
          warning:
            "No existe «la mejor IA de 2026». Existe la herramienta que encaja con el tipo de trabajo de hoy.",
          proTip:
            "Para investigación con fuentes enlazadas, Perplexity suele ir antes que Grok. Este tutorial se queda en chat y redacción.",
          imageDescription:
            "Checklist manuscrita o en notas: documento largo, actualidad, variantes cortas — con marcas sí/no.",
        },
        {
          title: "Primera sesión en Claude: encargo + límite",
          content:
            "Abre claude.ai, chat nuevo. Pega el briefing de cuatro líneas. Añade una instrucción de límite acorde al encargo: «Solo el mapa de secciones, no reescribas» o «Un borrador de 150 palabras, marca con [?] lo que no esté en mis notas». Claude aguanta contexto largo; aprovéchalo si tu material supera un párrafo. No pidas «reescribe todo» en el primer mensaje — pide un entregable pequeño y evaluable.",
          whatYouShouldSee:
            "Respuesta acotada al entregable pedido: mapa, borrador corto o lista — no un ensayo genérico de cinco páginas.",
          tip: "Si el encargo es edición larga, el tutorial de Claude escritura larga profundiza el flujo por secciones.",
          warning:
            "Claude también inventa cifras. Marca [?] o pide que liste afirmaciones no presentes en tu material.",
          imageDescription:
            "claude.ai con el briefing pegado y una respuesta estructurada (outline o borrador corto) visible.",
        },
        {
          title: "Primera sesión en Grok: grok.com y pregunta datada",
          content:
            "Confirma la URL: grok.com. No es Grok Bot (teammate, Agent Computer, Cursor). Chat nuevo. Si marcaste «actualidad», formula una pregunta con año: «Qué se ha publicado en medios con fecha sobre [tema] en 2025–2026, y qué es rumor». Pide separar hecho / estimación / opinión. Si tu encargo no es de actualidad, usa Grok para un contraste de ángulo: «Qué ángulo directo le darías a este briefing que Claude podría suavizar demasiado» — y pega el mismo briefing.",
          whatYouShouldSee:
            "Barra de direcciones con grok.com. Respuesta con tono directo y, si pediste actualidad, fechas o fuentes mencionadas.",
          warning:
            "Grok Bot no se abre desde grok.com. Son productos distintos. Si ves teammates o una VM, cierra y vuelve al chat.",
          tip: "Para profundizar solo en Grok, sigue el tutorial grok-primer-flujo.",
          imageDescription:
            "grok.com con pregunta datada en el composer; respuesta con bloques hecho/opinión o ángulo marcado.",
        },
        {
          title: "Misma pregunta en ChatGPT (referencia, no combate)",
          content:
            "Abre chatgpt.com, chat nuevo, pega el mismo briefing de cuatro líneas. Pide el mismo entregable que pediste en Claude (mapa, borrador, tres titulares). ChatGPT es tu línea base: no lo uses como juez supremo, úsalo para ver si el problema era el briefing o la herramienta. Si ChatGPT ya entregó lo que necesitabas, anótalo — no hace falta cambiar por cambiar.",
          whatYouShouldSee:
            "Tres respuestas guardadas o visibles en pestañas distintas, nacidas del mismo briefing.",
          proTip:
            "Si las tres suenan iguales de genéricas, el briefing está flojo. Ajusta entregable y restricciones antes de culpar al modelo.",
          imageDescription:
            "Tres pestañas minimizadas o ventana partida: mismas cuatro líneas de briefing en cada composer.",
        },
        {
          title: "Compara con criterios, no con vibes",
          content:
            "Para cada respuesta anota: ¿cumplió el entregable? ¿respetó restricciones? ¿inventó algo que no pediste? ¿cuál editarías menos? Una tabla de cuatro filas basta. No elijas «el que suena más listo». Elige el borrador que menos reescritura necesita o el ángulo que no se te había ocurrido. Si ninguno sirve, el siguiente paso es mejorar el briefing — no abrir un cuarto chat.",
          whatYouShouldSee:
            "Tabla o lista con tres columnas (ChatGPT, Claude, Grok) y filas: entregable, tono, inventos, esfuerzo de edición.",
          tip: "Guarda capturas o enlaces a los chats. En una semana no recordarás qué modelo acertó el tono.",
          imageDescription:
            "Hoja de comparación simple con checkmarks y una columna «menos edición» resaltada.",
        },
        {
          title: "Guarda tu regla personal (una línea por herramienta)",
          content:
            "Escribe tres reglas en el bloc, en tu voz. Ejemplo: «ChatGPT: variantes y emails cortos con briefing. Claude: docs >800 palabras y tono cuidadoso. Grok: preguntas con fecha y contraste de ángulo en grok.com». Revisa en 30 días — cambiarán los modelos, no tu tipo de trabajo. Si una herramienta no aparece en ninguna regla, no la mantengas abierta «por si acaso».",
          whatYouShouldSee:
            "Tres líneas guardadas en notas, pinned o en un doc. Reglas basadas en tu prueba de hoy, no en un hilo viral.",
          warning:
            "No sustituyas Perplexity por Grok cuando necesites citas enlazadas. Cada herramienta tiene su tutorial en el catálogo.",
          imageDescription:
            "Notas con tres reglas de una línea; iconos discretos de chatgpt.com, claude.ai y grok.com al margen.",
        },
      ],
      realUseCases: [
        {
          title: "Acta de reunión larga",
          body: "Briefing: resumen de 300 palabras, tono interno, sin prometer plazos. Claude produce mapa + borrador; ChatGPT bastaba, pero Claude respetó mejor las restricciones. Grok no entra — no hay actualidad.",
        },
        {
          title: "Post sobre un anuncio de esta semana",
          body: "Briefing: tres titulares para LinkedIn. Grok en grok.com con pregunta datada aporta ángulo; Claude suaviza demasiado; ChatGPT da variantes rápidas. Publicas tras editar tú los hechos.",
        },
        {
          title: "Email de ventas con tres tonos",
          body: "Briefing: 100 palabras, tres variantes (directo, cercano, formal). ChatGPT gana en velocidad. Anotas: «emails cortos → ChatGPT» y reservas Claude para la landing larga.",
        },
      ],
      commonMistakes: [
        {
          title: "Cambiar de chat sin cambiar el briefing",
          body: "Pegar «hazlo mejor» en Claude después de un fallo en ChatGPT repite el problema. Reescribe entregable y restricciones primero.",
        },
        {
          title: "Confundir Grok con Grok Bot",
          body: "grok.com es chat. Grok Bot es teammate con máquina. Este tutorial no usa Bot; mezclarlos gasta plan y tiempo.",
        },
        {
          title: "Buscar un ganador absoluto",
          body: "El objetivo es una regla por tipo de trabajo, no coronar «la mejor IA del año».",
        },
        {
          title: "Publicar cifras que el chat inventó",
          body: "Las tres herramientas alucinan. Lo que no estaba en tus notas va marcado o se borra antes de enviar.",
        },
        {
          title: "Abrir tres chats para tareas distintas a la vez",
          body: "Prueba con el mismo briefing en una sesión. Comparar encargos diferentes no dice nada útil.",
        },
      ],
      conclusion:
        "Las alternativas a ChatGPT no son un bandazo de moda: son herramientas distintas para trabajos distintos. Un briefing compartido, tres preguntas de decisión y una sesión real en Claude y Grok (en grok.com) te dan una regla personal repetible. ChatGPT sigue en el equipo — sobre todo para variantes rápidas con encargo claro.",
      nextSteps: [
        "Si el briefing te cuesta, empieza por el tutorial de ChatGPT primeros pasos.",
        "Para edición larga en Claude, sigue claude-escritura-larga.",
        "Para profundizar en grok.com sin mezclar Bot, abre grok-primer-flujo.",
        "Para investigación con fuentes, mira el tutorial de Perplexity en el catálogo.",
      ],
      takeaway:
        "Encargo primero → tres preguntas → Claude si doc/tono → Grok si actualidad (grok.com) → comparar con el mismo brief → una regla por herramienta. No ranking, no rant.",
    },
    en: {
      title: "ChatGPT alternatives: when to try Claude or Grok (2026)",
      metaTitle: "ChatGPT alternatives: Claude and Grok in 2026",
      metaDescription:
        "Do not switch chats for hype. One shared brief, three decision questions and a first useful session in Claude and Grok. Do not confuse grok.com with Grok Bot.",
      excerpt:
        "Same brief in three chats. Choose by job type — not headlines — and save a personal rule for when to open each one.",
      intro:
        "ChatGPT is still the most used general chat. That does not make it the best tool for every writing job. Claude often fits long documents and careful tone; Grok (the chat at grok.com) fits direct reads on recent topics. This flow takes about 18 minutes: you define the job, test Claude and Grok with the same brief and leave with a repeatable rule — not a final ranking or «ChatGPT is dead».",
      problem:
        "People switch chats because of an X thread or because ChatGPT «sounds like AI». They open Claude, paste the same thing, get no improvement and bounce. Or they install Grok Bot when they only wanted a current-events question on grok.com. Without describing the job first, every alternative looks equally bad or equally magic.",
      whatYouWillLearn: [
        "Write a four-line brief you can reuse in any chat",
        "Apply three quick questions: long doc, current events, fast variants",
        "Open a first useful session at claude.ai with a concrete brief",
        "Open grok.com (not Grok Bot) with a dated question",
        "Compare outputs from the same brief and note when to use each tool",
      ],
      prerequisites: [
        "An account at chatgpt.com (reference; no paid plan required)",
        "Accounts at claude.ai and access to grok.com (free tiers are enough for this flow)",
        "A real job: email, post, meeting summary or angle on a recent topic",
        "15–20 minutes. If you want a teammate with a remote machine, that is Grok Bot — a different tutorial",
      ],
      steps: [
        {
          title: "Write the brief before you pick a tool",
          content:
            "Open a notepad — not a chat yet. Four lines: (1) deliverable («120-word email», «three headlines», «section map»), (2) audience, (3) tone or constraints («no empty adjectives», «informal you»), (4) what you do not want («no invented stats», «no emojis»). You will paste this block unchanged into ChatGPT, Claude and Grok. If you cannot describe the deliverable, no chat will save you.",
          whatYouShouldSee:
            "Four lines in a text editor, ready to copy. No chat tab open yet.",
          tip: "If you already know the four-line brief, skim the ChatGPT first-steps tutorial — we reuse the same method here.",
          imageDescription:
            "Notepad with four labeled lines: deliverable, audience, tone, constraints.",
        },
        {
          title: "Three decision questions (no eternal ranking)",
          content:
            "With the brief written, answer yes or no: Is it a long document or section-by-section edit? → Claude often fits better. Do you need an angle or context on something published in 2025–2026? → Grok at grok.com, with a year in the question. Are these fast variants of a short text with a clear brief? → ChatGPT is often enough. Two yes answers are fine: test the two tools you marked, not all three for sport. Note the answers in your notepad.",
          whatYouShouldSee:
            "Three questions with yes/no marked next to the brief. One or two tools flagged to try.",
          warning:
            "There is no «best AI of 2026». There is the tool that fits today’s job type.",
          proTip:
            "For research with linked sources, Perplexity often comes before Grok. This tutorial stays on chat and drafting.",
          imageDescription:
            "Handwritten or digital checklist: long doc, current events, short variants — with yes/no marks.",
        },
        {
          title: "First Claude session: brief + boundary",
          content:
            "Open claude.ai, new chat. Paste the four-line brief. Add a boundary that matches the deliverable: «Section map only, do not rewrite yet» or «One 150-word draft; mark with [?] anything not in my notes». Claude handles long context; use that if your material is more than a paragraph. Do not ask «rewrite everything» in message one — ask for one small, evaluable deliverable.",
          whatYouShouldSee:
            "A response scoped to what you asked: map, short draft or list — not a generic five-page essay.",
          tip: "For long editing, the Claude long-writing tutorial goes deeper on section-by-section flow.",
          warning:
            "Claude invents numbers too. Use [?] or ask it to list claims not in your source material.",
          imageDescription:
            "claude.ai with the brief pasted and a structured reply (outline or short draft) visible.",
        },
        {
          title: "First Grok session: grok.com and a dated question",
          content:
            "Confirm the URL: grok.com. Not Grok Bot (teammate, Agent Computer, Cursor). New chat. If you marked «current events», ask with a year: «What has been reported in dated media about [topic] in 2025–2026, and what is rumor». Ask for fact / estimate / opinion split. If your job is not about news, use Grok for angle contrast: «What direct angle would you take on this brief that Claude might soften too much» — and paste the same brief.",
          whatYouShouldSee:
            "Address bar showing grok.com. Direct-tone reply; if you asked for news, dates or sources mentioned.",
          warning:
            "Grok Bot does not open from grok.com. Different products. If you see teammates or a VM, close and return to the chat.",
          tip: "To go deeper on Grok alone, follow the grok-primer-flujo tutorial.",
          imageDescription:
            "grok.com with a dated question in the composer; reply with fact/opinion blocks or a marked angle.",
        },
        {
          title: "Same ask in ChatGPT (baseline, not a fight)",
          content:
            "Open chatgpt.com, new chat, paste the same four-line brief. Request the same deliverable you asked Claude (map, draft, three headlines). ChatGPT is your baseline: not supreme judge, but a check on whether the problem was the brief or the tool. If ChatGPT already delivered what you needed, note it — no need to switch for switching’s sake.",
          whatYouShouldSee:
            "Three saved or visible replies in separate tabs, all from the same brief.",
          proTip:
            "If all three sound equally generic, the brief is weak. Tighten deliverable and constraints before blaming the model.",
          imageDescription:
            "Three minimized tabs or split window: same four brief lines in each composer.",
        },
        {
          title: "Compare on criteria, not vibes",
          content:
            "For each reply note: Did it hit the deliverable? Respect constraints? Invent anything you did not ask for? Which would need the least editing? A four-row table is enough. Do not pick «the one that sounds smartest». Pick the draft that needs the least rewrite or the angle you had not considered. If none work, the next step is a better brief — not a fourth chat.",
          whatYouShouldSee:
            "Table or list with three columns (ChatGPT, Claude, Grok) and rows: deliverable, tone, inventions, edit effort.",
          tip: "Save screenshots or chat links. In a week you will not remember which model nailed tone.",
          imageDescription:
            "Simple comparison sheet with checkmarks and a «least editing» column highlighted.",
        },
        {
          title: "Save your personal rule (one line per tool)",
          content:
            "Write three rules in your notepad, in your voice. Example: «ChatGPT: variants and short emails with a brief. Claude: docs >800 words and careful tone. Grok: dated questions and angle contrast at grok.com». Review in 30 days — models change, your job types do not. If a tool shows up in no rule, do not keep it open «just in case».",
          whatYouShouldSee:
            "Three lines saved in notes, pinned or in a doc. Rules based on today’s test, not a viral thread.",
          warning:
            "Do not replace Perplexity with Grok when you need linked citations. Each tool has its catalog tutorial.",
          imageDescription:
            "Notes with three one-line rules; discreet chatgpt.com, claude.ai and grok.com icons in the margin.",
        },
      ],
      realUseCases: [
        {
          title: "Long meeting notes",
          body: "Brief: 300-word summary, internal tone, no promised deadlines. Claude delivers map + draft; ChatGPT was fine, but Claude respected constraints better. Grok stays out — no current-events angle.",
        },
        {
          title: "Post about this week’s announcement",
          body: "Brief: three LinkedIn headlines. Grok at grok.com with a dated question adds angle; Claude softens too much; ChatGPT gives fast variants. You publish after editing facts yourself.",
        },
        {
          title: "Sales email in three tones",
          body: "Brief: 100 words, three variants (direct, friendly, formal). ChatGPT wins on speed. You note «short emails → ChatGPT» and save Claude for the long landing page.",
        },
      ],
      commonMistakes: [
        {
          title: "Switching chats without changing the brief",
          body: "Pasting «make it better» into Claude after a ChatGPT miss repeats the problem. Rewrite deliverable and constraints first.",
        },
        {
          title: "Confusing Grok with Grok Bot",
          body: "grok.com is chat. Grok Bot is a teammate with a machine. This tutorial does not use Bot; mixing them wastes plan and time.",
        },
        {
          title: "Looking for an absolute winner",
          body: "The goal is one rule per job type, not crowning «the best AI of the year».",
        },
        {
          title: "Publishing stats the chat invented",
          body: "All three tools hallucinate. Anything not in your notes gets marked or deleted before you send.",
        },
        {
          title: "Opening three chats for different jobs at once",
          body: "Test with the same brief in one session. Comparing different assignments proves nothing useful.",
        },
      ],
      conclusion:
        "ChatGPT alternatives are not a hype pivot: they are different tools for different jobs. One shared brief, three decision questions and a real session in Claude and Grok (at grok.com) give you a repeatable personal rule. ChatGPT stays on the team — especially for fast variants with a clear brief.",
      nextSteps: [
        "If the brief is hard, start with the ChatGPT first-steps tutorial.",
        "For long Claude editing, follow claude-escritura-larga.",
        "To go deeper on grok.com without mixing Bot, open grok-primer-flujo.",
        "For source-backed research, see the Perplexity tutorial in the catalog.",
      ],
      takeaway:
        "Brief first → three questions → Claude for doc/tone → Grok for news (grok.com) → compare same brief → one rule per tool. No ranking, no rant.",
    },
  },
};
