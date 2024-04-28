<script lang="ts">
	import Icon from '../common/Icon.svelte';
	import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons/faCircleArrowLeft';

	export let scale = 1.7;

	function goBack() {
		history.back();
	}
</script>

<button on:click={goBack}>
	<Icon
		icon={faCircleArrowLeft}
		{scale}
	/>
</button>
