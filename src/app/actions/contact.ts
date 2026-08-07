"use server";

import { Resend } from "resend";
import { z } from "zod";
import { contactSubjects, profile } from "@/lib/content";

const subjectValues = contactSubjects.map((s) => s.value) as [
  string,
  ...string[],
];

const subjectLabels: Record<string, string> = Object.fromEntries(
  contactSubjects.map((s) => [s.value, s.label])
);

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.enum(subjectValues),
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

  const { name, email, subject, message } = parsed.data;
  const subjectLabel = subjectLabels[subject] ?? subject;
  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `[Portfolio] ${subjectLabel} — ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subjectLabel}\n\nMessage:\n${message}`,
    });
  } catch {
    return { ok: false, error: "send_failed" };
  }

  try {
    await resend.emails.send({
      from: `${profile.fullName} <onboarding@resend.dev>`,
      to: email,
      subject: `Merci pour votre message, ${name}`,
      text: `Bonjour ${name},\n\nMerci pour votre message concernant : ${subjectLabel}.\nJe reviens vers vous sous 24h.\n\nVotre message :\n${message}\n\nÀ très bientôt,\n${profile.fullName}`,
    });
  } catch {
    // L'accusé de réception est secondaire : son échec ne doit pas faire échouer l'envoi principal.
  }

  return { ok: true };
}
