import React, { useState, useEffect } from 'react';

function PopupForm({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Handle animation for smooth opening/closing
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        // Reset form state when popup is fully closed
        if (!isOpen) {
          setTimeout(() => {
            setIsSubmitted(false);
            setEmail('');
          }, 300);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
    // Show success message
    setIsSubmitted(true);
    
    // Optional: Close popup after some time
    // setTimeout(() => {
    //   onClose();
    // }, 3000);
  };

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
          {!isSubmitted ? (
            <>
              <h2 className="text-2xl leading-7 uppercase">DOWNLOAD OUR SERVICES <br /> PRICING GUIDE</h2>
              
              <p className="text-xl leading-6 text-black uppercase">
                Simply enter your email <br /> below to DOWNLOAD YOUR COPY
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[39px] p-3 uppercase text-center focus:outline-none bg-[#C1C1C1] text-white mb-6 border border-gray-300"
                  required
                />
                
                <button 
                  type="submit"
                  className="w-[135px] h-[49px] bg-black text-white rounded-[22px] text-xl leading-[23px] uppercase hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <>
              <p className="text-2xl leading-7 uppercase font-medium">Thank you! <br /> PLEASE CHECK YOUR INBOX</p>
              
              <p className="text-xl leading-6 text-black uppercase">
                DOWNLOAD OUR SERVICES <br /> GUIDE FOR PHOTO AND VIDEO
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PopupForm;
