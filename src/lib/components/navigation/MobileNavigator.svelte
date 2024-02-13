<script lang="ts">
	import MobileNavigatorItem from './MobileNavigatorItem.svelte';
	import Home from 'lucide-svelte/icons/home';
	import Users from 'lucide-svelte/icons/users';
	import DoorOpen from 'lucide-svelte/icons/door-open';
	import User from 'lucide-svelte/icons/user';
	import Cog from 'lucide-svelte/icons/cog';
</script>

<nav class="w-full bg-background">
	<ul class="flex w-full items-center justify-between p-2 pb-3">
		<MobileNavigatorItem href="/" icon={Home} text="Home" id={0} />
		<MobileNavigatorItem href="/plan/schoolClass" icon={Users} text="Klassen" id={1} />
		<MobileNavigatorItem href="/plan/room" icon={DoorOpen} text="Räume" id={2} />
		<MobileNavigatorItem href="/plan/teacher" icon={User} text="Lehrer" id={3} />
		<MobileNavigatorItem href="/settings" icon={Cog} text="Optionen" id={4} />
	</ul>
</nav>
