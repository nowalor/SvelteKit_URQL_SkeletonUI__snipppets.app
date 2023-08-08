<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';

	export let snippet: {
		id: number;
		content: string;
		programmingLanguage: any;
	};
</script>

<div>
	{snippet.id}
	<div>
		<CodeBlock code={snippet.content} language={snippet.programmingLanguage.name} />
	</div>
</div>
