import { motion } from "framer-motion";
import Form from "../../../components/form/Form";
import SpecialSection from '../points';
import ScrollDownButton from '../button'
import img2 from "../../../assets/images/TrekMain/img2.svg";
import styles from "./tungnathTrek.module.css";

function TungnathTrek() {
  const customMessage = encodeURIComponent("Hi, I am Aman and I want to book a rafting trip!");

  return (
    <main className='josefin-sans' >
    {/* hero */}
    <motion.section
      className="relative w-full h-[90vh] overflow-hidden font-josefin"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* 🌄 Background with zoom + radial fade */}
      <motion.img
        src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Tungnath/landscape/tungnath_img15.webp"
        alt="Tungnath Chandra Shila Trek"
        className="absolute top-0 left-0 w-full h-full object-cover z-10 scale-125 animate-heroZoom mask-fade"
        initial={{ scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: 'easeOut' }}
      />

      {/* 🌫 Fog overlay */}
      <motion.div
        className="absolute inset-0 z-20 bg-[url('/fog.png')] bg-cover bg-center opacity-25 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 1, duration: 2 }}
      />

      {/* 🌨 Bottom fade overlay */}
      <div
        className="absolute bottom-0 left-0 w-full h-44
                  bg-gradient-to-b from-transparent via-[#fdfaf6]/80 to-[#fdfaf6]
                  z-20 pointer-events-none" />

      {/* ✨ Particle overlay */}
      <div className="absolute inset-0 z-20 bg-[url('/particles.gif')] bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none" />

      {/* 🔷 Diagonal gradient mask */}
      <div className="absolute inset-0 z-30 bg-gradient-to-br from-black/80 via-black/35 to-transparent [clip-path:polygon(0_0,50%_0,35%_100%,0_100%)]" />

      {/* 🚣 Boat silhouette */}
      <motion.div
        className="absolute bottom-10 left-10 w-[120px] h-[80px] bg-[url('/boat-silhouette.png')] bg-contain bg-no-repeat bg-bottom z-40 opacity-80"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 0.8 }}
        transition={{ delay: 1.5, duration: 1.2, ease: 'easeOut' }}
      />

      {/* 📝 Content */}
      <motion.div
        className="absolute top-[25%] left-10 md:left-20 z-40"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1.2, type: 'spring' }}
      >
        <motion.h1
          className="text-green-300 text-3xl font-kalnia  md:text-6xl xl:text-5xl font-extrabold leading-tight drop-shadow-[0_3px_15px_rgba(0,0,0,0.7)]"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Tungnath Chandra<br/>Shila Trek
        </motion.h1>

        <div className="flex items-center gap-3 mt-3">
          <span className="bg-green-400 text-black text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow">
            📍 Uttarakhand, India
          </span>
          <div className="flex gap-1 text-green-300 text-base md:text-lg">
            ★ ★ ★ ★ ☆
          </div>
        </div>

        <p className="text-white/80 text-lg md:text-xl mt-4 font-medium max-w-xl">
          Summit the world’s highest Shiva temple and witness 360° Himalayan
          panoramas dusted in snow!
        </p>

<motion.button
  whileHover={{
    scale: 1.1,
    rotate: [0, 2, -2, 2, 0],
    boxShadow: "0 0 32px rgba(34,197,94,0.75)",
  }}
  whileTap={{ scale: 0.93 }}
  className="relative mt-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white font-semibold px-10 py-3 rounded-full shadow-xl transition-all duration-300 overflow-hidden group"
  onClick={() =>
    window.open(
      "https://wa.me/7078287331?text=Hello%2C%20I%20would%20like%20to%20book%20a%20tour.%20Can%20you%20please%20share%20the%20details%3F",
      "_blank"
    )
  }
>
  {/* Shine Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out blur-sm"></span>

  {/* Text */}
  <span className="relative z-10 flex items-center gap-2">
    💬 Book Now
  </span>
