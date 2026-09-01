import type { Tutorial } from "@/types/content";
import { chatgptPrimerosPasos } from "./chatgpt-primeros-pasos";
import { claudeEscrituraLarga } from "./claude-escritura-larga";
import { cursorComoIde } from "./cursor-como-ide-con-ia";
import { hermesAgentPrimer } from "./hermes-agent-primer-flujo";
import { midjourneyPrompts } from "./midjourney-prompts-que-funcionan";
import { perplexityInvestigacion } from "./perplexity-investigacion-con-fuentes";
import { grokPrimerFlujo } from "./grok-primer-flujo";
import { notionAiPrimerFlujo } from "./notion-ai-primer-flujo";
import { elevenlabsPrimerVoiceover } from "./elevenlabs-primer-voiceover";
import { runwayPrimerClip } from "./runway-primer-clip";
import { grokBotPrimer } from "./supporting";

export const catalogTutorials: Tutorial[] = [
  elevenlabsPrimerVoiceover,
  runwayPrimerClip,
  notionAiPrimerFlujo,
  grokPrimerFlujo,
  grokBotPrimer,
  hermesAgentPrimer,
  chatgptPrimerosPasos,
  claudeEscrituraLarga,
  midjourneyPrompts,
  cursorComoIde,
  perplexityInvestigacion,
];
