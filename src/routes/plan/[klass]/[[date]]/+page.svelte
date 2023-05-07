<script lang="ts">
	import type { PageData } from './$types';
	import PlanItemView from '../../../../components/Plan/PlanItemView.svelte';

	export let data: PageData;
</script>

<PlanItemView klass={data.klass} initDate={data.date ? new Date(data.date) : undefined} />
