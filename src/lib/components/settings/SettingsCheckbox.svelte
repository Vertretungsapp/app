<script lang="ts">
	export let checked = false;
</script>

<input class="w-4" type="checkbox" bind:checked />
<span class="col-span-4">
	<slot />
</span>
