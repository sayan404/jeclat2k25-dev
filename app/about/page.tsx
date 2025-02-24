"use client";
import { motion } from "framer-motion";
import React from "react";
import StarBackground from "@/app/components/StarBackground";
import { Orbitron, Rajdhani, Audiowide } from "next/font/google";
import Header from "@/app/components/Header";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"] });
const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

const styles = {
  orbit: `
    ..keyframes orbit {
      from { transform: rotate(0deg) translateX(0) rotate(0deg); }
      to { transform: rotate(360deg) translateX(0) rotate(-360deg); }
    }
  `,
  spaceshipOrbit: `
    ..keyframes spaceshipOrbit {
      0% { transform: translate(0, 0); }
      50% { transform: translate(-50px, 20px); }
      100% { transform: translate(0, 0); }
    }
  `,
};

const sponsors = [
  { src: "/sponsers/asian-paints.svg", alt: "Asian Paints", type: "svg" },
  { src: "/sponsers/bajaj.svg", alt: "Bajaj", type: "svg" },
  { src: "/sponsers/big-bazaar.svg", alt: "Big Bazaar", type: "svg" },
  { src: "/sponsers/city-life.png", alt: "City Life", type: "image" },
  { src: "/sponsers/dominos.svg", alt: "Dominos", type: "svg" },
  { src: "/sponsers/dtdc.svg", alt: "DTDC", type: "svg" },
  { src: "/sponsers/galaxy-music.png", alt: "Galaxy Music", type: "image" },
  { src: "/sponsers/hero.svg", alt: "Hero", type: "svg" },
  { src: "/sponsers/hyundai.svg", alt: "Hyundai", type: "svg" },
  { src: "/sponsers/indian-oil.svg", alt: "Indian Oil", type: "svg" },
  { src: "/sponsers/internshala.svg", alt: "Internshala", type: "svg" },
  { src: "/sponsers/jagran.svg", alt: "Jagran", type: "svg" },
  { src: "/sponsers/kotak.svg", alt: "Kotak", type: "svg" },
  { src: "/sponsers/ktm.svg", alt: "KTM", type: "svg" },
  { src: "/sponsers/lic.svg", alt: "LIC", type: "svg" },
  { src: "/sponsers/monster.svg", alt: "Monster", type: "svg" },
  { src: "/sponsers/pran.svg", alt: "Pran", type: "svg" },
  { src: "/sponsers/radio-misti.svg", alt: "Radio Misti", type: "svg" },
  { src: "/sponsers/red-bull.svg", alt: "Red Bull", type: "svg" },
  { src: "/sponsers/sbi.svg", alt: "SBI", type: "svg" },
  { src: "/sponsers/svf.svg", alt: "SVF", type: "svg" },
  { src: "/sponsers/the-statesman.svg", alt: "The Statesman", type: "svg" },
  {
    src: "/sponsers/uttarbanga-sambad.png",
    alt: "Uttarbanga Sambad",
    type: "image",
  },
  { src: "/sponsers/vi.svg", alt: "Vi", type: "svg" },
  { src: "/sponsers/volvo.png", alt: "Volvo", type: "image" },
  // { src: "/sponsers/wawasi.svg", alt: "Wawasi", type: "svg" },
  { src: "/sponsers/zebronics.png", alt: "Zebronics", type: "image" },
];

console.log(sponsors);

