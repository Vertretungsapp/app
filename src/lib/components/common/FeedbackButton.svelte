<script lang="ts">
	import Icon from '$lib/components/common/Icon.svelte';
	import { faComment } from '@fortawesome/free-solid-svg-icons/faComment';
	import { twMerge } from 'tailwind-merge';
	import { fade, fly } from 'svelte/transition';
	import { faX } from '@fortawesome/free-solid-svg-icons';
	import { sendFeedback } from '@sentry/sveltekit';
	import toast from 'svelte-french-toast';

	let open = false;

	function onSubmit(event: SubmitEvent) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		sendFeedback({
			name: formData.get('name') as string,
			email: formData.get('email') as string,
			message: formData.get('message') as string
		})
			.then(() => {
				open = false;
				toast.success('Feedback wurde erfolgreich versendet!');
			})
			.catch(() => {
				toast.error('Feedback konnte nicht versendet werden. Bitte versuche es später erneut.');
			});
	}
</script>

<button
	class="bg-clickable flex h-8 w-8 items-center justify-center rounded-lg p-2"
	on:click={() => (open = !open)}
>
	<Icon icon={faComment} scale={1.1} />
</button>

{#if open}
	<div
		transition:fade={{ duration: 150 }}
		class="fixed left-0 top-0 z-50 flex h-screen w-full items-end backdrop-blur-sm"
	>
		<div
			transition:fly={{ y: 200, duration: 500 }}
			class={twMerge('bg-clickable w-full rounded-t-xl p-4')}
		>
			<div class="flex w-full justify-end pb-2">
				<button on:click={() => (open = !open)}>
					<Icon icon={faX} scale={1} />
				</button>
			</div>
			<h2>Dein Feedback ist essentiell!</h2>
			<p class="text-sm">
				Helfe mit, die App weiter zu verbessern. Dein Feedback geht direkt an die Entwickler und
				hilft uns, die App für deine Bedürfnisse zu perfektionieren. Also: Worauf wartest du?
			</p>

			<form on:submit|preventDefault={onSubmit} class="w-full py-2">
				<label for="name">Dein Name</label>
				<input name="name" id="name" class="mb-2 w-full p-2" placeholder="Max" required />

				<label for="email">Deine E-Mail (wird für Rückfragen benötigt)</label>
				<input
					name="email"
					id="email"
					type="email"
					class="mb-2 w-full p-2"
					placeholder="max@mustermann.de"
					required
				/>

				<label for="message">Dein Feedback</label>
				<textarea
					name="message"
					id="message"
					class="bg-display mb-2 h-32 w-full resize-none rounded-lg p-2"
					placeholder="Was möchtest du uns mitteilen?"
					required
				/>

				<button type="submit" class="w-full rounded-lg bg-primary-500 p-2 text-white">
					Feedback absenden
				</button>
			</form>
		</div>
	</div>
{/if}
