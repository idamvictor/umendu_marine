import { NextResponse } from "next/server";
import { z } from "zod";
import { sendNotificationEmail } from "@/lib/email";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  companyName: z.string().trim().optional(),
  serviceNeeded: z.enum([
    "maintenance-repairs",
    "engineering-services",
    "other-services",
  ]),
  message: z.string().trim().min(10, "Tell us a bit more about what you need."),
});

const serviceLabels: Record<string, string> = {
  "maintenance-repairs": "Maintenance & Repairs",
  "engineering-services": "Engineering Services",
  "other-services": "Other Services",
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { fullName, companyName, serviceNeeded, message } = parsed.data;

  const html = `
    <p><strong>Full name:</strong> ${fullName}</p>
    ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ""}
    <p><strong>Service needed:</strong> ${serviceLabels[serviceNeeded] ?? serviceNeeded}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br/>")}</p>
  `;

  const result = await sendNotificationEmail({
    subject: `New contact form inquiry from ${fullName}`,
    html,
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
