import { Resend } from "resend";
import { contact } from "@/lib/site";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Umendu Marine Website <onboarding@resend.dev>";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? contact.emailDisplay;

export async function sendNotificationEmail({
  subject,
  html,
}: {
  subject: string;
  html: string;
}): Promise<{ ok: boolean }> {
  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
    });

    if (error) {
      console.error("[email] Resend send failed", error);
      return { ok: false };
    }

    return { ok: true };
  } catch (error) {
    console.error("[email] Resend send threw", error);
    return { ok: false };
  }
}
