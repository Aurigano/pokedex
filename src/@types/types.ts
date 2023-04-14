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
	image: string;
}

export interface IParamPokemonId {
	params: {
		pokemon: string;
	};
}

export type PokemonDetailsType = {
	id: string;
	number: string;
	name: string;
	weight: {
		minimum: string;
		maximum: string;
	};
	height: {
		minimum: string;
		maximum: string;
	};
	classification: string;
	types: string[];
	resistant: string[];
	weaknesses: string[];
	image: string;
};

export type EvolutionType = {
	image: string;
	number: string;
	pokemon: {
		id: string;
		name: string;
		evolutions: [
			{
				id: string;
				number: string;
				name: string;
				classification: string;
				types: string[];
				resistant: string[];
				weaknesses: string[];
				image: string;
			}
		];
	};
};
