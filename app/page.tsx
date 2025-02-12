"use client";

import { useState, useEffect, JSX, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  {
    text: "about",
    href: "/about",
    icon: (
      <div
        className="w-8 h-8 md:w-16 md:h-16 text-cyan-400 flex items-center justify-center
        rounded-full bg-black/20 border-2 border-cyan-400/50 overflow-hidden
        shadow-[0_0_15px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
        transition-all duration-300"
      >
        <Image
          src="/assets/pic_6.svg"
          alt="About"
          width={60}
          height={60}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300
            group-hover:brightness-110"
          priority
        />
      </div>
    ),
  },
  {
    text: "events",
    href: "/events",
    icon: (
      <div
        className="w-8 h-8 md:w-16 md:h-16 text-cyan-400 flex items-center justify-center
        rounded-full bg-black/20 border-2 border-cyan-400/50 overflow-hidden
        shadow-[0_0_15px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
        transition-all duration-300"
      >
        <Image
          src="/assets/pic_8.svg"
          alt="Events"
          width={60}
          height={60}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300
            group-hover:brightness-110"
          priority
        />
      </div>
    ),
  },
  {
    text: "social",
    href: "/social",
    icon: (
      <div
        className="w-8 h-8 md:w-16 md:h-16 text-cyan-400 flex items-center justify-center
        rounded-full bg-black/20 border-2 border-cyan-400/50 overflow-hidden
        shadow-[0_0_15px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
        transition-all duration-300"
      >
        <Image
          src="/assets/pic_4.svg"
          alt="Social"
          width={60}
          height={60}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300
            group-hover:brightness-110"
          priority
        />
      </div>
    ),
  },
  {
    text: "archive",
    href: "/archive",
    icon: (
      <div
        className="w-8 h-8 md:w-16 md:h-16 text-cyan-400 flex items-center justify-center
        rounded-full bg-black/20 border-2 border-cyan-400/50 overflow-hidden
        shadow-[0_0_15px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
        transition-all duration-300"
      >
        <Image
          src="/assets/pic_10.svg"
          alt="Archive"
          width={60}
          height={60}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300
            group-hover:brightness-110"
          priority
        />
      </div>
    ),
  },
  {
    text: "team",
    href: "/team",
    icon: (
      <div
        className="w-8 h-8 md:w-16 md:h-16 text-cyan-400 flex items-center justify-center
        rounded-full bg-black/20 border-2 border-cyan-400/50 overflow-hidden
        shadow-[0_0_15px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
        transition-all duration-300"
      >
        <Image
          src="/assets/pic_9.svg"
          alt="Team"
          width={60}
          height={60}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300
            group-hover:brightness-110"
          priority
        />
      </div>
    ),
  },
  {
    text: "contact",
    href: "/contact",
    icon: (
      <div
        className="w-8 h-8 md:w-16 md:h-16 text-cyan-400 flex items-center justify-center
        rounded-full bg-black/20 border-2 border-cyan-400/50 overflow-hidden
        shadow-[0_0_15px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
        transition-all duration-300"
      >
        <Image
          src="/assets/pic_6.svg"
          alt="Contact"
          width={60}
          height={60}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300
            group-hover:brightness-110"
          priority
        />
      </div>
    ),
  },
  {
    text: "merchandise",
    href: "/merchandise",
    icon: (
      <div
        className="w-8 h-8 md:w-16 md:h-16 text-cyan-400 flex items-center justify-center
        rounded-full bg-black/20 border-2 border-cyan-400/50 overflow-hidden
        shadow-[0_0_15px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
        transition-all duration-300"
      >
        <Image
          src="/assets/pic_5.svg"
          alt="Merchandise"
          width={60}
          height={60}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300
            group-hover:brightness-110"
          priority
        />
      </div>
    ),
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
    <div className="relative text-center mt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative inline-flex gap-6 p-6 rounded-[15px]
          bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-blue-900/50
          backdrop-blur-xl border-2 border-cyan-400/20
          shadow-[0_8px_32px_rgba(31,_41,_55,_0.5)]
          hover:shadow-[0_8px_32px_rgba(0,255,255,0.2)]
          transition-all duration-300"
      >
        {[
          { label: "DAYS", value: timeLeft.days },
          { label: "HOURS", value: timeLeft.hours },
          { label: "MINS", value: timeLeft.minutes },
          { label: "SECS", value: timeLeft.seconds },
        ].map((item, index) => (
          <div key={item.label} className="flex flex-col items-center">
            <motion.div
              className="p-3 px-7 flex items-center justify-center overflow-hidden
                bg-black/40 rounded-[10px] border-2 border-cyan-400/20
                text-[15px] font-bold text-cyan-300 
                shadow-[0_4px_12px_rgba(0,255,255,0.1)]
                hover:shadow-[0_4px_16px_rgba(0,255,255,0.2)]
                transition-all duration-300"
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={item.value}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{
                    y: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="font-mono tracking-wider absolute"
                >
                  {String(item.value).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
              {/* Invisible span to maintain container size */}
              <span className="font-mono tracking-wider invisible">
                {String(item.value).padStart(2, "0")}
              </span>
            </motion.div>
            <span className="text-[12px] font-medium text-cyan-400/90 mt-2 tracking-widest">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>
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
      {links.map((link) => (
        <motion.a
          key={link.text}
          href={link.href}
          variants={card}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)",
          }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative flex flex-col items-center text-center group z-50 py-5
            border-2 border-cyan-400 backdrop-blur-xl rounded-2xl 
            hover:shadow-xl transition-all duration-300 
            w-25 md:w-40"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 opacity-10 rounded-2xl pointer-events-none" />
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {link.icon}
          </div>
          <span className="mt-3 text-[10px] md:text-xs uppercase text-cyan-400 font-bold group-hover:underline">
            {link.text}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};
export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <div className="min-h-screen bg-purple-900 text-cyan-400 font-bold flex flex-col justify-center items-center relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute w-auto min-w-full min-h-full max-w-none opacity-60"
      >
        <source src="clock-black.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Add Logo */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-10 left-10 z-50"
      >
        <Image
          src="/logo.png"
          alt="Jeclat Logo"
          width={130}
          height={130}
          className="drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-110 transition-transform duration-300"
        />
      </motion.div>

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
          className="text-4xl sm:text-6xl md:text-8xl uppercase font-extrabold tracking-wide bg-gradient-to-b from-white to-[#00B2A9] bg-clip-text text-transparent"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {Array.from("JECLAT 2K25").map((letter, index) => (
            <motion.span
              key={index}
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
