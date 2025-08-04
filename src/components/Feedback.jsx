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
  const duplicatedFeedback = [...feedbackData, ...feedbackData]; // duplicate for looping scroll

  return (
    <div className="relative py-20 px-0 mt-10 overflow-hidden bg-transparent josefin-sans">
      
      {/* 🚀 Heading */}
      <div className="mb-16 text-center px-4 md:px-10 xl:px-24">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block"
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

      {/* ♾️ Infinite Scrolling Feedback */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 font-josefin w-max text-gray-900 px-4 md:px-10 xl:px-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear"
          }}
        >
          {duplicatedFeedback.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] max-w-sm bg-white p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200"
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
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
