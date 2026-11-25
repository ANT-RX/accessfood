/* accessfood · service worker: permite abrir la app sin conexión.
   La página se pide primero a la red (para ver siempre la versión más reciente) y, si no hay red,
   se usa la copia guardada. Las teselas del mapa no se guardan: sin conexión se usa el mapa esquemático. */
const VERSION = "accessfood-v1";
const ARCHIVOS = [
  "./", "./index.html", "./manifest.webmanifest",
  "./vendor/leaflet/leaflet.js", "./vendor/leaflet/leaflet.css",
  "./icons/icon.svg", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(claves.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((respuesta) => {
        const copia = respuesta.clone();
        caches.open(VERSION).then((c) => c.put(e.request, copia));
        return respuesta;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("./index.html"))),
  );
});
