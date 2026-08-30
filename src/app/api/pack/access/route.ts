import { NextResponse } from "next/server";
import { packLessons } from "@/data/pack-lessons";
import { previewAllowed, verifyStripeSession } from "@/lib/pack-access";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale") === "es" ? "es" : "en";
  const sessionId = url.searchParams.get("session_id") ?? "";

  if (previewAllowed(url)) {
    return NextResponse.json({
      ok: true,
      preview: true,
      lessons: packLessons[locale],
    });
  }

  const result = await verifyStripeSession(sessionId);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 401 });
  }

  return NextResponse.json({
    ok: true,
    preview: false,
    lessons: packLessons[locale],
  });
}
