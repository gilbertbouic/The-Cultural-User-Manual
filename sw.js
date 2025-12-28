/**
 * Service Worker for Cultural Assimilation Manual PWA
 * 
 * This service worker implements an offline-first strategy:
 * 1. On install: Caches all core assets for offline use
 * 2. On fetch: Serves cached content first, falls back to network
 * 3. On activate: Cleans up old cache versions
 * 
 * Cache versioning: Increment version number when assets change significantly
 */

const CACHE_VERSION = 'v2';
const CACHE_NAME = `cultural-assimilation-manual-cache-${CACHE_VERSION}`;

// Core assets to cache for offline functionality
// Using relative paths for GitHub Pages compatibility
const urlsToCache = [
  './',
  './index.html',
  './styles/styles.css',
  './styles/interactive-styles.css',
  './scripts/core/data.core.js',
  './scripts/app.js',
  './scripts/navigation.js',
  './scripts/interactive.js',
  './scripts/regions/united_states.data.js',
  './scripts/regions/united_kingdom.data.js',
  './scripts/regions/central_europe.data.js',
  './scripts/regions/scandinavia.data.js',
  './scripts/regions/finland.data.js',
  './scripts/regions/baltics.data.js',
  './scripts/regions/balkans.data.js',
  './scripts/regions/greece.data.js',
  './scripts/regions/mediterranean.data.js',
  './scripts/scenarios/united_states.scenarios.js',
  './scripts/scenarios/united_kingdom.scenarios.js',
  './scripts/scenarios/central_europe.scenarios.js',
  './manifest.json',
  './icons/icon-192x192.svg'
];

/**
 * Install Event
 * Triggered when the service worker is first installed
 * Caches all core assets for offline use
 */
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Caching core assets');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[ServiceWorker] Installation complete');
        // Force the waiting service worker to become the active service worker
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[ServiceWorker] Failed to cache assets:', error);
      })
  );
});

/**
 * Activate Event
 * Triggered when the service worker becomes active
 * Cleans up old caches from previous versions
 */
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              // Delete caches that don't match current version
              return cacheName.startsWith('cultural-assimilation-manual-cache-') 
                     && cacheName !== CACHE_NAME;
            })
            .map(cacheName => {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[ServiceWorker] Activation complete');
        // Take control of all pages immediately
        return self.clients.claim();
      })
  );
});

/**
 * Fetch Event
 * Implements cache-first strategy with network fallback
 * 1. Try to serve from cache (fast, works offline)
 * 2. If not in cache, fetch from network
 * 3. Cache successful network responses for future use
 */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Not in cache - fetch from network
        return fetch(event.request)
          .then(networkResponse => {
            // Check if we received a valid response
            // Don't cache opaque responses (e.g., from cross-origin requests with no CORS)
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
              return networkResponse;
            }
            
            // Clone the response (can only be consumed once)
            const responseToCache = networkResponse.clone();
            
            // Add successful network response to cache for future use
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              })
              .catch(error => {
                console.error('[ServiceWorker] Failed to cache network response:', error);
              });
            
            return networkResponse;
          })
          .catch(error => {
            console.error('[ServiceWorker] Fetch failed:', error);
            // Could return a custom offline page here if desired
            throw error;
          });
      })
  );
});
