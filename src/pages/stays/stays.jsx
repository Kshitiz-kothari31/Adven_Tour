import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import styles from "./stays.module.css";
import strokeImg from "../../assets/images/stays/stroke.svg";
import ellipse49 from "../../assets/images/stays/Ellipse49.svg";
import ArrowImg from "../../assets/images/stays/Arrow15.svg";
import arrow from "../../assets/rightArrow.png";
import Feedback from '../../components/Feedback';
import Form from '../../components/form/Form'
import CampingSlider from "./CampingSlider";

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
    const images = [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    ];

  return (
    <main className={styles.main}>
        <section
        className="relative bg-amber-50 text-gray-800"
        style={{
          backgroundImage:
            "url('https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/landscape/stay_08.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-none md:rounded-3xl"></div>

        {/* Hero Section */}
        <div className="relative h-[70vh] md:h-[75vh] flex flex-col items-center justify-center text-center px-4 md:px-8 rounded-b-none md:rounded-b-4xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="will-change-transform will-change-opacity"
          >
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-kalnia font-bold mb-3 md:mb-4 drop-shadow-sm text-white leading-snug">
              Cozy Camping in Rishikesh
            </h1>
            <p className="text-sm sm:text-base md:text-xl max-w-sm sm:max-w-xl md:max-w-2xl mx-auto mb-4 md:mb-6 text-gray-100">
              Campfires, riverside tents, and starlit skies — your cozy escape into nature starts here.
            </p>

            {/* Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white rounded-full shadow-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transform transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 transition-opacity duration-500 hover:opacity-80"></span>
              <span className="relative z-10">Book Now</span>
            </a>
          </motion.div>
        </div>

        {/* Image Grid */}
        <div
          className="absolute bottom-[-60px] sm:bottom-[-70px] md:bottom-[-80px] 
                    left-1/2 transform -translate-x-1/2 
                    grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 
                    w-[80%] sm:w-[70%] md:w-[70%] justify-center"
        >
          {[
            "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_08.webp", // 🌊 Rafting
            "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_05.webp", // 🏞️ Mountains
            "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_04.webp", // 🌲 Forest
            "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_10.webp", // ⛺ Camping
          ].map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 
                        ${i < 2 ? "hidden md:block" : "block"}`} // first 2 hidden on mobile
            >
              <img
                src={src}
                alt={`Stay option ${i + 1}`}
                className="w-full h-28 sm:h-36 md:h-44 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

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

        <section className={styles.campSection}>
          <div className={styles.card1}>
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="figmaClip" clipPathUnits="objectBoundingBox">
                  <path
                    d="
                M 0.8941 0.5336
                C 0.8941 0.7759 0.8386 1.0000 0.6236 1.0000
                C 0.4087 1.0000 0.1218 0.7891 0.1033 0.4545
                C 0.0000 0.0973 0.5701 0.0000 0.7851 0.0000
                C 1.0000 0.0000 0.8941 0.2912 0.8941 0.5336
                Z"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className={styles.cardImages}>
              <div className={styles.mainImg}></div>
              <img src={strokeImg} loading="lazy" className={styles.stroke_Img} />
              <img src={ellipse49} alt="second_img" loading="lazy" className={styles.secImg} />
              <a href="/#gallery#gallery">
                <button className={styles.arrowBtn}>
                  <img src={arrow} alt="arrow_button_img" loading="lazy" />
                </button>
              </a>
            </div>

            <div className={styles.cardContent}>
              <h2>Coller Cottage</h2>
              <p className={styles.mainPara}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet.
              </p>
              <p className={styles.mobilePara}>
                There are many variations of passages of Lorem Ipsum available.
              </p>
              <p>
                <b>Cost: ₹1,500 /-</b>
              </p>
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
                    "_blank"
                  )
                }
              >
                Book Now
              </button>
            </div>

            <img src={ArrowImg} alt="arrow_img" loading="lazy" className={styles.arrow_img} />
          </div>

          <div className={styles.card2}>
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="figmaClip" clipPathUnits="objectBoundingBox">
                  <path
                    d="
                M 0.8941 0.5336
                C 0.8941 0.7759 0.8386 1.0000 0.6236 1.0000
                C 0.4087 1.0000 0.1218 0.7891 0.1033 0.4545
                C 0.0000 0.0973 0.5701 0.0000 0.7851 0.0000
                C 1.0000 0.0000 0.8941 0.2912 0.8941 0.5336
                Z"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className={styles.cardContent}>
              <h2>Luxry Camps with Cottage</h2>
              <p className={styles.mainPara}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet.
              </p>
              <p className={styles.mobilePara}>
                There are many variations of passages of Lorem Ipsum available.
              </p>
              <p>
                <b>Cost: ₹1,500 /-</b>
              </p>
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
                    "_blank"
                  )
                }
              >
                Book Now
              </button>
            </div>

            <div className={styles.Images}>
              <div className={styles.mainImg}></div>
              <img src={strokeImg} loading="lazy" className={styles.stroke_Img} />
              <img src={ellipse49} alt="second_img" loading="lazy" className={styles.secImg} />
              <a href="/#gallery#gallery">
                <button className={styles.arrowBtn}>
                  <img src={arrow} alt="arrow_button_img" loading="lazy" />
                </button>
              </a>
            </div>

            <img src={ArrowImg} alt="arrow_img" loading="lazy" className={styles.arrow_img} />
          </div>

          <div className={styles.card1}>
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="figmaClip" clipPathUnits="objectBoundingBox">
                  <path
                    d="
                M 0.8941 0.5336
                C 0.8941 0.7759 0.8386 1.0000 0.6236 1.0000
                C 0.4087 1.0000 0.1218 0.7891 0.1033 0.4545
                C 0.0000 0.0973 0.5701 0.0000 0.7851 0.0000
                C 1.0000 0.0000 0.8941 0.2912 0.8941 0.5336
                Z"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className={styles.cardImages}>
              <div className={styles.mainImg}></div>
              <img src={strokeImg} loading="lazy" className={styles.stroke_Img} />
              <img src={ellipse49} alt="second_img" loading="lazy" className={styles.secImg} />
              <a href="/#gallery#gallery">
                <button className={styles.arrowBtn}>
                  <img src={arrow} alt="arrow_button_img" loading="lazy" />
                </button>
              </a>
            </div>

            <div className={styles.cardContent}>
              <h2>A.C Cottage</h2>
              <p className={styles.mainPara}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet.
              </p>
              <p className={styles.mobilePara}>
                There are many variations of passages of Lorem Ipsum available.
              </p>
              <p>Cost: ₹1,500 /-</p>
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
                    "_blank"
                  )
                }
              >
                Book Now
              </button>
            </div>

            <img src={ArrowImg} alt="arrow_img" loading="lazy" className={styles.arrow_img} />
          </div>
        </section>

        <CampingSlider />
        <Feedback />
        <Form />

    </main>
  );
}

export default Stays;
