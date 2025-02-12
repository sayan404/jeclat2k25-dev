"use client";

import { useState, useEffect, JSX, useRef } from "react";
import { motion } from "framer-motion";
import {
  AboutIcon,
  ArchiveIcon,
  ContactIcon,
  EventsIcon,
  MerchandiseIcon,
  SocialIcon,
  TeamIcon,
} from "@/components/ui/svgicon";
import { FloatingNav } from "@/components/ui/floating-nav";

const links = [
  { text: "about", href: "http://localhost:3000/about", icon: <AboutIcon /> },
  {
    text: "events",
    href: "http://localhost:3000/events",
    icon: <EventsIcon />,
  },
  {
    text: "social",
    href: "http://localhost:3000/social",
    icon: <SocialIcon />,
  },
  {
    text: "archive",
    href: "http://localhost:3000/archive",
    icon: <ArchiveIcon />,
  },
  { text: "team", href: "http://localhost:3000/team", icon: <TeamIcon /> },
  {
    text: "contact",
    href: "http://localhost:3000/contact",
    icon: <ContactIcon />,
  },
  {
    text: "merchandise",
    href: "http://localhost:3000/merchandise",
    icon: <MerchandiseIcon />,
  },
];

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-31T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-center mt-8">
      <div className="relative inline-block p-3 px-6 border-2 rounded-[15px] border-cyan-400 bg-[#6B21A860]">
        <div className="text-lg md:text-2xl font-bold text-cyan-300 flex flex-col md:flex-row items-center gap-2 md:gap-5 opacity-85">
          <div className="w-12 h-12 hidden md:block md:w-16 md:h-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              className="w-full h-full"
            >
              <style>{`
                @keyframes secondhand-rotate {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes minutehand-rotate {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes hourhand-rotate {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>
              <circle
                cx="150"
                cy="150"
                r="140"
                fill="#f0f0f0"
                stroke="#333"
                strokeWidth="10"
              />
              <circle cx="150" cy="150" r="130" fill="white" />
              <g stroke="#333" strokeWidth="3">
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
                  (angle) => (
                    <line
                      key={angle}
                      x1="150"
                      y1="30"
                      x2="150"
                      y2="50"
                      transform={`rotate(${angle}, 150, 150)`}
                    />
                  )
                )}
              </g>
              <line
                x1="150"
                y1="150"
                x2="150"
                y2="90"
                stroke="#333"
                strokeWidth="6"
                style={{
                  transformOrigin: "center",
                  animation: "hourhand-rotate 43200s linear infinite",
                }}
              />
              <line
                x1="150"
                y1="150"
                x2="150"
                y2="70"
                stroke="#666"
                strokeWidth="4"
                style={{
                  transformOrigin: "center",
                  animation: "minutehand-rotate 3600s linear infinite",
                }}
              />
              <line
                x1="150"
                y1="150"
                x2="150"
                y2="50"
                stroke="red"
                strokeWidth="2"
                style={{
                  transformOrigin: "center",
                  animation: "secondhand-rotate 60s linear infinite",
                }}
              />
              <circle cx="150" cy="150" r="5" fill="#333" />
              <g fill="gold" stroke="#333" strokeWidth="2">
                <path d="M50 30 L70 50 Q90 40, 70 20 Z" />
                <path d="M250 30 L230 50 Q210 40, 230 20 Z" />
              </g>
            </svg>
          </div>
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
          {timeLeft.seconds}s
        </div>
      </div>
    </div>
  );
};

const AnimatedCards = ({
  links,
}: {
  links: {
    text: string;
    href: string;
    icon: JSX.Element;
  }[];
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center mt-12 space-x-4 space-y-4 md:space-y-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {links.map((link: { text: string; href: string; icon: JSX.Element }) => (
        <motion.a
          key={link.text}
          href={link.href}
          variants={card}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)",
            transition: { duration: 0.3, ease: "easeIn" },
          }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative flex flex-col items-center text-center group z-50 py-5 border-2 border-cyan-400 backdrop-blur-xl rounded-2xl hover:shadow-xl transition-transform duration-300 w-20 md:w-36"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 opacity-10 rounded-2xl pointer-events-none"></div>
          <span className="text-3xl">{link.icon}</span>
          <span className="mt-2 text-[10px] uppercase text-cyan-400 font-bold group-hover:underline">
            {link.text}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-neutral-950" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-yellow-500">JECLAT</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience the cultural extravaganza of North Bengal
          </p>
        </motion.div>
      </div>

      {/* Navigation */}
      <FloatingNav />
    </main>
  );
}
