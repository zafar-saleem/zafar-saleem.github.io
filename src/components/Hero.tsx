import { VanteHero } from "./vante-hero";
import { REVIEWS, SITE } from "@/lib/content";

const VIDEOS = [
  { title: "Aeroplane Seat Selection", src: "/videos/aeroplane-seat-selection.mp4" },
  { title: "Budget Card", src: "/videos/budget-card.mp4" },
  { title: "Real Estate", src: "/videos/real-estate-card.mp4" },
  { title: "Calendar", src: "/videos/calendar.mp4" },
  { title: "Measure Growth", src: "/videos/measure-growth.mp4" },
  { title: "Walking Tracker", src: "/videos/walking-tracker.mp4" },
  { title: "Weekly Fitness Tracker", src: "/videos/weekly-fitness-tracker.mp4" },
  { title: "Cinema Seat Selector", src: "/videos/cinema-seat-selector.mp4" },
];

const TESTIMONIALS = REVIEWS.slice(0, 3).map((r) => ({ quote: r.text, name: r.name, role: r.role, initials: r.initials }));

export default function Hero() {
  return (
    <VanteHero
      ctaHref={SITE.bookingUrl}
      videos={VIDEOS}
      fit="contain"
      testimonials={TESTIMONIALS}
      topBar={false}
      offsetTop={69}
      offsetSelector="header"
      label="I build websites: freelance frontend engineer building fast SaaS landing pages"
      description="Freelance Frontend Engineer, React.js and Next.js. I build SaaS landing pages that load fast and turn visitors into sign-ups. I turn your Figma designs into a fast, SEO-friendly site you can update yourself, live in 2-3 weeks."
    />
  );
}
