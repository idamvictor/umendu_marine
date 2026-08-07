import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  WhatsappLogo,
  PaperPlaneTilt,
  UsersThree,
  ChatCircleText,
} from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/sections/page-intro";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactMap } from "@/components/sections/contact-map";
import { contact, whatsappHref } from "@/lib/site";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Umendu Marine Engineering Services Limited for urgent repairs, technical consultation, or a service inquiry.",
};

const details = [
  {
    icon: MapPin,
    label: "Office",
    value: `${contact.addressLine1}, ${contact.addressLine2}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contact.phoneDisplay,
    href: contact.phoneHref,
  },
  {
    icon: Phone,
    label: "Alternate Phone",
    value: contact.alternatePhoneDisplay,
    href: contact.alternatePhoneHref,
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: contact.mobileDisplay,
    href: whatsappHref("Hello, I'd like to speak with an engineer about my vessel."),
    tone: "whatsapp" as const,
  },
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: contact.emailDisplay,
    href: contact.emailHref,
  },
  {
    icon: Clock,
    label: "Hours",
    value: `${contact.hours}. ${contact.emergencyNote}.`,
  },
];

const nextSteps = [
  {
    icon: PaperPlaneTilt,
    title: "You send the details",
    description: "Fill out the form or message us directly with your vessel, engine, or the issue you're facing.",
  },
  {
    icon: UsersThree,
    title: "Our team reviews it",
    description: "An engineer looks at what you've shared and works out what's needed, not a generic sales script.",
  },
  {
    icon: ChatCircleText,
    title: "We respond, fast",
    description: "Usually within one business day, sooner for anything flagged as an emergency.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Let's get your project moving"
        description="Whether it's an urgent repair, a technical consultation, or a service inquiry, our team is ready to help."
        images={[images.portOperations, images.engineerHardhat, images.tugboatHarbor]}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="mb-8 aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={images.engineerHardhat}
                  alt="Marine engineer checking messages on site"
                  width={700}
                  height={525}
                  className="size-full object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold">Contact details</h2>
              <ul className="mt-6 flex flex-col gap-6">
                {details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <detail.icon
                      className={cn(
                        "mt-0.5 size-5 shrink-0",
                        detail.tone === "whatsapp" ? "text-whatsapp" : "text-primary"
                      )}
                    />
                    <div>
                      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className={cn(
                            "text-[15px] font-medium",
                            detail.tone === "whatsapp" ? "hover:text-whatsapp" : "hover:text-primary"
                          )}
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-[15px] font-medium">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                We respond quickly because we know your time, and your
                vessel&apos;s uptime, matters.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-lg border bg-card p-6 sm:p-8">
                <ContactForm />
              </div>
              <div className="mt-6">
                <ContactMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-secondary/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold">What happens next</h2>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3">
            {nextSteps.map((step) => (
              <div key={step.title} className="border-t pt-5">
                <step.icon className="size-6 text-primary" weight="duotone" />
                <h3 className="mt-3.5 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
