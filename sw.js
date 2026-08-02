// minimal service worker pro instalovatelnost PWA
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {}); // network-only
