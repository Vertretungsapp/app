<script lang="ts">
    import {onMount} from "svelte";

    onMount(() => {
        localStorage.setItem('alphaEnabled', 'true')
        window.location.href = '/'
    })
</script>