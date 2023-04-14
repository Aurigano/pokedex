import { gql } from "@apollo/client";

const GET_SINGLE_POKEMON = gql`
	query pokemon($id: String, $name: String) {
		pokemon(id: $id, name: $name) {
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
			image
		}
	}
`;

export default GET_SINGLE_POKEMON;

/**
 *  fleeRate
	maxCP
	maxHP
 */
