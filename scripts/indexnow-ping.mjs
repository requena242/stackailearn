#!/usr/bin/env node
/**
 * IndexNow ping (Bing, Yandex, Seznam, Naver… comparten los envíos).
 *
 * Uso:
 *   node scripts/indexnow-ping.mjs <url> [url…]       # URLs concretas
 *   node scripts/indexnow-ping.mjs --sitemap          # todas las del sitemap en vivo
 *   node scripts/indexnow-ping.mjs --file urls.txt    # una URL por línea
 *   añade --dry-run para ver el payload sin enviarlo.
 *
 * Solo acepta URLs de https://stackailearn.com. 200/202 = ok.
 * La clave está publicada en https://stackailearn.com/<KEY>.txt (public/<KEY>.txt).
 * Ver ops/channels.md.
 */
import { readFile } from "node:fs/promises";

const HOST = "stackailearn.com";
const KEY = process.env.INDEXNOW_KEY || "9304daf1ab0ef10eda9ce13d97d3df9e";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = process.env.INDEXNOW_ENDPOINT || "https://api.indexnow.org/indexnow";
const SITEMAP = `https://${HOST}/sitemap.xml`;
const BATCH = 10000; // límite del protocolo

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
let urls = [];

for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--dry-run") continue;
  if (a === "--sitemap") {
    const xml = await (await fetch(SITEMAP)).text();
    urls.push(...[...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]));
  } else if (a === "--file") {
    const txt = await readFile(args[++i], "utf8");
    urls.push(...txt.split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith("#")));
  } else {
    urls.push(a);
  }
}

urls = [...new Set(urls)];
const bad = urls.filter((u) => {
  try {
    return new URL(u).host !== HOST;
  } catch {
    return true;
  }
});
if (bad.length) {
  console.error(`URLs fuera de ${HOST} o inválidas:\n  ${bad.join("\n  ")}`);
  process.exit(2);
}
if (!urls.length) {
  console.error("Sin URLs. Uso: node scripts/indexnow-ping.mjs <url…> | --sitemap | --file f.txt [--dry-run]");
  process.exit(2);
}

let failed = false;
for (let i = 0; i < urls.length; i += BATCH) {
  const urlList = urls.slice(i, i + BATCH);
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
  if (dryRun) {
    console.log(JSON.stringify(body, null, 2));
    continue;
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  const ok = res.status === 200 || res.status === 202;
  console.log(`IndexNow ${res.status} ${ok ? "OK" : "ERROR"} — ${urlList.length} URLs${text ? ` — ${text.slice(0, 300)}` : ""}`);
  if (!ok) failed = true;
}
process.exit(failed ? 1 : 0);
