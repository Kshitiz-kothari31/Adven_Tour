import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import logo from '../Navbar/21.svg';
import '../Navbar/Navbar.css';
import '../../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const closeMobileDropdown = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <header
      className={`sticky top-0 z-[1000] w-full transition-all duration-300 ease-in-out bg-white josefin-sans `}

    >
      <div className="w-full px-4 xl:px-8 2xl:px-16">
        <div className="mx-auto w-full flex items-center justify-between py-4 px-4 xl:px-16 3xl:px-32">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition">
              <img src={logo} alt="logo" className="h-10 w-10" />
              <span className="h-8 w-px bg-gray-800 hidden lg:block"></span>
            </Link>
          </div>

          {/* Spacer */}
          <div className="flex-1 hidden md:block" />

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-6 xl:space-x-10 text-base font-medium text-gray-800">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="#Rafting" className="nav-link">Rafting</a></li>
            <li><a href="#trek" className="nav-link">Treks</a></li>

            <li
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className={`nav-link flex items-center gap-2 cursor-pointer transition duration-300 ${dropdownOpen ? "text-cyan-700 scale-[1.03]" : ""}`}>
                <span>Adventure Sports</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-cyan-700" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="absolute top-full josefin-sans left-0 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden"
                  >
                    <a href="#bungee" className="block px-5 py-3 text-sm hover:bg-gray-100 font-medium transition">Bungee Jumping</a>
                    <a href="#kayaking" className="block px-5 py-3 text-sm hover:bg-gray-100 font-medium transition">Kayaking</a>
                    <a href="#zipline" className="block px-5 py-3 text-sm hover:bg-gray-100 font-medium transition">Zipline</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li><a href="#Stays" className="nav-link">Stays</a></li>
            <li><a href="#gallery" className="nav-link">Gallery</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden" ref={buttonRef}>
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 cursor-pointer text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4" ref={menuRef}>
          <ul className="space-y-3 flex flex-col items-center text-base font-medium text-gray-800">
            <li><a href="/" onClick={() => setIsOpen(false)} className="nav-link block text-center">Home</a></li>
            <li><a href="#Rafting" onClick={() => setIsOpen(false)} className="nav-link block text-center">Rafting</a></li>
            <li><a href="#trek" onClick={() => setIsOpen(false)} className="nav-link block text-center">Treks</a></li>

            <li className="w-full">
              <details ref={detailsRef} className="w-full text-center">
                <summary className="nav-link cursor-pointer flex justify-center items-center gap-2">Adventure Sports</summary>
                <ul className="mt-2 space-y-2 josefin-sans text-sm text-center">
                  <li><a href="#bungee" onClick={() => { closeMobileDropdown(); setIsOpen(false); }} className="block px-2 py-2 rounded hover:bg-gray-100">Bungee Jumping</a></li>
                  <li><a href="#kayaking" onClick={() => { closeMobileDropdown(); setIsOpen(false); }} className="block px-2 py-2 rounded hover:bg-gray-100">Kayaking</a></li>
                  <li><a href="#zipline" onClick={() => { closeMobileDropdown(); setIsOpen(false); }} className="block px-2 py-2 rounded hover:bg-gray-100">Zipline</a></li>
                </ul>
              </details>
            </li>

            <li><a href="#Stays" onClick={() => setIsOpen(false)} className="nav-link block text-center">Stays</a></li>
            <li><a href="#gallery" onClick={() => setIsOpen(false)} className="nav-link block text-center">Gallery</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="nav-link block text-center">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
