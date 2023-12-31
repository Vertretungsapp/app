<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
	import Icon from 'svelte-awesome';

	export let icon: IconDefinition;
	export let size: number = 1;
</script>

<Icon data={icon} scale={size} />
