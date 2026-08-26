import {
  AudioLines,
  Clapperboard,
  Code2,
  ImageIcon,
  NotebookPen,
  Search,
  Type,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { categories } from "@/data/categories";
import { pick } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import type { CategoryId } from "@/types/content";

const icons: Record<CategoryId, typeof Type> = {
  text: Type,
  image: ImageIcon,
  video: Clapperboard,
  code: Code2,
  productivity: NotebookPen,
  audio: AudioLines,
  research: Search,
};

export async function CategoryGrid({ locale }: { locale: string }) {
  const t = await getTranslations("home");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title={t("categoriesTitle")}
          subtitle={t("categoriesSubtitle")}
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const copy = pick(category.copy, locale);
            const Icon = icons[category.id];

            return (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group rounded-2xl border border-line bg-surface p-5 transition hover:border-line-strong hover:bg-elevated"
              >
                <span
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br",
                    category.tint,
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink group-hover:text-accent">
                  {copy.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {copy.description}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
