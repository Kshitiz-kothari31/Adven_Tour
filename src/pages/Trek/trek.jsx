// Optimized Trek.jsx
import heroImg from "../../assets/images/TrekMain/heroImage.png";
import Trek1 from "../../assets/images/TrekMain/DayaraBuyalTrek.jpg";
import downArrowImage from "../../assets/downArrow.png";
import leftBtn from "../../assets/leftArrow.png";
import rightBtn from "../../assets/rightArrow.png";
import GuideImg1 from "../../assets/images/guidesImage/1.jpg";
import GuideImg2 from "../../assets/images/guidesImage/2.jpg";
import GuideImg3 from "../../assets/images/guidesImage/3.jpg";
import GuideImg4 from "../../assets/images/guidesImage/4.jpg";
import styles from "./trek.module.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Trek() {
  const downArrow = useRef();
  const moreBtn = useRef();

  useGSAP(() => {
    const heroAnimation = gsap.utils.toArray(".heroAnimate");

    gsap.from(heroAnimation, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.6,
    });

    gsap.from(downArrow.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: downArrow.current,
        start: "top bottom",
        scroller: "body",
        once: true,
      },
    });

    gsap.from(".heroImg", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    const btn = moreBtn.current;
    const enter = () =>
      gsap.to(btn, { scale: 1.08, duration: 0.3, ease: "power2.out" });
    const leave = () =>
      gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.inOut" });

    btn?.addEventListener("mouseenter", enter);
    btn?.addEventListener("mouseleave", leave);

    return () => {
      btn?.removeEventListener("mouseenter", enter);
      btn?.removeEventListener("mouseleave", leave);
    };
  }, []);

  const treks = [
    {
      title: "Dayara Buyal Trek",
      cost: "\u20B97,999 /-",
      desc: "Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure. Discover epic trails,",
      bg: "bg-green-100",
      images: [Trek1, Trek1],
      roundImages: false,
      border: false,
    },
    {
      title: "Kedar Katha Trek",
      cost: "\u20B98,999 /-",
      desc: "Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure. Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure.",
      bg: "bg-white",
      images: [Trek1, Trek1],
      roundImages: false,
      border: true,
    },
    {
      title: "Gomukh Tapovan Trek",
      cost: "\u20B914,999 /-",
      desc: "Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure. Discover epic trails, expert i",
      bg: "bg-green-100",
      images: [Trek1, Trek1],
      roundImages: false,
      border: false,
    },
    {
      title: "Hidden WaterFall Trek",
      cost: "\u20B92,500 /-",
      desc: "Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure. Discover epic trails, expert tips,",
      bg: "bg-white",
      images: [Trek1, Trek1],
      roundImages: false,
      border: true,
    },
    {
      title: "Tungnath Chander Shila Trek",
      cost: "\u20B95,999 /-",
      desc: "Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure.",
      bg: "bg-green-100",
      images: [Trek1, Trek1],
      roundImages: true,
      border: false,
    },
  ];

  return (
    <div className={styles.main}>
      <section className="relative min-h-[700px] pt-16 pb-24 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10 overflow-hidden">
        <img
          src={heroImg}
          alt="Hero"
          className="absolute top-0 right-0 h-full w-[60%] sm:w-[55%] md:w-[50%] lg:w-[45%] xl:w-[40%] object-cover z-0 opacity-90 pointer-events-none heroImg"
        />

        <div className="relative z-20 text-left ml-2 md:ml-6 xl:ml-[140px] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 heroAnimate leading-tight">
            Conquer New Heights One Peak at a Time
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 heroAnimate">
            Discover epic trails, expert tips, and inspiring stories to fuel
            your next mountain adventure. Whether you're a beginner or a pro, we
            help you reach new heights with confidence.
          </p>
          <button
            ref={moreBtn}
            className="moreBtn bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full text-lg sm:text-xl heroAnimate cursor-pointer"
          >
            More
          </button>
        </div>
      </section>

      <section className="text-center px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 mb-4">
          Come Join Us For the Ultimate Treking Adventure.
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
          Discover epic trails, expert tips, and inspiring stories to fuel your
          next mountain adventure. Whether you're a beginner or a pro, we help
          you reach new heights with confidence.
        </p>
      </section>

      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-800 border-2 border-red-500 rounded-full flex items-center justify-center mx-auto mt-10">
        <img
          src={downArrowImage}
          alt="Arrow"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </div>

      <section className="space-y-12 px-4 sm:px-12 md:px-20 lg:px-32 py-16">
        {treks.map((trek, i) => (
          <div
            key={i}
            className={`mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6 p-6 md:p-8 rounded-2xl min-h-[300px] relative ${
              trek.bg
            } ${trek.border ? "border-2 border-teal-800" : ""}`}
          >
            {/* Image Section */}
            <div
              className={`w-full md:w-[45%] flex relative ${
                i === 1
                  ? "flex-col gap-4 items-center"
                  : i === 2
                  ? "justify-center"
                  : i === 3 || i === 4
                  ? "justify-center items-center"
                  : "flex-row gap-3 justify-center"
              }`}
            >
              {trek.images.map((img, j) => {
                // Image size & variation logic
                const styleByCard = {
                  0: {
                    className:
                      j === 0
                        ? "translate-x-[-6px] translate-y-[-6px]"
                        : "translate-x-[6px] translate-y-[6px]",
                    rounded: "rounded-xl",
                  },
                  1: {
                    className: "",
                    rounded: "rounded-2xl",
                  },
                  2: {
                    className: "",
                    rounded: "rounded-xl",
                  },
                  3: {
                    className:
                      j === 0
                        ? "absolute top-0 left-4 z-10"
                        : "absolute top-8 left-12 z-0",
                    rounded: "rounded-md",
                  },
                  4: {
                    className:
                      j === 0
                        ? "translate-x-[-8px] rotate-[-2deg] z-10"
                        : "translate-x-[8px] rotate-[2deg] z-0",
                    rounded: "rounded-xl",
                  },
                };

                const { className, rounded } = styleByCard[i] || {
                  className: "",
                  rounded: "rounded-xl",
                };

                return (
                  <img
                    key={j}
                    src={img}
                    alt={`Trek ${i + 1}`}
                    className={`w-44 h-32 sm:w-48 sm:h-36 object-cover ${rounded} shadow-md transition-transform duration-300 hover:scale-105 ${className}`}
                  />
                );
              })}
            </div>

            {/* Text Content Section */}
            <div className="w-full md:w-[55%] flex flex-col justify-center text-left space-y-3">
              <h3 className="text-2xl font-semibold text-gray-900">
                {trek.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{trek.desc}</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">
                Cost : {trek.cost}
              </p>
              <button className="bg-teal-900 text-white px-4 py-2 rounded-full text-sm w-fit">
                More Details
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800">
          Your Guides Your Travel Partners
        </h2>

        {/* Scrolling Image Carousel */}
        <div className="relative flex items-center justify-center py-6">
          {/* Left Arrow */}
          <img
            src={leftBtn}
            alt="Left"
            className="w-8 h-8 shrink-0 cursor-pointer z-10"
          />

          {/* Scrolling Image Container */}
          <div className="flex overflow-x-auto gap-6 px-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {[GuideImg1, GuideImg2, GuideImg3, GuideImg4].map((img, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-40 h-40 rounded-[1rem] overflow-hidden bg-white shadow-md"
              >
                <img
                  src={img}
                  alt={`Guide ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <img
            src={rightBtn}
            alt="Right"
            className="w-8 h-8 shrink-0 cursor-pointer z-10"
          />
        </div>

        <p className="text-gray-700 max-w-4xl mx-auto text-sm sm:text-base">
          Our expert guides are the heart of every journey we offer—passionate
          storytellers, seasoned explorers, and friendly companions rolled into
          one. With deep local knowledge and a genuine love for discovery, they
          turn every trip into a rich, immersive experience.
        </p>

        <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full text-sm sm:text-base transition duration-300">
          About Guides
        </button>
      </section>
    </div>
  );
}

export default Trek;
