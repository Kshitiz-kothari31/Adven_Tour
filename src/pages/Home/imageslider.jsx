import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    name: "Switzerland",
    description: "Glide past glaciers and alpine rivers.",
    image: "https://i.ibb.co/qCkd9jS/img1.jpg",
    tag: "🏔️ Alpine Trek"
  },
  {
    id: 2,
    name: "Finland",
    description: "Chase the northern lights in snow-packed forests.",
    image: "https://i.ibb.co/jrRb11q/img2.jpg",
    tag: "❄️ Arctic Escape"
  },
  {
    id: 3,
    name: "Iceland",
    description: "Explore volcanic rivers and wild terrain.",
    image: "https://i.ibb.co/NSwVv8D/img3.jpg",
    tag: "🌋 Epic Terrain"
  },
  {
    id: 4,
    name: "Australia",
    description: "Outback rivers and waterfall adventures.",
    image: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
    tag: "🦘 Wild Trails"
  },
  {
    id: 5,
    name: "Netherlands",
    description: "Peaceful water routes & windmill views.",
    image: "https://i.ibb.co/jTQfmTq/img5.jpg",
    tag: "🚴 Scenic Ride"
  },
  {
    id: 6,
    name: "Ireland",
    description: "Mystical rivers & emerald landscapes.",
    image: "https://i.ibb.co/RNkk6L0/img6.jpg",
    tag: "🌿 Celtic Wild"
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const getThumbnails = () => {
    const thumbnails = [];
    for (let i = 1; i <= 4; i++) {
      thumbnails.push(items[(currentIndex + i) % items.length]);
    }
    return thumbnails;
  };

  return (
    <div className="px-4 py-6 md:py-12 text-center">
      {/* 🎯 Heading */}
      <h2 className="text-xl md:text-3xl  text-gray-800 mb-6 md:mb-10">
        Our trip leaders are backed by
      </h2>

      <div className="relative overflow-hidden flex items-center justify-center">
        <div className="relative w-[85%] max-w-screen-xl h-[350px] md:h-[600px] shadow-xl shadow-gray-400 rounded-lg overflow-hidden">
          {/* 🖼️ Main Image */}
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={items[currentIndex].id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-cover bg-center z-10"
                style={{ backgroundImage: `url(${items[currentIndex].image})` }}
              />
            </AnimatePresence>

            {/* 🧭 Adventure Tag Overlay */}
            <motion.div
              key={`tag-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white font-jolly text-sm md:text-base px-4 py-1.5 rounded-full shadow-lg border border-white/30 z-20"
            >
              {items[currentIndex].tag}
            </motion.div>

            {/* 📝 Text Overlay */}
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute top-1/2 left-4 md:left-24 w-[250px] md:w-[300px] text-left text-white -translate-y-1/2 z-20"
            >
              <div className="text-xl md:text-4xl font-jolly uppercase">
                {items[currentIndex].name}
              </div>
              <div className="mt-1.5 mb-4 text-sm md:text-base font-sans">
                {items[currentIndex].description}
              </div>
              <button className="px-4 py-2 text-sm md:text-base border-none cursor-pointer hover:text-white hover:bg-orange-600 transition-colors bg-white text-black rounded-md">
                See More
              </button>
            </motion.div>
          </div>

          {/* 🔍 Thumbnails */}
          <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 md:gap-4 z-30">
            {getThumbnails().map((item) => {
              const isActive = item.id === items[(currentIndex + 1) % items.length].id;
              return (
                <div
                  key={item.id}
                  className={`w-[70px] h-[50px] md:w-[120px] md:h-[80px] bg-cover bg-center rounded-md shadow-md shadow-black/40 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isActive ? "ring-2 ring-orange-500" : ""
                  }`}
                  style={{ backgroundImage: `url(${item.image})` }}
                  onClick={() => setCurrentIndex(items.findIndex((i) => i.id === item.id))}
                />
              );
            })}
          </div>

          {/* 🔁 Prev/Next Buttons */}
          <div className="absolute bottom-3 md:bottom-5 left-0 right-0 flex justify-center gap-2 z-30">
            <button
              onClick={handlePrev}
              className="w-8 h-8 md:w-10 md:h-9 rounded-lg border border-black cursor-pointer bg-white hover:bg-gray-600 hover:text-white transition-colors flex items-center justify-center"
            >
              <FaArrowLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 md:w-10 md:h-9 rounded-lg border border-black cursor-pointer bg-white hover:bg-gray-600 hover:text-white transition-colors flex items-center justify-center"
            >
              <FaArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
