import Image from "next/image";
import { HardHat, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { images } from "@/lib/images";

const points = [
  "Documented safety protocol on every job, from routine service to full overhaul",
  "Engineers trained to work safely in engine rooms, dockside, and offshore",
  "Full compliance with Nigerian and international marine engineering standards",
];

export function SafetyCompliance() {
  return (
    <section className="border-t bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={images.engineerHardhat}
              alt="Marine engineer in safety gear on site"
              width={900}
              height={675}
              className="size-full object-cover"
            />
          </div>
          <div>
            <HardHat className="size-7 text-primary" weight="duotone" />
            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Safety is not a checkbox
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              A rushed job is a liability, not a solution. Every engineer we
              send out carries that standard with them, on your vessel, at
              your dock, or in your engine room.
            </p>
            <ul className="mt-7 flex flex-col gap-3.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle
                    weight="fill"
                    className="mt-0.5 size-5 shrink-0 text-primary"
                  />
                  <span className="text-[15px] leading-relaxed text-foreground/90">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
