import { motion } from "framer-motion";
import Form from "../../../components/form/Form";
import ScrollDownButton from '../button'
import SpecialSection from '../points'
import TrekPage from "../TrekPage";

function KedarKatha() {
  const customMessage = encodeURIComponent("Hi, I am Aman and I want to book a rafting trip!");

  return (
    <main className='josefin-sans' >
      {/* hero */}
      <motion.section
        className="relative w-full h-[90vh] overflow-hidden bg-black font-josefin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* 🎥 Background: slow zoom‑out */}
        <motion.img
          src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/kedarkatha%20trek/landscape/kedarkantha_img11.webp"                        // ← your mountain photo
          alt="Kedar Katha Trek"
          className="absolute inset-0 w-full h-full object-cover z-10 scale-110 animate-heroZoom"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: 'easeOut' }}
        />

        {/* 🌌 Black → transparent gradient */}
        <div className="absolute inset-0 z-30 bg-gradient-to-br from-black/80 via-black/45 to-transparent" />


        {/* 📝 Hero Copy */}
        <motion.div
          className="absolute inset-0 flex items-center justify-start px-6 md:px-20 z-40"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          <div className="text-left max-w-3xl">
            {/* Typing headline */}
            <h1 className="text-green-300 text-3xl md:text-5xl  font-kalnia  lg:text-6xl xl:text-7xl font-extrabold tracking-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] whitespace-nowrap overflow-hidden border-r-4 border-green-400 pr-2 animate-typing">
              Kedar Katha Trek
            </h1>

            {/* Location + Stars */}
            <div className="flex items-center gap-3 mt-3">
              <span className="bg-green-400 text-black text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow">
                📍 Uttarakhand, India
              </span>
              <div className="flex gap-1 text-green-300 text-base md:text-lg">
                ★ ★ ★ ★ ☆
              </div>
            </div>

            {/* Short description */}
            <p className="text-white/80 mt-4 text-sm sm:text-base md:text-lg xl:text-xl max-w-xl leading-relaxed">
              An alpine adventure through pristine meadows and snow‑capped ridges—perfect for trekkers who crave epic Himalayan views!
            </p>

            {/* CTA */}
<motion.button
  whileHover={{
    scale: 1.1,
    boxShadow: "0 0 32px rgba(34,197,94,0.75)",
  }}
  whileTap={{ scale: 0.93 }}
  className="mt-6 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-emerald-500 hover:to-green-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 text-sm md:text-base flex items-center gap-2"
  onClick={() =>
    window.open(
      "https://wa.me/7078287331?text=Hello%2C%20I%20would%20like%20to%20book%20a%20tour.%20Can%20you%20please%20share%20the%20details%3F",
      "_blank"
    )
  }
>
  💬 Book Now
</motion.button>


          </div>
        </motion.div>

        {/* White wave footer */}
        <motion.div
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-40"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <svg
            className="block w-full h-[100px] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#fdfaf6"
              d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z"
            />
          </svg>
        </motion.div>

        {/* 🔁 Local keyframes */}
        <style>{`
          @keyframes heroZoom {
            0%   { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
          .animate-heroZoom {
            animation: heroZoom 12s ease-in-out forwards;
          }

          @keyframes typing {
            from { width: 0; }
            to   { width: 100%; }
          }
          .animate-typing {
            animation: typing 3.2s steps(32, end) 1 forwards;
          }
        `}</style>
      </motion.section>

      {/* drop button  */}
      <ScrollDownButton />

      {/* para */}
      <motion.section
      id="target-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      /* ↓ smaller padding (py‑6) and no extra top margin */
      className="bg-[#fdfaf6] py-6 px-4 md:px-8 xl:px-20 md:mt-15 font-josefin"
    >
      <div className="text-center max-w-5xl mx-auto px-4">
        <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
          Discover epic trails, expert tips, and inspiring stories to fuel your next
          mountain adventure. Whether you're a beginner or a pro, we help you reach
          new heights with confidence. Discover epic trails, expert tips, and
          inspiring stories to fuel your next mountain adventure. Whether you're a
          beginner or a pro, we help you reach new heights with confidence.
        </p>
      </div>
      </motion.section>

      {/* trek info */}
      <motion.section
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
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/kedarkatha%20trek/kedarkantha_img12.webp"
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
              Kedar Katha Trek
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


      {/* section */}
      <TrekPage/>

      <SpecialSection/>

      <section className="flex justify-center items-center mt-5 md:mt-[40px]">
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

export default KedarKatha;
