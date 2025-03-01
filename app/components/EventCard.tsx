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
    <div className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/3 relative">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            
            {/* Event Details */}
            <div className="space-y-2 mb-4">
              <p className="text-gray-300">
                <span className="text-orange-yellow font-semibold">Time:</span> {time}
              </p>
              <p className="text-gray-300">
                <span className="text-orange-yellow font-semibold">Venue:</span> {venue}
              </p>
              <p className="text-gray-300">
                <span className="text-orange-yellow font-semibold">Date:</span> {new Date(date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={onPrev}
              className="px-4 py-2 text-white hover:text-orange-yellow transition-colors"
            >
              ← Previous
            </button>
            <button
              onClick={onNext}
              className="px-4 py-2 text-white hover:text-orange-yellow transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
