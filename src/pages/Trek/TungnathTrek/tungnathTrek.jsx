import { motion } from "framer-motion";
import Form from "../../../components/form/Form";
import SpecialSection from '../points';
import ScrollDownButton from '../button'
import img from "../../../assets/images/TrekMain/DayaraBuyalTrek.jpg";
import img1 from '../../../assets/images/TrekMain/tungnath.svg';
import img2 from "../../../assets/images/TrekMain/img2.svg";
import styles from "./tungnathTrek.module.css";

function TungnathTrek() {
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
        src={img1}
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
          className="text-green-300 text-4xl md:text-6xl xl:text-5xl font-extrabold leading-tight drop-shadow-[0_3px_15px_rgba(0,0,0,0.7)]"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Tungnath Chandra Shila Trek
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
            boxShadow: '0 0 28px rgba(34,197,94,0.85)',
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black font-bold px-10 py-3 rounded-full shadow-xl transition-all duration-300"
        >
          Book Now
        </motion.button>
      </motion.div>

      {/* 🔄 Top flipped wave */}
      <motion.div
        className="absolute top-[1px] left-0 w-full overflow-hidden leading-[0] rotate-180 z-40"
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
        className="bg-[#fdfaf6] py-16 px-4 md:px-12 xl:px-28 font-josefin mt-24"
      >
        {/* Hero Heading */}
        <div className="text-center mb-14 max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Come Join Us for the Ultimate Climbing Adventure
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
            Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure. Whether you're a beginner or a pro, we help you reach new heights with confidence.
          </p>
        </div>

        {/* Trek Info Row */}
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-4 max-w-screen-xl mx-auto">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-[1.5] text-black text-base md:text-lg lg:text-[22px] leading-relaxed mx-4 md:mx-6 mt-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold underline mb-4">Tungnath Chandra Shila Trek</h3>
            <p className="mb-2"><strong>Location :</strong> Uttarkashi district, Uttarakhand</p>
            <p className="mb-2"><strong>Altitude :</strong> ~14,600 ft (4,463 m)</p>
            <p className="mb-2"><strong>Duration :</strong> 8 days</p>
            <p className="mb-2"><strong>Difficulty :</strong> Moderate to Difficult</p>
            <p className="mb-2"><strong>Base Camp :</strong>Gangotri</p>
            <p className="mb-6"><strong>Trek Distance :</strong> ~41 - 46 km round trip</p>
            <p className="mb-6 text-3xl"><strong>Cost :</strong> ₹7,999 /-</p>

            {/* Book Now Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-3 bg-green-700 text-white rounded-xl text-center shadow-md hover:bg-green-800 transition-all duration-300"
            >
              Book Now
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex-[1] flex justify-center mx-4 md:mx-6 mb-10 lg:mb-0"
          >
            <img
              src={img}
              alt="Dayara Buyal Trek"
              className="rounded-xl object-cover w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] lg:w-[340px] lg:h-[340px]
                        border-[4px] border-black shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
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

      <section className={styles.checklistSection}>
        <div className={styles.box}>
          <p>
            {" "}
            Here’s a checklist of essentials to make sure you’re safe,
            comfortable, and ready to soak in those Himalayan views:
          </p>
          <div className={styles.downloadDiv}>
            <p>Download</p>
            <button>Checklist</button>
          </div>
        </div>
      </section>

      <SpecialSection/>

      <section className={styles.VisitingTimeSection}>
        <div className={styles.visitingCard}>
          <h3>Best Time to Visit</h3>
          <p>
            Spring (Mar–Apr): Rhododendron blooms <br />
            Summer (May–Jun): Lush green <br />
            meadows Autumn (Sep–Nov): Clear skies, golden hues <br />
            Winter (Dec–Feb): Snow-covered wonderland
          </p>
        </div>
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
