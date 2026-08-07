"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactResult =
  | { ok: true }
  | { ok: false; error: "invalid" | "not_configured" | "send_failed" };

export async function sendContactMessage(
  input: ContactInput
): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "invalid" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    return { ok: false, error: "not_configured" };
  }

  try {
    const resend = new Resend(apiKey);
    const { name, email, message } = parsed.data;
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Nouveau message de ${name} via le portfolio`,
      text: `De: ${name} <${email}>\n\n${message}`,
    });
    return { ok: true };
  } catch {
    return { ok: false, error: "send_failed" };
  }
}
