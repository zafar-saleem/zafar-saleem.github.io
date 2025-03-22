import Link from "next/link";
import { contents } from "./contents";

export const FooterPageSectionNavigation = () => {
  return (
    <>
      {contents.menuItems.map((section, sectionIdx) => (
        <div key={sectionIdx}>
          <ul className="space-y-4 text-muted-foreground">
            {section.links.map((link, linkIdx) => (
              <li
                key={linkIdx}
                className="font-medium hover:text-primary"
              >
                <Link href={link.url} className="flex flex-rows gap-3">
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
