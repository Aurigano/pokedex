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
`
);

type PropType = {
	data?: PokemonPage;
	page?: string | undefined;
};

const Pokemons = (props: PropType) => {
	const { data, page } = props;
	return (
		<StyledDiv>
			<PageHandler page={page} />
			<div className="cardHolder">
				{data?.pokemons.map((pokemon) => (
					<PokemonCard data={pokemon} />
				))}
			</div>
			<PageHandler page={page} />
		</StyledDiv>
	);
};

export default Pokemons;
