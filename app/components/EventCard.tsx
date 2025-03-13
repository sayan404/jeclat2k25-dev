import Image from "next/image";
import { StaticImageData } from "next/image";
type EventCardProps = {
  id: number;
  title: string;
  image: string | StaticImageData;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  domain : string;
  coordinator?: string;
  contact?: string;
  onNext: () => void;
  onPrev: () => void;
};

const EventCard = ({
  title,
  image,
  description,
  date,
  time,
  venue,
  coordinator,
  contact,
  onNext,
  onPrev,
  domain
}: EventCardProps) => {
  return (
    <div className="p-4 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:border-white/30">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Image Section */}
        <div className="md:w-[45%] relative group overflow-hidden rounded-xl shadow-lg">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Category Badge */}
          <div className="absolute top-3 right-3 px-3 py-1 bg-blue-800/80 border-2 border-white backdrop-blur-sm rounded-full text-[14px] text-white font-medium shadow-lg">
            {title}
          </div>
          <div className="absolute top-3 left-3 px-3 py-1 bg-cyan-900 border-2 border-white  backdrop-blur-sm rounded-full text-[14px] text-white font-medium shadow-lg">
            {domain}
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 flex flex-col justify-between space-y-4">
          <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md p-5 rounded-xl transition-all duration-300 hover:bg-white/10 border border-white/10 shadow-lg">
            {/* <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white mb-2">
              {title}
            </h3> */}
            <p className="text-yellow-400 mb-4 leading-relaxed font-light text-[20px]">
              {description}
            </p>

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {/* Time Section */}
              <div className="flex items-center space-x-3 group bg-white/5 p-2 rounded-lg transition-all duration-300 hover:bg-white/10">
                <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-sm">
                  <span className="text-yellow-400 font-semibold">Time</span>
                  <p className="text-gray-300">{time}</p>
                </div>
              </div>

              {/* Venue Section */}
              <div className="flex items-center space-x-3 group bg-white/5 p-2 rounded-lg transition-all duration-300 hover:bg-white/10">
                <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                </div>
                <div className="text-sm">
                  <span className="text-yellow-400 font-semibold">Venue</span>
                  <p className="text-gray-300">{venue}</p>
                </div>
              </div>

              {/* Date Section */}
              <div className="flex items-center space-x-3 group bg-white/5 p-2 rounded-lg transition-all duration-300 hover:bg-white/10">
                <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-sm">
                  <span className="text-yellow-400 font-semibold">Date</span>
                  <p className="text-gray-300">
                    {new Date(date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* Coordinator Section */}
              {coordinator && (
                <div className="flex items-center space-x-3 group bg-white/5 p-2 rounded-lg transition-all duration-300 hover:bg-white/10">
                  <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <span className="text-yellow-400 font-semibold">
                      Coordinator
                    </span>
                    <p className="text-gray-300">{coordinator}</p>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              {contact && (
                <div className="flex items-center space-x-3 group bg-white/5 p-2 rounded-lg transition-all duration-300 hover:bg-white/10">
                  <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <span className="text-blue-400 font-semibold">Contact</span>
                    <p className="text-gray-300">{contact}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={onPrev}
              className="px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-md rounded-tl-[10px] rounded-bl-[10px] transition-all duration-300 hover:from-blue-700 hover:to-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center space-x-2 group text-sm"
            >
              <span className="transform transition-transform group-hover:-translate-x-1">
                ←
              </span>
              <span>Previous</span>
            </button>
            <button
              onClick={onNext}
              className="px-4 py-2 text-white bg-gradient-to-l from-blue-600 to-blue-400 rounded-md rounded-tr-[10px] rounded-br-[10px] transition-all duration-300 hover:from-blue-700 hover:to-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center space-x-2 group text-sm"
            >
              <span>Next</span>
              <span className="transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
