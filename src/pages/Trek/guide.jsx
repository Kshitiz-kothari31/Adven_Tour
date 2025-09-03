import './trek.css';

/* ─── Trek Guide Data ─────────────────────────────── */
const guideData = [
  {
    name: "Kabir Joshi",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "Every trail tells a story — I’m here to help you live it."
  },
  {
    name: "Sneha Kapoor",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    quote: "Trekking isn’t just about the peak, it’s the journey that changes you."
  },
  {
    name: "Aarav Singh",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    quote: "I’ve led over 120 treks and each one still feels like the first."
  },
  {
    name: "Maya Thakur",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    quote: "Nature humbles you — let’s explore it together."
  }
];

/* ─── Component ───────────────────────────────────── */
export default function GuideScroller() {
  return (
    <div className="relative py-20 px-4 mt-10 md:px-10 xl:px-24 overflow-hidden bg-transparent josefin-sans">
      {/* 🧭 Section Heading */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block animate-fade-up">
          Meet Our <span className="text-teal-600">Trek Guides</span>
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-teal-500 rounded-full animate-grow origin-left" />
        </h2>
        <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto animate-fade-up">
          Passionate explorers, trusted leaders — these are the people who turn your trek into a memory of a lifetime.
        </p>
      </div>

      {/* 🧍‍♂️ Auto-scrolling Guide Cards */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 w-max animate-scroll-x">
          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex gap-8">
            {guideData.map((guide, i) => (
              <div
                key={`${loopIndex}-${i}`}
                className={`min-w-[280px] max-w-sm bg-white p-6 rounded-2xl shadow-lg 
                hover:scale-105 hover:shadow-2xl transition-transform duration-300 border border-gray-200 
                ${i % 2 === 0 ? "animate-slide-in-right" : "animate-slide-in-left"}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 shadow-sm"
                  />
                </div>
                <h3 className="text-lg font-bold text-center underline underline-offset-4 mb-2">
                  {guide.name}
                </h3>
                <p className="text-sm md:text-base italic text-center text-gray-600 leading-relaxed">
                  “{guide.quote}”
                </p>
              </div>
            ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

