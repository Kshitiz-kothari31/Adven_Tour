import { motion} from 'framer-motion';
import { Link } from "react-router-dom";
import { useEffect , useState } from 'react';
import Feedback from '../../components/Feedback';
import img1 from '../../assets/images/Home/img1.png'
import img2 from '../../assets/images/Home/img2.png'
import img3 from '../../assets/images/Home/img3.png'
import pic1 from '../../assets/images/Home/download.jpeg'
import pic2 from '../../assets/images/Home/download (5).jpeg' 
import ImageSlider from './imageslider'
import './home.css'

const images = [img1, img2, img3];

const ImageSliderBox = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <motion.div
      className="relative w-full h-[93vh] overflow-hidden bg-black font-josefin"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* 🔁 Previous image fading out */}
      {prev !== null && (
        <motion.img
          key={`prev-${prev}`}
          src={images[prev]}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
        />
      )}

      {/* 🖼️ Current image fading in */}
      <motion.img
        key={`current-${current}`}
        src={images[current]}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full object-cover z-30"
      />

      {/* 🌫️ Fog overlay */}
      <motion.div
        className="absolute inset-0 z-40 pointer-events-none bg-[url('/fog.png')] bg-cover bg-center opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
      />

      {/* 🌓 Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
      />

      {/* ✨ Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-50 text-white text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="text-4xl md:text-6xl xl:text-6xl font-bold josefin-sans drop-shadow-xl leading-tight"
        >
                    Adventure Pulse  <br/> 
          Beyond Limits. Into the Wild.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 1 }}
          className="text-lg md:text-xl mt-4 max-w-2xl text-white/80"
        >
          Trek. Raft. Jump. Explore. The adventure of a lifetime starts here.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-xl shadow-lg shadow-orange-300/30"
          onClick={() => {
            const target = document.getElementById("second-section");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Start the Journey
        </motion.button>
      </motion.div>

      {/* 🏔️ Optional mountain silhouette overlay */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-[url('/mountains-silhouette.svg')] bg-bottom bg-repeat-x z-40 opacity-60"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.6 }}
        transition={{ delay: 4, duration: 1.2, ease: "easeOut" }}
      />

      {/* 🌊 Bottom SVG */}
      <motion.div
        className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.2, duration: 1 }}
      >
        <svg
          className="block w-full h-[100px] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
        <path
          fill="#fffff"
          d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z"
        />
        </svg>
      </motion.div>
    </motion.div>
  );
};
const home = () => {
  return (
    <section className='home'> 
      {/* image section at top */}
      <ImageSliderBox />

      {/* Paragraph Section */}
      <motion.div
        id="second-section"
        className="mt-24 py-10 px-4 text-center josefin-sans text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        <motion.div className="max-w-4xl mx-auto space-y-4 text-base md:text-lg leading-relaxed">
          {[
            `Welcome to Adventure Pulse — your gateway to epic outdoor thrills in Shivpuri, Rishikesh.`,
            `Get ready for rafting on the Ganges, trekking through Himalayan trails, kayaking, bungee jumping, ziplining, and more — all backed by expert guides and pure adventure vibes.`,
            `Whether you're solo or with your tribe, we ensure every moment is safe, seamless, and unforgettable. Let’s make your next escape legendary.`,
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* Image and Text Section */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 xl:gap-32 items-center mt-32 px-4 md:px-10 xl:px-24"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Text */}
        <motion.div
          className="px-2 md:px-6 xl:px-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-medium josefin-sans text-gray-800 mb-2">
            Adventure Pulse
          </h2>
          <p className="text-center md:text-left text-sm josefin-sans text-gray-600 mb-4">
            Based in Shivpuri, Rishikesh — India’s Adventure Capital
          </p>
          <p className="text-gray-700 leading-relaxed josefin-sans text-[1rem] block md:hidden">
            <span className="font-semibold">Adventure Pulse</span> brings adrenaline to life with rafting, hiking, kayaking, and more — right from the scenic banks of the Ganga.
          </p>
          <p className="text-gray-700 leading-relaxed josefin-sans text-[1rem] hidden md:block">
            <span className="font-semibold">Adventure Pulse</span> is your adventure base in Shivpuri, Rishikesh — a hotspot for thrill-seekers across India. From the roar of the Ganga beneath your raft to the chill of Himalayan trails beneath your boots, every moment is an experience.
            Whether it's soaring from a bungee platform or zipping across lush valleys, our certified guides ensure it's all safe, wild, and unforgettable.
            <br /><br />
            Disconnect from the ordinary. Reconnect with the wild. Let's go.{" "}
            <span className="inline-block text-blue-600">↗</span>
          </p>
        </motion.div>

        {/* Images */}
        <motion.div
          className="flex flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[pic1, pic2].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Image ${i}`}
              className="w-[160px] lg:w-[220px] xl:w-[260px] h-auto object-cover rounded-[50%_30%_50%_30%/30%_50%_30%_50%] shadow-lg"
              animate={{
                rotate: i % 2 === 0 ? [0, 1, -1, 0] : [0, -1, 1, 0],
                scale: [1, 1.02, 0.98, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Cards Section */}
      <div className="py-16 px-4 md:px-10 xl:px-24 space-y-12">
        {/* ───────────────── Packages ───────────────── */}
        <div>
          <h2 className="text-3xl font-semibold josefin-sans mb-6 text-center md:text-left">
            Packages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 josefin-sans">
            {[
              { src: pic2, label: "Rafting", link: "/rafting" },
              { src: pic1, label: "Trekking", link: "/trek" },
              { src: pic2, label: "Bungee", link: "/bungee" },
              { src: pic1, label: "Others", link: "/others" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group w-[80%] sm:w-full mx-auto"
              >
                <div className="flex flex-col items-center">
                  <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[4/2.5] sm:aspect-[3/4] bg-gray-100 transition-all duration-500 ease-in-out group-hover:shadow-xl">
                    <motion.img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                    />
                    <Link to={item.link}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 text-black px-4 py-1 text-sm rounded-md shadow group-hover:bg-orange-400 cursor-pointer transition duration-300"
                      >
                        More
                      </motion.button>
                    </Link>
                  </div>
                  <p className="mt-2 font-bold text-lg">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───────────────── Stays ───────────────── */}
        <div>
          <h2 className="text-3xl font-semibold josefin-sans mb-6 text-center md:text-left">
            Stays
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 josefin-sans">
            {[
              { src: pic2, label: "Rafting", link: "/stays/rafting" },
              { src: pic1, label: "Trekking", link: "/stays/trekking" },
              { src: pic1, label: "Bungee", link: "/stays/bungee" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group w-[80%] sm:w-full mx-auto"
              >
                <div className="flex flex-col items-center">
                  <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[4/2.5] sm:aspect-[3/4] bg-gray-100 transition-all duration-500 ease-in-out group-hover:shadow-xl">
                    <motion.img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                    />
                    <Link to={item.link}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 text-black px-4 py-1 text-sm rounded-md shadow group-hover:bg-orange-400 cursor-pointer transition duration-300"
                      >
                        More
                      </motion.button>
                    </Link>
                  </div>
                  <p className="mt-2 font-bold text-lg">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* image slider */}
      <ImageSlider />

      {/* detail */}
      <Feedback />
    </section>


  )
}

export default home