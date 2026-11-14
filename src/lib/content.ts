export const SITE = {
  name: "Zafar Saleem",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zafar-saleem.github.io",
  email: "zafarsaleem3@gmail.com",
  bookingUrl: "https://calendly.com/zafarsaleem/30min",
  title: "Freelance Landing Page Developer | Landing Page Development – Zafar Saleem",
  description: "Need a landing page for your startup or business? I build fast, responsive, SEO-friendly landing pages for SaaS companies, founders and SMEs. From Figma to launch. Let's discuss your project.",
};

export type NavItem = { href: string; label: string; children?: NavItem[] };

export const NAV: NavItem[] = [
  { href: "/#about", label: "About" },
  {
    // href is only the route prefix used to highlight the item; "Services" itself opens the dropdown
    href: "#services",
    label: "Services",
    // children: [
    //   { href: "/services/landing-page-development", label: "Landing Page Development" },
    //   { href: "/services/website-development", label: "Website Development" },
    //   { href: "/services/figma-to-code", label: "Figma To Code" },
    // ],
  },
  { href: "/#pricing", label: "Pricing" },
  { href: "/projects", label: "Work" },
  { href: "/resources", label: "Blog" },
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
  { id: "components", label: "Components" },
] as const;

export const PROJECTS: Project[] = [
  { slug: "tayara", name: "Tayara", label: "Marketplace", category: "website", tags: ["Next.js"], img: "https://casestudies-cnu.pages.dev/tayara.webp", aspect: "aspect-[16/10]",
    brief: "A marketplace front end that needed lightweight, crawlable listing templates.",
    result: "Cleaner templates that search engines can crawl easily.", href: "https://tayara.tn", },
  { slug: "mudah", name: "Mudah", label: "Marketplace", category: "website", tags: ["Next.js"], img: "https://casestudies-cnu.pages.dev/mudah.webp", aspect: "aspect-[4/3]",
    brief: "A classifieds marketplace that needed quick listing pages.",
    result: "Faster listing pages and easier browsing on mobile.", href: "https://mudah.my", },
  { slug: "slimming-world", name: "Slimming World", label: "Health & wellness", category: "website", tags: ["Next.js"], img: "https://casestudies-cnu.pages.dev/slimming.webp", aspect: "aspect-square",
    brief: "Built health & wellness product for a UK based client.",
    result: "Quicker pages and a sign-up flow the team can maintain.", href: "https://slimmingworld.co.uk", },
  { slug: "westwing", name: "Westwing", label: "E-commerce", category: "website", tags: ["Next.js"], img: "https://casestudies-cnu.pages.dev/westwing.webp", aspect: "aspect-[4/5]",
    brief: "A home and living storefront that needed lightweight, search-friendly product and campaign pages.",
    result: "Stronger Core Web Vitals across key storefront pages.", href: "https://westwing.de", },
  { slug: "net-profit-chart", name: "Fintech Profit", label: "Dashboard", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/net-profit-chart.webp", aspect: "aspect-[16/10]",
    brief: "A finance component that summarise net profit in a chart. Perfect for Fintech industry.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "portfolio", name: "Zafar Portfolio Website", label: "Portfolio", category: "website", tags: ["Next.js", "HTML", "CSS", "Claude"], img: "https://casestudies-cnu.pages.dev/portfolio.webp", aspect: "aspect-square",
    brief: "Built my freelance portfolio website",
    result: "Built entire portoflio website to showcase my projects/case studies.", href: "https://zafar-saleem.github.io", },
  { slug: "kritzer", name: "Photography Portfolio Website", label: "Photography", category: "website", tags: ["Next.js", "TypeScript", "HTML", "CSS", "PSD to Code"], img: "https://casestudies-cnu.pages.dev/kritzer.webp", aspect: "aspect-[16/10]",
    brief: "Built portfolio website for my Photographer client.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "bento-website", name: "Track Goals", label: "Health Website", category: "website", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/bento-website.webp", aspect: "aspect-[16/10]",
    brief: "A health and fitness Figma-to-code that needed lightweight, crawlable & convertible interface.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "airline-seat-selector", name: "Airline Seat Selector", label: "SaaS Component", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/airline-seat-selector.webp", aspect: "aspect-[16/10]",
    brief: "An airline seat selector for ticket & booking web portals & websites.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "activity-tracker", name: "Activity Tracker", label: "SaaS Component", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/activity-tracker.webp", aspect: "aspect-[16/10]",
    brief: "Fitness component that summarise weekly health status in a chart. Perfect for health & wellness industry.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "agency", name: "Studio Website", label: "Website", category: "website", tags: ["Next.js", "TypeScript", "HTML", "CSS", "Claude", "Figma to HTML"], img: "https://casestudies-cnu.pages.dev/agency.webp", aspect: "aspect-[16/10]",
    brief: "Converted Figma to code for a Studio Agency client",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "analytics-component", name: "Analytics Component", label: "SaaS Component", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/analytics-component.webp", aspect: "aspect-[16/10]",
    brief: "Web app analytics component that shows global web traffic on the World map. Perfect for analytics dashboards.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "buy-now", name: "Product Card", label: "eCommerce", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/buy-now.webp", aspect: "aspect-[16/10]",
    brief: "Product card with buy now button. Perfect for e-commerce websites.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "cinema-ticket-seat-selector", name: "Seat Reservation", label: "Booking", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/cinema-ticket-seat-selector.webp", aspect: "aspect-[16/10]",
    brief: "Seat reservation component for cinema. Perfect for reservation & booking services.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "connect-wallet", name: "Fintech & Web3", label: "Web3", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/connect-wallet.webp", aspect: "aspect-[16/10]",
    brief: "Wallet component that enables connect services with digital wallets.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "create-new-menu", name: "Create Button", label: "Web3", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/create-new-menu.webp", aspect: "aspect-[16/10]",
    brief: "Highly interactive button component that pops out more actions upon clicking. Perfect for dashboards.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "daily-goal", name: "Daily Health Component", label: "Health", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/daily-goal.webp", aspect: "aspect-[16/10]",
    brief: "A health component to set daily health activities. Perfect for health and wellness sector.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "fitness", name: "Health & Fitness", label: "Fitness", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/fitness.webp", aspect: "aspect-[16/10]",
    brief: "Monthly fitness component that tracks health record. Perfect for Fitness dashboards.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "hero-website", name: "SaaS Website Hero Section", label: "Hero Section", category: "website", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/hero-website.webp", aspect: "aspect-[16/10]",
    brief: "Hero section for a data centric SaaS website.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "leisure-activity", name: "Product Listing Card", label: "eCommerce", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/leisure-activity.webp", aspect: "aspect-[16/10]",
    brief: "Leisure activity card for social platforms.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "macros", name: "Health & Fitness", label: "Dashboard", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/macros.webp", aspect: "aspect-[16/10]",
    brief: "Food, meal & diet component that summarise daily individual's diet.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "measure-growth", name: "Health & Fitness", label: "Dashboard", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/measure-growth.webp", aspect: "aspect-[16/10]",
    brief: "Component that tracks a week fitness & wellness track record.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "payment", name: "eCommerce Payment", label: "eCommerce", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/payment.webp", aspect: "aspect-[16/10]",
    brief: "Step by step online payment process. Perfect for e-commerce industry",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "pricing", name: "Pricing", label: "pricing section", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/pricing.webp", aspect: "aspect-[16/10]",
    brief: "Pricing section for freelancers' websites.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "project-management", name: "Project Management", label: "Project Tracking", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/project-management.webp", aspect: "aspect-[16/10]",
    brief: "Timeline component for freelancers & studio agencies to manage their projects delivery date & time.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "budget-management", name: "Fintech", label: "Fintech Dashboard", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/budget-management.webp", aspect: "aspect-[16/10]",
    brief: "A monthly expenses management, Figma to code mini summary dashboard.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "real-estate", name: "Real Estate", label: "Website", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/real-estate.webp", aspect: "aspect-[16/10]",
    brief: "Property card for a real estate website.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "schedule-list", name: "Time Management", label: "Dashboard", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/schedule-list.webp", aspect: "aspect-[16/10]",
    brief: "Calendar component for time management. Perfect for time management apps.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "seat-selector", name: "Booking Website", label: "Booking", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/seat-selector.webp", aspect: "aspect-[16/10]",
    brief: "Seat booking component for booking websites and portals.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "team-management", name: "Team Management", label: "Dashboard", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/team-management.webp", aspect: "aspect-[16/10]",
    brief: "Manage teams by adding & removing team members. Perfect for team management apps & dashboards.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "tribes", name: "Social Website", label: "Hero Section", category: "website", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/tribes.webp", aspect: "aspect-[16/10]",
    brief: "3D Hero section for a gaming studio.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "walk-tracker", name: "Fitness Activity Tracker", label: "fitness", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/walk-tracker.webp", aspect: "aspect-[16/10]",
    brief: "Tracks single fitness activity component.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
  { slug: "weekly-goals", name: "Tasks Management", label: "management", category: "components", tags: ["Next.js", "TypeScript", "HTML", "CSS"], img: "https://casestudies-cnu.pages.dev/weekly-goals.webp", aspect: "aspect-[16/10]",
    brief: "Component tracks your weekly goals tasks. Perfect for management apps & dashboards.",
    result: "Cleaner templates that search engines can crawl easily.", href: "#", },
];

export const PLAYGROUND_URL = "https://github.com/zafarsaleem";

export const SERVICES = [
  { title: "01. Design-to-development", text: "Turn your Figma designs, wireframes or visual concepts into a fully functional landing page." },
  { title: "02. Responsive implementation", text: "Deliver a consistent experience across desktops, tablets and mobile devices." },
  { title: "03. Conversion-focused development", text: "Structure the page around your offer, benefits, proof and primary call to action." },
  { title: "04. Performance and SEO", text: "Build lightweight pages with good loading performance, accessible markup and search-friendly structure." },
  { title: "05. Launch and handover", text: "Deploy your landing page, configure the essential technical elements and provide handover documentation." },
];

export const TYPES = [
  { title: "SaaS & Startup Landing Pages", sub: "Turn your product into a compelling reason to sign up.", text: "Launching a SaaS product or growing a startup? Get a professional landing page that explains your product, communicates its value and encourages visitors to start a free trial, book a demo or sign up.", best: "SaaS founders, early-stage startups and software companies." },
  { title: "Lead Generation Landing Pages", sub: "Turn more of your visitors into qualified enquiries.", text: "Need more leads for your business? I develop conversion-focused landing pages with clear messaging, persuasive calls to action and well-placed enquiry forms that make it easier for potential customers to contact you.", best: "Small businesses, service providers and businesses running advertising campaigns." },
  { title: "Product Launch Landing Pages", sub: "Build interest before your product goes live.", text: "Introducing a new product, service or business? Get a dedicated launch landing page that highlights its benefits, builds anticipation and encourages visitors to join a waiting list, register their interest or make a purchase.", best: "Startup founders, entrepreneurs and businesses launching something new." },
  { title: "Service Landing Pages", sub: "Make your services easier to understand and buy.", text: "Give your core service the attention it deserves. I build focused service landing pages that communicate what you offer, demonstrate why customers should choose you and guide visitors towards requesting a quote or booking a consultation.", best: "Consultants, agencies, freelancers and local businesses." },
  // { title: "Service Landing Pages", sub: "Make your services easier to understand and buy.", text: "Give your core service the attention it deserves. I build focused service landing pages that communicate what you offer, demonstrate why customers should choose you and guide visitors towards requesting a quote or booking a consultation.", best: "Consultants, agencies, freelancers and local businesses." },
];

export const SERVICE_OFFERS = [
  {
    badge: "Most popular", title: "Landing Pages",
    text: "Hero, features, pricing and sign-up flow, built to load fast and rank.",
    price: "$1,500", priceValue: 1500, time: "1 week",
    stack: "Next.js + TypeScript · Tailwind CSS",
  },
  {
    badge: "Design handoff", title: "Figma to Next.js/code",
    text: "Pixel-perfect build from your designs or brand guide, ready for your team to maintain.",
    price: "$2,000", priceValue: 2000, time: "1–3 weeks",
    stack: "Responsive · Accessible · Preview Links",
  },
];

export const PROCESS_STEPS = [
  { title: "1. Call", text: "Free 30 minutes to agree on goals and scope." },
  { title: "2. Quote", text: "Fixed-scope quote within 48 hours." },
  { title: "3. Build", text: "Weekly preview links and written updates." },
  { title: "4. Deliver", text: "Handover the project alongside the code." },
  { title: "5. Launch", text: "Deploy the project to your domain." },
];

export const TOOLS = ["Figma", "React.js", "Next.js", "TypeScript", "Tailwind CSS"];

export const REVIEWS = [
  { name: "Nathan F.", role: "Founder, SaaS startup", initials: "NF", text: "Great freelancer! Met expectations for a JavaScript project and was on time. Would recommend to anyone." },
  { name: "John C.", role: "Product lead, B2B software", initials: "JC", text: "Zafar is very customer focused willing to go the extra mile will hire again on future projects." },
  { name: "Sammy E.", role: "Founder, design agency", initials: "SE", text: "Everythng fine, nice communication great experience. Highly recommended! Thank you" },
  { name: "Jaspal S.", role: "Owner, online business", initials: "JS", text: "Great work, thanks. Helped fix my site quickly and worked through the issues with me clearly. Great communication, fantastic English, very polite, good availability. I look forward to working with you again." },
  { name: "Ime A.", role: "Marketing manager, SaaS company", initials: "IA", text: "Really great working with Zafar" },
  { name: "Liam D.", role: "CTO, early-stage startup", initials: "LD", text: "A Gentleman and Efficient. Will hire again." },
];

export const clients = [
  {
    logo: "https://zafar-assets.zafarsaleem3.workers.dev/mudah.png",
    alt: "Project for Mudah B2C SaaS"
  }, {
    logo: "https://zafar-assets.zafarsaleem3.workers.dev/tayara.png",
    alt: "Project for Schibsted B2C SaaS"
  }, {
    logo: "https://zafar-assets.zafarsaleem3.workers.dev/slimming.png",
    alt: "Slimming World project in Agency Enviroment",
  }, {
    logo: "https://zafar-assets.zafarsaleem3.workers.dev/westwing.png",
    alt: "e-commerce project for westwing in agile team",
  }
];

export const GUARANTEES = [
  { title: "01. Understand your business and goals", text: "We start with a conversation about your business, target customers and what you want your landing page to achieve. Whether that's generating leads, getting product sign-ups or booking more enquiries, we define the priorities before development begins." },
  { title: "02. Plan the page and review the content", text: "We establish the page structure, key sections, messaging and calls to action. If you already have a Figma design, I'll review it. If you don't, we can discuss the structure and assets needed before development." },
  { title: "03. Develop your landing page", text: "I turn the approved design or page structure into a responsive, fast-loading landing page. I focus on clear layouts, mobile usability, accessibility and search-engine-friendly implementation." },
  { title: "04. Test, refine and launch", text: "Before launch, I check the page across screen sizes and browsers, test links and forms, and address any agreed revisions. Once everything is approved, I help get your landing page live." },
  { title: "05. Handover and post-launch support", text: "You receive a completed landing page and the information you need to manage it. I also provide 30 days of post-launch bug support, so you have help if something covered by the agreed scope needs fixing." },
];

export const PLANS = [
  { tag: "Starter", price: "$1,200", featured: false, items: ["One custom-coded landing page", "Up to 5–6 content sections", "Figma-to-React / Next.js development", "Responsive desktop, tablet and mobile layouts", "Basic on-page SEO implementation", "Contact form integration", "Zero revision rounds"] },
  { tag: "Business", price: "$2,000", featured: true, items: ["Everything in Starter", "Up to 9–10 content sections", "Advanced responsive layouts", "Custom interactions and animations where appropriate", "Lead capture form and one standard third-party integration", "Performance and cross-browser testing", "Analytics setup based on supplied requirements", "Two revision rounds", "10 days of post-launch bug support"] },
  { tag: "Custom", price: "$4,000+", featured: false, items: ["Complex or long-term builds", "Custom integrations", "Retainer available"] },
];

export const FAQS = [
  { q: "How much does landing page development cost?", a: [
    "The cost depends on your landing page's complexity, number of sections, design requirements and functionality. I provide a fixed-scope quote after understanding your requirements, so you know exactly what's included and what to expect before development begins.",
  ] },
  { q: "How long does it take to develop a landing page?", a: [
    "Most landing page projects take approximately 2–3 weeks, depending on the complexity, content readiness and feedback turnaround. I'll confirm the expected timeline and project milestones before development starts.",
  ] },
  { q: "Can you build a landing page from my Figma design?", a: [
    "Yes. I can convert your Figma design into a responsive, production-ready landing page using React, Next.js and TypeScript. I'll implement your approved layouts, typography, colours and interactive elements while ensuring the page works across desktop, tablet and mobile devices.",
  ] },
  { q: "Will my landing page be mobile-friendly and SEO-friendly?", a: [
    "Yes. Every landing page I develop is responsive and built with SEO fundamentals in mind, including semantic HTML, structured headings, metadata, descriptive image alt text and performance optimisation. These practices provide a solid technical foundation but don't guarantee search rankings.",
  ] },
  { q: "Can you build a landing page that generates leads or product sign-ups?", a: [
    "Yes. I develop landing pages around specific business goals, such as generating enquiries, collecting leads, encouraging SaaS sign-ups or booking consultations. This can include clear calls to action, enquiry forms, product information and trust-building elements. Actual conversion results depend on your offer, audience and traffic quality.",
  ] },
  { q: "What happens after my landing page is launched?", a: [
    "Once your landing page is live, I'll provide the agreed project files and handover information, along with 30 days of post-launch bug support. Any additional features or changes outside the agreed project scope can be discussed separately.",
  ] },
  { q: "How do I get started with a landing page project?", a: [
    "Book a free 30-minute call or contact me with a brief description of your project. We'll discuss your goals, design, functionality and timeline. After understanding your requirements, I'll send you a fixed-scope proposal within 48 hours.",
  ] }
];

export const FOOTER_NAV: NavItem[] = NAV.concat([{ href: "/#faq", label: "FAQ" }]);
export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/zafartalks" },
  { label: "X (Formarly Twitter)", href: "https://x.com/zafartalks" },
];

