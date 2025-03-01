"use client";

import { useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import StarField from "@/components/ui/StarField";

export default function ContactPage() {
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
        </div>
      </div>
    </div>
  );
}
