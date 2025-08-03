import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeFooter from '../components/HomeFooter';
import FullScreenVideo from '../components/FullScreenVideo';
import '../video-styles.css';
import '../animations.css';

function HomePage({ onTogglePriceGuide }) {
  return (
    <div className="slide-animation">
      <HomeHeader onTogglePriceGuide={onTogglePriceGuide} />
      <div className="min-h-screen w-full overflow-hidden ">
        <FullScreenVideo src="https://demos.farrukhwaseem.com/pool-house-media/home-video.mp4">
          <img src="images/logo-white.svg" alt="Homepage Video" className="px-4 lg:px-0" />
        </FullScreenVideo>
      </div>
      <HomeFooter />
      
      {/* Note: PopupForm is now rendered at App level for consistency across all pages */}
    </div>
  );
}

export default HomePage;
