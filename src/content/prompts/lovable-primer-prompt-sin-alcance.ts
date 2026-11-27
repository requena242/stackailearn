import type { Prompt } from "@/types/content";

const slug = "lovable-primer-prompt-sin-alcance";

export const lovablePrimerPromptSinAlcance: Prompt = {
  id: slug,
  slug,
  toolSlug: "lovable",
  use: "create",
  publishedAt: "2026-11-27",
  lastUpdated: "2026-11-27",
  relatedTutorials: ["lovable-primera-app"],
  relatedComparisons: ["v0-vs-lovable-ui"],
  copy: {
    es: {
      title: "El primer prompt de una web en Lovable",
      metaTitle: "Prompt para la primera versión de una web en Lovable",
      metaDescription:
        "Prompt listo para copiar en Lovable: una primera versión con las pantallas justas, sin login ni base de datos. Incluye un ejemplo de entrada y de resultado.",
      excerpt:
        "Una preview de una o dos pantallas. Login, base de datos y admin se quedan fuera del primer mensaje.",
      purpose:
        "Sirve para encargar la primera versión clicable de una web o una app pequeña sin que el primer mensaje arrastre cuentas, pagos y un panel. Lo que no nombras, no se construye.",
      bestWith:
        "Lovable, en un proyecto nuevo, al empezar a construir. La preview sirve para mirar y pedir un cambio. Publicar es otro paso: no lo pidas en este mensaje. Si la pieza es una landing de campaña y luego quieres el código en tu Next, mira la comparativa con v0.",
      prompt: `Construye la primera versión de [nombre]. Nada más.

Qué es: [una frase].
Quién la usa: [un tipo de persona].
Pantallas en esta versión: [1 o 2, con nombre].
En cada pantalla, solo estos bloques: [lista corta].

Fuera de esta versión (no lo construyas):
- login y cuentas
- base de datos y backend
- pagos
- panel de admin
- más páginas de las que he nombrado

Datos: usa de 4 a 6 ejemplos escritos debajo, no un CMS.
Interacción: [un filtro, un formulario que no envía a ningún sitio, o la vista en el móvil].
Estilo: [claro u oscuro], tipografía sobria, sin ilustraciones de stock.

Al terminar, dime qué has dejado fuera a propósito.

Ejemplos:
[4 o 6 líneas, con los campos que la pantalla tiene que enseñar]`,
      example: {
        input: `Construye la primera versión de Agenda de patio. Nada más.

Qué es: una lista de talleres presenciales de un solo estudio.
Quién la usa: alguien que quiere apuntarse y aún no tiene cuenta.
Pantallas en esta versión: Lista y Ficha.
En la Lista, solo: nombre, barrio, día y un filtro por barrio.
En la Ficha, solo: nombre, barrio, día, descripción de dos líneas y un botón «Quiero plaza» que no envía el formulario.

Fuera de esta versión (no lo construyas):
- login y cuentas
- base de datos y backend
- pagos
- panel de admin
- más páginas de las que he nombrado

Datos: estos seis, no un CMS.
Interacción: el filtro por barrio y el botón de la ficha, que muestra «Apuntado en local» y no llama a ningún servidor.
Estilo: claro, tipografía sobria, sin ilustraciones de stock.

Al terminar, dime qué has dejado fuera a propósito.

Ejemplos:
- Cerámica, Malasaña, martes 19:00, torno para quien no ha tocado el barro
- Risografía, Lavapiés, jueves 18:30, un cartel de un color
- Costura, Chamberí, sábado 11:00, zurcir una prenda que ya tienes
- Foto analógica, Tetuán, miércoles 20:00, revelar un carrete en casa
- Escritura, Retiro, lunes 19:30, una página sobre un objeto
- Dibujo, Arganzuela, domingo 12:00, un bodegón con lápiz`,
        output: `Preview con dos pantallas.

Lista: los seis talleres, el barrio y el día, y un filtro que deja solo un barrio. No hay menú a otras rutas.

Ficha: nombre, barrio, día, las dos líneas y el botón. Al pulsarlo, el texto pasa a «Apuntado en local». No hay red.

He dejado fuera, a propósito: login, base de datos, pagos, panel de admin, blog y cualquier página que no sea Lista o Ficha.

No está publicado. La preview es para mirar esta versión.`,
      },
      tweaks: [
        {
          title: "Una landing, no una app",
          body: "Sustituye «pantallas» por secciones de una sola página y añade: «Sin menú a otras rutas». El botón no abre un segundo proyecto.",
        },
        {
          title: "Ya tienes una captura",
          body: "Adjunta la imagen y añade: «Replica esta estructura. No copies el estilo de otra marca.» El resto de exclusiones se queda.",
        },
        {
          title: "La segunda vuelta",
          body: "No reescribas el prompt entero. Un mensaje: «Sube el filtro encima de la lista. No toques la ficha ni añadas páginas.»",
        },
      ],
    },
    en: {
      title: "The first Lovable prompt for a site, without scope creep",
      metaTitle: "Prompt for the first version of a site in Lovable",
      metaDescription:
        "A ready-to-copy Lovable prompt: a first version with only the screens you named, and no login or database. Includes an input and output example.",
      excerpt:
        "A preview of one or two screens. Login, a database and an admin panel stay out of the first message.",
      purpose:
        "Use it to ask for the first clickable version of a site or a small app without the first message dragging in accounts, payments and a dashboard. What you do not name does not get built.",
      bestWith:
        "Lovable, in a new project, when you start building. The preview is for looking and for one change. Publishing is a later step: do not ask for it in this message. If the piece is a campaign landing page and you want the code in your own Next app afterwards, read the comparison with v0.",
      prompt: `Build the first version of [name]. Nothing else.

What it is: [one sentence].
Who uses it: [one kind of person].
Screens in this version: [1 or 2, with names].
On each screen, only these blocks: [a short list].

Out of this version (do not build them):
- login and accounts
- a database and a backend
- payments
- an admin panel
- any page I have not named

Data: use 4 to 6 examples written below, not a CMS.
Interaction: [a filter, a form that does not submit anywhere, or the mobile view].
Style: [light or dark], plain type, no stock illustrations.

When you finish, tell me what you left out on purpose.

Examples:
[4 or 6 lines, with the fields the screen has to show]`,
      example: {
        input: `Build the first version of Patio schedule. Nothing else.

What it is: a list of in-person workshops from a single studio.
Who uses it: someone who wants a seat and does not have an account yet.
Screens in this version: List and Detail.
On the List, only: name, neighborhood, day and a filter by neighborhood.
On the Detail, only: name, neighborhood, day, a two-line description and a "Save me a seat" button that does not submit the form.

Out of this version (do not build them):
- login and accounts
- a database and a backend
- payments
- an admin panel
- any page I have not named

Data: these six, not a CMS.
Interaction: the neighborhood filter, and the detail button, which shows "Saved on this device" and calls no server.
Style: light, plain type, no stock illustrations.

When you finish, tell me what you left out on purpose.

Examples:
- Ceramics, Malasaña, Tuesday 19:00, a wheel for someone who has not touched clay
- Risograph, Lavapiés, Thursday 18:30, a poster in one color
- Mending, Chamberí, Saturday 11:00, repair a garment you already own
- Film photo, Tetuán, Wednesday 20:00, develop a roll at home
- Writing, Retiro, Monday 19:30, one page about an object
- Drawing, Arganzuela, Sunday 12:00, a still life in pencil`,
        output: `Preview with two screens.

List: the six workshops, the neighborhood and the day, and a filter that keeps a single neighborhood. No menu to other routes.

Detail: name, neighborhood, day, the two lines and the button. On click, the label becomes "Saved on this device". No network.

Left out on purpose: login, a database, payments, an admin panel, a blog and any page that is not List or Detail.

Not published. The preview is for looking at this version.`,
      },
      tweaks: [
        {
          title: "A landing page, not an app",
          body: "Replace \"screens\" with sections of a single page and add: \"No menu to other routes.\" The button does not open a second project.",
        },
        {
          title: "You already have a screenshot",
          body: "Attach the image and add: \"Match this structure. Do not copy another brand's style.\" The rest of the exclusions stay.",
        },
        {
          title: "The second pass",
          body: "Do not rewrite the whole prompt. One message: \"Move the filter above the list. Do not touch the detail page and do not add pages.\"",
        },
      ],
    },
  },
};
