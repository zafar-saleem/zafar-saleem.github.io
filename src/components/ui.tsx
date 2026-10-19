import type { ReactNode } from "react";

export const btn =
  "inline-flex items-center justify-center rounded-[0.25rem] px-6 py-3 text-sm font-semibold transition-colors";
export const btnPrimary = `${btn} bg-brand text-white hover:bg-brand-dark`;
export const btnLight = `${btn} bg-white text-ink hover:bg-sky`;
export const btnOutline = `${btn} border-2 border-ink text-ink hover:bg-ink hover:text-white`;

export function Section({ id, className = "", children, labelledBy }: { id?: string; className?: string; children: ReactNode; labelledBy?: string }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Heading({ id, children, sub, center }: { id: string; children: ReactNode; sub?: string; center?: boolean }) {
  return (
    <div className={`sd-reveal sd-zoom mb-10 ${center ? "text-center" : ""}`}>
      <h2 id={id} className="text-3xl font-semibold sm:text-4xl">{children}</h2>
      {sub && <p className={`mt-3 max-w-xl text-muted ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </div>
  );
}

export const card = "bg-white p-6";
