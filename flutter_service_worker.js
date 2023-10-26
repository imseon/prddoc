'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f65b6cb1b8808d9694fde12ba713ae45",
"index.html": "d34e5f447e440066e63ff914246d4ed4",
"/": "d34e5f447e440066e63ff914246d4ed4",
"Dockerfile": "c27b628fbcdd8bb0df926775daaa65b5",
"main.dart.js": "569e6349e4518bbd99468d886a9a1241",
"publish.sh": "f5007e3cf9149a917dc6fdac3a30f934",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "955ef6650b6947502d56cf9b8dcc6199",
"icons/Icon-192.png": "974509aa26dab4aa8ea4e9494b31dfcf",
"icons/Icon-maskable-192.png": "974509aa26dab4aa8ea4e9494b31dfcf",
"icons/Icon-maskable-512.png": "20efae00b973798062f1902032a056f8",
"icons/Icon-512.png": "20efae00b973798062f1902032a056f8",
"manifest.json": "122400abc238b28ff6196c9b835fb126",
".git/config": "d2e44b6dc8fd0c10a44bf6164c56c17b",
".git/objects/61/f23a9076905dd547a4f30904a5baff58492ff7": "4c689a826e38216d73b660a87cda80a6",
".git/objects/0d/06a1d5b67f5ba7a8a3120bc992f326b3f62d7f": "be489ca5aec5540b6bfeffd86da58581",
".git/objects/92/d61b02c0ae4db44c3989c517a2785917a1248f": "c52e6955aad2e0928756e8f91e4e631d",
".git/objects/92/6cfd5a50e5b45b47688d9472470c1c0158f587": "43db5cea2a57cb2909b12d089592a7e9",
".git/objects/0c/b5338e972042b2f78ddf44043d819c5a1e8188": "f8d9a1f72f96b69b87b7c5433f057e78",
".git/objects/66/dfdc9b055edf82c0f28bae002198d8e23e6d7c": "d02fc2041cf1552f719a059cf41b1871",
".git/objects/3e/a6ce0ec44d182a539ea0c1176db79f0a5e41e0": "0c4cad4d20501fbbd360d05735451896",
".git/objects/3e/c54e60fcaa0bd77536111e12a741d1fcfba202": "b9b2682b3b60efddcd30f01215a7fd8a",
".git/objects/3e/853fa018771b30f6c1c7cc0b2931a64ddbc03a": "538c124c6999d9d3f3b6777933362d2f",
".git/objects/68/74b09882ed4d60e2dd1e343f60edd8b4fb949a": "0b5aa066de35f7eefea4337e5adfea1b",
".git/objects/57/1eaf1266f2eab35c59ac6c3d5af1c6f236a486": "8130da38b47203e815c141368698fc6b",
".git/objects/57/6e61300574a88063bc7a6995219473a652f217": "f482051528f955d1e88b26b7d8cbe371",
".git/objects/57/460daa31d15e117c698030209e6731b8547e7f": "a1aff313a3d9c5af08272989af412469",
".git/objects/57/e19b5a8e77b123a7e5a1a4d6fc1c2f10d729de": "a58768061d3c601a2cfaab1b2638dada",
".git/objects/3b/4837c4ca3af2814e8546ffad5514a02a139303": "1309b13a8548c2e04b87fab127f230f8",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/eb30e364046e10e42374c0b39c2c8e7580b6cd": "253e431d4f0e7546db83a28c37814d34",
".git/objects/6f/12aac94f039eddad6470f42915c4aed123121c": "b5f967782dc2fcda6f194c36a3d0e884",
".git/objects/03/24f12aba59632a9c22d8e3b1d457c1736bcae8": "66f9e3247431f9893ef274864d161b6f",
".git/objects/9b/2e45c1adce99e789350577b5e567c7b4c159c4": "b4887d6dfd68243f420a1e05695592c8",
".git/objects/9b/8f29f96a8a6c7d8d721136366f6e86c053b455": "04e64de88866e4609b457bfc8f5f93fc",
".git/objects/9e/b83ec219cb117a8f310e4bdcec90be1db9cbb7": "497dea5e07090b88a61c0bf0a010f59e",
".git/objects/9e/3b130de7e099fca68b48d83a0836d5e92a14a5": "073c2e955ff68e7f929233fbecab1a3d",
".git/objects/04/410e705d71a95dfae18f160af630450fefd5a6": "eb94000df69dfde0f52234938ed8a91c",
".git/objects/04/d16cd691bca09d1789207fa89b451ae4172493": "cb0ace8d07b3dbe25477b1a360a73e94",
".git/objects/6a/93e06ae1173375a58c4c18e46e915516227c4c": "ba0ec7989dccf46ee50664e89f98fb68",
".git/objects/6a/37d187eef463bb033690f071845a467fe2fcb0": "e6a0f8a4dc467d0c4d52aba16a670b79",
".git/objects/35/6eebfc01f460add89c501a93a6b4d6b6d6e09b": "5a4a0576edea196e7541c73bb5a3848d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/05531a8c3789fb26bfdfd99242a296a79994e5": "e75a546bea6394e1e17843552da96411",
".git/objects/69/baa416c7208ac7e1d00990bd8b2277b9efd491": "10353fce63399fc80c3c4d1097ddce1d",
".git/objects/69/fd1f1dfd85ebedb7f2bcac6c19cc40c57f2082": "8ebdc10d1cd079b32851bf5613d6ffcc",
".git/objects/3d/b813fb39aa2397844acbbb0f035ee248bed94a": "9c35234800e49a9921418d674f1544d4",
".git/objects/58/1f1698a6faaa7392cca12d7f3fc12d4349965b": "190c2c3d46f4ca1e9b73562633ec6fee",
".git/objects/67/4c8228bec398e9512d9726a190aa4335619452": "1c504846eb08071acd3b08fdbebb5d44",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/0b/9e3958e2371917150639edd4f352db00884feb": "2e5ff32a4dae6a1f0be5ed5f57698e57",
".git/objects/0b/31c073659202b9707dccf199bd7c9104b12993": "eb6e2380350d97b22e03f267109b05ef",
".git/objects/93/135943f493e16740d1472b29ca821ebf8c75df": "22f0b120726e6497b53ad23cb95adb6e",
".git/objects/94/ca8a85d7465e6f4084418e7425f5d486056cd7": "703b44f9ba2bce613bb7ba8f404a4683",
".git/objects/0e/312a778c9623a7ad6c6ef41282a9bb2f2ec211": "2ffa52a66f0f1563e58fbb845151a33e",
".git/objects/60/a355e4ff29995f868a9deb8aff49a4d2030dc7": "230b7042cba194011cc6963645e93b37",
".git/objects/34/ae74e7b27b2e1b56933ee0c74b741996f61990": "2723730656762ec2990d7f36976f0a1f",
".git/objects/34/162b1d19c46b4013663d706d38f052028ba95e": "2aa1ed82cc0a6ed6d40c33e4a5261a72",
".git/objects/34/78660e391b82ba91faabcc16229672ef27e5a6": "79b60f640b05f6e8c3bf71fb491c811c",
".git/objects/5f/c5d3b7a29e0b1d906618d9c9cd8d8900953d2f": "62e9d8d3fe8e582285a8d0360ef63a4a",
".git/objects/33/b2530a746a22a290635b2326389871f6188adf": "911b0df4a317ef30969d28c2c9be6b2b",
".git/objects/33/147ecfc4e542f6e5474490e9be87656ef13b26": "b62a4dd00cc37adb95a2f191ccf220c4",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/02/8dff408cd9dd9956998a4754f7155b4effaaad": "c8b774fe2ce79c22bd318655428bbbc4",
".git/objects/b5/a189e053bdc354f509c12cf60b86e74df4ff3e": "856355d3f09720661f25cba505c7329e",
".git/objects/b5/e9c49b778fde03db7d2a73e5883aba00a14581": "08d8f13a09d470e894718a7b236e0bd2",
".git/objects/b5/8147ac43df80308fa0cd5d7e0745ac9e50a811": "bc580d7e75740297483d3b27104cf466",
".git/objects/d9/a3dc2a3c9eb839039ba03ba93f9d06ce367500": "edede9eeca357b2e4a460ac826d7d0ce",
".git/objects/ac/7276018aaf70186f33c5f821e931faed62bfb4": "3c3ca712ad2beac338b07c4b1600b319",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/6e335d97997da0128137d2ec423c502722a0c4": "bb96110f1fe0b32de28a2134bc72263e",
".git/objects/ad/789bfe91f643e9e788a1081fddb80ac3ea483f": "4498bf60547cb704216248d5e759b922",
".git/objects/ad/77d383eef66ce437e885c4831b04c5974fb80b": "8d74e4185d01cb4b22bbdb3e93f76eef",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/12e63c04e7c8c54955c7377aecacae2d3bfec0": "abde9cc4eba1e75cbefbe9f2e4aebde7",
".git/objects/d0/5206cf3fd084cc6f60ddcb4a420c990c9bf420": "80d62f6f41e9b7318251fb9f8e3833fb",
".git/objects/d0/10010bb407a90d2e4100251dee1eee8bcbe294": "cc7c16b1abdfd322f7bfac439da579ce",
".git/objects/be/70c597b7618d923a86e23e7ed5529c0e40a827": "fd23715086f0879f1d18134aaf45041e",
".git/objects/be/0b62d9c426a22af4974c245dd08f1a3466e670": "0857cb193728273f38ddb8299e5563a9",
".git/objects/b3/2437e360c2845a15461b339e433ade25cdc90e": "128b12f35d447988c82f499d4233f8e3",
".git/objects/b3/16ba4d39aa498cb13c4c1dbfd11fe774b5a92c": "62b40b5d81dcb5bd6b20e9bca65dc15f",
".git/objects/da/7dfeb4fb1fa68ce583b91ffcc1a3acb713c4a1": "c4bfbb45cbb23a8b7a554e8ffb6c43ad",
".git/objects/b4/da6c67fbd54a6448b4cedbc224465d3dfb141b": "513e22c1eb8258a1f56b2962917d9b74",
".git/objects/a2/d8d71ebc7b6cad478844b79022670f5c0cbb0b": "271b9791675eb0bcaf486c850c483d36",
".git/objects/a2/0d504ec54953862f732819e652fd7b2a089274": "f6a731084063ca965b3bece1126d5094",
".git/objects/a5/42a607432c19c967cdb7ece977a44d219c59b6": "afacf550cf00347c48cd0c7a29469b2a",
".git/objects/a5/d34b2605218e65a8982a0ff678d58540977b10": "0d2ec154cfa226f4b1baa15d960f0d64",
".git/objects/bd/902738806e13f9774ac44a4e6717f05d43ffc7": "4156ef4e38fb4d1c276e482d82598fee",
".git/objects/bd/9e5d16957e4e06bc504af9576d921f38998dd5": "64d0b5063d7417fe617225ac5d3cc10a",
".git/objects/d1/d2cedc10c0f7d5a5180d4b5a7223e8e44270a3": "07d451416057bf3d250ef7189fbf317a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/8358b6d522e9ec91a8a8f296555c0e775ad22a": "d6628a3ab6702970c6e1884d3cfd6aee",
".git/objects/d8/d7db65c9b8de1a719e477003cae7a57c57a443": "a9c89623730f42f1d59f0dfa44fd667e",
".git/objects/e5/d24b400f61abd1c0b39f588ae1707ac577615c": "f3ffe09708114978eefcfaa63e7ca554",
".git/objects/e5/0b64c0d24d7924eca419c3a36409d0e7b6c23a": "7cedab59772bdd91b9120b400c555a75",
".git/objects/e5/f2f5f7e1beba0720e17f8b295418c3bb919986": "81662caf8297c27090b7b5d3d89aea84",
".git/objects/f4/5da6a5f8edacef9e9066caa3a795277fcc1de1": "6f0187ec7a0d39f2e05a8ab07e8ba81a",
".git/objects/f4/e8985d7fed5a0d343c958b8e98c207207abe54": "15f7f251a7eb93404665f8a5a42c61ae",
".git/objects/f4/9cd079bf7011568ea90daf17a2746c913ce14a": "dfaddcbbcd6f8b9365a1b9de639a3557",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b315ba7cb588a4aa4c2291184f3c79b6a37128": "21bccaf00a4750f5bd24f92acc84a925",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/c710a12a5601b7845ef5cdcd850d842f1f671a": "3a75736e27165851113bcc4c40f99a01",
".git/objects/c0/d1e460c3215455c63a7dee443ecece94b9d489": "55b0735fdba07b3914a4a9bba8aaa101",
".git/objects/c0/95ea0b91e9aedfc2500aedc0a5c51ce0b36583": "9df0e22931fbbbcf9aa7bf5aa7ff76c2",
".git/objects/ee/8ec40b74b8eb97a55c010087e19e8d959e6781": "c819a59f47f7bbedc3b518e66235092d",
".git/objects/ee/d197676137f07223a325ac9dbe01195ca42155": "63c8461015594ea4e7f6651bd6a053ee",
".git/objects/c9/97e3f78e6e5b8d81b3f4a414a43364dad85ba1": "4fd89ebd53b4caa68b18a3c5b704af2f",
".git/objects/fc/c7cdc758d9848f8d600d21674d173cc9f661c7": "5e96d373aca9b5cab424f0c8f121fcc4",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/129991ff60b7425bb0ad0292ee8ce9a7fae3c1": "a43f4a992be018064868947ae9e5fd89",
".git/objects/fd/52404e7a73583c31ec637d2bfe020d4618ced2": "88c01fc4fcfb45f3ab21d667fa4fbe73",
".git/objects/fd/af9b5db85fb589fe00636194e5ef979216c557": "098ec000f6164eb320cb3e41d4a259dc",
".git/objects/f2/67f6faf387762882be7cb9dff54dff36c2f948": "42af2ace2a286b9a8e14f277e10d15a6",
".git/objects/f2/0894bc3aab174bd15746e4f997085fe7d44fae": "9278e88aa34b9f2641da1162ad77391f",
".git/objects/cf/cca20bfb985231d4c378826ecd1f988f76ff6b": "9fe6669dcbf776452eb70da8cfe72e89",
".git/objects/ca/89e8e0bacd768b6370d4845be87f67d4083e06": "ae81bd5d5a0bf0d7165512faf7188044",
".git/objects/fe/d2e57f41df6d41cb3400a0533a493fc01212ad": "dc64b27b728144f7658ac2562974d03b",
".git/objects/ed/9e6c7acdde120153b5acef664b87f0241f8b73": "4ff1d5e1103944d7bbb41d15123796a5",
".git/objects/c1/99176da97ff2bb7b2f41ed4fa4ee4e16fd238b": "294c45575b5a668ddc60914744b95056",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/ec/8e7ffc2b5564a096dc466da9d5fad9f3f94187": "efa127b6c9ccbe81763fe5d939dd9b28",
".git/objects/4e/6c1196ddef23d6c6f16b09f4345239edbbf558": "9b268ad4fffecdf7e25f83dbc6b19b9a",
".git/objects/20/ecd0b2cb901101fffa26415798b10130c9bc48": "53a4f930c790edc416bfacc416441091",
".git/objects/18/d1105b4b3eccbacc44d7b6ad88628c3039c792": "96b8ef9de271b868b69c04fd01e17dff",
".git/objects/27/c8fb9f52808581c65cc54a61e7b47000bb20d3": "01a73dc86b2c07c39ce35ad26a5358d6",
".git/objects/4b/f6942aee8fab0de8f2154fdee57b105ee1c3c3": "4cc06b3e1294ef0c114718b9dbf75dd3",
".git/objects/4b/09355e801ab17dd640e4da58543fc8f5c29fa6": "2089ebc253b03b3c1638c84fe85e5ff1",
".git/objects/29/68a30b6f4ed50a4cf939751bf1002ac4aa2c83": "84f37c6b08732ba691d7a74bf7ebe281",
".git/objects/29/e8396b203251b4d88f300428c7e9aa1e7d5948": "f04a19669efa888ee023e1bb98a004c5",
".git/objects/7c/51c99175c3fe539da7fee3dad776fee8f97f9e": "38d49c9d415c87b91a89180d5b70551d",
".git/objects/7c/ec5e25a519bad39922689df92939475a4bdc0c": "2b6983c29507eed9d110cf8f2954db13",
".git/objects/16/19e1ff37884371c5bf7b40a57b7f9ba9a45bc1": "c1d163c0029585ddb4dc8108770df9e9",
".git/objects/16/72c2cdfbdaadc11aef7a386cb4bd7aeb8c764f": "4c022cca61b1c01337118e6b6f3f487f",
".git/objects/42/19dfbebec9ff6b6a2cfb80175a8468ea8d5e0f": "a8b2c5127766428749dacc031d52838d",
".git/objects/42/b0247c1ca98ba5ba5ec184ffe751f4b1f68f1a": "82925a9121b78db48787b79f2957efdc",
".git/objects/89/6b58ef41074c1297f4d9a5f3630a14e282e67c": "37bc4d70a088110d6f0e93d3d15c298f",
".git/objects/45/ff10467322bea738ca92b846e749cd9f0bc22f": "45902fe1cee3fd9e18963fc793448ab7",
".git/objects/73/3d184a3cb95524d2ccfd3c6caa95e088535c70": "692739c33dcf7830ab2cbc42efe016c8",
".git/objects/80/7f3e7e78ef7b3a36e3d44d04f1ec93232f4124": "122c6902003a81cab5ebeb13be614a9a",
".git/objects/74/f540f4a9eb5fd3cbfb626c9b3c2c1bbe0a0981": "3607e0689ca6248d0b409e4e644092c0",
".git/objects/74/aab73e6313c7a6d75bd468532749328691f097": "feae3d02f17b971b322a24d8d858d262",
".git/objects/1a/b34add4b1e447fa888aeb2e95ad811dbd3b99b": "203ab6746ece9e29ebb46745088cc1f0",
".git/objects/28/2a61ba22ec02a3c2f2d364c6231fa7dd39c3e9": "d459818f12351ef50c5ea0744178ba70",
".git/objects/7b/5a223183bb27ef921a047252bc9b9fa43c6bf4": "714d22c4bbf14acacbd12d7da03518c4",
".git/objects/7b/09abef831391dd675ccc4cac0c7683a1f03872": "de8a4fc841df8ee5f3bea2c3b2f24239",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/9afdd35bfa38f41466100b2fe3c24e36fca4b1": "d4c27e85b78c84230dbe7e68c2051921",
".git/objects/7e/6f45d83d064d4ffaaeef0bd225632c3414e74b": "062120ef307b21f0ac85938b19620a7b",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/21/8b3b2251386e45aa63905830ea2837c568cf29": "b032b7eabee1c23e3504430c500fcf92",
".git/objects/4d/36b5de93445c4ce420348157ae9015f9df17f6": "7c27898743fff4b4c75a7aa7040b2881",
".git/objects/4d/9289acf0bd0cedc5c4df0691bf349895373343": "3549a0b24283ea61dd117eed6b117c9e",
".git/objects/75/0db227826855abfbaaa4c6f15b6758249e9b65": "ec2f72a5ada847ca614f2e73542d992d",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/75/2130f862d51bd4d140574eef098a1ea9ffef53": "9d587f8b5f720cf0876a4656ebad10ae",
".git/objects/81/485ee653518a9ee02cab41881a76d9916068ad": "e8559506166f6749401bc8d586b3ad82",
".git/objects/81/72a43f96aade3fc1a9e78ecf514d8f19443447": "a54cb0fa6e1f16ad017fcb66d560b3ab",
".git/objects/86/5d0cc1091bdeb42ade0d7e3e35710366768e05": "f89c4dd1da94c37175a7ca9d9e90ccec",
".git/objects/43/3db8b020be46699807b3f7e63f325540a10cf1": "6e6f84aa1e91e591c955278fc449d2ae",
".git/objects/88/78fc8ccc3fc2a32a2bbb4dd3a21c05f564d0f4": "df2b3d4f3038b66a79724cb4056edc27",
".git/objects/88/d24522683dbcb3bf8e5692dc5caef08af24083": "48f265e2358602e7cb4b2d5ab03c3ecb",
".git/objects/88/49b61a3f4b2b5f10a8f0ef7b15d5dede2e00aa": "d29fa3f7daf5fc637ad089809d3fd13b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/0c0e02fa5ae3eb75761345778f513c706be52a": "baf7d5f33da89cc57cef3b055ea732dc",
".git/objects/88/19471d37270bc859e92ef40c90ab4a85b7f267": "d83cd1f08050e863a6604c769b3c4ac8",
".git/objects/88/51a45eb14e3a00b26ae3ffd46b2737eddccd8d": "045c764513878df9f723a6de40adf20b",
".git/objects/6b/4e375d0b91bec7791a46508332b8959608d4a7": "8e16540b81bbb977e16035948b51163f",
".git/objects/07/66bf5dd6b616213b2d71a265ded762162737c3": "a2652b8cc55b105b6dd3a599d236fb6a",
".git/objects/38/ef997b4c5bb47f08fd698d5c42cbee36ff8ac8": "661c7af024557c35f3b8b7c30fc00b11",
".git/objects/38/e3b786547c6d504ed6aa8c8875680bd695a485": "5a0c85b4ed26102b09637c67d5b95329",
".git/objects/00/610da1e9d51d34fdf4d3b29bd96275485959db": "75a2f2a963da0277ad70093e7941dc07",
".git/objects/9a/0a8e96bebc01dd9f36e843b490d55022d01880": "d5797a4c39cdd1b7a53d9889b9e9bb64",
".git/objects/9a/9e5c202bbc8badabfe720783c27924256167b6": "3d1d02508d6a6e9bb0f7afdebc2cfd5d",
".git/objects/09/61c98298efccaf2237e26d2e1744978f7ba503": "95915f756522f908b4bdc502c4dea425",
".git/objects/09/16239005d100a6726d73f5afdbc6ad6c4bcb0f": "d9b8e61b33e83c8698e3e1f20160a2f6",
".git/objects/09/34db6bfdb1c13fb30a9ebed9c7137b705535d6": "70a61a5530843e814774ba98b1774e44",
".git/objects/09/fc7304971d4c523c198c4b9831d4fccec3f11d": "6fc0d6dd9ad75fd8ac756128b99b7f8c",
".git/objects/5d/71012df322c91dba7cf39896c3a6aa554c78ca": "f536998faa77b577d76beb9e5dc64c06",
".git/objects/5d/fa77e1ebf01fe63b5a60513bd849273e43a865": "c10891a2adf9a781c8b286e85b5b1388",
".git/objects/5d/50a67a1fa4712912c86dc221175cc278d65c3e": "9787e8cdacc343a0d7cba979ce449cca",
".git/objects/5d/d9f56463e52c723d339d9549874af64d59213d": "e4473e2184697a3305c5cf7baa586c43",
".git/objects/31/d67f28647bb16fb90c2dd82fc35cd683d8f2b0": "7f11b88765bd5851d4946873f762283b",
".git/objects/91/451f477d9390af41dc8cc1fc14e08230189fd2": "689386d8e497a9a063853beaa2150d56",
".git/objects/91/87d39966e19f9e6b50d36c6bd31dfef15e64d2": "ed7e7fd9aeb9b4df23311797dc56b8d5",
".git/objects/91/b59d0c8a88c5655c6653ca606f5357b698e006": "777b41668748488b28d12f7300c5af7a",
".git/objects/65/e597a474bae35d30078b9d9bbde9f2bf6e96ab": "dbd15711f8dafb5da6458bf5f2209a4c",
".git/objects/65/8393acfa61455637d8d0e83da181116bfbd013": "02001e823b08dd00932a540f8e8fbe01",
".git/objects/65/e2a51cc41f99998bc3bbebddc03481a2591c4c": "f19a4fb5c30351a9e1b5fac00bf35b4a",
".git/objects/65/50e5cd142fd3241bcb13a8f097cbdb54ebf8ad": "22573c0a42c637a66da145eccec3a523",
".git/objects/65/a2daceef272272945da3cf5fd7085658b496e2": "8f2243ed20917c6031de4f5bcc91fb83",
".git/objects/62/c86b1712268d2cab6113751ee26553f73dc8be": "3e2686a75473d239d630795c6b273352",
".git/objects/62/5b0abffe8afa08fac8c91429653d7c3fbfa6db": "c1a4927579b85b589b8d788719d3809a",
".git/objects/62/a9fc583aefc6f8a9d932a3fb0e680df0c7a8e3": "e73c998abe11959511b57132dc6a9488",
".git/objects/62/17a14c7c654e55d556ada8003ccb67e62de78a": "2f7055ded69284ae1003494075b503d8",
".git/objects/62/b7fa72dbbc8b1954f458287c10330172475c6d": "e10c0275e884285d9b83ee989c5d2fe3",
".git/objects/96/b481273e86859582ac5fa39a9fa96a8b6142d7": "a62d651d7d809d81de0e96ede2191bf4",
".git/objects/54/d419dd458945f1e1fa059e33089e9f9286fde5": "46637f0f3030c5069788c6e401cdf599",
".git/objects/54/79b6d963b8d9c7ccf4b50e789fcc81ff5cc7e1": "decf6d9cac28aae869f04f54c481dff0",
".git/objects/98/ff29736e8b1abbb08a0c1e7214eaf871f4373c": "7eabea4a8531b2b29ebf3d7203d93276",
".git/objects/98/b130cc4b16a36a2b3fac2736fc4ec8a2b4e179": "d875e8a2519bbf90e431db8a66403c97",
".git/objects/98/eab1a170954ed5b36ee9e88eb3781ad260be7d": "c7051a2b661f41f008a1124f4de8bddc",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/802fc6d2694c9110ff7b671d0fb78dbe7d8386": "2827bafb1c234a56487a7ecf4fc670fc",
".git/objects/3f/20544669335c20cd04bbf6b78d2c93ef1fa0c7": "79d994089b3fe1b4e4536554c13e8209",
".git/objects/3f/3a23d2a28b793d1228ea5852b3ddde35c2f616": "b213f3ba2666940ecb6997ccef8031c8",
".git/objects/3f/59621ef88a5c4f6403378ccd36980468e78edb": "08e6e751f044eaf18084808654c1430f",
".git/objects/30/93ab586db410c27489f375b2345ebda355ae2c": "7b8f3aaf9f2b542cd46b9d3bf51b94b7",
".git/objects/30/736ba390847c1f47ac5bbeac0066db1ef60230": "2b356585b5e7aded19845750656a3d75",
".git/objects/30/3f94527574620feb0bba995993fcd3361fa2d7": "926d99b8781a63a0f66c5f2ee4a1118f",
".git/objects/30/71d56e1c1356025ce51d4645df28fff67b0c2c": "1d7222b42cb51c5a50a5da286420d2de",
".git/objects/37/0e014e8c0edd1b8e32d405413240f9e874ec63": "38e286c2dca42067a436ddef53dde1f0",
".git/objects/08/836ba38a2201331d2de4aa86a5ecd6a474b047": "8da448c73d684dab808f5dddf99c3274",
".git/objects/08/f4f32e483e48ce30878b065cb71f76353e1f19": "eb5d1a3ab5882f92eb32583f5d2d82c4",
".git/objects/6d/4f2daa50376301127413145ceb6e8fcbde7b50": "3c2592ce765b6f3b5b1aeeb9687fce9b",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/6ee00750ca43ce65d13dc6c60b90e22f9432a1": "3e7363835c1e51e0370276dc50dcbec9",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/0487dbc23bce155bd3cd159a833672c305c619": "88ad4e00aa0db9504bb4057e912a7ec9",
".git/objects/6c/f2cf68d365261efd66e6017352f6877a438b33": "26d4dcd741d136c73bf15b2d33c28dda",
".git/objects/6c/8904861c5ea26ed766f30386313488058b4c63": "2dca4ad9cf4beb232da467cca129148f",
".git/objects/39/ff4c64bfc086a4da93381c5245563db23bcac3": "35d2f87c4649bc2832f5b658fc6399d9",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/52/267595c345b7745414339a6f9d347238c2834c": "0f594c1bac82741751c82aad6388f2b1",
".git/objects/52/41817bba0da9ab48ccd64a3569231838de3df8": "a5c266c748425130ed361045dc7ebe50",
".git/objects/55/c295eee244763bc84906bbf6aee10a7bacec02": "82480ca389efe07e391b1e3b5d072f5f",
".git/objects/0f/5de5151050bcb2ba9a8dc1344c76c0484af067": "2cd38930b13458ebcff3f129c9e39a64",
".git/objects/0a/c0eeca966f77cbd817da825ae701065fd3adda": "0b8f735242ede63de48a59efd312d480",
".git/objects/0a/47c03335e154d1477d95ea5758d59410c1ec1e": "6069109cf92642c385d8eecb73f74eea",
".git/objects/64/23f63c13cbff0cf8df1d5ce303299f8fa6bbf9": "2774b7ef7da710932c58292d40d61406",
".git/objects/64/64349211fe1ea054f1f2787de68d0547f09eb5": "a88eaefd6b53e2d0d89426fa0d14233b",
".git/objects/90/86e49c9963508efbbf25a477ed587b9ef92720": "f1e65095b787ce39c07df35580131a61",
".git/objects/90/17993c1fbabad2a084790de34fce5ab7795c54": "eded63ec822bcdb3aa50b8fc4c7758c0",
".git/objects/90/c92a25b352326034588dab76daf720461abb4c": "be39db37e05f389d88f870f5613c1f41",
".git/objects/90/4906cbd87addbff5044d3d7b34ae2f8874afe2": "7c45d76dac6ff02ecb54749e44b16dac",
".git/objects/bf/bb9ca96c0f4af3a3052f031f6c52583751550d": "b743b471fca3815e9c6f1b3a0acf68dc",
".git/objects/d3/88d1dee3cc8dae153ef784829f5400e2020c62": "cc09176a3e49ff8a8163aff204ce1286",
".git/objects/d3/e857201b943d71f2ec8051c18cefe75525d344": "7122563609b987ab1b05e648b0f998b4",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/c816c08ddfee132e3e90afbd32ace3a6648881": "e93b2a595f06b3981afc06523c62d934",
".git/objects/d4/e74041440abd72b263ebd1b98399faaf5365fd": "2c420a4ffe98b93550addbf585f20833",
".git/objects/d4/4e8eb00490128bf26242f8910a9925e748356c": "ce2c375afd17962bfd8aa19cef195a20",
".git/objects/ba/d38ea9cab54b0b2f08277d3349db99fd60c0ff": "73687f707882f9fef03100974bff1074",
".git/objects/ba/b5beb774f4de6a2413f2f9fe9f6f66f12232ae": "787437093d6ed053619eb08343af70a8",
".git/objects/a0/99f639ef6309dd03176fb7c2237b119b9bcfdc": "e919cf91ebe1d674437e901a7a831d3a",
".git/objects/a7/9f1b65486a550f4ea2cfaf5f420365dcf91988": "63c02ac7dd4672160f7bed21d401b584",
".git/objects/a7/3995a3be07067953471e7abc01c158b163996d": "b800f3ec0a296cbe278265aaab048304",
".git/objects/b8/dd0bf7d9b35ce2fdec988cc51bfd87aa916554": "044deeca6e5d9b9298df08013be5f298",
".git/objects/b8/92160ef3cc894940c04ee223f0d06e07a9cebf": "2e81cde5fefcb07acb82f5595431cdcc",
".git/objects/dc/04c3646474a17a8d86345d12bd6c7be989e9ef": "1960a36f262b792b81ae1ae77659fd9e",
".git/objects/b6/f25a9430eb30a72990fe46c43cdd990b141859": "1596c4dadff9a5d65e9540fadedbf7e2",
".git/objects/b6/67edb3dde1b1a7d41c95d9b27962b280319bc0": "1a88efadfacfdf4dbe6470a3ec0297c0",
".git/objects/a9/3a731f7cd93f98325336731924999abc030ebf": "11b6f4aed00591dc9f421c6762c63469",
".git/objects/a9/dfd5d9a4d3b052e6976317cf33ccff305d7375": "48fded9c37765a2dc44688ebbad23bb6",
".git/objects/a9/1506877aa48e3ddce9e0a7a8fd9190a0780baa": "3f085696ab4dd2ef6212b3074cc4e6f2",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d5/8070cdd097fdca6b65bc272554ef5a8b27b8bb": "1f56a81e9040b8c8343fcfa05c6b98b4",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/4a0e38b96cc5360b779d5d73f9594352161501": "610aea087e7b8ed6ff79a41f43528161",
".git/objects/d2/ea1ec9b6431689603046528a083a496b51760c": "42cc8399823254d976e6639714e886bb",
".git/objects/d2/5d1feceee3fd04429a10b8dc09d9d0ed774898": "15e6e9432ff3d8dcfe9775b3c16c1c11",
".git/objects/aa/e4cd69320bc7de71b4562d44b0e20cc715fa66": "d1319d14b5c6b1b5569aa48af248c510",
".git/objects/aa/ee563c172552a7efab6c2b6611a6d3d49a9ac5": "b01c83eb155fc64191c6d564eae2eba8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/268c17d20d0dbcbc3d9b88a5725b87839aadab": "dda9da186ebab1ee8cc34e71a361a2c1",
".git/objects/b7/34335d7446d488ef3cf3f7055a0e1a47e5f84c": "24150657422202b19262c35b63512235",
".git/objects/b7/40861aecd643605f42500675f06c54d8246ff0": "c13c13dcc1ee1ca8117b04c7acf36d5f",
".git/objects/b7/4785985d35b16dfdc4c9d61cc141238eb21f32": "c464dd24fd9ad8a642bfdc1344f8844f",
".git/objects/a8/91c61099425f2aeb991c220b5eaebb01158f46": "36faa41e1d5c3bd40911f2267f0fa8b2",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/aa0503741686ae1f06d8a15cdacb581859a028": "562870e9398daed187d7303df3affb55",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/34157cca6d484e943d28f2b602f6e6fdc76d09": "c2fb6eac269d1178d1c5945170d61784",
".git/objects/a1/d4de13db5b4838185de677eb681ba924ea74c9": "4183d810081b2642acb5c16096a34c2f",
".git/objects/ef/485b9779f313fc6cd3be95eb2e29a08b9a4673": "5bfcd9494fb75259b3b72216e758f0b4",
".git/objects/c4/6a4be4ee48673c29367fddecee582ade8595e0": "0b8d7be79fa133bf023c29ae7add086f",
".git/objects/ea/18611a08515199a62bef0fdfd4c79f106cbac8": "6e6027c490b24105777dfb5298b1f794",
".git/objects/e1/344e38b83ecfe1398e56ee493af383fdc8ab29": "e1b6350727545fa84ed915b11522ad33",
".git/objects/cd/ae5267576989faa80b31c4f18b6321e462a4e8": "9daacc6b9aafeafb91acbaed597bad00",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/b022e5277f22ee5c689e188357fcf93cfee22b": "e20de7adb9286ad5b79e2b49041f49d4",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/ff2c9b8abaa5ba50066abc2d9260e00b1a00ea": "c900bbb1a37287c4e1ecd5148f107bad",
".git/objects/f7/f5e712280b00fa4da32079f79dc327aa7f0771": "902e29d83cbe1534f25f7585df6358c8",
".git/objects/e8/a16dea51775926c5d2a5c937637b0a5e376ea7": "1a6e7451d7e4794339cfbb9995c2218f",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/9796858e523cc43b656266b08c9637b880e9b9": "8074da59047cc911300b18dd0901e03c",
".git/objects/ff/24a43cd27133fda26957677cf154c2d0fdca37": "6af248dad4858e9c7c0a25fe3670c9dd",
".git/objects/c5/cf2c6651eecfa0306e269d1bade43cab70cfd3": "c72994ed4d1e315aad5a54ca735afe46",
".git/objects/c5/1da0d3cebf190dd44f1ec07d1689405050a1e0": "e972c10b0f0309ac187abbb4eaec700f",
".git/objects/c2/73adb1867504e35b2d1c0b7a9980c8ece4b63e": "51e300ab74b645dbea42026a2ce154be",
".git/objects/c2/8020ea2b2cb0ac17afd10f64e357e686c214c3": "796853cf70027884ad8030f146c7030b",
".git/objects/f6/4d6db9d1cd0b5d10448a5cf6c75fe2b698665c": "3f4a8cb7ae57faa5b4826931f25ef08a",
".git/objects/f6/edb6920e447eff5d159dd36c94909ac9a1306b": "b80054a6108945edefbfb2be804c0011",
".git/objects/e9/dbd740eecc3a552267bd1e5082b3c2dcd1068e": "fe7dc3b9659e70252ea6e7216e10bf46",
".git/objects/e9/d4bfa36c10808e5e8a588cf4f6fdf5e6aec972": "393910bc1110a3d95211063d8cb73248",
".git/objects/e9/bdc8fc84681b815094b8463170af7c15d92904": "fa912d1545f3acad131c0cb9f9c64e55",
".git/objects/e9/16840888adf4803b00e83049b7296a0d1ad6de": "2904c760bdb2c71093cf45e4f22d1eaa",
".git/objects/e9/34c0813a9944780d72f13ce2a280ec8c69f3e1": "a951591f0959e62229b14513ac0875a4",
".git/objects/f1/dfe9dddf48ae1e1c87ee2411131c205d806cf1": "009ff042c3bfeed63e82584a7ae8eb75",
".git/objects/f1/2921c33359bda7ceb662a42e4b14ea95a05426": "eba9c831169531d9b5c13cb8705ab19a",
".git/objects/f1/eeb7e278491a29da6ac80059fbdc9ebf79f21d": "1e04fe066cd048e61f43acbb3e171ecb",
".git/objects/cb/b0cf4806128312d9374fa00365cbd83967eba1": "1daae2b435c0d9d24bf7806c50dd9172",
".git/objects/ce/421e34fd8d6335db82bffa0e0c28dde48ac3a7": "d3a6134178a2ff8b43f390ce0acd84eb",
".git/objects/ce/203678805f0d580f3ab1cd76a11875edcf550d": "b27213980943001169928e63df7b3947",
".git/objects/e0/0922085a665f617f6e92fffb232fdbabcb7ec2": "b9ed056db857c9c328f0a98753d64765",
".git/objects/e0/ce8e6ecfcdd8f3d60c185d0461d1ae5140286c": "b4c96688ca4af3e6b785621b8112727e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/951f837eb6e4eb4491a3d43beff53e82b9e523": "189a82741090ed156afed73ae623a1d1",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/5acd3489c0f670bbb9dce5b98f8b1d849f1d52": "59ad5f9eb65237774acc1182053379b6",
".git/objects/41/5f64ab2f414f163d6d8af92945b544d23f2475": "ef8e91ae74d0d08e7c75a59be9365219",
".git/objects/41/175e5645f2268a0a47671900be79ac1f09569e": "899590fcde9b17e47026ad0030ba880c",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/f5a67b4d313b77472740e6d460c6334355fbae": "1817e935bc87d4da00ff5592d6b30026",
".git/objects/1b/8f65cab1b0f759e3cd7f8f04e66a5b04eb4ef3": "ae3da54e71558c9f8cb9d231cff55d9b",
".git/objects/77/7f3aa785d58bf4ca9e7e8e847b8186210c0d13": "ec961744d53628bfa1b5cb407f487161",
".git/objects/48/e6399f4bbbdb8ff667b518b40995ca510ff442": "846458024a0f3a0ad147972ac5bfe1ce",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/4a/c2438badce2d6bf08768335d2f23a41ecc9e6e": "a9ef17203a546d0cdc74e3de64d76f12",
".git/objects/4a/6cd4bd6d5680bd4c17e1c33b2914f9651e3d10": "b088ccd65822886428470fe660dbae0c",
".git/objects/24/e204ce5a05ab0c9b4ea836698c385445c82476": "b94a98d90f82c11721ff4d470714822f",
".git/objects/23/9e9747749c142565dbeca1a6e8d461cc68e8bf": "c9db989ae51e5d713b4558e5ba3ee5a7",
".git/objects/4f/9e68e7a60138c8cdac3b635068bb1f8d1b8a52": "7100d18935e73a91713dbc82102574b5",
".git/objects/4f/b6cdccdbcbaf81722b025f4240b59c29dbfcd6": "bab920ec8781c410fd772a28beb2328e",
".git/objects/4f/c12c3626eb10aecbd450e14bf02bb3a4707a36": "ea7a038e663a7b0ee29016a739956d6d",
".git/objects/15/5e6a8825aa485b0f71a493aeab3830137ec47c": "170ebf2ea33e786fd0160502221976be",
".git/objects/15/6226fc1d0de02d698533a2d60fba1eaa9e49a2": "2f2d6cbb343dd2c82d46db873d83d8f8",
".git/objects/15/14ee4e6fe56d20605e1cdd74afa32b76832d62": "cf081fd681e37aa224df054942120a34",
".git/objects/15/d4cb8c2c18af814bf9c5cee2aa424cf7f98fb8": "2ea0f1cc28cd4342b4861d2b9813792b",
".git/objects/12/35798f38cc5316e107f0dec296033dc815e8ab": "428951973d0c5873ec19e8c26fa88379",
".git/objects/12/bc061b3f7066f4a6ee23a899e86b2dcd7f3191": "ca49c02a5eccff5102fdb1d256b8da56",
".git/objects/8c/11d2093cf5a6bf64b35c7de7dedbe498ee4a9e": "a14d1799c354146bf4f7a311e13f8739",
".git/objects/8c/1a8a06d7ebf57f17c6a7555c214c5961bed576": "f347ab0ca69505c94891e95624654a1f",
".git/objects/85/e045179eb9c29e1b1d653121736ad070b39acf": "2f32ad09f94ec6000b58fd445302ccf2",
".git/objects/85/ebc9e0483f2b62670474b75be5d3f0e8c2d71c": "db925547b0de7d57922afa2666024d9c",
".git/objects/85/a5b2b86ca6c42b1234f56e29c971679f6d0faf": "791c1713d2080ad794d7329b912badcc",
".git/objects/76/5a20214c1761d4a15bcca65162899bca7012ea": "2367d47e2d116f03846baa3c9fa0d9a0",
".git/objects/1c/875568da18c0da1136660ee992ddd8590a7144": "1c58b9bca4e3eb8aac03ddf7e3ea618c",
".git/objects/82/4fb3d024d8e30577a35ad1d5fef8eab3965470": "f93ba21d9c47a0dfaa119c9596b2272a",
".git/objects/82/2097c8411606a6710d34ae15d8234179ab00f0": "97829af48d6128c57fccc3c2e95b87d1",
".git/objects/82/3dac7d85baa307213d8ad39a78d39a0ebbb00d": "bc8c301bd0b0f5a37860e2eec54c9559",
".git/objects/49/8cc8862600cad58272c222c9314f660c4950db": "0358210676a1baa648e900698317bafa",
".git/objects/49/dba3a38380736e18a4018e012d7179988d299c": "7f552165f66d2abf89549eb5870bdcc1",
".git/objects/40/71be90cf527ac491324cd167ce8ec07eb15205": "87ebbe6630bf91b3d16d459cc333ab99",
".git/objects/2e/0ab744d7bc7c21c10560acc47ebed8a99ce328": "2fbf125447e559424545f0adadcad3ee",
".git/objects/2e/99918cb7fbc8ff0a8d546e24a23e007f741878": "4b1e6495e30a31a17029630dabbf23a9",
".git/objects/2b/2d0b7a0cadd5ec80c236cb88867e4671d5d49b": "9f28710439ba93687e14bee166e211f8",
".git/objects/2b/223c1f68681b568a4da3cdf63ce1e68339214c": "ccd071f59ee29afa89b4735df3396dd9",
".git/objects/2b/25f7ff20028e5c83ea885adbeb6eae816cb1e2": "3ccf1088372f8be47d3f0732b06fd735",
".git/objects/2b/feeee13793772395a9beff5b36493ff21b30cc": "436266596d887663c75372bd13d22bff",
".git/objects/47/7625305ff23a84f977cf9c62cdf1740d956ef7": "4259b27354870473b5f47b9219f1ec9a",
".git/objects/47/7fda4a7de6303dd84d87dfb9a8001be1ddb76c": "59c148e32a0da6d4f91543765697e362",
".git/objects/78/32eb17ae90ee322cd7b5336e4f20bc1dfec6bd": "231f8a7219f83e5ba3563ebfefbb786c",
".git/objects/78/801e0f95143c4cf566c1fbd7eb1dfde7abeb3e": "f713b36c26beb684dd4361db75d5cb44",
".git/objects/78/4e7ba87020a3eb7557382e3d27fa17fa558e24": "a0340579a02d0c53f4b40283ed64f376",
".git/objects/7f/1bcb2cf9e32efbb3805530b1685e49d95942e4": "509e6950d9994eb3c66e78dc9f0bf2b9",
".git/objects/7a/1418c2bd2219684034ea754202a1820f1be405": "b369188c01824378edf2443e14471f68",
".git/objects/7a/9163b1d0b46b7be5ee7165f8465736e2cd64cd": "7b901fdd128dce57ac3af6785980bbba",
".git/objects/14/ecffb96328df23e5f0c221a7d8bcc72c1df1db": "8e5e0739f0429adfdfc9236915e5bf09",
".git/objects/14/d2679d44eea968baf40d28561ed14ccc1009e4": "7faca64bef6d57068b382ee43597d6b9",
".git/objects/8e/79fba412a04ea23ca8bf88fe1e4cabaabf442d": "867f17ee2ddec55439e49c11a29ace23",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/22/b172124edbd30834d324eba1e64072b39d9ee9": "df4520a9b604f6367baa27c5c8896e4b",
".git/objects/25/7188b730479c4d5811ee0b6d8f3eaa57799843": "af12f3dfe838586a638524397ebba8d2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "636621c60410e2b6315cb715da31a8f0",
".git/logs/refs/heads/main": "636621c60410e2b6315cb715da31a8f0",
".git/logs/refs/remotes/origin/main": "5dd24c24d49357ef574954e865d866be",
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
".git/refs/heads/main": "73fe3c7e34690b88c89870a7af73ed40",
".git/refs/remotes/origin/main": "73fe3c7e34690b88c89870a7af73ed40",
".git/index": "7e8f7914825af169dc467bddbf180208",
".git/COMMIT_EDITMSG": "9ccb8a05d08be23e67b34458880c105f",
"assets/AssetManifest.json": "4b5e11c746a3766de9737708ecae9e70",
"assets/NOTICES": "71104705cfad29f145a61d0646dce44d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "1e36f4683b03af6692ad2542810f28bc",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "4982afcdec7850e41b04eefe5b62ef57",
"assets/fonts/MaterialIcons-Regular.otf": "8b34d8f8d91a79428d10d12ce9472727",
"assets/assets/demo.json": "eadae35b9fa2f71713c2d01c27555589",
"assets/assets/image/avatar.jpg": "4eac1a285f5b39da37729bcff128323f",
"assets/assets/icon/logo.png": "c82bdafba20e509223a4e8d0da7d3406",
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
