"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Rajdhani } from "next/font/google";
import { usePathname } from "next/navigation";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50">
      <nav
        className={`${rajdhani.className} backdrop-blur-md bg-black/30 border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center">
                <img className="h-10 w-auto" src="/logo.png" alt="JECLAT" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  JECLAT
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className="text-white/70 hover:text-cyan-400 px-3 py-2 text-sm font-medium relative group"
                    >
                      {item.name}
                      <span
                        className={`absolute inset-x-0 bottom-0 h-0.5 bg-cyan-400 transform transition-transform duration-200 ${
                          pathname === item.path
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white/70 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <motion.span
                    animate={
                      isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                    }
                    className="absolute h-0.5 w-full bg-current transform transition-transform duration-300"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute h-0.5 w-full bg-current top-2.5"
                  />
                  <motion.span
                    animate={
                      isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 5 }
                    }
                    className="absolute h-0.5 w-full bg-current transform transition-transform duration-300"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={isOpen ? { height: "auto" } : { height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-white/70 hover:text-cyan-400 block px-3 py-2 text-base font-medium border-l-2 border-transparent hover:border-cyan-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}
