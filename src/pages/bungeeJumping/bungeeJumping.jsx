import { useRef } from "react";
import { motion } from "framer-motion";
import Form from "../../components/form/Form";
import Feedback from "../../components/Feedback";

const marqueeItems = [
  'Leap into adrenaline',
  'India best bungee spot',
  'Face your fears head-on',
  'Gravity-defying thrill',
  'Ultimate free-fall rush',
  'Harness up. Jump down.',
  'Feel the rope snap back',
  'Certified jump masters',
  'High jumps, higher confidence',
  'Adventure starts here',
  'Fall hard, smile harder',
  'Pure adrenaline therapy',
  'Jump with zero regrets',
  'Your heart will thank you',
  'Defy gravity in style',
  'The edge is just the start',
];
const customMessage = encodeURIComponent("Hi, I am Aman and I want to book a rafting trip!");

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/sjmNmWuYXqQ?autoplay=1&mute=1&loop=1&playlist=sjmNmWuYXqQ&modestbranding=1&rel=0&showinfo=0&controls=0",
    title: "Jump into the Abyss",
    subtitle: "83 meters of pure adrenaline",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/sjmNmWuYXqQ?autoplay=1&mute=1&loop=1&playlist=sjmNmWuYXqQ&modestbranding=1&rel=0&showinfo=0&controls=0",
    title: "Scream Worthy Heights",
    subtitle: "India's highest bungee spot",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/xI-IQ7EpLgE?autoplay=1&mute=1&loop=1&playlist=xI-IQ7EpLgE&modestbranding=1&rel=0&showinfo=0&controls=0",
    title: "Fear Meets Freedom",
    subtitle: "Conquer your limits",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/sjmNmWuYXqQ?autoplay=1&mute=1&loop=1&playlist=sjmNmWuYXqQ&modestbranding=1&rel=0&showinfo=0&controls=0",
    title: "Adrenaline Overload",
    subtitle: "One leap, lifetime memory",
  },
];


const cards = [
  {
    title: "Thrill Factory",
    height: "53 meter's",
    cost: "₹3000 /-",
    image:
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/splash%20bungee/splash_12.webp",
  },
  {
    title: "Splash Dice",
    height: "53 meter's",
    cost: "₹3000 /-",
    extra: "*DSLR Video Included",
    image:
      "https://github.com/Kshitiz-kothari31/Adven_Tour_img-videos/blob/main/Images/Bungee%20Jumping/heroImage_01.webp?raw=true",
  },
  {
    title: "Himalayan Bungee",
    height: "117 meter's",
    cost: "₹4,600 /-",
    image:
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/splash%20bungee/splash_04.webp",
  },
];

