import pwaAssetGenerator from 'pwa-asset-generator';

// Generate icons
await pwaAssetGenerator.generateImages(
	'./static/icon.png',
	'./static/icons',
	{
		scrape: true,
		background: "#080709",
		manifest: "./static/manifest.json",
		log: true,
		iconOnly: true,
		pathOverride: "/icons",
	});

// Generate dark mode splash screen
await pwaAssetGenerator.generateImages(
	'./static/icon.png',
	'./static/splash/dark',
	{
		scrape: true,
		background: "#080709",
		splashOnly: true,
		portraitOnly: false,
		log: true,
		manifest: "./static/manifest.json",
		index: "./src/app.html",
		darkMode: true,
		padding: "30%",
		pathOverride: "%sveltekit.assets%/splash/dark"
	});

// Generate light mode splash screen
await pwaAssetGenerator.generateImages(
	'./static/icon-light.png',
	'./static/splash/light',
	{
		scrape: true,
		background: "#ffffff",
		splashOnly: true,
		portraitOnly: false,
		log: true,
		manifest: "./static/manifest.json",
		index: "./src/app.html",
		darkMode: false,
		padding: "30%",
		pathOverride: "%sveltekit.assets%/splash/light"
	});
