import { ChevronDown } from "lucide-react";
import { lazy, Suspense } from "react";
import "./Zipline.css";

// ✅ Lazy load big components
import Feedback from "../../components/Feedback";
import Form from "../../components/form/Form";
const Kayaking = () => {
  // ⚡ Optimized image sizes (Unsplash resizing with w param)
  const bgHero =
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/kayking%20page/hero_img1.webp";
  const img1 =
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/kayking%20page/kayking_1.webp";
  const img2 =
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/kayking%20page/kayking_2.webp";

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
      <section className="relative w-full h-[90vh] overflow-hidden text-white animate-fade-in">
        {/* Background */}
        <img
          src={bgHero}
          alt="Kayaking hero"
          className="absolute inset-0 w-full h-full object-cover z-0 animate-zoom-out"
          loading="lazy"
        />

        {/* Hero Text */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-kalnia opacity-0 animate-slide-up [animation-delay:0.5s]">
            Discover the Thrill of Kayaking in <br /> Shivpuri, Rishikesh
          </h1>

          <p className="text-white/90 text-sm md:text-lg max-w-2xl mb-6 josefin-sans opacity-0 animate-slide-up [animation-delay:0.8s]">
            Glide through the Ganges with breathtaking Himalayan views. Your adventure
            begins where the river calls.
          </p>

          <button
            className="opacity-0 animate-slide-up [animation-delay:1.1s] bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-110 hover:shadow-[0_0_28px_rgba(234,88,12,0.6)] active:scale-95"
            onClick={() =>
              window.open(
                'https://wa.me/7078287331?text=Hello%2C%20I%20would%20like%20to%20book%20a%20tour',
                '_blank'
              )
            }
          >
            📩 Book Now
          </button>
        </div>
      </section>


      {/* ---------------- Scroll Button ---------------- */}
    <button
      onClick={handleScroll}
      className="mx-auto mt-6 flex items-center justify-center w-12 h-12 rounded-full bg-[#E0F7FA] hover:bg-[#C5EEF4] text-black shadow-lg animate-bounce-slow"
    >
      <ChevronDown className="w-6 h-6" />
    </button>


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
            <h2 className="text-2xl sm:text-3xl mt-6 md:text-4xl font-bold font-josefin opacity-0 animate-slide-up [animation-delay:0.2s]">
              The Adventure Capital of India
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed opacity-0 animate-slide-up [animation-delay:0.5s]">
              Shivpuri, just a few kilometers upstream from Rishikesh, is known
              for its pristine natural beauty, powerful river currents, and
              serene Himalayan backdrop...
            </p>
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
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center gap-2"
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
