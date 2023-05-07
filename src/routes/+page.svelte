<script lang="ts">
	import LoginAndSettings from '../components/LoginAndSettings/LoginAndSettings.svelte';
	import { onMount } from 'svelte';
	import OverviewLinkButton from "../components/Home/OverviewLinkButton.svelte";
	import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
	import {faDoorOpen} from "@fortawesome/free-solid-svg-icons/faDoorOpen";
	import {verifyCredentials} from "$lib/api/session";

	onMount(async () => {
		if(!await verifyCredentials()) {
			document.querySelector<HTMLDialogElement>('#loginDialog')?.showModal();
		}
	});
</script>

<div class="w-max m-auto py-20 flex flex-col h-screen justify-between">
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
