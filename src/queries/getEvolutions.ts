import { gql } from "@apollo/client";

const GET_EVOLUTION = gql`
	query pokemon($id: String, $name: String) {
		pokemon(id: $id, name: $name) {
			id
			name
			evolutions {
				id
				number
				name
				classification
				types
				resistant
				weaknesses
				fleeRate
				maxCP
				evolutions {
					name
				}
				maxHP
				image
			}
		}
	}
`;

export default GET_EVOLUTION;
