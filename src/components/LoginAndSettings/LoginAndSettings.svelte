<script>
	import LoginAndSettingsIcon from './LoginAndSettingsIcon.svelte';
	import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
	import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
	import LoginDialog from '../Login/LoginDialog.svelte';
	import SettingsDialog from "../Settings/SettingsDialog.svelte";
</script>

<LoginDialog />
<SettingsDialog />

<div class="flex items-center justify-end gap-2">
	<LoginAndSettingsIcon
		icon={faKey}
		onClick={() => document.querySelector('#loginDialog').showModal()}
	/>
	<LoginAndSettingsIcon icon={faGear} onClick={() => document.querySelector('#settingsDialog').showModal()} />
</div>
