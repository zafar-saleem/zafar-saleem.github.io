"use client";

import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV, SITE, type NavItem } from "@/lib/content";
import Link from "next/link";
import { btnPrimary } from "./ui";
// #091f45

const trim = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
/** Hash links (/#about) belong to the homepage sections, so they never count as "current". */
const isHash = (href: string) => href.includes("#");
const matches = (href: string, path: string) => !isHash(href) && (path === href || path.startsWith(`${href}/`));

const linkBase = "text-current/80 hover:text-brand";
const linkActive = "font-bold text-brand";

function Dropdown({ item, path }: { item: NavItem; path: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const active = matches(item.href, path);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false); }}
      onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        aria-current={active ? "true" : undefined}
        onClick={() => setOpen((o) => !o)}
        data-umami-event={`${item.label} click in navbar`}
        data-umami-event-location="navbar"
        className={`inline-flex items-center gap-1 ${active ? linkActive : linkBase}`}
      >
        {item.label}
        <svg viewBox="0 0 12 12" aria-hidden="true" className={`size-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 4.5 6 8l3.5-3.5" />
        </svg>
      </button>
      {/* pt-3 keeps the pointer inside the list item while it travels from the button to the menu */}
      <div id={id} hidden={!open} className="absolute left-0 top-full z-50 pt-3">
        <ul className="min-w-60 rounded-[0.25rem] border border-sky bg-white py-2 text-ink shadow-lg">
          {item.children?.map((c) => {
            const here = trim(path) === c.href;
            return (
              <li key={c.href}>
                <Link
                  href={c.href}
                  aria-current={here ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  data-umami-event={`${c.label} click in navbar dropdown`}
                  data-umami-event-location="navbar"
                  className={`block px-4 py-2.5 text-sm ${here ? "bg-mist font-bold text-brand" : "hover:bg-sky hover:text-brand"}`}
                >
                  {c.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

export default function Header() {
  const path = trim(usePathname() ?? "/");

  return (
    <>
      <div aria-hidden className="sd-progress fixed inset-x-0 top-0 z-50 h-1 bg-brand" />
      <Link href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</Link>
      <header className="sd-header sticky top-0 z-40 w-full border-b border-sky backdrop-blur">
        <div className="flex w-full mx-auto items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link href="/" className="text-base font-extrabold tracking-tight" data-umami-event="logo click in header" data-umami-event-location="header">{SITE.name}</Link>
          <nav aria-label="Main" className="flex items-center gap-6 text-sm">
            <ul className="hidden items-center gap-6 lg:flex">
              {NAV.map((n) =>
                n.children ? (
                  <Dropdown key={n.href} item={n} path={path} />
                ) : (
                  <li key={n.href}>
                    <Link
                      data-umami-event={`${n.label} click in navbar`}
                      data-umami-event-location="navbar"
                      href={n.href}
                      aria-current={matches(n.href, path) ? "page" : undefined}
                      className={matches(n.href, path) ? linkActive : linkBase}
                    >
                      {n.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <Link href={SITE.bookingUrl} className={`${btnPrimary} !px-4 !py-2`} data-umami-event="book a call click in navbar" data-umami-event-location="navbar">Book a call</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
