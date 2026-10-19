import Image from "next/image";
import Link from "next/link";
import { cta, FAQS, GUARANTEES, PLANS, PROJECTS, REVIEWS, SERVICES, SITE, TOOLS } from "@/lib/content";
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
                <Link href={`/projects`} className="mt-3 inline-block text-sm font-semibold text-brand" aria-label={`View ${p.name} in all projects`}>View all projects →</Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center sd-zoom"><Link href="/projects" className={btnOutline}>View all projects</Link></div>
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
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_2fr]">
        <div className="sd-drift overflow-hidden bg-sky">
          <Image src="/images/about/zafar-landingpage-developer-1.jpg" alt="Portrait of Zafar Saleem, freelance web developer" width={400} height={400} className="h-auto w-full" />
        </div>
        <div className="sd-reveal mb-auto">
          <p className="w-fit rounded-full bg-sky px-3 py-1 text-xs font-semibold text-brand">About</p>
          <h2 id="about-h" className="mt-3 text-3xl font-extrabold sm:text-4xl">Hi, I’m Zafar.</h2>
          <p className="mt-4 text-muted">I’m a freelance web developer working remotely with SaaS and product teams from Lisbon, Portugal. I build with React.js and Next.js so your site is fast, searchable and easy to maintain.</p>
          <p className="mt-3 text-muted">I’ve spent years shipping marketing sites and web apps. I enjoy turning a design into a page that loads instantly, and clients keep coming back because I communicate clearly and deliver on time.</p>
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" labelledBy="svc-h" className="sd-zoom">
      <Heading id="svc-h" center sub="Everything a SaaS marketing site needs, handled by one developer.">Services that grow your conversions.</Heading>
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

export function PremiumCta() {
  return (
    <Section className="!py-8">
      <div className="sd-zoom bg-navy px-6 py-14 text-center text-white sm:px-14">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">If you sell a premium product, you need a premium landing page.</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/80">Find out how I build pages that attract the right people and keep them around.</p>
        <Link href={SITE.bookingUrl} className={`${btnLight} mt-7`}>Book a free consultation</Link>
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
      <Heading id="g-h" center sub="Clear terms, so there are no surprises.">My guarantees</Heading>
      <ul className="grid gap-5 md:grid-cols-3">
        {GUARANTEES.map((g) => (
          <li key={g.title} className={`${card} sd-reveal sd-zoom`}><h3 className="font-bold">{g.title}</h3><p className="mt-2 text-sm text-muted">{g.text}</p></li>
        ))}
      </ul>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section id="pricing" labelledBy="price-h">
      <Heading id="price-h" center sub="Simple, flat pricing. The price you see is what you pay.">Let’s find the right fit</Heading>
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
              <Link href="#contact" className={`${p.featured ? btnPrimary : btnOutline} mt-6`} aria-label={`Get started with the ${p.tag} plan`}>Get started</Link>
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
      <ul className="grid gap-5 md:grid-cols-2">
        {FAQS.map((f, i) => (
          <li key={f.q} className={`${card} sd-reveal sd-zoom`}>
            <p className="text-xs font-bold text-brand">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-1 font-bold">{f.q}</h3>
            <p className="mt-2 text-sm text-muted">{f.a}</p>
          </li>
        ))}
      </ul>
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
        <p className="mt-8 text-sm text-night-muted">
          Prefer email?{" "}
          <Link
            href={`mailto:${SITE.email}`}
            className="font-medium text-white underline underline-offset-4 hover:text-tint"
          >
            {SITE.email}
          </Link>
        </p>
      </div>
    </section>
  );
}
