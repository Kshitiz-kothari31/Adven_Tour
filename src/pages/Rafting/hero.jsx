import "./Rafting.css";

const AdventureAltHero = () => {
  return (
    <div className="hero-container">
      {/* 🎥 Slow Zoom BG Image */}
      <img
        src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Hero_img.webp"
        alt="Rafting Adventure"
        className="hero-bg"
      />

      {/* 🌌 Gradient Overlay */}
      <div className="hero-overlay" />

      {/* 💥 Cinematic Entry Text */}
      <div className="hero-text fade-up">
        <div className="max-w-3xl">
          <h1 className="text-white text-6xl md:text-8xl xl:text-9xl font-kalnia font-medium drop-shadow-xl">
            Rafting
          </h1>
          <p className="text-white text-lg md:text-2xl mt-3 drop-shadow-md josefin-sans">
            Paddle through adrenaline. Ride the rapids of Shivpuri. Discover the Ganga like never before.
          </p>
        </div>
      </div>

      {/* 🌊 Animated Waves Behind Text */}
      <div className="waves fade-up delay-2"></div>

      {/* 🌊 Wave SVG Foreground */}
      <div className="wave-svg fade-up delay-3">
        <svg
          className="block w-full h-[100px] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fafafa" />
              <stop offset="100%" stopColor="#B2EBF2" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default AdventureAltHero;
