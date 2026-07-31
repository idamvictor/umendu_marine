import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { galleryItems } from "@/lib/gallery";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and video from Umendu Marine Engineering Services Limited's work on diesel engines, vessels, and marine equipment.",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        title="A closer look at the work"
        description="Photos and video from engine rooms, dockside repairs, and the vessels we support."
        images={[images.engineParts, images.welderSparks, images.technicianTools]}
      />

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
