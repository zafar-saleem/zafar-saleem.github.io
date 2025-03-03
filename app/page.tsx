import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Expertise } from "./components/expertise";
import { Services } from "./components/services";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="m-auto max-w-7xl">
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Hero id="about" />
          <Expertise id="expertise" />
          <Services id="services" />
          <Footer />
        </main>
      </div>
    </div>
  );
}
