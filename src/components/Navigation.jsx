import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation({ onTogglePriceGuide }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const handlePriceGuideClick = (e) => {
    e.preventDefault();
    onTogglePriceGuide();
  };
  
  return (
    <nav>
      <ul className="flex space-x-7 items-center">
        <li>
          <Link
            to="/video"
            className={`${currentPath === '/video' ? 'text-white' : 'text-[#A59F9F]'} md:text-base lg:text-xl leading-[22px] uppercase`}
          >
            Video
          </Link>
        </li>
        <li>
          <Link
            to="/photo"
            className={`${currentPath === '/photo' ? 'text-white' : 'text-[#A59F9F]'} md:text-base lg:text-xl leading-[22px] uppercase`}
          >
            Photo
          </Link>
        </li>
        <li>
          <Link
            to="https://www.instagram.com/poolhousemedia/"
            className={`${currentPath === '/instagram' ? 'text-white' : 'text-[#A59F9F]'} md:text-base lg:text-xl leading-[22px] uppercase`}
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${currentPath === '/contact' ? 'text-white' : 'text-[#A59F9F]'} md:text-base lg:text-xl leading-[22px] uppercase`}
          >
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
  );
}

export default Navigation;
