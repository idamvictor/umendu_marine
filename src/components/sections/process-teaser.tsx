import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { images } from "@/lib/images";

const steps = [
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
    description: "We ensure the solution holds and support you beyond completion.",
  },
];

export function ProcessTeaser() {
  return (
    <section className="border-t bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-lg lg:aspect-auto lg:h-full">
              <Image
                src={images.dieselGeneratorInspection}
                alt="Engineer inspecting a diesel generator during a scheduled assessment"
                width={900}
                height={1125}
                className="size-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="max-w-md text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              How we work, from first call to final check
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Every job, large or small, follows the same disciplined
              sequence. No shortcuts, no guesswork.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              {steps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="font-mono text-sm text-primary">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services/engineering-services"
              className="group mt-9 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              See our full engineering process
              <ArrowRight className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
