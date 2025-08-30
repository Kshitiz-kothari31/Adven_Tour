import { motion } from "framer-motion";
import styles from "./stays.module.css";
import { ArrowRight } from "lucide-react";
import Feedback from '../../components/Feedback';
import Form from '../../components/form/Form'
import CampingSlider from "./CampingSlider";
import CottageCards from "./card";

import React, { useRef, useEffect } from "react";

function Stays() {

  const customMessage = encodeURIComponent("Hi, I am Aman and I want to book a rafting trip!");

  const videoRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;

        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch((err) => {
            // Some browsers block autoplay unless it's muted
            console.error("Autoplay failed:", err);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 } // 50% of video visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
    const marqueeItems = [
      'Cozy mountain stays',
      'Wake up to sunrise views',
      'Nature at your doorstep',
      'Comfort meets adventure',
      'Luxury in the wild',
      'Campfires & starry nights',
      'Peaceful jungle retreats',
      'Stay close to the river',
      'Escape. Relax. Reconnect.',
      'Rustic charm, modern comfort',
      'Tranquil forest cabins',
      'Adventure starts from your room',
      'Sleep under the stars',
      'Hospitality in the hills',
      'Your home in the Himalayas',
    ];
    const whatsappNumber = "7078287331"; // Replace with your number
    const whatsappMessage = "Hello! I’m interested in booking a stay at your campsite in Rishikesh.";
    const imageGrid = [
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_08.webp",
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_05.webp",
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_04.webp",
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_10.webp",
    ];
  return (
    <main className={styles.main}>
      <section className="relative bg-amber-50 text-gray-800">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center rounded-b-3xl"
          style={{
            backgroundImage:
              "url('https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/landscape/stay_08.webp')",
          }}
        ></motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-b-3xl"></div>

        {/* Hero Content */}
        <div className="relative h-[80vh] md:h-[85vh] flex flex-col items-center justify-center text-center px-4 md:px-8 rounded-b-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-kalnia font-bold mb-3 md:mb-4 drop-shadow-sm text-white leading-snug">
              Cozy Camping in Rishikesh
            </h1>
            <p className="text-sm sm:text-base md:text-xl max-w-sm sm:max-w-xl md:max-w-2xl mx-auto mb-4 md:mb-6 text-gray-100">
              Campfires, riverside tents, and starlit skies — your cozy escape into nature starts here.
            </p>

            {/* Book Now Button */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="relative inline-block px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white rounded-full shadow-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transform transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 transition-opacity duration-500 hover:opacity-80"></span>
              <span className="relative z-10">Book Now</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Image Grid (below hero section) */}
        <motion.div
          className="relative z-10 -mt-24 md:-mt-32 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-[80%] sm:w-[70%] md:w-[70%] mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          {imageGrid.map((src, i) => (
            <motion.div
              key={i}
              className={`overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 
                          ${i < 2 ? "hidden md:block" : "block"}`} 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt={`Stay option ${i + 1}`}
                className="w-full h-28 sm:h-36 md:h-44 object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </motion.div>

      </section>
          

        {/* Marquee */}
        <div className="relative josefin-sans md:mt-42 overflow-hidden mt-20 py-6">
        <motion.div
        className="flex whitespace-nowrap text-black font-semibold text-2xl md:text-3xl gap-16 px-8"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }} // slower = smoother
        >
        {marqueeItems.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500 hover:scale-105 transition-transform duration-300"
          >
            ✦ {text}
          </span>
        ))}
        </motion.div>
        </div>
        
        <CottageCards/>
        <CampingSlider />
        <Feedback />
        <Form />

    </main>
  );
}

export default Stays;
