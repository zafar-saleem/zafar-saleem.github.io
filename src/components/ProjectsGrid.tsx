"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FILTERS, type Project } from "@/lib/content";
import { btnLight } from "./ui";

export default function ProjectsGrid({ projects, bookingUrl }: { projects: Project[]; bookingUrl: string }) {
  const [active, setActive] = useState<string>("all");
  const count = projects.filter((p) => active === "all" || p.category === active).length;

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-3">
        {FILTERS.map((f) => (
          <button key={f.id} type="button" aria-pressed={active === f.id} onClick={() => setActive(f.id)}
            className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-colors ${active === f.id ? "border-ink bg-ink text-white" : "border-sky bg-white text-ink hover:border-brand hover:text-brand"}`}>
            {f.label}
          </button>
        ))}
      </div>
      <p role="status" aria-live="polite" className="sr-only">Showing {count} {count === 1 ? "project" : "projects"}</p>

      <ul className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-2">
        {projects.map((p) => (
          <li key={p.slug} hidden={active !== "all" && p.category !== active} className="sd-reveal mb-6 break-inside-avoid">
            <article className="bg-white p-4 flex flex-col gap-4">
              <div className={`relative overflow-hidden`}>
                <Image src={p.img} alt={`${p.name} website preview`} width={400} height={400} sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw" className="object-cover w-full h-auto" />
              </div>
              <div className="p-2 pt-4">
                <ul className="flex flex-wrap gap-2 text-xs font-semibold" aria-label="Project tags">
                  <li className="rounded-full bg-sky px-3 py-1 text-brand">{p.label}</li>
                  {p.tags.map((t) => <li key={t} className="rounded-full bg-mist px-3 py-1 text-ink">{t}</li>)}
                </ul>
                <h3 className="mt-3 text-xl font-semibold">{p.name}</h3>
                {/* <p className="mt-2 text-sm text-muted">{p.brief}</p> */}
                {/* <Link href="/#contact" className="mt-4 inline-block text-sm font-bold text-brand" aria-label={`Start a project like ${p.name}`}>Start a similar project →</Link> */}
              </div>
            </article>
          </li>
        ))}
        <li className="sd-zoom mb-6 break-inside-avoid">
          <aside aria-labelledby="next-h" className="flex min-h-80 flex-col justify-center bg-navy p-8 text-white">
            <h3 id="next-h" className="text-2xl font-semibold">Your SaaS website could be next.</h3>
            <p className="mt-3 text-sm text-white/80">Book a free 30-minute call and let’s plan your landing page.</p>
            <Link href={bookingUrl} className={`${btnLight} mt-6 w-fit`}>Book a call</Link>
          </aside>
        </li>
      </ul>
    </>
  );
}
