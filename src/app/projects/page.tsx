import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ProjectsGrid from "@/components/ProjectsGrid";
import { Footer } from "@/components/Footer";
import { btnLight, btnPrimary, Section } from "@/components/ui";
import { cta, PLAYGROUND_URL, PROJECTS, SITE } from "@/lib/content";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Selected projects",
  description: "Landing pages, websites and performance fixes built for SaaS, marketplace and e-commerce teams, including Mudah, Westwing, Slimming World, Tayara and Kritzer.",
  alternates: { canonical: "/projects" },
  openGraph: { url: `${SITE.url}/projects`, title: `Selected projects | ${SITE.name}`, type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage", "@id": `${SITE.url}/projects`, url: `${SITE.url}/projects`, name: "Selected projects",
      isPartOf: { "@id": `${SITE.url}/#website` },
      mainEntity: { "@type": "ItemList", itemListElement: PROJECTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, description: p.brief })) },
    },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE.url}/projects` },
    ] },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Header currentHref="/projects" />
      <main id="main">
        <Section labelledBy="projects-h" className="!pb-8 !pt-14">
          <div className="sd-exit">
            <Link href="/" className="text-sm font-bold text-brand">← Back to home</Link>
            <h1 id="projects-h" className="animate-fade-in mt-6 text-5xl font-semibold sm:text-6xl">Selected projects</h1>
            <p className="animate-fade-in mt-5 max-w-xl text-lg text-muted">Landing pages, websites and fixes I’ve built for SaaS, marketplace and e-commerce teams. Browse the brief and the result for each project.</p>
          </div>
          <div className="mt-10"><ProjectsGrid projects={PROJECTS} bookingUrl={SITE.bookingUrl} /></div>
        </Section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="on-dark bg-navy py-20 text-center text-white md:py-28"
        >
          <div className="container-page">
            <h2 id="cta-h" className="sd-zoom mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl">Like what you see? Let’s talk about your project.</h2>
            <p className="sd-zoom mt-4 text-sm text-white/80">Free 30-minute call. No obligation, just a clear plan.</p>
            <Link href={SITE.bookingUrl} className={`${btnLight} mt-7 sd-zoom`}>Book a free consultation</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
