/**
 * Accessible accordion built on native <details>/<summary>: works without JavaScript, is keyboard operable by
 * default, and the answers stay in the HTML for search engines. Items share name="faq" so opening one closes
 * the others in browsers that support exclusive groups.
 */
export default function FaqAccordion({ items, name = "faq" }: { items: { q: string; a: string[] }[]; name?: string }) {
  return (
    <div className="grid gap-4">
      {items.map((f, i) => (
        <details key={f.q} name={name} open={i === 0} className="faq-acc group sd-reveal sd-zoom border border-sky bg-white">
          <summary className="flex cursor-pointer list-none items-center gap-4 p-6 text-left [&::-webkit-details-marker]:hidden">
            <span className="text-xs font-bold text-brand" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="flex-1 font-bold">{f.q}</h3>
            <svg viewBox="0 0 12 12" aria-hidden="true" className="size-4 shrink-0 text-brand transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 4.5 6 8l3.5-3.5" />
            </svg>
          </summary>
          <div className="px-6 pb-6 pl-[3.75rem]">
            {f.a.map((ans, j) => (
              <p key={j} className="mt-2 text-sm text-muted first:mt-0">{ans}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
