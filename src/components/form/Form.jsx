import React from 'react'
import { motion } from 'framer-motion';

const Form = () => {
  return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4 py-10">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl p-8 md:p-14">
          {/* Left Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7269/7269980.png"
                  alt="support"
                  className="h-10 w-10"
                />
              </div>
              <div>
                <p className="font-semibold">Customer support</p>
                <p className="text-gray-500 text-sm">6398xxx708</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/542/542638.png"
                  alt="email"
                  className="h-10 w-10"
                />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-500 text-sm">abc@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 bg-pink-100 bg-opacity-60 p-6 rounded-2xl shadow-inner"
          >
            <h3 className="text-lg font-semibold text-gray-700">Send us message</h3>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First"
                className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <input
                type="text"
                placeholder="Second"
                className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            />

            <select className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300">
              <option value="">Interested in</option>
              <option value="support">Support</option>
              <option value="services">Services</option>
              <option value="feedback">Feedback</option>
            </select>

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            ></textarea>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-pink-600 transition-all duration-300"
            >
              Send
            </motion.button>
          </motion.form>
        </div>
      </div>
  )
}

export default Form