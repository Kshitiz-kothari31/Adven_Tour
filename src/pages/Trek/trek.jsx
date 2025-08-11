import { motion} from "framer-motion";
import { useEffect, useState , useRef} from "react";
import Form from "../../components/form/Form";
import { Link } from "react-router-dom";
import Trek1 from "../../assets/images/TrekMain/DayaraBuyalTrek.jpg";
import GuideScrolle from './guide'

const images = [
  "https://images3.alphacoders.com/134/thumb-1920-1345697.png",
  "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1611154046036-cd91e50978be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
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
      {/* 🔁 Previous image */}
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

      {/* 🖼️ Current image */}
      <motion.img
        key={`current-${current}`}
        src={images[current]}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full object-cover z-30"
      />

      {/* 🌫️ Fog overlay */}
      <motion.div
        className="absolute inset-0 z-40 pointer-events-none bg-[url('/fog.png')] bg-cover bg-center opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
      />

      {/* 🌓 Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
      />

      {/* ✨ Text Content */}
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

        {/* ✅ Redesigned forest-green button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          className="mt-8 px-8 py-3 bg-green-700/70 hover:bg-green-800/80 text-white font-medium text-lg rounded-full backdrop-blur-sm border border-white/20 shadow-md"
          onClick={() => {
            const target = document.getElementById("second-section");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Start the Journey
        </motion.button>
      </motion.div>

      {/* 🏔️ Silhouette overlay */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-[url('/mountains-silhouette.svg')] bg-bottom bg-repeat-x z-40 opacity-60"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.6 }}
        transition={{ delay: 4, duration: 1.2, ease: "easeOut" }}
      />

      {/* 🌊 Bottom wave */}
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
          <path
            fill="bg-gradient-to-r from-[#fafafa] to-[#DBFCE7]"
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
      desc: "Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure.",
      bg: "bg-green-100",
      images: [Trek1, Trek1],
      border: false,
      link: "/trek/dayarabuyal",
    },
    {
      title: "Kedar Katha Trek",
      cost: "₹8,999 /-",
      desc: "Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure.",
      bg: "bg-white",
      images: [Trek1, Trek1],
      border: true,
      link: "/trek/kedarKatha", 
    },
    {
      title: "Gomukh Tapovan Trek",
      cost: "₹14,999 /-",
      desc: "Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure.",
      bg: "bg-green-100",
      images: [Trek1, Trek1],
      border: false,
      link: "/trek/gaumukh", 
    },
    {
      title: "Hidden Waterfall Trek",
      cost: "₹2,500 /-",
      desc: "Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure.",
      bg: "bg-white",
      images: [Trek1, Trek1],
      border: true,
      link: "/trek/hiddenWaterFall", 
    },
    {
      title: "Tungnath Chandrashila Trek",
      cost: "₹5,999 /-",
      desc: "Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure.",
      bg: "bg-green-100",
      images: [Trek1, Trek1],
      border: false,
      link: "/trek/tungnath", 
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#fafafa] to-[#DBFCE7] josefin-sans ">
    {/*1st Hero Section */}
    <ImageSliderBox/>

    {/* 3nd para senction */}
    <section className="relative text-center pt-24 pb-16 px-4 sm:px-8 md:px-16 lg:px-24 josefin-sans bg-transparent overflow-hidden">

      {/* 🌟 Subtle Glow Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-200/30 rounded-full blur-[140px] z-0"
      />

      {/* 💬 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
        className="relative z-10 text-3xl sm:text-4xl md:text-5xl josefin-sans font-bold text-teal-800 mb-6"
      >
        Come Join Us For the Ultimate Trekking Adventure.
      </motion.h2>

      {/* 📜 Sub Text */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
      >
        Discover epic trails, expert tips, and inspiring stories to fuel your next
        mountain adventure. Whether you're a beginner or a pro, we help you reach
        new heights with confidence.
      </motion.p>
    </section>

    {/* 4th Section - Trek Cards List (Responsive, Clean, Optimized) */}
    <section className="space-y-16 px-4 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-20 bg-transparent">
      {treks.map((trek, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          viewport={{ once: true }}
          className={`mx-auto max-w-4xl flex flex-col md:flex-row items-center md:items-center justify-between gap-8 p-6 md:p-8 rounded-2xl min-h-[300px] backdrop-blur-md shadow-lg transition-all duration-300 
            ${[0, 2, 4].includes(i) ? "bg-gradient-to-r from-[#DBFCE7] to-[#fafafa]" : "bg-white/90"}
            ${trek.border ? "border-2 border-teal-800" : ""}`}
        >
          {/* 🖼️ Image Section */}
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

          {/* 📄 Text Section */}
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

    {/* 5th guide section */}
      <GuideScrolle/>
   
      <Form
        boxClass="bg-[#DBFCE7]"
        headingClass="text-[#00786F]"
        buttonClass="bg-[#00786F] hover:bg-[#00786F]"
        focusClass="focus:outline-[#00786F]"
      />
  </div>
  );
}

export default Trek;
