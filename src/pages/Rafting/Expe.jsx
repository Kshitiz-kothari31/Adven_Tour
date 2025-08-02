import CountUp from 'react-countup';
import './Rafting.css'
import { motion } from 'framer-motion';

const stats = [
  { number: 5000, text: 'Happy Clients', duration: 10 },
  { number: 15, text: 'Years Of Experience', suffix: ' +', duration: 15 },
  { number: 100, text: 'River Rafted', duration: 10 },
];

const Expe = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#5656eb] hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition-all duration-700 py-6 px-6 text-white text-center josefin-sans"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 hover:bg-white/20 rounded-xl py-5 px-4 shadow-lg backdrop-blur-lg transition-all duration-300"
            >
              <h3 className="text-3xl font-extrabold text-white">
                <CountUp end={item.number} duration={item.duration} suffix={item.suffix || ''} />
              </h3>
              <p className="text-base mt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Expe