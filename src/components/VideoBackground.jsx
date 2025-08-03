import React, { useState, useRef, useEffect } from 'react';

/**
 * Responsive Video Background Component
 * 
 * Features:
 * - Auto-plays muted on load
 * - Responsive sizing
 * - Mute/unmute toggle button
 * - Optimized for performance
 * - Supports fallback image
 */
function VideoBackground({ 
  src, 
  webmSrc, 
  fallbackImage,
  overlay = true,
  overlayOpacity = 50,
  children
}) {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Handle video load
  const handleVideoLoaded = () => {
    setIsLoaded(true);
  };

  // Handle video error
  const handleVideoError = () => {
    setHasError(true);
    console.error("Video failed to load");
  };

  // Ensure video plays automatically
  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          console.log("Attempting to play video...");
          console.log("Video source:", src);
          console.log("Video element:", videoRef.current);
          await videoRef.current.play();
          console.log("Video playing successfully");
        }
      } catch (error) {
        console.error("Video play failed:", error);
        setHasError(true);
      }
    };
    
    playVideo();
  }, [src]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Fallback image shown until video loads or if video fails */}
      {(!isLoaded || hasError) && fallbackImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}
      
      {/* Video element */}
      {!hasError && (
        <video
          ref={videoRef}
          className={`absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoaded}
          onError={(e) => {
            console.error("Video error occurred:", e);
            handleVideoError();
          }}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" onError={() => console.error("WebM source failed to load")} />}
          {src && <source src={src} type="video/mp4" onError={() => console.error("MP4 source failed to load")} />}
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Optional dark overlay */}
      {overlay && (
        <div className={`absolute inset-0 bg-black bg-opacity-${overlayOpacity}`}></div>
      )}
      
      {/* Content overlay */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
      
      {/* Mute/Unmute button */}
      {!hasError && (
        <button 
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full transition-all"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}

export default VideoBackground;
