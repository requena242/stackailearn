/**
 * Publicidad. Una sola palanca.
 *
 * Para ir en vivo con AdSense:
 *   1. Pon `enabled: true`
 *   2. Sustituye `publisherId` por tu ca-pub-…
 *   3. Pega cada `slotId` que te dé AdSense
 *
 * Para Ezoic: `provider: "ezoic"` y el script de tu panel.
 * Enciende solo cuando Search Console muestre impresiones estables
 * (ver ops/search-console.md). Hace falta /privacy (ya existe).
 * Si `enabled` es false, no se carga ningún script de terceros.
 * `previewSlots` deja los huecos visibles (sin red) para no romper el diseño.
 */
export type AdProvider = "adsense" | "ezoic";
export type AdFormat = "horizontal" | "rectangle" | "sidebar";

export type AdSlotId =
  | "homeHero"
  | "tutorialAfterIntro"
  | "tutorialBetweenSteps"
  | "tutorialEnd"
  | "toolSidebar";

export type AdSlotConfig = {
  enabled: boolean;
  format: AdFormat;
  /** ID de unidad AdSense (solo números). */
  slotId?: string;
  /** Placeholder Ezoic, p. ej. ezoic-pub-ad-placeholder-1 */
  ezoicId?: string;
};

export const ads = {
  enabled: false,
  /** Muestra el recuadro reservado aunque los anuncios estén apagados. */
  previewSlots: true,
  provider: "adsense" as AdProvider,
  adsense: {
    publisherId: "ca-pub-XXXXXXXXXXXXXXXX",
  },
  ezoic: {
    scriptSrc: "https://www.ezojs.com/ezoic/sa.min.js",
  },
  /** Tras qué paso (1-index) va el anuncio intermedio. */
  betweenStepsAfter: 2,
  slots: {
    homeHero: {
      enabled: true,
      format: "horizontal",
      slotId: "",
      ezoicId: "ezoic-pub-ad-placeholder-home",
    },
    tutorialAfterIntro: {
      enabled: true,
      format: "horizontal",
      slotId: "",
      ezoicId: "ezoic-pub-ad-placeholder-intro",
    },
    tutorialBetweenSteps: {
      enabled: true,
      format: "rectangle",
      slotId: "",
      ezoicId: "ezoic-pub-ad-placeholder-steps",
    },
    tutorialEnd: {
      enabled: true,
      format: "horizontal",
      slotId: "",
      ezoicId: "ezoic-pub-ad-placeholder-end",
    },
    toolSidebar: {
      enabled: true,
      format: "sidebar",
      slotId: "",
      ezoicId: "ezoic-pub-ad-placeholder-sidebar",
    },
  } satisfies Record<AdSlotId, AdSlotConfig>,
} as const;

export type AdsConfig = typeof ads;
