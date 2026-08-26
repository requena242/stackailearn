/** Concatena clases Tailwind omitiendo valores vacíos. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
