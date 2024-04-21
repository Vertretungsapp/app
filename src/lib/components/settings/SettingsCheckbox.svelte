<script lang="ts">
	export let checked = false;
</script>

<input class="scale-125" type="checkbox" bind:checked />
<span class="col-span-4">
	<slot />
</span>
