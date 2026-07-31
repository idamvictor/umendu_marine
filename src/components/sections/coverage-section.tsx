import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { images } from "@/lib/images";
import { contact } from "@/lib/site";

export function CoverageSection() {
  return (
    <section className="border-t bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-md text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Based in Port Harcourt, ready when your vessel calls
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              We&apos;re positioned close to Nigeria&apos;s busiest marine
              and oil and gas corridors, so our team can reach your engine
              room or job site without losing a day to logistics.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-[15px]">
                  {contact.addressLine1}, {contact.addressLine2}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-[15px]">
                  {contact.hours}. {contact.emergencyNote}.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              Get directions and contact details
              <ArrowRight className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={images.portOperations}
              alt="Port operations along the Nigerian coastline"
              width={900}
              height={675}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
