'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "954f38805be410c1307d7cfa3b3e1f82",
"index.html": "03956ce3cd4576121576cf1009dd0156",
"/": "03956ce3cd4576121576cf1009dd0156",
"Dockerfile": "c27b628fbcdd8bb0df926775daaa65b5",
"main.dart.js": "406bbb66b7bfbb0b86e33a4e3db70751",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "955ef6650b6947502d56cf9b8dcc6199",
"icons/Icon-192.png": "974509aa26dab4aa8ea4e9494b31dfcf",
"icons/Icon-maskable-192.png": "974509aa26dab4aa8ea4e9494b31dfcf",
"icons/Icon-maskable-512.png": "20efae00b973798062f1902032a056f8",
"icons/Icon-512.png": "20efae00b973798062f1902032a056f8",
"manifest.json": "122400abc238b28ff6196c9b835fb126",
".git/config": "d2e44b6dc8fd0c10a44bf6164c56c17b",
".git/objects/0d/06a1d5b67f5ba7a8a3120bc992f326b3f62d7f": "be489ca5aec5540b6bfeffd86da58581",
".git/objects/92/6cfd5a50e5b45b47688d9472470c1c0158f587": "43db5cea2a57cb2909b12d089592a7e9",
".git/objects/3e/853fa018771b30f6c1c7cc0b2931a64ddbc03a": "538c124c6999d9d3f3b6777933362d2f",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/35/6eebfc01f460add89c501a93a6b4d6b6d6e09b": "5a4a0576edea196e7541c73bb5a3848d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/c710a12a5601b7845ef5cdcd850d842f1f671a": "3a75736e27165851113bcc4c40f99a01",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f2/67f6faf387762882be7cb9dff54dff36c2f948": "42af2ace2a286b9a8e14f277e10d15a6",
".git/objects/ca/89e8e0bacd768b6370d4845be87f67d4083e06": "ae81bd5d5a0bf0d7165512faf7188044",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/42/b0247c1ca98ba5ba5ec184ffe751f4b1f68f1a": "82925a9121b78db48787b79f2957efdc",
".git/objects/45/ff10467322bea738ca92b846e749cd9f0bc22f": "45902fe1cee3fd9e18963fc793448ab7",
".git/objects/80/7f3e7e78ef7b3a36e3d44d04f1ec93232f4124": "122c6902003a81cab5ebeb13be614a9a",
".git/objects/28/2a61ba22ec02a3c2f2d364c6231fa7dd39c3e9": "d459818f12351ef50c5ea0744178ba70",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/75/2130f862d51bd4d140574eef098a1ea9ffef53": "9d587f8b5f720cf0876a4656ebad10ae",
".git/objects/81/485ee653518a9ee02cab41881a76d9916068ad": "e8559506166f6749401bc8d586b3ad82",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/0c0e02fa5ae3eb75761345778f513c706be52a": "baf7d5f33da89cc57cef3b055ea732dc",
".git/objects/5d/71012df322c91dba7cf39896c3a6aa554c78ca": "f536998faa77b577d76beb9e5dc64c06",
".git/objects/5d/50a67a1fa4712912c86dc221175cc278d65c3e": "9787e8cdacc343a0d7cba979ce449cca",
".git/objects/65/e597a474bae35d30078b9d9bbde9f2bf6e96ab": "dbd15711f8dafb5da6458bf5f2209a4c",
".git/objects/62/c86b1712268d2cab6113751ee26553f73dc8be": "3e2686a75473d239d630795c6b273352",
".git/objects/54/d419dd458945f1e1fa059e33089e9f9286fde5": "46637f0f3030c5069788c6e401cdf599",
".git/objects/98/ff29736e8b1abbb08a0c1e7214eaf871f4373c": "7eabea4a8531b2b29ebf3d7203d93276",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/37/0e014e8c0edd1b8e32d405413240f9e874ec63": "38e286c2dca42067a436ddef53dde1f0",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/6ee00750ca43ce65d13dc6c60b90e22f9432a1": "3e7363835c1e51e0370276dc50dcbec9",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/f2cf68d365261efd66e6017352f6877a438b33": "26d4dcd741d136c73bf15b2d33c28dda",
".git/objects/39/ff4c64bfc086a4da93381c5245563db23bcac3": "35d2f87c4649bc2832f5b658fc6399d9",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/90/4906cbd87addbff5044d3d7b34ae2f8874afe2": "7c45d76dac6ff02ecb54749e44b16dac",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/e74041440abd72b263ebd1b98399faaf5365fd": "2c420a4ffe98b93550addbf585f20833",
".git/objects/ba/b5beb774f4de6a2413f2f9fe9f6f66f12232ae": "787437093d6ed053619eb08343af70a8",
".git/objects/a0/99f639ef6309dd03176fb7c2237b119b9bcfdc": "e919cf91ebe1d674437e901a7a831d3a",
".git/objects/a7/3995a3be07067953471e7abc01c158b163996d": "b800f3ec0a296cbe278265aaab048304",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/dbd740eecc3a552267bd1e5082b3c2dcd1068e": "fe7dc3b9659e70252ea6e7216e10bf46",
".git/objects/f1/eeb7e278491a29da6ac80059fbdc9ebf79f21d": "1e04fe066cd048e61f43acbb3e171ecb",
".git/objects/e0/0922085a665f617f6e92fffb232fdbabcb7ec2": "b9ed056db857c9c328f0a98753d64765",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/175e5645f2268a0a47671900be79ac1f09569e": "899590fcde9b17e47026ad0030ba880c",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/4a/c2438badce2d6bf08768335d2f23a41ecc9e6e": "a9ef17203a546d0cdc74e3de64d76f12",
".git/objects/15/d4cb8c2c18af814bf9c5cee2aa424cf7f98fb8": "2ea0f1cc28cd4342b4861d2b9813792b",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2b5fbf4d387199403eba0dae8e012e42",
".git/logs/refs/heads/main": "2b5fbf4d387199403eba0dae8e012e42",
".git/logs/refs/remotes/origin/main": "efe41d477867c96c7bc50e81a696da35",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2c3f9a6c12d01aa848261e9a453f76ff",
".git/refs/remotes/origin/main": "2c3f9a6c12d01aa848261e9a453f76ff",
".git/index": "73d7fd559f18e8398fe34b9dddfc5d01",
".git/COMMIT_EDITMSG": "1c290f1eefd9655431d925536893aca5",
"assets/AssetManifest.json": "9c13d400513432d6cd107326463b2e6e",
"assets/NOTICES": "415b4ea72113f9e9787110037f29de35",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "4761bf6fb464f3b928843faa89b11d37",
"assets/fonts/MaterialIcons-Regular.otf": "6fc907a8681afb920caf57363fc84a0e",
"assets/assets/demo.json": "eadae35b9fa2f71713c2d01c27555589",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
