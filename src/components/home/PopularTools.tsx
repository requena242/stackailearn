import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getFeaturedTools } from "@/data/tools";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ToolCard } from "@/components/tools/ToolCard";

export async function PopularTools({ locale }: { locale: string }) {
  const t = await getTranslations("home");
  const featured = getFeaturedTools();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title={t("popularTitle")}
            subtitle={t("popularSubtitle")}
          />
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dim"
          >
            {t("viewAllTools")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
