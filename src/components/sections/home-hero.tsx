import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { contact } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-20 lg:pb-24">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            Reliable marine engineering. Anywhere your vessel needs us.
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink-muted">
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
              className="border-ink-border bg-transparent text-ink-foreground hover:bg-white/8 hover:text-ink-foreground"
            >
              <a href={contact.mobileHref}>
                <Phone data-icon="inline-start" />
                Talk to an Engineer
              </a>
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[5/4]">
          <Image
            src={images.heroEngineRoom}
            alt="Marine diesel engine room, close view of engine block and piping"
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  );
}
