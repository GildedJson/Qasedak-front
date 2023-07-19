'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4fa4f84f49b13342424eff6de625dd25",
".git/config": "7c75cf9b7903b1f6ce12eba80735f1e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "35d193240cf8e8ac745e87a3c8f19a92",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "68377eadbfc85bc3bebebd983341b30f",
".git/logs/refs/heads/main": "68377eadbfc85bc3bebebd983341b30f",
".git/logs/refs/remotes/origin/main": "0a379d6e937f7b6ededd80528e13a737",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/26/279c2e2347302aa189a9489c967aebf569e41e": "d2a6d314972acedb549e48880a76aae1",
".git/objects/28/62476fe11b776e0a2f8eaae58feefe7c97c868": "6bf219cfd267e5ff3fecd4a8346e8698",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/f7b833717971e17bcf06aec2c88eff3634e8e9": "4a86e8f67f2ffb7d700c25de9248b1e6",
".git/objects/35/a6427e2d7ce9690710a2290b018d842740726d": "e5b387d6405091248165f38eedd7f45d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5a/70427f6ebba6235d191d2d4f3f847efae2f483": "73c60759ab54bc0c0bf4344b33eca238",
".git/objects/60/e092eb9c17800f16f3c5177da5017aa5a98fdc": "e4730142f4ac2a0955a920dc92ee162b",
".git/objects/62/b1932269f91990321885d280051786521d41fa": "cfa516b9f294cd3b417306ce1d5306c8",
".git/objects/64/e4a8189557a17b63fd7a77794207483e592972": "a70eaacf3b8037f9237cc8a8ad9f8521",
".git/objects/65/e8e568c87519fbe025efeaf671d108ef631a31": "6e20650785c829961f675174e548f2de",
".git/objects/6a/4301b4f4f3e02dfea546fbf5eb287a26c28876": "ea6203d59e3fde13a9bac3d5a0795f49",
".git/objects/6c/bca4b0d1956d1888368f683119556340039d9b": "81f264a32200186df0e573f85afd2fc8",
".git/objects/75/a7e3b997b0b79cd3f2c434891df0010bc4ec8f": "7456b697235315c88555323449341aa9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/05175a69aba7d445cedb348aa8028565fc2d53": "279d17c1ea17c6b86dd731af8e102b4e",
".git/objects/81/c630560fefc2509e60a1f81909ace093d9da3e": "195af1be48bb487adb46246987d865db",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9f/99722976effddef8e514dd5925bc99df4f0635": "89205065bac143067c1005c6c059b5c6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/a857da961080230dbd5d57730fad74870cae4e": "c5349ceaca47befa39bb3e87c987758f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/f221bc4d54eabd6870d476413fb42755d480b9": "2e2a16184abb028cb771e8ea55888759",
".git/objects/aa/acfb5758630b241bbb20cd14784647120ca7b1": "fecd67f0a4bd3f4586b591aa620690c7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/7ee8526d93bcc4079835d60a74b6fa6aa743d3": "030bfb8ef71a5c12b4ac7d0ee65073b3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b947e6acda06dd5c545a2fcd506900500afaa8": "1e006ec389e9fa4ebe237d10050b3a15",
".git/objects/b8/8e368973676cca1a6d49880144cc3bb5be5683": "e77cdb97311ae51b4abbd594787d7869",
".git/objects/c5/92b77f750ffffda2811a29f9e9a7466829e06c": "60b586b2bcb59304700c5b5e3b25bf71",
".git/objects/c6/12512f4264c1cfb0bbc7c3dec16f66fdb46b5a": "8a218c3daecd44bd8af5008e8852c934",
".git/objects/c9/8a75f9cf281965fc033e59d9da946684a1acf6": "766390170a0af5d545b641543476aae4",
".git/objects/cf/a7f6066162263859465f31224fe66219a25259": "8d787f55e8e12c1cd4c1322a808a0d5c",
".git/objects/dd/32886f0ba3217d9062359c29b4e685c6c05625": "50edd87df0f8dbf728f51366431710e6",
".git/objects/df/e548d74699f8e052f8fada4d00e283db478c70": "ce452ac4b71ec8c61aa52b3cd3bcf686",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ec/aa9c0b29125f0a597e0db7def2ee2baedb1149": "49a797b7064e3439cbbd22017447fbe0",
".git/objects/f0/bcbe961ed9b3fd903c2a521da37b7d7bc4332c": "e0c92fcff092840b12f8cff8a3cb8ba3",
".git/objects/fa/265b52df07b35fa5925074b459f0b7c55c93e2": "f3de847517aa00456f2196f10460d4b9",
".git/objects/fb/7a8aeb43196f7689c831e5c0b9526d6fc2fc15": "0519db1f65423721eb73c44a0b18e55d",
".git/objects/fd/4cec9682dd96ec8db8f6e35226f607a7a3325b": "d5e1dd9f0740f2d0b937791260d85500",
".git/objects/fe/7655b4d19b4c90837a09c7aedaa506053a450f": "4db09032df6d8eb180100526e8c1cb11",
".git/objects/ff/cbffdbc6bb3be4f669da96c51d2b2b78970b5e": "fc40562124f9d2567058bbadec64cceb",
".git/refs/heads/main": "09a23d05dae5235fa493d94862d6f9c6",
".git/refs/remotes/origin/main": "09a23d05dae5235fa493d94862d6f9c6",
"assets/AssetManifest.json": "c7779018ca522d420c35042620870a4f",
"assets/assets/fonts/Vazirmatn-ExtraLight.ttf": "0b05db45958f4ca70792ea093c698fa2",
"assets/assets/fonts/Vazirmatn-Regular.ttf": "e8e9648f5b8fc824da409750ff331221",
"assets/assets/images/iconQased1.png": "7cd42a66a968319222849044eb1d01f5",
"assets/FontManifest.json": "cbb1a607a0062337cdfa8bcb6bf0eb45",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "db725e32f36725f0e6fe1f192a6a4ff4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b4f2530613fe0dd789e20617460d2c11",
"/": "b4f2530613fe0dd789e20617460d2c11",
"main.dart.js": "ce13f672e4fec0d882ee0ea311e3e151",
"manifest.json": "caf1cfca5d5b84ca66370683748edbf0",
"README.md": "f28614b4b44922d9f0f21deed671c229",
"version.json": "04d111af813d8a49cd1710ff48330de8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
