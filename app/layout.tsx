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

export const metadata: Metadata = {
  title: "Freelance Frontend Engineer | Zafar Saleem",
  description: "This is Zafar Saleem portfolio website where you can find his technical/software engineering skills and links to his Medium blogs, Github profile, Gitlab profile, Linkedin profile, Instagram profile.",
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
