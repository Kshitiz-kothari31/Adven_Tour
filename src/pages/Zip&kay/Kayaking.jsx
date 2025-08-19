import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import "./Zipline.css";

// ✅ Lazy load big components
const Feedback = lazy(() => import("../../components/Feedback"));
const Form = lazy(() => import("../../components/form/Form"));

const Kayaking = () => {
  // ⚡ Optimized image sizes (Unsplash resizing with w param)
  const bgHero =
    "https://res.cloudinary.com/gofjords-com/images/c_scale,w_1648,h_1099,dpr_1.25/f_auto,q_auto:eco/v1683890721/Experiences/XXLofoten/Kayaking/Evening%20kayaking%202020/Evening-kayaking-Svolvaer-Lofoten-XXlofoten-1/Evening-kayaking-Svolvaer-Lofoten-XXlofoten-1.jpg?_i=AA";
  const img1 =
    "https://res.cloudinary.com/gofjords-com/images/c_scale,w_1648,h_1099,dpr_1.25/f_auto,q_auto:eco/v1683890721/Experiences/XXLofoten/Kayaking/Evening%20kayaking%202020/Evening-kayaking-Svolvaer-Lofoten-XXlofoten-1/Evening-kayaking-Svolvaer-Lofoten-XXlofoten-1.jpg?_i=AA";
  const img2 =
    "https://res.cloudinary.com/gofjords-com/images/c_scale,w_1648,h_1099,dpr_1.25/f_auto,q_auto:eco/v1683890721/Experiences/XXLofoten/Kayaking/Evening%20kayaking%202020/Evening-kayaking-Svolvaer-Lofoten-XXlofoten-1/Evening-kayaking-Svolvaer-Lofoten-XXlofoten-1.jpg?_i=AA";

  // ⚡ Video set to 720p instead of 1440p
  const videoSrc =
    "https://videos.pexels.com/video-files/2286307/2286307-hd_1280_720_24fps.mp4";

  const handleScroll = () =>
    document
      .getElementById("next-section")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="josefin-sans bg-gradient-to-r from-blue-100 via-cyan-50 to-teal-100">
      {/* ---------------- HERO SECTION ---------------- */}
      <motion.section
        className="relative w-full h-[90vh] overflow-hidden text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Background */}
        <motion.img
          src={bgHero}
          alt="Kayaking hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3 }}
        />

        {/* Hero Text */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-kalnia"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover the Thrill of Kayaking in <br /> Shivpuri, Rishikesh
          </motion.h1>

          <motion.p
            className="text-white/90 text-sm md:text-lg max-w-2xl mb-6 josefin-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Glide through the Ganges with breathtaking Himalayan views. Your
            adventure begins where the river calls.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.1,
              duration: 0.6,
              type: "spring",
              stiffness: 130,
            }}
            whileHover={{
              scale: 1.12,
              boxShadow: "0 0 24px rgba(14,165,233,0.55)",
              transition: { type: "spring", stiffness: 260, damping: 18 },
            }}
            whileTap={{ scale: 0.94 }}
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-colors duration-300"
            onClick={() =>
              window.open(
                "https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20booking%20a%20tour",
                "_blank"
              )
            }
          >
            Book Now
          </motion.button>
        </div>
      </motion.section>

      {/* ---------------- Scroll Button ---------------- */}
      <motion.button
        onClick={handleScroll}
        className="mx-auto mt-6 flex items-center justify-center w-12 h-12 rounded-full bg-[#E0F7FA] hover:bg-[#C5EEF4] text-black shadow-lg"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>

      {/* ---------------- 3rd Section ---------------- */}
      <section
        id="next-section"
        className="w-full px-4 sm:px-6 py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Images */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <img
              src={img1}
              alt="Kayak A"
              loading="lazy"
              className="w-[220px] sm:w-[260px] md:w-[280px] lg:w-[320px] aspect-square object-cover rounded-2xl rotate-[18deg] md:rotate-[22deg] shadow-xl"
            />
            <img
              src={img2}
              alt="Kayak B"
              loading="lazy"
              className="absolute w-[200px] sm:w-[240px] md:w-[260px] lg:w-[300px] aspect-square object-cover rounded-2xl rotate-[-16deg] md:rotate-[-20deg] translate-x-16 translate-y-16 sm:translate-x-20 sm:translate-y-20 md:translate-x-24 md:translate-y-24 lg:translate-x-32 lg:translate-y-24 shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.h2
              className="text-2xl sm:text-3xl mt-6 md:text-4xl font-bold font-josefin"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              The Adventure Capital of India
            </motion.h2>

            <motion.p
              className="text-gray-700 text-base sm:text-lg leading-relaxed"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Shivpuri, just a few kilometers upstream from Rishikesh, is known
              for its pristine natural beauty, powerful river currents, and
              serene Himalayan backdrop...
            </motion.p>
          </div>
        </div>
      </section>

      {/* ---------------- Video Section ---------------- */}
      <section className="relative sm:mt-50 w-full h-[70vh] overflow-hidden flex items-center justify-center px-4 text-black josefin-sans">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25 z-10" />
        <div className="relative z-20 text-center max-w-2xl flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">
            Ride the Rapids of Shivpuri
          </h1>
          <p className="text-sm md:text-base text-white leading-relaxed mb-8">
            Experience the pulse of the Ganges...
          </p>
          <button
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition hover:scale-105"
            onClick={() =>
              window.open(
                "https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20booking%20a%20tour",
                "_blank"
              )
            }
          >
            Book Now
          </button>
        </div>
      </section>

      {/* ---------------- Feedback & Form (Lazy) ---------------- */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Feedback />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Loading form...</div>}>
        <Form
          boxClass="bg-gradient-to-r from-teal-100 via-cyan-50 to-blue-100"
          headingClass="text-black"
          buttonClass="bg-blue-600 hover:bg-blue-700"
          focusClass="focus:outline-blue-500"
        />
      </Suspense>
    </section>
  );
};

export default Kayaking;
