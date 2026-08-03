import { NextResponse } from "next/server";
import { z } from "zod";
import { sendNotificationEmail } from "@/lib/email";

const leadCaptureSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = leadCaptureSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const html = `
    <p><strong>Source:</strong> Lead Capture popup (homepage)</p>
    <p><strong>Email:</strong> ${parsed.data.email}</p>
  `;

  const result = await sendNotificationEmail({
    subject: "New Lead Capture Signup",
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
