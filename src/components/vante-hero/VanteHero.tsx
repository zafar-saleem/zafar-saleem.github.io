"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import "./vante-hero.css";
import Link from "next/link";

const THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter+Tight:wght@400;500;600&display=swap";

export type VanteHeroProps = {
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
  label = "Craft in motion",
  description,
  videos,
  fit = "cover",
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
            <span className="hl -my-5" id="vh-l1" aria-hidden="true"><span>CRAFT IN</span></span>
            <span className="hl my-4" id="vh-l2" aria-hidden="true"><span>WEB</span></span>
          </h1>
          {description && <p className="vh-sr">{description}</p>}
          <div id="vh-cap" className="">I turn your Figma designs into a fast, SEO-friendly site you can update yourself, live in 2-3 weeks.</div>
          <div id="vh-glow"></div>
          <div id="vh-cross"><i>+</i></div>
          <div id="vh-rule"></div>
          <canvas id="vh-gl" aria-hidden="true"></canvas>
          <Link id="vh-hint" href={ctaHref}>START A PROJECT &nbsp;→</Link>
          <div className="top">
            {topBar && (
              <div className="logo">
                <svg viewBox="0 0 22 18" aria-hidden="true"><path d="M11 0l11 18h-6.200L11 9.600 6.200 18H0z" /></svg>VANTE
              </div>
            )}
            <div id="vh-pager" aria-hidden="true"><span>←</span><span>→</span></div>
            {topBar && (
              <nav className="acts" aria-label="Studio">
                <a href="#"><i></i>LET&apos;S TALK</a>
                <a href="#">MENU<b></b></a>
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
