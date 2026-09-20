import type { Tutorial } from "@/types/content";
import { alternativasMidjourney } from "./alternativas-midjourney";
import { midjourneyVariacionesUpscale } from "./midjourney-variaciones-upscale";
import { chatgptGptsCuando } from "./chatgpt-gpts-cuando";
import { elegirModeloTexto } from "./elegir-modelo-texto";
import { chatgptAlternativas } from "./chatgpt-alternativas";
import { chatgptPrimerosPasos } from "./chatgpt-primeros-pasos";
import { claudeEscrituraLarga } from "./claude-escritura-larga";
import { claudeProjectsPrimerFlujo } from "./claude-projects-primer-flujo";
import { cursorComoIde } from "./cursor-como-ide-con-ia";
import { cursorRepoExistente } from "./cursor-repo-existente";
import { hermesAgentPrimer } from "./hermes-agent-primer-flujo";
import { hermesAgentSegundoFlujo } from "./hermes-agent-segundo-flujo";
import { midjourneyPrompts } from "./midjourney-prompts-que-funcionan";
import { perplexityInvestigacion } from "./perplexity-investigacion-con-fuentes";
import { perplexityCollections } from "./perplexity-collections";
import { grokPrimerFlujo } from "./grok-primer-flujo";
import { notionAiPrimerFlujo } from "./notion-ai-primer-flujo";
import { elevenlabsPrimerVoiceover } from "./elevenlabs-primer-voiceover";
import { sunoPrimerTema } from "./suno-primer-tema";
import { runwayPrimerClip } from "./runway-primer-clip";
import { grokBotPrimer } from "./supporting";

export const catalogTutorials: Tutorial[] = [
  alternativasMidjourney,
  midjourneyVariacionesUpscale,
  chatgptGptsCuando,
  perplexityCollections,
  elegirModeloTexto,
  cursorRepoExistente,
  chatgptAlternativas,
  sunoPrimerTema,
  elevenlabsPrimerVoiceover,
  runwayPrimerClip,
  notionAiPrimerFlujo,
  grokPrimerFlujo,
  grokBotPrimer,
  hermesAgentPrimer,
  hermesAgentSegundoFlujo,
  chatgptPrimerosPasos,
  claudeEscrituraLarga,
  claudeProjectsPrimerFlujo,
  midjourneyPrompts,
  cursorComoIde,
  perplexityInvestigacion,
];
