// "use client";

// import { useState, useEffect, JSX, useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   AboutIcon,
//   ArchiveIcon,
//   ContactIcon,
//   EventsIcon,
//   MerchandiseIcon,
//   SocialIcon,
//   TeamIcon,
// } from "@/components/ui/svgicon";
// import { FloatingNav } from "@/components/ui/floating-nav";

// const links = [
//   { text: "about", href: "http://localhost:3000/about", icon: <AboutIcon /> },
//   {
//     text: "events",
//     href: "http://localhost:3000/events",
//     icon: <EventsIcon />,
//   },
//   {
//     text: "social",
//     href: "http://localhost:3000/social",
//     icon: <SocialIcon />,
//   },
//   {
//     text: "archive",
//     href: "http://localhost:3000/archive",
//     icon: <ArchiveIcon />,
//   },
//   { text: "team", href: "http://localhost:3000/team", icon: <TeamIcon /> },
//   {
//     text: "contact",
//     href: "http://localhost:3000/contact",
//     icon: <ContactIcon />,
//   },
//   {
//     text: "merchandise",
//     href: "http://localhost:3000/merchandise",
//     icon: <MerchandiseIcon />,
//   },
// ];

// const Countdown = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const targetDate = new Date("2025-03-31T00:00:00");
//     const interval = setInterval(() => {
//       const now = new Date();
//       const difference = targetDate.getTime() - now.getTime();

//       if (difference <= 0) {
//         clearInterval(interval);
//         return;
//       }

//       setTimeLeft({
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / (1000 * 60)) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative text-center mt-8">
//       <div className="relative inline-block p-3 px-6 border-2 rounded-[15px] border-cyan-400 bg-[#6B21A860]">
//         <div className="text-lg md:text-2xl font-bold text-cyan-300 flex flex-col md:flex-row items-center gap-2 md:gap-5 opacity-85">
//           <div className="w-12 h-12 hidden md:block md:w-16 md:h-16">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 300 300"
//               className="w-full h-full"
//             >
//               <style>{`
//                 @keyframes secondhand-rotate {
//                   from { transform: rotate(0deg); }
//                   to { transform: rotate(360deg); }
//                 }
//                 @keyframes minutehand-rotate {
//                   from { transform: rotate(0deg); }
//                   to { transform: rotate(360deg); }
//                 }
//                 @keyframes hourhand-rotate {
//                   from { transform: rotate(0deg); }
//                   to { transform: rotate(360deg); }
//                 }
//               `}</style>
//               <circle
//                 cx="150"
//                 cy="150"
//                 r="140"
//                 fill="#f0f0f0"
//                 stroke="#333"
//                 strokeWidth="10"
//               />
//               <circle cx="150" cy="150" r="130" fill="white" />
//               <g stroke="#333" strokeWidth="3">
//                 {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
//                   (angle) => (
//                     <line
//                       key={angle}
//                       x1="150"
//                       y1="30"
//                       x2="150"
//                       y2="50"
//                       transform={`rotate(${angle}, 150, 150)`}
//                     />
//                   )
//                 )}
//               </g>
//               <line
//                 x1="150"
//                 y1="150"
//                 x2="150"
//                 y2="90"
//                 stroke="#333"
//                 strokeWidth="6"
//                 style={{
//                   transformOrigin: "center",
//                   animation: "hourhand-rotate 43200s linear infinite",
//                 }}
//               />
//               <line
//                 x1="150"
//                 y1="150"
//                 x2="150"
//                 y2="70"
//                 stroke="#666"
//                 strokeWidth="4"
//                 style={{
//                   transformOrigin: "center",
//                   animation: "minutehand-rotate 3600s linear infinite",
//                 }}
//               />
//               <line
//                 x1="150"
//                 y1="150"
//                 x2="150"
//                 y2="50"
//                 stroke="red"
//                 strokeWidth="2"
//                 style={{
//                   transformOrigin: "center",
//                   animation: "secondhand-rotate 60s linear infinite",
//                 }}
//               />
//               <circle cx="150" cy="150" r="5" fill="#333" />
//               <g fill="gold" stroke="#333" strokeWidth="2">
//                 <path d="M50 30 L70 50 Q90 40, 70 20 Z" />
//                 <path d="M250 30 L230 50 Q210 40, 230 20 Z" />
//               </g>
//             </svg>
//           </div>
//           {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
//           {timeLeft.seconds}s
//         </div>
//       </div>
//     </div>
//   );
// };

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
//       className="flex flex-wrap justify-center mt-12 space-x-4 space-y-4 md:space-y-0"
//       variants={container}
//       initial="hidden"
//       animate="show"
//     >
//       {links.map((link: { text: string; href: string; icon: JSX.Element }) => (
//         <motion.a
//           key={link.text}
//           href={link.href}
//           variants={card}
//           whileHover={{
//             scale: 1.1,
//             boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)",
//             transition: { duration: 0.3, ease: "easeIn" },
//           }}
//           transition={{ type: "spring", stiffness: 100 }}
//           className="relative flex flex-col items-center text-center group z-50 py-5 border-2 border-cyan-400 backdrop-blur-xl rounded-2xl hover:shadow-xl transition-transform duration-300 w-20 md:w-36"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 opacity-10 rounded-2xl pointer-events-none"></div>
//           <span className="text-3xl">{link.icon}</span>
//           <span className="mt-2 text-[10px] uppercase text-cyan-400 font-bold group-hover:underline">
//             {link.text}
//           </span>
//         </motion.a>
//       ))}
//     </motion.div>
//   );
// };

