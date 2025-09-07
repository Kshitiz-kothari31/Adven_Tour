"use client";
import { useState, useMemo, memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import images from "../../const";

// ✅ Image component (fills container, no gaps)
const GalleryImage = memo(({ src, onClick }) => (
  <div
    className="break-inside-avoid mb-4 cursor-pointer rounded-2xl overflow-hidden shadow-md"
    onClick={onClick}
  >
    <LazyLoadImage
      src={`${src}?w=600&q=70`}
      alt="Gallery"
      effect="blur"
      className="w-full h-full object-cover transition-transform duration-200   scale-110 hover:scale-130"
    />
  </div>
));

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // ✅ Filter images by category
  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return images;
    return images.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="scroll-mt-32 mt-20 w-full px-6 md:px-12 py-12">
      {/* Title & Dropdown */}
      <div className="text-center md:text-left mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          📸 Image Gallery
        </h2>

        {/* Dropdown */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-full text-sm md:text-base font-semibold shadow-xl transition-all duration-300 cursor-pointer"
          >
            {selectedCategory === "all" && "🌟 All"}
            {selectedCategory === "rafting" && "🚣‍♂️ Rafting"}
            {selectedCategory === "stays" && "🏕️ Stays"}
            {selectedCategory === "trekking" && "🥾 Trekking"}
            {selectedCategory === "bungee" && "🪂 Bungee"}

            <span
              className={`ml-2 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              👇
            </span>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50">
              {["all", "rafting", "stays", "trekking", "bungee"].map((cat) => (
                <div
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsDropdownOpen(false);
                  }}
                  className="block px-5 py-3 text-sm hover:bg-gray-100 font-medium transition cursor-pointer"
                >
                  {cat === "all" && "🌟 All"}
                  {cat === "rafting" && "🚣‍♂️ Rafting"}
                  {cat === "stays" && "🏕️ Stays"}
                  {cat === "trekking" && "🥾 Trekking"}
                  {cat === "bungee" && "🪂 Bungee"}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ✅ Masonry Grid */}
      <div className="max-w-7xl mx-auto columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
        {filteredImages.map((img, index) => (
          <GalleryImage
            key={index}
            src={img.src}
            onClick={() => setSelectedImage(img.src)}
          />
        ))}
      </div>

{/* Fullscreen Modal */}
{selectedImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative w-full max-w-4xl flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Cross button slightly down from top */}
      <button
        className="absolute top-10 right-6 text-white text-2xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-60 transition z-50"
        onClick={() => setSelectedImage(null)}
      >
        ×
      </button>
      <img
        src={`${selectedImage}?w=1200&q=80`}
        alt="Full View"
        className="max-h-[90vh] max-w-full object-contain rounded-xl shadow-lg"
        loading="lazy"
      />
    </div>
  </div>
)}



    </section>
  );
};

export default GallerySection;
