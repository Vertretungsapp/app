<script lang="ts">
	import LoginAndSettings from '../components/LoginAndSettings/LoginAndSettings.svelte';
	import { onMount } from 'svelte';
	import OverviewLinkButton from '../components/Home/OverviewLinkButton.svelte';
	import { faDoorOpen, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
	import { verifyCredentials } from '$lib/api/session';
	import FavoriteButtons from '../components/Home/Favorites/FavoriteButtons.svelte';

	onMount(async () => {
		if (!(await verifyCredentials())) {
			document.querySelector<HTMLDialogElement>('#loginDialog')?.showModal();
		}
	});
</script>

<div class="m-auto flex h-screen w-[80%] flex-col items-center justify-between py-20 md:w-1/2">
	<div class="w-max">
		<LoginAndSettings />
		<h1 class="text-center">Vertretungsapp<span class="text-accent">.</span></h1>
	</div>

	<FavoriteButtons />

	<div class="bottom-4 grid w-full grid-cols-3 gap-4">
		<OverviewLinkButton text="Klassen" href="/overview/class" icon={faPeopleGroup} />
		<div />
		<!--		<OverviewLinkButton text="Lehrer" href="/overview/teacher" icon={faPeopleGroup} />-->
		<OverviewLinkButton text="Räume" href="/overview/room" icon={faDoorOpen} />
	</div>
</div>
