import React, { useState } from 'react';
import ThankYouPopup from '../components/ThankYouPopup';

function ContactPage() {
  const [checkedItems, setCheckedItems] = useState({
    videography: false,
    photography: false,
    instagram: false,
    other: false
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleCheckboxChange = (name) => {
    setCheckedItems({
      ...checkedItems,
      [name]: !checkedItems[name]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show thank you popup
    setShowThankYou(true);
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 md:pt-20 pb-8 md:pb-14">
      <form onSubmit={handleSubmit} className="w-full max-w-full sm:max-w-[600px] md:max-w-[760px] lg:max-w-[918px]">
          <div className="flex flex-col gap-5 sm:gap-7 md:gap-10 items-start">
              <div className="flex flex-col gap-2.5 w-full">
                  <label className="uppercase text-lg sm:text-xl text-white leading-[23px]">Full Name</label>
                  <input type="text" className="h-10 border-b bg-transparent focus:outline-none focus:bg-[#343434] uppercase text-white pl-3"  />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-10 md:gap-20 w-full">
                  <div className="col-span-1 sm:col-span-7 flex flex-col gap-2.5">
                      <label className="uppercase text-lg sm:text-xl text-white leading-[23px]">EMAIL</label>
                      <input type="text" className="h-10 border-b bg-transparent focus:outline-none focus:bg-[#343434] uppercase text-white pl-3"  />
                  </div>
                  <div className="col-span-1 sm:col-span-5 flex flex-col gap-2.5">
                      <label className="uppercase text-lg sm:text-xl text-white leading-[23px]">PHONE NUMBER</label>
                      <input type="text" className="h-10 border-b bg-transparent focus:outline-none focus:bg-[#343434] uppercase text-white pl-3"  />
                  </div>
              </div>
              <div className="flex flex-col gap-4 sm:gap-7 w-full lg:w-auto">
                  <label className="uppercase text-lg sm:text-xl text-white leading-[23px]">WHAT ARE YOU INTERESTED IN?</label>
                  <div className="grid grid-cols-2 gap-7 sm:gap-7.5">
                    <div className="flex items-center">
                      <div
                        className="w-5 h-5 border cursor-pointer relative flex items-center justify-center mr-3"
                        onClick={() => handleCheckboxChange('videography')}
                      >
                        {checkedItems.videography && <span className="text-white">&#10005;</span>}
                      </div>
                      <label className="text-white cursor-pointer text-sm sm:text-base leading-[18px] uppercase" onClick={() => handleCheckboxChange('videography')}>Videography</label>
                    </div>

                    <div className="flex items-center">
                      <div
                        className="w-5 h-5 border cursor-pointer relative flex items-center justify-center mr-3"
                        onClick={() => handleCheckboxChange('photography')}
                      >
                        {checkedItems.photography && <span className="text-white">&#10005;</span>}
                      </div>
                      <label className="text-white cursor-pointer text-sm sm:text-base leading-[18px] uppercase" onClick={() => handleCheckboxChange('photography')}>SOCIAL MEDIA</label>
                    </div>

                    <div className="flex items-center">
                      <div
                        className="w-5 h-5 border cursor-pointer relative flex items-center justify-center mr-3"
                        onClick={() => handleCheckboxChange('instagram')}
                      >
                        {checkedItems.instagram && <span className="text-white">&#10005;</span>}
                      </div>
                      <label className="text-white cursor-pointer text-sm sm:text-base leading-[18px] uppercase" onClick={() => handleCheckboxChange('instagram')}>PHOTOGRAPHY</label>
                    </div>

                    <div className="flex items-center">
                      <div
                        className="w-5 h-5 border cursor-pointer relative flex items-center justify-center mr-3"
                        onClick={() => handleCheckboxChange('other')}
                      >
                        {checkedItems.other && <span className="text-white">&#10005;</span>}
                      </div>
                      <label className="text-white cursor-pointer text-sm sm:text-base leading-[18px] uppercase" onClick={() => handleCheckboxChange('other')}>Other</label>
                    </div>
                  </div>
              </div>
              <div className="flex flex-col gap-4 sm:gap-7 w-full">
                  <label className="uppercase text-lg sm:text-xl text-white leading-[23px]">MESSAGE</label>
                  <textarea
                    className="h-[120px] sm:h-[156px] border border-white bg-transparent focus:outline-none focus:bg-[#343434] uppercase text-white p-4 sm:p-[25px] text-sm sm:text-base leading-[18px] placeholder-[#A59F9F]"
                    placeholder="Write your message here…"
                  />
              </div>
              <input type="submit" className="py-2.5 sm:py-3.5 px-5 sm:px-7 bg-white uppercase text-black text-lg sm:text-xl leading-6 cursor-pointer" value="subimit" />
          </div>
      </form>

      <ThankYouPopup isOpen={showThankYou} onClose={closeThankYou} />
    </div>
  );
}

export default ContactPage;
