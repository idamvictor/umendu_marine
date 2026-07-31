"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, VideoCamera } from "@phosphor-icons/react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/lib/gallery";

type Filter = "all" | "image" | "video";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Photos", value: "image" },
  { label: "Videos", value: "video" },
];

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedSlide, setSelectedSlide] = useState(0);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const visibleItems =
    filter === "all" ? items : items.filter((item) => item.type === filter);
  const videoCount = items.filter((item) => item.type === "video").length;

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setSelectedSlide(carouselApi.selectedScrollSnap());
    onSelect();
    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  useEffect(() => {
    const activeItem = visibleItems[selectedSlide];
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (!video) return;
      if (activeItem?.type === "video" && activeItem.id === id) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [selectedSlide, visibleItems]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <Button
            key={f.value}
            type="button"
            size="sm"
            variant={filter === f.value ? "default" : "outline"}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      {visibleItems.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-lg border border-dashed py-16 text-center">
          <VideoCamera className="size-8 text-muted-foreground" weight="duotone" />
          <p className="text-sm text-muted-foreground">
            No videos yet, check back soon.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {visibleItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-lg bg-muted",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              <Image
                src={item.type === "image" ? item.src : item.poster}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 32vw, 46vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
                  <span className="flex size-11 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm">
                    <Play weight="fill" className="size-5 translate-x-0.5" />
                  </span>
                </div>
              )}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {item.caption}
              </span>
            </button>
          ))}
        </div>
      )}

      {videoCount > 0 && filter === "all" && (
        <p className="mt-6 text-xs text-muted-foreground">
          Video clips are placeholder footage standing in for real project
          documentation.
        </p>
      )}

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => !open && setActiveIndex(null)}
      >
        <DialogContent className="max-w-3xl gap-3 p-3 sm:max-w-3xl">
          <DialogTitle className="sr-only">
            {visibleItems[selectedSlide]?.caption ?? "Gallery media"}
          </DialogTitle>
          {activeIndex !== null && (
            <Carousel
              setApi={setCarouselApi}
              opts={{ startIndex: activeIndex, loop: true }}
              className="w-full min-w-0"
            >
              <CarouselContent>
                {visibleItems.map((item) => (
                  <CarouselItem key={item.id}>
                    {item.type === "image" ? (
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="(min-width: 1024px) 768px, 90vw"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <video
                        ref={(el) => {
                          videoRefs.current[item.id] = el;
                        }}
                        src={item.src}
                        poster={item.poster}
                        controls
                        muted
                        playsInline
                        className="aspect-video w-full rounded-lg bg-black"
                      />
                    )}
                    <p className="mt-2 px-1 text-sm text-muted-foreground">
                      {item.caption}
                    </p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
