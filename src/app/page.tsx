import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { About, BookCall, Faqs, Feature, Guarantees, PremiumCta, Pricing, Reviews, Services, Work } from "@/components/Sections";
import { Contact, Footer } from "@/components/Footer";
import { FAQS, SITE } from "@/lib/content";
import { Clients } from "@/components/Clients";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, inLanguage: "en" },
    {
      "@type": "ProfessionalService", "@id": `${SITE.url}/#service`, name: `${SITE.name} – Freelance Web Developer`,
      url: SITE.url, email: SITE.email, description: SITE.description, priceRange: "$$",
      areaServed: "Worldwide", founder: { "@id": `${SITE.url}/#person` },
      serviceType: ["SaaS landing page development", "Next.js website development", "Website performance optimisation"],
    },
    { "@type": "Person", "@id": `${SITE.url}/#person`, name: SITE.name, jobTitle: "Freelance Web Developer", url: SITE.url, email: SITE.email, knowsAbout: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"] },
    { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Header />
      <main id="main">
        <Hero />
        <Clients />
        <Work />
        <Feature />
        <About />
        <Services />
        <PremiumCta />
        <Reviews />
        <Guarantees />
        {/* <Pricing /> */}
        <Faqs />
        <BookCall />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
