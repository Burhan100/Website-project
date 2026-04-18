// ══════════════════════════════════════════════
//  LGV Service Worker — PWA Support
// ══════════════════════════════════════════════
const CACHE_NAME = 'lgv-cache-v1';

// Files to cache for offline use
const STATIC_ASSETS = [
  '/index.html',
  '/booking.html',
  '/hall.html',
  '/browse.html',
  '/contact.html',
  '/login.html',
  '/profile.html',
  '/services.html',
  '/testimonials.html',
  '/asserts/Styling/style.css',
  '/asserts/Styling/responsive.css',
  '/asserts/JS/shared.js',
  '/asserts/JS/data.js',
  '/manifest.json'
];

// ── Install: cache static assets ──
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// ── Activate: clean old caches ──
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ── Fetch: network first, fallback to cache ──
self.addEventListener('fetch', (event) => {
  // Skip API calls — always go to network for fresh data
  if (event.request.url.includes('/api/')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache fresh copy
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => {
        // Network failed — serve from cache
        return caches.match(event.request).then(
          (cached) => cached || caches.match('/index.html')
        );
      })
  );
});
