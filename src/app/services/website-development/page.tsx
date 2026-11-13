import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_DETAILS, SITE } from "@/lib/content";

const d = SERVICE_DETAILS["website-development"];

export const metadata: Metadata = {
  title: `Services: ${d.name}`,
  description: d.description,
  alternates: { canonical: `/services/${d.slug}` },
  openGraph: { url: `${SITE.url}/services/${d.slug}`, title: `${d.name} | ${SITE.name}`, description: d.description, type: "website" },
};

export default function Page() {
  return <ServiceDetail {...d} />;
}
