import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "elegir-modelo-texto";

export const elegirModeloTexto: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "beginner",
  estimatedTime: 18,
  publishedAt: "2026-09-12",
  lastUpdated: "2026-09-12",
  toolsUsed: ["chatgpt", "claude", "perplexity", "grok"],
  relatedTutorials: [
    "chatgpt-alternativas",
    "chatgpt-primeros-pasos",
    "claude-escritura-larga",
    "perplexity-investigacion-con-fuentes",
    "grok-primer-flujo",
  ],
  tags: [
    "texto",
    "modelo",
    "chatgpt",
    "claude",
    "perplexity",
    "grok",
    "decisión",
    "principiantes",
  ],
  hero: tutorialHero(slug, {
    es: {
      alt: "Bloc de notas con tipo de tarea y cuatro iconos de chat: ChatGPT, Claude, Perplexity y Grok",
      caption: "El modelo correcto depende del trabajo, no del ranking del mes.",
      hint: "Hero 1600×900: notas con «tarea: resumen con fuentes» y cuatro logos discretos de chatgpt.com, claude.ai, perplexity.ai y grok.com; una flecha señala Perplexity.",
    },
    en: {
      alt: "Notepad with task type and four chat icons: ChatGPT, Claude, Perplexity and Grok",
      caption: "The right model depends on the job, not this month’s ranking.",
      hint: "Hero 1600×900: notes with «task: summary with sources» and four discreet logos for chatgpt.com, claude.ai, perplexity.ai and grok.com; an arrow points to Perplexity.",
    },
  }),
  copy: {
    es: {
      title: "Cómo elegir un modelo de texto para tu tarea (2026)",
      metaTitle: "Elegir modelo de texto: ChatGPT, Claude, Perplexity o Grok",
      metaDescription:
        "Decide qué chat de texto usar según tipo de tarea, contexto, citas, coste, privacidad y velocidad. Flujo de 18 minutos con un primer prompt de prueba.",
      excerpt:
        "Antes de abrir un chat, nombra el trabajo real. Siete criterios prácticos y un prompt de prueba para confirmar que elegiste bien.",
      intro:
        "Hay docenas de modelos de texto en 2026. Para un trabajo concreto no necesitas un ranking absoluto: necesitas saber si tu tarea es redacción, investigación con fuentes, ayuda con código, chat rápido o lectura de algo reciente. Este flujo dura unos 18 minutos. Sales con un modelo elegido, un primer prompt escrito y una respuesta que confirma o corrige la decisión — sin probar cinco chats a la vez ni confundir grok.com con Grok Bot.",
      problem:
        "La gente abre el chat que ya tiene instalado y espera que sirva para todo. Pega un informe de 40 páginas en un chat sin contexto largo, o pide citas en un modelo que no enlaza fuentes, o usa Grok Bot cuando solo quería una pregunta de actualidad en grok.com. Sin describir la tarea primero, cualquier modelo parece «malo» o «mágico» por azar.",
      whatYouWillLearn: [
        "Clasificar tu trabajo en un tipo: redacción, investigación, código, chat rápido o actualidad",
        "Aplicar criterios de contexto, citas, coste, privacidad y velocidad",
        "Descartar herramientas que no encajan antes de abrir pestañas",
        "Elegir un modelo principal y escribir un prompt de prueba acotado",
        "Validar la elección con una respuesta real y saber cuándo cambiar",
      ],
      prerequisites: [
        "Una tarea real que harás hoy o esta semana (no un ejercicio abstracto)",
        "Acceso a al menos dos de: chatgpt.com, claude.ai, perplexity.ai, grok.com",
        "15–20 minutos y un bloc de notas",
        "Si tu tarea es un teammate con máquina remota, eso es Grok Bot — otro tutorial",
      ],
      steps: [
        {
          title: "Nombra el trabajo en una línea",
          content:
            "Antes de elegir modelo, escribe en el bloc: «Necesito [entregable] para [audiencia/situación]». Ejemplos: «Resumen de 300 palabras con fuentes para un informe interno», «Tres variantes de email de ventas», «Explicar un error de Python en mi script», «Qué se publicó esta semana sobre [tema]». Si no puedes completar la frase, el problema no es el modelo — es el encargo. Marca una categoría: redacción, investigación, código, chat rápido o actualidad.",
          whatYouShouldSee:
            "Una línea de tarea completa y una etiqueta de categoría (redacción, investigación, código, chat rápido o actualidad).",
          tip: "Una tarea = un modelo principal. Si mezclas «investigar y redactar informe largo», divide en dos pasos con dos herramientas si hace falta.",
          imageDescription:
            "Bloc de notas con una línea de tarea subrayada y cinco etiquetas de categoría; una marcada con rotulador.",
        },
        {
          title: "Empareja el tipo de tarea con el modelo",
          content:
            "Usa esta guía rápida — no como ley eterna, sino como primer filtro. Redacción y edición larga → Claude (claude.ai) o ChatGPT con briefing claro. Investigación con fuentes enlazadas → Perplexity (perplexity.ai). Variantes rápidas de texto corto → ChatGPT (chatgpt.com). Actualidad y ángulo directo sobre temas recientes → Grok en grok.com (no Grok Bot). Ayuda con código en un repo → Cursor tiene su tutorial; aquí nos quedamos en chat de texto. Anota 1–2 candidatos junto a tu línea de tarea.",
          whatYouShouldSee:
            "Una o dos herramientas anotadas al lado de la categoría. Grok solo aparece si marcaste «actualidad».",
          warning:
            "grok.com es chat web. Grok Bot es teammate con Agent Computer — producto distinto. Este tutorial no usa Bot.",
          proTip:
            "Si ya dudas entre ChatGPT y Claude para redacción, el tutorial chatgpt-alternativas profundiza esa comparación con el mismo briefing.",
          imageDescription:
            "Tabla simple de cinco filas (redacción, investigación, código, chat rápido, actualidad) con flechas hacia logos de Claude, Perplexity, ChatGPT, Grok y una nota «Cursor = otro tutorial».",
        },
        {
          title: "Comprueba si necesitas ventana de contexto larga",
          content:
            "¿Tu material supera unas 3–4 páginas pegadas en un solo mensaje? ¿Es un PDF, acta larga o varios docs de referencia? Si sí, prioriza Claude o un plan de ChatGPT/Claude que permita archivos adjuntos o Projects. Si el trabajo es un párrafo o un email de 150 palabras, el contexto largo no decide — cualquier chat generalista basta. Anota «contexto largo: sí/no» y ajusta la lista de candidatos.",
          whatYouShouldSee:
            "Campo «contexto largo: sí/no» en el bloc. Si es sí, Claude o Projects quedan arriba; si es no, la lista no cambia mucho.",
          tip: "Para flujos repetidos con los mismos archivos, mira el tutorial de Claude Projects — el contexto vive en el proyecto, no en cada pegado.",
          imageDescription:
            "Bloc con «contexto largo: sí» y un PDF de varias páginas al lado; flecha hacia claude.ai.",
        },
        {
          title: "¿Necesitas citas y fuentes verificables?",
          content:
            "Si el entregable debe incluir enlaces a fuentes («qué dice la documentación oficial», «estudios de 2025–2026»), Perplexity suele ir primero: muestra fuentes en la respuesta y puedes pedir modo Focus en documentación o web. Los chats generalistas (ChatGPT, Claude, Grok) pueden inventar enlaces o citar de memoria — útiles para borradores, no para bibliografía. Si necesitas citas, sube Perplexity al primer puesto aunque también redactes después en otro chat.",
          whatYouShouldSee:
            "Decisión anotada: «citas obligatorias: sí/no». Si es sí, Perplexity marcado como herramienta principal para la fase de investigación.",
          warning:
            "Ningún chat sustituye tu revisión. Perplexity enlaza; tú compruebas que el enlace dice lo que afirma la respuesta.",
          imageDescription:
            "perplexity.ai con respuesta que muestra lista numerada de fuentes con URLs visibles.",
        },
        {
          title: "Filtra por coste, privacidad y velocidad",
          content:
            "Tres preguntas finales antes de abrir el chat. Coste: ¿el plan gratis te basta o necesitas el modelo más capaz de pago para este trabajo? Si es un borrador interno, prueba gratis primero. Privacidad: ¿pegas datos de clientes, contratos o código propietario? Revisa la política de retención del proveedor y evita pegar secretos en cualquier chat público; algunos planes empresariales ofrecen más control. Velocidad: ¿necesitas respuesta en 30 segundos para iterar titulares? ChatGPT y Grok suelen responder rápido. ¿Puedes esperar 2 minutos por un mapa de secciones cuidado? Claude vale la espera. Tacha candidatos que fallen un criterio crítico.",
          whatYouShouldSee:
            "Tres casillas en el bloc (coste, privacidad, velocidad) con sí/no o «ok». Lista de candidatos reducida a uno principal.",
          tip: "Si privacidad es crítica y no tienes plan empresarial, resume o anonimiza antes de pegar — ningún tutorial sustituye la política de tu empresa.",
          imageDescription:
            "Checklist de tres ítems (coste, privacidad, velocidad) con un solo logo de herramienta resaltado al final.",
        },
        {
          title: "Elige un modelo y escribe el prompt de prueba",
          content:
            "Con un candidato principal, abre solo esa herramienta. Escribe un prompt de prueba acotado — no «hazme el informe entero». Incluye: (1) entregable pequeño («mapa de 5 secciones», «tres titulares», «tres fuentes con enlace»), (2) restricciones («sin cifras inventadas», «marca [?] lo que no esté en mis notas»), (3) formato de salida. Ejemplo para Perplexity: «Resume en 150 palabras qué dice la documentación oficial de [producto] sobre [tema]. Incluye 3 enlaces. Marca si algo es inferencia.» Ejemplo para Claude: «Con estas notas [pegar], mapa de secciones para informe de 800 palabras. No redactes aún.»",
          whatYouShouldSee:
            "Un prompt de 4–8 líneas en el bloc, copiado al composer del chat elegido. Una sola pestaña abierta.",
          warning:
            "Abrir cuatro chats con el mismo prompt antes de decidir genera ruido. Prueba uno, evalúa, luego compara si hace falta.",
          imageDescription:
            "Composer de un solo chat (p. ej. claude.ai) con prompt acotado visible y el bloc de notas con la decisión «modelo: Claude» al lado.",
        },
        {
          title: "Ejecuta la prueba y confirma o cambia",
          content:
            "Envía el prompt. Evalúa en 60 segundos: ¿entregó lo pedido? ¿respetó restricciones? ¿inventó algo grave? Si sí a las dos primeras y no a la tercera, guarda la regla: «[tipo de tarea] → [herramienta]». Si falla, no culpes al modelo sin revisar el prompt — acota más el entregable. Si el prompt era bueno y la herramienta no encaja (p. ej. pediste fuentes y no hay enlaces), cambia al segundo candidato de tu lista y repite el mismo prompt. Anota el resultado en una línea para la próxima semana.",
          whatYouShouldSee:
            "Respuesta acotada al entregable de prueba. Una línea guardada tipo «investigación con fuentes → Perplexity» o «borrador largo → Claude».",
          proTip:
            "Revisa la regla en 30 días. Los modelos cambian; tu tipo de trabajo suele ser estable.",
          imageDescription:
            "Respuesta del chat con mapa o fuentes visibles; notas con una regla de una línea y fecha de hoy.",
        },
      ],
      realUseCases: [
        {
          title: "Informe interno con referencias",
          body: "Categoría: investigación + redacción. Perplexity para las tres fuentes con enlace; Claude para el borrador de 800 palabras con las notas recopiladas. ChatGPT no fue el primero — faltaban citas.",
        },
        {
          title: "Email de seguimiento a cliente",
          body: "Categoría: chat rápido. Contexto corto, sin citas obligatorias. ChatGPT en plan gratis; respuesta en menos de un minuto. Claude habría funcionado, pero no aportaba ventaja.",
        },
        {
          title: "Post sobre anuncio de esta semana",
          body: "Categoría: actualidad. Grok en grok.com con pregunta datada para ángulo; luego edición manual. No Grok Bot — no hacía falta máquina remota.",
        },
        {
          title: "Acta de reunión de 12 páginas",
          body: "Categoría: redacción, contexto largo. Claude con el PDF adjunto; prompt de prueba = mapa de secciones. ChatGPT gratis truncó el material — se subió a Claude.",
        },
      ],
      commonMistakes: [
        {
          title: "Elegir por el chat que ya está abierto",
          body: "La pestaña por defecto no es criterio. Nombra la tarea primero.",
        },
        {
          title: "Pedir citas en un chat sin modo fuentes",
          body: "ChatGPT y Claude redactan bien; para enlaces verificables, Perplexity o búsqueda manual antes.",
        },
        {
          title: "Confundir Grok con Grok Bot",
          body: "grok.com = chat de texto. Grok Bot = teammate. Para elegir modelo de texto, quédate en los chats web.",
        },
        {
          title: "Probar cinco modelos sin criterio",
          body: "Un prompt acotado en un candidato basta para validar. Comparar en masa sin tabla de criterios no enseña nada.",
        },
        {
          title: "Prompt de prueba demasiado grande",
          body: "«Hazme todo el informe» no prueba nada. Pide mapa, tres titulares o tres fuentes — luego escalas.",
        },
      ],
      conclusion:
        "Elegir un modelo de texto no es adivinar el ranking del mes: es emparejar tu tarea con contexto, citas, coste, privacidad y velocidad. En 18 minutos nombras el trabajo, filtras candidatos, escribes un prompt de prueba y guardas una regla de una línea. Si la respuesta encaja, sigue con ese chat. Si no, ajusta el prompt o el segundo candidato — no abras cinco pestañas por ansiedad.",
      nextSteps: [
        "Si dudas entre ChatGPT y Claude para redacción, sigue el tutorial chatgpt-alternativas con el mismo briefing.",
        "Para investigación profunda con fuentes, abre perplexity-investigacion-con-fuentes.",
        "Para documentos largos en Claude, continúa con claude-escritura-larga.",
        "Para grok.com sin mezclar Bot, usa grok-primer-flujo.",
        "Si aún no tienes método de briefing, empieza por chatgpt-primeros-pasos.",
      ],
      takeaway:
        "Tarea en una línea → tipo → contexto, citas, coste, privacidad, velocidad → un modelo → prompt de prueba acotado → regla guardada. Sin ranking eterno.",
    },
    en: {
      title: "How to choose a text model for your job (2026)",
      metaTitle: "Choose a text model: ChatGPT, Claude, Perplexity or Grok",
      metaDescription:
        "Pick the right text chat by task type, context, citations, cost, privacy and speed. 18-minute flow with a first test prompt.",
      excerpt:
        "Before you open a chat, name the real job. Seven practical criteria and a test prompt to confirm you chose well.",
      intro:
        "There are dozens of text models in 2026. For a concrete job you do not need an absolute ranking: you need to know whether your task is drafting, source-backed research, coding help, fast chat or reading something recent. This flow takes about 18 minutes. You leave with a chosen model, a first prompt written and a reply that confirms or corrects the choice — without testing five chats at once or confusing grok.com with Grok Bot.",
      problem:
        "People open whichever chat they already have installed and expect it to do everything. They paste a 40-page report into a chat without long context, ask for citations from a model that does not link sources, or open Grok Bot when they only wanted a current-events question on grok.com. Without describing the task first, any model looks «bad» or «magic» by accident.",
      whatYouWillLearn: [
        "Classify your job: drafting, research, code, fast chat or current events",
        "Apply context, citation, cost, privacy and speed criteria",
        "Rule out tools that do not fit before opening tabs",
        "Pick one primary model and write a bounded test prompt",
        "Validate the choice with a real reply and know when to switch",
      ],
      prerequisites: [
        "A real task you will do today or this week (not an abstract exercise)",
        "Access to at least two of: chatgpt.com, claude.ai, perplexity.ai, grok.com",
        "15–20 minutes and a notepad",
        "If your task is a teammate with a remote machine, that is Grok Bot — a different tutorial",
      ],
      steps: [
        {
          title: "Name the job in one line",
          content:
            "Before choosing a model, write in your notepad: «I need [deliverable] for [audience/situation]». Examples: «300-word summary with sources for an internal report», «Three sales email variants», «Explain a Python error in my script», «What was published this week about [topic]». If you cannot complete the sentence, the problem is not the model — it is the assignment. Tag one category: drafting, research, code, fast chat or current events.",
          whatYouShouldSee:
            "A complete one-line task and a category tag (drafting, research, code, fast chat or current events).",
          tip: "One task = one primary model. If you mix «research and write long report», split into two steps with two tools if needed.",
          imageDescription:
            "Notepad with one underlined task line and five category labels; one marked with highlighter.",
        },
        {
          title: "Match task type to model",
          content:
            "Use this quick guide — not eternal law, but a first filter. Long drafting and editing → Claude (claude.ai) or ChatGPT with a clear brief. Research with linked sources → Perplexity (perplexity.ai). Fast variants of short copy → ChatGPT (chatgpt.com). Current events and direct angle on recent topics → Grok at grok.com (not Grok Bot). Coding help in a repo → Cursor has its own tutorial; here we stay on text chat. Note 1–2 candidates next to your task line.",
          whatYouShouldSee:
            "One or two tools noted beside the category. Grok appears only if you tagged «current events».",
          warning:
            "grok.com is web chat. Grok Bot is a teammate with Agent Computer — a different product. This tutorial does not use Bot.",
          proTip:
            "If you already hesitate between ChatGPT and Claude for drafting, the chatgpt-alternativas tutorial goes deeper with the same brief.",
          imageDescription:
            "Simple five-row table (drafting, research, code, fast chat, current events) with arrows to Claude, Perplexity, ChatGPT, Grok logos and a note «Cursor = other tutorial».",
        },
        {
          title: "Check whether you need a long context window",
          content:
            "Does your material exceed about 3–4 pages pasted in one message? A PDF, long meeting notes or several reference docs? If yes, prioritize Claude or a ChatGPT/Claude plan that allows file uploads or Projects. If the job is a paragraph or a 150-word email, long context does not decide — any general chat is fine. Note «long context: yes/no» and adjust your candidate list.",
          whatYouShouldSee:
            "A «long context: yes/no» field in your notepad. If yes, Claude or Projects move to the top; if no, the list barely changes.",
          tip: "For repeated work with the same files, see the Claude Projects tutorial — context lives in the project, not in every paste.",
          imageDescription:
            "Notepad with «long context: yes» and a multi-page PDF beside it; arrow pointing to claude.ai.",
        },
        {
          title: "Do you need citations and verifiable sources?",
          content:
            "If the deliverable must include links to sources («what official docs say», «2025–2026 studies»), Perplexity usually comes first: it shows sources in the reply and you can use Focus mode on docs or the web. General chats (ChatGPT, Claude, Grok) may invent links or cite from memory — fine for drafts, not for bibliographies. If citations are required, move Perplexity to first place even if you draft later in another chat.",
          whatYouShouldSee:
            "A noted decision: «citations required: yes/no». If yes, Perplexity marked as primary tool for the research phase.",
          warning:
            "No chat replaces your review. Perplexity links; you verify the link says what the answer claims.",
          imageDescription:
            "perplexity.ai with a reply showing a numbered source list with visible URLs.",
        },
        {
          title: "Filter by cost, privacy and speed",
          content:
            "Three final questions before opening the chat. Cost: does the free tier suffice or do you need the most capable paid model for this job? For an internal draft, try free first. Privacy: are you pasting client data, contracts or proprietary code? Check the provider’s retention policy and avoid pasting secrets into any public chat; some enterprise plans offer more control. Speed: do you need a reply in 30 seconds to iterate headlines? ChatGPT and Grok often respond fast. Can you wait 2 minutes for a careful section map? Claude is worth the wait. Cross off candidates that fail a critical criterion.",
          whatYouShouldSee:
            "Three boxes in your notepad (cost, privacy, speed) with yes/no or «ok». Candidate list reduced to one primary.",
          tip: "If privacy is critical and you lack an enterprise plan, summarize or anonymize before pasting — no tutorial replaces your company policy.",
          imageDescription:
            "Three-item checklist (cost, privacy, speed) with a single tool logo highlighted at the end.",
        },
        {
          title: "Pick one model and write the test prompt",
          content:
            "With one primary candidate, open only that tool. Write a bounded test prompt — not «write my whole report». Include: (1) a small deliverable («5-section map», «three headlines», «three sources with links»), (2) constraints («no invented stats», «mark [?] anything not in my notes»), (3) output format. Example for Perplexity: «Summarize in 150 words what official [product] documentation says about [topic]. Include 3 links. Mark anything that is inference.» Example for Claude: «From these notes [paste], section map for an 800-word report. Do not draft yet.»",
          whatYouShouldSee:
            "A 4–8 line prompt in your notepad, pasted into the chosen chat’s composer. One tab open.",
          warning:
            "Opening four chats with the same prompt before deciding creates noise. Test one, evaluate, then compare if needed.",
          imageDescription:
            "Single chat composer (e.g. claude.ai) with bounded prompt visible and notepad showing «model: Claude» beside it.",
        },
        {
          title: "Run the test and confirm or switch",
          content:
            "Send the prompt. Evaluate in 60 seconds: did it deliver what you asked? respect constraints? invent anything serious? If yes to the first two and no to the third, save the rule: «[task type] → [tool]». If it fails, do not blame the model without revisiting the prompt — tighten the deliverable. If the prompt was good and the tool does not fit (e.g. you asked for sources and there are no links), switch to your second candidate and repeat the same prompt. Note the outcome in one line for next week.",
          whatYouShouldSee:
            "A reply scoped to the test deliverable. One saved line like «research with sources → Perplexity» or «long draft → Claude».",
          proTip:
            "Review the rule in 30 days. Models change; your job types usually stay stable.",
          imageDescription:
            "Chat reply with map or sources visible; notes with a one-line rule and today’s date.",
        },
      ],
      realUseCases: [
        {
          title: "Internal report with references",
          body: "Category: research + drafting. Perplexity for three linked sources; Claude for the 800-word draft from collected notes. ChatGPT was not first — citations were missing.",
        },
        {
          title: "Client follow-up email",
          body: "Category: fast chat. Short context, no mandatory citations. ChatGPT on free tier; reply under a minute. Claude would have worked but added no advantage.",
        },
        {
          title: "Post about this week’s announcement",
          body: "Category: current events. Grok at grok.com with a dated question for angle; then manual editing. Not Grok Bot — no remote machine needed.",
        },
        {
          title: "12-page meeting notes",
          body: "Category: drafting, long context. Claude with PDF attached; test prompt = section map. Free ChatGPT truncated the material — moved to Claude.",
        },
      ],
      commonMistakes: [
        {
          title: "Choosing whichever chat is already open",
          body: "The default tab is not a criterion. Name the task first.",
        },
        {
          title: "Asking for citations in a chat without source mode",
          body: "ChatGPT and Claude draft well; for verifiable links, use Perplexity or manual search first.",
        },
        {
          title: "Confusing Grok with Grok Bot",
          body: "grok.com = text chat. Grok Bot = teammate. For choosing a text model, stay on web chats.",
        },
        {
          title: "Testing five models without criteria",
          body: "One bounded prompt on one candidate is enough to validate. Bulk comparison without a criteria table teaches nothing.",
        },
        {
          title: "A test prompt that is too large",
          body: "«Write my whole report» proves nothing. Ask for a map, three headlines or three sources — then scale up.",
        },
      ],
      conclusion:
        "Choosing a text model is not guessing this month’s ranking: it is matching your task to context, citations, cost, privacy and speed. In 18 minutes you name the job, filter candidates, write a test prompt and save a one-line rule. If the reply fits, continue in that chat. If not, adjust the prompt or the second candidate — do not open five tabs out of anxiety.",
      nextSteps: [
        "If you hesitate between ChatGPT and Claude for drafting, follow chatgpt-alternativas with the same brief.",
        "For deeper source-backed research, open perplexity-investigacion-con-fuentes.",
        "For long documents in Claude, continue with claude-escritura-larga.",
        "For grok.com without mixing Bot, use grok-primer-flujo.",
        "If you still lack a briefing method, start with chatgpt-primeros-pasos.",
      ],
      takeaway:
        "One-line task → type → context, citations, cost, privacy, speed → one model → bounded test prompt → saved rule. No eternal ranking.",
    },
  },
};
