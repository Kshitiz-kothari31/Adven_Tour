import { motion } from "framer-motion";

const AdventureAltHero = () => {
  return (
    <motion.div
      className="relative w-full h-[92vh] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* 🎥 Slow Zoom BG Image */}
        <motion.img
          src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_3.webp"
          alt="Rafting Adventure"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

      {/* 🌌 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-20" />

      {/* 🌫 Fog/Particle Layer */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none bg-[url('/fog.png')] bg-cover bg-center opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
      />

      {/* 🐝 Firefly/Glow Particles */}
      <motion.div
        className="absolute inset-0 z-40 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
      >
        <div className="w-full h-full bg-[url('/particles.gif')] bg-cover bg-center opacity-10 mix-blend-screen" />
      </motion.div>

      {/* 💥 Cinematic Entry Text */}
      <motion.div
        className="relative z-50 h-full flex items-end px-6 md:px-20 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl">
          <h1 className="text-white text-6xl md:text-8xl xl:text-9xl font-kalnia font-medium drop-shadow-xl">
            Rafting
          </h1>
          <p className="text-white text-lg md:text-2xl mt-3 drop-shadow-md josefin-sans">
            Paddle through adrenaline. Ride the rapids of Shivpuri. Discover the Ganga like never before.
          </p>
        </div>
      </motion.div>

      {/* 🌊 Animated Waves Behind Text */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[150px] z-40 overflow-hidden pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute w-full h-full bg-[url('/wave-lines.svg')] bg-repeat-x bg-bottom animate-wave" />
        </div>
      </motion.div>

      {/* 🌊 Wave SVG Foreground */}
      <motion.div
        className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <svg
          className="block w-full h-[100px] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fafafa" />
              <stop offset="100%" stopColor="#B2EBF2" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default AdventureAltHero;