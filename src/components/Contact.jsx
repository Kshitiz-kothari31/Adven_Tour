import { MapPin, Phone, Mail } from "lucide-react";
import { Instagram, } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="w-full font-sans">
      {/* 🔹 Hero Section */}
      <section className="relative h-[350px] bg-black text-white flex flex-col justify-center items-center text-center px-4">
        <img
          src="https://images3.alphacoders.com/134/thumb-1920-1345697.png"
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-sm max-w-xl mx-auto">
              For rafting inquiries, tour availability, or custom adventure bookings, feel free to reach out to our team. We're here to help you plan an unforgettable river experience.
          </p>
        </div>
      </section>

      {/* 🔹 Reach Us Section */}
      <section className="bg-[#f4ede4] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Reach Us</h2>
        <p className="text-sm text-gray-700 mb-10 max-w-xl mx-auto">
              For rafting inquiries, tour availability, or custom adventure bookings, feel free to reach out to our team. We're here to help you plan an unforgettable river experience.
        </p>

        {/* Contact Info Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Address */}
          <a
            href="https://www.google.com/maps/place/Shivpuri,+Uttarakhand+249413"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <MapPin className="mx-auto text-orange-500 mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-1">Address</h3>
            <p className="text-gray-600 text-sm">Shivpuri, Rishikesh, Uttarakhand</p>
          </a>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Phone className="mx-auto text-orange-500 mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-1">Call Us</h3>
            <p className="text-gray-600 text-sm">
              <a href="tel:+919898123198" className="hover:underline">+91 98981 23198</a>
            </p>
            <p className="text-gray-600 text-sm">
              <a href="tel:+9112312313123" className="hover:underline">+91 12312 313123</a>
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Mail className="mx-auto text-orange-500 mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-1">Email Us</h3>
            <p className="text-gray-600 text-sm">
              <a href="mailto:contact@domain.com" className="hover:underline">contact@domain.com</a>
            </p>
            <p className="text-gray-600 text-sm">
              <a href="mailto:partner@studio.com" className="hover:underline">partner@studio.com</a>
            </p>
          </div>

        </div>

        {/* Contact Buttons with Icons */}
        <div className="flex justify-center gap-6 mt-10">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/your_instagram_id/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>

          {/* WhatsApp (Official Logo SVG) */}
          <a
            href="https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20rafting%20in%20Shivpuri!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 .395C7.16.395.003 7.548.003 16.39c0 2.89.764 5.71 2.213 8.18L.17 31.604l7.222-2.024a15.94 15.94 0 007.81 2.046h.003c8.84 0 15.997-7.157 15.997-15.997C31.202 7.547 24.04.395 15.997.395zM16 28.82c-2.5 0-4.95-.667-7.08-1.927l-.51-.3-4.284 1.2 1.19-4.165-.333-.54a12.93 12.93 0 01-1.997-6.86c0-7.17 5.83-13 13-13s13 5.83 13 13-5.83 13-13 13zm7.38-9.997c-.41-.2-2.42-1.197-2.8-1.332-.38-.133-.66-.2-.94.2-.27.39-1.08 1.332-1.32 1.6-.24.26-.48.29-.89.1-.41-.2-1.73-.64-3.3-2.04-1.22-1.09-2.04-2.43-2.28-2.84-.24-.41-.03-.63.18-.83.18-.17.41-.44.62-.66.2-.23.27-.39.41-.65.13-.26.07-.49-.03-.68-.1-.2-.94-2.26-1.29-3.1-.34-.82-.69-.7-.94-.71-.24-.01-.5-.01-.77-.01-.26 0-.68.1-1.04.49-.36.39-1.37 1.33-1.37 3.24 0 1.91 1.4 3.75 1.6 4.01.2.26 2.76 4.21 6.69 5.9.94.41 1.67.65 2.24.83.94.3 1.79.26 2.46.16.75-.11 2.42-.99 2.76-1.95.34-.96.34-1.79.24-1.95-.1-.17-.36-.26-.76-.45z" />
            </svg>
          </a>

          {/* Google Maps */}
          <a
            href="https://www.google.com/maps/place/Shivpuri,+Uttarakhand+249413"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <MapPin className="w-6 h-6 text-white" />
          </a>

        </div>  
      </section>
      
      {/* 🔹 Google Map Section */}
      <section className="w-full h-[400px]">
          <iframe
            title="Shivpuri Rishikesh Map"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.687932174049!2d78.41623807451863!3d30.08713857489601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390915f3f09b36d1%3A0x1f05f04c54a82dd2!2sShivpuri%2C%20Uttarakhand%20249413!5e0!3m2!1sen!2sin!4v1720880116997!5m2!1sen!2sin"
          />
      </section>
    </div>
  );
};

export default ContactSection;
