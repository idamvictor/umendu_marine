import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section className={cn("bg-ink text-ink-foreground", className)}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-muted">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
