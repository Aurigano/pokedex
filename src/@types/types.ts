export type PokemonPage = {
	pokemons: IPokemon[];
};

export interface IPokemon {
	__typename: string;
	id: string;
	number: string;
	name: string;
	weight: {
		minimum: string;
		maximum: string;
	};
	height: [Object];
	classification: string;
	types: string[];
	resistant: string[];
	weaknesses: string[];
	fleeRate: number;
	maxCP: number;
	maxHP: number;
	image: string;
}
