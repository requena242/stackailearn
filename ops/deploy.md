# Deploy

Producción: proyecto Cloudflare Pages `stackailearn`.

| Ajuste | Valor |
| --- | --- |
| Build | `npm run build` |
| Output | `out` |
| Node | 20 |
| Functions | `functions/` en la raíz |

## Git → Pages (objetivo)

Repo: se crea en GitHub. En el Dash de Cloudflare:

1. Workers & Pages → `stackailearn` → Settings → Builds & deployments.
2. Connect to Git → GitHub → `requena242/stackailearn` (o el owner que salga).
3. Production branch: `main`.
4. Build command / output como la tabla.

A partir de ahí, un merge a `main` publica. El bot **no** despliega.

## Manual (si Git aún no está conectado)

```bash
npm run build
npx wrangler pages deploy out --project-name stackailearn --branch main --commit-dirty=true
```

## GitHub Action de respaldo

`.github/workflows/pages.yml` despliega con Wrangler si existen los secrets:

- `CLOUDFLARE_API_TOKEN` (Account → Pages: Edit, Account: Read)
- `CLOUDFLARE_ACCOUNT_ID` = `a2fe780e5de701ccd7570e3a03a78752`
