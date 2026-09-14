import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "hermes-agent-segundo-flujo";

export const hermesAgentSegundoFlujo: Tutorial = {
  id: slug,
  slug,
  category: "code",
  level: "advanced",
  estimatedTime: 22,
  publishedAt: "2026-09-14",
  lastUpdated: "2026-09-14",
  toolsUsed: ["hermes-agent", "cursor"],
  relatedTutorials: [
    "hermes-agent-primer-flujo",
    "cursor-como-ide-con-ia",
    "grok-bot-primer-teammate",
  ],
  tags: ["hermes", "cli", "gateway", "telegram", "nous"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Terminal con hermes gateway y un mensaje de Telegram que usa tools",
      caption: "El gateway solo tiene sentido si el chat local ya respondía ayer.",
      hint: "Hero: terminal con hermes gateway status en verde y un hilo de Telegram con respuesta que lista archivos.",
    },
    en: {
      alt: "Terminal with hermes gateway and a Telegram message that uses tools",
      caption: "The gateway only makes sense if local chat already worked yesterday.",
      hint: "Hero: terminal with hermes gateway status green and a Telegram thread with a reply that lists files.",
    },
  }),
  copy: {
    es: {
      title: "Hermes Agent: segundo flujo con gateway (2026)",
      metaTitle: "Hermes Agent: gateway a Telegram tras un CLI que ya funciona (2026)",
      metaDescription:
        "Confirma el día 1, monta hermes gateway setup en Telegram, verifica un mensaje remoto con tools y vuelve al chat local sin romper nada.",
      excerpt:
        "Día dos: doctor, gateway a Telegram, un mensaje remoto que usa tools, permisos recortados y diagnóstico si algo se cae.",
      intro:
        "Si ya completaste el primer flujo de Hermes Agent, tienes install, modelo ≥64K y un chat local que usa tools. Este segundo flujo añade el gateway a Telegram — el camino más directo para hablar con tu agente desde el móvil. Slack sigue el mismo patrón con `hermes gateway setup`; aquí priorizamos Telegram. Hermes corre en tu máquina; no es Cursor ni Grok Bot.",
      problem:
        "Montar el gateway encima de un CLI medio roto produce un bot mudo en Telegram. El síntoma parece «Telegram», pero casi siempre es el modelo, el setup o el gateway arrancado antes de que el chat local respondiera.",
      whatYouWillLearn: [
        "Confirmar que el día 1 sigue en verde antes de tocar el gateway",
        "Configurar Telegram con hermes gateway setup",
        "Arrancar el gateway y verificar un mensaje remoto con tools",
        "Recortar permisos con skills y tools cuando el remoto ya responde",
        "Comprobar que el chat local sigue vivo y diagnosticar si no",
      ],
      prerequisites: [
        "Haber completado hermes-agent-primer-flujo (chat local con tools y doctor en verde)",
        "Cuenta en Telegram y 10 minutos para crear un bot con @BotFather",
        "Tu user ID de Telegram (el wizard lo pide para la allowlist)",
        "22 minutos sin mezclar esto con un teammate en la nube",
      ],
      steps: [
        {
          title: "Confirma que el día 1 sigue en pie",
          content:
            "Antes del gateway: `hermes doctor`. Si algo falla, arregla con `hermes model` o `hermes setup` — no sigas. Luego un chat rápido: `hermes chat -q \"Resume este directorio en 3 viñetas\"` o abre `hermes --tui` y pide lo mismo. Éxito = responde con contenido real y, si hace falta, usa una tool.",
          whatYouShouldSee:
            "doctor en verde o con un fallo concreto que puedas leer. Un resumen del directorio, no un saludo vacío.",
          warning:
            "Si el chat local falla aquí, Telegram solo amplifica el problema. No instales el gateway todavía.",
          imageDescription:
            "Terminal con hermes doctor en verde y un chat local que resume el directorio en viñetas.",
        },
        {
          title: "Prepara el bot de Telegram",
          content:
            "En Telegram, abre @BotFather → `/newbot` → copia el token. Para tu user ID: escribe a @userinfobot o mira la salida del wizard. Guarda token e ID en un gestor de contraseñas; los pedirá `hermes gateway setup`. Slack usa el mismo comando y otro bloque de credenciales — si tu equipo vive en Slack, elige Slack en el wizard en lugar de Telegram.",
          whatYouShouldSee:
            "Un token de bot (`123456789:ABC…`) y tu user ID numérico listos para pegar.",
          tip:
            "Un bot sin allowlist es una puerta abierta. El wizard pide usuarios permitidos; no lo dejes vacío.",
          imageDescription:
            "Chat de BotFather con el token del bot nuevo y un bloc con el user ID copiado.",
        },
        {
          title: "Configura el gateway con el wizard",
          content:
            "En la terminal: `hermes gateway setup`. Elige Telegram cuando pregunte la plataforma. Pega el token y tu user ID en la allowlist. El wizard escribe en `~/.hermes/.env` y `config.yaml`. Si prefieres revisar antes de arrancar: `hermes config show` tras el setup.",
          whatYouShouldSee:
            "Mensaje de configuración guardada. Telegram marcado como plataforma activa en la salida del wizard.",
          warning:
            "No edites a mano diez variables si el wizard ya las escribió. Un typo en el token da «bot mudo» sin error claro.",
          imageDescription:
            "Salida de hermes gateway setup con Telegram seleccionado y allowlist confirmada.",
        },
        {
          title: "Arranca el gateway y comprueba el estado",
          content:
            "Para probar: `hermes gateway run` en primer plano (recomendado la primera vez). En macOS/Linux, cuando ya confíes: `hermes gateway install` y `hermes gateway start` para dejarlo como servicio. Comprueba con `hermes gateway status`. Si no responde: `cat ~/.hermes/logs/gateway.log | tail -50`.",
          whatYouShouldSee:
            "gateway status indica que el proceso está activo. En Telegram, el bot aparece online en segundos.",
          tip:
            "En WSL o Docker, `hermes gateway run` en primer plano evita sorpresas con servicios de fondo.",
          imageDescription:
            "Terminal con hermes gateway run activo y el bot de Telegram mostrando estado online.",
        },
        {
          title: "Manda un mensaje remoto que use tools",
          content:
            "Desde Telegram, escribe algo comprobable: «Lista los archivos de este directorio y dime cuál parece el entrypoint». No un «hola». Éxito = el agente responde con nombres reales de archivos — señal de que el tool loop remoto funciona. Si contesta vacío o genérico: `hermes doctor --check gateway`, revisa el modelo (≥64K) y los logs.",
          whatYouShouldSee:
            "Una respuesta en Telegram con nombres de archivos del directorio de trabajo del agente, no un eco del saludo.",
          warning:
            "Un bot que solo dice «¡Hola!» no ha pasado la prueba. Tiene que demostrar que ejecuta tools.",
          imageDescription:
            "Hilo de Telegram con la pregunta sobre archivos y una respuesta que nombra ficheros concretos.",
        },
        {
          title: "Recorta skills y tools (opcional pero útil)",
          content:
            "Cuando el remoto responde, afina permisos. `hermes skills browse` para ver skills; instala solo lo que necesites (`hermes skills install …`). `hermes tools` para desactivar toolsets que no uses en Telegram. Si no quieres shell en crudo en tu Mac: `hermes config set terminal.backend docker` (requiere Docker). Cron queda para después: `hermes cron list` solo si ya tienes un oficio repetible.",
          whatYouShouldSee:
            "Lista de skills o tools con los que no necesitas desmarcados. Chat remoto sigue respondiendo tras el recorte.",
          proTip:
            "Menos tools activas = menos tokens en cada turno y menos sorpresas en el móvil.",
          imageDescription:
            "Salida de hermes tools o hermes skills browse con un toolset desactivado para Telegram.",
        },
        {
          title: "Verifica que el chat local sigue vivo",
          content:
            "Con el gateway corriendo, abre otra terminal y lanza `hermes` o `hermes --continue`. Pide otra tarea local: «¿Qué sesiones tengo abiertas?» o un resumen corto. El gateway y el CLI comparten configuración pero son procesos distintos; ambos deben responder.",
          whatYouShouldSee:
            "El chat local responde con normalidad mientras el bot de Telegram sigue online en paralelo.",
          tip:
            "Si solo funciona uno de los dos, no asumas que «ya está». Anota cuál falla antes de diagnosticar.",
          imageDescription:
            "Dos ventanas de terminal: gateway activo y chat local de hermes respondiendo a la vez.",
        },
        {
          title: "Si algo se rompe: parar, diagnosticar, volver atrás",
          content:
            "Orden de rescate: `hermes gateway stop` (o Ctrl+C si estaba en `run`) → `hermes doctor` → prueba el chat local otra vez. Si el local vuelve pero Telegram no: `hermes gateway setup` de nuevo y revisa token y allowlist. Logs: `hermes logs` o `~/.hermes/logs/gateway.log`. Para deshacer el gateway sin tocar el modelo: comenta la sección de Telegram en config o vuelve a correr el wizard. No mezcles esto con Grok Bot — ese teammate vive en la nube de Cursor, no en tu shell.",
          whatYouShouldSee:
            "Tras `gateway stop`, el chat local responde. doctor señala el fallo concreto del gateway si quedó mal configurado.",
          warning:
            "No reinstales Hermes entero por un token mal pegado. Para el gateway, corrige config y reinicia.",
          imageDescription:
            "Terminal con hermes gateway stop, doctor señalando un fallo de token y chat local respondiendo de nuevo.",
        },
      ],
      realUseCases: [
        {
          title: "Preguntar al repo desde el móvil",
          body: "Gateway a Telegram y un mensaje que lista archivos o resume un módulo sin abrir el portátil.",
        },
        {
          title: "Un oficio repetible con permisos cerrados",
          body: "Solo las tools que necesitas, terminal en Docker si toca shell, y el mismo agente en local y en Telegram.",
        },
        {
          title: "El mismo agente que en la terminal, en otro sitio",
          body: "Cuando el trabajo ya no es un diff en Cursor sino un agente que vive en tu máquina y contesta donde estés.",
        },
      ],
      commonMistakes: [
        {
          title: "Gateway antes de un chat local estable",
          body: "Si el día 1 no pasó, vuelve a hermes-agent-primer-flujo. Telegram no arregla un CLI roto.",
        },
        {
          title: "Probar con «hola» y darlo por bueno",
          body: "Un saludo no demuestra tools. Pide algo que solo se responda leyendo el disco.",
        },
        {
          title: "Allowlist vacía o token mal copiado",
          body: "El bot parece online y no contesta a nadie. Revisa user ID y token en gateway setup.",
        },
        {
          title: "Confundir Hermes con Grok Bot",
          body: "Hermes es CLI local + gateway opcional. Grok Bot es teammate con VM en la nube — otro producto.",
        },
      ],
      conclusion:
        "El segundo flujo de Hermes no es más install: es llevar un CLI que ya hablaba a Telegram, comprobar que el remoto usa tools, recortar permisos y saber parar el gateway sin perder el chat local. Si algo falla, doctor y logs antes de reinstalar.",
      nextSteps: [
        "Repite un encargo remoto mañana con el mismo bot para confirmar que el servicio aguanta.",
        "Si el trabajo vuelve a ser un diff en el repo, abre Cursor.",
        "Para un teammate con navegador en la nube, mira grok-bot-primer-teammate — no es Hermes.",
      ],
      takeaway:
        "Doctor → gateway setup → mensaje remoto con tools → chat local intacto. Para el gateway, Telegram primero; Slack mismo wizard.",
    },
    en: {
      title: "Hermes Agent: second flow with gateway (2026)",
      metaTitle: "Hermes Agent: Telegram gateway after a working CLI (2026)",
      metaDescription:
        "Confirm day one, run hermes gateway setup for Telegram, verify a remote tool-using message, and keep local chat working.",
      excerpt:
        "Day two: doctor, Telegram gateway, a remote message that uses tools, tightened permissions, and diagnosis if something breaks.",
      intro:
        "If you finished the first Hermes Agent flow, you have install, a ≥64K model, and a local chat that uses tools. This second flow adds the gateway to Telegram — the straightest path to talk to your agent from your phone. Slack follows the same pattern with `hermes gateway setup`; here we prioritize Telegram. Hermes runs on your machine; it is not Cursor and not Grok Bot.",
      problem:
        "Stacking a gateway on a half-broken CLI gives you a mute Telegram bot. It looks like «Telegram», but it is almost always the model, the setup, or the gateway started before local chat worked.",
      whatYouWillLearn: [
        "Confirm day one is still green before touching the gateway",
        "Configure Telegram with hermes gateway setup",
        "Start the gateway and verify a remote message that uses tools",
        "Tighten permissions with skills and tools once remote works",
        "Check local chat still works and diagnose if it does not",
      ],
      prerequisites: [
        "Completed hermes-agent-primer-flujo (local tool-using chat and doctor green)",
        "A Telegram account and 10 minutes to create a bot with @BotFather",
        "Your Telegram user ID (the wizard asks for the allowlist)",
        "22 minutes without mixing this with a cloud teammate",
      ],
      steps: [
        {
          title: "Confirm day one still holds",
          content:
            "Before the gateway: `hermes doctor`. If something fails, fix with `hermes model` or `hermes setup` — do not continue. Then a quick chat: `hermes chat -q \"Summarize this directory in 3 bullets\"` or open `hermes --tui` and ask the same. Success = real content and, if needed, a tool call.",
          whatYouShouldSee:
            "doctor green or with a concrete failure you can read. A directory summary, not an empty greeting.",
          warning:
            "If local chat fails here, Telegram only amplifies the problem. Do not install the gateway yet.",
          imageDescription:
            "Terminal with hermes doctor green and a local chat summarizing the directory in bullets.",
        },
        {
          title: "Prepare the Telegram bot",
          content:
            "In Telegram, open @BotFather → `/newbot` → copy the token. For your user ID: message @userinfobot or read the wizard output. Store token and ID in a password manager; `hermes gateway setup` will ask for them. Slack uses the same command with a different credential block — if your team lives in Slack, pick Slack in the wizard instead of Telegram.",
          whatYouShouldSee:
            "A bot token (`123456789:ABC…`) and your numeric user ID ready to paste.",
          tip:
            "A bot without an allowlist is an open door. The wizard asks for allowed users; do not leave it empty.",
          imageDescription:
            "BotFather chat with the new bot token and a notes app with the user ID copied.",
        },
        {
          title: "Configure the gateway with the wizard",
          content:
            "In the terminal: `hermes gateway setup`. Choose Telegram when prompted. Paste the token and your user ID in the allowlist. The wizard writes to `~/.hermes/.env` and `config.yaml`. To review before starting: `hermes config show` after setup.",
          whatYouShouldSee:
            "A saved-configuration message. Telegram marked as the active platform in the wizard output.",
          warning:
            "Do not hand-edit ten variables if the wizard already wrote them. A typo in the token gives a «mute bot» with no clear error.",
          imageDescription:
            "hermes gateway setup output with Telegram selected and allowlist confirmed.",
        },
        {
          title: "Start the gateway and check status",
          content:
            "To test: `hermes gateway run` in the foreground (recommended the first time). On macOS/Linux, once you trust it: `hermes gateway install` and `hermes gateway start` for a background service. Check with `hermes gateway status`. If it does not reply: `cat ~/.hermes/logs/gateway.log | tail -50`.",
          whatYouShouldSee:
            "gateway status shows the process is active. In Telegram, the bot appears online within seconds.",
          tip:
            "On WSL or Docker, `hermes gateway run` in the foreground avoids background-service surprises.",
          imageDescription:
            "Terminal with hermes gateway run active and the Telegram bot showing online status.",
        },
        {
          title: "Send a remote message that uses tools",
          content:
            "From Telegram, write something checkable: «List the files in this directory and tell me which looks like the entrypoint.» Not «hello». Success = the agent replies with real file names — proof the remote tool loop works. If the reply is empty or generic: `hermes doctor --check gateway`, check the model (≥64K), and read the logs.",
          whatYouShouldSee:
            "A Telegram reply naming files from the agent's working directory, not an echo of your greeting.",
          warning:
            "A bot that only says «Hi!» did not pass the test. It must show it runs tools.",
          imageDescription:
            "Telegram thread with the file question and a reply naming concrete files.",
        },
        {
          title: "Tighten skills and tools (optional but useful)",
          content:
            "Once remote works, trim permissions. `hermes skills browse` to see skills; install only what you need (`hermes skills install …`). `hermes tools` to disable toolsets you do not use on Telegram. To keep raw shell off your Mac: `hermes config set terminal.backend docker` (requires Docker). Cron is for later: `hermes cron list` only if you already have a repeatable job.",
          whatYouShouldSee:
            "A skills or tools list with unneeded items disabled. Remote chat still answers after the trim.",
          proTip:
            "Fewer active tools = fewer tokens per turn and fewer surprises on your phone.",
          imageDescription:
            "hermes tools or hermes skills browse output with one toolset disabled for Telegram.",
        },
        {
          title: "Verify local chat still works",
          content:
            "With the gateway running, open another terminal and run `hermes` or `hermes --continue`. Ask another local task: «What sessions do I have open?» or a short summary. Gateway and CLI share config but are separate processes; both should answer.",
          whatYouShouldSee:
            "Local chat responds normally while the Telegram bot stays online in parallel.",
          tip:
            "If only one works, do not assume «done». Note which one fails before you diagnose.",
          imageDescription:
            "Two terminal windows: gateway active and local hermes chat answering at the same time.",
        },
        {
          title: "If something breaks: stop, diagnose, roll back",
          content:
            "Rescue order: `hermes gateway stop` (or Ctrl+C if it was on `run`) → `hermes doctor` → test local chat again. If local works but Telegram does not: run `hermes gateway setup` again and recheck token and allowlist. Logs: `hermes logs` or `~/.hermes/logs/gateway.log`. To undo the gateway without touching the model: comment the Telegram section in config or rerun the wizard. Do not mix this with Grok Bot — that teammate lives in Cursor's cloud VM, not your shell.",
          whatYouShouldSee:
            "After `gateway stop`, local chat answers. doctor points at the gateway's concrete failure if config is wrong.",
          warning:
            "Do not reinstall all of Hermes over a bad token paste. Stop the gateway, fix config, restart.",
          imageDescription:
            "Terminal with hermes gateway stop, doctor flagging a token issue, and local chat answering again.",
        },
      ],
      realUseCases: [
        {
          title: "Ask about the repo from your phone",
          body: "Gateway to Telegram and a message that lists files or summarizes a module without opening the laptop.",
        },
        {
          title: "A repeatable job with tight permissions",
          body: "Only the tools you need, terminal in Docker if shell is required, same agent locally and on Telegram.",
        },
        {
          title: "The same agent as the terminal, somewhere else",
          body: "When the work is no longer a Cursor diff but an agent on your machine that answers wherever you are.",
        },
      ],
      commonMistakes: [
        {
          title: "Gateway before a stable local chat",
          body: "If day one did not pass, go back to hermes-agent-primer-flujo. Telegram does not fix a broken CLI.",
        },
        {
          title: "Testing with «hello» and calling it done",
          body: "A greeting does not prove tools. Ask for something only answerable by reading disk.",
        },
        {
          title: "Empty allowlist or bad token paste",
          body: "The bot looks online and replies to nobody. Recheck user ID and token in gateway setup.",
        },
        {
          title: "Confusing Hermes with Grok Bot",
          body: "Hermes is local CLI + optional gateway. Grok Bot is a teammate with a cloud VM — a different product.",
        },
      ],
      conclusion:
        "Hermes day two is not more install: it is taking a CLI that already talked, wiring Telegram, proving remote uses tools, trimming permissions, and knowing how to stop the gateway without losing local chat. If something fails, doctor and logs before reinstalling.",
      nextSteps: [
        "Run the same remote job tomorrow to confirm the service holds up.",
        "If the work becomes a repo diff again, open Cursor.",
        "For a teammate with a cloud browser, see grok-bot-primer-teammate — that is not Hermes.",
      ],
      takeaway:
        "Doctor → gateway setup → remote message with tools → local chat intact. For the gateway, Telegram first; Slack uses the same wizard.",
    },
  },
};
