import React from 'react';
import '../video-page-styles.css';
import VideoCard from '../components/VideoCard';
import FullWidthVideo from '../components/FullWidthVideo';

function VideoPage() {
  const videos = [
    {
      id: 1,
      src: "https://demos.farrukhwaseem.com/pool-house-media/videos-page/video-1.mp4",
      thumbnail: "/images/video-thumbnails/thumbnail-1.png"
    },
    {
      id: 2,
      src: "https://demos.farrukhwaseem.com/pool-house-media/videos-page/video-2.m4v",
      thumbnail: "/images/video-thumbnails/thumbnail-2.png"
    },
    {
      id: 3,
      src: "https://demos.farrukhwaseem.com/pool-house-media/videos-page/video-3.mp4",
      thumbnail: "/images/video-thumbnails/thumbnail-3.png"
    }
  ];
  
  return (
    <div className="container mx-auto px-4 pt-4 pb-5 lg:pb-24 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[45px]">
        {videos.map((video) => (
          <VideoCard 
            key={video.id}
            videoSrc={video.src}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>
      
      {/* Full-width video section */}
      <FullWidthVideo 
        videoSrc="https://demos.farrukhwaseem.com/pool-house-media/videos/home-video.mp4"
        thumbnail="/images/video-thumbnails/thumbnail-full-width.jpg"
      />
    </div>
  );
}

export default VideoPage;
