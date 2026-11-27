import type { Prompt } from "@/types/content";

const slug = "perplexity-investigar-competidor";

export const perplexityInvestigarCompetidor: Prompt = {
  id: slug,
  slug,
  toolSlug: "perplexity",
  use: "research",
  publishedAt: "2026-11-27",
  lastUpdated: "2026-11-27",
  relatedTutorials: [
    "perplexity-investigacion-con-fuentes",
    "perplexity-preparar-reunion",
  ],
  relatedComparisons: ["perplexity-vs-chatgpt-busqueda"],
  copy: {
    es: {
      title: "Investigar un competidor con fuentes en Perplexity",
      metaTitle: "Prompt para investigar un competidor en Perplexity",
      metaDescription:
        "Prompt listo para copiar en Perplexity: mapa de un competidor con hechos, estimaciones y fuentes fechadas. Incluye un ejemplo de entrada y de resultado.",
      excerpt:
        "Un mapa con citas de un competidor o un mercado. El informe lo escribes tú, fuera del chat.",
      purpose:
        "Sirve para acotar qué hace un competidor, cómo cobra y qué ha movido hace poco, con una fuente por afirmación. La respuesta es el mapa. No es el texto que pegas en el informe.",
      bestWith:
        "Perplexity, en un hilo nuevo. Si la pregunta es estrecha, limita dominios o usa el foco que ya tengas. Abre tú las fuentes antes de citarlas. Para redactar cuando los hechos ya están comprobados, pasa a ChatGPT o a Claude.",
      prompt: `Investiga a [competidor o mercado] para [audiencia] con fecha de corte [hoy].

Necesito decidir: [una frase: entrar, posicionar o no hacer nada].

Devuelve solo:
1. Qué hace y a quién se dirige, con una fuente por afirmación.
2. Cómo cobra (plan, precio público o «no publicado»), con enlace.
3. Dos movimientos recientes que puedas fechar (lanzamiento, cambio de la web, contratación o nota de la propia empresa).
4. Huecos: qué no has podido contrastar.

Reglas:
- Separa cada punto en Hecho, Estimación u Opinión.
- Cada hecho lleva título de la fuente, autor o sitio, fecha y URL.
- No uses listados «top 10» ni blogs de afiliados como fuente principal.
- Si no hay fecha, no lo presentes como un movimiento reciente.
- No redactes el informe final. Esto es el mapa.`,
      example: {
        input: `Competidor: Taller Norte (herramienta de reservas para talleres presenciales).
Audiencia: el equipo de producto de una app de clases sueltas.
Decisión: si el hueco está en estudios pequeños que hoy reservan por correo.
Fecha de corte: 27 de noviembre de 2026.`,
        output: `1. Qué hace
Hecho: Taller Norte se presenta como agenda y reservas para talleres presenciales. Fuente: página de inicio, Taller Norte, vista el 27 de noviembre de 2026, https://tallernorte.example/
Hecho: el texto de esa página habla de estudios y de profesores, no de cadenas. Fuente: la misma página.
Estimación: encaja con equipos pequeños. Eso lo deduzco del texto; la página no dice un tamaño de cliente.

2. Cómo cobra
Hecho: hay una página de precios con dos planes con nombre, Estudio y Escuela. Fuente: Precios, Taller Norte, 27 de noviembre de 2026, https://tallernorte.example/precios
[NO CONTRASTADO]: no copies aquí una cifra. Ábrela en esa URL y anótala tú. Si la página no muestra número, escribe «no publicado».

3. Movimientos fechados
Hecho: una nota del propio blog, «Reservas sin crear cuenta», lleva fecha 2 de septiembre de 2026. Fuente: blog de Taller Norte, 2 de septiembre de 2026, https://tallernorte.example/blog/reservas-sin-cuenta
Hecho: la página de empleo ofrece un puesto de soporte y no trae fecha. No lo cuento como movimiento reciente.

4. Huecos
No hay fuente fechada, fuera de su web, que diga con quién compite.
No hay una página que explique si el correo de confirmación se puede quitar.
Opinión: ninguna. El mapa no recomienda entrar ni quedarse fuera.

El informe, si hace falta, se escribe fuera de este chat, con las URLs abiertas.`,
      },
      tweaks: [
        {
          title: "Un mercado, no una marca",
          body: "Sustituye el nombre por la categoría («software de reservas para talleres en España») y pide cinco actores con una fuente cada uno, no una ficha larga de uno solo.",
        },
        {
          title: "Para una reunión de esta semana",
          body: "Añade la decisión y lo que hoy no se cierra, como en el tutorial de preparar una reunión. Pide tres preguntas abiertas, cada una con su cita.",
        },
        {
          title: "Cuando ya tienes los PDF",
          body: "Para citar el pasaje de un documento que tú subes, este prompt se queda corto. Ese tramo es de NotebookLM, no de una búsqueda.",
        },
      ],
    },
    en: {
      title: "Research a competitor with sources in Perplexity",
      metaTitle: "Prompt to research a competitor in Perplexity",
      metaDescription:
        "A ready-to-copy Perplexity prompt: a competitor map with facts, estimates and dated sources. Includes an input and output example.",
      excerpt:
        "A cited map of a competitor or a market. You write the brief outside the chat.",
      purpose:
        "Use it to pin down what a competitor does, how they charge and what they have shipped recently, with one source per claim. The reply is the map. It is not the paragraph you paste into the brief.",
      bestWith:
        "Perplexity, in a new thread. If the question is narrow, limit domains or use the focus you already have. Open the sources yourself before you cite them. When the facts are checked and you need prose, move to ChatGPT or Claude.",
      prompt: `Research [competitor or market] for [audience] with a cutoff date of [today].

I need to decide: [one sentence: enter, position against them, or do nothing].

Return only:
1. What they do and who it is for, with one source per claim.
2. How they charge (plan, public price, or "not published"), with a link.
3. Two recent moves you can date (a launch, a change on their site, a job post, or a note from the company itself).
4. Gaps: what you could not check.

Rules:
- Label each point Fact, Estimate or Opinion.
- Every fact includes the source title, the author or site, the date and the URL.
- Do not use "top 10" roundups or affiliate blogs as a primary source.
- If there is no date, do not present it as a recent move.
- Do not write the final brief. This is the map.`,
      example: {
        input: `Competitor: Taller Norte (a booking tool for in-person workshops).
Audience: the product team of an app for drop-in classes.
Decision: whether the gap is small studios that still book by email.
Cutoff date: 27 November 2026.`,
        output: `1. What they do
Fact: Taller Norte describes itself as a calendar and booking tool for in-person workshops. Source: homepage, Taller Norte, viewed 27 November 2026, https://tallernorte.example/
Fact: that page talks about studios and teachers, not chains. Source: the same page.
Estimate: it fits small teams. I am inferring that from the copy; the page does not state a customer size.

2. How they charge
Fact: there is a pricing page with two named plans, Studio and School. Source: Pricing, Taller Norte, 27 November 2026, https://tallernorte.example/pricing
[NOT CHECKED]: do not copy a figure into this map. Open that URL and write the number down yourself. If the page shows no number, write "not published".

3. Dated moves
Fact: a post on their own blog, "Bookings without an account", is dated 2 September 2026. Source: Taller Norte blog, 2 September 2026, https://tallernorte.example/blog/bookings-without-an-account
Fact: the jobs page lists a support role and has no date. I am not counting it as a recent move.

4. Gaps
No dated source outside their own site says who they compete with.
No page explains whether the confirmation email can be turned off.
Opinion: none. The map does not recommend entering or staying out.

If you need a brief, write it outside this chat, with the URLs open.`,
      },
      tweaks: [
        {
          title: "A market, not one brand",
          body: "Replace the name with the category (\"booking software for workshops in Spain\") and ask for five players with one source each, not a long profile of a single company.",
        },
        {
          title: "For a meeting this week",
          body: "Add the decision and what you will not close today, as in the tutorial on preparing a meeting. Ask for three open questions, each with its citation.",
        },
        {
          title: "When you already have the PDFs",
          body: "To cite a passage in a document you uploaded, this prompt is the wrong tool. That job belongs to NotebookLM, not to a web search.",
        },
      ],
    },
  },
};
