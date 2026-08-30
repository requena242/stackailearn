import { previewAllowed, verifyStripeSession } from "./verify-session.js";
import { lessons } from "./campus-data.js";

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const locale = url.searchParams.get("locale") === "es" ? "es" : "en";
  const sessionId = url.searchParams.get("session_id") || "";

  let allowed = false;
  if (previewAllowed(context.env, url)) {
    allowed = true;
  } else {
    const result = await verifyStripeSession(context.env, sessionId);
    allowed = result.ok;
    if (!allowed) {
      return Response.json({ ok: false, error: result.error }, { status: 401 });
    }
  }

  return Response.json({
    ok: true,
    preview: previewAllowed(context.env, url),
    lessons: lessons[locale] ?? lessons.en,
  });
}
