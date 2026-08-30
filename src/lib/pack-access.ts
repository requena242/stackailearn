import { STRIPE_PACK_PRICE_ID, STRIPE_PACK_PRODUCT_ID } from "@/data/pack-ids";

type VerifyResult = { ok: true } | { ok: false; error: string };

export function previewAllowed(url: URL): boolean {
  if (process.env.PACK_PREVIEW_ENABLED !== "1") return false;
  if (url.searchParams.get("preview") !== "1") return false;
  const secret = process.env.PACK_PREVIEW_SECRET ?? "";
  if (!secret) return false;
  return url.searchParams.get("secret") === secret;
}

export async function verifyStripeSession(
  sessionId: string,
): Promise<VerifyResult> {
  if (!sessionId || !/^cs_(test|live)_/.test(sessionId)) {
    return { ok: false, error: "bad_session" };
  }

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return { ok: false, error: "stripe_unconfigured" };
  }

  const res = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}?expand[]=line_items`,
    { headers: { Authorization: `Bearer ${key}` } },
  );
  const session = (await res.json()) as {
    error?: unknown;
    payment_status?: string;
    line_items?: {
      data?: Array<{
        price?: { id?: string; product?: string | { id?: string } };
      }>;
    };
  };

  if (!res.ok || session.error) {
    return { ok: false, error: "session_not_found" };
  }
  if (session.payment_status !== "paid") {
    return { ok: false, error: "not_paid" };
  }

  const match = (session.line_items?.data ?? []).some((item) => {
    const price = item.price ?? {};
    const product =
      typeof price.product === "string" ? price.product : price.product?.id;
    return price.id === STRIPE_PACK_PRICE_ID || product === STRIPE_PACK_PRODUCT_ID;
  });

  if (!match) {
    return { ok: false, error: "wrong_product" };
  }

  return { ok: true };
}
