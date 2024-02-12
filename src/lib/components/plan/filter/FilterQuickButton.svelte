<script lang="ts">
	import Icon from '$lib/components/common/Icon.svelte';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

	export let icon: IconDefinition
</script>

<button class="bg-clickable rounded-lg p-1 flex gap-2 items-center justify-center" on:click>
	<Icon icon={icon} />
	<slot />
</button>
