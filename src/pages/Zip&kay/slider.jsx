"use client";
import { useState, useEffect } from "react";

const sliderImages = [
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img01.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img02.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img03.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img04.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img05.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img06.webp",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
      setFade(true);
    }, 200); // matches transition duration
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
      setFade(true);
    }, 200);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div
        className="relative z-10 w-[90%] h-[70vh] rounded-3xl overflow-hidden bg-white/10 border border-white/20 shadow-[0_0_60px_rgba(0,255,255,0.25)] backdrop-blur-xl"
      >
        <img
          key={current}
          src={sliderImages[current]}
          alt={`Slide ${current + 1}`}
          className={`w-full h-full object-cover rounded-3xl transition-all duration-700 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border border-white/30 transition-all duration-200"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border border-white/30 transition-all duration-200"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
