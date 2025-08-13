import { motion } from "framer-motion";
import  { useRef, useState } from 'react';
import Form from '../.././components/form/Form'
import './Zipline.css'
import pic1 from '../../assets/images/Home/download.jpeg'
import pic2 from '../../assets/images/Home/download (5).jpeg' 
import Feedback from "../../components/Feedback";

const Zipline = () => {
  const scrollToBottom = () => {
    secondSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#fafafa] to-[#FFF5E4] josefin-sans">

      {/* Hero Section */}
      <motion.section
        className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-20 pb-32 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1664735094820-c6c40d862d5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
        initial={{ opacity: 0.3, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* 🔵 Floating Bubbles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10 blur-2xl"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              zIndex: 0,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* 🧭 Title */}
        <motion.h1
          className="text-white text-4xl sm:text-6xl font-bold drop-shadow-lg leading-tight z-10"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Soar Over the Forests of Rishikesh
        </motion.h1>

        {/* 📜 Subtitle */}
        <motion.p
          className="max-w-2xl text-lg sm:text-2xl text-white font-medium mt-6 mb-8 z-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Experience the thrill of ziplining over lush valleys and mighty rivers in Shivpuri.
        </motion.p>

        {/* 🚀 Book Now Button */}
        <motion.button
          onClick={() => window.location.href = "/book-now"}
          className="relative px-10 py-3 text-white font-bold rounded-full shadow-xl bg-gradient-to-r from-orange-400 to-orange-500 overflow-hidden transition-all duration-700 transform group hover:scale-110 hover:-rotate-1 z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out blur-sm"></span>
          <span className="absolute inset-0 w-full h-full bg-orange-400 rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-125 group-hover:blur-2xl transition-all duration-700"></span>
          <span className="relative z-10 tracking-wide group-hover:tracking-widest group-hover:animate-pulse">
            Book Now
          </span>
        </motion.button>

        {/* ↓ Scroll Button */}
      <div className="mt-12 z-10">
        <motion.button
          onClick={scrollToBottom}
          className="bg-orange-300 text-white p-4 rounded-full text-2xl shadow-lg transition-all duration-700 hover:bg-orange-500 hover:rotate-[360deg] hover:scale-150 hover:shadow-2xl hover:animate-bounce"
          whileHover={{ scale: 1.2 }}
        >
          ↓
        </motion.button>
      </div>
        {/* 🌄 Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#FFF5E4] z-10" />
      </motion.section>

      {/* Mid Section */}
      <div 
      className="relative w-full px-6 py-40 overflow-hidden font-josefin">
        {/* Left Trapezoid */}
        <motion.div
          className="absolute -left-24 top-[10%] w-[80vw] max-w-[550px] h-[300px] z-0 opacity-20 blur-sm"
          style={{
            backgroundColor: "#14b8a6",
            clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            transformOrigin: "center",
            rotate: "18deg",
          }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        />

        {/* Right Trapezoid */}
        <motion.div
          className="absolute -right-24 bottom-[10%] w-[80vw] max-w-[550px] h-[300px] z-0 opacity-20 blur-sm"
          style={{
            backgroundColor: "#14b8a6",
            clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            transformOrigin: "center",
          }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.2 }}
          animate={{
            scale: [1, 1.03, 1],
            rotate: [-14, -13, -14],
          }}
          transition={{
            x: { duration: 0.8, ease: "easeOut", delay: 0.2 },
            opacity: { duration: 0.8, delay: 0.2 },
            scale: {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            },
            rotate: {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }}
        />

        {/* Paragraphs Section */}
        <div className="relative z-10 max-w-6xl mx-auto space-y-24">
          {/* Zipline / Paragliding */}
          <motion.div
            className="text-left w-full md:w-[70%]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
              Soar through the skies with an electrifying <span className="text-teal-600 font-bold">zipline</span> across the majestic Ganga or experience the thrill of <span className="text-teal-600 font-bold">paragliding</span> over the lush Himalayan foothills. Rishikesh offers you adrenaline from the sky, with panoramic views that’ll leave you breathless.
            </p>
          </motion.div>

          {/* Rafting / Rishikesh Vibe */}
          <motion.div
            className="text-right w-full md:w-[70%] ml-auto"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
              Ride the wild rapids with <span className="text-teal-600 font-bold">white water rafting</span> that made Rishikesh a global thrill destination. From Grade I to Grade IV rapids, the Ganga challenges you to conquer it. Combine this with serene sunsets and a spiritual vibe that’s uniquely Rishikesh.
            </p>
          </motion.div>

          {/* Accommodations / Local Experience */}
          <motion.div
            className="text-left w-full md:w-[70%]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
              After your adventures, unwind in our cozy <span className="text-teal-600 font-bold">accommodations</span> ranging from riverside tents to boutique cottages. Wake up to the sound of the Ganga and fresh mountain air. The perfect mix of comfort and adventure in the heart of Rishikesh.
            </p>
          </motion.div>
        </div>
      </div>

      {/* video section */}
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">

        {/* 🔳 VIDEO CARD */}
        <motion.div
          className="relative z-10 w-[90%] h-[70vh] rounded-3xl overflow-hidden bg-white/10 border border-white/20 shadow-[0_0_60px_rgba(0,255,255,0.25)] backdrop-blur-xl"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >


          {/* 🎥 Video */}
          <video
            ref={videoRef}
            src="https://media.istockphoto.com/id/2151710894/video/exhilarating-mountain-zipline-adventure.mp4?s=mp4-640x640-is&k=20&c=0CGxR2rGeUoNS0EnqhQlman5iwQ412FojtCSsIdRcnE="
            className="w-full h-full object-cover rounded-3xl"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* 🎮 Play/Pause Button */}
          <button
            onClick={togglePlayback}
            className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border border-white/30 transition-all duration-200"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </motion.div>
      </div>

      {/* 3rd Section */}
      <section className="w-full px-4 py-16 sm:py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row gap-14 lg:gap-20 items-center">
            {/* 📝 Text Content – slides in from left */}
            <motion.div
              className="w-full flex-1 text-center lg:text-left"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold mb-4 text-black leading-snug">
                Zipline Through Nature’s Heart
              </h2>
              {/* Features grid */}
              <div className="flex justify-center px-4">
                {/* Zipline card */}
                <div className="max-w-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">Zipline</h3>
                  <p className="text-black/80 mb-4">
Experience the thrill of gliding over canopies, cliffs, and sparkling rivers. Our Rishikesh zipline adventure offers unmatched aerial views and pure excitement.
                  </p>
                  <button className="relative inline-block px-6 py-3 font-semibold text-black group overflow-hidden rounded-full transition-transform duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 transition-opacity duration-500 group-hover:opacity-80"></span>
                    <span className="absolute inset-0 w-full h-full -translate-x-full bg-white/20 blur-sm group-hover:translate-x-full transition-transform duration-700"></span>
                    <span className="absolute inset-0 rounded-full border border-black opacity-0 group-hover:opacity-100 transition duration-500"></span>
                    <span className="relative z-10">Book</span>
                  </button>
                </div>
              </div>

            </motion.div>

            {/* 📸 Image Group – slides in from right */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 lg:w-auto"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Zipline image */}
              <motion.div
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64  md: lg:h-64 transform rotate-6"
                animate={{ scale: [1, 1.03, 1], rotate: [6, 7, 6] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 rounded-2xl bg-black scale-105 translate-x-2 translate-y-2 z-0" />
                <img
                  src={pic1}
                  alt="Zipline"
                  className="relative w-full h-full object-cover rounded-2xl z-10 border-4 border-black"
                />
              </motion.div>

              {/* Kayaking image */}
              <motion.div
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 transform -rotate-6"
                animate={{ scale: [1, 1.03, 1], rotate: [-6, -7, -6] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 rounded-2xl bg-black scale-105 translate-x-2 translate-y-2 z-0" />
                <img
                  src={pic2}
                  alt="Kayaking"
                  className="relative w-full h-full object-cover rounded-2xl z-10 border-4 border-black"
                />
              </motion.div>
            </motion.div>
          </div>
      </section>
        
      {/* 4th section */}
      <div className="px-6 py-12 md:px-16 josefin-sans text-gray-800">
        {/* Zipline Section */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-pink-500">
              Himalayan Zipline Adventure
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Experience the thrill of soaring 300 feet above the lush valleys of Rishikesh at 40-50 km/h speeds. 
              Our eco-friendly zipline course offers breathtaking panoramic views of the Himalayan foothills and 
              the sacred Ganges river below.
            </p>
            
            {/* Book Now Button */}
            <motion.button 
              className="px-7 py-3 text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-pink-500 rounded-full shadow-lg relative overflow-hidden group mx-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Book Now - ₹1,499 Only
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </motion.button>
          </div>

          {/* Image Grid - Larger Images & Smaller Gap */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-1 md:gap-0">
              {/* Main Image - Increased Size */}
              <div className="relative aspect-square w-full max-w-[180px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] mx-auto overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all group">
                <img
                  src={pic1}
                  alt="Zipline aerial view"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="text-xs font-semibold text-white/90">300ft Height</span>
                  <span className="text-[0.65rem] text-amber-300 mt-0.5">Breathtaking Views</span>
                </div>
              </div>

              {/* Secondary Image - Increased Size */}
              <div className="relative aspect-square w-full max-w-[180px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] mx-auto overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all group">
                <img
                  src={pic2}
                  alt="Zipline platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="text-xs font-semibold text-white/90">500m Length</span>
                  <span className="text-[0.65rem] text-amber-300 mt-0.5">Adrenaline Rush</span>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
      {/* feedback */}
      <Feedback/>

      <Form
        boxClass="bg-[#FFF5E4]"
        headingClass="text-black"
        buttonClass="bg-[#E26024] hover:bg-[#E26024]"
        focusClass="focus:outline-[#E26024]"
      />
    </div>
  )
}

export default Zipline
