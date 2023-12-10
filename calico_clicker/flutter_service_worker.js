'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d3fb3186025c3020f6b9eeff85b95ec0",
"assets/AssetManifest.json": "324d55847c262dc15eeeb776ee3a1650",
"assets/assets/images/2x/back.png": "85cda8f41a13153d6f3fb1c403f272ea",
"assets/assets/images/2x/restart.png": "83aea4677055df9b0d8171f5315f2a60",
"assets/assets/images/2x/settings.png": "8404e18c68ba99ca0b181bd96ace0376",
"assets/assets/images/3.5x/back.png": "85db134e26410547037485447f659277",
"assets/assets/images/3.5x/restart.png": "583169ac365d9515fc12f29e3b530de0",
"assets/assets/images/3.5x/settings.png": "c977a1e6c59e8cfd5cd88a0c973928fc",
"assets/assets/images/3x/back.png": "88a977a654df5a490037340f90a5a19e",
"assets/assets/images/3x/restart.png": "429270ce832c881b80fbd592e5ff1e0e",
"assets/assets/images/3x/settings.png": "21ff2cc135a762f74ed1a80aac6502bb",
"assets/assets/images/back.png": "3c82301693d5c4140786184a06c23f7e",
"assets/assets/images/cat2_32x32.png": "51fc35ec2186994c0137608c69fd5618",
"assets/assets/images/cat2_64x64.png": "f52e5e45600c63841b6232abc1ac3744",
"assets/assets/images/cat3_32x32.png": "0ddd46c65dd54534a99c15b32f898533",
"assets/assets/images/cat3_64x64.png": "e7331580cf481a6ebda589478e475326",
"assets/assets/images/catpaw01.png": "f60ba784996342d31c5c4557d47d9ff8",
"assets/assets/images/Coin_32x32.png": "bb1772bbdc77b8cb62b4e599d5c5e17c",
"assets/assets/images/coin_logo.aseprite": "992cf2a8d2aad0e603631b828fd20e73",
"assets/assets/images/coin_logo_32x32.png": "ae4e815c0778db0c74018f3bff18d606",
"assets/assets/images/container_miner.png": "b2598eaf958d9a72c8165a64f3685c87",
"assets/assets/images/facility.png": "64e9d0304e4243b0c649f07edf136a19",
"assets/assets/images/gaming_pc.png": "ffba4bd6d1168d48f0564aac0495b41d",
"assets/assets/images/lunar_miner.png": "0b480d05cf6482d519ec1ed4d356d26a",
"assets/assets/images/Meowcoin_256x256.png": "a5796cafb0b65fdabfd7adb8a2ec0cef",
"assets/assets/images/Meowcoin_32x32.png": "c892892fd5c4cafd91725a92df7dbb48",
"assets/assets/images/Meowcoin_512x512.png": "81368736a5febd8122433c7b08656b6e",
"assets/assets/images/Meowcoin_64x64.png": "dc477e9bee05c19e4ed93e5bad71e650",
"assets/assets/images/Miner_32x32.png": "c2efdf06811847924beeecc764133bd2",
"assets/assets/images/mining_colony.png": "edb77548fd6ed68ec4b67296db94c882",
"assets/assets/images/mining_rig.png": "c55ad553c22d95bf2bf68af982c7b28d",
"assets/assets/images/ocean_miner.png": "3f713340d8a27988f1ba812b90ccefd8",
"assets/assets/images/restart.png": "d3d2e3f3b2f6cb1e1a69b8b2529096f7",
"assets/assets/images/satellite.png": "9e4c59386d2d146a9046b06b196dd3e8",
"assets/assets/images/settings.png": "840fd7e3337c743046bf992ef18a10b8",
"assets/assets/images/shed.png": "6996a28d4dd655c4a77f014937727b16",
"assets/assets/images/Timer_32x32.png": "dcaddd633b8d092a35dedefd11841bb6",
"assets/assets/images/upgrade_icon.png": "8113e0715e2c4099a8a8ce9872793abd",
"assets/assets/images/upgrade_icon_disabled.png": "3b5d186c6b7edda2f3354fd5f8e94617",
"assets/assets/images/warehouse.png": "a21218dbaae65b48e33c1bd535332d30",
"assets/assets/League_Spartan/LeagueSpartan-Regular.ttf": "a81ff45ebf2f1aa10df144b7a407926a",
"assets/assets/music/raspberry_jam.mp3": "eb1b1371b669f2138be9921d6a316a9c",
"assets/assets/music/rhythm_garden.mp3": "43349edf47f18d3015a0e5d7e3354799",
"assets/assets/music/two_left_socks.mp3": "4ae5500c11afde105ee7d47dd05a3371",
"assets/assets/Permanent_Marker/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/assets/sfx/cat_meow01.mp3": "1b69d5014dca3c7b176ff6dc26428e49",
"assets/assets/sfx/clapping.mp3": "cc3fb252adb086b1e625077f72e29078",
"assets/assets/sfx/click3.mp3": "62e4474ffa6381ef29bce34e0846763a",
"assets/assets/sfx/click7.mp3": "1adb33dcda8077d1925abe31dcfab4d8",
"assets/assets/sfx/snap.mp3": "1f8e739860fd7b59fef7f0bd09c9158f",
"assets/assets/sfx/snap1.mp3": "710e9853ebf50e8ac09c910c697568f7",
"assets/assets/sfx/snap2.mp3": "4c9692cfdff09cfcc20bfb5d1fa57add",
"assets/assets/sfx/winneris.mp3": "1a30014e42a389340f3d541d8333c303",
"assets/assets/Sometype_Mono/SometypeMono-Regular.ttf": "10247d352337bba0882a595a8ee43c67",
"assets/FontManifest.json": "8c3b9befd9e005b088563e961b8a3a72",
"assets/fonts/MaterialIcons-Regular.otf": "2a5a36a9b82c9c429e9212d43eb01b78",
"assets/NOTICES": "07577fdf22f67f2c3830cb1e769537ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "359c010f9c9fccd2aef3b71bae8d0b5f",
"/": "359c010f9c9fccd2aef3b71bae8d0b5f",
"main.dart.js": "fb42ef15fc0b641ab93ae9252c870799",
"manifest.json": "a695f9ca33f6e3fcfd06f545beaecc71",
"version.json": "c992f53a6bc86ad94198829e95434735"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
