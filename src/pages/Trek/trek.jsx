import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Form from "../../components/form/Form";
import { Link } from "react-router-dom";
import Trek1 from "../../assets/images/TrekMain/DayaraBuyalTrek.jpg";
import GuideScrolle from './guide';

// Enhanced image gallery with high-quality trekking photos
const images = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506535995048-638aa1b62b77?q=80&w=2070&auto=format&fit=crop"
];

const TrekkingPathBackground = () => {
  // Color schemes for different map elements
  const contourColors = ["#4b7b55", "#3a5a40", "#2d4a3a", "#1f3a2a"];
  const terrainColors = {
    forest: "#2E7D32",
    water: "#2196F3",
    rock: "#795548",
    meadow: "#8BC34A"
  };

  return (
    <motion.div 
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 2 }}
    >
      {/* Vintage map background with subtle texture */}
      <motion.div 
        className="absolute inset-0 bg-[#f8f4e8] opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(#e0d8c0 0.5px, transparent 0.5px),
            linear-gradient(90deg, #e0d8c0 0.5px, transparent 0.5px),
            radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.03) 100%)
          `,
          backgroundSize: "25px 25px, 25px 25px, 100% 100%",
          backgroundPosition: "center center"
        }}
      />
      
      {/* Hand-drawn paper texture */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXBlciIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhcGVyKSIvPjwvc3ZnPg==')"
        }}
      />
      
      {/* Main map SVG */}
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        {/* Elevation contour lines with hand-drawn effect */}
        {[15, 25, 35, 45].map((y, i) => (
          <motion.path
            key={`contour-${i}`}
            d={`M-10,${y} Q${15 + i*5},${y-3-i} ${40 + i*5},${y} 
                Q${65 + i*5},${y+3+i} 90,${y} L110,${y}`}
            fill="none"
            stroke={contourColors[i]}
            strokeWidth="0.2"
            strokeDasharray={i % 2 === 0 ? "0.5 1.5" : "none"}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              strokeDashoffset: [0, -10],
            }}
            transition={{
              duration: 12,
              delay: i * 0.8,
              ease: "linear",
              repeat: Infinity
            }}
          />
        ))}
        
        {/* Primary trail with varying width for natural look */}
        <motion.path
          d="M-10,20 
             C10,40 15,30 25,50 
             S40,70 55,80 
             S75,90 110,70
             L110,70 L120,65 L130,75 L140,60 L150,80 L160,65 L170,75"
          fill="none"
          stroke="#4b7b55"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity
          }}
        />
        
        {/* Secondary trails with dashed style */}
        <motion.g>
          <motion.path
            d="M30,10 L35,15 L30,20 L35,25 L30,30 L35,35"
            fill="none"
            stroke="#3a5a40"
            strokeWidth="0.4"
            strokeDasharray="2 1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 8,
              delay: 1.5,
              ease: "linear",
              repeat: Infinity
            }}
          />
          <motion.path
            d="M80,50 Q85,55 90,50 Q95,45 100,50"
            fill="none"
            stroke={terrainColors.water}
            strokeWidth="0.3"
            strokeDasharray="0.8 0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 6,
              delay: 2,
              ease: "linear",
              repeat: Infinity
            }}
          />
        </motion.g>
        
        {/* Map landmarks with subtle animation */}
        <motion.g>
          {/* Start point with tent icon */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.8, 1, 0.8], scale: [0.9, 1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity }}
            transform="translate(-10, 20)"
          >
            <motion.path
              d="M-1.5,0 L0,-2 L1.5,0 L0,1.5 Z"
              fill="#4CAF50"
              stroke="#2E7D32"
              strokeWidth="0.15"
            />
            <motion.text
              x="0"
              y="-3"
              fontSize="1.2"
              fill="#2E7D32"
              fontFamily="'Courier New', monospace"
              fontWeight="bold"
              textAnchor="middle"
            >
              Start
            </motion.text>
          </motion.g>
          
          {/* Summit with mountain icon */}
          <motion.g
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 2 }}
            transform="translate(55, 80)"
          >
            <motion.path
              d="M-2,1 L0,-2 L2,1 Z"
              fill="#FF5722"
              stroke="#E64A19"
              strokeWidth="0.15"
            />
            <motion.text
              x="0"
              y="-3"
              fontSize="1.2"
              fill="#E64A19"
              fontFamily="'Courier New', monospace"
              fontWeight="bold"
              textAnchor="middle"
            >
              3850m
            </motion.text>
          </motion.g>
          
          {/* Campsite with fire icon */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.6, 0.9, 0.6] }}
            transition={{ delay: 1.5, duration: 3, repeat: Infinity }}
            transform="translate(35, 70)"
          >
            <motion.circle cx="0" cy="0" r="1" fill="#795548" stroke="#5D4037" strokeWidth="0.1" />
            <motion.path
              d="M0,-1 L-0.5,0 L0,0.5 L0.5,0 Z"
              fill="#FF9800"
              stroke="#F57C00"
              strokeWidth="0.1"
            />
          </motion.g>
        </motion.g>
        
        {/* Animated hikers as map markers */}
        {[0, 1, 2].map((i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: ["-10", "10", "25", "35", "45", "55", "65", "75", "110"],
              y: ["20", "40", "50", "70", "80", "100", "90", "70"]
            }}
            transition={{
              duration: 15,
              delay: i * 4,
              ease: "linear",
              repeat: Infinity
            }}
          >
            <motion.g
              animate={{
                y: [0, -0.5, 0, 0.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.circle
                cx="0"
                cy="0"
                r="0.8"
                fill="#FF5722"
                stroke="#E64A19"
                strokeWidth="0.1"
              />
              <motion.path
                d="M-0.5,0.8 L0,1.2 L0.5,0.8"
                fill="none"
                stroke="#3E2723"
                strokeWidth="0.15"
              />
            </motion.g>
          </motion.g>
        ))}
        
        {/* Compass rose with animation */}
        <motion.g
          transform="translate(85, 15)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.path
            d="M0,-4 L1.5,0 L0,4 L-1.5,0 Z M-4,0 L0,1.5 L4,0 L0,-1.5 Z"
            fill="#3E2723"
            stroke="#212121"
            strokeWidth="0.1"
          />
          <motion.g>
            {["N", "E", "S", "W"].map((dir, i) => (
              <motion.text
                key={dir}
                x={i % 2 === 0 ? 0 : i === 1 ? 5 : -5}
                y={i % 2 === 0 ? (i === 0 ? -6 : 6) : 0}
                fontSize="1.3"
                fill="#3E2723"
                fontFamily="Arial"
                fontWeight="bold"
                textAnchor="middle"
              >
                {dir}
              </motion.text>
            ))}
          </motion.g>
          <motion.circle
            cx="0"
            cy="0"
            r="1.5"
            fill="none"
            stroke="#3E2723"
            strokeWidth="0.1"
            strokeDasharray="0.5 0.5"
          />
        </motion.g>
        
        {/* Scale indicator with animation */}
        <motion.g
          transform="translate(10, 90)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <motion.rect
            x="0"
            y="-0.3"
            width="10"
            height="0.6"
            fill="#3E2723"
            stroke="#212121"
            strokeWidth="0.1"
          />
          <motion.line
            x1="0"
            y1="0"
            x2="0"
            y2="-1"
            stroke="#3E2723"
            strokeWidth="0.1"
          />
          <motion.line
            x1="10"
            y1="0"
            x2="10"
            y2="-1"
            stroke="#3E2723"
            strokeWidth="0.1"
          />
          <motion.text
            x="5"
            y="2"
            fontSize="1.2"
            fill="#3E2723"
            fontFamily="'Courier New', monospace"
            fontWeight="bold"
            textAnchor="middle"
          >
            2 km
          </motion.text>
        </motion.g>
        
        {/* Legend box with subtle pulse */}
        <motion.g
          transform="translate(70, 85)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.7, 0.9, 0.7] }}
          transition={{ delay: 2, duration: 6, repeat: Infinity }}
        >
          <motion.rect
            x="0"
            y="0"
            width="22"
            height="12"
            rx="1"
            fill="#f8f4e8"
            stroke="#3E2723"
            strokeWidth="0.2"
            fillOpacity="0.8"
          />
          <motion.text
            x="1"
            y="1.5"
            fontSize="1"
            fill="#3E2723"
            fontFamily="'Courier New', monospace"
            fontWeight="bold"
          >
            <motion.tspan x="1" dy="1.2">━ Primary Trail</motion.tspan>
            <motion.tspan x="1" dy="1.2">- - - Secondary</motion.tspan>
            <motion.tspan x="1" dy="1.2">▲ Summit (3850m)</motion.tspan>
            <motion.tspan x="1" dy="1.2">⛺ Campsite</motion.tspan>
            <motion.tspan x="1" dy="1.2">〰️ Contour Lines</motion.tspan>
          </motion.text>
        </motion.g>
      </motion.svg>
    </motion.div>
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
    <motion.div
      className="relative w-full h-[93vh] overflow-hidden bg-black font-josefin"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {prev !== null && (
        <motion.img
          key={`prev-${prev}`}
          src={images[prev]}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
        />
      )}

      <motion.img
        key={`current-${current}`}
        src={images[current]}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full object-cover z-30"
      />

      <motion.div
        className="absolute inset-0 z-40 pointer-events-none bg-[url('/fog.png')] bg-cover bg-center opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-50 text-white text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="text-4xl md:text-6xl xl:text-7xl font-medium font-kalnia drop-shadow-xl leading-tight"
        >
          Embrace the Trekking Spirit
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 1 }}
          className="text-lg md:text-xl mt-4 max-w-2xl text-white/80"
        >
          Climb new heights, feel the earth beneath your feet, and lose yourself
          in breathtaking trails. Adventure awaits every step you take.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          className="mt-8 px-8 py-3 bg-green-700/70 hover:bg-green-800/80 text-white font-medium text-lg rounded-full backdrop-blur-sm border border-white/20 shadow-md"
          onClick={() => {
            const target = document.getElementById("trek-section");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Treks
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-[url('/mountains-silhouette.svg')] bg-bottom bg-repeat-x z-40 opacity-60"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.6 }}
        transition={{ delay: 4, duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.2, duration: 1 }}
      >
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
      </motion.div>
    </motion.div>
  );
};

function Trek() {
  const treks = [
    {
      title: "Dayara Bugyal Trek",
      cost: "₹7,999 /-",
      desc: "A beautiful meadow trek offering panoramic views of the Himalayas, perfect for beginners.",
      bg: "bg-green-100",
      images: [Trek1, Trek1],
      border: false,
      link: "/trek/dayarabuyal",
    },
    {
      title: "Kedar Katha Trek",
      cost: "₹8,999 /-",
      desc: "Spiritual journey combining trekking with visits to sacred Himalayan shrines.",
      bg: "bg-white",
      images: [Trek1, Trek1],
      border: true,
      link: "/trek/kedarKatha", 
    },
    {
      title: "Gomukh Tapovan Trek",
      cost: "₹14,999 /-",
      desc: "Challenging trek to the source of the Ganges river with stunning glacier views.",
      bg: "bg-green-100",
      images: [Trek1, Trek1],
      border: false,
      link: "/trek/gaumukh", 
    },
    {
      title: "Hidden Waterfall Trek",
      cost: "₹2,500 /-",
      desc: "Short day trek to discover hidden waterfalls in the lush Himalayan foothills.",
      bg: "bg-white",
      images: [Trek1, Trek1],
      border: true,
      link: "/trek/hiddenWaterFall", 
    },
    {
      title: "Tungnath Chandrashila Trek",
      cost: "₹5,999 /-",
      desc: "Highest Shiva temple in the world with breathtaking 360° mountain views.",
      bg: "bg-green-100",
      images: [Trek1, Trek1],
      border: false,
      link: "/trek/tungnath", 
    }
  ];

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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`mx-auto max-w-4xl flex flex-col md:flex-row items-center md:items-center justify-between gap-8 p-6 md:p-8 rounded-2xl min-h-[300px] backdrop-blur-md shadow-lg transition-all duration-300 
                ${[0, 2, 4, 6, 8].includes(i) ? "bg-gradient-to-r from-[#DBFCE7] to-[#fafafa]" : "bg-white/90"}
                ${trek.border ? "border-2 border-teal-800" : ""}`}
            >
              <div className="w-full md:w-[40%] flex justify-center items-center relative overflow-hidden">
                {(() => {
                  const imgCommonClass =
                    "absolute w-40 h-28 sm:w-44 sm:h-32 object-cover rounded-xl bg-white shadow-md border border-gray-200";
                  const imgProps = [
                    { className: "top-0 left-0 z-10", motion: { x: -20, rotate: -5 } },
                    { className: "bottom-0 right-0 z-0", motion: { x: 20, rotate: 5, delay: 0.1 } },
                  ];
                  return (
                    <div className="relative w-[220px] h-[180px]">
                      {trek.images.map((img, idx) => (
                        <motion.img
                          key={idx}
                          loading="lazy"
                          src={img}
                          alt={`Trek ${i + 1}-${idx + 1}`}
                          initial={{ opacity: 0, ...(imgProps[idx].motion || {}) }}
                          whileInView={{ opacity: 1, x: 0 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            duration: 0.8,
                            delay: imgProps[idx].motion?.delay || 0,
                          }}
                          className={`${imgCommonClass} ${imgProps[idx].className}`}
                        />
                      ))}
                    </div>
                  );
                })()}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="w-full md:w-[55%] flex flex-col justify-center text-left space-y-4"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl md:text-2xl font-semibold text-gray-900"
                >
                  {trek.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-gray-700 text-sm sm:text-base leading-relaxed"
                >
                  {trek.desc}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="font-bold text-gray-900 text-sm sm:text-base"
                >
                  Cost : {trek.cost}
                </motion.p>

                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-fit"
                >
                  <Link
                    to={trek.link}
                    className="mt-2 inline-block px-5 py-2 text-sm sm:text-base bg-teal-800 text-white rounded-full hover:bg-teal-700 transition-all duration-300 shadow-md"
                  >
                    More Details
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
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