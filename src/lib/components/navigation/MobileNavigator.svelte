<script>
	import MobileNavigatorItem from './MobileNavigatorItem.svelte';
	import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
	import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
	import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
	import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen';
	import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
</script>

<nav class="absolute bottom-0 w-full bg-background">
	<ul class="flex w-full items-center justify-between p-2">
		<MobileNavigatorItem href="/" icon={faHome} text="Home" />
		<MobileNavigatorItem href="/classes" icon={faPeopleGroup} text="Klassen" />
		<MobileNavigatorItem href="/rooms" icon={faDoorOpen} text="Räume" />
		<MobileNavigatorItem href="/teachers" icon={faUser} text="Lehrer" />
		<MobileNavigatorItem href="/options" icon={faGear} text="Optionen" />
	</ul>
</nav>
