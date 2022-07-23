
/*
	! when updating this file, update the template in `/list.py`.
	$ the list of files to be cached comes from the script in `/list.py`.
	$ this list can be updated manually by running `/list.py`.
*/
/*
	This comment was generated by `/list.py`.
	Timestamp: 07/22/2022 18:47:12 PST
*/
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open("lightblue").then((cache) => {
			cache.addAll([
				'./index.html',
				'./game/normal/index.html',
				'./game/perilous/index.html',
				'./index.css',
				'./game/normal/game.css',
				'./game/perilous/game.css',
				'./service-worker.js',
				'./game/normal/game.js',
				'./game/normal/levels.js',
				'./game/perilous/game.js',
				'./game/perilous/levels.js',
				'./menu/img/musicOff.svg',
				'./menu/img/musicOn.svg',
				'./favicon.ico',
				'./music/LightBlues.wav',
				'./music/MizuiroNoTenshon.wav',
				'./music/Vincent.mp3',
				'./music/LightBlues.mp3'
			]);
		})
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		fetch(event.request).then((response) => {
			return response;
		}).catch(async (error) => {
			return caches.match(event.request).then((cacheRes) => {
				return cacheRes;
			});
		})
	);
});