// export default function HomePage() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0.4;
//     }
//   }, []);

//   return (
//     <main className="relative min-h-screen bg-black overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-neutral-950" />

//       {/* Content container */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h1 className="text-6xl font-bold text-white mb-6">
//             Welcome to <span className="text-yellow-500">JECLAT</span>
//           </h1>
//           <p className="text-xl text-white/80 max-w-2xl mx-auto">
//             Experience the cultural extravaganza of North Bengal
//           </p>
//         </motion.div>
//       </div>

//       {/* Navigation */}
//       <FloatingNav />
//     </main>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header";

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen relative font-mono overflow-hidden bg-[#1a0b2e] max-h-[100vh] max-w-[100vw]">
      {/* <Header /> */}

      {/* Animated Background with particles effect */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(26,11,46,0.95), rgba(72,28,135,0.95))",
            "linear-gradient(45deg, rgba(72,28,135,0.95), rgba(26,11,46,0.95))",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 pt-12 text-center relative z-10">
        {/* Coming Soon Text with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.div
            animate={{
              textShadow: [
                "0 0 20px rgba(255,215,0,0.3)",
                "0 0 40px rgba(255,215,0,0.5)",
                "0 0 20px rgba(255,215,0,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent mb-4 tracking-tight">
              Coming Soon
            </h1>
          </motion.div>
          <motion.p
            className="text-xl md:text-xl text-cyan-300/90 font-light tracking-wide"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            We're crafting something extraordinary
          </motion.p>
        </motion.div>

        {/* Animated Center Icon with enhanced effects */}
        <motion.div
          className="relative mb-20"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <motion.div
            className="absolute inset-0 blur-3xl"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image
              src="/assets/pic_6.svg"
              alt="Glow Effect"
              width={200}
              height={200}
              className="mx-auto"
            />
          </motion.div>
          <Image
            src="/assets/pic_6.svg"
            alt="About Icon"
            width={200}
            height={200}
            className="mx-auto relative z-10 drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]"
          />
        </motion.div>

        {/* Feature Preview with glass morphism */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto backdrop-blur-xl bg-purple-900/10 p-4 rounded-2xl border border-purple-500/30"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px rgba(0,255,255,0.2)",
                "0 0 60px rgba(0,255,255,0.4)",
                "0 0 30px rgba(0,255,255,0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="rounded-xl p-8 bg-gradient-to-br from-purple-900/50 to-indigo-900/50"
          >
            <h2 className="text-xl text-[#FFD700] font-bold mb-6 tracking-wide">
              Get Ready to Experience
            </h2>
            <p className="text-[15px] text-gray-300 mb-6 leading-relaxed">
              The story of JECLAT - "The Queen of All Fests" - is about to
              unfold
            </p>
            <div className="text-lg text-cyan-400/90 font-medium tracking-wide">
              Stay tuned for updates
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Notification Form */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <p className="text-xl text-cyan-300/90 mb-6 tracking-wide">
            Want to be notified when we launch?
          </p>
          <button className="group relative overflow-hidden px-12 py-5 bg-transparent rounded-lg">
            <span
              className="absolute inset-0 w-full h-full transition-all duration-300 
              bg-gradient-to-r from-purple-900/50 to-indigo-900/50 group-hover:opacity-0"
            />
            <span
              className="absolute inset-0 w-3 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700]
              transition-all duration-500 ease-out group-hover:w-full"
            />
            <span
              className="relative text-white group-hover:text-[#1a0b2e] 
              transition-colors duration-300 text-xl font-bold tracking-wider uppercase"
            >
              Notify Me
            </span>
          </button>
        </motion.div>*/}
      </div> 

      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 left-0 w-full h-px">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div> */}
    </main>
  );
};

export default AboutPage;
