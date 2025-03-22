import Link from "next/link";
import { ContactWhatsApp } from "../whatsapp";
import { FooterPageSectionNavigation } from "./components/section-nav";
import { FooterSocialNavigation } from "./components/social-nav/social";
import { contents } from "./contents";

const Footer = () => {
  return (
    <section className="py-32 mt-10">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Link href="/">
                  <p className="text-xl font-semibold">{contents.logo.title}</p>
                </Link>
              </div>
              <p className="mt-4 font-bold">{contents.tagline}</p>
            </div>
            <FooterPageSectionNavigation />
            <FooterSocialNavigation />
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p className="text-center w-full">{contents.copyright}</p>
            <ContactWhatsApp />
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
