import Link from "next/link";
import Image from "next/image";
import { social } from "./contents"

export const FooterSocialNavigation = () => {
  return (
    <>
      {social.menuItems.map((section, sectionIdx) => (
          <div key={sectionIdx}>
            <ul className="space-y-4 text-muted-foreground">
              {section.links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="font-medium hover:text-primary"
                >
                  <Link href={link.url} className="flex flex-rows gap-3">
                    <Image src={link.logo} height={25} width={25} alt={link.alt} />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  )
}