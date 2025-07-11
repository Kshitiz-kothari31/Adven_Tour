import { motion } from "framer-motion";

const feedbackData = [
  {
    name: "Aman Sharma",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback: "Rafting with them was absolutely wild. I’ve never screamed that much and loved it!"
  },
  {
    name: "Priya Verma",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback: "Incredible experience — safe, scenic, and super thrilling!"
  },
  {
    name: "Rahul Mehta",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    feedback: "The rapids, the crew, the vibe — everything was perfect. Highly recommend!"
  }
];

export default function Feedback() {
  return (
    <div className="relative py-20 px-4 mt-10 md:px-10 xl:px-24 overflow-hidden bg-transparent">
      
      {/* 🚀 Heading */}
      <div className="mb-16 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold  text-gray-900 relative inline-block"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our <span className="text-orange-500">Adventurers</span> Say
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-orange-500 rounded-full scale-x-0 origin-left animate-grow" />
        </motion.h2>
        <p className="mt-4 text-gray-600 text-lg josefin-sans md:text-xl max-w-2xl mx-auto">
          Real words from the wild — every splash, scream, and smile captured in their stories.
        </p>
      </div>

      {/* 🔁 Feedback cards */}
      <div className="relative w-full">
        <motion.div
          className="flex gap-10 font-josefin w-max text-gray-900"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }}
        >
          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex gap-8">
              {feedbackData.map((item, i) => (
                <motion.div
                  key={`${loopIndex}-${i}`}
                  className="min-w-[280px] max-w-sm bg-white p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 shadow-sm"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-center underline underline-offset-4 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm md:text-base italic text-center text-gray-600 leading-relaxed">
                    “{item.feedback}”
                  </p>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
