import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * ScrollDownButton
 * ----------------
 * • Click → scroll smoothly to:
 *   1.  An element whose id === targetId   (if provided & found)
 *   2.  Otherwise, the second <section> on the page
 *
 * Props
 * -----
 * @param {string} [targetId] – optional id of a specific element
 */
export default function ScrollDownButton({ targetId }) {
  const handleScroll = () => {
    // 1️⃣ Try explicit targetId first
    let el = targetId && document.getElementById(targetId);

    // 2️⃣ Fallback: second <section> element in the DOM
    if (!el) {
      const sections = document.querySelectorAll("section");
      if (sections.length > 1) el = sections[1]; // 0‑indexed
    }

    // 3️⃣ Scroll if we found something
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative inset-0 z-50 flex items-center justify-center mt-6 pointer-events-none">
      <motion.button
        aria-label="Scroll to next section"
        onClick={handleScroll}
        className="pointer-events-auto cursor-pointer flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white shadow-lg"
        animate={{
          y: [0, -6, 0],
          boxShadow: [
            "0 0 0 rgba(34,197,94,0.7)",
            "0 0 18px rgba(34,197,94,0.7)",
            "0 0 0 rgba(34,197,94,0.7)",
          ],
        }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </div>
  );
}
