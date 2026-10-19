import { NAV, SITE } from "@/lib/content";
import Link from "next/link";
import { btnPrimary } from "./ui";

export default function Header({ currentHref }: { currentHref?: string }) {
  return (
    <>
      <div aria-hidden className="sd-progress fixed inset-x-0 top-0 z-50 h-1 bg-brand" />
      <Link href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</Link>
      <header className="sd-header sticky top-0 z-40 w-full border-b border-sky bg-white/90 backdrop-blur">
        <div className="flex w-6xl mx-auto items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link href="/" className="text-base font-extrabold tracking-tight">{SITE.name}</Link>
          <nav aria-label="Main" className="flex items-center gap-6 text-sm">
            <ul className="hidden items-center gap-6 lg:flex">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} aria-current={n.href === currentHref ? "page" : undefined} className={n.href === currentHref ? "font-bold text-brand" : "text-ink/80 hover:text-brand"}>{n.label}</Link>
                </li>
              ))}
            </ul>
            <Link href={SITE.bookingUrl} className={`${btnPrimary} !px-4 !py-2`}>Book a call</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
