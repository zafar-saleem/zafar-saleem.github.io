import Image from "next/image";
import FaqAccordion from "./FaqAccordion";
import Link from "next/link";
import { cta, FAQS, GUARANTEES, PLANS, PROJECTS, REVIEWS, SERVICES, SITE, TOOLS, TYPES } from "@/lib/content";
import { btnLight, btnOutline, btnPrimary, card, Heading, Section } from "./ui";
import { ButtonLink } from "./Button";

export function Work() {
  return (
    <Section id="work" labelledBy="work-h">
      <Heading id="work-h">Latest projects</Heading>
      <ul className="columns-1 gap-8 sm:columns-2 lg:columns-2">
        {PROJECTS.slice(0,4).map((p) => (
          <li key={p.name} className="sd-reveal sd-zoom mb-4 break-inside-avoid">
            <article className={`${card} h-full p-3`}>
              <div className="overflow-hidden">
                <Image src={p.img} loading="lazy" alt={`${p.name} website preview`} width={640} height={400} sizes="(min-width: 1152px) 540px, (min-width: 640px) 45vw, 90vw" className="h-auto w-full" />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="text-sm text-muted">{p.label} · Website development</p>
                <p className="mt-2 text-sm text-muted">{p.brief}</p>
                <Link data-umami-event="view all projects card click in latest projects section" data-umami-event-location="latest projects section" href={p.href} className="mt-3 inline-block text-sm font-semibold text-brand" aria-label={`View ${p.name} in all projects`}>View live website →</Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center sd-zoom"><Link data-umami-event="view all project button click in latest projects section" data-umami-event-location="latest projects section" href="/projects" className={btnOutline}>View all projects</Link></div>
    </Section>
  );
}

export function Feature() {
  const r = REVIEWS[2];
  return (
    <Section className="!py-8 sd-zoom">
      <figure className="sd-reveal bg-sky px-6 py-12 text-center sm:px-14">
        <blockquote className="mx-auto max-w-2xl text-xl font-bold leading-snug sm:text-2xl">“{r.text}”</blockquote>
        <figcaption className="mt-5 text-sm"><strong>{r.name}</strong><br /><span className="text-muted">{r.role}</span></figcaption>
      </figure>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" labelledBy="about-h" className="sd-zoom">
      <div className="grid items-center gap-8 md:grid-cols-1 text-center">
        <div className="sd-reveal mb-auto">
          <p className="w-fit rounded-full bg-sky px-3 py-1 text-xs font-semibold text-brand mx-auto">About</p>
          <h2 id="about-h" className="mt-3 text-3xl font-extrabold sm:text-4xl w-[40vw] mx-auto">Meet Your Landing Page Development Partner</h2>
          <p className="mt-4 text-muted">I am Zafar, an independent landing page developer based in Lisbon, Portugal. I work with startup founders, SaaS businesses and growing companies to create professional landing pages that communicate their value and encourage visitors to take action.</p>
          <p className="mt-3 text-muted">Whether you have a finished Figma design, an early product idea or an existing landing page that needs improvement, I can help turn it into a fast, responsive and search-friendly experience.</p>
          <p className="mt-3 text-muted">I handle the technical development, responsive implementation and launch, so you can focus on running your business.</p>
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" labelledBy="svc-h" className="sd-zoom">
      <Heading id="svc-h" center sub="Everything you need to launch a professional landing page, handled by one developer.">Landing Page Development</Heading>
      <ul className="grid gap-5 md:grid-cols-3">
        {SERVICES.map((s) => (
          <li key={s.title} className={`${card} sd-reveal sd-zoom`}>
            <h3 className="font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Types() {
  return (
    <Section id="services" labelledBy="svc-h" className="sd-zoom flex flex-col gap-6">
      <Heading id="svc-h" center sub="Every business has a different goal. Whether you're launching a product, attracting new customers or generating more enquiries, I build custom landing pages designed around what you want visitors to do next.">What type of landing page do you need?</Heading>
      <ul className="grid gap-5 md:grid-cols-3 grid-cols-1">
        {TYPES.map((s, i) => (
          <li key={s.title} className={`${card} sd-reveal sd-zoom ${i === 0 ? `md:col-span-2 col-span-1` : i === 3 ? `md:col-span-2 flex flex-col` : `col-span-1`}`}>
            <h3 className="font-bold text-center">{s.title}</h3>
            <p className={`mt-2 text-sm text-muted ${i === 3 || i === 0 ? `mt-6` : ``}`}>{s.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function PremiumCta() {
  return (
    <Section className="!py-8">
      <div className="sd-zoom bg-navy px-6 py-14 text-center text-white sm:px-14">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">If you sell a premium product, you need a premium landing page.</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/80">Find out how I build pages that attract the right people and keep them around.</p>
        <Link data-umami-event="book a premium consultation click logo click in CTA section" data-umami-event-location="Premium CTA section" href={SITE.bookingUrl} className={`${btnLight} mt-7`}>Book a free consultation</Link>
      </div>
    </Section>
  );
}

export function Reviews() {
  return (
    <Section id="reviews" labelledBy="rev-h">
      <Heading id="rev-h" center>Hear from my clients</Heading>
      <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {REVIEWS.map((r) => (
          <li key={r.name} className="sd-reveal mb-5 break-inside-avoid sd-zoom">
            <figure className={card}>
              <blockquote className="text-sm">“{r.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span aria-hidden className="grid size-9 place-items-center rounded-full bg-sky text-xs font-bold text-brand">{r.initials}</span>
                <span className="text-sm"><strong className="block">{r.name}</strong><span className="text-xs text-muted">{r.role}</span></span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Guarantees() {
  return (
    <Section labelledBy="g-h" className="!pt-0">
      <Heading id="g-h" center sub="From the first conversation to launch, I keep the process straightforward. You bring your business goals and ideas; I handle the landing page development, technical details and launch.">How I develop your landing page?</Heading>
      {/* Vertical timeline: cards zig-zag around a centre line on desktop and stack beside a left line on mobile.
          The line fills and each numbered circle lights up as the page scrolls (pure CSS scroll-driven animation). */}
      <div className="relative">
        <span aria-hidden="true" className="absolute inset-y-0 left-[19px] w-0.5 bg-brand/20 md:left-[calc(50%-1px)]" />
        <span aria-hidden="true" className="sd-tl-fill absolute inset-y-0 left-[19px] w-0.5 bg-brand md:left-[calc(50%-1px)]" />
        <ol className="relative list-none">
          {GUARANTEES.map((g, i) => {
            const right = i % 2 === 1; // 1st left, 2nd right, 3rd left, 4th right, 5th left
            return (
              <li key={g.title} className={`relative pl-14 md:w-[calc(50%-3rem)] md:pl-0 ${right ? "md:ml-auto" : "md:mr-auto"} ${i > 0 ? "mt-5 md:mt-14" : ""}`}>
                <span
                  aria-hidden="true"
                  className={`sd-tl-node absolute left-0 top-4 z-10 grid size-10 place-items-center rounded-full border-2 border-brand bg-brand text-sm font-bold text-white shadow-[0_0_0_6px_var(--color-sky)] ${right ? "md:-left-[68px]" : "md:left-auto md:-right-[68px]"}`}
                >
                  {i + 1}
                </span>
                <span aria-hidden="true" className={`sd-tl-link absolute left-10 top-[35px] h-0.5 w-4 bg-brand md:w-7 ${right ? "md:-left-7" : "md:left-auto md:-right-7"}`} />
                <article className={`${card} sd-reveal sd-zoom`}>
                  <h3 className="font-bold">{g.title.replace(/^\d+\.\s*/, "")}</h3>
                  <p className="mt-2 text-sm text-muted">{g.text}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section id="pricing" labelledBy="price-h">
      <Heading id="price-h" center sub="Choose the right development package for your project.">Simple, transparent pricing</Heading>
      <ul className="grid gap-5 md:grid-cols-3">
        {PLANS.map((p) => (
          <li key={p.tag} className="sd-reveal sd-zoom">
            <article className={`${card} h-full ${p.featured ? "border-2 border-brand" : ""}`}>
              <p className="w-fit rounded-full bg-sky px-3 py-1 text-xs font-semibold text-brand">{p.tag}</p>
              <p className="mt-4 text-4xl font-extrabold">{p.price}</p>
              <p className="text-sm text-muted">per project</p>
              <ul className="mt-5 space-y-2 text-sm text-muted">
                {p.items.map((i) => <li key={i} className="flex gap-2"><span aria-hidden className="text-brand">✓</span>{i}</li>)}
              </ul>
              <Link data-umami-event={`Get started click in ${p.tag} pricing section`} data-umami-event-location="Pricing section" href={SITE.bookingUrl} className={`${p.featured ? btnPrimary : btnOutline} mt-6`} aria-label={`Get started with the ${p.tag} plan`}>Get started</Link>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Faqs() {
  return (
    <Section id="faq" labelledBy="faq-h">
      <Heading id="faq-h">FAQs</Heading>
      <FaqAccordion items={FAQS} />
    </Section>
  );
}

export function BookCall() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-dark bg-navy py-20 text-center text-white md:py-28"
    >
      <div className="container-page">
        <h2
          id="contact-title"
          className="sd-zoom mx-auto max-w-2xl text-3xl font-bold leading-snug md:text-4xl"
        >
          {cta.heading}
        </h2>
        <p className="sd-zoom mt-5 text-sm text-night-muted">{cta.text}</p>
        <ButtonLink href={SITE.bookingUrl} variant="light" className="sd-zoom mt-8">
          {cta.button}
        </ButtonLink>
      </div>
    </section>
  );
}
