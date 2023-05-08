<script lang="ts">
    function closeModal() {
        document.querySelector('#settingsDialog').close();
    }
</script>

<dialog id="settingsDialog" class="bg-background text-text border-accent border-2 rounded-[7px] p-8">
    <h1 class="my-4 text-center">Einstellungen</h1>
    <div class="flex flex-col gap-2 items-center my-8">
        <input type="button" value="Ich bin ein Button" />
    </div>
    <input type="button" value="Schließen" on:click={closeModal} />
</dialog>

<style>
    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(5px);
    }

    input {
        width: 100%;
    }
</style>
