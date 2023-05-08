<script lang="ts">
    import {Icon} from 'svelte-awesome';
    import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
    import type {Plan} from "$lib/api/server/class/Plan";
    import {PlanType} from "$lib/api/server/class/Plan";

    export let data: { plans: Plan[], planType: PlanType };

    let overviewHeaderText: string;
    switch (data.planType) {
        case PlanType.CLASS:
            overviewHeaderText = "Klassen";
            break;
        case PlanType.ROOM:
            overviewHeaderText = "Raum";
            break;
        default:
            overviewHeaderText = "Unbekannt";
            break;
    }
</script>

<div class="flex flex-col gap-4 h-screen max-h-screen">
    <h1 class="text-center mt-20"><span class="text-accent">{overviewHeaderText}</span>-Übersicht</h1>
    <div class="grid grid-cols-3 items-center gap-4 p-4 h-full overflow-y-scroll">
        {#each data.plans as plan}
            <a
                    class="w-full p-4 border-[3px] border-accent rounded-[7px] text-center"
                    href={`/plan/${plan.short}`}>{plan.short}</a
            >
        {/each}
    </div>
    <div class="w-full h-20 px-8 pb-4 bg-background flex justify-center items-center">
        <a class="cursor-pointer" href="/">
            <Icon data={faHome} scale="2" />
        </a>
    </div>
</div>
