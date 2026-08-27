import { existsSync } from "fs";
import { join } from "path";

/** True if `src` maps to a file under `public/`. */
export function publicAssetExists(src?: string): boolean {
  if (!src) return false;
  const relative = src.replace(/^\//, "");
  return existsSync(join(process.cwd(), "public", relative));
}
