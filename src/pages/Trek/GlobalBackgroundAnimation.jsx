import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const GlobalBackgroundAnimation = () => {
  const ref = useRef(null);

  // Scroll progress to control fade
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Increase brightness a bit, still fade out near end
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [0.35, 0.15, 0]);

  return (
    <div ref={ref}>
      {/* 💚 Brighter horizontal green glow */}
      <motion.div
        style={{ opacity }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="fixed top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-[#22c55e66] to-transparent z-0 pointer-events-none"
      />

      {/* ☁️ Floating blur clouds (slightly brighter) */}
      <motion.div
        style={{ opacity }}
        animate={{ x: [0, 120, 0] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="fixed top-10 left-0 w-64 h-32 bg-white/40 rounded-full blur-3xl z-0 pointer-events-none"
      />
      <motion.div
        style={{ opacity }}
        animate={{ x: [0, -100, 0] }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="fixed top-[35%] right-0 w-72 h-36 bg-white/30 rounded-full blur-3xl z-0 pointer-events-none"
      />
      <motion.div
        style={{ opacity }}
        animate={{ x: [0, 70, 0] }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        className="fixed bottom-10 left-1/3 w-80 h-40 bg-white/30 rounded-full blur-3xl z-0 pointer-events-none"
      />
    </div>
  );
};

export default GlobalBackgroundAnimation;
