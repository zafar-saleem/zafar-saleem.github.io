import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Services } from "./components/services";
import { Footer } from "./components/footer";
import { Portfolio } from "./components/portfolio";
import { Testimonial } from "./components/testimonials";
import { Cta } from "./components/call-to-action";

export default function Home() {
  return (
    <div className="m-auto max-w-8xl p-3 lg:p-0">
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Hero id="about" />
          <Portfolio id="portfolio" />
          <Services id="services" />
          <Testimonial id="testimonials" />
          <Cta />
          <Footer />
        </main>
      </div>
    </div>
  );
}
