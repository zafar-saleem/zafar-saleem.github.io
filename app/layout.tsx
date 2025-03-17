import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import * as gtag from "@/utilities";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const META_DESCRIPTION = "This is Zafar Saleem web development portfolio website where you can find his software engineering skills and links to his Medium blogs, Github profile, Gitlab profile, Linkedin profile, Instagram profile. Contact me.";
const META_TITLE = "Freelance Developer | Zafar Saleem, React, Next.js, JavaScript, TypeScript";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "https://zafar-saleem.github.io",
    siteName: "Zafar Saleem Freelance Frontend Engineer Portfolio website",
    images: [
      {
        url: "https://zafar-saleem.github.io/og_image.webp",
        width: 800,
        height: 600,
        alt: "Zafar Saleem Portfolio Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["https://zafar-saleem.github.io/og_image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script   
        id="cookieyes_script"
        src={`https://cdn-cookieyes.com/client_data/42a974b2b6476aba02a5d873/script.js`}>
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          defer
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
