<script lang="ts">
	import CredentialsLink from '$lib/components/settings/CredentialsLink.svelte';
	import PlanLessonItem from '$lib/components/plan/PlanLessonItem.svelte';
	import { PlanType } from '$lib/api/planTypes';
	import Icon from '$lib/components/common/Icon.svelte';
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';
	import {onMount} from 'svelte';
	import { navigationStore } from '$lib/stores/navigationStore';

	const time = new Date();
	let greeting = 'Guten Nachmittag ☀️';

	if (time.getHours() < 12) {
		greeting = 'Guten Morgen ☕️';
	} else if (time.getHours() < 13) {
		greeting = 'Genieße dein Mittagessen 🍔';
	} else if (time.getHours() > 17) {
		greeting = 'Guten Abend 🌙';
	} else if (time.getHours() > 21) {
		greeting = 'Schlaf gut 🌕';
	}

	onMount(() => {
		$navigationStore.activeId = 0;
	});
</script>

<div class="flex justify-between">
	<h1 class="text-center">Vertretungsapp<span class="text-primary">.</span></h1>
	<CredentialsLink />
</div>

<p>{greeting}</p>

<!-- This is just prototyping for design -->

<div class="py-4"></div>

<h3 class="flex justify-between">
	Deine nächste Stunde
	<span class="text-primary">10a</span>
</h3>

<PlanLessonItem
	type={PlanType.SCHOOL_CLASS}
	lesson={{
		id: 1,
		startTime: new Date(),
		endTime: new Date(),
		order: 1,
		room: {
			value: 'A1.01',
			changed: false
		},
		subject: {
			value: 'DE',
			changed: false
		},
		teacher: {
			value: 'Mül',
			changed: false
		},
		schoolClass: '10a',
		info: null
	}}
/>

<div class="py-4"></div>

<h3>Deine Favoriten</h3>

<div class="grid grid-cols-3 gap-2">
	<a class="flex items-center justify-center rounded-lg bg-secondary-800 p-4 text-center" href="/">
		10a
	</a>

	<a class="flex items-center justify-center rounded-lg bg-secondary-800 p-4 text-center" href="/">
		JG11
	</a>

	<a class="flex items-center justify-center rounded-lg bg-secondary-800 p-4 text-center" href="/">
		Sca
	</a>

	<a class="flex items-center justify-center rounded-lg bg-secondary-800 p-4 text-center" href="/">
		Aula
	</a>

	<a class="flex items-center justify-center rounded-lg bg-secondary-950 p-4 text-center" href="/">
		<Icon icon={faPlus} scale={1.5} />
	</a>
</div>

<div class="absolute bottom-0 left-0 flex w-full justify-center">
	<a class="rounded-full bg-primary p-3" href="/">
		<Icon icon={faMagnifyingGlass} scale={1} />
	</a>
</div>
