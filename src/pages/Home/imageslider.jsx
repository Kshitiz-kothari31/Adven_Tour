import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageSlider = () => {
  const items = [
    {
      id: 1,
      name: "Switzerland",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      image: "https://i.ibb.co/qCkd9jS/img1.jpg"
    },
    {
      id: 2,
      name: "Finland",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      image: "https://i.ibb.co/jrRb11q/img2.jpg"
    },
    {
      id: 3,
      name: "Iceland",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      image: "https://i.ibb.co/NSwVv8D/img3.jpg"
    },
    {
      id: 4,
      name: "Australia",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      image: "https://i.ibb.co/Bq4Q0M8/img4.jpg"
    },
    {
      id: 5,
      name: "Netherlands",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      image: "https://i.ibb.co/jTQfmTq/img5.jpg"
    },
    {
      id: 6,
      name: "Ireland",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      image: "https://i.ibb.co/RNkk6L0/img6.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const getThumbnails = () => {
    const thumbnails = [];
    for (let i = 1; i <= 4; i++) {
      thumbnails.push(items[(currentIndex + i) % items.length]);
    }
    return thumbnails;
  };

  return (
    <div className="px-4 py-6 md:py-10 text-center">
      {/* Heading */}
      <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-10">
        Our trip leaders are backed by
      </h2>

      {/* Slider Container */}
      <div className="relative overflow-hidden flex items-center justify-center">
        <div className="relative w-full max-w-[1000px] h-[350px] md:h-[600px] bg-gray-100 shadow-xl shadow-gray-400 rounded-lg overflow-hidden">
          {/* Main Image Crossfade */}
          <div className="relative w-full h-full">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
                }`}
                style={{ backgroundImage: `url(${item.image})` }}
              />
            ))}

            {/* Text */}
            <div className="absolute top-1/2 left-4 md:left-24 w-[250px] md:w-[300px] text-left text-white -translate-y-1/2 font-sans z-30">
              <div className="text-xl md:text-4xl font-bold uppercase">{items[currentIndex].name}</div>
              <div className="mt-1.5 mb-4 text-sm md:text-base">{items[currentIndex].description}</div>
              <button className="px-4 py-2 text-sm md:text-base border-none cursor-pointer hover:text-white hover:bg-orange-600 transition-colors">
                See More
              </button>
            </div>
          </div>

          {/* Slide-in Thumbnails */}
          <div
            key={currentIndex}
            className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 md:gap-4 z-30 animate-slideIn"
          >
            {getThumbnails().map((item) => {
              const isActive = item.id === items[(currentIndex + 1) % items.length].id;
              return (
                <div
                  key={item.id}
                  className={`w-[70px] h-[50px] md:w-[120px] md:h-[80px] bg-cover bg-center rounded-md shadow-md shadow-black/40 transition-all duration-300 hover:scale-105 cursor-pointer 
                  ${isActive ? "ring-2 ring-orange-500" : ""}`}
                  style={{ backgroundImage: `url(${item.image})` }}
                  onClick={() => setCurrentIndex(items.findIndex(i => i.id === item.id))}
                />
              );
            })}
          </div>

          {/* Navigation Arrows */}
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
