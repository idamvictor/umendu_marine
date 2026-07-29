import { NextResponse } from "next/server";
import { z } from "zod";

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

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // TODO: wire this up to a real delivery channel (e.g. Resend, SMTP) once
  // the client picks one. For now the submission is validated and logged
  // server-side so the form is fully functional end to end.
  console.log("[contact] new inquiry", parsed.data);

  return NextResponse.json({ ok: true });
}
