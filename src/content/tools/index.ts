import type { Tool } from "@/types/content";
import { chatgpt } from "./chatgpt";
import { claude } from "./claude";
import { cursor } from "./cursor";
import { elevenlabs } from "./elevenlabs";
import { grok } from "./grok";
import { grokBot } from "./grok-bot";
import { hermesAgent } from "./hermes-agent";
import { midjourney } from "./midjourney";
import { notionAi } from "./notion-ai";
import { perplexity } from "./perplexity";
import { runway } from "./runway";
import { suno } from "./suno";

export const catalogTools: Tool[] = [
  chatgpt,
  claude,
  grok,
  grokBot,
  midjourney,
  cursor,
  elevenlabs,
  suno,
  perplexity,
  runway,
  notionAi,
  hermesAgent,
];
