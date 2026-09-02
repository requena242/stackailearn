/**
 * Export estático: Next no admite route handlers.
 * En `next dev` las rutas /api/pack/* sí existen.
 */
import { execSync } from "node:child_process";
import { cp, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const api = path.join(root, "src/app/api");
const stash = path.join(root, "node_modules/.cache/api-stash");

let moved = false;
try {
  await stat(api);
  await rm(stash, { recursive: true, force: true });
  await cp(api, stash, { recursive: true });
  await rm(api, { recursive: true, force: true });
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
    await rm(api, { recursive: true, force: true });
    await cp(stash, api, { recursive: true });
    await rm(stash, { recursive: true, force: true });
  }
}
