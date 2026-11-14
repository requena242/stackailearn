# Banco de posts para X (valor directo)

Objetivo: 2 posts al día en X. Siempre vía Buffer Free (nunca el composer de x.com).

## Estilo (desde 2026-11-14)

Desde el #60. El siguiente sin usar es el primer número que no lleva `[usado …]` ni `[retirado …]`. El texto del post son las líneas sangradas bajo el número: en un hilo, cada `1/` … `N/` es un post. La línea `<!-- fuente: … -->` no se publica.

- La primera línea es un gancho fuerte, con un tipo distinto en cada post: antes y después, error caro, lo que casi nadie sabe, opinión contundente, lista con promesa o comparativa con veredicto.
- Frases cortas, en segunda persona y con tono de persona real.
- Sin hashtags ni emojis, sin el dominio grok.com, y Grok Bot no se mezcla con grok.com.
- En los hilos, el enlace va solo en el último post.
- Cada post cabe en 280 caracteres con el peso de X (una URL cuenta 23).
- Los datos solo salen del contenido del sitio o de la web oficial; nada de «lo probé yo», cifras o porcentajes inventados ni valoraciones.

## Reglas
- Español. Un truco concreto o un mini hilo (2–4 posts) que salga de un tutorial publicado. No vale solo un titular con enlace.
- Nada de datos inventados: cada truco tiene que estar en el tutorial de origen.
- No escribas el dominio grok.com tal cual en el texto. Pon «Grok».
- El enlace a stackailearn.com va solo en 1 de cada 3 posts, como mucho. En los hilos va en el último post.
- Un post debe caber en 280 caracteres. Máximo 1–2 hashtags.
- Ritmo: 1 post de valor por la mañana y 1 por la tarde. El post de la pieza nueva del día sustituye a uno de los dos.
- Al publicar uno, márcalo con `[usado AAAA-MM-DD]`.
- Desde el #60 manda la sección «Estilo (desde 2026-11-14)».

## Banco inicial

1. [usado 2026-10-15] (notebooklm-primer-briefing) NotebookLM rinde mejor con 3–5 fuentes que con 30. Un cuaderno por entregable, con nombre de proyecto. Si mezclas temas en un cuaderno, las respuestas también se mezclan.
2. [usado 2026-10-17] (notebooklm-primer-briefing, hilo)
   1/ Así saco un briefing fiable con NotebookLM en 10 minutos 🧵
   2/ Pregunta con audiencia y fecha: «Resume para el comité del jueves los 3 riesgos principales».
   3/ Abre cada cita. Lo que no se sostiene en el pasaje original, fuera.
   4/ Studio → documento de briefing. Lo exportas y el entregable lo escribes fuera. Guía: https://stackailearn.com/es/tutorials/notebooklm-primer-briefing/
3. [usado 2026-10-16] (notebooklm-audio-overview) Antes de generar un Audio Overview en NotebookLM, dile en qué centrarse y en qué idioma. Brief si quieres algo rápido, Deep Dive si tienes que repasar el tema. Escúchalo con criterio antes de compartirlo.
4. [usado 2026-10-17] (chatgpt-projects-primer-flujo) Si pegas el mismo contexto en cada chat de ChatGPT, lo que necesitas es un Project: instrucciones y archivos fijos, y todos los chats lo heredan.
5. [usado 2026-10-18] (chatgpt-projects-primer-flujo, hilo)
   1/ ¿ChatGPT Projects, un chat suelto o un GPT? Mi regla:
   2/ Chat suelto: una pregunta puntual.
   3/ Project: un trabajo que dura semanas, con sus archivos e instrucciones.
   4/ GPT: algo que vas a repetir o compartir igual muchas veces. Guía: https://stackailearn.com/es/tutorials/chatgpt-projects-primer-flujo/
6. [usado 2026-10-18] (claude-projects-primer-flujo) En Claude Projects, las instrucciones del proyecto valen más que cualquier prompt largo. Escribe tono, audiencia y qué no hacer, sube 2–3 documentos de referencia y deja de repetirlo en cada chat.
7. [usado 2026-10-19] (claude-briefing-documento) Para un documento largo con Claude, empieza fuera: reúne el contexto, haz un outline y pon reglas de cita. Luego pide sección por sección. Si le pides el documento entero de golpe, te lo devuelve genérico.
8. [usado 2026-10-20] (claude-artifacts-prototipo) ¿Quieres un prototipo con Claude Artifacts? Describe una sola pantalla con sus estados y pide cambios pequeños sobre el artifact. Si le pides «hazme la app», cada vuelta te la reescribe entera.
9. [usado 2026-10-20] (cursor-como-ide-con-ia, hilo)
   1/ Mi método para que el agente de Cursor no rompa el repo:
   2/ Rama nueva y alcance cerrado: «solo este archivo / esta función».
   3/ Antes de tocar nada, que te dé un plan de 5 líneas.
   4/ Revisa el diff como si fuera un PR y pasa tu test. Guía: https://stackailearn.com/es/tutorials/cursor-como-ide-con-ia/
