/* Trip Listo offline support. Change CACHE when you publish a new version so phones pick it up. */
var CACHE='trip-listo-v4';
var ASSETS=[
 "./",
 "index.html",
 "manifest.webmanifest",
 "fonts.css",
 "qrcode.js",
 "icon-192.png",
 "icon-512.png",
 "favicon.svg",
 "bodoni-moda-latin-600-italic.woff2",
 "bodoni-moda-latin-600-normal.woff2",
 "bodoni-moda-latin-ext-600-italic.woff2",
 "bodoni-moda-latin-ext-600-normal.woff2",
 "dm-mono-latin-400-normal.woff2",
 "dm-mono-latin-ext-400-normal.woff2",
 "hanken-grotesk-latin-400-normal.woff2",
 "hanken-grotesk-latin-500-normal.woff2",
 "hanken-grotesk-latin-600-normal.woff2",
 "hanken-grotesk-latin-ext-400-normal.woff2",
 "hanken-grotesk-latin-ext-500-normal.woff2",
 "hanken-grotesk-latin-ext-600-normal.woff2"
];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return Promise.all(ASSETS.map(function(u){return fetch(new Request(u,{cache:'reload'})).then(function(r){if(!r.ok)throw new Error(u);return c.put(u,r)})}))}).then(function(){return self.skipWaiting()}));
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
      var fresh=fetch(req,{cache:'no-cache'}).then(function(res){if(res&&res.ok)c.put(req,res.clone());return res}).catch(function(){return hit||c.match('index.html')});
      e.waitUntil(fresh.catch(function(){}));
      return hit||fresh;
    });
  }));
});
