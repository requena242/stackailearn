/**
 * Export estático: Next no admite route handlers.
 * En `next dev` las rutas /api/pack/* sí existen.
 */
import { execSync } from "node:child_process";
import { rename, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const api = path.join(root, "src/app/api");
const stash = path.join(root, ".api-stash");

let moved = false;
try {
  await stat(api);
  await rename(api, stash);
  moved = true;
} catch {
  moved = false;
}

try {
  execSync("npx next build", {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, NEXT_OUTPUT: "export" },
  });
} finally {
  if (moved) {
    await rename(stash, api);
  }
}
