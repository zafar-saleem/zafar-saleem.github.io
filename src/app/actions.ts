"use server";

export type ContactState = { ok: boolean; message: string };

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const details = String(formData.get("details") ?? "").trim();
  if (String(formData.get("website") ?? "")) return { ok: true, message: "Thanks!" }; // honeypot
  if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || details.length < 10) {
    return { ok: false, message: "Please add your name, a valid email and at least a sentence about the project." };
  }
  // TODO: connect an email provider (Resend, Postmark, SMTP) here.
  console.log("New enquiry", { name, email, details });
  return { ok: true, message: "Thanks, I'll reply within one working day." };
}
