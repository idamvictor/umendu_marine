import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/sections/page-intro";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { SafetyCompliance } from "@/components/sections/safety-compliance";
import { CtaBand } from "@/components/sections/cta-band";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Umendu Marine Engineering Services Limited is a marine engineering company keeping vessels, engines, and marine operations running at full capacity.",
};

const differentiators = [
  "Broad experience across major diesel engine brands",
  "Engineers who diagnose the root cause, not just the symptom",
  "A full range of services under one roof: maintenance, engineering, logistics, and procurement",
  "Commitment to safety, compliance, and quality workmanship",
  "A growing track record serving Nigeria's maritime sector",
  "Committed to full compliance with Nigerian and international marine engineering standards",
];

export default function AboutPage() {
  return (
    <>
      <PageIntro title="Engineering reliability into every marine operation" />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="max-w-xl space-y-5 text-[16px] leading-relaxed text-muted-foreground">
                <p>
                  Umendu Marine Engineering Services Limited is a marine
                  engineering company committed to keeping vessels, engines,
                  and marine operations running at full capacity. We
                  specialize in the maintenance and repair of diesel engines
                  from leading global manufacturers, alongside a full range
                  of engineering and support services designed for the
                  demands of the maritime industry.
                </p>
                <p>
                  Our team combines technical expertise with a hands-on,
                  problem-solving approach, whether we&apos;re diagnosing a
                  fault, executing a full engine overhaul, or supporting a
                  client&apos;s broader operational needs through logistics,
                  procurement, or staffing.
                </p>
                <p>
                  We understand that in marine operations, time and
                  reliability matter. That&apos;s why we work to deliver
                  fast, thorough, and lasting solutions, backed by real
                  technical knowledge, not shortcuts.
                </p>
              </div>
            </div>
            <div className="order-1 aspect-[4/3] overflow-hidden rounded-lg lg:order-2">
              <Image
                src={images.technicianAtWork}
                alt="Marine engineering technician at work"
                width={900}
                height={675}
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <WhoWeServe />

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <Image
          src={images.engineRoomWide}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            Our mission
          </p>
          <p className="mt-5 text-2xl leading-snug font-medium text-balance sm:text-3xl lg:text-[2.15rem]">
            To provide dependable, expert-driven marine engineering and
            support services that keep our clients&apos; vessels and
            operations running safely and efficiently.
          </p>
        </div>
      </section>

      <SafetyCompliance />

      <section className="border-t bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                What sets us apart
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                Proudly based in Port Harcourt, Rivers State, and serving
                vessel operators across the region.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-span-8">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    weight="fill"
                    className="mt-0.5 size-5 shrink-0 text-primary"
                  />
                  <span className="text-[15px] leading-relaxed text-foreground/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
