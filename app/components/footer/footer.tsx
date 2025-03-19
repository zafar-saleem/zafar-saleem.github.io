import Link from "next/link";
import { contents } from "./contents";
import Image from "next/image";
import { ContactWhatsApp } from "../whatsapp";

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
            {contents.menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <Link href={link.url} className="flex flex-rows gap-3">
                        {'logo' in link && <Image src={link.logo} height={25} width={25} alt={link.alt} />}
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