function BungeeJumping() {
  const videoRefs = useRef([]);
    const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <main className="bg-gradient-to-r from-white to-[#cceeff] josefin-sans ">

      <img
      src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/heroImage_02.webp"
      style={{ display: "none" }}
      alt="Bungee Background"
      />
      <motion.section
          className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-20 pb-32 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/heroImage_02.webp)`,
          }}
          initial={{ opacity: 0.3, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

      {/* 🧭 Title */}
      <motion.h1
        className="text-white text-3xl sm:text-6xl font-semibold drop-shadow-lg font-kalnia leading-tight z-10"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Jump into the Thrill of Bungee Adventures
      </motion.h1>

      {/* 📜 Subtitle */}
      <motion.p
        className="max-w-2xl text-lg sm:text-2xl text-white font-medium mt-6 mb-8 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Experience the adrenaline rush of freefalling from breathtaking heights in Rishikesh.
      </motion.p>

      {/* 🚀 WhatsApp Button */}
      <motion.button
        onClick={() =>
          window.open(
            "https://wa.me/7078287331?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20bungee%20packages",
            "_blank"
          )
        }
        className="relative px-10 py-3 text-white font-bold rounded-full shadow-xl bg-gradient-to-r from-green-500 to-emerald-600 overflow-hidden transition-all duration-700 transform group hover:scale-90 hover:-rotate-1 z-10"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Shine Effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out blur-sm"></span>

        {/* Glow on Hover */}
        <span className="absolute inset-0 w-full h-full bg-emerald-500 rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-125 group-hover:blur-2xl transition-all duration-700"></span>

        {/* Button Text */}
        <span className="relative z-10 tracking-wide group-hover:tracking-widest group-hover:animate-pulse">
          💬 WhatsApp Us
        </span>
      </motion.button>

      {/* ↓ Scroll Button */}
        <div className="mt-12 z-10">
          <motion.button
            onClick={() =>
              document.getElementById("rishikesh")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-orange-300 text-white p-4 rounded-full text-2xl shadow-lg transition-all duration-700 hover:bg-orange-500 hover:rotate-[360deg] hover:scale-150 hover:shadow-2xl hover:animate-bounce"
            whileHover={{ scale: 1.2 }}
          >
            ↓
          </motion.button>
        </div>


      {/* 🌊 Wave Shape at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            {/* define the same gradient as your page */}
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="#cceeff" />
            </linearGradient>
          </defs>

          <path
            fill="url(#waveGradient)"   // use the gradient here
            fillOpacity="1"
            d="M0,192L48,165.3C96,139,192,85,288,80C384,75,480,117,576,133.3C672,149,768,139,864,122.7C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96V320H0Z"
          ></path>
        </svg>
      </div>


      </motion.section>
   
    <motion.section
      className="py-20 px-4 md:mt-10 md:px-10 xl:px-40 text-black josefin-sans"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Fancy Motion Title */}
      <motion.h2
        initial={{ y: -100, opacity: 0, rotate: -5, skewY: 5 }}
        whileInView={{ y: 0, opacity: 1, rotate: 0, skewY: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-light underline underline-offset-8 decoration-black drop-shadow-sm text-center leading-snug"
      >
        Come Join Us for Experience the Falling Adventure
      </motion.h2>

      {/* Description Paragraph */}
      <motion.p
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        whileHover={{ scale: 1.04 }}
        transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-6 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-gray-800 text-center px-2"
      >
        Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure. Whether you're a beginner or a pro, we help you reach new heights with confidence.
      </motion.p>
    </motion.section>

    <div className="josefin-sans  md:mt-15 overflow-hidden mt-4">
      <div className="relative w-full bg-gradient-to-r from-white to-[#89dcfa]  h-[60px] flex items-center">
        {/* A much longer scroll distance = slower speed */}
        <motion.div
          className="flex whitespace-nowrap text-black font-light text-3xl gap-16 px-10 min-w-[300%]"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 100 }} // 🔥 super slow
        >
          {/* ✨ Repeat items more to make the line loooong */}
          {[...Array(7)].flatMap(() =>
            marqueeItems.map((text, i) => (
              <span key={`${text}-${i}`} className="shrink-0">
                ✦ {text}
              </span>
            ))
          )}
        </motion.div>
      </div>
    </div>

    {/* plans section  */}
    <section  id="rishikesh" className="py-16  md:mt-15  px-4 sm:px-6 md:px-10 xl:px-32 2xl:px-60 text-black josefin-sans">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-black underline underline-offset-8 mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Rishikesh
      </motion.h2>

      <motion.p
        className="text-center text-lg md:text-xl font-light text-[#004785] mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Pro, we help you reach new heights with confidence.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {cards.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-400/30 transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1 border border-white/20"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 + i * 0.2, type: "spring" }}
          >
            {/* Image */}
            <div className="aspect-[4/3] w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-2 text-left">
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              {item.extra && (
                <p className="text-sm text-[#004785] font-medium">{item.extra}</p>
              )}
              <p className="text-sm text-gray-600">Height: {item.height}</p>
              <p className="text-sm text-gray-600">Cost: {item.cost}</p>

            <button
              className="cursor-pointer mt-3 w-fit px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 text-sm font-semibold shadow-lg hover:scale-105"
              onClick={() =>
                window.open(
                  "https://wa.me/7078287331?text=Hello%2C%20I%20would%20like%20to%20book%20a%20tour",
                  "_blank"
                )
              }
            >
              📩 Book Now
            </button>


            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
    <section className="py-20 px-4 md:mt-15 sm:px-6 md:px-10 xl:px-32 2xl:px-60 text-center text-black josefin-sans">

      {/* Section Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold underline underline-offset-8 decoration-black drop-shadow-sm"
        >
          Rishikesh Bungee <span className="text-black">Jumping</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-gray-700"
        >
          Leap from India's highest bungee point — 83 meters of pure thrill in the heart of Rishikesh.
      </motion.p>
      </motion.div>

      {/* Video Cards */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
              delay: index * 0.1,
            }}
            className="relative group overflow-hidden rounded-2xl bg-black shadow-2xl hover:shadow-yellow-500/30 border border-white/10 backdrop-blur-md
              w-full sm:auto sm:h-auto
              "
          >
            {video.src.includes("youtube") ? (
              <div className="relative w-full h-[80vh] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px]">
                <iframe
                  src={`${video.src.replace("shorts/", "embed/")}?autoplay=1&mute=1&loop=1&playlist=${video.src.split("/").pop()}&modestbranding=1&rel=0&controls=0&iv_load_policy=3&fs=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full object-cover pointer-events-none"
                ></iframe>
              </div>
            ) : (
              <video
                src={video.src}
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-[80vh] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] object-cover transition-all duration-500 group-hover:brightness-90"
              />
            )}
          </motion.div>
        ))}
      </div>

    </section>

    <Feedback/>
    
    <Form
      boxClass="bg-gradient-to-r from-[#cceeff] to-white"
      headingClass="text-black"
      buttonClass="bg-blue-400 hover:bg-blue-700"
      focusClass="focus:outline-blue-500"
    />
    </main>
  );
}

export default BungeeJumping;