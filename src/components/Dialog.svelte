<script lang="ts">
	export let id: string;

	function getDialog(): HTMLDialogElement {
		const dialog = document.querySelector(`#${id}`);
		if (!dialog) throw new Error(`Dialog with id ${id} not found`);
		return dialog as HTMLDialogElement;
	}
</script>

<dialog {id} class="dynborder rounded-[7px] p-8 text-text">
	<slot element={getDialog()} />
</dialog>

<style>
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(5px);
	}
</style>