10. [usado 2026-10-21] (cursor-reglas-proyecto) Las reglas de Cursor van versionadas en `.cursor/rules` como archivos `.mdc`. alwaysApply es para lo que debe cumplir siempre, y globs para reglas por carpeta. Si aún usas `.cursorrules`, toca migrar.
11. [usado 2026-10-22] (grok-primer-flujo) Truco con Grok para temas de actualidad: pon la fecha en la pregunta y pídele que separe hechos de opiniones. Lo que importe, contrástalo con ChatGPT o Perplexity.
12. [usado 2026-10-22] (perplexity-investigacion-con-fuentes) En Perplexity, la respuesta es solo el punto de partida. Abre las 2–3 fuentes que sostienen la afirmación clave antes de citarla tú.
13. [usado 2026-10-23] (descript-editar-podcast) En Descript editas el audio editando el texto: borras una frase del transcript y desaparece del audio. Quita muletillas y silencios antes de ponerte con el montaje fino. Guía: https://stackailearn.com/es/tutorials/descript-editar-podcast/
14. [usado 2026-10-24] (suno-variaciones-stems) Regla con Suno: si tres Remix seguidos con el mismo texto no mejoran nada, el problema es el brief y no la suerte. Cambia el tempo, los instrumentos o la letra. Separa los stems solo cuando ya tengas la versión final.
15. [usado 2026-10-24] (midjourney-sref-estilo) En Midjourney, --sref copia la estética (color, textura, luz), no el sujeto. Usa una sola referencia homogénea, nada de collages, y describe el plano en el texto. Sin texto, Style Reference no basta.
16. [usado 2026-10-25] (notion-ai-bases-datos) Columnas de IA en Notion: una sola tarea por columna (resumen, etiqueta o extracción). Prueba el autofill en una vista filtrada con pocas filas antes de lanzarlo sobre cien. Así no llenas tu base de resúmenes incorrectos.
17. [usado 2026-10-25] (elevenlabs-primer-voiceover) En ElevenLabs no hay preview gratis de tu texto: cada Generate gasta caracteres. Prueba la voz con una frase y, si una toma no te convence, reescribe el guion antes de regenerar. Guía: https://stackailearn.com/es/tutorials/elevenlabs-primer-voiceover/
18. [usado 2026-10-26] (chatgpt-memoria-personalizacion) Si trabajas para dos clientes, no los metas en la memoria global de ChatGPT: se mezcla el tono. Un Project por cliente y, al cerrar el encargo, revisa qué ha guardado la memoria.
19. [usado 2026-10-27] (cursor-repo-existente) Primer día con Cursor en un repo que no conoces: abre la raíz, pregunta en Ask archivo por archivo (no «explícame todo el proyecto») y haz el primer cambio con Agent en una rama, nunca en main.
20. [usado 2026-10-27] (cursor-depurar-errores) Depurar con el agente de Cursor: no le digas «arréglalo». Pega el stack trace completo, pídele 3–5 hipótesis de más a menos probable sin tocar código y luego un fix en una rama con 2–3 archivos permitidos. Tu test en la terminal manda, no el chat.
21. [usado 2026-10-28] (perplexity-collections) ¿Buscas Perplexity Collections? Ahora se llaman Projects. Mi regla: si vas a hacer más de dos consultas sobre el mismo tema en una semana, crea un Project, abre un hilo por pregunta y ponles nombres que entiendas a la semana siguiente. El brief lo escribes fuera.
22. [usado 2026-10-29] (capcut-subtitulos-broll) Antes de exportar un short en CapCut, reprodúcelo entero con los Auto captions visibles y corrige nombres propios, cifras y jerga. Luego un solo estilo grande y con contraste, y B-roll solo donde el guion lo pide. Guía: https://stackailearn.com/es/tutorials/capcut-subtitulos-broll/
23. [usado 2026-10-29] (notion-ai-primer-flujo) Notion AI no se usa en un chat vacío. Ábrelo sobre la página de la reunión y pide decisiones, dueños, fechas y preguntas abiertas. Luego borra lo que no se dijo y asigna las tareas en esa misma página.
24. [usado 2026-10-30] (kling-primer-clip) Primer clip con Kling: parte de un still que ya te convence y usa imagen-a-vídeo. En el prompt, solo sujeto + movimiento, sin volver a describir la luz ni el estilo del JPG. Unos 5 s, 2–3 tomas en el modo rápido y te quedas con la mejor.
25. [usado 2026-10-30] (midjourney-variaciones-upscale) En Midjourney, las variaciones exploran y el upscale entrega resolución. No escales un plano que aún no te convence: varía hasta cerrar la composición y haz upscale una sola vez. Guía: https://stackailearn.com/es/tutorials/midjourney-variaciones-upscale/
26. [usado 2026-10-31] (runway-primer-clip) Primer clip con Runway: sube un still que ya te convence y usa imagen-a-vídeo. Prueba en Gen-4 Turbo, 5 s, y escribe solo motion: una acción y un movimiento de cámara. Si las tres tomas fallan igual, cambia el verbo antes de subir de modelo.
27. [usado 2026-10-31] (leonardo-primer-flujo) En Leonardo AI, el error más caro es el formato: fija la relación de aspecto antes de pulsar Generate. Lote de 4, prompt con sujeto, luz y fondo (nada de «cinematic 8K») y una exclusión explícita como «no text on bottle». Upscale solo del keeper.
28. [usado 2026-11-01] (chatgpt-gpts-cuando) ¿Merece la pena un GPT? Solo si repites el mismo rol con reglas estables. Para una pregunta puntual, chat suelto. Para un trabajo de semanas con archivos, un Project. Un GPT por rol, y pruébalo con tres prompts reales antes de compartirlo. Guía: https://stackailearn.com/es/tutorials/chatgpt-gpts-cuando/
29. [usado 2026-11-01] (suno-primer-tema) Primer tema en Suno: prompt de una línea con género, tempo, instrumentos y tema («indie pop midtempo, guitarra acústica y batería suave, letra sobre un viaje en tren de noche»). Cada Create da dos versiones: escúchalas enteras. Si ninguna encaja, reescribe antes de regenerar.
30. [usado 2026-11-02] (cursor-cloud-agent-primer-pr) Antes de lanzar un Cloud Agent de Cursor, escribe el encargo en tres frases: síntoma (qué falla), alcance (qué carpetas puede tocar y cuáles no) y prueba (el comando que debe pasar). Luego revisa Files changed en GitHub como si el PR fuera de un compañero.
31. [usado 2026-11-03] (grok-busqueda-tiempo-real) Actualidad con Grok: pide que cite cada afirmación con su enlace y marque [SIN FUENTE] lo que no lo tenga. Un post de X prueba que alguien lo dijo, no que sea un hecho. Abre dos fuentes antes de usar nada. Guía: https://stackailearn.com/es/tutorials/grok-busqueda-tiempo-real/
32. [usado 2026-11-03] (claude-analizar-pdf) Con un PDF largo en Claude, no empieces con «resúmeme esto». Pide antes un mapa en tabla: sección, páginas e idea principal. Compáralo con el índice y luego pregunta por partes, con la página citada en cada respuesta. Guía: https://stackailearn.com/es/tutorials/claude-analizar-pdf/
33. [usado 2026-11-04] (claude-escritura-larga) Para editar un texto largo con Claude sin perder tu voz: pega un párrafo que sí enviarías en vez de cinco adjetivos y pide «reescribe solo la sección 2». Al final: «marca afirmaciones, cifras y nombres que no estaban en el original».
34. [usado 2026-11-05] (midjourney-prompts-que-funcionan) En Midjourney, quita «cinematic, 8k, masterpiece» del prompt. Escribe el plano: sujeto, ángulo, luz, fondo y una exclusión, y fija el --ar según dónde irá la imagen (9:16 stories, 4:5 feed, 16:9 web). Luego cambia una sola cosa por iteración: luz o cámara.
35. [usado 2026-11-05] (chatgpt-primeros-pasos) Briefing de cuatro líneas para ChatGPT: objetivo, audiencia, formato y restricciones. Debajo, los hechos en viñetas, y cierra con «si te falta un dato, pregunta o escribe [FALTA]». Esa última línea cambia más el resultado que pedirle «sé profesional».
36. [usado 2026-11-06] (chatgpt-projects-organizar-trabajo) Un Project de ChatGPT que dura semanas se convierte en un cajón si no lo ordenas. Un chat por subtarea con nombre claro, 4–8 archivos canónicos sin copias viejas y Branch chat para probar otro enfoque sin perder el hilo original.
37. [usado 2026-11-07] (elegir-modelo-texto) Antes de elegir modelo, completa esta frase: «Necesito [entregable] para [audiencia]». Si no puedes, el problema es el encargo, no el chat. Y si el entregable lleva citas, empieza por Perplexity y abre tú cada enlace. Guía: https://stackailearn.com/es/tutorials/elegir-modelo-texto/
38. [usado 2026-11-07] (chatgpt-analizar-excel) Antes de pedir conclusiones sobre un Excel en ChatGPT, pide un mapa: hojas, filas, columnas y vacíos. Contrasta tres celdas con el archivo. Si el mapa no cuadra, paras: no calcules nada todavía.
39. [usado 2026-11-08] (notebooklm-vs-perplexity-investigacion) NotebookLM y Perplexity no cubren el mismo tramo. Perplexity cuando aún no tienes el material: mapa con citas y dos fuentes abiertas. NotebookLM cuando las fuentes ya están elegidas y quieres cita al pasaje.
40. [usado 2026-11-08] (grok-vs-claude-diario) Grok o Claude para el día: Grok si el día es un recap o actualidad; Claude si el entregable es un documento que vas a reescribir. Combo habitual: contraste en Grok, la pieza final en Claude. Guía: https://stackailearn.com/es/compare/grok-vs-claude-diario/
41. [usado 2026-11-09] (gemini-workspace-primer-flujo) Gemini en Gmail: no empieces con «contesta este correo». Abre Pregunta a Gemini sobre el hilo y pide solo un resumen con decisiones, fechas y nombres, con «no consta» donde no haya dato. Contrástalo con los mensajes y luego pide el borrador.
42. [usado 2026-11-10] (hermes-agent-primer-flujo) Primer día con Hermes Agent: instala, elige un modelo con al menos 64K de contexto y comprueba un chat real («resume este directorio en 5 viñetas»). Si algo falla, hermes doctor antes que nada. El gateway de Telegram o Slack, el segundo día.
43. [usado 2026-11-10] (chatgpt-alternativas) ¿ChatGPT, Claude o Grok? Antes de abrir un chat, escribe el encargo en cuatro líneas: entregable, audiencia, tono y lo que no quieres. Pega el mismo bloque en cada herramienta y quédate con el borrador que menos tengas que reescribir. Guía: https://stackailearn.com/es/tutorials/chatgpt-alternativas/
44. [usado 2026-11-11] (alternativas-midjourney) Antes de cambiar Midjourney por otra herramienta, escribe el brief en cuatro líneas: sujeto y encuadre, luz y fondo, formato y restricciones. ¿Texto legible en la imagen? Prueba ChatGPT. ¿El still acabará siendo un clip? Runway. ¿Grid y estilo? Midjourney.
45. [usado 2026-11-12] (hermes-agent-segundo-flujo) Para probar el gateway de Hermes Agent en Telegram, no mandes «hola». Pide algo comprobable: «lista los archivos de este directorio y dime cuál parece el entrypoint». Si responde con nombres reales, las tools remotas funcionan. Guía: https://stackailearn.com/es/tutorials/hermes-agent-segundo-flujo/
46. [usado 2026-11-12] (grok-bot-primera-rutina) Antes de programar una rutina en Grok Bot, elige un trabajo que ya te haya salido igual dos veces a mano. Escribe la intención (objetivo, formato, límites y dónde parar), no una lista de clics, y prográmala en horario laborable, nunca de madrugada.
47. [usado 2026-11-13] (grok-bot-segundo-teammate) Antes de crear un segundo teammate en Grok Bot, escribe la frase del Bot 1 y la del Bot 2. Si el oficio nuevo es solo otro tono, amplía las instrucciones del primero. ¿El segundo necesitaría herramientas o riesgos que el primero no debería tocar? Si no, quédate en uno.
48. [usado 2026-11-14] (cursor-vs-v0-prototipo) ¿Cursor o v0 para prototipar una web? v0 si aún no hay repo: un prompt o captura y preview en Vercel. Cursor si la web ya es un repo y el prototipo debe quedar como un diff que puedes rechazar. Combo habitual: la primera versión clicable en v0 y el pulido en Cursor.
49. [retirado 2026-11-14: estilo antiguo] (claude-projects-vs-chatgpt-projects) Claude o ChatGPT Projects: Claude para docs largos con tono uniforme e instrucciones y archivos compartidos. ChatGPT si varios hilos se apoyan en el historial del mismo Project. En Claude, un chat no recuerda otro si no lo vuelcas al conocimiento. Guía: https://stackailearn.com/es/compare/claude-projects-vs-chatgpt-projects/
50. [retirado 2026-11-14: estilo antiguo] (perplexity-preparar-reunion, hilo)
   1/ Antes de abrir Perplexity para una reunión, escribe en el doc: «El [fecha] decidimos [decisión] con [audiencia]. Hoy no cerramos [fuera de alcance].» Sin esa frase, la búsqueda se convierte en un tema. Si no puedes nombrar la decisión, todavía no toca buscar. 🧵
   2/ No pidas «prepárame la reunión»: devuelve un discurso. Pregunta con la fecha, excluye listados de afiliados y posts sin fecha, y pide separar hecho, estimación y opinión. La primera respuesta es el mapa, no el texto que vas a leer en voz alta.
   3/ Sigue en la misma sesión. Abre dos fuentes y anota título, autor o institución y fecha: si no puedes fecharlas, no entran. Government, Academic o Trusted describen el dominio, no la frase. Pide tres preguntas abiertas, cada una con su cita. Sin cita, no entra.
   4/ La hoja se escribe fuera del chat: la decisión, 4–6 afirmaciones con título y fecha de la fuente, huecos, las tres preguntas y «No diremos». El botón Copy no es la hoja. Antes de entrar, contrasta la cifra con la pestaña de la fuente, no con el resumen.
