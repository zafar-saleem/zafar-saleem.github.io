import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Inline from "@/components/blog/Inline";
import PostMeta from "@/components/blog/PostMeta";
import { btnLight, btnOutline, btnPrimary } from "@/components/ui";
import { loadArticle, type Article, type Block } from "@/lib/resource-content";
import { RESOURCES } from "@/lib/resources";
import { SITE } from "@/lib/content";

export const dynamicParams = false;
export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = loadArticle(slug);
  if (!a) return {};
  const url = `${SITE.url}/resources/${a.slug}`;
  const image = { url: a.cover.src, width: 1200, height: 630, alt: a.cover.alt };
  return {
    // absolute: use the SEO title exactly, without the site-name suffix from the root layout
    title: { absolute: a.seoTitle },
    description: a.description,
    keywords: [a.primaryKeyword, ...a.secondaryKeywords],
    authors: [{ name: SITE.name, url: SITE.url }],
    alternates: { canonical: `/resources/${a.slug}` },
    openGraph: {
      type: "article", url, siteName: SITE.name, title: a.seoTitle, description: a.description, images: [image],
      publishedTime: a.published, modifiedTime: a.updated ?? a.published, authors: [SITE.name], section: a.category,
      tags: [a.primaryKeyword, ...a.secondaryKeywords],
    },
    twitter: { card: "summary_large_image", title: a.seoTitle, description: a.description, images: [a.cover.src] },
  };
}

