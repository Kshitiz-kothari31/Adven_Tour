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
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-y-10 gap-x-8 text-center md:text-left">
        
        {/* Brand + Socials */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-playfair">Adventure Pulse</h3>
          <p className="text-xs sm:text-sm mb-4 opacity-80">Beyond Limits, Into the Wild.</p>
          <div className="flex justify-center md:justify-start space-x-2">
            {[
              { icon: Twitter, color: "bg-black", link: "https://x.com/yourprofile" },
              { icon: Facebook, color: "bg-blue-600", link: "https://www.facebook.com/Cristiano/" },
              { icon: Instagram, color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600", link: "https://instagram.com/yourprofile" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.15 }}
                className={`${social.color} text-white p-2 sm:p-1.5 rounded-full transition`}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-3 font-playfair">Navigation</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm font-medium font-josefin">
            {[
              { name: "Home", link: "#" },
              { name: "About", link: "#contact" },
              { name: "Adventures", link: "#Rafting" },
              { name: "Contact", link: "#contact" }
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05, x: 5 }}
                className="transition-all duration-300"
              >
                <a
                  href={item.link}
                  className="inline-block text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-3 font-playfair">Connect Us</h3>
          <ul className="text-xs sm:text-sm space-y-2.5 opacity-90">
            <motion.li
              whileHover={{ scale: 1.03 }}
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Rishikesh, Tapovan
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.03 }}
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              (+91) 63982xxxx
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.03 }}
              className="flex justify-center md:justify-start items-center gap-2 break-all"
            >
              <Mail className="w-4 h-4" />
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
        className="border-t border-gray-400/50 mt-7 pt-4 text-center text-xs text-gray-600"
      >
        © 2025 <strong>Adventure Pulse</strong> • All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
