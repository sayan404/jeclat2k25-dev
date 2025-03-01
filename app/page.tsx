"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CosmicLoader from "./components/ui/CosmicLoader";

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
          src="/assets/pic_1.svg"
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
    <div className="relative text-center mt-2 md:mt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative inline-flex font-astralSisters gap-1 sm:gap-2 md:gap-6 p-2 sm:p-3 md:p-6 rounded-[15px]
          backdrop-blur-[15px] border-2 border-cyan-400/20
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
          <div
            key={item.label}
            className="flex flex-col items-center w-[60px] sm:min-w-[40px] md:min-w-[50px]"
          >
            <motion.div
              className="1 sm:p-2 md:p-3 px-2 sm:px-3 md:px-7 flex items-center justify-center overflow-hidden
                bg-black/40 rounded-[10px] border-2 border-cyan-400/20
                text-[10px] sm:text-[12px] md:text-[15px] font-bold text-cyan-300 
                shadow-[0_4px_12px_rgba(0,255,255,0.1)]
                hover:shadow-[0_4px_16px_rgba(0,255,255,0.2)]
                transition-all duration-300
                w-full"
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
            <span
              className="text-[8px] sm:text-[10px] md:text-[12px] font-medium text-cyan-400/90 
              mt-1 md:mt-2 tracking-widest"
            >
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
    icon: React.ReactNode;
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
      className="flex flex-wrap max-w-[80vw] justify-center gap-2 mt-8 px-2 md:mt-12 md:gap-4 md:max-w-[90vw]"
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
          className="relative flex flex-col items-center text-center group z-50 py-3 px-2
            border-2 border-cyan-400 backdrop-blur-xl rounded-2xl 
            hover:shadow-xl transition-all duration-300 
            w-[calc(33%-8px)] min-w-[90px] md:w-40 md:py-5"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 opacity-10 rounded-2xl pointer-events-none" />
          <div className="relative w-8 h-8 md:w-16 md:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {link.icon}
          </div>
          <span className=" font-astralSisters mt-2 text-[8px] md:text-xs uppercase text-cyan-400 font-bold group-hover:underline">
            {link.text}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

