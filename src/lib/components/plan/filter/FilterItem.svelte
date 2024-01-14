<script lang="ts">
	import type { Filter } from '$lib/filter/filter';
    import type { Lesson, Credentials } from 'indiware-api';
    import {ignoreLesson, unignoreLesson} from '$lib/filter/filterHelper';

    export let credentials: Credentials;
    export let lesson: Lesson;
    export let filter: Filter;
    
    let checked = !filter.ignoredLessons.includes(lesson.id.toString());

    function handleClick() {
        if(checked) {
            ignoreLesson(credentials, filter.name, lesson.id)
        } else {
            unignoreLesson(credentials, filter.name, lesson.id)
        }
    }
</script>

<li>
    <input type="checkbox" bind:checked on:click={handleClick} />
    <span>{lesson.name}</span>
</li>