51. [retirado 2026-11-14: estilo antiguo] (zapier-ai-vs-make) ¿Zapier o Make? Flujo corto, disparador y pocas acciones, sin canvas: Zapier. Si el mismo disparo se ramifica, transformas JSON o iteras listas: Make, con router e inspección de bundles. La IA no sustituye definir disparador, permisos y qué pasa si falla un paso.
52. [retirado 2026-11-14: estilo antiguo] (gemini-vs-chatgpt-diario) Gemini si el día pasa por Gmail, Drive, Docs o Calendar: adjunta el archivo. Workspace no «ya sabe» un doc que no compartiste. ChatGPT para variantes en un Project. Citas solo de PDFs que tú subiste: NotebookLM. Guía: https://stackailearn.com/es/compare/gemini-vs-chatgpt-diario/
53. [retirado 2026-11-14: estilo antiguo] (notebooklm-vs-chatgpt-projects) Paquete cerrado de PDFs o notas, cita al pasaje y sin mezclar la web: NotebookLM. Un cuaderno por tema; mezclar temas diluye las citas. ChatGPT Projects si además redactas y varios hilos heredan las instrucciones. Un archivo que no está en el Project no se recuerda.
54. [retirado 2026-11-14: estilo antiguo] (ideogram-vs-midjourney-tipografia) Si el titular va dentro del JPG, Ideogram: escríbelo entre comillas y descarta las variantes con errores antes de retocar el estilo. Midjourney si el texto lo añades tú: letras y logos en la imagen suelen fallar. No publiques un cartel sin leerlo letra a letra.
55. [retirado 2026-11-14: estilo antiguo] (v0-vs-lovable-ui) Landing de campaña: v0. Pide secciones y modo claro/oscuro, y copia el código a tu Next en Vercel. Demo con CRUD y login: Lovable y Supabase; revisa permisos antes de datos sensibles. Luego endurece el diff en Cursor. Guía: https://stackailearn.com/es/compare/v0-vs-lovable-ui/
56. [retirado 2026-11-14: estilo antiguo] (claude-vs-chatgpt-escritura) Documento largo, con secciones, tono uniforme y varias pasadas: Claude. Primer borrador, variantes de tono o un Custom GPT que repites: ChatGPT. Combo habitual: esbozo en ChatGPT y edición fina en Claude. No publiques el primer borrador sin esa pasada.
57. [retirado 2026-11-14: estilo antiguo] (grok-bot-vs-hermes-agent) Grok Bot no es el chat de Grok: es un teammate con ordenador en la nube si el trabajo acaba en mail, docs o un panel. Hermes Agent si el entregable es un script, un diff o un bot en Telegram, en tu máquina. Sin oficio claro, Grok Bot improvisa y ensucia la máquina compartida.
58. [retirado 2026-11-14: estilo antiguo] (elevenlabs-vs-suno) ElevenLabs: voz hablada, guion de 30–90 s ya cerrado. Suno: música, con género, tempo y tema; no pegues un guion de locución. Mismo clip: Runway el vídeo, ElevenLabs la voz, Suno el fondo. El montaje, en un editor. Guía: https://stackailearn.com/es/compare/elevenlabs-vs-suno/
59. [retirado 2026-11-14: estilo antiguo] (chatgpt-vs-perplexity) Perplexity para acotar hechos: abre al menos dos fuentes y mira fecha y autor. Pasa a ChatGPT cuando ya tienes 3 hechos verificados y toca redactar o variar el tono. Si pegas el párrafo de Perplexity en el informe, publicas al intermediario, no la fuente.

