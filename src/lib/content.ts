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
  { href: "/projects", label: "Work" },
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
  { tag: "Landing page", price: "$1,500", featured: false, items: ["Single-page SaaS landing page", "Mobile-first, SEO basics", "Fast load times"] },
  { tag: "Website", price: "$3,500", featured: true, items: ["Everything in Landing page", "Up to 6 pages", "Blog / CMS setup"] },
  { tag: "Custom", price: "$6,000+", featured: false, items: ["Complex or long-term builds", "Custom integrations", "Retainer available"] },
];

export const FAQS = [
  { q: "How much does landing page development cost?", a: [
    "The cost of a custom landing page depends on its complexity, number of sections, design requirements, functionality and integrations. A straightforward lead generation landing page will generally require less work than a SaaS landing page with multiple product sections, advanced forms or third-party integrations.",
    "The process includes planning, development, responsive testing, revisions and launch preparation. I'll confirm the estimated delivery date and project milestones before work begins."
  ] },
  { q: "How long does it take to develop a landing page?", a: [
    "Most landing page projects take approximately 2–3 weeks from the start of development to launch, depending on the page's complexity, content readiness and feedback turnaround.",
    "I provide a fixed-scope quote after understanding your requirements, so you know what's included, what it costs and when it will be delivered before development begins. Get in touch with your project details to receive a tailored estimate."
  ] },
  { q: "What is included in your landing page development service?", a: [
    "My landing page development service covers the technical work needed to take your page from an approved design or agreed structure to a live website.",
    "Depending on your project, this includes:",
    "Custom landing page development. Responsive layouts for mobile, tablet and desktop. Implementation of your approved design or Figma file. Clear calls to action and lead capture forms. Performance optimisation and fast loading. SEO-friendly page structure and metadata. Basic accessibility and cross-browser checks. Testing, deployment and handover.",
    "The exact scope is agreed before development starts."
  ] },
  { q: "Can you build a landing page from my Figma design?", a: [
    "Yes. I can convert your Figma design into a responsive, production-ready landing page using technologies such as Next.js, React, TypeScript and Tailwind CSS.",
    "I'll implement the approved layouts, typography, spacing, colours and interactive elements while making sure the page works across mobile, tablet and desktop screens. If you have a Figma design ready, share it when you enquire so I can assess the scope.",
  ] },
  { q: "Will my landing page work on mobile phones and tablets?", a: [
    "Yes. Every landing page I develop is responsive, meaning its layout adapts to mobile phones, tablets and desktop screens.",
    "I test important page elements across screen sizes, including navigation, text, images, buttons and enquiry forms, so visitors can use your landing page comfortably regardless of their device.",
  ] },
  { q: "Is your landing page development service SEO-friendly?", a: [
    "Yes. I build landing pages with SEO fundamentals in mind, including search-friendly HTML structure, semantic headings, page titles, meta descriptions, descriptive image alt text, crawlable content and performance optimisation.",
    "I can also implement relevant structured data where appropriate. However, SEO-friendly development does not guarantee first-page rankings. Search visibility also depends on keyword competition, content quality, website authority and other ranking factors.",
  ] },
  { q: "Can you build a landing page that generates leads and enquiries?", a: [
    "Yes. I develop landing pages around a clear business objective, such as generating enquiries, collecting leads, encouraging product sign-ups or booking consultations.",
    "The implementation can include prominent calls to action, enquiry forms, clear service information, testimonials and other trust-building elements. These help visitors understand your offer and take the next step. Actual conversion results depend on factors such as your offer, audience, traffic quality and messaging.",
  ] },
  { q: "Can you build a landing page for my SaaS product or startup?", a: [
    "Yes. I develop landing pages for SaaS companies, startups and founders who need to explain a product, communicate its value and encourage visitors to take action.",
    "A SaaS landing page can include product features, benefits, pricing information, product screenshots, testimonials, FAQs and calls to action such as Start a Free Trial, Book a Demo or Create an Account.",
    "The page structure will depend on your product, target customers and acquisition goals."
  ] },
  { q: "Can you create a landing page for Google Ads or social media campaigns?", a: [
    "Yes. I can develop dedicated landing pages for Google Ads, Meta Ads, LinkedIn campaigns and other marketing channels.",
    "A campaign landing page focuses on one offer and one primary action, helping visitors move from an advertisement to a relevant enquiry, registration or purchase. I can implement the required forms and agreed tracking integrations as part of the project scope."
  ] },
  { q: "Can you add contact forms, booking links and third-party integrations?", a: [
    "Yes. I can implement functionality such as contact forms, lead capture forms, booking links, newsletter sign-ups and selected third-party integrations.",
    "The available options depend on the service you use and the technical requirements. If you need a CRM, email marketing platform, analytics tool or booking system connected to your landing page, mention it when requesting a quote."
  ] },
  { q: "Can you redesign or improve my existing landing page?", a: [
    "Yes. I can work with an existing landing page that needs a visual refresh, better mobile responsiveness, improved performance or a more effective page structure.",
    "I'll first review the current page and understand what you want to improve. Based on the requirements, I can recommend a focused redesign or redevelopment rather than rebuilding parts that already work well."
  ] },
  { q: "Will I be able to update my landing page after launch?", a: [
    "That depends on how your landing page is built and what editing functionality your project requires.",
    "A standard custom-coded landing page may require a developer to change its content. If you want to update text, images or sections yourself, we can discuss a suitable content management system or editable content setup before development begins.",
    "I'll explain how your particular setup works during handover."
  ] },
  { q: "How many revisions are included in the landing page development service?", a: [
    "My standard project scope includes one round of revision to refine the agreed landing page after development.",
    "Revisions cover adjustments within the original project scope. New sections, significant design changes, additional functionality or requests that change the original requirements may need a separate estimate."
  ] },
  { q: "Do you provide support after the landing page goes live?", a: [
    "Yes. I provide 10 days of post-launch bug support for issues related to the delivered work.",
    "This gives you time to report bugs or unexpected technical problems after launch. New features, additional sections, content changes and work outside the agreed scope are handled separately."
  ] },
  { q: "Who owns the landing page after development?", a: [
    "Once the agreed project payment has been completed, you receive the delivered project files and the agreed handover materials, subject to any third-party licences or service terms.",
    "Your domain, hosting and third-party accounts should be registered and controlled by you or your business. I'll clarify the handover arrangements and any ongoing service costs before the project starts."
  ] },
  { q: "What technologies do you use to develop landing pages?", a: [
    "I primarily use Next.js, React, TypeScript and Tailwind CSS to build modern, responsive landing pages.",
    "The technology choice depends on the project's requirements. My focus is on delivering a fast, accessible, maintainable landing page rather than adding unnecessary technical complexity."
  ] },
  { q: "Do you work with clients outside Portugal?", a: [
    "Yes. I'm a freelance landing page developer based in Lisbon, Portugal, and work remotely with founders, startups, SaaS businesses and companies in other locations.",
    "Projects can be managed remotely through online meetings, email and shared design or project materials. We agree on communication and feedback expectations before development begins."
  ] },
  { q: "How do I get started with a landing page project?", a: [
    "Getting started is straightforward. Book a free 30-minute call or contact me with a short description of your business and landing page requirements.",
    "We'll discuss your goals, target audience, design materials, functionality and expected timeline. After understanding the scope, I'll send you a fixed-scope project proposal within 48 hours.",
    "You can then review the proposal and decide whether you'd like to proceed."
  ] },
  { q: "How long does a landing page take?", a: ["Typically 2–3 weeks, depending on scope and how ready your content and designs are."] },
  { q: "Do you work from Figma designs?", a: ["Yes. I can also work from a brand guide or wireframes if you don't have final designs."] },
  { q: "What do I need to provide?", a: ["Your Figma designs (or brand guide), copy and images. I'll tell you exactly what's needed on the kickoff call."] },
  { q: "What happens after launch?", a: ["You get handover docs and 30 days of support. Ongoing retainers are available."] },
  { q: "How do we get started?", a: ["Book a free call, share your goals, and I'll send a fixed-scope quote within 48 hours."] },
  { q: "Which technologies do you use?", a: ["Next.js, React and TypeScript with Tailwind CSS, deployed on Vercel or your own hosting. I build for accessibility, Core Web Vitals and structured data from day one."] },
  { q: "Can you work with teams in other time zones?", a: ["Yes. I work remotely with teams worldwide, agree overlap hours on the first call, and keep progress visible through preview links and written updates."] },
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
