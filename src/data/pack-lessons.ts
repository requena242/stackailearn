import type { Localized } from "@/types/content";
import type { PackFileId } from "./pack";

export type PackLesson = {
  day: number;
  title: string;
  summary: string;
  minutes: number;
  goal: string;
  context: string;
  steps: string[];
  example: string;
  mistakes: string[];
  done: string;
  fileId?: PackFileId;
};

export const packLessons: Localized<PackLesson[]> = {
  es: [
    {
      day: 1,
      title: "Cuenta y workspace",
      summary: "Cursor + Grok Bot listos. Un workspace, no diez pestañas.",
      minutes: 35,
      goal: "Dejar el entorno listo para publicar, no para coleccionar herramientas.",
      context:
        "La gente se pierde el primer día instalando seis apps. El método cabe en dos: Cursor (donde escribes y pides cambios) y Grok Bot (el teammate de la VM en Cursor, no el chat de grok.com). Un repo. Un locale por sesión. Si el workspace tarda más de un minuto en abrir, sobra ruido.",
      steps: [
        "Instala Cursor y abre UN repo o carpeta: el sitio que vas a publicar. Cierra el resto de ventanas.",
        "Crea Grok Bot desde Cursor (cursor.com/bot/onboarding). Si abres grok.com, estás en el producto equivocado.",
        "En una nota del repo escribe: dominio, locale de hoy (es o en), y la primera URL que quieres sacar. Tres líneas. No un Notion de 20 páginas.",
        "Comprueba que puedes guardar un archivo y ver el diff. Si no hay git, inicialízalo. Sin historial no hay control.",
        "No instales temas, linters extra ni 12 MCPs. Eso es día 40, no día 1.",
      ],
      example:
        "Nota del día 1 (cópiala):\nDominio: midirectorio.com\nLocale hoy: es\nPrimera URL: /es/tools/cursor (ficha). La sé usar. No empiezo por Midjourney.",
      mistakes: [
        "Abrir grok.com y creer que eso es Grok Bot.",
        "Tener el sitio en Drive, el blog en WordPress y los prompts en el móvil: tres sitios, cero hábito.",
        "Empezar por «las 100 herramientas» en vez de por una URL.",
      ],
      done: "Cursor abre el repo. Grok Bot existe. Las tres líneas de la nota están escritas.",
    },
    {
      day: 2,
      title: "Qué publicar primero",
      summary: "Estructura del sitio y la primera URL que vale la pena.",
      minutes: 40,
      goal: "Elegir 3 URLs, no 30. La primera es algo que ya sabes usar.",
      context:
        "Un directorio muere por catálogo, no por falta de ideas. La semana 1 es ficha + tutorial + comparativa de un mismo cluster (misma herramienta o la misma pregunta). Si la primera pieza exige dos horas de investigación, no es la primera: es vanidad.",
      steps: [
        "Elige el cluster: una herramienta que uses esta semana (Cursor, ChatGPT, Perplexity…).",
        "Anota 3 slugs: ficha de esa herramienta, un tutorial de un flujo que ya hiciste, una comparativa con la alternativa que casi elegiste.",
        "Para cada slug, una pregunta de una línea («¿Para qué trabajo sirve?» / «¿Cómo hago X?» / «¿A o B para Y?»).",
        "Orden: ficha → tutorial → comparativa. La comparativa sin fichas es un artículo huérfano.",
        "Abre el ejemplo de semana tipo. Cambia los nombres, no la estructura.",
      ],
      example:
        "Semana tipo StackAI Learn:\n1) /tools/cursor — ficha\n2) /tutorials/cursor-primer-repo — tutorial (primer cambio en un repo real)\n3) /compare/cursor-vs-chatgpt-codigo — misma pregunta: quién toca el código con menos desastre.\nSi no usas Cursor, sustituye por la herramienta que SÍ abriste ayer.",
      mistakes: [
        "Lista de 20 slugs «para más adelante». Eso no se publica. Se abandona.",
        "Empezar por la comparativa de dos herramientas que no has abierto.",
        "Elegir Midjourney porque «posiciona» si no has generado ni una imagen esta semana.",
      ],
      done: "Tres slugs, tres preguntas, un orden. El primero no requiere investigar dos horas.",
      fileId: "week",
    },
    {
      day: 3,
      title: "Ficha de herramienta",
      summary: "Qué hace, para quién, y dónde falla.",
      minutes: 50,
      goal: "Una ficha que aguante a un amigo escéptico. No una ficha de Wikipedia.",
      context:
        "La ficha no resume la home del fabricante. Responde: qué trabajo hace, para quién no es, y un primer flujo. El tagline es una línea, no un eslogan. Los contras se quedan aunque el afiliado pague. ES y EN: el mismo juicio, no una traducción de Google.",
      steps: [
        "Abre la plantilla de ficha. Rellena meta (slug, fabricante, precio real, URL oficial).",
        "Tagline: una línea que un extraño entienda. «Editor de código con un agente que toca el repo» vale. «La mejor IA del momento» no.",
        "«Qué es de verdad»: 2–4 párrafos. Qué hace, qué no hace, qué plan mínimo hace falta.",
        "3–5 pros y 3–5 contras. Cada contra es una frase que podrías decir en voz alta.",
        "Tutorial rápido: 5 pasos o menos, con lo que debes ver. Sin capturas inventadas.",
        "Afiliado: solo URL real. Si no hay programa, el botón va al sitio oficial y se dice.",
      ],
      example:
        "Tagline (Cursor): «Un editor donde el agente edita el repo; tú revisas el diff.»\nContra que sí: «Si no le acotas el cambio, reescribe archivos que no pediste.»\nContra que no: «La IA a veces se equivoca.» Eso no es un contra, es niebla.\nPara quién no: quien quiere un chat sin tocar archivos.",
      mistakes: [
        "Copiar el «About» del fabricante y cambiar tres adjetivos.",
        "Cero contras, o contras que valen para cualquier herramienta.",
        "Inventar un precio o un enlace de afiliado «que luego cambio».",
      ],
      done: "Hay ES, EN, un tagline concreto y al menos un contra que un usuario reconocería.",
      fileId: "tool",
    },
    {
      day: 4,
      title: "Tutorial paso a paso",
      summary: "Un flujo que alguien pueda repetir mañana.",
      minutes: 50,
      goal: "El título es el resultado. Cada paso se puede ejecutar sin adivinar.",
      context:
        "Un tutorial malo es un tour por menús. Uno bueno es un flujo: problema → pasos nombrados → qué debes ver → un error que ya te pasó. Si no puedes hacer el flujo tú en el tiempo que prometes, recorta el título o el alcance. Enlaza la ficha del día 3; si no existe, esto no se publica.",
      steps: [
        "Título con resultado y tiempo honesto: «Cómo pedir un cambio de un archivo en Cursor (15 min)», no «Introducción a Cursor».",
        "Problema en 4–6 líneas: qué estaba roto antes de este flujo.",
        "Cada paso: verbo + control («Pulsa Agent / Composer») + qué debe aparecer. Un arreglo si falla.",
        "2 errores que hayas cometido. El tercero, si lo inventas, se nota.",
        "Cierre de una frase usable mañana. 2 enlaces internos: ficha + siguiente pieza.",
        "Pasa el test: ciérralo y vuelve a hacerlo leyendo solo tus pasos. Si te atascas, el paso está mal.",
      ],
      example:
        "Mal título: «Guía completa de Cursor 2026».\nBien: «Cómo limitar a Cursor a un solo archivo para que no reescriba el repo».\nPaso bien: «En el chat, escribe: Haz SOLO esto: cambia el H1 de src/app/[locale]/page.tsx. No toques más archivos. Debes ver un diff de un archivo.»\nPaso mal: «Experimenta con el agente hasta que funcione.»",
      mistakes: [
        "Prometer 10 minutos y escribir 18 pasos.",
        "Pasos sin «qué debes ver»: el lector no sabe si va bien.",
        "Publicar el tutorial antes que la ficha. Queda un hueco y un 404 interno.",
      ],
      done: "Puedes repetir el flujo solo con el texto. Hay enlace a la ficha.",
      fileId: "tutorial",
    },
    {
      day: 5,
      title: "Comparativa que convierte",
      summary: "Misma pregunta a dos herramientas. Un veredicto usable.",
      minutes: 50,
      goal: "Que alguien elija A o B. Un empate eterno no se publica.",
      context:
        "La comparativa no es un ranking de marcas. Es una pregunta («¿quién escribe el primer borrador útil?», «¿quién investiga con fuentes?», «¿quién toca el repo sin romperlo?»). Los criterios se pueden observar en una sesión, no «ecosistema» ni «innovación». El veredicto es una frase + para qué trabajo. «Depende» es el borrador, no el cierre.",
      steps: [
        "Escribe la pregunta en una línea. Si no cabe, son dos artículos.",
        "4–7 criterios: primer resultado, control del contexto, precio del flujo real, dónde se rompe, curva del primer día.",
        "Rellena la tabla en la misma sesión. No de memoria de hace tres meses.",
        "«Elige A si… / Elige B si…» con situaciones reales (cliente, repo, investigación).",
        "Veredicto: una herramienta gana ESA pregunta. La otra puede ganar otra URL.",
        "Enlaza las dos fichas. FAQ de 2–4 preguntas que te haría un amigo que ya paga A.",
      ],
      example:
        "Pregunta: «¿Quién me ayuda a cambiar código de un repo que ya existe?»\nCursor gana si el trabajo es el diff. ChatGPT gana si solo necesitas un snippet para pegar a mano.\nVeredicto malo: «Ambas son excelentes opciones en el mercado actual.»\nVeredicto bien: «Para tocar el repo, Cursor. Para un fragmento suelto, ChatGPT. No pagues los dos el primer mes.»",
      mistakes: [
        "Diez herramientas en una tabla. Nadie elige. Tú tampoco.",
        "Criterios que no mediste («mejor IA», «más potente»).",
        "Ganador porque el afiliado de A paga más.",
      ],
      done: "Hay un ganador por tarea y enlaces a ambas fichas.",
      fileId: "compare",
    },
    {
      day: 6,
      title: "Prompts de Cursor",
      summary: "Para no perder el control del repo ni del tono.",
      minutes: 40,
      goal: "Un cambio acotado. El resto del repo no se toca.",
      context:
        "Cursor no «hace el sitio». Hace el cambio que le pides. El prompt bueno nombra ruta, locale, y qué no tocar (afiliados, ads, selector de idioma). El prompt malo es «mejora esto». Hoy usas uno o dos prompts de la lista, no los seis. El anti-prompt existe para cuando se va de ámbito: paras y revert.",
      steps: [
        "Copia los prompts 1–6 a una nota del repo. Léelos una vez. No los lances en ráfaga.",
        "Elige «solo esto» y pide UN cambio: un párrafo, un contra, un slug. Incluye la ruta del archivo.",
        "Añade la lista de no tocar. Si no la pones, el modelo «aprovecha» y rediseña.",
        "Mira el diff archivo a archivo. Si hay un fichero que no pediste, revert ese fichero.",
        "Guarda el prompt que funcionó junto al cambio (comentario o nota). Lo reutilizarás el día 10.",
      ],
      example:
        "Prompt que sí:\n«En src/content/tools/cursor.ts, añade un contra en ES y EN: si no acotas el archivo, reescribe de más. No toques afiliados, ads ni otras tools. No instales nada.»\nPrompt que no:\n«Deja el directorio más pro y añade lo que falte.»",
      mistakes: [
        "«Haz el SEO de todo el sitio» en un solo mensaje.",
        "Aceptar el apply sin leer el diff porque «tiene buena pinta».",
        "Pedir 20 herramientas nuevas. Eso no es el método; es un vertedero.",
      ],
      done: "Un diff pequeño que puedes explicar en 30 segundos. Nada mergeado a ciegas.",
      fileId: "prompts",
    },
    {
      day: 7,
      title: "Charter de Grok Bot",
      summary: "Draft only: el bot no publica solo. Tú revisas.",
      minutes: 40,
      goal: "El bot escribe borradores. El merge es tuyo.",
      context:
        "Grok Bot en Cursor es un compañero con VM, no un interno que sube a producción. El charter es la ley: ES+EN, tono del sitio, cero afiliados inventados, ads apagados, sin selector de idioma. Un brief = una pieza. Si el draft promete ingresos o inventa un precio, se tira entero. Hoy no hay merge a main.",
      steps: [
        "Pega el charter en el bot. Si ya tenía instrucciones vagas («sé útil»), las sustituyes. No se acumulan.",
        "Brief de una pieza: slug, herramienta, URL, locale de trabajo, «no publiques».",
        "Pide ES y EN en el mismo draft. Si solo llega un idioma, el brief estaba mal o el bot se saltó el charter.",
        "Checklist mental: ¿hay contra? ¿hay claim de dinero? ¿hay URL de afiliado nueva? Cualquier sí raro = no.",
        "Deja PR o parche. Escribe en el PR qué pediste y qué rechazaste. Eso es el hábito.",
      ],
      example:
        "Brief:\n«Draft ficha perplexity. Slug perplexity. Pregunta: investigación con fuentes, no chat eterno. Contrás obligatorios. Sin afiliado. No merge.»\nSi el bot responde con «la mejor IA de búsqueda del mercado» y un enlace inventado, no negocias el párrafo: tiras el draft.",
      mistakes: [
        "«Publica cuando esté listo.» Eso no es un charter; es abdicar.",
        "Dejar que el bot «complete» afiliados o AdSense.",
        "Mergear porque el checklist del día 7 «pide avanzar».",
      ],
      done: "Hay un draft leído. main no se ha tocado. El charter está pegado en el bot.",
      fileId: "charter",
    },
    {
      day: 8,
      title: "Afiliados que sí pagan",
      summary: "Cuáles merecen el enlace y cuáles solo ensucian la ficha.",
      minutes: 40,
      goal: "Lista corta: programa real / no hay. Cero URLs inventadas.",
      context:
        "El afiliado no financia el criterio. Una ficha entra por un flujo que puedes enseñar. Muchas marcas no tienen programa público (Cursor, a menudo Perplexity): el botón va oficial y el texto lo dice. El disclosure vive en ficha, tutorial y pie. Si lo escondes, estás vendiendo confianza barata.",
      steps: [
        "Tabla de 3 columnas: herramienta | ¿programa público? | URL o «oficial».",
        "Busca el programa en el sitio de la marca o en su partner page. Si no hay URL que puedas pegar hoy, es «oficial».",
        "Pega solo URLs reales en el archivo de afiliados del sitio. Nunca «#» ni un acortador dudoso.",
        "Relee una ficha: el contra sigue ahí. El botón no cambia el veredicto.",
        "Comprueba que el aviso de afiliados se ve en esa URL. Si no, lo arreglas antes que el color del botón.",
      ],
      example:
        "Fila honesta:\nCursor | no hay programa público que hayamos podido pegar | oficial\nUna marca con partner | sí | URL del dashboard de partners (la tuya, no la de un tutorial de 2022)\nNunca: «affiliate.com/xyz» inventada para «que no quede vacío».",
      mistakes: [
        "Poner el enlace de otra persona o de un curso ajeno.",
        "Quitar contras en las fichas que «sí pagan».",
        "Prometer en el tutorial que «si te registras ganas X». Eso no es disclosure; es cuento.",
      ],
      done: "La tabla está hecha. Ningún href de afiliado es inventado. El aviso sigue visible.",
    },
    {
      day: 9,
      title: "Newsletter y lead magnet",
      summary: "Una lista corta. Un motivo para dejar el correo.",
      minutes: 40,
      goal: "Un imán que quepa en un email. No un segundo pack disfrazado.",
      context:
        "El lead magnet de un directorio es una lista con para qué sirve cada herramienta, no un PDF de 40 páginas ni «el curso gratis». Un motivo para el correo: esa lista, o el aviso cuando salga la siguiente guía. Si el formulario no tiene proveedor (Buttondown, etc.), se dice. Fingir que «ya se envía» quema la confianza en el primer clic.",
      steps: [
        "Define el imán en una frase: «15 herramientas y para qué es cada una». Si no cabe, recorta.",
        "Escribe 8–15 filas: nombre + una línea de uso. Sin «la mejor». Sin precios inventados.",
        "Mira el formulario del sitio. Si falta el ID del proveedor, anótalo. No prometas entrega.",
        "Un solo CTA en el banner. Quita el segundo «y además un webinar».",
        "Texto de baja visible. No vendas la lista. Si no puedes prometer eso, no pidas el correo.",
      ],
      example:
        "Fila buena: «Perplexity — primer pase de investigación con enlaces a fuentes; no para reescribir un repo.»\nFila mala: «Perplexity — IA revolucionaria para profesionales exigentes.»\nAsunto del primer mail: la lista. No un hilo de 7 correos de bienvenida.",
      mistakes: [
        "Un imán que es «el pack en pequeño». Estás canibalizando el producto de 29 €.",
        "Pedir el correo y no tener proveedor. El visitante no es un beta tester.",
        "Newsletter diaria desde el día 1. No tienes qué decir.",
      ],
      done: "Sabes qué se envía y con qué (o está escrito que falta el ID). El imán es una lista, no un curso.",
    },
    {
      day: 10,
      title: "SEO de una URL",
      summary: "Title, H1 e internal links. Una página hecha bien.",
      minutes: 40,
      goal: "UNA URL redonda. No «optimizar el sitio».",
      context:
        "El SEO de este método es on-page de una URL que ya existe: title, description y H1 alineados, dos enlaces internos, locale en la ruta (/es/… o /en/…). No es Search Console el primer día, ni 40 keywords en una ficha. Si title y H1 no dicen lo mismo, Google no es el problema: tú no has decidido el tema.",
      steps: [
        "Elige la URL del día 3, 4 o 5. Anótala. El resto del sitio no existe hoy.",
        "Escribe title (hasta ~60 caracteres de sentido, no de recuento obsesivo) y description que completen, no que repitan el H1 tal cual.",
        "H1 = la promesa de esa página. Si el H1 es el nombre de la marca y el title es otra cosa, unifica.",
        "Dos internal links con ancla útil («ficha de Cursor», no «clic aquí»). Uno a ficha, otro a comparativa o ruta.",
        "Abre la URL en incógnito. ¿Se lee el title en la pestaña? ¿El H1 es el mismo juicio? ¿Los enlaces van a /es/ o /en/?",
      ],
      example:
        "Mal: title «Cursor | StackAI Learn | IA | Código | 2026».\nBien: title «Cursor — ficha honesta: qué hace bien y dónde se va de ámbito».\nH1 alineado: «Cursor toca el repo; tú revisas el diff.»\nInternal: «Ver el tutorial del primer cambio» + «Cursor vs ChatGPT para código».",
      mistakes: [
        "Meter la keyword 12 veces. Se lee como anuncio de 2009.",
        "Canonical o hreflang a una ruta sin locale.",
        "Reescribir el artículo entero «por SEO» y perder el contra.",
      ],
      done: "Esa URL tiene title, H1 y 2 internal links que dicen lo mismo.",
    },
    {
      day: 11,
      title: "Distribución sin spam",
      summary: "X y Pinterest cuando hay algo que enseñar. No cada hora.",
      minutes: 35,
      goal: "Un post con un hallazgo. No «lee mi web».",
      context:
        "Distribuir no es un calendario de 14 tuits. Es sacar de la pieza una frase que se sostiene sola: un contra, un veredicto, un paso que la gente hace mal. El enlace va detrás. Pinterest solo tiene sentido con imagen real y un mínimo de URLs publicadas; si no, se salta sin culpa. Comprar followers o hilos de «comenta LINK» mata el tono del sitio.",
      steps: [
        "Copia una frase de la ficha, tutorial o comparativa que no necesite el resto del artículo para entenderse.",
        "En X: esa frase + enlace. Sin «🧵 1/14». Sin pregunta bait («¿quién usa IA?»).",
        "Si no hay frase así, la pieza aún no está lista para difundir. Vuelve al día 12, no inventes un gancho.",
        "Pinterest: solo con captura real (interfaz oficial, no mockup). Si no hay foto, este canal espera.",
        "Una distribución. Si te pica el «tengo que estar», el bloque de 30 min de mañana no es más posts: es otra URL.",
      ],
      example:
        "Bien: «Cursor no es un chat. Si no le acotas el archivo, te reescribe el repo. Cómo lo limitamos: [url]»\nMal: «¡Nuevo post en el blog! 🔥 Herramientas de IA que tienes que conocer 👇 LINK»\nTampoco: 8 variaciones del mismo enlace en una hora.",
      mistakes: [
        "Publicar el enlace el mismo minuto en 6 redes con el mismo texto.",
        "Pinterest con una imagen generada que no es el producto.",
        "Pedir RT a cambio de nada. El hallazgo es el intercambio.",
      ],
      done: "Hay un post con un hallazgo, o has decidido esperar a tener frase o imagen de verdad.",
    },
    {
      day: 12,
      title: "Revisar calidad",
      summary: "Antes de dar por cerrada una URL.",
      minutes: 45,
      goal: "URLs que aguantan leerse en voz alta. Sin tapar agujeros con adjetivos.",
      context:
        "Calidad aquí es una lista corta y cruel: ¿se puede hacer el paso? ¿falta un idioma? ¿hay 404 interno? ¿hay afiliado inventado? ¿hay promesa de ingresos? Ads apagados si no hay impresiones. Leer en voz alta detecta el relleno que en silencio «suena bien». Si algo falla, no «sigues al día 13»: vuelves al día que rompió.",
      steps: [
        "Abre cada URL nueva de la semana. Anota 404, locale roto, CTA que no va a /es/ o /en/.",
        "Tutorial: ejecuta tres pasos al azar. Si uno no se puede, reescribes o cortas.",
        "Ficha: lee los contras en voz alta. Si te da vergüenza porque son humo, los cambias.",
        "Busca «mejor», «revolucionario», «ingresos», «garantizado». Cada uno es sospechoso.",
        "Ads y analítica: si no hay token/impresiones, no se encienden «para ver qué pasa».",
        "Checklist día 12: solo si no has sustituido un agujero por un adjetivo.",
      ],
      example:
        "Fallo típico: el tutorial dice «pulsa Generate» y en la UI ahora dice «Create». O lo actualizas hoy o quitas el paso.\nOtro: /tools/cursor en el menú apunta a /cursor sin locale. Eso es 404 en producción.\nPasa: un contra concreto y un paso que acabas de hacer tú.",
      mistakes: [
        "«Ya lo revisaré cuando tenga tráfico.» El tráfico no arregla un paso mentira.",
        "Encender AdSense para «completar» la página.",
        "Marcar el checklist en bloque porque «la semana se acaba».",
      ],
      done: "Las URLs de esta tanda se pueden enseñar. Si no, has vuelto al día que falló.",
      fileId: "checklist",
    },
    {
      day: 13,
      title: "Página de venta / pack",
      summary: "Cómo está hecha esta oferta, sin teatro.",
      minutes: 40,
      goal: "Promesa, para quién no es, precio, un CTA. Sin countdown.",
      context:
        "Esta página (/pack) es el ejemplo: H1 con la promesa, precio visible, un Comprar, un bloque «para quién no es», FAQ que mata objeciones (vídeo, programar, ingresos). No hay plazas, ni timer, ni «método secreto». Después del pago no hay un Drive: hay estos 14 días. Si vendes otra cosa algún día, copias la estructura, no el hype de un webinar.",
      steps: [
        "Abre /pack y /pack/thanks en otra pestaña. Anota: promesa, no-es, precio, un botón, FAQ.",
        "Escribe en 5 líneas tu propia oferta (aunque sea la misma): quién, qué entrega, qué no promete.",
        "Quita de un borrador cualquier urgencia falsa. Si el texto necesita «últimas 3», el producto no está claro.",
        "El FAQ no es SEO stuffing. Tres preguntas que te haría alguien que no quiere sentirse tonto.",
        "Comprueba que Comprar va a Stripe y thanks es este método, no una carpeta de archivos sueltos.",
      ],
      example:
        "Promesa que sí: «El método y las plantillas para publicar ficha, tutorial y comparativa en 14 días.»\nPromesa que no: «Construye un negocio de IA en 2 semanas.»\nNo-es que sí: «No es un curso de vídeo. No promete ingresos.»\nEso filtra. El que se queda, entiende el producto.",
      mistakes: [
        "Añadir un vídeo de 40 minutos «para que parezca curso». Eso es otro producto.",
        "Seis CTAs distintos (Comprar, Reserva, WhatsApp, PDF). Se nota el miedo.",
        "Ocultar el precio hasta el checkout. Aquí el precio es parte del criterio.",
      ],
      done: "Sabes copiar esta estructura a otra oferta sin añadir hype.",
    },
    {
      day: 14,
      title: "Rutina de 30 minutos",
      summary: "Para no abandonar la semana 3. Un bloque, no un sprint.",
      minutes: 30,
      goal: "El hábito escrito. El pack termina; el sitio no.",
      context:
        "El fracaso habitual no es el día 3: es la semana 3, cuando no hay «curso» que te empuje. La regla es un bloque fijo (el mismo hueco, 3–4 días por semana) y un alcance miserable a propósito: una URL o un paso. Grok Bot sigue en draft. Tú mergeas con build verde. El método se repite: vuelves al día 2 con otras 3 URLs. No compras otro pack para «motivarte».",
      steps: [
        "Pon en el calendario un bloque de 30 minutos con nombre («Stack: una URL»). Repite 4 días.",
        "Regla de corte: suena el final y paras aunque «ya casi». El extra se va al siguiente bloque.",
        "Plantilla de bloque: 5 min abrir la nota de slugs → 20 min el paso → 5 min commit o nota de dónde lo dejaste.",
        "Grok Bot: un brief, un draft, tú revisas. Nunca «publica tú».",
        "Lista las próximas 3 URLs (día 2 otra vez). Si no salen, eliges peor y más cerca: la herramienta que usaste hoy.",
      ],
      example:
        "Bloque del martes:\n09:30–10:00 Stack: contra de la ficha Perplexity (ES+EN) + commit.\nNo: «09:30–13:00 dejar el sitio redondo».\nMiércoles: un paso del tutorial, no «terminar el tutorial».",
      mistakes: [
        "Mover el bloque cada día «cuando tenga un rato». No hay rato.",
        "Usar el bot para mergear porque «así avanzo».",
        "Empezar un curso nuevo el día 15. El método era este.",
      ],
      done: "El bloque está en el calendario. Sabes la próxima URL. El bot no publica solo.",
      fileId: "checklist",
    },
  ],
  en: [
    {
      day: 1,
      title: "Account and workspace",
      summary: "Cursor + Grok Bot ready. One workspace, not ten tabs.",
      minutes: 35,
      goal: "Get the environment ready to publish, not to collect tools.",
      context:
        "Most people lose day 1 installing six apps. The method fits in two: Cursor (where you write and ask for diffs) and Grok Bot (the Cursor cloud teammate, not grok.com chat). One repo. One locale per session. If the workspace takes more than a minute to open, you have noise.",
      steps: [
        "Install Cursor and open ONE repo or folder: the site you will publish. Close the other windows.",
        "Create Grok Bot from Cursor (cursor.com/bot/onboarding). If you open grok.com, you are in the wrong product.",
        "In a repo note write: domain, today's locale (es or en), and the first URL you want out. Three lines. Not a 20-page Notion.",
        "Make sure you can save a file and see a diff. If there is no git, init it. No history, no control.",
        "Do not install extra themes, linters or 12 MCPs. That is day 40, not day 1.",
      ],
      example:
        "Day-1 note (copy it):\nDomain: mydirectory.com\nLocale today: en\nFirst URL: /en/tools/cursor (profile). I already use it. I do not start with Midjourney.",
      mistakes: [
        "Opening grok.com and thinking that is Grok Bot.",
        "Site in Drive, blog in WordPress, prompts on the phone: three places, zero habit.",
        "Starting from «the 100 tools» instead of one URL.",
      ],
      done: "Cursor opens the repo. Grok Bot exists. The three lines are written.",
    },
    {
      day: 2,
      title: "What to publish first",
      summary: "Site structure and the first URL that is worth shipping.",
      minutes: 40,
      goal: "Pick 3 URLs, not 30. The first is something you already know.",
      context:
        "Directories die from catalog, not from a lack of ideas. Week 1 is profile + tutorial + comparison in one cluster (same tool or the same question). If the first piece needs two hours of research, it is not first — it is vanity.",
      steps: [
        "Pick the cluster: a tool you are using this week (Cursor, ChatGPT, Perplexity…).",
        "Write 3 slugs: that tool's profile, a tutorial of a flow you already did, a comparison with the alternative you almost picked.",
        "For each slug, a one-line question («What job is this for?» / «How do I do X?» / «A or B for Y?»).",
        "Order: profile → tutorial → comparison. A comparison without profiles is an orphan post.",
        "Open the sample week. Change the names, not the shape.",
      ],
      example:
        "StackAI Learn sample week:\n1) /tools/cursor — profile\n2) /tutorials/cursor-first-repo — tutorial (first real change in a repo)\n3) /compare/cursor-vs-chatgpt-codigo — same question: who touches code with less mess.\nIf you do not use Cursor, swap in the tool you DID open yesterday.",
      mistakes: [
        "A list of 20 slugs «for later». That does not ship. It gets abandoned.",
        "Starting with a comparison of two tools you have not opened.",
        "Picking Midjourney because it «ranks» if you have not made a single image this week.",
      ],
      done: "Three slugs, three questions, one order. The first does not need two hours of research.",
      fileId: "week",
    },
    {
      day: 3,
      title: "Tool profile",
      summary: "What it does, who it is for, and where it fails.",
      minutes: 50,
      goal: "A profile that survives a sceptical friend. Not a Wikipedia card.",
      context:
        "A profile does not summarise the vendor homepage. It answers: what job it does, who it is not for, and a first flow. The tagline is one line, not a slogan. Cons stay even when the affiliate pays. ES and EN: the same judgment, not a Google translate.",
      steps: [
        "Open the profile template. Fill meta (slug, vendor, real price, official URL).",
        "Tagline: one line a stranger gets. «A code editor whose agent edits the repo; you review the diff» works. «The best AI right now» does not.",
        "«What it actually is»: 2–4 paragraphs. What it does, what it does not, the minimum plan you need.",
        "3–5 pros and 3–5 cons. Each con is a sentence you could say out loud.",
        "Quick tutorial: 5 steps or fewer, with what you should see. No invented screenshots.",
        "Affiliate: real URL only. If there is no program, the button goes official and the copy says so.",
      ],
      example:
        "Tagline (Cursor): «An editor where the agent edits the repo; you review the diff.»\nA real con: «If you do not scope the change, it rewrites files you did not ask for.»\nA fake con: «AI is sometimes wrong.» That is fog, not a con.\nNot for: anyone who wants a chat and never touches files.",
      mistakes: [
        "Copying the vendor About and swapping three adjectives.",
        "Zero cons, or cons that apply to every tool.",
        "Inventing a price or an affiliate link «to fill later».",
      ],
      done: "ES, EN, a concrete tagline, and at least one con a user would recognise.",
      fileId: "tool",
    },
    {
      day: 4,
      title: "Step-by-step tutorial",
      summary: "A flow someone can repeat tomorrow.",
      minutes: 50,
      goal: "The title is the outcome. Every step can be run without guessing.",
      context:
        "A bad tutorial is a tour of menus. A good one is a flow: problem → named steps → what you should see → a mistake you already made. If you cannot run the flow in the time you promise, cut the title or the scope. Link the day-3 profile; if it does not exist, this does not ship.",
      steps: [
        "Title with outcome and honest time: «How to ask Cursor to change one file (15 min)», not «Introduction to Cursor».",
        "Problem in 4–6 lines: what was broken before this flow.",
        "Each step: verb + control («Open Agent / Composer») + what should appear. One fix if it fails.",
        "2 mistakes you have made. A third you invent will show.",
        "A one-sentence close you can use tomorrow. 2 internal links: profile + next piece.",
        "Test: close it and redo it from your steps only. If you get stuck, the step is wrong.",
      ],
      example:
        "Bad title: «The complete Cursor guide 2026».\nGood: «How to lock Cursor to one file so it does not rewrite the repo».\nGood step: «In the chat, write: Do ONLY this: change the H1 in src/app/[locale]/page.tsx. Touch no other files. You should see a one-file diff.»\nBad step: «Play with the agent until it works.»",
      mistakes: [
        "Promising 10 minutes and writing 18 steps.",
        "Steps with no «what you should see»: the reader cannot tell if they are on track.",
        "Shipping the tutorial before the profile. You get a hole and an internal 404.",
      ],
      done: "You can repeat the flow from the text alone. There is a link to the profile.",
      fileId: "tutorial",
    },
    {
      day: 5,
      title: "A comparison that converts",
      summary: "The same question to two tools. A usable verdict.",
      minutes: 50,
      goal: "Someone picks A or B. An eternal tie does not ship.",
      context:
        "A comparison is not a brand ranking. It is one question («who drafts a useful first pass?», «who researches with sources?», «who touches the repo without wrecking it?»). Criteria must be observable in one session — not «ecosystem» or «innovation». The verdict is one sentence + which job. «It depends» is the draft, not the ending.",
      steps: [
        "Write the question in one line. If it does not fit, it is two articles.",
        "4–7 criteria: first result, control of context, price of a real flow, where it breaks, first-day curve.",
        "Fill the table in the same sitting. Not from a memory of three months ago.",
        "«Choose A if… / Choose B if…» with real situations (a client, a repo, research).",
        "Verdict: one tool wins THIS question. The other can win another URL.",
        "Link both profiles. FAQ of 2–4 questions a friend who already pays for A would ask.",
      ],
      example:
        "Question: «Who helps me change code in a repo that already exists?»\nCursor wins if the work is the diff. ChatGPT wins if you only need a snippet to paste by hand.\nBad verdict: «Both are excellent options in today's market.»\nGood: «To touch the repo, Cursor. For a loose snippet, ChatGPT. Do not pay for both the first month.»",
      mistakes: [
        "Ten tools in one table. Nobody picks. Neither do you.",
        "Criteria you did not measure («best AI», «more powerful»).",
        "A winner because A's affiliate pays more.",
      ],
      done: "There is a winner per job and links to both profiles.",
      fileId: "compare",
    },
    {
      day: 6,
      title: "Cursor prompts",
      summary: "So you do not lose control of the repo or the voice.",
      minutes: 40,
      goal: "One scoped change. The rest of the repo stays still.",
      context:
        "Cursor does not «build the site». It does the change you ask. A good prompt names path, locale, and what not to touch (affiliates, ads, language switcher). A bad prompt is «make this better». Today you use one or two prompts from the list, not all six. The anti-prompt exists for when it goes wide: you stop and revert.",
      steps: [
        "Copy prompts 1–6 into a repo note. Read them once. Do not fire them in a burst.",
        "Take «only this» and ask for ONE change: a paragraph, a con, a slug. Include the file path.",
        "Add the do-not-touch list. If you omit it, the model «helps» and redesigns.",
        "Read the diff file by file. If a file you did not ask for changed, revert that file.",
        "Save the prompt that worked next to the change (comment or note). You will reuse it on day 10.",
      ],
      example:
        "Prompt that works:\n«In src/content/tools/cursor.ts, add a con in ES and EN: if you do not scope the file, it rewrites too much. Do not touch affiliates, ads or other tools. Install nothing.»\nPrompt that does not:\n«Make the directory more pro and add whatever is missing.»",
      mistakes: [
        "«Do SEO for the whole site» in one message.",
        "Accepting apply without reading the diff because it «looks fine».",
        "Asking for 20 new tools. That is not the method; it is a dump.",
      ],
      done: "A small diff you can explain in 30 seconds. Nothing merged blind.",
      fileId: "prompts",
    },
    {
      day: 7,
      title: "Grok Bot charter",
      summary: "Draft only: the bot does not publish alone. You review.",
      minutes: 40,
      goal: "The bot drafts. The merge is yours.",
      context:
        "Grok Bot in Cursor is a teammate with a VM, not a staffer who ships to production. The charter is the law: ES+EN, site voice, no invented affiliates, ads off, no language switcher. One brief = one piece. If the draft promises income or invents a price, the whole thing goes. No merge to main today.",
      steps: [
        "Paste the charter into the bot. If it already had vague instructions («be helpful»), replace them. Do not stack.",
        "Brief for one piece: slug, tool, URL, working locale, «do not publish».",
        "Ask for ES and EN in the same draft. If only one language arrives, the brief was weak or the bot skipped the charter.",
        "Mental checklist: a real con? an income claim? a new affiliate URL? Any weird yes = no.",
        "Leave a PR or a patch. Write in the PR what you asked and what you rejected. That is the habit.",
      ],
      example:
        "Brief:\n«Draft perplexity profile. Slug perplexity. Question: research with sources, not endless chat. Cons required. No affiliate. No merge.»\nIf the bot returns «the best search AI on the market» and a fake link, you do not negotiate the paragraph: you bin the draft.",
      mistakes: [
        "«Publish when it is ready.» That is not a charter; that is abdication.",
        "Letting the bot «fill in» affiliates or AdSense.",
        "Merging because day 7's checklist «says to move on».",
      ],
      done: "There is a draft you read. main is untouched. The charter is pasted in the bot.",
      fileId: "charter",
    },
    {
      day: 8,
      title: "Affiliates that actually pay",
      summary: "Which links earn their place and which just clutter a profile.",
      minutes: 40,
      goal: "A short list: real program / none. Zero invented URLs.",
      context:
        "Affiliate money does not buy judgment. A profile gets in because you can teach a flow. Many brands have no public program (Cursor, often Perplexity): the button goes official and the copy says so. Disclosure lives on the profile, the tutorial and the footer. If you hide it, you are selling cheap trust.",
      steps: [
        "A 3-column table: tool | public program? | URL or «official».",
        "Look for the program on the vendor site or partner page. If you cannot paste a URL today, it is «official».",
        "Paste only real URLs into the site's affiliate map. Never «#» or a shady shortener.",
        "Re-read one profile: the con is still there. The button does not change the verdict.",
        "Check the disclosure is visible on that URL. If not, fix that before the button colour.",
      ],
      example:
        "Honest row:\nCursor | no public program we could paste | official\nA brand with a partner program | yes | URL from your partner dashboard (yours, not a 2022 blog)\nNever: a made-up «affiliate.com/xyz» so the cell is not empty.",
      mistakes: [
        "Using someone else's link or a random course's link.",
        "Removing cons on the profiles that «pay».",
        "Promising in the tutorial that «if you sign up you earn X». That is not disclosure; that is a story.",
      ],
      done: "The table exists. No affiliate href is invented. The disclosure is still visible.",
    },
    {
      day: 9,
      title: "Newsletter and lead magnet",
      summary: "A short list. One reason to leave an email.",
      minutes: 40,
      goal: "A magnet that fits in one email. Not a second pack in disguise.",
      context:
        "A directory's magnet is a list of what each tool is for — not a 40-page PDF or «the free course». One reason for the email: that list, or a ping when the next guide ships. If the form has no provider (Buttondown, etc.), say so. Pretending it «already sends» burns trust on the first click.",
      steps: [
        "Define the magnet in one sentence: «15 tools and what each one is for». If it does not fit, cut.",
        "Write 8–15 rows: name + one line of use. No «best». No invented prices.",
        "Look at the site form. If the provider ID is missing, write that down. Do not promise delivery.",
        "One CTA on the banner. Delete the second «and also a webinar».",
        "Unsubscribe in the copy. You do not sell the list. If you cannot promise that, do not ask for the email.",
      ],
      example:
        "Good row: «Perplexity — first research pass with source links; not for rewriting a repo.»\nBad row: «Perplexity — revolutionary AI for demanding professionals.»\nFirst email subject: the list. Not a 7-email welcome drip.",
      mistakes: [
        "A magnet that is «the pack, smaller». You are eating your 29 € product.",
        "Asking for email with no provider. The visitor is not a beta tester.",
        "A daily newsletter from day 1. You do not have anything to say.",
      ],
      done: "You know what is sent and with what (or it is written that the ID is missing). The magnet is a list, not a course.",
    },
    {
      day: 10,
      title: "On-page SEO for one URL",
      summary: "Title, H1 and internal links. One page done properly.",
      minutes: 40,
      goal: "ONE URL done. Not «optimise the site».",
      context:
        "SEO in this method is on-page for a URL that already exists: title, description and H1 aligned, two internal links, locale in the path (/es/… or /en/…). It is not Search Console on day one, and not 40 keywords in a profile. If title and H1 disagree, Google is not the problem: you have not picked the topic.",
      steps: [
        "Pick the URL from day 3, 4 or 5. Write it down. The rest of the site does not exist today.",
        "Write a title (sensible length, not obsessive character counting) and a description that completes the H1, not a clone of it.",
        "H1 = that page's promise. If the H1 is the brand name and the title is something else, unify.",
        "Two internal links with useful anchors («Cursor profile», not «click here»). One to a profile, one to a comparison or path.",
        "Open the URL in a private window. Does the tab title match? Is the H1 the same judgment? Do links go to /es/ or /en/?",
      ],
      example:
        "Bad: title «Cursor | StackAI Learn | AI | Code | 2026».\nGood: title «Cursor — honest profile: what it does well and where it goes wide».\nAligned H1: «Cursor touches the repo; you review the diff.»\nInternal: «First-change tutorial» + «Cursor vs ChatGPT for code».",
      mistakes: [
        "Stuffing the keyword 12 times. It reads like a 2009 ad.",
        "Canonical or hreflang pointing at a path with no locale.",
        "Rewriting the whole article «for SEO» and losing the con.",
      ],
      done: "That URL has a title, H1 and 2 internal links that agree.",
    },
    {
      day: 11,
      title: "Distribution without spam",
      summary: "X and Pinterest when there is something to show. Not every hour.",
      minutes: 35,
      goal: "One post with a finding. Not «read my site».",
      context:
        "Distribution is not a 14-tweet calendar. It is pulling one sentence from the piece that stands alone: a con, a verdict, a step people get wrong. The link comes after. Pinterest only makes sense with a real image and a handful of published URLs; otherwise you skip it without guilt. Buying followers or «comment LINK» threads kills the site's voice.",
      steps: [
        "Copy one sentence from the profile, tutorial or comparison that does not need the rest of the article to make sense.",
        "On X: that sentence + link. No «🧵 1/14». No bait («who uses AI?»).",
        "If there is no such sentence, the piece is not ready to spread. Go to day 12; do not invent a hook.",
        "Pinterest: only with a real capture (official UI, not a mockup). No photo, this channel waits.",
        "One distribution. If you itch to «be present», tomorrow's 30-minute block is not more posts: it is another URL.",
      ],
      example:
        "Good: «Cursor is not a chat. If you do not scope the file, it rewrites the repo. How we limit it: [url]»\nBad: «New blog post! 🔥 AI tools you need to know 👇 LINK»\nAlso bad: 8 variations of the same link in one hour.",
      mistakes: [
        "Pasting the same link to 6 networks in the same minute.",
        "Pinterest with a generated image that is not the product.",
        "Asking for a RT in exchange for nothing. The finding is the trade.",
      ],
      done: "There is a post with a finding, or you chose to wait for a real sentence or image.",
    },
    {
      day: 12,
      title: "Quality review",
      summary: "Before you call a URL done.",
      minutes: 45,
      goal: "URLs that survive being read out loud. No adjectives papering over holes.",
      context:
        "Quality here is a short, cruel list: can you do the step? missing locale? internal 404? invented affiliate? income promise? Ads stay off if there are no impressions. Reading out loud catches filler that «sounds fine» in your head. If something fails, you do not «continue to day 13»: you go back to the day that broke.",
      steps: [
        "Open each new URL from the week. Note 404s, broken locales, CTAs that do not go to /es/ or /en/.",
        "Tutorial: run three random steps. If one cannot be done, rewrite or cut.",
        "Profile: read the cons out loud. If you are embarrassed because they are fog, change them.",
        "Search for «best», «revolutionary», «income», «guaranteed». Each one is a suspect.",
        "Ads and analytics: if there is no token/impressions, they stay off «to see what happens».",
        "Day-12 checklist: only if you did not replace a hole with an adjective.",
      ],
      example:
        "Typical miss: the tutorial says «click Generate» and the UI now says «Create». Update it today or cut the step.\nAnother: the nav points /tools/cursor at /cursor with no locale. That is a production 404.\nPass: a concrete con and a step you just ran yourself.",
      mistakes: [
        "«I will review when there is traffic.» Traffic does not fix a lying step.",
        "Turning AdSense on to «complete» the page.",
        "Ticking the whole checklist because «the week is over».",
      ],
      done: "This batch of URLs can be shown. If not, you went back to the day that failed.",
      fileId: "checklist",
    },
    {
      day: 13,
      title: "Sales page / pack",
      summary: "How this offer is built, without the theatre.",
      minutes: 40,
      goal: "Promise, who it is not for, price, one CTA. No countdown.",
      context:
        "This page (/pack) is the example: H1 with the promise, visible price, one Buy, a «who it is not for» block, FAQ that kills objections (video, coding, income). No seats, no timer, no «secret method». After payment there is no Drive folder: there are these 14 days. If you sell something else later, you copy the structure, not webinar hype.",
      steps: [
        "Open /pack and /pack/thanks in another tab. Note: promise, not-for, price, one button, FAQ.",
        "Write your own offer in 5 lines (even if it is this one): who, what they get, what you do not promise.",
        "Strip fake urgency from a draft. If the copy needs «last 3 left», the product is unclear.",
        "The FAQ is not keyword stuffing. Three questions someone who does not want to feel stupid would ask.",
        "Check Buy goes to Stripe and thanks is this method, not a loose pile of files.",
      ],
      example:
        "Promise that works: «The method and templates to publish a profile, tutorial and comparison in 14 days.»\nPromise that does not: «Build an AI business in 2 weeks.»\nNot-for that works: «Not a video course. Does not promise income.»\nThat filters. Whoever stays understands the product.",
      mistakes: [
        "Adding a 40-minute video «so it looks like a course». That is a different product.",
        "Six different CTAs (Buy, Book, WhatsApp, PDF). Fear is visible.",
        "Hiding the price until checkout. Here the price is part of the judgment.",
      ],
      done: "You can copy this structure onto another offer without adding hype.",
    },
    {
      day: 14,
      title: "A 30-minute routine",
      summary: "So week 3 does not die. One block, not a sprint.",
      minutes: 30,
      goal: "The habit written down. The pack ends; the site does not.",
      context:
        "The usual failure is not day 3: it is week 3, when there is no «course» pushing you. The rule is a fixed block (same slot, 3–4 days a week) and a deliberately small scope: one URL or one step. Grok Bot stays draft-only. You merge on a green build. The method repeats: back to day 2 with another 3 URLs. You do not buy another pack for «motivation».",
      steps: [
        "Put a 30-minute block on the calendar named («Stack: one URL»). Repeat 4 days.",
        "Hard stop: the timer ends and you stop even if you are «almost done». The rest goes to the next block.",
        "Block template: 5 min open the slug note → 20 min the step → 5 min commit or a note of where you stopped.",
        "Grok Bot: one brief, one draft, you review. Never «you publish».",
        "List the next 3 URLs (day 2 again). If they do not come, pick worse and closer: the tool you used today.",
      ],
      example:
        "Tuesday block:\n09:30–10:00 Stack: Perplexity profile con (ES+EN) + commit.\nNot: «09:30–13:00 make the whole site good».\nWednesday: one tutorial step, not «finish the tutorial».",
      mistakes: [
        "Moving the block every day «when I have a moment». There is no moment.",
        "Using the bot to merge so you «keep moving».",
        "Starting a new course on day 15. The method was this.",
      ],
      done: "The block is on the calendar. You know the next URL. The bot does not publish alone.",
      fileId: "checklist",
    },
  ],
};
