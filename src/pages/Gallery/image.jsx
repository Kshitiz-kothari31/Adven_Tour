"use client";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

  const images = [
    // 🌊 Rafting
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_1.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_22.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_3.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_23.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_7.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_5.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_19.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_24.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_17.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_2.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_10.webp", category: "rafting" },

    // 🥾 Trekking
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Tungnath/tungnath_img08.webp", category: "trekking" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Tungnath/tungnath_img13.webp", category: "trekking" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Tungnath/tungnath_img14.webp", category: "trekking" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Tungnath/tungnath_img18.webp", category: "trekking" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Gomukh%20Tapovan/gomukhTapovan_img01.webp", category: "trekking" },

    // 🪂 Bungee
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/heroImage_01.webp", category: "bungee" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/heroImage_02.webp", category: "bungee" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/splash%20bungee/splash_05.webp", category: "bungee" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/splash%20bungee/splash_11.webp", category: "bungee" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/splash%20bungee/splash_14.webp", category: "bungee" },

    // 🏡 Stays
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_04.webp", category: "stays" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_01.webp", category: "stays" },
  ];

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
      <motion.div
        className="text-center md:text-left mb-10"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold font-josefin text-gray-900 tracking-tight mb-4">
          📸 Image Gallery
        </h2>

        <div
          className="relative inline-block text-left"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <motion.button
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-full text-sm md:text-base font-semibold shadow-xl transition-all duration-300 cursor-pointer"
          >
            🚀 Select Category
            <span className="ml-2 group-hover:translate-y-1 transition-transform duration-300">👇</span>
          </motion.button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute top-full left-0 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden font-josefin"
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Image Grid */}
{/* Image Grid */}
<div className="max-w-7xl mx-auto">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {filteredImages.map((img, index) => (
      <div
        key={index}
        className="relative w-full h-36 overflow-hidden rounded-2xl cursor-pointer shadow-md" // reduced height
        onClick={() => setSelectedImage(img.src)}
      >
        <LazyLoadImage
          src={`${img.src}?w=500&q=60`}
          alt={`Gallery ${index + 1}`}
          effect="blur"
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>
    ))}
  </div>
</div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
