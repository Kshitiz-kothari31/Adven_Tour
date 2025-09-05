import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // optional, can use any icons

const images = [
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/hero_img_1.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/hero_img_2.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/hero_img_1.webp",
];

const CampingSlider = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    setPrev(current);
    setCurrent((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setPrev(current);
    setCurrent((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="text-gray-900 py-16 mt-20 relative">
      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(1.05);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.6s ease-in-out forwards;
        }
        .animate-fadeOut {
          animation: fadeOut 1.6s ease-in-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center px-6 relative z-20 opacity-0 translate-y-10 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl josefin-sans font-extrabold mb-6 text-emerald-900">
          Camping in Rishikesh – Shivpuri
        </h2>
      </div>

      {/* Image Slider */}
      <div className="mt-12 w-full max-w-full mx-auto px-2 relative">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white h-[65vh]">
          {/* Previous fading out */}
          {prev !== null && (
            <img
              key={`prev-${prev}`}
              src={images[prev]}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-100 scale-100 animate-fadeOut"
            />
          )}

          {/* Current fading in */}
          <img
            key={`current-${current}`}
            src={images[current]}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 scale-110 animate-fadeIn"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

          {/* Bottom Tagline */}
          <div className="absolute bottom-6 right-6 text-white z-20 text-right opacity-0 translate-y-6 animate-fadeInUp delay-500">
            <p className="text-lg font-semibold">
              Stays • Camp • Bonfire • Adventure
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all z-30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all z-30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CampingSlider;
