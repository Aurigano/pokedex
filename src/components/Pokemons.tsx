import React from "react";
import { styled } from "@mui/material";
import { useQuery } from "@apollo/client";
import GET_ALL_POKEMONS from "@/queries/getAllPokemons";
import { PokemonPage } from "@/@types/types";
import PokemonCard from "./PokemonCard";
import PageHandler from "./PageHandler";

const StyledDiv = styled("div")(
	(props) => `
    display: flex;
	flex-direction: column;
    max-width: 1280px;
    margin: auto;
	padding: 10px;
    height: 100%;
    background: #E9E9E9 url(/container_bg.png);
	.cardHolder {
		display: flex;
		flex-wrap:wrap;
		padding: 10px 0;
	}
    .pokediv {
        display: flex;
        flex-basis: 25%;
        width: 25%;
        flex: 25%;
    }
	.header {
		max-width: 400px;
		margin: auto;
		display: flex;
		align-items: flex-end;
	}
	.ball {
		max-width: 75px;
    	max-height: 75px;
	}
	.pokedex {
		max-width: 300px;
	}
`
);

type PropType = {
	data?: PokemonPage;
	page?: string | undefined;
};

const Pokemons = (props: PropType) => {
	const { data, page } = props;
	if (!data) return <>Loading...</>;
	return (
		<StyledDiv>
			<div className="header">
				<img src="/ball.webp" alt="ball" className="ball" />
				<img src="/pokedex.webp" alt="pokedex" className="pokedex" />
			</div>
			<PageHandler page={page} />
			<div className="cardHolder">
				{data?.pokemons?.map((pokemon) => (
					<PokemonCard data={pokemon} key={`${pokemon.name}`} />
				))}
			</div>
			<PageHandler page={page} />
		</StyledDiv>
	);
};

export default Pokemons;
