# Afiliados (Javier, no el bot)

Hasta que haya una URL real aquí, los CTA usan `officialUrl`.

Pega la URL solo en `src/data/affiliates.ts`. No la pongas en el copy de la ficha.

## Programas a solicitar (prioridad)

| Herramienta | Dónde pedir | Notas |
| --- | --- | --- |
| Cursor | — | Sin programa público; ver Intentos · Cursor (2026-08-28). Mantener `officialUrl`. |
| Perplexity | partner / affiliate page oficial | |
| ChatGPT / OpenAI | si existe programa público; si no, dejar oficial | |
| Anthropic / Claude | igual | |
| Midjourney | suele no tener afiliado clásico | No inventar |
| Hosting / VPN / SaaS adyacente | Impact, PartnerStack, Rewardful | Solo si entra en una comparativa real |

## Intentos

### Cursor (2026-08-28)

- `cursor.com/partners` devuelve 404 (comprobado 2026-08-28).
- Personal de Cursor en el foro oficial (ago 2026) indicó que el programa de referidos se discontinuó y que no hay un programa de afiliados/partners separado para promotores en este momento.
  - https://forum.cursor.com/t/referral-feature-availability-differs-between-accounts/167333
  - https://forum.cursor.com/t/question-about-the-referral-program/167032
- [Benchmark Partners](https://cursor.com/blog/benchmarkpartners) son partners estratégicos enterprise, no un programa de afiliados para creadores.
- **Estado:** sin URL. Seguir usando `officialUrl`. Revisar más adelante; si aparece una URL real del programa, añadirla entonces en `src/data/affiliates.ts` con CTA `try`.

Cookie y comisión van en el dashboard del programa, no en el repo.

Cuando GSC tenga impresiones y haya 1–2 programas vivos, se puede pedir AdSense (`src/data/ads.ts`).

## Notas de investigación

### Perplexity — 2026-08-28

- Comprobado `partners.dub.co/perplexity` y `/apply`: 404 / no es un alta pública self-serve que podamos completar.
- El sitio oficial de Perplexity muestra referidos de suscriptores Pro y partners enterprise (`partnerships@perplexity.ai`), no un enlace de tracking de creador que nosotros poseamos.
- **Estado:** sin URL de tracking. Mantener `officialUrl`. Revisar más adelante; solo entonces añadir a `src/data/affiliates.ts`.
