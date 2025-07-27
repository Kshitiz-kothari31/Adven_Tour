import Feedback from '../../components/Feedback';
import Form from '../../components/form/Form';
import './Zipline.css'
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Kayaking = () => {

  const bgHero =
  "https://plus.unsplash.com/premium_photo-1661958764995-75c10d34360b?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img1=  "https://plus.unsplash.com/premium_photo-1661958764995-75c10d34360b?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img2=  "https://plus.unsplash.com/premium_photo-1661958764995-75c10d34360b?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const videoSrc =
  "https://videos.pexels.com/video-files/2286307/2286307-uhd_2560_1440_24fps.mp4"; 

  const handleScroll = () =>
  document.getElementById("next-section")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className='josefin-sansS'>
        {/* hero section */}
        <motion.section
          className="relative w-full h-[90vh]  overflow-hidden text-white josefin-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* 🖼 Background */}
          <motion.img
            src={bgHero}
            alt="Kayaking hero"
            className="absolute inset-0 w-full h-full object-cover z-0"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* 🎯 Centered copy */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Discover the Thrill of Kayaking in <br />Shivpuri, Rishikesh
            </motion.h1>

            <motion.p
              className="text-white/90 text-sm md:text-lg max-w-2xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Glide through the Ganges with breathtaking Himalayan views. Your adventure begins where the river calls.
            </motion.p>
            <motion.button
              /* ▶ entrance: fade + slide up */
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, type: "spring", stiffness: 130 }}

              /* 🪄 hover / tap */
              whileHover={{
                scale: 1.12,                          // gentle zoom‑in
                boxShadow: "0 0 24px rgba(14,165,233,0.55)",
                transition: { type: "spring", stiffness: 260, damping: 18 }
              }}
              whileTap={{ scale: 0.94 }}              // press feedback

              /* 🌊 kayak‑theme solid aqua */
              className="
                bg-sky-600 hover:bg-sky-700
                text-white font-semibold px-8 py-3
                rounded-full shadow-lg transition-colors duration-300
              "
            >
              Book Now
            </motion.button>
          </div>

          {/* 🟠 Zig‑zag bottom */}
          {/* 🌄 Uneven, smooth zig‑zag bottom */}
          <div className=" absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30">
          <svg
            className="block w-full h-[140px] [shape-rendering:geometricPrecision] -mb-[2px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#FDFAF6"
              stroke="none"
              d="
                M0,288 
                C80,260 160,180 240,192 
                C320,204 400,288 480,288 
                C560,288 640,208 720,192 
                C800,176 880,224 960,240 
                C1040,256 1120,224 1200,208 
                C1280,192 1360,240 1440,224 
                L1440,320 L0,320 Z
              "
            />
          </svg>

          </div>


        </motion.section>

        {/* drop button */}
        <motion.button
          onClick={handleScroll}
          className="
            mx-auto mt-6 flex items-center justify-center
            w-15 h-15 rounded-full
            bg-[#E0F7FA] hover:bg-[#C5EEF4]
            text-black shadow-lg cursor-pointer
          "
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          whileHover={{
            scale: 1.15,
            rotate: 180,
            transition: { type: "spring", stiffness: 180, damping: 10 },
          }}
        >
          <ChevronDown className="w-6 h-6 stroke-[2.5]" />
        </motion.button>

        {/* 3rd section */}
        <section id="next-section" className="w-full  px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {/* 📸 Image cluster */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              {/* Card A */}
              <img
                src={img1}
                alt="Kayak A"
                className="
                  w-[220px] sm:w-[260px] md:w-[280px] lg:w-[320px]
                  aspect-square object-cover rounded-2xl
                  rotate-[18deg] md:rotate-[22deg]
                  shadow-xl
                "
              />

              {/* Card B */}
              <img
                src={img2}
                alt="Kayak B"
                className="
                  absolute
                  w-[200px] sm:w-[240px] md:w-[260px] lg:w-[300px]
                  aspect-square object-cover rounded-2xl
                  rotate-[-16deg] md:rotate-[-20deg]
                  translate-x-16 translate-y-16
                  sm:translate-x-20 sm:translate-y-20
                  md:translate-x-24 md:translate-y-24
                  lg:translate-x-32 lg:translate-y-24
                  shadow-lg
                "
              />
            </div>

            {/* ✍️ Copy */}
            <div className="w-full md:w-1/2 space-y-6">
              <motion.h2
                className="text-2xl sm:text-3xl mt-6 md:text-4xl font-bold font-josefin"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                The Adventure Capital of India
              </motion.h2>

              <motion.p
                className="text-gray-700  text-base sm:text-lg leading-relaxed"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
Shivpuri, just a few kilometers upstream from Rishikesh, is known for its pristine natural beauty, powerful river currents, and serene Himalayan backdrop. Whether you're seeking the adrenaline rush of Grade III rapids or a peaceful drift through calm waters, this stretch of the Ganges delivers it all. It's not just kayaking—it's a full-body connection with nature.          
              </motion.p>

              {/* 📊 Stats */}
              <motion.div
                className="
                  border-t border-black/70 pt-6
                  grid grid-cols-3 text-center font-semibold
                  text-xl sm:text-2xl
                "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {['82K+', '82K+', '82K+'].map((num, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                    className={i < 2 ? 'border-r border-black/50' : ''}
                  >
                    {num}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4th video section */}
        <section className="relative sm:mt-50 w-full h-[70vh] overflow-hidden flex items-center justify-center px-4 text-black josefin-sans">
            {/* 🎥 Background video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* 🔲 Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/25 z-10" />

            {/* 💬 Hero content */}
            <div className="relative z-20 text-center max-w-2xl flex flex-col items-center">
              {/* ▶️ Play‑icon block removed */}

              <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">Ride the Rapids of Shivpuri</h1>

              <p className="text-sm md:text-base text-white leading-relaxed mb-8">
