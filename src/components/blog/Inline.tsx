import Link from "next/link";
import { Fragment } from "react";

/** Renders **bold** and [label](href) inside a string. Internal links use next/link, external ones open safely. */
export default function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  const link = "font-medium text-brand underline underline-offset-2 hover:text-brand-dark";
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**")) return <strong key={i} className="font-bold text-ink"><Inline text={part.slice(2, -2)} /></strong>;
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        return /^https?:/.test(m[2]) ? (
          <a key={i} href={m[2]} target="_blank" rel="noopener noreferrer" className={link}>{m[1]}<span className="sr-only"> (opens in a new tab)</span></a>
        ) : (
          <Link key={i} href={m[2]} className={link}>{m[1]}</Link>
        );
      })}
    </>
  );
}
