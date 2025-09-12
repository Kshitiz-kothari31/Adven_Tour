import { Facebook, Instagram, PhoneCall, Mail, MapPin, Twitter } from "lucide-react";

const Footer = ({ bgClass = "bg-transparent" }) => {
  return (
    <footer
      className={`${bgClass} text-gray-800 px-4 sm:px-6 md:px-10 lg:px-12 py-5 md:py-8 2xl:py-12 josefin-sans border-white`}
    >
      {/* Footer Content */}
      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-y-6 sm:gap-y-8 gap-x-6 md:gap-x-8 2xl:gap-x-16 text-center">
        
        {/* Brand + Socials */}
        <div>
          <h3 className="text-lg sm:text-xl 2xl:text-2xl font-bold mb-1 font-playfair">GoRafts</h3>
          <p className="text-xs sm:text-sm 2xl:text-base opacity-80 mb-2">Beyond Limits, Into the Wild.</p>
          <div className="flex justify-center space-x-2 2xl:space-x-4">
            {[
              { icon: Twitter, link: "https://x.com/yourprofile" },
              { icon: Facebook, link: "https://www.facebook.com/Cristiano/" },
              { icon: Instagram, link: "https://instagram.com/yourprofile" }
            ].map((social, idx) => (
              <a
                key={idx}
                className="text-gray-600 hover:text-gray-900 p-2 2xl:p-3 rounded-full transition-all duration-300 hover:bg-gray-100"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.icon.name}`}
              >
                <social.icon className="w-4 h-4 2xl:w-5 2xl:h-5" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div>
          <h3 className="text-lg sm:text-xl 2xl:text-2xl font-bold mb-2 font-playfair">Navigation</h3>
          <ul className="space-y-1.5 text-sm 2xl:text-base font-medium font-josefin">
            {[
              { name: "Home", link: "#" },
              { name: "About", link: "#contact" },
              { name: "Adventures", link: "#Rafting" },
              { name: "Contact", link: "#contact" }
            ].map((item, i) => (
              <li key={i} className="transition-all duration-300 hover:translate-x-1">
                <a
                  href={item.link}
                  className="inline-block text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-lg sm:text-xl 2xl:text-2xl font-bold mb-2 font-playfair">Connect Us</h3>
          <ul className="text-xs sm:text-sm 2xl:text-base space-y-1.5 opacity-90">
            <li className="flex justify-center items-center gap-2">
              <MapPin className="w-4 h-4 2xl:w-5 2xl:h-5 text-gray-600" /> 
              <span>Rishikesh, Tapovan</span>
            </li>
            <li className="flex justify-center items-center gap-2">
              <PhoneCall className="w-4 h-4 2xl:w-5 2xl:h-5 text-gray-600" /> 
              <span>(+91) 7078287331</span>
            </li>
            <li className="flex justify-center items-center gap-2 break-all">
              <Mail className="w-4 h-4 2xl:w-5 2xl:h-5 text-gray-600" /> 
              <span>gorafts001@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Divider + Credits */}
      <div className="border-t border-gray-200/50 mt-4 pt-2 2xl:pt-4 flex flex-col items-center text-center text-xs sm:text-sm 2xl:text-base text-gray-600">
        <p>© {new Date().getFullYear()} <strong>GoRafts</strong>. All rights reserved.</p>
        <p className="text-[11px] sm:text-xs 2xl:text-sm opacity-80 mt-1">
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/amannakoti/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Aman Nakoti
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/yourpartner/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Kshitiz Kothari
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;