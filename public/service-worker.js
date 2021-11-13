var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/public/db.js',
  '/public/index.js',
  '/styles.css',
  '/manifest.json',
  '/public/icons/icon-192x192.png',
  '/public/icons/icon-512x512.png', 
];

// install callback, open cache, cache files, confirm cache
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Return a cached response with fetch
self.addEventListener('fetch', function(event) {
    // cache all get requests 
    if (){
        
    }
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });