import Image from "next/image";
import { images } from "@/lib/images";

export function ManifestoBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <Image
        src={images.tugboatAtSea}
        alt="Tugboat working at sea"
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <p className="max-w-2xl text-3xl leading-snug font-semibold text-balance sm:text-4xl lg:text-5xl">
          Engineering reliability at sea.
        </p>
        <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-muted">
          Every vessel we touch, every engine we open, every contract we
          take on carries the same standard: work that holds up long after
          we&apos;ve left the site.
        </p>
      </div>
    </section>
  );
}
