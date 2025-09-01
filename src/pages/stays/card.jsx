import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CottageCards() {
  const whatsappNumber = "7078287331"; // <-- your custom number
  const whatsappMessage = "Hello! I want to book this cottage.";

  const cards = [
    {
      id: 1,
      title: "Coller Cottage",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...",
      shortDesc: "There are many variations of passages of Lorem Ipsum available.",
       price: 2499, 
      bigImg:
        "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_01.webp",
      smallImg:
        "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_02.webp",
    },
    {
      id: 2,
      title: "Mountain Stay",
      desc: "Escape into the mountains with cozy cottages surrounded by nature’s beauty...",
      shortDesc: "Escape into the mountains with cozy cottages.",
       price: 2499, 
      bigImg:
        "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_06.webp",
      smallImg:
        "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_05.webp",
    },
    {
      id: 3,
      title: "River View Cottage",
      desc: "Stay by the riverside and enjoy the calm sound of flowing water all day long...",
      shortDesc: "Stay by the riverside and enjoy the calm.",
       price: 2499, 
      bigImg:
        "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_10.webp",
      smallImg:
        "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_08.webp",
    },
  ];

  return (
      <section className="px-4 sm:px-10 py-16 bg-gradient-to-r from-white via-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {cards.map((card, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10`}
              >
                {/* Image Section */}
                <div className="relative w-[calc(clamp(220px,55vw,650px)*1.15)] h-[calc(clamp(220px,40vw,520px)*1.15)]">
                  {/* Big funky image */}
                  <div className="absolute inset-0 rounded-[40%_60%_55%_45%/60%_40%_60%_40%] border border-black p-1">
                    <img
                      src={card.bigImg}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-[40%_60%_55%_45%/60%_40%_60%_40%]"
                    />
                  </div>

                  {/* Small image + gallery button */}
                  <div
                    className={`absolute bottom-2 ${
                      isReversed ? "left-2" : "right-2"
                    } w-[clamp(90px,14vw,160px)] h-[clamp(90px,14vw,160px)] border-2 border-white rounded-full shadow-md z-[3]`}
                  >
                    <img
                      src={card.smallImg}
                      alt="Small preview"
                      className="w-full h-full object-cover rounded-full"
                    />

                    {/* Gallery Button */}
                    <a
                      href="/#gallery"
                      className={`absolute bottom-[-30%] ${
                        isReversed ? "left-[-30%]" : "right-[-30%]"
                      } z-[10]`}
                    >
                      <div className="relative">
                        <span className="absolute inset-0 rounded-full bg-[#ff6b4a]/40 blur-md"></span>
                        <button className="relative h-[clamp(32px,6vw,52px)] w-[clamp(32px,6vw,52px)] bg-[#ff6b4a] hover:bg-[#ff3b00] rounded-full flex justify-center items-center shadow-lg transition-transform hover:scale-110">
                          <ArrowRight
                            className={`w-[clamp(16px,3vw,24px)] h-[clamp(16px,3vw,24px)] text-black ${
                              isReversed ? "rotate-[213deg]" : "-rotate-[33deg]"
                            }`}
                          />
                        </button>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Text Section */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {card.title}
                  </h2>
                  <p className="text-gray-700 text-base sm:text-lg mb-6">
                    {card.desc}
                  </p>

                  {/* Price */}
                  <p className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                    ₹{card.price} / per person
                  </p>

                  {/* Book Now Button */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all hover:scale-105"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
  );
}
