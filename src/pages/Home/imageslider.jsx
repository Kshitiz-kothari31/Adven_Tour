import { useEffect, useState, useRef } from "react";

const items = [
  {
    id: 1,
    name: "Rafting",
    description: "Ride roaring rapids and conquer wild Himalayan rivers.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/sliding_Img1.webp",
    tag: "🌊 River Thrill",
  },
  {
    id: 2,
    name: "Trekking",
    description: "Ascend rugged trails and witness majestic summit views.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/sliding_img3.webp",
    tag: "🥾 Summit Quest",
  },
  {
    id: 3,
    name: "Bungee Jumping",
    description: "Freefall from dizzying heights in adrenaline-pumping leaps.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/sliding_Img4.webp",
    tag: "🪂 Gravity Drop",
  },
  {
    id: 4,
    name: "Kayaking",
    description: "Navigate twisting river bends and paddle through serenity.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/sliding_Img5.webp",
    tag: "🚣 River Drift",
  },
  {
    id: 5,
    name: "Zipline",
    description: "Soar over forests and valleys with breathtaking speed.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/sliding_Img6.webp",
    tag: "⚡ Sky Glide",
  },
  {
    id: 6,
    name: "Stays",
    description: "Unwind in cozy cabins nestled in nature’s lap.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/sliding_img2.webp",
    tag: "🏕️ Nature Retreat",
  },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Preload images
    items.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full overflow-hidden relative josefin-sans"
      ref={sliderRef}
    >
      {/* Side Glows */}
      <div className="absolute top-0 left-0 h-full w-4 z-30 bg-gradient-to-r from-orange-400/40 to-transparent blur-lg pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-4 z-30 bg-gradient-to-l from-orange-400/40 to-transparent blur-lg pointer-events-none" />

      {/* Slider Container */}
      <div className="w-full h-[400px] md:h-[600px] relative">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              i === index ? "opacity-100 translate-x-0 z-20" : "opacity-0 translate-x-full z-10"
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Text */}
            <div className="absolute top-1/2 left-8 md:left-20 transform -translate-y-1/2 text-white z-10 transition-all duration-700 ease-out">
              <h2
                className={`text-xl md:text-4xl font-bold uppercase transition-all duration-700 ${
                  i === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                {item.name}
              </h2>
              <p
                className={`text-sm md:text-base mt-2 mb-4 max-w-md transition-all duration-700 delay-150 ${
                  i === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                {item.description}
              </p>
              <button
                className={`px-4 py-2 bg-white text-black hover:bg-orange-600 hover:text-white rounded transition-all duration-700 delay-300 ${
                  i === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                See More
              </button>
            </div>

            {/* Tag */}
            <div
              className={`absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white text-sm px-4 py-1.5 rounded-full shadow-lg border border-white/30 z-10 transition-all duration-700 delay-500 ${
                i === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {item.tag}
            </div>

            <div className="absolute inset-0 bg-black/30 z-0" />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
