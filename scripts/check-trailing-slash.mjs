#!/usr/bin/env node
/**
 * Falla si el HTML exportado publica una página interna sin barra final.
 * Mira href (también el payload RSC), canonical, hreflang, og:url y
 * JSON-LD url / @id / mainEntityOfPage.
 *
 * No cuenta assets (`og.png`, `.js`, `.txt`) ni `/_next`, `/api`, `/cdn-cgi`.
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const HOSTS = new Set(["stackailearn.com", "www.stackailearn.com"]);

const patterns = [
  /href="([^"]*)"/g,
  // Payload RSC: \"href\":\"/en/tutorials/slug\"
  /href\\":\\"([^\\"]*)\\"/g,
  /"url"\s*:\s*"([^"]*)"/g,
  /"@id"\s*:\s*"([^"]*)"/g,
  /"mainEntityOfPage"\s*:\s*"([^"]*)"/g,
  /\\"url\\":\\"([^\\"]*)\\"/g,
  /\\"@id\\":\\"([^\\"]*)\\"/g,
  /\\"mainEntityOfPage\\":\\"([^\\"]*)\\"/g,
];

function pagePath(raw) {
  if (!raw) return null;
  if (
    raw.startsWith("#") ||
    raw.startsWith("mailto:") ||
    raw.startsWith("tel:") ||
    raw.startsWith("javascript:")
  ) {
    return null;
  }
  if (raw.startsWith("//")) return null;

  if (/^https?:\/\//i.test(raw)) {
    let url;
    try {
      url = new URL(raw);
    } catch {
      return null;
    }
    if (!HOSTS.has(url.hostname)) return null;
    const hostAt = raw.indexOf(url.hostname);
    const rest = raw.slice(hostAt + url.hostname.length);
    return rest.split("?")[0].split("#")[0];
  }

  if (!raw.startsWith("/")) return null;
  return raw.split("?")[0].split("#")[0];
}

function isAsset(pathname) {
  return /\.[a-zA-Z0-9]{1,8}$/.test(pathname);
}

function violation(raw) {
  const pathname = pagePath(raw);
  if (pathname == null) return false;
  if (pathname === "") return true;
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/cdn-cgi/")
  ) {
    return false;
  }
  if (isAsset(pathname)) return false;
  return !pathname.endsWith("/");
}

function ogUrls(html) {
  const found = [];
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = match[0];
    if (!/property=["']og:url["']/i.test(tag)) continue;
    const content = tag.match(/content=["']([^"']*)["']/i);
    if (content) found.push(content[1]);
  }
  for (const match of html.matchAll(
    /\\"property\\":\\"og:url\\",\\"content\\":\\"([^"\\]*)\\"/g,
  )) {
    found.push(match[1]);
  }
  return found;
}

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith(".html")) files.push(full);
  }
  return files;
}

const files = await htmlFiles(outDir);
const problems = [];

for (const file of files) {
  const html = await readFile(file, "utf8");
  const seen = new Set();
  const candidates = [...ogUrls(html)];
  for (const pattern of patterns) {
    pattern.lastIndex = 0;
    for (const match of html.matchAll(pattern)) candidates.push(match[1]);
  }
  for (const raw of candidates) {
    if (!violation(raw) || seen.has(raw)) continue;
    seen.add(raw);
    problems.push(`${path.relative(root, file)}: ${raw}`);
  }
}

if (problems.length) {
  console.error(
    `URLs de página sin barra final (${problems.length}):\n  ${problems.slice(0, 40).join("\n  ")}`,
  );
  if (problems.length > 40) console.error(`  … y ${problems.length - 40} más`);
  process.exit(1);
}

console.log(`trailing slash OK (${files.length} HTML)`);
