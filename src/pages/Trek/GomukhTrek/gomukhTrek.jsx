import { style } from "framer-motion/client";
import { motion } from "framer-motion";
import ScrollDownButton from "../button";
import TrekPage from "../TrekPage";
import styles from "./gomukhTrek.module.css";
import Form from "../../../components/form/Form";
import SpecialSection from '../points';

function GomukhTrek() {
  const customMessage = encodeURIComponent("Hi, I am Aman and I want to book a rafting trip!");

    const handleScroll = () => {
    const target = document.getElementById("target-section"); // 👈 change this id to your section id
    if (target) {
    target.scrollIntoView({ behavior: "smooth" });
    }
    };
  return (
    <main className='josefin-sans' >
      {/* first section */}
      <motion.section
        className="relative josefin-sans w-full h-[90vh] overflow-hidden font-josefin text-white snap-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* 🌄 Background Image with Smooth Zoom (parallax feel) */}
        <motion.img
          src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Gomukh%20Tapovan/landscape/gomukhTapovan_img01.webp"
          alt="Trek Adventure"
          className="absolute w-full h-full object-cover z-10"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "linear" }}
        />

        {/* 🖤 Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-20" />

        {/* 📝 Text Content */}
        <motion.div
          className="relative z-30 flex flex-col items-center justify-center h-full px-6 text-center"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight font-kalnia  tracking-wider drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Into the Gaumukh Tapovan
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl max-w-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            Trek deep into nature’s heart. Let the trails test your spirit.
          </motion.p>

          <motion.button
            onClick={handleScroll}
            className="mt-8 px-6 py-3 cursor-pointer rounded-xl bg-orange-600 hover:bg-orange-700 transition-all shadow-md border border-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start the Journey
          </motion.button>
        </motion.div>

        {/* 🏔️ Mountain silhouette with fixed background image */}
        <div
          className="absolute bottom-0 left-0 w-full h-28 bg-no-repeat bg-bottom bg-cover z-30 opacity-60"
          style={{
            backgroundImage:
              "url('https://raw.githubusercontent.com/ajaymarathe/mountain-silhouettes/main/mountain-3.svg')",
          }}
        />

        {/* 🌫️ Bottom gradient */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
      </motion.section>

      {/* drop button  */}
      <ScrollDownButton  />

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
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Gomukh%20Tapovan/gomukhTapovan_img01.webp"
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
              Goumukh Trek
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
  whileHover={{ scale: 1.08, boxShadow: "0 8px 24px rgba(34,197,94,0.45)" }}
  whileTap={{ scale: 0.93 }}
  animate={{ scale: [1, 1.07, 1] }}
  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
  className="mt-10 px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full font-semibold shadow-xl hover:from-emerald-700 hover:to-green-600 transition-all duration-300 flex items-center gap-2 mx-auto"
  onClick={() =>
    window.open(
      "https://wa.me/7078287331?text=Hello%2C%20I%20would%20like%20to%20book%20a%20tour.%20Please%20share%20the%20details.",
      "_blank"
    )
  }
>
  💬 Book Now
</motion.button>


          </motion.div>
        </div>
        </div>

      </motion.section>

      <TrekPage/>

      {/* 5th section */}
      <SpecialSection/>

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

export default GomukhTrek;

