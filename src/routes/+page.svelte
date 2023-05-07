<script lang="ts">
	import LoginAndSettings from '../components/LoginAndSettings/LoginAndSettings.svelte';
	import { onMount } from 'svelte';
	import { fetchPlan } from '$lib/api/fetch';
	import type Plan from '$lib/api/server/class/Plan';
	import { NoCredentialsError } from '$lib/api/server/errors/NoCredentialsError';
	import { InvalidCredentialsError } from '$lib/api/server/errors/InvalidCredentialsError';
	import OverviewLinkButton from "../components/Home/OverviewLinkButton.svelte";
	import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
	import {faDoorOpen} from "@fortawesome/free-solid-svg-icons/faDoorOpen";

	// TODO: TEMPORARY UNTIL OVERVIEW PAGE IS IMPLEMENTED
	let plan: Plan;

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

<div class="w-[90%] m-auto py-20 flex flex-col h-screen justify-between">
	<div>
		<LoginAndSettings />
		<h1 class="text-center">Vertretungsplan<span class="text-accent">42</span></h1>
	</div>

	<div class="bottom-4 w-full grid grid-cols-3 gap-4">
		<OverviewLinkButton text="Klassen" href="/overview/class" icon={faPeopleGroup} />
		<div></div>
<!--		<OverviewLinkButton text="Lehrer" href="/overview/teacher" icon={faPeopleGroup} />-->
		<OverviewLinkButton text="Räume" href="/overview/room" icon={faDoorOpen} />
	</div>
</div>
