import Image from "next/image";

interface EventCardProps {
  title: string;
  image: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  onNext: () => void;
  onPrev: () => void;
}

const EventCard = ({
  title,
  image,
  description,
  date,
  time,
  venue,
  onNext,
  onPrev,
}: EventCardProps) => {
  return (
    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto border-2 border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
      <div className="flex flex-col md:flex-row gap-2">
        {/* Image Section */}
        <div className="md:w-1/3 relative group overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 flex flex-col justify-between space-y-2">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover:bg-white/10">
            <h3 className="text-2xl font-bold text-white mb-3 transition-colors hover:text-orange-yellow">
              {title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

            {/* Event Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 group transition-transform hover:translate-x-2">
                <span className="text-orange-yellow font-semibold group-hover:scale-105">
                  Time:
                </span>{" "}
                <span className="text-gray-300">{time}</span>
              </div>
              <div className="flex items-center space-x-2 group transition-transform hover:translate-x-2">
                <span className="text-orange-yellow font-semibold group-hover:scale-105">
                  Venue:
                </span>{" "}
                <span className="text-gray-300">{venue}</span>
              </div>
              <div className="flex items-center space-x-2 group transition-transform hover:translate-x-2">
                <span className="text-orange-yellow font-semibold group-hover:scale-105">
                  Date:
                </span>{" "}
                <span className="text-gray-300">
                  {new Date(date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center bg-white/5 backdrop-blur-sm p-4 rounded-xl">
            <button
              onClick={onPrev}
              className="px-6 py-2.5 text-white bg-white/5 rounded-lg transition-all duration-300 hover:bg-orange-yellow/20 hover:text-orange-yellow hover:shadow-[0_0_15px_rgba(255,191,0,0.3)] flex items-center space-x-2 group"
            >
              <span className="transform transition-transform group-hover:-translate-x-1">
                ←
              </span>
              <span>Previous</span>
            </button>
            <button
              onClick={onNext}
              className="px-6 py-2.5 text-white bg-white/5 rounded-lg transition-all duration-300 hover:bg-orange-yellow/20 hover:text-orange-yellow hover:shadow-[0_0_15px_rgba(255,191,0,0.3)] flex items-center space-x-2 group"
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
