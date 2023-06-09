import { gql } from "@apollo/client";

const GET_ALL_POKEMONS = gql`
	query pokemons($first: Int!) {
		pokemons(first: $first) {
			id
			number
			name
			types
			image
		}
	}
`;

export default GET_ALL_POKEMONS;

// Capable Query for future reference

/**
 * query pokemons($first: Int!) {
		pokemons(first: $first) {
			id
			number
			name
			weight {
				minimum
				maximum
			}
			height {
				minimum
				maximum
			}
			classification
			types
			resistant
			weaknesses
			fleeRate
			maxCP
			maxHP
			image
		}
	}
 */
