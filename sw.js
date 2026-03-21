const CACHE_NAME = "calcsprint-v6-seo-i18n";
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/404.html",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
  "/sw.js",
  "/assets/styles.css",
  "/assets/app.js",
  "/assets/404.js",
  "/assets/icons/icon-192.png",
  "/assets/icons/icon-512.png",
  "/blog/",
  "/blog/index.html",
  "/blog/mental-math-basics.html",
  "/blog/4-levels-training-plan.html",
  "/blog/how-to-get-faster.html",
  "/blog/addition-shortcuts.html",
  "/blog/subtraction-tricks.html",
  "/blog/multiplication-patterns.html",
  "/blog/division-as-reverse.html",
  "/blog/two-step-control.html",
  "/blog/micro-sessions.html",
  "/blog/accuracy-first.html",
  "/blog/warmup-routine.html",
  "/blog/handling-plateaus.html",
  "/blog/kids-and-adults.html",
  "/blog/keyboard-tips.html",
  "/blog/night-mode.html",
  "/ru/",
  "/ru/index.html",
  "/ru/blog/",
  "/ru/blog/index.html",
  "/ru/blog/mental-math-basics.html",
  "/ru/blog/4-levels-training-plan.html",
  "/ru/blog/how-to-get-faster.html",
  "/ru/blog/addition-shortcuts.html",
  "/ru/blog/subtraction-tricks.html",
  "/ru/blog/multiplication-patterns.html",
  "/ru/blog/division-as-reverse.html",
  "/ru/blog/two-step-control.html",
  "/ru/blog/micro-sessions.html",
  "/ru/blog/accuracy-first.html",
  "/ru/blog/warmup-routine.html",
  "/ru/blog/handling-plateaus.html",
  "/ru/blog/kids-and-adults.html",
  "/ru/blog/keyboard-tips.html",
  "/ru/blog/night-mode.html",
  "/es/",
  "/es/index.html",
  "/es/blog/",
  "/es/blog/index.html",
  "/es/blog/mental-math-basics.html",
  "/es/blog/4-levels-training-plan.html",
  "/es/blog/how-to-get-faster.html",
  "/es/blog/addition-shortcuts.html",
  "/es/blog/subtraction-tricks.html",
  "/es/blog/multiplication-patterns.html",
  "/es/blog/division-as-reverse.html",
  "/es/blog/two-step-control.html",
  "/es/blog/micro-sessions.html",
  "/es/blog/accuracy-first.html",
  "/es/blog/warmup-routine.html",
  "/es/blog/handling-plateaus.html",
  "/es/blog/kids-and-adults.html",
  "/es/blog/keyboard-tips.html",
  "/es/blog/night-mode.html",
  "/de/",
  "/de/index.html",
  "/de/blog/",
  "/de/blog/index.html",
  "/de/blog/mental-math-basics.html",
  "/de/blog/4-levels-training-plan.html",
  "/de/blog/how-to-get-faster.html",
  "/de/blog/addition-shortcuts.html",
  "/de/blog/subtraction-tricks.html",
  "/de/blog/multiplication-patterns.html",
  "/de/blog/division-as-reverse.html",
  "/de/blog/two-step-control.html",
  "/de/blog/micro-sessions.html",
  "/de/blog/accuracy-first.html",
  "/de/blog/warmup-routine.html",
  "/de/blog/handling-plateaus.html",
  "/de/blog/kids-and-adults.html",
  "/de/blog/keyboard-tips.html",
  "/de/blog/night-mode.html",
  "/zh/",
  "/zh/index.html",
  "/zh/blog/",
  "/zh/blog/index.html",
  "/zh/blog/mental-math-basics.html",
  "/zh/blog/4-levels-training-plan.html",
  "/zh/blog/how-to-get-faster.html",
  "/zh/blog/addition-shortcuts.html",
  "/zh/blog/subtraction-tricks.html",
  "/zh/blog/multiplication-patterns.html",
  "/zh/blog/division-as-reverse.html",
  "/zh/blog/two-step-control.html",
  "/zh/blog/micro-sessions.html",
  "/zh/blog/accuracy-first.html",
  "/zh/blog/warmup-routine.html",
  "/zh/blog/handling-plateaus.html",
  "/zh/blog/kids-and-adults.html",
  "/zh/blog/keyboard-tips.html",
  "/zh/blog/night-mode.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((key) => (key === CACHE_NAME ? null : caches.delete(key))))).then(() => self.clients.claim())
  );
});

function cacheResponse(request, response) {
  if (!response || response.status !== 200 || response.type === "opaque") return response;
  const copy = response.clone();
  caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
  return response;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => cacheResponse(request, response))
        .catch(() => caches.match(request).then((cached) => cached || caches.match("/404.html")))
    );
    return;
  }

  const isStaticAsset = /\.(?:css|js|png|webmanifest|txt|xml)$/i.test(url.pathname);

  if (isStaticAsset) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const networkFetch = fetch(request).then((response) => cacheResponse(request, response)).catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => cacheResponse(request, response))
      .catch(() => caches.match(request))
  );
});
