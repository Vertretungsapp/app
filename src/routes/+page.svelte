<script lang="ts">
	import LoginAndSettings from '../components/LoginAndSettings/LoginAndSettings.svelte';
	import { onMount } from 'svelte';
	import { fetchPlan } from '$lib/api/fetch';
	import type Plan from '$lib/api/server/class/Plan';
	import { NoCredentialsError } from '$lib/api/server/errors/NoCredentialsError';
	import { InvalidCredentialsError } from '$lib/api/server/errors/InvalidCredentialsError';

	// TODO: TEMPORARY UNTIL OVERVIEW PAGE IS IMPLEMENTED
	let plan: Plan = {
		classes: []
	};

	onMount(async () => {
		await fetchPlan()
			.then((p) => (plan = p))
			.catch((e) => {
				if (e instanceof NoCredentialsError || e instanceof InvalidCredentialsError) {
					document.querySelector('#loginDialog').showModal();
				}
			});
	});
</script>

<div class="w-[90%] m-auto mt-20">
	<LoginAndSettings />
	<h1 class="text-center">Vertretungsplan<span class="text-accent">42</span></h1>
	<div class="flex flex-col gap-2">
		{#each plan.classes.map((c) => c.short) as klass}
			<a class="border-accent border-[3px] rounded-[7px] p-2 text-center" href="/plan/{klass}"
				>{klass}</a
			>
		{/each}
	</div>
</div>
