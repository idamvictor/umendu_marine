"use client";

import * as React from "react";
import NextImage from "next/image";
import { XIcon } from "lucide-react";
import { EnvelopeSimple, ArrowRight, CheckCircle } from "@phosphor-icons/react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { images } from "@/lib/images";
import { contact } from "@/lib/site";

const SESSION_KEY = "umendu-email-capture-seen";
const OPEN_DELAY_MS = 1200;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailCaptureDialog() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "invalid" | "submitted">(
    "idle"
  );

  React.useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
    }, OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email)) {
      setStatus("invalid");
      return;
    }
    // UI-only for now: no email-list provider wired up yet, same
    // placeholder status as /api/contact until one is chosen.
    setStatus("submitted");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton={false}
        className="max-w-[calc(100%-2rem)] gap-0 overflow-hidden p-0 sm:max-w-3xl sm:rounded-2xl"
      >
        <div className="grid sm:min-h-110 sm:grid-cols-[1fr_1.15fr]">
          <div className="relative h-32 sm:h-auto">
            <NextImage
              src={images.dieselGeneratorInspection}
              alt=""
              fill
              sizes="(min-width: 640px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/10 sm:via-ink/45 sm:to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="text-sm font-semibold text-balance text-white sm:text-lg sm:leading-snug">
                {contact.tagline}
              </p>
            </div>
          </div>

          <div className="relative flex flex-col gap-4 p-6 sm:p-8">
            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="absolute top-3 right-3 text-muted-foreground"
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>

            {status === "submitted" ? (
              <div className="flex flex-1 flex-col justify-center gap-3 py-4">
                <CheckCircle className="size-8 text-primary" weight="duotone" />
                <DialogTitle className="text-xl font-semibold tracking-tight">
                  You&apos;re on the list
                </DialogTitle>
                <DialogDescription className="text-[15px] leading-relaxed">
                  Thanks, we&apos;ll be in touch with maintenance reminders
                  and technical updates.
                </DialogDescription>
                <Button
                  variant="outline"
                  className="mt-2 w-fit"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                  Technical Updates
                </span>
                <div>
                  <DialogTitle className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
                    Stay ahead of engine downtime
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-[15px] leading-relaxed">
                    Get maintenance reminders and technical updates from our
                    engineering team, straight to your inbox.
                  </DialogDescription>
                </div>
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-1 flex flex-col gap-3"
                >
                  <Field data-invalid={status === "invalid"}>
                    <FieldLabel htmlFor="email-capture" className="sr-only">
                      Email address
                    </FieldLabel>
                    <div className="relative">
                      <EnvelopeSimple className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="email-capture"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        aria-invalid={status === "invalid"}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === "invalid") setStatus("idle");
                        }}
                        className="h-11 rounded-lg pl-9 text-[15px]"
                      />
                    </div>
                    <FieldError
                      errors={
                        status === "invalid"
                          ? [{ message: "Enter a valid email address." }]
                          : undefined
                      }
                    />
                  </Field>
                  <Button type="submit" className="h-11 w-full text-[15px]">
                    Notify Me
                    <ArrowRight data-icon="inline-end" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
