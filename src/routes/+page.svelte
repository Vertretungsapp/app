<script lang="ts">
	import LoginAndSettings from '../components/LoginAndSettings/LoginAndSettings.svelte';
	import OverviewLinkButton from '../components/Home/OverviewLinkButton.svelte';
	import { faDoorOpen, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
	import FavoriteButtons from '../components/Home/Favorites/FavoriteButtons.svelte';
</script>

<div class="m-auto flex h-screen w-[80%] flex-col items-center justify-between py-20 md:w-1/2">
	<div class="w-max">
		<LoginAndSettings />
		<h1 class="text-center">Vertretungsapp<span class="text-accent">.</span></h1>
	</div>

	<FavoriteButtons />

	<div class="bottom-4 grid w-full grid-cols-3 gap-4">
		<OverviewLinkButton text="Klassen" href="/overview?type=class" icon={faPeopleGroup} />
		<div />
		<OverviewLinkButton text="Räume" href="/overview?type=room" icon={faDoorOpen} />
	</div>
</div>
