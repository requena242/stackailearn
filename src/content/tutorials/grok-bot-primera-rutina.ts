import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "grok-bot-primera-rutina";

export const grokBotPrimeraRutina: Tutorial = {
  id: slug,
  slug,
  category: "productivity",
  level: "advanced",
  estimatedTime: 20,
  publishedAt: "2026-09-24",
  lastUpdated: "2026-09-24",
  toolsUsed: ["grok-bot", "cursor"],
  relatedTutorials: [
    "grok-bot-primer-teammate",
    "grok-bot-segundo-teammate",
    "hermes-agent-segundo-flujo",
  ],
  tags: ["grok-bot", "rutina", "routine", "programada", "schedule"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Rutina programada de Grok Bot con horario en días laborables",
      caption: "Un trabajo repetible. Un disparo en horario. Tú revisas el entregable.",
      hint: "Hero: app de Grok Bot con panel de Routines, cron en día laborable por la mañana (zona Europe/Madrid) y un run completado en el historial.",
    },
    en: {
      alt: "Scheduled Grok Bot routine on a weekday timetable",
      caption: "One repeatable job. One timed trigger. You review the deliverable.",
      hint: "Hero: Grok Bot app with Routines panel, weekday morning cron (Europe/Madrid style) and a completed run in history.",
    },
  }),
  copy: {
    es: {
      title: "Grok Bot: primera rutina programada (2026)",
      metaTitle: "Grok Bot: programar tu primera rutina sin sorpresas (2026)",
      metaDescription:
        "Elige un trabajo repetible, escribe la intención de la routine (meta, no receta rígida), programa un horario laborable en Europe/Madrid, deja que dispare una vez y verifica el resultado.",
      excerpt:
        "Después del primer teammate, automatiza un encargo que ya te funciona a mano. Cron en horario humano, un Bot correcto y revisión del entregable.",
      intro:
        "Si completaste grok-bot-primer-teammate, ya tienes un Bot con handoffs que entregan un formato estable. Este tutorial es la primera routine programada: un prompt que se ejecuta solo en la app de Grok Bot aunque no estés delante — por cron o por oyentes de eventos. Grok Bot son teammates de xAI/Cursor más Agent Computer (VM en la nube); no es el chat de Grok en la web. Onboarding oficial: https://cursor.com/bot/onboarding. No copies una routine de otro Bot ni programes a las tres de la madrugada «porque así no molesta».",
      problem:
        "Sin routine, repites el mismo handoff cada lunes. Con una routine mal escrita o mal horario, el Bot corre de noche, abre la máquina equivocada o ejecuta el oficio del perfil que no toca. El síntoma es «no pasó nada» o «pasó algo que no pedí».",
      whatYouWillLearn: [
        "Elegir un trabajo que ya pasó dos veces igual a mano",
        "Redactar la intención de la routine: objetivo, formato y límites — no una lista congelada de clics",
        "Fijar un cron sensato en día laborable y horario diurno (mentalidad Europe/Madrid)",
        "Guardar la routine en el Bot correcto y revisar zona horaria",
        "Dejar que dispare una vez y localizar el run en el historial",
        "Verificar el entregable y ajustar la intención si hace falta",
        "Evitar errores típicos: cron nocturno, Bot copiado, confusión con grok.com",
      ],
      prerequisites: [
        "Haber completado grok-bot-primer-teammate (al menos un handoff exitoso con formato estable)",
        "SuperGrok Plus/Heavy o Cursor Pro+, Ultra o Teams",
        "App de Grok Bot en macOS, Windows o iOS (no grok.com)",
        "Un encargo repetible con entregable revisable (viñetas, borrador, tabla)",
        "20 minutos para programar, esperar un disparo y corregir",
      ],
      steps: [
        {
          title: "Elige un trabajo que ya se repite igual",
          content:
            "Abre la app de Grok Bot (no el chat de Grok en la web) y revisa qué handoff ya ejecutaste dos veces con el mismo resultado: resumen de PDF interno, triaje de inbox en solo lectura, captura de métricas en un panel. La routine no arregla un flujo inestable — solo automatiza lo que ya es predecible. Si tienes dos Bots, elige el perfil cuyo oficio coincide con ese trabajo; no programes en el Bot del otro oficio.",
          whatYouShouldSee:
            "Una nota con el nombre del Bot, el entregable (p. ej. «cinco viñetas») y la fecha de las dos ejecuciones manuales exitosas.",
          tip:
            "Si aún mezclas oficios en un solo Bot, termina grok-bot-segundo-teammate antes de programar — las routines heredan el contexto del perfil equivocado.",
          imageDescription:
            "Bloc con Bot elegido, entregable en una línea y dos marcas de «manual OK» en días distintos.",
        },
        {
          title: "Escribe la intención de la routine (meta, no receta)",
          content:
            "En el editor de routines del Bot, describe el objetivo como lo harías a un compañero: qué fuentes mirar, qué formato devolver, qué no tocar (producción, envíos, borrado) y dónde parar («deja borrador y espera mi OK»). Evita pegar una secuencia rígida de herramientas («abre Chrome, clic en X, clic en Y») — el Agent Computer elige pasos si la meta es clara. Incluye criterios de calidad: «si no hay datos nuevos, responde «sin cambios» en tres líneas».",
          whatYouShouldSee:
            "Un bloque de intención de 8–15 líneas con objetivo, formato, límites y punto de parada. Sin lista de clics copiada de un solo run.",
          warning:
            "Una «receta congelada» se rompe cuando la UI cambia. La meta estable sobrevive mejor en runs autónomos.",
          imageDescription:
            "Pantalla de creación de routine con texto de intención, reglas de no-envío y formato de salida en viñetas.",
        },
        {
          title: "Programa un horario laborable (Europe/Madrid)",
          content:
            "Elige cron o programación recurrente en día laborable y horario en que sueles revisar resultados — por ejemplo martes y jueves a las 09:30, pensando en Europe/Madrid (UTC+1 en invierno, UTC+2 en verano). Evita 02:00–05:00: nadie revisa, los fallos se acumulan y el Bot puede dejar la VM en un estado raro hasta tu siguiente sesión. Si la app muestra zona horaria, confírmala; si viajas, ajusta antes del próximo disparo. Para la primera prueba, añade un run único en los próximos 30–60 minutos además del cron semanal.",
          whatYouShouldSee:
            "Calendario o selector con días Lu–Vi, hora ~09:00–11:00, zona Europe/Madrid (o equivalente explícito) y un disparo de prueba cercano en el tiempo.",
          proTip:
            "Primera routine: un solo día de la semana. Cuando dos semanas seguidas entreguen bien, añade el segundo día.",
          imageDescription:
            "UI de schedule con martes/jueves 09:30, etiqueta de zona horaria y un one-off «prueba hoy» marcado.",
        },
        {
          title: "Guarda la routine en el Bot correcto",
          content:
            "Antes de guardar, verifica en la barra lateral que el perfil activo es el del oficio que automatizas — no el del segundo teammate ni un Bot de prueba vacío. Pon un nombre de routine que diga el trabajo («Brief-lunes-CRM»), no «Routine 1». Revisa notificaciones: email o push si tu plan las ofrece, para saber que disparó mientras estabas ausente. Guarda y comprueba que aparece en la lista de routines de ese Bot solamente.",
          whatYouShouldSee:
            "La routine nueva bajo el Bot elegido, estado activo, próximo run con fecha/hora legible. Otros Bots sin copia de la misma routine.",
          warning:
            "Copiar la routine del Bot #1 al #2 es el error más común tras grok-bot-segundo-teammate. Créala en el perfil que hace ese trabajo.",
          imageDescription:
            "Lista de Bots con uno resaltado; debajo, una routine activa con «próximo disparo» visible.",
        },
        {
          title: "Deja que dispare una vez (sin microgestionar)",
          content:
            "Cierra la app o sigue con otra tarea — la gracia es que el run es autónomo. No abras Agent Computer a menos que la routine necesite login que ya dejaste preparado en un run anterior; si hace falta credencial nueva, reprograma después de un handoff manual con login tuyo. Cuando llegue la hora, el Bot arranca en la VM en la nube. Si tienes disparo de prueba, espera esa ventana antes del cron semanal.",
          whatYouShouldSee:
            "Notificación o entrada en historial de runs con hora de inicio, Bot correcto y estado «en curso» o «completado».",
          tip:
            "Si el run falla por plan o app cerrada, el historial suele mostrar el motivo — anótalo antes de cambiar el cron.",
          imageDescription:
            "Historial de routines con un run reciente, timestamp y estado completado o error breve.",
        },
        {
          title: "Verifica el entregable como un PR",
          content:
            "Abre el resultado del run: chat, adjunto o resumen en la app. Comprueba formato (número de viñetas, tono), que no haya envíos ni cambios en producción y que las fechas/cifras coinciden con la fuente. Si el Bot dejó borrador para aprobar, no pulses enviar hasta leer. Agent Computer puede quedar con pestañas abiertas — ciérralas si el siguiente run es otro oficio o otro Bot.",
          whatYouShouldSee:
            "Entregable alineado con tus dos runs manuales. Mensaje explícito de «esperando OK» si lo pediste en la intención.",
          warning:
            "Aprobar sin leer porque «ya es routine» repite el mismo error que en el primer handoff — la automatización multiplica el riesgo.",
          imageDescription:
            "Vista del entregable de la routine junto a una checklist: formato, límites, fuentes, punto de parada.",
        },
        {
          title: "Corrige errores típicos y afina",
          content:
            "Si no disparó: revisa zona horaria, routine pausada y que el Bot sigue en plan elegible. Si disparó el oficio equivocado: borra la copia del otro Bot y reescribe la intención en el perfil correcto. Si el run fue de madrugada sin revisión: mueve el cron a horario laborable. Si buscabas «programar Grok» en la web: el chat de Grok no tiene routines ni Agent Computer — vuelve a https://cursor.com/bot/onboarding. Ajusta la intención (más límites, «sin cambios») y deja otro disparo de prueba antes de confiar en el cron semanal.",
          whatYouShouldSee:
            "Una lista corta de cambios aplicados (hora, Bot, texto de intención) y un segundo run de prueba programado o completado con éxito.",
          proTip:
            "Guarda en el bloc la versión de intención que funcionó — las routines evolucionan como el código, no como un PDF congelado.",
          imageDescription:
            "Panel de edición de routine con horario corregido a 10:00 laborable e intención acortada con límites más claros.",
        },
      ],
      realUseCases: [
        {
          title: "Brief de lunes sin abrir la app",
          body: "Cada lunes a las 09:00 el Bot resume tickets y CRM en cinco viñetas. Tú lees el push en el metro y apruebas borradores más tarde en Agent Computer.",
        },
        {
          title: "Radar de competencia quincenal",
          body: "Routine quincenal en horario de oficina: lee PDFs guardados en una carpeta compartida y devuelve tabla comparativa. Sin envíos externos.",
        },
        {
          title: "Health check de panel",
          body: "Miércoles y viernes a las 10:30: captura métricas en un dashboard con login ya establecido, pega captura y tres alertas si algo cruza umbral.",
        },
      ],
      commonMistakes: [
        {
          title: "Cron a las 3:00 «para no molestar»",
          body: "Nadie revisa; los fallos se acumulan y la VM queda sucia. Usa mañanas laborables en tu zona (p. ej. Europe/Madrid).",
        },
        {
          title: "Routine en el Bot equivocado",
          body: "Dispara el oficio del otro teammate en la máquina compartida. Crea la routine solo bajo el perfil del trabajo que automatizas.",
        },
        {
          title: "Receta de clics en lugar de meta",
          body: "Un cambio de UI rompe el run. Escribe objetivo, formato y límites; deja que el Bot elija herramientas.",
        },
        {
          title: "Automatizar antes de dos éxitos manuales",
          body: "La routine amplifica la inestabilidad. Ejecuta el mismo handoff dos veces a mano antes de programar.",
        },
        {
          title: "Confundir Grok Bot con el chat de Grok",
          body: "grok.com no programa teammates ni VM. El producto correcto es la app Grok Bot; onboarding en cursor.com/bot/onboarding.",
        },
      ],
      conclusion:
        "La primera routine programada convierte un handoff estable en trabajo que ocurre sin ti — pero solo si eliges el Bot correcto, escribes intención clara, programas en horario humano y revisas el primer disparo como un PR. Grok Bot no es el chat de Grok; es teammate más Agent Computer. Afina horario e intención tras el primer run antes de confiar en el cron recurrente.",
      nextSteps: [
        "Deja correr la routine dos semanas en el mismo horario y anota si el entregable sigue estable.",
        "Si añades un segundo oficio, separa routines por Bot siguiendo grok-bot-segundo-teammate.",
        "Cuando el trabajo vuelva a ser código en tu repo, usa Cursor en paralelo — no sustituye las routines del Bot.",
      ],
      takeaway:
        "Dos manuales OK → intención clara → cron laborable Europe/Madrid → Bot correcto → un disparo → revisar → corregir horario o texto.",
    },
    en: {
      title: "Grok Bot: first scheduled routine (2026)",
      metaTitle: "Grok Bot: schedule your first routine without surprises (2026)",
      metaDescription:
        "Pick a repeatable job, write routine intent (goal, not a frozen tool recipe), set a sensible weekday daytime schedule in Europe/Madrid style, let it fire once and verify the result.",
      excerpt:
        "After your first teammate, automate a job that already works by hand. Human-hour cron, the right Bot and deliverable review.",
      intro:
        "If you finished grok-bot-primer-teammate, you already have a Bot whose handoffs deliver a stable format. This tutorial is your first scheduled routine: a prompt that runs on its own in the Grok Bot app even when you are away — via cron or event listeners. Grok Bot means xAI/Cursor teammates plus Agent Computer (cloud VM); it is not Grok web chat. Official onboarding: https://cursor.com/bot/onboarding. Do not copy a routine from another Bot or schedule at 3 a.m. «because it is quiet».",
      problem:
        "Without a routine, you repeat the same handoff every Monday. With bad intent or a bad schedule, the Bot runs overnight, opens the wrong machine state or executes another profile's job. The symptom is «nothing happened» or «something I did not ask for happened».",
      whatYouWillLearn: [
        "Pick a job that already succeeded twice the same way by hand",
        "Write routine intent: goal, format and limits — not a frozen click list",
        "Set sensible weekday daytime cron (Europe/Madrid mindset)",
        "Save the routine on the correct Bot and confirm timezone",
        "Let it fire once and find the run in history",
        "Verify the deliverable and tune intent if needed",
        "Avoid typical mistakes: overnight cron, copied Bot, grok.com confusion",
      ],
      prerequisites: [
        "Completed grok-bot-primer-teammate (at least one successful handoff with stable format)",
        "SuperGrok Plus/Heavy or Cursor Pro+, Ultra or Teams",
        "Grok Bot app on macOS, Windows or iOS (not grok.com)",
        "A repeatable job with a reviewable deliverable (bullets, draft, table)",
        "20 minutes to schedule, wait for one fire and fix",
      ],
      steps: [
        {
          title: "Pick a job that already repeats the same way",
          content:
            "Open the Grok Bot app (not Grok web chat) and identify which handoff you ran twice with the same outcome: internal PDF summary, read-only inbox triage, metrics snapshot in a dashboard. A routine does not fix an unstable flow — it only automates what is already predictable. If you have two Bots, pick the profile whose job matches that work; do not schedule on the other job's Bot.",
          whatYouShouldSee:
            "A note with the Bot name, deliverable (e.g. «five bullets») and dates of two successful manual runs.",
          tip:
            "If you still mix jobs on one Bot, finish grok-bot-segundo-teammate before scheduling — routines inherit the wrong profile context.",
          imageDescription:
            "Notes doc with chosen Bot, one-line deliverable and two «manual OK» marks on different days.",
        },
        {
          title: "Write routine intent (goal, not recipe)",
          content:
            "In that Bot's routine editor, describe the goal like you would to a teammate: which sources to check, output format, what not to touch (production, sends, deletes) and where to stop («leave a draft and wait for my OK»). Avoid pasting a rigid tool sequence («open Chrome, click X, click Y») — Agent Computer picks steps when the goal is clear. Add quality bars: «if there is no new data, reply «no changes» in three lines».",
          whatYouShouldSee:
            "An 8–15 line intent block with goal, format, limits and stop point. No click list copied from a single run.",
          warning:
            "A frozen recipe breaks when the UI changes. A stable goal survives autonomous runs better.",
          imageDescription:
            "Routine creation screen with intent text, no-send rules and bullet output format.",
        },
        {
          title: "Schedule weekday daytime hours (Europe/Madrid)",
          content:
            "Pick cron or recurrence on a weekday at a time you usually review results — for example Tuesday and Thursday at 09:30, thinking in Europe/Madrid (UTC+1 winter, UTC+2 summer). Avoid 02:00–05:00: nobody reviews, failures pile up and the Bot may leave the VM in a odd state until your next session. If the app shows timezone, confirm it; if you travel, adjust before the next fire. For the first test, add a one-off run in the next 30–60 minutes in addition to the weekly cron.",
          whatYouShouldSee:
            "Calendar or picker with Mon–Fri, time around 09:00–11:00, Europe/Madrid zone (or explicit equivalent) and a nearby test fire.",
          proTip:
            "First routine: one weekday only. After two good weeks, add the second day.",
          imageDescription:
            "Schedule UI with Tue/Thu 09:30, timezone label and a one-off «test today» marked.",
        },
        {
          title: "Save the routine on the correct Bot",
          content:
            "Before saving, confirm the sidebar profile is the job you automate — not the second teammate or an empty test Bot. Name the routine for the work («Monday-CRM-brief»), not «Routine 1». Check notifications: email or push if your plan offers them, so you know it fired while you were away. Save and confirm it appears only in that Bot's routine list.",
          whatYouShouldSee:
            "The new routine under the chosen Bot, active state, next run with readable date/time. Other Bots without a duplicate copy.",
          warning:
            "Copying Bot #1's routine to #2 is the top mistake after grok-bot-segundo-teammate. Create it on the profile that actually does that job.",
          imageDescription:
            "Bot list with one highlighted; below, an active routine with «next fire» visible.",
        },
        {
          title: "Let it fire once (no micromanaging)",
          content:
            "Close the app or move on — the point is an autonomous run. Do not open Agent Computer unless the routine needs a login you already prepared in a prior run; if new credentials are required, reschedule after a manual handoff where you log in. When the time hits, the Bot starts on the cloud VM. If you added a test fire, wait for that window before trusting the weekly cron.",
          whatYouShouldSee:
            "Notification or run history entry with start time, correct Bot and status «running» or «completed».",
          tip:
            "If the run fails for plan or app reasons, history often shows why — note it before you change the cron.",
          imageDescription:
            "Routine history with a recent run, timestamp and completed or brief error state.",
        },
        {
          title: "Verify the deliverable like a PR",
          content:
            "Open the run result: chat, attachment or summary in the app. Check format (bullet count, tone), no sends or production changes, and dates/figures match the source. If the Bot left a draft for approval, do not send until you read it. Agent Computer may keep tabs open — close them if the next run is another job or Bot.",
          whatYouShouldSee:
            "Deliverable aligned with your two manual runs. Explicit «waiting for OK» if you asked for it in intent.",
          warning:
            "Approving without reading because «it is automated now» repeats the first-handoff mistake — automation multiplies risk.",
          imageDescription:
            "Routine output view next to a checklist: format, limits, sources, stop point.",
        },
        {
          title: "Fix typical mistakes and tune",
          content:
            "If it did not fire: check timezone, paused routine and eligible plan. If the wrong job ran: delete the copy on the other Bot and rewrite intent on the correct profile. If it ran at night unchecked: move cron to business hours. If you tried to «schedule Grok» on the web: Grok web chat has no routines or Agent Computer — return to https://cursor.com/bot/onboarding. Tune intent (tighter limits, «no changes») and schedule another test fire before trusting the weekly cron.",
          whatYouShouldSee:
            "A short list of applied fixes (time, Bot, intent text) and a second test run scheduled or completed successfully.",
          proTip:
            "Save the intent version that worked in your notes — routines evolve like code, not like a frozen PDF.",
          imageDescription:
            "Routine edit panel with schedule moved to 10:00 weekday and shorter intent with clearer limits.",
        },
      ],
      realUseCases: [
        {
          title: "Monday brief without opening the app",
          body: "Every Monday at 09:00 the Bot summarizes tickets and CRM in five bullets. You read the push on the commute and approve drafts later in Agent Computer.",
        },
        {
          title: "Biweekly competitor radar",
          body: "Biweekly office-hours routine: read PDFs in a shared folder and return a comparison table. No external sends.",
        },
        {
          title: "Dashboard health check",
          body: "Wednesday and Friday at 10:30: capture metrics on a dashboard with login already set, attach screenshot and three alerts if something crosses threshold.",
        },
      ],
      commonMistakes: [
        {
          title: "3 a.m. cron «to stay out of the way»",
          body: "Nobody reviews; failures stack and the VM stays dirty. Use weekday mornings in your zone (e.g. Europe/Madrid).",
        },
        {
          title: "Routine on the wrong Bot",
          body: "Fires the other teammate's job on the shared machine. Create the routine only under the profile for that work.",
        },
        {
          title: "Click recipe instead of goal",
          body: "A UI change breaks the run. Write goal, format and limits; let the Bot choose tools.",
        },
        {
          title: "Automating before two manual wins",
          body: "The routine amplifies instability. Run the same handoff twice by hand before scheduling.",
        },
        {
          title: "Confusing Grok Bot with Grok web chat",
          body: "grok.com does not schedule teammates or a VM. The right product is the Grok Bot app; onboarding at cursor.com/bot/onboarding.",
        },
      ],
      conclusion:
        "Your first scheduled routine turns a stable handoff into work that happens without you — but only if you pick the right Bot, write clear intent, schedule human hours and review the first fire like a PR. Grok Bot is not Grok web chat; it is teammate plus Agent Computer. Tune schedule and intent after the first run before you trust recurring cron.",
      nextSteps: [
        "Let the routine run two weeks on the same schedule and note whether the deliverable stays stable.",
        "If you add a second job, keep routines per Bot following grok-bot-segundo-teammate.",
        "When work shifts back to code in your repo, use Cursor in parallel — it does not replace Bot routines.",
      ],
      takeaway:
        "Two manual OKs → clear intent → weekday Europe/Madrid cron → correct Bot → one fire → review → fix schedule or text.",
    },
  },
};
