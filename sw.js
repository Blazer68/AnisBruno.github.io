const CACHE_NAME='code-converter-v1',urlsToCache=['/','index.html','manifest.json','icon-192.png','icon-512.png'];self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>{return e.addAll(urlsToCache)}))}),self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(t=>{return t||fetch(e.request)}))});

