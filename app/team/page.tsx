"use client";

import { useState, useEffect, JSX } from "react";
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
const links = [
  { text: "about", href: "#", icon: <AboutIcon /> },
  { text: "events", href: "#", icon: <EventsIcon /> },
  { text: "social", href: "#", icon: <SocialIcon /> },
  { text: "archive", href: "#", icon: <ArchiveIcon /> },
  { text: "team", href: "#", icon: <TeamIcon /> },
  { text: "contact", href: "#", icon: <ContactIcon /> },
  { text: "merchandise", href: "#", icon: <MerchandiseIcon /> },
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

// const AnimatedCards = ({
//   links,
// }: {
//   links: {
//     text: string;
//     href: string;
//     icon: JSX.Element;
//   }[];
// }) => {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const card = {
//     hidden: { opacity: 0, x: -50 },
//     show: { opacity: 1, x: 0 },
//   };

//   return (
//     <motion.div
//     className="flex flex-col md:flex-row flex-wrap justify-center mt-12 space-x-8 space-y-8 md:space-y-0"
//     variants={container}
//     initial="hidden"
//     animate="show"
//   >
//     {links.map((link: { text: string; href: string; icon: JSX.Element }) => (
//       <motion.a
//         key={link.text}
//         href={link.href}
//         variants={card}
//         whileHover={{ rotate: [0, 5, -5, 0] }}
//         transition={{ type: "spring", stiffness: 100 }}
//         className="relative flex flex-col items-center text-center group z-50 p-6 border-2 border-cyan-400 backdrop-blur-xl rounded-2xl hover:shadow-xl hover:scale-105 transition-transform duration-300 w-40 md:w-48 lg:w-56"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 opacity-10 rounded-2xl pointer-events-none"></div>
//         <span className="text-3xl">{link.icon}</span>
//         <span className="mt-2 text-sm uppercase text-cyan-400 font-bold group-hover:underline">
//           {link.text}
//         </span>
//       </motion.a>
//     ))}
//   </motion.div>

//   );
// };
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
          whileHover={{ rotate: [0, 5, -5, 0] }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative flex flex-col items-center text-center group z-50 py-5 border-2 border-cyan-400 backdrop-blur-xl rounded-2xl hover:shadow-xl hover:scale-105 transition-transform duration-300 w-40 md:w-48"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 opacity-10 rounded-2xl pointer-events-none"></div>
          <span className="text-3xl">{link.icon}</span>
          <span className="mt-2 text-sm uppercase text-cyan-400 font-bold group-hover:underline">
            {link.text}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default function Team() {
  return (
    <div className="min-h-screen bg-purple-900 text-cyan-400 font-bold flex flex-col justify-center items-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-auto min-w-full min-h-full max-w-none opacity-30"
      >
        <source src="clock-black.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 m-5 border-4 border-cyan-400 pointer-events-none backdrop-blur-[10PX] rounded-[20px]" />
      <div className="m-4">
        {/* Top Left Corner Border */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] border-t-4 border-l-4 border-cyan-400 rounded-[20px] rounded-tr-sm rounded-bl-sm"></div>

        {/* Top Right Corner Border */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] border-t-4 border-r-4 border-cyan-400 rounded-[20px] rounded-tl-sm rounded-br-sm"></div>

        {/* Bottom Left Corner Border */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-b-4 border-l-4 border-cyan-400 rounded-[20px] rounded-tl-sm rounded-br-sm"></div>

        {/* Bottom Right Corner Border */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] border-b-4 border-r-4 border-cyan-400 rounded-[20px] rounded-bl-sm rounded-tr-sm"></div>
      </div>
      <div className="text-center">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl uppercase font-extrabold tracking-wide bg-gradient-to-b from-white to-[#fffb00] bg-clip-text text-transparent"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {Array.from("JECLAT 2K25").map((letter, index) => (
        <motion.span
          key={index}
          className="z-[200]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
          }}
          whileHover={{
            textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
          }}
        >
          {letter}
        </motion.span>
          ))}
        </motion.h1>
      </div>
      <Countdown />
      <AnimatedCards links={links} />
      <div className="relative text-center mt-8">
        {/* Text content */}
        <div className="relative text-[8px] cursor-move md:text-xl font-semibold text-cyan-400  px-6 py-3  border-4 border-cyan-400 rounded-lg glow-on-hover">
          Jeclat is on!
        </div>
      </div>
      <footer className="absolute bottom-8 w-full text-center text-cyan-400 text-[6px]">
        <p>Copyright reserved at Jeclat 2025</p>
      </footer>
    </div>
  );
}
