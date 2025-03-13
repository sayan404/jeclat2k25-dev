"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import CategoryFilter from "../components/CategoryFilter";
import CosmicLoader from "../components/ui/CosmicLoader";
import init from "../assets/events/init.jpg";
import cultural from "../assets/events/cultural.jpg";
import jyoti from "../assets/events/jyoti.jpg";
import flashmob from "../assets/events/flashmob.png";
import elementary from "../assets/events/elementary.jpg";
import selfie from "../assets/events/selfie.png";
import roadies from "../assets/events/roadies.png";
import mockauction from "../assets/events/Mock-Auction.jpg";
import malle from "../assets/events/malle.jpg";
import csGo from "../assets/events/cs-go.png";
import fashion from "../assets/events/fashion.png";
import JFactor from "../assets/events/J-Factor.jpg";
import memesis from "../assets/events/memesis.jpg";
import TShirt from "../assets/events/t-shirt.png";
import wallPainting from "../assets/events/wall-painting.png";
import treasurehunt from "../assets/events/treasure-hunt.jpg";
import madeforeacheother from "../assets/events/Made_for_Each_Other.png";
import antaksari from "../assets/events/antaksari.jpg";
import creativewritting from "../assets/events/creative-writting.jpg";
import quiz from "../assets/events/quiz.png";
import bandblast from "../assets/events/band-blast.png";
import prom from "../assets/events/prom.png";
import drama from "../assets/events/drama.jpg";
import calliphony from "../assets/events/caliphony.jpg";
import reunion from "../assets/events/reunion.png";
import social from "../assets/events/social.jpg";
import waves from "../assets/events/waves.jpg";

