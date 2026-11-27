import type { Prompt } from "@/types/content";

const slug = "claude-auditar-contrato";

export const claudeAuditarContrato: Prompt = {
  id: slug,
  slug,
  toolSlug: "claude",
  use: "write",
  publishedAt: "2026-11-27",
  lastUpdated: "2026-11-27",
  relatedTutorials: ["claude-analizar-pdf", "claude-briefing-documento"],
  relatedComparisons: ["claude-vs-chatgpt-escritura"],
  copy: {
    es: {
      title: "Auditar un contrato con Claude",
      metaTitle: "Prompt para auditar un contrato con Claude",
      metaDescription:
        "Prompt listo para copiar en Claude: obligaciones, plazos, cláusulas desequilibradas y huecos de un contrato, con un ejemplo de entrada y de resultado.",
      excerpt:
        "Saca obligaciones, plazos y huecos de un contrato. Sin resumen fluido y sin consejo legal.",
      purpose:
        "Sirve para leer un contrato, un anexo o una propuesta y dejar por escrito qué obliga a cada parte, qué plazos hay y qué no dice el texto. La respuesta nombra la cláusula. No te dice si debes firmar.",
      bestWith:
        "Claude en claude.ai, con el PDF o el texto pegado en un chat nuevo. Si vas a volver al mismo documento, súbelo a un proyecto. Para un PDF muy largo, pide antes el mapa por secciones: el flujo está en el tutorial de analizar un PDF.",
      prompt: `Actúa como revisor de contratos para la persona que va a firmar, no como redactor.

Documento: el que adjunto.
Parte que represento: [comprador / proveedor / empleado / cliente].
Qué necesito decidir: [firmar, negociar un punto o pedir un cambio].

Antes de opinar, devuelve solo esto:

1. Mapa breve: tipo de documento, partes y fecha, si constan.
2. Obligaciones de cada parte, con la cláusula o la sección donde aparecen.
3. Plazos, renovaciones, penalizaciones y cómo se sale del contrato.
4. Cláusulas desequilibradas o raras para la parte que represento, y por qué importan en este texto.
5. Qué no dice el documento y habría que aclarar antes de firmar.

Reglas:
- Si un dato no está en el texto, escribe [NO ESTÁ EN EL DOCUMENTO]. No lo completes.
- No des consejo legal ni digas si debo firmar.
- No resumas «en general». Cada punto nombra la cláusula o la sección.
- Cifras, nombres y fechas se copian tal cual. Si dudas, márcalo.`,
      example: {
        input: `Parte que represento: cliente.
Qué necesito decidir: si negocio la renovación automática.

Anexo de servicios (extracto)

Partes: Estudio Lumen (proveedor) y Norte Editorial (cliente). Fecha: 3 de marzo de 2026.

1. Objeto. Lumen entrega un rediseño de la web corporativa en cuatro hitos.
2. Precio. 8.400 €, en tres facturas: 40 % al firmar, 40 % al entregar el hito 3 y 20 % a la publicación.
3. Plazo. El hito 4 se entrega a los 60 días naturales desde la firma, salvo que el cliente tarde más de 5 días laborables en responder a una revisión.
4. Renovación. El contrato se prorroga por periodos de 12 meses salvo aviso por escrito con 15 días de antelación.
5. Salida. Cualquiera puede resolverlo con 30 días de preaviso. Si resuelve el cliente antes del hito 4, paga los hitos ya empezados.
6. Propiedad. Hasta el pago de la última factura, los archivos siguen siendo de Lumen.`,
        output: `1. Mapa
Anexo de servicios entre Estudio Lumen (proveedor) y Norte Editorial (cliente), 3 de marzo de 2026. Objeto: rediseño de la web en cuatro hitos.

2. Obligaciones
- Lumen: entregar el rediseño en cuatro hitos (cláusula 1) y el hito 4 a los 60 días naturales desde la firma (cláusula 3).
- Norte Editorial: pagar 8.400 € en tres facturas, 40 % / 40 % / 20 % (cláusula 2), y responder a las revisiones. La cláusula 3 no dice qué pasa si no responde: solo alarga el plazo.

3. Plazos y salida
- Entrega final: 60 días naturales desde la firma, salvo retraso del cliente de más de 5 días laborables en una revisión (cláusula 3).
- Renovación: periodos de 12 meses si nadie avisa por escrito con 15 días (cláusula 4).
- Resolución: 30 días de preaviso. Si el cliente resuelve antes del hito 4, paga los hitos ya empezados (cláusula 5). [NO ESTÁ EN EL DOCUMENTO]: qué se considera «hito empezado».

4. Para el cliente
- La renovación se activa sola y el preaviso es de 15 días (cláusula 4), más corto que el preaviso de resolución de la cláusula 5.
- Hasta la última factura, los archivos son de Lumen (cláusula 6). No hay una frase que diga cuándo pasan al cliente después de pagar.

5. Huecos
- [NO ESTÁ EN EL DOCUMENTO]: soporte después de publicar, número de rondas de revisión y qué ocurre si el hito 4 se retrasa por causa de Lumen.
- No digo si hay que firmar. Esto no es consejo legal.`,
      },
      tweaks: [
        {
          title: "PDF largo",
          body: "En el primer mensaje pide solo el mapa: sección, páginas e idea. Cuando la tabla cuadre con el índice, lanza este prompt por partes y exige la página en cada punto.",
        },
        {
          title: "Un NDA o una política interna",
          body: "Cambia la parte que representas por «quien recibe la información» y sustituye el punto 4 por: qué puedo compartir, con quién y durante cuánto tiempo.",
        },
        {
          title: "Para negociar un cambio",
          body: "Añade al final: «Cierra con una tabla: cláusula, qué me preocupa, redacción alternativa en una frase. No digas si el cambio es justo.»",
        },
      ],
    },
    en: {
      title: "Audit a contract with Claude",
      metaTitle: "Prompt to audit a contract with Claude",
      metaDescription:
        "A ready-to-copy Claude prompt for obligations, deadlines, lopsided clauses and gaps in a contract, with a concrete input and output example.",
      excerpt:
        "Pull obligations, deadlines and gaps out of a contract. No smooth summary, and no legal advice.",
      purpose:
        "Use it to read a contract, a schedule or a proposal and write down what each party owes, which deadlines exist and what the text does not say. The reply names the clause. It does not tell you whether to sign.",
      bestWith:
        "Claude on claude.ai, with the PDF or the text pasted into a new chat. If you will come back to the same document, put it in a project. For a very long PDF, ask for a section map first: that flow is in the tutorial on reading a PDF.",
      prompt: `Act as a contract reviewer for the person about to sign, not as a drafter.

Document: the one I attach.
Party I represent: [buyer / vendor / employee / client].
Decision I need to make: [sign, negotiate one point, or ask for a change].

Before you give an opinion, return only this:

1. Short map: document type, parties and date, if they are in the text.
2. Each party's obligations, with the clause or section where they appear.
3. Deadlines, renewals, penalties and how either party gets out.
4. Clauses that are lopsided or unusual for the party I represent, and why they matter in this text.
5. What the document does not say and should be clarified before signing.

Rules:
- If a fact is not in the text, write [NOT IN THE DOCUMENT]. Do not fill it in.
- Do not give legal advice and do not say whether I should sign.
- Do not summarize "in general". Every point names the clause or section.
- Copy figures, names and dates as written. If you are unsure, mark it.`,
      example: {
        input: `Party I represent: client.
Decision I need to make: whether to negotiate the auto-renewal.

Services schedule (excerpt)

Parties: Estudio Lumen (vendor) and Norte Editorial (client). Date: 3 March 2026.

1. Scope. Lumen delivers a redesign of the corporate site in four milestones.
2. Price. €8,400, in three invoices: 40% on signing, 40% when milestone 3 is delivered and 20% at launch.
3. Schedule. Milestone 4 is delivered 60 calendar days after signing, unless the client takes more than 5 business days to answer a review.
4. Renewal. The contract renews for 12-month periods unless either party gives written notice 15 days ahead.
5. Exit. Either party may end it with 30 days' notice. If the client ends it before milestone 4, they pay for milestones already started.
6. Ownership. Until the last invoice is paid, the files remain Lumen's.`,
        output: `1. Map
Services schedule between Estudio Lumen (vendor) and Norte Editorial (client), 3 March 2026. Scope: a site redesign in four milestones.

2. Obligations
- Lumen: deliver the redesign in four milestones (clause 1) and milestone 4 within 60 calendar days of signing (clause 3).
- Norte Editorial: pay €8,400 in three invoices, 40% / 40% / 20% (clause 2), and answer reviews. Clause 3 does not say what happens if the client never answers: it only extends the schedule.

3. Deadlines and exit
- Final delivery: 60 calendar days from signing, unless the client takes more than 5 business days on a review (clause 3).
- Renewal: 12-month periods if nobody gives written notice 15 days ahead (clause 4).
- Termination: 30 days' notice. If the client ends it before milestone 4, they pay for milestones already started (clause 5). [NOT IN THE DOCUMENT]: what counts as a milestone "already started".

4. For the client
- Renewal happens on its own, and the notice period is 15 days (clause 4), shorter than the 30-day termination notice in clause 5.
- Until the last invoice, the files belong to Lumen (clause 6). Nothing says when they pass to the client after payment.

5. Gaps
- [NOT IN THE DOCUMENT]: support after launch, how many review rounds, and what happens if Lumen misses milestone 4.
- I am not saying whether to sign. This is not legal advice.`,
      },
      tweaks: [
        {
          title: "A long PDF",
          body: "In the first message, ask only for the map: section, pages and the point of each part. When the table matches the contents, run this prompt in chunks and require the page on every point.",
        },
        {
          title: "An NDA or an internal policy",
          body: "Change the party you represent to \"the person who receives the information\" and replace point 4 with: what I may share, with whom, and for how long.",
        },
        {
          title: "When you want a change",
          body: "Add at the end: \"Close with a table: clause, what worries me, a one-sentence alternative. Do not say whether the change is fair.\"",
        },
      ],
    },
  },
};
