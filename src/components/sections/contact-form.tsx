"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { ArrowRight, Spinner } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";

const serviceOptions = [
  { value: "maintenance-repairs", label: "Maintenance & Repairs" },
  { value: "engineering-services", label: "Engineering Services" },
  { value: "other-services", label: "Other Services" },
] as const;

type FieldErrors = {
  fullName?: string[];
  serviceNeeded?: string[];
  message?: string[];
};

function ContactFormInner() {
  const searchParams = useSearchParams();
  const presetService = searchParams.get("service");

  const [fullName, setFullName] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [serviceNeeded, setServiceNeeded] = React.useState<string>(
    serviceOptions.some((o) => o.value === presetService)
      ? (presetService as string)
      : ""
  );
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "sent">(
    "idle"
  );

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          companyName: companyName || undefined,
          serviceNeeded,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.errors ?? {});
        setStatus("idle");
        toast.error("Please check the form and try again.");
        return;
      }

      setStatus("sent");
      toast.success("Message sent. We'll be in touch shortly.");
      setFullName("");
      setCompanyName("");
      setServiceNeeded("");
      setMessage("");
    } catch {
      setStatus("idle");
      toast.error("Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border bg-card p-8 text-center">
        <h3 className="text-lg font-semibold">Message sent</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. A member of our team will respond
          shortly, usually within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FieldGroup>
        <Field data-invalid={Boolean(errors.fullName)}>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <Input
            id="fullName"
            name="fullName"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.fullName)}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <FieldError errors={errors.fullName?.map((message) => ({ message }))} />
        </Field>

        <Field>
          <FieldLabel htmlFor="companyName">Company Name</FieldLabel>
          <Input
            id="companyName"
            name="companyName"
            autoComplete="organization"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Field>

        <Field data-invalid={Boolean(errors.serviceNeeded)}>
          <FieldLabel htmlFor="serviceNeeded">Service Needed</FieldLabel>
          <Select
            value={serviceNeeded}
            onValueChange={setServiceNeeded}
            name="serviceNeeded"
          >
            <SelectTrigger
              id="serviceNeeded"
              className="w-full"
              aria-invalid={Boolean(errors.serviceNeeded)}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError errors={errors.serviceNeeded?.map((message) => ({ message }))} />
        </Field>

        <Field data-invalid={Boolean(errors.message)}>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-invalid={Boolean(errors.message)}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your vessel, engine, or the issue you're facing."
          />
          <FieldError errors={errors.message?.map((message) => ({ message }))} />
        </Field>

        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Spinner data-icon="inline-start" className="animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send Message
              <ArrowRight data-icon="inline-end" />
            </>
          )}
        </Button>
      </FieldGroup>
    </form>
  );
}

export function ContactForm() {
  return (
    <React.Suspense fallback={null}>
      <ContactFormInner />
    </React.Suspense>
  );
}
