import { useCallback, lazy, Suspense } from 'react';
import { ChevronDown } from "lucide-react";
import '../Rafting.css';

// Lazy load the Form component
const LazyForm = lazy(() => import('../../../components/form/Form'));

// ✅ Fix the data: give each rapid a real image URL
const data = [
  {
    reverse: false,
    title: "Roller Coaster",
    desc: "One of the most thrilling rapids on this route.",
    img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Memo_img2.webp",
  },
  {
    reverse: true,
    title: "Golf Course",
    desc: "A fun rapid with multiple waves and challenges.",
    img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Memo_img1.webp",
  },
  {
    reverse: false,
    title: "Club House",
    desc: "Mild rapid, great for beginners and warm-up.",
    img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Memo_img3.webp",
  },
  {
    reverse: true,
    title: "Initiation",
    desc: "Perfect start to your adrenaline journey.",
    img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Memo_img5.webp",
  },
];

const FALLBACK_IMG = "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_4.webp";

const guidelines = [
  { title: "Age Limit", text: "15 to 50 years" },
  { title: "Weight Limit", text: "40–100 kg (proportional to height)" },
  { title: "Health Required", text: "Good health & active lifestyle" },
  { title: "Not Allowed", text: "Heart issues, epilepsy, severe asthma, bypass surgery" },
  { title: "Mild Asthma", text: "Allowed with inhaler & inform the guide" },
  { title: "Dress Code", text: "Quick-dry clothes (T-shirt, shorts, tights)" },
  { title: "Avoid Wearing", text: "Sari, skirts, burka" },
  { title: "Weekend Tip", text: "Heavy traffic in Rishikesh – keep 2–3 extra hours if coming from Delhi, Haridwar, or Dehradun" },
];

