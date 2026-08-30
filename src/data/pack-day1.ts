import type { Localized } from "@/types/content";
import type { PackFileId } from "./pack";

export type PackLesson = {
  day: number;
  title: string;
  summary: string;
  minutes: number;
  goal: string;
  context: string;
  steps: string[];
  example: string;
  mistakes: string[];
  done: string;
  fileId?: PackFileId;
};

/** Solo el día 1. La venta lo puede mostrar. El resto no se importa aquí. */
export const packDay1: Localized<PackLesson> = {
  es: {
    day: 1,
    title: "Cuenta y workspace",
    summary: "Cursor + Grok Bot listos. Un workspace, no diez pestañas.",
    minutes: 35,
    goal: "Dejar el entorno listo para publicar, no para coleccionar herramientas.",
    context:
      "La gente se pierde el primer día instalando seis apps. El método cabe en dos: Cursor (donde escribes y pides cambios) y Grok Bot (el teammate de la VM en Cursor, no el chat de grok.com). Un repo. Un locale por sesión. Si el workspace tarda más de un minuto en abrir, sobra ruido.",
    steps: [
      "Instala Cursor y abre UN repo o carpeta: el sitio que vas a publicar. Cierra el resto de ventanas.",
      "Crea Grok Bot desde Cursor (cursor.com/bot/onboarding). Si abres grok.com, estás en el producto equivocado.",
      "En una nota del repo escribe: dominio, locale de hoy (es o en), y la primera URL que quieres sacar. Tres líneas. No un Notion de 20 páginas.",
      "Comprueba que puedes guardar un archivo y ver el diff. Si no hay git, inicialízalo. Sin historial no hay control.",
      "No instales temas, linters extra ni 12 MCPs. Eso es día 40, no día 1.",
    ],
    example:
      "Nota del día 1 (cópiala):\nDominio: midirectorio.com\nLocale hoy: es\nPrimera URL: /es/tools/cursor (ficha). La sé usar. No empiezo por Midjourney.",
    mistakes: [
      "Abrir grok.com y creer que eso es Grok Bot.",
      "Tener el sitio en Drive, el blog en WordPress y los prompts en el móvil: tres sitios, cero hábito.",
      "Empezar por «las 100 herramientas» en vez de por una URL.",
    ],
    done: "Cursor abre el repo. Grok Bot existe. Las tres líneas de la nota están escritas.",
  },
  en: {
    day: 1,
    title: "Account and workspace",
    summary: "Cursor + Grok Bot ready. One workspace, not ten tabs.",
    minutes: 35,
    goal: "Get the environment ready to publish, not to collect tools.",
    context:
      "Most people lose day 1 installing six apps. The method fits in two: Cursor (where you write and ask for diffs) and Grok Bot (the Cursor cloud teammate, not grok.com chat). One repo. One locale per session. If the workspace takes more than a minute to open, you have noise.",
    steps: [
      "Install Cursor and open ONE repo or folder: the site you will publish. Close the other windows.",
      "Create Grok Bot from Cursor (cursor.com/bot/onboarding). If you open grok.com, you are in the wrong product.",
      "In a repo note write: domain, today's locale (es or en), and the first URL you want out. Three lines. Not a 20-page Notion.",
      "Make sure you can save a file and see a diff. If there is no git, init it. No history, no control.",
      "Do not install extra themes, linters or 12 MCPs. That is day 40, not day 1.",
    ],
    example:
      "Day-1 note (copy it):\nDomain: mydirectory.com\nLocale today: en\nFirst URL: /en/tools/cursor (profile). I already use it. I do not start with Midjourney.",
    mistakes: [
      "Opening grok.com and thinking that is Grok Bot.",
      "Site in Drive, blog in WordPress, prompts on the phone: three places, zero habit.",
      "Starting from «the 100 tools» instead of one URL.",
    ],
    done: "Cursor opens the repo. Grok Bot exists. The three lines are written.",
  },
};
