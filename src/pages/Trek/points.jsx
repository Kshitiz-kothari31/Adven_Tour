import { motion } from "framer-motion";

/* ─── Data (easy to edit) ───────────────────────────────────────────── */
const specialPoints = [
  {
    title: "Meadows (Bugyals)",
    text: "Vast alpine grasslands that feel almost surreal",
  },
  {
    title: "Forests",
    text: "Walk through pine, oak, maple, and rhododendron groves",
  },
  {
    title: "Panoramic Views",
    text: "Bandarpoonch, Kala Nag, Srikanth, and Draupadi Ka Danda peaks",
  },
  {
    title: "All‑Season Beauty",
    text: "Snow in winter, wildflowers in summer, golden grass in autumn",
  },
  {
    title: "Peaceful Trails",
    text: "Dayara offers solitude and serenity, perfect for reflection",
  },
  {
    title: "Cultural Charm",
    text: "Base villages like Raithal & Barsu showcase Garhwali traditions and festivals such as Butter Holi",
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */
export default function SpecialSection() {
  return (
    <section className="josefin-sans py-16 px-6 mt-25 md:px-20 max-w-5xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        What Makes&nbsp;<span className="text-green-700">It&nbsp;Special</span>
      </motion.h2>

      {/* Animated list */}
      <div className="space-y-6">
        {specialPoints.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#fdfaf6] rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg md:text-xl font-semibold">
              {item.title}:
            </h3>
            <p className="mt-1 text-gray-700 text-sm md:text-base">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
