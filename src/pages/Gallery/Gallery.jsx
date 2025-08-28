import { useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Form from '../../components/form/Form';
import './Gallery.css'
import GallerySection from './image';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Gallery = () => {
  const tutanRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const images = [
    // 🌊 Rafting
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_1.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_22.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_3.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_23.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_7.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_5.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_19.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_24.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_17.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_2.webp", category: "rafting" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_10.webp", category: "rafting" },

    // 🥾 Trekking
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Tungnath/tungnath_img08.webp", category: "trekking" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Tungnath/tungnath_img13.webp", category: "trekking" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Tungnath/tungnath_img14.webp", category: "trekking" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Tungnath/tungnath_img18.webp", category: "trekking" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Gomukh%20Tapovan/gomukhTapovan_img01.webp", category: "trekking" },

    // 🪂 Bungee
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/heroImage_01.webp", category: "bungee" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/heroImage_02.webp", category: "bungee" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/splash%20bungee/splash_05.webp", category: "bungee" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/splash%20bungee/splash_11.webp", category: "bungee" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/splash%20bungee/splash_14.webp", category: "bungee" },

    // 🏡 Stays
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_04.webp", category: "stays" },
    { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_01.webp", category: "stays" },
  ];
  const customMessage = encodeURIComponent("Hi, I am Aman and I want to book a rafting trip!");



  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section className=' bg-gradient-to-r from-[#ffffff] to-[#f1daff] pt-20 josefin-sans'>
        {/* 1st section */}        
        <div className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 -mt-15">

        {/* 🔵 Left Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight inline-block whitespace-nowrap border-r-4 border-blue-900 pr-2 overflow-hidden animate-typing"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          >
            Dive into the <br /> Thrill of Adventure <br /> in Rishikesh
          </motion.h1>

          <motion.p
            className="text-gray-700 text-base md:text-lg max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Experience the ultimate adrenaline rush with white-water rafting, bungee jumping, kayaking, and trekking in the heart of Rishikesh. Whether you're chasing rapids or scaling trails, every moment here is packed with energy, nature, and unforgettable memories.
          </motion.p>

          <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-4">
            {/* 🚀 Book Now Button */}
          <a
            href="https://wa.me/7078287331?text=Hi%20I%20am%20interested%20in%20booking%20a%20tour"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="relative group cursor-pointer overflow-hidden bg-gradient-to-r from-blue-700 to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-500 ease-in-out hover:scale-110"
              whileHover={{ scale: 1.1, rotate: [0, 3, -3, 3, -3, 0] }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 blur-md transition duration-700 scale-125"></span>
              <span className="relative z-10">Book Now 🚀</span>
            </motion.button>
          </a>

<motion.button
  onClick={() =>
    window.open(
      "https://wa.me/7078287331?text=Hello%2C%20I%20am%20interested%20in%20viewing%20the%20gallery%20packages",
      "_blank"
    )
  }
  className="relative cursor-pointer group overflow-hidden bg-gradient-to-r from-blue-700 to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-500 ease-in-out hover:scale-110"
  whileHover={{ scale: 1.1, rotate: [0, 3, -3, 3, -3, 0] }}
>
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 blur-md transition duration-700 scale-125"></span>
  <span className="relative z-10">View Gallery 🖼️</span>
</motion.button>

        {/* 🖼️ View Gallery Button */}
          <motion.button
            onClick={() => {
              tutanRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative cursor-pointer group overflow-hidden bg-gradient-to-r from-blue-700 to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-500 ease-in-out hover:scale-110"
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
            <img 
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_19.webp"
              alt="img1" 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden shadow-lg h-48 md:h-64 rounded-bl-3xl">
            <img 
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/splash%20bungee/splash_04.webp"
              alt="img2" 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden shadow-lg h-48 md:h-64 rounded-tr-3xl">
            <img 
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/kedarkatha%20trek/kedarkantha_img14.webp" 
              alt="img3" 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden shadow-lg h-48 md:h-64 rounded-tl-3xl">
            <img 
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline/zipline_img12.webp"
              alt="img4" 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full overflow-hidden border-[2px] border-white shadow-xl z-10 bg-white"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_06.webp"
              alt="center" 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto -mt-60 px-4 py-6"
        >
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center">
            Discover the pulse of Rishikesh through an unforgettable journey of adventure. From heart-racing <span className="text-blue-700 font-medium">white-water rafting</span> on the Ganges, scenic <span className="text-blue-700 font-medium">treks</span> through the Himalayas, thrilling <span className="text-blue-700 font-medium">kayaking</span> escapes, to the extreme rush of <span className="text-blue-700 font-medium">bungee jumping</span> — this gallery captures the raw beauty and adrenaline of nature and sport colliding in one epic destination.
          </p>
        </motion.div>

        {/* VIDEO GALLERY SECTION */}
        <motion.section
          className="relative josefin-sans md:mt-25 py-12 px-4 sm:px-6 md:px-10 lg:px-20"
          id="bottomRef"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Content Wrapper */}
          <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
            {/* Heading */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold font-josefin text-black"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Experience the Adventure
            </motion.h2>

            {/* Video Grid (4 YouTube Shorts, Clean UI) */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                "https://www.youtube.com/embed/aHrIyirdeDU?autoplay=0&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0",
                "https://www.youtube.com/embed/sjmNmWuYXqQ?autoplay=0&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0",
                "https://www.youtube.com/embed/xI-IQ7EpLgE?autoplay=0&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0",
                "https://www.youtube.com/embed/9IkaMZjyt-8?autoplay=0&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0",
              ].map((yt, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-lg bg-black hover:shadow-yellow-400/30 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 140 }}
                >
                  <div className="aspect-[9/16] w-full">
                    <iframe
                      src={yt}
                      className="w-full h-full rounded-2xl"
                      frameBorder="0"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Paragraph */}
            <motion.p
              className="text-sm sm:text-base max-w-2xl mx-auto text-gray-700 font-josefin leading-relaxed px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              These real clips showcase our adventure experiences – live from Rishikesh’s whitewater. 
              Play, pause, and feel the adrenaline.
            </motion.p>
          </div>
        </motion.section>

        {/* 4TH section */}
        <div className="w-full px-4 mt-15 py-10 md:py-20 overflow-hidden josefin-sans">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">

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
              className="flex-1 relative grid grid-cols-2 gap-[2px] w-full max-w-md mx-auto md:ml-20 bg-white rounded-3xl p-[2px]"
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
              {[
                { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/kedarkatha%20trek/kedarkantha_img10.webp", className: "rounded-br-3xl" },
                { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_1.webp", className: "rounded-bl-3xl" },
                { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline/zipline_img05.webp", className: "rounded-tr-3xl" },
                { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/heroImage_01.webp", className: "rounded-tl-3xl" }
              ].map((img, i) => (
                <motion.div
                  key={i}
                  className={`overflow-hidden shadow-lg h-44 md:h-56 ${img.className}`}
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={img.src} 
                    alt={`img${i + 1}`} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
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
                <img 
                  src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Bungee%20Jumping/splash%20bungee/splash_01.webp" 
                  alt="center" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
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
        <section ref={tutanRef}>
              <GallerySection />
        </section>
        

        <Form
          boxClass="bg-gradient-to-l from-[#ffffff] to-[#f1daff]"
          headingClass="text-[#000000]"
          buttonClass="bg-[#DCD0A8] hover:bg-[#f1daff]"
          focusClass="focus:outline-[#00786F]"
        />
    </section>
  )
}

export default Gallery