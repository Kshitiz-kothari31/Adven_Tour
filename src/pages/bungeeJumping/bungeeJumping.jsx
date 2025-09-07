import { useRef, useState, useEffect } from "react";
import Form from "../../components/form/Form";
import Feedback from "../../components/Feedback";

const marqueeItems = [
  "Leap into adrenaline",
  "India best bungee spot",
  "Face your fears head-on",
  "Gravity-defying thrill",
  "Ultimate free-fall rush",
  "Harness up. Jump down.",
  "Feel the rope snap back",
  "Certified jump masters",
  "High jumps, higher confidence",
  "Adventure starts here",
  "Fall hard, smile harder",
  "Pure adrenaline therapy",
  "Jump with zero regrets",
  "Your heart will thank you",
  "Defy gravity in style",
  "The edge is just the start",
];

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/sjmNmWuYXqQ?controls=1&autoplay=0&modestbranding=1&rel=0",
    title: "Jump into the Abyss",
    subtitle: "83 meters of pure adrenaline",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/sjmNmWuYXqQ?controls=1&autoplay=0&modestbranding=1&rel=0",
    title: "Scream Worthy Heights",
    subtitle: "India's highest bungee spot",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/xI-IQ7EpLgE?controls=1&autoplay=0&modestbranding=1&rel=0",
    title: "Fear Meets Freedom",
    subtitle: "Conquer your limits",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/sjmNmWuYXqQ?controls=1&autoplay=0&modestbranding=1&rel=0",
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
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping%20Page/Splash_Dice.webp",
  },
  {
    title: "Splash Dice",
    height: "53 meter's",
    cost: "₹3000 /-",
    extra: "*DSLR Video Included",
    image:
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping%20Page/Splash_Dice.webp",
  },
  {
    title: "Himalayan Bungee",
    height: "117 meter's",
    cost: "₹4,600 /-",
    image:
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping%20Page/Himalayan_Bungee.webp",
  },
];

function BungeeJumping() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <main className="bg-gradient-to-r from-white to-[#cceeff] josefin-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-20 pb-32 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping%20Page/Hero_image.webp)",
        }}
      >
        <h1 className="text-white text-3xl sm:text-6xl font-semibold drop-shadow-lg font-kalnia leading-tight animate-fade-up">
          Jump into the Thrill of Bungee Adventures
        </h1>

        <p className="max-w-2xl text-lg sm:text-2xl text-white font-medium mt-6 mb-8 animate-fade-up delay-200">
          Experience the adrenaline rush of freefalling from breathtaking heights in Rishikesh.
        </p>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/7078287331?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20bungee%20packages",
              "_blank"
            )
          }
          className="relative px-10 py-3 text-white font-bold rounded-full shadow-xl bg-gradient-to-r from-green-500 to-emerald-600 overflow-hidden transition-all duration-700 transform group hover:scale-90 hover:-rotate-1"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out blur-sm"></span>
          <span className="absolute inset-0 w-full h-full bg-emerald-500 rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-125 group-hover:blur-2xl transition-all duration-700"></span>
          <span className="relative z-10 tracking-wide group-hover:tracking-widest group-hover:animate-pulse">
            💬 WhatsApp Us
          </span>
        </button>

        <div className="mt-12">
          <button
            onClick={() =>
              document.getElementById("rishikesh")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-blue-300 cursor-pointer text-white p-4 rounded-full text-2xl shadow-lg transition-all duration-700 hover:bg-blue-500 hover:animate-spin-once"
          >
            ↓
          </button>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="josefin-sans md:mt-15 overflow-hidden mt-4">
        <div className="relative w-full bg-gradient-to-r from-white to-[#89dcfa] h-[60px] flex items-center overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-black font-light text-3xl gap-16 flex min-w-[200%]">
            {[...Array(3)].flatMap(() =>
              marqueeItems.map((text, i) => (
                <span key={`${text}-${i}`} className="shrink-0 px-8">
                  ✦ {text}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <section
        id="rishikesh"
        className="py-16 md:mt-15 px-4 sm:px-6 md:px-10 xl:px-32 2xl:px-60 text-black"
      >
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-center underline underline-offset-8 mb-6 transition-all duration-1000 ${
            visibleSections["plans"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          ref={addToRefs}
          data-id="plans"
        >
          Rishikesh
        </h2>

        <p
          className={`text-center text-lg md:text-xl font-light text-[#004785] mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
            visibleSections["plans-p"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          ref={addToRefs}
          data-id="plans-p"
        >
          Pro, we help you reach new heights with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-400/30 transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1 border border-white/20"
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col gap-2 text-left">
                <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                {item.extra && <p className="text-sm text-[#004785] font-medium">{item.extra}</p>}
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
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="relative josefin-sans md:mt-10 py-12 px-4 sm:px-6 md:px-10 lg:px-20 animate-fadeInUp">
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black animate-fadeIn">
            🪂 Rishikesh <span className="text-orange-500">Bungee Jumping</span>
          </h2>

          {/* Video Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn delay-200">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative overflow-hidden rounded-2xl shadow-lg bg-black hover:shadow-orange-400/40 transition-all duration-300 hover:scale-[1.03]"
              >
                {/* Video */}
                <div className="aspect-[9/16] w-full">
                  <iframe
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allow="encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-gray-700 font-josefin leading-relaxed px-2 animate-fadeIn delay-500">
            These real clips showcase our adventure experiences – live from Rishikesh's whitewater.
          </p>
        </div>
      </section>
      
      <Feedback />

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
