<script lang="ts">
	import Icon from '$lib/components/common/Icon.svelte';
	import type { ComponentType } from 'svelte';
	import type {Icon as IconDef} from "lucide-svelte"

	export let icon: ComponentType<IconDef>;
</script>

<button class="bg-clickable flex items-center justify-center gap-2 rounded-lg p-1" on:click>
	<Icon {icon} />
	<slot />
</button>
