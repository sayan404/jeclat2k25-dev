"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    text: "about",
    href: "/about",
  },
  {
    text: "events",
    href: "/events",
  },
  {
    text: "social",
    href: "/social",
  },
  {
    text: "archive",
    href: "/archive",
  },
  {
    text: "team",
    href: "/team",
  },
  {
    text: "contact",
    href: "/contact",
  },
  {
    text: "merchandise",
    href: "/merchandise",
  },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-cyan-500/20 font-mono"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between min-h-[100px]">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-[100px] h-[100px] flex items-center justify-center"
              >
                <Image
                  src="/logo.png"
                  alt="Jeclat Logo"
                  width={150}
                  height={150}
                  className="object-contain drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                  priority
                />
              </motion.div>
            </Link>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ">
            {links.map((link) => (
              <motion.div key={link.text}>
                <Link
                  href={link.href}
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors uppercase"
                >
                  <motion.span
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0 0 8px rgba(0, 255, 255, 0.5)",
                    }}
                    className="inline-block"
                  >
                    {link.text}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right side - Additional Links */}
          <div className="flex items-center space-x-4">
            <motion.div
              className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white text-xs">42</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.header>
  );
};

export default Header;
