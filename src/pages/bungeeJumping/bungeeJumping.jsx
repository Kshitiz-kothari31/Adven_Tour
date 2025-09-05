import { useRef , useState , useEffect } from "react";
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
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.3 }
    );

    const children = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    children?.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // run once
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

   useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // play once
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-gradient-to-r from-white to-[#cceeff] josefin-sans ">

<section
  className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-20 pb-32 overflow-hidden bg-cover bg-center animate-hero-fade"
  style={{
    backgroundImage:
      "url(https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping%20Page/Hero_image.webp)",
  }}
>
  {/* 🧭 Title */}
  <h1 className="text-white text-3xl sm:text-6xl font-semibold drop-shadow-lg font-kalnia leading-tight z-10 animate-slide-down-delay">
    Jump into the Thrill of Bungee Adventures
  </h1>

  {/* 📜 Subtitle */}
  <p className="max-w-2xl text-lg sm:text-2xl text-white font-medium mt-6 mb-8 z-10 animate-slide-up-delay">
    Experience the adrenaline rush of freefalling from breathtaking heights in Rishikesh.
  </p>

  {/* 🚀 WhatsApp Button */}
  <button
    onClick={() =>
      window.open(
        "https://wa.me/7078287331?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20bungee%20packages",
        "_blank"
      )
    }
    className="relative px-10 py-3 text-white font-bold rounded-full shadow-xl bg-gradient-to-r from-green-500 to-emerald-600 overflow-hidden transition-all duration-700 transform group hover:scale-90 hover:-rotate-1 z-10"
  >
    {/* Shine Effect */}
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out blur-sm"></span>

    {/* Glow on Hover */}
    <span className="absolute inset-0 w-full h-full bg-emerald-500 rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-125 group-hover:blur-2xl transition-all duration-700"></span>

    {/* Button Text */}
    <span className="relative z-10 tracking-wide group-hover:tracking-widest group-hover:animate-pulse">
      💬 WhatsApp Us
    </span>
  </button>

  {/* ↓ Scroll Button */}
  <div className="mt-12 z-10">
    <button
      onClick={() =>
        document.getElementById("rishikesh")?.scrollIntoView({
          behavior: "smooth",
        })
      }
      className="bg-orange-300 text-white p-4 rounded-full text-2xl shadow-lg transition-all duration-700 hover:bg-orange-500 hover:animate-spin-once"
    >
      ↓
    </button>
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
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#cceeff" />
        </linearGradient>
      </defs>
      <path
        fill="url(#waveGradient)"
        fillOpacity="1"
        d="M0,192L48,165.3C96,139,192,85,288,80C384,75,480,117,576,133.3C672,149,768,139,864,122.7C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96V320H0Z"
      ></path>
    </svg>
  </div>
</section>

  
      <section
        ref={ref}
        className={`py-20 px-4 md:mt-10 md:px-10 xl:px-40 text-black josefin-sans transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Title */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-light underline underline-offset-8 decoration-black drop-shadow-sm text-center leading-snug transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0 rotate-0 skew-y-0"
              : "opacity-0 -translate-y-20 -rotate-3 skew-y-3"
          }`}
        >
          Come Join Us for Experience the Falling Adventure
        </h2>

        {/* Paragraph */}
        <p
          className={`mt-6 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-gray-800 text-center px-2 transform transition-all duration-1000 ease-out delay-300 ${
            visible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-8"
          } hover:scale-105`}
        >
          Discover epic trails, expert tips, and inspiring stories to fuel your
          next mountain adventure. Whether you're a beginner or a pro, we help
          you reach new heights with confidence.
        </p>
      </section>

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
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-black underline underline-offset-8 mb-6 animate-fade-up"
        >
          Rishikesh
        </h2>

        <p
          className="text-center text-lg md:text-xl font-light text-[#004785] mb-12 max-w-2xl mx-auto animate-fade-in delay-1"
        >
          Pro, we help you reach new heights with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, i) => (
            <div
              key={i}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl 
                hover:shadow-orange-400/30 transition-transform duration-300 
                hover:scale-[1.03] hover:-translate-y-1 border border-white/20 
                animate-fade-up delay-${i}`}
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
                  className="cursor-pointer mt-3 w-fit px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 
                  text-white rounded-lg hover:from-red-500 hover:to-orange-500 transition-all 
                  duration-300 text-sm font-semibold shadow-lg hover:scale-105"
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
      <section className="py-20 px-4 md:mt-15 sm:px-6 md:px-10 xl:px-32 2xl:px-60 text-center text-black josefin-sans">

      {/* Section Animation */}
      <div className="reveal animate-fade-in text-center">
      {/* Title */}
      <h2 className="reveal animate-slide-down text-3xl sm:text-4xl md:text-5xl font-semibold underline underline-offset-8 decoration-black drop-shadow-sm">
      Rishikesh Bungee <span className="text-black">Jumping</span>
      </h2>

      {/* Subtext */}
      <p className="reveal animate-scale-up mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-gray-700">
      Leap from India's highest bungee point — 83 meters of pure thrill in the
      heart of Rishikesh.
      </p>
      </div>

      {/* Video Cards */}
      <section className="w-full px-4 py-12 md:px-10 lg:px-20 josefin-sans">
      {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-12">
              🪂 Rishikesh <span className="text-orange-500">Bungee Jumping</span>
            </h2>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {videos.map((video) => (
        <div
          key={video.id}
          className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-400/40 
                      bg-gradient-to-br from-gray-900 to-black border border-white/10"
        >
          {/* Video */}
          <div className="aspect-[9/16] w-full">
            <iframe
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover rounded-2xl"
            ></iframe>
          </div>

          {/* Overlay content */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4">
            <h3 className="text-lg font-semibold text-white drop-shadow-md">
              {video.title}
            </h3>
            <p className="text-sm text-gray-300">{video.subtitle}</p>
          </div>
        </div>
      ))}
      </div>
      </section>
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