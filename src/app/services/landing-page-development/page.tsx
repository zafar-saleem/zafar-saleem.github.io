import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { cta, PROCESS_STEPS, SERVICE_OFFERS, SITE, SOCIALS } from "@/lib/content";
import { Footer } from "@/components/Footer";
import { btnLight } from "@/components/ui";
import Hero from "@/components/Hero";

const TITLE = "Next.js landing pages for SaaS startups";
const DESCRIPTION =
  "Fixed-scope Next.js landing pages, Figma to Next.js builds and speed fixes for SaaS startups. Live in 2–3 weeks, with a written quote within 48 hours.";

export const metadata: Metadata = {
  title: `Services: ${TITLE}`,
  description: DESCRIPTION,
  alternates: { canonical: "/services/landing-page-development" },
  openGraph: { url: `${SITE.url}/services/landing-page-development`, title: `Landing Page Development | ${SITE.name}`, description: DESCRIPTION, type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage", "@id": `${SITE.url}/services/landing-page-development`, url: `${SITE.url}/services/landing-page-development`, name: TITLE, description: DESCRIPTION,
      isPartOf: { "@id": `${SITE.url}/#website` },
    },
    {
      "@type": "ProfessionalService", "@id": `${SITE.url}/#service`, name: `${SITE.name} – Freelance Web Developer`, url: SITE.url,
      hasOfferCatalog: {
        "@type": "OfferCatalog", name: "Services",
        itemListElement: SERVICE_OFFERS.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: `${s.text} Typical delivery: ${s.time}.` },
          priceSpecification: { "@type": "PriceSpecification", minPrice: s.priceValue, priceCurrency: "USD" },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services/landing-page-development` },
        { "@type": "ListItem", position: 3, name: "Landing Page Development", item: `${SITE.url}/services/landing-page-development` },
      ],
    },
  ],
};

const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const pill = "inline-flex items-center justify-center rounded-[0.25rem] px-8 py-3.5 text-base font-semibold transition-colors";
const eyebrow = "text-sm font-bold uppercase tracking-[0.08em] text-brand-dark";
const h2 = "mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.5rem]";
const panel = "rounded-[0.25rem] border border-sky bg-white";
const YEAR = 2026;

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main id="main">
        <section aria-labelledby="services-h" className={`${wrap} pb-16 pt-14 md:pb-20 md:pt-20`}>
          <div className="sd-exit">
            <p className={eyebrow}>Services</p>
            <h1 id="services-h" className="animate-fade-in mt-4 max-w-4xl text-5xl font-extrabold leading-[1.04] sm:text-6xl lg:text-7xl">
              Landing Pages & Websites For Startups.
            </h1>
            <p className="animate-fade-in mt-7 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
              I turn your Figma designs into fast, SEO-friendly pages that turn visitors into sign-ups. Live in 2–3 weeks, fixed scope, fixed price.
            </p>
            <div className="animate-fade-in mt-10 flex flex-wrap gap-4">
              <Link
                href={SITE.bookingUrl}
                data-umami-event="Start a project click in services hero" data-umami-event-location="Services page"
                className={`${pill} bg-brand text-white hover:bg-brand-dark`}
              >
                Start a project
              </Link>
              <Link
                href="/projects"
                data-umami-event="See my work click in services hero" data-umami-event-location="Services page"
                className={`${pill} border-2 border-ink text-ink hover:bg-ink hover:text-white`}
              >
                See my work
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="what-h" className={`${wrap} py-12 md:py-16`}>
          <div className="sd-reveal">
            <p className={eyebrow}>What I do</p>
            <h2 id="what-h" className={h2}>Ways I will help you</h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {SERVICE_OFFERS.map((s) => (
              <li key={s.title} className="sd-reveal">
                <article className={`${panel} flex h-full flex-col p-8 sm:p-9`}>
                  <p className="w-fit rounded-full bg-sky px-4 py-1.5 text-sm font-semibold text-brand-dark">{s.badge}</p>
                  <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{s.text}</p>
                  <p className="mt-6 text-lg">
                    <strong className="font-bold">Duration</strong> <span className="text-muted">: {s.time}</span>
                  </p>
                  <p className="mt-5 text-lg leading-relaxed text-muted">{s.stack}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="process-h" className={`${wrap} py-12 md:py-16`}>
          <div className="sd-reveal">
            <p className={eyebrow}>Process</p>
            <h2 id="process-h" className={h2}>How we work together</h2>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {PROCESS_STEPS.map((s) => (
              <li key={s.title} className="sd-reveal">
                <div className={`${panel} h-full p-8`}>
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="fixed-h" className={`${wrap} py-8 mb-16`}>
          <div className={`${panel} sd-reveal flex flex-col items-start justify-between gap-6 px-8 py-8 sm:px-9 md:flex-row md:items-center`}>
            <div>
              <h2 id="fixed-h" className="text-2xl font-bold">Fixed scope, fixed price.</h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
                You get a written quote within 48 hours, and the price only changes if the scope does. One rounds of revisions included.
              </p>
            </div>
            <Link
              href="/#faq"
              data-umami-event="Read the FAQ click in services page" data-umami-event-location="Services page"
              className={`${pill} shrink-0 border-2 border-ink text-ink hover:bg-ink hover:text-white`}
            >
              Read the FAQ
            </Link>
          </div>
        </section>


        <section
          id="contact"
          aria-labelledby="contact-title"
          className="on-dark bg-navy py-20 text-center text-white md:py-28"
        >
          <div className="container-page">
            <h2 id="cta-h" className="sd-zoom mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl">Need a landing page that loads fast and converts?</h2>
            <p className="sd-zoom mt-4 text-sm text-white/80">Free 30-minute call. No obligation, just a clear plan.</p>
            <Link data-umami-event="Book a free call click in services CTA" data-umami-event-location="Services page CTA" href={SITE.bookingUrl} className={`${btnLight} mt-7 sd-zoom`}>Book a free consultation</Link>
          </div>
        </section>
      </main>
    </>
  );
}