const Kodilyla = () => {
  // Memoized scroll function
  const scrollToSecondSection = useCallback(() => {
    const section = document.getElementById('second-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Memoized WhatsApp booking handler
  const handleBookNow = useCallback(() => {
    window.open(
      "https://wa.me/7078287331?text=Hi%20I%20am%20interested%20in%20booking%20a%20tour",
      "_blank"
    );
  }, []);

  return (
    <section className='josefin-sans bg-gradient-to-b from-[#dff6ff] via-[#b7e4f4] to-[#dff6ff]'>
      {/* 1 section */}
      <div className="relative w-full h-[90vh] overflow-hidden font-josefin">
        {/* Background Image with optimization */}
        <img
          src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_3.webp"
          alt="Kodiyala to Nim Beach rafting adventure on the Ganges river"
          className="absolute top-0 left-0 w-full h-full object-cover z-10 animate-slowZoom"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        
        {/* Diagonal Gradient Overlay */}
        <div className="absolute inset-0 z-30 bg-gradient-to-tl from-black/80 via-black/30 to-transparent [clip-path:polygon(100%_0,100%_100%,60%_100%,30%_0)]" />
        
        {/* Content */}
        <div className="absolute top-[30%] right-10 md:right-20 text-right z-40 opacity-0 animate-fadeInRight">
          <h1 className="text-white font-kalnia text-4xl md:text-5xl xl:text-7xl font-extrabold drop-shadow-[0_3px_15px_rgba(0,0,0,0.8)] opacity-0 animate-fadeInUp">
            Kodiyala to Nim Beach
          </h1>
          <p className="text-white/80 text-lg josefin-sans md:text-xl mt-4 max-w-xl ml-auto opacity-0 animate-fadeInUpDelay">
            An extended rafting adventure with ever-changing rapids.
          </p>
          <a
            href="https://wa.me/7078287331?text=Hi%20I%20am%20interested%20in%20booking%20a%20tour"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book Kodiyala to Nim Beach rafting trip on WhatsApp"
          >
            <button 
              className="mt-4 px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
            >
              <span className="relative z-10">Book Now</span>
              <span className="absolute inset-0 w-full h-full bg-white opacity-10 blur-lg group-hover:animate-pulse" />
            </button>
          </a>
        </div>
        
        {/* Wavy Bottom */}
        <div className="absolute -bottom-[2px] left-0 w-full overflow-hidden leading-[0] z-40 opacity-0 animate-fadeInUpDelay2">
          <svg
            className="block w-full h-[100px] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#D3F1FC"
              d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
        
        {/* Optimized CSS animations */}
        <style jsx>{`
          @keyframes slowZoom {
            0% { transform: scale(1.25); }
            100% { transform: scale(1); }
          }
          @keyframes fadeInRight {
            0% { opacity: 0; transform: translateX(80px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUpDelay {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUpDelay2 {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slowZoom {
            animation: slowZoom 4s ease-out forwards;
          }
          .animate-fadeInRight {
            animation: fadeInRight 1.2s ease-out forwards;
            animation-delay: 0.8s;
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
            animation-delay: 1s;
          }
          .animate-fadeInUpDelay {
            animation: fadeInUpDelay 0.8s ease-out forwards;
            animation-delay: 1s;
          }
          .animate-fadeInUpDelay2 {
            animation: fadeInUpDelay2 1s ease-out forwards;
            animation-delay: 1.5s;
          }
        `}</style>
      </div>

      {/* Drop Button Between Sections */}
      <div className="w-full hidden md:flex justify-center mt-0 pt-4 z-50 relative">
        <button
          onClick={scrollToSecondSection}
          className="border-2 text-black p-3 px-5 rounded-full shadow-xl hover:bg-yellow-300 hover:text-black transition-all duration-300 animate-bounce transform hover:scale-110 hover:rotate-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
          aria-label="Scroll to next section"
          style={{
            clipPath: 'polygon(25% 5%, 75% 5%, 95% 50%, 75% 95%, 25% 95%, 5% 50%)',
          }}
        >
          <div className="inline-block transform scale-90 animate-scaleUp">
            <ChevronDown className="text-xl" aria-hidden="true" />
          </div>
        </button>
        
        <style jsx>{`
          @keyframes scaleUp {
            0% { transform: scale(0.8); }
            100% { transform: scale(1); }
          }
          .animate-scaleUp {
            animation: scaleUp 1s ease-out forwards;
          }
        `}</style>
      </div>

      {/* 2nd Section: Overview */}
      <div id="second-section" className="w-full py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Text Section */}
          <div className="flex-1 text-black space-y-4">
            <h2 className="text-3xl sm:text-left text-center josefin-sans md:text-5xl font-medium">
              OVERVIEW
            </h2>
            <p className="text-sm josefin-sans leading-relaxed">
              Get ready to scream, paddle, and maybe question your life choices – in the best way possible! 
              This 11-12 km rafting stretch from Marine Drive to Shivpuri packs in seven rapids, 
              including the thrill-packed Roller Coaster and Golf Course (no, not the kind with golf carts).
              <br /><br />
              Lasting 1 to 1.5 hours, this adventure is perfect for first-timers, adrenaline junkies, 
              or anyone who thinks sitting on a sofa is too mainstream. 
              All this excitement for just ₹599 – cheaper than a pizza party and way more unforgettable!
            </p>
          </div>
          
          {/* Image Section */}
          <div className="flex-1 w-full md:max-w-md relative flex justify-center">
            <div className="bg-gradient-to-br from-[#1e3a8a] via-[#0891b2] to-[#06b6d4] p-1 rounded-[28px] shadow-2xl w-full transition-transform duration-500 hover:scale-105">
              <div className="bg-white rounded-[24px] overflow-hidden w-full">
                <img
                  src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting/rafting_11.webp"
                  loading="lazy"
                  decoding="async"
                  alt="People enjoying rafting adventure on river rapids"
                  className="w-full h-auto object-cover rounded-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 3rd section */}
      <div className="w-full flex md:mt-15 justify-center items-center py-10 px-4">
        <div className="bg-[#a7e1f9] p-6 md:p-10 rounded-3xl shadow-2xl max-w-6xl w-full flex flex-col md:flex-row justify-between items-start gap-10 relative overflow-hidden">
          {/* Text Section */}
          <div className="flex-1 text-black text-center md:text-left space-y-2 font-josefin z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Marine Drive to Shivpuri
            </h2>
            <p><strong>📍 Starting Point:</strong> Marine Drive, Rishikesh</p>
            <p><strong>🏁 Ending Point:</strong> Shivpuri, Rishikesh</p>
            <p><strong>🛶 Distance:</strong> Approx. 11-12 km (commonly claimed as 12 km)</p>
            <p><strong>⏱ Duration:</strong> 1 to 1.5 hours</p>
            <p><strong>⚡ Difficulty:</strong> Moderate to Challenging</p>
            <p><strong>🌊 Number of Rapids:</strong> Around 7 (mix of major & minor)</p>
            <p><strong>💸 Price:</strong> ₹599 per person</p>
            
            {/* Book Now Button */}
            <button
              className="mt-4 px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
              onClick={handleBookNow}
              aria-label="Book Marine Drive to Shivpuri rafting trip"
            >
              <span className="relative z-10">Book Now</span>
              <span className="absolute inset-0 w-full h-full bg-white opacity-10 blur-lg group-hover:animate-pulse" />
            </button>
          </div>
          
          {/* Overlapping Image Section */}
          <div className="flex-1 relative h-[280px] md:h-[340px] flex justify-center items-center z-0">
            <img
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/card1.webp"
              loading="lazy"
              decoding="async"
              alt="Rafters navigating through river rapids"
              className="w-[240px] md:w-[280px] rounded-xl shadow-2xl border-[5px] border-white absolute top-5 left-[60px] z-10 transition-transform duration-300 hover:scale-105 hover:brightness-110"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/MarineDrive%20to%20Shivpuri/img1.webp"
              loading="lazy"
              decoding="async"
              alt="Group rafting adventure on Ganges river"
              className="w-[240px] md:w-[280px] rounded-xl shadow-xl border-[5px] border-white absolute bottom-5 left-[140px] z-0 transition-transform duration-300 hover:scale-105 hover:brightness-110"
            />
          </div>
        </div>
      </div>
      
      {/* 4th section - Major rapids */}
      <div className="md:mt-15 py-14 px-4 md:px-20">
        {/* Section Title */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="w-20 h-1 mx-auto mb-3 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 rounded-full" />
          <h2 className="text-xl md:text-2xl font-bold inline-block bg-white shadow border border-sky-300 px-5 py-2 rounded-lg">
            🌊 Major Rapids
          </h2>
        </div>
        
        {/* Rapid List */}
        <div className="space-y-10">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-row ${item.reverse ? 'md:flex-row-reverse' : ''} 
                items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto px-2 sm:px-6 
                opacity-0 translate-y-6 animate-fadeUp`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <img
                src={item.img || FALLBACK_IMG}
                loading="lazy"
                decoding="async"
                alt={`${item.title} rapid on the river`}
                className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[240px] md:h-[200px] object-cover rounded-[30%_0_30%_0] shadow-md transition-transform duration-300 hover:scale-105"
              />
              
              {/* Text Box */}
              <div className="w-[90%] sm:w-[70%] md:w-[55%] h-[140px] sm:h-[160px] md:h-[200px] bg-sky-300 rounded-xl shadow px-4 py-4 text-black flex flex-col justify-center transition-all duration-300 hover:scale-103 hover:shadow-lg">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 5th section - Inclusions */}
      <div className="py-20 px-4 flex md:mt-15 justify-center items-center">
        <div className="relative max-w-6xl w-full rounded-xl overflow-hidden border border-gray-300 shadow-xl bg-white">
          {/* Image Section */}
          <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden rounded-t-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/MarineDrive%20to%20Shivpuri/lastImg.webp"
              loading="lazy"
              decoding="async"
              alt="Rafting trip inclusions and exclusions"
              className="w-full h-full object-cover"
            />
            
            {/* Floating Title */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-white josefin-sans px-6 py-2 rounded-xl shadow font-bold text-lg md:text-xl border border-gray-300">
                Inclusions/Exclusions:
              </div>
            </div>
            
            {/* Sky Blue Fade Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-sky-300 to-transparent z-10" />
          </div>
          
          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-sky-200 text-black px-6 md:px-12 py-10 gap-10 text-base sm:text-lg lg:text-xl leading-relaxed josefin-font rounded-b-xl">
            {/* Included */}
            <div className="text-left space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">✅ What is included in the tour</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Transportation from Office to Office / to the starting point and from finishing point back to office.
                </li>
                <li>
                  All rafting gear including imported life jackets, helmets, paddles, and wetsuits (during winter: Dec–March).
                </li>
              </ul>
            </div>
            
            {/* Not Included */}
            <div className="text-left space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">❌ What is NOT included in the tour</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>Rafting video (₹2000 per raft, shared among 8 people per raft).</li>
                <li>Personal expenses such as snacks, drinks, or souvenirs.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 6th section - Guidelines */}
      <div className="relative md:mt-15 min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-28 overflow-hidden text-black text-center">
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-30 blur-xl animate-slideBg" aria-hidden="true" />
        
        {/* Content */}
        <div className="relative z-10 max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight transform scale-50 opacity-0 animate-fadeIn scale-100">
            Rafting Guidelines <br />
            <span className="text-lg font-semibold">& Safety Notes</span>
          </h2>
          
          <div className="flex flex-col items-center gap-5">
            {guidelines.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl shadow-md w-full max-w-xl opacity-0 translate-y-5 animate-fadeUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="text-base sm:text-lg">
                  <span className="font-semibold">{item.title}:</span> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lazy loaded Form component */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading booking form...</div>}>
        <LazyForm
          boxClass="bg-[#B4F4FA]"
          headingClass="text-black"
          buttonClass="bg-blue-600 hover:bg-blue-700"
          focusClass="focus:outline-blue-500"
        />
      </Suspense>
    </section>
  );
}

export default Kodilyla;