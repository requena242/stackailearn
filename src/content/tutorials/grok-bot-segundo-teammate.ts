import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "grok-bot-segundo-teammate";

export const grokBotSegundoTeammate: Tutorial = {
  id: slug,
  slug,
  category: "productivity",
  level: "advanced",
  estimatedTime: 22,
  publishedAt: "2026-09-22",
  lastUpdated: "2026-09-22",
  toolsUsed: ["grok-bot", "cursor"],
  relatedTutorials: [
    "grok-bot-primer-teammate",
    "hermes-agent-segundo-flujo",
    "cursor-como-ide-con-ia",
  ],
  tags: ["grok-bot", "teammate", "segundo", "xai"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Dos perfiles de Grok Bot con un Agent Computer compartido",
      caption: "Dos oficios distintos. Una máquina. Higiene entre handoffs.",
      hint: "Hero: app de Grok Bot con dos Bots en la lista lateral y Agent Computer con una sesión cerrada entre tareas.",
    },
    en: {
      alt: "Two Grok Bot profiles with a shared Agent Computer",
      caption: "Two different jobs. One machine. Hygiene between handoffs.",
      hint: "Hero: Grok Bot app with two Bots in the sidebar and Agent Computer with a session closed between jobs.",
    },
  }),
  copy: {
    es: {
      title: "Grok Bot: segundo teammate (2026)",
      metaTitle: "Grok Bot: añadir un segundo teammate sin mezclar contextos (2026)",
      metaDescription:
        "Confirma que el Bot #1 sigue en pie, crea un segundo Bot con otro oficio, limpia el Agent Computer compartido y haz dos handoffs sin contaminar rutinas.",
      excerpt:
        "Segundo Bot, otro trabajo, misma máquina en la nube. Cierra sesiones, no copies rutinas y separa riesgos.",
      intro:
        "Si completaste grok-bot-primer-teammate, ya tienes un Bot con plan, app de escritorio, handoff de cinco piezas, logins en Agent Computer y una routine o skill. Este flujo añade un segundo Bot con un oficio distinto — no «CRM + código + redacción» en el mismo perfil. Grok Bot no es grok.com; el onboarding oficial está en https://cursor.com/bot/onboarding. Varios bots de una cuenta comparten el Agent Computer.",
      problem:
        "Un segundo Bot mal planteado mezcla contextos en la máquina compartida: pestañas abiertas del Bot #1, rutinas copiadas sin leer y logins que el Bot #2 interpreta como suyos. El síntoma parece «el segundo Bot es tonto», pero casi siempre es contaminación entre oficios.",
      whatYouWillLearn: [
        "Confirmar que el Bot #1 sigue respondiendo con un handoff o routine real",
        "Elegir un oficio de una frase distinto al del primer Bot",
        "Crear el Bot #2 con nombre, instrucciones y reglas de no-producción / no-envío",
        "Higiene del Agent Computer compartido antes de pasar el mando",
        "Un primer handoff sin login (PDF o notas) y otro con login que tomas tú",
        "Mantener skills y routines acotadas por Bot",
        "Decidir cuándo basta un Bot y cuándo merece la pena un segundo",
      ],
      prerequisites: [
        "Haber completado grok-bot-primer-teammate (un Bot operativo con al menos un handoff exitoso)",
        "SuperGrok Plus/Heavy o Cursor Pro+, Ultra o Teams",
        "macOS, Windows o iOS (no hay app de escritorio Linux todavía)",
        "Un segundo oficio real con entregable distinto al del Bot #1",
        "22 minutos sin mezclar esto con Hermes ni con el chat de grok.com",
      ],
      steps: [
        {
          title: "Confirma que el Bot #1 sigue en pie",
          content:
            "Antes de crear nada nuevo, abre la app de Grok Bot (no grok.com) y lanza el mismo encargo que ya te funcionó: una routine guardada o un handoff corto de prueba. Éxito = el Bot entrega el formato esperado y para donde dijiste («espera mi OK»). Si falla, arregla el Bot #1 primero — un segundo Bot no arregla un primer flujo roto.",
          whatYouShouldSee:
            "Una respuesta con el entregable habitual del Bot #1. Agent Computer activo solo para esa tarea, sin errores de plan o de app.",
          warning:
            "Si el Bot #1 no completa un handoff hoy, vuelve al primer tutorial. No añadas un segundo perfil encima.",
          imageDescription:
            "App de Grok Bot con el Bot #1 seleccionado y un handoff de prueba completado con punto de revisión visible.",
        },
        {
          title: "Elige un oficio de una frase — distinto al del Bot #1",
          content:
            "Escribe en un bloc la frase del Bot #1 («resume PDFs internos en cinco viñetas») y la del Bot #2 en otro registro. Ejemplos que sí encajan: Bot #1 = briefs de investigación semanal; Bot #2 = triaje de inbox con borradores para aprobar. O Bot #1 = notas de incidente; Bot #2 = comparativas de proveedores en PDF. Lo que no encaja: un solo Bot que haga CRM, código y redacción larga. Si el oficio nuevo es solo «otro tono» del mismo trabajo, amplía instrucciones del Bot #1 en lugar de crear #2.",
          whatYouShouldSee:
            "Dos frases de oficio en un bloc. Cada una con un entregable y un formato distintos, sin solaparse.",
          tip:
            "La prueba rápida: ¿el Bot #2 necesitaría herramientas o riesgos que el #1 no debería tocar? Si sí, segundo Bot. Si no, quédate en uno.",
          imageDescription:
            "Bloc con dos líneas: Oficio Bot #1 y Oficio Bot #2, cada una con formato de salida distinto.",
        },
        {
          title: "Crea el Bot #2 con nombre e instrucciones propias",
          content:
            "En la app, crea un Bot nuevo. Nombre que distinga el oficio («Inbox-Triage» vs «Research-Brief»). En instrucciones: el oficio de una frase, formato de entrega, qué no tocar (producción, envíos, borrado) y «para y espera mi OK antes de actuar fuera del alcance». No copies el bloque entero del Bot #1 — solo reutiliza reglas de seguridad si son idénticas. Revisa que la cuenta sigue siendo elegible (SuperGrok Plus/Heavy o Cursor Pro+/Ultra/Teams).",
          whatYouShouldSee:
            "Un segundo perfil en la lista de Bots con instrucciones que mencionan un solo trabajo y reglas de no-envío / no-producción.",
          warning:
            "Pegar las instrucciones del Bot #1 y cambiar dos palabras deja memoria y rutinas implícitas mezcladas. Escribe desde cero para el oficio #2.",
          imageDescription:
            "Pantalla de creación de Bot con nombre distinto, instrucciones de un solo oficio y reglas de no-producción.",
        },
        {
          title: "Limpia el Agent Computer compartido",
          content:
            "Varios bots comparten la misma máquina en la nube. Antes del primer handoff del Bot #2: cierra sesiones y pestañas que dejó el Bot #1, vacía descargas temporales si las hay y comprueba que no queda un login activo que el #2 pueda malinterpretar. Nunca pegues contraseñas, tokens ni códigos 2FA en el chat de ningún Bot — los logins los haces tú en Agent Computer, con el teclado.",
          whatYouShouldSee:
            "Agent Computer con escritorio limpio o solo las apps que el handoff del #2 necesitará. Sin pestañas del CRM del Bot #1 abiertas.",
          warning:
            "Una sesión del Bot #1 abierta mientras el #2 trabaja es la causa más común de «leyó el archivo equivocado» o «envió desde la cuenta incorrecta».",
          imageDescription:
            "Ventana Agent Computer con pestañas cerradas y un escritorio listo para el handoff del Bot #2.",
        },
        {
          title: "Primer handoff del Bot #2 sin login",
          content:
            "Arranca con un test que no requiera credenciales: un PDF interno, notas en un doc o un enlace público. Usa el mismo esquema de cinco piezas del primer flujo: contexto, entregable, formato, límites, punto de parada. Ejemplo: «Lee este PDF de notas de producto. Devuélveme tres viñetas: decisión, fecha límite, riesgo. No reescribas el original. Para aquí y espera mi OK.» Revisa el resultado como un PR antes de aprobar.",
          whatYouShouldSee:
            "Tres viñetas con contenido del PDF, sin prosa inventada. El Bot indica que espera tu OK y no abre apps que requieran login.",
          tip:
            "Si este paso falla, el problema son las instrucciones del Bot #2, no la máquina. Ajusta formato y límites antes de probar logins.",
          imageDescription:
            "Chat del Bot #2 con un PDF adjunto y una respuesta en tres viñetas, sin ventanas de login abiertas.",
        },
        {
          title: "Segundo handoff: login que tomas tú en Agent Computer",
          content:
            "Cuando el test sin login pase, elige un encargo que necesite una app con sesión — por ejemplo, leer tickets en un panel o un buzón compartido. En el handoff escribe qué app abrir, qué leer y qué no hacer (no enviar, no borrar). Cuando el Bot pida acceso, entra tú en Agent Computer: usuario, contraseña, 2FA, CAPTCHA. No dictes secretos por el chat. Tras el login, deja que el Bot recopile; revisa el borrador antes de cualquier envío.",
          whatYouShouldSee:
            "Tú en Agent Computer completando el login. El Bot #2 produce un borrador o resumen y se detiene en el punto de revisión.",
          warning:
            "Si el Bot #1 ya tenía esa app abierta con otra cuenta, cierra sesión antes de entrar con la del handoff #2.",
          imageDescription:
            "Agent Computer con pantalla de login tomada por el usuario y el chat del Bot #2 esperando con un borrador listo.",
        },
        {
          title: "Routines y skills solo para este Bot",
          content:
            "Si el formato del handoff #2 se repite, guárdalo como skill o routine en el perfil del Bot #2 — no copies la routine del Bot #1 y cambies el título. Cada Bot lleva sus propias rutinas: el de investigación no debería disparar el triaje de inbox. Antes de automatizar, ejecuta el mismo encargo dos veces manualmente y confirma que el entregable es estable.",
          whatYouShouldSee:
            "Una routine o skill nueva bajo el Bot #2 con el nombre del oficio #2. El Bot #1 conserva sus rutinas sin cambios.",
          proTip:
            "Menos routines por Bot = menos sorpresas en la máquina compartida. Automatiza solo lo que ya pasó dos veces igual.",
          imageDescription:
            "Lista de routines del Bot #2 con una entrada nueva; el Bot #1 en otra fila sin rutinas duplicadas.",
        },
        {
          title: "¿Un Bot o dos? Cuándo parar",
          content:
            "Quédate en un Bot si el «segundo oficio» es el mismo entregable con otro tono o la misma herramienta con otra carpeta. Merece un segundo Bot cuando cambia el formato de salida (viñetas vs borradores de email), la herramienta principal (CRM vs panel de tickets) o el riesgo (solo lectura vs borradores que podrían enviarse). Si empiezas a necesitar un tercer oficio muy distinto, evalúa Hermes en tu máquina o Cursor para código — no acumules cinco Bots en la misma VM sin higiene.",
          whatYouShouldSee:
            "Una decisión escrita: «dos Bots bastan» o «amplío instrucciones del #1». Sin un tercer perfil creado por impulso.",
          tip:
            "La máquina compartida escala mal con muchos oficios paralelos. Dos Bots bien separados suelen ser el techo cómodo para una cuenta.",
          imageDescription:
            "Bloc con criterios: mismo entregable = un Bot; distinto formato, herramienta o riesgo = segundo Bot.",
        },
      ],
      realUseCases: [
        {
          title: "Investigación + triaje de inbox",
          body: "Bot #1 resume briefs de mercado en PDF. Bot #2 clasifica el inbox y deja borradores sin enviar. Misma cuenta, higiene entre sesiones.",
        },
        {
          title: "Incidentes + documentación interna",
          body: "Bot #1 recopila impacto y capturas en un panel de observabilidad. Bot #2 convierte notas de reunión en viñetas para Confluence — sin tocar producción.",
        },
        {
          title: "CRM vs comparativas de proveedor",
          body: "Bot #1 actualiza el pipeline con reglas estrictas de no-envío. Bot #2 solo lee PDFs de propuestas y saca tablas comparativas. Riesgos separados.",
        },
      ],
      commonMistakes: [
        {
          title: "Crear el Bot #2 antes de que el #1 funcione",
          body: "Un primer flujo inestable contamina todo. Confirma un handoff o routine del #1 hoy antes de añadir perfil.",
        },
        {
          title: "Copiar la routine del Bot #1 al #2",
          body: "Dispara el oficio equivocado en la máquina compartida. Cada Bot lleva sus propias rutinas desde cero.",
        },
        {
          title: "Dejar sesiones del Bot #1 abiertas",
          body: "Pestañas y logins activos mezclan contextos. Cierra antes de entregar Agent Computer al #2.",
        },
        {
          title: "Pegar secretos en el chat",
          body: "Contraseñas y 2FA van en Agent Computer, con tú al teclado. En ningún hilo de Bot.",
        },
        {
          title: "Confundir Grok Bot con grok.com",
          body: "El chat de xAI no tiene teammates ni Agent Computer. El producto correcto empieza en cursor.com/bot/onboarding.",
        },
      ],
      conclusion:
        "Un segundo teammate en Grok Bot no es duplicar el primero: es otro oficio, otra routine y la misma máquina con higiene entre handoffs. Confirma el Bot #1, define el trabajo en una frase, limpia Agent Computer, prueba sin login y luego con login que firmas tú. Si el oficio nuevo es casi igual al anterior, amplía un solo Bot en lugar de multiplicar perfiles.",
      nextSteps: [
        "Ejecuta la routine del Bot #2 dos veces en días distintos para confirmar que aguanta sin contaminar al #1.",
        "Si el trabajo vuelve a ser código en tu repo, abre Cursor — no sustituye al Bot, pero complementa.",
        "Para un segundo flujo local con gateway, mira hermes-agent-segundo-flujo.",
      ],
      takeaway:
        "Bot #1 verde → oficio distinto → Bot #2 limpio → higiene en Agent Computer → handoff sin login → login tuyo → routines separadas.",
    },
    en: {
      title: "Grok Bot: second teammate (2026)",
      metaTitle: "Grok Bot: add a second teammate without mixing contexts (2026)",
      metaDescription:
        "Confirm Bot #1 still works, create a second Bot with a different job, clean the shared Agent Computer and run two handoffs without cross-contaminating routines.",
      excerpt:
        "Second Bot, different job, same cloud machine. Close sessions, do not copy routines and keep risks separate.",
      intro:
        "If you finished grok-bot-primer-teammate, you already have a Bot with a plan, desktop app, five-part handoff, logins in Agent Computer and a routine or skill. This flow adds a second Bot with a different job — not «CRM + code + long-form writing» on one profile. Grok Bot is not grok.com; official onboarding is at https://cursor.com/bot/onboarding. Multiple bots on one account share the Agent Computer.",
      problem:
        "A poorly planned second Bot mixes contexts on the shared machine: tabs left by Bot #1, routines copied without reading and logins Bot #2 treats as its own. It looks like «the second Bot is dumb», but it is almost always cross-job contamination.",
      whatYouWillLearn: [
        "Confirm Bot #1 still answers with a real handoff or routine",
        "Pick a one-sentence job different from the first Bot",
        "Create Bot #2 with its own name, instructions and no-production / no-send rules",
        "Shared Agent Computer hygiene before you hand off control",
        "A first no-login handoff (PDF or notes) and one where you take the login",
        "Keep skills and routines scoped per Bot",
        "Decide when one Bot is enough and when a second is worth it",
      ],
      prerequisites: [
        "Completed grok-bot-primer-teammate (one working Bot with at least one successful handoff)",
        "SuperGrok Plus/Heavy or Cursor Pro+, Ultra or Teams",
        "macOS, Windows or iOS (no Linux desktop app yet)",
        "A real second job with a deliverable different from Bot #1",
        "22 minutes without mixing this with Hermes or the grok.com chat",
      ],
      steps: [
        {
          title: "Confirm Bot #1 still holds",
          content:
            "Before creating anything new, open the Grok Bot app (not grok.com) and run the same job that already worked: a saved routine or a short test handoff. Success = the Bot delivers the expected format and stops where you said («wait for my OK»). If it fails, fix Bot #1 first — a second Bot does not repair a broken first flow.",
          whatYouShouldSee:
            "A reply with Bot #1's usual deliverable. Agent Computer active only for that job, with no plan or app errors.",
          warning:
            "If Bot #1 cannot complete a handoff today, go back to the first tutorial. Do not add a second profile on top.",
          imageDescription:
            "Grok Bot app with Bot #1 selected and a completed test handoff with a visible review point.",
        },
        {
          title: "Pick a one-sentence job — different from Bot #1",
          content:
            "Write Bot #1's sentence in a notes doc («summarize internal PDFs in five bullets») and Bot #2's in another register. Examples that fit: Bot #1 = weekly research briefs; Bot #2 = inbox triage with drafts for approval. Or Bot #1 = incident notes; Bot #2 = vendor comparison PDFs. What does not fit: one Bot doing CRM, code and long writing. If the new job is only «another tone» for the same work, extend Bot #1's instructions instead of creating #2.",
          whatYouShouldSee:
            "Two job sentences in a notes doc. Each with a distinct deliverable and format, no overlap.",
          tip:
            "Quick test: would Bot #2 need tools or risks Bot #1 should not touch? If yes, second Bot. If not, stay on one.",
          imageDescription:
            "Notes doc with two lines: Bot #1 job and Bot #2 job, each with a different output format.",
        },
        {
          title: "Create Bot #2 with its own name and instructions",
          content:
            "In the app, create a new Bot. Name it for the job («Inbox-Triage» vs «Research-Brief»). In instructions: the one-sentence job, delivery format, what not to touch (production, sends, deletes) and «stop and wait for my OK before acting outside scope». Do not paste Bot #1's full block — reuse safety rules only if they are identical. Confirm the account is still eligible (SuperGrok Plus/Heavy or Cursor Pro+/Ultra/Teams).",
          whatYouShouldSee:
            "A second profile in the Bot list with instructions that mention one job and no-send / no-production rules.",
          warning:
            "Pasting Bot #1's instructions and changing two words keeps implicit memory and routines mixed. Write fresh for job #2.",
          imageDescription:
            "Bot creation screen with a distinct name, single-job instructions and no-production rules.",
        },
        {
          title: "Clean the shared Agent Computer",
          content:
            "Multiple bots share the same cloud machine. Before Bot #2's first handoff: close sessions and tabs Bot #1 left open, clear temporary downloads if any and check no active login remains that #2 could misread. Never paste passwords, tokens or 2FA codes in any Bot chat — you do logins in Agent Computer, at the keyboard.",
          whatYouShouldSee:
            "Agent Computer with a clean desktop or only the apps job #2 needs. No CRM tabs from Bot #1 still open.",
          warning:
            "A Bot #1 session left open while #2 works is the top cause of «read the wrong file» or «sent from the wrong account».",
          imageDescription:
            "Agent Computer window with tabs closed and a desktop ready for Bot #2's handoff.",
        },
        {
          title: "Bot #2's first handoff with no login",
          content:
            "Start with a test that needs no credentials: an internal PDF, notes in a doc or a public link. Use the same five-part scheme from the first flow: context, deliverable, format, limits, stop point. Example: «Read this product notes PDF. Return three bullets: decision, deadline, risk. Do not rewrite the original. Stop here and wait for my OK.» Review the result like a PR before you approve.",
          whatYouShouldSee:
            "Three bullets grounded in the PDF, no invented prose. The Bot says it is waiting for your OK and does not open apps that need login.",
          tip:
            "If this step fails, the issue is Bot #2's instructions, not the machine. Tune format and limits before testing logins.",
          imageDescription:
            "Bot #2 chat with a PDF attached and a three-bullet reply, no login windows open.",
        },
        {
          title: "Second handoff: login you take in Agent Computer",
          content:
            "Once the no-login test passes, pick a job that needs a signed-in app — for example reading tickets in a dashboard or a shared mailbox. In the handoff say which app to open, what to read and what not to do (no send, no delete). When the Bot needs access, you enter Agent Computer: username, password, 2FA, CAPTCHA. Do not dictate secrets in chat. After login, let the Bot collect; review the draft before any send.",
          whatYouShouldSee:
            "You in Agent Computer completing login. Bot #2 produces a draft or summary and stops at the review point.",
          warning:
            "If Bot #1 already had that app open on another account, sign out before you log in for handoff #2.",
          imageDescription:
            "Agent Computer with login screen handled by the user and Bot #2 chat waiting with a draft ready.",
        },
        {
          title: "Routines and skills only for this Bot",
          content:
            "If handoff #2's format repeats, save it as a skill or routine on Bot #2's profile — do not copy Bot #1's routine and rename it. Each Bot carries its own routines: research should not trigger inbox triage. Before you automate, run the same job twice manually and confirm the deliverable is stable.",
          whatYouShouldSee:
            "A new routine or skill under Bot #2 named for job #2. Bot #1 keeps its routines unchanged.",
          proTip:
            "Fewer routines per Bot = fewer surprises on the shared machine. Automate only what already ran the same way twice.",
          imageDescription:
            "Bot #2 routine list with a new entry; Bot #1 on another row with no duplicated routines.",
        },
        {
          title: "One Bot or two? When to stop",
          content:
            "Stay on one Bot if the «second job» is the same deliverable in another tone or the same tool with another folder. A second Bot is worth it when the output format changes (bullets vs email drafts), the main tool changes (CRM vs ticket panel) or the risk changes (read-only vs drafts that could send). If you need a third very different job, consider Hermes on your machine or Cursor for code — do not stack five Bots on the same VM without hygiene.",
          whatYouShouldSee:
            "A written decision: «two Bots are enough» or «I extend #1's instructions». No third profile created on impulse.",
          tip:
            "The shared machine scales poorly with many parallel jobs. Two well-separated Bots are usually the comfortable ceiling per account.",
          imageDescription:
            "Notes doc with criteria: same deliverable = one Bot; different format, tool or risk = second Bot.",
        },
      ],
      realUseCases: [
        {
          title: "Research + inbox triage",
          body: "Bot #1 summarizes market briefs in PDF. Bot #2 classifies the inbox and leaves drafts unsent. Same account, hygiene between sessions.",
        },
        {
          title: "Incidents + internal documentation",
          body: "Bot #1 collects impact and screenshots in an observability panel. Bot #2 turns meeting notes into bullets for Confluence — without touching production.",
        },
        {
          title: "CRM vs vendor comparison",
          body: "Bot #1 updates the pipeline with strict no-send rules. Bot #2 only reads proposal PDFs and outputs comparison tables. Risks kept apart.",
        },
      ],
      commonMistakes: [
        {
          title: "Creating Bot #2 before #1 works",
          body: "An unstable first flow contaminates everything. Confirm a Bot #1 handoff or routine today before adding a profile.",
        },
        {
          title: "Copying Bot #1's routine to #2",
          body: "Triggers the wrong job on the shared machine. Each Bot gets its own routines from scratch.",
        },
        {
          title: "Leaving Bot #1 sessions open",
          body: "Open tabs and active logins mix contexts. Close before you hand Agent Computer to #2.",
        },
        {
          title: "Pasting secrets in chat",
          body: "Passwords and 2FA belong in Agent Computer, with you at the keyboard. Not in any Bot thread.",
        },
        {
          title: "Confusing Grok Bot with grok.com",
          body: "xAI's chat has no teammates or Agent Computer. The right product starts at cursor.com/bot/onboarding.",
        },
      ],
      conclusion:
        "A second Grok Bot teammate is not duplicating the first: it is another job, another routine and the same machine with hygiene between handoffs. Confirm Bot #1, define the work in one sentence, clean Agent Computer, test without login then with login you own. If the new job is almost the same as the old one, extend one Bot instead of multiplying profiles.",
      nextSteps: [
        "Run Bot #2's routine twice on different days to confirm it holds without contaminating #1.",
        "If the work becomes code in your repo again, open Cursor — it complements the Bot, not replaces it.",
        "For a second local flow with gateway, see hermes-agent-segundo-flujo.",
      ],
      takeaway:
        "Bot #1 green → different job → clean Bot #2 → Agent Computer hygiene → no-login handoff → login you own → separate routines.",
    },
  },
};
