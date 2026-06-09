importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js')

const { registerRoute, setDefaultHandler } = workbox.routing
const { CacheFirst, StaleWhileRevalidate, NetworkFirst } = workbox.strategies
const { ExpirationPlugin, CacheableResponsePlugin } = workbox.plugins

// Images: CacheFirst with expiration (30 days)
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({ maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 }),
      new CacheableResponsePlugin({ statuses: [0, 200] })
    ]
  })
)

// HTML: NetworkFirst with fallback
registerRoute(
  ({ request }) => request.destination === 'document',
  new NetworkFirst({
    cacheName: 'html',
    plugins: [new ExpirationPlugin({ maxEntries: 10 })]
  })
)

// JS/CSS: CacheFirst with expiration
registerRoute(
  ({ request }) => request.destination === 'script' || request.destination === 'style',
  new CacheFirst({
    cacheName: 'assets',
    plugins: [new ExpirationPlugin({ maxEntries: 50 })]
  })
)

// Fonts: StaleWhileRevalidate
registerRoute(
  ({ request }) => request.destination === 'font',
  new StaleWhileRevalidate({
    cacheName: 'fonts',
    plugins: [
      new ExpirationPlugin({ maxEntries: 10, maxAgeSeconds: 30 * 24 * 60 * 60 }),
      new CacheableResponsePlugin({ statuses: [0, 200] })
    ]
  })
)
