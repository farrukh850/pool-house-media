import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomeHeader({ onTogglePriceGuide }) {
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

  const handlePriceGuideClick = (e) => {
    e.preventDefault();
    onTogglePriceGuide();
    if (windowWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-3 right-3 lg:top-[22px] lg:right-[37px] w-full z-[1000]">
        <div className="flex justify-end items-center">
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
          <nav className="hidden md:block">
            <ul className="flex gap-7.5 items-center justify-end">
              <li>
                <Link to="/video" state={{ fromHomepage: true }} className="text-white text-xl leading-[22px] uppercase">
                  Video
                </Link>
              </li>
              <li>
                <Link to="/photo" state={{ fromHomepage: true }} className="text-white text-xl leading-[22px] uppercase">
                  Photo
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/poolhousemedia/" className="text-white text-xl leading-[22px] uppercase">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="/contact" state={{ fromHomepage: true }} className="text-white text-xl leading-[22px] uppercase">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handlePriceGuideClick}
                  className="text-black w-[159px] h-[37px] flex items-center justify-center bg-white rounded-[19px] text-[19px] leading-[22px] uppercase"
                >
                  Price Guide
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation Overlay */}
          <div className={`fixed inset-0 bg-black z-10 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <nav className="h-full flex items-center justify-center">
              <ul className="flex flex-col gap-6 items-center">
                <li>
                  <Link
                    to="/video"
                    state={{ fromHomepage: true }}
                    className="text-white text-2xl leading-[26px] uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Video
                  </Link>
                </li>
                <li>
                  <Link
                    to="/photo"
                    state={{ fromHomepage: true }}
                    className="text-white text-2xl leading-[26px] uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Photo
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/poolhousemedia/"
                    className="text-white text-2xl leading-[26px] uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    state={{ fromHomepage: true }}
                    className="text-white text-2xl leading-[26px] uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    onClick={handlePriceGuideClick}
                    className="text-black w-[159px] h-[37px] flex items-center justify-center bg-white rounded-[19px] text-[19px] leading-[22px] uppercase"
                  >
                    Price Guide
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    </header>
  );
}

export default HomeHeader;
