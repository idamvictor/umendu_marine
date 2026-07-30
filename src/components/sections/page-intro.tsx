"use client";

import { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { images as siteImages } from "@/lib/images";

const defaultImages = [
  siteImages.heroEngineRoom,
  siteImages.tugboatAtSea,
  siteImages.cargoPortCranes,
];

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
  children,
  images = defaultImages,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  images?: string[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className={cn("relative overflow-hidden min-h-[300px] bg-ink text-ink-foreground flex items-center", className)}>
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={img}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === activeIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={img}
              alt=""
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-black/20 to-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-slate-200">
              {description}
            </p>
          )}
        </div>
        {children && <div className="relative z-20 mt-6">{children}</div>}
      </div>
    </section>
  );
}