</motion.button>


      </motion.div>

      {/* 🔄 Top flipped wave */}
      <motion.div
        className="absolute top-[0px] left-0 w-full overflow-hidden leading-[0] rotate-180 z-40"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
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

      {/* 🔁 Keyframes & mask utility */}
      <style>{`
        @keyframes heroZoom {
          0%   { transform: scale(1.25); }
          100% { transform: scale(1); }
        }
        .animate-heroZoom {
          animation: heroZoom 10s ease-in-out forwards;
        }
        /* Smooth feather fade on all edges */
        .mask-fade {
          -webkit-mask-image: radial-gradient(
            ellipse farthest-corner at center,
            rgba(0,0,0,1) 60%,
            rgba(0,0,0,0) 100%
          );
          mask-image: radial-gradient(
            ellipse farthest-corner at center,
            rgba(0,0,0,1) 60%,
            rgba(0,0,0,0) 100%
          );
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
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
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Tungnath/tungnath_img05.webp"
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
              Tungnath Chandra Shila Trek
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


      <section className={styles.storySection}>
        <h2>
          The Dayara Bugyal trek isn’t just a walk through meadows and
          mountains; it’s a journey steeped in mythology, folklore, and quiet
          reverence.
        </h2>
        <p>
          <b>Sages and Seekers: </b> According to local lore, Dayara Bugyal was
          once a sacred retreat for ancient sages. They meditated in these
          serene meadows, believing the high-altitude silence brought them
          closer to enlightenment.
        </p>
        <hr />
        <p>
          <b>Lord Shiva’s Blessing: </b> Some legends say that Lord Shiva
          himself wandered through these lands. The peaceful energy and
          spiritual aura are said to be remnants of his presence.
        </p>
        <hr />
        <p>
          <b>The Pandavas’ Path: </b> The Mahabharata weaves its way into the
          story too. It’s believed that the Pandavas, during their exile, passed
          through Dayara Bugyal and performed rituals here. That mystical
          energy? Locals say it still lingers in the air.
        </p>
      </section>

      <section className={styles.daysSection}>
        <div className={styles.dayBox}>
          <h2>Day x to y on the trek</h2>
          <p>
            According to local lore, Dayara Bugyal was once a sacred retreat for
            ancient sages. They meditated in these serene meadows, believing the
            high-altitude silence brought them closer to enlightenment.{" "}
          </p>
          <div className={styles.imgWithDetail}>
            <div className={styles.imgBox}>
              <div className={styles.firstimg}></div>
              <div className={styles.secondimg}></div>
            </div>
            <p>
              According to local lore, Dayara Bugyal was once a sacred retreat
              for ancient sages.
            </p>
          </div>
        </div>
        <div className={styles.dayBox}>
          <h2>Day a to b on the trek</h2>
          <p>
            According to local lore, Dayara Bugyal was once a sacred retreat for
            ancient sages. They meditated in these serene meadows, believing the
            high-altitude silence brought them closer to enlightenment.{" "}
          </p>
          <div className={styles.imgWithDetail}>
            <div className={styles.imgBox}>
              <img className={styles.firstimg} src={img2} />
            </div>
            <p>
              According to local lore, Dayara Bugyal was once a sacred retreat
              for ancient sages.
            </p>
          </div>
        </div>
      </section>

      <section className="md:mt-[120px] mt-18 flex justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[clamp(170px,25vw,270px)] w-[clamp(250px,50vw,1000px)] bg-[#E4EFE7] rounded-[40px] py-5 px-[clamp(20px,50vw,40px)] font-[400] text-[clamp(0.75rem,0.55rem+1.05vw,1.875rem)] flex flex-col justify-center items-center"
        >
          <p>
            Here’s a checklist of essentials to make sure you’re safe, comfortable, 
            and ready to soak in those Himalayan views:
          </p>
          <div className="flex justify-center items-center mt-4 gap-[15px]">
            <p>Download</p>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#E4EFE7",
                color: "#16423c",
                border: "2px solid #16423c",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#16423c] rounded-[clamp(5px,1vw,15px)] text-white text-[clamp(0.625rem,0.5147rem+0.58vw,1.25rem)] h-[clamp(25px,3vw,44px)] w-[clamp(60px,8vw,120px)] flex items-center justify-center"
            >
              Checklist
            </motion.button>
          </div>
        </motion.div>
      </section>

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

export default TungnathTrek;
