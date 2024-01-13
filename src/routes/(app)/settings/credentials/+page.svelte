<script lang="ts">
    import { settingsStore } from '$lib/stores/settingsStore';
</script>

<h1>Zugangsdaten</h1>
<p class="text-xs text-secondary-500">
	Die Zugangsdaten werden von der Schule mitgeteilt. Sie entsprechen derer, welcher auch in der
	normalen VpMobil App benötigt werden.
</p>

<form class="grid grid-cols-3 py-8 items-center gap-y-2">
    <label>
        <span>Server</span>
    </label>

    <input type="text" class="col-span-2" value="stundenplan24.de" disabled />

    <label>
        <span>Schulnummer</span>
    </label>

    <input type="text" class="col-span-2" bind:value={$settingsStore.credentials.schoolnumber} />

    <label>
        <span>Benutzername</span>
    </label>

    <input type="text" class="col-span-2" bind:value={$settingsStore.credentials.username} />

    <label>
        <span>Passwort</span>
    </label>

    <input type="text" class="col-span-2" bind:value={$settingsStore.credentials.password} />
</form>

<div class="w-full flex justify-center">
    <a href="/" class="py-2 px-4 rounded-lg bg-primary">Speichern</a>
</div>

<style>
    input {
        @apply bg-secondary-900 rounded-md p-1 disabled:bg-secondary-950 disabled:text-secondary-400;
    }
</style>