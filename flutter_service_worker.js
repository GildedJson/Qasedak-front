'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1e329a4baf3c35b250e9809de54c05e2",
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
".git/index": "fd4353a65e559ca601e322900b55126f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5ab990dbde28e461fcedd5ed4967692a",
".git/logs/refs/heads/main": "5ab990dbde28e461fcedd5ed4967692a",
".git/logs/refs/remotes/origin/main": "e32e10ca68e451a7d0c87faa6d3614d1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/1eaa22d45e7416e49388ce098cfb7696c97b72": "678cc3174b298c353d3e56a8bba1bf98",
".git/objects/0a/a3ec1383ea56613c8196ee665d6767168557cf": "74d68206c0e4eb5fc7ca97889f18f4c8",
".git/objects/0b/be2f638de6495b5a1d5109c92ec488eb3b5df7": "468cfe88a927fa0562e80220bc4d5144",
".git/objects/15/4d88c986001f59d0d2828fb51cae1e3408c91e": "1397750e9edc53f2a9c35db22d683cbe",
".git/objects/1c/1ad84ab98195f3268179bdaa95d39a475a99d6": "167877f1de8299f9eea98882601a044a",
".git/objects/1f/e5418d96940d5a5d4cce984092c8acecb1d85b": "3b9882d452f284d30a61cd5bbfb2ac98",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/25/48046210089f16f8ca893e7d5e90d5f999d196": "0eb25b3dce4c26879b037c1574f77b3f",
".git/objects/26/279c2e2347302aa189a9489c967aebf569e41e": "d2a6d314972acedb549e48880a76aae1",
".git/objects/28/148b718f12c3aa73c73b8f7bbbe1979d606242": "02ed59f142d975d30e471a0cafd03450",
".git/objects/28/62476fe11b776e0a2f8eaae58feefe7c97c868": "6bf219cfd267e5ff3fecd4a8346e8698",
".git/objects/2d/976f12f880a15237b1ed4671768d4c0f22c285": "8296f6e32a582b9a83de8fbf5fa0cc7a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/f7b833717971e17bcf06aec2c88eff3634e8e9": "4a86e8f67f2ffb7d700c25de9248b1e6",
".git/objects/35/a6427e2d7ce9690710a2290b018d842740726d": "e5b387d6405091248165f38eedd7f45d",
".git/objects/38/846fda4b5074eb6e84d468639423e75ebb59ad": "1c41b814a046c670df26fc3d7f9fd0fe",
".git/objects/42/426d7e06a0c8888615aa81e789e53d805045bd": "4aa6732fecfe2d566416dc5ad07bfe10",
".git/objects/43/59d8e5bad7749a3045cd8168d19bf0dc476b5d": "9b3359de7465f2e793d6cfb766c46f84",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/277ea0725bd9e936ad4584ec96de717e9753b4": "a8410f4bb2d9d5fd6257408574b432f5",
".git/objects/47/90492e7fc070369a11d97dc6f02ea5e10c3ecc": "0f0d59e490cefbd798f0489704c94d3b",
".git/objects/47/af79c419a48e9e61e74909380e60cd918246db": "cf1344d9e5f51ec252977412e1e9adc9",
".git/objects/4c/b78e1e03ecf25f16c7b5ec2b8c0ddbc95a948c": "2f8723162c55f43c1d1a21656109e6f2",
".git/objects/4d/0b44cdbf0ea54d40ec471673fdb065e7581ef0": "f6d0b7e200be17a14be50c274651761d",
".git/objects/4e/9b85fdb1903f3b9b1ce8d5a7806dc7333ea445": "8ea58b11b5362d3bc24db4992fb4076a",
".git/objects/57/261687ec3f94b1e9281f36538ec0e5597e218a": "ca4d8980d69d27e1fa9ba6cd12d2a6be",
".git/objects/58/c181efbcea889017c49dd4418cf9fd3cdce1b3": "edc3b4f4d2b62508855062b58ea8bf06",
".git/objects/5a/70427f6ebba6235d191d2d4f3f847efae2f483": "73c60759ab54bc0c0bf4344b33eca238",
".git/objects/5c/cbca11d92db8e8bdeb47e491967375fab989de": "79f3afdfad3293520066b16dd4a0850e",
".git/objects/5e/7b3b7dadef0102557a6a9011a67871fa73acf9": "4c5b42e1a090d7e8a7a062b69addb59f",
".git/objects/60/e092eb9c17800f16f3c5177da5017aa5a98fdc": "e4730142f4ac2a0955a920dc92ee162b",
".git/objects/61/fd8cc65c920f276c9e25c1386d6fdb901e1426": "bd67494d104a94bec28646be47a1e7c3",
".git/objects/62/263c129c0d90a0b7971a84cea19da0594a5a59": "a73f15f479e278292aa65c0bbedd4196",
".git/objects/62/b1932269f91990321885d280051786521d41fa": "cfa516b9f294cd3b417306ce1d5306c8",
".git/objects/64/e4a8189557a17b63fd7a77794207483e592972": "a70eaacf3b8037f9237cc8a8ad9f8521",
".git/objects/65/e8e568c87519fbe025efeaf671d108ef631a31": "6e20650785c829961f675174e548f2de",
".git/objects/66/182efa20bb7fac1a1bc4e6ce9f7ca776329c8d": "585f0dbf4ba5bd892f64db33cc4d1b68",
".git/objects/69/90dfd587699e4987e4d95bf97a1bd3cc7d197d": "e7c7a7ff8344c425dfe7586fb9970a38",
".git/objects/6a/4301b4f4f3e02dfea546fbf5eb287a26c28876": "ea6203d59e3fde13a9bac3d5a0795f49",
".git/objects/6c/8a7a03eaabcc8c1336336552c21a3102f71edc": "1c944fc8d2b35d8b502d91ba1bb5a367",
".git/objects/6c/bca4b0d1956d1888368f683119556340039d9b": "81f264a32200186df0e573f85afd2fc8",
".git/objects/6e/a20e415dd20b8a0ebfba37a83782cf303f508d": "50fbbdf8b392a540eb9a2f5233a074cd",
".git/objects/71/1eee320eb77a8f546e056bff549aee87f5ba4f": "a64ecfc3851b8d92aa4dbdc102ca5393",
".git/objects/73/0239f6b5eb207c42c76be7264ba4d86e6f8ab8": "ad56220a2426603243cd45be0d035fc8",
".git/objects/75/a7e3b997b0b79cd3f2c434891df0010bc4ec8f": "7456b697235315c88555323449341aa9",
".git/objects/78/2ce5c5c72bc016458cceb025203e973762ab12": "b66e3382d974d97c3ba057154ef76285",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/05175a69aba7d445cedb348aa8028565fc2d53": "279d17c1ea17c6b86dd731af8e102b4e",
".git/objects/7b/76496f4d927e3203aafed0d9e8113323d8ef27": "a25cd2e4f6cd33e5df1075b01518c2e8",
".git/objects/7c/24bd2864a3bb5c76b423b08df618239fece20f": "e98d3b6c67fa123c778f71e89e7ed6d1",
".git/objects/81/c630560fefc2509e60a1f81909ace093d9da3e": "195af1be48bb487adb46246987d865db",
".git/objects/88/66eef92233cbc34b93339f1e8e103b36ea4c56": "f5eeffacdeef3e00473df147a63340c3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/36e44ea480a037199c5144487458e3283e513e": "cf8cee74422b030777da7eae5655bab0",
".git/objects/90/d321a96d4244373690908ba37624b196cd2bed": "3f3c477902d01ac29468707a31b6aa0d",
".git/objects/94/4f4bf81806ca51568d810f1b7a6af7a8b9d156": "cbb6953f2e8e8b3fb161d07a7957f4be",
".git/objects/9d/b970dd85c047aa9f20e36322d155db2f550aaa": "2526f4cd41b2c5dd57ad043d4b400c3d",
".git/objects/9f/7ded0a42cb16c4dab6bdcf15493e6f28c2db0b": "72499d8f485fad871667df47c52752de",
".git/objects/9f/99722976effddef8e514dd5925bc99df4f0635": "89205065bac143067c1005c6c059b5c6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/3b7e9ee3f0d6ddaf6ed3e3fc65cdd7fd9264a3": "46a2fdb56920c337aba2c4b396b2c4c3",
".git/objects/a7/492b3e05daf8f6fc4a7a801f9e5a62e03666bb": "131b21b6e80fbad1dadeb2c390195fc8",
".git/objects/a7/9ce08b73d2cc9fa7824c4b303bcc9dc52139e8": "a1d62df0da4aafd71effc1a365b2844d",
".git/objects/a8/1e3c09f657a29d6102d7ce8611d79aec1f52a9": "f8cd9dcf8af1177b4520ae03da3c4b77",
".git/objects/a8/a857da961080230dbd5d57730fad74870cae4e": "c5349ceaca47befa39bb3e87c987758f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/f221bc4d54eabd6870d476413fb42755d480b9": "2e2a16184abb028cb771e8ea55888759",
".git/objects/aa/acfb5758630b241bbb20cd14784647120ca7b1": "fecd67f0a4bd3f4586b591aa620690c7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/1c24fadc6fed681ab805532ac0c25060ecb388": "958fcc8c6ce4dab15f4948fdeeac2375",
".git/objects/b1/7ee8526d93bcc4079835d60a74b6fa6aa743d3": "030bfb8ef71a5c12b4ac7d0ee65073b3",
".git/objects/b4/4783b54442f14b895bf8531ef92159cd6bbe7d": "3b66b2ee5212501a86fcb9f47408422b",
".git/objects/b5/4ba32666541ad8e5d93d5b5e2f21661fcf659b": "bc4d39442ee3a3346cf63f02ed9b12e3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b947e6acda06dd5c545a2fcd506900500afaa8": "1e006ec389e9fa4ebe237d10050b3a15",
".git/objects/b8/8e368973676cca1a6d49880144cc3bb5be5683": "e77cdb97311ae51b4abbd594787d7869",
".git/objects/b9/5907da35627c4bff2c4c78ce986d569804fbd5": "920e839efe54872714cb20531394e24d",
".git/objects/bf/e83004f8a829e7fca84200624d3396b2938475": "21e6d47792272f887e92c87aab18f083",
".git/objects/c2/a4efedb73fa725d629fd613be4195acdd17a8d": "a28297ec5c3f36f9c61ca1cd29481f82",
".git/objects/c2/cc5344be772e573cc9d53b3e20a74c858565a7": "835f0e43df1dfbfee1c3465845bb666a",
".git/objects/c5/92b77f750ffffda2811a29f9e9a7466829e06c": "60b586b2bcb59304700c5b5e3b25bf71",
".git/objects/c6/12512f4264c1cfb0bbc7c3dec16f66fdb46b5a": "8a218c3daecd44bd8af5008e8852c934",
".git/objects/c8/5460971dd4c566d0d323afeb97bc501e1fed3d": "cd51eb66f2afb3d947352eebfd533a28",
".git/objects/c8/d477134715f9b655bb99add4018485cb686e0b": "3e38c28931335ebe3761dac4dc98814e",
".git/objects/c9/260c9e9e9e2638d4fdac869149b14dc3248ba0": "638aa9dcf7fbc8eacad123d3e3a380e4",
".git/objects/c9/42c1925957f5805a7f9d52ccef1848d72dccb0": "ed5836eeeaa42ba4933c901b8477b5a6",
".git/objects/c9/8a75f9cf281965fc033e59d9da946684a1acf6": "766390170a0af5d545b641543476aae4",
".git/objects/ca/2eac1c8af15f97378b926841da125198dbb5d8": "767657cf5d6a40575a624b642442dc12",
".git/objects/cf/a7f6066162263859465f31224fe66219a25259": "8d787f55e8e12c1cd4c1322a808a0d5c",
".git/objects/d0/3b68a8653adf61aab48e7629836b3e34747766": "8d75c13dc4febfa473799ab8a52cfa9a",
".git/objects/d3/0afe991c28655f5e4025ad77cf44eddd7bd479": "0b10272bfb33471d061e619dc653fe49",
".git/objects/d4/4c93e6ac674bd5ed9e8e84eb21c80fd35f47ab": "694e457df4e59ac3294259688a2ea02f",
".git/objects/da/4dc5b5f01c942a575911222eb1033f28dd3236": "099eeeaa873a63606e5cdaa6e77dd8f6",
".git/objects/dd/1b84d218433b85cd3a1d415dbd35a68fffad1d": "bb7f54e07ca8aff774262aece56e52fe",
".git/objects/dd/32886f0ba3217d9062359c29b4e685c6c05625": "50edd87df0f8dbf728f51366431710e6",
".git/objects/de/4af3cff8d781dd163e55b06691c803e1a78b1e": "41ddb2951f10cb0a3c23684db422edec",
".git/objects/df/e548d74699f8e052f8fada4d00e283db478c70": "ce452ac4b71ec8c61aa52b3cd3bcf686",
".git/objects/e1/266ee1e6cdc6799c3cb962fbbc64f1d3892471": "6f3444eb3bcd9257cc4c243f23aae2be",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/801840157cd238125e41a1c768cb3a73fd06cb": "f02991beb2404e732ae8404839eda2ab",
".git/objects/eb/67f8aff9e7520655b773a5a2f66bfa05fa4a64": "95246b4018f019f774a0d0b34a81d6b8",
".git/objects/ec/aa9c0b29125f0a597e0db7def2ee2baedb1149": "49a797b7064e3439cbbd22017447fbe0",
".git/objects/f0/bcbe961ed9b3fd903c2a521da37b7d7bc4332c": "e0c92fcff092840b12f8cff8a3cb8ba3",
".git/objects/f6/82c7ec3cb867613a65f46a1a0de1431f2b9ace": "d79c119dc212d8aed0286357c4f057c2",
".git/objects/fa/265b52df07b35fa5925074b459f0b7c55c93e2": "f3de847517aa00456f2196f10460d4b9",
".git/objects/fb/7a8aeb43196f7689c831e5c0b9526d6fc2fc15": "0519db1f65423721eb73c44a0b18e55d",
".git/objects/fd/4cec9682dd96ec8db8f6e35226f607a7a3325b": "d5e1dd9f0740f2d0b937791260d85500",
".git/objects/fe/7655b4d19b4c90837a09c7aedaa506053a450f": "4db09032df6d8eb180100526e8c1cb11",
".git/objects/ff/cbffdbc6bb3be4f669da96c51d2b2b78970b5e": "fc40562124f9d2567058bbadec64cceb",
".git/refs/heads/main": "e18c08317dddd25ecf5f702c5ada9075",
".git/refs/remotes/origin/main": "e18c08317dddd25ecf5f702c5ada9075",
"assets/AssetManifest.json": "c7779018ca522d420c35042620870a4f",
"assets/assets/fonts/Vazirmatn-ExtraLight.ttf": "0b05db45958f4ca70792ea093c698fa2",
"assets/assets/fonts/Vazirmatn-Regular.ttf": "e8e9648f5b8fc824da409750ff331221",
"assets/assets/images/iconQased1.png": "7cd42a66a968319222849044eb1d01f5",
"assets/FontManifest.json": "cbb1a607a0062337cdfa8bcb6bf0eb45",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Vazirmatn-ExtraLight.ttf": "0b05db45958f4ca70792ea093c698fa2",
"assets/fonts/Vazirmatn-Regular.ttf": "e8e9648f5b8fc824da409750ff331221",
"assets/images/iconQased1.png": "acc5c07c84b861233701e1d469c2e31f",
"assets/NOTICES": "d152570dacc486a43268df32d8a8c523",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "731e8dbf6774be26681ee36f86b13a44",
"/": "731e8dbf6774be26681ee36f86b13a44",
"main.dart.js": "0e3567212e50c0f92c849dfdca671738",
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
