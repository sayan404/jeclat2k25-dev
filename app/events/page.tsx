"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import CategoryFilter from "../components/CategoryFilter";

const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    image: "https://picsum.photos/204/204",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-05-15",
    category: "Music",
  },
  {
    id: 2,
    title: "Tech Conference",
    image: "https://picsum.photos/204/204",
    description:
      "Exploring the latest in technology and innovation. Exploring the latest in technology and innovation. Exploring the latest in technology and innovation",
    date: "2024-05-15",
    category: "Technology",
  },
  {
    id: 3,
    title: "Food & Wine Expo",
    image: "https://picsum.photos/204/204",
    description:
      "Taste the finest cuisines and wines from around the world. Taste the finest cuisines and wines from around the world. Taste the finest cuisines and wines from around the world",
    date: "2024-05-15",
    category: "Food & Wine",
  },
  {
    id: 1,
    title: "Summer Music Festival",
    image: "https://picsum.photos/204/204",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-05-15",
    category: "Music",
  },
  {
    id: 2,
    title: "Tech Conference",
    image: "https://picsum.photos/204/204",
    description:
      "Exploring the latest in technology and innovation. Exploring the latest in technology and innovation. Exploring the latest in technology and innovation",
    date: "2024-05-15",
    category: "Technology",
  },
  {
    id: 3,
    title: "Food & Wine Expo",
    image: "https://picsum.photos/204/204",
    description:
      "Taste the finest cuisines and wines from around the world. Taste the finest cuisines and wines from around the world. Taste the finest cuisines and wines from around the world",
    date: "2024-05-15",
    category: "Food & Wine",
  },
  {
    id: 1,
    title: "Summer Music Festival",
    image: "https://picsum.photos/204/204",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-05-15",
    category: "Music",
  },
  {
    id: 2,
    title: "Tech Conference",
    image: "https://picsum.photos/204/204",
    description:
      "Exploring the latest in technology and innovation. Exploring the latest in technology and innovation. Exploring the latest in technology and innovation",
    date: "2024-05-15",
    category: "Technology",
  },
  {
    id: 3,
    title: "Food & Wine Expo",
    image: "https://picsum.photos/204/204",
    description:
      "Taste the finest cuisines and wines from around the world. Taste the finest cuisines and wines from around the world. Taste the finest cuisines and wines from around the world",
    date: "2024-05-15",
    category: "Food & Wine",
  },
  {
    id: 1,
    title: "Summer Music Festival",
    image: "https://picsum.photos/204/204",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-05-15",
    category: "Music",
  },
  {
    id: 2,
    title: "Tech Conference",
    image: "https://picsum.photos/204/204",
    description:
      "Exploring the latest in technology and innovation. Exploring the latest in technology and innovation. Exploring the latest in technology and innovation",
    date: "2024-05-15",
    category: "Technology",
  },
  {
    id: 3,
    title: "Food & Wine Expo",
    image: "https://picsum.photos/204/204",
    description:
      "Taste the finest cuisines and wines from around the world. Taste the finest cuisines and wines from around the world. Taste the finest cuisines and wines from around the world",
    date: "2024-05-15",
    category: "Food & Wine",
  },
  {
    id: 1,
    title: "Summer Music Festival",
    image: "https://picsum.photos/204/204",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-05-15",
    category: "Music",
  },
  {
    id: 2,
    title: "Tech Conference",
    image: "https://picsum.photos/204/204",
    description:
      "Exploring the latest in technology and innovation. Exploring the latest in technology and innovation. Exploring the latest in technology and innovation",
    date: "2024-05-15",
    category: "Technology",
  },
  {
    id: 3,
    title: "Food & Wine Expo",
    image: "https://picsum.photos/204/204",
    description:
      "Taste the finest cuisines and wines from around the world. Taste the finest cuisines and wines from around the world. Taste the finest cuisines and wines from around the world",
    date: "2024-05-15",
    category: "Food & Wine",
  },
  {
    id: 1,
    title: "Summer Music Festival",
    image: "https://picsum.photos/204/204",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-05-15",
    category: "Music",
  },
  {
    id: 2,
    title: "Tech Conference",
    image: "https://picsum.photos/204/204",
    description:
      "Exploring the latest in technology and innovation. Exploring the latest in technology and innovation. Exploring the latest in technology and innovation",
    date: "2024-05-15",
    category: "Technology",
  },
  {
    id: 3,
    title: "Food & Wine Expo",
    image: "https://picsum.photos/204/204",
    description:
      "Taste the finest cuisines and wines from around the world. Taste the finest cuisines and wines from around the world. Taste the finest cuisines and wines from around the world",
    date: "2024-05-15",
    category: "Food & Wine",
  },
  // Add more events as needed
];

export default function EventsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(events.map((event) => event.category)));
  }, []);

  // Filter events based on selected category
  const filteredEvents = useMemo(() => {
    if (!selectedCategory) return events;
    return events.filter((event) => event.category === selectedCategory);
  }, [selectedCategory, events]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredEvents.length - 1 : prevIndex - 1
    );
  };

  // Reset current index when category changes
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  return (
    <main className="max-h-screen bg-black relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/event_page_bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
        <Header />
      <div className="relative z-20 flex justify-center items-center mt-10">

        <div className="flex flex-col justify-center items-center min-h-screen w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <div className="relative w-full max-w-7xl">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredEvents.map((event) => (
                  <div
                    key={event.id + Math.random() + Date.now()}
                    className="w-full flex-shrink-0 px-0 sm:px-4"
                  >
                    <EventCard
                      {...event}
                      onNext={nextSlide}
                      onPrev={prevSlide}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-1">
            {filteredEvents.map((_, index) => (
              <button
                key={index + Math.random() + Date.now()}
                className={`h-1 sm:h-1.5 w-1 sm:w-5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-110"
                    : "bg-gray-700/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
