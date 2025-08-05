import { motion } from "framer-motion";
import Form from '../../../components/form/Form'
import SpecialSection from '../points';
import ScrollDownButton from '../button';
import img from "../../../assets/images/TrekMain/DayaraBuyalTrek.jpg";
import img2 from "../../../assets/images/TrekMain/img2.svg";
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
            src={img}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
          />

          {/* 🌫️ Fog overlay */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none bg-[url('/fog.png')] bg-cover bg-center opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 2, duration: 2 }}
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
              className="text-4xl md:text-6xl font-bold drop-shadow-xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              Dayara Buyal Trek
            </motion.h1>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="mt-6 px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg backdrop-blur-md border border-white/20 shadow-md"
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

          {/* 🏔️ Mountain Silhouette */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-32 bg-[url('/mountains-silhouette.svg')] bg-bottom bg-repeat-x z-40 opacity-60"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.6 }}
            transition={{ delay: 4.2, duration: 1.2 }}
          />

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
  <defs>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#fafafa" />
      <stop offset="100%" stopColor="#DBFCE7" />
    </linearGradient>
  </defs>
  <path
    fill="url(#waveGradient)" // Reference the gradient
    d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z"
  />
</svg>
          </motion.div>
        </motion.div>

      {/* drop button  */}
        <ScrollDownButton />

      {/* 2nd section */}
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
              <h3 className="text-2xl md:text-3xl font-bold underline mb-4">Dayara Buyal Trek</h3>
              <p className="mb-2"><strong>Location :</strong> Uttarkashi district, Uttarakhand</p>
              <p className="mb-2"><strong>Altitude :</strong> ~12,000 ft (3,658 m)</p>
              <p className="mb-2"><strong>Duration :</strong> 4 to 6 days</p>
              <p className="mb-2"><strong>Difficulty :</strong> Easy to Moderate</p>
              <p className="mb-2"><strong>Base Camp :</strong> Raithal or Natin village</p>
              <p className="mb-2"><strong>Trek Distance :</strong> ~21–24 km round trip</p>
              <p className="mb-2 text-3xl"><strong>Cost :</strong> ₹7,999 /-</p>

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

      {/* 3rd section */}

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

      {/* 4th section */}
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

      {/* 5th section */}
      <SpecialSection/>

      {/* 6th section */}
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

export default DayaraBugyal;
