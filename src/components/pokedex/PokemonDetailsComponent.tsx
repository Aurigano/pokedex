import React from "react";
import { styled, Button, IconButton } from "@mui/material";
import { PokemonDetailsType } from "@/@types/types";
import PokemonType from "../PokemonType";
import EvolutionButton from "./EvolutionButton";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import { useRouter } from "next/router";
import Link from "next/link";

const StyledDiv = styled("div")(
	(props) => `
    display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
	padding: 10px;
    height: 100%;
    background: #E9E9E9 url(/container_bg.png);
    .pokedexShadowProvider {
        filter: drop-shadow(rgba(149, 157, 165, 0.4) 0px 8px 24px);
    }
    .pokedexWrapper {
        background: white;
        clip-path: polygon(0 0,100% 0,100% 100%,76.00px 100%,0 calc(100% - 76.00px));
        margin: 20px 15px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        position: relative;
        overflow-clip-margin: border-box;
    }
    .Head {
        // position: relative;
        display: flex;
        justify-content: space-between;
        font-size: 36px;
        align-items: center;
        margin: 30px 0;
    }
    .home-btn {
        margin-right: 20px;
        padding: 0;
        height: 50px;
        display: flex;
        align-items: center
    }
    .home {
        margin-right: 9px;
        width: 32px;
        :hover {
            margin-right: 0;
            width: 50px;
        }
    }
    .prev-btn {
        // position: absolute;
        // top: 2px;
        // left: 0;
        padding: 6px 10px;
		color: #212121;
		text-decoration: none;
		text-transform: capitalize;
		font-family: 'Inter';
		font-size: 16px;
        margin-left: 10px;
        padding: 5px 15px;
        border-radius: 20px;
	}
    .prev-btn:hover {
        // border: 1px solid black;
        box-shadow:inset 0px 0px 0px 1px black;
    }
    .poke-details {
        display: flex;
    }
    @media only screen and (max-width: 800px) {
        .poke-details {
            display: flex;
            flex-direction: column;
        }
        .poke-image {
            width: auto !important;
            height: auto !important;
        }
        .poke-stats {
            display: block !important;
        }
        margin-top: 370px;
    }
    @media only screen and (max-width: 500px) {
        .poke-details {
            display: flex;
            flex-direction: column;
        }
        .poke-image {
            width: 200px !important;
            height: 200px !important;
        }
        .poke-info {
            justify-content: center !important; 
        }
        .poke-stats {
            display: block !important;
        }
        margin-top: 370px;
    }
	.image-div {
        flex:1;
        display: flex;
        margin: 10px;
        border-radius: 5px;
        justify-content: center;
    }
    .poke-image {
        width: 450px;
        height: 450px;
        max-width: 450px;
        max-height: 450px;
        object-fit: contain;
        border-radius: 5px;
        background: white;
        padding: 30px;
    }
    .poke-info {
        flex:1;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .poke-nomenclature {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 100%;
        gap: 5px;
    }
    .name {
        font-size: 36px;
        // color: #212121;
        color: #10222F;
    }
    .number {
        font-size: 12px;
        // color: #878787;
        color: #9199AC;
        font-weight: 700;
    }
    .class-label{
        color: #9199AC;
        font-weight: 300;
    }
    .poke-div {
        border-radius: 5px;
        margin: 10px;
        // padding: 12px;
        flex-basis: calc(50% - 20px);
        height: 100px;
        // box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
        min-width: 225px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .grey-pill {
        background-color: #F5F7FD;
        padding: 10px;
        width: calc(80%);
        text-align: center;
        border-radius: 20px;
    }
    .box-head {
        font-weight: 700;
        color: #10222F;
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 10px;
    }
    .box-label {
        font-size: 16px;
        font-weight: 400;
    }
    .poke-stats {
        display: flex;
        margin: 0 10px;
        column-gap: 10px;
    }
    .poke-type {
        flex:1;
    }
    .type-heading {
        font-size: 20px;
        margin: 20px 0 20px;
        color: #212121;
        font-weight: 500;
        text-align: center;
    }
    .evolute-btn {
        margin: 36px;
        padding: 12px;
        flex-basis: 100%;
        filter: drop-shadow(rgba(149, 157, 165, 0.4) 0px 8px 24px);
    }
    .pokeball {
        filter: invert(30%) grayscale(1);
        position: absolute;
        top: -69px;
        right: -55px;
        z-index: -1;
        opacity: 0.1;
    }
`
);

const PokemonDetailsComponent = ({
	data,
	loading,
	error,
}: {
	data: PokemonDetailsType;
	loading: string;
	error: { message: string } | undefined;
}) => {
	const router = useRouter();
	const {
		name,
		number,
		image,
		height,
		weight,
		classification,
		types,
		weaknesses,
		resistant,
	} = data || {};
	return (
		<StyledDiv>
			{loading && <p className="name">Loading...</p>}
			{error && <p className="name">{error.message}</p>}
			<div className="pokedexShadowProvider">
				<div className="pokedexWrapper">
					<div className="Head">
						<Button
							onClick={() => router.back()}
							// disabled={!(pageNumber - 1)}
							startIcon={<ArrowBackIosNewSharpIcon />}
							className="prev-btn"
						>
							Previous
						</Button>
						<Link
							href={{
								pathname: `/`,
							}}
							aria-label="home"
							className="home-btn"
						>
							<img
								src="/home-outline.png"
								alt="home"
								className="home"
								onMouseOver={(e) =>
									(e.currentTarget.src = "/home.png")
								}
								onMouseOut={(e) =>
									(e.currentTarget.src = "/home-outline.png")
								}
							/>
						</Link>
					</div>
					<div className="poke-details">
						<div className="image-div">
							<img
								src={image}
								alt={name}
								className="poke-image"
							/>
						</div>
						<div className="poke-info">
							<div className="poke-nomenclature">
								<h2 className="number">#{number}</h2>
								<h2 className="name">{name}</h2>
								<p className="class-label">{classification}</p>
							</div>

							<div className="poke-height poke-div">
								<p className="box-head">Height</p>
								<div className="grey-pill">
									<p className="box-label">
										{height?.minimum}&nbsp;-&nbsp;
										{height?.maximum}
									</p>
								</div>
							</div>
							<div className="poke-weight poke-div">
								<p className="box-head">Weight</p>
								<div className="grey-pill">
									<p className="box-label">
										{weight?.minimum}&nbsp;-&nbsp;
										{weight?.maximum}
									</p>
								</div>
							</div>
							<div className="evolute-btn">
								<EvolutionButton
									id={data?.id}
									number={data?.number}
									image={data?.image}
								/>
							</div>
						</div>
					</div>
					<div className="poke-stats">
						<div className="poke-type">
							<h3 className="type-heading">Types</h3>
							<PokemonType data={types} size="large" />
						</div>
						<div className="poke-type">
							<h3 className="type-heading">Weaknesses</h3>
							<PokemonType data={weaknesses} size="large" />
						</div>
						<div className="poke-type">
							<h3 className="type-heading">Resistant</h3>
							<PokemonType data={resistant} size="large" />
						</div>
					</div>
					<img
						src="/pokeball.png"
						alt="pokeball"
						className="pokeball"
					/>
				</div>
			</div>
		</StyledDiv>
	);
};

export default PokemonDetailsComponent;
