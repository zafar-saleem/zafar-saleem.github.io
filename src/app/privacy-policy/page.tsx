
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zafar Saleem",
  description:
    "Learn how Zafar Saleem collects, uses, stores and protects personal information when you contact him about freelance frontend development services.",
  alternates: {
    canonical: "/privacy-policy/",
  },
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "data-controller", title: "Who Is Responsible for Your Personal Data?" },
  { id: "information-collected", title: "Personal Information I Collect" },
  { id: "collection-methods", title: "How I Collect Your Information" },
  { id: "how-i-use-data", title: "How I Use Your Personal Information" },
  { id: "legal-basis", title: "Legal Basis for Processing" },
  { id: "data-retention", title: "How Long I Keep Your Information" },
  { id: "sharing-information", title: "Sharing Your Personal Information" },
  { id: "meta-platforms", title: "Facebook, Instagram and Meta Platforms" },
  { id: "international-transfers", title: "International Data Transfers" },
  { id: "security", title: "How I Protect Your Information" },
  { id: "your-rights", title: "Your Data Protection Rights" },
  { id: "complaints", title: "Right to Lodge a Complaint" },
  { id: "cookies", title: "Cookies and Website Analytics" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "policy-changes", title: "Changes to This Privacy Policy" },
  { id: "contact", title: "Contact" },
];

const informationCollected = [
  "Name and surname.",
  "Facebook or Messenger profile name and publicly available profile information.",
  "Email address.",
  "Phone number, if you voluntarily provide it.",
  "Country or location.",
  "Business or company name.",
  "Project requirements and descriptions.",
  "Website or application URLs.",
  "Preferred technologies and development requirements.",
  "Estimated project budget and timeline.",
  "Any additional information you include in your messages.",
];

const collectionMethods = [
  "Facebook and Instagram advertisements.",
  "Facebook Messenger conversations.",
  "Contact forms on my website.",
  "Direct emails.",
  "Project discussions and consultations.",
  "Other communication channels you choose to use.",
];

const purposes = [
  "Responding to enquiries about my frontend development services.",
  "Understanding your website or application requirements.",
  "Preparing project proposals and estimates.",
  "Discussing project budgets, timelines and deliverables.",
  "Arranging consultations and meetings.",
  "Communicating about ongoing projects.",
  "Providing requested services.",
  "Maintaining business records.",
  "Preventing spam, fraud and misuse of my services.",
  "Meeting applicable legal and accounting obligations.",
];

const dataRights = [
  {
    title: "Right of access",
    description:
      "Request a copy of the personal information I hold about you.",
  },
  {
    title: "Right to rectification",
    description:
      "Request correction of inaccurate or incomplete information.",
  },
  {
    title: "Right to erasure",
    description:
      "Request deletion of your personal information where applicable.",
  },
  {
    title: "Right to restriction",
    description:
      "Request that processing be restricted in certain circumstances.",
  },
  {
    title: "Right to data portability",
    description:
      "Request your information in a commonly used, machine-readable format where applicable.",
  },
  {
    title: "Right to object",
    description:
      "Object to certain types of processing, including processing based on legitimate interests.",
  },
  {
    title: "Right to withdraw consent",
    description:
      "Withdraw consent where processing is based on your consent.",
  },
];

