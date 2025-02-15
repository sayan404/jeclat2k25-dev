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
          className="relative mb-10"
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
              width={170}
              height={170}
              className="mx-auto"
            />
          </motion.div>
          <Image
            src="/assets/pic_6.svg"
            alt="About Icon"
            width={170}
            height={170}
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


// "use client";
// import Image from "next/image";
// import Header from "@/app/components/Header";
// import { useEffect, useState } from "react";

// const AboutPage = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <main className="min-h-screen relative font-mono overflow-hidden bg-[#1a0b2e]">
//       <Header />

//       {/* Background Image with Gradient Overlay */}
//       <div className="absolute inset-0 z-10 left-1/2 -translate-x-1/2">
//         <Image
//           src="/assets/bg_7_2.png"
//           alt="Background"
//           fill
//           className={`object-cover transition-opacity duration-1000`}
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e]/80 via-transparent to-[#1a0b2e]/80" />
//       </div>

//       {/* Content Container */}
//       <div className="container mx-auto px-4 pt-20 text-center relative z-10">
//         {/* Title Section */}
//         <div className={`transform transition-all duration-700 ${
//           isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}>
//           <div className="flex items-center justify-center space-x-4 mb-2">
//             <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#FFD700]" />
//             <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
//               ABOUT JECLAT
//             </h1>
//             <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#FFD700]" />
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="mt-16 max-w-4xl mx-auto">
//           {/* Description Card */}
//           <div className={`backdrop-blur-md bg-purple-900/10 p-8 rounded-lg border border-purple-500/20 
//             transform transition-all duration-700 delay-300 ${
//             isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             <p className="text-xl md:text-2xl leading-relaxed text-cyan-300/90 mb-8">
//               Experience <span className="text-[#FFD700] font-semibold">JECLAT</span>, 
//               renowned as <span className="text-[#FFD700]">&quot;The Queen of All Fests&quot;</span>
//             </p>
            
//             <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
//               A cultural extravaganza in North Bengal featuring a diverse array of events, 
//               from Music to Dance, creative writing to fashion shows, and showcases talents 
//               from local artists to nationwide celebrities!
//             </p>

//             <p className="text-lg md:text-xl leading-relaxed text-gray-300">
//               Join <span className="text-[#FFD700] font-semibold">JECLAT</span> and be part of the over
//               <span className="text-[#FFD700] font-semibold"> TEN THOUSAND </span>
//               young enthusiasts from around the region!
//             </p>
//           </div>

//           {/* CTA Button */}
//           <div className={`mt-12 transform transition-all duration-700 delay-500 ${
//             isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             <button className="group relative overflow-hidden px-8 py-4 bg-transparent">
//               <span className="absolute inset-0 w-full h-full transition-all duration-300 
//                 group-hover:bg-gradient-to-r from-[#FFD700]/20 to-purple-500/20"></span>
//               <span className="absolute inset-0 w-3 bg-gradient-to-r from-[#FFD700] to-purple-500 
//                 transition-all duration-500 ease-out group-hover:w-full"></span>
//               <span className="relative text-white group-hover:text-[#FFD700] 
//                 transition-colors duration-300 text-lg font-semibold tracking-wider">
//                 JECLAT IS ON
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className={`absolute bottom-0 left-0 w-full h-px transform transition-all duration-1000 delay-700 ${
//         isLoaded ? 'opacity-100' : 'opacity-0'
//       }`}>
//         <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />
//       </div>
//     </main>
//   );
// };

// export default AboutPage;
