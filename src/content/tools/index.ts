import type { Tool } from "@/types/content";
import { capcut } from "./capcut";
import { chatgpt } from "./chatgpt";
import { claude } from "./claude";
import { cursor } from "./cursor";
import { descript } from "./descript";
import { elevenlabs } from "./elevenlabs";
import { gemini } from "./gemini";
import { grok } from "./grok";
import { grokBot } from "./grok-bot";
import { hermesAgent } from "./hermes-agent";
import { ideogram } from "./ideogram";
import { kling } from "./kling";
import { leonardo } from "./leonardo";
import { midjourney } from "./midjourney";
import { notebooklm } from "./notebooklm";
import { notionAi } from "./notion-ai";
import { perplexity } from "./perplexity";
import { runway } from "./runway";
import { suno } from "./suno";
import { v0 } from "./v0";
import { lovable } from "./lovable";
import { make } from "./make";
import { zapier } from "./zapier";

export const catalogTools: Tool[] = [
  capcut,
  chatgpt,
  claude,
  gemini,
  grok,
  grokBot,
  midjourney,
  cursor,
  descript,
  elevenlabs,
  suno,
  perplexity,
  notebooklm,
  kling,
  leonardo,
  ideogram,
  runway,
  notionAi,
  hermesAgent,
  v0,
  lovable,
  zapier,
  make,
];
