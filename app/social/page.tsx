"use client";

import { useState } from "react";
import Header from "../components/Header";

interface Artist {
  id: number;
  name: string;
  image: string;
  performance_year: number;
  category: string;
  description: string;
  social_links?: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

const ARTISTS_DATA: Artist[] = [
  {
    id: 2,
    name: "Mohammed Irfan",
    image: "/assets/mohammedirfan.jpg",
    performance_year: 2023,
    category: "Music",
    description:
      "Renowned Bollywood playback singer known for his soulful voice and hit songs in multiple Indian languages",
    // social_links: {
    //   instagram: "https://instagram.com/whenchaimet",
    //   youtube: "https://youtube.com/whenchaimet",
    // },
  },
  {
    id: 3,
    name: "Ashes Band",
    image: "/assets/ashes-band.jpg",
    performance_year: 2023,
    category: "Music",
    description:
      "Alternative rock band from Kolkata blending Bengali and English lyrics with powerful rock instrumentals",
    // social_links: {
    //   instagram: "https://instagram.com/agamband",
    //   youtube: "https://youtube.com/agamband",
    // },
  },
  {
    id: 4,
    name: "Anupam Roy Band",
    image: "/assets/anupam-roy-band.jpg",
    performance_year: 2022,
    category: "Music",
    description:
      "Popular Bengali singer-songwriter and composer known for his meaningful lyrics and contemporary folk-rock style",
    // social_links: {
    //   instagram: "https://instagram.com/thaikkudambridge",
    //   youtube: "https://youtube.com/thaikkudambridge",
    // },
  },
  {
    id: 5,
    name: "Anand Bhaskar Collective",
    image: "/assets/anand-bhaskar-collective.jpg",
    performance_year: 2022,
    category: "Music",
    description:
      "Mumbai-based Hindi rock band combining classical Indian elements with alternative rock and progressive metal",
    // social_links: {
    //   instagram: "https://instagram.com/anandbhaskar",
    //   youtube: "https://youtube.com/anandbhaskarcollective",
    // },
  },
  {
    id: 6,
    name: "Local Train",
    image: "/assets/local-train.jpg",
    performance_year: 2019,
    category: "Music",
    description:
      "Delhi-based Hindi rock band known for their powerful lyrics and energetic performances across the country",
    // social_links: {
    //   instagram: "https://instagram.com/jordindian",
    //   youtube: "https://youtube.com/jordindian",
    // },
  },
  {
    id: 7,
    name: "Fossils",
    image: "/assets/fossils-band.jpg",
    performance_year: 2019,
    category: "Band",
    description:
      "Iconic Bengali rock band from Kolkata, pioneers of Bengali rock music with numerous chart-topping albums",
    // social_links: {
    //   instagram: "https://instagram.com/kingsunited",
    //   youtube: "https://youtube.com/kingsunited",
    // },
  },
  {
    id: 8,
    name: "Progressive Brothers",
    image: "/assets/progressive-brothers.jpg",
    performance_year: 2018,
    category: "Music",
    description:
      "Electronic dance music duo known for their high-energy performances and innovative sound production",
    // social_links: {
    //   instagram: "https://instagram.com/mj5official",
    //   youtube: "https://youtube.com/mj5official",
    // },
  },
  {
    id: 9,
    name: "Akriti Kakkar",
    image: "/assets/akriti-kakkar.jpg",
    performance_year: 2018,
    category: "Singer Artist",
    description:
      "Versatile Bollywood playback singer with numerous hit songs and live performances across the globe",
    // social_links: {
    //   instagram: "https://instagram.com/mj5official",
    //   youtube: "https://youtube.com/mj5official",
    // },
  },
  {
    id: 10,
    name: "Fakira Band",
    image: "/assets/fakira-band.jpg",
    performance_year: 2018,
    category: "Band",
    description:
      "Folk-fusion band blending traditional Rajasthani folk music with contemporary arrangements and instruments",
    // social_links: {
    //   instagram: "https://instagram.com/mj5official",
    //   youtube: "https://youtube.com/mj5official",
    // },
  },
  {
    id: 11,
    name: "Lost Stories",
    image: "/assets/lost-stories.jpg",
    performance_year: 2017,
    category: "Music",
    description:
      "Electronic music production duo recognized globally for their unique blend of Indian elements with EDM",
    // social_links: {
    //   instagram: "https://instagram.com/mj5official",
    //   youtube: "https://youtube.com/mj5official",
    // },
  },
  {
    id: 12,
    name: "Antariksh Band",
    image: "/assets/antariksh-band.jpg",
    performance_year: 2017,
    category: "Band",
    description:
      "Progressive Hindi rock band known for their conceptual albums and thought-provoking musical narratives",
    // social_links: {
    //   instagram: "https://instagram.com/mj5official",
    //   youtube: "https://youtube.com/mj5official",
    // },
  },
  {
    id: 13,
    name: "Bolepur Bluez",
    image: "/assets/bolepur-bluez.jpg",
    performance_year: 2017,
    category: "Band",
    description:
      "Bengali folk-rock band creating unique fusion of Baul music with modern rock arrangements and storytelling",
    // social_links: {
    //   instagram: "https://instagram.com/mj5official",
    //   youtube: "https://youtube.com/mj5official",
    // },
  },
];

export default function SocialPage() {
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredArtists = ARTISTS_DATA.filter((artist) => {
    const yearMatch =
      selectedYear === "all" || artist.performance_year === selectedYear;
    const categoryMatch =
      selectedCategory === "all" || artist.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-black relative">
      {/* Starry Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars-container absolute inset-0">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <Header />

      {/* Filters */}
      <div className="container mx-auto px-4 py-6 pt-24 opacity-90">
        <h1 className= "text-4xl font-highbright text-center mb-2 text-orange-yellow" >Social Night</h1>
        <div className="flex flex-col justify-center items-center gap-6 mb-12">
          {/* Year Filter */}
          <div className="flex flex-col gap-3">
            {/* <h3 className="text-white text-lg font-medium text-center">Year</h3> */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedYear("all")}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedYear === "all"
                    ? "bg-gradient-to-r from-white to-blue-400 text-black"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                All Years
              </button>
              {[2023, 2022, 2019, 2018, 2017].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedYear === year
                      ? "bg-gradient-to-r from-white to-blue-400 text-black"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Artist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className="group relative h-[520px] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={artist.image}
                alt={artist.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Static Content (Always Visible) */}
                <h3 className="text-3xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-30px]">
                  {artist.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-300 mb-3 transform transition-transform duration-300 group-hover:translate-y-[-30px]">
                  <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                    {artist.category}
                  </span>
                  <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                    {artist.performance_year}
                  </span>
                </div>

                {/* Description (Appears on Hover) */}
                <p
                  className="text-gray-300 transform transition-all duration-300 
                  opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 
                  line-clamp-3"
                >
                  {artist.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
