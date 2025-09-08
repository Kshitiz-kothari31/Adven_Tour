import { useEffect, useRef } from "react";
import "./trek.css";

/* ─── Data (easy to edit, supports optional images) ────────────────── */
const specialPoints = [
  {
    title: "Meadows (Bugyals)",
    text: "Vast alpine grasslands that feel almost surreal",
    img: "/images/trek/meadow.webp",
    alt: "Beautiful Dayara meadow",
  },
  {
    title: "Forests",
    text: "Walk through pine, oak, maple, and rhododendron groves",
    img: "/images/trek/forest.webp",
    alt: "Trek through dense forest",
  },
  {
    title: "Panoramic Views",
    text: "Bandarpoonch, Kala Nag, Srikanth, and Draupadi Ka Danda peaks",
    img: "/images/trek/views.webp",
    alt: "Snow peaks view from Dayara Bugyal",
  },
  {
    title: "All-Season Beauty",
    text: "Snow in winter, wildflowers in summer, golden grass in autumn",
    img: "/images/trek/seasons.webp",
    alt: "Different seasons on the trek",
  },
  {
    title: "Peaceful Trails",
    text: "Dayara offers solitude and serenity, perfect for reflection",
    img: "/images/trek/trails.webp",
    alt: "Quiet trekking trail",
  },
  {
    title: "Cultural Charm",
    text: "Base villages like Raithal & Barsu showcase Garhwali traditions and festivals such as Butter Holi",
    img: "/images/trek/culture.webp",
    alt: "Garhwali cultural traditions",
  },
];

/* ─── Hook: Reusable Scroll Animation ───────────────────────────── */
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

/* ─── Component ───────────────────────────────────────────────── */
export default function SpecialSection() {
  const headingRef = useRef(null);
  useInView(headingRef);

  return (
    <section className="josefin-sans py-16 px-6 md:mt-5 mt-10 md:px-20 max-w-6xl mx-auto">
      {/* Heading */}
      <h2
        ref={headingRef}
        className="fade-init text-3xl md:text-4xl font-bold text-center mb-12"
      >
        What Makes&nbsp;<span className="text-green-700">It&nbsp;Special</span>
      </h2>

      {/* Animated list */}
      <div className="grid md:grid-cols-2 gap-6">
        {specialPoints.map((item, i) => {
          const cardRef = useRef(null);
          useInView(cardRef);

          return (
            <article
              key={i}
              ref={cardRef}
              className="fade-init bg-[#fdfaf6] rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              style={{ animationDelay: `${i * 0.1}s` }} // stagger effect
            >
              {/* Optional Image */}
              {item.img && (
                <img
                  src={item.img}
                  alt={item.alt || item.title}
                  loading="lazy"
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
              )}
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-gray-700 text-sm md:text-base">
                  {item.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
