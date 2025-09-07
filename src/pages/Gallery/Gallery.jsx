import { useRef, useState , useEffect} from 'react';
import Form from '../../components/form/Form';
import './Gallery.css'
import GallerySection from './image';
import "react-lazy-load-image-component/src/effects/blur.css";

const Gallery = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const [showHeading, setShowHeading] = useState(false);
  const [showPara, setShowPara] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headingRef.current && entry.isIntersecting) {
            setShowHeading(true);
          }
          if (entry.target === paraRef.current && entry.isIntersecting) {
            setShowPara(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (paraRef.current) observer.observe(paraRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const tutanRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className=' bg-gradient-to-r from-[#ffffff] to-[#f1daff] pt-20 josefin-sans'>
        {/* 1st section */}        
        <div className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 -mt-15">
          {/* Left Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            {/* Hero Heading */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight heading-animated">
                Dive into the <br /> Thrill of Adventure <br /> in Rishikesh
              </h1>

            {/* Description */}
            <p className="text-gray-700 text-base md:text-lg max-w-lg mx-auto md:mx-0">
              Experience the ultimate adrenaline rush with white-water rafting,
              bungee jumping, kayaking, and trekking in the heart of Rishikesh.
              Whether you're chasing rapids or scaling trails, every moment here
              is packed with energy, nature, and unforgettable memories.
            </p>

            {/* Buttons */}
            <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-4">
              {/* Book Now */}
              <a
                href="https://wa.me/7078287331?text=Hi%20I%20am%20interested%20in%20booking%20a%20tour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative group cursor-pointer overflow-hidden bg-gradient-to-r from-blue-700 to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-transform duration-300 hover:scale-105">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 blur-md transition duration-700"></span>
                  <span className="relative z-10">Book Now 🚀</span>
                </button>
              </a>

              {/* View Gallery */}
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // prevent accidental parent blocking
                      if (tutanRef.current) {
                        tutanRef.current.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="relative z-50 group cursor-pointer overflow-hidden bg-gradient-to-r from-blue-700 to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-transform duration-300 hover:scale-105 pointer-events-auto"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 blur-md transition duration-700"></span>
                    <span className="relative z-10">View Gallery 🖼️</span>
                  </button>

            </div>
          </div>

          {/* Right Image Grid */}
          <div className="flex-1 relative grid grid-cols-2 gap-[2px] w-full max-w-md bg-white rounded-3xl p-[2px] animate-fade-in">
            {[
              "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_1.webp",
              "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_2.webp",
              "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_3.webp",
              "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_4.webp",
            ].map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden shadow-lg h-48 md:h-64 ${
                  i === 0
                    ? "rounded-br-3xl"
                    : i === 1
                    ? "rounded-bl-3xl"
                    : i === 2
                    ? "rounded-tr-3xl"
                    : "rounded-tl-3xl"
                }`}
              >
                <img
                  src={src}
                  alt={`img${i}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}

            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full overflow-hidden border-[2px] border-white shadow-xl z-10 bg-white animate-fade-in">
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_5.webp"
                alt="center"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 🔽 Scroll Button Centered */}
<div className="flex justify-center sm:mt-1 mt-12 relative z-50">
  <button
    onClick={(e) => {
      e.preventDefault();
      scrollToBottom?.(); // safe call
    }}
    className="relative z-50 bg-orange-300 text-white p-4 rounded-full text-2xl shadow-lg
      transition-all duration-700
      hover:bg-orange-500 hover:rotate-[360deg] hover:scale-150
      hover:shadow-2xl"
  >
    ↓
  </button>
</div>


        {/* 📍 Scroll Target (bottom) */}
        <div ref={bottomRef} className="h-[300px] w-full bg-transparent" />
        
        {/* 2nd section */}
        <div
        ref={ref}
        className={`max-w-5xl mx-auto -mt-60 px-4 py-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        >
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center">
          Discover the pulse of Rishikesh through an unforgettable journey of
          adventure. From heart-racing{" "}
          <span className="text-blue-700 font-medium">white-water rafting</span>{" "}
          on the Ganges, scenic{" "}
          <span className="text-blue-700 font-medium">treks</span> through the
          Himalayas, thrilling{" "}
          <span className="text-blue-700 font-medium">kayaking</span> escapes, to
          the extreme rush of{" "}
          <span className="text-blue-700 font-medium">bungee jumping</span> — this
          gallery captures the raw beauty and adrenaline of nature and sport
          colliding in one epic destination.
        </p>
        </div>

        {/* VIDEO GALLERY SECTION */}
        <section
        className="relative josefin-sans md:mt-25 py-12 px-4 sm:px-6 md:px-10 lg:px-20"
        id="bottomRef"
        >
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
          {/* Heading */}
          <h2
            ref={headingRef}
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold font-josefin text-black transition-all duration-700 ${
              showHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            Experience the Adventure
          </h2>

          {/* Video Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://www.youtube.com/embed/aHrIyirdeDU?autoplay=0&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0",
              "https://www.youtube.com/embed/sjmNmWuYXqQ?autoplay=0&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0",
              "https://www.youtube.com/embed/xI-IQ7EpLgE?autoplay=0&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0",
              "https://www.youtube.com/embed/9IkaMZjyt-8?autoplay=0&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0",
            ].map((yt, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg bg-black hover:scale-105 hover:shadow-yellow-400/30 transition-transform duration-300"
              >
                <div className="aspect-[9/16] w-full">
                  <iframe
                    src={yt}
                    className="w-full h-full rounded-2xl"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

          {/* Paragraph */}
          <p
            ref={paraRef}
            className={`text-sm sm:text-base max-w-2xl mx-auto text-gray-700 font-josefin leading-relaxed px-2 transition-all duration-700 delay-300 ${
              showPara ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            These real clips showcase our adventure experiences – live from
            Rishikesh’s whitewater. Play, pause, and feel the adrenaline.
          </p>
        </div>
        </section>

        {/* WHY ADVENTURERS CHOOSE US */}
        <div className="w-full px-4 mt-15 py-10 md:py-20 overflow-hidden josefin-sans">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">

            {/* Mobile Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-center text-black md:hidden mb-4 transition-transform duration-700 transform hover:scale-105">
              WHY ADVENTURERS <br /> <span className="text-green-600">CHOOSE US</span>
            </h2>

            {/* Image Grid */}
            <div className="flex-1 relative  grid grid-cols-2 gap-[2px] w-full max-w-md mx-auto md:ml-20 bg-white rounded-3xl p-[2px]">
              {[
                { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_6.webp", className: "rounded-br-3xl" },
                { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_7.webp", className: "rounded-bl-3xl" },
                { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_8.webp", className: "rounded-tr-3xl" },
                { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_9.webp", className: "rounded-tl-3xl" }
              ].map((img, i) => (
                <div
                  key={i}
                  className={`overflow-hidden shadow-lg h-44 md:h-56 ${img.className} transition-transform duration-500 hover:scale-105`}
                >
                  <img 
                    src={img.src} 
                    alt={`img${i + 1}`} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 bg-white transition-transform duration-500 hover:scale-110">
                <img 
                  src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_10.webp" 
                  alt="center" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="flex-1 flex items-center justify-center">
              <div className="space-y-6 text-center md:text-left">
                {/* Desktop Heading */}
                <h2 className="text-3xl md:text-5xl font-extrabold hidden md:block text-black leading-tight transition-transform duration-700 transform hover:scale-105">
                  WHY ADVENTURERS <br /> <span className="text-green-600">CHOOSE US</span>
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-black leading-relaxed max-w-xl font-medium">
                  With over 15 years of wilderness expertise, we've guided thousands of adventurers through unforgettable journeys. Our certified guides, premium equipment, and commitment to safety ensure every expedition exceeds expectations.
                </p>

                {/* Feature List */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 items-center text-center sm:text-left gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white text-xl">👥</div>
                    <div>
                      <h4 className="font-bold text-black text-lg">Expert Guides</h4>
                      <p className="text-sm text-gray-700">Certified professionals with decades of experience</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 items-center text-center sm:text-left gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-green-400 flex items-center justify-center text-white text-xl">📍</div>
                    <div>
                      <h4 className="font-bold text-black text-lg">Premium Locations</h4>
                      <p className="text-sm text-gray-700">Access to exclusive wilderness destinations</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 items-center text-center sm:text-left gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-yellow-300 flex items-center justify-center text-white text-xl">⭐</div>
                    <div>
                      <h4 className="font-bold text-black text-lg">Safety First</h4>
                      <p className="text-sm text-gray-700">Industry-leading safety protocols and equipment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5th image gallery */}
        <section id="bottomRef"   className="scroll-mt-20" ref={tutanRef}>
              <GallerySection />
        </section>
        
        <Form
          boxClass="bg-gradient-to-l from-[#ffffff] to-[#f1daff]"
          headingClass="text-[#000000]"
          buttonClass="bg-[#DCD0A8] hover:bg-[#f1daff]"
          focusClass="focus:outline-[#00786F]"
        />
    </section>
  )
}

export default Gallery