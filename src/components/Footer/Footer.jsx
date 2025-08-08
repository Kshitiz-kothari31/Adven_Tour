import { Facebook, Instagram, PhoneCall, Mail, MapPin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#fef7f5] text-gray-800 px-4 md:px-12 py-8 md:py-12 border-t josefin-sans border-gray-300 font-josefin"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-9 gap-x-9 text-center md:text-left">
        
        {/* Brand + Socials */}
        <div>
          <h3 className="text-xl md:text-xl font-bold mb-3 font-playfair">Adventure Pulse</h3>
          <p className="text-xs md:text-sm mb-4 opacity-80">Beyond Limits, Into the Wild.</p>
          <div className="flex justify-center md:justify-start space-x-2.5">
            <motion.a
              whileHover={{ scale: 1.15 }}
              className="bg-black text-white p-1.5 rounded-full transition"
              href="#"
            >
              <Twitter className="w-4 h-4 md:w-4 md:h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15 }}
              className="bg-blue-600 text-white p-1.5 rounded-full transition"
              href="#"
            >
              <Facebook className="w-4 h-4 md:w-4 md:h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15 }}
              className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-1.5 rounded-full transition"
              href="#"
            >
              <Instagram className="w-4 h-4 md:w-4 md:h-4" />
            </motion.a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl md:text-xl font-bold mb-4 font-playfair">Navigation</h3>
          <ul className="space-y-3 md:space-y-3 text-sm md:text-sm font-medium font-josefin">
            {["Home", "About", "Adventures", "Contact"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05, x: 5 }}
                className="transition-all duration-300"
              >
                <a
                  href="#"
                  className="inline-block text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl md:text-xl font-bold mb-3 font-playfair">Connect Us</h3>
          <ul className="text-xs md:text-sm space-y-2.5 md:space-y-2.5 opacity-90">
            <motion.li
              whileHover={{ scale: 1.03 }}
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <MapPin className="w-4 h-4 md:w-4 md:h-4" />
              Rishikesh, Tapovan
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.03 }}
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 md:w-4 md:h-4" />
              (+91) 63982xxxx
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.03 }}
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <Mail className="w-4 h-4 md:w-4 md:h-4" />
              kshitizkothari69@gmail.com
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-t border-gray-400/50 mt-7 md:mt-9 pt-4 md:pt-4 text-center text-xs md:text-xs text-gray-600"
      >
        © 2025 <strong>Adventure Pulse</strong> • All rights reserved.
      </motion.div>
    </motion.footer>
  );
};
export default Footer;