import { previewAllowed, verifyStripeSession } from "./verify-session.js";
import { files } from "./campus-data.js";

const ALLOWED = new Set(Object.keys(files));

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const name = url.searchParams.get("name") || "";
  const sessionId = url.searchParams.get("session_id") || "";

  if (!ALLOWED.has(name)) {
    return new Response("Not found", { status: 404 });
  }

  let allowed = previewAllowed(context.env, url);
  if (!allowed) {
    const result = await verifyStripeSession(context.env, sessionId);
    allowed = result.ok;
  }

  if (!allowed) {
    return new Response("Forbidden", { status: 401 });
  }

  return new Response(files[name], {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "private, no-store",
      "content-disposition": `inline; filename="${name}"`,
    },
  });
}
