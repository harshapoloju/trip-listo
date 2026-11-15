/* Trip Listo offline support. Change CACHE when you publish a new version so phones pick it up. */
var CACHE='trip-listo-v1';
var ASSETS=[
 "./",
 "index.html",
 "manifest.webmanifest",
 "fonts/fonts.css",
 "vendor/qrcode.js",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "icons/favicon.svg",
 "fonts/bodoni-moda-latin-600-italic.woff2",
 "fonts/bodoni-moda-latin-600-normal.woff2",
 "fonts/bodoni-moda-latin-ext-600-italic.woff2",
 "fonts/bodoni-moda-latin-ext-600-normal.woff2",
 "fonts/dm-mono-latin-400-normal.woff2",
 "fonts/dm-mono-latin-ext-400-normal.woff2",
 "fonts/hanken-grotesk-latin-400-normal.woff2",
 "fonts/hanken-grotesk-latin-500-normal.woff2",
 "fonts/hanken-grotesk-latin-600-normal.woff2",
 "fonts/hanken-grotesk-latin-ext-400-normal.woff2",
 "fonts/hanken-grotesk-latin-ext-500-normal.woff2",
 "fonts/hanken-grotesk-latin-ext-600-normal.woff2"
];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS)}).then(function(){return self.skipWaiting()}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}));
});
/* Serve the saved copy first so the app opens instantly and offline, then refresh it in the background. */
self.addEventListener('fetch',function(e){
  var req=e.request;
  if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
  e.respondWith(caches.open(CACHE).then(function(c){
    return c.match(req,{ignoreSearch:true}).then(function(hit){
      var fresh=fetch(req).then(function(res){if(res&&res.ok)c.put(req,res.clone());return res}).catch(function(){return hit||c.match('index.html')});
      return hit||fresh;
    });
  }));
});
