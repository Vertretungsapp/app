<script lang="ts">
	export let checked = false;
	export let fullWidth = false;
</script>

<input class="scale-125" type="checkbox" bind:checked />
<span class={fullWidth ? 'col-span-9' : 'col-span-4'}>
	<slot />
</span>
