<script lang="ts">
	import Icon from '$lib/components/common/Icon.svelte';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

	export let icon: IconDefinition;
	export let href: string;
</script>

<a {href} target="_blank">
	<Icon {icon} scale={1.5} />
</a>
