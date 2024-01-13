<script lang="ts">
	export let name: string;
	export let label: string;

	export let value: string;
</script>

<div class="flex flex-col items-start">
	<label class="text-text" for={name}>{label}</label>
	<input class="w-2/3 rounded-lg border-none bg-secondary-900 p-1 text-text" {name} bind:value />
</div>
