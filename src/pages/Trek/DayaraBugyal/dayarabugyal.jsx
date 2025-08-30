import { motion } from "framer-motion";
import Form from '../../../components/form/Form'
import SpecialSection from '../points';
import ScrollDownButton from '../button';
import TrekPage from "../TrekPage";
import styles from "./dayarabugyal.module.css";

function DayaraBugyal() {
  return (
    <main className='josefin-sans' >
      {/* Hero sectoin */}
        <motion.div
          className="relative w-full h-[93vh] overflow-hidden font-josefin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* 🌄 Background Image */}
          <motion.img
            src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/kedarkatha%20trek/landscape/kedarkantha_img12.webp"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
          />

          {/* 🌘 Dark Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1.2 }}
          />

          {/* 🧭 Text Content */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-40 text-white text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1.2 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold font-kalnia  drop-shadow-xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              Dayara Bugyal Trek
            </motion.h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="mt-6 px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg backdrop-blur-md border border-white/20 shadow-md"
              onClick={() =>
                window.open(
                  "https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20booking%20a%20tour",
                  "_blank"
                )
              }
            >
              Book Now
            </motion.button>


            <motion.p
              className="text-base md:text-lg mt-6 max-w-2xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6, duration: 1 }}
            >
              Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure.
            </motion.p>

            <motion.p
              className="text-base md:text-lg mt-2 max-w-2xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 1 }}
            >
              Whether you're a beginner or a pro, we help you reach new heights with confidence.
            </motion.p>
          </motion.div>


          {/* 🌊 Bottom Wave SVG */}
          <motion.div
            className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.4, duration: 1 }}
          >
            <svg
              className="block w-full h-[100px] pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#FDFAF6"
                d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z"
              />
            </svg>

          </motion.div>
        </motion.div>

      {/* drop button  */}
        <ScrollDownButton />

      {/* 2nd section */}
      <motion.section
      id="target-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#fdfaf6] py-16 px-4 md:px-12 font-josefin"
      >
        {/* Hero Heading */}
        <div className="text-center mb-14 max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Come Join Us for the Ultimate Climbing Adventure
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
            Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure.
            Whether you're a beginner or a pro, we help you reach new heights with confidence.
          </p>
        </div>

        {/* Trek Info Row - Modified for better centering */}
        <div className="w-full min-h-screen flex items-center justify-center relative bg-transparent px-6 py-16 font-josefin-sans">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-14 relative z-10">
          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative group w-full max-w-sm lg:max-w-md"
          >
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-green-400 via-green-600 to-green-800 blur-2xl opacity-30 group-hover:opacity-50 transition"></div>
            <img
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/kedarkatha%20trek/landscape/kedarkantha_img11.webp"
              loading='lazy'
              alt="Dayara Buyal Trek"
              className="relative rounded-2xl border-4 border-black shadow-2xl object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-transparent rounded-3xl p-10 shadow-2xl max-w-2xl border border-white/20 relative josefin-sans text-black"
          >
            {/* Price Badge */}
            <div className="absolute top-4 right-4 bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg text-xl font-bold">
              ₹7,999 /-
            </div>

            {/* Title */}
            <h3 className="text-5xl font-bold mt-7 md:mt-10 mb-10 text-center">
              Dayara Bugyal Trek
              <span className="block w-24 h-1 bg-green-500 mx-auto mt-3 rounded-full"></span>
            </h3>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3"><span className="text-green-400 text-3xl">📍</span> Location: Uttarkashi, Uttarakhand</div>
              <div className="flex items-center gap-3"><span className="text-green-400 text-3xl">⛰️</span> Altitude: ~12,000 ft</div>
              <div className="flex items-center gap-3"><span className="text-green-400 text-3xl">🗓️</span> Duration: 4-6 days</div>
              <div className="flex items-center gap-3"><span className="text-green-400 text-3xl">💪</span> Difficulty: Easy–Moderate</div>
              <div className="flex items-center gap-3"><span className="text-green-400 text-3xl">🏠</span> Base Camp: Raithal / Natin</div>
              <div className="flex items-center gap-3"><span className="text-green-400 text-3xl">📏</span> Distance: ~21–24 km</div>
            </div>

            {/* Button */}
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  animate={{ scale: [1, 1.05, 1] }}
  transition={{ duration: 1.5, repeat: Infinity }}
  className="mt-10 px-10 py-4 bg-green-700 text-white rounded-full font-semibold shadow-lg hover:bg-green-800 transition duration-300 block mx-auto"
  onClick={() =>
    window.open(
      "https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20booking%20a%20tour",
      "_blank"
    )
  }
>
  🚀 Book Now
</motion.button>

          </motion.div>
        </div>
        </div>

      </motion.section>

      {/* 3rd section */}
      <TrekPage/>


      {/* 5th section */}
        <SpecialSection/>

      {/* 6th section */}
        <section className="flex justify-center items-center mt-5 md:mt-[120px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#E4EFE7] rounded-[40px] flex flex-col justify-center items-center text-center font-[Josefin_Sans] font-normal px-5 py-5 md:px-10 md:py-8 w-[clamp(250px,50vw,1000px)] h-[clamp(200px,57vw,270px)]"
          >
            <h3 className="underline font-bold mb-4 text-lg md:text-2xl">
              Best Time to Visit
            </h3>
            <p className="text-xs md:text-base lg:text-xl">
              Spring (Mar–Apr): Rhododendron blooms <br />
              Summer (May–Jun): Lush green meadows <br />
              Autumn (Sep–Nov): Clear skies, golden hues <br />
              Winter (Dec–Feb): Snow-covered wonderland
            </p>
          </motion.div>
        </section>

        <Form
        boxClass="bg-[#DBFCE7]"
        headingClass="text-[#00786F]"
        buttonClass="bg-[#00786F] hover:bg-[#00786F]"
        focusClass="focus:outline-[#00786F]"
      />
    </main>
  );
}

export default DayaraBugyal;
