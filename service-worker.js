const CACHE_NAME = 'dice-cache-v1';
const urlsToCache = [
  '/dice-game-/',
  '/dice-game-/index.html',
  '/dice-game-/styles.css',
  '/dice-game-/index.js',
  '/dice-game-/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