60. [usado 2026-11-14] (descript-editar-podcast, hilo de 3)
   1/ De 15 minutos de entrevista a un episodio de 12. Sin tocar la waveform.
   2/ En Descript borras la intro repetida y dos tangentes en el transcript. El audio se recorta detrás. Remove filler words, una sola vez. Luego lo escuchas: el oído manda.
   3/ Studio Sound al máximo deja la voz metálica. Úsalo con moderación. MP3 al host el mismo día.

   Guía: https://stackailearn.com/es/tutorials/descript-editar-podcast/
   <!-- fuente: tutorial descript-editar-podcast, caso «Entrevista de 15 minutos a episodio de 12»: intro repetida y dos tangentes, el audio se recorta al borrar texto, Remove filler words una vez y escuchar, Studio Sound metálico si va al máximo, MP3 al host el mismo día. -->
61. (zapier-ai-primera-automatizacion, hilo de 3)
   1/ Publish en Zapier no es un simulacro. Si el destino es Gmail, el correo sale de verdad.
   2/ Un prompt de «automatiza mi trabajo con ChatGPT» deja que Copilot te elija la app, el evento y los campos. Publicar ese borrador manda texto de tu hoja a la API de OpenAI.
   3/ Antes de pulsar Publish: una frase clara, una fila real, el campo bien mapeado y el Data out leído.

   Guía: https://stackailearn.com/es/tutorials/zapier-ai-primera-automatizacion/
   <!-- fuente: tutorial zapier-ai-primera-automatizacion. La prueba de la acción de Gmail se ejecuta de verdad. Un prompt «automatiza mi trabajo con ChatGPT» deja a Copilot la app, el evento y los campos; publicar envía el texto de la hoja a la API de OpenAI. Antes de Publish: una frase, una fila real, el campo mapeado y Data out leído. -->
