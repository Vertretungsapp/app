<script>
	import LoginAndSettingsIcon from './LoginAndSettingsIcon.svelte';
	import { faGear, faInfoCircle, faKey } from '@fortawesome/free-solid-svg-icons';
	import LoginDialog from '../Login/LoginDialog.svelte';
	import SettingsDialog from '../Settings/SettingsDialog.svelte';
	import InfoDialog from '../Home/InfoDialog.svelte';
</script>

<LoginDialog />
<SettingsDialog />
<InfoDialog />

<div class="flex items-center justify-end gap-2">
	<LoginAndSettingsIcon
		icon={faKey}
		onClick={() => document.querySelector('#loginDialog').showModal()}
	/>
	<LoginAndSettingsIcon
		icon={faGear}
		onClick={() => document.querySelector('#settingsDialog').showModal()}
	/>
	<LoginAndSettingsIcon
		icon={faInfoCircle}
		onClick={() => document.querySelector('#infoDialog').showModal()}
	/>
</div>
