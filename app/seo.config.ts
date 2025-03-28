import { DefaultSeoProps } from "next-seo";

export const siteConfig = {
  title: "JECLAT 2K25 | The Queen of All Fests | JGEC",
  description:
    "Experience North Bengal's biggest cultural festival at JGEC with music, dance, fashion shows & celebrity performances. Join 10K+ participants in this grand celebration.",
  keywords: [
    "JECLAT",
    "cultural festival",
    "JGEC",
    "North Bengal",
    "college fest",
    "music festival",
    "dance competition",
    "fashion show",
    "gaming tournament",
    "celebrity performance",
  ],
  authors: [
    {
      name: "JECLAT Team",
      url: "https://jeclat2k25.in",
    },
  ],
  creator: "JECLAT Team",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jeclat2k25.in",
    title: "JECLAT 2K25 | The Queen of All Fests | JGEC",
    description:
      "Experience North Bengal's biggest cultural festival at JGEC with music, dance, fashion shows & celebrity performances. Join 10K+ participants in this grand celebration.",
    siteName: "JECLAT 2K25",
  },
  twitter: {
    card: "summary_large_image",
    title: "JECLAT 2K25 | The Queen of All Fests | JGEC",
    description:
      "Experience North Bengal's biggest cultural festival at JGEC with music, dance, fashion shows & celebrity performances. Join 10K+ participants in this grand celebration.",
    creator: "@JECLAT",
  },
};

const config: DefaultSeoProps = {
  titleTemplate: "%s | JECLAT 2K25",
  defaultTitle: "JECLAT 2K25 - The Queen of All Fests",
  description:
    "Experience North Bengal's biggest cultural extravaganza at JECLAT 2K25",
  canonical: "https://jeclat2k25.in",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jeclat2k25.in",
    siteName: "JECLAT 2K25",
    images: [
      {
        url: "https://jeclat2k25.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JECLAT 2K25",
      },
    ],
  },
};

export default config;