const events = [
  // Pre Events
  {
    id: 31,
    title: "Flash Mob",
    image: flashmob,
    description: "Street dance performance to promote JECLAT",
    date: "2024-03-16",
    time: "TBA",
    venue: "Campus",
    category: "Pre Events",
    coordinator: "CORE COMMITTEE",
    domain: "pre events",
  },
  {
    id: 32,
    title: "Elementary",
    image: elementary,
    description: "Elementary: Unravel, Crack, Conquerx",
    date: "2024-03-24",
    time: "Until March 31",
    venue: "Campus",
    category: "Pre Events",
    coordinator: "CORE COMMITTEE",
    domain: "pre events",
  },
  {
    id: 33,
    title: "Selfie Contest",
    image: selfie,
    description: "Online selfie competition",
    date: "2024-03-24",
    time: "Until March 31",
    venue: "Online",
    category: "Pre Events",
    coordinator: "CORE COMMITTEE",
    domain: "pre events",
  },
  {
    id: 34,
    title: "Memesis",
    image: memesis,
    description: "Meme creation competition",
    date: "2024-03-24",
    time: "Until March 31",
    venue: "Online",
    category: "Pre Events",
    coordinator: "CORE COMMITTEE",
    domain: "pre events",
  },
  // Day 1
  {
    id: 1,
    title: "Inauguration",
    image: init,
    description: "Opening ceremony of JECLAT 2025",
    date: "2025-03-31",
    time: "6:00 PM - 6:30 PM",
    venue: "Old Auditorium",
    category: "Day 1",
    coordinator: "CORE COMMITTEE",
    domain: "events",
  },
  {
    id: 2,
    title: "Cultural Performance",
    image: cultural,
    description: "Cultural performances and celebrations",
    date: "2025-03-31",
    time: "6:30 PM - 8:00 PM",
    venue: "Old Auditorium",
    category: "Day 1",
    coordinator: "CORE COMMITTEE",
    domain: "events",
  },
  {
    id: 3,
    title: "Jyoti's Performance",
    image: jyoti,
    description: "Special performance by Jyoti",
    date: "2025-03-31",
    time: "8:00 PM - 9:00 PM",
    venue: "Old Auditorium",
    category: "Day 1",
    coordinator: "Priya Mahato, Rajat Nandi",
    contact: "7029391071 , 8900352943",
    domain: "events",
  },
  {
    id: 4,
    title: "Roadies Interview",
    image: roadies,
    description: "Interview session for Roadies",
    date: "2025-03-31",
    time: "9:00 PM - 10:00 PM",
    venue: "Old Auditorium",
    category: "Day 1",
    coordinator: "Anup Sharma, Mahek Parvez",
    contact: "9475740532 , 8597530118",
    domain: "events",
  },
  // Day 2
  {
    id: 5,
    title: "T-Shirt Painting",
    image: TShirt,
    description: "Creative t-shirt painting competition",
    date: "2025-04-01",
    time: "11:00 AM - 3:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
    coordinator: "Priya Mahato, Dip Roy",
    contact: "7029391071 , 9749021886",
    domain: "events",
  },
  {
    id: 6,
    title: "Mock Auction Prelims",
    image: mockauction,
    description: "Preliminary rounds of Mock Auction",
    date: "2025-04-01",
    time: "4:00 PM - 5:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
    coordinator: "Sourav Ganguly, Malay Poulik",
    contact: "8918708847 , 7679185576",
    domain: "events",
  },
  {
    id: 7,
    title: "Malle Prelims",
    image: malle,
    description: "Preliminary rounds of Malle",
    date: "2025-04-01",
    time: "5:00 PM - 6:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
    coordinator: "Abhigyan Prakash Singh, Paramita Saha",
    contact: "6290626866, 9614234324",
    domain: "events",
  },
  {
    id: 8,
    title: "Treasure Hunt Prelims",
    image: treasurehunt,
    description: "Preliminary rounds of Treasure Hunt",
    date: "2025-04-01",
    time: "6:00 PM - 7:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
    coordinator: "Atri Sukul, Spandan Bhattacharya, Om Kumar Sha",
    contact: "8900519836. 9330184706, 6290889507",
    domain: "events",
  },
  {
    id: 9,
    title: "Made For Each Other",
    image: madeforeacheother,
    description: "Student competition tests compatibility & skills.",
    date: "2025-04-01",
    time: "7:00 PM - 8:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
    coordinator: "Souvik Mondal, Liza Goswami",
    contact: "9883164350, 9832675856",
    domain: "events",
  },
  {
    id: 10,
    title: "CS-GO",
    image: csGo,
    description: "Counter-Strike: Global Offensive tournament",
    date: "2025-04-01",
    time: "8:00 PM - 9:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
    coordinator: "Nilesh Kumar Hansda, Choyan Biswas",
    contact: "9547944653, 8436381621",
    domain: "events",
  },
  {
    id: 11,
    title: "Mock Auction Final",
    image: mockauction,
    description: "Final round of Mock Auction",
    date: "2025-04-01",
    time: "9:00 PM - 10:00 PM",
    venue: "Old Auditorium",
    category: "Day 2",
    coordinator: "Sourav Ganguly, Malay Poulik",
    contact: "8918708847 , 7679185576",
    domain: "events",
  },
  // Day 3
  {
    id: 12,
    title: "Wall Painting",
    image: wallPainting,
    description: "Creative wall painting competition",
    date: "2025-04-02",
    time: "10:00 AM - 3:00 PM",
    venue: "Campus",
    category: "Day 3",
    coordinator: "Pankaj Barman , Priya Mahato",
    contact: "8101480752, 7029391071",
    domain: "events",
  },
  {
    id: 13,
    title: "Antakshari Prelims",
    image: antaksari,
    description: "Preliminary rounds of Antakshari",
    date: "2025-04-02",
    time: "3:00 PM - 4:00 PM",
    venue: "Old Auditorium",
    category: "Day 3",
    coordinator: "Rohit Mondal, Abhirup Banerjee",
    contact: "9735245251, 9883915504",
    domain: "events",
  },
  {
    id: 14,
    title: "Pen Your Love",
    image: creativewritting,
    description: "Creative writing competition",
    date: "2025-04-02",
    time: "4:30 PM - 5:30 PM",
    venue: "Old Auditorium",
    category: "Day 3",
    coordinator: "Arijit Saha, Aditi Pal",
    contact: "8617673489, 8902797178",
    domain: "events",
  },
  {
    id: 15,
    title: "Precognition",
    image: quiz,
    description: "General knowledge quiz competition",
    date: "2025-04-02",
    time: "6:00 PM - 7:00 PM",
    venue: "Old Auditorium",
    category: "Day 3",
    coordinator: "Uttaran Kundu, Subham Kar",
    contact: "9064894622, 8670338017",
    domain: "events",
  },
  {
    id: 16,
    title: "Band Blast",
    image: bandblast,
    description: "Live band performance competition",
    date: "2025-04-02",
    time: "7:00 PM - 8:30 PM",
    venue: "Old Auditorium",
    category: "Day 3",
    coordinator: "Souvik Mondal",
    contact: "9883164350",
    domain: "events",
  },
  {
    id: 17,
    title: "Fashion Show",
    image: fashion,
    description: "Glamorous fashion show event",
    date: "2025-04-02",
    time: "8:30 PM - 10:00 PM",
    venue: "Old Auditorium",
    category: "Day 3",
    coordinator: "Bhumika Roy, Sagnik Banerjee, Pankaj Barman",
    contact: "7864008846, 7044709722, 8101480752",
    domain: "events",
  },
  // Day 4
  {
    id: 18,
    title: "Roadies",
    image: roadies,
    description: "Adventure and challenge based competition",
    date: "2025-04-03",
    time: "11:00 AM - 4:00 PM",
    venue: "Campus",
    category: "Day 4",
    coordinator: "Anup Sharma, Mahek Parvez",
    contact: "9475740532, 8597530118",
    domain: "events",
  },
  {
    id: 19,
    title: "Clairvoyance",
    image: quiz,
    description: "General knowledge quiz competition",
    date: "2025-04-03",
    time: "11:00 AM - 4:00 PM",
    venue: "Campus",
    category: "Day 4",
    coordinator: "Spandan Bhattacharya, Ankit Sengupta",
    contact: "9330184706, 9679409501",
    domain: "events",
  },
  {
    id: 20,
    title: "Malle Final",
    image: malle,
    description: "Final round of Malle competition",
    date: "2025-04-03",
    time: "5:00 PM - 6:00 PM",
    venue: "Old Auditorium",
    category: "Day 4",
    coordinator: "Abhigyan Prakash Singh, Paramita Saha",
    contact: "6290626866, 9614234324",
    domain: "events",
  },
  {
    id: 21,
    title: "Antakshari Final",
    image: antaksari,
    description: "Final round of Antakshari",
    date: "2025-04-03",
    time: "6:00 PM - 7:00 PM",
    venue: "Old Auditorium",
    category: "Day 4",
    coordinator: "Rohit Mondal, Abhirup Banerjee",
    contact: "9735245251, 9883915504",
    domain: "events",
  },
  {
    id: 22,
    title: "J-Factor",
    image: JFactor,
    description: "Talent showcase competition",
    date: "2025-04-03",
    time: "7:00 PM - 9:00 PM",
    venue: "Old Auditorium",
    category: "Day 4",
    coordinator: "Spandan Bhattacharya, Ananya Mondal",
    contact: "9330184706, 7866954016",
    domain: "events",
  },
  {
    id: 23,
    title: "Prom Night",
    image: prom,
    description: "Formal dance and social gathering",
    date: "2025-04-03",
    time: "9:00 PM - 10:00 PM",
    venue: "Old Auditorium",
    category: "Day 4",
    coordinator: "CORE COMMITTEE",
    domain: "events",
  },
  // Day 5
  {
    id: 24,
    title: "Treasure Hunt",
    image: treasurehunt,
    description: "Final day of treasure hunt",
    date: "2025-04-04",
    time: "11:00 AM - 4:00 PM",
    venue: "Campus",
    category: "Day 5",
    coordinator: "Atri Sukul, Spandan Bhattacharya, Om Kumar Sha",
    contact: "8900519836, 9330184706, 6290889507",
    domain: "events",
  },
  {
    id: 25,
    title: "Roadies Final Event",
    image: roadies,
    description: "Final round of Roadies competition",
    date: "2025-04-04",
    time: "5:00 PM - 6:00 PM",
    venue: "Old Auditorium",
    category: "Day 5",
    coordinator: "Anup Sharma, Mahek Parvez",
    contact: "9475740532, 8597530118",
    domain: "events",
  },
  {
    id: 26,
    title: "Drama",
    image: drama,
    description: "Theatrical performance competition",
    date: "2025-04-04",
    time: "6:30 PM - 8:00 PM",
    venue: "Old Auditorium",
    category: "Day 5",
    coordinator: "Sumit Majumder, Mahek Parvez",
    contact: "7739164949, 8597530118",
    domain: "events",
  },
  {
    id: 27,
    title: "Wavezz Night",
    image: waves,
    description:
      "The grand dance night featuring electrifying performances.",
    date: "2025-04-04",
    time: "8:00 PM - 10:00 PM",
    venue: "Old Auditorium",
    category: "Day 5",
    coordinator: "CORE COMMITTEE",
    domain: "events",
  },
  // Day 6
  {
    id: 28,
    title: "Reunion",
    image: reunion,
    description: "Alumni reunion event",
    date: "2025-04-05",
    time: "11:00 AM - 5:00 PM",
    venue: "Oval",
    category: "Day 6",
    coordinator: "CORE COMMITTEE",
    domain: "events",
  },
  {
    id: 29,
    title: "Calliphony Night",
    image: calliphony,
    description: "Musical performance night",
    date: "2025-04-05",
    time: "6:00 PM - 10:00 PM",
    venue: "Oval",
    category: "Day 6",
    coordinator: "CORE COMMITTEE",
    domain: "events",
  },
  // Day 7
  {
    id: 30,
    title: "Social Night",
    image: social,
    description: "Final night of celebrations",
    date: "2025-04-06",
    time: "6:00 PM - 10:00 PM",
    venue: "Oval",
    category: "Day 7",
    coordinator: "CORE COMMITTEE",
    domain: "events",
  },
];

export default function EventsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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
    <>
      <CosmicLoader isVisible={isLoading} />
      <main className="lg:max-h-screen md:max-h-screen bg-black relative overflow-hidden">
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
            <div className="text-center mb-2">
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
                      className="w-full flex-shrink-0 px-0  sm:px-4 sm:h-[400px]"
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
              <div className="flex justify-center space-x-2">
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
    </>
  );
}
