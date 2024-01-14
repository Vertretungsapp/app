<script lang="ts">
    import type { PageData } from './$types';
    import FilterItem from '$lib/components/plan/filter/FilterItem.svelte';
    import BackButton from '$lib/components/common/BackButton.svelte';

    export let data: PageData;
</script>

<div class="flex mb-2 w-full justify-start">
    <BackButton />
</div>


{#if data.plan}
    <ul>
        {#each data.timetable as lesson}
            <FilterItem lesson={lesson} filter={data.filter} credentials={data.credentials} />
        {/each}
    </ul>
{/if}