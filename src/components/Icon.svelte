<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
	import Fa from 'svelte-fa';

	export let icon: IconDefinition;
	export let size: string;
</script>

<Fa {icon} {size} />
