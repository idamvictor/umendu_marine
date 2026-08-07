import Link from "next/link";
import { MapPin, Phone, EnvelopeSimple, WhatsappLogo, Clock } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { contact, engineBrands, navLinks } from "@/lib/site";
import { whatsappHref } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              {contact.tagline}. Diesel engine maintenance, engineering
              consultancy, and full-spectrum marine support for fleets across
              Nigeria.
            </p>
            <Button asChild variant="whatsapp" className="mt-6">
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

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-ink-foreground/90 uppercase">
                Navigate
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wide text-ink-foreground/90 uppercase">
                Services
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <Link href="/services/maintenance-repairs" className="text-sm text-ink-muted transition-colors hover:text-ink-foreground">
                    Maintenance & Repairs
                  </Link>
                </li>
                <li>
                  <Link href="/services/engineering-services" className="text-sm text-ink-muted transition-colors hover:text-ink-foreground">
                    Engineering Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/other-services" className="text-sm text-ink-muted transition-colors hover:text-ink-foreground">
                    Other Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold tracking-wide text-ink-foreground/90 uppercase">
                Contact
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-muted">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    {contact.addressLine1}
                    <br />
                    {contact.addressLine2}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <a href={contact.mobileHref} className="hover:text-ink-foreground">
                    {contact.mobileDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <a href={contact.alternatePhoneHref} className="hover:text-ink-foreground">
                    {contact.alternatePhoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <EnvelopeSimple className="size-4 shrink-0 text-primary" />
                  <a href={contact.emailHref} className="hover:text-ink-foreground">
                    {contact.emailDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    {contact.hours}
                    <br />
                    {contact.emergencyNote}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-ink-border" />

        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-wide text-ink-muted uppercase">
            Servicing engines from
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {engineBrands.map((brand) => (
              <li
                key={brand}
                className="font-mono text-sm text-ink-foreground/75"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>

        <Separator className="my-10 bg-ink-border" />

        <div className="flex flex-col gap-3 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {contact.companyName}. All rights reserved.
          </p>
          <p>Registered in Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
