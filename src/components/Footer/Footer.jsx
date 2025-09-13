import { Facebook, Instagram, PhoneCall, Mail, MapPin, Twitter } from "lucide-react";

const FooterBackground = () => {
  return (
    <svg
      width="1920"
      height="150"
      viewBox="0 0 1920 150"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full h-[150px] z-0"
    >
      {/* Transparent background - no fill needed */}
      
      {/* Subtle mountain silhouettes in very light gray */}
      <g id="mountains">
        <path d="M0,80 L120,40 L240,60 L360,30 L480,50 L600,35 L720,55 L840,40 L960,50 L1080,35 L1200,45 L1320,40 L1440,50 L1560,45 L1680,55 L1800,50 L1920,55 L1920,150 L0,150 Z" 
              fill="#E8E8E8" opacity="0.6" />
      </g>
      
      {/* Elegant trek route path */}
      <g id="trek-route">
        <path d="M100,120 C300,110 500,115 700,105 C900,95 1100,100 1300,90 C1500,80 1700,85 1900,75" 
              fill="none" 
              stroke="#CCCCCC" 
              strokeWidth="2" 
              strokeDasharray="4,2" 
              opacity="0.8" />
      </g>
      
      {/* Professional checkpoints with subtle accent color */}
      <g id="checkpoints">
        {/* Checkpoint 1 */}
        <circle cx="100" cy="120" r="6" fill="#4A90E2" stroke="#FFFFFF" strokeWidth="2" />
        
        {/* Checkpoint 2 */}
        <circle cx="400" cy="112" r="6" fill="#4A90E2" stroke="#FFFFFF" strokeWidth="2" />
        
        {/* Checkpoint 3 */}
        <circle cx="700" cy="105" r="6" fill="#4A90E2" stroke="#FFFFFF" strokeWidth="2" />
        
        {/* Checkpoint 4 */}
        <circle cx="1000" cy="97" r="6" fill="#4A90E2" stroke="#FFFFFF" strokeWidth="2" />
        
        {/* Checkpoint 5 */}
        <circle cx="1300" cy="90" r="6" fill="#4A90E2" stroke="#FFFFFF" strokeWidth="2" />
        
        {/* Final checkpoint */}
        <circle cx="1900" cy="75" r="8" fill="#4A90E2" stroke="#FFFFFF" strokeWidth="2" />
      </g>
    </svg>
  );
};

const Footer = ({ bgClass = "bg-transparent" }) => {
  return (
    <footer
      className={`${bgClass} text-gray-700 px-4 sm:px-6 py-2 sm:py-4 md:py-6 font-sans relative min-h-[150px] overflow-hidden`}
    >
      <FooterBackground />
      
      {/* Compact Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 text-center relative z-10">
        
        {/* Brand + Socials */}
        <div className="space-y-1 sm:space-y-2">
          <h3 className="text-base sm:text-lg md:text-xl font-light tracking-wide font-serif">GoRafts</h3>
          <p className="text-xs sm:text-sm opacity-80">Beyond Limits, Into the Wild.</p>
          <div className="flex justify-center space-x-1 sm:space-x-2">
            {[
              { icon: Twitter, link: "https://x.com/yourprofile" },
              { icon: Facebook, link: "https://www.facebook.com/Cristiano/" },
              { icon: Instagram, link: "https://instagram.com/yourprofile" }
            ].map((social, idx) => (
              <a
                key={idx}
                className="text-gray-500 hover:text-gray-700 p-1 sm:p-2 rounded-full transition-all duration-300"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.icon.name}`}
              >
                <social.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="space-y-1 sm:space-y-2">
          <h3 className="text-base sm:text-lg md:text-xl font-light tracking-wide font-serif">Navigation</h3>
          <ul className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
            {[
              { name: "Home", link: "#" },
              { name: "About", link: "#contact" },
              { name: "Adventures", link: "#Rafting" },
              { name: "Contact", link: "#contact" }
            ].map((item, i) => (
              <li key={i} className="transition-all duration-300 hover:translate-x-1">
                <a
                  href={item.link}
                  className="text-gray-600 hover:text-gray-800 transition-colors inline-block"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-1 sm:space-y-2">
          <h3 className="text-base sm:text-lg md:text-xl font-light tracking-wide font-serif">Connect</h3>
          <ul className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
            <li className="flex justify-center items-center gap-1">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /> 
              <span>Rishikesh, Tapovan</span>
            </li>
            <li className="flex justify-center items-center gap-1">
              <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /> 
              <span>(+91) 7078287331</span>
            </li>
            <li className="flex justify-center items-center gap-1 break-all">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /> 
              <span>gorafts001@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Minimal Divider + Credits */}
      <div className="max-w-6xl mx-auto mt-2 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-200 flex flex-col items-center text-center text-xs sm:text-sm text-gray-600 relative z-10">
        <p>© {new Date().getFullYear()} <span className="font-medium">GoRafts</span>. All rights reserved.</p>
        <p className="text-[10px] sm:text-xs opacity-70 mt-1">
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/amannakoti/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            Aman Nakoti
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/yourpartner/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            Kshitiz Kothari
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;