62. (midjourney-variaciones-upscale, suelto)
   Acabas de hacer upscale en Midjourney a ~2048 px. Si ahora pulsas Pan, Zoom Out o Edit/Vary Region, te lo devuelve a SD. Y vuelves a gastar el upscale.

   Lo documenta V8.2. Si tocas la imagen HD con esas herramientas, otra vez Upscale Subtle.

   https://stackailearn.com/es/tutorials/midjourney-variaciones-upscale/
   <!-- fuente: tutorial midjourney-variaciones-upscale. En V8.2 el upscale pasa a ~2048 px en el lado largo. Pan, Zoom Out o Edit/Vary Region sobre HD lo devuelven a SD; hay que volver a Upscale Subtle. -->
63. (chatgpt-vs-perplexity, suelto)
   Dejad de usar ChatGPT para investigar. No es un buscador.

   Para acotar hechos, Perplexity: abre al menos dos fuentes y mira fecha y autor. ChatGPT entra cuando ya tienes esos datos y toca redactar o cambiar el tono.

   https://stackailearn.com/es/compare/chatgpt-vs-perplexity/
   <!-- fuente: comparativa chatgpt-vs-perplexity. Perplexity para acotar hechos y abrir fuentes; ChatGPT para redactar o variar el tono. La FAQ lo trata como respuesta con citas frente al hábito de redactar. Abrir al menos dos fuentes y mirar fecha y autor: comparativa y tutorial perplexity-preparar-reunion. -->
