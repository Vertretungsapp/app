<script lang="ts">
	import Icon from '$lib/components/common/Icon.svelte';
	import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
</script>

<a
	class="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary-900 p-2"
	href="/settings/credentials"
>
	<Icon icon={faKey} scale={1.1} />
</a>
