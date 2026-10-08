# Canales de distribución

Pinterest descartado (oct 2026): bloqueó stackailearn.com por «spam» y no lo desbloquea (ticket 0LP47X-L7JNK).

Plan aprobado: X + SEO como base → Shorts/TikTok → Reddit (manual, con revisión) → LinkedIn → newsletter.

## IndexNow (Bing y buscadores asociados)

Sin cuenta de Microsoft: el sitio se verifica con un fichero de clave.

| Dato | Valor |
| --- | --- |
| Clave | `9304daf1ab0ef10eda9ce13d97d3df9e` |
| Fichero | `public/9304daf1ab0ef10eda9ce13d97d3df9e.txt` → https://stackailearn.com/9304daf1ab0ef10eda9ce13d97d3df9e.txt |
| Endpoint | `https://api.indexnow.org/indexnow` |
| Script | `scripts/indexnow-ping.mjs` |

No borres ni cambies el fichero de clave: si deja de servirse, los envíos dan 403.

### Uso

```bash
# URLs nuevas del día (ES y EN), tras el merge y el deploy verde
node scripts/indexnow-ping.mjs \
  https://stackailearn.com/es/tutorials/<slug>/ \
  https://stackailearn.com/en/tutorials/<slug>/

# Todo el sitemap (p. ej. tras un cambio grande)
node scripts/indexnow-ping.mjs --sitemap

# Ver el payload sin enviar
node scripts/indexnow-ping.mjs --dry-run <url…>
```

200 o 202 = aceptado. 403 = la clave no se encuentra en keyLocation. 422 = URL que no pertenece al host. 429 = demasiados envíos (no repetir las mismas URLs el mismo día).

### Rutina diaria

Después de que el deploy de Pages salga verde y las páginas nuevas den 200, haz ping solo de las URLs nuevas o modificadas (ES + EN). No reenvíes el sitemap entero cada día.

## Shorts / TikTok

Clips verticales 1080x1920, 30–45 s, generados a partir de los pasos del tutorial (sin capturas ni logos de terceros, sin música con copyright). Descripción corta + URL del tutorial + 3–5 hashtags. Se preparan como borrador; Javier publica o aprueba.
