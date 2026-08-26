"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import type { MediaHint } from "@/types/content";

/** Muestra la foto si existe; si no, el brief de qué captura hay que hacer. */
export function ScreenshotSlot({
  media,
  priority = false,
}: {
  media: MediaHint;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(!media.src);

  return (
    <figure className="mt-5 overflow-hidden rounded-2xl border border-line bg-canvas">
      {!failed && media.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={media.src}
          alt={media.alt}
          className="aspect-video w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-elevated/40 px-6 text-center">
          <ImageIcon className="h-7 w-7 text-muted" />
          <p className="max-w-md text-sm font-medium text-ink">{media.alt}</p>
          <p className="max-w-lg text-xs leading-relaxed text-muted">{media.hint}</p>
        </div>
      )}
      <figcaption className="border-t border-line px-4 py-3 text-xs leading-relaxed text-muted">
        {media.caption}
        {priority ? null : null}
      </figcaption>
    </figure>
  );
}
