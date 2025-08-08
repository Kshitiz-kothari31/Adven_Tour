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
            className="text-4xl md:text-6xl font-bold leading-tight tracking-wider drop-shadow-lg"
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
              <h3 className="text-2xl md:text-3xl font-bold underline mb-4">Gaumukh Trek</h3>
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

export default GomukhTrek;
