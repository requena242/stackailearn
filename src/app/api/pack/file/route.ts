import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { packFiles } from "@/data/pack";
import { previewAllowed, verifyStripeSession } from "@/lib/pack-access";

const ALLOWED = new Set(
  packFiles.flatMap((file) => [file.filename.es, file.filename.en]),
);

export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name") ?? "";
  const sessionId = url.searchParams.get("session_id") ?? "";

  if (!ALLOWED.has(name) || name.includes("..") || name.includes("/")) {
    return new NextResponse("Not found", { status: 404 });
  }

  const allowed =
    previewAllowed(url) || (await verifyStripeSession(sessionId)).ok;
  if (!allowed) {
    return new NextResponse("Forbidden", { status: 401 });
  }

  const filePath = path.join(process.cwd(), "content/pack", name);
  const body = await readFile(filePath, "utf8");
  return new NextResponse(body, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "private, no-store",
      "content-disposition": `inline; filename="${name}"`,
    },
  });
}
