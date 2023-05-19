<script lang="ts">
    import type Lesson from "$lib/api/server/class/Lesson";
    import {toggleLesson} from "$lib/filter";
    import type {Filter} from "$lib/filter";

    export let checked = true;
    export let lesson: Lesson;
    export let filter: Filter;

    function toggle() {
        checked = !checked;
        toggleLesson(filter, lesson)
    }
</script>

<button class="staticBorder rounded-[7px] flex items-center gap-2 p-2" on:click={toggle}>
    <input type="checkbox" checked={checked}>
    <p class="text-sm">{lesson.subject} ({lesson.teacher})</p>
</button>