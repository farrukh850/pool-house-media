import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header({ onTogglePriceGuide }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="px-8 py-7 relative z-[1000]">
      <div className="flex justify-between items-center">
        <Link to="/"><img src="/images/logo-white.svg" class="w-[120px] lg:w-[229px]" alt="" /></Link>

        {/* Hamburger Menu Button - Only visible on mobile */}
        <button
          className="md:hidden z-20 relative w-8 h-8 flex flex-col justify-center items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation onTogglePriceGuide={onTogglePriceGuide} />
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-black z-10 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="h-full flex flex-col pt-28">
            <div className="container mx-auto px-8">
              <nav className="flex items-center justify-center">
                <ul className="flex flex-col gap-6 items-center">
                  <li>
                    <Link
                      to="/video"
                      className="text-white text-2xl leading-[26px] uppercase"
                      onClick={closeMenu}
                    >
                      Video
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photo"
                      className="text-white text-2xl leading-[26px] uppercase"
                      onClick={closeMenu}
                    >
                      Photo
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/poolhousemedia/"
                      className="text-white text-2xl leading-[26px] uppercase"
                      onClick={closeMenu}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-white text-2xl leading-[26px] uppercase"
                      onClick={closeMenu}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="mt-4">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        closeMenu();
                        onTogglePriceGuide();
                      }}
                      className="text-black w-[159px] h-[37px] flex items-center justify-center bg-white rounded-[19px] text-[19px] leading-[22px] uppercase"
                    >
                      Price Guide
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
