<script lang="ts">
	import Icon from '$lib/components/common/Icon.svelte';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

	export let icon: IconDefinition;
</script>

<button class="bg-clickable flex items-center justify-center gap-2 rounded-lg p-1" on:click>
	<Icon {icon} />
	<slot />
</button>
