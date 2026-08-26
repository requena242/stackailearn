import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getLatestTutorials } from "@/data/tutorials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TutorialCard } from "@/components/tutorials/TutorialCard";

export async function LatestTutorials({ locale }: { locale: string }) {
  const t = await getTranslations("home");
  const latest = getLatestTutorials(3);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title={t("tutorialsTitle")}
            subtitle={t("tutorialsSubtitle")}
          />
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dim"
          >
            {t("viewAllTutorials")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {latest.map((tutorial) => (
            <TutorialCard key={tutorial.slug} tutorial={tutorial} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
