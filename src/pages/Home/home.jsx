"use client";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { IMAGES, PICS, CARDS, YOUTUBE_VIDEOS, PARAGRAPH_TEXTS,} from "../../const";
import HighlightsStats from './sample';
import { useEffect, useState, useCallback, useMemo } from 'react';
import Feedback from '../../components/Feedback';
import ImageSlider from './imageslider'
import './home.css'

// Extract ImageSliderBox to its own component to prevent re-renders of the entire page
function ImageSliderBox() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll button
  const handleScrollClick = useCallback(() => {
    const target = document.getElementById("second-section");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Animate text when visible
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-text");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full h-[93vh] overflow-hidden bg-black">
      {/* 🖼 All Images stacked */}
      {IMAGES.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`
            absolute top-0 left-0 w-full h-full object-cover transition-all duration-[1600ms] ease-in-out
            ${index === current ? "opacity-100 scale-100 z-30" : "opacity-0 scale-105 z-20"}
          `}
        />
      ))}

      {/* 🌓 Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-40" />

      {/* ✨ HERO TEXT CONTENT */}
      <div
        className="
          absolute inset-0 z-50 text-white text-center px-4
          flex flex-col items-center
          justify-start pt-16      /* top on mobile */
          md:justify-center md:pt-0  /* center on desktop */
        "
      >
        <h1 className="reveal-text text-3xl md:text-6xl font-medium font-kalnia drop-shadow-xl leading-tight opacity-0 translate-y-[30px]">
          GoRafts.. <br /> Beyond Limits. Into the Wild.
        </h1>

        <p className="reveal-text text-base md:text-xl mt-3 md:mt-4 max-w-2xl text-white/80 opacity-0 translate-y-[20px]">
          Trek. Raft. Jump. Explore. The adventure of a lifetime starts here.
        </p>

        <button
          onClick={handleScrollClick}
          className="reveal-text mt-6 md:mt-8 px-6 md:px-8 py-2 md:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base md:text-lg rounded-xl shadow-lg shadow-orange-300/30 opacity-0 translate-y-[15px] transition-transform duration-500 hover:scale-105"
        >
          Start the Journey
        </button>
      </div>
    </div>
  );
}

const Home = () => {
  const cardVariants = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  }), []);

  return (
    <section className='home josein-sans bg-gradient-to-r from-[#ffffff] via-[#f6fbf9] to-[#e9f5f1]'> 
      {/* image section at top */}
      <ImageSliderBox />

      {/* Paragraph Section */}
      <motion.div
        id="second-section"
        className="md:mt-24 py-10 px-4 mt-10 text-center josefin-sans text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        <motion.div className="max-w-4xl mx-auto space-y-4 text-base md:text-lg leading-relaxed">
          {PARAGRAPH_TEXTS.map((text, index) => (
            <motion.p
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* Image and Text Section */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 xl:gap-32 items-center md:mt-32 mt-10 px-4 md:px-10 xl:px-24"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Text */}
        <motion.div
          className="px-2 md:px-6 xl:px-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-medium josefin-sans text-gray-800 mb-2">
            GoRafts
          </h2>
          <p className="text-center md:text-left text-sm josefin-sans text-gray-600 mb-4">
            Based in Shivpuri, Rishikesh — India's Adventure Capital
          </p>
          <p className="text-gray-700 leading-relaxed josefin-sans text-[1rem] block md:hidden">
            <span className="font-semibold">GoRafts</span> brings adrenaline to life with rafting, hiking, kayaking, and more — right from the scenic banks of the Ganga.
          </p>
          <p className="text-gray-700 leading-relaxed josefin-sans text-[1rem] hidden md:block">
            <span className="font-semibold">GoRafts</span> is your adventure base in Shivpuri, Rishikesh — a hotspot for thrill-seekers across India.
            From the roar of the Ganga beneath your raft to the chill of Himalayan trails beneath your boots, every moment is an experience.
            Whether it's soaring from a bungee platform or zipping across lush valleys, our certified guides ensure it's all safe, wild, and unforgettable.
            <br /><br />
            Disconnect from the ordinary. Reconnect with the wild. Let's go.{" "}
            <span className="inline-block text-blue-600">↗</span>
          </p>
        </motion.div>

        {/* Images */}
        <motion.div
          className="flex flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          {PICS.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              loading="lazy"
              alt={`Adventure activity ${i + 1}`}
              className="w-[160px] lg:w-[220px] xl:w-[260px] h-auto object-cover rounded-[50%_30%_50%_30%/30%_50%_30%_50%] shadow-lg"
              animate={{
                rotate: i % 2 === 0 ? [0, 1, -1, 0] : [0, -1, 1, 0],
                scale: [1, 1.02, 0.98, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
   
      <HighlightsStats />

      {/* video section */}
      <motion.section
        className="relative josefin-sans md:mt-25 py-12 px-4 sm:px-6 md:px-10 lg:px-20"
        id="bottomRef"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
          {/* Heading */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold font-josefin text-black"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Experience the Adventure
          </motion.h2>

          {/* Video Grid (4 YouTube Shorts, Clean UI) */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {YOUTUBE_VIDEOS.map((yt, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg bg-black hover:shadow-yellow-400/30 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 140 }}
              >
                <div className="aspect-[9/16] w-full">
                  <iframe
                    src={yt}
                    className="w-full h-full rounded-2xl"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title={`Adventure video ${index + 1}`}
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Paragraph */}
          <motion.p
            className="text-sm sm:text-base max-w-2xl mx-auto text-gray-700 font-josefin leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            These real clips showcase our adventure experiences – live from Rishikesh's whitewater. 
            Play, pause, and feel the adrenaline.
          </motion.p>
        </div>
      </motion.section>

      {/* Cards Section */}
      <div className="py-16 px-4 md:px-10 xl:px-24 josefin-sans space-y-20">
        {/* ───────────────── Packages ───────────────── */}
        <div>
          <h2 className="text-3xl font-semibold josefin-sans mb-6 text-center md:text-left">
            Packages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-center">
            {CARDS.map((item, index) => (
              <motion.div
                key={item.label}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group w-full"
              >
                <div className="flex flex-col items-center">
                  <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[5/4] bg-gray-100 transition-all duration-500 group-hover:shadow-xl">
                    <motion.img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      loading="lazy"
                    />
                    <Link to={item.link}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 text-black px-4 py-1 text-sm rounded-md shadow group-hover:bg-orange-400 transition duration-300"
                      >
                        More
                      </motion.button>
                    </Link>
                  </div>
                  <p className="mt-2 text-base font-medium opacity-80">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───────────────── Stays ───────────────── */}
        <div>
          <h2 className="text-3xl font-semibold josefin-sans mb-6 md:-mt-15 text-center md:text-left">
            Stays
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-center">
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group w-full"
            >
              <div className="flex flex-col items-center">
                <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[5/4] bg-gray-100 transition-all duration-500 group-hover:shadow-xl">
                  <motion.img
                    src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/home_page_stayCard.webp"
                    alt="Luxury Stay"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    loading="lazy"
                  />
                  <Link to="/stays">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 text-black px-4 py-1 text-sm rounded-md shadow group-hover:bg-orange-400 transition duration-300"
                    >
                      More
                    </motion.button>
                  </Link>
                </div>
                <p className="mt-2 text-base opacity-80">Luxury Stay</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* image slider */}
      <ImageSlider />

      {/* detail */}
      <Feedback />
    </section>
  );
};

export default Home;