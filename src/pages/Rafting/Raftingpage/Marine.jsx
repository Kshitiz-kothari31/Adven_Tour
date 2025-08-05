import  { useEffect } from 'react';
import Form from '../../../components/form/Form';
import '../Rafting.css';
import pic1 from '../../../assets/images/Home/img2.png';
import { motion } from 'framer-motion';
import { ChevronDown } from "lucide-react";

const data = [
  {
    reverse: false,
    title: "Roller Coaster",
    desc: "One of the most thrilling rapids on this route.",
  },
  {
    reverse: true,
    title: "Golf Course",
    desc: "A fun rapid with multiple waves and challenges.",
  },
  {
    reverse: false,
    title: "Club House",
    desc: "Mild rapid, great for beginners and warm-up.",
  },
  {
    reverse: true,
    title: "Initiation",
    desc: "Perfect start to your adrenaline journey.",
  },
];

const fadeUpRapids = {
  hidden: { opacity: 0, y: 40 },
  visible: (customIndex) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: customIndex * 0.1,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 80 }
  })
};

const guidelines = [
  { title: "Age Limit", text: "15 to 50 years" },
  { title: "Weight Limit", text: "40–100 kg (proportional to height)" },
  { title: "Health Required", text: "Good health & active lifestyle" },
  { title: "Not Allowed", text: "Heart issues, epilepsy, severe asthma, bypass surgery" },
  { title: "Mild Asthma", text: "Allowed with inhaler & inform the guide" },
  { title: "Dress Code", text: "Quick-dry clothes (T-shirt, shorts, tights)" },
  { title: "Avoid Wearing", text: "Sari, skirts, burka" },
  { title: "Weekend Tip", text: "Heavy traffic in Rishikesh – keep 2–3 extra hours if coming from Delhi, Haridwar, or Dehradun" },
];

