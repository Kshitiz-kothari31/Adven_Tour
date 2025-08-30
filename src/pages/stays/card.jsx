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
      cost: "₹1,500 /-",
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
      cost: "₹2,000 /-",
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
      cost: "₹2,500 /-",
      bigImg:
        "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_10.webp",
      smallImg:
        "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stays/stay_08.webp",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[clamp(3rem,6vw,6rem)]">
      {cards.map((card, idx) => {
        const isReversed = idx % 2 === 1;
        const isSecondCard = idx === 1;

        return (
          <motion.div
            key={card.id}
            className={`w-full flex flex-col md:flex-row ${
              isReversed ? "md:flex-row-reverse" : ""
            } items-center justify-between relative`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Images */}
            <div className="relative w-[calc(clamp(220px,55vw,650px)*1.15)] h-[calc(clamp(220px,40vw,520px)*1.15)]">
              {/* Big funky image with thin black border */}
              <div className="absolute inset-0 rounded-[40%_60%_55%_45%/60%_40%_60%_40%] border border-black p-1">
                <img
                  src={card.bigImg}
                  alt="Big funky image"
                  className="w-full h-full object-cover rounded-[40%_60%_55%_45%/60%_40%_60%_40%]"
                />
              </div>

              {/* 2nd card: Gallery button on right of big image */}
              {isSecondCard && (
                <a
                  href="/#gallery"
                  className="absolute top-1/2 right-[-60px] -translate-y-1/2 z-10"
                >
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-[#ff6b4a]/40 blur-md"></span>
                    <button className="relative h-[clamp(28px,5vw,48px)] w-[clamp(28px,5vw,48px)] bg-[#ff6b4a] hover:bg-[#ff3b00] rounded-full flex justify-center items-center shadow-lg">
                      <ArrowRight className="w-[clamp(14px,3vw,22px)] h-[clamp(14px,3vw,22px)] text-black rotate-[33deg]" />
                    </button>
                  </div>
                </a>
              )}

              {/* Other cards: small image overlay bottom-right */}
              {!isSecondCard && (
                <div className="absolute bottom-2 right-2 w-[clamp(80px,12vw,150px)] h-[clamp(80px,12vw,150px)] border-2 border-white rounded-full overflow-visible shadow-md z-[3]">
                  <img
                    src={card.smallImg}
                    alt="Small image"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <a
                    href="/#gallery"
                    className="absolute bottom-[-30%] right-[-30%] z-[10]"
                  >
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full bg-[#ff6b4a]/40 blur-md"></span>
                      <button className="absolute bottom-[1%] right-[4%] h-[clamp(28px,5vw,48px)] w-[clamp(28px,5vw,48px)] bg-[#ff6b4a] hover:bg-[#ff3b00] rounded-full flex justify-center items-center shadow-lg z-10">
                        <ArrowRight className="w-[clamp(14px,3vw,22px)] h-[clamp(14px,3vw,22px)] text-black -rotate-[33deg]" />
                      </button>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Content */}
            <div
              className={`w-full md:w-1/2 mt-6 md:mt-0 flex flex-col justify-end gap-[clamp(1rem,3vw,3rem)] font-josefin relative
                ${isReversed 
                  ? "md:mr-6 md:pl-12 md:text-left md:items-start text-center items-center"
                  : "md:ml-6 md:pr-12 md:text-right md:items-end text-center items-center"
                }`}
            >
              <h2 className="font-bold underline text-[clamp(1rem,0.8rem+1.2vw,2.2rem)]">
                {card.title}
              </h2>
              <p className="hidden md:block text-[clamp(0.8rem,0.6rem+0.7vw,1.3rem)]">
                {card.desc}
              </p>
              <p className="md:hidden text-[clamp(0.8rem,0.6rem+0.7vw,1.3rem)]">
                {card.shortDesc}
              </p>
              <p>
                <b>Cost: {card.cost}</b>
              </p>
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hello! I want to book ${card.title} for ${card.cost}`
                    )}`,
                    "_blank"
                  )
                }
                className="relative z-20 bg-[#ff6b4a] text-white h-[clamp(30px,5vw,40px)] w-[clamp(70px,10vw,100px)] rounded-lg text-[clamp(12px,1.8vw,15px)] hover:text-[#ff6b4a] hover:border-2 hover:border-[#ff3b00] hover:bg-transparent transition"
              >
                Book Now
              </button>
              {/* Curvy arrow under text; reversed for 2nd card */}
              <img
                src="https://cdn.jsdelivr.net/gh/Aman17123/img@main/Arrow15.svg"
                alt="arrow_img"
                loading="lazy"
                className={`absolute w-[70%] opacity-80 bottom-[-100px] ${
                  isSecondCard ? "right-0 rotate-180" : isReversed ? "left-0" : "right-0"
                }`}
                style={{ maxWidth: "600px" }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
