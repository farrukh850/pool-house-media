import React, { useRef, useEffect, useState } from 'react';

const FullScreenVideo = ({ src, children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Handle video loading and playback
  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;
    
    // Play video when it's ready
    const playVideo = async () => {
      try {
        if (video.paused) {
          await video.play();
        }
      } catch (error) {
        // Silent error handling - no state needed
      }
    };
    
    video.addEventListener('canplay', playVideo);
    
    // Check if video is already loaded
    if (video.readyState >= 3) {
      playVideo();
    }
    
    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          style={{ WebkitPictureInPicture: "disallow" }}
        >
          <source src="https://demos.farrukhwaseem.com/pool-house-media/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 z-20 flex items-center justify-center h-full w-full pointer-events-none">
            {children}
        </div>

        <button 
          onClick={toggleMute}
          className="video-mute-btn"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 lg:w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
        </button>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full z-10 flex items-center justify-center pointer-events-none">
        <img src="/images/video-overlay.svg" alt="Video Overlay" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default FullScreenVideo;
