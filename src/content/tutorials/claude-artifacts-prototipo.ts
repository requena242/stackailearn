import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "claude-artifacts-prototipo";

export const claudeArtifactsPrototipo: Tutorial = {
  id: slug,
  slug,
  category: "code",
  level: "beginner",
  estimatedTime: 22,
  publishedAt: "2026-10-14",
  lastUpdated: "2026-10-14",
  toolsUsed: ["claude"],
  relatedTutorials: [
    "claude-projects-primer-flujo",
    "claude-escritura-larga",
    "cursor-como-ide-con-ia",
  ],
  tags: ["claude", "artifacts", "prototipo", "react", "interactivo"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Claude con un artefacto interactivo en vista previa junto al chat",
      caption: "El entregable es la vista previa que puedes probar y compartir.",
      hint: "Hero 1600×900: chat de Claude a la izquierda y panel de artefacto con una mini-app HTML/React en vista previa.",
    },
    en: {
      alt: "Claude with an interactive artifact in preview beside the chat",
      caption: "The deliverable is the preview you can test and share.",
      hint: "Hero 1600×900: Claude chat on the left and artifact panel with a small HTML/React app in preview.",
    },
  }),
  copy: {
    es: {
      title: "Claude Artifacts: de la idea a un prototipo usable (2026)",
      metaTitle: "Claude Artifacts: prototipo usable en 2026",
      metaDescription:
        "Pide un artefacto concreto, define datos y comportamiento, prueba la vista previa, itera con cambios puntuales y comparte o exporta el código.",
      excerpt:
        "Convierte una idea en una mini-app interactiva dentro de claude.ai: especificación clara, vista previa, iteración y salida lista para enseñar o copiar.",
      intro:
        "Los artefactos de Claude son piezas que abren junto al chat: una página HTML, un snippet con vista previa o una herramienta pequeña que puedes tocar sin desplegar nada. Este flujo dura unos 22 minutos y termina con un prototipo que otra persona puede probar en el navegador o que tú puedes llevar a un repo cuando toque.",
      problem:
        "Mucha gente pide «hazme una app» y se queda con un bloque de código en el chat que nadie ejecuta. Sin artefacto, no hay vista previa; sin especificación, cada iteración reescribe todo y rompe lo que ya funcionaba.",
      whatYouWillLearn: [
        "Redactar un brief de artefacto (tipo, datos de ejemplo, interacciones)",
        "Pedir a Claude un artefacto autocontenido y abrirlo en el panel lateral",
        "Probar el prototipo en la vista previa antes de seguir hablando",
        "Iterar con instrucciones acotadas en lugar de regenerar desde cero",
        "Recuperar versiones o ramas del chat cuando un cambio empeora el resultado",
        "Compartir, exportar o copiar el código con límites reales del producto",
      ],
      prerequisites: [
        "Cuenta en https://claude.ai (Free sirve para crear artefactos en chat; algunas plantillas o conectores piden Pro o superior)",
        "En Ajustes > Capabilities, ejecución de código en la nube y creación de archivos activadas (requerido para artefactos, según la ayuda de Anthropic)",
        "Una idea acotada: calculadora, checklist, mini-dashboard con datos ficticios, no «el próximo Notion»",
        "22 minutos y un navegador moderno para la vista previa",
      ],
      steps: [
        {
          title: "Escribe el brief del prototipo en una sola nota",
          content:
            "Antes de abrir Claude, define en 8–12 líneas: (1) qué es el artefacto («mini-app de estimación de presupuesto para talleres»), (2) stack preferido si importa («HTML + JavaScript en un solo archivo» o «React en el artefacto»), (3) datos de ejemplo concretos (3 líneas de partidas con precio y cantidad), (4) comportamiento («al cambiar cantidad, recalcula subtotal y total con IVA 21 %»), (5) qué NO hace («sin login, sin guardar en servidor»). Ese texto lo pegarás casi tal cual en el primer mensaje.",
          whatYouShouldSee:
            "Una nota con tipo de artefacto, datos ficticios, reglas de cálculo y exclusiones explícitas.",
          tip: "Si no puedes poner números de ejemplo, el prototipo saldrá genérico y costará más iterar.",
          imageDescription:
            "Bloc de notas con brief estructurado: título del prototipo, datos de ejemplo y lista de interacciones.",
        },
        {
          title: "Abre un chat nuevo y pide el artefacto explícitamente",
          content:
            "En claude.ai, inicia un chat limpio. Pega el brief y añade: «Créalo como artefacto autocontenido con vista previa interactiva. Usa solo los datos de ejemplo del brief. Si algo falta, marca [PENDIENTE] en la UI en lugar de inventar APIs.» Claude suele generar un artefacto cuando el contenido es sustancial y reutilizable (código o página de más de unas líneas, según la documentación de Anthropic).",
          whatYouShouldSee:
            "Un panel de artefacto que se abre a un lado del chat con código o canvas y una zona de vista previa.",
          warning:
            "Si solo ves texto en el hilo sin panel lateral, reformula pidiendo «artefacto» y «vista previa ejecutable»; revisa también Capabilities en ajustes.",
          imageDescription:
            "Chat de Claude con mensaje de brief y panel de artefacto abierto a la derecha.",
        },
        {
          title: "Prueba la vista previa como lo haría un usuario",
          content:
            "Interactúa con el prototipo en el panel: cambia cantidades, pulsa botones, comprueba que los totales cuadran con tus datos de ejemplo. Anota en una lista corta OK / FALLO (por ejemplo: «OK: suma líneas», «FALLO: IVA no se actualiza»). No sigas chateando hasta haber clicado todo lo que definiste en el brief.",
          whatYouShouldSee:
            "La vista previa responde a clics y entradas; una lista tuya de 3–5 comprobaciones con marcas OK o FALLO.",
          tip: "Si aparece un error en la vista previa, busca la opción de enviar el error a Claude (p. ej. «Try fixing with Claude» en la ayuda oficial) en lugar de describir el fallo a ojo.",
          imageDescription:
            "Vista previa del artefacto con un campo editado y totales visibles; nota al lado con checklist OK/FALLO.",
        },
        {
          title: "Itera con cambios puntuales, no con «hazlo de nuevo»",
          content:
            "Por cada FALLO, un mensaje que nombra archivo o sección y el cambio exacto: «En el artefacto, al cambiar cantidad en la fila 2, actualiza subtotal y total sin recargar la página. Mantén los mismos datos de ejemplo.» Evita «rehazlo entero». Si usas un artefacto tipo documento, puedes marcar texto y pedir edición local («Edit with Claude» en plantillas de docs, según Anthropic).",
          whatYouShouldSee:
            "El artefacto se actualiza en el panel; la vista previa refleja el cambio pedido sin perder el resto del diseño.",
          warning:
            "Pedir diez cambios en un solo mensaje mezcla prioridades. Uno o dos ajustes por mensaje es más estable.",
          imageDescription:
            "Segundo mensaje acotado en el chat y artefacto actualizado con el mismo layout y un bug corregido.",
        },
        {
          title: "Compara versiones si un cambio rompe lo anterior",
          content:
            "Si tras una iteración algo empeora, usa el historial del artefacto o del chat según lo que muestre tu interfaz: en artefactos recientes Anthropic guarda versiones al actualizar; también puedes editar un mensaje anterior del hilo para explorar otra rama sin borrar el trabajo previo (documentado en la ayuda de artefactos). Vuelve a la versión que pasaba tu checklist antes de seguir añadiendo features.",
          whatYouShouldSee:
            "Selector de versiones o hilo ramificado, y de nuevo la vista previa en el estado «último OK» de tu lista.",
          proTip:
            "Congela el alcance: cuando el checklist esté verde, no pidas «solo una cosa más» sin copiar el código fuera.",
          imageDescription:
            "Menú de historial de versiones del artefacto con dos miniaturas: versión anterior y actual.",
        },
        {
          title: "Copia el código o exporta según el tipo de artefacto",
          content:
            "Cuando el prototipo sirve para enseñar o pasar a ingeniería, saca el entregable: en artefactos de código heredados, los controles del panel permiten ver código, copiar o descargar (según support.anthropic.com). En artefactos hechos desde plantillas (Docs, Design, etc.), usa «Export» al formato que toque (HTML, zip, PDF…). Guarda una copia en tu repo o carpeta de proyecto; el chat no es almacenamiento permanente.",
          whatYouShouldSee:
            "Código copiado al portapapeles o archivo descargado/exportado con la versión que pasó las pruebas.",
          tip: "Pon en un comentario al inicio del archivo la fecha y «datos ficticios» para que nadie lo confunda con producción.",
          imageDescription:
            "Panel del artefacto con controles de código/copiar o diálogo Export, y un archivo guardado en el escritorio.",
        },
        {
          title: "Comparte o publica con las reglas de tu plan",
          content:
            "Para que otra persona pruebe el prototipo, usa Share o Publish según lo que muestre tu artefacto. Anthropic distingue artefactos nuevos (compartir desde el diálogo Share, a menudo con cuenta Claude) y artefactos heredados de chat (Publish en Free/Pro/Max puede dar enlace público; Team/Enterprise suelen restringir a la organización salvo que un admin active external sharing). Elige versión «Latest» o una versión fija si te lo ofrece el diálogo. Documenta en el mensaje que los datos son de ejemplo y qué no está implementado.",
          whatYouShouldSee:
            "Enlace copiado o ajustes de visibilidad confirmados; el receptor abre la vista previa sin que tú reenvíes capturas.",
          warning:
            "Un prototipo compartido no sustituye revisión de seguridad: no metas secretos reales ni datos personales en datos de ejemplo.",
          imageDescription:
            "Diálogo Share/Publish de Claude con enlace copiado y nota al destinatario sobre alcance del prototipo.",
        },
      ],
      realUseCases: [
        {
          title: "Demo de producto antes de contratar desarrollo",
          body: "Calculadora o configurador con datos ficticios. El stakeholder prueba el flujo en el enlace del artefacto.",
        },
        {
          title: "Ejercicio de formación",
          body: "Juego o quiz en HTML que el alumno puede tocar; iteras preguntas sin montar hosting.",
        },
        {
          title: "Puente hacia un repo real",
          body: "Copias el código del artefacto y lo pasas a Cursor cuando el prototipo ya validó la UX.",
        },
      ],
      commonMistakes: [
        {
          title: "Brief sin datos de ejemplo",
          body: "Claude rellena con placeholders inconsistentes y cada iteración cambia los números.",
        },
        {
          title: "Confundir prototipo con producción",
          body: "Sin backend, auth ni pruebas de seguridad. El artefacto enseña comportamiento, no escala.",
        },
        {
          title: "Capabilities desactivadas",
          body: "Sin ejecución de código en la nube y creación de archivos, muchos artefactos no se generan.",
        },
        {
          title: "Asumir almacenamiento persistente gratis",
          body: "Guardar datos entre sesiones en el artefacto requiere planes de pago y tiene límites (p. ej. 20 MB texto, según Anthropic).",
        },
      ],
      conclusion:
        "Claude Artifacts acorta el camino entre idea y algo que se puede clicar. Brief con datos reales de ejemplo, vista previa probada, iteraciones pequeñas y salida copiada o compartida con los límites del plan. Cuando el código deba vivir en git con CI, el siguiente paso es un IDE con IA, no más parches en el chat.",
      nextSteps: [
        "Si el mismo prototipo evoluciona semanas, mete el brief y exports en un Claude Project.",
        "Para texto largo alrededor del prototipo (spec, ayuda), usa el flujo de escritura por secciones.",
        "Cuando el artefacto crezca, abre el código en Cursor y trátalo como repo.",
      ],
      takeaway:
        "Brief con datos y reglas → artefacto en vista previa → checklist OK/FALLO → cambios puntuales → copiar o compartir sabiendo los límites.",
    },
    en: {
      title: "Claude Artifacts: from idea to a usable prototype (2026)",
      metaTitle: "Claude Artifacts: usable prototype in 2026",
      metaDescription:
        "Request a concrete artifact, define data and behavior, test the preview, iterate with small edits, then share or export the code.",
      excerpt:
        "Turn an idea into a small interactive app inside claude.ai: clear spec, preview, iteration, and output ready to demo or copy.",
      intro:
        "Claude artifacts are pieces that open beside the chat: an HTML page, a snippet with live preview, or a small tool you can click without deploying anything. This flow takes about 22 minutes and ends with a prototype someone else can try in the browser—or code you can move into a repo when ready.",
      problem:
        "People ask for «build me an app» and stop at a code block in the thread that nobody runs. Without an artifact there is no preview; without a spec, every iteration rewrites everything and breaks what already worked.",
      whatYouWillLearn: [
        "Write an artifact brief (type, sample data, interactions)",
        "Ask Claude for a self-contained artifact and open it in the side panel",
        "Exercise the prototype in preview before chatting further",
        "Iterate with narrow instructions instead of regenerating from scratch",
        "Recover versions or chat branches when a change makes things worse",
        "Share, export, or copy code with real product limits in mind",
      ],
      prerequisites: [
        "An account on https://claude.ai (Free can create chat artifacts; some templates or connectors need Pro or above)",
        "Under Settings > Capabilities, cloud code execution and file creation enabled (required for artifacts per Anthropic help)",
        "A scoped idea: calculator, checklist, mini dashboard with fake data—not «the next Notion»",
        "22 minutes and a modern browser for preview",
      ],
      steps: [
        {
          title: "Write the prototype brief in one note",
          content:
            "Before opening Claude, define in 8–12 lines: (1) what the artifact is («budget estimator mini-app for repair shops»), (2) preferred stack if it matters («single-file HTML + JavaScript» or «React in the artifact»), (3) concrete sample data (3 line items with price and quantity), (4) behavior («when quantity changes, recalculate subtotal and total with 21% VAT»), (5) what it does NOT do («no login, no server save»). You will paste this almost verbatim in the first message.",
          whatYouShouldSee:
            "A note with artifact type, fake data, calculation rules, and explicit exclusions.",
          tip: "If you cannot provide sample numbers, the prototype will stay generic and cost more iterations.",
          imageDescription:
            "Notes app with structured brief: prototype title, sample data, and interaction list.",
        },
        {
          title: "Open a fresh chat and ask for the artifact explicitly",
          content:
            "On claude.ai, start a clean chat. Paste the brief and add: «Build this as a self-contained artifact with interactive preview. Use only the sample data in the brief. If something is missing, mark [PENDING] in the UI instead of inventing APIs.» Claude typically creates an artifact when content is substantial and reusable (code or page beyond a few lines, per Anthropic documentation).",
          whatYouShouldSee:
            "An artifact panel opening beside the chat with code or canvas and a preview area.",
          warning:
            "If you only see text in the thread with no side panel, rephrase asking for an «artifact» and «runnable preview»; also check Capabilities in settings.",
          imageDescription:
            "Claude chat with brief message and artifact panel open on the right.",
        },
        {
          title: "Test the preview the way a user would",
          content:
            "Interact with the prototype in the panel: change quantities, click buttons, verify totals match your sample data. Write a short OK / FAIL list (e.g. «OK: line sum», «FAIL: VAT does not update»). Do not keep chatting until you have clicked everything in the brief.",
          whatYouShouldSee:
            "Preview responds to clicks and inputs; your list of 3–5 checks marked OK or FAIL.",
          tip: "If preview shows an error, use the option to send the error to Claude (e.g. «Try fixing with Claude» in official help) instead of guessing the failure.",
          imageDescription:
            "Artifact preview with an edited field and visible totals; side note with OK/FAIL checklist.",
        },
        {
          title: "Iterate with targeted edits, not «do it again»",
          content:
            "For each FAIL, one message naming file or section and the exact change: «In the artifact, when quantity changes on row 2, update subtotal and total without reloading the page. Keep the same sample data.» Avoid «redo everything». On template-based doc artifacts you can select text and request a local edit («Edit with Claude» on docs templates, per Anthropic).",
          whatYouShouldSee:
            "The artifact updates in the panel; preview reflects the requested change without losing the rest of the layout.",
          warning:
            "Asking for ten changes in one message mixes priorities. One or two adjustments per message is more stable.",
          imageDescription:
            "Second narrow message in chat and updated artifact with same layout and one bug fixed.",
        },
        {
          title: "Compare versions if a change breaks earlier work",
          content:
            "If something gets worse after an iteration, use artifact or chat history depending on your UI: recent artifacts save versions on update per Anthropic; you can also edit an earlier chat message to branch without deleting prior work (documented in artifact help). Return to the version that passed your checklist before adding features.",
          whatYouShouldSee:
            "Version picker or branched thread, and preview back at your last «all OK» state.",
          proTip:
            "Freeze scope: when the checklist is green, do not ask for «just one more thing» without copying code out.",
          imageDescription:
            "Artifact version history menu with two thumbnails: previous and current version.",
        },
        {
          title: "Copy code or export depending on artifact type",
          content:
            "When the prototype is ready to show or hand to engineering, extract the deliverable: on legacy code artifacts, panel controls let you view code, copy, or download (per support.anthropic.com). On template-based artifacts (Docs, Design, etc.), use «Export» to the right format (HTML, zip, PDF…). Save a copy in your repo or project folder—the chat is not permanent storage.",
          whatYouShouldSee:
            "Code on the clipboard or a downloaded/exported file matching the version that passed tests.",
          tip: "Add a top-of-file comment with date and «sample data only» so nobody treats it as production.",
          imageDescription:
            "Artifact panel with code/copy controls or Export dialog, and a file saved on disk.",
        },
        {
          title: "Share or publish under your plan’s rules",
          content:
            "For someone else to try the prototype, use Share or Publish as your artifact shows. Anthropic distinguishes newer artifacts (Share dialog, often requiring a Claude account) from legacy chat artifacts (Publish on Free/Pro/Max may yield a public link; Team/Enterprise often stay org-only unless an admin enables external sharing). Pick «Latest» or a pinned version if the dialog offers it. Tell recipients data is sample-only and what is not implemented.",
          whatYouShouldSee:
            "Link copied or visibility confirmed; the recipient opens preview without you sending screenshots.",
          warning:
            "A shared prototype is not a security review: do not put real secrets or personal data in sample fields.",
          imageDescription:
            "Claude Share/Publish dialog with copied link and recipient note on prototype scope.",
        },
      ],
      realUseCases: [
        {
          title: "Product demo before hiring development",
          body: "Calculator or configurator with fake data. Stakeholders exercise the flow via the artifact link.",
        },
        {
          title: "Training exercise",
          body: "HTML quiz or game learners can click; you iterate questions without hosting.",
        },
        {
          title: "Bridge to a real repo",
          body: "Copy artifact code into Cursor once the prototype validated the UX.",
        },
      ],
      commonMistakes: [
        {
          title: "Brief without sample data",
          body: "Claude fills inconsistent placeholders and numbers shift every iteration.",
        },
        {
          title: "Treating prototype as production",
          body: "No backend, auth, or security testing. Artifacts demo behavior, not scale.",
        },
        {
          title: "Capabilities turned off",
          body: "Without cloud code execution and file creation, many artifacts will not generate.",
        },
        {
          title: "Assuming free persistent storage",
          body: "Saving data across sessions in artifacts needs paid plans and has limits (e.g. 20 MB text per Anthropic).",
        },
      ],
      conclusion:
        "Claude Artifacts shorten the path from idea to something clickable. Brief with real sample data, preview tested, small iterations, and output copied or shared within plan limits. When code must live in git with CI, the next step is an AI IDE—not more chat patches.",
      nextSteps: [
        "If the same prototype evolves over weeks, put brief and exports in a Claude Project.",
        "For long-form copy around the prototype (spec, help), use section-by-section writing.",
        "When the artifact grows, open the code in Cursor and treat it as a repo.",
      ],
      takeaway:
        "Brief with data and rules → artifact in preview → OK/FAIL checklist → small edits → copy or share knowing the limits.",
    },
  },
};
