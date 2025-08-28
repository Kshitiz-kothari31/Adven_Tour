import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    name: "Rafting",
    description: "Ride roaring rapids and conquer wild Himalayan rivers.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_24.webp",
    tag: "🌊 River Thrill",
  },
  {
    id: 2,
    name: "Trekking",
    description: "Ascend rugged trails and witness majestic summit views.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Gomukh%20Tapovan/gomukhTapovan_img01.webp",
    tag: "🥾 Summit Quest",
  },
  {
    id: 3,
    name: "Bungee Jumping",
    description: "Freefall from dizzying heights in adrenaline-pumping leaps.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/heroImage_02.webp",
    tag: "🪂 Gravity Drop",
  },
  {
    id: 4,
    name: "Kayaking",
    description: "Navigate twisting river bends and paddle through serenity.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Kayking/kayking_03.webp",
    tag: "🚣 River Drift",
  },
  {
    id: 5,
    name: "Zipline",
    description: "Soar over forests and valleys with breathtaking speed.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline/zipline_img03.webp",
    tag: "⚡ Sky Glide",
  },
  {
    id: 6,
    name: "Stays",
    description: "Unwind in cozy cabins nestled in nature’s lap.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_01.webp",
    tag: "🏕️ Nature Retreat",
  },
];

const ImageSlider = () => {
  const [[index, direction], setIndex] = useState([0, 1]);
  const sliderRef = useRef(null);

  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prevIndex]) => [
        (prevIndex + 1) % items.length,
        1,
      ]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  const textVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full overflow-hidden relative josefin-sans" ref={sliderRef}>
      {/* ✅ Removed all top & bottom fades and glows */}

      {/* Optional: Keep or remove these side glows */}
      <div className="absolute top-0 left-0 h-full w-4 z-30 bg-gradient-to-r from-orange-400/40 to-transparent blur-lg pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-4 z-30 bg-gradient-to-l from-orange-400/40 to-transparent blur-lg pointer-events-none" />

      {/* ✅ REMOVED glowing top & bottom neon lines */}

      {/* Slider Container */}
      <div className="w-full h-[400px] md:h-[600px] relative">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={index}
            className="absolute w-full h-full bg-center"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
          >
            {/* ✅ Lazy loaded image instead of backgroundImage */}
            <img
              src={items[index].image}
              alt={items[index].name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="absolute top-1/2 left-8 md:left-20 transform -translate-y-1/2 text-white z-10">
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-xl md:text-4xl font-bold uppercase"
              >
                {items[index].name}
              </motion.div>
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="text-sm md:text-base mt-2 mb-4 max-w-md"
              >
                {items[index].description}
              </motion.p>
              <motion.button
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="px-4 py-2 bg-white text-black hover:bg-orange-600 hover:text-white rounded transition-all"
              >
                See More
              </motion.button>
            </div>

            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white text-sm px-4 py-1.5 rounded-full shadow-lg border border-white/30 z-10"
            >
              {items[index].tag}
            </motion.div>

            <div className="absolute inset-0 bg-black/30 z-0" />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex([i, i > index ? 1 : -1]);
            }}
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
