import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/**
 * Plugin de next-intl: conecta `src/i18n/request.ts` con el App Router.
 * Export estático para desplegar en Cloudflare Pages (directorio `out/`).
 */
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "export",
  // Cloudflare Pages sirve mejor /es/index.html que /es.html
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
