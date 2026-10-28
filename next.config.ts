import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/**
 * Plugin de next-intl: conecta `src/i18n/request.ts` con el App Router.
 * Export estático para desplegar en Cloudflare Pages (directorio `out/`).
 */
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // El export escribe `ruta/index.html`. En Pages esa URL canónica es `/ruta/`
  // (pretty URLs: `/ruta` y `/ruta/index.html` responden 308 hacia `/ruta/`).
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

// `next dev` sin export: existen /api/pack/*. El build de Pages pone NEXT_OUTPUT=export.
if (process.env.NEXT_OUTPUT === "export") {
  nextConfig.output = "export";
}

export default withNextIntl(nextConfig);
