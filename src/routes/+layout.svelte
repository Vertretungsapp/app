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

<SvelteSeo title="Vertretungsplan42" description="Deine Vertretungsplanapp für stundenplan24.de" />

<slot />
