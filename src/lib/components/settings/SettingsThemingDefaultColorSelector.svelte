<script>
	import SettingsThemingDefaultColor from '$lib/components/settings/SettingsThemingDefaultColor.svelte';
	import { PRIMARY_COLOR } from '$lib/stores/settingsStore';
</script>

<div class="flex items-center justify-between gap-2">
	<SettingsThemingDefaultColor color={PRIMARY_COLOR} />
	<SettingsThemingDefaultColor color="#FF8800" />
	<SettingsThemingDefaultColor color="#00B300" />
	<SettingsThemingDefaultColor color="#FF00FF" />
	<SettingsThemingDefaultColor color="#f2e500" />
	<SettingsThemingDefaultColor color="#dd0b0b" />
	<SettingsThemingDefaultColor color="#9d11bc" />
	<SettingsThemingDefaultColor color="#FFFFFF" />
</div>
