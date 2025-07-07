import { FaTwitter, FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
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
      className="bg-[#fef7f5] text-gray-800 px-6 md:px-12 py-14 border-t border-gray-300 font-josefin "
    >
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-16 text-center md:text-left">
        
        {/* Brand + Socials */}
        <div>
          <h3 className="text-2xl font-bold mb-3 font-playfair">Adventure Pulse</h3>
          <p className="text-sm mb-5 opacity-80">Beyond Limits, Into the Wild.</p>
          <div className="flex justify-center md:justify-start space-x-3">
            <motion.a
              whileHover={{ scale: 1.15 }}
              className="bg-black text-white p-2 rounded-full transition"
              href="#"
            >
              <FaXTwitter />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15 }}
              className="bg-blue-600 text-white p-2 rounded-full transition"
              href="#"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15 }}
              className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-2 rounded-full transition"
              href="#"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-2xl font-bold mb-4 font-playfair">Navigation</h3>
          <ul className="space-y-4 text-base font-medium font-josefin">
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
          <h3 className="text-2xl font-bold mb-3 font-playfair">Connect Us</h3>
          <ul className="text-sm space-y-3 opacity-90">
            <motion.li
              whileHover={{ scale: 1.03 }}
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <MdLocationOn className="text-lg" />
              Rishikesh, Tapovan
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.03 }}
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <FaPhoneAlt className="text-sm" />
              (+91) 63982xxxx
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.03 }}
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <FaEnvelope className="text-sm" />
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
        className="border-t border-gray-400/50 mt-10 pt-5 text-center text-xs text-gray-600"
      >
        © 2025 <strong>Adventure Pulse</strong> • All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
