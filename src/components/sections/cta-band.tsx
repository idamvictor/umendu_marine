import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CtaBand({
  title = "Need a technical partner you can rely on?",
  description = "Get in touch with our engineering team today.",
  className,
  actions,
}: {
  title?: string;
  description?: string;
  className?: string;
  actions?: ReactNode;
}) {
  return (
    <section className={cn("border-t border-ink-border bg-ink text-ink-foreground", className)}>
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-[17px] text-ink-muted">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {actions ?? (
            <>
              <Button asChild size="lg">
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="whatsapp">
                <a
                  href={whatsappHref("Hello, I'd like to speak with an engineer about my vessel.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappLogo data-icon="inline-start" weight="fill" />
                  Chat on WhatsApp
                </a>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
