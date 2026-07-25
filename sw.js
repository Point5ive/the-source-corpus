/* The Source Corpus — offline reading.
 *
 * Why this file exists at all: a service worker must, by spec, be its own
 * top-level script — it cannot be inlined in index.html. That crosses the
 * project's single-file rule, so it was designed in GAMEPLAN (FLAG 2) and held
 * for sign-off rather than shipped. It is first-party static caching: no CDN,
 * no third party, no tracking, no network dependency of any kind.
 *
 * The case: this is a corpus of primary texts. Reading Gilgamesh on a plane, or
 * the Upanishads with no signal, is the actual use case — and the content is
 * immutable and public-domain, which is the ideal shape for aggressive caching.
 *
 * Update safety is the whole design constraint here. A service worker that
 * caches its own HTML badly can strand every returning visitor on a stale build
 * with no way back, so:
 *   - the cache name carries a version; `activate` deletes every other cache
 *   - navigations are NETWORK-FIRST, so a deploy is picked up on the next load
 *     and the cache is only a fallback when the network fails
 *   - skipWaiting + clients.claim so a new worker takes over immediately
 *     instead of waiting for every tab to close
 *   - only same-origin GETs are touched; anything else falls through untouched
 */

const VERSION = 'tsc-v1';
const SHELL = VERSION + '-shell';
const TEXTS = VERSION + '-texts';
const KEEP = [SHELL, TEXTS];

// The app shell. Deliberately NOT search-index.json (2.6 MB) — it is fetched
// lazily by the app and gets cached on first use like anything else, so a
// first visit does not pay for it up front.
const SHELL_URLS = [
  './',
  './index.html',
  './favicon.svg',
  './catalog-summary.json',
  './catalog.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL).then((cache) =>
      // addAll is atomic: one 404 would reject the whole install and leave the
      // old worker in place. Add individually so a single missing asset cannot
      // block the update.
      Promise.all(SHELL_URLS.map((url) =>
        cache.add(new Request(url, { cache: 'reload' })).catch(() => null)
      ))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => KEEP.indexOf(k) === -1).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Let the page trigger an update check without a reload.
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // never touch third parties

  // Navigations: network first, cache as the offline fallback. This is what
  // keeps a deploy from being shadowed by a stale shell.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(SHELL).then((c) => c.put('./index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('./index.html', { ignoreSearch: true })
          .then((hit) => hit || Response.error()))
    );
    return;
  }

  // The corpus itself is immutable — its SHA-256 is printed in the reader's
  // colophon and never changes — so cache-first is correct and permanent.
  if (url.pathname.endsWith('.txt')) {
    event.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(TEXTS).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }))
    );
    return;
  }

  // Everything else (catalog, search index, favicon): stale-while-revalidate.
  event.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(SHELL).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