function structuredData(a: Article) {
  const url = `${SITE.url}/resources/${a.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", "@id": `${url}#article`, mainEntityOfPage: { "@type": "WebPage", "@id": url }, url,
        headline: a.heading, description: a.description, image: [`${SITE.url}${a.cover.src}`],
        datePublished: a.published, dateModified: a.updated ?? a.published,
        author: { "@type": "Person", "@id": `${SITE.url}/#person`, name: SITE.name, url: SITE.url },
        publisher: { "@type": "Person", "@id": `${SITE.url}/#person`, name: SITE.name, url: SITE.url },
        articleSection: a.category, keywords: [a.primaryKeyword, ...a.secondaryKeywords].join(", "), wordCount: a.words, inLanguage: "en",
        isPartOf: { "@type": "Blog", "@id": `${SITE.url}/resources` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/resources` },
          { "@type": "ListItem", position: 3, name: a.category, item: url },
        ],
      },
    ],
  };
}

const h2 = "scroll-mt-28 text-3xl font-bold tracking-tight";
const body = "text-lg leading-8 text-muted";
const badge = "w-fit flex flex-wrap gap-2 text-xs font-semibold rounded-full bg-mist px-3 py-1 text-brand-dark";

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === "p") return <p key={i} className={body}><Inline text={b.text} /></p>;
        if (b.type === "h3") return <h3 key={i} className="mt-4 text-2xl font-bold">{b.text}</h3>;
        const Tag = b.type === "ol" ? "ol" : "ul";
        return (
          <Tag key={i} className={`${b.type === "ol" ? "list-decimal" : "list-disc"} grid gap-2 pl-6 marker:text-ink ${body}`}>
            {b.items.map((it, j) => <li key={j}><Inline text={it} /></li>)}
          </Tag>
        );
      })}
    </>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = loadArticle(slug);
  if (!a) notFound();

  const toc = a.sections.map((s) => ({ id: s.id, title: s.title }));
  const related = a.related.map((r) => loadArticle(r)).filter((r): r is Article => !!r);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(a)).replace(/</g, "\\u003c") }} />
      <main id="main">
        <article className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 sm:px-8 md:pt-14">
          <header>
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <ol className="flex flex-wrap items-center gap-x-1.5">
                <li><Link href="/" className="text-brand underline underline-offset-2">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/resources" className="text-brand underline underline-offset-2">Blog</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{a.category}</li>
              </ol>
            </nav>
            <p className={`${badge} mt-6`}>{a.category}</p>
            <h1 id="projects-h" className="animate-fade-in mt-6 text-5xl font-semibold sm:text-6xl">{a.heading}</h1>
            <p className="animate-fade-in mt-5 max-w-xl text-lg text-muted">{a.excerpt}</p>
            <div className="mt-7 flex items-center gap-4">
              <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-full bg-brand text-lg font-bold text-white">ZS</span>
              <div>
                <p className="font-bold"><Link href="/" rel="author" className="hover:text-brand">{SITE.name}</Link></p>
                <PostMeta published={a.published} updated={a.updated} minutes={a.minutes} />
              </div>
            </div>
          </header>

          <div className="relative mt-10 aspect-[1200/630] overflow-hidden rounded-[0.25rem] bg-sky">
            <Image src={a.cover.src} alt={a.cover.alt} fill priority sizes="(min-width: 1152px) 1088px, 100vw" className="object-contain" />
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="max-w-3xl">
              <div className="grid gap-4"><Blocks blocks={a.intro} /></div>

              {a.sections.map((s) => (
                <section key={s.id} aria-labelledby={s.id} className="mt-12">
                  <h2 id={s.id} className={h2}>{s.title}</h2>
                  <div className="mt-4 grid gap-4"><Blocks blocks={s.blocks} /></div>
                </section>
              ))}

              <aside aria-labelledby="post-cta-h" className="mt-14 rounded-[0.25rem] border border-sky bg-sky/60 p-8 sm:p-9">
                <h2 id="post-cta-h" className="text-2xl font-bold">Want a fixed quote for your landing page?</h2>
                <p className="mt-3 text-lg text-muted">Book a free 30-minute call and get a written quote within 48 hours.</p>
                <Link href={SITE.bookingUrl} data-umami-event={`Book a free call click in article ${a.slug}`} data-umami-event-location="Blog article" className={`${btnPrimary} mt-6 !px-8 !py-3.5 !text-base`}>Book a free call</Link>
              </aside>
            </div>

            <div className="grid content-start gap-6 lg:sticky lg:top-28 lg:self-start">
              <nav aria-labelledby="toc-h" className="rounded-[0.25rem] border border-sky bg-white p-6">
                <h2 id="toc-h" className="text-xs font-bold uppercase tracking-[0.08em] text-brand-dark">On this page</h2>
                <ul className="mt-3">
                  {toc.map((t) => (
                    <li key={t.id} className="border-b border-sky last:border-0">
                      <a href={`#${t.id}`} className="block py-2.5 text-sm hover:text-brand">{t.title}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <section aria-labelledby="author-h" className="rounded-[0.25rem] border border-sky bg-white p-6">
                <h2 id="author-h" className="text-lg font-bold">About the author</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  I am <Link href="/" rel="author" className="font-semibold text-brand underline underline-offset-2">Zafar</Link>, a landing page developer for SaaS startups, working remotely from Lisbon. See my <Link href="/projects" className="font-semibold text-brand underline underline-offset-2">portfolio</Link> for recent work.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Link href="/#about" data-umami-event="More about me click in article" data-umami-event-location="Blog article" className={`${btnOutline} text-center whitespace-nowrap`}>More about me</Link>
                  <Link href="/projects" data-umami-event="View portfolio click in article" data-umami-event-location="Blog article" className={`${btnOutline} text-center whitespace-nowrap`}>View portfolio</Link>
                </div>
              </section>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section aria-labelledby="related-h" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
            <div className="sd-reveal">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-brand-dark">Keep reading</p>
              <h2 id="related-h" className="mt-3 text-3xl font-extrabold sm:text-4xl">Related posts</h2>
            </div>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug} className="sd-reveal">
                  <article className="relative h-full rounded-[0.25rem] border border-sky bg-white p-8 transition-shadow hover:shadow-md">
                    <p className={badge}>{r.category}</p>
                    <h3 className="mt-5 text-2xl font-semibold leading-snug">
                      <Link href={`/resources/${r.slug}`} data-umami-event="Related article click" data-umami-event-location="Blog article" className="after:absolute after:inset-0 hover:text-brand">{r.heading}</Link>
                    </h3>
                    <PostMeta published={r.published} updated={r.updated} minutes={r.minutes} className="mt-5" />
                  </article>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
}
