"use client";

import {
  AboutIcon,
  ArchiveIcon,
  ContactIcon,
  EventsIcon,
  MerchandiseIcon,
  SocialIcon,
  TeamIcon,
} from "@/components/ui/svgicon";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

interface NavItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { title: "About", icon: <AboutIcon />, href: "/about" },
  { title: "Events", icon: <EventsIcon />, href: "/events" },
  { title: "Social", icon: <SocialIcon />, href: "/social" },
  { title: "Archive", icon: <ArchiveIcon />, href: "/archive" },
  { title: "Team", icon: <TeamIcon />, href: "/team" },
  { title: "Contact", icon: <ContactIcon />, href: "/contact" },
  { title: "Merchandise", icon: <MerchandiseIcon />, href: "/merchandise" },
];

export function FloatingNav() {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed top-8 inset-x-0 mx-auto z-50 flex justify-center"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        className="flex items-center justify-between px-16 py-6 rounded-[30px]
          bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-blue-900/50
          backdrop-blur-xl gap-4 p-8  border-white/10
          shadow-[0_8px_32px_rgba(31,_41,_55,_0.5)]
          hover:shadow-[0_8px_32px_rgba(88,_28,_135,_0.5)]
          transition-all duration-500"
      >
        {navItems.map((item, index) => (
          <NavItem
            mouseX={mouseX}
            key={item.title}
            {...item}
            delay={index * 0.1}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

function NavItem({
  mouseX,
  title,
  icon,
  href,
  delay,
}: NavItem & { mouseX: any; delay: number }) {
  let ref = useRef<HTMLDivElement>(null);
  let [hovered, setHovered] = useState(false);

  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const tooltipVariants = {
    initial: { opacity: 0, y: 10 },
    hover: {
      opacity: 1,
      y: -45,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <Link href={href} passHref>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: delay + 0.5,
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative rounded-2xl bg-red-500
          bg-gradient-to-br from-purple-500/20 to-indigo-500/20
          hover:from-purple-500/30 hover:to-indigo-500/30
          border border-white/10  
          transition-all duration-300 
          shadow-[0_4px_12px_rgba(0,_0,_0,_0.5)]
          hover:shadow-[0_8px_20px_rgba(147,_51,_234,_0.3)]
          group"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              variants={tooltipVariants}
              initial="initial"
              animate="hover"
              exit="initial"
              className="absolute px-4 py-2 rounded-xl
                bg-gradient-to-r from-purple-900 to-indigo-900
                text-white text-sm font-medium tracking-wide
                shadow-lg whitespace-nowrap left-1/2 -translate-x-1/2
                border border-white/10
                bottom-full mb-2"
            >
              {title}
              <span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 
                transform rotate-45 w-2 h-2 
                bg-indigo-900"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate={hovered ? "hover" : "initial"}
          className="w-12 h-12 flex items-center justify-center
            text-white/80 group-hover:text-white
            transition-colors duration-300
            drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
