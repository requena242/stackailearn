import { chromium } from "playwright";
import { mkdirSync } from "fs";

const OUT = new URL("../tmp-captures/", import.meta.url);
mkdirSync(OUT, { recursive: true });

const targets = [
  { id: "chatgpt", url: "https://chatgpt.com/overview" },
  { id: "claude", url: "https://www.anthropic.com/claude" },
  { id: "claude-alt", url: "https://claude.com" },
  { id: "grok", url: "https://grok.com" },
  { id: "grok-xai", url: "https://x.ai/grok" },
  { id: "grok-bot", url: "https://cursor.com/bot/onboarding" },
  { id: "midjourney", url: "https://www.midjourney.com" },
  { id: "cursor", url: "https://cursor.com" },
  { id: "perplexity", url: "https://www.perplexity.ai" },
  { id: "runway", url: "https://runwayml.com" },
  { id: "notion-ai", url: "https://www.notion.com/product/ai" },
  { id: "hermes-agent", url: "https://hermes-agent.nousresearch.com" },
];

const cookieButtons = [
  "button:has-text('Accept all')",
  "button:has-text('Accept All')",
  "button:has-text('Accept')",
  "button:has-text('Aceptar todas')",
  "button:has-text('Aceptar')",
  "button:has-text('Reject all')",
  "button:has-text('Rechazar')",
  "button:has-text('I agree')",
  "button:has-text('Allow all')",
  "[id*='onetrust-accept']",
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1600, height: 900 },
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
});

for (const target of targets) {
  const dest = new URL(`${target.id}.png`, OUT);
  try {
    const response = await page.goto(target.url, {
      waitUntil: "domcontentloaded",
      timeout: 45000,
    });
    await page.waitForTimeout(3500);
    for (const sel of cookieButtons) {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 800 }).catch(() => false)) {
        await btn.click({ timeout: 1500 }).catch(() => {});
        await page.waitForTimeout(800);
        break;
      }
    }
    await page.screenshot({ path: dest.pathname, type: "png" });
    const title = await page.title();
    console.log(`${target.id}\t${response?.status()}\t${page.url()}\t${title}`);
  } catch (error) {
    console.log(`${target.id}\tFAIL\t${error.message}`);
  }
}

await browser.close();