const Marine = () => {

useEffect(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
}, []);

  const scrollToSecondSection = () => {
    const section = document.getElementById('second-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='josefin-sans' >
      {/* 1 section */}
      <motion.div
        className="relative w-full h-[90vh] overflow-hidden font-josefin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* 🌄 Background Image with Subtle Zoom */}
        <motion.img
          src={pic1}
          alt="Marine Drive to Shivpuri"
          className="absolute top-0 left-0 w-full h-full object-cover z-10 scale-125 animate-heroZoom"
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
        />

        {/* 🌫 Fog Layer */}
        <motion.div
          className="absolute inset-0 z-20 bg-[url('/fog.png')] bg-cover bg-center opacity-25 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 1, duration: 2 }}
        />

        {/* ✨ Particles Overlay */}
        <div className="absolute inset-0 z-20 bg-[url('/particles.gif')] bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none" />

        {/* 🔷 Diagonal Shadow Overlay */}
        <div className="absolute inset-0 z-30 bg-gradient-to-br from-black/80 via-black/30 to-transparent [clip-path:polygon(0_0,50%_0,35%_100%,0_100%)]" />

        {/* 🚣 Boat Silhouette Floating Left */}
        <motion.div
          className="absolute bottom-10 left-10 w-[120px] h-[80px] bg-[url('/boat-silhouette.png')] bg-contain bg-no-repeat bg-bottom z-40 opacity-80"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 0.8 }}
          transition={{ delay: 1.5, duration: 1.2, ease: 'easeOut' }}
        />

        {/* 📍 Hero Content */}
        <motion.div
          className="absolute top-[25%] left-10 md:left-20 z-40"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1.2, type: "spring" }}
        >
          <motion.h1
            className="text-white jolly-font text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-[0_3px_15px_rgba(0,0,0,0.7)]"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Marine Drive to Shivpuri
          </motion.h1>

          <p className="text-white/80 text-lg md:text-xl mt-4 font-medium max-w-xl">
            A scenic rafting route with balanced thrill & beauty.
          </p>

          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: [0, 2, -2, 2, 0],
              boxShadow: "0 0 25px rgba(255, 255, 0, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-10 py-3 rounded-full shadow-xl transition-all duration-300"
          >
            Book Now
          </motion.button>
        </motion.div>

        {/* 🔄 Top Wave (Flipped) */}
        <motion.div
          className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180 z-40"
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
              fill="#E0F7FA"
              stroke="none"
              d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z"
            />
          </svg>
        </motion.div>

        {/* 🔁 Animation Keyframes */}
        <style>
          {`
            @keyframes heroZoom {
              0% { transform: scale(1.25); }
              100% { transform: scale(1); }
            }

            .animate-heroZoom {
              animation: heroZoom 10s ease-in-out forwards;
            }
          `}
        </style>
      </motion.div>

      {/* ⬇️ Drop Button Between Sections */}
      <div className="w-full bg-[#E0F7FA]   hidden md:flex justify-center md:mt-2 -mt-6 z-20 relative">
        <motion.button
          whileHover={{
            scale: 1.2,
            rotate: [0, 10, -10, 10, 0],
            transition: { duration: 0.6 },
          }}
          onClick={scrollToSecondSection}
          className="border-2 text-black p-3 px-5 rounded-full shadow-xl hover:bg-yellow-300 hover:text-black transition-all duration-300 animate-bounce"
          style={{
            clipPath: 'polygon(25% 5%, 75% 5%, 95% 50%, 75% 95%, 25% 95%, 5% 50%)',
          }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <ChevronDown className="text-xl" />
          </motion.div>
        </motion.button>
      </div>
      
      {/* 🟫 2nd Section: Overview */}
      <div
        id="second-section"
        className="w-full bg-[#E0F7FA]   py-16 px-4 md:px-20 "
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          {/* 📝 Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            viewport={{ once: true }}
            className="flex-1 text-black space-y-4"
          >
            <h2 className="text-3xl sm:text-left text-center jolly-font md:text-5xl font-bold">
              OVERVIEW
            </h2>
            <p className="text-sm josefin-sans leading-relaxed">
              Get ready to scream, paddle, and maybe question your life choices – in the best way possible!
              This 11-12 km rafting stretch from Marine Drive to Shivpuri packs in seven rapids, including
              the thrill-packed Roller Coaster and Golf Course (no, not the kind with golf carts).
              <br />
              <br />
              Lasting 1 to 1.5 hours, this adventure is perfect for first-timers, adrenaline junkies, or
              anyone who thinks sitting on a sofa is too mainstream. All this excitement for just ₹599 –
              cheaper than a pizza party and way more unforgettable!
            </p>
          </motion.div>

          {/* 🖼️ Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex-1 max-w-md relative"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: [0, 2, -2, 0],
                transition: { duration: 0.5 },
              }}
              className="bg-gradient-to-br from-[#1e3a8a] via-[#0891b2] to-[#06b6d4] p-1 rounded-[28px] shadow-2xl"
            >
              <div className="bg-white rounded-[24px] overflow-hidden transition-transform duration-500 hover:scale-105">
                <img
                  src={pic1}
                  alt="Adventure"
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* 3rd section */}
      <div className="w-full flex  justify-center items-center py-10 px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#a7e1f9] p-6 md:p-10 rounded-3xl shadow-2xl max-w-6xl w-full flex flex-col md:flex-row justify-between items-start gap-10 relative overflow-hidden"
        >
          
          {/* 📝 Text Section */}
          <div className="flex-1 text-black space-y-2 font-josefin z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Marine Drive to Shivpuri
            </h2>
            <p><strong>📍 Starting Point:</strong> Marine Drive, Rishikesh</p>
            <p><strong>🏁 Ending Point:</strong> Shivpuri, Rishikesh</p>
            <p><strong>🛶 Distance:</strong> Approx. 11-12 km (commonly claimed as 12 km)</p>
            <p><strong>⏱ Duration:</strong> 1 to 1.5 hours</p>
            <p><strong>⚡ Difficulty:</strong> Moderate to Challenging</p>
            <p><strong>🌊 Number of Rapids:</strong> Around 7 (mix of major & minor)</p>
            <p><strong>💸 Price:</strong> ₹599 per person</p>

            {/* 🔘 Book Now Button with killer hover */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="mt-4 px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold rounded-full shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Book Now</span>
              <span className="absolute inset-0 w-full h-full bg-white opacity-10 blur-lg group-hover:animate-pulse" />
            </motion.button>
          </div>

          {/* 🖼️ Overlapping Image Section with hover & animation */}
          <div className="flex-1 relative h-[280px] md:h-[340px] flex justify-center items-center z-0">
            <motion.img
              src={pic1}
              alt="Rafting 1"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.07, filter: "brightness(1.1)" }}
              className="w-[240px] md:w-[280px] rounded-xl shadow-2xl border-[5px] border-white absolute top-5 left-[60px] z-10 transition-all duration-300"
            />
            <motion.img
              src={pic1}
              alt="Rafting 2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.07, filter: "brightness(1.1)" }}
              className="w-[240px] md:w-[280px] rounded-xl shadow-xl border-[5px] border-white absolute bottom-5 left-[140px] z-0 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>


      {/* 4th section  major rapids */}
      <div className="py-14 bg-[#E0F7FA]   px-4 md:px-20">
        {/* 🎯 Section Title */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="w-20 h-1 mx-auto mb-3 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 rounded-full" />
          <h2 className="text-xl md:text-2xl font-bold inline-block bg-white shadow border border-sky-300 px-5 py-2 rounded-lg">
            🌊 Major Rapids
          </h2>
        </div>

        {/* 🚀 Rapid List */}
        <div className="space-y-10">
          {data.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpRapids}
              className={`flex flex-row ${
                item.reverse ? 'md:flex-row-reverse' : ''
              } items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto px-2 sm:px-6`}
            >
              {/* 📷 Image */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={pic1}
                alt={item.title}
                className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[240px] md:h-[200px] object-cover rounded-[30%_0_30%_0] shadow-md transition duration-300"
              />

              {/* 🧾 Text Box */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 8px 18px rgba(0,0,0,0.15)',
                }}
                className="w-[90%] sm:w-[70%] md:w-[55%] h-[140px] sm:h-[160px] md:h-[200px] bg-sky-300 rounded-xl shadow px-4 py-4 text-black flex flex-col justify-center transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5th section include */}
      <div className=" py-20 px-4 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-6xl w-full rounded-xl overflow-hidden border border-gray-300 shadow-xl bg-white"
        >
          {/* 🖼️ Image Section */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative w-full h-[260px] md:h-[320px]"
          >
            <img
              src={pic1}
              alt="Rafting"
              className="w-full h-full object-cover"
            />

            {/* Floating Title */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20"
            >
              <div className="bg-white josefin-sans px-6 py-2 rounded-xl shadow font-bold text-lg md:text-xl border border-gray-300">
                Inclusions/Exclusions:
              </div>
            </motion.div>

            {/* Sky Blue Fade Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-sky-300 to-transparent z-10" />
          </motion.div>

          {/* 📄 Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-sky-200 text-black px-6 md:px-12 py-10 gap-10 text-base sm:text-lg lg:text-xl leading-relaxed josefin-font">

            {/* Included */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-left space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-semibold">
                ✅ What is included in the tour
              </h3>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Transportation from Office to Office / to the starting point and from
                  finishing point back to office.
                </li>
                <li>
                  All rafting gear including imported life jackets, helmets, paddles, and
                  wetsuits (during winter: Dec–March).
                </li>
              </ul>
            </motion.div>

            {/* Not Included */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-left space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-semibold">
                ❌ What is NOT included in the tour
              </h3>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Rafting video (₹2000 per raft, shared among 8 people per raft).
                </li>
                <li>
                  Personal expenses such as snacks, drinks, or souvenirs.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 6th section  */}
      <div className="relative bg-[#E0F7FA]  min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-28 overflow-hidden text-black text-center">
          {/* 🔁 Background Animation */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-30 blur-xl"
          />

          {/* 📌 Content */}
          <div className="relative z-10 max-w-3xl w-full">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-10 tracking-tight"
            >
              Rafting Guidelines <br />
              <span className="text-lg font-semibold">& Safety Notes</span>
            </motion.h2>

            <div className="flex flex-col items-center gap-5">
              {guidelines.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl shadow-md w-full max-w-xl"
                >
                  <p className="text-base sm:text-lg">
                    <span className="font-semibold">{item.title}:</span> {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
      </div>
        
      <Form
        boxClass="bg-[#E0F7FA]"
        headingClass="text-black"
        buttonClass="bg-blue-600 hover:bg-blue-700"
        focusClass="focus:outline-blue-500"
      /> 
     </section> 
  )
}


export default Marine