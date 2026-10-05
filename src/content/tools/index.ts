import type { Tool } from "@/types/content";
import { chatgpt } from "./chatgpt";
import { claude } from "./claude";
import { cursor } from "./cursor";
import { elevenlabs } from "./elevenlabs";
import { gemini } from "./gemini";
import { grok } from "./grok";
import { grokBot } from "./grok-bot";
import { hermesAgent } from "./hermes-agent";
import { kling } from "./kling";
import { midjourney } from "./midjourney";
import { notebooklm } from "./notebooklm";
import { notionAi } from "./notion-ai";
import { perplexity } from "./perplexity";
import { runway } from "./runway";
import { suno } from "./suno";

export const catalogTools: Tool[] = [
  chatgpt,
  claude,
  gemini,
  grok,
  grokBot,
  midjourney,
  cursor,
  elevenlabs,
  suno,
  perplexity,
  notebooklm,
  kling,
  runway,
  notionAi,
  hermesAgent,
];
