import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "chatgpt-memoria-personalizacion";

export const chatgptMemoriaPersonalizacion: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "beginner",
  estimatedTime: 18,
  publishedAt: "2026-10-10",
  lastUpdated: "2026-10-10",
  toolsUsed: ["chatgpt"],
  relatedTutorials: [
    "chatgpt-primeros-pasos",
    "chatgpt-projects-primer-flujo",
    "chatgpt-gpts-cuando",
    "elegir-modelo-texto",
  ],
  tags: ["chatgpt", "memoria", "personalizacion", "privacidad", "instrucciones"],
  hero: tutorialHero(slug, {
    es: {
      alt: "ChatGPT con Personalization abierto: instrucciones personalizadas y controles de memoria",
      caption: "Personalización explícita y memoria revisable, no confianza ciega.",
      hint: "Hero 1600×900: chatgpt.com → Settings → Personalization con Custom instructions y Memory visibles (toggles y enlace Manage).",
    },
    en: {
      alt: "ChatGPT with Personalization open: custom instructions and memory controls",
      caption: "Explicit personalization and reviewable memory, not blind trust.",
      hint: "Hero 1600×900: chatgpt.com → Settings → Personalization with Custom instructions and Memory visible (toggles and Manage link).",
    },
  }),
  copy: {
    es: {
      title: "ChatGPT: memoria y personalización sin perder el control",
      metaTitle: "Memoria y personalización en ChatGPT: flujo práctico",
      metaDescription:
        "Instrucciones personalizadas, memoria guardada, historial de chats, chat temporal y memoria en Projects. Revisa, corrige y borra lo que no quieres que persista.",
      excerpt:
        "Separa instrucciones globales de recuerdos guardados, audita con Sources y usa chat temporal cuando el tema es sensible.",
      intro:
        "ChatGPT puede adaptar respuestas con instrucciones personalizadas (Customize ChatGPT), memoria guardada, referencia al historial de chats y otros contextos según tu plan y región. Eso ahorra repetir el briefing, pero también puede guardar detalles que no querías persistir. La guía oficial de memoria está en https://help.openai.com/en/articles/8590148-memory-in-chatgpt; las custom instructions se explican en https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt. En unos 18 minutos dejas un flujo repetible: qué va en cada capa, cómo revisar lo recordado y cuándo chatear sin personalización.",
      problem:
        "Mucha gente mezcla «recuérdame esto» con instrucciones de tono, no revisa la memoria en meses o asume que borrar un chat borra todo lo derivado. Sin mapa claro, ChatGPT personaliza con datos viejos, mezcla contextos de clientes o guarda información que no debería salir del chat puntual.",
      whatYouWillLearn: [
        "Diferenciar custom instructions, memoria guardada e historial de chats",
        "Configurar Personalization y los toggles de Memory que veas en tu cuenta",
        "Revisar el resumen de memoria y los recuerdos guardados",
        "Corregir o borrar información y usar Sources bajo las respuestas",
        "Elegir chat temporal sin memoria cuando el tema es sensible",
        "Acotar memoria dentro de un ChatGPT Project cuando tu plan lo permita",
        "Saber qué no conviene guardar en memoria",
      ],
      prerequisites: [
        "Cuenta en https://chatgpt.com (los controles de memoria varían por plan, región y workspace)",
        "Acceso a Settings → Personalization (si no aparece Memory, tu cuenta puede no tenerlo aún)",
        "Un caso real: tono de trabajo, preferencias recurrentes o un proyecto con varios hilos",
        "18 minutos",
      ],
      steps: [
        {
          title: "Decide qué va en instrucciones y qué en memoria",
          content:
            "Antes de tocar ajustes, escribe dos listas en un bloc. Lista A — instrucciones estables que quieres en casi todos los chats: rol, tono, formato, prohibiciones (el mismo rigor que en chatgpt-primeros-pasos). Lista B — hechos que cambian o son delicados: alergias, nombres de clientes, presupuestos, datos de salud. Las custom instructions son guía directa que tú defines; la memoria puede recoger preferencias y detalles a partir de conversaciones y otras fuentes disponibles en tu cuenta. No metas secretos ni datos de salud en ninguna lista si tu workspace no está pensado para ello. Si el trabajo vive en un contenedor con archivos fijos, valora chatgpt-projects-primer-flujo en paralelo: las instrucciones del proyecto no sustituyen la revisión de memoria global.",
          whatYouShouldSee:
            "Dos listas cortas: A para Customize ChatGPT, B marcada como «solo si hace falta y revisable».",
          tip: "Si algo solo aplica a un cliente, un Project suele ser mejor que memoria global.",
          imageDescription:
            "Bloc con columnas «Instrucciones» vs «Memoria» y ejemplos de tono frente a hechos personales.",
        },
        {
          title: "Abre Customize ChatGPT y escribe instrucciones personalizadas",
          content:
            "En https://chatgpt.com, abre Settings (icono de perfil o menú) → Personalization → Customize ChatGPT. Rellena qué debería saber ChatGPT sobre ti para trabajar mejor y cómo quieres las respuestas: idioma por defecto, nivel de detalle, formato preferido (viñetas, tablas) y reglas como «marca [FALTA] si no hay dato». Mantén el bloque conciso; un párrafo denso de políticas internas encaja mejor en un Project o un Custom GPT (chatgpt-gpts-cuando). Guarda los cambios. Estas instrucciones son distintas de la memoria: son texto que tú controlas explícitamente.",
          whatYouShouldSee:
            "Pantalla Customize ChatGPT con dos campos completados y guardados.",
          warning:
            "No pegues contratos, claves API ni contraseñas en custom instructions: son persistentes y pueden influir en muchos chats.",
          imageDescription:
            "Panel Customize ChatGPT con campos «What would you like ChatGPT to know» y «How would you like ChatGPT to respond».",
        },
        {
          title: "Revisa los controles de Memory en Settings",
          content:
            "En Settings → Personalization → Memory, localiza los toggles que muestra tu cuenta. Suele aparecer un interruptor principal de Memory y, según la experiencia, opciones como Reference saved memories, Reference chat history, Memory summary o Manage. Activa Memory solo si quieres personalización persistente; si desactivas Memory, los chats pasados no se borran solos, pero ChatGPT deja de crear nueva información recordada hasta que lo vuelvas a encender. Si tienes Reference chat history, ten en cuenta que apagarlo programa la eliminación de información derivada del historial en los sistemas de OpenAI en un plazo que la ayuda oficial describe (hasta unos 30 días), sin borrar los chats en tu lista. Los nombres exactos pueden variar: confía en lo que ves, no en capturas antiguas.",
          whatYouShouldSee:
            "Sección Memory con al menos un toggle y enlace Manage o Saved memories si aplica.",
          tip: "En cuentas de equipo o educación, un admin puede ocultar controles; si falta un toggle, pregunta al administrador del workspace.",
          imageDescription:
            "Personalization → Memory con interruptor Memory y sub-opciones de referencia a recuerdos e historial.",
        },
        {
          title: "Inspecciona el resumen y los recuerdos guardados",
          content:
            "Pulsa Manage, Memory summary o Saved memories (según tu versión) y lee lo que ChatGPT puede usar para personalizar. Puedes preguntar en un chat: «¿Qué recuerdas sobre mí?» para contrastar. Corrige en el campo de texto, selecciona texto y añade una corrección, o usa Don't mention this again cuando aparezca para reducir referencias futuras sin borrar la fuente original. Para borrar un ítem del resumen, usa Delete o las opciones del menú (•••). Los saved memories son entradas explícitas que ChatGPT guarda aparte del historial: borrar el chat donde nació no siempre borra un recuerdo guardado por separado — revisa ambos.",
          whatYouShouldSee:
            "Lista o resumen de memoria con al menos un ítem reconocible; opción de editar o eliminar.",
          warning:
            "El resumen no incluye todo lo que el modelo puede considerar relevante; Sources en una respuesta ayudan a auditar.",
          imageDescription:
            "Pantalla de memory summary o saved memories con botones de corrección y eliminar.",
        },
        {
          title: "Usa Sources y pide olvidar cuando haga falta",
          content:
            "En respuestas con personalización, mira si aparece Sources debajo del mensaje: puede citar un chat anterior, custom instruction, memoria guardada o archivo. Ábrelo y marca relevancia o elimina la fuente si no quieres que influya. Di en lenguaje natural: «Eso es incorrecto, actualízalo» o «No uses esto en el futuro». Para un recuerdo guardado, «Olvida que…» o bórralo en Memory settings. Si compartes el chat por enlace, las Sources de memoria no viajan con el enlace según la documentación de OpenAI. Tras borrar, puede tardar un poco en propagarse; no asumas efecto instantáneo en todos los dispositivos.",
          whatYouShouldSee:
            "Una respuesta con Sources expandibles y, tras una corrección, menos referencias a un dato erróneo en chats nuevos.",
          proTip:
            "Revisa memoria cada mes o al cambiar de cliente — igual que revisarías un contacto en el CRM.",
          imageDescription:
            "Respuesta de ChatGPT con fila Sources abierta mostrando chat previo y saved memory.",
        },
        {
          title: "Chat temporal cuando no quieras memoria ni instrucciones",
          content:
            "Para temas sensibles, de una sola vez o que no deben alimentar personalización, abre Temporary chat (chat temporal) desde el menú de ChatGPT. Antes de empezar, elige si usar memorias e instrucciones existentes o Unpersonalized / sin personalización — no podrás cambiar esa elección después de enviar el primer mensaje. Un chat temporal no crea ni actualiza memorias aunque Memory esté encendido globalmente. Si guardas el chat temporal, pasa a ser chat normal y entonces sí pueden aplicarse tus ajustes de personalización y, con Memory activa, usarse para respuestas futuras. Más detalle en la ayuda de OpenAI sobre temporary chat, enlazada desde el artículo de memoria.",
          whatYouShouldSee:
            "Selector de chat temporal con opción personalizada vs Unpersonalized antes del primer mensaje.",
          warning:
            "Privacidad: no compartas datos de salud, financieros o credenciales esperando que «temporal» borre todo automáticamente; elige Unpersonalized y no guardes el hilo si no debe persistir.",
          imageDescription:
            "Diálogo de inicio de temporary chat con toggle de personalización desactivado.",
        },
        {
          title: "Acota memoria dentro de un Project (si está disponible)",
          content:
            "Si usas ChatGPT Projects (chatgpt-projects-primer-flujo), revisa en Project settings si tu workspace ofrece memoria solo del proyecto (project-only memory en entornos regulados o de equipo). Ese modo limita qué conversaciones pueden referenciarse entre sí: chats dentro del proyecto no deberían tirar de hilos fuera, y viceversa, según la documentación de OpenAI para improved memory. Crea un proyecto por cliente o línea de trabajo y mantén ahí los hilos largos. Las instrucciones del proyecto se suman al contexto del contenedor; no sustituyen revisar memoria global si mezclaste chats sueltos con el mismo tema. En planes sin project-only memory, sigue separando proyectos por caso y limpia memoria global cuando cambies de contexto.",
          whatYouShouldSee:
            "Project settings con opción de memoria acotada al proyecto o, como mínimo, instrucciones del proyecto visibles.",
          tip: "Dos clientes en memoria global = mezcla de tono. Un proyecto por cliente y auditoría de memoria al cerrar el encargo.",
          imageDescription:
            "Proyecto en la barra lateral con Project settings y chats agrupados bajo un solo nombre de cliente.",
        },
        {
          title: "Checklist de privacidad: qué no guardar",
          content:
            "Cierra el flujo con reglas escritas en tu bloc: no pidas recordar contraseñas, tokens, números de tarjeta, DNI completo, diagnósticos médicos detallados ni secretos comerciales no públicos. En cuentas personales, revisa Data controls si quieres limitar el uso de chats para mejorar modelos (Improve the model for everyone); en Business, Enterprise o Edu, OpenAI indica por defecto que no entrena con ese contenido de workspace. Si algo sensible ya entró en memoria, bórralo en Manage, elimina el chat fuente y quita archivos en Library o apps conectadas que lo contengan. Para trabajo que solo necesita formato, quédate en custom instructions sin hechos identificables.",
          whatYouShouldSee:
            "Checklist de cinco ítems «nunca en memoria» y memoria revisada sin datos críticos.",
          proTip:
            "Antes de una reunión con datos confidenciales, confirma Memory off o chat temporal Unpersonalized en ese dispositivo.",
          imageDescription:
            "Bloc con checklist de privacidad junto a Memory settings con pocos ítems benignos (tono, zona horaria).",
        },
      ],
      realUseCases: [
        {
          title: "Tono fijo sin repetir el briefing",
          body: "Custom instructions con formato y prohibiciones. Memoria solo para preferencias benignas (viñetas, métricas en %).",
        },
        {
          title: "Cambio de cliente",
          body: "Borras los recuerdos del cliente anterior, revisas Sources en el primer chat nuevo y trabajas en un Project separado.",
        },
        {
          title: "Consulta puntual sensible",
          body: "Temporary chat Unpersonalized, sin guardar. Vuelves al chat normal cuando el tema ya no es delicado.",
        },
      ],
      commonMistakes: [
        {
          title: "Confundir memoria con instrucciones",
          body: "Las instrucciones son lo que escribes en Customize ChatGPT. La memoria infiere y guarda contexto; requiere auditoría.",
        },
        {
          title: "Borrar el chat y dar por hecho el recuerdo",
          body: "Un saved memory puede sobrevivir al chat origen. Revisa Manage.",
        },
        {
          title: "Memoria global con varios clientes",
          body: "Mezcla tonos y nombres. Proyecto por caso y limpieza al cerrar.",
        },
        {
          title: "Guardar secretos «para no olvidar»",
          body: "ChatGPT no es un gestor de contraseñas. Usa un vault y mantén memoria libre de credenciales.",
        },
      ],
      conclusion:
        "La personalización en ChatGPT compensa cuando separas instrucciones explícitas de recuerdos revisables, auditas con Sources y usas chat temporal o proyectos acotados para lo sensible. En unos 18 minutos puedes dejar Memory alineada con tu trabajo real — no con todo lo que alguna vez mencionaste.",
      nextSteps: [
        "Refuerza el briefing diario con chatgpt-primeros-pasos antes de ampliar memoria.",
        "Para contexto con archivos fijos, combina este flujo con chatgpt-projects-primer-flujo.",
        "Si el rol es un asistente reutilizable, contrasta con chatgpt-gpts-cuando antes de duplicar reglas.",
        "Para elegir otro chat general, lee grok-vs-chatgpt con los mismos criterios de privacidad.",
      ],
      takeaway:
        "Instrucciones explícitas → Memory revisada → Sources auditadas → temporal o Project cuando el contexto no debe mezclarse.",
    },
    en: {
      title: "ChatGPT memory and personalization without losing control",
      metaTitle: "ChatGPT memory and personalization: practical workflow",
      metaDescription:
        "Custom instructions, saved memory, chat history reference, temporary chat and memory in Projects. Review, fix and delete what you do not want to persist.",
      excerpt:
        "Split global instructions from saved memories, audit with Sources and use temporary chat when the topic is sensitive.",
      intro:
        "ChatGPT can tailor replies using custom instructions (Customize ChatGPT), saved memory, reference to chat history and other context depending on your plan and region. That saves repeating the brief, but it can also retain details you did not mean to keep. The official memory guide is at https://help.openai.com/en/articles/8590148-memory-in-chatgpt; custom instructions are explained at https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt. In about 18 minutes you get a repeatable flow: what belongs in each layer, how to review what is remembered and when to chat without personalization.",
      problem:
        "Many people mix «remember this» with tone instructions, never audit memory for months or assume deleting a chat removes every derived fact. Without a clear map, ChatGPT personalizes with stale data, blends client contexts or keeps information that should have stayed in a one-off chat.",
      whatYouWillLearn: [
        "Tell custom instructions, saved memory and chat history apart",
        "Configure Personalization and the Memory toggles your account shows",
        "Review the memory summary and saved memories",
        "Fix or delete information and use Sources under replies",
        "Pick temporary chat without memory for sensitive topics",
        "Scope memory inside a ChatGPT Project when your plan allows",
        "Know what not to store in memory",
      ],
      prerequisites: [
        "An account on https://chatgpt.com (memory controls vary by plan, region and workspace)",
        "Access to Settings → Personalization (if Memory is missing, your account may not have it yet)",
        "A real case: work tone, recurring preferences or a project with several threads",
        "18 minutes",
      ],
      steps: [
        {
          title: "Decide what goes in instructions vs memory",
          content:
            "Before touching settings, write two lists in a notes app. List A — stable instructions for most chats: role, tone, format, bans (same rigor as chatgpt-primeros-pasos). List B — facts that change or are sensitive: allergies, client names, budgets, health details. Custom instructions are direct guidance you define; memory can pick up preferences and details from conversations and other sources available to your account. Do not put secrets or PHI on either list if your workspace is not meant for that. If the work lives in a container with fixed files, consider chatgpt-projects-primer-flujo in parallel: project instructions do not replace auditing global memory.",
          whatYouShouldSee:
            "Two short lists: A for Customize ChatGPT, B marked «only if needed and reviewable».",
          tip: "If something applies to one client only, a Project is often better than global memory.",
          imageDescription:
            "Notes with columns «Instructions» vs «Memory» and examples of tone vs personal facts.",
        },
        {
          title: "Open Customize ChatGPT and write custom instructions",
          content:
            "On https://chatgpt.com, open Settings (profile icon or menu) → Personalization → Customize ChatGPT. Fill what ChatGPT should know to work with you and how you want answers: default language, detail level, preferred format (bullets, tables) and rules like «mark [MISSING] if there is no data». Keep the block concise; a dense internal policy paragraph fits better in a Project or Custom GPT (chatgpt-gpts-cuando). Save changes. These instructions are separate from memory: text you control explicitly.",
          whatYouShouldSee:
            "Customize ChatGPT screen with both fields filled and saved.",
          warning:
            "Do not paste contracts, API keys or passwords into custom instructions: they persist and can affect many chats.",
          imageDescription:
            "Customize ChatGPT panel with «What would you like ChatGPT to know» and «How would you like ChatGPT to respond».",
        },
        {
          title: "Review Memory controls in Settings",
          content:
            "Go to Settings → Personalization → Memory and find the toggles your account shows. You will usually see a main Memory switch and, depending on the experience, options such as Reference saved memories, Reference chat history, Memory summary or Manage. Turn Memory on only if you want persistent personalization; turning Memory off does not delete past chats by itself, but ChatGPT stops creating new remembered information until you turn it back on. If you have Reference chat history, know that turning it off schedules deletion of information derived from history on OpenAI systems over the timeframe their help article describes (up to about 30 days), without removing chats from your list. Exact labels can vary — trust what you see, not old screenshots.",
          whatYouShouldSee:
            "Memory section with at least one toggle and a Manage or Saved memories link if applicable.",
          tip: "On team or education accounts, an admin may hide controls; if a toggle is missing, ask the workspace admin.",
          imageDescription:
            "Personalization → Memory with Memory switch and sub-options for saved memories and history reference.",
        },
        {
          title: "Inspect the summary and saved memories",
          content:
            "Click Manage, Memory summary or Saved memories (depending on your version) and read what ChatGPT may use to personalize. You can ask in chat: «What do you remember about me?» to cross-check. Correct in the text field, select text and add a correction, or use Don't mention this again when shown to reduce future references without deleting the original source. To remove an item from the summary, use Delete or the (•••) menu options. Saved memories are explicit entries stored apart from chat history: deleting the chat where one was created does not always delete a separate saved memory — check both.",
          whatYouShouldSee:
            "A memory list or summary with at least one recognizable item; edit or delete available.",
          warning:
            "The summary does not include everything the model may treat as relevant; Sources on a reply help you audit.",
          imageDescription:
            "Memory summary or saved memories screen with correct and delete actions.",
        },
        {
          title: "Use Sources and ask to forget when needed",
          content:
            "On personalized replies, check whether Sources appear below the message: they may cite a past chat, custom instruction, saved memory or file. Open them and mark relevance or remove the source if you do not want it to influence answers. Say in plain language: «That is wrong, update it» or «Do not use this in the future». For a saved memory, «Forget that…» or delete it in Memory settings. If you share the chat by link, memory Sources are not included on the shared link per OpenAI’s documentation. After deletion, updates can take time to propagate; do not assume instant effect on every device.",
          whatYouShouldSee:
            "A reply with expandable Sources and, after a correction, fewer references to a wrong fact in new chats.",
          proTip:
            "Audit memory monthly or when you switch clients — like reviewing a CRM contact.",
          imageDescription:
            "ChatGPT reply with Sources row open showing prior chat and saved memory.",
        },
        {
          title: "Temporary chat when you do not want memory or instructions",
          content:
            "For sensitive, one-off topics that should not feed personalization, open Temporary chat from ChatGPT’s menu. Before you start, choose whether to use existing memories and instructions or Unpersonalized / without personalization — you cannot change that choice after the first message. A temporary chat does not create or update memories even if Memory is on globally. If you save a temporary chat, it becomes a regular chat and your personalization settings can apply; with Memory on, ChatGPT may use that conversation for future replies. See OpenAI’s temporary chat help linked from the memory article for details.",
          whatYouShouldSee:
            "Temporary chat picker with personalized vs Unpersonalized before the first message.",
          warning:
            "Privacy: do not share health, financial or credential data expecting «temporary» to erase everything automatically; choose Unpersonalized and do not save the thread if it must not persist.",
          imageDescription:
            "Temporary chat start dialog with personalization toggle off.",
        },
        {
          title: "Scope memory inside a Project (when available)",
          content:
            "If you use ChatGPT Projects (chatgpt-projects-primer-flujo), check Project settings for project-only memory when your workspace offers it (regulated or team environments). That mode limits which conversations can reference each other: chats inside the project should not pull from threads outside, and vice versa, per OpenAI’s improved memory documentation. Create one project per client or workstream and keep long threads there. Project instructions add container context; they do not replace auditing global memory if you mixed loose chats on the same topic. On plans without project-only memory, still separate projects by case and clean global memory when you change context.",
          whatYouShouldSee:
            "Project settings with project-scoped memory option, or at least project instructions visible.",
          tip: "Two clients in global memory blends tone. One project per client and a memory audit when the engagement ends.",
          imageDescription:
            "Sidebar project with Project settings and chats grouped under one client name.",
        },
        {
          title: "Privacy checklist: what not to save",
          content:
            "Close the flow with written rules in your notes: do not ask to remember passwords, tokens, card numbers, full government IDs, detailed medical diagnoses or non-public trade secrets. On personal accounts, review Data controls if you want to limit chat use for model improvement (Improve the model for everyone); on Business, Enterprise or Edu, OpenAI states workspace content is not used to train models by default. If something sensitive already entered memory, delete it in Manage, remove the source chat and drop files in Library or connected apps that contain it. For work that only needs format, stick to custom instructions without identifiable facts.",
          whatYouShouldSee:
            "A five-item «never in memory» checklist and memory reviewed without critical data.",
          proTip:
            "Before a meeting with confidential data, confirm Memory off or Unpersonalized temporary chat on that device.",
          imageDescription:
            "Privacy checklist in notes next to Memory settings with few benign items (tone, time zone).",
        },
      ],
      realUseCases: [
        {
          title: "Fixed tone without repeating the brief",
          body: "Custom instructions for format and bans. Memory only for benign preferences (bullets, metrics in %).",
        },
        {
          title: "Switching clients",
          body: "Delete the previous client’s memories, check Sources on the first new chat and work in a separate Project.",
        },
        {
          title: "One-off sensitive question",
          body: "Unpersonalized temporary chat, do not save. Return to normal chat when the topic is no longer delicate.",
        },
      ],
      commonMistakes: [
        {
          title: "Treating memory like instructions",
          body: "Instructions are what you write in Customize ChatGPT. Memory infers and stores context; it needs auditing.",
        },
        {
          title: "Deleting the chat and assuming the memory is gone",
          body: "A saved memory can outlive the source chat. Check Manage.",
        },
        {
          title: "Global memory across clients",
          body: "Blends tone and names. One project per case and cleanup when you wrap.",
        },
        {
          title: "Saving secrets «so you do not forget»",
          body: "ChatGPT is not a password manager. Use a vault and keep memory free of credentials.",
        },
      ],
      conclusion:
        "Personalization in ChatGPT pays off when you separate explicit instructions from reviewable memories, audit with Sources and use temporary chat or scoped projects for sensitive work. In about 18 minutes you can align Memory with your real job — not with everything you ever mentioned.",
      nextSteps: [
        "Strengthen daily briefing with chatgpt-primeros-pasos before expanding memory.",
        "For context with fixed files, combine this flow with chatgpt-projects-primer-flujo.",
        "If the role is a reusable assistant, compare with chatgpt-gpts-cuando before duplicating rules.",
        "To pick another general chat, read grok-vs-chatgpt with the same privacy criteria.",
      ],
      takeaway:
        "Explicit instructions → audited Memory → Sources checked → temporary or Project when context must not mix.",
    },
  },
};
