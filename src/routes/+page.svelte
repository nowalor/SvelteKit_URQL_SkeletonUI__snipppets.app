<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import SnippetList from '../components/snippets/snippet-list.svelte';
	import LanguageList from '../components/languages/language-list.svelte';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<LanguageList />
	<SnippetList />
	<CodeBlock code="<div>hello<div/>" />
</div>
