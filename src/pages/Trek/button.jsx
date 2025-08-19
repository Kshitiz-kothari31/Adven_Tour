import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ScrollDownButton() {
  const buttonRef = useRef(null);

  const handleScroll = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      targetSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"  // Aligns the top of the element to the top of the viewport
      });
    }
  };

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        handleScroll();
      }
    };

    const button = buttonRef.current;
    if (button) {
      button.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (button) {
        button.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  return (
    <div className="flex justify-center mt-12">
      <motion.button
        ref={buttonRef}
        type="button"
        onClick={handleScroll}
        aria-label="Scroll to target section"
        className="relative flex h-14 w-14 items-center justify-center rounded-full
                   bg-green-600 text-white shadow-lg cursor-pointer
                   hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{
          scale: 1.2,
          rotate: 6,
          boxShadow: "0 0 20px rgba(34,197,94,0.6)",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown className="h-7 w-7" />
      </motion.button>
    </div>
  );
}