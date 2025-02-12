"use client";

import { FloatingNav } from "@/components/ui/floating-nav";
// import FloatingDockDemo from "@/components/ui/FloatingDock";
// import { FloatingDock } from "@/components/ui/floating-dock";
// import { FloatingDockDemo } from "@/components/ui/FloatingDock";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function InformationSection() {
  const contentControls = useAnimationControls();

  // Start content animation after background animation
  useEffect(() => {
    const startContentAnimation = async () => {
      // Wait for background animation duration
      await new Promise((resolve) => setTimeout(resolve, 5000));
      await contentControls.start("visible");
    };

    startContentAnimation();
  }, [contentControls]);

  // Animation variants for text
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.5, ease: "easeOut" },
    },
  };

  const decorationVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 1 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(234, 179, 8, 0.5)",
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative flex flex-col font-arial mt-8 overflow-hidden items-center h-screen bg-black text-white px-6">
      {/* Background Radar Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [0.5, 1.5, 0.8, 5] }}
          transition={{ repeat: 0, duration: 5, ease: "easeInOut" }}
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 opacity-40"
        />
        <div
          className="absolute w-[480px] h-[480px] border-2 border-purple-800/50 rounded-full opacity-50 
                        shadow-[0_0_15px_rgba(147,51,234,0.3)] backdrop-blur-sm"
        ></div>
        <div
          className="absolute w-[400px] h-[400px] border-2 border-indigo-800/50 rounded-full opacity-40
                        shadow-[0_0_10px_rgba(99,102,241,0.3)]"
        ></div>
        <div
          className="absolute w-[300px] h-[300px] border-2 border-blue-800/50 rounded-full opacity-30
                        shadow-[0_0_8px_rgba(30,64,175,0.3)]"
        ></div>
        <div
          className="absolute w-[200px] h-[200px] border-2 border-cyan-800/50 rounded-full opacity-20
                        shadow-[0_0_5px_rgba(8,145,178,0.3)]"
        ></div>
      </div>
      {/* <FloatingDockDemo /> */}

      {/* Content Section */}
        <section className="relative flex flex-col font-arial overflow-hidden items-center pt-10 text-white px-6">
          <FloatingNav />
        </section>
      <motion.div
        initial="hidden"
        animate={contentControls}
        className="relative z-10 text-center max-w-6xl"
      >
        .
        {/* Title with decorative elements */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <motion.span
            variants={decorationVariants}
            className="text-yellow-500"
          >
            ⚜️
          </motion.span>
          <motion.h1
            variants={titleVariants}
            className="text-6xl font-bold text-yellow-500"
          >
            ABOUT JECLAT
          </motion.h1>
          <motion.span
            variants={decorationVariants}
            className="text-yellow-500"
          >
            ⚜️
          </motion.span>
        </div>
        {/* Main description */}
        <div className="space-y-8 max-w-4xl mx-auto font-sans">
          <motion.p variants={textVariants} className="text-xl leading-relaxed">
            Experience <span className="text-yellow-500 font-bold">JECLAT</span>
            , renowned as{" "}
            <span className="text-yellow-500 font-bold">
              "The Queen of All Fests"
            </span>
            . A cultural extravaganza in North Bengal featuring a diverse array
            of events, from Music to Dance, creative writing to fashion shows,
            and showcases talents from local artists to nationwide celebrities!
          </motion.p>

          <motion.p variants={textVariants} className="text-xl leading-relaxed">
            Join JECLAT and be part of the over{" "}
            <span className="text-yellow-500 font-bold">TEN THOUSAND</span>{" "}
            young enthusiasts from around the region!
          </motion.p>

          {/* CTA Button */}
          {/* <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="mt-8 px-12 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 
                     text-black font-bold text-xl rounded-md border-2 border-yellow-400
                     hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
          >
            JECLAT Is ON
          </motion.button> */}
        </div>
      </motion.div>
    </section>
  );
}
