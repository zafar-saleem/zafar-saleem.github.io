"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PostMeta from "./PostMeta";

export type PostSummary = {
  slug: string; title: string; excerpt: string; category: string; published: string; updated?: string; minutes: number;
  featured: boolean; cover: { src: string; alt: string };
};

const pillBase = "rounded-full border px-4 py-2 text-sm font-semibold transition-colors";
const badge = "w-fit flex flex-wrap gap-2 text-xs font-semibold rounded-full bg-mist px-3 py-1 text-brand-dark";

export default function BlogGrid({ posts }: { posts: PostSummary[] }) {
  const [active, setActive] = useState("All");
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const visible = posts.filter((p) => active === "All" || p.category === active);
  const featured = visible.find((p) => p.featured);
  const rest = visible.filter((p) => p !== featured);

  return (
    <>
      <div role="group" aria-label="Filter posts by category" className="flex flex-wrap gap-2.5">
        {categories.map((c) => (
          <button key={c} type="button" aria-pressed={active === c} onClick={() => setActive(c)}
            className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm font-bold transition-colors ${active === c ? "border-ink bg-ink text-white" : "border-sky bg-white text-ink hover:border-brand hover:text-brand"}`}>
            {c}
          </button>
        ))}
      </div>
      <p role="status" aria-live="polite" className="sr-only">Showing {visible.length} {visible.length === 1 ? "post" : "posts"}</p>

      {featured && (
        <article className="sd-reveal relative mt-10 grid overflow-hidden rounded-[0.25rem] border border-sky bg-white md:grid-cols-[1fr_1.15fr]">
          <div className="relative min-h-64 bg-sky md:min-h-[22rem]">
            <Image src={featured.cover.src} alt={featured.cover.alt} fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className={badge}>Featured · {featured.category}</p>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              <Link href={`/resources/${featured.slug}`} data-umami-event="Featured blog post click" data-umami-event-location="Blog page" className="after:absolute after:inset-0 hover:text-brand">
                {featured.title}
              </Link>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{featured.excerpt}</p>
            <PostMeta published={featured.published} updated={featured.updated} minutes={featured.minutes} className="mt-6" />
          </div>
        </article>
      )}

      <ul className="mt-8 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <li key={p.slug} className="sd-reveal">
            <article className="relative rounded-[0.25rem] border border-sky bg-white p-8 transition-shadow focus-within:shadow-md hover:shadow-md">
              <p className={badge}>{p.category}</p>
              <div className="relative bg-sky mt-4">
                <Image src={p.cover.src} alt={p.cover.alt} width={100} height={100} className="object-contain w-full aspect[16/9]" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold leading-snug">
                <Link href={`/resources/${p.slug}`} data-umami-event="Blog post card click" data-umami-event-location="Blog page" className="after:absolute after:inset-0 hover:text-brand">
                  {p.title}
                </Link>
              </h3>
              {/* <p className="mt-3 text-lg leading-relaxed text-muted">{p.excerpt}</p> */}
              <PostMeta published={p.published} updated={p.updated} minutes={p.minutes} className="mt-5" />
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