64. (tools, hilo de 4)
   1/ Midjourney no tiene un plan gratuito útil a largo plazo. Estas 5 sí lo tienen. Cubren imagen, voz, música, subtítulos y documentos.
   2/ Ideogram: carteles con texto, con tier gratuito. CapCut: subtítulos, también con tier gratis. Revisa los límites actuales en cada sitio.
   3/ ElevenLabs: voz, plan gratis con créditos mensuales limitados. Suno: unos 50 créditos al día (~10 canciones), con marca de agua y sin derechos comerciales.
   4/ NotebookLM: gratis con cuenta de Google, con límites que pueden cambiar. Solo trabaja con las fuentes que tú le subes.

   Directorio: https://stackailearn.com/es/tools/
   <!-- fuente: ficha midjourney: no hay plan gratuito útil a largo plazo. Ficha ideogram: tier gratuito. Ficha capcut: tier gratuito con captions. Ficha elevenlabs: plan gratuito con créditos mensuales limitados. Ficha suno: unas 50 créditos diarios (~10 canciones), marca de agua, sin derechos comerciales. Ficha notebooklm: gratis con cuenta de Google, límites que pueden cambiar, solo con las fuentes que subes. -->
65. (ideogram-vs-midjourney-tipografia, suelto)
   Para un cartel con titular, Midjourney pierde. Gana Ideogram, y no por poco.

   En Midjourney las letras suelen fallar o distorsionarse. En Ideogram escribes el copy entre comillas y descartas las variantes con errores.

   https://stackailearn.com/es/compare/ideogram-vs-midjourney-tipografia/
   <!-- fuente: comparativa ideogram-vs-midjourney-tipografia. En Midjourney letras y logos suelen fallar o distorsionarse. FAQ del cartel: Ideogram, copy entre comillas y descartar variantes con errores. -->
66. (cursor-depurar-errores, suelto)
   De «arréglalo» a un diff de 2–3 archivos. En Cursor el agente no edita hasta que hay hipótesis.

   Pega el stack trace entero. Pide 3–5 causas, de más a menos probable, sin código. El fix va en una rama. El test lo corres tú.

   https://stackailearn.com/es/tutorials/cursor-depurar-errores/
   <!-- fuente: tutorial cursor-depurar-errores. «Arregla el error» sin log. Hipótesis: 3–5 causas, de más a menos probable, sin código. Alcance: 2–3 archivos en una rama. El test lo corres tú en la terminal. -->
