import type { Prompt } from "@/types/content";
import { chatgptNotasACorreo } from "./chatgpt-notas-a-correo";
import { claudeAuditarContrato } from "./claude-auditar-contrato";
import { cursorDepurarConContexto } from "./cursor-depurar-con-contexto";
import { lovablePrimerPromptSinAlcance } from "./lovable-primer-prompt-sin-alcance";
import { notebooklmBriefingDeFuentes } from "./notebooklm-briefing-de-fuentes";
import { perplexityInvestigarCompetidor } from "./perplexity-investigar-competidor";

export const catalogPrompts: Prompt[] = [
  claudeAuditarContrato,
  chatgptNotasACorreo,
  perplexityInvestigarCompetidor,
  cursorDepurarConContexto,
  lovablePrimerPromptSinAlcance,
  notebooklmBriefingDeFuentes,
];
