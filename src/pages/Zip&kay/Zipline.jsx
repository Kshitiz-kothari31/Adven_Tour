import { motion } from "framer-motion";
import Form from '../.././components/form/Form'
import './Zipline.css'
import pic1 from '../../assets/images/Home/download.jpeg'
import pic2 from '../../assets/images/Home/download (5).jpeg' 
import Feedback from "../../components/Feedback";

const Zipline = () => {
const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};

  return (
    <div className="w-full  ">

      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 pt-20 pb-32 animated-gradient">

        {/* 🔵 Animated Bubbles */}
        {[...Array(12)].map((_, i) => (
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

        {/* ✨ Animated Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-light text-white drop-shadow-sm mb-6 leading-tight relative z-10"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Lorem Ipsum is simply<br />dummy text of the
        </motion.h1>

        {/* ✨ Animated Paragraph */}
        <motion.p
          className="max-w-2xl text-white text-sm md:text-base mb-8 relative z-10"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          It has been the industry's standard dummy text ever since the 1500s.
        </motion.p>

        {/* 🚀 Book Now Button */}
        <motion.button 
          className="relative px-10 py-3 sm:mt-9 text-white font-bold rounded-full shadow-xl
                    bg-gradient-to-r from-orange-400 to-orange-500
                    overflow-hidden transition-all duration-700 ease-in-out transform
                    group hover:scale-110 hover:-rotate-1 z-10"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                          translate-x-[-100%] group-hover:translate-x-[200%]
                          transition-transform duration-1000 ease-out blur-sm"></span>

          <span className="absolute inset-0 w-full h-full bg-orange-400 rounded-full opacity-0
                          group-hover:opacity-30 group-hover:scale-125 group-hover:blur-2xl
                          transition-all duration-700"></span>

          <span className="relative z-10 tracking-wide group-hover:tracking-widest group-hover:animate-pulse">
            Book Now
          </span>
        </motion.button>

        {/* ↓ Scroll Arrow */}
        <div className="mt-12 sm:mt-18 z-10">
          <button onClick={scrollToBottom} className="bg-orange-300 text-white p-4 rounded-full text-2xl shadow-lg
                            transition-all duration-700
                            hover:bg-orange-500 hover:rotate-[360deg] hover:scale-150
                            hover:shadow-2xl hover:animate-bounce">
            ↓
          </button>
        </div>

        {/* Smooth fade bottom */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#FFF5E4] z-10" />
      </div>

      {/* Mid Section */}
      <div className="relative bg-[#FFF5E4]  w-full px-6 py-40  overflow-hidden">
        {/* ✅ Left Trapezoid - only slide in */}
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

        {/* ✅ Right Trapezoid - slide in + giggle */}
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

        {/* ✅ Content */}
        <div className="relative z-10 max-w-6xl mx-auto space-y-24">
          {/* Paragraph 1 - Slide In Left */}
          <motion.div
            className="text-left w-full md:w-[70%]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting.
            </p>
          </motion.div>

          {/* Paragraph 2 - Slide In Right */}
          <motion.div
            className="text-right w-full md:w-[70%] ml-auto"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              It has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3rd Section */}
      <section className="w-full bg-[#FFF5E4] px-4 py-16 sm:py-24 md:py-32 lg:py-40">
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
                Lorem Ipsum is simply dummy text 
              </h2>
              {/* Features grid */}
              <div className="flex justify-center px-4">
                {/* Zipline card */}
                <div className="max-w-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">Zipline</h3>
                  <p className="text-black/80 mb-4">
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
      <div className=" px-6 bg-[#FFF5E4] py-12 md:py-20 md:px-20 font-sans text-gray-800 space-y-24">
        {/* Zipline Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Text Left with More Padding */}
          <div className="pl-8 md:pl-16">
            <h2 className="text-xl font-bold mb-2">Zipline</h2>
            <p className="leading-relaxed text-sm md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          {/* Image Right with Effects */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl group">
              {/* Gradient Glow BG */}
              <div className="absolute -inset-2 bg-gradient-to-br from-orange-300 via-yellow-100 to-pink-200 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500 z-0"></div>

              {/* Image */}
              <img
                src={pic1}
                alt="Zipline"
                className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition duration-500 ease-in-out"
              />
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
