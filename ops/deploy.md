# Deploy

Producción: proyecto Cloudflare Pages `stackailearn`.

| Ajuste | Valor |
| --- | --- |
| Build | `npm run build` |
| Output | `out` |
| Node | 20 |
| Functions | `functions/` en la raíz |

## Git → Pages

El proyecto actual nació por **Direct Upload**. La API de Cloudflare no deja cambiar `source` a Git en ese tipo de proyecto.

Opciones (elige una):

1. **GitHub Action** (ya está en `.github/workflows/pages.yml`). En el repo: Settings → Secrets →
   - `CLOUDFLARE_API_TOKEN` (permisos Pages Edit + Account Read)
   - `CLOUDFLARE_ACCOUNT_ID` = `a2fe780e5de701ccd7570e3a03a78752`
   Un merge a `main` publica. El bot **no** despliega.
2. **Proyecto Pages nuevo desde Git** (`requena242/stackailearn`, branch `main`, build/output de la tabla) y mover los custom domains `stackailearn.com` / `www`. No se puede «conectar Git» al proyecto Direct Upload existente.

## Manual (si Git aún no está conectado)

```bash
npm run build
npx wrangler pages deploy out --project-name stackailearn --branch main --commit-dirty=true
```

## GitHub Action de respaldo

`.github/workflows/pages.yml` despliega con Wrangler si existen los secrets:

- `CLOUDFLARE_API_TOKEN` (Account → Pages: Edit, Account: Read)
- `CLOUDFLARE_ACCOUNT_ID` = `a2fe780e5de701ccd7570e3a03a78752`
