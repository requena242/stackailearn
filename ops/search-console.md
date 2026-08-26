# Search Console y analítica

El sitio ya expone `https://stackailearn.com/sitemap.xml` y `robots.txt`.

## Google Search Console (obligatorio para el bucle semanal)

1. Entra en [Google Search Console](https://search.google.com/search-console) con la cuenta de Google del proyecto.
2. Añade la propiedad **Prefijo de URL**: `https://stackailearn.com`.
3. Elige verificación por etiqueta HTML. Copia el `content` del meta.
4. Pégalo en `src/lib/site.ts` → `googleSiteVerification`.
5. Commit + push a `main` (Pages vuelve a desplegar).
6. Pulsa Verificar.
7. En GSC: Sitemaps → añade `https://stackailearn.com/sitemap.xml`.
8. Pide indexación de `/es/` y `/en/` y de 3–5 URLs fuertes (fichas + un tutorial).

Cuando GSC esté verificado, da acceso de **lectura** al Grok Bot (cuenta Google o export CSV). El bot no aplica cambios de copy sin PR.

## Cloudflare Web Analytics (opcional, sin cookies)

1. Dash → Analytics & logs → Web Analytics → Add site → `stackailearn.com`.
2. Copia el token del beacon.
3. Pégalo en `src/lib/site.ts` → `cloudflareBeaconToken`.
4. Push a `main`.

## Ads y newsletter

No los enciendas hasta que GSC muestre impresiones estables.

- Ads: `src/data/ads.ts` → `enabled: true` + `ca-pub-…` + slot IDs. Hace falta `/privacy` (ya existe).
- Newsletter: `src/data/newsletter.ts` → un proveedor (Beehiiv o Buttondown) y su ID. El formulario ya está en el footer.
