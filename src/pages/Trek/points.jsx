import  { useEffect, useRef } from 'react';
import './trek.css'
/* ─── Data (easy to edit) ───────────────────────────────────────────── */
const specialPoints = [
  { title: "Meadows (Bugyals)", text: "Vast alpine grasslands that feel almost surreal" },
  { title: "Forests", text: "Walk through pine, oak, maple, and rhododendron groves" },
  { title: "Panoramic Views", text: "Bandarpoonch, Kala Nag, Srikanth, and Draupadi Ka Danda peaks" },
  { title: "All-Season Beauty", text: "Snow in winter, wildflowers in summer, golden grass in autumn" },
  { title: "Peaceful Trails", text: "Dayara offers solitude and serenity, perfect for reflection" },
  { title: "Cultural Charm", text: "Base villages like Raithal & Barsu showcase Garhwali traditions and festivals such as Butter Holi" },
];

/* ─── Scroll Animation Hook ───────────────────────────────────────────── */
function useInView(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("fade-up");
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

/* ─── Component ─────────────────────────────────────────────────────── */
export default function SpecialSection() {
  const headingRef = useRef(null);

  // Animate heading
  useInView(headingRef);

  return (
    <section className="josefin-sans py-16 px-6 md:mt-5 mt-10 md:px-20 max-w-5xl mx-auto">
      {/* Heading */}
      <h2
        ref={headingRef}
        className="fade-init text-3xl md:text-4xl font-bold text-center mb-12"
      >
        What Makes&nbsp;<span className="text-green-700">It&nbsp;Special</span>
      </h2>

      {/* Animated list */}
      <div className="space-y-6">
        {specialPoints.map((item, i) => {
          const cardRef = useRef(null);
          useInView(cardRef);

          return (
            <div
              key={i}
              ref={cardRef}
              className="fade-init bg-[#fdfaf6] rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }} // 👈 stagger effect
            >
              <h3 className="text-lg md:text-xl font-semibold">{item.title}:</h3>
              <p className="mt-1 text-gray-700 text-sm md:text-base">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}