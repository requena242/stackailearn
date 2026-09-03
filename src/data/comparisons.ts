import type { Comparison } from "@/types/content";

export const comparisons: Comparison[] = [
  {
    slug: "chatgpt-vs-claude-vs-grok",
    toolSlugs: ["chatgpt", "claude", "grok"],
    updatedAt: "2026-08-22",
    copy: {
      es: {
        title: "ChatGPT vs Claude vs Grok",
        excerpt:
          "Tres asistentes de texto, tres temperamentos. Cuál elegir según la tarea.",
        verdict:
          "Si quieres el comodín con más integraciones, ChatGPT. Si el texto largo y el tono importan, Claude. Si necesitas pulso de actualidad y un estilo más directo, Grok. Muchos equipos usan dos: uno para redactar y otro para contrastar.",
        rows: [
          {
            label: "Mejor para",
            values: [
              "Tareas generales y ecosistema",
              "Escritura larga y documentos",
              "Actualidad y tono directo",
            ],
          },
          {
            label: "Calidad de prosa",
            values: ["Muy alta", "Excelente", "Alta, más informal"],
          },
          {
            label: "Fuentes / actualidad",
            values: ["Buena con búsqueda", "Buena bajo petición", "Muy buena"],
          },
          {
            label: "Código",
            values: ["Muy bueno", "Muy bueno", "Bueno"],
          },
          {
            label: "Plan de entrada",
            values: ["Gratis + Plus", "Gratis + Pro", "Gratis + planes xAI"],
          },
          {
            label: "Curva de aprendizaje",
            values: ["Baja", "Baja", "Baja"],
          },
        ],
      },
      en: {
        title: "ChatGPT vs Claude vs Grok",
        excerpt:
          "Three text assistants, three temperaments. Which one to pick by task.",
        verdict:
          "If you want the most connected generalist, ChatGPT. If long writing and tone matter, Claude. If you need a live news pulse and a more direct style, Grok. Many teams keep two: one to draft, one to challenge.",
        rows: [
          {
            label: "Best for",
            values: [
              "General work and ecosystem",
              "Long-form writing and documents",
              "Current events and direct tone",
            ],
          },
          {
            label: "Prose quality",
            values: ["Very high", "Excellent", "High, more informal"],
          },
          {
            label: "Sources / freshness",
            values: ["Good with search", "Good on request", "Very good"],
          },
          {
            label: "Coding",
            values: ["Very good", "Very good", "Good"],
          },
          {
            label: "Entry plan",
            values: ["Free + Plus", "Free + Pro", "Free + xAI plans"],
          },
          {
            label: "Learning curve",
            values: ["Low", "Low", "Low"],
          },
        ],
      },
    },
  },
  {
    slug: "cursor-vs-chatgpt-codigo",
    toolSlugs: ["cursor", "chatgpt"],
    updatedAt: "2026-08-21",
    copy: {
      es: {
        title: "Cursor vs ChatGPT para programar",
        excerpt:
          "Chat en el navegador o un agente dentro del repositorio. No resuelven el mismo problema.",
        verdict:
          "ChatGPT es excelente para diseñar, explicar y pegar snippets. Cursor gana cuando el cambio tiene que aterrizar en archivos reales del repo. La combinación habitual: pensar el enfoque en ChatGPT o Claude, aplicar y revisar en Cursor.",
        rows: [
          {
            label: "Contexto",
            values: ["El repo indexado", "Lo que pegas en el chat"],
          },
          {
            label: "Aplicar cambios",
            values: ["Diffs en el editor", "Copiar y pegar a mano"],
          },
          {
            label: "Mejor momento",
            values: ["Implementar y refactorizar", "Diseñar y desatascar"],
          },
          {
            label: "Riesgo",
            values: ["Agentes demasiado ambiciosos", "Código desconectado del repo"],
          },
          {
            label: "Precio típico",
            values: ["Suscripción de IDE", "Plus / Team"],
          },
        ],
      },
      en: {
        title: "Cursor vs ChatGPT for coding",
        excerpt:
          "A browser chat or an agent inside the repo. They do not solve the same problem.",
        verdict:
          "ChatGPT is excellent for designing, explaining and pasting snippets. Cursor wins when the change has to land in real repo files. The usual combo: think the approach in ChatGPT or Claude, apply and review in Cursor.",
        rows: [
          {
            label: "Context",
            values: ["The indexed repo", "Whatever you paste into the chat"],
          },
          {
            label: "Applying changes",
            values: ["Diffs in the editor", "Copy and paste by hand"],
          },
          {
            label: "Best moment",
            values: ["Implement and refactor", "Design and unblock"],
          },
          {
            label: "Risk",
            values: ["Over-ambitious agents", "Code disconnected from the repo"],
          },
          {
            label: "Typical price",
            values: ["IDE subscription", "Plus / Team"],
          },
        ],
      },
    },
  },
  {
    slug: "chatgpt-vs-perplexity",
    toolSlugs: ["chatgpt", "perplexity"],
    updatedAt: "2026-08-26",
    copy: {
      es: {
        title: "ChatGPT vs Perplexity",
        excerpt:
          "Redactar y pensar en un chat, o briefar con citas. No sustituyen el mismo paso del trabajo.",
        verdict:
          "Usa Perplexity para acotar hechos y abrir fuentes. Pasa a ChatGPT (o Claude) cuando toque redactar, variar tono o guardar el flujo. Si pegas el párrafo de Perplexity en un informe, estás publicando a un intermediario.",
        rows: [
          {
            label: "Mejor para",
            values: [
              "Redactar, idear y un flujo que se repite",
              "Pregunta acotada con citas que puedes abrir",
            ],
          },
          {
            label: "Fuentes",
            values: [
              "Búsqueda opcional; hay que pedir que marque lo incierto",
              "Citas en la respuesta; el trabajo es abrir dos",
            ],
          },
          {
            label: "Prosa",
            values: ["Muy alta si el briefing es bueno", "Correcta; no es un editor"],
          },
          {
            label: "Riesgo",
            values: [
              "Texto fluido que inventa con naturalidad",
              "Resumen que parece fuente primaria y no lo es",
            ],
          },
          {
            label: "Cuándo cambiar",
            values: [
              "Cuando ya tienes hechos y falta el entregable",
              "Cuando aún no sabes qué está respaldado",
            ],
          },
          {
            label: "Plan de entrada",
            values: ["Gratis + Plus / Team", "Gratis + Pro"],
          },
        ],
        faq: [
          {
            q: "¿Puedo usar solo uno de los dos?",
            a: "Sí. Si solo escribes, ChatGPT basta. Si solo investigas una cifra o una fecha, Perplexity basta. El error es usar el mismo chat para las dos cosas y no abrir fuentes.",
          },
          {
            q: "¿Cuál posiciona mejor como «buscador con IA»?",
            a: "Perplexity se presenta como respuesta con citas. ChatGPT con búsqueda también cita, pero el hábito por defecto es redactar. Elige por el entregable, no por el marketing.",
          },
          {
            q: "¿Y Claude?",
            a: "Cuando el texto es largo y el tono importa, Claude suele ganar a los dos como editor. No sustituye a Perplexity para abrir fuentes.",
          },
        ],
      },
      en: {
        title: "ChatGPT vs Perplexity",
        excerpt:
          "Write and think in a chat, or brief with citations. They do not replace the same step.",
        verdict:
          "Use Perplexity to bound facts and open sources. Move to ChatGPT (or Claude) when you need to draft, vary tone or keep a repeatable flow. If you paste Perplexity's paragraph into a report, you are publishing an intermediary.",
        rows: [
          {
            label: "Best for",
            values: [
              "Drafting, ideation and a flow you repeat",
              "A bounded question with citations you can open",
            ],
          },
          {
            label: "Sources",
            values: [
              "Optional search; you must ask it to flag uncertainty",
              "Citations in the answer; the work is opening two of them",
            ],
          },
          {
            label: "Prose",
            values: ["Very high if the brief is good", "Fine; it is not an editor"],
          },
          {
            label: "Risk",
            values: [
              "Fluent text that invents smoothly",
              "A summary that looks like a primary source and is not",
            ],
          },
          {
            label: "When to switch",
            values: [
              "When you already have facts and need the deliverable",
              "When you still do not know what is backed",
            ],
          },
          {
            label: "Entry plan",
            values: ["Free + Plus / Team", "Free + Pro"],
          },
        ],
        faq: [
          {
            q: "Can I use only one of them?",
            a: "Yes. If you only write, ChatGPT is enough. If you only need a figure or a date, Perplexity is enough. The failure is using one chat for both and never opening sources.",
          },
          {
            q: "Which one is the better «AI search»?",
            a: "Perplexity presents itself as an answer with citations. ChatGPT with search also cites, but the default habit is drafting. Pick by the deliverable, not the marketing.",
          },
          {
            q: "What about Claude?",
            a: "When the piece is long and voice matters, Claude usually beats both as an editor. It does not replace Perplexity for opening sources.",
          },
        ],
      },
    },
  },
  {
    slug: "midjourney-vs-runway",
    toolSlugs: ["midjourney", "runway"],
    updatedAt: "2026-08-27",
    copy: {
      es: {
        title: "Midjourney vs Runway",
        excerpt:
          "Un still que se puede dirigir, o un clip corto. No resuelven el mismo fotograma.",
        verdict:
          "Empieza en Midjourney si el plano aún no existe. Pasa a Runway cuando el still ya aguanta y solo falta un gesto o una cámara. Si generas vídeo sobre un encuadre flojo, multiplicas el problema y quemas créditos. No elijas por «quién hace IA visual»: elige por si el entregable es una imagen o un prototipo de 4–8 segundos.",
        rows: [
          {
            label: "Mejor para",
            values: [
              "Dirección de arte, moodboards y stills de campaña",
              "Clips de 4–8 s y prototipos de motion",
            ],
          },
          {
            label: "Unidad de trabajo",
            values: [
              "Un plano fijo que puedes variar y remixar",
              "Un still + una acción + una cámara",
            ],
          },
          {
            label: "Calidad que importa",
            values: [
              "Sujeto, luz y encuadre cuando el prompt está pensado",
              "El gesto; la física y las manos siguen fallando",
            ],
          },
          {
            label: "Riesgo",
            values: [
              "Minutos en prompts vagos y un look «bonito genérico»",
              "Créditos en tomas a ciegas; un clip «wow» no es un master",
            ],
          },
          {
            label: "Cuándo cambiar",
            values: [
              "Cuando el still ya se sostiene y quieres movimiento",
              "Cuando el plano base es flojo: vuelve al still, no apiles adjetivos",
            ],
          },
          {
            label: "Plan de entrada",
            values: [
              "De pago (Basic / Standard / Pro / Mega)",
              "Gratis con créditos + Standard / Pro",
            ],
          },
          {
            label: "No lo uses para",
            values: [
              "Logos, texto nítido o UI pixel-perfect",
              "Un vídeo de 60 s para cliente final sin post",
            ],
          },
        ],
        faq: [
          {
            q: "¿Puedo saltarme Midjourney y generar el vídeo desde texto en Runway?",
            a: "Puedes. Suele salir más caro y más flojo. Si no controlas el plano en un still, el modelo de vídeo improvisa sujeto, luz y cámara a la vez. Un still dirigido (Midjourney o una foto real) reduce las variables.",
          },
          {
            q: "¿Runway sustituye a Midjourney para stills?",
            a: "No. Runway es motion. Midjourney está pensado para grids, variaciones y un estilo que puedes iterar. Si solo necesitas imágenes, no pagues créditos de vídeo.",
          },
          {
            q: "¿Sirve esta pareja para un anuncio de cliente?",
            a: "Sirve para moodboard y prototipo interno. El still o el clip «bonito» no limpian derechos de marca, de personas ni de estilo ajeno. El master de campaña sigue yendo a edición y a un rodaje si hace falta.",
          },
        ],
      },
      en: {
        title: "Midjourney vs Runway",
        excerpt:
          "A still you can direct, or a short clip. They do not solve the same frame.",
        verdict:
          "Start in Midjourney if the shot does not exist yet. Move to Runway when the still already holds and you only need a gesture or a camera move. If you generate video on a weak frame, you multiply the problem and burn credits. Do not pick by «who does visual AI»: pick by whether the deliverable is an image or a 4–8 second prototype.",
        rows: [
          {
            label: "Best for",
            values: [
              "Art direction, moodboards and campaign stills",
              "4–8 s clips and motion prototypes",
            ],
          },
          {
            label: "Unit of work",
            values: [
              "A locked frame you can vary and remix",
              "A still + one action + one camera",
            ],
          },
          {
            label: "Quality that matters",
            values: [
              "Subject, light and framing when the prompt is thought through",
              "The gesture; physics and hands still fail",
            ],
          },
          {
            label: "Risk",
            values: [
              "Minutes on vague prompts and a generic pretty look",
              "Credits on blind takes; a «wow» clip is not a master",
            ],
          },
          {
            label: "When to switch",
            values: [
              "When the still already holds and you want motion",
              "When the base frame is weak: go back to the still, do not stack adjectives",
            ],
          },
          {
            label: "Entry plan",
            values: [
              "Paid (Basic / Standard / Pro / Mega)",
              "Free credits + Standard / Pro",
            ],
          },
          {
            label: "Do not use it for",
            values: [
              "Logos, sharp type or pixel-perfect UI",
              "A 60 s film for a final client with no post",
            ],
          },
        ],
        faq: [
          {
            q: "Can I skip Midjourney and generate the video from text in Runway?",
            a: "You can. It is usually more expensive and weaker. If you do not lock the shot as a still, the video model improvises subject, light and camera at once. A directed still (Midjourney or a real photo) cuts the variables.",
          },
          {
            q: "Does Runway replace Midjourney for stills?",
            a: "No. Runway is motion. Midjourney is built for grids, variations and a style you can iterate. If you only need images, do not spend video credits.",
          },
          {
            q: "Is this pair enough for a client ad?",
            a: "It is enough for a moodboard and an internal prototype. A pretty still or clip does not clear brand, likeness or someone else’s style. The campaign master still goes to an editor — and to a shoot if you need one.",
          },
        ],
      },
    },
  },
  {
    slug: "grok-bot-vs-hermes-agent",
    toolSlugs: ["grok-bot", "hermes-agent"],
    updatedAt: "2026-08-28",
    copy: {
      es: {
        title: "Grok Bot vs Hermes Agent",
        excerpt:
          "Un teammate con ordenador en la nube, o un agente CLI en tu máquina. No es grok.com contra un chat.",
        verdict:
          "Elige Grok Bot si el trabajo debe terminar en apps web reales (mail, docs, un panel) y quieres un compañero con memoria y un Agent Computer compartido. Elige Hermes si vives en la terminal, quieres el agente en tu propio hardware y aceptas montar proveedor y gateway tú. Grok Bot no es el chat de grok.com ni el Grok de X: es un teammate de pago con onboarding en cursor.com/bot/onboarding. Hermes es software libre en hermes-agent.nousresearch.com; el modelo lo pagas aparte.",
        rows: [
          {
            label: "Mejor para",
            values: [
              "Delegar un oficio que acaba en herramientas reales",
              "Un agente en tu terminal con archivos y shell locales",
            ],
          },
          {
            label: "Dónde vive",
            values: [
              "Ordenador en la nube (navegador, archivos, terminal)",
              "Tu máquina; gateway a Telegram/Slack después",
            ],
          },
          {
            label: "Memoria y oficio",
            values: [
              "Bot con nombre, instrucciones y memoria por rol",
              "Hilos en CLI; tú defines modelo y herramientas",
            ],
          },
          {
            label: "Logins y control",
            values: [
              "Tú entras en Agent Computer (2FA, CAPTCHA); sesión compartida",
              "Tus credenciales de API o modelo local en tu box",
            ],
          },
          {
            label: "Riesgo",
            values: [
              "Sin oficio claro, improvisa y ensucia la máquina compartida",
              "Gateway o cron antes de que el chat funcione = bot mudo",
            ],
          },
          {
            label: "Cuándo cambiar",
            values: [
              "Cuando el trabajo es código en tu repo local, no en la nube",
              "Cuando necesitas un navegador remoto y handoffs con revisión",
            ],
          },
          {
            label: "Plan de entrada",
            values: [
              "SuperGrok Plus/Heavy o Cursor Pro+/Ultra/Teams",
              "Gratis el agente; pagas proveedor del modelo o hardware local",
            ],
          },
        ],
        faq: [
          {
            q: "¿Grok Bot es lo mismo que grok.com?",
            a: "No. grok.com es un chat de texto. Grok Bot es un teammate con un ordenador en la nube. Si solo quieres preguntar algo, no instales el bot.",
          },
          {
            q: "¿Hermes sustituye a Grok Bot?",
            a: "No en apps web. Hermes opera en tu terminal y en tus archivos. Si el entregable es un informe en Google Docs o un panel de admin, Grok Bot está pensado para eso. Si el entregable es un script, un diff o un bot en Telegram, Hermes encaja mejor.",
          },
          {
            q: "¿Cuál es más barato?",
            a: "Hermes no tiene plan propio: pagas el modelo o corres local. Grok Bot exige un plan de Cursor/xAI y no tiene tier gratuito. La comparación no es «gratis vs de pago» sino «¿quieres un teammate en la nube o un agente en tu máquina?».",
          },
        ],
      },
      en: {
        title: "Grok Bot vs Hermes Agent",
        excerpt:
          "A teammate with a cloud computer, or a CLI agent on your machine. Not grok.com vs a chat.",
        verdict:
          "Pick Grok Bot when the work must finish in real web apps (mail, docs, an admin panel) and you want a teammate with memory and a shared Agent Computer. Pick Hermes when you live in the terminal, want the agent on your own hardware and will wire up provider and gateway yourself. Grok Bot is not the grok.com chat or the Grok on X: it is a paid teammate with onboarding at cursor.com/bot/onboarding. Hermes is free software at hermes-agent.nousresearch.com; you pay for the model separately.",
        rows: [
          {
            label: "Best for",
            values: [
              "Delegating a job that ends in real tools",
              "An agent in your terminal with local files and shell",
            ],
          },
          {
            label: "Where it lives",
            values: [
              "Cloud computer (browser, files, terminal)",
              "Your machine; Telegram/Slack gateway later",
            ],
          },
          {
            label: "Memory and job",
            values: [
              "Named bot with instructions and per-role memory",
              "CLI threads; you pick model and tools",
            ],
          },
          {
            label: "Logins and control",
            values: [
              "You sign in via Agent Computer (2FA, CAPTCHA); shared session",
              "Your API credentials or local model on your box",
            ],
          },
          {
            label: "Risk",
            values: [
              "Without a clear job, it improvises and dirties the shared machine",
              "Gateway or cron before chat works = a mute bot",
            ],
          },
          {
            label: "When to switch",
            values: [
              "When the work is code in your local repo, not in the cloud",
              "When you need a remote browser and handoffs with a review point",
            ],
          },
          {
            label: "Entry plan",
            values: [
              "SuperGrok Plus/Heavy or Cursor Pro+/Ultra/Teams",
              "Agent is free; you pay the model provider or local hardware",
            ],
          },
        ],
        faq: [
          {
            q: "Is Grok Bot the same as grok.com?",
            a: "No. grok.com is a text chat. Grok Bot is a teammate with a cloud computer. If you only want to ask a question, do not install the bot.",
          },
          {
            q: "Does Hermes replace Grok Bot?",
            a: "Not for web apps. Hermes runs in your terminal and on your files. If the deliverable is a report in Google Docs or an admin panel, Grok Bot is built for that. If the deliverable is a script, a diff or a Telegram bot, Hermes fits better.",
          },
          {
            q: "Which one is cheaper?",
            a: "Hermes has no plan of its own: you pay for the model or run local. Grok Bot requires a Cursor/xAI plan and has no free tier. The comparison is not «free vs paid» but «do you want a cloud teammate or an agent on your machine?».",
          },
        ],
      },
    },
  },
  {
    slug: "mejores-herramientas-ia-escribir",
    toolSlugs: ["chatgpt", "claude", "notion-ai"],
    updatedAt: "2026-09-03",
    copy: {
      es: {
        title: "Mejores herramientas de IA para escribir (2026)",
        excerpt:
          "ChatGPT, Claude y Notion AI cubren tres sitios distintos del flujo de escritura. Cuál encaja según dónde empiezas el texto.",
        verdict:
          "Para borradores rápidos, variar tono y un comodín que aguanta casi cualquier tarea, ChatGPT. Para artículos largos, informes y un tono cuidado, Claude. Para escribir donde ya viven tus notas, actas y wikis, Notion AI. Muchos equipos combinan dos: Claude o ChatGPT para el primer borrador y Notion AI para pulir dentro del documento compartido.",
        rows: [
          {
            label: "Mejor para",
            values: [
              "Borradores, ideación y tareas variadas",
              "Texto largo, edición y tono consistente",
              "Escribir dentro de páginas y bases de datos",
            ],
          },
          {
            label: "Calidad de prosa",
            values: ["Muy alta", "Excelente en piezas largas", "Buena; depende del contexto de la página"],
          },
          {
            label: "Dónde trabajas",
            values: ["Chat en navegador o app", "Chat en navegador o app", "Dentro de Notion, junto a tus docs"],
          },
          {
            label: "Contexto de documentos",
            values: [
              "Lo que pegas o subes al chat",
              "Lo que pegas; muy bueno con archivos largos",
              "Lee la página, la base y el workspace",
            ],
          },
          {
            label: "Colaboración",
            values: [
              "Compartir chat o exportar texto",
              "Compartir chat o exportar texto",
              "Comentarios, permisos y wiki en el mismo sitio",
            ],
          },
          {
            label: "Riesgo",
            values: [
              "Texto fluido que inventa con naturalidad",
              "Puede alargar sin aportar si el briefing es vago",
              "Resume bien, pero no sustituye un editor dedicado",
            ],
          },
          {
            label: "Plan de entrada",
            values: ["Gratis + Plus / Team", "Gratis + Pro", "Incluido en planes Business / Plus de Notion"],
          },
        ],
        faq: [
          {
            q: "¿Puedo usar solo una de las tres?",
            a: "Sí. Si solo redactas en un chat, ChatGPT o Claude bastan. Si tu fuente de verdad ya es Notion, Notion AI evita copiar y pegar. El error es elegir por marketing y no por dónde empieza tu texto.",
          },
          {
            q: "¿Notion AI sustituye a ChatGPT o Claude?",
            a: "No del todo. Notion AI gana cuando el borrador vive en una página compartida. Para idear desde cero, variar estilos o trabajar fuera de Notion, un chat dedicado sigue siendo más flexible.",
          },
          {
            q: "¿Cuál es mejor para textos largos?",
            a: "Claude suele ganar en artículos, informes y edición de tono en piezas de varias páginas. ChatGPT también aguanta, pero Claude destaca cuando el briefing pide voz y estructura. Notion AI ayuda a resumir y reescribir bloques dentro de un doc existente.",
          },
          {
            q: "¿Son gratuitas?",
            a: "Las tres tienen tier gratuito o prueba limitada, pero el uso serio de escritura suele pedir un plan de pago: Plus o Team en ChatGPT, Pro en Claude, y un plan de Notion con IA incluida o como add-on según tu workspace.",
          },
        ],
      },
      en: {
        title: "Best AI writing tools (2026)",
        excerpt:
          "ChatGPT, Claude and Notion AI cover three different spots in the writing flow. Which one fits depends on where your text starts.",
        verdict:
          "For quick drafts, tone shifts and a generalist that handles almost any task, ChatGPT. For long articles, reports and careful voice, Claude. For writing where your notes, minutes and wikis already live, Notion AI. Many teams combine two: Claude or ChatGPT for the first draft, Notion AI to polish inside the shared document.",
        rows: [
          {
            label: "Best for",
            values: [
              "Drafts, ideation and varied tasks",
              "Long-form copy, editing and consistent tone",
              "Writing inside pages and databases",
            ],
          },
          {
            label: "Prose quality",
            values: ["Very high", "Excellent on long pieces", "Good; depends on page context"],
          },
          {
            label: "Where you work",
            values: ["Browser or app chat", "Browser or app chat", "Inside Notion, next to your docs"],
          },
          {
            label: "Document context",
            values: [
              "Whatever you paste or upload to the chat",
              "Whatever you paste; very good with long files",
              "Reads the page, database and workspace",
            ],
          },
          {
            label: "Collaboration",
            values: [
              "Share the chat or export text",
              "Share the chat or export text",
              "Comments, permissions and wiki in one place",
            ],
          },
          {
            label: "Risk",
            values: [
              "Fluent text that invents smoothly",
              "Can pad without adding if the brief is vague",
              "Summarizes well, but is not a dedicated editor",
            ],
          },
          {
            label: "Entry plan",
            values: ["Free + Plus / Team", "Free + Pro", "Included in Notion Business / Plus plans"],
          },
        ],
        faq: [
          {
            q: "Can I use only one of the three?",
            a: "Yes. If you only draft in a chat, ChatGPT or Claude is enough. If your source of truth is already Notion, Notion AI saves copy-paste. The mistake is picking by marketing instead of where your text starts.",
          },
          {
            q: "Does Notion AI replace ChatGPT or Claude?",
            a: "Not entirely. Notion AI wins when the draft lives in a shared page. For ideation from scratch, style shifts or work outside Notion, a dedicated chat stays more flexible.",
          },
          {
            q: "Which one is best for long-form writing?",
            a: "Claude usually wins on articles, reports and tone editing across several pages. ChatGPT also holds up, but Claude stands out when the brief asks for voice and structure. Notion AI helps summarize and rewrite blocks inside an existing doc.",
          },
          {
            q: "Are they free?",
            a: "All three have a free tier or limited trial, but serious writing usually needs a paid plan: Plus or Team on ChatGPT, Pro on Claude, and a Notion plan with AI included or as an add-on depending on your workspace.",
          },
        ],
      },
    },
  },
];

export function getComparison(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}
