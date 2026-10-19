import { QUOTES, SITE } from "@/lib/content";
import { btnPrimary } from "./ui";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="sd-exit mx-auto max-w-4xl px-5 pb-12 pt-16 text-center sm:px-8 md:pt-24">
      <p className="animate-fade-in mx-auto w-fit rounded-full bg-sky px-3 py-1 text-xs font-semibold text-brand">Freelance frontend engineer · React.js & Next.js</p>
      <h1 id="hero-title" className="animate-fade-in mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl">
        I build SaaS landing pages that load fast and turn visitors into sign-ups.
      </h1>
      <p className="animate-fade-in mx-auto mt-6 max-w-xl text-lg text-muted">
        I turn your Figma designs into a fast, SEO-friendly site you can update yourself, live in 2-3 weeks.
      </p>
      <div className="animate-fade-in mt-8">
        <a href={SITE.bookingUrl} className={btnPrimary}>Book a free 30-min call</a>
      </div>
    </section>
  );
}
