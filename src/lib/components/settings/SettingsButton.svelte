<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	export let onClick: MouseEventHandler<HTMLButtonElement>;
</script>

<button class="rounded-lg bg-clickable p-1 col-span-5" on:click={onClick}>
	<slot />
</button>
