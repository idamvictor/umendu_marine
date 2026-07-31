"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { images as siteImages } from "@/lib/images";
import { whatsappHref } from "@/lib/site";
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
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      {/* Background Carousel behind the whole section */}
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
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-black/20 to-black/35" />
      </div>

      {/* Content grid sitting on top of the carousel */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-20 lg:pb-24">
        <div>
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
              <a
                href={whatsappHref("Hello, I'd like to speak with an engineer about my vessel.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogo data-icon="inline-start" weight="fill" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Featured Cloudinary image on the right */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[5/4] shadow-xl">
          <Image
            src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1785413740/after_1_pzepkm.png"
            alt="Umendu Marine engine room and technical team services"
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
