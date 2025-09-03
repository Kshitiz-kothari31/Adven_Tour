import { useEffect } from "react";
import CountUp from "react-countup";
import "./Rafting.css";

const stats = [
  { number: 5000, text: "Happy Clients", duration: 10 },
  { number: 15, text: "Years Of Experience", suffix: " +", duration: 15 },
  { number: 100, text: "River Rafted", duration: 10 },
];

const Expe = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-in-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <section>
      <div className="fade-in-up bg-[#5656eb] hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition-all duration-700 py-6 px-6 text-white text-center josefin-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="fade-in-up hover-animate bg-white/10 hover:bg-white/20 rounded-xl py-5 px-4 shadow-lg backdrop-blur-lg"
            >
              <h3 className="text-3xl font-extrabold text-white">
                <CountUp
                  end={item.number}
                  duration={item.duration}
                  suffix={item.suffix || ""}
                />
              </h3>
              <p className="text-base mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expe;
