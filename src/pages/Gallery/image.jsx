"use client";
import { useState, useMemo, memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import images  from "../../const"; 


// Memoized Image component to prevent re-renders
const GalleryImage = memo(({ src, onClick }) => (
  <div
    className="relative w-full h-36 overflow-hidden rounded-2xl cursor-pointer shadow-md"
    onClick={onClick}
  >
    <LazyLoadImage
      src={`${src}?w=500&q=60`}
      alt="Gallery"
      effect="blur"
      className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
    />
  </div>
));

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

        <div
          className="relative inline-block text-left"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="group inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-full text-sm md:text-base font-semibold shadow-xl transition-all duration-300 cursor-pointer">
            🚀 Select Category
            <span className="ml-2 group-hover:translate-y-1 transition-transform duration-300">👇</span>
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
              {["all", "rafting", "stays", "trekking", "bungee"].map((cat) => (
                <a
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="block px-5 py-3 text-sm hover:bg-gray-100 font-medium transition cursor-pointer"
                >
                  {cat === "all" && "🌟 All"}
                  {cat === "rafting" && "🚣‍♂️ Rafting"}
                  {cat === "stays" && "🏕️ Stays"}
                  {cat === "trekking" && "🥾 Trekking"}
                  {cat === "bungee" && "🪂 Bungee"}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-white text-2xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-60 transition"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={`${selectedImage}?w=1200&q=80`}
              alt="Full View"
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
