/* SchoolTrack offline cache. Install the app once while online before using offline. */
const CACHE_NAME = 'schooltrack-eapihs-offline-v6';
const APP_FILES = [
  './', './index.html', './style.css', './app.js', './manifest.json',
  './click.mp3', './icon-512.png', './README.txt'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => {
    if (cached) return cached;
    return fetch(event.request).then(response => {
      if (response && response.ok && new URL(event.request.url).origin === self.location.origin) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    }).catch(() => {
      if (event.request.mode === 'navigate') return caches.match('./index.html');
      return new Response('Offline: this file is not cached yet.', {status: 503, headers: {'Content-Type':'text/plain; charset=utf-8'}});
    });
  }));
});
