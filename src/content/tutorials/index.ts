import type { Tutorial } from "@/types/content";
import { chatgptPrimerosPasos } from "./chatgpt-primeros-pasos";
import { claudeEscrituraLarga } from "./claude-escritura-larga";
import { cursorComoIde } from "./cursor-como-ide-con-ia";
import { hermesAgentPrimer } from "./hermes-agent-primer-flujo";
import { midjourneyPrompts } from "./midjourney-prompts-que-funcionan";
import { perplexityInvestigacion } from "./perplexity-investigacion-con-fuentes";
import { grokBotPrimer } from "./supporting";

export const catalogTutorials: Tutorial[] = [
  grokBotPrimer,
  hermesAgentPrimer,
  chatgptPrimerosPasos,
  claudeEscrituraLarga,
  midjourneyPrompts,
  cursorComoIde,
  perplexityInvestigacion,
];