Experience the pulse of the Ganges as you kayak through Rishikesh’s wildest waters. Guided by nature, driven by thrill—this is where your river story begins.
              </p>

              <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition hover:scale-105">
                Book Now
              </button>
            </div>
        </section>

        {/* 5th section */}
        <section className="relative px-6 py-24 overflow-hidden ">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* 📝 TEXT with Framer‑Motion */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, type: "spring", bounce: 0.25 }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-josefin text-4xl md:text-5xl font-extrabold mb-6 text-gray-900"
              >
                Kayaking, Adventure Meets Spiritual Call
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-700 text-lg leading-relaxed"
              >
After your paddle, explore nearby yoga retreats, peaceful forests, and vibrant local culture. Shivpuri offers not just adrenaline—but balance. Watch the sunrise on the riverbank and let the Ganges guide your inner peace.
              </motion.p>
            </motion.div>

            {/* 🖼️ IMAGE CARD with Motion */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.35 }}
              viewport={{ once: true }}
              className="relative w-[320px] sm:w-[380px] md:w-[440px] lg:w-[500px] mx-auto"
            >
              {/* Pulsing glow behind */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-yellow-300 via-pink-400 to-rose-500 rounded-3xl opacity-30 animate-pulse" />

              {/* Rectangular image card */}
              <div
                className="relative z-10 overflow-hidden rounded-3xl border-[6px] border-white shadow-2xl
                          hover:scale-[1.04] transition-transform duration-500 ease-in-out"
              >
                <img
                  src={img1}
                  alt="Zipline adventure"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6th section */}
        <div className="w-full px-4  -mt-20 sm:mt-0 py-32">
          <div className="max-w-6xl mx-auto">
            {/* 🔹 Heading – fade‑in & centered */}
            <motion.h2
              className="text-3xl font-bold  mb-10 text-center text-black"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              This Isn’t Just a Trip. It’s a Memory in Motion.
            </motion.h2>

            {/* 🔸 Two‑column layout under the heading */}
            <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
              {/* ✅ Kayaking text – left side */}
              <motion.div
                className="w-full lg:w-1/2 text-center lg:text-left"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-black mb-3">Kayaking</h3>
                <p className="text-black/80 mb-6">
Kayaking in Rishikesh Shivpuri is more than water and paddle—it's about connection, thrill, and stories you’ll tell forever. Join us today..
                </p>

                <button className="relative inline-block px-6 py-3 font-semibold text-black group overflow-hidden rounded-full transition-transform duration-500 hover:scale-105">
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 transition-opacity duration-500 group-hover:opacity-80" />
                  <span className="absolute inset-0 w-full h-full -translate-x-full bg-white/20 blur-sm group-hover:translate-x-full transition-transform duration-700" />
                  <span className="absolute inset-0 rounded-full border border-black opacity-0 group-hover:opacity-100 transition duration-500" />
                  <span className="relative z-10">Book</span>
                </button>
              </motion.div>

              {/* ✅ Image stack – right side */}
              <motion.div
                className="w-full lg:w-1/2 sm:mt-10 flex flex-row flex-wrap justify-center gap-6"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Zipline image – a bit higher */}
                <motion.div
                  className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rotate-6 lg:-translate-y-6"
                  animate={{
                    scale: [1, 1.03, 1],
                    rotate: [6, 7, 6],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-black scale-105 translate-x-2 translate-y-2 z-0" />
                  <img
                    src={img1}
                    alt="Zipline"
                    className="relative w-full h-full object-cover rounded-2xl z-10 border-4 border-black"
                  />
                </motion.div>

                {/* Kayaking image – baseline */}
                <motion.div
                  className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 -rotate-6"
                  animate={{
                    scale: [1, 1.03, 1],
                    rotate: [-6, -7, -6],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-black scale-105 translate-x-2 translate-y-2 z-0" />
                  <img
                    src={img2}
                    alt="Kayaking"
                    className="relative w-full h-full object-cover rounded-2xl z-10 border-4 border-black"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>     

        {/* feedback */}
        <Feedback/>

      <Form
        boxClass="bg-[#E0F7FA]"
        headingClass="text-black"
        buttonClass="bg-blue-600 hover:bg-blue-700"
        focusClass="focus:outline-blue-500"
      />
    </section>

  )
}

export default Kayaking