export const cta = {
  heading: "Need a landing page that loads fast and converts?",
  text: "Free 30-minute call. No obligation, just a clear plan.",
  button: "Book a free call",
};

export type ServiceDetailData = {
  slug: string; name: string; title: string; description: string; intro: string;
  includes: { title: string; text: string }[]; time: string; price: string;
};

export const SERVICE_DETAILS: Record<"website-development" | "figma-to-code", ServiceDetailData> = {
  "website-development": {
    slug: "website-development", name: "Website Development",
    title: "Fast, SEO-friendly websites for startups.",
    description: "Multi-page Next.js websites with blog and CMS setup, built to load fast, rank in Google and be easy for your team to update.",
    intro: "Multi-page marketing websites and microsites built with Next.js, so they load fast, rank in Google and stay easy for your team to update.",
    includes: [
      { title: "Up to 6 pages", text: "Home, product, pricing, about, contact and more, all built on one consistent design." },
      { title: "Blog and CMS setup", text: "Publish and edit content yourself, without touching code." },
      { title: "Built to rank", text: "Clean markup, metadata and fast load times from day one." },
    ],
    time: "2–4 weeks", price: "$3,500",
  },
  "figma-to-code": {
    slug: "figma-to-code", name: "Figma To Code",
    title: "Pixel-perfect Figma to Next.js, ready to maintain.",
    description: "Pixel-perfect Figma to Next.js builds from your designs or brand guide: responsive, accessible and ready for your team to maintain.",
    intro: "Pixel-perfect build from your designs or brand guide, ready for your team to maintain.",
    includes: [
      { title: "Pixel-perfect build", text: "Your Figma designs or brand guide turned into clean, typed Next.js components." },
      { title: "Responsive and accessible", text: "Works on every screen size and for every visitor, including keyboard and screen reader users." },
      { title: "Preview links", text: "Follow progress with a link to the latest version at every stage." },
    ],
    time: "1–3 weeks", price: "$2,000",
  },
};
