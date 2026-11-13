"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import "./vante-hero.css";
import Link from "next/link";

const THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter+Tight:wght@400;500;600&display=swap";

export type VanteTestimonial = { quote: string; name: string; role: string; initials?: string };

export type VanteHeroProps = {
  /** Client feedback cards (first three are shown, 5 stars each). Visible on landing, they fade out together with the caption. */
  testimonials?: VanteTestimonial[];
  /** "cover" crops each video to fill its card; "contain" shows the whole video. Default "cover". */
  fit?: "cover" | "contain";
  /** Videos shown on the ribbon and in the final grid (title shows in the hover pill). Defaults to the Vante reel. */
  videos?: { title: string; src: string }[];
  /** Where the "START A PROJECT" link goes. */
  ctaHref?: string;
  /** Render the Vante logo, "LET'S TALK" and "MENU" bar. Turn off if your site already has a header. */
  topBar?: boolean;
  /** Height in px of a sticky header above the hero, so the stage sits just beneath it. */
  offsetTop?: number;
  /** CSS selector of that header. Its live height is measured and kept in sync. */
  offsetSelector?: string;
  /** Accessible name of the h1 (the animated words are aria-hidden). */
  label?: string;
  /** Visually hidden intro text for screen readers and crawlers. */
  description?: string;
};

export default function VanteHero({
  ctaHref = "#",
  topBar = true,
  offsetTop = 0,
  offsetSelector,
  label = "I build websites",
  description,
  videos,
  fit = "cover",
  testimonials,
}: VanteHeroProps) {
  const videosKey = videos ? JSON.stringify(videos) : "";
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let cancelled = false;
    let dispose: (() => void) | undefined;

    // three.js is loaded from jsDelivr at runtime, so it never enters the app bundle.
    import(/* webpackIgnore: true */ /* turbopackIgnore: true */ "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js")
      .then(async (THREE) => {
        if (cancelled) return;
        const { initRibbon } = await import("./ribbon");
        if (cancelled) return;
        dispose = initRibbon(THREE, root, {
          offsetSelector,
          fit,
          videos: videosKey ? JSON.parse(videosKey) : undefined,
          reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,
        });
      })
      .catch(() => root.setAttribute("data-failed", ""));

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, [offsetSelector, videosKey, fit]);

  return (
    <section ref={ref} className="vante" aria-labelledby="vh-title" style={{ "--vante-top": `${offsetTop}px` } as CSSProperties}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href={FONTS_URL} precedence="vante-fonts" />
      <link rel="modulepreload" href={THREE_URL} />

      <div id="vh-track">
        <div className="stage" id="vh-stage">
          <h1 id="vh-title" aria-label={label}>
            <span className="hl -my-8" id="vh-l1" aria-hidden="true">Landing Page Development For</span>
            <span className="hl my-7" id="vh-l2" aria-hidden="true"> Businesses That Want More Customers</span>
          </h1>
          {description && <p className="vh-sr">{description}</p>}
          <p id="vh-cap">I help startup founders, SaaS companies and small businesses turn their ideas, designs and offers into fast, professional landing pages that generate leads, sign-ups and enquiries.</p>
          <div id="vh-glow"></div>
          <div id="vh-cross"><i>+</i></div>
          <div id="vh-rule"></div>
          {testimonials && testimonials.length > 0 && (
            <ul id="vh-reviews" aria-label="Client feedback" className="max-w-[1240px] mt-14 md:mt-0 mx-auto">
              {testimonials.slice(0, 3).map((t) => (
                <li key={t.name} className="mt-0">
                  <figure className="vh-card">
                    <div className="vh-stars" role="img" aria-label="5 out of 5 stars">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <svg key={i} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></svg>
                      ))}
                    </div>
                    <blockquote>“{t.quote}”</blockquote>
                    <figcaption>
                      <span className="vh-av" aria-hidden="true">{t.initials ?? t.name.slice(0, 2).toUpperCase()}</span>
                      <span><strong>{t.name}</strong><small>{t.role}</small></span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          )}
          <canvas id="vh-gl" aria-hidden="true"></canvas>
          <canvas id="vh-glf" aria-hidden="true"></canvas>
          <Link id="vh-hint" href={ctaHref} data-umami-event="start a project click" data-umami-event-location="hero section">START A PROJECT &nbsp;→</Link>
          <div className="top">
            {topBar && (
              <div className="logo">
                <svg viewBox="0 0 22 18" aria-hidden="true"><path d="M11 0l11 18h-6.200L11 9.600 6.200 18H0z" /></svg>VANTE
              </div>
            )}
            <div id="vh-pager" className="hidden" aria-hidden="true"><span>←</span><span>→</span></div>
            {topBar && (
              <nav className="acts" aria-label="Studio">
                <Link href="#"><i></i>LET&apos;S TALK</Link>
                <Link href="#">MENU<b></b></Link>
              </nav>
            )}
          </div>
          <div className="bot">
            <p>Freelance Website & Landing Page Developer · React.js & Next.js</p>
          </div>
          <div id="vh-name" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
