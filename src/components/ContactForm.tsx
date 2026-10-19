"use client";
import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions";
import { btnPrimary } from "./ui";

const field = "mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-brand";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { ok: false, message: "" });
  return (
    <form action={action} className="mx-auto max-w-xl space-y-5 rounded-2xl border border-sky bg-white p-6 sm:p-8" noValidate>
      <div><label htmlFor="name" className="text-sm font-bold">Your name</label><input id="name" name="name" autoComplete="name" required className={field} /></div>
      <div><label htmlFor="email" className="text-sm font-bold">Your email</label><input id="email" name="email" type="email" autoComplete="email" required className={field} /></div>
      <div><label htmlFor="details" className="text-sm font-bold">Project description</label><textarea id="details" name="details" rows={5} required className={field} /></div>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <button type="submit" disabled={pending} className={`${btnPrimary} w-full disabled:opacity-60`}>{pending ? "Sending…" : "Send enquiry"}</button>
      <p role="status" aria-live="polite" className={`text-sm ${state.ok ? "text-green-700" : "text-red-700"}`}>{state.message}</p>
    </form>
  );
}
