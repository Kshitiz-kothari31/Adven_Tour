"use client";
import { lazy, Suspense, useState, useEffect, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { IMAGES, PICS, CARDS, YOUTUBE_VIDEOS, PARAGRAPH_TEXTS } from "../../const";
import HighlightsStats from "./sample";
import Feedback from "../../components/Feedback";
import CertificateMarquee from "../../components/certificate";
import "./home.css";

// Lazy load components that aren't immediately visible
const ImageSlider = lazy(() => import("./imageslider"));

// Memoize the hero slider to prevent unnecessary re-renders
const ImageSliderBox = memo(() => {
  const [current, setCurrent] = useState(0);
  
  // Auto-slide with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  // Scroll button with useCallback
  const handleScrollClick = useCallback(() => {
    const target = document.getElementById("second-section");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, []);
  
  // Preload the next image for smoother transitions
  useEffect(() => {
    const nextIndex = (current + 1) % IMAGES.length;
    const img = new Image();
    img.src = IMAGES[nextIndex];
  }, [current]);
  
  return (
    <div className="relative w-full h-[93vh] overflow-hidden bg-black">
      {/* Images with optimized loading */}
      {IMAGES.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[1600ms] ease-in-out ${
            index === current ? "opacity-100 scale-100 z-30" : "opacity-0 scale-105 z-20"
          }`}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-40" />
      
      {/* Text content */}
      <div className="absolute inset-0 z-50 text-white text-center px-4 flex flex-col 
                      items-center justify-start sm:justify-center md:justify-center 
                      pt-43 md:pt-0">
        <h1 className="reveal-text text-3xl md:text-6xl font-medium font-kalnia drop-shadow-xl leading-tight opacity-0 translate-y-[30px] animate-fade-up">
          GoRafts.. <br /> Beyond Limits. Into the Wild.
        </h1>
        <p className="reveal-text text-base md:text-xl mt-3 md:mt-4 max-w-2xl text-white/80 opacity-0 translate-y-[20px] animate-fade-up delay-200">
          Trek. Raft. Jump. Explore. The adventure of a lifetime starts here.
        </p>
        <button
          onClick={handleScrollClick}
          className="mt-6 md:mt-8 px-6 md:px-8 py-2 md:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base md:text-lg rounded-xl shadow-lg shadow-orange-300/30 transition-transform duration-500 hover:scale-105 animate-fade-up delay-500 cursor-pointer"
        >
          Start Your Journey
        </button>
      </div>
    </div>
  );
});

// Memoize the stays section
const StaysSection = memo(() => {
  const stays = [
    {
      title: "Luxury Stay",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Riverside Cottage",
      img: "https://images.unsplash.com/photo-1604014237744-1d1a7f34c5c6?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Adventure Camp",
      img: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold josefin-sans mb-6 text-center md:text-left">
        Stays
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-center">
        {stays.map((stay, i) => (
          <div
            key={stay.title}
            className="group w-full flex flex-col items-center opacity-0 translate-y-10 animate-fadeInUp"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[4/3] bg-gray-100 transition-all duration-500 group-hover:shadow-xl">
              <img
                src={stay.img}
                alt={stay.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <Link to="/stays">
                <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-5 py-2 text-sm rounded-md shadow transition-transform duration-300 group-hover:scale-105 group-hover:bg-orange-400 cursor-pointer">
                  More
                </button>
              </Link>
            </div>
            <p className="mt-2 text-lg opacity-80">{stay.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

// Memoize the packages section
const PackagesSection = memo(() => {
  return (
    <div>
      <h2 className="text-3xl font-semibold josefin-sans mb-6 text-center md:text-left">
        Packages
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-center">
        {CARDS.map((item, index) => (
          <div
            key={item.label}
            className="group w-full flex flex-col items-center opacity-0 translate-y-10 animate-fadeInUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[4/3] bg-gray-100 transition-all duration-500 group-hover:shadow-xl">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <Link to={item.link}>
                <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-5 py-2 text-sm rounded-md shadow transition-transform duration-300 group-hover:scale-105 group-hover:bg-orange-400 cursor-pointer">
                  More
                </button>
              </Link>
            </div>
            <p className="mt-2 text-lg font-medium opacity-80">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

// Memoize the video section
const VideoSection = memo(() => {
  return (
    <section id="bottomRef" className="relative josefin-sans -mt-10 md:mt-10 py-12 px-4 sm:px-6 md:px-10 lg:px-20 animate-fadeInUp">
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-josefin text-black animate-fadeIn">
          Experience the <u>Adventure</u>
        </h2>
        <p>These real clips showcase our adventure experiences – live from Rishikesh's whitewater.</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn delay-200">
          {YOUTUBE_VIDEOS.map((yt, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg bg-black hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.03]">
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
          This isn't just stock footage; these are genuine moments captured from our actual trips. The quality of our equipment, and the breathtaking natural scenery you'll discover on your journey with us. <b>Get ready to picture yourself on the water with us!</b>
        </p>
      </div>
    </section>
  );
});

// Main Home component
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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 xl:gap-20 items-center md:mt-32 mt-10 px-3 md:px-10 xl:px-24">
        {/* Text (left side) */}
        <div className="px-2 md:px-6 xl:px-10 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-800 mb-2">
            GoRafts
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-3">
            Based in Shivpuri, Rishikesh — India's Adventure Capital
          </p>
          {/* Mobile text */}
          <p className="text-gray-700 leading-relaxed text-[1rem] block md:hidden">
            <span className="font-semibold">GoRafts</span> brings adrenaline to life with rafting, hiking, kayaking, and more.
          </p>
          {/* Desktop text */}
          <p className="text-gray-700 leading-relaxed text-[1rem] hidden md:block">
            <span className="font-semibold">GoRafts</span> is your adventure base in Shivpuri, <b>Rishikesh</b> — a hotspot for thrill-seekers across India.
            We have been helping thousands of customers experience their first memorable adventure since <b><i>1997</i></b>. <br />
            We have completed over <b>4000+</b> successful rafting trips on the Ganges, and our expert guides ensure safety and fun for all skill levels. <br />
          </p>
        </div>
        {/* Images (right side) */}
        <div className="flex justify-center md:justify-end items-center gap-4 flex-row flex-nowrap">
          {PICS.map((src, i) => (
            <img
              key={i}
              src={src}
              loading="lazy"
              alt={`Adventure activity ${i + 1}`}
              className={`w-[140px] sm:w-[170px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-auto object-cover rounded-[50%_30%_50%_30%/30%_50%_30%_50%] shadow-lg ${
                i % 2 === 0 ? "animate-float-slow" : "animate-float-fast"
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Stats */}
      <HighlightsStats />
      
      {/* Video Section */}
      <VideoSection />
      
      <CertificateMarquee />
      
      {/* Cards Section */}
      <section className="py-16 px-4 md:px-10 xl:px-24 josefin-sans space-y-20">
        <PackagesSection />
        <StaysSection />
      </section>
      
      {/* Image slider with lazy loading */}
      <section className="mt-10">
        <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading gallery...</div>}>
          <ImageSlider />
        </Suspense>
      </section>
      
      {/* Feedback component */}
      <Feedback />
    </section>
  );
};

export default Home;