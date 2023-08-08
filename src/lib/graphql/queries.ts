import { gql } from '@urql/svelte';

const GetSnippets = gql`
	query {
		snippets {
			id
			content
			user {
				id
				email
				username
				name
			}
			programmingLanguage {
				id
				name
			}
		}
	}
`;

export { GetSnippets };
