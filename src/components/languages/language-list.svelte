<script lang="ts">
	import { GetLanguages } from '$lib/graphql/queries';
	import { error } from '@sveltejs/kit';
	import { getContextClient, queryStore } from '@urql/svelte';

	const languages = queryStore({
		client: getContextClient(),
		query: GetLanguages
	});
</script>

<div class="card w-1/2 pt-2">
	{#if $languages.fetching}
		...fetching
	{:else if $languages.error}
		TODO handle error..
	{:else}
		<div class="flex gap-2 justify-around p-4">
			{#each $languages.data.languages as language}
				<div class="variant-filled-surface py-2 w-44 text-xl flex justify-center rounded">
					{language.name}
				</div>
			{/each}
		</div>
	{/if}
</div>
