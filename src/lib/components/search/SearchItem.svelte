<script lang="ts">
	import { getHrefLink } from '$lib/common/planHelper.js';
	import Icon from '$lib/components/common/Icon.svelte';
	import type { SchoolClass } from 'indiware-api';
	import type { Room } from 'indiware-api';
	import type { Teacher } from 'indiware-api';
	import { parsePlanType, PlanType } from '$lib/api/planTypes';
	import Users from 'lucide-svelte/icons/users';
	import DoorOpen from 'lucide-svelte/icons/door-open';
	import User from 'lucide-svelte/icons/user';
	import HelpCircle from 'lucide-svelte/icons/help-circle';

	function getIcon(type: PlanType) {
		switch (type) {
			case PlanType.SCHOOL_CLASS:
				return Users;

			case PlanType.ROOM:
				return DoorOpen;

			case PlanType.TEACHER:
				return User;

			default:
				return HelpCircle;
		}
	}

	export let item: Omit<SchoolClass | Room | Teacher, 'plannedLessons'>;
</script>

<a
	class="bg-clickable flex w-full gap-2 rounded-lg p-2"
	href={getHrefLink(item.name, parsePlanType(item.type))}
>
	<Icon icon={getIcon(parsePlanType(item.type))} scale={1.5} />
	<span>{item.name}</span>
</a>
