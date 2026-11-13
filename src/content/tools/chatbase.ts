import { toolImage } from "@/content/media";
import type { Tool } from "@/types/content";

const slug = "chatbase";

export const chatbase: Tool = {
  id: slug,
  slug,
  name: "Chatbase",
  vendor: "Chatbase",
  officialUrl: "https://www.chatbase.co",
  category: "productivity",
  pricing: "paid",
  featured: false,
  accent: "#006BFF",
  initials: "CB",
  image: `/media/tools/${slug}/hero.jpg`,
  lastUpdated: "2026-11-13",
  difficulty: "intermediate",
  platforms: ["web", "api"],
  useTypes: ["automate"],
  tags: [
    "chatbot",
    "soporte",
    "agentes",
    "widget",
    "helpdesk",
    "whatsapp",
  ],
  alternatives: ["zapier", "chatgpt"],
  relatedTools: ["zapier", "chatgpt", "notion-ai"],
  relatedTutorials: [
    "chatgpt-gpts-cuando",
    "zapier-ai-primera-automatizacion",
    "notion-ai-primer-flujo",
  ],
  screenshots: [
    toolImage(slug, "hero", "hero", {
      es: {
        alt: "Agente de Chatbase con instrucciones, un procedimiento y el widget de chat",
        caption:
          "El agente responde con las fuentes que le das y escala a una persona cuando el procedimiento lo dice.",
        hint:
          "Hero 1600×900: chatbase.co con un agente abierto (instrucciones, un procedimiento de devolución, modelo y guardrails) y el widget de chat mostrando una respuesta con la fuente citada.",
      },
      en: {
        alt: "Chatbase agent with instructions, a procedure and the chat widget",
        caption:
          "The agent answers from the sources you give it and hands off to a person when the procedure says so.",
        hint:
          "Hero 1600×900: chatbase.co with an agent open (instructions, a return procedure, model and guardrails) and the chat widget showing an answer with the source it checked.",
      },
    }),
  ],
  copy: {
    es: {
      shortDescription:
        "Agente de soporte y ventas para la web, el correo, WhatsApp y la voz. Responde con tus fuentes y puede actuar o pasar el caso a una persona.",
      fullDescription:
        "Chatbase (chatbase.co) construye un agente de cara al cliente: soporte, ventas o guía de producto. Conectas fuentes, escribes el rol y los guardrails, y lo publicas en chat, correo, WhatsApp, Slack o teléfono. No es un chat suelto para redactar: el trabajo es que la respuesta salga de lo que la empresa ya publicó.\n\nEl ciclo que enseña el producto es construir, probar, desplegar y ajustar. Un procedimiento en lenguaje llano (pedir el pedido, mirar el plazo, confirmar) se ejecuta con acciones: consultar un pedido, abrir un ticket, disparar un flujo. Si hace falta una persona, el helpdesk deja la conversación y el contexto en la misma bandeja. El playground sirve para probar modelos y ajustes antes de salir.\n\nEncaja cuando el volumen de preguntas repetidas ya vive en un centro de ayuda y quieres un agente en el sitio o en WhatsApp, no un Zap que mueva filas. Para «cuando llegue una fila, resume y envía un correo», Zapier sigue siendo la pieza. Para un rol repetido dentro de ChatGPT, sin widget ni bandeja, mira chatgpt-gpts-cuando.",
      subcategory: "Agente de soporte y ventas",
      pricingDetails:
        "chatbase.co/pricing no publica plan gratuito. Basic cuesta 150 USD/mes (120 USD/mes facturado anual, 20 % menos) con 4.000 créditos de mensaje al mes, 500 créditos de prueba, 1 agente, 3 asientos y 40 MB de texto extraído. Business cuesta 500 USD/mes (400 USD/mes anual) con 15.000 créditos, 1.000 de prueba y 5 asientos. Basic y Business abren con una prueba de 7 días. Enterprise es precio a medida. La recarga automática sale a 40 USD por 1.000 créditos que no caducan. Quitar «Powered by Chatbase» son 99 USD/mes; un agente extra, 25 USD/mes; almacenamiento extra, 25 USD por cada 10 MB/mes. Los créditos de la suscripción se renuevan el día 1 y lo no usado no se acumula. Confirma en la página oficial.",
      bestFor: [
        "Un equipo de soporte que quiere el mismo agente en la web, WhatsApp, correo o teléfono",
        "Procedimientos con acciones: consultar un pedido, crear un ticket, pasar el caso",
        "Quien ya tiene un centro de ayuda y quiere que la respuesta cite esa fuente",
        "Probar el primer agente con la prueba de 7 días de Basic antes de abrir más canales",
      ],
      notFor: [
        "Probar un chatbot sin tarjeta: no hay plan gratuito",
        "Redactar en la wiki interna: eso es Notion AI",
        "Mover filas entre apps sin un agente de cara al cliente: Zapier o Make",
        "Un asistente de código o un teammate en tu máquina",
      ],
      pros: [
        "Sin código: fuentes, rol, guardrails y procedimientos en lenguaje llano",
        "El mismo agente sale a chat, correo, voz, WhatsApp y Slack",
        "Las acciones hacen trabajo (consulta, ticket), no solo texto",
        "Helpdesk compartido: la persona recibe la conversación y el contexto",
        "Chatbase dice que no usa los datos del cliente para entrenar modelos, en cualquier plan",
      ],
      cons: [
        "La entrada de pago es Basic a 150 USD/mes; la prueba dura 7 días",
        "Una acción puede disparar varias llamadas al modelo y multiplicar créditos",
        "Los créditos de la suscripción no se acumulan: se renuevan el día 1",
        "Basic y Business incluyen 1 agente y 40 MB de texto extraído",
        "Quitar la marca «Powered by Chatbase» es un add-on de 99 USD/mes",
      ],
      keyFeatures: [
        "Fuentes, instrucciones, guardrails y procedimientos con acciones",
        "Widget de chat y componentes interactivos, no solo texto",
        "Canales: chat, correo, voz, WhatsApp, Slack",
        "Helpdesk para el agente y el equipo en la misma conversación",
        "Playground, analítica y API; MCP en Basic",
        "Integraciones de helpdesk y CRM (Zendesk, Salesforce, Intercom, HubSpot, Slack, Shopify, Zapier, entre otras) incluidas desde Basic",
      ],
      faq: [
        {
          q: "¿Chatbase tiene plan gratuito?",
          a: "No en chatbase.co/pricing. Basic (150 USD/mes) y Business (500 USD/mes) tienen una prueba de 7 días. Enterprise se pide por demo.",
        },
        {
          q: "¿Cómo se gastan los créditos de mensaje?",
          a: "Cada llamada al modelo cuesta créditos según el modelo elegido. Si hay acciones, el agente puede hacer varias llamadas para una sola respuesta: la propia FAQ pone el ejemplo de consultar huecos de calendario y luego contestar, y eso son dos solicitudes. Los de la suscripción se renuevan el día 1 de cada mes y no se acumulan. Los de recarga automática (40 USD por 1.000) no caducan.",
        },
        {
          q: "¿Entrena modelos con las conversaciones de mis clientes?",
          a: "La FAQ oficial dice que no: no usa los datos del cliente para entrenar, reentrenar ni afinar modelos, en cualquier plan. Los datos sirven para prestar el servicio a ese cliente.",
        },
        {
          q: "¿Cuánta documentación cabe en un agente?",
          a: "Basic y Business incluyen 40 MB por agente. Es el texto extraído, no el peso del archivo. El add-on de almacenamiento suma hasta 40 MB más, en bloques de 10 MB. Por encima de eso, Enterprise.",
        },
        {
          q: "¿Me sirve en lugar de un Custom GPT o de Zapier?",
          a: "Un Custom GPT fija un rol dentro de ChatGPT; no es el widget ni la bandeja de soporte. Zapier mueve datos entre apps. Chatbase es el agente que habla con el cliente en tus canales y, si hace falta, actúa o escala.",
        },
      ],
      quickTutorial: {
        title: "Un agente con una fuente y un solo canal",
        steps: [
          "Crea el agente en chatbase.co y conecta una fuente que ya sea la respuesta oficial (centro de ayuda, docs o URLs).",
          "Escribe el rol, un procedimiento en pasos (por ejemplo una devolución) y guardrails de lo que no puede prometer ni ejecutar.",
          "Prueba en el playground tres preguntas reales, incluida una que deba pasar a una persona.",
          "Publica un solo canal (el widget de la web, WhatsApp, el correo o Slack) y comprueba que la respuesta muestra la fuente.",
          "Lee las primeras conversaciones: donde escaló mal, aprieta el procedimiento antes de abrir otro canal.",
        ],
      },
    },
    en: {
      shortDescription:
        "Support and sales agent for the site, email, WhatsApp and voice. It answers from your sources and can act or hand the case to a person.",
      fullDescription:
        "Chatbase (chatbase.co) builds a customer-facing agent: support, sales or product guidance. You connect sources, write the role and the guardrails, and publish it on chat, email, WhatsApp, Slack or phone. It is not a blank chat for drafting. The job is that the answer comes from what the company already published.\n\nThe lifecycle the product shows is build, test, deploy and tune. A plain-language procedure (ask for the order, check the window, confirm) runs with actions: look up an order, open a ticket, trigger a workflow. When a person is needed, the helpdesk keeps the conversation and the context in the same inbox. The playground is for testing models and settings before you go live.\n\nIt fits when repeated questions already live in a help center and you want an agent on the site or on WhatsApp, not a Zap that moves rows. For «when a row arrives, summarize and email it», Zapier is still the piece. For a repeated role inside ChatGPT, with no widget and no inbox, read chatgpt-gpts-cuando.",
      subcategory: "Support and sales agent",
      pricingDetails:
        "chatbase.co/pricing does not list a free plan. Basic is $150/month ($120/month billed yearly, 20% off) with 4,000 message credits a month, 500 test credits, 1 agent, 3 seats and 40 MB of extracted text. Business is $500/month ($400/month yearly) with 15,000 credits, 1,000 test credits and 5 seats. Basic and Business start with a 7-day trial. Enterprise is custom pricing. Auto-recharge is $40 per 1,000 credits that do not expire. Removing “Powered by Chatbase” is $99/month; an extra agent is $25/month; extra storage is $25 per 10 MB/month. Subscription credits renew on the 1st and unused ones do not roll over. Confirm on the official page.",
      bestFor: [
        "A support team that wants the same agent on the site, WhatsApp, email or phone",
        "Procedures with actions: look up an order, create a ticket, hand off the case",
        "Anyone who already has a help center and wants answers to cite that source",
        "Trying a first agent on Basic’s 7-day trial before opening more channels",
      ],
      notFor: [
        "Trying a chatbot with no card: there is no free plan",
        "Drafting in the internal wiki: that is Notion AI",
        "Moving rows between apps with no customer-facing agent: Zapier or Make",
        "A coding assistant or a teammate on your machine",
      ],
      pros: [
        "No code: sources, role, guardrails and plain-language procedures",
        "The same agent goes to chat, email, voice, WhatsApp and Slack",
        "Actions do work (lookup, ticket), not only text",
        "Shared helpdesk: a person gets the conversation and the context",
        "Chatbase says it does not use customer data to train models, on any plan",
      ],
      cons: [
        "Paid entry is Basic at $150/month; the trial lasts 7 days",
        "An action can trigger several model calls and multiply credits",
        "Subscription credits do not roll over: they renew on the 1st",
        "Basic and Business include 1 agent and 40 MB of extracted text",
        "Removing the “Powered by Chatbase” badge is a $99/month add-on",
      ],
      keyFeatures: [
        "Sources, instructions, guardrails and procedures with actions",
        "Chat widget and interactive components, not only text",
        "Channels: chat, email, voice, WhatsApp, Slack",
        "Helpdesk for the agent and the team in the same conversation",
        "Playground, analytics and API; MCP on Basic",
        "Helpdesk and CRM integrations (Zendesk, Salesforce, Intercom, HubSpot, Slack, Shopify, Zapier, among others) included from Basic",
      ],
      faq: [
        {
          q: "Does Chatbase have a free plan?",
          a: "Not on chatbase.co/pricing. Basic ($150/month) and Business ($500/month) include a 7-day trial. Enterprise is a demo.",
        },
        {
          q: "How do message credits get used?",
          a: "Each model call costs credits depending on the model. With actions, the agent can make several calls for one reply: the official FAQ’s example is checking calendar slots and then answering, which is two requests. Subscription credits renew on the 1st of each month and do not roll over. Auto-recharge credits ($40 per 1,000) do not expire.",
        },
        {
          q: "Does it train models on my customers’ conversations?",
          a: "The official FAQ says no: it does not use customer data to train, retrain or fine-tune models, on any plan. The data is used to deliver the service to that customer.",
        },
        {
          q: "How much documentation fits in one agent?",
          a: "Basic and Business include 40 MB per agent. That is extracted text, not the file size. The storage add-on adds up to 40 MB more, in 10 MB blocks. Above that, Enterprise.",
        },
        {
          q: "Does this replace a Custom GPT or Zapier?",
          a: "A Custom GPT fixes a role inside ChatGPT; it is not the widget or the support inbox. Zapier moves data between apps. Chatbase is the agent that talks to the customer on your channels and, when needed, acts or escalates.",
        },
      ],
      quickTutorial: {
        title: "One agent, one source, one channel",
        steps: [
          "Create the agent on chatbase.co and connect a source that is already the official answer (help center, docs or URLs).",
          "Write the role, a step-by-step procedure (a return, for example) and guardrails for what it must not promise or do.",
          "In the playground, test three real questions, including one that should go to a person.",
          "Publish a single channel (the site widget, WhatsApp, email or Slack) and check that the answer shows the source.",
          "Read the first conversations: where it escalated badly, tighten the procedure before you open another channel.",
        ],
      },
    },
  },
};
