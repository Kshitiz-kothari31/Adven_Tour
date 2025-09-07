import { useState, useEffect } from "react";

export default function GuidesSection() {
  const guides = [
    {
      img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Guides/Rafting_guide_1.webp",
      name: "Guide 1",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Guides/Rafting_guide_2.webp",
      name: "Guide 2",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Guides/Rafting_guide_3.webp",
      name: "Guide 3",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Guides/Rafting_guide_4.webp",
      name: "Guide 4",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setCurrent((prev) => (prev + 1) % guides.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [guides.length]);

  return (
    <section className="relative w-full py-16 flex flex-col justify-center items-center text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black drop-shadow-md">
        Your Guides Your Travel Partners
      </h2>

      {/* Desktop: Tilted Images */}
      <div className="hidden md:flex justify-center gap-4 mb-8">
        {guides.map((guide, index) => (
          <img
            key={index}
            src={guide.img}
            alt={guide.name}
            className={`w-44 h-50 object-cover rounded-2xl shadow-xl transition duration-500 hover:scale-105 
              ${index % 2 === 0 ? "rotate-[-5deg]" : "rotate-[5deg]"}`}
          />
        ))}
      </div>

      {/* Mobile: Auto sliding carousel */}
      <div className="md:hidden relative w-64 h-67 overflow-hidden mb-8 rounded-2xl shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {guides.map((guide, index) => (
            <img
              key={index}
              src={guide.img}
              alt={guide.name}
              className="w-64 h-72 object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Text with light overlay for readability */}
      <p className="relative max-w-3xl mx-auto text-black leading-relaxed mb-6 px-4">
        <span className="absolute inset-0 bg-white/70 rounded-lg -z-10"></span>
        Our expert guides are the heart of every journey we offer—passionate
        storytellers, seasoned explorers, and friendly companions rolled into one.
        With deep local knowledge and a genuine love for discovery, they turn every
        trip into a rich, immersive experience. Whether you’re navigating ancient
        trails, bustling cities, or remote landscapes, our guides ensure you see the
        unseen and feel the spirit of every place you visit.
      </p>

      {/* CTA Button */}
      <button className="px-6 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition-transform duration-300 hover:scale-105">
        About Guides
      </button>
    </section>
  );
}
