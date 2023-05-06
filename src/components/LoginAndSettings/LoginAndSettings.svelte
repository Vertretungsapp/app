<script>
	import LoginAndSettingsIcon from './LoginAndSettingsIcon.svelte';
	import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
	import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
	import LoginDialog from '../Login/LoginDialog.svelte';
</script>

<LoginDialog />

<div class="flex items-center justify-end gap-2">
	<LoginAndSettingsIcon
		icon={faKey}
		onClick={() => document.querySelector('#loginDialog').showModal()}
	/>
	<LoginAndSettingsIcon icon={faGear} />
</div>
