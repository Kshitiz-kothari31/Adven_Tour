import { Facebook, Instagram, PhoneCall, Mail, MapPin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Footer = ({ bgClass = "bg-transparent" }) => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${bgClass} text-gray-800 px-4 sm:px-6 md:px-10 lg:px-12 py-5 md:py-8 josefin-sans border-white`}
    >
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-y-6 sm:gap-y-8 gap-x-6 md:gap-x-8 text-center">
        {/* Brand + Socials */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-1 font-playfair">GoRafts</h3>
          <p className="text-xs sm:text-sm opacity-80 mb-2">Beyond Limits, Into the Wild.</p>
          <div className="flex justify-center space-x-2">
            {[
              { icon: Twitter, color: "bg-black", link: "https://x.com/yourprofile" },
              { icon: Facebook, color: "bg-blue-600", link: "https://www.facebook.com/Cristiano/" },
              { icon: Instagram, color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600", link: "https://instagram.com/yourprofile" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.1 }}
                className={`${social.color} text-white p-2 rounded-full`}
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
          <h3 className="text-lg sm:text-xl font-bold mb-2 font-playfair">Navigation</h3>
          <ul className="space-y-1.5 text-sm font-medium font-josefin">
            {[
              { name: "Home", link: "#" },
              { name: "About", link: "#contact" },
              { name: "Adventures", link: "#Rafting" },
              { name: "Contact", link: "#contact" }
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05, x: 4 }}
              >
                <a
                  href={item.link}
                  className="inline-block text-gray-700 hover:text-blue-600 transition"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 font-playfair">Connect Us</h3>
          <ul className="text-xs sm:text-sm space-y-1.5 opacity-90">
            <motion.li className="flex justify-center items-center gap-2">
              <MapPin className="w-4 h-4" /> Rishikesh, Tapovan
            </motion.li>
            <motion.li className="flex justify-center items-center gap-2">
              <PhoneCall className="w-4 h-4" /> (+91) 7078287331
            </motion.li>
            <motion.li className="flex justify-center items-center gap-2 break-all">
              <Mail className="w-4 h-4" /> kshi....i69@gmail.com
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Divider + Credits */}
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-t border-gray-400/50 mt-4 pt-2 flex flex-col items-center text-center text-xs sm:text-sm text-gray-600"
      >
        <p>© 2025 <strong>GoRafts</strong>. All rights reserved.</p>
        <p className="text-[11px] sm:text-xs opacity-80 mt-1">
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/amannakoti/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            Aman Nakoti
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/yourpartner/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            Kshitiz Kothari
          </a>
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
