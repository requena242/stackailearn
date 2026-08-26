import { newsletter, type NewsletterProvider } from "@/data/newsletter";

export type SubscribeTarget = {
  action: string;
  emailField: string;
  hidden: Record<string, string>;
  /** Beehiiv API pública no acepta CORS; el resto suele ir por POST de formulario. */
  mode: "form";
};

export function newsletterEnabled() {
  return newsletter.enabled;
}

export function getSubscribeTarget(): SubscribeTarget | null {
  if (!newsletter.enabled) return null;

  const provider: NewsletterProvider = newsletter.provider;

  if (provider === "buttondown" && newsletter.buttondown.username) {
    return {
      action: `https://buttondown.com/api/emails/embed-subscribe/${newsletter.buttondown.username}`,
      emailField: "email",
      hidden: { embed: "1" },
      mode: "form",
    };
  }

  if (provider === "convertkit" && newsletter.convertkit.formId) {
    return {
      action: `https://app.convertkit.com/forms/${newsletter.convertkit.formId}/subscriptions`,
      emailField: "email_address",
      hidden: {},
      mode: "form",
    };
  }

  if (provider === "mailerlite" && newsletter.mailerlite.formAction) {
    return {
      action: newsletter.mailerlite.formAction,
      emailField: "fields[email]",
      hidden: { "ml-submit": "1", anticsrf: "true" },
      mode: "form",
    };
  }

  if (provider === "beehiiv") {
    if (newsletter.beehiiv.formAction) {
      return {
        action: newsletter.beehiiv.formAction,
        emailField: "email",
        hidden: {},
        mode: "form",
      };
    }
    if (newsletter.beehiiv.publicationId) {
      return {
        action: `https://api.beehiiv.com/v2/publications/${newsletter.beehiiv.publicationId}/subscriptions`,
        emailField: "email",
        hidden: {},
        mode: "form",
      };
    }
  }

  return null;
}
