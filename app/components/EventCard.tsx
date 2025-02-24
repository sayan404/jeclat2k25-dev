import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  title: string;
  image: string;
  date?: string;
  description?: string;
  category?: string;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function EventCard({
  title,
  image,
  date,
  description,
  category,
  onNext,
  onPrev,
}: EventCardProps) {
  return (
    <div className="relative group">
      {/* Animated border gradient */}
      <div className="absolute rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 "></div>

      <div className="relative backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl mx-auto mt-9">
        {/* Enhanced glass effect and border elements */}
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="absolute inset-0 border-2 border-white/10 rounded-xl" />
        <div className="absolute inset-[2px] border border-white/5 rounded-xl" />

        <div className="relative flex  flex-col lg:flex-row rounded-xl">
          <div className="w-full rounded lg:w-1/2  relative h-[200px] sm:h-[300px] lg:h-[400px] border-b lg:border-b-0 lg:border-r border-gray-700/30">
            <Image
              src={image ? image : "https://picsum.photos/204/204"}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-cyan-500 backdrop-blur-md rounded-full text-sm text-white border border-white/10">
                {category}
              </span>
            </div>

            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                EVENT
              </h3>
              <p className="text-xl sm:text-2xl text-gray-300 mt-2 font-light">
                IMAGE
              </p>
            </div>

            {/* Left Navigation Arrow */}
            <button
              onClick={onPrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 hover:scale-110 transition-transform bg-black/10 backdrop-blur-md p-2 rounded-full border border-white/10 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Right Navigation Arrow - Visible on mobile */}
            <button
              onClick={onNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:scale-110 transition-transform bg-black/10 backdrop-blur-md p-2 rounded-full border border-white/10 z-10 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-4 flex flex-col bg-gray-900/40 backdrop-blur-md text-white">
            <div className="flex-1">
              <h4 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 pb-2 mb-4 border-b border-gray-700/30">
                ABOUT
              </h4>
              <p className="text-gray-100 leading-relaxed text-sm sm:text-base">
                {description}
              </p>
            </div>

            <div className="mt-6 lg:mt-8">
              <h4 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 pb-2 mb-4 border-b border-gray-700/30">
                Date
              </h4>
              <div className="space-y-2">
                <p className="text-gray-100 text-base sm:text-lg">{date}</p>
              </div>
            </div>

            <div className="mt-6 lg:mt-8">
              <h4 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 pb-2 mb-4 border-b border-gray-700/30">
                CONTACT
              </h4>
              <div className="space-y-3">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
              </div>
            </div>

            {/* Right Arrow - Only visible on larger screens */}
            <button
              onClick={onNext}
              className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform bg-black/10 backdrop-blur-md p-2 rounded-full border border-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}