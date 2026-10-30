# Banco de posts para X (valor directo)

Objetivo: 2 posts al día en X. Siempre vía Buffer Free (nunca el composer de x.com).

## Reglas
- Español. Un truco concreto o un mini hilo (2–4 posts) que salga de un tutorial publicado. No vale solo un titular con enlace.
- Nada de datos inventados: cada truco tiene que estar en el tutorial de origen.
- No escribas el dominio grok.com tal cual en el texto. Pon «Grok».
- El enlace a stackailearn.com va solo en 1 de cada 3 posts, como mucho. En los hilos va en el último post.
- Un post debe caber en 280 caracteres. Máximo 1–2 hashtags.
- Ritmo: 1 post de valor por la mañana y 1 por la tarde. El post de la pieza nueva del día sustituye a uno de los dos.
- Al publicar uno, márcalo con `[usado AAAA-MM-DD]`.

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
25. (midjourney-variaciones-upscale) En Midjourney, las variaciones exploran y el upscale entrega resolución. No escales un plano que aún no te convence: varía hasta cerrar la composición y haz upscale una sola vez. Guía: https://stackailearn.com/es/tutorials/midjourney-variaciones-upscale/
26. (runway-primer-clip) Primer clip con Runway: sube un still que ya te convence y usa imagen-a-vídeo. Prueba en Gen-4 Turbo, 5 s, y escribe solo motion: una acción y un movimiento de cámara. Si las tres tomas fallan igual, cambia el verbo antes de subir de modelo.
27. (leonardo-primer-flujo) En Leonardo AI, el error más caro es el formato: fija la relación de aspecto antes de pulsar Generate. Lote de 4, prompt con sujeto, luz y fondo (nada de «cinematic 8K») y una exclusión explícita como «no text on bottle». Upscale solo del keeper.
28. (chatgpt-gpts-cuando) ¿Merece la pena un GPT? Solo si repites el mismo rol con reglas estables. Para una pregunta puntual, chat suelto. Para un trabajo de semanas con archivos, un Project. Un GPT por rol, y pruébalo con tres prompts reales antes de compartirlo. Guía: https://stackailearn.com/es/tutorials/chatgpt-gpts-cuando/
