// Català Trainer — Service Worker
// Versió de la caché — canvia aquest número per forçar actualització
const CACHE_VERSION = 'catala-trainer-v2';

// Fitxers a guardar en caché per funcionar offline
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './data.js'
];

// ── INSTAL·LACIÓ: guardem els assets en caché ──
self.addEventListener('install', event => {
  console.log('[SW] Instal·lant...');
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      console.log('[SW] Guardant fitxers en caché');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVACIÓ: eliminem cachés velles ──
self.addEventListener('activate', event => {
  console.log('[SW] Activant...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_VERSION)
          .map(key => {
            console.log('[SW] Eliminant caché antiga:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: servim des de caché, si no des de xarxa ──
self.addEventListener('fetch', event => {
  // Deixem passar les peticions externes (Google Fonts, APIs)
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        // Tenim la versió en caché — la servim i actualitzem en segon pla
        const fetchPromise = fetch(event.request).then(networkResponse => {
          caches.open(CACHE_VERSION).then(cache => {
            cache.put(event.request, networkResponse.clone());
          });
          return networkResponse;
        }).catch(() => cached);
        return cached;
      }

      // No hi ha caché — anem a xarxa
      return fetch(event.request).then(networkResponse => {
        // Guardem en caché per la propera vegada
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_VERSION).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Sense xarxa ni caché — pàgina offline
        return caches.match('./index.html');
      });
    })
  );
});

// ── MISSATGES: permet forçar actualització ──
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
