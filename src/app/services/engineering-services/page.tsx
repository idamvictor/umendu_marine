import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlass,
  Compass,
  Handshake,
  GearSix,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/sections/page-intro";
import { OfferList, type OfferItem } from "@/components/sections/offer-list";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";

function unsplash(id: string, params = "q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

const stockImages = {
  technicianDiagnostic: unsplash("1621905251918-48416bd8575a", "q=80&w=1400&auto=format&fit=crop"),
  dieselGeneratorInspection: unsplash("1636867759143-c28c1e909bd3", "q=80&w=1400&auto=format&fit=crop"),
  engineerWorkwear: unsplash("1567954970774-58d6aa6c50dc", "q=80&w=1400&auto=format&fit=crop"),
} as const;

export const metadata: Metadata = {
  title: "Engineering Services",
  description:
    "Technical insight and consultancy to help clients diagnose problems, plan projects, and maintain vessels to the highest standard.",
};

const offers: OfferItem[] = [
  {
    icon: MagnifyingGlass,
    title: "ET Diagnosis & Troubleshooting",
    description:
      "Precise electrical and technical diagnosis to identify the root cause of faults quickly and accurately.",
  },
  {
    icon: Compass,
    title: "Technical Consultancy",
    description:
      "Expert guidance on engineering decisions, equipment selection, and operational best practices for your marine assets.",
  },
  {
    icon: Handshake,
    title: "General Contracts",
    description:
      "Reliable execution of general engineering contracts, delivered on time and to specification.",
  },
  {
    icon: GearSix,
    title: "Ship General Maintenance",
    description:
      "Comprehensive maintenance support to keep your vessel's systems, beyond just the engine, in full working order.",
  },
];

const approach = [
  {
    step: "01",
    title: "Assessment",
    description: "We start by understanding the issue or project scope in detail.",
  },
  {
    step: "02",
    title: "Diagnosis",
    description: "Our engineers pinpoint the exact cause or requirement.",
  },
  {
    step: "03",
    title: "Execution",
    description: "We carry out the work with precision, safety, and efficiency.",
  },
  {
    step: "04",
    title: "Follow-Up",
    description: "We ensure the solution holds and support you beyond project completion.",
  },
];

const consultingScenarios = [
  "Choosing the right engine or equipment for a new or replacement build",
  "Planning a retrofit or major system upgrade before committing budget",
  "A second technical opinion before signing off on a contractor's report",
  "Reviewing operational practices for compliance and efficiency gains",
];

export default function EngineeringServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Engineering Services"
        title="Technical expertise for complex engineering challenges"
        description="Our engineering services go beyond repairs. We bring technical insight and consultancy to help clients diagnose problems, plan projects, and maintain their vessels to the highest standard."
        images={[stockImages.technicianDiagnostic, stockImages.dieselGeneratorInspection, stockImages.engineerWorkwear]}
      />

      <section className="border-b bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://m.media-amazon.com/images/I/81GmlWVaEDL._AC_UF894,1000_QL80_.jpg"
                alt="Close view of a marine diesel generator during technical work"
                width={900}
                height={675}
                className="size-full object-cover"
              />
            </div>
            <div>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Not every problem needs a wrench first. Some need a second
                set of trained eyes on the data, the drawings, or the
                decision in front of you. That&apos;s where our engineering
                services come in, alongside the hands-on repair work, not
                instead of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OfferList heading="What we offer" items={offers} />

      <section className="border-t bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Our approach
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-primary">
                    {item.step}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-border lg:block"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {index < approach.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-2 -right-4 hidden text-border lg:block"
                  >
                    &rsaquo;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Where consultancy pays off
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                Clients typically bring us in before a decision gets
                expensive to reverse.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-span-8">
              {consultingScenarios.map((item) => (
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

      <CtaBand
        title="Have a technical challenge or upcoming project?"
        description="Let's talk it through with one of our engineers."
        actions={
          <Button asChild size="lg">
            <Link href="/contact?service=engineering-services">Book a Consultation</Link>
          </Button>
        }
      />
    </>
  );
}
