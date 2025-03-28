import { Metadata } from "next";
import { siteConfig } from "./seo.config";
import "./globals.css";
import "./styles/stars.css";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from 'next/script';
import { GA_TRACKING_ID } from './lib/analytics';
import Analytics from "./components/Analytics";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  themeColor: siteConfig.themeColor,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  metadataBase: new URL("https://jeclat2k25.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JECLAT",
    alternateName: "The Queen of All Fests",
    url: "https://jeclat2k25.in",
    logo: "https://jeclat2k25.in/logo.png",
    description:
      "JECLAT is North Bengal's biggest cultural festival hosted by Jalpaiguri Government Engineering College",
    sameAs: [
      "https://www.facebook.com/ItIsOnn",
      "https://www.instagram.com/jeclat.jgec",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jalpaiguri Government Engineering College",
      addressLocality: "Jalpaiguri",
      addressRegion: "West Bengal",
      postalCode: "735102",
      addressCountry: "IN",
    },
    event: {
      "@type": "Festival",
      name: "JECLAT 2K25",
      startDate: "2025-03-31",
      endDate: "2025-04-06",
      location: {
        "@type": "Place",
        name: "Jalpaiguri Government Engineering College",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jalpaiguri",
          addressRegion: "West Bengal",
          addressCountry: "IN",
        },
      },
      description:
        "Annual cultural festival featuring music, dance, fashion shows, and gaming tournaments",
      offers: {
        "@type": "Offer",
        url: "https://jeclat2k25.in/events",
        availability: "https://schema.org/InStock",
      },
    },
  };

  return (
    <html
      lang="en"
      dir="ltr"
      itemScope
      itemType="http://schema.org/WebSite"
      className="antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="alternate" hrefLang="en" href="https://jeclat2k25.in" />
        <link rel="alternate" hrefLang="bn" href="https://jeclat2k25.in/bn" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://jeclat2k25.in"
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <main>{children}</main>
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
