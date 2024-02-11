<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	export let onClick: MouseEventHandler<HTMLButtonElement>;
</script>

<button class="bg-clickable col-span-5 rounded-lg p-1" on:click={onClick}>
	<slot />
</button>
