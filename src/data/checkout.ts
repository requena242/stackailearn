/**
 * Checkout del pack. Sitio estático: Payment Link de Stripe (Gestedia SLU).
 * Producto propio (stackailearn), no Aptus ni FMT.
 * El extracto bancario dice GESTEDIA STACKAI.
 *
 * Success URL del link: https://stackailearn.com/pack/thanks
 * (la Function redirige al locale detectado).
 *
 * NEXT_PUBLIC_PACK_CHECKOUT_URL puede sustituir el link en el build.
 */
const LIVE_PAYMENT_LINK = "https://buy.stripe.com/28EcN45in3QE95944V14401";

export const PACK_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_PACK_CHECKOUT_URL?.trim() || LIVE_PAYMENT_LINK;

export const packCheckoutReady = PACK_CHECKOUT_URL.length > 0;
