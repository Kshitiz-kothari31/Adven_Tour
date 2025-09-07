"use client";
import { Link } from "react-router-dom";
import { IMAGES, PICS, CARDS, YOUTUBE_VIDEOS, PARAGRAPH_TEXTS } from "../../const";
import HighlightsStats from "./sample";
import { useEffect, useState, useCallback } from "react";
import Feedback from "../../components/Feedback";
import ImageSlider from "./imageslider";
import CertificateMarquee from "../../components/certificate";
import "./home.css";

// Hero Image Slider
function ImageSliderBox() {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll button
  const handleScrollClick = useCallback(() => {
    const target = document.getElementById("second-section");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="relative w-full h-[93vh] overflow-hidden bg-black">
      {/* Images */}
      {IMAGES.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[1600ms] ease-in-out ${
            index === current ? "opacity-100 scale-100 z-30" : "opacity-0 scale-105 z-20"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-40" />

      {/* Text */}
      <div className="absolute inset-0 z-50 text-white text-center px-4 flex flex-col items-center justify-start pt-16 md:justify-center md:pt-0">
        <h1 className="reveal-text text-3xl md:text-6xl font-medium font-kalnia drop-shadow-xl leading-tight opacity-0 translate-y-[30px] animate-fade-up">
          GoRafts.. <br /> Beyond Limits. Into the Wild.
        </h1>
        <p className="reveal-text text-base md:text-xl mt-3 md:mt-4 max-w-2xl text-white/80 opacity-0 translate-y-[20px] animate-fade-up delay-200">
          Trek. Raft. Jump. Explore. The adventure of a lifetime starts here.
        </p>
        <button
          onClick={handleScrollClick}
          className="mt-6 md:mt-8 px-6 md:px-8 py-2 md:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base md:text-lg rounded-xl shadow-lg shadow-orange-300/30 transition-transform duration-500 hover:scale-105 animate-fade-up delay-500"
        >
          Start the Journey
        </button>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <section className="home josein-sans bg-gradient-to-r from-[#ffffff] via-[#f6fbf9] to-[#e9f5f1]">
      {/* Hero Slider */}
      <ImageSliderBox />

      {/* Paragraph Section */}
      <div id="second-section" className="md:mt-24 py-10 px-4 mt-10 text-center josefin-sans text-gray-800">
        <div className="max-w-4xl mx-auto space-y-4 text-base md:text-lg leading-relaxed">
          {PARAGRAPH_TEXTS.map((text, index) => (
            <p key={index} className="opacity-0 translate-y-6 animate-fade-up" style={{ animationDelay: `${index * 0.25}s` }}>
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Adventure Pulse Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 xl:gap-32 items-center md:mt-32 mt-10 px-3 md:px-10 xl:px-24">
        {/* Text */}
        <div className="px-2 md:px-6 xl:px-10">
          <h2 className="text-center md:text-left text-2xl md:text-4xl font-medium text-gray-800 mb-2">Adventure Pulse</h2>
          <p className="text-center md:text-left text-xs md:text-sm text-gray-600 mb-3">Based in Shivpuri, Rishikesh — India's Adventure Capital</p>
          <p className="text-gray-700 leading-relaxed text-[0.9rem] block md:hidden">
            <span className="font-semibold">Adventure Pulse</span> brings adrenaline to life with rafting, hiking, kayaking, and more.
          </p>
          <p className="text-gray-700 leading-relaxed text-[1rem] hidden md:block">
            <span className="font-semibold">Adventure Pulse</span> is your adventure base in Shivpuri, Rishikesh — a hotspot for thrill-seekers across India...
          </p>
        </div>
        {/* Images */}
        <div className="flex flex-row justify-center items-center gap-3 md:gap-4">
          {PICS.map((src, i) => (
            <img
              key={i}
              src={src}
              loading="lazy"
              alt={`Adventure activity ${i + 1}`}
              className={`w-[110px] sm:w-[140px] md:w-[180px] lg:w-[220px] xl:w-[260px] h-auto object-cover rounded-[50%_30%_50%_30%/30%_50%_30%_50%] shadow-lg ${
                i % 2 === 0 ? "animate-float-slow" : "animate-float-fast"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats */}
      <HighlightsStats />

      {/* Video Section */}
      <section id="bottomRef" className="relative josefin-sans md:mt-10 py-12 px-4 sm:px-6 md:px-10 lg:px-20 animate-fadeInUp">
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-josefin text-black animate-fadeIn">Experience the Adventure</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn delay-200">
            {YOUTUBE_VIDEOS.map((yt, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg bg-black hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.03]"
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
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-gray-700 font-josefin leading-relaxed px-2 animate-fadeIn delay-500">
            These real clips showcase our adventure experiences – live from Rishikesh's whitewater.
          </p>
        </div>
      </section>
      <CertificateMarquee />
      {/* Cards Section */}
      <div className="py-16 px-4 md:px-10 xl:px-24 josefin-sans space-y-20">
        {/* ───────────────── Packages ───────────────── */}
        <div>
          <h2 className="text-3xl font-semibold josefin-sans mb-6 text-center md:text-left">
            Packages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-center">
            {CARDS.map((item, index) => (
              <div
                key={item.label}
                className="group w-full flex flex-col items-center transition-transform duration-500 hover:scale-105"
              >
                <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[4/3] bg-gray-100 transition-all duration-500 group-hover:shadow-xl">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <Link to={item.link}>
                    <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 text-black px-5 py-2 text-sm rounded-md shadow transition-transform duration-300 group-hover:scale-105 group-hover:bg-orange-400">
                      More
                    </button>
                  </Link>
                </div>
                <p className="mt-2 text-lg font-medium opacity-80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ───────────────── Stays ───────────────── */}
        <div>
          <h2 className="text-3xl font-semibold josefin-sans mb-6 md:-mt-15 text-center md:text-left">
            Stays
          </h2>

          {/* ⬇ Made it like Packages (2 cols on mobile), increased card size */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-center">
            {/* Stay 1 */}
            <div className="group w-full flex flex-col items-center transition-transform duration-500 hover:scale-105">
              <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[4/3] bg-gray-100 transition-all duration-500 group-hover:shadow-xl">
                <img
                  src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/home_page_stayCard.webp"
                  alt="Luxury Stay"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <Link to="/stays">
                  <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 text-black px-5 py-2 text-sm rounded-md shadow transition-transform duration-300 group-hover:scale-105 group-hover:bg-orange-400">
                    More
                  </button>
                </Link>
              </div>
              <p className="mt-2 text-lg opacity-80">Luxury Stay</p>
            </div>

            {/* Stay 2 */}
            <div className="group w-full flex flex-col items-center transition-transform duration-500 hover:scale-105">
              <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[4/3] bg-gray-100 transition-all duration-500 group-hover:shadow-xl">
                <img
                  src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/home_page_stayCard.webp"
                  alt="Riverside Cottage"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <Link to="/stays">
                  <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 text-black px-5 py-2 text-sm rounded-md shadow transition-transform duration-300 group-hover:scale-105 group-hover:bg-orange-400">
                    More
                  </button>
                </Link>
              </div>
              <p className="mt-2 text-lg opacity-80">Riverside Cottage</p>
            </div>

            {/* Stay 3 */}
            <div className="group w-full flex flex-col items-center transition-transform duration-500 hover:scale-105">
              <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[4/3] bg-gray-100 transition-all duration-500 group-hover:shadow-xl">
                <img
                  src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/home_page_stayCard.webp"
                  alt="Adventure Camp"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <Link to="/stays">
                  <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 text-black px-5 py-2 text-sm rounded-md shadow transition-transform duration-300 group-hover:scale-105 group-hover:bg-orange-400">
                    More
                  </button>
                </Link>
              </div>
              <p className="mt-2 text-lg opacity-80">Adventure Camp</p>
            </div>
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