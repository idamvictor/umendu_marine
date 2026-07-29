import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/sections/page-intro";
import { ContactForm } from "@/components/sections/contact-form";
import { contact, whatsappHref } from "@/lib/site";

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
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: contact.mobileDisplay,
    href: whatsappHref("Hello, I'd like to speak with an engineer about my vessel."),
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

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Let's get your project moving"
        description="Whether it's an urgent repair, a technical consultation, or a service inquiry, our team is ready to help."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-lg font-semibold">Contact details</h2>
              <ul className="mt-6 flex flex-col gap-6">
                {details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <detail.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[15px] font-medium hover:text-primary"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
