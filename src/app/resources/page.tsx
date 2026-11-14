import type { Metadata } from "next";
import Link from "next/link";
import BlogGrid, { type PostSummary } from "@/components/blog/BlogGrid";
import { btnLight, Section } from "@/components/ui";
import { loadAllArticles } from "@/lib/resource-content";
import { SITE } from "@/lib/content";

const TITLE = "Blog: notes on fast SaaS landing pages";
const DESCRIPTION = "Practical guides on landing page development: costs, SaaS landing pages, Figma to code, mobile-friendly pages, lead generation, speed, SEO and when to redesign.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/resources" },
  openGraph: { type: "website", url: `${SITE.url}/resources`, title: `${TITLE} | ${SITE.name}`, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function ResourcesPage() {
  const articles = loadAllArticles();
  const posts: PostSummary[] = articles.map((a) => ({
    slug: a.slug, title: a.heading, excerpt: a.excerpt, category: a.category, published: a.published, updated: a.updated,
    minutes: a.minutes, featured: !!a.featured, cover: a.cover,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog", "@id": `${SITE.url}/resources`, url: `${SITE.url}/resources`, name: "Notes on fast SaaS landing pages", description: DESCRIPTION, inLanguage: "en",
        isPartOf: { "@id": `${SITE.url}/#website` },
        blogPost: articles.map((a) => ({
          "@type": "BlogPosting", headline: a.heading, url: `${SITE.url}/resources/${a.slug}`, datePublished: a.published,
          dateModified: a.updated ?? a.published, image: `${SITE.url}${a.cover.src}`, description: a.description,
          author: { "@type": "Person", name: SITE.name, url: SITE.url },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/resources` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main id="main">
        <Section labelledBy="blog-h" className="!pb-12 !pt-14 md:!pt-20">
          <div className="sd-exit">
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-brand-dark">Blog</p>
            <h1 id="projects-h" className="animate-fade-in mt-6 text-5xl font-semibold sm:text-6xl">Notes on fast SaaS landing pages.</h1>
            <p className="animate-fade-in mt-5 max-w-xl text-lg text-muted">Practical Next.js, performance and conversion advice for SaaS founders and marketing teams.</p>
          </div>
          <div className="mt-10"><BlogGrid posts={posts} /></div>
        </Section>

        <section aria-labelledby="blog-cta-h" className="bg-navy py-20 text-center text-white md:py-28">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <h2 id="blog-cta-h" className="sd-zoom mx-auto max-w-3xl text-3xl font-semibold sm:text-4xl">Need a landing page that loads fast and converts?</h2>
            <p className="sd-zoom mt-4 text-sm text-white/80">Free 30-minute call. No obligation, just a clear plan.</p>
            <Link href={SITE.bookingUrl} data-umami-event="Book a free call click in blog CTA" data-umami-event-location="Blog page" className={`${btnLight} sd-zoom mt-7`}>Book a free call</Link>
          </div>
        </section>
      </main>
    </>
  );
}
