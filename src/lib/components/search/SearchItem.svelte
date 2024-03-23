<script lang="ts">
	import { getHrefLink } from '$lib/common/planHelper.js';
	import Icon from '$lib/components/common/Icon.svelte';
	import type { SchoolClass } from 'indiware-api';
	import type { Room } from 'indiware-api';
	import type { Teacher } from 'indiware-api';
	import { parsePlanType, PlanType } from '$lib/api/planTypes';
	import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
	import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen';
	import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
	import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';

	function getIcon(type: PlanType) {
		switch (type) {
			case PlanType.SCHOOL_CLASS:
				return faPeopleGroup;

			case PlanType.ROOM:
				return faDoorOpen;

			case PlanType.TEACHER:
				return faUser;

			default:
				return faQuestion;
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
