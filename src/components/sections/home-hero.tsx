"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { images as siteImages } from "@/lib/images";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

const homeHeroImages = [
  siteImages.tugboatAtSea,
  siteImages.heroEngineRoom,
  siteImages.cargoPortCranes,
  siteImages.engineRoomWide,
];

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % homeHeroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] flex items-center">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {homeHeroImages.map((img, index) => (
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
              className="object-cover animate-fade-in"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-black/20 to-black/35" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            Reliable marine engineering. Anywhere your vessel needs us.
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-slate-200">
            Expert diesel engine maintenance, technical consultancy, and
            full-spectrum marine support, keeping your fleet running and
            your operations moving.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Request a Quote
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href={contact.mobileHref}>
                <Phone data-icon="inline-start" />
                Talk to an Engineer
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
