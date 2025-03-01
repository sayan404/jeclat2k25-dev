"use client";

import { useState } from "react";
import Header from "../components/Header";

interface VideoEvent {
  id: string;
  title: string;
  date: string;
  youtubeUrl: string;
  thumbnailUrl: string;
}

// Fixed data with correct URL mapping
const pastEvents: VideoEvent[] = [
  {
    id: "1",
    title: "JECLAT 2K24",
    date: "2024-12-10",
    youtubeUrl: "https://www.youtube.com/watch?v=e-LnWZhW3Ck",
    thumbnailUrl: "https://img.youtube.com/vi/e-LnWZhW3Ck/maxresdefault.jpg",
  },
  {
    id: "2",
    title: "JECLAT 2K23",
    date: "2023-12-10",
    youtubeUrl: "https://www.youtube.com/watch?v=LIVV85YfwTQ",
    thumbnailUrl: "https://img.youtube.com/vi/LIVV85YfwTQ/maxresdefault.jpg",
  },
  {
    id: "3",
    title: "JECLAT 2K22",
    date: "2022-12-10",
    youtubeUrl: "https://www.youtube.com/watch?v=cQc-4M6KWHc",
    thumbnailUrl: "https://img.youtube.com/vi/cQc-4M6KWHc/maxresdefault.jpg",
  },
  // {
  //   id: "4",
  //   title: "JECLAT 2K20",
  //   date: "2021-12-10",
  //   youtubeUrl: "https://www.youtube.com/watch?v=qDkEhgVGtBg",
  //   thumbnailUrl: "https://img.youtube.com/vi/qDkEhgVGtBg/maxresdefault.jpg",
  // },
  {
    id: "5",
    title: "JECLAT 2K19",
    date: "2019-12-10",
    youtubeUrl: "https://www.youtube.com/watch?v=xEem_LTqRXs",
    thumbnailUrl: "https://img.youtube.com/vi/xEem_LTqRXs/maxresdefault.jpg",
  },
  {
    id: "6",
    title: "JECLAT 2K18",
    date: "2018-12-10",
    youtubeUrl: "https://www.youtube.com/watch?v=5HtPuIoEsFU",
    thumbnailUrl: "https://img.youtube.com/vi/5HtPuIoEsFU/maxresdefault.jpg",
  },
  {
    id: "7",
    title: "JECLAT 2K17",
    date: "2017-12-10",
    youtubeUrl: "https://www.youtube.com/watch?v=rjJb2f8HpXs",
    thumbnailUrl: "https://img.youtube.com/vi/rjJb2f8HpXs/maxresdefault.jpg",
  },
];

export default function ArchivePage() {
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const years = [
    ...new Set(
      pastEvents.map((event) => new Date(event.date).getFullYear().toString())
    ),
  ];

  const filteredEvents =
    selectedYear === "all"
      ? pastEvents
      : pastEvents.filter(
          (event) =>
            new Date(event.date).getFullYear().toString() === selectedYear
        );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="twinkle"></div>
        {/* Add multiple shooting stars */}
        <div
          className="shooting-star"
          style={{ top: "20%", left: "30%" }}
        ></div>
        <div
          className="shooting-star"
          style={{ top: "60%", left: "70%", animationDelay: "1s" }}
        ></div>
        <div
          className="shooting-star"
          style={{ top: "80%", left: "20%", animationDelay: "2s" }}
        ></div>
      </div>

      {/* Add relative positioning to keep content above stars */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8 pt-24">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold font-highbright mb-4 bg-clip-text text-orange-yellow">
              Archive
            </h1>
            {/* <p className=" text-white text-4xl font-highbright font-bold mb-1 space-x-4">
              <span className="text-md"></span>
            </p> */}
            <div className="space-y-1">
              <h2 className="text-transparent bg-clip-text bg-white font-sugarPeachy text-xl  tracking-wider">
                Journey through the history of JECLAT
              </h2>
            </div>
          </div>

          <div className="mb-6 relative">
            {/* Enhanced mobile dropdown */}
            <div className="md:hidden mb-8">
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-[100%] appearance-none bg-gray-800/50 backdrop-blur-sm text-white py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                >
                  <option value="all" className="text-white max-w-[50%]">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                    className="w-5 h-5 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Timeline for medium and larger screens */}
            <div className="hidden md:block relative">
              <div className="flex justify-center relative gap-4">
                <button
                  onClick={() => setSelectedYear("all")}
                  className={`
                    px-6 py-2 rounded-full text-sm
                    ${
                      selectedYear === "all"
                        ? "bg-blue-200 text-black"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }
                    transition-all duration-300
                  `}
                >
                  All Years
                </button>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`
                      px-6 py-2 rounded-full text-sm
                      ${
                        selectedYear === year
                          ? "bg-gray-800 text-white"
                          : "bg-gray-800/50 text-white hover:bg-gray-700"
                      }
                      transition-all duration-300
                    `}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Video grid with enhanced styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl 
                  transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                  border border-purple-500/30"
              >
                <a
                  href={event.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.thumbnailUrl}
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/40">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>

                <div className="p-6">
                  <h3
                    className="text-2xl font-bold mb-2 bg-clip-text text-transparent 
                    bg-gradient-to-r from-purple-400 to-pink-500"
                  >
                    {event.title}
                  </h3>
                  <p className="text-gray-400 flex items-center">
                    {/* <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg> */}
                    {/* {new Date(event.date).toLocaleDateString()} */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
