
/*
	! when updating this file, update the template in `/list.py`.
	$ the list of files to be cached comes from the script in `/list.py`.
	$ this list can be updated manually by running `/list.py`.
*/
/*
	This comment was generated by `/list.py`.
	Timestamp: 09/12/2022 18:04:04 PST
*/
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open("lightblue").then((cache) => {
			cache.addAll([
				'./index.html',
				'./game/perilous/index.html',
				'./game/normal/index.html',
				'./index.css',
				'./game/perilous/game.css',
				'./game/normal/game.css',
				'./service-worker.js',
				'./game/perilous/game.js',
				'./game/perilous/levels.js',
				'./game/normal/game.js',
				'./game/normal/levels.js',
				'./menu/img/musicOn.svg',
				'./menu/img/musicOff.svg',
				'./favicon.ico',
				'./music/MizuiroNoTenshon.wav',
				'./music/LightBlues.wav',
				'./music/LightBlues.mp3',
				'./music/Vincent.mp3'
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
