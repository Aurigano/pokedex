import React from "react";
import Link from "next/link";
import { styled } from "@mui/material";
import { IPokemon } from "@/@types/types";
import PokemonType from "./PokemonType";

type PropType = {
	data: IPokemon;
};

const StyledDiv = styled("div")(
	(props) => `
    @keyframes bounce {
        0%, 100% {
            -webkit-transform: translateY(0);
            -ms-transform:     translateY(0);
            transform:         translateY(0)
        }
        60% {
            -webkit-transform: translateY(-5px);
            -ms-transform:     translateY(-5px);
            transform:         translateY(-5px)
        }
        // 60% {
        //     -webkit-transform: translateY(-15px);
        //     -ms-transform:     translateY(-15px);
        //     transform:         translateY(-15px)
        // }
    }

    @keyframes slideInLeft {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0);
        }
    }

    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    width: 25%;
    flex: 23%;
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
    animation-duration: 200ms;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    .poke-image {
        object-fit: contain;
        height: 205px;
        width: 205px;
        align-self: center;
        margin-bottom: 20px;
    }
    .poke-number {
        color: #919191;
        font-size: 12px;
        font-weight: 500;
        line-height: 125%;
        padding-top: 2px;
        margin: 8px 0;
    }
    .poke-name {
        font-size: 24px;
        color: #313131;
        margin: 0 0 5px;
    }
    .link {
        text-decoration: none;
        display: flex;
        flex-direction: column;
    }

    :hover {
        cursor: pointer;
        animation-name: bounce;
        -moz-animation-name: bounce;
    }

   
`
);

const PokemonCard = ({ data }: PropType) => {
	const PokemonName = data?.name;
	const PokemonNumber = data?.number;
	const ImageUrl = data?.image;
	const Type = data?.types;

	return (
		<StyledDiv>
			<Link
				href={{
					pathname: `/pokedex/${data?.id}`,
					// query: { id: PokemonName },
				}}
				className="link"
			>
				<img
					src={ImageUrl}
					alt={`${PokemonName}`}
					className="poke-image"
				/>
				<div className="poke-number">{`#${PokemonNumber}`}</div>
				<div className="poke-name">{PokemonName}</div>
				<div className="poke-type">
					<PokemonType data={Type} />
				</div>
			</Link>
		</StyledDiv>
	);
};

export default PokemonCard;
