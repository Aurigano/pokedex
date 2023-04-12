import React from "react";
import { styled } from "@mui/material";
import { useQuery } from "@apollo/client";
import GET_ALL_POKEMONS from "@/queries/getAllPokemons";
import { PokemonPage } from "@/@types/types";

const StyledDiv = styled("div")(
	(props) => `
    display: flex;
    max-width: 1280px;
    margin: auto;
    height: 100%;
    background-color: red;
    flex-wrap:wrap;
    .pokediv {
        display: flex;
        // flex: 1;
        flex-basis: 25%;
        width: 25%;
        flex: 25%'
    }
`
);

type PropType = {
	data?: PokemonPage;
};

const Pokemons = (props: PropType) => {
	const { data } = props;
	console.log(data);
	return (
		<StyledDiv>
			{data?.pokemons.map((pokemon) => (
				<div className="pokediv">
					{pokemon.number}
					{pokemon.name}
				</div>
			))}
		</StyledDiv>
	);
};

export default Pokemons;
