import  { useRef , useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Form from '../../components/form/Form';
import './Gallery.css'
import pic1 from '../../assets/images/Home/download.jpeg'
import pic2 from '../../assets/images/Home/download (5).jpeg'

const Gallery = () => {
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const images = [
    pic1, pic2, pic2, pic1, pic1, pic2,
    pic2, pic1, pic1, pic2, pic2, pic1,
    pic1, pic2, pic2,
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section className='bg-[#ffffff]  md:pt-30'>
        {/* 1st section */}
        <div className="  w-full max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 -mt-15">

        {/* 🔵 Left Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight inline-block whitespace-nowrap border-r-4 border-blue-900 pr-2 overflow-hidden animate-typing"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          >
            Lorem Ipsum is <br /> simply dummy <br /> text of the
          </motion.h1>

          <motion.p
            className="text-gray-700 text-base md:text-lg max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt obcaecati nobis accusamus eum quae quam tempora reprehenderit minus necessitatibus.
          </motion.p>

          <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-4">
            {/* 🚀 Book Now Button */}
            <motion.button
              className="relative group overflow-hidden bg-gradient-to-r from-blue-700 to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-500 ease-in-out hover:scale-110"
              whileHover={{ scale: 1.1, rotate: [0, 3, -3, 3, -3, 0] }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 blur-md transition duration-700 scale-125"></span>
              <span className="relative z-10">Book Now 🚀</span>
            </motion.button>

            {/* 🖼️ View Gallery Button with emoji */}
            <motion.button
              onClick={() => {
                const el = document.getElementById("gallery");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative group overflow-hidden bg-gradient-to-r from-blue-700 to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-500 ease-in-out hover:scale-110"
              whileHover={{ scale: 1.1, rotate: [0, 3, -3, 3, -3, 0] }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 blur-md transition duration-700 scale-125"></span>
              <span className="relative z-10">View Gallery 🖼️</span>
            </motion.button>

          </div>
        </div>

        {/* 🟣 Right Image Grid */}
        <motion.div
          className="flex-1 relative grid grid-cols-2 gap-[2px] w-full max-w-md bg-white rounded-3xl p-[2px]"
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden shadow-lg h-48 md:h-64 rounded-br-3xl">
            <img src={pic1} alt="img1" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden shadow-lg h-48 md:h-64 rounded-bl-3xl">
            <img src={pic2} alt="img2" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden shadow-lg h-48 md:h-64 rounded-tr-3xl">
            <img src={pic2} alt="img3" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden shadow-lg h-48 md:h-64 rounded-tl-3xl">
            <img src={pic1} alt="img4" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full overflow-hidden border-[2px] border-white shadow-xl z-10 bg-white"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src={pic2} alt="center" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
        </div>

        {/* 🔽 Scroll Button Centered */}
        <div className="flex justify-center  sm:mt-1   mt-12 z-10">
        <button
          onClick={scrollToBottom}
          className="bg-orange-300 text-white p-4 rounded-full text-2xl shadow-lg
          transition-all duration-700
          hover:bg-orange-500 hover:rotate-[360deg] hover:scale-150
          hover:shadow-2xl hover:animate-bounce"
        >
          ↓
        </button>
        </div>

        {/* 📍 Scroll Target (bottom) */}
        <div ref={bottomRef} className="h-[300px] w-full bg-transparent" />

        {/* 2nd section */}
        <motion.div
          className="relative h-auto bg-[#F1EFEC] -mt-50 px-4 py-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Striped Background */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(to right, rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 80px)] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-8">
            {/* Heading */}
            <motion.h2
              className="text-3xl md:text-5xl font-josefin font-semibold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Lorem Ipsum
            </motion.h2>

            {/* Images */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 md:gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {[pic1, pic2, pic1, pic2].map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-36 h-36 md:w-52 md:h-52 rounded-3xl object-cover shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              ))}
            </motion.div>

            {/* Paragraph */}
            <motion.p
              className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed font-josefin px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </motion.p>
          </div>
        </motion.div>

        {/* 3rd section */}
        <motion.div
          className="relative mt-16 h-auto md:h-[50vh] flex items-center justify-center bg-[#e0d0c5] text-black px-4 py-12 md:py-0"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Striped Background */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(to right, rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 80px)] pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl space-y-6 font-josefin">
            {/* Crazy Heading */}
            <motion.h1
              className="text-3xl md:text-5xl font-semibold"
              initial={{ y: -100, rotate: -15, scale: 0.8, opacity: 0 }}
              animate={{ y: 0, rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.3 }}
            >
              Lorem Ipsum
            </motion.h1>

            {/* Animated Paragraph */}
            <motion.p
              className="text-base md:text-lg leading-relaxed"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1, delay: 0.5 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. <br />
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </motion.p>
          </div>
        </motion.div>

        {/* 4TH section */}
        <div className="w-full px-4 mt-15 py-10 md:py-20 overflow-hidden josefin-sans">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center md:items-stretch">

            {/* ✅ Mobile Heading */}
            <motion.h2
              className="text-3xl md:text-5xl font-extrabold text-center text-black md:hidden mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            >
              WHY ADVENTURERS <br /> <span className="text-green-600">CHOOSE US</span>
            </motion.h2>

            {/* 🔥 Image Grid - LEFT */}
            <motion.div
              className="flex-1 relative grid grid-cols-2 gap-[2px] w-full max-w-md bg-white rounded-3xl p-[2px] -mt-4 md:mt-16 lg:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {[{ src: pic1, className: "rounded-br-3xl" }, { src: pic2, className: "rounded-bl-3xl" }, { src: pic2, className: "rounded-tr-3xl" }, { src: pic1, className: "rounded-tl-3xl" }].map((img, i) => (
                <motion.div
                  key={i}
                  className={`overflow-hidden shadow-lg h-44 md:h-56 ${img.className}`}
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={img.src} alt={`img${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}

              {/* Center Circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 bg-white"
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.2, rotate: 6 }}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.6 }}
              >
                <img src={pic2} alt="center" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>

            {/* ⚡️ Text Column - RIGHT */}
            <motion.div
              className="flex-1 flex items-center justify-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-center md:text-left">

                {/* Desktop Heading */}
                <motion.h2
                  className="text-3xl md:text-5xl font-extrabold hidden md:block text-black leading-tight"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                >
                  WHY ADVENTURERS <br /> <span className="text-green-600">CHOOSE US</span>
                </motion.h2>

                {/* Description */}
                <p className="text-base md:text-lg text-black leading-relaxed max-w-xl font-medium">
                  With over 15 years of wilderness expertise, we've guided thousands of adventurers through unforgettable journeys. Our certified guides, premium equipment, and commitment to safety ensure every expedition exceeds expectations.
                </p>

                {/* Feature List */}
                <div className="space-y-6">
                  {/* Expert Guides */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 items-center text-center sm:text-left gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white text-xl">
                      👥
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-lg">Expert Guides</h4>
                      <p className="text-sm text-gray-700">Certified professionals with decades of experience</p>
                    </div>
                  </div>

                  {/* Premium Locations */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 items-center text-center sm:text-left gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-green-400 flex items-center justify-center text-white text-xl">
                      📍
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-lg">Premium Locations</h4>
                      <p className="text-sm text-gray-700">Access to exclusive wilderness destinations</p>
                    </div>
                  </div>

                  {/* Safety First */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 items-center text-center sm:text-left gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-yellow-300 flex items-center justify-center text-white text-xl">
                      ⭐
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-lg">Safety First</h4>
                      <p className="text-sm text-gray-700">Industry-leading safety protocols and equipment</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 5th image gallery */}
        <section id='gallery' className="scroll-mt-32">
          <div className="w-full px-6 md:px-12 py-12 overflow-hidden">
            {/* Title & Button */}
            <motion.div
              className="text-center md:text-left mb-10"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold font-josefin text-gray-900 tracking-tight mb-4">
                📸 Image Gallery
              </h2>

              <motion.button
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-full text-sm md:text-base font-semibold shadow-xl transition-all duration-300"
              >
                <span className="absolute left-0 top-0 w-full h-full bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
                🚀 Select Something
                <span className="ml-2 group-hover:translate-y-1 transition-transform duration-300">👇</span>
              </motion.button>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-7xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  className={`overflow-hidden rounded-2xl p-1 cursor-pointer
                    ${index === 0 ? 'rounded-tl-3xl' : ''}
                    ${index === images.length - 1 ? 'rounded-br-3xl' : ''}
                    shadow-md
                  `}
                  onClick={() => setSelectedImage(src)}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  whileHover={{ scale: 1.06, rotate: 1, zIndex: 10 }}
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="object-cover w-full h-24 sm:h-28 md:h-32 lg:h-36 rounded-2xl transition duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center"
                  onClick={() => setSelectedImage(null)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="relative max-w-3xl w-full mx-4"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <button
                      className="absolute top-3 right-3 text-white text-2xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-60 transition"
                      onClick={() => setSelectedImage(null)}
                    >
                      ×
                    </button>
                    <img
                      src={selectedImage}
                      alt="Full View"
                      className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      <Form
        boxClass="bg-[#FFF9E5]"
        headingClass="text-[#000000]"
        buttonClass="bg-[#DCD0A8] hover:bg-[#DCD0A8]"
        focusClass="focus:outline-[#00786F]"
      />
    </section>
  )
}

export default Gallery