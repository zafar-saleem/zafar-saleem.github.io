"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

type Block = { tag: "h2" | "p"; id?: string; text: string; className: string };

/**
 * Text that is coloured in line by line while the page scrolls (see "About: sticky scroll text colour reveal" in globals.css).
 * Every word stays a normal inline word, so wrapping, accessibility and SEO are unchanged. The only job of this
 * component is to find out which visual line each word is on, so the CSS can reveal the lines one after another.
 * The colour animation itself is CSS-only and scroll-driven.
 */
export default function AboutReveal({ blocks }: { blocks: Block[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<number[][] | null>(null);
  const [total, setTotal] = useState(0);

  const measure = useCallback(() => {
    const el = root.current;
    if (!el) return;
    let line = -1;
    const perBlock: number[][] = [];
    el.querySelectorAll<HTMLElement>("[data-block]").forEach((b) => {
      const idx: number[] = [];
      let lastTop = Number.NaN;
      b.querySelectorAll<HTMLElement>("[data-w]").forEach((w) => {
        if (w.offsetTop !== lastTop) { line++; lastTop = w.offsetTop; }
        idx.push(line);
      });
      perBlock.push(idx);
    });
    setLines((prev) => (prev && JSON.stringify(prev) === JSON.stringify(perBlock) ? prev : perBlock));
    setTotal(line + 1);
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (root.current) ro.observe(root.current);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [measure]);

  // Each line gets its own slice of the scroll distance, overlapping its neighbours a little so the change feels continuous.
  const range = (line: number): CSSProperties => {
    const step = 0.88 / Math.max(total, 1);
    const start = line * step;
    const end = Math.min(start + step * 1.6, 0.98);
    return { "--s": `${(start * 100).toFixed(2)}%`, "--e": `${(end * 100).toFixed(2)}%` } as CSSProperties;
  };

  return (
    <div ref={root} className="rv" data-ready={lines ? "" : undefined}>
      {blocks.map((b, bi) => {
        const Tag = b.tag;
        return (
          <Tag key={bi} id={b.id} className={b.className} data-block="">
            {b.text.split(" ").map((word, wi, all) => (
              <span key={wi}>
                <span data-w="" className="rv-word" style={lines?.[bi]?.[wi] !== undefined ? range(lines[bi][wi]) : undefined}>{word}</span>
                {wi < all.length - 1 ? " " : ""}
              </span>
            ))}
          </Tag>
        );
      })}
    </div>
  );
}
