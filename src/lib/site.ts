/** Identidad pública del sitio. Única fuente para SEO, footer y JSON-LD. */
export const SITE = {
  name: "StackAI Learn",
  shortName: "StackAI",
  domain: "stackailearn.com",
  url: "https://stackailearn.com",
  email: "hello@stackailearn.com",
  /**
   * Search Console: pega el content del meta que te da Google.
   * Vacío = no se emite la etiqueta.
   */
  googleSiteVerification: "SC63SF17xbyVQBj_kpBXlveqaxd8jlsFVvq9GRbAqDw",
  /**
   * Cloudflare Web Analytics: token del beacon (Dash → Analytics → Web Analytics).
   * Vacío = no se carga el script.
   */
  cloudflareBeaconToken: "9b10ca11d87548dcae94bbdc0ff628a1",
} as const;