const retentionPeriods = [
  {
    title: "Unsuccessful project enquiries",
    description:
      "Normally up to 12 months after the last meaningful communication.",
  },
  {
    title: "Active project information",
    description:
      "For the duration of the working relationship and any necessary follow-up period.",
  },
  {
    title: "Invoices and accounting records",
    description:
      "For the period required by applicable Portuguese tax and accounting laws.",
  },
  {
    title: "Legal or dispute-related records",
    description:
      "For as long as necessary to establish, exercise or defend legal claims.",
  },
];

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-neutral-200 py-10 first:pt-0 last:border-0"
    >
      <div className="mb-5 flex items-start gap-4">
        <span className="pt-1 font-mono text-sm text-neutral-400">
          {number}
        </span>
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
          {title}
        </h2>
      </div>

      <div className="space-y-5 pl-9 text-[15px] leading-8 text-neutral-600">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-neutral-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  const contactEmail = "zafarsaleem3@gmail.com";
  const businessName = "Zafar Saleem";

  return (
    <main className="min-h-screen bg-[#faf9f6] text-neutral-900">
      {/* Page header */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
          <a
            href="/"
            className="text-sm font-semibold tracking-tight hover:text-neutral-500"
          >
            ZAFAR SALEEM
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            Legal / Privacy
          </p>

          <h1 className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Privacy
            <br />
            <span className="text-neutral-400">Policy.</span>
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-neutral-500">
            <span>Last updated: 14 November 2026</span>
            <span>17 sections</span>
            <span>Portugal</span>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600">
            Your privacy matters. This policy explains how I collect, use,
            store and protect your personal information when you contact me
            about my freelance frontend development services.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-16 lg:grid-cols-[250px_minmax(0,760px)] lg:gap-20 lg:px-10 lg:py-24">
        {/* Table of contents */}
        <aside className="lg:sticky lg:top-10 lg:h-fit">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-neutral-400">
            On this page
          </p>

          <nav aria-label="Privacy policy contents">
            <ol className="space-y-3 border-l border-neutral-200 pl-4">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex gap-3 text-sm leading-5 text-neutral-500 transition-colors hover:text-neutral-950"
                  >
                    <span className="font-mono text-xs text-neutral-300 group-hover:text-neutral-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Policy content */}
        <article className="min-w-0">
          <Section
            id="introduction"
            number="01"
            title="Introduction"
          >
            <p>
              Welcome to my website.
            </p>

            <p>
              I'm Zafar Saleem, an independent freelance frontend developer
              specialising in React.js, Next.js and TypeScript.
            </p>

            <p>
              I respect your privacy and am committed to protecting your
              personal information. This Privacy Policy explains how I
              collect, use, store and protect personal information when you
              contact me through my website, Facebook advertisements,
              Facebook Messenger or other communication channels.
            </p>

            <p>
              This policy applies to prospective clients, existing clients
              and people interested in my website development services.
            </p>
          </Section>

          <Section
            id="data-controller"
            number="02"
            title="Who Is Responsible for Your Personal Data?"
          >
            <p>
              The data controller responsible for your personal information
              is:
            </p>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-neutral-400">Name</dt>
                  <dd className="font-medium text-neutral-900">
                    Zafar Saleem
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">Business name</dt>
                  <dd className="font-medium text-neutral-900">
                    {businessName}
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">Country</dt>
                  <dd className="font-medium text-neutral-900">
                    Portugal
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">Website</dt>
                  <dd>
                    <a
                      href="https://zafar-saleem.github.io"
                      className="underline underline-offset-4 hover:text-neutral-400"
                    >
                      zafar-saleem.github.io
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="underline underline-offset-4 hover:text-neutral-400"
                    >
                      {contactEmail}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <p>
              If you have questions about this Privacy Policy or how your
              personal information is processed, you can contact me using
              the email address above.
            </p>
          </Section>

          <Section
            id="information-collected"
            number="03"
            title="Personal Information I Collect"
          >
            <p>
              When you contact me about my freelance development services,
              I may collect the following information:
            </p>

            <h3 className="font-semibold text-neutral-900">
              Information you provide directly
            </h3>

            <BulletList items={informationCollected} />

            <h3 className="font-semibold text-neutral-900">
              Information collected through Facebook Messenger
            </h3>

            <p>
              If you contact me through an advertisement on Facebook or
              Instagram, I may receive information you choose to share
              through the Messenger conversation.
            </p>

            <p>
              This may include your profile name, messages, answers to
              questions and any contact information you voluntarily provide.
            </p>

            <p>
              Please avoid sharing sensitive personal information through
              Messenger.
            </p>
          </Section>

          <Section
            id="collection-methods"
            number="04"
            title="How I Collect Your Information"
          >
            <p>
              I may collect personal information through:
            </p>
            <BulletList items={collectionMethods} />
            <p>
              Providing information is voluntary. However, I may need
              certain details to understand your requirements and respond
              to your enquiry.
            </p>
          </Section>

          <Section
            id="how-i-use-data"
            number="05"
            title="How I Use Your Personal Information"
          >
            <p>
              I use your information only for legitimate business and
              communication purposes, including:
            </p>
            <BulletList items={purposes} />
            <p>
              I will not use information collected through a project
              enquiry to send unrelated promotional messages without an
              appropriate legal basis.
            </p>
          </Section>

          <Section
            id="legal-basis"
            number="06"
            title="Legal Basis for Processing"
          >
            <p>
              Under the General Data Protection Regulation (GDPR), I
              process personal information on the following legal bases,
              where applicable:
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-neutral-900">
                  Pre-contractual steps
                </h3>
                <p>
                  When you contact me to request information, discuss a
                  project, obtain a quotation or explore a potential
                  working relationship.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900">
                  Contractual necessity
                </h3>
                <p>
                  When processing information is necessary to provide
                  services or fulfil an agreement with you.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900">
                  Legitimate interests
                </h3>
                <p>
                  When processing is necessary for reasonable business
                  purposes, such as responding to business communications,
                  maintaining security, preventing spam and managing
                  professional relationships, provided those interests do
                  not override your rights.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900">
                  Legal obligations
                </h3>
                <p>
                  When I need to retain or process information to comply
                  with applicable laws and regulations.
                </p>
              </div>
            </div>

            <p>
              Where processing relies on consent, you may withdraw that
              consent at any time.
            </p>
          </Section>

          <Section
            id="data-retention"
            number="07"
            title="How Long I Keep Your Information"
          >
            <p>
              I retain personal information only for as long as reasonably
              necessary for the purposes described in this policy.
            </p>

            <div className="space-y-4">
              {retentionPeriods.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-neutral-200 bg-white p-5"
                >
                  <h3 className="mb-2 font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <p>
              When information is no longer required, I will securely
              delete it or anonymise it where appropriate, unless a legal
              obligation requires further retention.
            </p>
          </Section>

          <Section
            id="sharing-information"
            number="08"
            title="Sharing Your Personal Information"
          >
            <p>
              I do not sell your personal information.
            </p>

            <p>
              I may share relevant information with service providers when
              necessary to operate my business and respond to your
              enquiries.
            </p>

            <BulletList
              items={[
                "Meta Platforms: Facebook and Messenger provide the communication and advertising platforms through which you may contact me.",
                "Email and communication providers: When necessary to manage correspondence.",
                "Website hosting providers: When necessary to operate my website.",
                "Professional advisers: Such as accountants or legal advisers, where necessary.",
                "Public authorities: Where disclosure is required by applicable law.",
              ]}
            />

            <p>
              I only share information where necessary and take reasonable
              steps to ensure that appropriate privacy and security
              protections are in place.
            </p>
          </Section>

          <Section
            id="meta-platforms"
            number="09"
            title="Facebook, Instagram and Meta Platforms"
          >
            <p>
              I use Facebook and Instagram advertising to promote my
              freelance frontend development services.
            </p>

            <p>
              When you interact with one of my advertisements or contact me
              through Messenger, Meta processes your information in
              accordance with its own Privacy Policy.
            </p>

            <p>
              I may receive information you voluntarily share during the
              conversation, such as your name, profile information,
              messages and project requirements.
            </p>

            <p>
              Meta independently determines certain aspects of how its
              platforms process personal information. Its processing is
              governed by its own privacy terms.
            </p>

            <a
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-500"
            >
              Read Meta's Privacy Policy
              <span aria-hidden="true">↗</span>
            </a>
          </Section>

          <Section
            id="international-transfers"
            number="10"
            title="International Data Transfers"
          >
            <p>
              Some third-party service providers, including Meta, may
              process information outside the European Economic Area (EEA).
            </p>

            <p>
              Where personal information is transferred internationally,
              appropriate safeguards will be relied upon where required by
              applicable data protection law.
            </p>

            <p>
              These safeguards may include an applicable adequacy decision
              or approved contractual protections.
            </p>
          </Section>

          <Section
            id="security"
            number="11"
            title="How I Protect Your Information"
          >
            <p>
              I take reasonable technical and organisational measures to
              protect personal information against:
            </p>

            <BulletList
              items={[
                "Unauthorised access.",
                "Accidental loss.",
                "Unauthorised disclosure.",
                "Alteration or misuse.",
                "Unlawful processing.",
              ]}
            />

            <p>
              However, no method of electronic communication or storage is
              completely secure, and I cannot guarantee absolute security.
            </p>
          </Section>

          <Section
            id="your-rights"
            number="12"
            title="Your Data Protection Rights"
          >
            <p>
              Under the GDPR, you may have the following rights:
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {dataRights.map((right) => (
                <div
                  key={right.title}
                  className="rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <h3 className="mb-2 text-sm font-semibold text-neutral-900">
                    {right.title}
                  </h3>
                  <p className="text-sm leading-6 text-neutral-500">
                    {right.description}
                  </p>
                </div>
              ))}
            </div>

            <p>
              To exercise these rights, contact me at:
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="inline-block font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-500"
            >
              {contactEmail}
            </a>

            <p>
              I may need to verify your identity before responding to
              certain requests.
            </p>

            <p>
              I will respond within the time limits required by applicable
              data protection law.
            </p>
          </Section>

          {/* <Section
            id="complaints"
            number="13"
            title="Right to Lodge a Complaint"
          >
            <p>
              If you believe that your personal information has been
              processed unlawfully or your data protection rights have
              been violated, you may lodge a complaint with the relevant
              data protection authority.
            </p>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="mb-3 font-semibold text-neutral-900">
                Comissão Nacional de Proteção de Dados (CNPD)
              </h3>

              <p>Portugal's data protection supervisory authority.</p>

              <p>
                Website:{" "}
                <a
                  href="https://www.cnpd.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-neutral-400"
                >
                  www.cnpd.pt
                </a>
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:geral@cnpd.pt"
                  className="underline underline-offset-4 hover:text-neutral-400"
                >
                  geral@cnpd.pt
                </a>
              </p>
            </div>

            <p>
              You may also contact the data protection authority in your
              country of residence where applicable.
            </p>
          </Section> */}

          <Section
            id="cookies"
            number="14"
            title="Cookies and Website Analytics"
          >
            <p>
              My website may use cookies or similar technologies to
              support website functionality and understand website
              performance.
            </p>

            <p>
              If I introduce advertising or analytics tracking
              technologies, including Meta Pixel, I will provide
              appropriate information and obtain consent where required
              by applicable law before using non-essential tracking
              technologies.
            </p>

            <p>
              You can manage cookie preferences through the available
              consent controls on my website, where implemented.
            </p>
          </Section>

          <Section
            id="childrens-privacy"
            number="15"
            title="Children's Privacy"
          >
            <p>
              My freelance development services are intended for
              businesses, entrepreneurs and professionals.
            </p>

            <p>
              I do not knowingly seek to collect personal information
              from children in connection with these services.
            </p>
          </Section>

          <Section
            id="policy-changes"
            number="16"
            title="Changes to This Privacy Policy"
          >
            <p>
              I may update this Privacy Policy from time to time to
              reflect changes in my business practices, services or
              applicable legal requirements.
            </p>

            <p>
              Any updates will be published on this page with a revised
              Last Updated date.
            </p>
          </Section>

          <Section
            id="contact"
            number="17"
            title="Contact"
          >
            <p>
              If you have any questions about this Privacy Policy, your
              personal information or how I handle data protection
              requests, please contact me:
            </p>

            <div className="rounded-2xl border border-neutral-200 bg-white p-7">
              <p className="text-lg font-semibold text-neutral-900">
                Zafar Saleem
              </p>

              <p className="mt-4">
                Website:{" "}
                <a
                  href="https://zafar-saleem.github.io"
                  className="underline underline-offset-4 hover:text-neutral-400"
                >
                  zafar-saleem.github.io
                </a>
              </p>

              <p>
                Email:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="underline underline-offset-4 hover:text-neutral-400"
                >
                  {contactEmail}
                </a>
              </p>

              <p>Country: Portugal</p>
            </div>
          </Section>
        </article>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} Zafar Saleem. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="/" className="hover:text-neutral-900">
              Home
            </a>
            <a
              href="/privacy-policy/"
              className="text-neutral-900 underline underline-offset-4"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
