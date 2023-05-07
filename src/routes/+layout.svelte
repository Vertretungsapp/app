<script lang="ts">
	import '../app.css';
	import SvelteSeo from 'svelte-seo';
	import { onMount } from 'svelte';

	onMount(() => {
		if (window.location.pathname === '/alpha' || window.location.pathname === '/unlock') return;
		if (process.env.NODE_ENV === 'production' && localStorage.getItem('alphaEnabled') == null) {
			console.log('redirecting to alpha');
			window.location.href = '/alpha';
		}
	});
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0071f5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#000000">
</svelte:head>

<SvelteSeo
	title="Vertretungsplan42"
	description="Deine Vertretungsplanapp für stundenplan24.de"
	canonical="https://vp42.sachsenspielt.de/"
	openGraph={{
		title: 'Vertretungsplan42',
		description: 'Deine Vertretungsplanapp für stundenplan24.de',
		image: 'https://vp42.sachsenspielt.de/logo/icon.png',
		url: 'https://vp42.sachsenspielt.de/',
		type: 'website',
		site_name: 'Vertretungsplan42'
	}}
/>
<slot />
