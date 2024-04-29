<script lang="ts">
	import { settingsStore } from '$lib/stores/settingsStore';

	export let color: string;

	function onClick() {
		$settingsStore.primaryColor = color;
	}
</script>

<button class="aspect-square w-7 rounded-full" style="background-color: {color}" on:click={onClick}
></button>
