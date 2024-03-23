<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	const progress = tweened(0, {
		delay: 100,
		duration: 3000,
		easing: cubicOut
	});
	onMount(() => {
		progress.set(0.95);
	});
	onDestroy(() => {});
</script>

<div class="fixed left-0 top-0 z-50 h-1 w-screen" in:fade={{ delay: 250 }} out:fade>
	<div class="h-full w-[var(--width)] bg-primary-500" style={`--width: ${$progress * 100}%`} />
</div>
