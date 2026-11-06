import Tayara from "../components/assets/tayara.webp";

export const SITE = {
  name: "Zafar Saleem",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zafar-saleem.github.io",
  email: "zafarsaleem3@gmail.com",
  bookingUrl: "https://calendly.com/zafarsaleem/30min",
  title: "Zafar Saleem · I build websites, microsites & landing pages for SaaS, SMEs & founders",
  description:
    "I build fast, SEO-friendly landing pages for SaaS startups & SMEs. Figma to live site in weeks. Book a free call.",
};

export const NAV = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export const QUOTES = [
  "Great freelancer!",
  "Willing to go the extra mile",
  "Great communication",
  "Would recommend to anyone",
];

export type Project = {
  slug: string; name: string; label: string; category: "saas" | "marketplace" | "ecommerce" | "components" | "fixes" | "website";
  tags: string[]; brief: string; result: string; img: any; aspect: string; href: string;
};

export const FILTERS = [
  { id: "all", label: "All" },
  { id: "website", label: "Websites" },
  { id: "fixes", label: "Fixes & speed-ups" },
  { id: "components", label: "Components" },
] as const;

export const PROJECTS: Project[] = [
  { slug: "portfolio", name: "Zafar Portfolio", label: "Portfolio", category: "website", tags: ["Next.js"], img: "https://casestudies-cnu.pages.dev/portfolio.webp", aspect: "aspect-square",
    brief: "Programme and sign-up pages that were slow and hard to update for a wellness brand.",
    result: "Built entire portoflio website to showcase my projects/case studies.", href: "https://zafar-saleem.github.io", },
  { slug: "budget-management", name: "Fintech", label: "Fintech Dashboard", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/budget-management.webp", aspect: "aspect-[16/10]",
    brief: "A salary management Figma to code mini summary dashboard.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "bento-website", name: "Track Goals", label: "Health Website", category: "website", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/bento-website.webp", aspect: "aspect-[16/10]",
    brief: "A health and fitness Figma-to-code that needed lightweight, crawlable & convertible interface.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "mudah", name: "Mudah", label: "Marketplace", category: "website", tags: ["Next.js"], img: "https://casestudies-cnu.pages.dev/mudah.webp", aspect: "aspect-[4/3]",
    brief: "A classifieds marketplace that needed quick listing pages and simple category navigation.",
    result: "Faster listing pages and easier browsing on mobile.", href: "https://mudah.my", },
  { slug: "westwing", name: "Westwing", label: "E-commerce", category: "website", tags: ["Next.js"], img: "https://casestudies-cnu.pages.dev/westwing.webp", aspect: "aspect-[4/5]",
    brief: "A home and living storefront that needed lightweight, search-friendly product and campaign pages.",
    result: "Stronger Core Web Vitals across key storefront pages.", href: "https://westwing.de", },
  { slug: "slimming-world", name: "Slimming World", label: "Health & wellness", category: "fixes", tags: ["Next.js"], img: "https://casestudies-cnu.pages.dev/slimming.webp", aspect: "aspect-square",
    brief: "Programme and sign-up pages that were slow and hard to update for a wellness brand.",
    result: "Quicker pages and a sign-up flow the team can maintain.", href: "https://slimmingworld.co.uk", },
  { slug: "airline-seat-selector", name: "Airline Seat Selector", label: "SaaS Component", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/airline-seat-selector.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "tayara", name: "Tayara", label: "Marketplace", category: "website", tags: ["Next.js"], img: "https://casestudies-cnu.pages.dev/tayara.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "https://tayara.tn", },
  { slug: "activity-tracker", name: "Activity Tracker", label: "SaaS Component", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/activity-tracker.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "agency", name: "Studio Website", label: "Website", category: "website", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/agency.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "analytics-component", name: "Analytics Component", label: "SaaS Component", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/analytics-component.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "buy-now", name: "eCommerce", label: "eCommerce", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/buy-now.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "cinema-ticket-seat-selector", name: "Booking", label: "Booking", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/cinema-ticket-seat-selector.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "connect-wallet", name: "Fintech & Web3", label: "Web3", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/connect-wallet.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "create-new-menu", name: "Dashboard", label: "Web3", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/create-new-menu.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "daily-goal", name: "Health", label: "Health", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/daily-goal.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "fitness", name: "Health & Fitness", label: "Fitness", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/fitness.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "hero-website", name: "SaaS Website", label: "Hero Section", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/hero-website.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "kritzer", name: "Portfolio Website", label: "Photography", category: "website", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/kritzer.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "leisure-activity", name: "Product Listing Card", label: "eCommerce", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/leisure-activity.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "macros", name: "Health & Fitness", label: "Dashboard", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/macros.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "measure-growth", name: "Health & Fitness", label: "Dashboard", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/measure-growth.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "net-profit-chart", name: "Fintech Profit", label: "Dashboard", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/net-profit-chart.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "payment", name: "eCommerce Payment", label: "eCommerce", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/payment.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "pricing", name: "SaaS Website Pricing", label: "pricing section", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/pricing.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "project-management", name: "Project Mannagement", label: "Project Tracking", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/project-management.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "real-estate", name: "Real Estate", label: "Website", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/real-estate.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "schedule-list", name: "Time Management", label: "Dashboard", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/schedule-list.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "seat-selector", name: "Booking Website", label: "Booking", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/seat-selector.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "team-management", name: "Team Management", label: "Dashboard", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/team-management.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "tribes", name: "Social Website", label: "Hero Section", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/tribes.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "walk-tracker", name: "Health & Fitness", label: "fitness", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/walk-tracker.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "weekly-goals", name: "Management App", label: "management", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/weekly-goals.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
];

export const PLAYGROUND_URL = "https://github.com/zafarsaleem";

export const SERVICES = [
  { title: "SaaS landing pages", text: "Pricing, features and sign-up flows, built to load fast and rank." },
  { title: "Websites & microsites", text: "Campaign and product sites your team can update without a developer." },
  { title: "Fixes & speed-ups", text: "Slow or broken sites diagnosed, fixed and handed back with a clear write-up." },
];

export const TOOLS = ["Figma", "React.js", "Next.js", "TypeScript", "Tailwind CSS"];

export const REVIEWS = [
  { name: "Nathan F.", role: "Founder, SaaS startup", initials: "NF", text: "Great freelancer! Met expectations for a JavaScript project and was on time. Would recommend to anyone." },
  { name: "John C.", role: "Product lead, B2B software", initials: "JC", text: "Zafar is very customer focused willing to go the extra mile will being using again on future projects." },
  { name: "Sammy E.", role: "Founder, design agency", initials: "SE", text: "Everythng fine, nice communction great experience. Highly recommended! Thank you" },
  { name: "Jaspal S.", role: "Owner, online business", initials: "JS", text: "Great work, thanks. Helped fix my site quickly and worked through the issues with me clearly. Great communication, fantastic English, very polite, good availability. I look forward to working with you again." },
  { name: "Ime A.", role: "Marketing manager, SaaS company", initials: "IA", text: "Really great working with Zafar" },
  { name: "Liam D.", role: "CTO, early-stage startup", initials: "LD", text: "A Gentleman and Efficient. Will hire again." },
];

export const clients = ["https://zafar-assets.zafarsaleem3.workers.dev/mudah.png", "https://zafar-assets.zafarsaleem3.workers.dev/tayara.png", "https://zafar-assets.zafarsaleem3.workers.dev/slimming.png", "https://zafar-assets.zafarsaleem3.workers.dev/westwing.png"];

export const GUARANTEES = [
  { title: "On-time delivery", text: "Your promise, e.g. live within 3 weeks of kickoff or you get 10% back." },
  { title: "Ongoing support", text: "30 days of free support after launch for bugs and small updates." },
  { title: "Revisions included", text: "Two rounds of revisions so you love the final result." },
];

export const PLANS = [
  { tag: "Landing page", price: "$1,500", featured: false, items: ["Single-page SaaS landing page", "Mobile-first, SEO basics", "Fast load times"] },
  { tag: "Website", price: "$3,500", featured: true, items: ["Everything in Landing page", "Up to 6 pages", "Blog / CMS setup"] },
  { tag: "Custom", price: "$6,000+", featured: false, items: ["Complex or long-term builds", "Custom integrations", "Retainer available"] },
];

export const FAQS = [
  { q: "How long does a landing page take?", a: "Typically 2–3 weeks, depending on scope and how ready your content and designs are." },
  { q: "Do you work from Figma designs?", a: "Yes. I can also work from a brand guide or wireframes if you don't have final designs." },
  { q: "What do I need to provide?", a: "Your Figma designs (or brand guide), copy and images. I'll tell you exactly what's needed on the kickoff call." },
  { q: "What happens after launch?", a: "You get handover docs and 30 days of support. Ongoing retainers are available." },
  { q: "How do we get started?", a: "Book a free call, share your goals, and I'll send a fixed-scope quote within 48 hours." },
  { q: "Which technologies do you use?", a: "Next.js, React and TypeScript with Tailwind CSS, deployed on Vercel or your own hosting. I build for accessibility, Core Web Vitals and structured data from day one." },
  { q: "Can you work with teams in other time zones?", a: "Yes. I work remotely with teams worldwide, agree overlap hours on the first call, and keep progress visible through preview links and written updates." },
];

export const FOOTER_NAV = NAV.concat([{ href: "/#faq", label: "FAQ" }]);
export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/zafartalks" },
  { label: "X (Formarly Twitter)", href: "https://x.com/zafartalks" },
];

export const cta = {
  heading: "Need a landing page that loads fast and converts?",
  text: "Free 30-minute call. No obligation, just a clear plan.",
  button: "Book a free call",
};
