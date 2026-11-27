import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "lovable-primera-app";

const firstPrompt = `Build a website for Little Fern, a neighborhood cafe. Include a warm hero section with a headline and a photo, an interactive menu where visitors filter items by category (coffee, breakfast, lunch, pastries), an opening hours section, and a location section with the address and a short "find us" description. Use realistic sample content throughout. Cozy, welcoming design. Works well on mobile. No login or database yet.`;

export const lovablePrimeraApp: Tutorial = {
  id: slug,
  slug,
  category: "code",
  level: "beginner",
  estimatedTime: 10,
  publishedAt: "2026-11-27",
  lastUpdated: "2026-11-27",
  toolsUsed: ["lovable"],
  relatedTutorials: ["cursor-repo-existente", "cursor-cloud-agent-primer-pr"],
  tags: ["lovable", "prompt", "publish", "preview", "app-builder"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Editor de Lovable con el chat del proyecto a la izquierda y la preview de la web del café a la derecha",
      caption: "El entregable es la URL lovable.app publicada, no solo la preview.",
      hint:
        "Hero 1600×900: lovable.dev en el editor, chat a la izquierda, preview de la web Little Fern a la derecha y el botón Publish arriba a la derecha, junto a Share.",
    },
    en: {
      alt: "Lovable editor with the project chat on the left and the cafe site preview on the right",
      caption: "The deliverable is the published lovable.app URL, not the preview alone.",
      hint:
        "Hero 1600×900: lovable.dev in the editor, chat on the left, Little Fern site preview on the right and the Publish button at the top right, next to Share.",
    },
  }),
  copy: {
    es: {
      title: "Lovable: primera app a partir de un prompt",
      metaTitle: "Lovable: primera app a partir de un prompt",
      metaDescription:
        "Cuenta en lovable.dev, modo Build, el prompt de la guía oficial sin login ni base de datos, un cambio, la preview toolbar y Publish a una URL lovable.app.",
      excerpt:
        "La guía rápida de Lovable: el prompt de Little Fern, un cambio, la preview y Publish. El sitio en vivo sale en unos diez minutos.",
      intro:
        "La guía rápida de Lovable publica una primera app con unos diez minutos de trabajo: describes lo que quieres, Lovable lo construye y lo publicas en una URL que puedes compartir. No hay nada que instalar ni que configurar. Este flujo sigue esa guía en https://docs.lovable.dev/introduction/getting-started. El ejemplo es la web de Little Fern, un café de barrio, con menú filtrable, horario y ubicación. Puedes cambiar la idea en cualquier paso. Si el entregable es una pantalla para un repo Next en Vercel, el mapa es la comparativa v0-vs-lovable-ui (/compare/v0-vs-lovable-ui).",
      problem:
        "En el dashboard, Chat abre un chat y no crea el proyecto. Plan escribe un plan y no cambia el código. Un primer prompt con login y base de datos mete de golpe lo que la guía deja para después. La preview se actualiza al momento, y el sitio en vivo solo cambia al pulsar Publish y luego Publish changes. El primer flujo útil deja Build seleccionado, cierra el prompt sin login ni base de datos, lee la preview y publica esa versión.",
      whatYouWillLearn: [
        "Dejar por escrito la app, para quién es, por qué y la acción clave, y cerrar el prompt sin login ni base de datos",
        "Crear la cuenta y dejar el selector en Build",
        "Enviar el prompt y revisar el chat y la preview",
        "Pedir un solo cambio y volver a mirar la preview",
        "Señalar un elemento con Select elements o cambiar un texto con Edit text inline",
        "Probar botones, filtros y la vista Mobile antes de publicar",
        "Publicar en una URL lovable.app y distinguir la preview del sitio en vivo",
      ],
      prerequisites: [
        "Cuenta en https://lovable.dev. El alta es con email, Google, GitHub o Apple. La cuenta abre un workspace personal en el plan Free. Guía: https://docs.lovable.dev/introduction/getting-started",
        "Una nota con las cuatro preguntas de https://docs.lovable.dev/prompting/prompting-one. La última línea del prompt deja fuera el login y la base de datos",
        "Unos 10 minutos, el tiempo de manos de la guía rápida. Si la pantalla tiene que vivir en un repo Next en Vercel, abre antes v0-vs-lovable-ui (/compare/v0-vs-lovable-ui). Los créditos del plan Free están en https://docs.lovable.dev/introduction/subscription-plans. El precio en dinero de los planes de pago está en https://lovable.dev/pricing",
      ],
      steps: [
        {
          title: "Anota la app y deja fuera login y base de datos",
          content:
            "Antes de pulsar send, escribe cuatro líneas. La guía de prompting pide: qué es el producto, para quién es, por qué lo van a usar y cuál es la única acción clave. Página: https://docs.lovable.dev/prompting/prompting-one.\n\nLa guía rápida usa un ejemplo concreto, la web de Little Fern, y dice que la última línea importa. La primera versión se queda sin login y sin base de datos: hay menos que se rompa, y ambos se añaden después con un solo prompt. https://docs.lovable.dev/introduction/getting-started.\n\nEl prompt de esa guía está en el paso 3. Si cambias la idea, conserva el cierre: No login or database yet. Lovable acepta la descripción en cualquier idioma.",
          whatYouShouldSee:
            "Una nota con las cuatro respuestas y la línea «No login or database yet». Lovable todavía sin send.",
          tip: "Si el encargo es una pantalla de un repo Next en Vercel, abre v0-vs-lovable-ui (/compare/v0-vs-lovable-ui) antes de generar.",
          imageDescription:
            "Nota con las cuatro preguntas y la línea No login or database yet, junto a lovable.dev sin enviar.",
        },
        {
          title: "Entra en lovable.dev con Build seleccionado",
          content:
            "Entra en https://lovable.dev. El alta gratuita admite email, Google, GitHub o Apple. La cuenta abre un workspace personal en el plan Free y Lovable muestra el dashboard. También puedes escribir el prompt en la homepage antes de registrarte: al enviarlo, Lovable pide el alta y conserva el prompt. https://docs.lovable.dev/introduction/getting-started.\n\nEl cuadro está en el centro. El texto del campo es Ask Lovable to create…. El selector de modo está junto al botón de envío. Déjalo en Build (Make changes directly). Build viene seleccionado y Lovable recuerda el modo en este navegador. Con Chat (Ask anything, explore ideas) el mensaje abre un chat y no crea el proyecto; el botón de envío pasa a decir Chat for free mientras dura el cupo diario de chat. Con Plan (Detailed spec for complex builds) Lovable crea el proyecto en Plan mode: investiga y escribe un plan, y no cambia el código. https://docs.lovable.dev/introduction/dashboard-overview. En el chat del proyecto, un mensaje de Plan mode cuesta 1 crédito, más el coste de la investigación que lance. https://docs.lovable.dev/features/projects/chat.\n\nConstruir gasta build credits. El plan Free incluye 5 al día, con un tope de 30 al mes. Al llegar al tope, el crédito diario se reanuda el día 1 a las 00:00 UTC. Los créditos diarios que no usas caducan al acabar el día y no cuentan para el tope. Tabla: https://docs.lovable.dev/introduction/subscription-plans.",
          whatYouShouldSee:
            "El dashboard con el campo Ask Lovable to create… y el selector en Build (Make changes directly).",
          warning:
            "Chat no crea el proyecto. Plan no cambia el código. El selector tiene que decir Build.",
          imageDescription:
            "Dashboard de lovable.dev con el selector de modo en Build, junto al botón de envío.",
        },
        {
          title: "Envía el prompt y espera la primera versión",
          content:
            "Pega el prompt de la guía rápida y pulsa send, con Build seleccionado. Lovable crea el proyecto y empieza a construir. La primera versión tarda unos minutos y puedes verla formarse.\n\nCuando termina, estás en el editor: el chat del proyecto a la izquierda y la preview a la derecha, con la app en marcha. Recorre la preview: prueba los filtros del menú y baja por las secciones. La guía dice que lo que ves es una app que funciona y que el código es tuyo. La FAQ precisa que las apps, el código y el contenido son tuyos, sujetos a derechos de terceros, como las licencias de código abierto, y que puedes modificarlos, usarlos con fines comerciales y alojarlos donde elijas: https://docs.lovable.dev/introduction/faq. Cada cambio queda guardado como una versión que puedes restaurar. No hay botón Save. El interruptor History, en la barra superior, abre el historial. Revert pide confirmación, restaura el código y vuelve a desplegar las edge functions de esa versión. No deshace los datos de la base. En esta primera app aún no hay base de datos. Páginas: https://docs.lovable.dev/introduction/getting-started y https://docs.lovable.dev/features/projects/history.\n\nLa FAQ dice que las apps nuevas creadas desde el 13 de mayo de 2026 (22 de junio de 2026 en workspaces Enterprise) usan TanStack Start, que pinta las páginas en el servidor. Las anteriores usan React + Vite. El backend sale del backend integrado, de Supabase o de APIs de terceros. Lovable no deja elegir otro framework, incluido Next.js. Quien tiene acceso de edición puede leer el código en el editor de código; editarlo ahí está en los planes de pago. https://docs.lovable.dev/introduction/faq.",
          whatYouShouldSee:
            "El editor con el chat a la izquierda y la preview de Little Fern a la derecha: hero, menú con filtros, horario y ubicación.",
          code: { language: "text", content: firstPrompt },
          imageDescription:
            "Editor de Lovable con el chat a la izquierda y la preview del café, con filtros coffee, breakfast, lunch y pastries.",
        },
        {
          title: "Pide un solo cambio",
          content:
            "Pide un cambio cada vez y mira la preview después. La guía usa este prompt:\n\nAdd a \"Today's specials\" section between the menu and the opening hours, highlighting two menu items with a short description and price.\n\nSi la app funciona y el tono no es el que imaginabas, también vale una frase llana. La guía da esta como ejemplo válido: Make the whole site feel warmer and less corporate.\n\nEn el chat del proyecto, Build aplica el cambio. El coste de Build mode depende de la complejidad y del trabajo hecho, y muchos pedidos cuestan menos de un crédito. https://docs.lovable.dev/features/projects/chat y https://docs.lovable.dev/introduction/credits-and-usage.\n\nSi el selector del proyecto está en Chat, ese modo no modifica el código. Al pedir un cambio, Lovable muestra la tarjeta Start building, marcada (Uses credits). Build cambia a Build mode y hace el cambio; la tarjeta pasa a decir Switched to Build mode. Stay in Chat mode deja el proyecto igual y la tarjeta dice Kept Chat mode. La franquicia diaria de chat no cubre ese build. https://docs.lovable.dev/features/chat-mode.",
          whatYouShouldSee:
            "La preview con la sección Today's specials entre el menú y el horario, o con el tono más cálido si usaste la otra frase.",
          warning:
            "Un pedido, una mirada a la preview. El segundo cambio espera a que el primero se vea.",
          imageDescription:
            "Preview con la sección Today's specials entre el menú y el horario de apertura.",
        },
        {
          title: "Retoca señalando en la preview",
          content:
            "Para un cambio visual pequeño, señalar gana a describir. La preview toolbar es la barra dentro de la preview, anclada abajo por defecto, y está en todos los planes. Sustituye a Visual edits: no trae controles propios de color, fuente o espaciado. https://docs.lovable.dev/features/preview-toolbar.\n\nSelect elements: pulsa Select elements, haz clic en el elemento y escribe el cambio en el chat del proyecto. Si el chat está cerrado, escríbelo en la barra y pulsa Send. El pedido cuenta como uso de build y gasta créditos. La guía de la barra pone este ejemplo: Make this button the primary brand color and round the corners more.\n\nEdit text inline cambia palabras sin prompt: un titular, una etiqueta, una errata. Pulsa Edit text inline, haz clic en el texto, escríbelo y pulsa Send en la barra. La cuenta incluye 100 ediciones de texto inline gratis, contadas en todos los workspaces y proyectos. Cada una vuelve a estar libre 24 horas después de usarla. Varios textos enviados a la vez cuentan como una. Hay dos topes compartidos cada 24 horas: 2.000 para los miembros de un workspace y 500 para quien usa Lovable desde la misma IP. Al pasar de 100 o de uno de esos topes, la edición inline pasa a contar como build y gasta créditos.",
          whatYouShouldSee:
            "El elemento señalado ya con el cambio, o el texto nuevo tras Send en Edit text inline.",
          tip: "El texto corto va por Edit text inline. El aspecto del elemento va por Select elements.",
          imageDescription:
            "Preview toolbar abajo, con Select elements o Edit text inline activo sobre el titular del hero.",
        },
        {
          title: "Prueba enlaces, filtros y la vista móvil",
          content:
            "Antes de Publish, la guía pide una pasada corta. Pulsa cada botón y cada enlace. Prueba lo interactivo: filtra el menú por cada categoría. Pulsa el device toggle, encima de la preview, hasta la vista Mobile. La guía dice que la mayoría abrirá el enlace en el teléfono.\n\nSi algo falla, di qué está mal y dónde. El ejemplo de la guía es este:\n\nIn the menu, clicking the pastries filter shows no items. It should show the pastry items.\n\nhttps://docs.lovable.dev/introduction/getting-started.",
          whatYouShouldSee:
            "Los cuatro filtros del menú con ítems, los enlaces abiertos y la misma página en la vista Mobile.",
          warning:
            "Publish espera a esa pasada. Un filtro vacío se corrige en el chat, con el fallo y el sitio escritos.",
          imageDescription:
            "Preview en vista Mobile, con el filtro pastries mostrando ítems.",
        },
        {
          title: "Publica en la URL lovable.app",
          content:
            "Pulsa Publish, arriba a la derecha del editor, junto a Share. En una ventana estrecha el botón se queda en un icono sin etiqueta. El diálogo propone una dirección que termina en lovable.app, en el campo Website URL, y lanza las comprobaciones de seguridad. Puedes editar la dirección antes de publicar. Deja los valores que ya trae el diálogo, o ajusta la dirección y la audiencia, y pulsa Publish otra vez. Al terminar el despliegue, Lovable muestra el enlace en vivo. Publicar en una URL lovable.app y el hosting van incluidos en todos los planes, con HTTPS, y el sitio en vivo no gasta créditos por estar publicado. Por defecto pueden publicar los editores y roles superiores. https://docs.lovable.dev/features/publish y https://docs.lovable.dev/introduction/faq.\n\nLa fila de audiencia dice Visible to anyone with the link mientras el sitio es público. La fila muestra la audiencia que el proyecto ya usa: puedes dejarla y terminar. Los hallazgos no bloquean Publish por defecto. Si no hay hallazgos críticos ni avisos, la línea dice que no hay problemas de seguridad. Si marca hallazgos críticos, ábrelos en la vista Security antes de compartir el enlace.\n\nEl sitio en vivo es una copia. Los cambios posteriores se ven en la preview al momento, y el sitio en vivo solo se actualiza al pulsar Publish y luego Publish changes. Un punto en el botón Publish marca que hay cambios más nuevos que la versión en vivo. Al acabar, el diálogo confirma Your website is live.",
          whatYouShouldSee:
            "El diálogo con Your website is live, el botón Visit site y una dirección que termina en lovable.app. La nota del brief lleva la fecha 2026-11-27 y si el enlace es una demo.",
          warning:
            "La preview no es el sitio en vivo. Compartir el enlace espera a Visit site.",
          proTip:
            "En un plan de pago, Add domain en el mismo diálogo conecta un dominio propio. El precio del plan está en https://lovable.dev/pricing.",
          imageDescription:
            "Diálogo de Publish con Your website is live, Visit site y una dirección lovable.app.",
        },
      ],
      realUseCases: [
        {
          title: "Web de un negocio, con contenido de muestra",
          body: "El ejemplo de la guía rápida: hero, menú con filtros, horario y ubicación. La última línea del prompt deja fuera login y base de datos. Publicas la URL y la compartes.",
        },
        {
          title: "Tabla interna con datos de muestra",
          body: "La misma guía ofrece este arranque: una tabla de equipo con nombre, responsable, estado y fecha de devolución, más un formulario para añadir ítems, con datos de muestra y sin login ni base de datos.",
        },
        {
          title: "Panel con gráficos de muestra",
          body: "Otro arranque de la guía: un panel de un negocio de suscripción con ingresos mensuales, clientes activos y bajas en gráficos, y una tabla de altas recientes. Datos de muestra, sin login ni base de datos.",
        },
      ],
      commonMistakes: [
        {
          title: "Enviar con Chat o con Plan",
          body: "En el dashboard, Chat abre un chat y no crea el proyecto. Plan escribe un plan y no cambia el código. El selector tiene que decir Build (Make changes directly).",
        },
        {
          title: "Pedir login y base de datos en el primer prompt",
          body: "La guía rápida cierra el prompt con No login or database yet. Login y datos van en un prompt posterior. El backend integrado está en https://docs.lovable.dev/features/cloud.",
        },
        {
          title: "Dar la preview por el sitio publicado",
          body: "La preview se actualiza al momento. El sitio en vivo cambia al pulsar Publish y luego Publish changes. El punto del botón Publish marca que hay cambios sin publicar.",
        },
        {
          title: "Esperar Next.js o enganchar un repo que ya existe",
          body: "La FAQ dice que Lovable no deja elegir Next.js. Si la pantalla tiene que vivir en un repo Next en Vercel, el mapa es v0-vs-lovable-ui (/compare/v0-vs-lovable-ui). Git sync crea un repositorio nuevo y privado; no conecta uno que ya exista. https://docs.lovable.dev/integrations/github.",
        },
      ],
      conclusion:
        "La primera app en Lovable anota el encargo, entra con Build, pega el prompt sin login ni base de datos, pide un cambio, señala en la preview, prueba filtros y la vista Mobile, y publica en una URL lovable.app. La preview y el sitio en vivo son dos momentos: el segundo espera a Publish changes. Si la duda es v0 o Lovable, sigue v0-vs-lovable-ui (/compare/v0-vs-lovable-ui). Con el código en GitHub, el handoff del catálogo es cursor-repo-existente (/tutorials/cursor-repo-existente).",
      nextSteps: [
        "Para decidir Lovable o v0 según si el entregable es una app desde el chat o UI en un repo Next en Vercel, abre v0-vs-lovable-ui (/compare/v0-vs-lovable-ui).",
        "Login y datos van después, en un prompt aparte. El backend integrado (Cloud) está en https://docs.lovable.dev/features/cloud. Conectar un proyecto de Supabase propio es opcional: https://docs.lovable.dev/integrations/supabase.",
        "Git sync crea un repositorio nuevo y privado en GitHub: https://docs.lovable.dev/integrations/github. A partir de ese repo, el flujo del catálogo es cursor-repo-existente (/tutorials/cursor-repo-existente).",
        "Con el repo ya en GitHub, un primer PR revisado está en cursor-cloud-agent-primer-pr (/tutorials/cursor-cloud-agent-primer-pr).",
        "Ficha de la herramienta: /tools/lovable/.",
      ],
      takeaway:
        "Nota de cuatro líneas → Build → prompt sin login ni base de datos → un cambio → preview toolbar → filtros y Mobile → Publish → Publish changes cuando la preview ya no coincide con el sitio en vivo.",
    },
    en: {
      title: "Lovable: first app from a prompt",
      metaTitle: "Lovable: first app from a prompt",
      metaDescription:
        "An account on lovable.dev, Build mode, the official prompt with no login or database, one change, the preview toolbar and Publish to a lovable.app URL.",
      excerpt:
        "Lovable's quick start: the Little Fern prompt, one change, the preview and Publish. The live site is up in about ten minutes.",
      intro:
        "Lovable's quick start publishes a first app in about ten minutes of hands-on time: you describe what you want, Lovable builds it, and you publish it to a URL you can share. There is nothing to install and nothing to configure. This flow follows that guide at https://docs.lovable.dev/introduction/getting-started. The example is a website for Little Fern, a neighborhood cafe, with a filterable menu, opening hours and a location. Swap in your own idea at any step. If the deliverable is a screen for a Next repo on Vercel, the map is the v0-vs-lovable-ui comparison (/compare/v0-vs-lovable-ui).",
      problem:
        "On the dashboard, Chat starts a chat and does not create the project. Plan writes a plan and does not change the code. A first prompt with login and a database pulls in what the guide leaves for later. The preview updates immediately, and the live site changes only when you click Publish and then Publish changes. The first useful flow leaves Build selected, closes the prompt without login or a database, reads the preview and publishes that version.",
      whatYouWillLearn: [
        "Write down the app, who it is for, why they will use it and the one key action, and close the prompt without login or a database",
        "Create the account and leave the picker on Build",
        "Send the prompt and review the chat and the preview",
        "Ask for one change and look at the preview again",
        "Point at an element with Select elements or change copy with Edit text inline",
        "Test buttons, filters and Mobile view before you publish",
        "Publish to a lovable.app URL and tell the preview apart from the live site",
      ],
      prerequisites: [
        "An account at https://lovable.dev. Sign-up is with email, Google, GitHub or Apple. The account opens a personal workspace on the Free plan. Guide: https://docs.lovable.dev/introduction/getting-started",
        "A note with the four questions from https://docs.lovable.dev/prompting/prompting-one. The prompt's last line leaves out login and the database",
        "About 10 minutes, the hands-on time in the quick start. If the screen has to live in a Next repo on Vercel, open v0-vs-lovable-ui (/compare/v0-vs-lovable-ui) first. Free-plan credits are at https://docs.lovable.dev/introduction/subscription-plans. Paid-plan prices are at https://lovable.dev/pricing",
      ],
      steps: [
        {
          title: "Write the app down and leave login and the database out",
          content:
            "Before you click send, write four lines. The prompting guide asks: what the product is, who it is for, why they will use it and what the one key action is. Page: https://docs.lovable.dev/prompting/prompting-one.\n\nThe quick start uses one concrete example, the Little Fern website, and says the last line matters. The first version stays free of login and a database: there is less to go wrong, and you can add both later with a single prompt. https://docs.lovable.dev/introduction/getting-started.\n\nThat guide's prompt is in step 3. If you swap the idea, keep the close: No login or database yet. Lovable accepts the description in any language.",
          whatYouShouldSee:
            "A note with the four answers and the line «No login or database yet». Lovable with no send yet.",
          tip: "If the job is a screen in a Next repo on Vercel, open v0-vs-lovable-ui (/compare/v0-vs-lovable-ui) before you generate.",
          imageDescription:
            "Note with the four questions and the line No login or database yet, next to lovable.dev before send.",
        },
        {
          title: "Open lovable.dev with Build selected",
          content:
            "Go to https://lovable.dev. Free sign-up accepts email, Google, GitHub or Apple. The account opens a personal workspace on the Free plan and Lovable shows the dashboard. You can also type the prompt on the homepage before you sign up: when you submit, Lovable asks you to sign up and keeps the prompt. https://docs.lovable.dev/introduction/getting-started.\n\nThe box is in the center. The field reads Ask Lovable to create…. The mode picker sits next to the send button. Leave it on Build (Make changes directly). Build starts selected, and Lovable remembers the mode in this browser. With Chat (Ask anything, explore ideas) the message starts a chat and does not create the project; the send button reads Chat for free while the daily chat allowance lasts. With Plan (Detailed spec for complex builds) Lovable creates the project in Plan mode: it investigates and writes a plan, and it does not change the code. https://docs.lovable.dev/introduction/dashboard-overview. In the project chat, a Plan mode message costs 1 credit, plus the cost of any research it runs. https://docs.lovable.dev/features/projects/chat.\n\nBuilding spends build credits. The Free plan includes 5 per day, capped at 30 per month. After the cap, the daily credit resumes on the 1st at 00:00 UTC. Unused daily credits expire at the end of the day and do not count toward the cap. Table: https://docs.lovable.dev/introduction/subscription-plans.",
          whatYouShouldSee:
            "The dashboard with the Ask Lovable to create… field and the picker on Build (Make changes directly).",
          warning:
            "Chat does not create the project. Plan does not change the code. The picker has to read Build.",
          imageDescription:
            "lovable.dev dashboard with the mode picker on Build, next to the send button.",
        },
        {
          title: "Send the prompt and wait for the first version",
          content:
            "Paste the quick start prompt and click send, with Build selected. Lovable creates the project and starts building. The first version takes a few minutes, and you can watch it take shape.\n\nWhen it is ready, you are in the editor: the project chat on the left and the preview on the right, with the app running. Click around the preview: try the menu filters and scroll the sections. The guide says everything you see is a working app and that the code is yours. The FAQ adds that your apps, code and the content you create are yours, subject to third-party rights such as open-source licenses, and that you can modify them, use them commercially and host them wherever you choose: https://docs.lovable.dev/introduction/faq. Every change is saved as a version you can restore. There is no Save button. The History toggle, in the top bar, opens version history. Revert asks you to confirm, restores the code and redeploys that version's edge functions. It does not roll back database data. This first app has no database yet. Pages: https://docs.lovable.dev/introduction/getting-started and https://docs.lovable.dev/features/projects/history.\n\nThe FAQ says new apps created from May 13, 2026 (June 22, 2026 for Enterprise workspaces) use TanStack Start, which renders pages on the server. Older apps use React + Vite. Backend functionality comes from the built-in backend, Supabase or third-party APIs. Lovable does not let you choose another framework, including Next.js. Anyone with edit access can read the code in the code editor; editing it there is on paid plans. https://docs.lovable.dev/introduction/faq.",
          whatYouShouldSee:
            "The editor with the chat on the left and the Little Fern preview on the right: hero, menu with filters, opening hours and location.",
          code: { language: "text", content: firstPrompt },
          imageDescription:
            "Lovable editor with the chat on the left and the cafe preview, with coffee, breakfast, lunch and pastries filters.",
        },
        {
          title: "Ask for one change",
          content:
            "Ask for one change at a time and check the preview after each. The guide uses this prompt:\n\nAdd a \"Today's specials\" section between the menu and the opening hours, highlighting two menu items with a short description and price.\n\nIf the app works and the tone is not what you pictured, a plain sentence is enough. The guide gives this as a valid example: Make the whole site feel warmer and less corporate.\n\nIn the project chat, Build applies the change. Build mode cost depends on the complexity of the request and the work completed, and many requests cost less than one credit. https://docs.lovable.dev/features/projects/chat and https://docs.lovable.dev/introduction/credits-and-usage.\n\nIf the project picker is on Chat, that mode does not change the code. When you ask for a change, Lovable shows the Start building card, marked (Uses credits). Build switches to Build mode and makes the change; the card then reads Switched to Build mode. Stay in Chat mode leaves the project as it is and the card reads Kept Chat mode. The daily chat allowance does not cover that build. https://docs.lovable.dev/features/chat-mode.",
          whatYouShouldSee:
            "The preview with a Today's specials section between the menu and the opening hours, or with a warmer tone if you used the other sentence.",
          warning:
            "One request, one look at the preview. The second change waits until the first one is visible.",
          imageDescription:
            "Preview with a Today's specials section between the menu and the opening hours.",
        },
        {
          title: "Tweak by pointing in the preview",
          content:
            "For a small visual change, pointing beats describing. The preview toolbar is the bar inside the preview, docked at the bottom by default, and it is available on all plans. It replaces Visual edits: it has no controls of its own for color, font or spacing. https://docs.lovable.dev/features/preview-toolbar.\n\nSelect elements: click Select elements, click the element and type the change in the project chat. When the chat is closed, type it in the toolbar and click Send. The request is standard build usage and consumes credits. The toolbar guide uses this example: Make this button the primary brand color and round the corners more.\n\nEdit text inline changes words without a prompt: a headline, a label, a typo. Click Edit text inline, click the text, type it and click Send in the toolbar. The account includes 100 free inline text edits, counted across all workspaces and projects. Each one becomes available again 24 hours after you use it. Several text changes sent together count as one. Two shared limits apply every 24 hours: 2,000 for the members of a workspace and 500 for everyone who uses Lovable from the same IP address. After 100, or after either shared limit, inline edits are treated as build usage and consume credits.",
          whatYouShouldSee:
            "The selected element already showing the change, or the new text after Send in Edit text inline.",
          tip: "Short copy goes through Edit text inline. How the element looks goes through Select elements.",
          imageDescription:
            "Preview toolbar at the bottom, with Select elements or Edit text inline active on the hero headline.",
        },
        {
          title: "Test links, filters and the mobile view",
          content:
            "Before Publish, the guide asks for a short pass. Click every button and link. Try the interactive parts: filter the menu by every category. Click the device toggle above the preview until you reach Mobile view. The guide says most people will open the link on their phone.\n\nIf something is off, say what is wrong and where. The guide's example is this:\n\nIn the menu, clicking the pastries filter shows no items. It should show the pastry items.\n\nhttps://docs.lovable.dev/introduction/getting-started.",
          whatYouShouldSee:
            "All four menu filters showing items, the links opened and the same page in Mobile view.",
          warning:
            "Publish waits for that pass. An empty filter is fixed in the chat, with the failure and the place written out.",
          imageDescription:
            "Preview in Mobile view, with the pastries filter showing items.",
        },
        {
          title: "Publish to the lovable.app URL",
          content:
            "Click Publish, at the top right of the editor, next to Share. On a narrow window the button collapses to an icon without a label. The dialog suggests an address ending in lovable.app, in the Website URL field, and runs the security checks. You can edit the address before publishing. Keep the values the dialog already shows, or adjust the address and the audience, and click Publish again. When the deploy finishes, Lovable shows the live link. Publishing to a lovable.app URL and hosting are included on every plan, with HTTPS, and the live site does not consume credits on its own. By default, editors and above can publish. https://docs.lovable.dev/features/publish and https://docs.lovable.dev/introduction/faq.\n\nThe audience row reads Visible to anyone with the link while the site is public. The row shows the audience the project already uses: you can leave it and finish. Findings do not block Publish by default. With no critical findings or warnings, the line says there are no security issues. If it lists critical findings, open them in the Security view before you share the link.\n\nThe live site is a snapshot. Later changes show in the preview immediately, and the live site updates only when you click Publish and then Publish changes. A dot on the Publish button marks changes newer than the live version. When it finishes, the dialog confirms Your website is live.",
          whatYouShouldSee:
            "The dialog with Your website is live, the Visit site button and an address ending in lovable.app. The brief note carries the date 2026-11-27 and whether the link is a demo.",
          warning:
            "The preview is not the live site. Sharing the link waits for Visit site.",
          proTip:
            "On a paid plan, Add domain in the same dialog connects a custom domain. The plan price is at https://lovable.dev/pricing.",
          imageDescription:
            "Publish dialog with Your website is live, Visit site and a lovable.app address.",
        },
      ],
      realUseCases: [
        {
          title: "A local-business site, with sample content",
          body: "The quick start example: hero, menu with filters, opening hours and location. The prompt's last line leaves out login and a database. You publish the URL and share it.",
        },
        {
          title: "An internal table with sample data",
          body: "The same guide offers this starter: an equipment table with name, owner, status and return date, plus a form to add items, with sample data and no login or database.",
        },
        {
          title: "A dashboard with sample charts",
          body: "Another starter from the guide: a subscription-business dashboard with monthly revenue, active customers and churn as charts, and a recent signups table. Sample data, no login or database.",
        },
      ],
      commonMistakes: [
        {
          title: "Sending with Chat or Plan",
          body: "On the dashboard, Chat starts a chat and does not create the project. Plan writes a plan and does not change the code. The picker has to read Build (Make changes directly).",
        },
        {
          title: "Asking for login and a database in the first prompt",
          body: "The quick start closes the prompt with No login or database yet. Login and data go in a later prompt. The built-in backend is at https://docs.lovable.dev/features/cloud.",
        },
        {
          title: "Treating the preview as the published site",
          body: "The preview updates immediately. The live site changes when you click Publish and then Publish changes. The dot on the Publish button marks unpublished changes.",
        },
        {
          title: "Expecting Next.js or attaching a repo that already exists",
          body: "The FAQ says Lovable does not let you choose Next.js. If the screen has to live in a Next repo on Vercel, the map is v0-vs-lovable-ui (/compare/v0-vs-lovable-ui). Git sync creates a new private repository; it does not connect one that already exists. https://docs.lovable.dev/integrations/github.",
        },
      ],
      conclusion:
        "The first Lovable app writes the brief down, enters on Build, pastes the prompt without login or a database, asks for one change, points in the preview, tests the filters and Mobile view, and publishes to a lovable.app URL. The preview and the live site are two moments: the second waits for Publish changes. If the question is v0 or Lovable, continue at v0-vs-lovable-ui (/compare/v0-vs-lovable-ui). Once the code is on GitHub, the catalog handoff is cursor-repo-existente (/tutorials/cursor-repo-existente).",
      nextSteps: [
        "To choose Lovable or v0 by whether the deliverable is an app from chat or UI in a Next repo on Vercel, open v0-vs-lovable-ui (/compare/v0-vs-lovable-ui).",
        "Login and data come later, in a separate prompt. The built-in backend (Cloud) is at https://docs.lovable.dev/features/cloud. Connecting a Supabase project of your own is optional: https://docs.lovable.dev/integrations/supabase.",
        "Git sync creates a new private GitHub repository: https://docs.lovable.dev/integrations/github. From that repo, the catalog flow is cursor-repo-existente (/tutorials/cursor-repo-existente).",
        "With the repo already on GitHub, a first reviewed PR is in cursor-cloud-agent-primer-pr (/tutorials/cursor-cloud-agent-primer-pr).",
        "Tool page: /tools/lovable/.",
      ],
      takeaway:
        "Four-line note → Build → prompt with no login or database → one change → preview toolbar → filters and Mobile → Publish → Publish changes when the preview no longer matches the live site.",
    },
  },
};
