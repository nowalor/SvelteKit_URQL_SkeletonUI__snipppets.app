<script lang="ts">
	import { getContextClient, queryStore } from '@urql/svelte';
	import { GetSnippets } from '$lib/graphql/queries';
	import SnippetItem from './snippet-item.svelte';

	const snippetsResponse = queryStore({
		client: getContextClient(),
		query: GetSnippets
	});
</script>

<div>
	{#if $snippetsResponse.fetching}
		<p>Loading...</p>
	{:else if $snippetsResponse.error}
		<p>Oopsie! {$snippetsResponse.error.message}</p>
	{:else}
		{#each $snippetsResponse.data.snippets as snippet}
			<SnippetItem {snippet} />
		{/each}
	{/if}
</div>
