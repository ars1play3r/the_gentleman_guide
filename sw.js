const CACHE_NAME = 'gentlemans-guide-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/app-styles.css',
  '/auth-styles.css',
  '/logo.png',
  '/config.js',
  '/i18n.js',
  '/user-data.js',
  '/user-auth.js',
  '/firebase-config.js',
  '/auth.jsx',
  '/admin-dashboard.jsx',
  '/app.jsx',
  '/config-lessons.js',
  'https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js',
  'https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js',
  'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch Event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Try cache first, then network
        return response || fetch(event.request).then(fetchResponse => {
          // Cache new responses for next time
          if (fetchResponse && fetchResponse.status === 200) {
            const responseToCache = fetchResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
          }
          return fetchResponse;
        });
      })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Handle auth token storage
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'STORE_AUTH_TOKEN') {
    // Store auth token in IndexedDB or other secure storage
    storeAuthToken(event.data.token);
  }
});

// Function to store auth token securely
function storeAuthToken(token) {
  // Implementation for secure token storage
  if (!token) return;
  
  // Use IndexedDB for secure storage
  const request = indexedDB.open('AuthDB', 1);
  
  request.onerror = () => {
    console.error('Error opening auth database');
  };

  request.onupgradeneeded = event => {
    const db = event.target.result;
    if (!db.objectStoreNames.contains('auth')) {
      db.createObjectStore('auth', { keyPath: 'id' });
    }
  };

  request.onsuccess = event => {
    const db = event.target.result;
    const transaction = db.transaction(['auth'], 'readwrite');
    const store = transaction.objectStore('auth');
    
    store.put({
      id: 'current_token',
      token: token,
      timestamp: Date.now()
    });
  };
}