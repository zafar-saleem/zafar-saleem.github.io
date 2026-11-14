/**
 * Metadata for the articles under /resources. The article bodies live as Markdown in src/content/resources/<slug>.md
 * (loaded by resource-content.ts). To publish a new article: add a .md file, add an entry here, and drop a
 * 1200x630 cover image in public/resources/. The listing, article page, structured data and sitemap pick it up.
 *
 * This file has no Node-only imports, so client components may import it.
 */

export type Category = "Pricing" | "SaaS" | "Development" | "Conversion" | "Performance" | "Hiring" | "SEO";

export type Resource = {
  slug: string;
  /** Exact <title> text (used without the site-name suffix). */
  seoTitle: string;
  /** Meta description. */
  description: string;
  /** Short teaser for cards. */
  excerpt: string;
  category: Category;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** ISO dates. Keep them accurate: set `updated` whenever the article is substantially changed. */
  published: string;
  updated?: string;
  featured?: boolean;
  cover: { src: string; alt: string };
  /** Slugs of related articles (internal links). */
  related: string[];
};

const cover = (slug: string, alt: string) => ({ src: `/resources/${slug}`, alt });

export const RESOURCES: Resource[] = [
  {
    slug: "landing-page-development-cost",
    seoTitle: "How Much Does It Cost to Build a Landing Page in 2026?",
    description: "Discover what affects landing page development costs, from design and functionality to integrations and performance. Understand what to consider before hiring a landing page developer.",
    excerpt: "What affects landing page costs, from design and functionality to integrations and performance.",
    category: "Pricing", featured: true, published: "2026-11-14",
    primaryKeyword: "landing page development cost",
    secondaryKeywords: ["landing page development pricing", "custom landing page cost", "freelance landing page developer", "landing page design and development cost"],
    cover: cover("Landing-Page-Cost-Guide-2026.png", "Three pricing tiers illustrating landing page development cost"),
    related: ["freelance-developer-vs-web-design-agency", "saas-landing-page-guide"],
  },
  {
    slug: "saas-landing-page-guide",
    seoTitle: "What Should a SaaS Landing Page Include? A Practical Guide",
    description: "Learn what a SaaS landing page should include, from product messaging and features to pricing, testimonials and sign-up CTAs. A practical guide for startup founders.",
    excerpt: "The essential sections to plan for, from product messaging and features to pricing and sign-up calls to action.",
    category: "SaaS", published: "2026-11-07",
    primaryKeyword: "SaaS landing page",
    secondaryKeywords: ["SaaS landing page design", "SaaS landing page development", "startup landing page", "software product landing page"],
    cover: cover("SaaS-Landing-Page-Guide.jpg", "A SaaS product dashboard with the sections of a landing page"),
    related: ["startup-product-launch-landing-page", "landing-page-development-cost"],
  },
  {
    slug: "figma-to-landing-page",
    seoTitle: "How to Turn a Figma Design into a Working Landing Page",
    description: "Have a Figma design but need a developer? Learn how to convert a Figma landing page into a responsive, fast-loading website ready to launch.",
    excerpt: "How to prepare your design and turn it into a responsive, fast-loading page that is ready to launch.",
    category: "Development", published: "2026-10-28",
    primaryKeyword: "Figma to landing page development",
    secondaryKeywords: ["Figma to Next.js", "Figma to React", "Figma to website", "landing page developer"],
    cover: cover("figma-to-landing-page.jpg", "A Figma design frame being converted into code"),
    related: ["mobile-friendly-landing-page", "landing-page-development-cost"],
  },
  {
    slug: "mobile-friendly-landing-page",
    seoTitle: "Why Your Business Needs a Mobile-Friendly Landing Page",
    description: "Learn why responsive landing page development matters for your business, how mobile usability affects visitors and what to check before launching your page.",
    excerpt: "Why responsive development matters, how mobile usability affects visitors and what to check before launch.",
    category: "Development", published: "2026-10-21",
    primaryKeyword: "mobile-friendly landing page",
    secondaryKeywords: ["responsive landing page development", "mobile landing page design", "mobile responsive website"],
    cover: cover("mobile-friendly-landing-page.jpg", "A landing page shown on a desktop screen and a phone"),
    related: ["landing-page-speed-optimisation", "figma-to-landing-page"],
  },
  {
    slug: "lead-generation-landing-page",
    seoTitle: "How to Build a Landing Page That Generates More Leads",
    description: "Learn how to structure a lead generation landing page with clear messaging, persuasive calls to action, enquiry forms and trust signals that encourage potential customers to get in touch.",
    excerpt: "How to structure a lead generation page with clear messaging, calls to action, forms and trust signals.",
    category: "Conversion", published: "2026-10-10",
    primaryKeyword: "lead generation landing page",
    secondaryKeywords: ["landing page for lead generation", "high-converting landing page", "business landing page", "landing page development"],
    cover: cover("lead-generation-landing-page.jpg", "An enquiry form and a conversion funnel for a lead generation landing page"),
    related: ["landing-page-seo-guide", "when-to-redesign-landing-page"],
  },
  {
    slug: "landing-page-speed-optimisation",
    seoTitle: "How Website Speed Affects Landing Page Performance",
    description: "Discover how landing page speed affects user experience, conversions and Core Web Vitals. Learn practical ways to improve loading performance before launch.",
    excerpt: "How page speed affects user experience, conversions and Core Web Vitals, and how to improve it.",
    category: "Performance", published: "2026-09-23",
    primaryKeyword: "landing page speed optimisation",
    secondaryKeywords: ["fast-loading landing page", "website performance optimisation", "Core Web Vitals", "landing page performance"],
    cover: cover("landing-page-speed-optimisation.jpg", "A performance gauge illustrating landing page speed"),
    related: ["landing-page-seo-guide", "mobile-friendly-landing-page"],
  },
  {
    slug: "startup-product-launch-landing-page",
    seoTitle: "How to Create a Landing Page for a Startup Launch",
    description: "Planning a startup or product launch? Learn how to create a launch landing page that communicates your product, builds interest and encourages early sign-ups.",
    excerpt: "How to plan a launch page that explains your product, builds interest and encourages early sign-ups.",
    category: "SaaS", published: "2026-09-14",
    primaryKeyword: "startup landing page",
    secondaryKeywords: ["product launch landing page", "startup landing page development", "coming soon landing page", "pre-launch landing page"],
    cover: cover("startup-product-launch-landing-page.jpg", "A coming soon landing page with an early access form and a rocket"),
    related: ["saas-landing-page-guide", "lead-generation-landing-page"],
  },
  {
    slug: "freelance-developer-vs-web-design-agency",
    seoTitle: "Freelance Landing Page Developer vs Web Design Agency",
    description: "Should you hire a freelance landing page developer or a web design agency? Compare communication, project scope, costs and delivery to choose the right option for your business.",
    excerpt: "How communication, scope, cost and accountability compare, and how to choose the right option.",
    category: "Hiring", published: "2026-09-05",
    primaryKeyword: "freelance landing page developer",
    secondaryKeywords: ["hire landing page developer", "landing page development agency", "freelance web developer", "landing page development services"],
    cover: cover("freelance-developer-vs-web-design-agency.jpg", "A single freelance developer compared with an agency team"),
    related: ["landing-page-development-cost", "figma-to-landing-page"],
  },
  {
    slug: "landing-page-seo-guide",
    seoTitle: "Does Your Landing Page Need SEO? A Practical Guide",
    description: "Discover whether your landing page needs SEO, which optimisation elements matter and how to make your page easier for search engines to understand and index.",
    excerpt: "Which SEO elements matter for a landing page, and how to make it easier for search engines to understand.",
    category: "SEO", published: "2026-08-27",
    primaryKeyword: "landing page SEO",
    secondaryKeywords: ["SEO-friendly landing page", "landing page optimisation", "landing page metadata", "landing page development"],
    cover: cover("landing-page-seo-guide.jpg", "A search bar and search results illustrating landing page SEO"),
    related: ["landing-page-speed-optimisation", "lead-generation-landing-page"],
  },
  {
    slug: "when-to-redesign-landing-page",
    seoTitle: "When Should You Redesign Your Business Landing Page?",
    description: "Is your landing page outdated, slow or difficult to use? Learn when to redesign or redevelop your business landing page and what to improve before launch.",
    excerpt: "Signs your landing page needs attention, and whether to redesign or redevelop it.",
    category: "Conversion", published: "2026-08-22",
    primaryKeyword: "landing page redesign",
    secondaryKeywords: ["landing page redevelopment", "redesign business landing page", "landing page developer", "improve landing page performance"],
    cover: cover("when-to-redesign-landing-page.jpg", "A before and after comparison of a landing page redesign"),
    related: ["lead-generation-landing-page", "mobile-friendly-landing-page"],
  },
];

export const getResourceMeta = (slug: string) => RESOURCES.find((r) => r.slug === slug);

/** Deterministic date formatting (UTC), so server and browser always agree. */
export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
