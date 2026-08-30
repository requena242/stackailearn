/**
 * Verificación server-side de un Checkout Session de Stripe.
 * No usar desde el cliente.
 */

const PACK_PRICE_ID = "price_1U9p6xCYLwcRu72odnSEHXjQ";
const PACK_PRODUCT_ID = "prod_VA9PVelMzhoQQL";

export function previewAllowed(env, url) {
  if (env.PACK_PREVIEW_ENABLED !== "1") return false;
  if (url.searchParams.get("preview") !== "1") return false;
  const secret = env.PACK_PREVIEW_SECRET || "";
  if (!secret) return false;
  return url.searchParams.get("secret") === secret;
}

export async function verifyStripeSession(env, sessionId) {
  if (!sessionId || typeof sessionId !== "string") {
    return { ok: false, error: "missing_session" };
  }
  if (!/^cs_(test|live)_/.test(sessionId)) {
    return { ok: false, error: "bad_session" };
  }

  const key = env.STRIPE_SECRET_KEY;
  if (!key) {
    return { ok: false, error: "stripe_unconfigured" };
  }

  const res = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}?expand[]=line_items`,
    { headers: { Authorization: `Bearer ${key}` } },
  );

  const session = await res.json();
  if (!res.ok || session.error) {
    return { ok: false, error: "session_not_found" };
  }

  if (session.payment_status !== "paid") {
    return { ok: false, error: "not_paid" };
  }

  const items = session.line_items?.data ?? [];
  const match = items.some((item) => {
    const price = item.price || {};
    const product =
      typeof price.product === "string" ? price.product : price.product?.id;
    return price.id === PACK_PRICE_ID || product === PACK_PRODUCT_ID;
  });

  if (!match) {
    return { ok: false, error: "wrong_product" };
  }

  return { ok: true };
}
