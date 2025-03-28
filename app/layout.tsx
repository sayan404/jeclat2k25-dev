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
  title: 'JECLAT 2K25 - The Queen of All Fests | JGEC Cultural Fest',
  description: 'JECLAT is the annual cultural festival of Jalpaiguri Government Engineering College, featuring music, dance, fashion shows, gaming tournaments and more. Join us for an unforgettable celebration of talent and creativity.',
  keywords: 'JECLAT, JGEC fest, cultural festival, college fest, Jalpaiguri, engineering college, music festival, dance competition',
  openGraph: {
    title: 'JECLAT 2K25 - The Queen of All Fests',
    description: 'Experience North Bengal\'s biggest cultural festival at JGEC featuring music, dance, gaming and more!',
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JECLAT 2K25 - The Queen of All Fests',
    description: 'Experience North Bengal\'s biggest cultural festival at JGEC',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://jeclat2k25.in'
  },
  icons: {
    icon: {
      url: "/logo.png",
      type: "image/png",
      sizes: "32x32",
    },
    apple: {
      url: "/logo.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} ${geistNoto.variable} ${getPoppins.variable} ${pressStart2P.variable} ${cedarvilleCursive.variable} ${playfair.variable} ${orbitron.variable} ${rajdhani.variable} ${audiowide.variable} antialiased`}
    >
      <body>
        {children}
        <Analytics mode="production" />
      </body>
    </html>
  );
}
