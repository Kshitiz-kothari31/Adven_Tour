import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  MountainSnow,
  Waves,
  TentTree,
  UsersRound,
} from "lucide-react";

const stats = [
  {
    icon: MountainSnow,
    end: 150,
    suffix: "+",
    label: "Treks Completed",
    color: "text-blue-500",
    glow: "hover:shadow-[0_0_30px_#3b82f6]",
  },
  {
    icon: Waves,
    end: 200,
    suffix: "+",
    label: "Rafting Trips",
    color: "text-cyan-500",
    glow: "hover:shadow-[0_0_30px_#06b6d4]",
  },
  {
    icon: TentTree,
    end: 25,
    suffix: "+",
    label: "Campsites",
    color: "text-green-500",
    glow: "hover:shadow-[0_0_30px_#22c55e]",
  },
  {
    icon: UsersRound,
    end: 5000,
    suffix: "+",
    label: "Happy Explorers",
    color: "text-yellow-500",
    glow: "hover:shadow-[0_0_30px_#eab308]",
  },
];

export default function HighlightsStats() {
  return (
    <section className="relative w-full md:mt-30 mt-10 py-12 px-4 sm:px-6 md:px-10 lg:px-20 josefin-sans bg-transparent">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 text-black"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ✨ Adventure Highlights
      </motion.h2>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
        {stats.map(({ icon: Icon, end, suffix, label, color, glow }, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6 shadow-sm transition-all duration-300 ${glow} hover:scale-[1.03] group`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className={`mb-2 sm:mb-3 p-2 sm:p-3 rounded-full border border-black/10 bg-black/10 transition-all duration-300 group-hover:scale-110 group-hover:${glow}`}
            >
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-black mb-0.5">
              <CountUp end={end} duration={3.5} suffix={suffix} />
            </h3>
            <p className="text-black/70 text-xs sm:text-sm text-center font-medium">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
