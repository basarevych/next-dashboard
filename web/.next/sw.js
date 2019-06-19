/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/_next/static/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/_next/static/workbox-v4.3.1"});

importScripts(
  "/_next/static/precache-manifest.3a0307d9fe4fe97ea7dd188e340c9a8f.js"
);

workbox.core.setCacheNameDetails({prefix: "next-dashboard-web"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?:\/\/[^\/]+\/v1.*/, new workbox.strategies.NetworkOnly(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/[^\/]+\/ws.*/, new workbox.strategies.NetworkOnly(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/[^\/]+\/graphql.*/, new workbox.strategies.NetworkOnly(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/.*/, new workbox.strategies.NetworkFirst(), 'GET');
