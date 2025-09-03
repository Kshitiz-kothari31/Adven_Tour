import { useEffect } from "react";
const faqData = [
  {
    question: "a. What should I bring for rafting?",
    answer: (
      <>
        Sure! Here's a quick checklist:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Wear: Quick-dry clothes, river sandals, sunscreen, cap.</li>
          <li>Carry: Life jacket (provided), water bottle, dry bag, lip balm.</li>
          <li>
            Extras: Change of clothes, towel, flashlight (if camping), first-aid.{" "}
            <a href="#" className="text-blue-600 underline">Checklist</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "b. Is rafting safe for beginners?",
    answer:
      "Yes, rafting is generally safe for beginners when done with a certified guide, proper gear, and on easier rapids like Class I or II. You’ll get a safety briefing before starting. Follow instructions, stay calm — it’s a beginner-friendly adventure!",
  },
  {
    question: "c. What is the minimum age to participate?",
    answer: (
      <>
        The minimum age depends on the river stretch:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Kids as young as 5 can join calm stretches like Brahmpuri to Rishikesh.</li>
          <li>For standard routes, minimum age is usually 14.</li>
          <li>Intense stretches like Kaudiyala to Rishikesh require 18+.</li>
        </ul>
      </>
    ),
  },
  {
    question: "d. How do I book a trip?",
    answer:
      "You can book via platforms like Thrillophilia or local camps. Most allow WhatsApp, phone, or direct walk-ins near Laxman Jhula or Tapovan. Bookings include gear, certified guides, transport to the rafting point, and sometimes fun extras like cliff jumping or riverside camping.",
  },
  {
    question: "e. Do I need prior experience?",
    answer:
      "No prior experience is needed for beginner-level trips. Grade I or II rapids are beginner-friendly and guides will brief you. Just be reasonably fit and able to follow directions.",
  },
];

export default function FAQSection() {
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
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);
  return (
    <section className="josefin-sans py-16 px-6 md:px-20 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 fade-in-up">
        Frequently Asked Questions
        <div className="text-lg font-medium text-gray-600">
          Everything you need to know before booking
        </div>
      </h2>

      <div className="space-y-8">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }} // ⏳ stagger effect
          >
            <h3 className="text-lg md:text-xl font-semibold text-black">
              {faq.question}
            </h3>
            <div className="mt-2 text-gray-700 text-sm md:text-base">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}
