import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "chatgpt-analizar-excel";

export const chatgptAnalizarExcel: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "beginner",
  estimatedTime: 18,
  publishedAt: "2026-11-04",
  lastUpdated: "2026-11-04",
  toolsUsed: ["chatgpt"],
  relatedTutorials: [
    "chatgpt-primeros-pasos",
    "chatgpt-projects-organizar-trabajo",
    "claude-analizar-pdf",
  ],
  tags: ["chatgpt", "excel", "csv", "datos", "analisis"],
  hero: tutorialHero(slug, {
    es: {
      alt: "ChatGPT con un Excel o CSV adjunto y una tabla de resultados al lado del archivo original",
      caption: "El entregable es la cifra que has contrastado en el archivo, no el primer resumen.",
      hint: "Hero 1600×900: chatgpt.com con un .xlsx o .csv adjunto, una tabla Canal / Importe y el Excel original abierto con el mismo total.",
    },
    en: {
      alt: "ChatGPT with an Excel or CSV attached and a results table next to the original file",
      caption: "The deliverable is the figure you checked in the file, not the first summary.",
      hint: "Hero 1600×900: chatgpt.com with an .xlsx or .csv attached, a Channel / Amount table and the original Excel open on the same total.",
    },
  }),
  copy: {
    es: {
      title: "Cómo analizar un Excel o un CSV con ChatGPT (2026)",
      metaTitle: "Analizar un Excel o CSV con ChatGPT en 2026",
      metaDescription:
        "Una hoja limpia, un mapa de columnas, una pregunta con método y tres cifras contrastadas en el archivo. ChatGPT no firma el número.",
      excerpt:
        "Prepara una sola tabla, súbela a ChatGPT, pide el mapa antes de las conclusiones y comprueba en el original cada cifra que vayas a usar.",
      intro:
        "Una exportación de ventas, un CSV de tickets o un Excel de gastos no se entiende con «analízame esto». ChatGPT puede analizar archivos subidos, responder preguntas sobre los datos y crear tablas o gráficos. Acepta hojas .xls, .xlsx y .csv. Qué archivos y herramientas ves depende del modelo, del plan y de la cuenta (guía oficial: https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt). Este flujo de 18 minutos se repite igual con cada exportación: mapa, una pregunta, método a la vista y cifras contrastadas en el archivo.",
      problem:
        "El primer resumen suena cerrado y mezcla totales que no cuadran, filas vacías y una hoja que no ha entrado en la lectura. Sin contrastar las cifras en el archivo, el texto no sirve para un correo ni para una reunión.",
      whatYouWillLearn: [
        "Dejar el archivo en una sola tabla con cabeceras claras",
        "Subir el Excel o el CSV y pedir un mapa de hojas y columnas",
        "Contrastar filas, columnas y tres celdas con el original",
        "Hacer una sola pregunta de trabajo y pedir el método",
        "Sacar una tabla de resultado y, si aporta, un gráfico concreto",
        "Marcar huecos y supuestos antes de usar ninguna cifra",
      ],
      prerequisites: [
        "Cuenta en chatgpt.com",
        "La subida de hojas de cálculo está en el plan gratuito y en los de pago, con límites según el plan y la cuenta. El centro de ayuda indica, en el plan gratuito, 3 subidas de archivo al día, y un tamaño aproximado de 50 MB para CSV y hojas de cálculo según lo que ocupe cada fila. Esos topes pueden bajar en horas punta: https://help.openai.com/en/articles/8555545-uploading-files-and-audio-to-chatgpt",
        "Un .xls, .xlsx o .csv real de trabajo, no una tabla inventada",
        "Una decisión en una frase y 18 minutos con el archivo abierto al lado",
      ],
      steps: [
        {
          title: "Deja una sola tabla y escribe la decisión",
          content:
            "Abre el archivo. La primera fila es el nombre de cada columna, en lenguaje claro, y cada fila de debajo es un registro. Quita otras tablas en la misma hoja, filas o columnas vacías que partan los datos, y capturas donde las cifras solo están en una imagen: con un valor metido en una imagen la lectura deja de ser fiable. Si el libro tiene varias hojas, anota el nombre de la que responde a la pregunta. Encima, en una línea: «Quiero decidir ___ a partir de estas columnas, en este periodo». Si el archivo se acerca al tamaño que marca el centro de ayuda o tarda en subir, pártelo por mes o por hoja antes de gastar un intento.",
          whatYouShouldSee:
            "Una hoja con cabeceras en la fila 1, un registro por fila, y una frase de decisión escrita fuera del archivo.",
          tip: "Un CSV exportado de un informe suele traer título, logos y totales en las primeras filas. Borra ese preámbulo: si se queda, esas filas cuentan como datos.",
          imageDescription:
            "Excel con cabeceras en la primera fila, una fila por registro, y una nota al lado con la frase «Quiero decidir…».",
        },
        {
          title: "Sube el archivo y pide el mapa",
          content:
            "Entra en https://chatgpt.com y abre un chat nuevo. En el cuadro de mensaje pulsa + y elige Add photos & files (el rótulo puede salir como Add photos or files). Adjunta el .xlsx, .xls o .csv. Primer mensaje: «Dame un mapa, sin conclusiones: nombre de cada hoja, número de filas de datos (sin la cabecera), lista de columnas, tipo de cada columna (texto, fecha o número) y cuántos valores vacíos hay por columna. Si una hoja no la puedes leer, dilo.» Si hay varias hojas, nombra la que importa: «La pregunta va sobre la hoja Ventas».",
          whatYouShouldSee:
            "El archivo adjunto en el chat y una tabla con hojas, filas, columnas y valores vacíos.",
          warning:
            "«Analiza este Excel» como primer mensaje devuelve un relato. El mapa dice si el archivo se ha leído.",
          imageDescription:
            "Chat de ChatGPT con un .xlsx o .csv adjunto y una tabla: Hoja, Filas, Columnas, Vacíos.",
        },
        {
          title: "Contrasta el mapa con el archivo",
          content:
            "Vuelve al Excel o al CSV. Comprueba que el número de filas de datos cuadra, que no falta ninguna columna y que aparecen las hojas que nombraste. Abre tres celdas y pregunta: «En la hoja X, fila N, columna Y, ¿qué valor lees?». Si el recuento no cuadra, falta una hoja o una celda no coincide, paras ahí: «El mapa no cuadra. La hoja X tiene N filas de datos y estas columnas: …. Rehaz el mapa y no calcules nada todavía.» La cantidad y la complejidad de las fórmulas pueden hacer que un libro se procese a medias aunque quepa en el límite de subida. Si pasa, pide una hoja concreta o divide el archivo.",
          whatYouShouldSee:
            "Un mapa corregido cuyos recuentos coinciden con el archivo y tres celdas leídas igual en los dos sitios.",
          tip: "Si una columna de fechas sale como texto, escríbelo en el mensaje siguiente («Fecha está en DD/MM/AAAA») antes de agrupar por mes.",
          imageDescription:
            "El archivo original junto al mapa de ChatGPT, con tres celdas marcadas que coinciden.",
        },
        {
          title: "Haz una sola pregunta y pide el método",
          content:
            "Ahora la pregunta de trabajo, con columnas y agrupación escritas. Ejemplo: «Con la hoja Ventas y las columnas Fecha, Canal e Importe, suma Importe por Canal en 2025. No uses otras hojas. Muéstrame el método (el código o los pasos) y no añadas filas que no estén en el archivo.» En algunas tareas de análisis ChatGPT escribe y ejecuta Python en un entorno tipo cuaderno. Si aparece código, léelo: qué filtra, qué suma y qué filas deja fuera. Ese entorno no puede hacer peticiones web ni llamar a APIs. Un tipo de cambio, una tarifa o un objetivo que no esté en el archivo se escribe en el mensaje o se añade al archivo. Cuando el resultado dependa de un método concreto, pide que lo enseñe o que lo cambie.",
          whatYouShouldSee:
            "Una respuesta con la operación explícita (código o pasos) y el resultado separado del método.",
          warning:
            "Una correlación que se ve en las columnas no demuestra una causa. Si preguntas por qué baja un canal, pide por un lado lo que el archivo muestra y por otro lo que solo es un supuesto.",
          imageDescription:
            "Respuesta de ChatGPT con un bloque de código o de pasos y, debajo, el resultado de la pregunta.",
        },
        {
          title: "Pide la tabla de resultado y, si aporta, un gráfico",
          content:
            "«Devuélveme el resultado en tabla: Canal, Suma de Importe, Número de filas. Ordena de mayor a menor. Si calculas un porcentaje, escribe la división al lado.» Si un gráfico ayuda, nómbralo: «Un gráfico de barras, Canal en un eje e Importe en el otro, con la unidad.» ChatGPT puede devolver el gráfico como imagen. En barras, líneas, sectores y dispersión a veces hay versión interactiva: el control, cuando sale, se llama Switch to interactive chart, y se vuelve a la imagen con Switch to static chart. Otros tipos pueden quedar como imagen fija. Un gráfico por pregunta. Si el tipo o la agrupación no son los que pediste, dilo y pide el cambio.",
          whatYouShouldSee:
            "Una tabla con las columnas pedidas y, como mucho, un gráfico del tipo que has nombrado, con ejes y unidad.",
          tip: "Si el gráfico mezcla dos escalas o no lleva unidad, pide de nuevo el eje y la unidad. La imagen no se reinterpreta a ojo.",
          imageDescription:
            "Tabla de resultados en el chat y un gráfico de barras con ejes y unidades legibles.",
        },
        {
          title: "Contrasta las cifras que vas a usar",
          content:
            "Elige dos o tres números que vayan a un correo o a una reunión. En el archivo original, filtra o repite la misma suma y compáralos. Lo que no coincida se dice en el chat: «La suma del canal Web no cuadra con mi filtro (yo obtengo X). Revisa el filtro de fechas y las filas vacías, y dime qué filas has incluido.» Hasta que cuadre, esa cifra se queda fuera. Cierra la ronda con los huecos: «Qué no se puede concluir con estas columnas. Lista los supuestos que has tenido que hacer.»",
          whatYouShouldSee:
            "Dos o tres cifras anotadas como comprobadas en el archivo y una lista corta de huecos o supuestos.",
          proTip:
            "Guarda el export con la fecha en el nombre del archivo. Dentro de una semana sabrás contra qué versión contrastaste.",
          imageDescription:
            "Filtro o suma en el Excel original al lado de la cifra de ChatGPT, con una marca en las que coinciden.",
        },
        {
          title: "Escribe la nota que puedes enviar",
          content:
            "Último mensaje: «Con solo lo que hemos comprobado, redacta una nota de media página: la decisión, 4–6 hallazgos (cada uno con la columna de origen), las cifras contrastadas, los huecos y una frase de lo que no afirmamos.» Léela y tacha cualquier cifra que no hayas contrastado tú. Si el mismo archivo se va a usar durante semanas, pasa el hilo a un proyecto y deja el archivo como fuente: el método está en chatgpt-projects-organizar-trabajo. Si el siguiente documento es un PDF largo, cambia de flujo: claude-analizar-pdf trabaja por páginas, no por columnas.",
          whatYouShouldSee:
            "Una nota corta en la que cada cifra lleva su columna de origen y has quitado lo que no contrastaste.",
          imageDescription:
            "Nota de media página con hallazgos, columnas de origen, huecos y una línea «No afirmamos».",
        },
      ],
      realUseCases: [
        {
          title: "Cierre semanal de ventas",
          body: "Suma por canal o por producto, tres cifras contrastadas en el export y una nota para el lunes.",
        },
        {
          title: "CSV de tickets o de soporte",
          body: "Recuento por tipo y por antigüedad, con los huecos escritos y sin causas que el archivo no trae.",
        },
        {
          title: "Excel de gastos",
          body: "Totales por categoría en un periodo, con las filas vacías y las hojas que no entran declaradas en la nota.",
        },
      ],
      commonMistakes: [
        {
          title: "Empezar por «analiza este Excel»",
          body: "El relato llega antes de saber si se han leído todas las hojas. El mapa va primero.",
        },
        {
          title: "Varias tablas en la misma hoja",
          body: "Los totales del informe y las filas vacías entran en la suma. Una tabla, cabecera en la fila 1.",
        },
        {
          title: "Fiarse del gráfico",
          body: "Una barra entra en el correo cuando el total cuadra con el filtro del archivo original.",
        },
        {
          title: "Pedir un dato que no está en el archivo",
          body: "El entorno de Python del análisis no consulta la web. Lo que no subes o no escribes, no está.",
        },
      ],
      conclusion:
        "ChatGPT acelera el mapa, la agrupación y el primer gráfico de un Excel o un CSV. Tú dejas una sola tabla, pides el método y contrastas las cifras en el original. La nota que se envía lleva solo lo comprobado. Si trabajas dentro del libro, el producto se llama ChatGPT for Excel y ChatGPT for Google Sheets: un panel en la hoja, con instalación propia (https://help.openai.com/en/articles/20001063-chatgpt-for-excel-and-google-sheets).",
      nextSteps: [
        "Si el archivo va a vivir varias semanas, organízalo con chatgpt-projects-organizar-trabajo.",
        "Si mañana el documento es un PDF largo, sigue claude-analizar-pdf.",
        "Repite este orden con la siguiente exportación: misma estructura de mensaje, otro archivo.",
      ],
      takeaway:
        "Una tabla limpia, un mapa de columnas, una pregunta con método y las cifras contrastadas en el archivo. El primer resumen no se envía.",
    },
    en: {
      title: "How to analyze an Excel file or CSV with ChatGPT (2026)",
      metaTitle: "Analyze an Excel file or CSV with ChatGPT in 2026",
      metaDescription:
        "A clean sheet, a column map, one question with a method, and three figures checked in the file. ChatGPT does not sign the number.",
      excerpt:
        "Prepare a single table, upload it to ChatGPT, ask for the map before the conclusions, and check every figure you will use against the original.",
      intro:
        "A sales export, a ticket CSV, or an expenses workbook does not get understood with “analyze this”. ChatGPT can analyze uploaded files, answer questions about the data, and create tables or charts. It accepts .xls, .xlsx, and .csv sheets. Which files and tools you see depends on the model, the plan, and the account (official guide: https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt). This 18-minute flow stays the same for every export: map, one question, method in view, and figures checked in the file.",
      problem:
        "The first summary sounds finished and mixes totals that do not match, empty rows, and a sheet that never entered the read. Without checking the figures in the file, the text is not ready for an email or a meeting.",
      whatYouWillLearn: [
        "Turn the file into one table with clear headers",
        "Upload the Excel file or CSV and ask for a sheet and column map",
        "Check row counts, columns, and three cells against the original",
        "Ask one work question and require the method",
        "Get a results table and, when it helps, one specific chart",
        "Write down gaps and assumptions before using any figure",
      ],
      prerequisites: [
        "An account on chatgpt.com",
        "Spreadsheet upload is available on the free plan and on paid plans, with limits that depend on the plan and the account. The help center lists 3 file uploads per day on the free plan, and an approximate 50 MB size for CSV files and spreadsheets depending on the size of each row. Those caps can be lower at peak times: https://help.openai.com/en/articles/8555545-uploading-files-and-audio-to-chatgpt",
        "A real .xls, .xlsx, or .csv from work, not a made-up table",
        "A decision in one sentence and 18 minutes with the file open beside you",
      ],
      steps: [
        {
          title: "Leave a single table and write the decision",
          content:
            "Open the file. Row 1 is the name of each column, in plain language, and every row under it is one record. Remove other tables on the same sheet, empty rows or columns that split the data, and screenshots where the figures live only in an image: a value trapped in an image is not a reliable read. If the workbook has several sheets, note the name of the one that answers the question. Above the file, one line: “I need to decide ___ from these columns, in this period.” If the file is near the size the help center states, or it is slow to upload, split it by month or by sheet before you spend an attempt.",
          whatYouShouldSee:
            "A sheet with headers on row 1, one record per row, and a decision sentence written outside the file.",
          tip: "A CSV exported from a report often starts with a title, logos, and totals. Delete that preamble. If it stays, those rows count as data.",
          imageDescription:
            "Excel with headers on the first row, one row per record, and a note beside it that starts “I need to decide…”.",
        },
        {
          title: "Upload the file and ask for the map",
          content:
            "Go to https://chatgpt.com and open a new chat. In the message box press + and choose Add photos & files (the label may read Add photos or files). Attach the .xlsx, .xls, or .csv. First message: “Give me a map, with no conclusions: each sheet name, number of data rows (excluding the header), the column list, the type of each column (text, date, or number), and how many empty values each column has. If you cannot read a sheet, say so.” If there are several sheets, name the one that matters: “The question is about the Sales sheet.”",
          whatYouShouldSee:
            "The file attached in the chat and a table of sheets, rows, columns, and empty values.",
          warning:
            "“Analyze this Excel file” as the first message returns a story. The map tells you whether the file was read.",
          imageDescription:
            "A ChatGPT chat with an .xlsx or .csv attached and a table: Sheet, Rows, Columns, Empty.",
        },
        {
          title: "Check the map against the file",
          content:
            "Go back to the Excel file or CSV. Check that the data-row count matches, that no column is missing, and that the sheets you named are listed. Open three cells and ask: “On sheet X, row N, column Y, what value do you read?” If the count is off, a sheet is missing, or a cell does not match, stop: “The map does not match. Sheet X has N data rows and these columns: …. Redo the map and do not calculate anything yet.” The number and complexity of formulas can leave a workbook only partly processed even when it is within the upload size limit. When that happens, ask for one specific sheet or split the file.",
          whatYouShouldSee:
            "A corrected map whose counts match the file, and three cells read the same in both places.",
          tip: "If a date column comes back as odd text, say so in the next message (“Date is DD/MM/YYYY”) before you group by month.",
          imageDescription:
            "The original file next to ChatGPT’s map, with three marked cells that match.",
        },
        {
          title: "Ask one question and require the method",
          content:
            "Now the work question, with columns and grouping written out. Example: “Using the Sales sheet and the columns Date, Channel, and Amount, sum Amount by Channel for 2025. Do not use other sheets. Show me the method (the code or the steps) and do not add rows that are not in the file.” On some analysis tasks ChatGPT writes and runs Python in a notebook-style environment. If code appears, read it: what it filters, what it sums, and which rows it drops. That environment cannot make web requests or API calls. An exchange rate, a fee, or a target that is not in the file goes in the message or into the file. When the result depends on a specific method, ask ChatGPT to show that method or change it.",
          whatYouShouldSee:
            "An answer with the operation spelled out (code or steps) and the result kept separate from the method.",
          warning:
            "A correlation visible in the columns does not prove a cause. If you ask why a channel dropped, ask for what the file shows on one side and what is only an assumption on the other.",
          imageDescription:
            "A ChatGPT reply with a code or steps block and, under it, the result of the question.",
        },
        {
          title: "Ask for the results table and, if it helps, one chart",
          content:
            "“Return the result as a table: Channel, Sum of Amount, Row count. Sort from largest to smallest. If you calculate a percentage, write the division beside it.” If a chart helps, name it: “A bar chart, Channel on one axis and Amount on the other, with the unit.” ChatGPT can return the chart as an image. For bar, line, pie, and scatter charts an interactive version is sometimes available: the control, when it appears, is Switch to interactive chart, and Switch to static chart returns to the image. Other chart types may come back as a fixed image. One chart per question. If the type or the grouping is not what you asked for, say so and ask for the change.",
          whatYouShouldSee:
            "A table with the columns you asked for and, at most, one chart of the type you named, with axes and a unit.",
          tip: "If the chart mixes two scales or has no unit, ask again with the axis and the unit. Do not reinterpret the image by eye.",
          imageDescription:
            "A results table in the chat and a bar chart with readable axes and units.",
        },
        {
          title: "Check the figures you will actually use",
          content:
            "Pick two or three numbers that will go into an email or a meeting. In the original file, filter or repeat the same sum and compare them. Anything that does not match goes back into the chat: “The Web channel sum does not match my filter (I get X). Review the date filter and the empty rows, and tell me which rows you included.” Until it matches, that figure stays out. Close the round with the gaps: “What cannot be concluded from these columns. List the assumptions you had to make.”",
          whatYouShouldSee:
            "Two or three figures marked as checked in the file, and a short list of gaps or assumptions.",
          proTip:
            "Save the export with the date in the file name. A week later you will know which version you checked against.",
          imageDescription:
            "A filter or sum in the original Excel file next to ChatGPT’s figure, with a mark on the ones that match.",
        },
        {
          title: "Write the note you can send",
          content:
            "Last message: “Using only what we have checked, draft a half-page note: the decision, 4–6 findings (each with the source column), the figures we checked, the gaps, and one sentence on what we are not claiming.” Read it and strike any figure you did not check yourself. If the same file will be used for weeks, move the thread into a project and keep the file as a source: the method is in chatgpt-projects-organizar-trabajo. If the next document is a long PDF, switch flows: claude-analizar-pdf works by pages, not by columns.",
          whatYouShouldSee:
            "A short note where every figure names its source column, with anything you did not check removed.",
          imageDescription:
            "A half-page note with findings, source columns, gaps, and a line that reads “We are not claiming”.",
        },
      ],
      realUseCases: [
        {
          title: "Weekly sales close",
          body: "A sum by channel or product, three figures checked in the export, and a note for Monday.",
        },
        {
          title: "A ticket or support CSV",
          body: "Counts by type and by age, with the gaps written down and no causes the file does not contain.",
        },
        {
          title: "An expenses workbook",
          body: "Totals by category for one period, with empty rows and excluded sheets declared in the note.",
        },
      ],
      commonMistakes: [
        {
          title: "Starting with “analyze this Excel file”",
          body: "The story arrives before you know whether every sheet was read. The map comes first.",
        },
        {
          title: "Several tables on the same sheet",
          body: "Report totals and empty rows get pulled into the sum. One table, header on row 1.",
        },
        {
          title: "Trusting the chart",
          body: "A bar goes into the email when the total matches the filter in the original file.",
        },
        {
          title: "Asking for a figure that is not in the file",
          body: "The analysis Python environment does not look things up on the web. What you do not upload or type is not there.",
        },
      ],
      conclusion:
        "ChatGPT speeds up the map, the grouping, and the first chart of an Excel file or CSV. You leave a single table, ask for the method, and check the figures in the original. The note you send carries only what you checked. If you work inside the workbook, the product is ChatGPT for Excel and ChatGPT for Google Sheets: a sidebar in the sheet, with its own install (https://help.openai.com/en/articles/20001063-chatgpt-for-excel-and-google-sheets).",
      nextSteps: [
        "If the file will live for several weeks, organize it with chatgpt-projects-organizar-trabajo.",
        "If tomorrow’s document is a long PDF, follow claude-analizar-pdf.",
        "Repeat this order on the next export: same message structure, different file.",
      ],
      takeaway:
        "A clean table, a column map, one question with a method, and the figures checked in the file. The first summary does not get sent.",
    },
  },
};
