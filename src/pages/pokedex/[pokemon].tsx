import React from "react";
import { useRouter } from "next/router";
import PokemonDetailsComponent from "../../components/pokedex/PokemonDetailsComponent";
import client from "@/utils/apollo-client";
import GET_SINGLE_POKEMON from "@/queries/getSinglePokemon";
import GET_ALL_POKEMONS from "@/queries/getAllPokemons";
import { IParamPokemonId, IPokemon } from "@/@types/types";

const PokemonDetails = (props: any) => {
	const router = useRouter();
	const { pokemon } = router.query;
	const { data, loading, error } = props;
	return (
		<>
			<PokemonDetailsComponent
				data={data?.pokemon}
				loading={loading}
				error={error}
			/>
		</>
	);
};

export default PokemonDetails;

export async function getStaticProps(context: any) {
	const { params } = context;
	// Get external data from the file system, API, DB, etc.
	const { data } = await client.query({
		query: GET_SINGLE_POKEMON,
		variables: {
			id: params.pokemon.toString(),
		},
	});

	return {
		props: {
			data,
		},
	};
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: GET_ALL_POKEMONS,
		variables: {
			first: 20, // Statically rendering first 20 pokemon data at build time
		},
	});

	const paths: IParamPokemonId[] = [];
	data.pokemons.forEach((pokemon: IPokemon) => {
		const ParamObject = {
			params: {
				pokemon: pokemon.id,
			},
		};
		paths.push(ParamObject);
	});
	return {
		paths,
		fallback: true,
	};
}
