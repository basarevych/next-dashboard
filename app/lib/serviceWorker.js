"use strict";

import pkg from "../../package";

const preloadExternal = [];

const preloadLocal = [];

const ignoreHosts = ["maps.googleapis.com", "maps.gstatic.com"];

const base = self.location.origin;
const cacheName = `${pkg.name}-v${pkg.version}`;

function fetchAndCache(request, cache) {
  return fetch(request)
    .then(response => {
      if (!response || (!response.ok && response.type !== "opaque")) {
        if (process.env.NODE_ENV === "development")
          console.error(
            `[SW] Fetching URL [${request.url.toString()}] error: ${
              response.status
            }/${response.type}`
          );
        return response;
      }

      return cache
        .put(request, response.clone())
        .then(() => {
          if (process.env.NODE_ENV === "development")
            console.log(
              `[SW] Fetched and cached asset: ${request.url.toString()}`
            );
          return response;
        })
        .catch(error => {
          if (process.env.NODE_ENV === "development")
            console.log(`[SW] Fetched asset: ${request.url.toString()}`);
          console.error("[SW] Cache write error", error);
          return response;
        });
    })
    .catch(error => {
      console.error(
        `[SW] Fetching URL [${request.url.toString()}] error`,
        error
      );
      throw error;
    });
}

// When the service worker is first added to a computer.
self.addEventListener("install", event => {
  if (process.env.NODE_ENV === "development")
    console.log(`[SW] Install event (${cacheName})`);

  event.waitUntil(
    self.caches
      .open(cacheName)
      .then(cache => {
        return fetch(new URL("/api/build.json", base).toString())
          .then(response => {
            if (response.status !== 200) return {};

            return response.json();
          })
          .then(info => {
            let cacheAssets = [base]
              .concat(preloadExternal)
              .concat(
                _.map(preloadLocal, path => new URL(path, base).toString())
              );
            if (info && info.assets) {
              cacheAssets = cacheAssets.concat(
                _.map(info.assets, path => new URL(path, base).toString())
              );
            }
            if (info && info.buildId && process.env.NODE_ENV === "production") {
              cacheAssets = cacheAssets.concat(
                _.map(
                  _.filter(self.serviceWorkerOption.assets, path =>
                    _.startsWith(path, "/bundles/pages")
                  ),
                  path =>
                    new URL(
                      `/_next/${info.buildId}/page` +
                        path.slice("/bundles/pages".length),
                      base
                    ).toString()
                )
              );
              cacheAssets = cacheAssets.concat(
                _.map(
                  _.filter(self.serviceWorkerOption.assets, path =>
                    _.startsWith(path, "/static")
                  ),
                  path => new URL(`/_next` + path, base).toString()
                )
              );
            }

            return Promise.all(
              _.map(cacheAssets, url =>
                fetchAndCache(new Request(url), cache).catch(_.noop)
              )
            );
          });
      })
      .then(() => {
        if (process.env.NODE_ENV === "development")
          console.log("[SW] Installation finished");
      })
      .catch(error => {
        console.error("[SW] Installation error", error);
      })
  );
});

// After the install event.
self.addEventListener("activate", event => {
  if (process.env.NODE_ENV === "development")
    console.log(`[SW] Activate event (${cacheName})`);

  event.waitUntil(
    self.caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          _.map(cacheNames, item =>
            _.startsWith(item, cacheName) ? null : self.caches.delete(item)
          )
        );
      })
      .then(() => {
        if (process.env.NODE_ENV === "development")
          console.log("[SW] Activation finished");
      })
      .catch(error => {
        console.error("[SW] Activation error", error);
      })
  );
});

// Posted by applyUpdate()
self.addEventListener("message", event => {
  if (event.data.action === "skipWaiting") {
    if (self.skipWaiting) {
      self.skipWaiting();
      self.clients.claim();
    }
  }
});

// Fetching resources: try network first, updating cache, return cached otherwise
self.addEventListener("fetch", event => {
  let requested = new URL(event.request.url, base);
  if (
    event.request.method !== "GET" ||
    _.includes(ignoreHosts, requested.hostname) ||
    (_.startsWith(requested.pathname, "/_next/") &&
      (process.env.NODE_ENV !== "production" ||
        requested.hostname === "localhost"))
  )
    return;

  let returnCached = (responseNetwork, errorNetwork) => {
    let onError = () => {
      if (responseNetwork) return responseNetwork;

      throw errorNetwork;
    };

    return self.caches.match(event.request).then(
      responseCache => {
        if (responseCache) {
          if (process.env.NODE_ENV === "development")
            console.log(
              `[SW] Using cached asset: ${event.request.url.toString()}`
            );
          return responseCache;
        }
        return onError();
      },
      error => {
        console.error("[SW] Cache read error", error);
        return onError();
      }
    );
  };

  event.respondWith(
    self.caches
      .open(cacheName)
      .then(cache => {
        return fetchAndCache(event.request.clone(), cache);
      })
      .then(response => {
        if (!response || (!response.ok && response.type !== "opaque"))
          return returnCached(response, null);

        return response;
      })
      .catch(error => {
        return returnCached(null, error);
      })
  );
});
