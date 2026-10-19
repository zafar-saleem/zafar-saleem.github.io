import { SITE, SOCIALS } from "@/lib/content";
import ContactForm from "./ContactForm";
import { Heading, Section } from "./ui";
import Link from "next/link";

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-h">
      <Heading id="contact-h" center sub="Let’s make something happen together.">Got a project in mind?</Heading>
      {/* <div className="sd-reveal"><ContactForm /></div> */}
    </Section>
  );
}

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="bg-navy text-white border-t border-white/10">
      <div className="container-page max-w-6xl mx-auto flex flex-col gap-4 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {YEAR} {SITE.name}
        </p>
        <nav aria-label="Social and contact">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {SOCIALS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="hover:text-white"
                >
                  {l.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

