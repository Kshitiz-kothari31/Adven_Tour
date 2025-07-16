import { useState, useEffect, useRef } from 'react';
import logo from '../Navbar/21.svg';
import '../Navbar/Navbar.css';
import '../../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

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

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-cyan-50 shadow border-b border-gray-200">
      <div className="w-full px-4 xl:px-8 2xl:px-16">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto flex items-center justify-between py-4">
          
          {/* Left: Logo */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="logo" className="h-10 w-10" />
            <span className="h-8 w-px bg-gray-800 hidden lg:block"></span>
          </div>

          {/* Spacer */}
          <div className="flex-1 hidden md:block"></div>

          {/* Right: Nav Links */}
          <ul className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-10 text-base font-medium">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="#trek" className="nav-link">Treks</a></li>
            <li><a href="#Adventure" className="nav-link">Adventure Sports</a></li>
            <li><a href="#Stays" className="nav-link">Stays</a></li>
            <li><a href="#gallery" className="nav-link">Gallery</a></li>
            <li><a href="#About" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          {/* Mobile Toggle Button */}
          <div className="md:hidden" ref={buttonRef}>
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            <li><a href="/" className="nav-link block">Home</a></li>
            <li><a href="#trek" className="nav-link block">Treks</a></li>
            <li><a href="#Adventure" className="nav-link block">Adventure Sports</a></li>
            <li><a href="#Stays" className="nav-link block">Stays</a></li>
            <li><a href="#allery" className="nav-link block">Gallery</a></li>
            <li><a href="#/trek" className="nav-link block">Treks</a></li>
            <li><a href="#Adventure" className="nav-link block">Adventure Sports</a></li>
            <li><a href="#Stays" className="nav-link block">Stays</a></li>
            <li><a href="#/gallery" className="nav-link block">Gallery</a></li>
            <li><a href="#About" className="nav-link block">About</a></li>
            <li><a href="#contact" className="nav-link block">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
