const cacheName = 'my-cache-v1'; // You can change 'my-cache-v1' to a unique name for your app.


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            // Cache your app's static assets here.
            return cache.addAll([
                '/', // Cache the root URL (index.html).
                '/styles.css', // Cache your CSS file.
                '/script.js', // Cache your JavaScript file.
                // Add more files and paths to cache as needed.
            ]);
        })
    );
});


self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name !== cacheName) {
                        // Delete old caches (if any) to ensure you're using the latest cache version.
                        return caches.delete(name);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});