<script lang="ts">
	import { GetLanguages } from '$lib/graphql/queries';
	import { error } from '@sveltejs/kit';
	import { getContextClient, queryStore } from '@urql/svelte';

	const languages = queryStore({
		client: getContextClient(),
		query: GetLanguages
	});
</script>

<div>
	{#if $languages.fetching}
		...fetching
	{:else if $languages.error}
		TODO handle error..
	{:else}
		{#each $languages.data.languages as language}
			<div>{language.name}</div>
		{/each}
	{/if}
</div>
