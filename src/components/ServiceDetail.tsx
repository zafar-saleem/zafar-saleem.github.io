import Link from "next/link";
import { cta, PROCESS_STEPS, SITE, type ServiceDetailData } from "@/lib/content";
import { btnLight } from "./ui";

const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const pill = "inline-flex items-center justify-center rounded-[0.25rem] px-8 py-3.5 text-base font-semibold transition-colors";
const eyebrow = "text-sm font-bold uppercase tracking-[0.08em] text-brand-dark";
const h2 = "mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.5rem]";
const panel = "rounded-[0.25rem] border border-sky bg-white";

/** Shared layout for the service pages that don't have their own bespoke design. */
export default function ServiceDetail({ slug, name, title, description, intro, includes, time, price }: ServiceDetailData) {
  const url = `${SITE.url}/services/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": url, url, name: title, description, isPartOf: { "@id": `${SITE.url}/#website` } },
      {
        "@type": "Service", name, description, serviceType: name, areaServed: "Worldwide",
        provider: { "@id": `${SITE.url}/#service` },
        offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: Number(price.replace(/[^\d]/g, "")), priceCurrency: "USD" } },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services/landing-page-development` },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
    ],
  };
  const id = `${slug}-h`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main id="main">
        <section aria-labelledby={id} className={`${wrap} pb-16 pt-14 md:pb-20 md:pt-20`}>
          <div className="sd-exit">
            <p className={eyebrow}>{name}</p>
            <h1 id={id} className="animate-fade-in mt-4 max-w-4xl text-5xl font-extrabold leading-[1.04] sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="animate-fade-in mt-7 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{intro}</p>
            <p className="animate-fade-in mt-5 text-lg">
              <strong className="font-bold">Typical delivery</strong> <span className="text-muted">: {time}</span>
              <span className="text-muted"> · </span>
              <strong className="font-bold">From {price}</strong>
            </p>
            <div className="animate-fade-in mt-10 flex flex-wrap gap-4">
              <Link href={SITE.bookingUrl} data-umami-event={`Start a project click in ${slug} hero`} data-umami-event-location={`${name} page`} className={`${pill} bg-brand text-white hover:bg-brand-dark`}>Start a project</Link>
              <Link href="/projects" data-umami-event={`See my work click in ${slug} hero`} data-umami-event-location={`${name} page`} className={`${pill} border-2 border-ink text-ink hover:bg-ink hover:text-white`}>See my work</Link>
            </div>
          </div>
        </section>

        <section aria-labelledby={`${slug}-includes-h`} className={`${wrap} py-12 md:py-16`}>
          <div className="sd-reveal">
            <p className={eyebrow}>What&apos;s included</p>
            <h2 id={`${slug}-includes-h`} className={h2}>Everything you need to launch</h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {includes.map((i) => (
              <li key={i.title} className="sd-reveal">
                <article className={`${panel} h-full p-8 sm:p-9`}>
                  <h3 className="text-2xl font-bold">{i.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{i.text}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby={`${slug}-process-h`} className={`${wrap} py-12 md:py-16`}>
          <div className="sd-reveal">
            <p className={eyebrow}>Process</p>
            <h2 id={`${slug}-process-h`} className={h2}>How we work together</h2>
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

        <section aria-labelledby={`${slug}-fixed-h`} className={`${wrap} mb-16 py-8`}>
          <div className={`${panel} sd-reveal flex flex-col items-start justify-between gap-6 px-8 py-8 sm:px-9 md:flex-row md:items-center`}>
            <div>
              <h2 id={`${slug}-fixed-h`} className="text-2xl font-bold">Fixed scope, fixed price.</h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">You get a written quote within 48 hours, and the price only changes if the scope does.</p>
            </div>
            <Link href="/#faq" data-umami-event={`Read the FAQ click in ${slug} page`} data-umami-event-location={`${name} page`} className={`${pill} shrink-0 border-2 border-ink text-ink hover:bg-ink hover:text-white`}>Read the FAQ</Link>
          </div>
        </section>

        <section aria-labelledby={`${slug}-cta-h`} className="bg-navy py-20 text-center text-white md:py-28">
          <div className={wrap}>
            <h2 id={`${slug}-cta-h`} className="sd-zoom mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl">{cta.heading}</h2>
            <p className="sd-zoom mt-4 text-sm text-white/80">{cta.text}</p>
            <Link href={SITE.bookingUrl} data-umami-event={`Book a free call click in ${slug} CTA`} data-umami-event-location={`${name} page CTA`} className={`${btnLight} sd-zoom mt-7`}>Book a free consultation</Link>
          </div>
        </section>
      </main>
    </>
  );
}
