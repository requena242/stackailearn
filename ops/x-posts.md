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
6. (claude-projects-primer-flujo) En Claude Projects, las instrucciones del proyecto valen más que cualquier prompt largo. Escribe tono, audiencia y qué no hacer, sube 2–3 documentos de referencia y deja de repetirlo en cada chat.
7. (claude-briefing-documento) Para un documento largo con Claude, empieza fuera: reúne el contexto, haz un outline y pon reglas de cita. Luego pide sección por sección. Si le pides el documento entero de golpe, te lo devuelve genérico.
8. (claude-artifacts-prototipo) ¿Quieres un prototipo con Claude Artifacts? Describe una sola pantalla con sus estados y pide cambios pequeños sobre el artifact. Si le pides «hazme la app», cada vuelta te la reescribe entera.
9. (cursor-como-ide-con-ia, hilo)
   1/ Mi método para que el agente de Cursor no rompa el repo:
   2/ Rama nueva y alcance cerrado: «solo este archivo / esta función».
   3/ Antes de tocar nada, que te dé un plan de 5 líneas.
   4/ Revisa el diff como si fuera un PR y pasa tu test. Guía: https://stackailearn.com/es/tutorials/cursor-como-ide-con-ia/
10. (cursor-reglas-proyecto) Las reglas de Cursor van versionadas en `.cursor/rules` como archivos `.mdc`. alwaysApply es para lo que debe cumplir siempre, y globs para reglas por carpeta. Si aún usas `.cursorrules`, toca migrar.
11. (grok-primer-flujo) Truco con Grok para temas de actualidad: pon la fecha en la pregunta y pídele que separe hechos de opiniones. Lo que importe, contrástalo con ChatGPT o Perplexity.
12. (perplexity-investigacion-con-fuentes) En Perplexity, la respuesta es solo el punto de partida. Abre las 2–3 fuentes que sostienen la afirmación clave antes de citarla tú.
13. (descript-editar-podcast) En Descript editas el audio editando el texto: borras una frase del transcript y desaparece del audio. Quita muletillas y silencios antes de ponerte con el montaje fino. Guía: https://stackailearn.com/es/tutorials/descript-editar-podcast/
14. (suno-variaciones-stems) Regla con Suno: si tres Remix seguidos con el mismo texto no mejoran nada, el problema es el brief y no la suerte. Cambia el tempo, los instrumentos o la letra. Separa los stems solo cuando ya tengas la versión final.