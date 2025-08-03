import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function ThankYouPopup({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  // Handle animation for smooth opening/closing
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Overlay with blur effect */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup */}
      <div
        className={`relative bg-white rounded-[28px] px-8 min-h-[333px] max-w-[521px] flex items-center justify-center w-full mx-4 shadow-xl z-10 transition-all duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-8'}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-7 text-gray-400 hover:text-gray-800 transition-colors"
          aria-label="Close"
        >
         <img src="/images/close.svg" alt="Close" />
        </button>

        <div className="text-center flex flex-col gap-5 w-full">
          <h2 className="text-2xl leading-7 uppercase">THANK YOU FOR<br />YOUR ENQUIRY!</h2>

          <p className="text-xl leading-6 text-black uppercase">
            WE WILL BE IN TOUCH WITH YOU SHORTLY
          </p>

            <p className="text-xl leading-6 text-black uppercase">
               IN THE MEANTIME STAY IN TOUCH<br />VIA <a href="https://www.instagram.com/poolhousemedia/" className="underline" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
            </p>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPopup;
