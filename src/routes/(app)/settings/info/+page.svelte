<script lang="ts">
	import type { PageData } from './$types';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
	import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
	import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
	import SocialLink from '$lib/components/settings/info/SocialLink.svelte';
	import { format } from 'date-fns';

	export let data: PageData;
</script>

<h1>App Informationen</h1>

<section class="mt-4">
	<h2>Vertretungsapp<span class="text-primary-500">.</span></h2>
	<p>Version: {data.version}</p>
	<p>Build-Nummer: {data.commit_sha}</p>
	<p>Date: {format(new Date(data.build_date), 'dd.MM.yyyy HH:mm')}</p>
</section>

<section class="mt-4 flex gap-3 items-center justify-center">
	<SocialLink href="https://www.vertretungsapp.de" icon={faGlobe} />
	<SocialLink href="https://www.vertretungsapp.de/discord" icon={faDiscord} />
	<SocialLink href="https://www.vertretungsapp.de/github" icon={faGithub} />
	<SocialLink href="mailto:support@vertretugsapp.de" icon={faEnvelope} />
</section>

<section class="mt-8 text-disabled text-xs">
	<h3>Debug Information</h3>
	<p>User-Agent: {window.navigator.userAgent}</p>
	<p>System time: {new Date()}</p>
	<p>Locale: {window.navigator.language}</p>
	<p>Service Workers:</p>
	<ul class="list-disc pl-4">
		{#each data.serviceWorkers as worker}
			<li>{worker.scope} - {worker.active}</li>
		{/each}
	</ul>
</section>
