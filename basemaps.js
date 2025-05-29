		const basemaps = [
			{
				id: 'esri-world-imagery',
				name: 'World Imagery',
				group: 'Esri',
				note: 'Tiles &copy; Esri — Source: Esri, Earthstar Geographics. Free to use for non-commercial applications with attribution.',
				style: {
					version: 8,
					sources: {
						'esri-world-imagery': {
							type: 'raster',
							tiles: [
								'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
							],
							tileSize: 256,
							attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a> — Source: Esri, Earthstar Geographics',
							maxzoom: 19
						}
					},
					layers: [{
						id: 'esri-world-imagery-layer',
						type: 'raster',
						source: 'esri-world-imagery'
					}]
				}
			},
			{
				id: 'carto-positron',
				name: 'CartoDB Positron',
				group: 'CartoDB',
				style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
			},
			{
				id: 'carto-dark-matter',
				name: 'CartoDB Dark Matter',
				group: 'CartoDB',
				style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
			},
			{
				id: 'stamen-toner-lite',
				name: 'Stamen Toner Lite',
				group: 'Stamen',
				style: {
					version: 8,
					sources: {
						'stamen-toner-lite': {
							type: 'raster',
							tiles: ['https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}.png'],
							tileSize: 256,
							attribution: '&copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors &copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>'
						}
					},
					layers: [{ id: 'stamen-toner-lite-layer', type: 'raster', source: 'stamen-toner-lite', minzoom: 0, maxzoom: 22 }]
				}
			},
			{
				id: 'stamen-terrain',
				name: 'Stamen Terrain',
				group: 'Stamen',
				style: {
					version: 8,
					sources: {
						'stamen-terrain': {
							type: 'raster',
							tiles: ['https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.png'],
							tileSize: 256,
							attribution: '&copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors &copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>'
						}
					},
					layers: [{ id: 'stamen-terrain-layer', type: 'raster', source: 'stamen-terrain', minzoom: 0, maxzoom: 22 }]
				}
			},
			{
				id: 'stamen-watercolor',
				name: 'Stamen Watercolor',
				group: 'Stamen',
				style: {
					version: 8,
					sources: {
						'stamen-watercolor': {
							type: 'raster',
							tiles: ['https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg'],
							tileSize: 256,
							attribution: '&copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors &copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>'
						}
					},
					layers: [{ id: 'stamen-watercolor-layer', type: 'raster', source: 'stamen-watercolor', minzoom: 0, maxzoom: 22 }]
				}
			},
			{
				id: 'mierune-standard',
				name: 'MIERUNE Standard',
				group: 'MIERUNE',
				style: {
					version: 8,
					sources: { 
						'mierune-standard': { 
							type: 'raster', 
							tiles: ['https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png'], 
							tileSize: 256, 
							attribution: 'Maptiles by <a href="https://mierune.co.jp/" target="_blank">MIERUNE</a>, under CC BY. Data by <a href="https://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors, under ODbL.',
							maxzoom: 18 
						}
					},
					layers: [{ id: 'mierune-standard-layer', type: 'raster', source: 'mierune-standard' }]
				}
			},
			{
				id: 'mierune-mono',
				name: 'MIERUNE Mono',
				group: 'MIERUNE',
				style: {
					version: 8,
					sources: { 
						'mierune-mono': { 
							type: 'raster', 
							tiles: ['https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png'], 
							tileSize: 256, 
							attribution: 'Maptiles by <a href="https://mierune.co.jp/" target="_blank">MIERUNE</a>, under CC BY. Data by <a href="https://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors, under ODbL.',
							maxzoom: 18
						}
					},
					layers: [{ id: 'mierune-mono-layer', type: 'raster', source: 'mierune-mono' }]
				}
			},
			{
				id: 'gsi-std',
				name: '国土地理院（GSI） 標準地図',
				group: 'GSI',
				style: {
					version: 8,
					sources: { 'gsi-std': { type: 'raster', tiles: ['https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'], tileSize: 256, attribution: '地理院タイル &copy; <a href="https://www.gsi.go.jp/" target="_blank">国土地理院</a>' }},
					layers: [{ id: 'gsi-std-layer', type: 'raster', source: 'gsi-std', minzoom: 0, maxzoom: 18 }]
				}
			},
			{
				id: 'gsi-english',
				name: '国土地理院（GSI） 標準地図（英語）',
				group: 'GSI',
				style: {
					version: 8,
					sources: { 'gsi-english': { type: 'raster', tiles: ['https://cyberjapandata.gsi.go.jp/xyz/english/{z}/{x}/{y}.png'], tileSize: 256, attribution: '地理院タイル &copy; <a href="https://www.gsi.go.jp/" target="_blank">国土地理院</a>' }},
					layers: [{ id: 'gsi-english-layer', type: 'raster', source: 'gsi-english', minzoom: 0, maxzoom: 18 }]
				}
			},
			{
				id: 'gsi-pale',
				name: '国土地理院（GSI） 淡色地図',
				group: 'GSI',
				style: {
					version: 8,
					sources: { 'gsi-pale': { type: 'raster', tiles: ['https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'], tileSize: 256, attribution: '地理院タイル &copy; <a href="https://www.gsi.go.jp/" target="_blank">国土地理院</a>' }},
					layers: [{ id: 'gsi-pale-layer', type: 'raster', source: 'gsi-pale', minzoom: 0, maxzoom: 18 }]
				}
			},
			{
				id: 'gsi-blank',
				name: '国土地理院（GSI） 白地図',
				group: 'GSI',
				style: {
					version: 8,
					sources: { 'gsi-blank': { type: 'raster', tiles: ['https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png'], tileSize: 256, attribution: '地理院タイル &copy; <a href="https://www.gsi.go.jp/" target="_blank">国土地理院</a>' }},
					layers: [{ id: 'gsi-blank-layer', type: 'raster', source: 'gsi-blank', minzoom: 0, maxzoom: 18 }]
				}
			},
			{
				id: 'gsi-lum200k',
				name: '国土地理院（GSI） 土地利用図',
				group: 'GSI',
				style: {
					version: 8,
					sources: { 'gsi-lum200k': { type: 'raster', tiles: ['https://cyberjapandata.gsi.go.jp/xyz/lum200k/{z}/{x}/{y}.png'], tileSize: 256, attribution: '地理院タイル &copy; <a href="https://www.gsi.go.jp/" target="_blank">国土地理院</a>' }},
					layers: [{ id: 'gsi-lum200k-layer', type: 'raster', source: 'gsi-lum200k', minzoom: 0, maxzoom: 18 }]
				}
			},
			{
				id: 'gsi-ort-old10',
				name: '国土地理院（GSI） 航空写真 (1961-1969)',
				group: 'GSI',
				note: 'Coverage may be limited.',
				style: {
					version: 8,
					sources: { 'gsi-ort-old10': { type: 'raster', tiles: ['https://cyberjapandata.gsi.go.jp/xyz/ort_old10/{z}/{x}/{y}.png'], tileSize: 256, attribution: '地理院タイル &copy; <a href="https://www.gsi.go.jp/" target="_blank">国土地理院</a>' }},
					layers: [{ id: 'gsi-ort-old10-layer', type: 'raster', source: 'gsi-ort-old10', minzoom: 0, maxzoom: 17 }]
				}
			},
			{
				id: 'gsi-gazo1',
				name: '国土地理院（GSI） 航空写真 (1974-1978)',
				group: 'GSI',
				note: 'Coverage may be limited. JPG format.',
				style: {
					version: 8,
					sources: { 'gsi-gazo1': { type: 'raster', tiles: ['https://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg'], tileSize: 256, attribution: '地理院タイル &copy; <a href="https://www.gsi.go.jp/" target="_blank">国土地理院</a>' }},
					layers: [{ id: 'gsi-gazo1-layer', type: 'raster', source: 'gsi-gazo1', minzoom: 0, maxzoom: 17 }]
				}
			},
			{
				id: 'gsi-gazo2',
				name: '国土地理院（GSI） 航空写真 (1979-1983)',
				group: 'GSI',
				note: 'Coverage may be limited. JPG format.',
				style: {
					version: 8,
					sources: { 'gsi-gazo2': { type: 'raster', tiles: ['https://cyberjapandata.gsi.go.jp/xyz/gazo2/{z}/{x}/{y}.jpg'], tileSize: 256, attribution: '地理院タイル &copy; <a href="https://www.gsi.go.jp/" target="_blank">国土地理院</a>' }},
					layers: [{ id: 'gsi-gazo2-layer', type: 'raster', source: 'gsi-gazo2', minzoom: 0, maxzoom: 17 }]
				}
			},
			 {
				id: 'gsi-gazo3',
				name: '国土地理院（GSI） 航空写真 (1984-1986)',
				group: 'GSI',
				note: 'Coverage may be limited. JPG format.',
				style: {
					version: 8,
					sources: { 'gsi-gazo3': { type: 'raster', tiles: ['https://cyberjapandata.gsi.go.jp/xyz/gazo3/{z}/{x}/{y}.jpg'], tileSize: 256, attribution: '地理院タイル &copy; <a href="https://www.gsi.go.jp/" target="_blank">国土地理院</a>' }},
					layers: [{ id: 'gsi-gazo3-layer', type: 'raster', source: 'gsi-gazo3', minzoom: 0, maxzoom: 17 }]
				}
			},
			{
				id: 'gsi-gazo4',
				name: '国土地理院（GSI） 航空写真 (1987-1990)',
				group: 'GSI',
				note: 'Coverage may be limited. JPG format.',
				style: {
					version: 8,
					sources: { 'gsi-gazo4': { type: 'raster', tiles: ['https://cyberjapandata.gsi.go.jp/xyz/gazo4/{z}/{x}/{y}.jpg'], tileSize: 256, attribution: '地理院タイル &copy; <a href="https://www.gsi.go.jp/" target="_blank">国土地理院</a>' }},
					layers: [{ id: 'gsi-gazo4-layer', type: 'raster', source: 'gsi-gazo4', minzoom: 0, maxzoom: 17 }]
				}
			},
			{
				id: 'google-maps-standard',
				name: 'Google Maps (Standard)',
				group: 'Google',
				note: 'Usage may be subject to Google Maps Platform Terms of Service.',
				style: {
					version: 8,
					sources: { 'google-maps-standard': { type: 'raster', tiles: ['https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'], tileSize: 256, attribution: 'Map data &copy; <a href="https://www.google.com/intl/en_us/help/terms_maps/" target="_blank">Google</a>', maxzoom: 21 }},
					layers: [{ id: 'google-maps-standard-layer', type: 'raster', source: 'google-maps-standard' }]
				}
			},
			{
				id: 'google-satellite',
				name: 'Google Satellite',
				group: 'Google',
				note: 'Usage may be subject to Google Maps Platform Terms of Service.',
				style: {
					version: 8,
					sources: { 'google-satellite': { type: 'raster', tiles: ['https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'], tileSize: 256, attribution: 'Map data &copy; <a href="https://www.google.com/intl/en_us/help/terms_maps/" target="_blank">Google</a>', maxzoom: 21 }},
					layers: [{ id: 'google-satellite-layer', type: 'raster', source: 'google-satellite' }]
				}
			},
			{
				id: 'google-satellite-hybrid',
				name: 'Google Satellite Hybrid',
				group: 'Google',
				note: 'Usage may be subject to Google Maps Platform Terms of Service.',
				style: {
					version: 8,
					sources: { 'google-satellite-hybrid': { type: 'raster', tiles: ['https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'], tileSize: 256, attribution: 'Map data &copy; <a href="https://www.google.com/intl/en_us/help/terms_maps/" target="_blank">Google</a>', maxzoom: 21 }},
					layers: [{ id: 'google-satellite-hybrid-layer', type: 'raster', source: 'google-satellite-hybrid' }]
				}
			},
			{
				id: 'google-roads',
				name: 'Google Roads',
				group: 'Google',
				note: 'Usage may be subject to Google Maps Platform Terms of Service.',
				style: {
					version: 8,
					sources: { 'google-roads': { type: 'raster', tiles: ['https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'], tileSize: 256, attribution: 'Map data &copy; <a href="https://www.google.com/intl/en_us/help/terms_maps/" target="_blank">Google</a>', maxzoom: 21 }},
					layers: [{ id: 'google-roads-layer', type: 'raster', source: 'google-roads' }]
				}
			},
			{
				id: 'google-streets',
				name: 'Google Streets',
				group: 'Google',
				note: 'Usage may be subject to Google Maps Platform Terms of Service.',
				style: {
					version: 8,
					sources: { 'google-streets': { type: 'raster', tiles: ['https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'], tileSize: 256, attribution: 'Map data &copy; <a href="https://www.google.com/intl/en_us/help/terms_maps/" target="_blank">Google</a>', maxzoom: 21 }},
					layers: [{ id: 'google-streets-layer', type: 'raster', source: 'google-streets' }]
				}
			}
		];