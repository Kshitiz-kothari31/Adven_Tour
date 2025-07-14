import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, PhoneCall } from "lucide-react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id',   // replace with your EmailJS service ID
        'your_template_id',  // replace with your EmailJS template ID
        formRef.current,
        'your_public_key'    // replace with your EmailJS public key
      )
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 2000);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-4 py-10 font-josefin">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl border border-white/70 p-8 md:p-14">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-emerald-800">Get In Touch</h2>
          <p className="text-gray-800 leading-relaxed">
            Need help planning your next <span className="font-semibold text-emerald-600">adventure</span>? 
            Contact us anytime for rafting, treks, bungee, stays & more!
          </p>

          <div className="flex items-center space-x-4">
            <div className="bg-emerald-100 p-3 rounded-full">
              <PhoneCall className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="font-semibold">Customer Support</p>
              <p className="text-gray-700 text-sm">+91 6398xxx708</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Mail className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-700 text-sm">adventurebooking@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/40 backdrop-blur-lg p-6 border rounded-2xl shadow-inner space-y-5"
        >
          <h3 className="text-xl font-semibold text-emerald-700 mb-3">
            Send Us a Message
          </h3>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white shadow-sm focus:outline-emerald-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white shadow-sm focus:outline-emerald-400"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white shadow-sm focus:outline-emerald-400"
          />

          <select
            name="interest"
            className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white text-gray-600 focus:outline-emerald-400"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Interested in
            </option>
            <option value="rafting">Rafting</option>
            <option value="trekking">Trekking</option>
            <option value="bungee">Bungee Jumping</option>
            <option value="stays">Stays</option>
            <option value="custom">Custom Package</option>
          </select>

          <textarea
            placeholder="Your message..."
            name="message"
            rows="4"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white shadow-sm focus:outline-emerald-400"
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300"
          >
            Send
          </motion.button>

          {/* ✅ Success Message */}
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
};

export default Form;
