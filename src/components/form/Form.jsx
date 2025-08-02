import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, PhoneCall } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Form({
  boxClass    = "bg-white/40 backdrop-blur-lg border",  
  headingClass = "text-orange-700",
  buttonClass  = "bg-orange-500 hover:bg-orange-600",
  focusClass   = "focus:outline-orange-400",
}) {
  const formRef      = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",   // ← replace with your EmailJS service ID
        "your_template_id",  // ← replace with your EmailJS template ID
        formRef.current,
        "your_public_key"    // ← replace with your EmailJS public key
      )
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 2000);
        formRef.current.reset();
      })
      .catch((err) => console.error("Email error:", err));
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 josefin-sans">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10
                      bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl
                      border border-white/70 p-8 md:p-14">

        {/* LEFT COLUMN — all text black */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-black">Get In Touch</h2>

          <p className="text-black leading-relaxed">
            Need help planning your next <span className="font-semibold">adventure</span>?<br/>
            Contact us anytime for rafting, treks, bungee, stays &amp; more!
          </p>

          <div className="flex items-center space-x-4">
            <div className="bg-gray-200 p-3 rounded-full">
              <PhoneCall className="w-6 h-6 text-black" />
            </div>
            <div>
              <p className="font-semibold text-black">Customer Support</p>
              <p className="text-gray-900 text-sm">+91 6398xxx708</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-gray-200 p-3 rounded-full">
              <Mail className="w-6 h-6 text-black" />
            </div>
            <div>
              <p className="font-semibold text-black">Email</p>
              <p className="text-gray-900 text-sm">adventurebooking@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — accent colour driven by props */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl shadow-inner space-y-5 p-6 ${boxClass}`}
        >
          <h3 className={`text-xl font-semibold mb-3 ${headingClass}`}>
            Send Us a Message
          </h3>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="first_name" type="text" required placeholder="First Name"
              className={`w-full rounded-xl border border-gray-300 px-4 py-2
                          bg-white shadow-sm ${focusClass}`}
            />
            <input
              name="last_name" type="text" required placeholder="Last Name"
              className={`w-full rounded-xl border border-gray-300 px-4 py-2
                          bg-white shadow-sm ${focusClass}`}
            />
          </div>

          <input
            name="user_email" type="email" required placeholder="Email"
            className={`w-full rounded-xl border border-gray-300 px-4 py-2
                        bg-white shadow-sm ${focusClass}`}
          />

          <select
            name="interest" defaultValue="" required
            className={`w-full rounded-xl border border-gray-300 px-4 py-2
                        bg-white text-gray-900 ${focusClass}`}
          >
            <option value="" disabled>Interested in</option>
            <option value="rafting">Rafting</option>
            <option value="trekking">Trekking</option>
            <option value="bungee">Bungee Jumping</option>
            <option value="stays">Stays</option>
            <option value="custom">Custom Package</option>
          </select>

          <textarea
            name="message" rows="4" required placeholder="Your message…"
            className={`w-full rounded-xl border border-gray-300 px-4 py-2
                        bg-white shadow-sm ${focusClass}`}
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            type="submit"
            className={`text-white px-6 py-2 rounded-full font-semibold shadow-md
                        transition-all duration-300 ${buttonClass}`}
          >
            Send
          </motion.button>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-green-600 font-medium text-sm text-center mt-4"
              >
                ✅ Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </div>
  );
}
