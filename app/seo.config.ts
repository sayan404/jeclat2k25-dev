import { DefaultSeoProps } from "next-seo";

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
