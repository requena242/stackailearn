import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "zapier-ai-primera-automatizacion";

export const zapierAiPrimeraAutomatizacion: Tutorial = {
  id: slug,
  slug,
  category: "productivity",
  level: "beginner",
  estimatedTime: 25,
  publishedAt: "2026-11-13",
  lastUpdated: "2026-11-13",
  toolsUsed: ["zapier", "chatgpt"],
  relatedTutorials: ["chatgpt-primeros-pasos"],
  tags: ["zapier", "chatgpt", "automatizacion", "copilot", "zaps"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Editor de Zapier con un disparador de Google Sheets, Analyze Text de ChatGPT (OpenAI) y Publish",
      caption: "El entregable es un Zap publicado que resume una fila real, no el borrador de Copilot.",
      hint: "Hero 1600×900: zapier.com con el editor abierto, trigger de Google Sheets, acción ChatGPT (OpenAI) Analyze Text y Publish arriba a la derecha.",
    },
    en: {
      alt: "Zapier editor with a Google Sheets trigger, ChatGPT (OpenAI) Analyze Text and Publish",
      caption: "The deliverable is a published Zap that summarizes a real row, not Copilot’s draft.",
      hint: "Hero 1600×900: zapier.com with the editor open, a Google Sheets trigger, a ChatGPT (OpenAI) Analyze Text action and Publish at the top right.",
    },
  }),
  copy: {
    es: {
      title: "Zapier: primera automatización con ChatGPT (2026)",
      metaTitle: "Zapier: primera automatización con ChatGPT (2026)",
      metaDescription:
        "Un Zap de una fila de Google Sheets, Analyze Text de ChatGPT (OpenAI) y un correo. Copilot propone; tú pruebas con un registro real y publicas.",
      excerpt:
        "Conecta ChatGPT (OpenAI) con una API key, resume una columna real con Analyze Text y publica solo después de leer Data out.",
      intro:
        "ChatGPT dentro de Zapier es la app ChatGPT (OpenAI): una acción del Zap, conectada con una API key, que resume o analiza el texto que llega de otra app. En https://zapier.com este flujo de 25 minutos deja un Zap de tres pasos publicado: una fila de Google Sheets, Analyze Text y un correo de Gmail con ese resultado. Copilot escribe el borrador; tú confirmas el disparador, el campo mapeado y una prueba con una fila real. La conexión está en https://help.zapier.com/hc/en-us/articles/14860148802829-How-to-get-started-with-ChatGPT-OpenAI-on-Zapier y Copilot en https://help.zapier.com/hc/en-us/articles/15703650952077-Use-the-power-of-AI-to-generate-Zap-workflows. Si el mismo disparo se ramifica, hay que transformar JSON o el resultado va a dos sitios según un campo, la pieza que toca es la comparativa zapier-ai-vs-make (/compare/zapier-ai-vs-make).",
      problem:
        "Un prompt del estilo «automatiza mi trabajo con ChatGPT» le deja a Copilot elegir app, evento y campos. La ayuda dice que Copilot rellena lo que puede y anota en la barra lateral lo que no puede hacer por ti. Publicar ese borrador envía texto de la hoja a la API de OpenAI y, si el destino es un correo, lo manda. El trabajo es una frase, una fila real y un Data out leído antes de Publish.",
      whatYouWillLearn: [
        "Dejar el Zap escrito en una frase: hoja, columna y un solo destino",
        "Conectar ChatGPT (OpenAI) con una API key de OpenAI",
        "Pedir el borrador a Copilot en Ask as you build y confirmarlo",
        "Probar el disparador con una fila real y mapear Analyze Text",
        "Publicar y comprobar la siguiente fila en Zap runs",
      ],
      prerequisites: [
        "Cuenta en zapier.com. La ayuda de Copilot (29 de mayo de 2026) lo lista en los planes Free, Professional, Team y Enterprise, en beta abierta",
        "Cuenta de OpenAI con facturación prepago y una API key. La ayuda de Zapier (1 de octubre de 2026) dice que no hace falta un plan de pago de ChatGPT, y que los modelos GPT-4, incluido GPT-4o, piden un pago de 5 USD o más en esa cuenta de OpenAI",
        "Una hoja de Google con una fila que ya tenga texto, y Gmail si el destino del ejemplo es un correo a ti mismo",
        "25 minutos. Si la frase del flujo ya tiene ramas, abre antes zapier-ai-vs-make (/compare/zapier-ai-vs-make)",
      ],
      steps: [
        {
          title: "Escribe el encargo en una frase",
          content:
            "En un doc, una sola frase: «Cuando haya una fila en esta hoja de Google, resume la columna de texto con ChatGPT (OpenAI) Analyze Text y envía ese texto a mi correo.» Anota el nombre de la hoja, el de la columna y el destinatario (tu correo, para la prueba). La ayuda de disparadores separa un evento New, que corre al crear, de uno New or Updated, que también corre al editar. El ejemplo oficial de Google Sheets es New or Updated Spreadsheet Row: https://help.zapier.com/hc/en-us/articles/8496288188429-Set-up-your-Zap-trigger. Si una edición no debe volver a llamar al modelo, elige el evento cuya descripción hable solo de filas nuevas.",
          whatYouShouldSee:
            "Una frase con tres nombres propios: la hoja, la columna de texto y tu correo como destino.",
          tip: "Si la frase ya dice «si el campo vale X haz A y si no haz B», el mapa es la comparativa zapier-ai-vs-make (/compare/zapier-ai-vs-make). Este tutorial es la línea recta.",
          imageDescription:
            "Nota con la frase del Zap: nombre de la hoja, columna de texto y correo de destino.",
        },
        {
          title: "Conecta ChatGPT (OpenAI) con una API key",
          content:
            "La app no inicia sesión en el chat. En la cuenta de OpenAI: ajustes de la cuenta, View API keys, + Create new secret key, y copia la clave. En Zapier abre Apps, + Add connection, busca ChatGPT (OpenAI), Add connection, pega la clave en API Key y pulsa Yes, Continue to ChatGPT (OpenAI). Organization ID solo si perteneces a varias organizaciones. La misma ayuda dice que la app no tiene disparadores: ChatGPT (OpenAI) no puede ser el primer paso. Página de la conexión: https://help.zapier.com/hc/en-us/articles/14860148802829-How-to-get-started-with-ChatGPT-OpenAI-on-Zapier.",
          whatYouShouldSee:
            "En Apps, ChatGPT (OpenAI) figura como conexión añadida. La clave no queda a la vista.",
          warning:
            "La clave es un secreto. No la pegues en el prompt de Copilot ni en la hoja.",
          imageDescription:
            "Página Apps de Zapier con la conexión ChatGPT (OpenAI), sin la API key en pantalla.",
        },
        {
          title: "Pide el borrador a Copilot y confírmalo",
          content:
            "En la barra izquierda, + Create y luego Zap workflows. Arriba del editor, en la caja de Zapier Copilot, pega la frase del paso 1 y nombra la acción: ChatGPT (OpenAI), Analyze Text. Abre el menú de esa caja y elige Ask as you build. Auto-build es el valor por defecto y monta solo lo que puede; Ask as you build espera tu confirmación en cada paso, app y campo. Start Building abre la barra lateral izquierda. Acepta un paso solo cuando coincida con la frase. La ayuda (29 de mayo de 2026) describe Copilot como beta abierta en Free, Professional, Team y Enterprise, y dice que puede cambiar: https://help.zapier.com/hc/en-us/articles/15703650952077-Use-the-power-of-AI-to-generate-Zap-workflows.",
          whatYouShouldSee:
            "Tres pasos en el editor: disparador de Google Sheets, Analyze Text de ChatGPT (OpenAI) y una acción de Gmail. La barra lateral lista lo que Copilot no ha podido completar.",
          tip: "La ayuda recomienda escribir en el prompt las apps, el disparador y la acción si ya los conoces.",
          warning:
            "Si el borrador trae Summarize Text (Legacy), Conversation with Assistant u otra acción de la Assistants API, no la aceptes. La ayuda fija el corte de esas acciones el 26 de agosto de 2026.",
          imageDescription:
            "Editor con el esquema de tres pasos y la barra de Copilot en Ask as you build.",
        },
        {
          title: "Prueba el disparador con una fila real",
          content:
            "Abre el paso Trigger. La app es Google Sheets. En Trigger event lee la descripción y quédate con el evento de tu frase; el ejemplo de la ayuda es New or Updated Spreadsheet Row. En Setup conecta la cuenta de Google. En Configure rellena los campos con asterisco: en ese ejemplo son Spreadsheet y Worksheet. Pestaña Test, Test trigger. Elige un registro donde se vea el texto de tu columna. Continue with selected record. Si tu fila no sale, créala en la hoja y pulsa Find new records. La ayuda avisa de que algunas apps devuelven solo datos de ejemplo, y de que el test confirma la conexión, no el comportamiento en vivo.",
          whatYouShouldSee:
            "Un test record con el texto real de la columna, y el paso cerrado con Continue with selected record.",
          warning:
            "Un registro de ejemplo sin tu columna no se mapea. Para y carga otra fila.",
          imageDescription:
            "Pestaña Test del disparador de Google Sheets con una fila real y el texto de la columna visible.",
        },
        {
          title: "Configura Analyze Text y mapea la columna",
          content:
            "En el paso de ChatGPT (OpenAI) la acción es Analyze Text, la recomendada para resumir, clasificar y analizar texto, con Responses API. La ficha pública marca tres campos obligatorios: el texto a analizar, el modelo y el tipo de análisis (text_to_analyze, model, analysis_type en https://zapier.com/apps/chatgpt/integrations). Mapea Text to Be Analyzed a la columna del disparador. Elige un Model que tu cuenta de OpenAI pueda llamar; GPT-4, incluido GPT-4o, es el caso del pago de 5 USD o más citado en la ayuda. En Analysis Type elige el tipo que resume. Esta acción no documenta un campo de prompt: el encargo va en el tipo de análisis, no en un campo suelto. Pestaña Test y Test step. Probar una acción es en vivo y consume uso de la API de OpenAI, con los límites de tu cuenta.",
          whatYouShouldSee:
            "Analyze Text con la columna mapeada, un modelo y un Analysis Type de resumen. Tras Test step, Data out muestra el texto que el modelo devolvió para esa fila.",
          tip: "Si necesitas una instrucción tuya («resume solo lo que está en la celda»), la acción Conversation pide User Message y admite Instructions. Memory Key es opcional y sirve para guardar contexto entre ejecuciones: en este Zap, una fila y no una conversación, déjalo vacío. Tabla de acciones: https://help.zapier.com/hc/en-us/articles/34534135938317-Choosing-the-right-ChatGPT-OpenAI-action-to-send-messages.",
          warning:
            "Send Prompt usa la Completions API heredada, según la ficha de la app. No mapees contraseñas ni datos que no quieras enviar a OpenAI. La ayuda resume la política de la API: esos envíos no entrenan modelos salvo que optes por compartirlos.",
          imageDescription:
            "Acción Analyze Text con la columna mapeada, Model, Analysis Type y el Data out de la prueba.",
        },
        {
          title: "Prueba el destino y lee Data out",
          content:
            "Una sola acción después de Analyze Text. Uno de los ejemplos de la ayuda de Copilot es justo este orden: una fila de Google Sheets y un correo de Gmail. En Configure, mapea el texto devuelto por Analyze Text al campo del mensaje y pon tu correo como destinatario. Pestaña Test, Test step. La ayuda del paso de acción dice que la prueba ejecuta la acción de verdad, que Data in es lo que Zapier envía y Data out lo que la app devuelve: https://help.zapier.com/hc/en-us/articles/8496257774221-Set-up-your-Zap-action. Abre el correo y ponlo al lado de la celda. Si el texto afirma algo que la celda no dice, cambia el Analysis Type o pasa a Conversation con un User Message más cerrado, y vuelve a probar.",
          whatYouShouldSee:
            "Un correo en tu bandeja con el mismo texto que Data out, contrastable con la celda de la fila de prueba.",
          imageDescription:
            "Data out de la acción de Gmail junto al correo recibido, ambos con el resumen de la misma fila.",
        },
        {
          title: "Publica y mira la siguiente fila",
          content:
            "Publish, arriba a la derecha, enciende el Zap. La ayuda de las pruebas dice que Publish sigue desactivado hasta que el disparador tiene una prueba correcta (también los filtros y los paths, si el Zap los tuviera). El Zap solo procesa datos creados después de publicarlo: la fila del test no es una ejecución en vivo. Añade otra fila en la hoja. En la barra izquierda abre Zap runs y lee el estado de cada paso. El historial de la cuenta está en Zap history: https://help.zapier.com/hc/en-us/articles/8496291148685-View-and-manage-your-Zap-history. Cuando el mismo disparo tenga que ramificarse, el siguiente sitio es la comparativa zapier-ai-vs-make (/compare/zapier-ai-vs-make).",
          whatYouShouldSee:
            "La etiqueta Published y, en Zap runs, una ejecución de la fila nueva con los tres pasos corridos y el correo en la bandeja.",
          tip: "En una cuenta Enterprise, si un admin activó restricciones de publicación, la ayuda de Copilot dice que hay que pedir aprobación antes de que el Zap quede publicado.",
          warning:
            "La ayuda del paso de acción dice que Zapier puede apagar el Zap si hay errores repetidos en cada ejecución, y que en ese caso envía un correo.",
          imageDescription:
            "Editor con la etiqueta Published y Zap runs abierto en la ejecución de la fila nueva.",
        },
      ],
      realUseCases: [
        {
          title: "La hoja que ya rellenas",
          body: "La columna de notas pasa por Analyze Text y el resumen llega a tu correo. La hoja sigue siendo el origen.",
        },
        {
          title: "El mismo paso, otro disparador",
          body: "Si el texto nace en un formulario, cambias la app del trigger y vuelves a mapear el campo. La acción sigue siendo Analyze Text. El nombre del evento se lee en el desplegable, con su descripción.",
        },
        {
          title: "Cuando ya no es una línea",
          body: "Dos destinos según un campo, o un JSON que hay que partir, está en la comparativa zapier-ai-vs-make (/compare/zapier-ai-vs-make). El primer Zap no se alarga con Paths.",
        },
      ],
      commonMistakes: [
        {
          title: "Entrar con la sesión del chat",
          body: "La conexión documentada es la API key de OpenAI, con facturación prepago. Un plan de ChatGPT no sustituye ese paso.",
        },
        {
          title: "Publicar el borrador de Copilot",
          body: "Sin Test trigger sobre una fila real y sin leer Data out, el campo mapeado puede llegar vacío a OpenAI.",
        },
        {
          title: "Quedarte en una acción legacy",
          body: "Summarize Text (Legacy), Send Prompt (Completions API heredada) y las acciones de la Assistants API. La ayuda pone el corte de esas últimas el 26 de agosto de 2026. La acción de este flujo es Analyze Text.",
        },
      ],
      conclusion:
        "El primer Zap con ChatGPT es una fila, Analyze Text y un destino cuyo Data out has leído. Copilot propone el esquema; la prueba con un registro real decide si se publica. Cuando la lógica deje de ser una línea, la comparativa zapier-ai-vs-make (/compare/zapier-ai-vs-make) es el siguiente paso.",
      nextSteps: [
        "Cuando entre la siguiente fila de verdad, abre Zap runs y compara el correo con la celda.",
        "Si el resumen se sale del texto, pasa a Conversation, escribe el límite en User Message y deja Memory Key vacío.",
        "Si el flujo se ramifica, sigue en zapier-ai-vs-make (/compare/zapier-ai-vs-make) antes de añadir Paths.",
      ],
      takeaway:
        "Una frase, Analyze Text sobre una columna real, Data out leído, y Publish. El borrador de Copilot se queda en borrador hasta esa prueba.",
    },
    en: {
      title: "Zapier: your first automation with ChatGPT (2026)",
      metaTitle: "Zapier: first ChatGPT automation (2026)",
      metaDescription:
        "A Zap with one Google Sheets row, ChatGPT (OpenAI) Analyze Text and an email. Copilot drafts it; you test a real record, then publish.",
      excerpt:
        "Connect ChatGPT (OpenAI) with an API key, summarize a real column with Analyze Text and publish only after you read Data out.",
      intro:
        "ChatGPT inside Zapier is the ChatGPT (OpenAI) app: a Zap action, connected with an API key, that summarizes or analyzes text arriving from another app. On https://zapier.com this 25-minute flow leaves a three-step Zap published: a Google Sheets row, Analyze Text and a Gmail message with that result. Copilot writes the draft; you confirm the trigger, the mapped field and a test with a real row. The connection guide is https://help.zapier.com/hc/en-us/articles/14860148802829-How-to-get-started-with-ChatGPT-OpenAI-on-Zapier and Copilot is https://help.zapier.com/hc/en-us/articles/15703650952077-Use-the-power-of-AI-to-generate-Zap-workflows. If the same trigger must branch, transform JSON or land in two places depending on a field, the piece to read is the zapier-ai-vs-make comparison (/compare/zapier-ai-vs-make).",
      problem:
        "A prompt like «automate my work with ChatGPT» lets Copilot pick the app, the event and the fields. The help says Copilot fills in what it can and notes in the sidebar what it cannot do for you. Publishing that draft sends sheet text to the OpenAI API and, if the destination is email, sends the email. The work is one sentence, one real row and a Data out you have read before Publish.",
      whatYouWillLearn: [
        "Write the Zap as one sentence: sheet, column and a single destination",
        "Connect ChatGPT (OpenAI) with an OpenAI API key",
        "Ask Copilot for the draft in Ask as you build and confirm it",
        "Test the trigger on a real row and map Analyze Text",
        "Publish and check the next row in Zap runs",
      ],
      prerequisites: [
        "A zapier.com account. The Copilot help (29 May 2026) lists it on Free, Professional, Team and Enterprise, in open beta",
        "An OpenAI account with prepaid billing and an API key. Zapier’s help (1 October 2026) says a paid ChatGPT plan is not required, and that GPT-4 models, including GPT-4o, require a payment of 5 USD or more on that OpenAI account",
        "A Google Sheet with a row that already has text, and Gmail if the example destination is an email to yourself",
        "25 minutes. If the flow sentence already has branches, open zapier-ai-vs-make (/compare/zapier-ai-vs-make) first",
      ],
      steps: [
        {
          title: "Write the job in one sentence",
          content:
            "In a doc, one sentence: «When a row lands in this Google Sheet, summarize the text column with ChatGPT (OpenAI) Analyze Text and send that text to my email.» Note the sheet name, the column name and the recipient (your email, for the test). The trigger help separates a New event, which runs on create, from a New or Updated event, which also runs on edit. The official Google Sheets example is New or Updated Spreadsheet Row: https://help.zapier.com/hc/en-us/articles/8496288188429-Set-up-your-Zap-trigger. If an edit should not call the model again, pick the event whose description is new rows only.",
          whatYouShouldSee:
            "One sentence with three proper names: the sheet, the text column and your email as the destination.",
          tip: "If the sentence already says «if the field is X do A, otherwise do B», the map is the zapier-ai-vs-make comparison (/compare/zapier-ai-vs-make). This tutorial is the straight line.",
          imageDescription:
            "A note with the Zap sentence: sheet name, text column and destination email.",
        },
        {
          title: "Connect ChatGPT (OpenAI) with an API key",
          content:
            "The app does not sign in to the chat. In the OpenAI account: account settings, View API keys, + Create new secret key, and copy the key. In Zapier open Apps, + Add connection, search ChatGPT (OpenAI), Add connection, paste the key into API Key and click Yes, Continue to ChatGPT (OpenAI). Organization ID only if you belong to more than one organization. The same help says the app has no triggers: ChatGPT (OpenAI) cannot be the first step. Connection page: https://help.zapier.com/hc/en-us/articles/14860148802829-How-to-get-started-with-ChatGPT-OpenAI-on-Zapier.",
          whatYouShouldSee:
            "On Apps, ChatGPT (OpenAI) shows as an added connection. The key is not on screen.",
          warning: "The key is a secret. Do not paste it into the Copilot prompt or into the sheet.",
          imageDescription:
            "Zapier Apps page with the ChatGPT (OpenAI) connection, and no API key on screen.",
        },
        {
          title: "Ask Copilot for the draft and confirm it",
          content:
            "In the left sidebar, + Create, then Zap workflows. At the top of the editor, in the Zapier Copilot box, paste the sentence from step 1 and name the action: ChatGPT (OpenAI), Analyze Text. Open that box’s menu and choose Ask as you build. Auto-build is the default and sets up what it can on its own; Ask as you build waits for you to confirm each step, app and field. Start Building opens the left sidebar. Accept a step only when it matches the sentence. The help (29 May 2026) describes Copilot as an open beta on Free, Professional, Team and Enterprise, and says it may change: https://help.zapier.com/hc/en-us/articles/15703650952077-Use-the-power-of-AI-to-generate-Zap-workflows.",
          whatYouShouldSee:
            "Three steps in the editor: a Google Sheets trigger, ChatGPT (OpenAI) Analyze Text and a Gmail action. The sidebar lists what Copilot could not finish.",
          tip: "The help recommends naming the apps, the trigger and the action in the prompt when you already know them.",
          warning:
            "If the draft brings Summarize Text (Legacy), Conversation with Assistant or another Assistants API action, do not accept it. The help sets the cutoff for those actions at 26 August 2026.",
          imageDescription:
            "Editor with the three-step outline and the Copilot sidebar on Ask as you build.",
        },
        {
          title: "Test the trigger with a real row",
          content:
            "Open the Trigger step. The app is Google Sheets. In Trigger event read the description and keep the event from your sentence; the help’s example is New or Updated Spreadsheet Row. On Setup connect the Google account. On Configure fill the fields with an asterisk: in that example they are Spreadsheet and Worksheet. Test tab, Test trigger. Pick a record where your column’s text is visible. Continue with selected record. If your row does not appear, create it in the sheet and click Find new records. The help warns that some apps return only sample data, and that a successful test confirms the connection, not live behavior.",
          whatYouShouldSee:
            "A test record with the real column text, and the step closed with Continue with selected record.",
          warning: "A sample record without your column cannot be mapped. Stop and load another row.",
          imageDescription:
            "Google Sheets trigger Test tab with a real row and the column text visible.",
        },
        {
          title: "Configure Analyze Text and map the column",
          content:
            "On the ChatGPT (OpenAI) step the action is Analyze Text, the recommended one for summarizing, classifying and analyzing text, on the Responses API. The public app page marks three required fields: the text to analyze, the model and the analysis type (text_to_analyze, model, analysis_type at https://zapier.com/apps/chatgpt/integrations). Map Text to Be Analyzed to the trigger column. Pick a Model your OpenAI account can call; GPT-4, including GPT-4o, is the case for the 5 USD or more payment cited in the help. In Analysis Type pick the type that summarizes. This action does not document a prompt field: the job lives in the analysis type, not in a spare field. Test tab and Test step. Testing an action is live and uses OpenAI API usage, within your account’s limits.",
          whatYouShouldSee:
            "Analyze Text with the column mapped, a model and a summary Analysis Type. After Test step, Data out shows the text the model returned for that row.",
          tip: "If you need your own instruction («summarize only what is in the cell»), the Conversation action requires User Message and allows Instructions. Memory Key is optional and keeps context across runs: on this Zap, one row and not a conversation, leave it empty. Action table: https://help.zapier.com/hc/en-us/articles/34534135938317-Choosing-the-right-ChatGPT-OpenAI-action-to-send-messages.",
          warning:
            "Send Prompt uses the legacy Completions API, according to the app page. Do not map passwords or data you do not want sent to OpenAI. The help summarizes the API policy: those submissions are not used to train models unless you opt in to sharing.",
          imageDescription:
            "Analyze Text action with the column mapped, Model, Analysis Type and the test Data out.",
        },
        {
          title: "Test the destination and read Data out",
          content:
            "One action after Analyze Text. One of the Copilot help examples is this exact order: a Google Sheets row and a Gmail email. On Configure, map the text returned by Analyze Text into the message field and put your email as the recipient. Test tab, Test step. The action-step help says the test performs the action for real, that Data in is what Zapier sends and Data out is what the app returns: https://help.zapier.com/hc/en-us/articles/8496257774221-Set-up-your-Zap-action. Open the email and put it next to the cell. If the text claims something the cell does not say, change the Analysis Type or switch to Conversation with a tighter User Message, and test again.",
          whatYouShouldSee:
            "An email in your inbox with the same text as Data out, checkable against the test row’s cell.",
          imageDescription:
            "Gmail action Data out next to the received email, both showing the summary of the same row.",
        },
        {
          title: "Publish and watch the next row",
          content:
            "Publish, at the top right, turns the Zap on. The testing help says Publish stays disabled until the trigger has a successful test (and filters and paths too, if the Zap had them). The Zap only processes data created after it is published: the test row is not a live run. Add another row to the sheet. In the left sidebar open Zap runs and read each step’s status. Account history is on Zap history: https://help.zapier.com/hc/en-us/articles/8496291148685-View-and-manage-your-Zap-history. When the same trigger has to branch, the next stop is the zapier-ai-vs-make comparison (/compare/zapier-ai-vs-make).",
          whatYouShouldSee:
            "The Published label and, in Zap runs, a run of the new row with the three steps completed and the email in the inbox.",
          tip: "On an Enterprise account, if an admin enabled publishing restrictions, the Copilot help says you must request approval before the Zap can be published.",
          warning:
            "The action-step help says Zapier can turn the Zap off if errors repeat on every run, and that it sends an email when that happens.",
          imageDescription:
            "Editor with the Published label and Zap runs open on the new row’s run.",
        },
      ],
      realUseCases: [
        {
          title: "The sheet you already fill in",
          body: "The notes column goes through Analyze Text and the summary lands in your email. The sheet stays the source.",
        },
        {
          title: "The same step, another trigger",
          body: "If the text starts in a form, change the trigger app and map the field again. The action stays Analyze Text. Read the event name in the dropdown, with its description.",
        },
        {
          title: "When it is no longer a line",
          body: "Two destinations by field, or JSON you have to split, is in the zapier-ai-vs-make comparison (/compare/zapier-ai-vs-make). The first Zap does not grow Paths.",
        },
      ],
      commonMistakes: [
        {
          title: "Signing in with the chat session",
          body: "The documented connection is an OpenAI API key, with prepaid billing. A ChatGPT plan does not replace that step.",
        },
        {
          title: "Publishing Copilot’s draft",
          body: "Without Test trigger on a real row and without reading Data out, the mapped field can arrive empty at OpenAI.",
        },
        {
          title: "Staying on a legacy action",
          body: "Summarize Text (Legacy), Send Prompt (legacy Completions API) and Assistants API actions. The help sets the cutoff for the last group at 26 August 2026. The action in this flow is Analyze Text.",
        },
      ],
      conclusion:
        "The first Zap with ChatGPT is one row, Analyze Text and a destination whose Data out you have read. Copilot proposes the outline; the test with a real record decides whether you publish. When the logic stops being a straight line, the zapier-ai-vs-make comparison (/compare/zapier-ai-vs-make) is the next step.",
      nextSteps: [
        "When the next real row arrives, open Zap runs and compare the email with the cell.",
        "If the summary leaves the source text, switch to Conversation, write the limit in User Message and leave Memory Key empty.",
        "If the flow branches, continue with zapier-ai-vs-make (/compare/zapier-ai-vs-make) before you add Paths.",
      ],
      takeaway:
        "One sentence, Analyze Text on a real column, Data out read, then Publish. Copilot’s draft stays a draft until that test.",
    },
  },
};
