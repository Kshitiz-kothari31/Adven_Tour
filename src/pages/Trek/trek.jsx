import { motion } from "framer-motion";
import './trek.css'
import { useEffect, useState  , useRef} from "react";
import Form from "../../components/form/Form";
import { Link } from "react-router-dom";
import GuideScrolle from './guide';

const images = [
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Gomukh%20Tapovan/landscape/gomukhTapovan_img01.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Tungnath/landscape/tungnath_img15.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/kedarkatha%20trek/landscape/kedarkantha_img11.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/kedarkatha%20trek/landscape/kedarkantha_img12.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz,-kothari31/Adven_Tour_img-videos@main/Images/Treks/kedarkatha%20trek/landscape/kedarkantha_img8.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/kedarkatha%20trek/landscape/kedarkantha_img9.webp",
];

const TrekkingPathBackground = () => {
  const contourColors = ["#4b7b55", "#3a5a40", "#2d4a3a", "#1f3a2a"];
  const terrainColors = {
    forest: "#2E7D32",
    water: "#2196F3",
    rock: "#795548",
    meadow: "#8BC34A"
  };

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden animate-[fade-in_2s_forwards]"
    >
      {/* Vintage background grid */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(#e0d8c0 0.5px, transparent 0.5px),
            linear-gradient(90deg, #e0d8c0 0.5px, transparent 0.5px),
            radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.03) 100%)
          `,
          backgroundSize: "25px 25px, 25px 25px, 100% 100%"
        }}
      />

      {/* Map SVG */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        {/* Contour lines */}
        {[15, 25, 35, 45].map((y, i) => (
          <path
            key={i}
            d={`M-10,${y} Q${15 + i*5},${y-3-i} ${40 + i*5},${y} 
                Q${65 + i*5},${y+3+i} 90,${y} L110,${y}`}
            fill="none"
            stroke={contourColors[i]}
            strokeWidth="0.2"
            strokeDasharray="200"
            strokeDashoffset="200"
            style={{
              animation: `draw-line 12s linear infinite, dash-move 4s linear infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}

        {/* Primary trail */}
        <path
          d="M-10,20 C10,40 15,30 25,50 S40,70 55,80 S75,90 110,70"
          fill="none"
          stroke="#4b7b55"
          strokeWidth="0.8"
          strokeLinecap="round"
          style={{
            strokeDasharray: "200",
            strokeDashoffset: "200",
            animation: "draw-line 10s linear infinite"
          }}
        />

        {/* Campsite pulsing */}
        <g transform="translate(35,70)" className="animate-[pulse_3s_infinite]">
          <circle cx="0" cy="0" r="1" fill="#795548" />
          <path d="M0,-1 L-0.5,0 L0,0.5 L0.5,0 Z" fill="#FF9800" />
        </g>

        {/* Hiker moving */}
        {[0, 1, 2].map((i) => (
          <g 
            key={i}
            className="animate-[move-hiker_15s_linear_infinite]"
            style={{ animationDelay: `${i * 4}s` }}
          >
            <circle cx="0" cy="0" r="0.8" fill="#FF5722" />
            <g className="animate-[bob_1.5s_infinite]">
              <path d="M-0.5,0.8 L0,1.2 L0.5,0.8" stroke="#3E2723" strokeWidth="0.15" />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
};
const ImageSliderBox = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-[93vh] overflow-hidden bg-black font-josefin fade-in">
      {prev !== null && (
        <img
          key={`prev-${prev}`}
          src={images[prev]}
          className="absolute top-0 left-0 w-full h-full object-cover z-20 fade-out scale-up"
        />
      )}

      <img
        key={`current-${current}`}
        src={images[current]}
        className="absolute top-0 left-0 w-full h-full object-cover z-30 fade-in scale-down"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-40 fade-in" />

      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-50 text-white text-center px-4 fade-up delay-2000">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-medium font-kalnia drop-shadow-xl leading-tight fade-up delay-2500">
          Embrace the Trekking Spirit
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl text-white/80 fade-up delay-3000">
          Climb new heights, feel the earth beneath your feet, and lose yourself
          in breathtaking trails. Adventure awaits every step you take.
        </p>
        <button
          className="mt-8 px-8 py-3 bg-green-700/70 hover:bg-green-800/80 text-white font-medium text-lg rounded-full backdrop-blur-sm border border-white/20 shadow-md hover:scale-105 active:scale-95 transition-transform"
          onClick={() => {
            const target = document.getElementById("trek-section");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Treks
        </button>
      </div>

      {/* Wave SVG */}
      <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-50 fade-up delay-4000">
        <svg
          className="block w-full h-[100px] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fafafa" />
              <stop offset="100%" stopColor="#DBFCE7" />
            </linearGradient>
          </defs>
          <path
            fill="url(#myGradient)"
            d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </div>
  );
};

function Trek() {
const treks = [
  {
    title: "Dayara Bugyal Trek",
    desc: "A beautiful meadow trek offering panoramic views of the Himalayas, perfect for beginners.",
    cost: "₹7,999 /-",
    link: "/trek/dayarabuyal",   // ✅ matches <Route path="/trek/dayarabuyal" />
    border: true,
    images: [
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/dhayara_card_img_1.webp",
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/dhayara_card_img_2.webp",
    ],
  },
  {
    title: "Kedar katha Trek",
    desc: "Spiritual journey combining trekking with visits to sacred Himalayan shrines.",
    cost: "₹8,999 /-",
    link: "/trek/kedarKatha",   // ✅ matches <Route path="/trek/kedarKatha" />
    border: false,
    images: [
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/kedarkantha_card_img1.webp",
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/kedarkantha_cardd_img2.webp",
    ],
  },
  {
    title: "Gaumukh Tapovan Trek",
    desc: "Challenging trek to the source of the Ganges river with stunning glacier views.",
    cost: "₹14,999 /-",
    link: "/trek/gaumukh",   // ✅ matches <Route path="/trek/gaumukh" />
    border: true,
    images: [
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/Gomukh_Card_img_1.webp",
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/Gomukh_Card_img_2.webp",
    ],
  },
  {
    title: "Hidden Waterfall Trek",
    desc: "Short day trek to discover hidden waterfalls in the lush Himalayan foothills.",
    cost: "₹2,500 /-",
    link: "/trek/hiddenWaterFall",   // ✅ matches <Route path="/trek/hiddenWaterFall" />
    border: false,
    images: [
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/hidden_waterFall_card_img_1.webp",
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/hidden_waterfal_card_img_2.webp",
    ],
  },
  {
    title: "Tungnath Chandrashila Trek",
    desc: "Highest Shiva temple in the world with breathtaking 360° mountain views.",
    cost: "₹5,999 /-",
    link: "/trek/tungnath",   // ✅ matches <Route path="/trek/tungnath" />
    border: true,
    images: [
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/Tungnath_card_img_1.webp",
      "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/Tungnath_card_img_2.webp",
    ],
  },
];
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-gradient-to-r from-[#fafafa] to-[#DBFCE7] josefin-sans relative">
      <ImageSliderBox/>

      {/* Trekking path background for all sections below hero */}
      <div className="relative z-10">
        <TrekkingPathBackground />
        
        <section id="trek-section" className="relative text-center pt-24 pb-16 px-4 sm:px-8 md:px-16 lg:px-24 josefin-sans bg-transparent overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-200/30 rounded-full blur-[140px] z-0"
          />

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="relative z-10 text-3xl sm:text-4xl md:text-5xl josefin-sans font-bold text-teal-800 mb-6"
          >
            Choose Your Adventure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            We offer treks for all experience levels, from gentle valley walks to challenging
            high-altitude expeditions. Each journey is carefully crafted to provide an
            unforgettable Himalayan experience.
          </motion.p>
        </section>

        <section className="space-y-16 px-4 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-20 bg-transparent">
          {treks.map((trek, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              className={`opacity-0 translate-y-10 mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-8 rounded-2xl min-h-[300px] backdrop-blur-md shadow-lg transition-all duration-300 
                ${[0, 2, 4, 6, 8].includes(i) ? "bg-gradient-to-r from-[#DBFCE7] to-[#fafafa]" : "bg-white/90"}
                ${trek.border ? "border-2 border-teal-800" : ""}`}
            >
              {/* 📸 Image Section */}
              <div className="w-full md:w-[40%] flex justify-center items-center relative overflow-hidden group">
                <div className="relative w-[220px] h-[180px]">
                  {trek.images.map((img, idx) => (
                    <img
                      key={idx}
                      loading="lazy"
                      src={img}
                      alt={`Trek ${i + 1}-${idx + 1}`}
                      className={`absolute w-40 h-28 sm:w-44 sm:h-32 object-cover rounded-xl bg-white shadow-md border border-gray-200 transition-transform duration-300 group-hover:scale-105
                        ${idx === 0 ? "top-0 left-0 z-10 animate-slide-left" : "bottom-0 right-0 z-0 animate-slide-right"}`}
                    />
                  ))}
                </div>
              </div>

              {/* 📝 Text Section */}
              <div className="w-full md:w-[55%] flex flex-col justify-center text-left space-y-4">
                <h3 className="opacity-0 translate-y-5 text-xl md:text-2xl font-semibold text-gray-900 animate-fade-up-delay1">
                  {trek.title}
                </h3>
                <p className="opacity-0 translate-y-5 text-gray-700 text-sm sm:text-base leading-relaxed animate-fade-up-delay2">
                  {trek.desc}
                </p>
                <p className="opacity-0 translate-y-5 font-bold text-gray-900 text-sm sm:text-base animate-fade-up-delay3">
                  Cost : {trek.cost}
                </p>
                <div className="w-fit">
                  <Link
                    to={trek.link}
                    className="mt-2 inline-block px-5 py-2 text-sm sm:text-base bg-teal-800 text-white rounded-full hover:bg-teal-700 transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        <GuideScrolle/>
     
        <Form
          boxClass="bg-[#DBFCE7]"
          headingClass="text-[#00786F]"
          buttonClass="bg-[#00786F] hover:bg-[#00786F]"
          focusClass="focus:outline-[#00786F]"
        />
      </div>
    </div>
  );
}

export default Trek;