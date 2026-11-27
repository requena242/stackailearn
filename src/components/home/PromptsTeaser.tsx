import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PromptCard } from "@/components/prompts/PromptCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getLatestPrompts, toPromptListItem } from "@/data/prompts";

export async function PromptsTeaser({ locale }: { locale: string }) {
  const t = await getTranslations("home");
  const usage = await getTranslations("useType");
  const latest = getLatestPrompts(3).map((prompt) => toPromptListItem(prompt, locale));

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title={t("promptsTitle")} subtitle={t("promptsSubtitle")} />
          <Link
            href="/prompts/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dim"
          >
            {t("viewAllPrompts")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {latest.map((item) => (
            <PromptCard key={item.slug} item={item} useLabel={usage(item.use)} />
          ))}
        </div>
      </Container>
    </section>
  );
}
