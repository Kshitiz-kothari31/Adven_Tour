import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/landscape/stay_04.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/landscape/stay_08.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/landscape/stay_10.webp",
];

const CampingSlider = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="text-gray-900 py-16 mt-20 relative">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-6 relative z-20"
      >
        <h2 className="text-4xl md:text-5xl josefin-sans font-extrabold mb-6 text-emerald-900">
          Camping in Rishikesh – Shivpuri
        </h2>
      </motion.div>

      {/* Image Slider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-12 w-full max-w-full mx-auto px-2 relative"
      >
        <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white h-[65vh]">
          {/* Previous fading out */}
          {prev !== null && (
            <motion.img
              key={`prev-${prev}`}
              src={images[prev]}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          )}

          {/* Current fading in */}
          <motion.img
            key={`current-${current}`}
            src={images[current]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

          {/* Bottom Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-6 right-6 text-white z-20 text-right"
          >
            <p className="text-lg font-semibold">
              Stays • Camp • Bonfire • Adventure
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CampingSlider;
