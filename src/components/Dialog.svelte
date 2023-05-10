<script lang="ts">
	export let id: string;
</script>

<dialog {id} class="bg-background text-text border-accent border-2 rounded-[7px] p-8">
	<slot />
</dialog>

<style>
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(5px);
	}
</style>
