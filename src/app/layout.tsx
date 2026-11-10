import type { Metadata, Viewport } from "next";
import { SITE } from "@/lib/content";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  keywords: ["freelance Next.js developer", "SaaS landing page developer", "React developer for hire", "Figma to Next.js", "SEO-friendly website development"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: SITE.url, siteName: SITE.name, title: SITE.title, description: SITE.description, locale: "en_US",
    images: [
      {
        url: "/images/zafar-saleem.jpg",
        width: 1200,
        height: 630,
        alt: "Zafar Saleem Portfolio",
      },
    ],
   },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description, images: ["/images/zafar-saleem.jpg"], },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = { themeColor: "#f3f8ff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased" data-scroll-behavior="smooth">
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="31e9d10d-1659-4686-8346-75a2c4c4c7aa"
        strategy="afterInteractive"
      />
      <body className="font-sans">{children}</body>
    </html>
  );
}
