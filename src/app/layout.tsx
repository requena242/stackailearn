import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AdScript } from "@/components/ads/AdScript";
import { SiteAnalytics } from "@/components/analytics/SiteAnalytics";
import { ads } from "@/data/ads";
import { isAdsLive } from "@/lib/ads";
import { SITE } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s · ${SITE.name}`,
  },
  description:
    "AI tools directory and step-by-step tutorials.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@stackailearn",
    images: ["/og.png"],
  },
  ...(SITE.googleSiteVerification
    ? { verification: { google: SITE.googleSiteVerification } }
    : {}),
  ...(isAdsLive() && ads.provider === "adsense"
    ? { other: { "google-adsense-account": ads.adsense.publisherId } }
    : {}),
};

/**
 * Root layout: html/body viven aquí (requisito de Next.js).
 * El idioma visible se ajusta en [locale] con HtmlLang.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-canvas font-sans text-ink antialiased`}
      >
        <SiteAnalytics />
        {children}
        <AdScript />
      </body>
    </html>
  );
}