67. (claude-analizar-pdf, hilo de 3)
   1/ «Resúmeme este PDF» es el error caro. Claude te devuelve un texto fluido y no sabes qué página lo sostiene.
   2/ Sube el PDF y pide un mapa en tabla: sección, páginas, idea principal. Compáralo con el índice. Si falta una sección, dilo antes de preguntar.
   3/ Cada respuesta cita la página. Si no está en el documento, que escriba [NO ESTÁ EN EL DOCUMENTO]. Las cifras las compruebas tú en el PDF.

   Guía: https://stackailearn.com/es/tutorials/claude-analizar-pdf/
   <!-- fuente: tutorial claude-analizar-pdf. «Resúmeme este PDF» da un texto fluido sin página. El mapa es una tabla (sección, páginas, idea principal) que se compara con el índice. Cada respuesta cita la página; si no está, [NO ESTÁ EN EL DOCUMENTO]. Las cifras se comprueban en el PDF. -->
68. (suno-variaciones-stems, suelto)
   No pidas Get Stems en el plan gratis de Suno. No es la versión B del Create.

   Remix y Extend están en la ficha de la keeper, en Library. Los stems piden Pro o Premier y gastan créditos aparte. En Free no hay stems ni derechos comerciales.

   https://stackailearn.com/es/tutorials/suno-variaciones-stems/
   <!-- fuente: tutorial suno-variaciones-stems. Get Stems no está en Free y no es la versión B de Create. Remix y Extend salen de la ficha en Library. Stems piden Pro o Premier y consumen créditos aparte. Free: sin stems ni derechos comerciales. -->
69. (notion-ai-bases-datos, suelto)
   Deja de rellenar Notion a mano, fila a fila. Pegar el CSV en otro chat tampoco sirve.

   Una columna de IA, una tarea: resumen, etiqueta o extracción. Prueba el autofill en una vista filtrada. Si inventa un paso que no está en las columnas, paras.

   https://stackailearn.com/es/tutorials/notion-ai-bases-datos/
   <!-- fuente: tutorial notion-ai-bases-datos. Rellenar a mano o pegar el CSV en otro chat se desactualiza. Una tarea por columna de IA: resumen, etiqueta o extracción. Autofill primero en una vista filtrada. Si inventa un paso que no está en las columnas, no pases a lote. -->
70. (runway-primer-clip, hilo de 4)
   1/ Cuatro reglas y sales con un clip de 5 s en Runway. Sin texto-a-vídeo a la primera.
   2/ El still ya manda. Imagen-a-vídeo, no texto-a-vídeo. Modelo de prueba: Gen-4 Turbo.
   3/ Prompt de motion: una acción y una cámara. Duración de 5 s. Dos o tres tomas.
   4/ Te quedas con el gesto que se lee. Si las tres fallan igual, cambia el verbo antes de subir de modelo.

   Guía: https://stackailearn.com/es/tutorials/runway-primer-clip/
   <!-- fuente: tutorial runway-primer-clip. Still en imagen-a-vídeo, no texto-a-vídeo. Pruebas en Gen-4 Turbo, 5 s. Prompt: una acción y una cámara, 2–3 tomas. Si las tres fallan igual, cambia el verbo antes de subir de modelo. -->
71. (grok-vs-claude-diario, suelto)
   Para el recap del día, Claude pierde. Gana Grok.

   Grok si hoy es actualidad o un mensaje corto. Claude si el entregable es un documento que vas a reescribir. El contraste, en Grok. La pieza que envías, en Claude.

   https://stackailearn.com/es/compare/grok-vs-claude-diario/
   <!-- fuente: comparativa grok-vs-claude-diario. Grok si el día es un recap, actualidad o un mensaje corto. Claude si el entregable es un documento que vas a reescribir. Combo: contraste en Grok, la pieza que envías en Claude. -->
72. (notebooklm-primer-briefing, suelto)
   De diez PDFs sueltos a un briefing que puedes auditar. NotebookLM no busca en la web.

   Un cuaderno, 3–5 fuentes del mismo tema. Pregunta con audiencia y fecha. Abre cada cita. Lo que no está en el pasaje, fuera. El briefing sale de Studio.

   https://stackailearn.com/es/tutorials/notebooklm-primer-briefing/
   <!-- fuente: tutorial notebooklm-primer-briefing. El fallo es subir diez PDFs al azar. No busca en la web. 3–5 fuentes del mismo tema. Pregunta con audiencia y fecha. Abre cada cita y quita lo que no está en el pasaje. El briefing se genera en Studio. -->
