"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import StarField from "@/components/ui/StarField";
import CosmicLoader from "../components/ui/CosmicLoader";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    // Simulate page load completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#0a0a0f] min-h-screen relative overflow-hidden">
      <CosmicLoader isVisible={isLoading || status === "submitting"} />
      <StarField />
      <Header />
      <div className="relative text-white py-20 px-4">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent opacity-40" />

        <div className="max-w-6xl mx-auto relative">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
              Get in{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                touch
              </span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Reach out, and let's create something great!
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#12121a] rounded-xl p-8 shadow-xl backdrop-blur-sm border border-white/5 flex flex-col"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-3">Let's connect</h2>
                <p className="text-gray-400 text-sm">
                  Let's align our constellations! Reach out and let the magic of
                  collaboration illuminate our skies.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 flex-grow flex flex-col"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-[#1c1c24] rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 border border-white/5"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-[#1c1c24] rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 border border-white/5"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#1c1c24] rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 border border-white/5"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-[#1c1c24] rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 border border-white/5"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />

                <textarea
                  placeholder="Message"
                  rows={6}
                  className="bg-[#1c1c24] rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 border border-white/5 resize-none flex-grow"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2 mt-auto disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send it to the moon
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#12121a] rounded-xl p-8 relative overflow-hidden flex flex-col h-full shadow-xl backdrop-blur-sm border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
              <div className="flex-grow flex flex-col justify-center">
                <img
                  src="/assets/contact.svg"
                  alt="Astronaut floating in space"
                  className="w-full h-auto relative z-10"
                />
              </div>
              <div className="mt-8 relative z-10">
                <p className="text-gray-400 italic text-sm">
                  "Traveling through time isn't about changing the past—it's
                  about realizing how infinite the present truly is"
                </p>
                <p className="text-gray-500 mt-2 text-sm">-Alan Lightman</p>
              </div>
            </motion.div>
          </div>

          {/* Social Media Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
            <div className="flex justify-center gap-8 flex-wrap">
              <a
                href="https://www.facebook.com/ItIsOnn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#12121a] rounded-xl px-6 py-4 hover:bg-[#1c1c24] transition-all duration-300 border border-white/5"
              >
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/jeclat.jgec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#12121a] rounded-xl px-6 py-4 hover:bg-[#1c1c24] transition-all duration-300 border border-white/5"
              >
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="mailto:admin@jeclat2k25.in"
                className="flex items-center gap-3 bg-[#12121a] rounded-xl px-6 py-4 hover:bg-[#1c1c24] transition-all duration-300 border border-white/5"
              >
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
                <span>Gmail</span>
              </a>

              {/* <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#12121a] rounded-xl px-6 py-4 hover:bg-[#1c1c24] transition-all duration-300 border border-white/5"
              >
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                <span>Twitter</span>
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
