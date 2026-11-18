import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "make-primera-automatizacion";

export const makePrimeraAutomatizacion: Tutorial = {
  id: slug,
  slug,
  category: "productivity",
  level: "beginner",
  estimatedTime: 30,
  publishedAt: "2026-11-18",
  lastUpdated: "2026-11-18",
  toolsUsed: ["make"],
  relatedTutorials: ["zapier-ai-primera-automatizacion"],
  tags: ["make", "escenarios", "google-sheets", "slack", "automatizacion"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Scenario Builder de Make con Google Sheets Watch New Rows, Slack Send a Message y el horario Every 15 minutes",
      caption:
        "El entregable es el escenario activo que avisa en Slack de una fila nueva, no la burbuja del Run once.",
      hint: "Hero 1600×900: make.com en el Scenario Builder, módulo Google Sheets Watch New Rows unido a Slack Send a Message, burbuja de salida y Every 15 minutes en la barra.",
    },
    en: {
      alt: "Make Scenario Builder with Google Sheets Watch New Rows, Slack Send a Message and the Every 15 minutes schedule",
      caption:
        "The deliverable is the active scenario that posts a new row to Slack, not the Run once bubble.",
      hint: "Hero 1600×900: make.com in the Scenario Builder, a Google Sheets Watch New Rows module linked to Slack Send a Message, an output bubble and Every 15 minutes on the toolbar.",
    },
  }),
  copy: {
    es: {
      title: "Make: primera automatización",
      metaTitle: "Make: primera automatización",
      metaDescription:
        "El escenario oficial de Make: la hoja Prospects, Watch New Rows y un mensaje en el canal sales-team. Prueba con Run once y activa el horario después.",
      excerpt:
        "Crea el escenario de la guía de Make: una fila de Prospects, Google Sheets > Watch New Rows y Slack > Send a Message. Actívalo solo después de leer la burbuja.",
      intro:
        "En Make, un escenario es una serie de módulos que indican cómo se transfiere y se transforma el dato entre apps. La guía oficial de la primera automatización construye uno concreto en https://www.make.com: la hoja Prospects avisa al canal público sales-team de Slack cuando entra una fila, con Google Sheets > Watch New Rows y Slack > Send a Message. La misma página dice que cada equipo puede crear hasta 100 escenarios al día y que cada escenario tiene un límite de 2 MB: https://help.make.com/create-your-first-scenario. Si el mismo disparo se ramifica, filtra por un campo o junta varias filas en un solo mensaje, la pieza que toca es la comparativa zapier-ai-vs-make (/compare/zapier-ai-vs-make). Si el encargo es un Zap corto con ChatGPT (OpenAI) Analyze Text y un correo, el flujo paralelo es zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion).",
      problem:
        "Activar el horario por defecto sin haber leído una burbuja manda a Slack las filas que el módulo aún no ha procesado y deja el disparador comprobando la hoja en cada ejecución. La ayuda de programación avisa de que el intervalo cambia el consumo del módulo disparador, y la de operaciones describe la comprobación de Watch New Rows como 1 operación por chequeo. El trabajo es una hoja con una fila de muestra, un Run once leído y Activate scenario solo después.",
      whatYouWillLearn: [
        "Dejar el escenario escrito: la hoja Prospects, sus columnas y el canal sales-team",
        "Crear el escenario y el disparador Google Sheets > Watch New Rows",
        "Conectar Google y Slack (user) y mapear el mensaje",
        "Probar con Run this module y con Run once, y leer las burbujas",
        "Programar Every 15 minutes, activar y revisar la fila nueva en History",
      ],
      prerequisites: [
        "Cuenta en https://www.make.com. La guía dice que la cuenta de Make, la de Slack y la de Google se pueden crear gratis",
        "Un espacio de Slack donde puedas crear un canal público, y una cuenta de Google",
        "30 minutos. La preparación de las dos apps está en https://help.make.com/step-2-get-your-apps-ready",
        "Si la frase ya tiene ramas, abre antes zapier-ai-vs-make (/compare/zapier-ai-vs-make). Si el destino es un resumen de ChatGPT en un Zap, abre zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion)",
      ],
      steps: [
        {
          title: "Prepara Prospects y el canal sales-team",
          content:
            "En Slack, abre el espacio de trabajo. Junto a Channels, en la barra izquierda, pulsa los tres puntos, Create channel, nombra el canal sales-team, deja la visibilidad en Public y pulsa Create. La descripción es opcional. En Google Sheets crea una hoja, renómbrala a Prospects y pon estas columnas: First Name, Last Name, Country, Email, Phone Number y Details. Añade una fila con datos de muestra y deja la hoja abierta en otra pestaña. La guía de este escenario está en https://help.make.com/step-2-get-your-apps-ready.",
          whatYouShouldSee:
            "Un canal público sales-team y una hoja Prospects con esas seis columnas y una fila de muestra.",
          tip: "Si el aviso tiene que ir a dos sitios según un campo, el mapa es zapier-ai-vs-make (/compare/zapier-ai-vs-make). Si el texto lo resume ChatGPT dentro de un Zap, el flujo es zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion).",
          imageDescription:
            "Hoja Prospects con las columnas First Name, Last Name, Country, Email, Phone Number y Details, y el canal público sales-team en Slack.",
        },
        {
          title: "Crea el escenario y Watch New Rows",
          content:
            "Entra en https://www.make.com. Arriba a la derecha pulsa + Create a new scenario. El mismo botón está en la pestaña Scenarios de la barra izquierda. Arriba a la izquierda, pulsa New scenario, escribe New prospect notification y pulsa el icono Save de la barra del Scenario Builder. En el signo más del centro del lienzo busca Google Sheets, elige la app y el módulo Watch New Rows. Si la app no es esa, Back vuelve a la lista. Un módulo disparador solo puede ir al principio del escenario. Guía: https://help.make.com/step-3-add-your-first-app.",
          whatYouShouldSee:
            "El Scenario Builder con el nombre New prospect notification y un solo módulo, Google Sheets > Watch New Rows.",
          imageDescription:
            "Scenario Builder con el escenario renombrado y el módulo Watch New Rows en el centro del lienzo.",
        },
        {
          title: "Conecta Google y configura el disparador",
          content:
            "En el módulo, Create a connection. Ponle un nombre que reconozcas, Sign in with Google, elige la cuenta, marca lo que Make puede acceder y pulsa Continue. La conexión queda guardada para otros escenarios de Google Sheets. En el módulo elige tu Drive; Search Method puede quedarse en Search by path. En Spreadsheet ID usa Click here to choose file y selecciona Prospects. Sheet Name: Sheet1. Table contains headers: Yes. Row with headers: deja el valor por defecto A1:Z1. Limit: 20, el valor de la guía; se puede cambiar. Save guarda el módulo, no el escenario: pulsa también el icono Save de la barra. En Choose where to start elige All y Save. Si cierras esa ventana, clic derecho en el módulo y Choose where to start. All procesa primero las filas que ya están y después las nuevas, y el módulo recuerda las que ya procesó. Watch New Rows es un disparador de sondeo: comprueba filas cada vez que el escenario corre. La etiqueta instant y la opción Immediately son de otros disparadores. Páginas: https://help.make.com/step-4-create-a-connection y https://help.make.com/step-5-set-up-the-trigger.",
          whatYouShouldSee:
            "El módulo guardado, con la conexión de Google, Prospects, Sheet1, Table contains headers en Yes y Choose where to start en All.",
          warning:
            "Save del módulo guarda sus ajustes, no el escenario. La guía pide también el icono Save de la barra del Scenario Builder.",
          imageDescription:
            "Ajustes de Watch New Rows con Prospects, Sheet1, headers en Yes, Limit 20 y Choose where to start en All.",
        },
        {
          title: "Prueba el módulo con Run this module",
          content:
            "Clic derecho en Google Sheets > Watch New Rows y Run this module. Al terminar, aparece una burbuja de salida encima del módulo. Ábrela y compara el output de la operación con la fila de Prospects. La guía dice que cada prueba de este módulo consume un crédito de la cuenta: https://help.make.com/step-6-test-the-module.",
          whatYouShouldSee:
            "La burbuja de salida con la fila de muestra: First Name, Last Name, Country, Email, Phone Number y Details, iguales a la hoja.",
          warning:
            "Si la burbuja no trae esas columnas, para. Slack no se mapea sobre un output vacío.",
          imageDescription:
            "Burbuja de salida de Watch New Rows con la fila de muestra de Prospects.",
        },
        {
          title: "Añade Slack y mapea las columnas",
          content:
            "Pulsa el + a la derecha del módulo de Google Sheets. También vale un doble clic en el lienzo, o clic derecho y Add a module. Busca Slack y elige Send a Message. Create a connection, Connection type Slack (user), un nombre o el que viene por defecto, y Save. En la ventana de Slack, Allow. Si hay varios espacios, elige el del canal sales-team. En Enter a channel ID or name elige Select from the list. Channel type: Public channel. Public channel: sales-team. Pulsa el campo Text: el panel de mapeo lista la salida de Watch New Rows. Puedes usar la plantilla de la guía y colocar los valores arrastrándolos o pulsándolos: «New prospect added!», luego Name, Email, Country, Phone y Details. First Name y Last Name van en Name, separados por un espacio. Save del módulo y el icono Save de la barra. Mapear es pasar la salida de un módulo a la entrada del siguiente. Páginas: https://help.make.com/P7l2-step-7-add-another-app, https://help.make.com/step-8-map-data y https://help.make.com/mapping.",
          whatYouShouldSee:
            "Dos módulos unidos: Watch New Rows y Slack > Send a Message, con sales-team elegido y el Text con valores de la hoja.",
          tip: "La guía dice que, si varios valores caen en el mismo campo, un espacio los separa en la salida.",
          imageDescription:
            "Módulo Slack Send a Message con el canal sales-team y el campo Text mapeado desde Watch New Rows.",
        },
        {
          title: "Run once y lee las dos burbujas",
          content:
            "Clic derecho en el módulo de Google Sheets, Choose where to start, All y Save. En la barra, Run once. El número de cada burbuja indica las operaciones procesadas / créditos usados, en la fórmula de la guía. Abre la burbuja de Google Sheets: en Output están las filas, hasta el límite de 20, porque elegiste All. Abre la de Slack: Input es lo que llegó de la hoja y Output es el mensaje enviado. Abre el canal y pon el mensaje al lado de la fila. La ayuda llama bundle al conjunto de datos que viaja junto. El bundle de entrada es lo que el módulo recibe; el de salida, lo que devuelve. En el ejemplo de la guía, 3 filas y All producen 3 bundles de salida en Google Sheets y 1 crédito en ese disparador; Slack procesa esos 3 bundles, envía 3 mensajes y usa 3 créditos, uno por bundle de entrada. La página de la prueba es https://help.make.com/step-9-test-your-scenario. La de operaciones describe la comprobación de Watch New Rows como 1 operación por chequeo, salgan las filas que salgan: https://help.make.com/operations.",
          whatYouShouldSee:
            "Un mensaje en sales-team con el nombre, el email, el país, el teléfono y Details de la misma fila que el Output de Slack.",
          warning:
            "Run once ejecuta Send a Message: el canal recibe el aviso. All vuelve a tomar las filas que el módulo aún marca como no procesadas.",
          imageDescription:
            "Burbujas de Run once sobre los dos módulos y el mensaje en sales-team con los datos de la fila.",
        },
        {
          title: "Programa, activa y mira la fila nueva",
          content:
            "En la barra del Scenario Builder pulsa Every 15 minutes. La guía deja ese valor por defecto: Watch New Rows comprueba filas nuevas cada 15 minutos. Save. Después pide Activate scenario. Un escenario nuevo nace inactivo. El artículo de estados dice que el botón ON/OFF de la página de detalle pasa de inactivo (corre al pulsar Run once) a activo (corre según el horario): https://help.make.com/active-and-inactive-scenarios. La ayuda de programación avisa de que el intervalo cambia el consumo del disparador y da estos ejemplos solo para ese módulo: cada 5 minutos, 288 créditos al día (60/5 × 24), u 8,640 operaciones al mes; cada hora, 24 créditos al día, o 720 créditos al mes; una vez al día, 30 créditos al mes. El escenario completo suma más créditos según los datos nuevos y los módulos. El intervalo mínimo depende del plan. Si lo activas solo para probar, desactívalo o alarga el horario. Páginas: https://help.make.com/step-10-schedule-your-scenario y https://help.make.com/schedule-a-scenario. Añade otra fila a Prospects. Watch New Rows solo trae filas que aún no procesó, así que esa fila sale en una ejecución posterior del horario, no al escribirla. Abre la pestaña History del escenario: cada ejecución muestra estado (Success, Warning o Error), operaciones y créditos, y Details enseña los bundles de cada módulo (https://help.make.com/scenario-history). Router, filtros y agregadores son la sección siguiente de la guía: el mapa de cuándo merece la pena el lienzo está en zapier-ai-vs-make (/compare/zapier-ai-vs-make).",
          whatYouShouldSee:
            "El escenario activo, el horario en Every 15 minutes y, en History, una ejecución Success de la fila nueva con el mensaje en sales-team.",
          tip: "Si el encargo es la línea corta con ChatGPT (OpenAI) Analyze Text y un correo, sigue en zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion).",
          warning:
            "Activar Every 15 minutes sigue comprobando la hoja aunque no añadas filas. La ayuda cuenta esa comprobación del disparador aparte de los créditos de Slack.",
          imageDescription:
            "Barra del Scenario Builder con Every 15 minutes, el escenario activado y History abierto en una ejecución Success.",
        },
      ],
      realUseCases: [
        {
          title: "La hoja de prospectos de la guía",
          body: "Marketing añade una fila a Prospects y el canal sales-team recibe el mensaje mapeado. La hoja sigue siendo el origen.",
        },
        {
          title: "Los mismos dos módulos, otras apps",
          body: "La guía dice que el ejemplo usa Slack y Google Sheets y que los pasos se adaptan a otras apps. Cambias el disparador o el canal y vuelves a mapear el campo.",
        },
        {
          title: "Cuando deja de ser una línea",
          body: "Un router, un filtro o un agregador es la continuación que la propia guía anuncia, y el criterio está en zapier-ai-vs-make (/compare/zapier-ai-vs-make). El resumen con ChatGPT en un Zap está en zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion).",
        },
      ],
      commonMistakes: [
        {
          title: "Activar sin leer la burbuja",
          body: "Sin Run this module sobre la fila de muestra y sin el Run once del canal, el Text puede salir vacío y el horario ya está gastando la comprobación del disparador.",
        },
        {
          title: "Buscar Immediately en Watch New Rows",
          body: "La guía marca este módulo como disparador de sondeo. Immediately y la etiqueta instant son de otros disparadores, según la ayuda de programación.",
        },
        {
          title: "Volver a poner All",
          body: "Choose where to start en All procesa otra vez las filas que el módulo aún no da por procesadas. Después de la prueba, la fila que toca mirar es una fila nueva, en History.",
        },
      ],
      conclusion:
        "La primera automatización de Make es la de su guía: Prospects, Watch New Rows, Send a Message al canal sales-team, burbujas leídas y el horario activado después. Router, filtros y agregadores vienen en la sección siguiente; el criterio para saltar a ese lienzo, o quedarte en un Zap con ChatGPT, está en zapier-ai-vs-make (/compare/zapier-ai-vs-make) y en zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion).",
      nextSteps: [
        "Cuando entre la siguiente fila de verdad, abre History y compara el mensaje de sales-team con la celda.",
        "Si el aviso se ramifica, sigue en zapier-ai-vs-make (/compare/zapier-ai-vs-make) antes de añadir un router.",
        "Si el paso que falta es un resumen con ChatGPT, sigue en zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion).",
      ],
      takeaway:
        "Una hoja, Watch New Rows, un mensaje mapeado, Run once leído, y entonces Activate scenario. El horario por defecto se queda apagado hasta esa prueba.",
    },
    en: {
      title: "Make: your first automation",
      metaTitle: "Make: your first automation",
      metaDescription:
        "Make’s official first scenario: the Prospects sheet, Watch New Rows and a message in the sales-team channel. Test with Run once, then turn the schedule on.",
      excerpt:
        "Build the scenario from Make’s guide: one Prospects row, Google Sheets > Watch New Rows and Slack > Send a Message. Activate it only after you read the bubble.",
      intro:
        "In Make, a scenario is a series of modules that indicate how data should be transferred and transformed between apps. The official first-automation guide builds a concrete one on https://www.make.com: the Prospects sheet notifies the public sales-team Slack channel when a row arrives, with Google Sheets > Watch New Rows and Slack > Send a Message. The same page says each team can create up to 100 scenarios per day and that each scenario has a size limit of 2 MB: https://help.make.com/create-your-first-scenario. If the same trigger must branch, filter on a field or combine several rows into one message, the piece to read is the zapier-ai-vs-make comparison (/compare/zapier-ai-vs-make). If the job is a short Zap with ChatGPT (OpenAI) Analyze Text and an email, the parallel flow is zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion).",
      problem:
        "Turning on the default schedule before you have read a bubble sends Slack the rows the module has not processed yet and leaves the trigger checking the sheet on every run. The scheduling help warns that the interval changes what the trigger module consumes, and the operations help describes a Watch New Rows check as 1 operation per check. The work is one sheet with a sample row, a Run once you have read and Activate scenario only after that.",
      whatYouWillLearn: [
        "Write the scenario down: the Prospects sheet, its columns and the sales-team channel",
        "Create the scenario and the Google Sheets > Watch New Rows trigger",
        "Connect Google and Slack (user) and map the message",
        "Test with Run this module and Run once, and read the bubbles",
        "Schedule Every 15 minutes, activate and check the new row in History",
      ],
      prerequisites: [
        "An account on https://www.make.com. The guide says the Make, Slack and Google accounts are free to create",
        "A Slack workspace where you can create a public channel, and a Google account",
        "30 minutes. Setup for the two apps is at https://help.make.com/step-2-get-your-apps-ready",
        "If the sentence already has branches, open zapier-ai-vs-make (/compare/zapier-ai-vs-make) first. If the destination is a ChatGPT summary in a Zap, open zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion)",
      ],
      steps: [
        {
          title: "Prepare Prospects and the sales-team channel",
          content:
            "In Slack, open the workspace. Next to Channels, in the left sidebar, click the three dots, Create channel, name the channel sales-team, leave visibility on Public and click Create. The description is optional. In Google Sheets create a spreadsheet, rename it Prospects and add these columns: First Name, Last Name, Country, Email, Phone Number and Details. Add one row of sample data and keep the sheet open in another tab. This scenario’s setup guide is https://help.make.com/step-2-get-your-apps-ready.",
          whatYouShouldSee:
            "A public sales-team channel and a Prospects sheet with those six columns and one sample row.",
          tip: "If the notice has to land in two places depending on a field, the map is zapier-ai-vs-make (/compare/zapier-ai-vs-make). If ChatGPT summarizes the text inside a Zap, the flow is zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion).",
          imageDescription:
            "Prospects sheet with the columns First Name, Last Name, Country, Email, Phone Number and Details, and the public sales-team channel in Slack.",
        },
        {
          title: "Create the scenario and Watch New Rows",
          content:
            "Sign in at https://www.make.com. At the top right click + Create a new scenario. The same button is on the Scenarios tab in the left sidebar. At the top left, click New scenario, type New prospect notification and click the Save icon on the Scenario Builder toolbar. On the giant plus in the center of the canvas search Google Sheets, select the app and the Watch New Rows module. If the app is wrong, Back returns to the list. A trigger module can only sit at the beginning of a scenario. Guide: https://help.make.com/step-3-add-your-first-app.",
          whatYouShouldSee:
            "The Scenario Builder named New prospect notification with a single module, Google Sheets > Watch New Rows.",
          imageDescription:
            "Scenario Builder with the renamed scenario and the Watch New Rows module in the center of the canvas.",
        },
        {
          title: "Connect Google and configure the trigger",
          content:
            "On the module, Create a connection. Give it a name you will recognize, Sign in with Google, choose the account, select what Make can access and click Continue. The connection is saved for other Google Sheets scenarios. On the module choose your Drive; Search Method can stay on Search by path. In Spreadsheet ID use Click here to choose file and select Prospects. Sheet Name: Sheet1. Table contains headers: Yes. Row with headers: leave the default A1:Z1. Limit: 20, the guide’s value; you can change it. Save stores the module, not the scenario: also click the Save icon on the toolbar. In Choose where to start select All and Save. If you close that window, right-click the module and choose Choose where to start. All processes the rows already in the sheet first and new rows after that, and the module remembers the ones it has processed. Watch New Rows is a polling trigger: it checks for rows each time the scenario runs. The instant tag and the Immediately option belong to other triggers. Pages: https://help.make.com/step-4-create-a-connection and https://help.make.com/step-5-set-up-the-trigger.",
          whatYouShouldSee:
            "The module saved, with the Google connection, Prospects, Sheet1, Table contains headers set to Yes and Choose where to start set to All.",
          warning:
            "Saving the module stores its settings, not the scenario. The guide also asks for the Save icon on the Scenario Builder toolbar.",
          imageDescription:
            "Watch New Rows settings with Prospects, Sheet1, headers set to Yes, Limit 20 and Choose where to start set to All.",
        },
        {
          title: "Test the module with Run this module",
          content:
            "Right-click Google Sheets > Watch New Rows and choose Run this module. When the run finishes, an output bubble appears above the module. Open it and compare the operation output with the Prospects row. The guide says every test run of this module consumes one credit from the account: https://help.make.com/step-6-test-the-module.",
          whatYouShouldSee:
            "The output bubble with the sample row: First Name, Last Name, Country, Email, Phone Number and Details, matching the sheet.",
          warning:
            "If the bubble does not show those columns, stop. Slack cannot be mapped onto an empty output.",
          imageDescription:
            "Watch New Rows output bubble showing the sample row from Prospects.",
        },
        {
          title: "Add Slack and map the columns",
          content:
            "Click the + on the right side of the Google Sheets module. A double-click on the canvas, or a right-click and Add a module, also works. Search Slack and select Send a Message. Create a connection, Connection type Slack (user), a name or the default, and Save. In the Slack window, click Allow. If you have several workspaces, pick the one with the sales-team channel. In Enter a channel ID or name choose Select from the list. Channel type: Public channel. Public channel: sales-team. Click the Text field: the mapping panel lists the Watch New Rows output. You can use the guide’s template and place the values by dragging or clicking them: «New prospect added!», then Name, Email, Country, Phone and Details. First Name and Last Name go in Name, separated by a space. Save the module and click the toolbar Save icon. Mapping passes one module’s output into the next module’s input. Pages: https://help.make.com/P7l2-step-7-add-another-app, https://help.make.com/step-8-map-data and https://help.make.com/mapping.",
          whatYouShouldSee:
            "Two linked modules: Watch New Rows and Slack > Send a Message, with sales-team selected and Text holding values from the sheet.",
          tip: "The guide says that when several values land in the same field, a space separates them in the output.",
          imageDescription:
            "Slack Send a Message module with the sales-team channel and the Text field mapped from Watch New Rows.",
        },
        {
          title: "Run once and read both bubbles",
          content:
            "Right-click the Google Sheets module, Choose where to start, All and Save. On the toolbar, Run once. The number on each bubble indicates how many operations were processed/credits used, in the guide’s wording. Open the Google Sheets bubble: Output lists the rows, up to the limit of 20, because you selected All. Open the Slack bubble: Input is what arrived from the sheet and Output is the message that was sent. Open the channel and put the message next to the row. The help calls a bundle the set of data delivered together. The input bundle is what the module receives; the output bundle is what it returns. In the guide’s example, 3 rows and All produce 3 output bundles on Google Sheets and 1 credit on that trigger; Slack processes those 3 bundles, sends 3 messages and uses 3 credits, one per input bundle. The test page is https://help.make.com/step-9-test-your-scenario. The operations page describes a Watch New Rows check as 1 operation per check, however many rows come back: https://help.make.com/operations.",
          whatYouShouldSee:
            "A message in sales-team with the name, email, country, phone and Details of the same row as the Slack Output.",
          warning:
            "Run once performs Send a Message: the channel receives the notice. All picks up again the rows the module does not yet mark as processed.",
          imageDescription:
            "Run once bubbles above both modules and the sales-team message with the row’s data.",
        },
        {
          title: "Schedule, activate and watch the new row",
          content:
            "On the Scenario Builder toolbar click Every 15 minutes. The guide keeps that default: Watch New Rows checks for new rows every 15 minutes. Save. It then asks you to click Activate scenario. A new scenario starts inactive. The status article says the ON/OFF button on the scenario details page switches from inactive (it runs when you click Run once) to active (it runs on the schedule): https://help.make.com/active-and-inactive-scenarios. The scheduling help warns that the interval changes what the trigger consumes and gives these examples for that module only: every 5 minutes, 288 credits per day (60/5 × 24), or 8,640 operations per month; every hour, 24 credits per day, or 720 credits per month; once a day, 30 credits per month. The full scenario adds more credits based on new data and the modules. The minimum interval depends on your plan. If you activate it only to test, deactivate it or lengthen the schedule. Pages: https://help.make.com/step-10-schedule-your-scenario and https://help.make.com/schedule-a-scenario. Add another row to Prospects. Watch New Rows only returns rows it has not processed yet, so that row shows up on a later scheduled run, not as you type it. Open the scenario’s History tab: each run shows status (Success, Warning or Error), operations and credits, and Details shows each module’s bundles (https://help.make.com/scenario-history). Routers, filters and aggregators are the next section of the guide: when the canvas is the right tool is covered in zapier-ai-vs-make (/compare/zapier-ai-vs-make).",
          whatYouShouldSee:
            "The scenario active, the schedule on Every 15 minutes and, in History, a Success run of the new row with the message in sales-team.",
          tip: "If the job is the short line with ChatGPT (OpenAI) Analyze Text and an email, continue with zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion).",
          warning:
            "Activating Every 15 minutes keeps checking the sheet even when you add no rows. The help counts that trigger check apart from Slack’s credits.",
          imageDescription:
            "Scenario Builder toolbar with Every 15 minutes, the scenario activated and History open on a Success run.",
        },
      ],
      realUseCases: [
        {
          title: "The prospects sheet from the guide",
          body: "Marketing adds a row to Prospects and the sales-team channel receives the mapped message. The sheet stays the source.",
        },
        {
          title: "The same two modules, other apps",
          body: "The guide says the example uses Slack and Google Sheets and that the steps adapt to other apps. Change the trigger or the channel and map the field again.",
        },
        {
          title: "When it stops being a straight line",
          body: "A router, a filter or an aggregator is the follow-up the guide itself announces, and the criterion is in zapier-ai-vs-make (/compare/zapier-ai-vs-make). The ChatGPT summary in a Zap is in zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion).",
        },
      ],
      commonMistakes: [
        {
          title: "Activating before you read the bubble",
          body: "Without Run this module on the sample row and without Run once against the channel, Text can go out empty while the schedule is already spending the trigger check.",
        },
        {
          title: "Looking for Immediately on Watch New Rows",
          body: "The guide marks this module as a polling trigger. Immediately and the instant tag belong to other triggers, according to the scheduling help.",
        },
        {
          title: "Setting All again",
          body: "Choose where to start set to All processes again the rows the module does not yet treat as processed. After the test, the row to watch is a new one, in History.",
        },
      ],
      conclusion:
        "Make’s first automation is the one in its guide: Prospects, Watch New Rows, Send a Message to the sales-team channel, bubbles read and the schedule turned on after that. Routers, filters and aggregators come in the next section; when to move to that canvas, or stay on a Zap with ChatGPT, is in zapier-ai-vs-make (/compare/zapier-ai-vs-make) and zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion).",
      nextSteps: [
        "When the next real row arrives, open History and compare the sales-team message with the cell.",
        "If the notice branches, continue with zapier-ai-vs-make (/compare/zapier-ai-vs-make) before you add a router.",
        "If the missing step is a ChatGPT summary, continue with zapier-ai-primera-automatizacion (/tutorials/zapier-ai-primera-automatizacion).",
      ],
      takeaway:
        "One sheet, Watch New Rows, a mapped message, Run once read, and only then Activate scenario. The default schedule stays off until that test.",
    },
  },
};