export default function AboutPage() {
  return (
    <div className="relative lg:overflow-hidden">
      <StarBackground />
      <Header />

      {/* Main content with higher z-index */}
      <div className="relative z-10 min-h-screen text-white p-8 pt-24">
        <style>{styles.orbit + styles.spaceshipOrbit}</style>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* SVG Dashboard Section */}
            <div className="w-full max-w-[800px] mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                <rect width="800" height="800" fill="#000" />

                <circle
                  cx="400"
                  cy="400"
                  r="280"
                  fill="none"
                  stroke="rgba(100, 200, 255, 0.3)"
                  strokeWidth="2"
                />
                <circle
                  cx="400"
                  cy="400"
                  r="250"
                  fill="none"
                  stroke="rgba(100, 200, 255, 0.5)"
                  strokeWidth="4"
                />
                <circle
                  cx="400"
                  cy="400"
                  r="170"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="25"
                  strokeOpacity="0.1"
                />

                <circle
                  cx="400"
                  cy="400"
                  r="120"
                  fill="rgba(30, 30, 70, 0.6)"
                  stroke="rgba(100, 200, 255, 0.8)"
                  strokeWidth="3"
                />
                <circle
                  cx="400"
                  cy="400"
                  r="110"
                  fill="none"
                  stroke="rgba(255, 180, 50, 0.7)"
                  strokeWidth="6"
                  strokeDasharray="550 690"
                  strokeLinecap="round"
                />

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="80s"
                    repeatCount="indefinite"
                  />
                  <circle
                    cx="200"
                    cy="320"
                    r="80"
                    fill="rgba(30, 80, 120, 0.6)"
                    stroke="rgba(100, 200, 255, 0.8)"
                    strokeWidth="2"
                  />
                  <path
                    d="M130 300 Q 200 270, 270 300 Q 240 350, 200 380 Q 160 350, 130 300"
                    fill="rgba(100, 220, 255, 0.4)"
                  />
                </g>

                <ellipse
                  cx="400"
                  cy="400"
                  rx="350"
                  ry="120"
                  fill="none"
                  stroke="rgba(255, 200, 100, 0.3)"
                  strokeWidth="1"
                  transform="rotate(30 400 400)"
                />

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="120s"
                    repeatCount="indefinite"
                  />
                  <circle
                    cx="600"
                    cy="250"
                    r="40"
                    fill="rgba(30, 60, 100, 0.6)"
                    stroke="rgba(100, 200, 255, 0.6)"
                    strokeWidth="1.5"
                  />
                </g>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="100s"
                    repeatCount="indefinite"
                  />
                  <circle
                    cx="520"
                    cy="480"
                    r="30"
                    fill="rgba(40, 80, 120, 0.6)"
                    stroke="rgba(100, 200, 255, 0.6)"
                    strokeWidth="1.5"
                  />
                </g>

                <ellipse
                  cx="400"
                  cy="400"
                  rx="300"
                  ry="200"
                  fill="none"
                  stroke="rgba(100, 200, 255, 0.2)"
                  strokeWidth="1"
                  transform="rotate(-15 400 400)"
                />

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="60s"
                    repeatCount="indefinite"
                  />
                  <circle
                    cx="320"
                    cy="180"
                    r="25"
                    fill="rgba(50, 70, 110, 0.6)"
                    stroke="rgba(100, 200, 255, 0.6)"
                    strokeWidth="1.5"
                  />
                </g>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="90s"
                    repeatCount="indefinite"
                  />
                  <circle
                    cx="650"
                    cy="400"
                    r="20"
                    fill="rgba(60, 90, 130, 0.6)"
                    stroke="rgba(100, 200, 255, 0.6)"
                    strokeWidth="1.5"
                  />
                </g>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="110s"
                    repeatCount="indefinite"
                  />
                  <rect
                    x="150"
                    y="450"
                    width="60"
                    height="140"
                    rx="5"
                    fill="rgba(20, 40, 80, 0.4)"
                    stroke="rgba(100, 200, 255, 0.6)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M155 460 L205 460 L180 520 L205 580 L155 580 L180 520 Z"
                    fill="rgba(100, 220, 255, 0.3)"
                  />
                  <rect
                    x="175"
                    y="510"
                    width="10"
                    height="20"
                    fill="rgba(100, 220, 255, 0.8)"
                  />
                </g>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="130s"
                    repeatCount="indefinite"
                  />
                </g>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="70s"
                    repeatCount="indefinite"
                  />
                  <ellipse
                    cx="680"
                    cy="500"
                    rx="60"
                    ry="15"
                    fill="rgba(100, 150, 200, 0.3)"
                  />
                  <path
                    d="M640 500 L680 485 L720 500 L680 495 Z"
                    fill="rgba(200, 230, 255, 0.8)"
                  />
                  <ellipse
                    cx="680"
                    cy="500"
                    rx="20"
                    ry="8"
                    fill="rgba(100, 150, 200, 0.6)"
                    stroke="rgba(200, 230, 255, 0.8)"
                    strokeWidth="1"
                  />
                </g>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="40s"
                    repeatCount="indefinite"
                  />
                  <circle
                    cx="550"
                    cy="300"
                    r="4"
                    fill="rgba(255, 200, 50, 0.9)"
                  />
                </g>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="50s"
                    repeatCount="indefinite"
                  />
                  <circle
                    cx="580"
                    cy="350"
                    r="4"
                    fill="rgba(255, 200, 50, 0.9)"
                  />
                </g>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="65s"
                    repeatCount="indefinite"
                  />
                  <circle
                    cx="300"
                    cy="500"
                    r="4"
                    fill="rgba(255, 200, 50, 0.9)"
                  />
                </g>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="55s"
                    repeatCount="indefinite"
                  />
                  <circle
                    cx="450"
                    cy="200"
                    r="4"
                    fill="rgba(255, 200, 50, 0.9)"
                  />
                </g>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="75s"
                    repeatCount="indefinite"
                  />
                  <circle
                    cx="650"
                    cy="450"
                    r="4"
                    fill="rgba(100, 255, 150, 0.9)"
                  />
                </g>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 400 400"
                    to="360 400 400"
                    dur="85s"
                    repeatCount="indefinite"
                  />
                  <circle
                    cx="250"
                    cy="240"
                    r="4"
                    fill="rgba(100, 255, 150, 0.9)"
                  />
                </g>

                <circle cx="100" cy="100" r="1" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="200" cy="150" r="1" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="600" cy="100" r="1" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="700" cy="200" r="1" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.9;0.3"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="300" cy="700" r="1" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="500" cy="650" r="1" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="750" cy="550" r="1" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="150" cy="200" r="0.8" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.9;0.4"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="650" cy="300" r="0.8" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="350" cy="100" r="0.8" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="700" cy="600" r="0.8" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.9;0.4"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </circle>

                <line
                  x1="100"
                  y1="100"
                  x2="150"
                  y2="200"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="0.5"
                />
                <line
                  x1="600"
                  y1="100"
                  x2="650"
                  y2="300"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="0.5"
                />
                <image
                  href="/logo.png"
                  x="300"
                  y="300"
                  width="200"
                  height="200"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </image>

                {/* Replace the dynamic star field with static coordinates */}
                <g>
                  <circle cx="120" cy="150" r="1.2" fill="white">
                    <animate
                      attributeName="opacity"
                      values="0.3;1;0.3"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="340" cy="250" r="1" fill="white">
                    <animate
                      attributeName="opacity"
                      values="0.5;1;0.5"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Add more static stars as needed */}
                </g>

                {/* Replace the large stars section with static coordinates */}
                <g>
                  <circle cx="200" cy="300" r="1.5" fill="white">
                    <animate
                      attributeName="opacity"
                      values="0.2;0.8;0.2"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="r"
                      values="1.5;2;1.5"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Add more static large stars as needed */}
                </g>

                {/* Replace the star trails section with static coordinates */}
                <g>
                  <line
                    x1="100"
                    y1="200"
                    x2="150"
                    y2="250"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="0.5"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.1;0.3;0.1"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </line>
                  {/* Add more static star trails as needed */}
                </g>

                {/* Replace the star clusters section with static coordinates */}
                <g>
                  <circle cx="300" cy="400" r="0.8" fill="white" opacity="0.4">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.7;0.3"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="320" cy="410" r="0.6" fill="white" opacity="0.5">
                    <animate
                      attributeName="opacity"
                      values="0.4;0.8;0.4"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Add more static cluster stars as needed */}
                </g>
              </svg>
            </div>

            {/* Updated Content Section */}
            <div className="space-y-8">
              <motion.h1
                className={` text-5xl font-bold font-poppins bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                ABOUT JECLAT
              </motion.h1>

              <div className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="relative"
                >
                  <p
                    className={`${rajdhani.className} text-2xl md:text-3xl font-light leading-relaxed`}
                  >
                    Experience{" "}
                    <span
                      className={`${rajdhani.className} font-bold text-yellow-300 text-[22px] md:text-[28px] relative`}
                    >
                      JECLAT
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></span>
                    </span>
                    , renowned as{" "}
                    <span className="font-bold relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300">
                        "The Queen of All Fests"
                      </span>
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                      />
                    </span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className={`${rajdhani.className} text-lg md:text-xl leading-relaxed p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10`}
                >
                  <p className="text-white/90">
                    A cultural extravaganza in North Bengal featuring a diverse
                    array of events, from{" "}
                    <span className="text-cyan-300 font-semibold relative inline-block">
                      Music
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-300"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                      />
                    </span>{" "}
                    to{" "}
                    <span className="text-pink-300 font-semibold relative inline-block">
                      Dance
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-pink-300"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                      />
                    </span>
                    , creative writing to fashion shows, and showcases talents
                    from local artists to nationwide celebrities!
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className={`${rajdhani.className} text-lg md:text-xl leading-relaxed`}
                >
                  <p className="text-white/90">
                    Join{" "}
                    <span
                      className={`${rajdhani.className} text-yellow-300 font-bold`}
                    >
                      JECLAT
                    </span>{" "}
                    and be part of the over{" "}
                    <motion.span
                      className="font-bold relative inline-block px-2 py-1"
                      initial={{ background: "rgba(255,255,255,0)" }}
                      animate={{
                        background: [
                          "rgba(255,255,255,0)",
                          "rgba(255,255,255,0.1)",
                          "rgba(255,255,255,0)",
                        ],
                        color: ["#ffffff", "#fcd34d", "#ffffff"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <span className={`${rajdhani.className}`}>
                        TEN THOUSAND
                      </span>
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></span>
                    </motion.span>{" "}
                    young enthusiasts from around the region!
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-16"
          >
            <h2
              className={`${orbitron.className} text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent`}
            >
              Our Past Sponsors
            </h2>

            <div className="relative">
              {/* Gradient background with blur effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/50 to-cyan-900/30 backdrop-blur-xl rounded-xl border border-white/10" />

              {/* Sponsors grid */}
              <div className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-8 rounded-xl">
                {sponsors.map((sponsor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="aspect-square relative group bg-white rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20"
                  >
                    {sponsor.type === "svg" ? (
                      <object
                        data={sponsor.src}
                        type="image/svg+xml"
                        className="w-full h-full transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105"
                      >
                        {sponsor.alt}
                      </object>
                    ) : (
                      <Image
                        src={sponsor.src}
                        alt={sponsor.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-contain p-2 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-center mt-12"
            >
              <p className={`${rajdhani.className} text-xl text-white/80`}>
                Interested in sponsoring JECLAT?
              </p>
              <a
                href="/contact"
                className="inline-flex items-center mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full group hover:scale-105 transition-all duration-300"
              >
                Contact us
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
