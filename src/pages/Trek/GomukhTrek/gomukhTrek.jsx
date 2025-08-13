import { style } from "framer-motion/client";
import { motion } from "framer-motion";
import ScrollDownButton from "../button";
import img from "../../../assets/images/TrekMain/DayaraBuyalTrek.jpg";
import img2 from "../../../assets/images/TrekMain/img2.svg";
import styles from "./gomukhTrek.module.css";
import Form from "../../../components/form/Form";
import SpecialSection from '../points';

function GomukhTrek() {
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
          src="https://images6.alphacoders.com/676/thumb-1920-676755.jpg"
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
            className="mt-8 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 transition-all shadow-md border border-white/10"
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
              src={img}
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-10 px-10 py-4 bg-green-700 text-white rounded-full font-semibold shadow-lg hover:bg-green-800 transition duration-300 block mx-auto"
            >
              🚀 Book Now
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
              <img className={style.firstimg} src={img2} />
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

