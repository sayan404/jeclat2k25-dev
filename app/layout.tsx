import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Doto,
  Noto_Sans,
  Poppins,
  Press_Start_2P,
  Cedarville_Cursive,
  Playfair_Display,
  Orbitron,
  Rajdhani,
  Audiowide,
} from "next/font/google";
import "./globals.css";
import "./styles/stars.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const getPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

const geistNoto = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: ["400"],
});

const cedarvilleCursive = Cedarville_Cursive({
  variable: "--font-cedarville-cursive",
  subsets: ["latin"],
  weight: ["400"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["400", "700", "500", "900"], // Specify the weights you need
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: 'JECLAT 2K25 - The Queen of All Fests | JGEC Cultural Festival',
  description: 'Experience North Bengal\'s biggest cultural extravaganza at JECLAT 2K25. Join over 10,000 participants for 7 days of music, dance, fashion shows, gaming tournaments, and celebrity performances at Jalpaiguri Government Engineering College.',
  keywords: 'JECLAT, JGEC fest, cultural festival, college fest, Jalpaiguri, engineering college, music festival, dance competition, North Bengal fest, celebrity performances, fashion show, gaming tournament',
  authors: [{ name: 'JGEC Cultural Committee' }],
  creator: 'JGEC Cultural Committee',
  publisher: 'Jalpaiguri Government Engineering College',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'JECLAT 2K25 - North Bengal\'s Biggest Cultural Festival',
    description: 'Join 10,000+ participants for 7 days of music, dance, gaming & more! Featuring celebrity performances, competitions & cultural events.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JECLAT 2K25 Festival Banner'
      }
    ],
    type: 'website',
    locale: 'en_IN',
    siteName: 'JECLAT 2K25',
    'og:site_name': 'JECLAT 2K25',
    'og:url': 'https://jeclat2k25.in',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:locale': 'en_IN',
    'og:type': 'website',
    'og:title': 'JECLAT 2K25 - The Queen of All Fests | JGEC Cultural Festival',
    'og:description': 'Experience North Bengal\'s biggest cultural extravaganza at JECLAT 2K25',
    'fb:app_id': 'YOUR_FACEBOOK_APP_ID'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JECLAT 2K25 - The Queen of All Fests',
    description: 'North Bengal\'s biggest cultural festival with 10,000+ participants',
    images: ['/twitter-image.jpg'],
    creator: '@JECLAT2K25',
    site: '@JECLAT2K25',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: 'ADD_YANDEX_VERIFICATION_CODE',
    bing: 'ADD_BING_VERIFICATION_CODE'
  },
  other: {
    'google-site-verification': 'ADD_YOUR_GOOGLE_SITE_VERIFICATION_CODE',
    'msvalidate.01': 'ADD_BING_VERIFICATION_CODE',
    'yandex-verification': 'ADD_YANDEX_VERIFICATION_CODE',
    'facebook-domain-verification': 'YOUR_FACEBOOK_DOMAIN_VERIFICATION_CODE'
  },
  alternates: {
    canonical: 'https://jeclat2k25.in',
    languages: {
      'en-US': 'https://jeclat2k25.in/en-US',
      'bn-IN': 'https://jeclat2k25.in/bn-IN',
    },
  },
  category: 'Cultural Festival',
  metadataBase: new URL('https://jeclat2k25.in'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JECLAT",
    "alternateName": "The Queen of All Fests",
    "url": "https://jeclat2k25.in",
    "logo": "https://jeclat2k25.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/ItIsOnn",
      "https://www.instagram.com/jeclat.jgec"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jalpaiguri Government Engineering College",
      "addressLocality": "Jalpaiguri",
      "addressRegion": "West Bengal",
      "postalCode": "735102",
      "addressCountry": "IN"
    }
  };

  return (
    <html
      lang="en"
      dir="ltr"
      itemScope
      itemType="http://schema.org/WebSite"
      className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} ${geistNoto.variable} ${getPoppins.variable} ${pressStart2P.variable} ${cedarvilleCursive.variable} ${playfair.variable} ${orbitron.variable} ${rajdhani.variable} ${audiowide.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="alternate" hrefLang="en" href="https://jeclat2k25.in" />
        <link rel="alternate" hrefLang="bn" href="https://jeclat2k25.in/bn" />
        <link rel="alternate" hrefLang="x-default" href="https://jeclat2k25.in" />
      </head>
      <body>
        {children}
        <Analytics mode="production" />
      </body>
    </html>
  );
}
