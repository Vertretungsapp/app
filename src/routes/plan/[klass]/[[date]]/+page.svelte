<script lang="ts">
	import type { PageData } from './$types';
	import PlanItemView from '../../../../components/Plan/PlanItemView.svelte';

	export let data: PageData;
</script>

<h1 class="text-center mt-20">Klasse <span class="text-accent">{data.klass}</span></h1>
<PlanItemView klass={data.klass} initDate={new Date(data.date)} />
<a href="/">zurück zum Homescreen</a>
