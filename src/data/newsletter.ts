/**
 * Captura de emails. Rellena UN proveedor y deja el resto vacío.
 *
 * Buttondown: username de la URL buttondown.com/{username}
 * ConvertKit: ID numérico del form (Settings → Embed)
 * MailerLite: action URL completa que te da el constructor de formularios
 * Beehiiv: publication ID (pub_…) o la action URL del embed
 *
 * No lo rellenes hasta tener 3–4 envíos de valor. Ver ops/search-console.md.
 */
export type NewsletterProvider =
  | "buttondown"
  | "convertkit"
  | "mailerlite"
  | "beehiiv";

export const newsletter = {
  enabled: true,
  provider: "buttondown" as NewsletterProvider,
  buttondown: {
    username: "",
  },
  convertkit: {
    formId: "",
  },
  mailerlite: {
    formAction: "",
  },
  beehiiv: {
    publicationId: "",
    /** Si Beehiiv te da una action URL propia, pégala aquí y gana a publicationId. */
    formAction: "",
  },
  /** Banner inferior: segundos y % de scroll. El primero que se cumpla. */
  promptAfterSeconds: 22,
  promptAfterScroll: 0.42,
} as const;
