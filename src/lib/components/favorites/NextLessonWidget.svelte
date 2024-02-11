<script lang="ts">
	import { setPrimary, type Favorite, type Favorites } from '$lib/favorites/favorites';
	import type { PlannedLesson } from 'indiware-api';
	import PlanLessonItem from '../plan/PlanLessonItem.svelte';
	import { getNextLessons } from '$lib/cache/cacheHelper';
	import { page } from '$app/stores';
	import { getHrefLink } from '$lib/common/planHelper';
	import Icon from '../common/Icon.svelte';
	import { faFaceSurprise } from '@fortawesome/free-solid-svg-icons/faFaceSurprise';

	export let primary: Favorite | undefined | null = undefined;
	export let favorites: Favorites;

	let lessons: PlannedLesson[] = [];

	$: if (primary) {
		lessons = primary
			? getNextLessons($page.data.credentials, primary.name, primary.type)
			: [];
	}

	function selectEventHandler(e: any) {
		primary = favorites.favs.find((fav) => fav.name === e.target.value);
		if (primary) setPrimary(primary);
	}
</script>

<h3 class="flex justify-between items-center">
	Deine nächsten Stunden

	<select class="bg-background text-primary-500 p-0" on:change={selectEventHandler}>
		{#each favorites.favs as fav}
			<option value={fav.name} selected={primary?.name === fav.name}>{fav.name}</option>
		{/each}

		{#if !primary}
			<option value="???" selected>???</option>
		{/if}
	</select>
</h3>

{#if primary}
	<a href={getHrefLink(primary.name, primary.type)}>
		<div class="max-h-[20%] space-y-2 overflow-y-auto">
			{#if lessons.length !== 0}
				{#each lessons as lesson}
					{#key lesson.id}
						<PlanLessonItem type={primary.type} {lesson} />
					{/key}
				{/each}
			{:else}
				<div class="flex items-center gap-2 text-sm text-disabled">
					<span>Du hast heute keine weiteren Stunden mehr!</span>
					<Icon icon={faFaceSurprise} />
				</div>
			{/if}
		</div>
	</a>
{:else}
	<p class="text-disabled text-sm">
		Du hast noch keinen Favoriten ausgewählt, nutze dazu die drei blauen Fragezeichen.
	</p>
{/if}
