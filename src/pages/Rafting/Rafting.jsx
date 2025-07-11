import React from 'react'
import './Rafting.css'
import Expe from './Expe'
import AdventureAltHero from './hero'
import pic1 from '../../assets/images/Home/img2.png'
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import FAQSection from './faq'


const marqueeItems = [
  'Scenic river views',
  'Expert guides lead',
  'Safe family fun',
  'Top gear provided',
  'Memories await you',
  'Thrill-packed journeys',
  'Unleash your wild side',
  'Nature’s rollercoaster ride',
  'Waves. Laughs. Memories.',
  'Guided by river pros',
  'Unmatched river thrills',
  'Where fun meets adrenaline',
  'Dive into the excitement',
  'Breathtaking river trails',
  'Experience. Explore. Enjoy.',
];

const stats = [
  { number: 5000, text: 'Happy Clients', duration: 10 },
  { number: 15, text: 'Years Of Experience', suffix: ' +', duration: 15 },
  { number: 100, text: 'River Rafted', duration: 10 },
];

const Rafting = () => {
  const scrollToSection = () => {
    const next = document.getElementById('next-section');
    next?.scrollIntoView({ behavior: 'smooth' });
  };

  const imageCount = 8;
  const dummyImages = Array(imageCount).fill(pic1);

  return (
    <section>
      {/* Background Image */}
      <AdventureAltHero/>

      {/* Second Section */}
      <div className="bg-[#ecfeff] py-20 px-4 md:px-20 xl:px-40 relative text-black overflow-hidden">
        <motion.div
          onClick={scrollToSection}
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9, rotate: -20 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer group"
        >
          <div className="md:-mt-5 relative w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center shadow-xl overflow-hidden">
            <span className="text-white text-2xl z-10">↓</span>
            <div className="absolute inset-0 bg-blue-400 opacity-40 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl mt-3 xl:text-5xl md:text-left text-center font-bold mb-3 xl:mb-5"
            >
              About Our Passion
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-base md:text-lg xl:text-xl leading-relaxed text-gray-700"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </motion.p>
          </div>

          <div className="relative w-full md:mt-30 h-[400px] md:h-[460px] xl:h-[530px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, rotate: -5 }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-14 bg-white/20 backdrop-blur-lg rounded-3xl p-1 shadow-[0_10px_40px_rgba(0,0,0,0.3)] ring-2 ring-white ring-offset-4 ring-offset-blue-100"
            >
              <img
                src={pic1}
                alt="Rafting 1"
                className="w-80 h-52 md:w-96 md:h-60 xl:w-[420px] xl:h-[270px] object-cover rounded-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 3 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute top-44 md:top-48 right-0 bg-white/20 backdrop-blur-lg rounded-3xl p-1 shadow-[0_10px_40px_rgba(0,0,0,0.3)] ring-2 ring-white ring-offset-4 ring-offset-rose-100"
            >
              <img
                src={pic1}
                alt="Rafting 2"
                className="w-80 h-52 md:w-96 md:h-60 xl:w-[420px] xl:h-[270px] object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>

        <div id="next-section" className="mt-20" />
      </div>

      {/* Third Section */}
      <Expe/>

      {/* Fourth Section - Marquee */}
      <div className=" josefin-sans md:mt-12 overflow-hidden mt-9 py-3">
        <motion.div
          className="flex whitespace-nowrap text-black font-medium text-3xl gap-12 px-6"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
        >
          {Array(3)
            .fill(marqueeItems)
            .flat()
            .map((text, i) => (
              <span key={i}>
                ✦ {text}
              </span>
            ))}
        </motion.div>
      </div>

      {/* 5th section */}
      <div className="mt-15 px-4 py-16 md:px-20 ">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-7xl jolly-font  font-bold text-center mb-12 font-josefin"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Rafting Plans
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Marine drive to shivpuri",
              dist: "16 km",
              price: 599,
              description:
                "Text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            },
            {
              title: "Shivpuri To Nim Beach",
              dist: "16 km",
              price: 700,
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              title: "Marine Drive to Shivpuri",
              dist: "24 km",
              price: 1200,
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              title: "Kaudiala To Nim Beach",
              dist: "36 km",
              price: 2400,
              description:
                "Text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            },
          ]
            .sort((a, b) => a.price - b.price)
            .map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col snap-start
                  h-[400px] sm:h-[440px] md:h-[480px]
                  transition-transform hover:scale-[1.03] hover:-translate-y-1"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
              >
                {/* Image - 45% of height */}
                <div className="relative h-[45%]">
                  <img
                    src={pic1}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/90 to-transparent" />
                  <div className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-full">
                    Dist {item.dist}
                  </div>
                </div>

                {/* Text - 55% */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-bold">Cost : ₹{item.price}</p>
                    <button
                      className={`text-sm ${
                        index === 3
                          ? "bg-black text-white"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      } px-3 py-1 rounded-full transition`}
                    >
                      more
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
   
      {/* 6th section - Gallery */}
      <div className="py-16  sm:mt-20  px-4 md:px-2 bg-[#E0F7FA]">
        <h2 className="jolly-font text-3xl md:text-4xl font-bold text-center mb-12 font-josefin">
          Rafting Memories to Inspire You
        </h2>

        <motion.div
          className="mx-auto w-fit grid grid-cols-2 sm:grid-cols-4 gap-[6px] sm:gap-[10px] md:gap-[12px]"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {dummyImages.map((src, i) => {
            // 🌀 Shape classes
            const shapeClass =
              i % 4 === 0
                ? 'rounded-full'
                : i % 4 === 1
                ? 'rounded-3xl'
                : i % 4 === 2
                ? 'rounded-[40%_60%_50%_50%/60%_40%_60%_40%]'
                : 'rounded-full sm:rounded-[25%]';

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.85, y: 30 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  },
                }}
                className={`p-[3px] bg-gradient-to-br from-[#cbd5e1] via-[#94a3b8] to-[#64748b]
                  ${shapeClass}
                  ${i > 3 ? 'hidden sm:block' : ''}
                `}
              >
                <div
                  className={`overflow-hidden bg-white ${shapeClass}
                    w-[120px] h-[120px]
                    sm:w-[160px] sm:h-[160px]
                    lg:w-[200px] lg:h-[200px]
                    xl:w-[240px] xl:h-[240px]
                    transition-transform hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.18)]
                    duration-300 ease-out
                  `}
                >
                  <img
                    src={src}
                    alt={`rafting-${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* 7th section */}
      <FAQSection />
    </section>
  );
};

export default Rafting;
