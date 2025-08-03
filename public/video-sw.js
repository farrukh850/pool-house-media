// This is a service worker for caching video files

const CACHE_NAME = 'video-cache-v1';
const VIDEO_CACHE_URLS = [
  '/videos/background-video.mp4',
  '/videos/background-video.webm',
  '/videos/fallback-image.jpg',
  // Add other video URLs here
];

// Install event - cache video files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service worker pre-caching videos');
        return cache.addAll(VIDEO_CACHE_URLS);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName.startsWith('video-cache-') && cacheName !== CACHE_NAME;
        }).map(cacheName => {
          console.log('Service worker removing old cache', cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Fetch event - serve from cache if available
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;
  
  // Check if the request is for a video file
  const url = new URL(event.request.url);
  const isVideoRequest = 
    url.pathname.startsWith('/videos/') && 
    (url.pathname.endsWith('.mp4') || 
     url.pathname.endsWith('.webm') || 
     url.pathname.endsWith('.jpg'));
  
  if (isVideoRequest) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          // Return cached version if available
          if (cachedResponse) {
            console.log('Service worker serving cached video', url.pathname);
            return cachedResponse;
          }
          
          // Otherwise fetch from network and cache
          return fetch(event.request)
            .then(response => {
              // Check if we received a valid response
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              
              // Clone the response as it can only be consumed once
              const responseToCache = response.clone();
              
              caches.open(CACHE_NAME)
                .then(cache => {
                  console.log('Service worker caching new video', url.pathname);
                  cache.put(event.request, responseToCache);
                });
                
              return response;
            });
        })
    );
  }
});
