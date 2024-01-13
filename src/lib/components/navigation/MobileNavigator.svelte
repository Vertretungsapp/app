<script lang="ts">
	import MobileNavigatorItem from './MobileNavigatorItem.svelte';
	import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
	import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
	import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
	import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen';
	import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
</script>

<nav class="w-full bg-background">
	<ul class="flex w-full items-center justify-between p-2">
		<MobileNavigatorItem href="/" icon={faHome} text="Home" id={0} />
		<MobileNavigatorItem href="/plan/schoolClass" icon={faPeopleGroup} text="Klassen" id={1} />
		<MobileNavigatorItem href="/plan/room" icon={faDoorOpen} text="Räume" id={2} />
		<MobileNavigatorItem href="/plan/teacher" icon={faUser} text="Lehrer" id={3} />
		<MobileNavigatorItem href="#" icon={faGear} text="Optionen" id={4} />
	</ul>
</nav>
