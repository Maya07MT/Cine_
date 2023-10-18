// Define el nombre de la caché
const CACHE_NAME = "Boveda1";
// Archivos requeridos para que la aplicación funcione fuera de línea
self.addEventListener("install", (event) => {
  const recursos = caches.open(CACHE_NAME).then((cache) => {
    cache.add("/");
    cache.add("index.html");
    cache.add("js/app.js");
    cache.add("css/style.css");
    cache.add(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    );
    cache.add("images/Avatar.jpg");
    cache.add("images/default.avif");
    cache.add("images/EDR.jpg");
    cache.add("images/FNAF.jpg");
    cache.add("images/JW4.jpg");
    cache.add("images/LCE.jpg");
  });
  event.waitUntil(recursos);
});

// self.addEventListener("fetch", (event) => {
//   const respuesta = caches.match(event.request).then((res) => {
//     if (res) return res;

//     return fetch(event.request).then((newResp) => {
//       caches.open(CACHE_NAME).then((cache) => {
//         cache.put(event.request, newResp);
//       });

//       return newResp.clone();
//     });
//   });

//   const respuesta2 = caches.match(event.request).then((res2) => {
//     if (res2) return res2;

//     return fetch(event.request).then((newResp2) => {
//       caches.open(CACHE_NAME2).then((cache) => {
//         cache.put(event.request, newResp2);
//       });

//       return newResp2.clone();
//     });
//   });

//   event.respondWith(respuesta, respuesta2);
// });

self.addEventListener('fetch', e => {
  const respuesta = fetch(e.request).then((newResp) => {
      caches.open(CACHE_NAME)
          .then((cache) => {
              cache.put(e.request, newResp)
          });
      return newResp.clone();
  }).catch(err => {
      return caches.match(e.request);
  })
  e.respondWith(respuesta);
});