const TimeTravelLanding = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Animation for time distortion effects
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Time distortion particles
    const particles: any[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: `rgba(${Math.random() * 100 + 155}, ${
          Math.random() * 100 + 155
        }, 255, ${Math.random() * 0.5 + 0.3})`,
        orbit: Math.random() * 50 + 20,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: Math.random() * 0.02 + 0.005,
        pulsate: Math.random() * 0.1 + 0.05,
      });
    }

    // Time vortex properties
    const vortexX = canvas.width / 2;
    const vortexY = canvas.height / 2;
    const vortexRadius = 100;
    let vortexPulse = 0;

    // Distortion effect
    const timeLines = [];
    const lineCount = 24;

    for (let i = 0; i < lineCount; i++) {
      timeLines.push({
        angle: ((Math.PI * 2) / lineCount) * i,
        length: Math.random() * 50 + 150,
        width: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.01 + 0.005,
        color:
          i % 2 === 0 ? "rgba(65, 238, 236, 0.6)" : "rgba(238, 65, 192, 0.6)",
      });
    }

    function animate() {
      if (!canvas) return;

      ctx.fillStyle = "rgba(20, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update vortex pulse
      vortexPulse += 0.03;
      const currentRadius = vortexRadius + Math.sin(vortexPulse) * 20;

      // Draw gravity well
      const gradient = ctx.createRadialGradient(
        vortexX,
        vortexY,
        0,
        vortexX,
        vortexY,
        currentRadius * 3
      );
      gradient.addColorStop(0, "rgba(65, 238, 236, 0.3)");
      // gradient.addColorStop(0.3, 'rgba(65, 117, 238, 0.1)');
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.beginPath();
      ctx.arc(vortexX, vortexY, currentRadius * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw time distortion lines
      // for (const line of timeLines) {
      //   line.angle += line.speed;

      //   const startX = vortexX + Math.cos(line.angle) * currentRadius * 0.8;
      //   const startY = vortexY + Math.sin(line.angle) * currentRadius * 0.8;

      //   const endX = vortexX + Math.cos(line.angle) * (currentRadius + line.length + Math.sin(vortexPulse * 2) * 30);
      //   const endY = vortexY + Math.sin(line.angle) * (currentRadius + line.length + Math.sin(vortexPulse * 2) * 30);

      //   ctx.beginPath();
      //   ctx.moveTo(startX, startY);
      //   ctx.lineTo(endX, endY);
      //   ctx.strokeStyle = line.color;
      //   ctx.lineWidth = line.width;
      //   ctx.stroke();
      // }

      // Draw spiral effect
      ctx.beginPath();
      for (let i = 0; i < 360; i += 5) {
        const angle = (i * Math.PI) / 180;
        const radius = (i / 15) * (1 + Math.sin(vortexPulse) * 0.2);
        const x = vortexX + Math.cos(angle) * radius;
        const y = vortexY + Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.strokeStyle = "rgba(238, 117, 65, 0.5)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw particles affected by gravity
      for (const particle of particles) {
        // Distance from vortex center
        const dx = particle.x - vortexX;
        const dy = particle.y - vortexY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Apply gravity effect
        if (distance < currentRadius * 4) {
          // Particles get pulled toward the center with increasing strength
          const gravitationalPull = (1 - distance / (currentRadius * 4)) * 0.5;

          particle.x -= dx * gravitationalPull * 0.05;
          particle.y -= dy * gravitationalPull * 0.05;

          // Add orbital motion at certain distances
          if (distance < currentRadius * 2 && distance > currentRadius * 0.8) {
            particle.angle += 0.02 + (currentRadius * 2 - distance) * 0.0005;

            particle.x = vortexX + Math.cos(particle.angle) * distance;
            particle.y = vortexY + Math.sin(particle.angle) * distance;
          }

          // Particles inside the vortex move in spirals
          if (distance < currentRadius * 0.8) {
            particle.size += 0.02;
            if (particle.size > 5) particle.size = 5;

            particle.orbit -= 0.5;
            if (particle.orbit < 5) {
              if (!canvas) return;
              particle.x = Math.random() * canvas.width;
              particle.y = Math.random() * canvas.height;
              particle.orbit = Math.random() * 50 + 20;
              particle.size = Math.random() * 3 + 1;
            }

            particle.angle += particle.angleSpeed;
            particle.x = vortexX + Math.cos(particle.angle) * particle.orbit;
            particle.y = vortexY + Math.sin(particle.angle) * particle.orbit;
          }
        } else {
          // Regular particle movement outside gravity well
          particle.x += particle.speedX * 0.5;
          particle.y += particle.speedY * 0.5;

          // Wrap around edges
          if (!canvas) return;
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        }

        // Pulsating size
        particle.size += Math.sin(vortexPulse) * particle.pulsate;
        if (particle.size < 0.5) particle.size = 0.5;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      }

      // Draw event horizon
      ctx.beginPath();
      ctx.arc(vortexX, vortexY, currentRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(238, 117, 65, ${
        0.7 + Math.sin(vortexPulse) * 0.3
      })`;
      ctx.lineWidth = 5 + Math.sin(vortexPulse) * 2;
      ctx.stroke();

      // Inner vortex
      ctx.beginPath();
      ctx.arc(vortexX, vortexY, currentRadius * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(10, 15, 40, 0.9)";
      ctx.fill();

      // Center glow
      const centerGlow = ctx.createRadialGradient(
        vortexX,
        vortexY,
        0,
        vortexX,
        vortexY,
        currentRadius * 0.5
      );
      // centerGlow.addColorStop(0, 'rgba(0, 0, 0, 0.5)');
      // centerGlow.addColorStop(0.5, 'rgba(65, 238, 236, 0.3)');
      // centerGlow.addColorStop(1, 'rgba(65, 238, 236, 0)');

      ctx.beginPath();
      ctx.arc(vortexX, vortexY, currentRadius * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = centerGlow;
      ctx.fill();

      requestAnimationFrame(animate);
    }

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen text-cyan-400 font-bold flex flex-col justify-center items-center relative overflow-hidden bg-black">
      <CosmicLoader isVisible={isLoading} />
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ pointerEvents: "none" }}
      />

      {/* Optional loading indicator */}

      {/* Add Logo */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-4 left-4 md:top-10 md:left-10 z-50"
      >
        <Image
          src="/logo.png"
          alt="Jeclat Logo"
          width={130}
          height={130}
          className="w-24 sm:w-[70%] drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] 
            hover:scale-110 transition-transform duration-300"
        />
      </motion.div>

      <div
        className="absolute inset-0 mx-2 my-4 md:m-5 border-4 border-cyan-400 
        pointer-events-none backdrop-blur-[10px] rounded-[20px]"
      />
      <div className="m-2 md:m-4">
        {/* Top Left Corner Border */}
        <div
          className="absolute top-0 left-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] 
          border-t-4 border-l-4 border-cyan-400 rounded-[20px] rounded-tr-sm rounded-bl-sm"
        ></div>

        {/* Top Right Corner Border */}
        <div
          className="absolute top-0 right-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] 
          border-t-4 border-r-4 border-cyan-400 rounded-[20px] rounded-tl-sm rounded-br-sm"
        ></div>

        {/* Bottom Left Corner Border */}
        <div
          className="absolute bottom-0 left-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] 
          border-b-4 border-l-4 border-cyan-400 rounded-[20px] rounded-tl-sm rounded-br-sm"
        ></div>

        <div
          className="absolute bottom-0 right-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] 
          border-b-4 border-r-4 border-cyan-400 rounded-[20px] rounded-bl-sm rounded-tr-sm"
        ></div>
      </div>
      <div className="text-center">
        <motion.h1
          className="text-4xl font-astral sm:text-6xl md:text-8xl uppercase font-extrabold tracking-wide bg-gradient-to-b from-white to-[#00B2A9] bg-clip-text text-transparent"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {Array.from("JECLAT 2K25").map((letter, index) => (
            <motion.span
              className="font-astral tracking-tight md:tracking-wide"
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
      <div className="relative text-center mt-4">
        <div className="relative font-astral text-[10px] md:text-xl font-semibold text-cyan-400 px-4 md:px-6 py-2 md:py-3 border-2 md:border-4 border-cyan-400 rounded-lg glow-on-hover">
          Jeclat is on
        </div>
      </div>
      <footer
        className="absolute bottom-0 md:bottom-8 w-full text-center text-cyan-400 
        text-[4px] md:text-[5px] px-2"
      >
        <p className="bg-black/50 inline-block px-2 py-1 rounded-full backdrop-blur-sm">
          Copyright reserved at Jeclat 2025
        </p>
      </footer>
    </div>
  );
};

export default TimeTravelLanding;
