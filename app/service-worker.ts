const CACHE_NAME = 'jeclat-cache-v1';
const urlsToCache = [
  '/',
  '/about',
  '/events',
  '/social',
  '/archive',
  '/team',
  '/contact',
  '/merchandise',
  '/logo.png',
  // Add other important assets
];

self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 