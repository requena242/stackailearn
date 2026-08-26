import type { ContentImage, ImagePlacement, Localized, MediaHint } from "@/types/content";
import { pick } from "@/lib/content";

type ShotCopy = Localized<Pick<MediaHint, "alt" | "caption" | "hint">>;

export function contentImage(
  folder: "tools" | "tutorials",
  slug: string,
  id: string,
  placement: ImagePlacement,
  copy: ShotCopy,
  file = `${id}.jpg`,
): ContentImage {
  return {
    id,
    placement,
    src: `/media/${folder}/${slug}/${file}`,
    copy,
  };
}

export function toolImage(
  slug: string,
  id: string,
  placement: ImagePlacement,
  copy: ShotCopy,
) {
  return contentImage("tools", slug, id, placement, copy);
}

export function tutorialHero(slug: string, copy: ShotCopy) {
  return contentImage("tutorials", slug, "hero", "hero", copy);
}

export function resolveImage(image: ContentImage, locale: string): MediaHint {
  return {
    src: image.src,
    ...pick(image.copy, locale),
  };
}

export function stepShot(
  slug: string,
  step: number,
  locale: string,
  title: string,
  imageDescription: string,
  whatYouShouldSee?: string,
): MediaHint {
  return {
    src: `/media/tutorials/${slug}/step-${step}.jpg`,
    alt: title,
    caption: whatYouShouldSee ?? "",
    hint: imageDescription,
  };
}
