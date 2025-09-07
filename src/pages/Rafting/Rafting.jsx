import { Link } from "react-router-dom";
import { useRef, useState , useEffect } from "react";
import './Rafting.css'
import Feedback from '../../components/Feedback';
import Form from '../../components/form/Form'
import Expe from './Expe'
import AdventureAltHero from './hero'
import { motion } from "framer-motion";
import FAQSection from './faq'

const marqueeItems = [
  'Scenic river views',
  'Expert guides lead',
  'Safe family fun',
  'Top gear provided',
  'Memories await you',
  'Thrill-packed journeys',
  'Unleash your wild side',
  'Nature rollercoaster ride',
  'Waves. Laughs. Memories.',
  'Guided by river pros',
  'Unmatched river thrills',
  'Where fun meets adrenaline',
  'Dive into the excitement',
  'Breathtaking river trails',
  'Experience. Explore. Enjoy.',
];
const dummyImages = [
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Memo_img1.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/About_img2.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Memo_img2.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Memo_img3.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Memo_img4.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/About_img1.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/card3.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/card4.webp"
];
const RiverRaftingBackground = () => {
  const riverColors = {
    primary: "#1E88E5",
    secondary: "#42A5F5",
    whitewater: "#E3F2FD",
    rapid: "#0D47A1",
  };

  return (
    <div className="river-bg">
      {/* Gradient Water Background */}
      <div
        className="river-gradient"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, ${riverColors.secondary} 0%, transparent 15%),
            radial-gradient(circle at 80% 70%, ${riverColors.primary} 0%, transparent 15%)
          `,
        }}
      />

      {/* SVG Animated River */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="river-svg"
      >
        {/* Flowing River Path */}
        <path
          d="M-10,50 C20,40 30,60 50,50 C70,40 80,60 110,50"
          fill="none"
          stroke={riverColors.primary}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="200"
          strokeDashoffset="200"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="200"
            to="0"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>

        {/* Whitewater ripples */}
        {[25, 45, 65, 85].map((x, i) => (
          <path
            key={i}
            d={`M${x},50 Q${x + 3},47 ${x + 6},50 T${x + 12},50`}
            fill="none"
            stroke={riverColors.whitewater}
            strokeWidth="0.8"
            strokeLinecap="round"
          >
            <animate
              attributeName="opacity"
              values="0.8;1;0.8"
              dur="2s"
              begin={`${i * 0.3}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}

        {/* Floating logs with people */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect
              x="-2"
              y="-1"
              width="4"
              height="2"
              rx="0.5"
              fill="#795548"
              stroke="#5D4037"
              strokeWidth="0.1"
            />
            {[-1, 0, 1].map((p) => (
              <circle
                key={p}
                cx={p * 0.8}
                cy={-0.5}
                r="0.4"
                fill={p === 0 ? "#FF5722" : "#2196F3"}
                stroke="#212121"
                strokeWidth="0.05"
              />
            ))}
            <animateTransform
              attributeName="transform"
              type="translate"
              values="-10 50; 110 50"
              dur="18s"
              begin={`${i * 5}s`}
              repeatCount="indefinite"
            />
          </g>
        ))}

        {/* Small splashes */}
        {[20, 35, 50, 65, 80].map((x, i) => (
          <path
            key={i}
            d="M-1,0 Q0,-1 1,0 Q0,1 -1,0 Z"
            fill={riverColors.whitewater}
            stroke={riverColors.primary}
            strokeWidth="0.05"
            transform={`translate(${x}, 50)`}
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              values="0.5;1.2;0.8;0.5"
              dur="1.5s"
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
              additive="sum"
            />
            <animate
              attributeName="opacity"
              values="0;0.8;0"
              dur="1.5s"
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}

        {/* Buoys */}
        {[25, 75].map((x, i) => (
          <g key={i} transform={`translate(${x}, 48)`}>
            <circle cx="0" cy="0" r="0.5" fill="#FFC107" stroke="#FFA000" strokeWidth="0.1" />
            <rect x="-0.1" y="-1" width="0.2" height="1" fill="#795548" />
          </g>
        ))}

        {/* Rapids text */}
        <text
          x="30"
          y="45"
          fontSize="1.2"
          fill={riverColors.rapid}
          fontFamily="Arial"
          fontWeight="bold"
          textAnchor="middle"
        >
          Rapids
          <animate
            attributeName="opacity"
            values="0.7;0.9;0.7"
            dur="5s"
            repeatCount="indefinite"
          />
        </text>
        <text
          x="70"
          y="55"
          fontSize="1.5"
          fill={riverColors.rapid}
          fontFamily="Arial"
          fontWeight="bold"
          textAnchor="middle"
        >
          Rapids
          <animate
            attributeName="opacity"
            values="0.7;0.9;0.7"
            dur="5s"
            repeatCount="indefinite"
          />
        </text>
      </svg>
    </div>
  );
};
const Rafting = () => {
    const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // run only once
          }
        });
      },
      { threshold: 0.2 } // same as viewport amount: 0.2
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToSection = () => {
    const next = document.getElementById('next-section');
    next?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="bg-gradient-to-r from-[#fafafa] to-[#B2EBF2] relative">
      <RiverRaftingBackground />
      
      <AdventureAltHero/>

      <div className="py-20 px-4 mt-15 md:px-20 xl:px-40 relative text-black overflow-hidden">
        {/* Scroll button */}
        <div
          onClick={scrollToSection}
          className="absolute top-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer group"
        >
          <div className="md:-mt-5 relative w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center shadow-xl overflow-hidden transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110 active:scale-90 active:-rotate-12">
            <span className="text-white text-2xl z-10">↓</span>
            <div className="absolute inset-0 bg-blue-400 opacity-40 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div className="max-w-2xl">
            <h2
              className="text-3xl md:text-4xl mt-3 xl:text-5xl josefin-sans md:text-left text-center font-bold mb-3 xl:mb-5 animate-fade-up"
            >
              About Our Passion
            </h2>

            <p
              className="text-base md:text-lg xl:text-xl leading-relaxed text-gray-700 josefin-sans animate-fade-up [animation-delay:200ms]"
            >
              Our passion flows with the river. We believe every splash tells a story
              and every current brings you closer to nature. Rafting is not just a
              sport for us—it's a journey of thrill, freedom, and connection. We aim
              to make every trip unforgettable, filled with laughter, courage, and
              breathtaking moments. Whether you're conquering your first rapid or your
              tenth, our goal is to ignite your adventurous spirit. With years of
              experience and love for the outdoors, we bring you safely to the
              edge—and back—with memories to last a lifetime.
            </p>
          </div>

          {/* Images */}
          <div className="relative w-full md:mt-30 h-[400px] md:h-[460px] xl:h-[530px]">
            <div
              className="absolute top-0 right-14 bg-white/20 backdrop-blur-lg rounded-3xl p-1 shadow-[0_10px_40px_rgba(0,0,0,0.3)] ring-2 ring-white ring-offset-4 ring-offset-blue-100 animate-fade-up [animation-delay:300ms]"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/About_img1.webp"
                alt="Rafting 1"
                loading="lazy"
                className="w-80 h-52 md:w-96 md:h-60 xl:w-[420px] xl:h-[270px] object-cover rounded-2xl"
              />
            </div>

            <div
              className="absolute top-44 md:top-48 right-0 bg-white/20 backdrop-blur-lg rounded-3xl p-1 shadow-[0_10px_40px_rgba(0,0,0,0.3)] ring-2 ring-white ring-offset-4 ring-offset-rose-100 animate-fade-up [animation-delay:600ms]"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/About_img2.webp"
                alt="Rafting 2"
                loading="lazy"
                className="w-80 h-52 md:w-96 md:h-60 xl:w-[420px] xl:h-[270px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div id="next-section" className="mt-20" />
      </div>


      <Expe/>

      <div className=" josefin-sans md:mt-12 overflow-hidden mt-9 py-3">
        <motion.div
          className="flex whitespace-nowrap text-black font-medium text-3xl gap-12 px-6"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
        >
          {Array(3)
            .fill(marqueeItems)
            .flat()
            .map((text, i) => (
              <span key={i}>
                ✦ {text}
              </span>
            ))}
        </motion.div>
      </div>
      <div className="mt-15 px-4 py-16 md:px-20">
        <motion.h2
          className="text-3xl md:text-7xl jolly-font font-bold text-center mb-12 josefin-sans"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Rafting Plans
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col snap-start h-[400px] sm:h-[440px] md:h-[480px] group transition-transform hover:scale-[1.03] hover:-translate-y-1"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative h-[48%] overflow-hidden group">
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/card1.webp"
                alt="Marine drive to shivpuri"
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90 will-change-transform"
                style={{ transform: 'translateZ(0)' }}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/95 via-white/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">Marine drive to shivpuri</h3>
                <p className="text-sm text-gray-600 mb-3">Experience the thrill of a lifetime with our professional river rafting tour in Rishikesh. Navigate the Ganges' exhilarating rapids and witness the stunning Himalayan scenery, all while creating unforgettable memories.</p>
                <div className="mb-2">
                  <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full">Dist 16 km</span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm font-bold">Cost : ₹599</p>
                <Link
                  to="/rafting/shivpuri"
                  className="text-sm px-3 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 hover:scale-110 transition-transform duration-300"
                >
                  more
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col snap-start h-[400px] sm:h-[440px] md:h-[480px] group transition-transform hover:scale-[1.03] hover:-translate-y-1"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, type: "spring" }}
          >
            <div className="relative h-[48%] overflow-hidden group">
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/card2.webp"
                alt="Shivpuri to Nim Beach"
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90 will-change-transform"
                style={{ transform: 'translateZ(0)' }}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/95 via-white/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">Shivpuri To Nim Beach</h3>
                <p className="text-sm text-gray-600 mb-3">Embark on an exhilarating white-water journey from Shivpuri to Nim Beach. This professionally guided rafting trip offers an adrenaline-pumping experience on the Ganges' renowned rapids, set against the stunning backdrop of Rishikesh's natural beauty.</p>
                <div className="mb-2">
                  <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full">Dist 16 km</span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm font-bold">Cost : ₹700</p>
                <Link
                  to="/rafting/nim"
                  className="text-sm px-3 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 hover:scale-110 transition-transform duration-300"
                >
                  more
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col snap-start h-[400px] sm:h-[440px] md:h-[480px] group transition-transform hover:scale-[1.03] hover:-translate-y-1"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <div className="relative h-[48%] overflow-hidden group">
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/card3.webp"
                alt="Marine Drive to Shivpuri"
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90 will-change-transform"
                style={{ transform: 'translateZ(0)' }}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/95 via-white/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">Marine Drive to Nim Beach</h3>
                <p className="text-sm text-gray-600 mb-3">Ready for a longer thrill? Our Marine Drive to Nim Beach rafting trip is your ticket to an unforgettable adventure on the Ganges. Paddle through exciting rapids, soak in the stunning scenery, and create lasting memories. It’s the perfect challenge for those looking to push their limits.</p>
                <div className="mb-2">
                  <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full">Dist 24 km</span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm font-bold">Cost : ₹1200</p>
                <Link
                  to="/Rafting/marine"
                  className="text-sm px-3 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 hover:scale-110 transition-transform duration-300"
                >
                  more
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col snap-start h-[400px] sm:h-[440px] md:h-[480px] group transition-transform hover:scale-[1.03] hover:-translate-y-1"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, type: "spring" }}
          >
            <div className="relative h-[48%] overflow-hidden group">
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/card4.webp"
                alt="Kaudiala to Nim Beach"
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90 will-change-transform"
                style={{ transform: 'translateZ(0)' }}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/95 via-white/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">Kaudiala To Nim Beach</h3>
                <p className="text-sm text-gray-600 mb-3">For the ultimate white-water experience, join our epic Kaudiala to Nim Beach rafting tour. This full-day journey offers adrenaline-pumping action, navigating a variety of rapids with our expert team. It’s a life-changing adventure for true thrill-seekers.</p>
                <div className="mb-2">
                  <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full">Dist 36 km</span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm font-bold">Cost : ₹2400</p>
                <Link
                  to="/Rafting/kodilyla"
                  className="text-sm px-3 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 hover:scale-110 transition-transform duration-300"
                >
                  more
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="py-16 sm:mt-20 px-4 md:px-2 mt-4">
      <h2 className="jolly-font text-3xl md:text-4xl font-bold text-center mb-12 josefin-sans">
        Rafting Memories to Inspire You
      </h2>
      <div
        ref={sectionRef}
        className={`mx-auto w-fit grid grid-cols-2 sm:grid-cols-4 gap-[6px] sm:gap-[10px] md:gap-[12px] 
          fade-in-section ${isVisible ? "visible" : ""}`}
      >
        {dummyImages.map((src, i) => {
          const shapeClass =
            i % 4 === 0
              ? "rounded-full"
              : i % 4 === 1
              ? "rounded-3xl"
              : i % 4 === 2
              ? "rounded-[40%_60%_50%_50%/60%_40%_60%_40%]"
              : "rounded-full sm:rounded-[25%]";

          return (
            <div
              key={i}
              className={`p-[3px] bg-gradient-to-br from-[#cbd5e1] via-[#94a3b8] to-[#64748b]
                ${shapeClass}
                ${i > 3 ? "hidden sm:block" : ""}
              `}
            >
              <div
                className={`overflow-hidden bg-white ${shapeClass}
                  w-[120px] h-[120px]
                  sm:w-[160px] sm:h-[160px]
                  lg:w-[200px] lg:h-[200px]
                  xl:w-[240px] xl:h-[240px]
                  transition-transform hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.18)]
                  duration-300 ease-out
                `}
              >
                <img
                  src={src}
                  alt={`rafting-${i}`}
                  width="400"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover will-change-transform"
                />
              </div>
            </div>
          );
        })}
      </div>
      </div>    
      <Feedback/>
      
      <FAQSection />

      <Form
        boxClass="bg-[#B4F4FA]"
        headingClass="text-black"
        buttonClass="bg-blue-600 hover:bg-blue-700"
        focusClass="focus:outline-blue-500"
      />
    </section>
  );
};

export default Rafting;