import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    name: "Switzerland",
    description: "Glide past glaciers and alpine rivers.",
    image: "https://images.unsplash.com/photo-1504446659705-07c22b96c3fd?q=80&w=1171&auto=format&fit=crop",
    tag: "🏔️ Alpine Trek",
  },
  {
    id: 2,
    name: "Finland",
    description: "Chase the northern lights in snow-packed forests.",
    image: "https://images.unsplash.com/photo-1492963060540-65e3aae73127?q=80&w=1112&auto=format&fit=crop",
    tag: "❄️ Arctic Escape",
  },
  {
    id: 3,
    name: "Iceland",
    description: "Explore volcanic rivers and wild terrain.",
    image: "https://images.unsplash.com/photo-1519021228607-ef6e4c22d821?q=80&w=1170&auto=format&fit=crop",
    tag: "🌋 Epic Terrain",
  },
  {
    id: 4,
    name: "Australia",
    description: "Outback rivers and waterfall adventures.",
    image: "https://images.unsplash.com/photo-1533589374394-7a2ad76b0cd3?q=80&w=988&auto=format&fit=crop",
    tag: "🦘 Wild Trails",
  },
  {
    id: 5,
    name: "Netherlands",
    description: "Peaceful water routes & windmill views.",
    image: "https://images.unsplash.com/photo-1617877730222-04e11fa96b91?q=80&w=1029&auto=format&fit=crop",
    tag: "🚴 Scenic Ride",
  },
  {
    id: 6,
    name: "Ireland",
    description: "Mystical rivers & emerald landscapes.",
    image: "https://i.ibb.co/RNkk6L0/img6.jpg",
    tag: "🌿 Celtic Wild",
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
    <div className="w-full overflow-hidden relative" ref={sliderRef}>
      {/* Whitish blur gradients */}
      <div className="absolute top-0 w-full h-10 z-30 bg-gradient-to-b from-white/60 to-transparent blur-sm pointer-events-none" />
      <div className="absolute bottom-0 w-full h-10 z-30 bg-gradient-to-t from-white/60 to-transparent blur-sm pointer-events-none" />

      {/* Glowing gradient side borders */}
      <div className="absolute top-0 left-0 h-full w-4 z-30 bg-gradient-to-r from-orange-400/40 to-transparent blur-lg pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-4 z-30 bg-gradient-to-l from-orange-400/40 to-transparent blur-lg pointer-events-none" />

      {/* Glowing top & bottom neon borders */}
      <div className="absolute top-0 left-0 w-full h-1 z-30 bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 blur-md" />
      <div className="absolute bottom-0 left-0 w-full h-1 z-30 bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 blur-md" />

      {/* Slider Container */}
      <div className="w-full h-[400px] md:h-[600px] relative">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={index}
            className="absolute w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${items[index].image})`,
            }}
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
