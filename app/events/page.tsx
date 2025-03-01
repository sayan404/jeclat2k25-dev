"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import CategoryFilter from "../components/CategoryFilter";

const events = [
  // Day 1
  {
    id: 1,
    title: "Inauguration",
    image: "https://picsum.photos/204/204",
    description: "Opening ceremony of JECLAT 2025",
    date: "2025-03-31",
    time: "6:00 PM - 6:30 PM",
    venue: "Old Auditorium",
    category: "Day 1",
  },
  {
    id: 2,
    title: "Cultural Performance",
    image: "https://picsum.photos/204/204",
    description: "Cultural performances and celebrations",
    date: "2025-03-31",
    time: "6:30 PM - 8:00 PM",
    venue: "Old Auditorium",
    category: "Day 1",
  },
  {
    id: 3,
    title: "Jyoti's Performance",
    image: "https://picsum.photos/204/204",
    description: "Special performance by Jyoti",
    date: "2025-03-31",
    time: "8:00 PM - 9:00 PM",
    venue: "Old Auditorium",
    category: "Day 1",
  },
  {
    id: 4,
    title: "Roadies Interview",
    image: "https://picsum.photos/204/204",
    description: "Interview session for Roadies",
    date: "2025-03-31",
    time: "9:00 PM - 10:00 PM",
    venue: "Old Auditorium",
    category: "Day 1",
  },
  // Day 2
  {
    id: 5,
    title: "T-Shirt Painting",
    image: "https://picsum.photos/204/204",
    description: "Creative t-shirt painting competition",
    date: "2025-04-01",
    time: "11:00 AM - 3:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
  },
  {
    id: 6,
    title: "Mock Auction Prelims",
    image: "https://picsum.photos/204/204",
    description: "Preliminary rounds of Mock Auction",
    date: "2025-04-01",
    time: "4:00 PM - 5:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
  },
  {
    id: 7,
    title: "Malle Prelims",
    image: "https://picsum.photos/204/204",
    description: "Preliminary rounds of Malle",
    date: "2025-04-01",
    time: "5:00 PM - 6:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
  },
  {
    id: 8,
    title: "Treasure Hunt Prelims",
    image: "https://picsum.photos/204/204",
    description: "Preliminary rounds of Treasure Hunt",
    date: "2025-04-01",
    time: "6:00 PM - 7:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
  },
  {
    id: 9,
    title: "Made For Each Other",
    image: "https://picsum.photos/204/204",
    description: "Couple competition event",
    date: "2025-04-01",
    time: "7:00 PM - 8:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
  },
  {
    id: 10,
    title: "CS-GO",
    image: "https://picsum.photos/204/204",
    description: "Counter-Strike: Global Offensive tournament",
    date: "2025-04-01",
    time: "8:00 PM - 9:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
  },
  {
    id: 11,
    title: "Mock Auction Final",
    image: "https://picsum.photos/204/204",
    description: "Final round of Mock Auction",
    date: "2025-04-01",
    time: "9:00 PM - 10:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
  },
  // Day 3
  {
    id: 12,
    title: "Wall Painting",
    image: "https://picsum.photos/204/204",
    description: "Creative wall painting competition",
    date: "2025-04-02",
    time: "10:00 AM - 3:00 PM",
    venue: "Campus",
    category: "Day 3",
  },
  {
    id: 13,
    title: "Antakshari Prelims",
    image: "https://picsum.photos/204/204",
    description: "Preliminary rounds of Antakshari",
    date: "2025-04-02",
    time: "3:30 PM - 4:30 PM",
    venue: "Old Auditorium",
    category: "Day 3",
  },
  // Continue with remaining Day 3 events
  {
    id: 14,
    title: "Pen Your Love",
    image: "https://picsum.photos/204/204",
    description: "Creative writing competition",
    date: "2025-04-02",
    time: "4:30 PM - 5:30 PM",
    venue: "Old Auditorium",
    category: "Day 3",
  },
  {
    id: 15,
    title: "Quiz",
    image: "https://picsum.photos/204/204",
    description: "General knowledge quiz competition",
    date: "2025-04-02",
    time: "6:00 PM - 7:00 PM",
    venue: "Old Auditorium",
    category: "Day 3",
  },
  {
    id: 16,
    title: "Band Blast",
    image: "https://picsum.photos/204/204",
    description: "Live band performance competition",
    date: "2025-04-02",
    time: "7:00 PM - 8:30 PM",
    venue: "Old Auditorium",
    category: "Day 3",
  },
  {
    id: 17,
    title: "Fashion Show",
    image: "https://picsum.photos/204/204",
    description: "Glamorous fashion show event",
    date: "2025-04-02",
    time: "8:30 PM - 10:00 PM",
    venue: "Old Auditorium",
    category: "Day 3",
  },
  // Day 4
  {
    id: 18,
    title: "Treasure Hunt",
    image: "https://picsum.photos/204/204",
    description: "Campus-wide treasure hunt competition",
    date: "2025-04-03",
    time: "11:00 AM - 4:00 PM",
    venue: "Campus",
    category: "Day 4",
  },
  {
    id: 19,
    title: "Roadies",
    image: "https://picsum.photos/204/204",
    description: "Adventure and challenge based competition",
    date: "2025-04-03",
    time: "11:00 AM - 4:00 PM",
    venue: "Campus",
    category: "Day 4",
  },
  {
    id: 20,
    title: "Malle Final",
    image: "https://picsum.photos/204/204",
    description: "Final round of Malle competition",
    date: "2025-04-03",
    time: "5:00 PM - 6:00 PM",
    venue: "Old Auditorium",
    category: "Day 4",
  },
  {
    id: 21,
    title: "Antakshari Final",
    image: "https://picsum.photos/204/204",
    description: "Final round of Antakshari",
    date: "2025-04-03",
    time: "6:00 PM - 7:00 PM",
    venue: "Old Auditorium",
    category: "Day 4",
  },
  {
    id: 22,
    title: "J-Factor",
    image: "https://picsum.photos/204/204",
    description: "Talent showcase competition",
    date: "2025-04-03",
    time: "7:00 PM - 9:00 PM",
    venue: "Old Auditorium",
    category: "Day 4",
  },
  {
    id: 23,
    title: "Prom Night",
    image: "https://picsum.photos/204/204",
    description: "Formal dance and social gathering",
    date: "2025-04-03",
    time: "9:00 PM - 10:00 PM",
    venue: "Old Auditorium",
    category: "Day 4",
  },
  // Day 5
  {
    id: 24,
    title: "Treasure Hunt",
    image: "https://picsum.photos/204/204",
    description: "Final day of treasure hunt",
    date: "2025-04-04",
    time: "11:00 AM - 4:00 PM",
    venue: "Campus",
    category: "Day 5",
  },
  {
    id: 25,
    title: "Roadies Final Event",
    image: "https://picsum.photos/204/204",
    description: "Final round of Roadies competition",
    date: "2025-04-04",
    time: "5:00 PM - 6:00 PM",
    venue: "Old Auditorium",
    category: "Day 5",
  },
  {
    id: 26,
    title: "Drama",
    image: "https://picsum.photos/204/204",
    description: "Theatrical performance competition",
    date: "2025-04-04",
    time: "6:30 PM - 8:00 PM",
    venue: "Old Auditorium",
    category: "Day 5",
  },
  {
    id: 27,
    title: "Wavezz Night",
    image: "https://picsum.photos/204/204",
    description: "Musical night celebration",
    date: "2025-04-04",
    time: "8:00 PM - 10:00 PM",
    venue: "Old Auditorium",
    category: "Day 5",
  },
  // Day 6
  {
    id: 28,
    title: "Reunion",
    image: "https://picsum.photos/204/204",
    description: "Alumni reunion event",
    date: "2025-04-05",
    time: "11:00 AM - 5:00 PM",
    venue: "Oval",
    category: "Day 6",
  },
  {
    id: 29,
    title: "Calliphony Night",
    image: "https://picsum.photos/204/204",
    description: "Musical performance night",
    date: "2025-04-05",
    time: "6:00 PM - 10:00 PM",
    venue: "Oval",
    category: "Day 6",
  },
  // Day 7
  {
    id: 30,
    title: "Social Night",
    image: "https://picsum.photos/204/204",
    description: "Final night of celebrations",
    date: "2025-04-06",
    time: "6:00 PM - 10:00 PM",
    venue: "Oval",
    category: "Day 7",
  },
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
          <div className="text-center mb-8">
            <p className="text-white text-4xl font-highbright font-bold mb-1 space-x-4">
              <span className="text-orange-yellow">Events</span>
            </p>
            <div className="space-y-1">
              <h2 className="text-transparent bg-clip-text bg-white font-sugarPeachy text-xl  tracking-wider">
                It&apos;s time to showcase your creative calibre
              </h2>
            </div>
          </div>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <div className="relative w-full max-w-7xl font-sugarPeachy">
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
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {filteredEvents.map((_, index) => (
                <button
                  key={index + Math.random() + Date.now()}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-orange-yellow to-blue-400"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <p className="font-sugarPeachy text-white/70 text-sm">
              {currentIndex + 1} / {filteredEvents.length}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
