/**
 * Empaqueta lecciones + markdown para las Functions (Workers no lee content/).
 * El campus nunca se sirve desde public/.
 */
import { execSync } from "node:child_process";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "content/pack");
const outDir = path.join(root, "functions/api/pack");

await mkdir(contentDir, { recursive: true });
await mkdir(outDir, { recursive: true });

execSync(
  `npx --yes tsx -e "import { writeFileSync } from 'fs'; import { packLessons } from './src/data/pack-lessons.ts'; writeFileSync('content/pack/lessons.json', JSON.stringify(packLessons))"`,
  { cwd: root, stdio: "inherit" },
);

const files = {};
for (const name of await readdir(contentDir)) {
  if (!name.endsWith(".md")) continue;
  files[name] = await readFile(path.join(contentDir, name), "utf8");
}

const lessonsRaw = await readFile(path.join(contentDir, "lessons.json"), "utf8");
const campus = `export const lessons = ${lessonsRaw};\nexport const files = ${JSON.stringify(files)};\n`;
await writeFile(path.join(outDir, "campus-data.js"), campus);
console.log(`pack campus: ${Object.keys(files).length} markdown files synced`);
