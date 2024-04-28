<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import BackButton from '$lib/components/navigation/BackButton.svelte';
	import { onMount } from 'svelte';
	import { format } from 'date-fns';
	import Icon from '$lib/components/common/Icon.svelte';
	import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
	import FreeRoomItem from '$lib/components/search/free/room/FreeRoomItem.svelte';

	export let data: PageData;

	// Notes:
	// The data.rooms contains a Map of rooms with the lessons which are between the start and end time
	// Start and end time are defined as search parameters in the URL, and should be a timestamp in milliseconds
	// The end time can be optional, if not present, all lessons after the start time are included

	let dateValue: string;
	let startValue: string;
	let endValue: string | null;

	let startTime: Date;

	onMount(() => {
		const url = new URL(window.location.href);
		const start = url.searchParams.get('start');
		const end = url.searchParams.get('end');

		if (start) {
			dateValue = format(new Date(parseInt(start)), 'yyyy-MM-dd');
			startValue = new Date(parseInt(start)).toTimeString().slice(0, 5);
			startTime = new Date(parseInt(start));
		}

		if (end) {
			endValue = new Date(parseInt(end)).toTimeString().slice(0, 5);
		}
	});

	function parseTime(str: string) {
		const [hours, minutes] = str.split(':');
		const d = new Date(dateValue);
		d.setHours(parseInt(hours), parseInt(minutes));
		return d;
	}

	function onSubmit(e: SubmitEvent) {
		e.preventDefault();

		const start = parseTime(startValue).getTime();
		startTime = parseTime(startValue);
		const end = endValue && parseTime(endValue).getTime();

		const url = new URL(window.location.href);
		url.searchParams.set('start', start.toString());
		if (end) url.searchParams.set('end', end.toString());
		else url.searchParams.delete('end');

		goto(url.toString(), {
			invalidateAll: true,
			replaceState: true
		});
	}
</script>

<div class="flex h-full flex-col">
	<div class="flex items-center gap-2">
		<BackButton />
		<h1>Freien Raum finden</h1>
	</div>

	<form on:submit={onSubmit} class="mt-4 grid grid-cols-2 items-center gap-2">
		<div class="col-span-2 flex flex-col">
			<label for="date">Datum</label>
			<!--	  "appearance-none min-h-8" is a webkit workaround, thanks apple		-->
			<input
				id="date"
				type="date"
				class="min-h-8 w-full appearance-none"
				required
				bind:value={dateValue}
			/>
		</div>

		<label for="startTime">Uhrzeit ab</label>
		<input
			id="startTime"
			type="time"
			class="min-h-8 w-full appearance-none"
			required
			bind:value={startValue}
		/>

		<label for="endTime">Uhrzeit bis (optional)</label>
		<input id="endTime" type="time" class="min-h-8 w-full appearance-none" bind:value={endValue} />

		<button
			type="submit"
			class="bg-clickable col-span-2 flex items-center justify-center gap-2 rounded-lg p-1"
		>
			<Icon icon={faSearch} />
			Suchen
		</button>
	</form>

	<div class="mt-4 flex max-h-full flex-col gap-2 overflow-y-auto">
		{#each data.rooms as { room, lessons }}
			<FreeRoomItem {room} {lessons} {startTime} />
		{/each}

		{#if data.planEmpty}
			<p class="text-disabled text-center">Es wurde kein Plan für das Datum gefunden.</p>
		{/if}
	</div>
</div>
