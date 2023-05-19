<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import type { IconData } from 'svelte-awesome/components/Icon.svelte';

	export let icon: IconData;
	export let onClick: () => void = () => null;

	function handleClick() {
		onClick();
	}
</script>

<div
	class="staticBorder aspect-square cursor-pointer rounded-[7px] p-1"
	on:keypress={() => {}}
	on:click={handleClick}
>
	<Icon data={icon} scale="1.5" />
</div>