73. (leonardo-primer-flujo, hilo de 3)
   1/ En Leonardo, el formato mal puesto es el error caro. No lo arreglas con un upscale: regeneras.
   2/ Antes de Generate, fija la relación de aspecto (4:5, 9:16 o 16:9) y un lote de 4. Sujeto, luz y fondo. Una exclusión: «no text on bottle». Nada de «cinematic 8K».
   3/ Iteras un solo eje: luz o fondo. Upscale solo del keeper. Cuatro upscales del mismo fallo multiplican tokens y no te dejan entregable.

   Guía: https://stackailearn.com/es/tutorials/leonardo-primer-flujo/
   <!-- fuente: tutorial leonardo-primer-flujo. El formato incorrecto es el error más caro: se fija antes de Generate. Relación de aspecto, lote de 4, sujeto luz y fondo, exclusión «no text on bottle», sin «cinematic 8K». Un solo eje. Upscale solo del keeper: cuatro upscales del mismo error multiplican tokens. -->
74. (elevenlabs-primer-voiceover, suelto)
   En ElevenLabs no hay preview gratis de tu texto. Cada Generate gasta un crédito por carácter.

   Prueba la voz con una frase. Si no convence, reescribe esa frase antes de regenerar. Guion de 4–6 frases. Voz de biblioteca, no una clonación.

   https://stackailearn.com/es/tutorials/elevenlabs-primer-voiceover/
   <!-- fuente: tutorial elevenlabs-primer-voiceover. No hay preview gratis del texto: Generate gasta 1 crédito por carácter. Prueba con una frase y reescribe antes de regenerar. Guion de 4–6 frases. Voz de biblioteca, no clonación. -->
75. (perplexity-preparar-reunion, suelto)
   Deja de copiar la respuesta de Perplexity al orden del día. Ese párrafo no sostiene una cifra.

   Escribe antes la decisión, la audiencia y lo que hoy no cierras. Abre dos fuentes y anota título, autor o institución, y fecha. La hoja se escribe fuera.

   https://stackailearn.com/es/tutorials/perplexity-preparar-reunion/
   <!-- fuente: tutorial perplexity-preparar-reunion. Copiar la respuesta al orden del día deja la cifra sin origen. Antes: decisión, audiencia y lo que no se cierra. Abre dos fuentes y anota título, autor o institución, y fecha. La hoja se escribe fuera del chat. -->
76. (capcut-subtitulos-broll, hilo de 3)
   1/ Tres pasos y publicas el short. En CapCut, exportar sin leer los subtítulos te deja los nombres mal.
   2/ Proyecto 9:16. Auto captions en el idioma que hablas. Reproduce el clip entero y corrige nombres, cifras y jerga.
   3/ Un solo estilo, grande y con contraste. El B-roll va donde el guion lo pide, no de relleno. Luego exportas el MP4.

   Guía: https://stackailearn.com/es/tutorials/capcut-subtitulos-broll/
   <!-- fuente: tutorial capcut-subtitulos-broll. Proyecto 9:16, Auto captions en el idioma hablado, reproducir entero y corregir nombres, cifras y jerga. Un estilo grande y con contraste. B-roll solo donde el guion lo pide. Export MP4 después. -->
77. (v0-vs-lovable-ui, suelto)
   Para una landing de campaña, Lovable sobra. Gana v0.

   Pides secciones y modo claro/oscuro, y copias el código a tu Next en Vercel. CRUD y login para una demo: Lovable, con Supabase. Revisa permisos antes de meter datos sensibles.

   https://stackailearn.com/es/compare/v0-vs-lovable-ui/
   <!-- fuente: comparativa v0-vs-lovable-ui. Landing de campaña: v0, secciones, modo claro/oscuro y el código a un Next en Vercel. CRUD y login: Lovable con Supabase, revisando permisos antes de datos sensibles. -->
78. (gemini-workspace-primer-flujo, suelto)
   De «contesta este correo» a un borrador que puedes señalar. En Gmail, Gemini no empieza en el chat suelto.

   Abre Pregunta a Gemini sobre ese hilo. Pide el resumen: decisiones, fechas, nombres. Si no hay dato, «no consta». Contrástalo con los mensajes.

   https://stackailearn.com/es/tutorials/gemini-workspace-primer-flujo/
   <!-- fuente: tutorial gemini-workspace-primer-flujo. No empieces con «contesta este correo» ni en gemini.google.com. Pregunta a Gemini sobre el hilo: resumen de decisiones, fechas y nombres, con «no consta» donde no haya dato. Contrasta con los mensajes antes del borrador. -->
79. (zapier-ai-vs-make, suelto)
   Un Zap con muchos pasos por disparo te penaliza en tareas. Si se ramifica, el sitio es Make.

   Zapier si es corto: un disparador y pocas acciones, sin canvas. Make si transformas JSON o iteras listas. El disparador y el fallo los defines tú.

   https://stackailearn.com/es/compare/zapier-ai-vs-make/
   <!-- fuente: comparativa zapier-ai-vs-make. Muchos pasos por disparo penalizan tareas en Zapier. Zapier: flujo corto, disparador y pocas acciones, sin canvas. Make: el disparo se ramifica, transformas JSON o iteras listas. La IA no sustituye definir disparador, permisos y qué pasa si falla un paso. -->
