import { tutorialHero } from "@/content/media";
import type { Tutorial } from "@/types/content";

const slug = "claude-briefing-documento";

export const claudeBriefingDocumento: Tutorial = {
  id: slug,
  slug,
  category: "text",
  level: "beginner",
  estimatedTime: 25,
  publishedAt: "2026-09-21",
  lastUpdated: "2026-09-21",
  toolsUsed: ["claude", "perplexity"],
  relatedTutorials: [
    "claude-escritura-larga",
    "claude-projects-primer-flujo",
    "elegir-modelo-texto",
    "chatgpt-primeros-pasos",
  ],
  tags: ["claude", "briefing", "documento-largo", "outline", "escritura"],
  hero: tutorialHero(slug, {
    es: {
      alt: "Claude con un brief de documento largo y un esquema de secciones",
      caption: "El brief va antes del borrador. El esquema se aprueba antes de escribir.",
      hint: "Hero: Claude con un brief a la izquierda (objetivo, audiencia, tono) y un outline de secciones a la derecha, sin prosa todavía.",
    },
    en: {
      alt: "Claude with a long-document brief and a section outline",
      caption: "The brief comes before the draft. The outline is approved before writing.",
      hint: "Hero: Claude with a brief on the left (goal, audience, tone) and a section outline on the right, no prose yet.",
    },
  }),
  copy: {
    es: {
      title: "Cómo briefar a Claude para un documento largo (2026)",
      metaTitle: "Briefar a Claude para un documento largo en 2026",
      metaDescription:
        "Recoge el contexto fuera de Claude, envía un briefing con rol y outline, adjunta fuentes con reglas de cita y redacta sección por sección sin inventar.",
      excerpt:
        "No pidas «escribe un informe de 20 páginas». Primero el brief, luego el esquema aprobado, después una sección por mensaje.",
      intro:
        "Un informe, una propuesta o un whitepaper largo se desmorona cuando le pides a Claude que escriba todo de golpe. El modelo rellena huecos con la misma seguridad que los párrafos buenos. Este flujo de 25 minutos te deja un briefing que sobrevive al hilo: objetivo, audiencia, tono, fuentes y prohibiciones — antes de que salga la primera frase.",
      problem:
        "Sin brief, Claude adivina la audiencia, inventa cifras y mezcla registros. Un «escribe un informe sobre X» produce texto fluido que suena bien y no puedes publicar sin revisar cada párrafo.",
      whatYouWillLearn: [
        "Recoger inputs fuera del chat: objetivo, audiencia, longitud y lo que no se puede inventar",
        "Abrir Claude con un mensaje de briefing (rol + entregable + petición de outline)",
        "Aprobar o corregir el esquema antes de redactar",
        "Adjuntar fuentes con reglas de cita claras",
        "Redactar una sección por mensaje con el brief visible",
        "Pasar una revisión de consistencia y un control de honestidad",
      ],
      prerequisites: [
        "Cuenta en claude.ai (plan Free sirve para un borrador mediano)",
        "Un caso real: informe, propuesta, whitepaper o borrador de newsletter en serie",
        "Notas o documentos fuente (aunque sean desordenados)",
        "Un párrafo de muestra de tono, si lo tienes",
        "25 minutos",
      ],
      steps: [
        {
          title: "Recoge los inputs fuera de Claude",
          content:
            "Antes de abrir el chat, escribe en un bloc (Notion, doc o notas): objetivo del documento («convencer al comité de invertir en Q3»), audiencia («CFO sin tiempo, conoce el sector»), longitud aproximada («8–10 páginas» o «3.000 palabras»), hechos obligatorios (cifras, nombres, fechas que no se negocian) y un párrafo de tono de muestra si lo tienes. Añade una lista de «no inventar»: cifras sin fuente, nombres de clientes, citas no verificadas. Este bloc es tu brief maestro; no lo improvises en el primer mensaje.",
          whatYouShouldSee:
            "Un documento de notas con objetivo, audiencia, longitud, hechos obligatorios, muestra de tono y lista de prohibiciones.",
          tip: "Si no tienes tono de muestra, pega un email o un párrafo de un doc anterior que sí enviarías.",
          imageDescription:
            "Bloc de notas con secciones: Objetivo, Audiencia, Longitud, Hechos obligatorios, Tono (párrafo de muestra), No inventar.",
        },
        {
          title: "Abre Claude con un briefing, no con «escribe el informe»",
          content:
            "Entra en https://claude.ai y abre un chat nuevo. Primer mensaje: declara el rol («Eres redactor de propuestas B2B»), el entregable («Propuesta de consultoría para Cliente X, 8 páginas») y pide solo el esquema: «Con el contexto que te doy, propón un outline de secciones con una frase de propósito por sección. No redactes prosa todavía.» Pega el brief del paso 1 en el mismo mensaje o en el siguiente. No pidas el documento completo en el primer turno.",
          whatYouShouldSee:
            "Un outline con secciones numeradas y una frase de propósito por bloque. Sin párrafos de borrador todavía.",
          warning:
            "«Escribe el informe completo» en el primer mensaje es la vía rápida hacia cifras inventadas y un tono genérico.",
          imageDescription:
            "Chat de Claude con un mensaje de briefing (rol, entregable, petición de outline) y una respuesta con esquema de secciones, sin prosa.",
        },
        {
          title: "Aprueba o corrige el outline antes de redactar",
          content:
            "Lee el esquema con ojos de editor, no de lector. ¿Falta una sección que el comité espera? ¿Hay un bloque de relleno? Responde: «Quita la sección 4, añade una de riesgos con 3 viñetas máximo, fusiona 2 y 3.» Cuando el outline refleje tu brief, confirma: «Outline aprobado. No redactes hasta que te pida sección por sección.» Este paso evita reescribir 20 páginas porque el mapa estaba mal.",
          whatYouShouldSee:
            "Un outline revisado que coincide con objetivo y audiencia. Confirmación explícita de que no se redacta aún.",
          tip: "Si una sección te parece vaga, pide «una frase de tesis por sección» antes de aprobar.",
          imageDescription:
            "Hilo con correcciones al outline (sección eliminada, otra añadida) y un mensaje final «Outline aprobado».",
        },
        {
          title: "Adjunta o pega fuentes con reglas de cita",
          content:
            "Sube PDFs, docs o pega extractos con etiquetas claras: «FUENTE A: informe interno Q2», «FUENTE B: notas de entrevista». En el mismo mensaje define las reglas: «Solo usa cifras que aparezcan en las fuentes. Si falta un dato, escribe [FALTA]. Cita la fuente entre paréntesis: (Fuente A, p.3).» Si un dato no está en ningún archivo, no lo pidas en el borrador — búscalo antes con Perplexity y abre el enlace.",
          whatYouShouldSee:
            "Archivos adjuntos o bloques etiquetados en el chat. Reglas de cita visibles en el hilo.",
          warning:
            "Pegar 40 páginas sin etiquetas hace que Claude mezcle hechos y suposiciones con la misma confianza.",
          imageDescription:
            "Panel de Claude con archivos adjuntos nombrados y un mensaje con reglas de cita y etiquetas FUENTE A / B.",
        },
        {
          title: "Redacta una sección por mensaje con el brief fijado",
          content:
            "Pide: «Redacta solo la sección 1 según el outline aprobado. Respeta tono de muestra y reglas de fuentes. Máximo 400 palabras.» Revisa esa sección antes de pasar a la 2. Si usas Claude Projects, el brief y las fuentes viven en el proyecto; si es chat suelto, repite las prohibiciones clave al inicio de cada sección o fija el brief en el primer mensaje del hilo. No pidas «ahora el resto del documento».",
          whatYouShouldSee:
            "Un bloque de texto etiquetado como Sección 1. El resto del documento no se ha generado.",
          tip: "Si una sección sale larga, acota: «Recorta a 300 palabras sin quitar la cifra de Fuente A.»",
          imageDescription:
            "Respuesta de Claude con solo la Sección 1 redactada; el outline visible arriba en el hilo.",
        },
        {
          title: "Pasa una revisión de consistencia contra el brief",
          content:
            "Cuando tengas todas las secciones, pega el brief original y pide: «Compara el borrador con este brief. Lista: términos inconsistentes, cambios de tono, secciones que no cumplen el objetivo para la audiencia declarada.» Corrige los puntos uno a uno — no aceptes un «todo correcto» sin mirar. Unifica nombres de producto, siglas y registro (tú vs usted, formal vs directo).",
          whatYouShouldSee:
            "Una lista concreta de inconsistencias (términos, tono, secciones) y correcciones aplicadas sección por sección.",
          warning:
            "Saltarte esta pasada deja un doc con «solución» en la sección 2 y «producto» en la 5 sin que nadie lo note hasta la presentación.",
          imageDescription:
            "Lista de inconsistencias (términos, tono) junto al brief original y fragmentos del borrador marcados.",
        },
        {
          title: "Control de honestidad: cifras y afirmaciones sin fuente",
          content:
            "Último mensaje: «Lista todas las cifras, nombres propios y afirmaciones que no aparecen en las fuentes adjuntas.» Borra o sustituye cada ítem. Si necesitabas un dato nuevo, tráelo de una fuente que hayas abierto — no de la memoria del modelo. Este paso es el cierre; sin él, el documento no es publicable.",
          whatYouShouldSee:
            "Una lista de afirmaciones sin respaldo. El texto final ya no las incluye, o las has firmado con fuente verificada.",
          proTip:
            "Una pasada solo de cifras y fechas al final ahorra vergüenzas en una sala de comité.",
          imageDescription:
            "Lista de cifras y afirmaciones sin fuente junto al documento final depurado.",
        },
      ],
      realUseCases: [
        {
          title: "Propuesta comercial de 10 páginas",
          body: "Brief con audiencia (comprador técnico), pricing real en fuentes y outline aprobado antes del primer párrafo.",
        },
        {
          title: "Whitepaper interno",
          body: "Fuentes etiquetadas, sección metodología redactada solo cuando las notas de campo están adjuntas.",
        },
        {
          title: "Borrador de newsletter en serie (3 envíos)",
          body: "Un brief por envío con tono de muestra del envío anterior. Outline de la serie antes de redactar el primero.",
        },
      ],
      commonMistakes: [
        {
          title: "Pedir el documento completo en el primer mensaje",
          body: "Claude rellena huecos con confianza. El brief y el outline existen para evitarlo.",
        },
        {
          title: "Brief vago («sé profesional»)",
          body: "Sin audiencia y sin muestra de tono, el resultado es brochure genérico.",
        },
        {
          title: "Fuentes sin reglas de cita",
          body: "Mezcla hechos verificados e inventados. Etiqueta y prohíbe explícitamente.",
        },
        {
          title: "Saltarse el control de honestidad",
          body: "Una cifra inventada en la página 7 invalida el informe entero.",
        },
      ],
      conclusion:
        "Briefar a Claude no es perder tiempo: es lo que separa un borrador publicable de texto que suena bien y no aguanta preguntas. Recoge inputs fuera del chat, pide outline antes de prosa, redacta por secciones y cierra con consistencia y honestidad. El documento largo sale en bloques controlables, no en un volcado de 20 páginas.",
      nextSteps: [
        "Si el trabajo se repite cada mes, mueve el brief a un Claude Project con instrucciones y archivos fijos.",
        "Cuando el borrador exista, usa el método de edición por secciones para pulir voz sin aplanar el doc.",
        "Si te falta elegir modelo para el caso, revisa el tutorial de elegir modelo de texto.",
      ],
      takeaway:
        "Inputs fuera → briefing + outline aprobado → fuentes con reglas → una sección → consistencia → honestidad.",
    },
    en: {
      title: "How to brief Claude for a long document (2026)",
      metaTitle: "Brief Claude for a long document in 2026",
      metaDescription:
        "Gather context offline, send a briefing with role and outline, attach sources with citation rules and draft section by section without inventing.",
      excerpt:
        "Do not ask for «write a 20-page report». Brief first, approved outline second, one section per message after that.",
      intro:
        "A report, proposal or long whitepaper falls apart when you ask Claude to write it all at once. The model fills gaps with the same confidence as good paragraphs. This 25-minute flow leaves you a briefing that survives the thread: goal, audience, tone, sources and bans — before the first sentence appears.",
      problem:
        "Without a brief, Claude guesses the audience, invents figures and mixes registers. A «write a report on X» produces fluent text that sounds fine and is not publishable without checking every paragraph.",
      whatYouWillLearn: [
        "Gather inputs outside the chat: goal, audience, length and what must not be invented",
        "Open Claude with a briefing message (role + deliverable + outline request)",
        "Approve or fix the outline before drafting",
        "Attach sources with clear citation rules",
        "Draft one section per message with the brief visible",
        "Run a consistency pass and an honesty check",
      ],
      prerequisites: [
        "An account on claude.ai (the Free plan is enough for a medium draft)",
        "A real case: report, proposal, whitepaper or newsletter-series draft",
        "Source notes or documents (even messy ones)",
        "A tone sample paragraph, if you have one",
        "25 minutes",
      ],
      steps: [
        {
          title: "Gather inputs outside Claude",
          content:
            "Before opening the chat, write in a notes doc: document goal («convince the committee to invest in Q3»), audience («CFO with no time, knows the sector»), approximate length («8–10 pages» or «3,000 words»), must-include facts (figures, names, dates that are non-negotiable) and a tone sample paragraph if you have one. Add a «do not invent» list: unsourced figures, client names, unverified quotes. This doc is your master brief; do not improvise it in the first message.",
          whatYouShouldSee:
            "A notes document with goal, audience, length, must-include facts, tone sample and a ban list.",
          tip: "If you lack a tone sample, paste an email or paragraph from a past doc you would actually send.",
          imageDescription:
            "Notes doc with sections: Goal, Audience, Length, Must-include facts, Tone (sample paragraph), Do not invent.",
        },
        {
          title: "Open Claude with a briefing, not «write the report»",
          content:
            "Go to https://claude.ai and open a new chat. First message: declare the role («You are a B2B proposal writer»), the deliverable («Consulting proposal for Client X, 8 pages») and ask for the outline only: «Given the context below, propose a section outline with one purpose sentence per section. Do not draft prose yet.» Paste the step-1 brief in the same or next message. Do not ask for the full document on turn one.",
          whatYouShouldSee:
            "An outline with numbered sections and one purpose sentence per block. No draft paragraphs yet.",
          warning:
            "«Write the full report» in the first message is the fast path to invented figures and generic tone.",
          imageDescription:
            "Claude chat with a briefing message (role, deliverable, outline request) and a section-outline reply, no prose.",
        },
        {
          title: "Approve or fix the outline before drafting",
          content:
            "Read the outline with an editor’s eye, not a reader’s. Is a section missing that the committee expects? Is there filler? Reply: «Drop section 4, add a risks section with max 3 bullets, merge 2 and 3.» When the outline matches your brief, confirm: «Outline approved. Do not draft until I ask section by section.» This step avoids rewriting 20 pages because the map was wrong.",
          whatYouShouldSee:
            "A revised outline that matches goal and audience. Explicit confirmation that drafting has not started.",
          tip: "If a section feels vague, ask for «one thesis sentence per section» before approving.",
          imageDescription:
            "Thread with outline edits (section removed, another added) and a final «Outline approved» message.",
        },
        {
          title: "Attach or paste sources with citation rules",
          content:
            "Upload PDFs, docs or paste extracts with clear labels: «SOURCE A: internal Q2 report», «SOURCE B: interview notes». In the same message set the rules: «Only use figures that appear in the sources. If data is missing, write [MISSING]. Cite the source in parentheses: (Source A, p.3).» If a fact is not in any file, do not ask for it in the draft — find it first with Perplexity and open the link.",
          whatYouShouldSee:
            "Attached files or labeled blocks in the chat. Citation rules visible in the thread.",
          warning:
            "Pasting 40 pages with no labels makes Claude mix facts and guesses with equal confidence.",
          imageDescription:
            "Claude panel with named attached files and a message with citation rules and SOURCE A / B labels.",
        },
        {
          title: "Draft one section per message with the brief pinned",
          content:
            "Ask: «Draft section 1 only per the approved outline. Match the tone sample and source rules. Max 400 words.» Review that section before moving to 2. If you use Claude Projects, the brief and sources live in the project; in a loose chat, repeat key bans at the start of each section or pin the brief in the first message. Do not ask for «now the rest of the document».",
          whatYouShouldSee:
            "A text block labeled Section 1. The rest of the document has not been generated.",
          tip: "If a section runs long, tighten: «Cut to 300 words without dropping the figure from Source A.»",
          imageDescription:
            "Claude reply with only Section 1 drafted; the outline visible above in the thread.",
        },
        {
          title: "Run a consistency pass against the brief",
          content:
            "When all sections exist, paste the original brief and ask: «Compare the draft to this brief. List: inconsistent terms, tone shifts, sections that miss the goal for the stated audience.» Fix items one by one — do not accept an «all good» without looking. Unify product names, acronyms and register (informal vs formal).",
          whatYouShouldSee:
            "A concrete list of inconsistencies (terms, tone, sections) and fixes applied section by section.",
          warning:
            "Skipping this pass leaves «solution» in section 2 and «product» in section 5 until someone notices in the meeting.",
          imageDescription:
            "List of inconsistencies (terms, tone) next to the original brief and marked draft fragments.",
        },
        {
          title: "Honesty check: figures and claims without a source",
          content:
            "Final message: «List every figure, proper name and claim that does not appear in the attached sources.» Delete or replace each item. If you needed a new fact, bring it from a source you opened — not from the model’s memory. This step is the close; without it the document is not publishable.",
          whatYouShouldSee:
            "A list of unsupported claims. The final text no longer includes them, or you signed them with a verified source.",
          proTip:
            "A last pass on figures and dates only saves embarrassment in a committee room.",
          imageDescription:
            "List of unsourced figures and claims next to the cleaned final document.",
        },
      ],
      realUseCases: [
        {
          title: "10-page commercial proposal",
          body: "Brief with audience (technical buyer), real pricing in sources and outline approved before the first paragraph.",
        },
        {
          title: "Internal whitepaper",
          body: "Labeled sources; methodology section drafted only when field notes are attached.",
        },
        {
          title: "Newsletter-series draft (3 sends)",
          body: "One brief per send with tone sample from the previous issue. Series outline before drafting the first.",
        },
      ],
      commonMistakes: [
        {
          title: "Asking for the full document in the first message",
          body: "Claude fills gaps with confidence. The brief and outline exist to stop that.",
        },
        {
          title: "Vague brief («be professional»)",
          body: "Without audience and tone sample, the result is generic brochure.",
        },
        {
          title: "Sources without citation rules",
          body: "Mixes verified facts and inventions. Label and ban explicitly.",
        },
        {
          title: "Skipping the honesty check",
          body: "One invented figure on page 7 invalidates the whole report.",
        },
      ],
      conclusion:
        "Briefing Claude is not wasted time: it is what separates a publishable draft from text that sounds good and does not survive questions. Gather inputs outside the chat, ask for an outline before prose, draft by sections and close with consistency and honesty. The long document comes out in controllable blocks, not a 20-page dump.",
      nextSteps: [
        "If the job repeats monthly, move the brief into a Claude Project with fixed instructions and files.",
        "When the draft exists, use the section-by-section editing method to polish voice without flattening the doc.",
        "If you still need to pick a model for the case, see the choose a text model tutorial.",
      ],
      takeaway:
        "Inputs offline → briefing + approved outline → sources with rules → one section → consistency → honesty.",
    },
  },
};
